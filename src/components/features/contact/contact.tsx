import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="contact">
      <Headings title="Contact" subtitle="Get in touch" />

      <div className="contact-text">
        The fastest way to get in touch with me is to send me a message on{' '}
        <a
          href="https://www.linkedin.com/in/mumin-ahmed-24563b268/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn.
        </a>{' '}
      </div>
    </div>
  )
})

Contact.displayName = 'Contact'

export { Contact }
