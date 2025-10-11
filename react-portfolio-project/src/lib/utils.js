import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export const cn = (...inputs) => {
  // Combine class names using clsx and merge with tailwind-merge
  return twMerge(clsx(...inputs))
}