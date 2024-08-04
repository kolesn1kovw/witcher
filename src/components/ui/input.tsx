import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[56px] w-full outline-none bg-[#2F2F2F] text-white px-[24px] py-[18px] text-[16px] ring-offset-white file:border-0  file:pb-[10px] file:bg-transparent file:text-sm file:font-medium placeholder:text-white/40  disabled:cursor-not-allowed disabled:opacity-50 ',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
