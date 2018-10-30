import React from 'react'
import Layout from 'components/Layout'
import '../styles/styles.scss'
import TicketContent from '../components/TicketContent'
import Meta from '../components/Meta'
import config from '../config/config'

class BilletteriePage extends React.Component {
  render () {
    return (
      <Layout name='billetterie-page has-bg-star'>
        <section className='section'>
          <Meta title={config.tickets.title} description={config.tickets.description} />
          <div className='container'>
            <TicketContent />
          </div>
        </section>
      </Layout>
    )
  }
}

export default BilletteriePage
