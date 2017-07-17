/**
 * Created by Yakovlev Michail on 05.05.2017.
 */


/*
    Update 2.0
    Changes:

    1.) The amount of code is reduced by 8.29%.
    2.) Corrected some spelling errors in the output of the text.
    3.) Added data of missing object and data types for input parameters.
    4.) The code has become more understandable.
    5.) The Moskvich-412 car was replaced by a more practical GAS-24-02 'Volga'.

* */



// Input parameters
/**
 *  Example of an object from an array
 */
/*

 Object departure - require. Contains data on the sending
 departure: {
 id:    - Necessary property. ID of the city in case of no name match (example: Moscow - Moscow city). Type - number
 city:  - Necessary property. Name city. Type - string
 departurePoint:    - Optional property. Departure point (port, airport, railway station). Type - string
 departurePointName:   - Optional property. Name departure point (Domodedovo). Type - string
 terminal:  - Optional property. Terminal number, port number. Type - string
 number:    - Optional property. Flight number. Type - string
 place: - Optional property. Place number. Type - string
 },

 Object destination - require. Contains information about the place of arrival
 destination: {
 id:     - Necessary property. ID of the city. Type - number
 city:   - Necessary property. Name city. Type - string
 },

 Object transport - optional. Contains information about transport.
 transport: {
 id:        - ID transport. Type - number
 type:      - Type transport. Type - string
 brand:     - Brand transport. Type - string
 },

 Object transfer - optional. Contains information about transplants if there is no direct route. (Almost all routes are real)
 transfer: {
 id:        - ID transport. Type - number
 type:      - Type transport. Type - string
 numberTransfer:  - Flight number. Type - string
 brandTransfer:   - Brand transport. Type - string
 placeTransfer:   - Place number. Type - string
 cityTransfer:    - Through which city is the transfer. Type - string
 destinationTransfer:  - Place of arrival. Type - string
 departureTransfer:    - Departure point. Type - string
 },

 Object additionally - optional. Contains additional information about the route.
 additionally: {
 baggage: - As an example information about baggage. Type - string

 }
 */


/**
 *  List of objects for an example
 * @type {[*]}
 */
