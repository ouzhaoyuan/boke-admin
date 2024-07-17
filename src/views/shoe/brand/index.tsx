import React, { useEffect, useState } from "react";
import TableBox from "./components/table-box/index";
import BrandFormModal from "./components/brand-form-modal/index";
import { getShotBrand } from "@/store/modules/shoe";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formId, setFormId] = useState(0);

  useEffect(() => {
    dispatch(getShotBrand());
  }, []);
  const { brandList } = useAppSelector((state) => state.shoe);
  const onAdd = () => {
    setFormId(0);
    setIsModalOpen(!isModalOpen);
  };
  const onEdit = (id: number) => {
    setFormId(id);
    setIsModalOpen(!isModalOpen);
  };
  const onCanel = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button onClick={() => onAdd()} className="fr mb-3">
        新增品牌
      </Button>
      <BrandFormModal
        formId={formId}
        isModalOpen={isModalOpen}
        cancel={onCanel}
      ></BrandFormModal>
      <TableBox list={brandList} onEdit={onEdit} />
    </>
  );
};

export default Index;
