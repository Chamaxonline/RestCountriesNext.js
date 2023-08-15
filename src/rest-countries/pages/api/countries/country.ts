import { NextApiRequest, NextApiResponse } from "next";
import countriesData from "../../../data/countries.json"; // Update the path to your JSON file

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { countryName } = req.query;

    if (countryName) {
      const selectedCountry = countriesData.find(
        (country) =>
          country.name.common.toLowerCase() === countryName.toLowerCase()
      );
      return res.status(200).json(selectedCountry);
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  }
};
