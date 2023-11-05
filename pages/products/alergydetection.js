import CommonButton from "@/components/common/CommonButton";
import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import Image from "next/image";

const alergydetection = () => {
  // console.log("hi", productsList);
  function showFeatures() {
    document.getElementById("showFeatures").classList.toggle("active");
    document.getElementById("showResources").classList.add("active");
  }
  function showResources() {
    document.getElementById("showResources").classList.toggle("active");
    document.getElementById("showFeatures").classList.add("active");
  }

  function showOverlay() {
    var modal = document.getElementById("overlay");
    var btn = document.getElementsByClassName("overlayBtn")[0];
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
      modal.style.display = "block";
    };
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  return (
    <>
      <PageTitle title="Our Products" />
      <main id="ProductPage">
        <div className="pathBox">
          <h5>
            Home / Our Products / Patient Care / Hygiene Solution / Toileting /{" "}
            <span>Body Fluid Spill Kit</span>
          </h5>
        </div>

        <div className="productData">
          <div className="productImg">
            <Image
              src="/assets/images/alergy.jpg"
              height={535}
              width={554}
              layout="responsive"
              alt="product3"
            />
          </div>
          <div className="productDetails">
            {/* <h2>VernaGel Large Tub</h2> */}
            <h2>Allergen PCR detection</h2>
            <h3>Product Code</h3>
            <h4>Description</h4>
            {/* <p>
              VernaGel is a super absorbent polymer which prevents spillages and
              leaks by solidifying liquids, whilst still being able to be
              disposed off in a Vernacare disposal unit. Comes in a 4kg tub.
            </p> */}
            <p>
              The InviScreen® Allergen Detection is a premium quality molecular
              biology tool to provide the general laboratory and research
              personnel an easy and ready-to-use kit for the detection of
              specific allergen species in food and feed samples. For DNA
              purification prior to testing, the Invisorb® extraction kits offer
              efficient protocols for various starting materials. Benefit from
              our real-time PCR detection technology and get accurate and
              reliable results.
            </p>
            <h4>Case Dimensions 195 x 200 x 200 mm</h4>
            <div className="units">
              <Image
                src="/assets/icons/unit.png"
                height={80}
                width={80}
                alt="product3"
              />
              <h4>Units per case</h4>
            </div>
            <div className="myBtns">
              <button className="btn1" onClick={showFeatures}>
                Product Features & Benefits
                <Image
                  src="/assets/icons/icon9.png"
                  height={10}
                  width={18}
                  alt="icon9"
                />
              </button>
              <button className="btn2" onClick={showResources}>
                Resources
                <Image
                  src="/assets/icons/icon10.png"
                  height={10}
                  width={18}
                  alt="icon10"
                />
              </button>

              <div id="commonBtn" onClick={showOverlay} className="overlayBtn">
                <span>Enquire Now</span>
              </div>

              <div className="overlay" id="overlay">
                <div className="overlayContent">
                  <div className="overlayCard">
                    <div className="cardHeader">
                      <div className="productImage">
                        <Image
                          src="/assets/images/product3.png"
                          height={100}
                          width={120}
                          layout="responsive"
                          alt="product3"
                        />
                      </div>
                      <h2>VernaGel Large Tub</h2>
                      <span class="close">&times;</span>
                    </div>
                    <form>
                      <div className="enterDetails">
                        <div className="slab">
                          <div className="subSlab">
                            <h4>Your name</h4>
                            <input type="textbox"></input>
                          </div>
                          <div className="subSlab">
                            <h4>Your email</h4>
                            <input type="textbox"></input>
                          </div>
                        </div>
                        <div className="slab">
                          <div className="subSlab">
                            <h4>Your Phone Number</h4>
                            <input type="textbox"></input>
                          </div>
                          <div className="subSlab">
                            <h4>Product Quantity</h4>
                            <input type="textbox"></input>
                          </div>
                        </div>
                        <div className="slab">
                          <div className="subSlab">
                            <h4>Your message (optional)</h4>
                            <textarea />
                          </div>
                        </div>
                      </div>
                      <CommonButton btnText="Submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="showFeatures active" id="showFeatures">
              <h2>Benefits</h2>
              <h4>Reduce the risk of cross-infection</h4>
              <p>
                Vernagel solidiﬁes bodily ﬂuids, this prevents any spillages
                particularly when the bedpan or bottle is taken from the
                patient. Cross infection can occur when bodily ﬂuids spill onto
                beds, ﬂoors or onto other patients or equally when bedpans and
                urinals are taken to the sluice room.
              </p>
              <h4>Protecting patient dignity</h4>
              <p>
                Soaking wet beds are not nice to wake up to and the cleaning
                required can also be very time consuming and inconvenient for
                the nurse. Vernagel solidiﬁes liquids eliminating spillages and
                splash backs thus increasing patient conﬁdence and protecting
                the dignity of your patient through the night.
              </p>
              <h4>Eases nurse workload and saves laundry costs</h4>
              <p>
                Trials carried out in four hospitals conﬁrmed that by preventing
                spills Vernagel could save an average ward 135 days a year in
                nurse time around 2.5 lakhs a year on laundry costs.
              </p>
            </div>
            <div className="showresources active" id="showResources">
              <h2>Resources</h2>
              <p>Click to download the PDF files</p>
              <div className="resources-design">
                <div className="btns">
                  <button>file1</button>
                  <button>file2</button>
                </div>
                {/* <div></div> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};

export default alergydetection;

// export const getStaticPaths = async () => {
//   const data = await client?.getEntries({
//     content_type: "products",
//   });

//   const paths = data?.items?.map((node) => ({
//     params: { id: node?.fields?.id },
//   }));
//   console.log(paths);

//   return { paths, fallback: "blocking" };
// };

// export const getStaticProps = async (ctx) => {
//   console.log(ctx.params);
//   const data = await client?.getEntries({
//     content_type: "products",
//     "fields.id[in]": ctx.params.id,
//   });
//   console.log(data);
//   if (data?.items?.length > 0) {
//     return { props: { data }, revalidate: 10 };
//   }
//   return { notFound: true };
// };
