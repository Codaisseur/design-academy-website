import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

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

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
