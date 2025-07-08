import React, { useState } from "react";
import UserList from "../components/users/UserList";

function Users() {
  //

  const [usersArr, setUsersArr] = useState([]);
  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();

      setUsersArr(result);
    } catch (error) {
      console.log(error);
    }
  }

  //   getUsers();

  function makeUsersList() {
    let list = [];
    list = usersArr.map(function (요소, index) {
      return <UserList key={index}></UserList>;
    });
    return list;
  }
  function resetList() {
    setUsersArr([]);
  }
  // jsx 자리
  return (
    <div>
      <h1>
        Users 목록
        <button onClick={getUsers}>목록가져오기</button>
        <button onClick={resetList}>목록초기화</button>
      </h1>

      <div>
        {usersArr.map(function (요소, 인덱스) {
          return (
            <UserList
              id={요소.id}
              name={요소.name}
              username={요소.userName}
              email={요소.email}
              address={요소.address}
              phone={요소.phone}
              website={요소.website}
              company={요소.company}
              key={인덱스}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Users;
