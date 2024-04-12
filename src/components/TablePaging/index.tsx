import { Pagination } from "antd";
import "./index.scss"
interface TablePagingType {
  onChange: (page: number) => void;
  page: number;
  rows?: number;
  total: number;
}

export default (props: TablePagingType) => {
  const { onChange, page, rows = 20, total } = props;
  return (
    <Pagination
    className="page-box"
      defaultCurrent={page}
      total={total}
      pageSize={rows}
      onChange={onChange}
    />
  );
};
