import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default (): any => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<{ [key: string]: string }>({});
  const getQueryString = () => {
    let url = window.location.href;
    const searchParams = new URLSearchParams(url.split("?")[1]);
    const params = Object.fromEntries(searchParams.entries());
    return params;
  };

  useEffect(() => {
    let query = getQueryString();
    setQuery(query);
  }, []);

  const setQueryFn = (data: { [key: string]: string }) => {
    setQuery(data);
  };

  useEffect(() => {
    setSearchParams(query);
  }, [query]);

  return [query, setQueryFn];
};
