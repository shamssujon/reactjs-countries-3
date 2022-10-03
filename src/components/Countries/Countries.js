import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) =>
                setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
            )
            .catch((error) => console.log(error));
    }, []);
    return (
        <section className="py-20">
            <div className="container">
                <h4 className="mb-8 text-center text-3xl">
                    Total country found: <span className="font-bold">{countries.length}</span>
                </h4>
                <div className="countries grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {countries.map((country) => (
                        <Country key={`${country.cca3}${country.ccn3}`} country={country}></Country>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countries;
