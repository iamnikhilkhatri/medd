import CommonButton from "@/components/common/CommonButton";
import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import Image from "next/image";
import img from "../../../public/assets/images/img3.png";
// const OurProducts = ({ data }) => {
const OurProducts = () => {
  const arra = [
    "bodyfluidkits",
    "disposablemedicalpulpcontainers",
    "commodes",
    "storage",
  ];
  // console.log(data);
  function showLinks() {
    document.getElementById("productLandingLeft").classList.toggle("active");
  }
  // const pathname = usePathname();
  // const pathName = pathname.substring(1, pathname.length - 1);
  return (
    <>
      <PageTitle title="Our Products" />
      <main id="OurProducts">
        <div className="pathBoxAndToggleBtn">
          <div className="toggleBtn" onClick={showLinks}>
            <Image
              src="/assets/images/menu.png"
              height={30}
              width={30}
              alt="menu"
            />
          </div>
          <div className="pathBox">
            {/* <h1> {pathName}</h1> */}
            <h5>
              Home / Our Products / Patient Care / Hygiene Solution / /{" "}
              <span>Body Fluid Spill Kit</span>
            </h5>
          </div>
        </div>

        <div className="productLanding">
          {/* <div className="productLandingLeft" id="productLandingLeft">
            <h4>Patient Care</h4> */}
          {/* <h5>Hygiene Solutions</h5>
            <div className="links">
              <Link href="#" style={{ textDecoration: "none" }} >
                <span className="active">Toileting</span>
              </Link>
              <div className="subLinks">
                <Link href="#" style={{ textDecoration: "none" }} >
                  <span className="activeSubLink">Body Fluid Spill Kit</span>
                </Link>
                <Link href="#" style={{ textDecoration: "none" }} >
                  <span>Disposable Medical Pulp Containers</span>
                </Link>
                <Link href="#" style={{ textDecoration: "none" }} >
                  <span>Commodes</span>
                </Link>
                <Link href="#" style={{ textDecoration: "none" }} >
                  <span>Storage</span>
                </Link>
              </div>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Bathing</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Continence Care</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Hospital Macerators</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Cleaning & Disinfection</span>
              </Link>
            </div> */}
          {/* <h5>Surgical Solutions</h5>
            <div className="links">
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Procedure Packs</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Tubular Bandages</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Swabs & Gauze</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Laparoscopic</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Sterile Service Consumables</span>
              </Link>
            </div>
            <h4>Diagnostics</h4>
            <div className="links">
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Procedure Packs</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Tubular Bandages</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Swabs & Gauze</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Laparoscopic</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Sterile Service Consumables</span>
              </Link>
            </div>
            <h4>Medical Devices</h4>
            <div className="links">
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Procedure Packs</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Tubular Bandages</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Swabs & Gauze</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Laparoscopic</span>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }} >
                <span>Sterile Service Consumables</span>
              </Link>
            </div>
          </div> */}
          <div className="productLandingRight">
            <p>
              Innovative solutions that help reduce the risk of cross-infection,
              making human waste management a safer, easier and more dignified
              process for everyone involved.
            </p>
            <div className="productCardContaioners">
              <div id="ProductCards">
                <div className="productImg">
                  <Image
                    src={img}
                    height={300}
                    width={384}
                    layout="responsive"
                    alt="productImg"
                  />
                </div>
                <div className="productData">
                  <div className="productdetails">
                    <h5 style={{ fontSize: "20px" }}>Body Fluid Spill Kit</h5>
                    <h6>
                      A Dry Granule With Rapid Absorption Properties Which
                      Stabilises Bodily Fluids And Other Medical Waste Into An
                      Easily Transportable...
                    </h6>
                  </div>
                  <CommonButton
                    btnText="View Product"
                    link={`/ourproducts/hygiene-solution/toiletingproducts/bodyfluidkits-productdetails}`}
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
        </div>
      </main>

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};

export default OurProducts;

{
  /* <ProductCards productImg="/assets/images/product1.png" productName="VernaGel 100 Sachets" productDescription="Product Code: 450SC100" /> */
}

// export const getStaticPaths = async () => {
//   const data = await client?.getEntries({
//     content_type: "ourproducts",
//   });

//   const paths = data?.items?.map((node) => ({
//     params: { id2: node?.fields?.id2 },
//   }));
//   console.log(paths);

//   return { paths, fallback: "blocking" };
// };

// export const getStaticProps = async (ctx) => {
//   console.log(ctx.params);
//   const data = await client?.getEntries({
//     content_type: "ourproducts",
//     "fields.id2[in]": ctx.params.id2,
//   });
//   console.log(data);
//   if (data?.items?.length > 0) {
//     return { props: { data }, revalidate: 10 };
//   }
//   return { notFound: true };
// };
