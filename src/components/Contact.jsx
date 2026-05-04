import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const info = [
    { icon: '✉️', label: 'Email', value: 'bodamomo2010@gmail.com', href:'mailto:bodamomo2010@gmail.com'  },
    { icon: '💼', label: 'LinkedIn', value: 'mahmoud-rabea', href: 'https://www.linkedin.com/in/mahmoud-rabea-456547259/' },
    { icon: '🐙', label: 'GitHub', value: 'mahmoudrabea321', href: 'https://github.com/mahmoudrabea321' },
  ]

  return (
    <div className="contact-wrap" id="contact" ref={ref}>
      <div className="section">
        <div className="section-label reveal">
          <span className="section-label-text">05. Contact</span>
          <div className="section-label-line" />
        </div>

        <div className="contact-grid">
          <div className="contact-left reveal" style={{ transitionDelay: '0.1s' }}>
            <h2>Let's work<br /><span>together.</span></h2>
            <p>
              Have a project in mind? Need a website, e-commerce store, or a
              full-stack app? Send me a message and I'll reply within 24 hours.
            </p>
            <div className="contact-info">
              {info.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-info-item">
                  <div className="ci-icon">{item.icon}</div>
                  <div>
                    <div className="ci-label">{item.label}</div>
                    <div className="ci-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            {status === 'sent' ? (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')}>Send another message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" name="name" value={form.name} onChange={onChange} placeholder="Ahmed Mohamed" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="ahmed@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input" name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." required />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: 13 }}>Something went wrong. Please try again.</p>
                )}
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
