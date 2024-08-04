import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[156px] w-full bg-[#2F2F2F]  text-white px-[24px] py-[18px] text-[16px]  placeholder:text-white/40 placeholder:text-[14px] focus-visible:outline-none disabled:cursor-not-allowed resize-none ',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