const cards = [{

    departure: {
        id: 0,
        city: ' Yekaterinburg',
        departurePoint: ' Railway station',
        departurePointName: ' Yekaterinburg-Pass',
        terminal: '',
        number: ' 075Э',
        place: '. Your place is 22'
    },

    destination: {
        id: 1,
        city: ' Moscow'
    },
    transport: {
        id: 3,
        type: ' train'
    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 1,
        city: ' Moscow',
        departurePoint: ' Airport',
        departurePointName: ' Sheremetyevo',
        terminal: ' terminal F',
        number: ' U6-525',
        place: '. Your place is 54'
    },
    destination: {
        id: 2,
        city: ' Simferopol'
    },
    transport: {
        id: 4,
        type: ' plane',
        brand: ' Airbus A321'
    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 2,
        city: ' Simferopol',
        departurePoint: ' Road',
        departurePointName: ' passing car',
        terminal: ' Lenin street',
        number: ' number 00 A017NCuz'
    },
    destination: {
        id: 3,
        city: ' Volgograd'
    },
    transport: {
        id: 5,
        type: ' car',
        brand: ' GAZ-24-02 \'Volga\''
    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 3,
        city: ' Volgograd',
        departurePoint: ' Bus station',
        departurePointName: ' Voljskiy',
        terminal: ' terminal 4',
        place: '. Your place is 10'
    },

    destination: {
        id: 4,
        city: ' St-Petersburg'
    },
    transport: {
        id: 6,
        type: ' bus',
        brand: ' MAN 240'
    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 4,
        city: ' St-Petersburg',
        departurePoint: ' Airport',
        departurePointName: ' Pulkovo',
        terminal: ' terminal 1',
        number: ' AF 1665',
        place: '. Your place is 165'
    },
    destination: {
        id: 5,
        city: ' New York'
    },
    transport: {
        id: 4,
        type: ' plane',
        brand: ''
    },
    transfer: {
        id: 4,
        type: ' plane',
        numberTransfer: ' AF 032',
        brandTransfer: ' Airbus A380',
        placeTransfer: 20,
        cityTransfer: ' Paris',
        destinationTransfer: ' Charles de Gaulle Airport',
        departureTransfer: ' Charles de Gaulle Airport'
    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 5,
        city: ' New York',
        departurePoint: ' Airport',
        departurePointName: ' John F. Kennedy',
        terminal: ' terminal 1',
        number: ' SU 101',
        place: '. Your place is E27'
    },
    destination: {
        id: 1,
        city: ' Moscow'
    },
    transport: {
        id: 4,
        type: ' plane',
        brand: ' Boeing 777'
    },
    additionally: {
        baggage: ' Baggage will be automatically transferred from your last leg.'

    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 1,
        city: ' Moscow city'
    },

    destination: {
        id: 6,
        city: ' Voronezh'
    },
    transport: {
        id: 1,
        type: ' bycicle',
        brand: ' KAMA'

    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 6,
        city: ' Voronezh',
        departurePoint: ' Airport',
        departurePointName: ' Chertovitskoye',
        terminal: ' terminal 3',
        number: ' S7 232',
        place: '. Your place is 74'
    },
    destination: {
        id: 7,
        city: ' Nizhny Novgorod'
    },
    transport: {
        id: 4,
        type: ' plane',
        brand: ' Airbus A319'

    },
    transfer: {
        id: 3,
        type: ' train',
        placeTransfer: ' 706H',
        brandTransfer: ' Swift',
        cityTransfer: ' Moscow',
        destinationTransfer: ' Domodedovo airport',
        departureTransfer: ' Kursk railway station'
    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 7,
        city: ' Nizhny Novgorod'
    },
    destination: {
        id: 8,
        city: ' Vladivostok'
    },
    transport: {
        id: NaN,


    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 8,
        city: ' Vladivostok',
        departurePoint: ' Airport',
        departurePointName: ' Knevichy',
        terminal: ' terminal 1',
        number: ' SU 3638',
        place: '. Your place is 68'
    },

    destination: {
        id: 9,
        city: ' Tokio'
    },
    transport: {
        id: 4,
        type: ' plane',
        brand: ' DeHavilland 8-400'

    },
    additionally: {
        baggage: ' Baggage drop at ticket counter 344.'

    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 9,
        city: ' Tokio',
        departurePoint: 'Airport',
        departurePointName: 'Haneda',
        terminal: '1',
        number: ' QF 26',
        place: '. Your place is 5'
    },
    destination: {
        id: 10,
        city: ' Sidney'
    },
    transport: {
        id: 4,
        type: ' plane',
        brand: ' Boeing 747-400'

    }
}, {                  //-----------------------------------------------------------------------------

    departure: {
        id: 10,
        city: ' Sidney',
        departurePoint: ' Sea port',
        departurePointName: ' Sydney',
        terminal: ' terminal INTL',
        number: ' HZ 6293',
        place: '. Your place is 15'
    },
    destination: {
        id: 11,
        city: ' Kopenhagen'
    },
    transport: {
        id: 2,
        type: ' cruise ship',
        brand: ' Caribbean Princess 5*lux'

    }
}
];


/**
 * Mixing objects for an example
 *  cards: array of objects
 */
shuffle(cards);

/**
 * Function builds a route according to a given list of cards
 *
 * @param card : list with all cards
 * @returns {Array} : resulting array
 */
