interface InputErrorProps {
  message?: string
}

export function InputError({ message }: InputErrorProps) {
  return <p className="text-danger font-semibold text-xs"> {message} </p>
}
