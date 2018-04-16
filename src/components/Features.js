import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={index} className="column is-half-tablet" style={{flexGrow: 2}}>
        <article className="tile is-parent">
          <p className="tile is-child has-text-centered is-4" style={{padding: 24}}>
            <img alt="" src={item.image} />
          </p>
          <section className="tile is-child">
            <h3>{item.title}</h3>
            {item.text}
          </section>
        </article>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
