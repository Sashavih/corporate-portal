import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; 


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sfjqnft', 'template_wqid46m', form.current, 'iL1ykgQcxewUhSspn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" />
      <input type="email" name="user_email" />
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};