import { useState, useEffect } from "react";
import { Table } from "antd";
import TablePaging from "@/components/TablePaging/index";
import useUrlQuery from "@/hooks/useUrlQuery";
import { getArticleListApi } from "@/api/modules/article";
const Articles = () => {
  const [list, setList] = useState<any[]>([]);
  const [query, setQuery] = useUrlQuery();
  const columns = [
    {
      dataIndex: "title",
      key: "title",
      title: "标题"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ];

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let { data, err } = await getArticleListApi();
    if (err) return err;
    if (data) setList(data as []);
  };

  const page = query.page ? Number(query.page) : 1;

  const onChangePage = (_page: number) => {
    setQuery({
      ...query,
      page: _page
    });
  };

  return (
    <>
      <Table
        dataSource={list}
        columns={columns}
        pagination={false}
        scroll={{ y: 'calc(100vh - 175px)' }}
      />
      <TablePaging onChange={onChangePage} page={page} total={50}></TablePaging>
    </>
  );
};

export default Articles;
