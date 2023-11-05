import Footer from "@/components/common/Footer"
import PageTitle from "@/components/common/PageTitle"
import Image from "next/image"

const JobOpportunity = () => {
  return (
    <>
      <PageTitle title="Job Opportunities " />
      <main id="JobOpportunity">
        <div className="data">

          <div className="slab">
            <Image src="/assets/icons/bullet.png" height={30} width={30} alt="bullet" />
            <h4>Area Sales Managers</h4>
          </div>

          <p>You will be promoting high quality reliable products, to labs and hospitals in your area. You will be responsible for:</p>

          <div className="list">
            <ul >
              <li>Achieving the assigned sales budgets, initiate cold calls to find prospects within assigned territory and convert the leads in timely and profitable manner.</li>
              <li>Building strong positive relationship with customers and monitoring customer profile and new developments to ensure retention of current sales.</li>
              <li>Developing and managing channel partners.</li>
              <li>Making new installation and ensuring compliance of reagent rental contracts and adding new assay in current installations.</li>
              <li>Ensuring timely collections.</li>
              <li>Providing timely service back up to customers.</li>
            </ul>
          </div>

          <div className="subData">
            <p>This job requires extensive travel.</p>
            <p>Salary: Best As per industry Standards.Industry: Pharma / Biotech / Clinical Research.Functional Area: Sales, Retail, Business Development.Role Category: Area Sales Manager.</p>
          </div>

          <div className="subData2">
            <h5>Location</h5>
            <h6>North Region –Location Delhi</h6>
          </div>

        </div>
      </main>
      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  )
}

export default JobOpportunity