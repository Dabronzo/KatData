import * as React from "react"


type Props = {
    height: number;
    width: number;
    color: string;
}


const BarChartIcon = ({height, width, color}:Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width} fill={color}>
    <path d="M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32zm128 192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64c0-17.7 14.3-32 32-32zm128-64v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32zm128-96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
  </svg>
)
export default BarChartIcon
