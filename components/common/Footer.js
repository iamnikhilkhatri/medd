import { REGEX, ROUTES } from "@/common/constants";
import { message as toast } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer({ myComponent: myComponent }) {
  const [contactDetails, setContactDetails] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e?.preventDefault();
    const { email } = contactDetails;
    if (!email?.trim()) {
      toast?.error("Please enter email!");
    } else if (!REGEX?.EMAIL?.test(email)) {
      toast?.error("Enter valid email!");
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
    <div id="Footer">
      {myComponent}

      <div className="footerData">
        <div className="contactInfo">
          <h5>Conatct Information</h5>
          <div className="contactSlab">
            <Image
              src="/assets/icons/f_phone.png"
              height={51}
              width={51}
              alt="f_phone"
            />
            <span>
              <a href="tel:+919871742111" className="text-decoration-none">
                +91 - 98 717 42 111
              </a>
            </span>
          </div>
          <div className="contactSlab">
            <Image
              src="/assets/icons/f_email.png"
              height={51}
              width={51}
              alt="f_email"
            />
            <span>
              <a
                href="mailto:info@medleyhealthcare.i"
                className="text-decoration-none"
              >
                info@medleyhealthcare.i
              </a>
            </span>
          </div>
        </div>
        <div className="quickLinks">
          <h5>Quick Links</h5>
          <ul>
            <Link href={ROUTES?.HOME} className="text-decoration-none">
              <Image
                src="/assets/icons/icon5.png"
                height={9}
                width={9}
                alt="icon5"
              />
              <span>Home</span>
            </Link>

            <Link href={ROUTES?.ABOUT_US} className="text-decoration-none">
              <Image
                src="/assets/icons/icon5.png"
                height={9}
                width={9}
                alt="icon5"
              />
              <span>Who we are</span>
            </Link>

            <Link href={ROUTES?.WORK_WITH_US} className="text-decoration-none">
              <Image
                src="/assets/icons/icon5.png"
                height={9}
                width={9}
                alt="icon5"
              />
              <span>Work with us</span>
            </Link>

            <Link href={ROUTES?.OUR_PRODUCTS} className="text-decoration-none">
              <Image
                src="/assets/icons/icon5.png"
                height={9}
                width={9}
                alt="icon5"
              />
              <span>Products</span>
            </Link>
            <Link href={ROUTES?.BLOGS} className="text-decoration-none">
              <Image
                src="/assets/icons/icon5.png"
                height={9}
                width={9}
                alt="icon5"
              />
              <span>Blogs</span>
            </Link>
            <Link href={ROUTES?.CONTACT_US} className="text-decoration-none">
              <Image
                src="/assets/icons/icon5.png"
                height={9}
                width={9}
                alt="icon5"
              />
              <span>Contact Us</span>
            </Link>
          </ul>
        </div>
        <div className="followUs">
          <h5>Follow Us</h5>
          <div className="contactSlab">
            <Image
              src="/assets/icons/f_facebook.png"
              height={50}
              width={50}
              alt="f_facebook"
            />
            <span>Facebook</span>
          </div>
          <div className="contactSlab">
            <Image
              src="/assets/icons/f_twitter.png"
              height={50}
              width={50}
              alt="f_twitter"
            />
            <span>Twitter</span>
          </div>
        </div>
        <div className="subscribeUs">
          <h5>Subscribe Us!</h5>
          <p>Enjoy all the latest stories, tips, news & useful advice!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              onChange={handleInputChange}
            ></input>
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
