import React, { useState } from "react";
import AlbumList from "../components/albums/AlbumList";

function Albums() {
  //js 자리

  // 2
  const [albumsArr, setAlbumsArr] = useState([]);
  async function getAlbums() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const result = await res.json();

      // 4
      setAlbumsArr(result);
    } catch (error) {
      console.log(error);
    }
  }
  //   getAlbums();
  function makeAlbumsList() {
    let list = [];
    list = albumsArr.map(function (요소, index) {
      return <AlbumList key={index}></AlbumList>;
    });
    return list;
  }
  function resetList() {
    setAlbumsArr([]);
  }
  // jsx 자리
  return (
    // 1
    <div>
      <h1>
        Albums 목록
        <button onClick={getAlbums}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>

      <div>
        {albumsArr.map(function (요소, 인덱스) {
          return (
            <AlbumList
              userid={요소.userId}
              id={요소.id}
              title={요소.title}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
