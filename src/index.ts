const input = `{}`

type Json = null | string | boolean | number | Json[] | {
  [key: string]: Json
}

const tabSize = 4

// const indent = (str: string, tabs: number) => ' '.repeat(tabSize * tabs) + str

const convert = (input: Json) => {
  if (typeof input === 'string') {
    return `"${input}"`
  }
  if (typeof input === 'boolean' || typeof input === 'number') {
    return `${input}`
  }

  if (input === null) {
    return 'JsonNull'
  }

  if (Array.isArray(input)) {
    let resultRows: string[] = [
      'buildJsonArray {'
    ]

    for (const entry of input) {
      resultRows.push(`add(${convert(entry)})`)
    }

    resultRows.push('}')

    return resultRows.join('\n')
  }

  if (typeof input === 'object') {
    let resultRows: string[] = [
      'buildJsonObject {'
    ]

    const objectInput = input as {
      [key: string]: Json
    }

    for (let key in objectInput) {
      if (Object.prototype.hasOwnProperty.call(objectInput, key)) {
        resultRows.push(
          `put("${key}", ${convert(objectInput[key] as Json)})`
        )
      }
    }

    resultRows.push('}')

    return resultRows.join('\n')
  }

  throw new Error(`Invalid input type ${typeof input}`)
}

console.log(convert(JSON.parse(input)))