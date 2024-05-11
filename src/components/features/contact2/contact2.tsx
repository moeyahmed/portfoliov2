'use client'
import React from 'react'

const Contact2: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center pb-8">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Get in touch
          </h2>
          <span className="block text-black font-bold">Contact Us</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email contact card */}
          <a href="mailto:ma@alkasa.com.au" className="text-black">
            <div className="contact__card p-6 border-2 border-black rounded-md text-center">
              <i className="bx bx-mail-send text-4xl text-black mb-4"></i>
              <h3 className="font-bold mb-2">Email</h3>
              <span className="block mb-4">ma@alkasa.com.au</span>
              Write to us <i className="bx bx-right-arrow-alt"></i>
            </div>
          </a>

          {/* WhatsApp contact card */}
          <a
            href="https://api.whatsapp.com/send?phone=62452058658&text=Hello, more information!"
            className="text-black"
          >
            <div className="contact__card p-6 border-2 border-black rounded-md text-center">
              <i className="bx bxl-whatsapp text-4xl text-black mb-4"></i>
              <h3 className="font-bold mb-2">Whatsapp</h3>
              <span className="block mb-4">0448-869-876</span>
              Write to us <i className="bx bx-right-arrow-alt"></i>
            </div>
          </a>

          {/* Instagram contact card */}
          <a
            href="https://www.instagram.com/direct/t/17844806070068523"
            className="text-black"
          >
            <div className="contact__card p-6 border-2 border-black rounded-md text-center">
              <i className="bx bxl-instagram text-4xl text-black mb-4"></i>
              <h3 className="font-bold mb-2">Instagram</h3>
              <span className="block mb-4">Alkasa_Halal</span>
              Write to us <i className="bx bx-right-arrow-alt"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact2
