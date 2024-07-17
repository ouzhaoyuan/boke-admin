import React, { useEffect } from "react";
import TableBox from "./components/tableBox/index";
import FilterBox from "./components/filterBox/index";
import { getShot } from "@/store/modules/shoe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getShot());
    setTimeout(() => {
      dispatch(getShot());
    }, 1000);
  }, []);
  const list2: never[] = []
  const {list} = useAppSelector((state) => state.shoe);
  
  return (
    <>
      <FilterBox />
      <TableBox list={list} />
    </>
  );
};

export default Index;