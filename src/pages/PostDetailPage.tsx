import { useParams } from "react-router-dom";
import PageSuspense from "../components/PageSuspense/PageSuspense";

const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  return PageSuspense.subscribe(<div>PostDetailPage {id}</div>);
};

export default PostDetailPage;
