import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export function useFetchData(apiEndPoint) {
  return useQuery(["data", apiEndPoint], () => {
    return Axios.get(apiEndPoint).then((response) => response.data);
  });
}
