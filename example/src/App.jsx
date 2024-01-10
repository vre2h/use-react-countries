import React from 'react'
import { useCountries } from 'use-react-countries'

export default function App() {
  const { countries } = useCountries()

  return (
    <>
      <p>Count: {countries.length}</p>
      <table>
        <thead style={{ fontWeight: 'bold' }}>
          <td>Name</td>
          <td>Capital</td>
          <td>Emoji</td>
          <td>Area</td>
          <td>Population</td>
          <td>
            <pre>.png</pre>
          </td>
          <td>
            <pre>.svg</pre>
          </td>
          <td>Country Calling Code</td>
          <td>Postal Code</td>
        </thead>
        {countries.map((c) => (
          <tr>
            <td>{c.name}</td>
            <td>{c.emoji}</td>
            <td>{c.capital}</td>
            <td>{c.area}</td>
            <td>{c.population}</td>
            <td>
              <img width={'20'} src={c.flags.png} />
            </td>
            <td>
              <img width={'20'} src={c.flags.svg} />
            </td>
            <td>{c.countryCallingCode}</td>
            <td>{JSON.stringify(c.postalCode)}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
