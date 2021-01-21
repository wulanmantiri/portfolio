import React, { ReactElement } from 'react'
import { Icon as Props } from 'models/icon'

const ExternalLinkIcon = ({ size, color }: Props): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size || '24'}
    height={size || '24'}
  >
    <g
      fill="transparent"
      stroke={color || '#7F7F7F'}
      strokeLinecap="inherit"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <path d="M15 3h6v6"></path>
      <path d="M10 14L21 3"></path>
    </g>
  </svg>
)

export default ExternalLinkIcon
