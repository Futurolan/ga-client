import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import TournamentContent from 'components/TournamentContent'

class TournoisSinglePage extends React.Component {
  static getInitialProps ({ query: { nid } }) {
    return { nid: nid }
  }

  render () {
    const { nid } = this.props
    return (
      <Layout name='news-single-page has-bg-star'>
        <section className='section has-bg-star'>
          <div className='container'>
            <TournamentContent nid={nid} />
          </div>
        </section>
      </Layout>
    )
  }
}

TournoisSinglePage.propTypes = {
  nid: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default TournoisSinglePage
