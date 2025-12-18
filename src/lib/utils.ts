// Lightweight classnames utility to avoid external deps (clsx/tailwind-merge)
// Accepts strings, arrays, objects with truthy flags, and falsy values.
export type ClassValue = string | number | null | false | undefined | ClassDictionary | ClassArray
export interface ClassDictionary {
  [id: string]: any
}
export type ClassArray = ClassValue[]

function toVal(mix: ClassValue): string {
  let k: string
  let y: string
  let str = ""
  if (!mix) return str

  if (typeof mix === "string" || typeof mix === "number") {
    return "" + mix
  }

  if (Array.isArray(mix)) {
    for (let i = 0; i < mix.length; i++) {
      if (mix[i]) {
        y = toVal(mix[i])
        if (y) {
          if (str) str += " "
          str += y
        }
      }
    }
    return str
  }

  for (k in mix as ClassDictionary) {
    if ((mix as ClassDictionary)[k]) {
      if (str) str += " "
      str += k
    }
  }
  return str
}

export function cn(...inputs: ClassValue[]): string {
  // Basic merge by joining; does not perform tailwind conflict resolution but is sufficient here
  return inputs.map(toVal).filter(Boolean).join(" ")
}
