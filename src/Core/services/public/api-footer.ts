import { useQuery,useMutation } from "react-query";
import { API } from "../api/api";

const getFooter = async () => {
  return await API.get("/api/Setting/GetSetting");
};

export const GetFooter = (onSuccess:any,onError:any) => {
  return useQuery("footer", getFooter, {
    onSuccess,onError
  });
};

// related-link
const getRelatedLink = async (value:any)=>{
  return await API.post("/GetRelatedLink", value);
};

export const useGetRelatedLink = () => {
  return useMutation(getRelatedLink);
};

