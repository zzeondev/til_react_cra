import styled from "@emotion/styled";
import React from "react";

function PhotoList({ thumbnailUrl, albumid, id, title, url }) {
  // js
  const PhotoCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #9aff03;
    margin: 20px;
    padding: 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const PhotoUser = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
  `;
  const PhotoTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  `;
  const PhotoImg = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  const PhotoUrl = styled.div`
    font-size: 13px;
    text-align: right;
    color: #999;
  `;
  // jsx
  return (
    <PhotoCard>
      <PhotoUser>User:{albumid}</PhotoUser>
      <PhotoImg>
        <img src={thumbnailUrl} alt={title} />
      </PhotoImg>
      <PhotoTitle>
        {id}.{title}
      </PhotoTitle>
      <PhotoUrl>{url}</PhotoUrl>
    </PhotoCard>
  );
}

export default PhotoList;
