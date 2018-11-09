import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import ActiveLink from '../ActiveLink'
import config from '../../config/config'

function LiveMenu ({ data: { loading, error, node } }) {
  if (error) {
    console.log(error)
    return null
  }

  if (node && node.livemode) {
    return <div className='navbar-item ga-live-menu is-uppercase has-text-weight-bold'>
      <ActiveLink label={config.live.title} className='has-text-white' path='/live' />
    </div>
  } else { return null }
}

export const edition = gql`
query{
  node:nodeById(id:"${process.env.EDITION_ID}") {
    ... on NodeEdition {
      livemode:fieldEditionLiveModeActive
    }
  }
}
`

LiveMenu.propTypes = {
  data: PropTypes.object
}

export default graphql(edition)(LiveMenu)
