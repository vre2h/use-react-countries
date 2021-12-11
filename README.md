# use-react-countries

> A tiny fully customizable react hook which gives you full list of countries with their flags, emojis and descriptions

[![NPM](https://img.shields.io/npm/v/use-react-countries.svg)](https://www.npmjs.com/package/use-react-countries) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-react-countries
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-react-countries'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [vre2h](https://github.com/vre2h)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
