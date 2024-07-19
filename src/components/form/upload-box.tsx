import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "@/components/base-image/index";
export default function UploadBtn({ image, loading }: any) {
  return (
    <div>
      {image && image.length ? (
        <Image width={100} preview={false} src={image}></Image>
      ) : (
        <Button style={{ height: "72px", width: "72px" }}>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>上传</div>
        </Button>
      )}
    </div>
  );
}
