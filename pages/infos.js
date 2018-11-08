import React from 'react'
import ErrorPage from 'next/error'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import InfosContent from 'components/InfosContent'

import config from 'config/config'

class InfosPage extends React.Component {
  render () {
    if (config.info.active !== true) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <Layout name='infos-page has-bg-star'>
        <div className='section has-bg-star'>
          <Meta title={config.info.title} description={config.info.description} />
          <div className='container'>
            <h1 className='title title-line has-text-centered'><span>Informations pratiques</span></h1>
            <InfosContent />
          </div>
        </div>
      </Layout>
    )
  }
}

export default InfosPage
