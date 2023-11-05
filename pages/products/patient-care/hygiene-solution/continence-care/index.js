import CommonButton from "@/components/common/CommonButton";
import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import APIUrls from "@/pages/api/api";
import { useEffect, useState } from "react";

const continencecare = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(APIUrls.categoryPage);
        const json = await response.json();
        console.log(json.data);

        setData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  // console.log("hi", data);
  // function showFeatures() {
  //   document.getElementById("showFeatures").classList.toggle("active");
  // }

  // function showOverlay() {
  //   var modal = document.getElementById("overlay");
  //   var btn = document.getElementsByClassName("overlayBtn")[0];
  //   var span = document.getElementsByClassName("close")[0];
  //   btn.onclick = function () {
  //     modal.style.display = "block";
  //   };
  //   span.onclick = function () {
  //     modal.style.display = "none";
  //   };
  //   window.onclick = function (event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   };
  // }

  return (
    <>
      <PageTitle title="Our Products" />
      <main id="OurProducts">
        <div className="productLanding" style={{ flexWrap: "wrap" }}>
          {data.map((e, index) => {
            if (
              e.attributes.main_caategory_l_3.data?.attributes.slug ===
              "continence-care"
            ) {
              return (
                //
                //   {/* <div className="pathBoxAndToggleBtn">
                //     <div className="toggleBtn" onClick={showLinks}>
                //       <Image
                //         src="/assets/images/menu.png"
                //         height={30}
                //         width={30}
                //         alt="menu"
                //       />
                //     </div>
                //     <div className="pathBox">
                //       <h1> {pathName}</h1>
                //       <h5>
                //         Home / Our Products / Patient Care / Hygiene Solution /
                //         {e?.fields?.pagename} / <span>Body Fluid Spill Kit</span>
                //       </h5>
                //     </div>
                //   </div> */}

                // </main>
                //             <div className="productLanding">
                //               {/* <div className="productLandingLeft" id="productLandingLeft">
                //   <h4>Patient Care</h4> */}
                //               {/* <h5>Hygiene Solutions</h5>
                //   <div className="links">
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span className="active">Toileting</span>
                //     </Link>
                //     <div className="subLinks">
                //       <Link href="#" style={{ textDecoration: "none" }} >
                //         <span className="activeSubLink">Body Fluid Spill Kit</span>
                //       </Link>
                //       <Link href="#" style={{ textDecoration: "none" }} >
                //         <span>Disposable Medical Pulp Containers</span>
                //       </Link>
                //       <Link href="#" style={{ textDecoration: "none" }} >
                //         <span>Commodes</span>
                //       </Link>
                //       <Link href="#" style={{ textDecoration: "none" }} >
                //         <span>Storage</span>
                //       </Link>
                //     </div>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Bathing</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Continence Care</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Hospital Macerators</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Cleaning & Disinfection</span>
                //     </Link>
                //   </div> */}
                //               {/* <h5>Surgical Solutions</h5>
                //   <div className="links">
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Procedure Packs</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Tubular Bandages</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Swabs & Gauze</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Laparoscopic</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Sterile Service Consumables</span>
                //     </Link>
                //   </div>
                //   <h4>Diagnostics</h4>
                //   <div className="links">
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Procedure Packs</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Tubular Bandages</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Swabs & Gauze</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Laparoscopic</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Sterile Service Consumables</span>
                //     </Link>
                //   </div>
                //   <h4>Medical Devices</h4>
                //   <div className="links">
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Procedure Packs</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Tubular Bandages</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Swabs & Gauze</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Laparoscopic</span>
                //     </Link>
                //     <Link href="#" style={{ textDecoration: "none" }} >
                //       <span>Sterile Service Consumables</span>
                //     </Link>
                //   </div>
                // </div> */}

                //             </div>

                <div className="productLandingRight" key={index}>
                  {/* <p>{e.attributes.pagedescription}</p> */}
                  <div className="productCardContaioners">
                    <div id="ProductCards">
                      <div
                        className="productImg"
                        style={{ textAlign: "center" }}
                      >
                        {e.attributes.cImage && (
                          <img
                            src={e.attributes.cImage.data.attributes.url}
                            height={190}
                            width={250}
                            layout="responsive"
                            alt="productImg"
                          />
                        )}
                      </div>
                      <div className="productData">
                        <div className="productdetails">
                          <h5 style={{ fontSize: "20px" }}>
                            {e.attributes.categoryName}
                          </h5>
                          <h6>{e.attributes.description}</h6>
                        </div>
                        <CommonButton
                          btnText="View Product"
                          link={`/products/patient-care/hygiene-solution/continence-care/${e.attributes.slug}`}
                        />
                      </div>
                    </div>

                    {/* <ProductCards
              productImg="/assets/images/product2.png"
              productName="VernaGel Bottle"
              productDescription="Product Code: 456MA475"
              productLinks="/Products/Product3"
            />
            <ProductCards
              productImg="/assets/images/product3.png"
              productName="VernaGel Large Tub"
              productDescription="Product Code: 456MA400"
              productLinks="/Products/Product3"
            /> */}
                  </div>
                </div>
              );
            }
            // return (
            //   <h1>{e.attributes.main_caategory_l_3.data?.attributes?.slug}</h1>
            // );
          })}
        </div>
      </main>

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};
// export async function getStaticProps() {
//   const res = await fetch(APIUrls.categoryPage);
//   const json = await res.json();
//   const data = json.data;
//   // const fetchData = async () => {
//   //   try {
//   //     const response = await fetch(APIUrls.categoryPage);
//   //     const json = await response.json();
//   //     console.log(json);
//   //     const data = json.data;
//   //   } catch (error) {
//   //     console.log("error", error);
//   //   }
//   // };

//   const paths = data.map((article) => ({
//     params: {
//       slug: article.attributes.slug,
//     },
//   }));

//   console.log(data);

//   return { paths, fallback: "blocking" };
// }

// export async function getStaticPaths({ paths }) {
//   const { slug } = paths;
//   const res = await axios.get(`${APIUrls.categoryPage}?slug=${slug}`);
//   const data = res.data[0];

//   return {
//     props: {
//       data: fetchdata,
//     },
//   };
// }
export default continencecare;

// export async function getStaticPaths() {
//   const res = await fetch(APIUrls.categoryPage);
//   const articles = await res.json();

//   const paths = articles.data.map((article) => ({
//     params: {
//       slug: article.attributes.main_caategory_l_3.data.attributes.slug,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const res = await fetch(`${APIUrls.categoryPage}=${slug}`);
//   const data = await res.json();

//   return {
//     props: {
//       article: data.data[0],
//     },
//   };
// }
