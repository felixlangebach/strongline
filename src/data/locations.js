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
                shortDescription:
                    "Besuchen Sie uns in unsere Filiale Strongline Stadt SG. Wir freuen uns auf Ihren Besuch."
            },
            // Strongline ausserhalb der Stadt
            "st-fiden": {
                company: "Strongline St. Fiden SG",
                query: "st-gallen",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "St. Gallen, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    "kanton-zuerich": {
        title: "Zürich",
        list: {
            "city-kreis-1": {
                company: "Strongline ZH Kreis 1",
                query: "zurich",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Zürich Kreis 1, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "city-kreis-2": {
                company: "Strongline ZH Kreis 2",
                query: "zurich",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Zürich Kreis 2, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "city-kreis-3": {
                company: "Strongline ZH Kreis 3",
                query: "zurich",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Zürich Kreis 3, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    dietikon: {
        title: "Dietikon",
        list: {
            "dietikon-stadt": {
                company: "Strongline Dietikon",
                query: "dietikon",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Dietikon, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    genf: {
        title: "Genf",
        list: {
            "genf-zentrum": {
                company: "Strongline Genf",
                query: "genf",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Genf, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "genf-see": {
                company: "Strongline Genf See",
                query: "genf",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Genf See, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "genf-west": {
                company: "Strongline Genf West",
                query: "genf",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Genf, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    chur: {
        title: "Chur",
        list: {
            "chur-zentrum": {
                company: "Strongline Chur",
                query: "chur",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Chur, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "chur-west": {
                company: "Strongline Chur West",
                query: "chur",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Chur West, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    "st-moritz": {
        title: "St. Moritz",
        list: {
            "st-moritz-zentrum": {
                company: "Strongline Chur",
                query: "st-moritz",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "St. Moritz, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    arosa: {
        title: "Arosa",
        list: {
            "arosa-zentrum": {
                company: "Strongline Arosa",
                query: "arosa",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Arosa, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    kreuzlingen: {
        title: "Kreuzlingen",
        list: {
            "kreuzlingen-zentrum": {
                company: "Strongline Kreuzlingen",
                query: "kreuzlingen",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Kreuzlingn, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    wil: {
        title: "Wil",
        list: {
            "wil-zentrum": {
                company: "Strongline Wil",
                query: "wil",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Wil, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    andermatt: {
        title: "Andermatt",
        list: {
            "andermatt-zentrum": {
                company: "Strongline Andermatt",
                query: "andermatt",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Andermatt, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    frauenfeld: {
        title: "Frauenfeld",
        list: {
            "frauenfeld-zentrum": {
                company: "Strongline Frauenfeld",
                query: "frauenfeld",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Frauenfeld, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    bern: {
        title: "Bern",
        list: {
            "bern-zentrum": {
                company: "Strongline Bern",
                query: "bern",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Bern, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "bern-west": {
                company: "Strongline Bern West",
                query: "bern",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Bern, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "bern-ost": {
                company: "Strongline Bern Ost",
                query: "bern",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Bern, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    pfaeffikon: {
        title: "Pfäffikon",
        list: {
            "pfaeffikon-zentrum": {
                company: "Strongline Pfäffikon",
                query: "pfaeffikon",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Pfäffikon, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            },
            "pfaeffikon-west": {
                company: "Strongline Pfäffikon West",
                query: "pfaeffikon",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Pfäffikon, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    richterswil: {
        title: "Richterswil",
        list: {
            "richterswil-zentrum": {
                company: "Strongline Richterswil",
                query: "richterswil",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Richterswil, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    dietlikon: {
        title: "Dietlikon",
        list: {
            "dietlikon-zentrum": {
                company: "Strongline Dietlikon",
                query: "dietlikon",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Dietlikon, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    },
    laax: {
        title: "Laax",
        list: {
            "laax-zentrum": {
                company: "Strongline Laax",
                query: "laax",
                contact: {
                    chief: "Herr Muster",
                    address: "Musterstrasse 33",
                    location: "Laax, Schweiz"
                },
                description: "Informationstext kommt hier hin",
                shortDescription: "Besuchen Sie uns in unsere Filiale {company}. Wir freuen uns auf Ihren Besuch."
            }
        }
    }
};

// Get all locations by a certain region e.g. St. Gallen
export const getLocationByRegion = region => database[region];

// Get a certain locations by a region and ID (required)
export const getLocationByRegionAndId = (region, id) => getLocationByRegion(region).list[id];

export default database;
