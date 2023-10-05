import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import "./Home.css"

function Home(){
    const containerStyle= {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    };

    const serviceInfoStyle = {
        display: "flex",
        flexDirection: "row", // Arrange image and text side by side
        alignItems: "right",
        justifyContent: "space-between", // Add space between image and text
        marginLeft: "20px 0", // Add margin for spacing
        marginRight: "20PX 0",
        color:"white",
        fontSize: "22px"
      };

      const imageUrl = "data:image/jpeg;base64,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"
    return (
      <div className="home-background">
      <div className="container">
      <div className="flex gap-4">
        <div className="w-1/2">
          <img src={imageUrl} alt="Booking" className="w-full" style={{width: "100%", height: "80%", padding:'20px'}}/>
        </div>
        <div className="w-1/2 p-4 flex flex-col gap-4">
          <div className="flex gap-2 text-4xl items-center">
            <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <p style={{ fontSize: '22px', fontFamily: 'Arial, sans-serif', color:"white", textAlign: "center" }}>At The Nailspot, our unwavering mission is to empower and inspire unwavering confidence in our cherished clients through the delivery of outstanding nail and hair services. We are passionately committed to crafting an oasis of hospitality and relaxation, where the artistry of beauty harmoniously melds with the marvels of innovation. With our dedicated team of seasoned professionals, we passionately utilize premium-grade products and infuse every service with a personal touch that celebrates your unique essence.

Our resolute mission extends beyond mere pampering; it is to etch an indelible mark of beauty, wellness, and self-care into your heart and soul. We aim to create an experience that transcends the ordinary—a sanctuary where each visit to The Nailspot is a transformative journey.

From revitalizing manicures and pedicures that reinvigorate tired hands and feet to exquisite hair extensions that breathe life into your tresses, we are your trusted partners in the pursuit of radiance. Our meticulous dreadlocks retouch services are a testament to our commitment to nurturing your authentic self.

In each moment you spend with us, we aspire to uplift your spirit, rejuvenate your body, and enhance your natural allure. Our ultimate goal is to be the beacon of your self-discovery and self-expression. Welcome to The Nailspot, where beauty knows no bounds, and every visit is a step towards a more confident, more radiant you.</p>
          </div>
          </div>
          </div>
    
    
            
        <div className = "h-screen" style={containerStyle}>
             <div className = "image-container" style={{marginRight: "20px"}}>
                    <img src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' 
                    alt = "1"
                    style={{ width: "100%", height: "40%", padding:'40px' }}
                    />
            </div>
            
             <div className = "image-container" style={{marginRight: "20px"}}>
             <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                  alt =" 2"
                  style={{ width: "100%", height: "40%", padding:'20px' }}
            />
            </div>
            <div className="image-container" style={{marginLeft: "40px"}}>
                <img src="https://plus.unsplash.com/premium_photo-1682098317954-252ddfcda75e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhhaXIlMjBzYWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                     alt= "3"
                     style= {{width: "100%", height: "40%", padding:'20px'}}
             />
             </div>
             </div>

       <div className="container">
      <div className="flex gap-4">
        <div className="w-1/2">
          <img src="https://images.unsplash.com/photo-1580618662966-832a2dcea59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxoYWlyJTIwc2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="6"
          style= {{width: "100%", height: "100%", padding:"20px"}} />
        </div>
        <div className="w-1/2 p-4 flex flex-col gap-4">
          <div className="flex gap-2 text-4xl items-center">
            <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
              <i className="fa-solid fa-heart"></i>
            </div>
            <p style={{ fontSize: '22px', fontFamily: 'Arial, sans-serif', color:"white", textAlign: "center" }}>
          At The Nailspot, we are dedicated to providing exceptional beauty
            and relaxation services to our valued clients.<br></br> Our skilled
            professionals offer a wide range of services, including manicure,
            pedicure, hair extension, and dreadlocks retouch.<br></br> We take pride in
            creating a welcoming and rejuvenating environment where beauty and
            innovation meet. <br></br>Our mission is to empower and inspire confidence
            in every individual we serve,<br></br> enhancing their natural beauty with
            premium products and personalized care. <br></br>We invite you to experience
            the epitome of beauty, wellness, <br></br>and self-care by booking a slot
            with us today. Your journey to confidence and relaxation starts
            here.
          </p>
          </div>
          </div>
       
      </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </div>
        </div>
        </div>
        
        
        
        
    )

}



export default Home