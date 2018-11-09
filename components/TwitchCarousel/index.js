import React from 'react'
import Link from 'next/link'
import io from 'socket.io-client'

import './styles.scss'
import TwitchPlayer from '../TwitchPlayer'

class TwitchCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: -3, items: [], channelList: [] }
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount () {
    // connect to WS server and listen event
    const socket = io(process.env.SOCKET_URL)
    socket.on(`streamsTwitch${process.env.EDITION_ID}`, (streams) => {
      let streamsOnline = {}
      for (let streamId in streams) {
        if (streams[streamId].front && streams[streamId].online) { streamsOnline[streamId] = streams[streamId] }
      }

      const channelList = Object.keys(streamsOnline)
      if (channelList.length > 0) {
        this.setState({ channelList: channelList })
        socket.close()
      }
    })
  }

  buildList () {
    let channelList = []
    for (let i = 0; i < 7; i++) {
      if (this.state.current >= 0) {
        channelList.push(this.state.channelList[(i + this.state.current) % this.state.channelList.length])
      } else {
        channelList.push(this.state.channelList[(this.state.channelList.length + (this.state.current % this.state.channelList.length) + i) % this.state.channelList.length])
      }
    }
    return channelList.map((channel, index) => {
      return <div onClick={this.handleItemClick} key={`item-${index + this.state.current}`} className={`ga-twitch-carousel-player-item item-${index}`}>
        <TwitchPlayer active={index === 3} index={index} img={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-640x360.jpg`} channel={channel} />
      </div>
    })
  }

  handleNextClick () {
    this.setState({ current: this.state.current + 1 })
  }
  handlePreviousClick () {
    this.setState({ current: this.state.current - 1 })
  }

  handleItemClick (e) {
    const current = this.state.current + (e.target.getAttribute('data-index') - 3)

    this.setState({ current: current })
  }
  render () {
    if (this.state.channelList.length > 0) {
      return <div className='ga-twitch-carousel'>
        <div className={`ga-twitch-carousel-content ${this.state.channelList.length < 5 ? 'is-single' : ''}`}>
          {this.buildList()}
          {this.state.channelList.length >= 2 && <div className='next' onClick={this.handleNextClick}><i className='fas fa-angle-right' /></div>}
          {this.state.channelList.length >= 2 && <div className='previous' onClick={this.handlePreviousClick}><i className='fas fa-angle-left' /></div>}
        </div>
        <div className='ga-twitch-carousel-button has-text-centered'>
          <Link href='live'>
            <a className='button is-primary is-medium'>
              Voir la page live
            </a>
          </Link>
        </div>
      </div>
    } else {
      return null
    }
  }
}

export default TwitchCarousel
