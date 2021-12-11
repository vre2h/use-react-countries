import { useState } from 'react'
import defaultCountries from './constants/countries'

export const useCountries = () => {
  let [countries, setCountries] = useState(() => {
    return defaultCountries
  })

  return { countries, setCountries }
}
