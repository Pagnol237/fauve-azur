import React from 'react'
import PropTypes from 'prop-types'

function YoutubeEmbed({embedId}) {
  return (
    <div>
        <iframe
        width='100%'
        height='200px'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder='0'
        allow='accelerometer;autoplay,clipboard-write;encrypted-media;gyroscope;picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
        />
    </div>
  )
}

export default YoutubeEmbed