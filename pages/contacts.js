import React from 'react'
import ErrorPage from 'next/error'

import Layout from 'components/Layout'
import PageContent from 'components/PageContent'

import config from 'config/config'

class ContactsPage extends React.Component {
  render () {
    if (config.contact.active !== true) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <Layout name='contacts-page has-bg-star'>
        <section className='section has-bg-star'>
          <div className='container'>
            <PageContent nid={config.contact.pageId.toString()} />
          </div>
        </section>
      </Layout>
    )
  }
}

export default ContactsPage