function createRoute(card) {
    let allRout = [];

    /**
     * Search next for the suitable cards.
     * Create new array 'next' in card and adding the following suitable cards to it
     */
    for (let key in cards) {
        let cardThis = cards[key];
        cardThis.next = [];
        for (let keyTwo  in cards) {
            cardCompression = cards[keyTwo];
            if (cardThis.destination.id === cardCompression.departure.id) {
                cardThis.next.push(cardCompression);
            }
        }
    }

    /**
     * create route from the beginning current card
     *
     * @param nextCard: valid next card from the list 'next'
     * @param cards: all cards array
     * @param usedCard: current card
     * @returns {[*]} : array sorted. Drawing a path from the current card
     */
    function buildingRoute(nextCard, cards, usedCard) {
        const route = [usedCard];
        route.push(nextCard);
        let cardPoint = nextCard,
            cardFound = true;

        while (cardFound) {
            cardFound = false;
            for (let key in cards) {
                let card = cards[key];
                if (cardPoint.destination.id === card.departure.id) {
                    if (route.indexOf(card) === -1) {
                        route.push(card);
                        cardPoint = card;
                        cardFound = true;
                        break;
                    }
                }
            }
        }
        return route;
    }

    /**
     *  Create new array 'route' in card and adding possible routes from the current card
     */
    for (let key in cards) {
        let cardThis = cards[key];
        cardThis.route = [];
        let children = cards[key];
        for (let key in children.next) {
            let childrenRout = children.next[key];
            let routed = buildingRoute(childrenRout, cards, children);
            cardThis.route.push(routed);
        }

    }

    /**
     * looking for the longest route
     */
    let foundRoute,
        routeLength = 0;
    for (let key in cards) {
        let oneCard = cards[key];
        for (let key in oneCard.route) {
            let route = oneCard.route[key];
            if (route.length > routeLength) {
                routeLength = route.length;
                foundRoute = route;
            }
        }
    }

    /**
     *
     * @param card: used rout card
     */
    function routeList(card) {

        // Create variables for each property of the object
        let action = '',
            departureCity = card.departure.city,
            departurePoint = card.departure.departurePoint || '',
            departurePointName = card.departure.departurePointName || '',
            departureTerminal = card.departure.terminal || '',
            departureNumber = card.departure.number || '',
            departurePlace = card.departure.place || '',

            destinationCity = card.destination.city,

            transportId = card.transport.id || '',
            transportType = card.transport.type || '',
            transportBrand = card.transport.brand || '',

            baggage;


        //Create a template for each card
        let summaryLine = '*  Take a' + transportType + transportBrand + departureNumber + action + ' from' + departureCity +
            ' to' + destinationCity + '.' + departurePoint + departurePointName + departureTerminal + departurePlace + '.',

          shortLine = '*  From' + departureCity + action + transportType + destinationCity + departureNumber + departurePlace + '.';

       //Choose a long or short line for a variety
        Math.floor(Math.random()*2) > 0 ? summaryLine = shortLine : summaryLine;

        //Additional output data for each type of transport
        switch (transportId) {
            //bicycle'
            case 1:
                action = ' ride to the';
                summaryLine += ' Take along with less luggage.';
                break;
            //'cruise ship'
            case 2:
                action = ' sail to the';
                summaryLine += ' Do not forget to bring tablets for seasickness.';
                break;
            //'train'
            case 3:
                action = ' go to the';
                break;
            //'plane'
            case 4:
                action = ' flight to the';

                break;
            //'car'
            case 5:
                action = ' go to the';
                break;
            //'bus'
            case 6:
                action = ' go to the';
                break;

            default:
                summaryLine = '*  Unfortunately there is no transport in the card, so you will have to walk or get on any ' +
                    'other transport from' + departureCity + ' to' + destinationCity;
                break;
        }

        //Check for the presence of the object. And write to the variable for a shortened string
        if (card.hasOwnProperty('additionally')) {
            baggage = card.additionally.baggage || '';
            summaryLine += baggage;
        }

        //Check for the presence of the object. And write to the variable
        if (card.hasOwnProperty('transfer')) {

            let transferTransport = card.transfer.type || '',
                transferNumber = card.transfer.numberTransfer || '',
                transferBrand = card.transfer.brandTransfer || '',
                transferPlace = card.transfer.placeTransfer || '',
                transferCity = card.transfer.cityTransfer || '',
                transferDeparture = card.transfer.departureTransfer || '',
                transferDestination = card.transfer.destinationTransfer || '';


            //If the place of departure coincides with the place of arrival, then we change the name of the departure location
            transferDeparture === transferDestination ? transferDeparture = ' the same place' : transferDeparture;

            summaryLine = '*  Your route is from' + departureCity + ' to' + destinationCity + '. There is no direct flight ' +
                'to this route, so you have to go through' + transferCity + '. Departure from' + departurePoint +
                departurePointName + ' by' + transportType + transportBrand + ',' + action + departureNumber +
                ' to the' + transferDestination + ',' + departureTerminal + departurePlace + '. Then departure from'
                + transferDeparture + ' to' + transferDestination + ' on' + transferTransport + transferBrand + transferNumber +
                transferPlace + '. ' + 'And' + action + destinationCity;
        }
        allRout.push(summaryLine);

        /**
         *   Displaying lines per page
         * @type {Element}
         */
        let div = document.createElement('div');
        div.className = "finish";
        div.innerHTML = summaryLine;
        document.body.appendChild(div);
    }

    /**
     * Create an output list for the full route
     */
    foundRoute.forEach(routeList);

    return allRout;
}

/**
 * Mixing objects for an example
 * @param a
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// Start the function and print the resulting array to the console
console.log(createRoute(cards));
