import React from 'react'

function Navigation() {
  return (
    <>
        <nav className="absolute top-0 left-0 w-full bg-black/40 flex flex-row items-center justify-between px-10 py-5 z-10 text-white">
            <h2><a href="">Food Finder</a></h2>
            <ul className='navul flex flex-row items-center justify-between'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
            </ul>

            <div className="navbutton">
                <button>sign in</button>
            </div>
        </nav>
    </>
  )
}

export default Navigation
