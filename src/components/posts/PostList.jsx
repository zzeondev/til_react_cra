import styled from "@emotion/styled";
import React from "react";

function PostList({ id, title, body, userid }) {
  // js 자리
  const PostCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PostTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PostBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const PostUser = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  // jsx 자리
  return (
    <PostCard>
      <PostTitle>
        {id}.{title}
      </PostTitle>
      <PostBody>{body}</PostBody>
      <PostUser>User: {userid}</PostUser>
    </PostCard>
  );
}

export default PostList;
