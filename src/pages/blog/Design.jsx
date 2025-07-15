import React from "react";
import { useParams } from "react-router-dom";

function Design() {
  const { id } = useParams();
  return <div>{id} 번째 Design</div>;
}

export default Design;
