import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

import Meta from 'components/Meta'

function PageContent ({ data: { loading, error, node } }) {
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement de la page !!!</div>
  }

  if (node) {
    return <div className='ga-page-content'>
      <Meta title={node.title} description={node.description} />

      <h1 className='title title-line has-text-centered'><span>{node.title}</span></h1>

      <div className='content has-text-justified' >
        <div dangerouslySetInnerHTML={{ __html: node.content.processed }} />
      </div>

    </div>
  }
  return <div className='notification'>Chargement de la page en cours</div>
}

export const page = gql`

  query page($nid:String!) {
    node:nodeById(id: $nid) {
      ... on NodePage {
        title
        entityOwner {
          name
        }
        created,
        content:fieldPageContent{
          processed
        }
        description:fieldPageDescription
      }
    }
  }
`

PageContent.propTypes = {
  data: PropTypes.object
}

export default graphql(page, {
  options: ({ nid }) => ({ variables: { nid } })
})(PageContent)
