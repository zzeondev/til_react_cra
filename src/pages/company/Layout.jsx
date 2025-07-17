import React, { useEffect } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button } from "../todo/Todo.style";

function Layout() {
  // js 자리
  const navigate = useNavigate();
  const handleClickHome = () => {
    const path = "/";
    const 숨긴정보 = {
      memo: "회사소개에서 왔어요",
      good: "제품도 봤어요",
      favorite: "이사람 제품1에 관심있네요?",
    };
    navigate({ pathname: path, search: "?hi=100" }, { state: { 숨긴정보 } });
  };

  // 현재 path 알아내기
  const { pathname, search, state } = useLocation();
  console.log(pathname); //     /company/list
  console.log(search); //
  console.log(state); //  null

  useEffect(() => {
    const user = {
      name: "iu",
      age: 28,
      id: 100,
    };
    const queryStr = createSearchParams({ ...user }).toString();
    console.log(queryStr); // name=iu&age=28&id=100
  }, []);
  // jsx 자리
  return (
    <div>
      <div>
        <Button onClick={handleClickHome}>홈</Button>
        <Link to="/company">회사소개</Link>
        <br />
        <Link to="/company/list">제품 소개</Link>
        <br />
        <Link to="/company/location">회사위치 소개</Link>
      </div>
      <div>
        <h2>Outlet 자리</h2>
        <div style={{ background: "yellow", minHeight: 100 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
