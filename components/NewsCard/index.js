import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Link from 'next/link'

import './styles.scss'

const NewsCard = (props) => (
  <div className='ga-news-card card has-ribbon is-shadowless'>
    <div className='ribbon  is-size-7'><Moment unix format='DD/MM/YYYY'>{props.created}</Moment></div>
    <Link as={`/news/${props.nid}`} href={`/news-single?nid=${props.nid}`}>
      <div>
        <div className='card-image'>
          <figure className='image is-2by1'>
            <img
              src={props.imgMobileUrl}
              srcSet={`${props.imgDesktopUrl} 288w, ${props.imgWidescreenUrl} 352w, ${props.imgFullhdUrl} 416w, ${props.imgMobileUrl} 720w`}
              sizes='(min-width: 1408px) 416px,(min-width: 1216px) 352px, (min-width: 769px) 288px,  100vw'
              alt={props.placeHolder} />
          </figure>
        </div>
        <div className='card-content '>
          <div className='content has-text-weight-semibold'>
            {props.title}
          </div>
        </div>
      </div>
    </Link>
  </div>
)

NewsCard.propTypes = {
  nid: PropTypes.number,
  title: PropTypes.string,
  imgFullhdUrl: PropTypes.string,
  imgWidescreenUrl: PropTypes.string,
  imgDesktopUrl: PropTypes.string,
  imgMobileUrl: PropTypes.string,
  created: PropTypes.number,
  placeHolder: PropTypes.string
}

export default NewsCard
