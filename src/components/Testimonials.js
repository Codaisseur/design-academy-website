import React from 'react'
import PropTypes from 'prop-types'
import BigTitle from './BigTitle'
import shuffle from '../lib/shuffle'

const Testimonials = ({ testimonials }) => (
  <div>
    <BigTitle content="Testimonials" />
    {shuffle(testimonials).slice(0,5).map((testimonial, index) => (
      <article key={index} className="message">
        <div className="message-body columns is-mobile">
          <div className="column is-one-fifth-desktop is-one-quarter-mobile">
            <figure className="image is-square" >
              <img src={testimonial.picture_url} alt={testimonial.name} />
            </figure>
          </div>
          <div className="column">
            {testimonial.testimonial}
            <br />
            <cite> – {testimonial.name}</cite>
          </div>
        </div>
      </article>
    ))}
  </div>
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
