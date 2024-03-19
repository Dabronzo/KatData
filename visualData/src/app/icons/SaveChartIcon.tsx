import * as React from "react";



const SvgComponent = () => {

  const [hoover, setHoover] = React.useState<boolean>(false);

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    onMouseEnter={() => setHoover(true)}
    onMouseLeave={() => setHoover(false)}
  >
    <rect width={48} height={48} fill={!hoover ? '#e5e7eb' : '#1f2937'} rx={8} />
    <g clipPath="url(#a)">
      <path
        fill={!hoover ? '#1f2937' : '#e5e7eb'}
        d="M29 15H17a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V19l-4-4Zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Zm3-10H17v-4h10v4Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M12 12h24v24H12z" />
      </clipPath>
    </defs>
  </svg>
  )
}
export default SvgComponent
