import React from 'react'
import PropTypes from 'prop-types'

class Platform extends React.Component {
  render () {
    const { platform } = this.props
    const map = {
      pc: 'PC',
      ps4: 'PS4',
      wii_u: 'Wii U',
      xbox_one: 'Xbox One',
      other: 'Autre'
    }
    if (platform === 'phone') {
      return (
        <span className='ga-platform'><i className='fab fa-android' />&nbsp;&nbsp;&nbsp;<i className='fab fa-apple' /></span>
      )
    } else {
      return (
        <span className='ga-platform' >{map[platform] ? map[platform] : platform}</span>
      )
    }
  }
}

Platform.propTypes = {
  platform: PropTypes.string
}

export default Platform
