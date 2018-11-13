import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

import ActiveLink from 'components/ActiveLink'

import config from 'config/config'

const { publicRuntimeConfig } = getConfig()

function TicketMenu ({ data: { loading, error, node } }) {
  if (error) {
    console.log(error)
    return null
  }

  if (node && node.url) {
    return <div className='navbar-item ga-ticket-menu is-uppercase has-text-weight-bold'>
      <ActiveLink label={config.tickets.title} className='has-text-white' path='/billetterie' />
    </div>
  } else { return null }
}

export const edition = gql`
query{
  node:nodeById(id:"${publicRuntimeConfig.EDITION_ID}") {
    ... on NodeEdition {
      url:fieldEditionWeezeventUrl
    }
  }
}
`

TicketMenu.propTypes = {
  data: PropTypes.object
}

export default graphql(edition)(TicketMenu)
