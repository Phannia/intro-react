import React from 'react'

const Tags = (props) => {
  return (
    <span className= {' w-100 badge ' + props.color}>
        {props.text}
    </span>
  )
}

export default Tags;