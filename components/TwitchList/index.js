import React from 'react'
import io from 'socket.io-client'
import './styles.scss'

class TwitchList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { socket: null, streams: {} }
  }

  componentDidMount () {
    // connect to WS server and listen event
    const socket = io(process.env.SOCKET_URL)
    socket.on(`streamsTwitch${process.env.EDITION_ID}`, (streams) => {
      this.setState({ streams: streams })
    })
    this.setState({ socket })
  }

  // close socket connection
  componentWillUnmount () {
    this.state.socket.close()
  }

  render () {
    return (
      <div className='ga-twitch-list' >
        {Object.keys(this.state.streams).length > 0 && <div className='panel '>

          <div className='panel-heading has-background-primary has-text-white'><i className='fab fa-twitch' />&nbsp;Streams</div>
          <div className='panel-container has-background-white'>
            <div className='columns is-multiline'>

              {Object.keys(this.state.streams).map((key, i) => {
                if (this.state.streams[key].online) {
                  return <div className='thumbnail column is-4-tablet is-4-desktop is-3-widescreen ' key={i}>
                    <a title={this.state.streams[key].title} href={`https://www.twitch.tv/${key}`} target='_blank'>
                      <div className='image'>
                        <img src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${key}-640x360.jpg?cache=${new Date().getMinutes()}`} />
                        <div className='is-online' />
                        <div className='name has-text-white has-background-dark'> {this.state.streams[key].display_name}&nbsp;|&nbsp;
                          <i className='fas fa-user' />&nbsp;{this.state.streams[key].viewer_count}</div>
                        <div className='status has-text-white has-background-dark'>
                          <span>{this.state.streams[key].status}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                } else return null
              })}
              {Object.keys(this.state.streams).map((key, i) => {
                if (!this.state.streams[key].online) {
                  return <div className='thumbnail column is-4-tablet is-4-desktop is-3-widescreen ' key={i}>
                    <a href={`https://www.twitch.tv/${key}`} target='_blank'>
                      <div className='image'>
                        <img src={this.state.streams[key].offline_image_url} />
                        <div className='is-offline' />
                        <div className='name has-text-white has-background-dark'> {this.state.streams[key].display_name}</div>
                      </div>
                    </a>
                  </div>
                } else return null
              })}
            </div>
          </div>
        </div>}

      </div>
    )
  }
}

export default TwitchList
