import React from 'react'

const ContactForm = () => {
  return (
    <div id='ContactForm'>
        <iframe
              title="map"
              src="https://maps.google.com/maps?q=39.751372,64.453918&hl=es&z=16&output=embed"
              width="100%"
              height="450"
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
    </div>
  )
}

export default ContactForm