import styled from "@emotion/styled";
import React from "react";

function UserList({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  //js 자리

  const UserCard = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    border: 6px solid #2fb703;
    margin: 20px;
    padding: 20px;
    cursor: pointer;

    transition: all 0.2s;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const UserName = styled.h1`
    font-size: 20px;
    color: #333;
  `;
  const UserEmail = styled.div`
    font-size: 15px;
    color: #555;
    margin-bottom: 3px;
  `;
  const UserAdd = styled.div`
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 10px;
    border: 1px solid #45be63;
    border-radius: 10px;
    padding: 20px;
  `;
  const UserNum = styled.div`
    font-size: 15px;
    color: #555;
    margin-bottom: 10px;
    font-style: italic;
    text-align: right;
  `;
  const UserWeb = styled.div`
    font-size: 15px;
    color: #555;
    margin-bottom: 20px;
  `;
  const UserCom = styled.div`
    font-size: 15px;
    color: #555;
    margin-bottom: 10px;
    border: 1px solid #45be63;
    border-radius: 10px;
    padding: 10px;
  `;

  // jsx 자리
  return (
    <UserCard>
      <UserName>
        {id} : {name}({username})
      </UserName>
      <UserEmail>{email}</UserEmail>
      <UserWeb>{website}</UserWeb>
      <UserAdd>
        {address?.street}, {address?.suite}, {address?.city}, {address?.zipcode}
        <br /> 위도: {address?.geo?.lat} / 경도: {address?.geo?.lng}
      </UserAdd>
      <UserCom>
        {company?.name} - {company?.catchPhrase}
        <br />
        <small>{company?.bs}</small>
      </UserCom>
      <UserNum>{phone}</UserNum>
    </UserCard>
  );
}

export default UserList;
