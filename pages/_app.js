// import FooterComponent from "@/components/FooterComponent";
import Header from "@/components/common/Header";
import ToastContainer from "@/components/common/ToastContainer";
import "@/styles/common.scss";
import "@/styles/globals.scss";
import { ConfigProvider } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import themeJson from "../styles/style.json";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <ConfigProvider theme={themeJson}>
        <Header />
        <Component {...pageProps} />
        {/* <Footer myComponent={<WorkWithUs />} /> */}
      </ConfigProvider>
    </>
  );
}
