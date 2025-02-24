"use client";
import Header from "../_components/Header"

import ContactUs from "../_components/ContactUs2"
import Footer from "../_components/Footer"
import WhatsApp from "../_components/WhatsApp";
import ContactUsToday from "../_components/ContactUsToday";
const GetInTouch = () => {
    return (
        <section>
          <div className="bg-contactus_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh]">
              <Header />
              <WhatsApp />
          </div>
          
          <ContactUsToday />
          <ContactUs />
          <Footer />
        </section>
    )
}

export default GetInTouch