const database = {
    // Ort St. Gallen
    "st-gallen": {
        // Strongline im Stadt Zentrum
        "stadt-zentrum": {
            company: "Strongline Stadt SG",
            query: "st-gallen",
            contact: {
                chief: "Herr Muster",
                address: "Musterstrasse 33",
                location: "St. Gallen, Schweiz"
            },
            description: "Informationstext kommt hier hin",
            shortDescription: "Kurzer Informationstext kommt hier hin"
        },
        // Strongline ausserhalb der Stadt
        "agglo-st-fiden": {
            company: "Strongline Agglo SG",
            query: "st-gallen",
            contact: {
                chief: "Herr Muster",
                address: "Musterstrasse 33",
                location: "St. Gallen, Schweiz"
            },
            description: "Informationstext kommt hier hin",
            shortDescription: "Kurzer Informationstext kommt hier hin"
        }
    },
    "kanton-zuerich": {
        "city-kreis-1": {
            company: "Strongline ZH",
            query: "zurich",
            contact: {
                chief: "Herr Muster",
                address: "Musterstrasse 33",
                location: "Zürich, Schweiz"
            },
            description: "Informationstext kommt hier hin",
            shortDescription: "Kurzer Informationstext kommt hier hin"
        }
    }
};

export const getLocationByRegion = location => database[location] || {};
export const getLocationByRegionAndId = (location, id) => getLocationByRegion(location)[id];

export default database;
