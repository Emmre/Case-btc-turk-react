import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"
import "./styled.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  )
}

export default Button
