import { NextApiRequest, NextApiResponse } from "next";
import countriesData from "../../../data/countries.json"; // Update the path to your JSON file

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
      const { countryName } = req.query;
  
      if (typeof countryName === 'string') {
        const selectedCountry = countriesData.find(
          (country) =>
            country.name.common.toLowerCase() === countryName.toLowerCase()
        );
  
        if (selectedCountry) {
          return res.status(200).json(selectedCountry);
        } else {
          return res.status(404).json({ message: 'Country not found' });
        }
      } else {
        return res.status(400).json({ message: 'Invalid input' });
      }
    } else {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  };
  
//http://localhost:3000/api/countries/country?countryName=india