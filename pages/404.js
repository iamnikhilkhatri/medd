import { ROUTES } from "@/common/constants";
import Footer from "@/components/common/Footer";
import { Button, Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href={ROUTES?.HOME}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
      <Footer />
    </>
  );
}
