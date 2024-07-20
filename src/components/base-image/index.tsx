import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./index.scss";
import { Image } from "antd";
interface ImageBoxProps {
  src: string;
  width?: number;
  preview?: boolean;
}
export default function ImageBox({
  src,
  width = 70,
  preview = true
}: ImageBoxProps) {
  const className = preview ? "border" : "";
  return (
    <Image
      style={{ width, height: width }}
      preview={preview}
      className={className}
      src={src}
    ></Image>
  );
}
