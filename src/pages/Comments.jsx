import React, { useState } from "react";
import CommentList from "../components/comments/CommentList";

function Comments() {
  //
  const [commentsArr, setCommentsArr] = useState([]);
  async function getComments() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();

      setCommentsArr(result);
    } catch (error) {
      console.log(error);
    }
  }

  //   getComments();

  function makeCommentsList() {
    let list = [];
    list = commentsArr.map(function (요소, index) {
      return <CommentList key={index}></CommentList>;
    });
    return list;
  }
  function resetList() {
    setCommentsArr([]);
  }

  return (
    <div>
      <h1>
        Comments 목록
        <button onClick={getComments}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {commentsArr.map(function (요소, 인덱스) {
          return (
            <CommentList
              postid={요소.postId}
              id={요소.id}
              name={요소.name}
              email={요소.email}
              body={요소.body}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
