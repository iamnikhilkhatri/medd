import { REGEX } from "@/common/constants";
import MapComponent from "@/components/MapComponent";
import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import { message as toast } from "antd";
import Image from "next/image";
import { useState } from "react";

const ContactUs = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleContactForm = (e) => {
    e?.preventDefault();
    const { name, email, phone, subject, message } = contactDetails;
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      toast?.error("Please enter required fields!");
    } else if (!REGEX?.EMAIL?.test(email)) {
      toast?.error("Enter valid email!");
    } else if (!REGEX?.PHONE?.test(phone)) {
      toast?.error("Enter valid phone!");
    }
  };

  const handleInputChange = (e) => {
    const { value, name } = e?.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  return (
    <>
      <PageTitle title="Contact Us" />
      <main id="ContactUs">
        <div className="contactUsImg"></div>

        <div className="contactUsData">
          <div className="slab">
            <div className="slabImg">
              <Image
                src="/assets/icons/cs_phone.png"
                height={60}
                width={60}
                alt="cs_phone"
              />
            </div>
            <div className="slabData">
              <h5>Call Us</h5>
              <h6>+91 9871742111 | +91 9999444055</h6>
            </div>
          </div>

          <div className="slab">
            <div className="slabImg">
              <Image
                src="/assets/icons/cs_location.png"
                height={60}
                width={60}
                alt="cs_location"
              />
            </div>
            <div className="slabData">
              <h5>Reach Us</h5>
              <h6>J-10/ 28, Rajouri Garden, New Delhi - 110027</h6>
            </div>
          </div>

          <div className="slab">
            <div className="slabImg">
              <Image
                src="/assets/icons/cs_email.png"
                height={60}
                width={60}
                alt="cs_email"
              />
            </div>
            <div className="slabData">
              <h5>Mail Us</h5>
              <h6>info@medleyhealthcare.in</h6>
            </div>
          </div>

          <form onSubmit={handleContactForm}>
            <div className="formSlab">
              <div className="formSubSlab">
                <h6>Your name</h6>
                <input
                  type="text"
                  value={contactDetails?.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="formSubSlab">
                <h6>Your email</h6>
                <input
                  type="text"
                  value={contactDetails?.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="formSubSlab">
                <h6>Your Phone Number</h6>
                <input
                  type="text"
                  value={contactDetails?.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="formSubSlab">
                <h6>Subject</h6>
                <input
                  type="text"
                  value={contactDetails?.subject}
                  name="subject"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="formSlab">
              <div className="formSubSlab formSubSlabTextArea">
                <h6>Your message (optional)</h6>
                <textarea
                  value={contactDetails?.message}
                  name="message"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="formBtn">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </main>
      <div className="ourProductFooter contactUsFooter">
        <Footer myComponent={<MapComponent />} />
      </div>
    </>
  );
};

export default ContactUs;
