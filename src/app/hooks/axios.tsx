import axios from "axios";

const useAxios = () => {
  let instance;

  if (!instance) {
    instance = axios.create({
      baseURL: "http://worldtimeapi.org/api/",
    });
  }

  return { axios: instance };
};

export default useAxios;
