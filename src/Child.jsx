import React, { memo } from "react";

function Child() {
  // js 자리
  console.log("Chold : 리랜더링");
  // jsx 자리
  return <div>Child</div>;
}

export default memo(Child);
