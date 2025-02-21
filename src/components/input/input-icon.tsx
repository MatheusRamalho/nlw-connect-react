import type { ComponentProps } from 'react'

import { cn } from '@/libs/cn'

interface InputIconProps extends ComponentProps<'span'> { }

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className={cn(
        'text-gray-400',
        'group-focus-within:text-gray-100',
        'group-[&:not(:has(input:placeholder-shown))]:text-gray-100',
        'group-data-[error=true]:text-danger',
      )}
      {...props}
    />
  )
}
