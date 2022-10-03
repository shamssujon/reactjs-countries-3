import React from "react";

const Country = ({ country }) => {
    console.log(country);
    return (
        <div className="country rounded bg-white p-8 text-center shadow">
            <div className="mb-4 aspect-video">
                <img
                    src={country.flags.svg}
                    alt="CountryImage"
                    className="h-full w-full border object-cover"
                />
            </div>
            <h4 className="text-xl font-semibold">{country.name.common}</h4>
        </div>
    );
};

export default Country;
