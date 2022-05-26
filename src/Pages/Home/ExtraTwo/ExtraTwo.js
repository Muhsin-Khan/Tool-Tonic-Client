import React from 'react'
import './ExtraTwo.css'

const ExtraTwo = () => {
  return (
    <div className='container'>
        <div className="w-50 mx-auto mt-5">
            <h4 className="feedbakc-title text-2xl font-bold">Say Something about <span className='tool-tonic-title'>Tool Tonic</span></h4>
            <form className="d-flex flex-column mt-3" action="">
              <input className="mb-2 input input-bordered input-primary w-full " placeholder="Email" type="email" name="" id="" />
              <input className="mb-2 input input-bordered input-primary w-full " placeholder="Name" type="text" name="" id="" />
              <textarea className="mb-2 textarea textarea-bordered textarea-lg textarea-primary w-full" placeholder="Write your feedback..." type="text" name="" id="" />
              <input className="mb-5 btn btn-primary w-full" type="submit" name="" id="" />
            </form>
          </div>
    </div>
  )
}

export default ExtraTwo