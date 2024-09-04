/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI } from "@google/generative-ai";


  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
   
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate travel plan for location : Mumbai for 5 days for a family with a cheap budget. give me a hotel options list with hotel name, hotel address price hotel image url, get coordinates, rating, descriptions suggest itinerary with place name, place details, place image url, geo coordinates, ticket pricing, rating travel time to each of the location for 5 days with each day plan and best time to visit. give in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotel_options\": [\n    {\n      \"name\": \"Hotel Sai Palace\",\n      \"address\": \"30, Bhuleshwar, Mumbai, Maharashtra 400002\",\n      \"price\": \"₹1,000 - ₹1,500 per night\",\n      \"image_url\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898800/898828/898828_107_b.jpg\",\n      \"coordinates\": {\n        \"latitude\": 18.9641,\n        \"longitude\": 72.8324\n      },\n      \"rating\": 3.5,\n      \"description\": \"A budget-friendly hotel in the heart of Mumbai, offering basic amenities and clean rooms.\"\n    },\n    {\n      \"name\": \"Hotel Royal Inn\",\n      \"address\": \"29, SV Rd, Opp. St. Xavier's College, Fort, Mumbai, Maharashtra 400001\",\n      \"price\": \"₹1,200 - ₹2,000 per night\",\n      \"image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/0f/60/56/15/royal-inn.jpg\",\n      \"coordinates\": {\n        \"latitude\": 18.9526,\n        \"longitude\": 72.8290\n      },\n      \"rating\": 3.0,\n      \"description\": \"A basic hotel in a convenient location near Fort area, offering simple rooms and good value for money.\"\n    },\n    {\n      \"name\": \"Hotel Metro\",\n      \"address\": \"179, Dr. Annie Besant Rd, Worli, Mumbai, Maharashtra 400018\",\n      \"price\": \"₹1,500 - ₹2,500 per night\",\n      \"image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/0d/8b/e0/8b/hotel-metro-mumbai.jpg\",\n      \"coordinates\": {\n        \"latitude\": 18.9966,\n        \"longitude\": 72.8190\n      },\n      \"rating\": 3.5,\n      \"description\": \"A clean and comfortable hotel in Worli, providing a good location for exploring the city.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Gateway to India & Marine Drive\",\n      \"description\": \"Start your day with a visit to the iconic Gateway of India, a historic arch monument marking the entrance to the harbor. Enjoy the stunning views of the Arabian Sea. Later, stroll along the beautiful Marine Drive, also known as the Queen's Necklace, for mesmerizing sunset views.\",\n      \"places\": [\n        {\n          \"name\": \"Gateway of India\",\n          \"details\": \"A historic arch monument built in 1924, marking the entrance to the harbor. It offers stunning views of the Arabian Sea and is a popular spot for photography and evening strolls.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Gateway_of_India_%282014%29.jpg/1280px-Gateway_of_India_%282014%29.jpg\",\n          \"coordinates\": {\n            \"latitude\": 18.9220,\n            \"longitude\": 72.8347\n          },\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.5,\n          \"travel_time\": \"10 minutes from Marine Drive\"\n        },\n        {\n          \"name\": \"Marine Drive\",\n          \"details\": \"A scenic waterfront promenade stretching along the Arabian Sea. It is famous for its crescent-shaped coastline and mesmerizing views, especially during sunset.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Marine_Drive_Mumbai.jpg/1280px-Marine_Drive_Mumbai.jpg\",\n          \"coordinates\": {\n            \"latitude\": 18.9430,\n            \"longitude\": 72.8295\n          },\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.0,\n          \"travel_time\": \"15 minutes from Gateway of India\"\n        }\n      ],\n      \"best_time_to_visit\": \"Evening for sunset views at Marine Drive\"\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Elephanta Caves & Dhobi Ghat\",\n      \"description\": \"Take a ferry to Elephanta Island to explore the ancient cave temples dedicated to Lord Shiva. The intricate carvings and sculptures are a sight to behold. In the afternoon, visit the Dhobi Ghat, an open-air laundry where you can witness the unique and fascinating process of washing clothes on a massive scale.\",\n      \"places\": [\n        {\n          \"name\": \"Elephanta Caves\",\n          \"details\": \"Ancient cave temples dedicated to Lord Shiva, known for their intricate carvings and sculptures. It is a UNESCO World Heritage Site.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elephanta_Caves_entrance_2011.jpg/1280px-Elephanta_Caves_entrance_2011.jpg\",\n          \"coordinates\": {\n            \"latitude\": 18.9865,\n            \"longitude\": 73.0455\n          },\n          \"ticket_pricing\": \"₹30 per person\",\n          \"rating\": 4.5,\n          \"travel_time\": \"1 hour ferry ride from Gateway of India\"\n        },\n        {\n          \"name\": \"Dhobi Ghat\",\n          \"details\": \"An open-air laundry where clothes are washed on a massive scale. It's a unique and fascinating sight to witness the traditional washing process.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Dhobi_Ghat,_Mumbai.jpg/1280px-Dhobi_Ghat,_Mumbai.jpg\",\n          \"coordinates\": {\n            \"latitude\": 18.9532,\n            \"longitude\": 72.8358\n          },\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.0,\n          \"travel_time\": \"30 minutes from Elephanta Island ferry landing\"\n        }\n      ],\n      \"best_time_to_visit\": \"Morning for Elephanta Caves, afternoon for Dhobi Ghat\"\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Chhatrapati Shivaji Maharaj Terminus & Mani Bhavan\",\n      \"description\": \"Visit the Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage Site and a stunning example of Victorian Gothic architecture. After lunch, explore Mani Bhavan, the residence of Mahatma Gandhi during his time in Mumbai. Learn about his life and teachings.\",\n      \"places\": [\n        {\n          \"name\": \"Chhatrapati Shivaji Maharaj Terminus\",\n          \"details\": \"A UNESCO World Heritage Site and a stunning example of Victorian Gothic architecture. It is a major railway station and a popular tourist destination.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chhatrapati_Shivaji_Terminus_%28formerly_Victoria_Terminus%29_%282014%29.jpg/1280px-Chhatrapati_Shivaji_Terminus_%28formerly_Victoria_Terminus%29_%282014%29.jpg\",\n          \"coordinates\": {\n            \"latitude\": 18.9471,\n            \"longitude\": 72.8322\n          },\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.5,\n          \"travel_time\": \"15 minutes from Dhobi Ghat\"\n        },\n        {\n          \"name\": \"Mani Bhavan\",\n          \"details\": \"The residence of Mahatma Gandhi during his time in Mumbai. Learn about his life and teachings through exhibits and historical artifacts.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mani_Bhavan.jpg/1280px-Mani_Bhavan.jpg\",\n          \"coordinates\": {\n            \"latitude\": 18.9475,\n            \"longitude\": 72.8269\n          },\n          \"ticket_pricing\": \"₹10 per person\",\n          \"rating\": 4.0,\n          \"travel_time\": \"10 minutes from Chhatrapati Shivaji Maharaj Terminus\"\n        }\n      ],\n      \"best_time_to_visit\": \"Morning for Chhatrapati Shivaji Maharaj Terminus, afternoon for Mani Bhavan\"\n    },\n    {\n      \"day\": 4,\n      \"title\": \"Kanheri Caves & Sanjay Gandhi National Park\",\n      \"description\": \"Escape the city buzz and head to the Kanheri Caves, ancient Buddhist rock-cut caves dating back to the 1st century BC. Afterwards, explore the sprawling Sanjay Gandhi National Park, home to diverse flora and fauna, and enjoy a peaceful day amidst nature.\",\n      \"places\": [\n        {\n          \"name\": \"Kanheri Caves\",\n          \"details\": \"Ancient Buddhist rock-cut caves dating back to the 1st century BC. Explore the intricate carvings and sculptures, and enjoy the serene surroundings.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kanheri_Caves_Mumbai_India.jpg/1280px-Kanheri_Caves_Mumbai_India.jpg\",\n          \"coordinates\": {\n            \"latitude\": 19.1908,\n            \"longitude\": 72.9138\n          },\n          \"ticket_pricing\": \"₹10 per person\",\n          \"rating\": 4.0,\n          \"travel_time\": \"1 hour from Mani Bhavan\"\n        },\n        {\n          \"name\": \"Sanjay Gandhi National Park\",\n          \"details\": \"A sprawling national park home to diverse flora and fauna. Enjoy a peaceful day amidst nature, go for hikes, or spot wildlife.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kanheri_Caves_Mumbai_India.jpg/1280px-Kanheri_Caves_Mumbai_India.jpg\",\n          \"coordinates\": {\n            \"latitude\": 19.1722,\n            \"longitude\": 72.9364\n          },\n          \"ticket_pricing\": \"₹15 per person\",\n          \"rating\": 4.5,\n          \"travel_time\": \"10 minutes from Kanheri Caves\"\n        }\n      ],\n      \"best_time_to_visit\": \"Morning for Kanheri Caves, afternoon for Sanjay Gandhi National Park\"\n    },\n    {\n      \"day\": 5,\n      \"title\": \"Juhu Beach & Street Food\",\n      \"description\": \"Spend the morning relaxing on Juhu Beach, a popular destination for sunbathing, swimming, and enjoying the sea breeze. In the afternoon, indulge in Mumbai's famous street food, from pani puri to vada pav. Explore the bustling markets and experience the vibrant local culture.\",\n      \"places\": [\n        {\n          \"name\": \"Juhu Beach\",\n          \"details\": \"A popular beach for sunbathing, swimming, and enjoying the sea breeze. It is also known for its street food stalls and lively atmosphere.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Juhu_Beach.jpg/1280px-Juhu_Beach.jpg\",\n          \"coordinates\": {\n            \"latitude\": 19.0524,\n            \"longitude\": 72.8383\n          },\n          \"ticket_pricing\": \"Free entry\",\n          \"rating\": 4.0,\n          \"travel_time\": \"1 hour from Sanjay Gandhi National Park\"\n        },\n        {\n          \"name\": \"Juhu Street Food\",\n          \"details\": \"Indulge in Mumbai's famous street food, from pani puri to vada pav. Explore the bustling markets and experience the vibrant local culture.\",\n          \"image_url\": \"https://www.thedailymeal.com/sites/default/files/styles/hero_desktop/public/2020-03/india-street-food-mumbai.jpg\",\n          \"coordinates\": {\n            \"latitude\": 19.0532,\n            \"longitude\": 72.8385\n          },\n          \"ticket_pricing\": \"Varies depending on the food\",\n          \"rating\": 4.5,\n          \"travel_time\": \"On Juhu Beach\"\n        }\n      ],\n      \"best_time_to_visit\": \"Morning for Juhu Beach, afternoon for street food\"\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is a suggestion and can be customized based on your family's interests and preferences.\n* The hotel options listed are budget-friendly and may not offer all the amenities found in higher-priced hotels.\n* Ticket prices may vary depending on the season and time of purchase.\n* Travel times are approximate and may vary depending on traffic conditions.\n* It is always recommended to book your tickets and accommodation in advance, especially during peak season.\n* Remember to carry water and snacks, and dress comfortably for the weather.\n* Enjoy your trip to Mumbai!\n"},
          ],
        },
      ],
    });
  