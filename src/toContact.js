// Scrolls to the contact form at the bottom of the page without adding #contact to the address.
export function toContact(e) {
  const form = document.getElementById('contact')
  if (!form) return
  e.preventDefault()
  form.scrollIntoView({ behavior: 'smooth' })
  form.querySelector('input')?.focus({ preventScroll: true })
}
