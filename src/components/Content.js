import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './Content.sass'

export const HTMLContent = ({ content, className, style }) => (
  <div
    className={className}
    style={Object.assign({}, style || {})}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export const MarkdownContent = ({ content, className, style }) => (
  <ReactMarkdown
    className={className}
    style={Object.assign({}, style || {})}
    source={content}
  />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export const ContentBlock = ({ title, subtitle, content, className, style }) => (
  <section
    className={`content-block ${className}`}
    style={Object.assign({}, style || {})}
  >
    <h1
      className="title is-2 has-text-centered has-text-weight-semibold"
    >
      {title}
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </h1>
    <MarkdownContent content={content} className="content" />
  </section>
)

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
