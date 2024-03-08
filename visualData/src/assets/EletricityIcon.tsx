import * as React from "react"

type Props = {
    height: number;
    width: number;
    color: string;
}

const EletricityIcon = ({height, width, color}:Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={height} width={width} fill={color}>
    <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288h111.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5l76.9-179.5z" />
  </svg>
)
export default EletricityIcon