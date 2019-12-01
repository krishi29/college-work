/**
 * Helper object for working with countries data and extracting information.
 * See countries-data.js for format of the countries data set.
 */
var countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,

    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     */
    getByLanguage: function(language) {
        var countriesByLanguage = [];
        for (var i = 0; i < this.all.length; i++) {
            var country = this.all[i];
            var countryByLanguage = {};
            countryByLanguage.code = country.code;
            countryByLanguage.continent = country.continent;
            countryByLanguage.areaInKm2 = country.areaInKm2;
            countryByLanguage.population = country.population;
            countryByLanguage.capital = country.capital;
            countryByLanguage.name = country.name[language];
            countriesByLanguage.push(countryByLanguage);
        }
        return countriesByLanguage;
    },

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function(minPopulation, maxPopulation) {
        var countriesByPopulation = [];
        // for(var country in getByLanguage('English')){
        var allCountriesEnglish = this.getByLanguage('English');
        for (var i = 0; i < allCountriesEnglish.length; i++) {
            country = allCountriesEnglish[i];
            if (
                country.population >= minPopulation &&
                (!maxPopulation || country.population <= maxPopulation)
            ) {
                var countryByPopulation = {};
                countryByPopulation.code = country.code;
                countryByPopulation.continent = country.continent;
                countryByPopulation.areaInKm2 = country.areaInKm2;
                countryByPopulation.population = country.population;
                countryByPopulation.capital = country.capital;
                countryByPopulation.name = country.name;
                countriesByPopulation.push(countryByPopulation);
            }
        }
        return countriesByPopulation;
    },

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
        var filteredCountries = [];
        var allCountriesEnglish = this.getByLanguage('English');
        for (var i = 0; i < allCountriesEnglish.length; i++) {
            country = allCountriesEnglish[i];
            if (
                country.continent === continent &&
                country.areaInKm2 >= minArea
            ) {
                var countryCopy = {};
                countryCopy.code = country.code;
                countryCopy.continent = country.continent;
                countryCopy.areaInKm2 = country.areaInKm2;
                countryCopy.population = country.population;
                countryCopy.capital = country.capital;
                countryCopy.name = country.name;
                filteredCountries.push(countryCopy);
            }
        }
        return filteredCountries;
    }
};

/**
 * Helper functions for building table elements.
 */
var tableHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body
     */
    clearTable: function() {
        var tableRows = document.getElementById('table-rows');
        tableRows.innerHTML = '';
    },

    /**
     * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
     * element with its `src` property set the appropriate flag image URL
     * for this code, e.g., src="flags/ca.png" for Canada.
     */
    countryCodeToFlagImg: function(countryCode) {
        var flagImg = document.createElement('img');
        flagImg.src = 'flags/' + countryCode + '.png';
        return flagImg;
    },

    /**
     * Takes a single `country` object and converts it to a <tr> with <td>
     * child elements for every column in the row.  The row should match the
     * expected format of the table (i.e., flag, code, country, continent, etc).
     * Return the new <tr>...</tr> row.
     *
     * Use the DOM methods document.createElement(), element.appendChild(), etc
     * to create your <tr> row.
     */
    countryToRow: function(country) {
        var trElement = document.createElement('tr');

        var flagElement = document.createElement('td');
        flagElement.appendChild(this.countryCodeToFlagImg(country.code));
        trElement.appendChild(flagElement);

        var codeElement = document.createElement('td');
        codeElement.innerText = country.code;
        trElement.appendChild(codeElement);

        var nameElement = document.createElement('td');
        nameElement.innerText = country.name;
        trElement.appendChild(nameElement);

        var continentElement = document.createElement('td');
        continentElement.innerText = country.continent;
        trElement.appendChild(continentElement);

        var areaElement = document.createElement('td');
        areaElement.innerText = country.areaInKm2;
        trElement.appendChild(areaElement);

        var populationElement = document.createElement('td');
        populationElement.innerText = country.population;
        trElement.appendChild(populationElement);

        var capitalElement = document.createElement('td');
        capitalElement.innerText = country.capital;
        trElement.appendChild(capitalElement);

        return trElement;
    },

    /**
     * Takes an array of `country` Objects named `countries`, and passes each
     * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `tableHelper.clear()` to remove any existing rows before you do this.
     */
    countriesToTable: function(countries) {
        tableHelper.clearTable();
        var tableRows = document.getElementById('table-rows');
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            var trElement = this.countryToRow(country);
            tableRows.appendChild(trElement);
        }
    },

    updateSubtitle: function(label) {
        var subtitleElement = document.getElementById('subtitle');
        subtitleElement.innerText = label;
    }
};

