'use client'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import cs from './button.module.scss'

const button = cva(`${cs.button}`, {
    variants: {
        variant: {
            primary: cs.primary,
            ghost: cs.ghost,
        },
    },
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof button> & { children: React.ReactNode }

export const Button: FC<ButtonProps> = ({
    className,
    variant,
    children,
    ...props
}) => {
    return (
        <button className={button({ variant, className })} {...props}>
            {children}
        </button>
    )
}
