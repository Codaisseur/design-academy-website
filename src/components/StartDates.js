import React from 'react'
import PropTypes from 'prop-types'
import BigTitle from './BigTitle'
import shuffle from '../lib/shuffle'
import Link from 'gatsby-link'
import moment from 'moment'

const StartDates = ({ title, subtitle, startdates, cta }) => (
  <section style={{margin: '6rem 2rem'}}>
    <BigTitle content={title} subtitle={subtitle} />
    <table className="table is-striped">
      <thead>
        <tr>
          <th className="has-text-centered">Start Date</th>
          {startdates[0].endsAt && <th className="has-text-centered">End Date</th>}
          <th className="has-text-centered">Get Started</th>
        </tr>
      </thead>
      <tbody>
        {startdates.map((startdate, index) => (
          <tr key={index}>
            <td className="has-text-centered">{moment(startdate.startsAt).format("MMM Do YYYY")}</td>
            {startdate.endsAt && <td className="has-text-centered">{moment(startdate.endsAt).format("MMM Do YYYY")}</td>}
            <td className="has-text-centered">
              {
                startdate.link.match(/^https?:/)
                ? <a className="button is-primary" href={startdate.link} disabled={startdate.full}>{cta}</a>
                : <Link className="button is-primary" to={startdate.link} disabled={startdate.full}>{cta}</Link>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)

StartDates.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.string,
  startdates: PropTypes.arrayOf(
    PropTypes.shape({
      startsAt: PropTypes.string,
      endsAt: PropTypes.string,
      full: PropTypes.bool,
      link: PropTypes.string,
    })
  ),
}

export default StartDates
