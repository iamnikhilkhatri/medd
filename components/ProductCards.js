import { ROUTES } from "@/common/constants";
import Image from "next/image";
import CommonButton from "./common/CommonButton";

const ProductCards = (props) => {
  return (
    <div id="ProductCards">
      <div className="productImg">
        <Image
          src={props.productImg}
          height={300}
          width={384}
          layout="responsive"
          alt="productImg"
        />
      </div>
      <div className="productData">
        <div className="productdetails">
          <h5>{props.productName}</h5>
          <h6>{props.productDescription}</h6>
        </div>
        <CommonButton btnText="View Product" link={`${ROUTES?.PRODUCTS}/1`} />
      </div>
    </div>
  );
};

export default ProductCards;
