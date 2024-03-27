import * as React from "react";

type Props = {
    height: number;
    width: number;
}

const ContainerMenuIcon = ({height, width}:Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"  height={height} width={width}>
    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
  </svg>
)
export default ContainerMenuIcon
