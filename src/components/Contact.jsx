import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>


      <main>
        <h1>contact Us</h1>
        <form >

          <div>
           <label htmlFor="labelName"> Name</label>
           <input type="text " required placeholder='Enter Name' />
          </div>

          <div>
           <label htmlFor="email"> Email</label>
           <input type="email " required placeholder='Enter Email' />
          </div>
          <div>
           <label htmlFor="message"> Message</label>
           <input type="text" required placeholder='Tell us about your query' />
          </div>

          <button type='submit'>send</button>

        </form>

      </main>
    </div>
  )
}
