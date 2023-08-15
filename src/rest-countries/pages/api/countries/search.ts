import { NextApiRequest, NextApiResponse } from "next";
import countriesData from "../../../data/countries.json"; // Update the path to your JSON file

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { name } = req.query;

    if (typeof name === 'string') {
      const searchResults = countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      ).map(x=> x.name.common);;

      if (searchResults) {
        return res.status(200).json(searchResults);
      } else {
        return res.status(404).json({ message: 'Country not found' });
      }
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  }
};
//http://localhost:3000/api/countries/search?name=land