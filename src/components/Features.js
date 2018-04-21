import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  (gridItems &&
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={index} className="column is-half-tablet" style={{flexGrow: 2}}>
        <article className="tile is-parent">
          <p className="tile is-child has-text-centered is-4" style={{padding: 24}}>
            <img alt="" src={item.image} />
          </p>
          <section className="tile is-child">
            <h3>{item.heading}</h3>
            {item.description}
          </section>
        </article>
      </div>
    ))}
  </div>) || null
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default FeatureGrid
