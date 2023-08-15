import { NextApiRequest, NextApiResponse } from "next";
import countriesData from "../../../data/countries.json"; // Update the path to your JSON file

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const sortOrder = "asc";

    const orderedCountries = [...countriesData].sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
      if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;     
      return 0;
    });
    return res.status(200).json(orderedCountries);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  } 

};
// http://localhost:3000/api/countries
