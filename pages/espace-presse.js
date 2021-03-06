import React from 'react'
import ErrorPage from 'next/error'

import Layout from 'components/Layout'
import PageContent from 'components/PageContent'

import config from 'config/config'

class ContactsPage extends React.Component {
  render () {
    if (config.press.active !== true) {
      return <ErrorPage statusCode={404} />
    }
    return (
      <Layout name='espace-presse-page has-bg-star'>
        <div className='section has-bg-star'>
          <div className='container'>
            <PageContent nid={config.press.pageId.toString()} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactsPage
