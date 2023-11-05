import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import WorkWithUs from "@/components/common/WorkWithUs";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <main id="AboutUsPage">
        <PageTitle title="About Us" />

        <div className="aboutUsDetails">
          <div className="detailsContainer">
            <p>
              Medley Healthcare specializes in providing unique healthcare
              solutions. We are the innovators in technology services and
              partner with renowned companies which provide niche products and
              services, all under the umbrella of Medley. The core competency
              lies in diagnostics and revolutionizing the medical treatment
              structure. We are trying to reshape the approach to disease and
              prognostic indicators within our organizational set up. We have
              our in-house trained staff for providing end-to-end services for a
              smooth functioning.
            </p>
          </div>
        </div>

        {/* ------------------------------ image and data section - 1 ------------------------------  */}

        <div className="imgAndDataSection">
          <div className="imgSection">
            <Image
              src="/assets/images/img12.png"
              height={500}
              width={500}
              layout="responsive"
              alt="img12"
            />
          </div>
          <div className="dataSection">
            <h2>Our Story</h2>
            <p>
              With a clear vision of becoming the next big change in Medical
              industry, Medley Healthcare was brought into form. <br />
              <br /> It is the brain child of a veteran and stalwart with an
              educational background of Pharmaceutical Sciences, Hospital
              Management, MBA in International Business and Post Graduate
              Diploma in Health Economics and Policy. <br /> <br /> Having the
              experience of Quality Management in Diagnostics, Medical
              Equipments and Healthcare Services, Medley is nurtured with a team
              of professional and reliable workforce.
            </p>
          </div>
        </div>

        {/* ------------------------------ image and data section - 1 ------------------------------  */}

        <div className="imgAndDataSection imgAndDataSection2">
          <div className="dataSection">
            <h2>Why Medley?</h2>
            <p>
              Cutting-edge Technology: Medley Healthcare employs
              state-of-the-art medical technologies from across the globe,
              ensuring the most accurate, sustainable and reliable equipments
              and services
            </p>
            <p>
              Expert Team: Our brand boasts a team of highly skilled healthcare
              professionals and support staff, dedicated to delivering top-notch
              solutions.
            </p>
            <p>
              Comprehensive Services: Medley Healthcare offers a wide range of
              medical equipments & services under one roof, making it convenient
              for doctors, hospitals and other medical institutions to access
              all their healthcare needs.
            </p>
            <p>
              Quality Assurance: Medley Healthcare adheres to strict quality
              control measures, guaranteeing the highest standards of safety and
              accuracy in medical solutions.
            </p>
            <p>
              Innovation: We continuously invest in research and development,
              staying at the forefront of medical advancements to provide the
              sustainable healthcare solutions from all over the world.
            </p>
            <p>
              Accessibility: Our multiple locations, ready stock of equipments
              and online platforms make healthcare accessible and convenient for
              our clientele.
            </p>
            <p>
              Affordability: We strive to offer cost-effective healthcare
              solutions without compromising on quality, ensuring that
              healthcare remains accessible to all.
            </p>
            <p>
              Sustainable Solutions: Medley Healthcare is committed to
              sustainability, implementing eco-friendly practices and promoting
              environmentally responsible healthcare solutions, ensuring a
              healthier future for both patients and the planet.
            </p>
            <p>
              Community Involvement: Medley Healthcare actively engages with the
              community through health awareness programs, charity initiatives,
              and educational campaigns.
            </p>
            <p>
              Proven Track Record: With a history of successful patient outcomes
              and positive testimonials, choosing Medley Healthcare is a
              decision rooted in trust and reliability in patient healthcare and
              diagnostic solutions.
            </p>
          </div>
          <div className="imgSection">
            <Image
              src="/assets/images/img13.png"
              height={700}
              width={700}
              layout="responsive"
              alt="img13"
            />
          </div>
        </div>
      </main>
      <div className="aboutUsFooter">
        <WorkWithUs />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
