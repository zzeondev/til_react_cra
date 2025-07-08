import React, { useState } from "react";

// 파일로 만들지 않은  컴포넌트
function Hi({ data }) {
  // js 자리
  // jsx 자리
  return <div>{data?.name}님 안녕</div>;
}

function Test() {
  // js 자리
  const [userData, setUserData] = useState([
    { name: "hong", age: 10 },
    { name: "park", age: 15 },
    { name: "son", age: 18 },
    { name: "kim", age: 25 },
  ]);

  // jsx 자리
  return (
    <>
      <h2>회원전체 명단: map 활용</h2>
      <div>
        {userData.map(function (item, index) {
          return <Hi key={index} data={item}></Hi>;
        })}
      </div>
      <h2>연령이 10대인 회원 명단 : filter 활용</h2>
      <div>
        {userData
          .filter((item, index) => item.age < 20)
          .map((item, index) => (
            <Hi data={item} key={index}></Hi>
          ))}
      </div>
    </>
  );
}

export default Test;
