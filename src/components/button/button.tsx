// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import clsx from 'clsx'

const classPrefix = 'sn-button'

export type ButtonProps = {
  color?: 'default' | 'primary'
  fill?: 'solid' | 'outline' | 'none'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  style?: React.CSSProperties
  block?: boolean
  size?: 'small' | 'middle' | 'large'
  disabled?: boolean
}
// const defaultProps = {
//   type: 'button',
//   fill: 'solid',
//   color: 'default'
// }
export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        classPrefix,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: props.disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-fill-small`]: props.size === 'small',
          [`${classPrefix}-fill-large`]: props.size === 'large'
        }
      )}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
