import { useParams } from "react-router-dom";
export default function Info() {
  const { id } = useParams();
  return <div>{id}</div>;
}
