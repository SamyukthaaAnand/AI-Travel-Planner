export const SelectTravelersList = [

    {
        id:1,
        title:'Just Me',
        desc:'A sole traveler in exploration',
        icon:'🧍',
        people:'a single person'
    },
    {
        id:2,
        title:'A couple',
        desc:'Two travelers in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'⛺',
        people:'5 to 10 people'  
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵', 
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep costs on average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'No worrry about cost',
        icon:'💸',
    },
]

export const AI_PROMPT='Generate travel plan for location : {location} for {noOfDays} days for {traveller} with a {budget} budget. give me a more than 3 hotel options list with hotel name, hotel address price hotel image url, get coordinates, rating, descriptions suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, rating travel time to each of the location for 5 days with each day plan and best time to visit. give in JSON format.'