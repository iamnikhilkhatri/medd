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
