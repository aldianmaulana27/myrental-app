import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8090/product/api";
const PRODUCT_IMAGE_API_BASE_URL = "http://localhost:8090/product-image/api";

class ProductService {
  getAllProduct() {
    return axios.get(PRODUCT_API_BASE_URL + "/getAll");
  }

  getProductById(id){
    console.log('ini id '+PRODUCT_API_BASE_URL + "/getProductById?id="+id);
    return axios.get(PRODUCT_API_BASE_URL + "/getProductById?id="+id);
  }
  getProductImageById(id){
    console.log('ini id image '+PRODUCT_IMAGE_API_BASE_URL + "/getImageProductById?productId="+id);
    return axios.get(PRODUCT_IMAGE_API_BASE_URL + "/getImageProductById?productId="+id);
  }
  // createUser(user) {
  //   return axios.post(USER_API_BASE_URL + "/add", user);
  // }

  // loginUser(login) {
  //   return axios.post(USER_API_BASE_URL + "/verify", login);
  // }
}

export default new ProductService();
