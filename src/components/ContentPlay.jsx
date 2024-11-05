import { useGetContext } from "../hooks/useGetContext";
import Selection from "../components/Selection";
import { Combat } from "../components/Combat";
const ContentPlay = () => {
  const { state } = useGetContext();
  if (state?.phase === 0) return <Selection />;
  if (state?.phase > 0) return <Combat />;
};
export default ContentPlay;
