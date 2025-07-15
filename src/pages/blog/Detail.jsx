import React from "react";
import { useSearchParams } from "react-router-dom";

function Detail() {
  // ? Search params
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const user = searchParams.get("user");
  return (
    <div>
      블로그 상세 정보 {id} {user} 내용 Detail
    </div>
  );
}

export default Detail;
