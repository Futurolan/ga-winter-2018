import React from 'react'
import PropTypes from 'prop-types'
const PartnerLogo = (props) => (
  <div className='partner-logo box'>
    <a href={props.url} target='_blank'>
      <figure className='image is-150x150'>
        <div>
          <img src={props.imageUrl} />
        </div>
      </figure>
    </a>
  </div>
)

PartnerLogo.propTypes = {
  imageUrl: PropTypes.string,
  url: PropTypes.string
}

export default PartnerLogo
