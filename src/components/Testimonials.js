import React from 'react'
import PropTypes from 'prop-types'
import BigTitle from './BigTitle'

const Testimonials = ({ testimonials }) => (
  <div>
    <BigTitle content="Testimonials" />
    {testimonials.map((testimonial, index) => (
      <article key={index} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
