import React from 'react'

interface Props {
  className?: string
  children: React.ReactNode
  handleClick: () => void
}

const Button: React.FC<Props> = ({ children, className, handleClick }) => {
  return (
    <button className={className} type="button" onClick={() => handleClick}>
      {children}
    </button>
  )
}

export default Button
