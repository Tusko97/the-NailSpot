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
    
    <div className="container">
      <div className="flex gap-4">
        <div className="w-1/2">
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">Contact us</h1>
        <br></br>
          <img src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Booking" className="w-full" />
        </div>
        <div className="w-1/2 p-4 flex flex-col gap-4">
          <div className="flex gap-2 text-4xl items-center">
            <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">Contact us</h1>
          </div>
          </div>
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
                   className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80"
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
      </div>
      
      
      
      
      
    
  );
};

export default Contact;