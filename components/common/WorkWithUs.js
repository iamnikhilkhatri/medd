import { ROUTES } from "@/common/constants"
import CommonButton from "./CommonButton"

const WorkWithUs = () => {
  return (
    <div id="WorkWithUs">
      <h4>Work With Us?</h4>
      <p>If you are diligent, eager to learn and sincere in your approach towards work, then Medley is the right platform. We are looking for work enthusiasts who are willing to put in their best foot forward.</p>
      <div className="myBtn">
        <CommonButton btnText="Explore Job Opportunities" link={ROUTES?.JOB_OPPORTUNITY} />
      </div>
    </div>
  )
}

export default WorkWithUs