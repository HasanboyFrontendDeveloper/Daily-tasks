import React from 'react'
import './Author.scss';

export const Author = () => {
  

  return (
    <>
      <div id="react-root"></div>
      <center>
        <div class='container mt-[150px] '>
        <div class='animation'>
          <div class='i-mail'>
            <div class='mail-anim'></div>
          </div>
          <div class='line'></div>
          <div class='i-success'>
            <div class='success-anim'></div>
          </div>
        </div>
        
        <div class='mt-[20px]'>
          <p className='text-[30px]'>We sent link to your email.</p>
          <p>You can log into your profile using the <br /> link we sent. Please check your email!</p>
        </div>
      </div>

      </center>
      {/* <img src="https://gkoosmoot.co.za/images/e-pos.jpg" alt="" width={550} /> */}
    </>
  )
}
