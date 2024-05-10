import React from 'react'
import Clip from '../../assets/video/dummyVideo.mp4'
const IntroVideo = () => {
  return (
    <div>
        <video controls width='600'>
            <source src={Clip} type='video/mp4' />
        </video>
    </div>
  )
}

export default IntroVideo