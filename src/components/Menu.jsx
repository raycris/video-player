import React from 'react'

const Menu = ({ onSelectVideo, videoValues }) => {
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((value, index) => (
        <div key={index}>
          <input type="radio" name="src" value={value} />
          {value}
        </div>
      ))}
    </form>
  )
}

export default Menu