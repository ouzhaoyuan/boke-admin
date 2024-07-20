import { Button,  Upload, UploadProps, message } from "antd";
import { useState } from "react";
import Image from "@/components/base-image";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

export default (props: UploadProps) => {
  const [fileList, setFileList] = useState<[]>() as any[];
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const onChange = ({ file }: any) => {
    let { status, response } = file;
    if (status === "uploading") {
      setLoading(true);
    } else if (status === "done" && response.code === 200) {
      message.success("上传成功");
      setFileList([file]);
      setImage(response.data.url);
      setLoading(false);
    } else if (file.status === "done" && response.code === 0) {
      message.error("上传失败:" + response.msg);
      setLoading(false);
    }
  };
  return (
    <Upload {...props} fileList={fileList} onChange={onChange}>
      {image && image.length ? (
        <Image width={100} preview={false} src={image}></Image>
      ) : (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>上传</div>
        </div>
      )}
    </Upload>
  );
};