/**
 * Register click handlers for every menu item in the page.  Use the `countries`
 * and `tableHelper` Objects, and their associated methods, to update/populate
 * the #table-rows table body with the appropriate set of countries, based on the
 * menu item clicked.
 *
 * Make sure you also update the #subtitle heading to properly reflect what
 * is in the table after you populate it. For example: "List of Countries
 * and Dependencies - Population between 1 and 2 millon" or "List of Countries
 * and Dependencies - All countries in Asia" etc.
 */
function setupMenuHandlers() {
    updateHref('menu_english', function() {
        tableHelper.countriesToTable(countries.getByLanguage('English'));
        tableHelper.updateSubtitle('List of countries in English');
    });

    updateHref('menu_arabic', function() {
        tableHelper.countriesToTable(countries.getByLanguage('Arabic'));
        tableHelper.updateSubtitle('List of countries in Arabic');
    });
    updateHref('menu_french', function() {
        tableHelper.countriesToTable(countries.getByLanguage('French'));
        tableHelper.updateSubtitle('List of countries in French');
    });
    updateHref('menu_chinese', function() {
        tableHelper.countriesToTable(countries.getByLanguage('Chinese'));
        tableHelper.updateSubtitle('List of countries in Chinese');
    });
    updateHref('menu_hindi', function() {
        tableHelper.countriesToTable(countries.getByLanguage('Hindi'));
        tableHelper.updateSubtitle('List of countries in Hindi');
    });
    updateHref('menu_korean', function() {
        tableHelper.countriesToTable(countries.getByLanguage('Korean'));
        tableHelper.updateSubtitle('List of countries in Korean');
    });
    updateHref('menu_japanese', function() {
        tableHelper.countriesToTable(countries.getByLanguage('Japanese'));
        tableHelper.updateSubtitle('List of countries in Japanese');
    });
    updateHref('menu_russian', function() {
        tableHelper.countriesToTable(countries.getByLanguage('Russian'));
        tableHelper.updateSubtitle('List of countries in Russian');
    });
    updateHref('menu_population_100_000_000m', function() {
        tableHelper.countriesToTable(countries.getByPopulation(100000000));
        tableHelper.updateSubtitle('List of countries with population > 100m');
    });

    updateHref('menu_population_1m_2m', function() {
        tableHelper.countriesToTable(
            countries.getByPopulation(1000000, 2000000)
        );
        tableHelper.updateSubtitle(
            'List of countries with population between 1m and 2m'
        );
    });

    updateHref('menu_americas_1mkm', function() {
        tableHelper.countriesToTable(
            countries.getByAreaAndContinent('Americas', 1000000)
        );
        tableHelper.updateSubtitle(
            'List of countries in Americas with area > 1m'
        );
    });

    updateHref('menu_asia_all', function() {
        tableHelper.countriesToTable(
            countries.getByAreaAndContinent('Asia', 0)
        );
        tableHelper.updateSubtitle('List of all countries in Asia');
    });
}

function updateHref(elementId, functionRef) {
    var menuItem = document.getElementById(elementId);
    for (var i = 0; i < menuItem.childNodes.length; i++) {
        var childNode = menuItem.childNodes[i];
        if (childNode.href) {
            menuItem.childNodes[i].onclick = functionRef;
            break;
        }
    }
}

// When the page loads, setup all event handlers by calling setup function.
window.onload = setupMenuHandlers;
