/* eslint-disable react/prop-types */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {client} from '../../utils/sanity'

const Color = styled.div`
  position: relative;
  width: max-content;

  display: inline-block;

  padding: 0.125rem 0.5rem;
  background-color: ${({value}) => value} !important;
  border-radius: 0.25rem;

  transition: background-color 0.3s ease-in-out;

  * {
    background-color: inherit !important;
  }
`

const BackgroundColorRenderer = (props) => {
  const {renderDefault, value} = props

  const [backgroundColor, setBackgroundColor] = useState(`#000000`)

  useEffect(() => {
    if (!value?.reference?._ref) return

    client.fetch(`*[_id == $ref][0]`, {ref: value?.reference?._ref}).then((color) => {
      setBackgroundColor(color?.value?.hex)
    })
  }, [value?.reference?._ref])

  if (!value) return renderDefault(props)

  return <Color value={backgroundColor}>{renderDefault(props)}</Color>
}

export default BackgroundColorRenderer
