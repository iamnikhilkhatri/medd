import { ROUTES } from "@/common/constants";
import FooterComponent from "@/components/FooterComponent";
import CommonButton from "@/components/common/CommonButton";
import Footer from "@/components/common/Footer";
import WorkWithUs from "@/components/common/WorkWithUs";
import Image from "next/image";

export default function index() {
  // console.log("hi", blogList, productsList);
  function scroll_left() {
    if (window.screen.width <= "1270") {
      document.getElementById("scroll").scrollBy(-375, 0);
    } else {
      document.getElementById("scroll").scrollBy(-625, 0);
    }
  }
  function scroll_right() {
    if (window.screen.width <= "1270") {
      document.getElementById("scroll").scrollBy(375, 0);
    } else {
      document.getElementById("scroll").scrollBy(625, 0);
    }
  }

  return (
    <>
      <main id="HomePage">
        {/* ------------------------------ landing area ------------------------------  */}

        <div className="landingSection">
          <div className="landingArea">
            <div className="landingTop">
              <div className="landingTopLeft">
                <h2>
                  Single Use <br /> Human Waste Disposable <br /> System
                </h2>
              </div>
              <div className="landingTopRight">
                <Image
                  src="/assets/images/img3.png"
                  height={260}
                  width={400}
                  layout="responsive"
                  alt="img3"
                />
              </div>
            </div>
            <div className="landingBottom">
              <div className="landingBottomLeft">
                <ul>
                  <li>
                    <Image
                      src="/assets/icons/bullet.png"
                      height={20}
                      width={20}
                      alt="bullet"
                    />
                    Infection Prevention
                  </li>
                  <li>
                    <Image
                      src="/assets/icons/bullet.png"
                      height={20}
                      width={20}
                      alt="bullet"
                    />
                    Nursing Time Management
                  </li>
                  <li>
                    <Image
                      src="/assets/icons/bullet.png"
                      height={20}
                      width={20}
                      alt="bullet"
                    />
                    Sustainable Solution
                  </li>
                  <li>
                    <Image
                      src="/assets/icons/bullet.png"
                      height={20}
                      width={20}
                      alt="bullet"
                    />
                    Cost Saving Solution
                  </li>
                </ul>
                <div className="imgBtn">
                  <Image
                    src="/assets/images/img1.png"
                    height={31}
                    width={120}
                    alt="img3"
                  />
                </div>
              </div>
              <div className="landingBottomRight">
                <div className="landingBottomRightLeft">
                  <Image
                    src="/assets/images/img2.png"
                    height={400}
                    width={620}
                    layout="responsive"
                    alt="img3"
                  />
                </div>
                <div className="landingBottomRightRight">
                  <Image
                    src="/assets/images/img4.png"
                    height={400}
                    width={400}
                    layout="responsive"
                    alt="img3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------ Cards------------------------------  */}

        <div className="cardContainer">
          <div className="myCard">
            <Image
              src="/assets/images/card1.png"
              height={95}
              width={95}
              alt="card1"
            />
            <h4>Goods</h4>
            <p>
              We pride in bringing innovative products which can improve and
              help in better diagnostics and healthcare.
            </p>
          </div>

          <div className="myCard">
            <Image
              src="/assets/images/card2.png"
              height={95}
              width={95}
              alt="card1"
            />
            <h4>Ideas</h4>
            <p>
              Combining the ideation of the customer with the deep understanding
              of the healthcare Industry to achieve out a targeted outcome.
            </p>
          </div>

          <div className="myCard">
            <Image
              src="/assets/images/card3.png"
              height={95}
              width={95}
              alt="card1"
            />
            <h4>Services</h4>
            <p>
              Scientific and Professional approach to pre and post sales
              services.
            </p>
          </div>

          <div className="myCard">
            <Image
              src="/assets/images/card4.png"
              height={95}
              width={95}
              alt="card1"
            />
            <h4>Solutions</h4>
            <p>
              Providing customized client specific solutions by optimizing the
              client’s resources with available options to achieve the desired
              outcome.
            </p>
          </div>
        </div>

        {/* ------------------------------ image and data section - 1 ------------------------------  */}

        <div className="imgAndDataSection">
          <div className="imgSection">
            <Image
              src="/assets/images/img5.png"
              height={500}
              width={500}
              layout="responsive"
              alt="img5"
            />
          </div>
          <div className="dataSection">
            <h2>Medley Healthcare</h2>
            <p>
              Medley Healthcare specializes in providing unique healthcare
              solutions. We are the innovators in technology services and
              partner with renowned companies which provide niche products and
              services, all under the umbrella of Medley. The core competency
              lies in diagnostics and revolutionizing the medical treatment
              structure.
            </p>
            <div className="myBtn">
              <CommonButton btnText="Read More" link={ROUTES?.ABOUT_US} />
            </div>
          </div>
        </div>

        {/* ------------------------------ image and data section - 2 ------------------------------  */}

        <div className="imgAndDataSection imgAndDataSection2">
          <div className="dataSection">
            <h2>Why Choose Us?</h2>
            <p>
              By applying effective and comprehensive technologies to medical
              testing, we assure to pave way for the next best thing in
              diagnostic pathology. Our strength involves a complete
              understanding and mapping of the customers’ requirements and offer
              customized solutions through superior futuristic technologies.
            </p>
            <div className="myBtn">
              <CommonButton btnText="Read More" link={ROUTES?.ABOUT_US} />
            </div>
          </div>
          <div className="imgSection">
            <Image
              src="/assets/images/img6.png"
              height={500}
              width={500}
              layout="responsive"
              alt="img6"
            />
          </div>
        </div>

        {/* ------------------------------ Work With US ------------------------------  */}
        <WorkWithUs />

        {/* ------------------------------ testimonials ------------------------------  */}

        <div className="testimonialsSection">
          <div className="testimonialHeading">
            <div className="icoma">
              <Image
                src="/assets/icons/i_coma.png"
                height={66}
                width={92}
                layout="responsive"
                alt="i_coma"
              />
            </div>
            <h4>Testimonials</h4>
            <div className="icoma">
              <Image
                src="/assets/icons/i_coma_2.png"
                height={66}
                width={92}
                layout="responsive"
                alt="i_coma_2"
              />
            </div>
          </div>

          <div className="testimonialCardContaioner" id="scroll">
            <div className="scroallableContainer">
              <div className="myCard">
                <div className="cardPic">
                  <Image
                    src="/assets/images/user1.png"
                    height={115}
                    width={115}
                    alt="user1"
                  />
                </div>
                <div className="cardData">
                  <h5>Sofia Potter</h5>
                  <div className="stars">
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                  </div>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>

              <div className="myCard">
                <div className="cardPic">
                  <Image
                    src="/assets/images/user2.png"
                    height={115}
                    width={115}
                    alt="user1"
                  />
                </div>
                <div className="cardData">
                  <h5>Jordan Browler</h5>
                  <div className="stars">
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                  </div>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>

              <div className="myCard">
                <div className="cardPic">
                  <Image
                    src="/assets/images/user1.png"
                    height={115}
                    width={115}
                    alt="user1"
                  />
                </div>
                <div className="cardData">
                  <h5>Sofia Potter</h5>
                  <div className="stars">
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                  </div>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>

              <div className="myCard">
                <div className="cardPic">
                  <Image
                    src="/assets/images/user2.png"
                    height={115}
                    width={115}
                    alt="user1"
                  />
                </div>
                <div className="cardData">
                  <h5>Jordan Browler</h5>
                  <div className="stars">
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                    <Image
                      src="/assets/icons/Star.png"
                      height={27}
                      width={27}
                      alt="star"
                    />
                  </div>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="myBtns">
            <button onClick={scroll_left}>
              <Image
                src="/assets/icons/left_btn.png"
                height={40}
                width={40}
                alt="ltft_btn"
              />
            </button>
            <button onClick={scroll_right}>
              <Image
                src="/assets/icons/right_btn.png"
                height={40}
                width={40}
                alt="right_btn"
              />
            </button>
          </div>
        </div>

        {/* ------------------------------ news and events section ------------------------------  */}

        <div className="newsAndEventsSection">
          <h2>Latest News & Events</h2>
          <div className="newsAndEventsCardContainer">
            {/* {blogList &&
              blogList?.map((item) => {
                console.log(item);
                return <BlogCard item={item} />;
              })} */}
          </div>
          <CommonButton btnText="Read More" link={ROUTES?.BLOGS} />
        </div>
      </main>

      <Footer myComponent={<FooterComponent />} />
    </>
  );
}
// export async function getStaticProps() {
//   const data = await client?.getEntries({
//     content_type: "blogs",
//   });
//   const data2 = await client?.getEntries({
//     content_type: "products",
//   });

//   return {
//     props: { blogList: data?.items, productsList: data2?.items },
//     revalidate: 10,
//   };
// }
// export async function getStaticProps2() {
//   const data = await client?.getEntries({
//     content_type: "products",
//   });
//   return { props: { productsList: data?.items }, revalidate: 10 };
// }
