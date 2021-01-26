import React, { ReactElement } from 'react'

import { Highlight } from 'components/styled'

export const generateHighlightedText = (
  textInput: string,
  color?: string,
): ReactElement => {
  const splittedText = textInput.split('##')
  return (
    <>
      {splittedText.map((text, id) =>
        id % 2 === 0 ? (
          text
        ) : (
          <Highlight key={id} color={color}>
            {text}
          </Highlight>
        ),
      )}
    </>
  )
}
