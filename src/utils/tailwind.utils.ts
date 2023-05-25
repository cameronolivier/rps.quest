import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const tw = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
