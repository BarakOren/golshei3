import { SITE } from './site'

// GA4 and Mixpanel, with the IDs in site.js. They run only on the live domain
// (www.metalsurfers.co.il), so local builds, staging and Vercel previews send nothing.
// - GA4 through gtag. Its enhanced measurement counts page views, including page changes inside
//   the site.
// - Mixpanel's core SDK (no session recording), loaded on demand so the main bundle stays the
//   same size. Its page views are switched on below. For an EU-hosted Mixpanel project, add
//   api_host: 'https://api-eu.mixpanel.com'.
// Both get the same events:
// - click_call { phone, area }    a phone link
// - click_whatsapp { area }       a WhatsApp link
// - click_email { area }          an email link
// - click_button { button_text, area, destination }   any other link or button
// - generate_lead { form, has_email }   a quick-lead form sent (contact or join)
// `area` says where on the page the click was, so you can compare the hero, the floating
// buttons, the contact section and so on.
// The lead's name, phone and email go to Mixpanel only: on the event and on the visitor's
// profile, which joins it to their earlier page views and clicks. GA4's terms forbid
// personal details, so it never gets them.
let enabled = false
let mixpanel = null
const waiting = [] // Mixpanel calls made before it finished loading

const withMixpanel = (call) => (mixpanel ? call(mixpanel) : waiting.push(call))

function track(event, props = {}) {
  if (!enabled) return
  window.gtag?.('event', event, props)
  withMixpanel((mp) => mp.track(event, props))
}

// The page area a click came from. The first match wins, so the most specific come first.
const AREAS = [
  ['.wa-sticky, .sticky-call', 'floating_button'],
  ['header', 'header'],
  ['footer', 'footer'],
  ['.sd-inline-cta', 'page_cta'],
  ['.city-toc', 'table_of_contents'],
  ['.city-nearby', 'nearby_cities'],
  ['.hero', 'hero'],
  ['#contact', 'contact_section'],
  ['#join', 'join_section'],
  ['#services', 'home_services'],
  ['#why', 'why_us'],
  ['#reviews', 'reviews'],
  ['#gallery', 'gallery'],
  ['#about', 'about'],
  ['.areas-page', 'areas_hub'],
  ['.services-page', 'services_page'],
  ['.city-page', 'city_page'],
  ['.service-detail', 'service_page'],
  ['.text-page', 'legal_page'],
]
const areaOf = (el) => AREAS.find(([selector]) => el.closest(selector))?.[1] ?? 'page'

function trackClick(e) {
  const el = e.target.closest('a[href], button')
  if (!el) return
  const area = areaOf(el)
  const href = el.getAttribute('href') || ''
  if (href.startsWith('tel:')) return track('click_call', { phone: href.slice(4), area })
  if (href.includes('wa.me/')) return track('click_whatsapp', { area })
  if (href.startsWith('mailto:')) return track('click_email', { area })

  const props = { button_text: (el.getAttribute('aria-label') || el.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 100), area }
  if (href) {
    const url = new URL(href, window.location.href)
    props.destination = url.origin === window.location.origin ? decodeURIComponent(url.pathname + url.hash) : url.href
  }
  track('click_button', props)
}

export function initAnalytics() {
  if (window.location.hostname !== new URL(SITE.url).hostname) return
  enabled = true
  const { ga4, mixpanel: token } = SITE.analytics

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', ga4)

  import('mixpanel-browser/src/loaders/loader-module-core').then(({ default: mp }) => {
    mp.init(token, {
      track_pageview: 'url-with-path', // one page view per page, including in-site navigation
      persistence: 'localStorage',
    })
    mixpanel = mp
    waiting.splice(0).forEach((call) => call(mp))
  })

  document.addEventListener('click', trackClick)
}

// 050-123-4567 or 0501234567 -> +972501234567, so one person keeps one Mixpanel profile.
const israeliPhone = (phone) => {
  const digits = phone.replace(/\D/g, '')
  return digits.startsWith('0') ? `+972${digits.slice(1)}` : digits.startsWith('972') ? `+${digits}` : digits
}

// The two quick-lead forms open WhatsApp; count each send as a lead.
export function trackLead(form, { name = '', phone = '', email = '' } = {}) {
  if (!enabled) return
  const props = { form, has_email: Boolean(email.trim()) }
  window.gtag?.('event', 'generate_lead', props)

  // Only the fields that were filled in (the project form has no email).
  const lead = Object.fromEntries(Object.entries({ name, phone, email }).map(([k, v]) => [k, v.trim()]).filter(([, v]) => v))
  withMixpanel((mp) => {
    if (lead.phone) mp.identify(israeliPhone(lead.phone))
    mp.people.set({
      ...(lead.name && { $name: lead.name }),
      ...(lead.phone && { $phone: lead.phone }),
      ...(lead.email && { $email: lead.email }),
      last_lead_form: form,
    })
    mp.track('generate_lead', { ...props, ...lead })
  })
}
