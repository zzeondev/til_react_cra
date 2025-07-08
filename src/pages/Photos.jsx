import React, { useState } from "react";
import PhotoList from "../components/phtos/PhotoList";

function Photos() {
  //js 자리

  const [photosArr, setPhotosArr] = useState([]);
  async function getPhotos() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await res.json();
      console.log(result);
      setPhotosArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getPhotos();
  function makePhotosList() {
    let list = [];
    list = photosArr.map(function (요소, index) {
      return <PhotoList key={index}></PhotoList>;
    });
    return list;
  }
  function resetList() {
    setPhotosArr([]);
  }

  // jsx 자리
  return (
    <div>
      <h1>
        Photos 목록
        <button onClick={getPhotos}> 목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>
      <div>
        {photosArr.map(function (요소, 인덱스) {
          return (
            <PhotoList
              albumid={요소.albumId}
              id={요소.id}
              thumbnailUrl={요소.thumbnailUrl}
              title={요소.title}
              url={요소.url}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
