import React, { useState } from 'react';


const BookASlot = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to your backend

    // Clear form fields after submission
    setName('');
    setEmail('');
    setService('');
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="container">
      <div className="flex gap-4">
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGFuJTIwYXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Booking" className="w-full" />
        </div>
        <div className="w-1/2 p-4 flex flex-col gap-4">
          <div className="flex gap-2 text-4xl items-center">
            <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">Book A Slot</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form my-3">
              <label htmlFor="name">Name</label>
              <br />
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
            <div className="form my-3">
              <label htmlFor="email">Email</label>
              <br />
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
               <div className="form my-3">
              <label htmlFor="service">Service</label>
              <br />
              <input
                type="service"
                className="form-control"
                id="service"
                name="serive"
                placeholder="manicure, pedicure, hair styling etc "
                value={service}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br></br>
            <div className="form my-3">
              <label htmlFor="date">Date</label>
              <br />
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </div>
<br></br>
            <div className="form my-3">
              <label htmlFor="time">Time</label>
              <br />
              <input
                type="time"
                className="form-control"
                id="time"
                name="time"
                value={selectedTime}
                onChange={handleTimeChange}
                required
              />
            </div>
            <br></br>
            <div className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80">
              <button className="my-2 px-4 mx-auto btn btn-dark" type="submit">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};




export default BookASlot;