import styled from 'styled-components'

export {
  Flex as Row,
  SpacedRow,
  Column,
  SpacedColumn,
  Center,
  LeftToRightUnderline,
}

const Flex = styled.div<{
  align?: string
  justify?: string
  width?: string
}>`
  display: flex;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  width: ${({ width }) => width || 'auto'};
`

const SpacedRow = styled(Flex)<{
  spacing?: string
}>`
  > *:not(style) ~ *:not(style) {
    margin-left: ${({ spacing }) => spacing || '0.5rem'};
    margin-top: 0;
  }
`

const Column = styled(Flex)`
  flex-direction: column;
`

const SpacedColumn = styled(Column)<{
  spacing?: string
}>`
  > *:not(style) ~ *:not(style) {
    margin-top: ${({ spacing }) => spacing || '0.5rem'};
    margin-left: 0;
  }
`

const Center = styled(Column)`
  justify-content: center;
  align-items: center;
  height: 100%;
`

const LeftToRightUnderline = styled.span<{
  color?: string
}>`
  line-height: inherit;
  vertical-align: inherit;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15%;
    height: 2px;
    width: 0;
    opacity: 0;
    transition: width 0.4s ease-in-out, opacity 0.4s ease 0.5s;
    background-color: ${({ theme, color }) => color || theme.colors.blue};
  }

  &:hover:after {
    width: 100%;
    opacity: 1;
    transition: width 0.4s ease-in-out, opacity 0.1s ease;
  }
`
