const classNames = (...args: Array<string | boolean>): string => {
  return args.filter(Boolean).join(' ')
}

export default classNames
