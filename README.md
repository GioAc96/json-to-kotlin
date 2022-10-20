# JSON To Kotlin

Script to convert JSON to Kotlin declaration of JSON object using the Kotlin JsonBuilder dsl.

## Usage

1. Change the value of the `input` variable in `src/index.ts`
2. Run `npm run compile && node dist/index`

## Example

Example input:
```json
{
  "ciao": true,
  "test": {
    "test": [
      1,
      {
        "test": null
      }
    ]
  }
}
```

Example output:

```kotlin
buildJsonObject {
  put("ciao", true)
  put("test", buildJsonObject {
    put("test", buildJsonArray {
      add(1)
      add(buildJsonObject {
        put("test", JsonNull)
      })
    })
  })
}
```