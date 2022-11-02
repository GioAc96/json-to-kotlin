# JSON To Kotlin

Script to convert JSON to Kotlin declaration of `JsonElement` using the Kotlin `JsonBuilder` dsl.

__[Open in TypeScript Playground](https://www.typescriptlang.org/play?target=8#code/MYewdgzgLgBAlmADgV1gXhgAwN4F9MBQBUAnogKYwBSE4MGYyANkzAD4zQBOCA5uzABGIEE3IBDMAMYBbQeS4Ca4ANoBdAdgIwYKgNbkSALk5QeYXmpPKwBXEVCRYUcYIDKcAF6UMAFiIA9AEwjtDwYAAm5GDoMAAU3CbcfAA0MC6CECay8lwAlPQAfDAA5KUAdFzkFOJQcRke3jAAVOmuEAUA1KZcDuBhjgBuCrFxCChQ1rRgBWjFWjpwAGbxpBQgK+Oo9GgYJckWJQULOjBVUMhcUpgARAAk2FtQuDeEOvaLK-Vk5BvhEzs9sJRBIwGU2Bw1r9Nkhtrs9jkFEcYCcdOdLtcHk98NoYPZcct4k9ATBGCxjri0eQLldSjYAHLMJglXH4z7xACCXC44hI5TgEC5PJIY1hUDyFNOMDEsCqEGYUAASiAAO5ZHp8dT0XSU04lQTIOBMCI2IW8lEsqVqIhSpYgRRxUKwaJmEgwP5PSVSs7keVMJWqiDlFAQAAWcUw4giETiDyGIziLq4JDyuDymDyurZpzlCuVauDyDDcRKuCONpz1IxPr9AYLACsQAgSwAdMGZ94VwnfdYwgHw0ogQT18jAKDI1HS6k1vOBpJmTUaDAqXU6fWG402ADyw9HsGwltO1t1Tvdu7HAEkxdrieIICjV7oDMYNRYrNRplmKzo7Q6ZTBn3CM8R0vMUvSlbsdxAqBgy4EAoHgn5ylDO8txVMAAAU4IoLhSHKYBxBYOIh2gq8JjSZ8JQfb1K1rfMgxDcNHylTAJjie5sGfF40jjcBhlw4jzygMjUH0QwNDvD9wFTdNmJgDtvQ+U5sypOjA0LYtS3LXV0VpXN-Xo8pG2bEo23LTtcSgUM4JVUlyFsgBRbl7QjK9BkIuAIn+bYoRgB4oQ9MV8EzfFQhBcomBAXhHT4hMqDcLd6WDcQuAgchRQmCU8iAA)__

## Usage

1. Change the value of the `input` variable in `src/index.ts`
2. Run `npm run compile && node dist/index`

Make sure to `import kotlinx.serialization.json.*` in your Kotlin source code.

> :warning: **The output is not correctly indented. Use your IDE to fix indentation.**

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

Example output (after indentation correction):

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
