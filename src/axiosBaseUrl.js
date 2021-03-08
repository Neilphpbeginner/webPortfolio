import axios from "axios";

export default axios.create({
  baseURL: "https://portfolio-email-endpoint.herokuapp.com/email",
});
