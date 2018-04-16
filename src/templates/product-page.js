import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'gatsby-link'
import { MarkdownContent, ContentBlock } from '../components/Content'
import BigTitle from '../components/BigTitle'
import Helmet from 'react-helmet'
import './product-page.sass'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  hero,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <section className="section section--gradient no-padding">
    <Helmet title={heading}>
      <meta name="description" content={subheading} />
    </Helmet>
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
              <ContentBlock
                title={heading}
                subtitle={subheading}
                content={description}
              />
              <section style={{margin: '4rem 0'}}>
                <BigTitle content="What Makes Codaisseur Unique?" />
                <Features gridItems={intro.blurbs} />
              </section>
              <section className="intro has-text-centered" style={{margin: '0 0 4rem'}}>
                <Link className="button is-primary" to={intro.link}>
                  {intro.cta}
                </Link>
              </section>
              <section style={{margin: '4rem 0'}}>
                <BigTitle content="Our Simple Payment Plan" />
                <progress class="progress is-primary is-large" value="800" max="9920">Admission Fee</progress>
                <div className="price-labels columns is-mobile" style={{margin: '1rem 0'}}>
                  <div className="admission-fee-label column is-5">€800 Admission Fee</div>
                  <div className="tuition-fee-label column has-text-right">€9120 Paid by Your Future Employer</div>
                </div>
              </section>
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
  subheading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    cta: PropTypes.string,
    link: PropTypes.string,
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
      subheading={frontmatter.subheading}
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
        subheading
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
            title
            image
            text
          }
          heading
          description
          cta
          link
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
