import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'gatsby-link'
import { MarkdownContent } from '../components/Content'
import './product-page.sass'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  hero,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <section className="section section--gradient no-padding">
    <div className="container">
      <div className="section no-padding">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <section
                className="hero is-large is-dark full-width-image-container margin-top-0"
                style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${image})` }}
              >
                <div className="hero-body">
                  <div className="container">
                    <div className="columns">
                      <div className="column is-8">
                        <h1 className="title" style={{ fontSize: 66 }}>
                          {title}
                        </h1>
                      </div>
                    </div>
                    {hero && <div className="columns">
                      {(hero.left || hero.right) && <div className="column is-narrow">
                        {hero.left.text && <MarkdownContent
                          className="subtitle heroline is-size-4"
                          content={hero.left.text}
                        />}
                        {hero.left.link && hero.left.cta &&
                          <Link className="hero-cta button is-primary" to={hero.left.link}>
                            {hero.left.cta}
                          </Link>
                        }
                      </div>}
                      {hero.right && <div className="column is-narrow">
                        {hero.right.text && <MarkdownContent
                          className="subtitle heroline is-size-4"
                          content={hero.right.text}
                        />}
                        {hero.right.link && hero.right.cta &&
                          <Link className="hero-cta button" to={hero.right.link}>
                            {hero.right.cta}
                          </Link>
                        }
                      </div>}
                    </div>}
                  </div>
                </div>
              </section>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image1.image}
                          alt={main.image1.alt}
                        />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={main.image2.image}
                          alt={main.image2.alt}
                        />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={main.image3.image}
                        alt={main.image3.alt}
                      />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${fullImage})` }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  hero: PropTypes.shape({
    left: PropTypes.shape({
      text: PropTypes.string,
      cta: PropTypes.string,
      link: PropTypes.string,
    }),
    right: PropTypes.shape({
      text: PropTypes.string,
      cta: PropTypes.string,
      link: PropTypes.string,
    }),
  }),
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      hero={frontmatter.hero}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
    />
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        hero {
          left {
            text
            cta
            link
          }
          right {
            text
            cta
            link
          }
        }
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
