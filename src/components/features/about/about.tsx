import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Mumin." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        I'm Mumin Ahmed, a dedicated Software Engineer and UTS student with a
        strong focus on frontend development and data analytics. I specialize in
        JavaScript, CSS, HTML, and Next.js, and I also work with Python to
        explore data-driven solutions. Alongside my passion for clean,
        user-focused design, I have a growing interest in cybersecurity, where I
        enjoy exploring innovative ways to enhance digital safety and
        resilience.
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
