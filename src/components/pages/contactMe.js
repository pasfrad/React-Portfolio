import React from 'react';

export default function Contact() {
  return (
    <section>
      <form className='container p-4'>
        <section className='contactBoxes'>
          <label className='name'>Name:</label>
          <input className='form-control' type='text' id='name' placeholder='Enter name here' required/>
        </section>
        
        <section>
          <label className='contactBoxes'>Email:</label>
          <input className='form-control' type='email' id='email' placeholder='Enter email here' required/>
        </section>

        <section>
          <label className='contactBoxes'>Message:</label>
          <textarea className='form-control' id='message' placeholder='Enter message here' rows='5' cols='33' required></textarea>
        </section>

        <section className='button'>
          <button id='submitButton'>submit</button>
        </section>
      </form>
    </section>
  );
 }