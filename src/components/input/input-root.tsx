import type { ComponentProps } from 'react'

import { cn } from '@/libs/cn'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className={cn(
        'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2',
        'focus-within:border-gray-100',
        'data-[error=true]:border-danger'
      )}
      {...props}
    />
  )
}
