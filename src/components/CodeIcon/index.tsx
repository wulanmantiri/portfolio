import React, { ReactElement, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Center } from 'components/styled'

type Props = {
  url: string
  size?: number
}

const StyledIcon = styled(Center)<{
  size?: number
}>`
  background-color: ${({ theme }) => theme.colors.border};
  width: ${({ size }) => size || '22'}px;
  height: ${({ size }) => size || '22'}px;
  border-radius: 50%;
`

const CodeIcon = ({ url, size }: Props): ReactElement => {
  const theme = useContext(ThemeContext)

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <StyledIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size ? size - 10 : '15'}
          height={size ? size - 10 : '15'}
          version="1.1"
          viewBox="10 0 511.997 511.997"
        >
          <path
            fill={theme.colors.secondary}
            d="M506.76 242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-.787-7.706 7.277-8.064 19.43-.781 27.142l105.965 112.256-105.965 112.269c-7.283 7.712-6.925 19.859.781 27.142a19.151 19.151 0 0013.178 5.235 19.172 19.172 0 0013.965-6.01l118.4-125.446c6.981-7.404 6.981-18.963-.001-26.361zM151.566 368.262L45.608 255.999l105.958-112.262c7.277-7.712 6.925-19.866-.787-27.142-7.706-7.277-19.866-6.925-27.142.787l-118.4 125.44c-6.982 7.398-6.982 18.963 0 26.362L123.643 394.63c3.776 4 8.864 6.016 13.965 6.016 4.723 0 9.466-1.741 13.171-5.242 7.719-7.277 8.064-19.43.787-27.142zM287.061 52.697c-10.477-1.587-20.282 5.606-21.882 16.083l-56.32 368.64c-1.6 10.483 5.6 20.282 16.083 21.882.986.147 1.958.218 2.925.218 9.325 0 17.504-6.803 18.957-16.301l56.32-368.64c1.6-10.484-5.6-20.282-16.083-21.882z"
          ></path>
        </svg>
      </StyledIcon>
    </a>
  )
}

export default CodeIcon
