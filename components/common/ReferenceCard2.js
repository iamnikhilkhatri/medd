import Image from "next/image"

const ReferenceCard2 = (props) => {
  return (
    <div id="ReferenceCard" className="ReferenceCard2">
      <div className="typeAndTitle">
        <div className="title">
          <Image src="/assets/icons/bullet.png" height={26} width={26} alt="bullet" />
          <h4>{props.cardTitle}</h4>
        </div>
      </div>
      <div className="cardBtn">
        <div id='commonBtn'>
          <Image src="/assets/icons/download.png" height={24} width={24} alt="bullet" />
          <span>Download IUE</span>
        </div>
      </div>
    </div>
  )
}

export default ReferenceCard2