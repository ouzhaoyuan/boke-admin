import React, { useEffect, useState } from "react";
import TableBox, { Brand } from "./components/table-box/index";
import BrandFormModal from "./components/brand-form-modal/index";
import { getShotBrand } from "@/store/modules/shoe";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<Brand>();

  useEffect(() => {
    dispatch(getShotBrand());
  }, []);
  const { brandList } = useAppSelector((state) => state.shoe);
  const onAdd = () => {
    setForm(undefined);
    setIsModalOpen(!isModalOpen);
  };
  const onEdit = (form: Brand) => {
    setForm(form);
    setIsModalOpen(!isModalOpen);
  };
  const onCanel = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onDel = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <Button onClick={() => onAdd()} className="fr mb-3">
        新增品牌
      </Button>
      <BrandFormModal
        isModalOpen={isModalOpen}
        cancel={onCanel}
        initialValues={form}
      ></BrandFormModal>
      <TableBox list={brandList} edit={onEdit} del={onDel} />
    </>
  );
};

export default Index;
