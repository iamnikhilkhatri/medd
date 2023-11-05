import { ROUTES } from "@/common/constants"
import Link from "next/link"

const FooterComponent = () => {
  return (
    <div id="FooterComponent1">
      <h2>Medley Healthcare</h2>
      <p>Medley Healthcare specializes in providing unique healthcare solutions. We are the innovators in technology services and partner with renowned companies which provide niche products and services, all under the umbrella of Medley. The core competency lies in diagnostics and revolutionizing.</p>
      <button><Link href={ROUTES?.ABOUT_US} className="text-decoration-none">Read More</Link></button>
    </div>
  )
}

export default FooterComponent