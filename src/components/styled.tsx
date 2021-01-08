import styled from 'styled-components'

export { Row, SpacedRow, Column, SpacedColumn, Center }

const Flex = styled.div<{
  align?: string
  justify?: string
  width?: string
}>`
  display: flex;
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  width: ${({ width }) => (width ? width : 'auto')};
`

const Row = styled(Flex)`
  flex-direction: row;
`

const SpacedRow = styled(Row)<{
  spacing?: string
}>`
  > *:not(style) ~ *:not(style) {
    margin-left: ${({ spacing }) => (spacing ? spacing : '0.5rem')};
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
    margin-top: ${({ spacing }) => (spacing ? spacing : '0.5rem')};
    margin-left: 0;
  }
`

const Center = styled(Column)`
  justify-content: center;
  align-items: center;
  height: 100%;
`
