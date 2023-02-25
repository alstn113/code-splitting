import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  return <div>PostDetailPage {id}</div>;
};

export default PostDetailPage;
