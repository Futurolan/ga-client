import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

import TwitchCarousel from 'components/TwitchCarousel'

const { publicRuntimeConfig } = getConfig()

function TwitchCarouselActivator ({ data: { loading, error, node } }) {
  if (error) {
    console.log(error)
    return null
  }

  if (node && node.livemode) {
    return <TwitchCarousel />
  } else { return null }
}

export const edition = gql`
query{
  node:nodeById(id:"${publicRuntimeConfig.EDITION_ID}") {
    ... on NodeEdition {
      livemode:fieldEditionLiveModeActive
    }
  }
}
`

TwitchCarouselActivator.propTypes = {
  data: PropTypes.object
}

export default graphql(edition)(TwitchCarouselActivator)
