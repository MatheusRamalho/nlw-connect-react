import type { ComponentProps } from 'react'

interface InputFieldProps extends ComponentProps<'input'> { }

export function InputField({ ...props }: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
