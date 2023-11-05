import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
const Product3 = () => {
  // console.log("hi", data);
  function showFeatures() {
    document.getElementById("showFeatures").classList.toggle("active");
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
      </main>

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};

export default Product3;

// export const getStaticPaths = async () => {
//   const data = await client?.getEntries({
//     content_type: "bodyfluidkitsproductdetails",
//   });

//   const paths = data?.items?.map((node) => ({
//     params: { id4: node?.fields?.id4 },
//   }));
//   console.log(paths);

//   return { paths, fallback: "blocking" };
// };

// export const getStaticProps = async (ctx) => {
//   console.log(ctx.params);
//   const data = await client?.getEntries({
//     content_type: "bodyfluidkitsproductdetails",
//     "fields.id4[in]": ctx.params.id4,
//   });
//   console.log(data);
//   if (data?.items?.length > 0) {
//     return { props: { data }, revalidate: 10 };
//   }
//   return { notFound: true };
// };
