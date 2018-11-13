import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import TwitchList from 'components/TwitchList'
import ToornamentResults from 'components/ToornamentResults'

import config from 'config/config'

class LivePage extends React.Component {
  render () {
    return (
      <Layout name='live-page has-bg-star'>
        <div className='section has-bg-star'>
          <Meta title={config.live.title} description={config.live.description} />
          <div className='container'>
            <h1 className='title title-line has-text-centered'><span>{config.live.title}</span></h1>
            <TwitchList />
            <ToornamentResults />
          </div>
        </div>
      </Layout>

    )
  }
}

export default LivePage
