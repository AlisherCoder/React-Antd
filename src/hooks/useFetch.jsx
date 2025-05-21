import { api } from "@/api";
import { useState, useEffect } from "react";

export const useFetch = (endpoint, params = {}) => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   const fetchData = () => {
      setLoading(true);
      api.get(endpoint, { params })
         .then((res) => {
            setData(res.data);
            setError(null);
         })
         .catch((err) => setError(err.response?.data || err.message))
         .finally(() => setLoading(false));
   };

   useEffect(() => {
      fetchData();
   }, [endpoint, JSON.stringify(params)]);

   return { data, error, loading, refetch: fetchData };
};
