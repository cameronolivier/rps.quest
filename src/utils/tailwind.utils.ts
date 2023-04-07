import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { pipe } from '~/utils/fns.utils';

export const tw = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const twva = (...args: any[]): any => pipe(cva(args), twMerge);
