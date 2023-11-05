import Image from "next/image"

const ReferenceCard = (props) => {
  return (
    <div id="ReferenceCard">
      <div className="typeAndTitle">
        <div className="type">
          <h4>{props.typeTitle}</h4>
          <Image src={props.typeImg} height={34} width={100} alt="single" />
        </div>
        <div className="title">
          <Image src="/assets/icons/bullet.png" height={26} width={26} alt="bullet" />
          <h4>{props.cardTitle}</h4>
        </div>
      </div>
      <div className="cardBtn">
        <div id='commonBtn'>
          <Image src="/assets/icons/download.png" height={24} width={24} alt="bullet" />
          <span>x{props.x} Download IUE</span>
        </div>
      </div>
    </div>
  )
}

export default ReferenceCard