var country = function(name, population) {
    this.countryName = name;
    this.countryPopulation = population;    
};        

var viewModel = {
    availableCountries : ko.observableArray([
        new country("UK", 65000000),
        new country("USA", 320000000),
        new country("Sweden", 29000000)
    ]),
    selectedCountry : ko.observable()
};
ko.applyBindings(viewModel);