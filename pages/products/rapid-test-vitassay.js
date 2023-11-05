import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import ReferenceCard from "@/components/common/ReferenceCard";
import Image from "next/image";
import Link from "next/link";

const RapidTestVitassay = () => {
  return (
    <>
      <PageTitle title="Rapid Test Vitassay" />

      <main id="RTV">
        <div className="rtv imgAndDataSection">
          <div className="imgSection">
            <Image
              src="/assets/images/img20.png"
              height={600}
              width={600}
              layout="responsive"
              alt="img20"
            />
          </div>
          <div className="dataSection">
            <h2>Rapid Test Vitassay</h2>
            <h3>
              Technology that provides reliability, speed and precision in small
              dimensions.
            </h3>
            <p>
              Vitassay Healthcare offers products intended and designed to
              facilitate the work of health personnel.
            </p>
            <p>
              Devices for professional use that are helpful in the diagnosis of
              a variety of diseases.
            </p>
            <p>
              The high sensitivity and specificity attached to its ease of use
              and speed (only two minutes to prepare the sample and ten minutes
              to get the result) make our Rapid Test an indispensable product.
            </p>
          </div>
        </div>

        <div className="rtv reference">
          <h2>Rapid Test References</h2>
          <p>
            A wide range of specific and combined Test: 1,2,3 or 4 different
            strips on one device.
          </p>
        </div>

        <div className="rtv referenceNav">
          <Link href="#Faecal " style={{ textDecoration: "none" }}>
            <div className="referenceNavLink active">
              <h3>Faecal</h3>
            </div>
          </Link>
          <Link href="#TumorMarkers" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Tumorals</h3>
            </div>
          </Link>
          <Link href="#Urine" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Urine</h3>
            </div>
          </Link>
          <Link href="#Respiratory" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Respiratory</h3>
            </div>
          </Link>
        </div>

        <div className="rtv referenceBtn">
          <Link href="#Bacteria" style={{ textDecoration: "none" }}>
            <button className="myBtn active">Bacteria</button>
          </Link>
          <Link href="#Parasites" style={{ textDecoration: "none" }}>
            <button className="myBtn">Parasites</button>
          </Link>
          <Link href="#Virus" style={{ textDecoration: "none" }}>
            <button className="myBtn">Virus</button>
          </Link>
        </div>

        <div className="rtv referenceCardContainer">
          <div className="referenceCardSubContainer">
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="H. pylori Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="E. coli Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Campylobacter Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Salmonella Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Clostridium difficile antigen GDH Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Salmonella typhi Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Shigella Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="H. pylori + Transferrin Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Clostridium difficile Toxin A + B Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="EHEC VT1+VT2 Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Yersinia enterocolitica O:3+O:9 Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="Clostridium difficile GDH + Toxin A + B Three in one Card"
              x="10"
            />
          </div>

          <h2 id="Parasites">Parasites</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Crypto Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Giardia Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Entamoeba Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Crypto + Giardia Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="Crypto + Giardia + Entamoeba Three in one"
              x="10"
            />
          </div>

          <h2 id="Virus">Virus</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Adenovirus Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Rotavirus Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Astrovirus Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Norovirus Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Enterovirus Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="HAV Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Rotavirus + Adenovirus Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Norovirus GI + GII Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Rotavirus + Norovirus Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="Clostridium difficile GDH + Toxin A + B Three in one Card"
              x="10"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="Rotavirus + Adenovirus + Norovirus Three in one"
              x="10"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="Rotavirus + Adenovirus + Astrovirus + Norovirus Four in one"
              x="10"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="otavirus + Adenovirus + Astrovirus + Norovirus + Enterovirus Five in one"
              x="10"
            />
          </div>

          <h2 id="TumorMarkers">Tumor Markers</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Hemoglobin (Fob) Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Calprotectin Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="FOB 50 + 200 Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="FOB + Transferrin Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Calprotectin 50 + 200 Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Calprotectin + Lactoferrin Double Card"
              x="25"
            />
          </div>

          <h2 id="Urine">Urine</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Strep. pneumoniae Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Legionella Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="hCG s&u"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Strep pneumoniae + Legionella Card"
              x="25"
            />
          </div>

          <h2 id="Respiratory">Respiratory</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Strep A Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="RSV Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="Adenovirus Resp. Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="SARS-CoV-2 Single Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Single"
              typeImg="/assets/icons/single.png"
              cardTitle="RSV + Adenovirus Resp. Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Double"
              typeImg="/assets/icons/double.png"
              cardTitle="Influenza A+ B Double Card"
              x="25"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="Influenza A + B + RSV + Adenovirus Four in one"
              x="25"
            />
            <ReferenceCard
              typeTitle="Multi"
              typeImg="/assets/icons/multi.png"
              cardTitle="SARS-CoV-2 + Flu A + B + RSV + Adeno Resp. Five in one"
              x="10"
            />
          </div>
        </div>
      </main>

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};

export default RapidTestVitassay;

{
  /* <ReferenceCard typeTitle="" typeImg="" cardTitle="" x="" /> */
}
