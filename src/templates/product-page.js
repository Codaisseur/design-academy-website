import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Link from 'gatsby-link'
import { MarkdownContent, ContentBlock } from '../components/Content'
import BigTitle from '../components/BigTitle'
import Helmet from 'react-helmet'
import FullMapComponent from '../components/FullMapComponent'
import './product-page.sass'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  hero,
  description,
  intro,
  courseinfo,
  program,
}) => (
  <section className="section section--gradient no-padding">
    <Helmet title={heading}>
      <meta name="title" content="Codaisseur Design Academy" />
      <meta name="description" content={subheading} />
      <meta property="og:title" content="Codaisseur Design Academy" />
      <meta property="og:description" content={subheading} />
      <meta property="og:image" content="https://design.codaisseur.com/img/codaisseur-design-academy-meta-image.png" />
      <meta property="og:site_name" content="codaisseur.com" />
      <meta name="twitter:description" content={subheading} />
      <meta name="twitter:creator" content="@Codaisseur" />
      <meta name="twitter:site" content="@Codaisseur" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="https://design.codaisseur.com/img/codaisseur-design-academy-meta-image.png" />
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
                          <Link className="hero-cta button is-primary is-large" to={hero.left.link}>
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
                          <Link className="hero-cta button is-large" to={hero.right.link}>
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
              <section id="intro" style={{margin: '6rem 0'}}>
                <ContentBlock
                  title={intro.heading}
                  subtitle={intro.subheading}
                  content={intro.description}
                />
                <Features gridItems={intro.blurbs} />
              </section>
              <section className="intro has-text-centered" style={{margin: '0 0 4rem'}}>
                <a className="button is-primary is-large" href={intro.link}>
                  {intro.cta}
                </a>
              </section>
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

              <section id="program" style={{margin: '6rem 0'}}>
                <BigTitle content={program.heading} />
                <Features gridItems={program.blurbs} />
              </section>
              <section className="intro has-text-centered" style={{margin: '0 0 4rem'}}>
                <a className="button is-primary is-large" href={program.link}>
                  {program.cta}
                </a>
              </section>
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
    heading: PropTypes.string,
    subheading: PropTypes.string,
    blurbs: PropTypes.array,
    cta: PropTypes.string,
    link: PropTypes.string,
  }),
  program: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string,
    blurbs: PropTypes.array,
    cta: PropTypes.string,
    link: PropTypes.string,
  }),
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
      program={frontmatter.program}
      courseinfo={frontmatter.courseinfo}
      jobinfo={frontmatter.jobinfo}
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
            heading
            image
            description
          }
          heading
          subheading
          description
          cta
          link
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
        program {
          blurbs {
            heading
            image
            description
          }
          heading
          cta
          link
        }
      }
    }
  }
`
