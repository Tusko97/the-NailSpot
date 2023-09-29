import React, { useState } from "react";
import Footer from "./Footer";


const Contact= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    "sendForm('service_5lxs01n', 'template_iwd41x6', e.target, 'FsFo6NjUnXqn1M2EQ')"
      .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          setShowSuccessMessage(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      
      <div className="container">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <br></br>
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="name">Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <br></br>
              <br></br>
              <div className="form my-3">
                <label htmlFor="email">Email</label>
                <br></br>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br></br>
              <br></br>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <br></br>
                <textarea
                  rows={4}
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                {showSuccessMessage ? (
                  <p className="text-success">Thank you for your feedback!</p>
                ) : (
                  <button
                    className="my-2 px-4 mx-auto btn btn-dark"
                    type="submit"
                  >
                    Send
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      
      
      
      
      <Footer />
    </>
  );
};

export default Contact;