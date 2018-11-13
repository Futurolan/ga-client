import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

const PartnerLogo = (props) => (
  <div className='partner-logo box'>
    <a href={props.url} target='_blank'>
      <figure>
        <img src={props.imageUrl} />
      </figure>
    </a>
  </div>
)

PartnerLogo.propTypes = {
  imageUrl: PropTypes.string,
  url: PropTypes.string
}

export default PartnerLogo
