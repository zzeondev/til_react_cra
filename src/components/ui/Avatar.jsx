import styled from "@emotion/styled";
import React from "react";

function Avatar({
  src = "https://i.pravatar.cc/100",
  alt = "avatar",
  size = "40px",
  shadow = true,
}) {
  // js 자리
  const StyledAvatar = styled.img`
    border-radius: 50%;
    width: ${props => props.size};
    height: ${props => props.size};
    object-fit: cover;
    border: 3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, ${props => (props.shadow ? 0.3 : 0)});
  `;

  // jsx 자리
  return <StyledAvatar src={src} alt={alt} size={size} shadow={shadow} />;
}

export default Avatar;
