import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from 'components/ActiveLink'
import TicketMenu from 'components/TicketMenu'
import LiveMenu from 'components/LiveMenu'
import SocialNetworksLinks from 'components/SocialNetworksLinks'

import config from 'config/config'

import './styles.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render () {
    return (

      <header className='ga-header'>
        <nav className='navbar has-background-primary'>
          <div className='navbar-brand'>
            <Link href='/'>
              <a>
                <img alt={`Logo de l'évènement ${config.title}`} src={config.logo} />
              </a>
            </Link>
            <button className='button navbar-burger is-dark' onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={classNames('navbar-menu', 'has-background-primary', 'has-text-centered', { 'is-active': this.state.isOpen })} >
            <div className='navbar-start' />
            {config.news.active && <div className='navbar-item'>
              <ActiveLink label={config.news.title} className='has-text-white is-uppercase has-text-weight-bold' path='/news' />
            </div>}
            <LiveMenu />
            <TicketMenu />
            {config.tournaments.active && <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label={config.tournaments.title} className='has-text-white' path='/tournois' />
            </div>}
            {config.info.active && <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label={config.info.title} className='has-text-white' path='/infos' />
            </div>}
            {config.partners.active && <div className='navbar-item is-uppercase has-text-weight-bold'>
              <ActiveLink label={config.partners.title} className='has-text-white' path='/partenaires' />
            </div>}
            <div className='navbar-end'>
              {config.mainPartner && <a href={config.mainPartner.url} target='_blank'>
                <img alt={'Logo du partenaire principal de l\'évènement'} src={config.mainPartner.logo} />
              </a>}
              {config.mainPartner === undefined && config.social && <div className='navbar-item'>
                <SocialNetworksLinks />
              </div>}
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
