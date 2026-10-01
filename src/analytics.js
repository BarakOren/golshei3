// GA4 with three lead events. GA4's enhanced measurement already counts page changes.
// The measurement ID comes from VITE_GA_ID at build time: set it in Vercel for production
// only, so local and staging builds load nothing.
const GA_ID = import.meta.env.VITE_GA_ID

export function initAnalytics() {
  if (!GA_ID) return
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)

  document.addEventListener('click', (e) => {
    const href = e.target.closest('a[href]')?.getAttribute('href') || ''
    if (href.startsWith('tel:')) window.gtag('event', 'click_call', { phone: href.slice(4) })
    else if (href.includes('wa.me/')) window.gtag('event', 'click_whatsapp')
  })
}

// The two quick-lead forms open WhatsApp; count each send as a lead.
export const trackLead = (form) => window.gtag?.('event', 'generate_lead', { form })
