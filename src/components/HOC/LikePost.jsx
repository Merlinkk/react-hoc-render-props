import React, { useState } from 'react'
import Wrap from './Wrap'

function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleCount}>Like Post {props.count}</button>
    </div>
  )
}
export default Wrap(LikePost)
