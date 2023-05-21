import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import PostAPI, { Post } from "../lib/api/post";
import PageSuspense from "../components/PageSuspense/PageSuspense";

const PostPage = () => {
  const { data } = useQuery<Post[]>(["getPosts"], PostAPI.getPosts, {
    suspense: true,
  });
  const posts = data as Post[]; // suspense

  return PageSuspense.subscribe(
    <Container>
      {posts.map((post) => (
        <ContentWrapper key={post.id} to={`/post/${post.id}`}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </ContentWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const ContentWrapper = styled(Link)`
  height: 500px;
  width: 500px;
  background-color: #fed286;
  word-wrap: break-word;
  font-size: 1.5rem;
`;

export default PostPage;
