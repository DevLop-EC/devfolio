import React from 'react';
import ButtonForm from './ButtonForm/ButtonForm';

import emailjs from '@emailjs/browser';

import './sass/contact.scss';
function Contact() {
  const [loading, setLoading] = React.useState(false);
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      emailjs
        .sendForm(
          'gmail',
          'resumecl',
          form.current,
          'user_wLCdUG5UvVFPb2hOAjJ95',
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="numbered-heading overline">What's Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        I’m currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll surely get back
        to you!
      </p>
      <form ref={form}>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="message"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>

        <ButtonForm loading={loading} sendEmail={sendEmail}>
          Send
        </ButtonForm>
      </form>
    </section>
  );
}
export default Contact;
