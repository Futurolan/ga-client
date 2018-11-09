import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import ToornamentIframe from '../ToornamentIframe'

import './styles.scss'

function ToornamentResults ({
  data: { loading, error, nodeQuery }
}) {
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement des résultats !!!</div>
  }
  if (loading) {
    return <div className='notification'>Chargement des résultats en cours.</div>
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    return <div className='ga-toornament-results'>
      <div className='panel'>
        <div className='panel-heading has-background-primary has-text-white'>
          <i className='fas fa-trophy' />&nbsp;Résultats
        </div>
        <div className='panel-container has-background-white'>
          <div className='columns is-multiline'>
            {nodeQuery.entities.map((tournament, index) => (
              <div className='column is-12' key={tournament.nid}>
                <ToornamentIframe id={tournament.toornamentId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  }
  return null
}

export const tournaments = gql`
{
  nodeQuery(
  filter:{
    conditions:[
      {field:"type",value:["tournament"],operator:EQUAL},
      {field:"field_tournament_edition",value:["${process.env.EDITION_ID}"]},
      {field:"field_tournament_toornament_id",operator:IS_NOT_NULL},
      {field:"status",value:["1"]}
    ]},
  sort:[{field:"field_weight",direction:ASC}],
  limit:9999) {
    entities {
      ... on NodeTournament{
        title
        nid
        toornamentId:fieldTournamentToornamentId
      }
    }
  }
}
`

ToornamentResults.propTypes = {
  data: PropTypes.object
}

export default graphql(tournaments)(ToornamentResults)
