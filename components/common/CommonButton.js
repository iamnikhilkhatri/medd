import Link from "next/link";

const CommonButton = (props) => {
  return (
    <div id="commonBtn">
      <span>
        {props?.link ? (
          <Link href={props?.link} className="text-decoration-none">
            {props.btnText}
          </Link>
        ) : (
          props.btnText
        )}
      </span>
    </div>
  );
};

export default CommonButton;
