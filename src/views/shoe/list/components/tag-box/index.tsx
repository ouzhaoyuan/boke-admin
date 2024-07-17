import React from "react";
import { Tag } from "antd";

interface TagBoxPropsType {
  status: number;
}

const tabBox: React.FC<TagBoxPropsType> = ({ status }: TagBoxPropsType) => {
  switch (status) {
    case 1:
      return <Tag color="green">已上架</Tag>;
    case 2:
      return <Tag color="red">已下架</Tag>;
    case 3:
      return <Tag color="orange">已删除</Tag>;
    default:
      return <Tag color="blue">未上架</Tag>;
  }
};

export default tabBox;
