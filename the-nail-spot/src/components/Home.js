import React from "react";
import Header from "./Header";
import Footer from "./Footer"

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
        margin: "20px 0", // Add margin for spacing
        color:"silver",
        fontSize: "22px"
      };
    return (
        <div>
            <div style = {containerStyle}>
            <div>
          <img
            src="/images/THE Nailspot.png"
            alt="3"
            style={{ width: "70%", height: "200%" }}
           
          />
        </div>
        </div>
       
        <div>
            <p style={{ fontSize: '22px', fontFamily: 'Arial, sans-serif', color:"silver", textAlign: "center" }}>At The Nailspot, our unwavering mission is to empower and inspire unwavering confidence in our cherished clients through the delivery of outstanding nail and hair services. We are passionately committed to crafting an oasis of hospitality and relaxation, where the artistry of beauty harmoniously melds with the marvels of innovation. With our dedicated team of seasoned professionals, we passionately utilize premium-grade products and infuse every service with a personal touch that celebrates your unique essence.

Our resolute mission extends beyond mere pampering; it is to etch an indelible mark of beauty, wellness, and self-care into your heart and soul. We aim to create an experience that transcends the ordinary—a sanctuary where each visit to The Nailspot is a transformative journey.

From revitalizing manicures and pedicures that reinvigorate tired hands and feet to exquisite hair extensions that breathe life into your tresses, we are your trusted partners in the pursuit of radiance. Our meticulous dreadlocks retouch services are a testament to our commitment to nurturing your authentic self.

In each moment you spend with us, we aspire to uplift your spirit, rejuvenate your body, and enhance your natural allure. Our ultimate goal is to be the beacon of your self-discovery and self-expression. Welcome to The Nailspot, where beauty knows no bounds, and every visit is a step towards a more confident, more radiant you.</p>
            </div>   
            
        <div className = "h-screen" style={containerStyle}>
             <div className = "image-container" style={{marginRight: "20px"}}>
                    <img src = '/images/blake-wisz-q3o_8MteFM0-unsplash.jpg' 
                    alt = "1"
                    style={{ width: "70%", height: "40%" }}
                    />
            </div>
            
             <div className = "image-container" style={{marginRight: "20px"}}>
             <img src="/images/benyamin-bohlouli-SmDZa6NlwMg-unsplash.jpg" 
                  alt =" 2"
                  style={{ width: "100%", height: "40%" }}
            />
            </div>
            <div className="image-container" style={{marginLeft: "20px"}}>
                <img src="./images/kelly-sikkema-KJ-us7cIsl0-unsplash.jpg"
                     alt= "3"
                     style= {{width: "100%", height: "40%"}}
             />
             </div>
             </div>
             
             <div style={containerStyle}>
        <div className="image-container" style={{ width: "50%" }}>
          <img
            src="./images/nailspot8.jpg"
            alt="4"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div style={serviceInfoStyle}>
          <p>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </div>
        
        
    )

}



export default Home