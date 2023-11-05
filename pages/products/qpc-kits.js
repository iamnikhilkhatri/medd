import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";
import ReferenceCard2 from "@/components/common/ReferenceCard2";
import Image from "next/image";
import Link from "next/link";

const VitassayQPCRKits = () => {
  return (
    <>
      <PageTitle title="Vitassay QPCR Kits" />

      <main id="VQK">
        <div className="rtv imgAndDataSection">
          <div className="imgSection">
            <Image
              src="/assets/images/img21.png"
              height={600}
              width={600}
              layout="responsive"
              alt="img21"
            />
          </div>
          <div className="dataSection">
            <h2>Vitassay qPCR Kits</h2>
            <h3>
              Vitassay qPCR kits are ready to use real-time PCR assays designed
              to amplify and detect pathogen.
            </h3>
            <p>
              Vitassay qPCR Kits contains in each well enzymes, buffer, primer
              and probes as well as an internal control in a lyophilized format.
            </p>
            <p>The kits include a positive and a negative control.</p>
            <p>
              Identification of pathogen DNA or RNA occurs by the use of target
              specific primers ans fluorecent labeled hydrolysis probes which
              hybridize conserved regions in the genomes of the
              differentpathogens.
            </p>
          </div>
        </div>

        <div className="rtv reference">
          <h2>References QPCR Kits</h2>
          <p>A wide range of specific and combined tests</p>
        </div>

        <div className="rtv referenceNav">
          <Link href="#Respiratory" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink active">
              <h3>Respiratory</h3>
            </div>
          </Link>

          <Link href="#TropicalDiseases" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Tropical Diseases</h3>
            </div>
          </Link>

          <Link href="#Faecal" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Faecal</h3>
            </div>
          </Link>

          <Link href="#Parasites" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Parasites</h3>
            </div>
          </Link>

          <Link href="#Virus" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Virus</h3>
            </div>
          </Link>

          <Link href="#Fungi" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Fungi</h3>
            </div>
          </Link>

          <Link href="#Sexual" style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Sexual</h3>
            </div>
          </Link>

          <Link
            href="#AntimicrobialResistance"
            style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Antimicrobial Resistance</h3>
            </div>
          </Link>

          <Link
            href="#Transplant&Meningitis"
            style={{ textDecoration: "none" }}>
            <div className="referenceNavLink">
              <h3>Transplant & Meningitis</h3>
            </div>
          </Link>
        </div>

        <div className="rtv referenceBtn">
          <Link href="#Bacteria" style={{ textDecoration: "none" }}>
            <button className="myBtn active">Bacteria</button>
          </Link>
          <Link href="#Virus" style={{ textDecoration: "none" }}>
            <button className="myBtn">Virus</button>
          </Link>
        </div>

        <div className="rtv referenceCardContainer">
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Flu A + Flu B" />
            <ReferenceCard2 cardTitle="Flu A + Flu B + RSV" />
            <ReferenceCard2 cardTitle="RSV A + RSV B" />
            <ReferenceCard2 cardTitle="Bocavirus" />
            <ReferenceCard2 cardTitle="Metapneumovirus" />
            <ReferenceCard2 cardTitle="Adenovirus + Metapneumovirus + Bocavirus" />
            <ReferenceCard2 cardTitle="Type Flu 1/flu" />
            <ReferenceCard2 cardTitle="Type Flu 2/flu" />
            <ReferenceCard2 cardTitle="Parainfluenza 1/3 + 2/4" />
            <ReferenceCard2 cardTitle="MERS-CoV" />
            <ReferenceCard2 cardTitle="SARS-CoV-2" />
            <ReferenceCard2 cardTitle="Rhinovirus & Enterovirus" />
            <ReferenceCard2 cardTitle="Panel 1/Respiratory viruses" />
          </div>

          <h2 id="Bacteria">Bacteria</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Bordetella pertussis + B. parapertussis + B. holmesii" />
            <ReferenceCard2 cardTitle="L. pneumophila" />
            <ReferenceCard2 cardTitle="MTBC/NTM" />
          </div>

          <h2 id="TropicalDiseases">Tropical Diseases</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Zika + Dengue + Chikungunya" />
            <ReferenceCard2 cardTitle="Dengue 1+2+3+4" />
            <ReferenceCard2 cardTitle="Chikungunya" />
            <ReferenceCard2 cardTitle="Dengue" />
            <ReferenceCard2 cardTitle="Zika" />
            <ReferenceCard2 cardTitle="West Nile" />
            <ReferenceCard2 cardTitle="Japanese Encephalitis" />
            <ReferenceCard2 cardTitle="Malaria 5" />
          </div>
        </div>

        <div className="rtv subSection">
          <h2 id="Faecal">Faecal</h2>
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
        </div>
        <div className="rtv referenceCardContainer">
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Campylobacter + Salmonella + Shigella/EIEC" />
            <ReferenceCard2 cardTitle="Campylobacter + Salmonella + Yersinia enterocolitica" />
            <ReferenceCard2 cardTitle="H. pylori" />
            <ReferenceCard2 cardTitle="H. pylori ClariRes" />
            <ReferenceCard2 cardTitle="Clostridium difficile" />
            <ReferenceCard2 cardTitle="Clostridium difficile toxoins A/B" />
          </div>

          <h2 id="Parasites">Parasites</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Cryptosporidium + Entamoeba histolytica + Giardia" />
            <ReferenceCard2 cardTitle="Dientamoeba fragilis" />
            <ReferenceCard2 cardTitle="Blastocystis hominis + Dientamoeba fragilis" />
          </div>

          <h2 id="Virus">Virus</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Adenovirus" />
            <ReferenceCard2 cardTitle="Astrovirus" />
            <ReferenceCard2 cardTitle="Norovirus G1" />
            <ReferenceCard2 cardTitle="Norovirus G2" />
            <ReferenceCard2 cardTitle="Rotavirus" />
            <ReferenceCard2 cardTitle="Sapovirus" />
          </div>

          <h2 id="Fungi">Fungi</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Pneumocystis jirovecii" />
          </div>

          <h2 id="Sexual">Sexual</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Genital ulcer" />
            <ReferenceCard2 cardTitle="HPV" />
            <ReferenceCard2 cardTitle="Vaginosis" />
          </div>

          <h2 id="AntimicrobialResistance">Antimicrobial Resistance</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="Vancomycin Resistance" />
          </div>

          <h2 id="Transplant&Meningitis">Transplant & Meningitis</h2>
          <div className="referenceCardSubContainer">
            <ReferenceCard2 cardTitle="BK & JC Virus" />
          </div>
        </div>
      </main>

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};

export default VitassayQPCRKits;
