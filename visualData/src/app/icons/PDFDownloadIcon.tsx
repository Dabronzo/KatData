import React, {useState} from "react";



const PDFDownloadIcon = () => {

  const [hoover, setHoover] = useState<boolean>(false)

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
        d="M32 14H20c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2Zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5h-1v2h-1.5v-6H22c.83 0 1.5.67 1.5 1.5v1Zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5v-6H27c.83 0 1.5.67 1.5 1.5v3Zm4-3H31v1h1.5V23H31v2h-1.5v-6h3v1.5Zm-11.5 1h1v-1h-1v1ZM16 18h-2v14c0 1.1.9 2 2 2h14v-2H16V18Zm10 5.5h1v-3h-1v3Z"
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
export default PDFDownloadIcon;