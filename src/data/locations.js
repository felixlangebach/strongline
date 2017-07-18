const database = {
    // Ort St. Gallen
    "st-gallen": {
        title: "St. Gallen",
        list: {
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
        }
    },
    "kanton-zuerich": {
        title: "Zürich",
        list: {
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
    }
};

// Get all locations by a certain region e.g. St. Gallen
export const getLocationByRegion = region => database[region];

// Get a certain locations by a region and ID (required)
export const getLocationByRegionAndId = (region, id) => getLocationByRegion(region).list[id];

export default database;
