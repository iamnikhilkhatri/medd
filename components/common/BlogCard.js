import { ROUTES } from "@/common/constants";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ item }) {
  return (
    <>
      <div className="myCard">
        <div className="cardData">
          <div className="cardImg">
            <Image
              src={item?.fields?.thumbnailImage?.fields?.file?.url?.replace(
                "//",
                "https://"
              )}
              height={270}
              width={420}
              layout="responsive"
              alt="img7"
            />
          </div>
          <div className="cardData">
            <div className="cardDate">
              <Image
                src="/assets/icons/icon1.png"
                height={20}
                width={20}
                alt="icon1"
              />
              <span>{moment(item?.sys?.createdAt).format("ll")}</span>
              <Image
                src="/assets/icons/icon3.png"
                height={5}
                width={5}
                alt="icon3"
              />
              <Image
                src="/assets/icons/icon2.png"
                height={20}
                width={20}
                alt="icon2"
              />
            </div>
            <div className="cardDetails">
              <h3>{item?.fields?.title}</h3>
              <p>{item?.fields?.description}</p>
            </div>
          </div>
        </div>
        <Link
          href={`${ROUTES?.BLOGS}/${item?.fields?.slug}`}
          className="text-decoration-none"
        >
          <div className="readMore">
            <span>Read More</span>
            <Image
              src="/assets/icons/icon4.png"
              height={12}
              width={14}
              alt="icon4"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
