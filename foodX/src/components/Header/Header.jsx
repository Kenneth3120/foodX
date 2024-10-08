import React from 'react'
import './Header.css'

const Header = () => {
  const handleClick = () => {
    window.location.href = 'https://www.google.com'; // Navigate to Google
  }

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here!</h2>
        <p>Choose from the best menu ever on our airlines</p>
        <p className="notice"><strong>Note:</strong> The website will take around 120 seconds to load due to its free hosting on "render". Works perfect on Localhost :)</p>
        <button onClick={handleClick}>View Menu</button> {/* Added onClick */}
      </div>
    </div>
  )
}

export default Header
