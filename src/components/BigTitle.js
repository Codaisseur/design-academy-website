import React from 'react'
import './BigTitle.sass'

export default ({ content }) => (
  <header className="big-title has-text-centered">
    <h1 className="has-text-weight-semibold">{content}</h1>
  </header>
)
