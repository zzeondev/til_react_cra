import styled from "@emotion/styled";
import React from "react";

function CommentList({ postid, id, name, email, body }) {
  // js
  const CommentCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #ffb703;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const CommentUser = styled.div`
    font-size: 13px;
    text-align: left;
    color: #999;
  `;
  const CommentName = styled.div``;
  const CommentEmail = styled.div`
    font-size: 15px;
    text-align: left;
    margin: 5px;
    color: #1a1818;
  `;
  const CommentBody = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  //jsx

  return (
    <CommentCard>
      {postid}.{id}
      <CommentUser></CommentUser>
      <CommentName>{name}</CommentName>
      <CommentEmail>e-mail:{email}</CommentEmail>
      <CommentBody>{body}</CommentBody>
    </CommentCard>
  );
}

export default CommentList;
