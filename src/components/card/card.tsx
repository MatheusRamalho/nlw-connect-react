import type { ComponentProps } from "react";

import { cn } from "@/libs/cn";

interface CardProps extends ComponentProps<'div'> { }

export function Card({ className, ...rest }: CardProps) {
  return (
    <div className={cn('bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6', className)} {...rest} />
  )
}
