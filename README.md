# use-react-countries

> A tiny fully customizable react hook which gives you full list of countries with their flags, emojis, country calling codes, postal codes and many more...

[![NPM](https://img.shields.io/npm/v/use-react-countries.svg)](https://www.npmjs.com/package/use-react-countries) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

- npm

```bash
npm install --save use-react-countries
```

- yarn

```bash
yarn add use-react-countries
```

## Examples

See this [codesandbox](https://codesandbox.io/s/use-react-countries-examples-forked-tf85v?file=/Readme.md) playground or /example folder if you want to play with hook.

## Usage

A simple example of a component which you can copy-paste and take info about all countries.

```jsx
import { useCountries } from 'use-react-countries'

const Example = () => {
  const { countries } = useCountries()

  return (
    <div>
      {countries.map(
        ({
          name,
          postalCode,
          emoji,
          capital,
          area,
          population,
          countryCallingCode
        }) => (
          <section>
            <h2>
              {emoji} {name}
            </h2>
            <p>
              Post code: {postalCode?.format} <br /> Regex for post code:{' '}
              {postalCode?.regex}
            </p>
            <p>{capital}</p>
            <p>{area}</p>
            <p>{population}</p>
            <p>{countryCallingCode}</p>
          </section>
        )
      )}
    </div>
  )
}
```

## API

- Country interface

```javascript
type country = {
  name: string,
  capital: string,
  area: number,
  coordinates: number[],
  currencies: {
    name: string,
    symbol: string
  }[],
  languages: string[],
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  postalCode: {
    format: string,
    regex: string
  },
  flags: {
    png: string,
    svg: string
  },
  population: number,
  emoji: string,
  countryCallingCode: string
}
```

| Property           | Type                                           | Description |
| ------------------ | ---------------------------------------------- | ----------- |
| name               | string                                         |             |
| capital            | string                                         |             |
| area               | number                                         |             |
| emoji              | string                                         |             |
| flags              | { png: string, svg: string }                   |             |
| countryCallingCode | number                                         |             |
| population         | number                                         |             |
| currencies         | { name: string, symbol: string }[]             |             |
| languages          | string[]                                       |             |
| maps               | { googleMaps: string, openStreetMaps: string } |             |
| postalCode         | { format: string, regex: string }              |             |
| coordinates        | [number, number]                               |             |

## Authors

- [Oganisyan Vrezh](https://oganisyan.com)

## License

MIT © [vre2h](https://github.com/vre2h)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
