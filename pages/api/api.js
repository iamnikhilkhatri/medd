const API_ROOT = "https://api.oec-gruppe-india.com";
const APIUrls = {
  root: API_ROOT,
  parentCategory: API_ROOT + "/api/parent-categories?populate=*",
  subCategory: API_ROOT + "api/sub-categories?populate=*",
  mainCategory: API_ROOT + "/api/main-caategories?populate=*",
  categoryPage: API_ROOT + "/api/category-pages?populate=*",
  product: API_ROOT + "/api/products?populate=*",
};
export default APIUrls;
