import React from 'react'
import Header from './home/Header'
import './Messenger.css'

export default function Messenger() {
  return (
    <div>
      <Header />
      <div id="frame">
        <div className="content">
          <div className="contact-profile">
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <p>Harvey Specter</p>
          </div>
          <div className="messages position-absolute">
            <ul>
              <li className="sent">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
              </li>
              <li className="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>When you're backed against the wall, break the god damn thing down.</p>
              </li>
              <li className="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Excuses don't win championships.</p>
              </li>
              <li className="sent">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>Oh yeah, did Michael Jordan tell you that?</p>
              </li>
              <li className="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>No, I told him that.</p>
              </li>
              <li className="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>What are your choices when someone puts a gun to your head?</p>
              </li>
              <li className="sent">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>What are you talking about? You do what they say or they shoot you.</p>
              </li>
              <li className="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
              </li>
            </ul>
          </div>
          <div className="message-input mb-4">
            <div className="wrap d-flex justify-content-center">
              <input className="rounded-pill ps-4" type="text" placeholder="Write your message..." />
              <button className="submit ms-3">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}