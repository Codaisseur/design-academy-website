import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryStartDates = entry.getIn(['data', 'startdates'])
  const startdates = entryStartDates ? entryStartDates.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ProductPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      hero={{
        left: {
          text: entry.getIn(['data', 'hero', 'left', 'text']),
          cta: entry.getIn(['data', 'hero', 'left', 'cta']),
          link: entry.getIn(['data', 'hero', 'left', 'link']),
        },
        right: {
          text: entry.getIn(['data', 'hero', 'left', 'text']),
          cta: entry.getIn(['data', 'hero', 'left', 'cta']),
          link: entry.getIn(['data', 'hero', 'left', 'link']),
        },
      }}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{
        heading: entry.getIn(['data', 'intro', 'heading']),
        description: entry.getIn(['data', 'intro', 'description']),
        cta: entry.getIn(['data', 'intro', 'cta']),
        link: entry.getIn(['data', 'intro', 'link']),
        blurbs
      }}
      startdates={startdates}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
