import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  const allCars = [
    {
      "city_mpg": 23,
      "class": "compact car",
      "combination_mpg": 24,
      "cylinders": 4,
      "displacement": 1.6,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 26,
      "make": "toyota",
      "model": "corolla",
      "transmission": "a",
      "year": 1993
    },
    {
      "city_mpg": 23,
      "class": "compact car",
      "combination_mpg": 26,
      "cylinders": 4,
      "displacement": 1.6,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 31,
      "make": "toyota",
      "model": "corolla",
      "transmission": "m",
      "year": 1993
    },
    {
      "city_mpg": 23,
      "class": "compact car",
      "combination_mpg": 25,
      "cylinders": 4,
      "displacement": 1.8,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 30,
      "make": "toyota",
      "model": "corolla",
      "transmission": "a",
      "year": 1993
    },
    {
      "city_mpg": 23,
      "class": "compact car",
      "combination_mpg": 26,
      "cylinders": 4,
      "displacement": 1.8,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 30,
      "make": "toyota",
      "model": "corolla",
      "transmission": "m",
      "year": 1993
    },
    {
      "city_mpg": 23,
      "class": "small station wagon",
      "combination_mpg": 25,
      "cylinders": 4,
      "displacement": 1.8,
      "drive": "fwd",
      "fuel_type": "gas",
      "highway_mpg": 30,
      "make": "toyota",
      "model": "corolla wagon",
      "transmission": "a",
      "year": 1993
    }
  ]

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
