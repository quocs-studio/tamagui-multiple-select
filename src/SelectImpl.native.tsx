import React from 'react'
import { SelectImplProps } from './types'

/**
 * TODO can just make it a sheet for native
 * later on can have `native` prop
 */

export const SelectInlineImpl = (props: SelectImplProps) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn('Sheet not implemented inline on native')
  }
  return <>{props.children}</>
}
