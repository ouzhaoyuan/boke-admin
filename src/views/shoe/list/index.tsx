import React, { useEffect, useState } from "react";
import TableBox from "./components/table-box/index";
import FilterBox from "./components/filter-box/index";
import Modal from "./components/shoe-form-modal/index";
import { getShot } from "@/store/modules/shoe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<any>();

  useEffect(() => {
    dispatch(getShot());
  }, []);
  const { list } = useAppSelector((state) => state.shoe);

  const onEdit = (form: any) => {
    setForm(form);
    setIsModalOpen(!isModalOpen);
  };
  const onCanel = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Modal isModalOpen={isModalOpen} cancel={onCanel} initialValues={form} />
      <FilterBox />
      <TableBox list={list} edit={onEdit}  />
    </>
  );
};

export default Index;
