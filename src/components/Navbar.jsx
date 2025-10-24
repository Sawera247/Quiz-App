import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="./public/default pfp.jpg" alt="pfp" className='pfp'/>

            <div>
                <p className="name"></p>
                <p className="id"></p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar