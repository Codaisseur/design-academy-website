import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Link from 'gatsby-link'
import { MarkdownContent, ContentBlock } from '../components/Content'
import BigTitle from '../components/BigTitle'
import Helmet from 'react-helmet'
import FullMapComponent from '../components/FullMapComponent'
import StartDates from '../components/StartDates'
import './product-page.sass'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  hero,
  description,
  intro,
  testimonials,
  partners,
  startdates,
  open_evenings,
  courseinfo,
  jobinfo,
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
                        <h1 className="title main-title" style={{ fontSize: 66 }}>
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
              <section style={{margin: '6rem 0'}}>
                <BigTitle content="What Makes Codaisseur Unique?" />
                <Features gridItems={intro.blurbs} />
              </section>
              <section className="intro has-text-centered" style={{margin: '0 0 4rem'}}>
                <Link className="button is-primary" to={intro.link}>
                  {intro.cta}
                </Link>
              </section>
              <section style={{margin: '6rem 2rem'}}>
                <BigTitle content="Our Simple Payment Plan" />
                <progress style={{margin: '2rem 0 .5rem'}} className="progress is-primary is-large" value="800" max="9920">Admission Fee</progress>
                <div className="price-labels columns is-mobile" style={{margin: '1rem 0'}}>
                  <div className="admission-fee-label column is-5">€800 Admission Fee</div>
                  <div className="tuition-fee-label column has-text-right">€9120 Paid by Your Future Employer</div>
                </div>
              </section>
              <section className="hero is-medium is-dark full-width-image-container"
                style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.3) 100%),url(${image})`, marginTop: '6rem'}}>
                <div className="hero-body has-text-centered">
                  <div className="container">
                    <p className="title">
                      Since 2016, Codaisseur trained over
                      100 best-in-class graduates
                      currently working in top
                      companies and startups in Europe.
                    </p>
                    <p className="subtitle">
                      <a className="button is-primary" href="https://codaisseur.typeform.com/to/njUnCH" style={{ marginTop: '1rem'}}>
                        Apply Now
                      </a>
                    </p>
                  </div>
                </div>
              </section>
              <section style={{margin: '6rem 2rem'}}>
                <BigTitle content="Our Partners" />
                <div className="columns is-mobile is-multiline">
                  {partners.map((p,i) => (
                    <div key={i} className="column is-one-fifth-desktop is-one-third-mobile is-one-quarter-tablet">
                      <figure className="image is-square" style={{margin: 0}}>
                        <a href={`${p.website}?utm_source=Codaisseur&utm_medium=homepage`}>
                          <img alt={p.name} src={p.logo} />
                        </a>
                      </figure>
                    </div>
                  ))}
                </div>
              </section>
              <Testimonials testimonials={testimonials} />

              {startdates && <StartDates
                title="Start Dates"
                subtitle="During the 10 week course you will learn everything you need to know to become a professional UX designer"
                cta="Apply Now"
                startdates={startdates.map(s => Object.assign({}, s, { link: 'https://codaisseur.typeform.com/to/njUnCH' }))} />}

              <BigTitle
                content="Come Visit Us"
                subtitle="Burgerweeshuispad 201, 1076 GR Amsterdam The Netherlands"
              />
              <FullMapComponent />

              {courseinfo && <section className="columns is-multiline">
                {courseinfo.map((info, index) => (
                  <ContentBlock
                    key={index}
                    style={{ flexGrow: 2 }}
                    className="column is-6"
                    title={info.heading}
                    subtitle={info.subheading}
                    content={info.description}
                  />
                ))}
              </section>}

              {open_evenings && <StartDates
                title="Open Evenings"
                subtitle="It will be the chance to ask all your questions"
                cta="RSVP"
                startdates={open_evenings.map(s => ({ startsAt: s.starts_at, link: s.event_url }))} />}

              {jobinfo && <section className="columns is-multiline">
                {jobinfo.map((info, index) => (
                  <div key={index} className="column is-6" style={{ flexGrow: 2 }}>
                    <ContentBlock
                      title={info.heading}
                      subtitle={info.subheading}
                      content={info.description}
                    />
                  </div>
                ))}
              </section>}
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
  testimonials: PropTypes.array,
  startdates: PropTypes.array,
  open_evenings: PropTypes.array,
  courseinfo: PropTypes.array,
  jobinfo: PropTypes.array,
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
      startdates={frontmatter.startdates}
      courseinfo={frontmatter.courseinfo}
      jobinfo={frontmatter.jobinfo}
      partners={data.allPartner.edges.map(p => p.node)}
      testimonials={data.allStudentTestimonial.edges.map(t => t.node).slice(0,5)}
      open_evenings={data.allOpenEvening.edges.map(t => t.node)}
      courseinfo={frontmatter.courseinfo}
      jobinfo={frontmatter.jobinfo}
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
    allPartner {
      edges {
        node {
          id
          name
          website
          logo
        }
      }
    }
    allStudentTestimonial(limit: 5) {
      edges {
        node {
          id
          name
          testimonial
          picture_url
        }
      }
    }
    allOpenEvening {
      edges {
        node {
          id
          starts_at
          ends_at
          event_url
        }
      }
    }
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
        startdates {
          startsAt
          endsAt
          full
        }
        courseinfo {
          heading
          subheading
          description
        }
        jobinfo {
          heading
          subheading
          description
        }
      }
    }
  }
`
