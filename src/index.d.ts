import { Dispatch, SetStateAction, useState } from 'react'

type Country = {
  name: string;
  capital: string;
  area: number;
  coordinates: [number, number];
  currencies: Array<{
    name: string;
    symbol: string;
  }>;
  languages: string[];
  maps: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  postalCode?: {
    format: string;
    regex: string;
  };
  flags?: {
    png?: string;
    svg?: string;
  };
  population: number;
  emoji?: string;
  countryCallingCode: string;
  isoCountryCode: string;
};

type CountriesState = {
  countries: Country[],
  setCountries: Dispatch<SetStateAction<Country[]>>,
}

export function useCountries(): CountriesState {
  return useState([])
}
