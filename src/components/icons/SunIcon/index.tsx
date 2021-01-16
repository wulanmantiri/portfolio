import React, { ReactElement } from 'react'

const SunIcon = (): ReactElement => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
  >
    <g
      strokeLinejoin="inherit"
      strokeLinecap="inherit"
      strokeWidth="2"
      fill="none"
      stroke="white"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <path d="M12 1v2"></path>
      <path d="M12 21v2"></path>
      <path d="M4.22 4.22l1.42 1.42"></path>
      <path d="M18.36 18.36l1.42 1.42"></path>
      <path d="M1 12h2"></path>
      <path d="M21 12h2"></path>
      <path d="M4.22 19.78l1.42-1.42"></path>
      <path d="M18.36 5.64l1.42-1.42"></path>
    </g>
  </svg>
)

export default SunIcon
