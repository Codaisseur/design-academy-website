import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'
import mapStyles from './fullMapComponentStyle.json'

const API_KEY='AIzaSyApDNJyrkLxv1C43W_qFm_CmCs1JBysjKQ'

const FullMapComponent = withScriptjs(withGoogleMap(
  class extends Component {
    static propTypes = {
      containerElement: PropTypes.element.isRequired,
      loadingElement: PropTypes.element.isRequired,
      mapElement: PropTypes.element.isRequired,
      googleMapURL: PropTypes.string.isRequired,
      center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      })
    }

    render() {
      const { lat, lng } = this.props.center

      return (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={this.props.center}
          defaultOptions={{ styles: mapStyles }}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      )
    }
  }
))

FullMapComponent.defaultProps = {
  containerElement: <div style={{ height: '600px', width: '100vw', position: 'relative', left: '50%', right: '50%', margin: '2rem -50vw 4rem' }} />,
  loadingElement: <div style={{ height: '100%' }} />,
  mapElement: <div style={{ height: '100%' }} />,
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  center: {
    lat: 52.339499,
    lng: 4.854349
  }
}

export default FullMapComponent
