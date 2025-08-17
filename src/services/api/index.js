import axios from "../";

const requestHandler = (request) => {
  const access_token = localStorage.getItem("accessToken");
  if (access_token) {
    // Modify request here
    request.headers.Authorization = `Bearer ${access_token}`;
    request.headers["x-access-token"] = `${access_token}`;
  }
  return request;
};

axios.interceptors.request.use((request) => requestHandler(request));
export default axios;
