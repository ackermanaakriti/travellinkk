import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PackagesCard, SearchCard } from "../components";
import { PostSearchInput } from "../utils/apiQueries";
import { useGlobalContext } from "../context/useGlobalContext";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const destination = searchParams.get("destination");
  // useEffect(() => {
  //     const info = PackagesCardListData.filter(document => document.title.toLowerCase().includes(destination.toLowerCase()) && destination.replace(/[^a-zA-Z]/g, "").split('').some(letter => document.title.toLowerCase().includes(letter.toLowerCase())))
  //     setData(info)
  // }, [searchParams, destination])

  const fetchData = async (destination) => {
    setLoading(true);
    const res = await PostSearchInput(destination);
    if (res?.length > 0) {
      setLoading(false);
      setData(res);
    } else {
      setLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    if (destination) {
      fetchData(destination);
    }
  }, [destination]);

  const { setNavActive } = useGlobalContext();
  // Setting the nav state
  useEffect(() => {
    setNavActive("");
  }, []);

  return (
    <div className="w-full min-h-[80vh] lg:px-globalPadding px-[11px] my-[2%]">
      {data?.length < 1 && !loading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <p className="my-[11%] py-8 font-bold text-[32px] font-inter">
            <span>OPPS !</span>
            No Data Found !!!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[51px] mt-3">
          {data?.map((item, index) => (
            <SearchCard
              key={index}
              data={item}
              link={`/details/${item?.slug}`}
            />
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default SearchPage;
