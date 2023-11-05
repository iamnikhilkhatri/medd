import CommonButton from "@/components/common/CommonButton"
import Footer from "@/components/common/Footer"
import PageTitle from "@/components/common/PageTitle"
import Image from "next/image"
import Link from "next/link"

const WorkWithUsPage = () => {
  return (
    <>
      <PageTitle title="Work With Us" />
      <main id="WorkWithUsPage">
        <div className="details">
          <h2>Learn & Grow Everyday At</h2>
          <h1>Medley Healthcare</h1>
          <br />
          <h5>Be extraordinary with Medley</h5>
          <p>If you are diligent, eager to learn and sincere in your approach towards work, then Medley is the right platform. We are looking for work enthusiasts who are willing to put in their best foot forward.</p>
        </div>
        <div className="cardSection">
          <div className="headingAndcardContainer">

            <div className="sectionHeading">
              <h3>Click Below For Job Opportunities Available.</h3>
            </div>

            <div className="cardContainer">

              <div className="myCard">
                <div className="slab">
                  <Image src="/assets/icons/bullet.png" height={26} width={26} alt="bullet" />
                  <h4>Area Sales Managers</h4>
                </div>
                <Link href="/JobOpportunity" style={{ textDecoration: 'none' }}>
                  <div className="cardBtn">
                    <CommonButton btnText="View Details" />
                  </div>
                </Link>
              </div>

              <div className="myCard">
                <div className="slab">
                  <Image src="/assets/icons/bullet.png" height={26} width={26} alt="bullet" />
                  <h4>Area Sales Managers</h4>
                </div>
                <Link href="/JobOpportunity" style={{ textDecoration: 'none' }}>
                  <div className="cardBtn">
                    <CommonButton btnText="View Details" />
                  </div>
                </Link>
              </div>

              <div className="myCard">
                <div className="slab">
                  <Image src="/assets/icons/bullet.png" height={26} width={26} alt="bullet" />
                  <h4>Area Sales Managers</h4>
                </div>
                <Link href="/JobOpportunity" style={{ textDecoration: 'none' }}>
                  <div className="cardBtn">
                    <CommonButton btnText="View Details" />
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  )
}

export default WorkWithUsPage