import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import PostAPI, { Post } from "../lib/api/post";

interface Props {
  id: number;
}

const PostContents = ({ id }: Props) => {
  const { data } = useQuery<Post>(
    ["getPostById", id],
    () => PostAPI.getPostById(id),
    {
      suspense: true,
    }
  );
  const post = data as Post; // suspense

  return <Text>{post.body}</Text>;
};

const Text = styled.div`
  font-size: 1.5rem;
`;

export default PostContents;
