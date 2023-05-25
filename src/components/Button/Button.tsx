import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cls, tw } from '~/utils/tailwind.utils';

const baseButtonClasses = cls({
  default:
    'inline-flex items-center justify-center rounded-md text-sm font-medium font-inter',
  active: 'active:scale-95',
  focus:
    'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
  disabled:
    'disabled:pointer-events-none disabled:bg-violet-800' +
    ' disabled:text-violet-500 disabled: font-italic',
  transitions: 'transition-colors',
  stateIsOpen:
    'data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  darkHover: 'dark:hover:bg-violet-800 dark:hover:text-violet-100',
  darkFocus: 'dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
});

const buttonVariants = cva(baseButtonClasses, {
  variants: {
    variant: {
      default:
        'bg-slate-900 text-violet-100 hover:bg-violet-700 dark:bg-violet-300 dark:text-violet-900',
      destructive:
        'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
      outline:
        'border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
      subtle:
        'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
      ghost:
        'bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent',
      link: 'bg-transparent text-slate-900 underline-offset-4 hover:bg-transparent hover:underline dark:bg-transparent dark:text-slate-100 dark:hover:bg-transparent',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-2',
      lg: 'h-11 rounded-md px-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={tw(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

export default Button;
