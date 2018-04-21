import React from 'react'
import './BigTitle.sass'

export default ({ content, subtitle }) => (
  (content &&
  <header className="big-title has-text-centered">
    <h1 className="has-text-weight-semibold">{content}
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </h1>
  </header>) || null
)
