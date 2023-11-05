import { ROUTES } from "@/common/constants";

import Image from "next/image";
import Link from "next/link";
import CommonButton from "./CommonButton";

const Header = () => {
  function showOption1() {
    document.getElementById("option1").classList.add("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option1Links").classList.add("active");
    document.getElementById("option2Links").classList.remove("active");
    document.getElementById("option3Links").classList.remove("active");
  }

  function showOption2() {
    document.getElementById("option2").classList.add("active");
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option1Links").classList.remove("active");
    document.getElementById("option3Links").classList.remove("active");
    document.getElementById("option2Links").classList.add("active");
  }
  function showMore() {
    document.getElementById("morelinkshow").classList.toggle("morelink");
    document.getElementById("morelinkshow").classList.add("active-morelink");
    // document.getElementById("option1").classList.remove("active");
    // document.getElementById("option3").classList.remove("active");
    // document.getElementById("option1Links").classList.remove("active");
    // document.getElementById("option3Links").classList.remove("active");
    // document.getElementById("option2Links").classList.add("active");
  }
  function showMore2() {
    document.getElementById("morelinkshow2").classList.toggle("morelink2");
    document.getElementById("morelinkshow2").classList.add("active-morelink2");
    // document.getElementById("option1").classList.remove("active");
    // document.getElementById("option3").classList.remove("active");
    // document.getElementById("option1Links").classList.remove("active");
    // document.getElementById("option3Links").classList.remove("active");
    // document.getElementById("option2Links").classList.add("active");
  }
  function showMore3() {
    document.getElementById("morelinkshow3").classList.toggle("morelink3");
    document.getElementById("morelinkshow3").classList.add("active-morelink3");
    // document.getElementById("option1").classList.remove("active");
    // document.getElementById("option3").classList.remove("active");
    // document.getElementById("option1Links").classList.remove("active");
    // document.getElementById("option3Links").classList.remove("active");
    // document.getElementById("option2Links").classList.add("active");
  }
  function showMore4() {
    document.getElementById("morelinkshow4").classList.toggle("morelink4");
    document.getElementById("morelinkshow4").classList.add("active-morelink4");
    // document.getElementById("option1").classList.remove("active");
    // document.getElementById("option3").classList.remove("active");
    // document.getElementById("option1Links").classList.remove("active");
    // document.getElementById("option3Links").classList.remove("active");
    // document.getElementById("option2Links").classList.add("active");
  }
  function showMore5() {
    document.getElementById("morelinkshow5").classList.toggle("morelink5");
    document.getElementById("morelinkshow5").classList.add("active-morelink5");
    // document.getElementById("option1").classList.remove("active");
    // document.getElementById("option3").classList.remove("active");
    // document.getElementById("option1Links").classList.remove("active");
    // document.getElementById("option3Links").classList.remove("active");
    // document.getElementById("option2Links").classList.add("active");
  }
  function showMore6() {
    document.getElementById("morelinkshow6").classList.toggle("morelink6");
    document.getElementById("morelinkshow6").classList.add("active-morelink6");
    // document.getElementById("option1").classList.remove("active");
    // document.getElementById("option3").classList.remove("active");
    // document.getElementById("option1Links").classList.remove("active");
    // document.getElementById("option3Links").classList.remove("active");
    // document.getElementById("option2Links").classList.add("active");
  }
  function showOption3() {
    document.getElementById("option3").classList.add("active");
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option1Links").classList.remove("active");
    document.getElementById("option2Links").classList.remove("active");
    document.getElementById("option3Links").classList.add("active");
  }

  function toggleNav() {
    document.getElementById("hHeader").classList.toggle("active");
  }

  function removeToggleNav() {
    document.getElementById("hHeader").classList.remove("active");
  }

  return (
    <div id="Header">
      <div className="vHeader">
        <div className="logo">
          <Link href={ROUTES?.HOME}>
            <img src="/assets/images/logo.png"></img>
          </Link>
        </div>
        <ul className="links">
          <li>
            <Link href={ROUTES?.HOME} style={{ textDecoration: "none" }}>
              <span> Home </span>
            </Link>
          </li>
          <li>
            <Link href={ROUTES?.ABOUT_US} style={{ textDecoration: "none" }}>
              <span> About Us </span>
            </Link>
          </li>
          <li className="dropdown">
            <Link
              href={ROUTES?.OUR_PRODUCTS}
              style={{ textDecoration: "none" }}
            >
              <span> our products </span>{" "}
              <Image
                src="/assets/icons/icon7.png"
                alt="logo"
                height={6}
                unoptimized
                width={10}
              />
            </Link>
            <div className="dropdownContent">
              <div className="contentOptions">
                <div
                  className="option active"
                  id="option1"
                  onClick={showOption1}
                >
                  <h4>Patient Care</h4>
                </div>
                <div className="option" id="option2" onClick={showOption2}>
                  <h4>Diagnostics</h4>
                </div>
                <div className="option" id="option3" onClick={showOption3}>
                  <h4>Medical Devices</h4>
                </div>
              </div>
              <div
                className="option1 option-2 option-3 active"
                id="option1Links"
              >
                <div className="links">
                  <h5>Hygiene Solutions</h5>
                  <Link
                    href="/products/patient-care/hygiene-solution/toileting"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Toileting</span>
                  </Link>
                  <Link
                    href="/products/patient-care/hygiene-solution/bathing"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Bathing</span>
                  </Link>
                  <Link
                    href="/products/patient-care/hygiene-solution/continence-care"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Continence Care </span>
                  </Link>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Hospital Macerators</span>
                  </Link>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Cleaning & Disinfection</span>
                  </Link>
                </div>
                <div className="links">
                  <h5>Surgical Solutions</h5>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Procedure Packs</span>
                  </Link>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Tubular Bandages</span>
                  </Link>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Swabs & Gauze</span>
                  </Link>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Laparoscopic</span>
                  </Link>
                  <Link
                    href="/our-products/"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Sterile Service Consumables</span>
                  </Link>
                </div>
              </div>
              <div className="option1 option2 option-3" id="option2Links">
                <div className="links">
                  <h5>Microbiology</h5>
                  <div>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <span onClick={showMore}>
                        Rapid Test
                        <Image
                          src="/assets/icons/icon8.png"
                          alt="logo"
                          height={10}
                          width={6}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      {/* <Image
                      src="/assets/icons/icon7.png"
                      alt="logo"
                      height={6}
                      unoptimized
                      width={10}
                    /> */}
                    </Link>
                    <div className="morelink" id="morelinkshow">
                      <Link
                        href="/products/rapid-test-vitassay/#Faecal"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <span
                          style={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "14px",
                          }}
                        >
                          Faecal
                        </span>
                      </Link>
                      <Link
                        href="/products/rapid-test-vitassay/#TumoRMarkers"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Tumoral
                        </span>
                      </Link>
                      <Link
                        href="/products/rapid-test-vitassay/#Urine"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Urine
                        </span>
                      </Link>
                      <Link
                        href="/products/rapid-test-vitassay/#Respiratory"
                        style={{ textDecoration: "none" }}
                      >
                        <span>Respiratory</span>
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`${ROUTES?.PRODUCTS}/qpc-kits`}
                    style={{ textDecoration: "none" }}
                  >
                    <span>QPCR</span>
                  </Link>
                  <Link
                    href="/products/turbidimetry"
                    style={{ textDecoration: "none" }}
                  >
                    <span>Turbidimetry</span>
                  </Link>
                </div>
                <div className="links">
                  <h5>Molecular</h5>
                  <div>
                    <Link
                      // href={`${ROUTES?.PRODUCTS}/foodtesting`}
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      <span onClick={showMore3}>
                        Food testing
                        {/* <Image
                        src="/assets/icons/icon7.png"
                        alt="logo"
                        height={6}
                        width={10}
                      /> */}
                        <Image
                          src="/assets/icons/icon8.png"
                          alt="logo"
                          height={10}
                          width={6}
                        />
                      </span>
                    </Link>
                    <div className="morelink3" id="morelinkshow3">
                      <Link
                        href="/products/rapid-test-vitassay/#Faecal"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Allergen detection
                        </span>
                      </Link>
                      <Link
                        href="/products/rapid-test-vitassay/#TumoRMarkers"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          GMO Detection
                        </span>
                      </Link>
                      <Link
                        href="/products/rapid-test-vitassay/#Urine"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Pathogen Detection
                        </span>
                      </Link>
                      <Link
                        href="/products/rapid-test-vitassay/#Respiratory"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Halal testing
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Allergen detection</span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>GMO Detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Foodborne pathogen detection</span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Halal testing</span>
                  </Link> */}
                  <div>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <span onClick={showMore6}>
                        Genomics & MDx
                        <Image
                          src="/assets/icons/icon8.png"
                          alt="logo"
                          height={10}
                          width={6}
                        />
                      </span>
                    </Link>
                    <div className="morelink6" id="morelinkshow6">
                      <Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Cell And Tissue Analysis
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                      <Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          DNA fragment purification
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <span onClick={showMore5}>
                        Life sciences research
                        <Image
                          src="/assets/icons/icon8.png"
                          alt="logo"
                          height={10}
                          width={6}
                        />
                      </span>
                    </Link>
                    <div className="morelink5" id="morelinkshow5">
                      <Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Cell And Tissue Analysis
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                      <Link
                        href="#"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          DNA fragment purification
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <span onClick={showMore4}>
                        Animal health
                        <Image
                          src="/assets/icons/icon8.png"
                          alt="logo"
                          height={10}
                          width={6}
                        />
                      </span>
                    </Link>
                    <div className="morelink4" id="morelinkshow4">
                      <Link
                        href="/our-products/"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          PCR detection
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href="" style={{ textDecoration: "none" }}>
                      <span onClick={showMore2}>
                        Lab solutions
                        <Image
                          src="/assets/icons/icon8.png"
                          alt="logo"
                          height={10}
                          width={6}
                        />
                      </span>
                    </Link>
                    <div className="morelink2" id="morelinkshow2">
                      <Link
                        href="/our-products/"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Sample Collection kits{" "}
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                      <Link
                        href="/our-products/"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "black",
                          }}
                        >
                          Automation instruments
                          {/* <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      /> */}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="links">
                  <h5>Autoimunity</h5>
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Food testing */}
                  {/* <Image
                        src="/assets/icons/icon7.png"
                        alt="logo"
                        height={6}
                        width={10}
                      /> */}
                  {/* </span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Allergen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>GMO Detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Foodborne pathogen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Halal testing</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Genomics & MDx{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Life sciences research{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Animal health{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Lab solutions - Sample Collection kits{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link> */}
                </div>
                <div className="links">
                  <h5>Biochemistry</h5>
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Food testing */}
                  {/* <Image
                        src="/assets/icons/icon7.png"
                        alt="logo"
                        height={6}
                        width={10}
                      /> */}
                  {/* </span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Allergen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>GMO Detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Foodborne pathogen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Halal testing</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Genomics & MDx{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Life sciences research{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Animal health{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Lab solutions - Sample Collection kits{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link> */}
                </div>
                <div className="links">
                  <h5>Instrumentation</h5>
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Food testing */}
                  {/* <Image
                        src="/assets/icons/icon7.png"
                        alt="logo"
                        height={6}
                        width={10}
                      /> */}
                  {/* </span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Allergen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>GMO Detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Foodborne pathogen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Halal testing</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Genomics & MDx{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Life sciences research{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Animal health{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Lab solutions - Sample Collection kits{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link> */}
                </div>
              </div>
              <div className="option1 option2 option3" id="option3Links">
                <div className="links">
                  <h5>Medical Light</h5>
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Rapid Test */}
                  {/* <Image src='/assets/icons/icon7.png' alt="logo" height={6} width={10} /> */}

                  {/* </span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Faecal</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Tumoral</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Urine</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Respiratory</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>QPCR</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Turbidimetry</span>
                  </Link> */}
                </div>
                <div className="links">
                  <h5>Vein Eye Carry</h5>
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Food testing */}
                  {/* <Image
                        src="/assets/icons/icon7.png"
                        alt="logo"
                        height={6}
                        width={10}
                      /> */}
                  {/* </span>
                  </Link> */}
                  {/* <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Allergen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>GMO Detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Foodborne pathogen detection</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>Halal testing</span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Genomics & MDx{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Life sciences research{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Animal health{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <span>
                      Lab solutions - Sample Collection kits{" "}
                      <Image
                        src="/assets/icons/icon8.png"
                        alt="logo"
                        height={10}
                        width={6}
                      />
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              href={ROUTES?.WORK_WITH_US}
              style={{ textDecoration: "none" }}
            >
              <span> work with us </span>
            </Link>
          </li>
          <Link href={ROUTES?.CONTACT_US} style={{ textDecoration: "none" }}>
            <CommonButton btnText="Contact Us" />
          </Link>
        </ul>
        <div className="toggleBtn" onClick={toggleNav}>
          <Image
            src="/assets/images/menu.png"
            alt="logo"
            height={40}
            width={40}
          />
        </div>
      </div>
      <div className="hHeader" id="hHeader">
        <ul className="links">
          <li>
            <Link
              href={ROUTES?.HOME}
              style={{ textDecoration: "none" }}
              onClick={removeToggleNav}
            >
              <span> Home </span>
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES?.ABOUT_US}
              style={{ textDecoration: "none" }}
              onClick={removeToggleNav}
            >
              <span> About Us </span>
            </Link>
          </li>
          <li className="dropdown">
            <Link
              href={ROUTES?.OUR_PRODUCTS}
              style={{ textDecoration: "none" }}
              onClick={removeToggleNav}
            >
              <span> our products </span>
            </Link>
          </li>
          <li>
            <Link
              href={ROUTES?.WORK_WITH_US}
              style={{ textDecoration: "none" }}
              onClick={removeToggleNav}
            >
              <span> work with us </span>
            </Link>
          </li>
          <Link
            href={ROUTES?.CONTACT_US}
            style={{ textDecoration: "none" }}
            onClick={removeToggleNav}
          >
            <CommonButton btnText="Contact Us" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
