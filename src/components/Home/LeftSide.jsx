import React from 'react'
import './LeftSide.css'
import page1_bg from '../assets/page1_bg.png'
export default function LeftSide() {
  return (
    <>
    <img src={page1_bg} />
    <div className="topText">
    <p>Already Have an Account ?</p>
    <button>LOGIN</button>
    </div>
    <div className="bottomText">
    <p>Discover new things on SuperApp</p>
    </div>

    </>
  )
}
