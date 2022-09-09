import React from "react";
import styled from "styled-components";

const BoxPicture = styled.picture`
  // !!!!
`;

const BoxImg = styled.img`
  display: block;
  /* width: {({width}) => width && width}px; */
  /* width: 100%; */
`;

interface PictureProps {
  url: string;
}

const Picture: React.FC<PictureProps & React.HTMLAttributes<HTMLDivElement>> = ({ url, ...props }) => {
  return (
    <BoxPicture>
      <BoxImg src={url} alt="..." {...props} />
    </BoxPicture>
  );
};

export default Picture;
