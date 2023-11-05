import Footer from "@/components/common/Footer";
import PageTitle from "@/components/common/PageTitle";

const OurProductsInternal = () => {
  const newpaths = [
    "/ourproducts/hygiene-solution/toiletingproducts/bodyfluidkits-productdetails/vernagelbottle/",
    "/ourproducts/hygiene-solution/toiletingproducts/bodyfluidkits-productdetails/vernagellargetub/",
  ];
  // console.log(data);
  // function showLinks() {
  //   document.getElementById("productLandingLeft").classList.toggle("active");
  // }
  // const pathname = usePathname();
  // const pathName = pathname.substring(1, pathname.length - 1);
  return (
    <>
      <PageTitle title="Our Products" />

      <div className="ourProductFooter">
        <Footer />
      </div>
    </>
  );
};

export default OurProductsInternal;

{
  /* <ProductCards productImg="/assets/images/product1.png" productName="VernaGel 100 Sachets" productDescription="Product Code: 450SC100" /> */
}

// export const getStaticPaths = async () => {
//   const data = await client?.getEntries({
//     content_type: "toiletingproducts",
//   });

//   const paths = data?.items?.map((node) => ({
//     params: { id3: node?.fields?.id3 },
//   }));
//   console.log(paths);

//   return { paths, fallback: "blocking" };
// };

// export const getStaticProps = async (ctx) => {
//   console.log(ctx.params);
//   const data = await client?.getEntries({
//     content_type: "toiletingproducts",
//     "fields.id3[in]": ctx.params.id3,
//   });
//   console.log(data);
//   if (data?.items?.length > 0) {
//     return { props: { data }, revalidate: 10 };
//   }
//   return { notFound: true };
// };
