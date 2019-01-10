import React from 'react'
import PropTypes from 'prop-types'
import BigTitle from './BigTitle'

const Testimonials = ({ testimonials }) => (
  <section className="testimonials">
    <BigTitle content="Testimonials" subtitle="From our Code Academy" />
    {testimonials.map((testimonial, index) => (
      <article key={index} className="message">
        <div className="message-body columns is-mobile">
          <div className="column is-one-fifth-desktop is-one-quarter-mobile">
            <figure className="image is-square" style={{margin: 0}}>
              <img src={testimonial.photo && testimonial.photo.url} alt={`${testimonial.first_name} ${testimonial.last_name}`} 
              style={{objectFit: "cover"}}/>
            </figure>
          </div>
          <div className="column">
            {testimonial.testimonial}
            <br />
            <cite> – {testimonial.first_name} {testimonial.last_name}</cite>
          </div>
        </div>
      </article>
    ))}
  </section>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      testimonial: PropTypes.string,
      name: PropTypes.string,
      picture_url: PropTypes.string
    })
  ),
}

export default Testimonials
