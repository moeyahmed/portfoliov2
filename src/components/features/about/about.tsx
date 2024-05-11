import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Mohamed." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        I'm Mohamed Ahmed, a dedicated Frontend Engineer and UNSW student. I
        specialize in JavaScript, TypeScript, CSS, HTML, and Next.js, blending
        technical expertise with a deep passion for frontend development. My
        interests also extend to cybersecurity, where I explore ways to enhance
        web safety and innovation.
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
