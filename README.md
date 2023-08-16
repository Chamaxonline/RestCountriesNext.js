RestCountriesNext.js
=======

Get information about countries via a Next.js API https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/

API Endpoints
=======

Below are described the REST endpoints available that you can use to search for countries

All
---------------

``` html
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries
```
Names List
---------------

Get all country names

``` javascript
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/names
```

``` html
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/names
```

Name
---------------

Get by country name.

``` javascript
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/country?countryName={countryname}
```

``` html
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/country?countryName=canada
```

``` html
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/country?countryName=denmark
```

Search by Name
---------------

Search by country name. It will load countries which contain search characters

``` javascript
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/search?name=land
```

``` html
https://rest-countries-next-eifx8fvpt-chamaxonline.vercel.app/api/countries/search?name=stan
```



