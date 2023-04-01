import { useState } from "react";
import useAxios from "./axios";

const useTimeZones = async () => {
  const { axios } = useAxios();

  const [data, setData] = useState<unknown>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>();

  try {
    setLoading(true);

    const response = await axios.get("timezone");

    setData(response);
  } catch (e) {
    setError(e);
  }

  setLoading(false);

  return {
    data,
    error,
    loading,
  };
};

export default useTimeZones;
