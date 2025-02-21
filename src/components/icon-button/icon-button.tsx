import type { ComponentProps } from 'react'

import { cn } from '@/libs/cn'

interface ButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
