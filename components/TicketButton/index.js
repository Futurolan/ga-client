import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link'
import PropTypes from 'prop-types'

function TicketButton ({ data: { loading, error, node } }) {
  if (error) {
    console.log(error)
    return null
  }

  if (node && node.url) {
    return <div className='panel ga-ticket-button'>
      <div className='button is-primary is-fullwidth is-large'>
        <Link href='/billetterie'>
          <a className='has-text-white'>Accéder à la billetterie</a>
        </Link>
      </div>
    </div>
  } else { return null }
}

export const edition = gql`
query{
  node:nodeById(id:"${process.env.EDITION_ID}") {
    ... on NodeEdition {
      url:fieldEditionWeezeventUrl
    }
  }
}
`

TicketButton.propTypes = {
  data: PropTypes.object
}

export default graphql(edition)(TicketButton)
