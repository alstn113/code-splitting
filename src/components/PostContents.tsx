import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  id: number;
}

const PostContents = ({ id }: Props) => {
  const getPostById = async () => {
    const { data } = await axios.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return data;
  };

  const { data } = useQuery<Post>(["getPostById", id], getPostById, {
    suspense: true,
  });
  const post = data as Post; // suspense

  return <Text>{post.body}</Text>;
};

const Text = styled.div`
  font-size: 1.5rem;
`;

export default PostContents;
