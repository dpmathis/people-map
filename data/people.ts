export type PersonStatus = 'Incumbent' | 'Challenger';

export interface Person {
  id: string;
  name: string;
  photo: string;
  lat: number;
  lng: number;
  tags: string[];
  title: string;
  bio: string;
  email?: string;
  location: string;
  status: PersonStatus;
}

export const people: Person[] = [
  {
    "id": "1",
    "name": "Kris Mayes",
    "photo": "/photos/kris-mayes.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Attorney General",
    "bio": "Kris works tirelessly as Attorney General to protect democratic norms and expand civic participation.",
    "location": "Phoenix, AZ",
    "status": "Incumbent"
  },
  {
    "id": "2",
    "name": "Rob Bonta",
    "photo": "/photos/rob-bonta.jpg",
    "lat": 38.5816,
    "lng": -121.4944,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Attorney General",
    "bio": "Serving California as Attorney General, Rob champions democratic values and good governance.",
    "location": "Sacramento, CA",
    "status": "Incumbent"
  },
  {
    "id": "3",
    "name": "Letitia James",
    "photo": "/photos/letitia-james.jpg",
    "lat": 42.6526,
    "lng": -73.7562,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Attorney General",
    "bio": "Serving New York as Attorney General, Letitia champions democratic values and good governance.",
    "location": "Albany, NY",
    "status": "Incumbent"
  },
  {
    "id": "4",
    "name": "Josh Kaul",
    "photo": "/photos/josh-kaul.jpg",
    "lat": 43.0731,
    "lng": -89.4012,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Attorney General",
    "bio": "Josh serves as Attorney General for Wisconsin, working to strengthen democratic institutions and civic engagement.",
    "location": "Madison, WI",
    "status": "Incumbent"
  },
  {
    "id": "5",
    "name": "Katie Hobbs",
    "photo": "/photos/katie-hobbs.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Katie works tirelessly as Governor to protect democratic norms and expand civic participation.",
    "location": "Phoenix, AZ",
    "status": "Incumbent"
  },
  {
    "id": "6",
    "name": "Michael Bennett",
    "photo": "/photos/michael-bennett.jpg",
    "lat": 39.7392,
    "lng": -104.9903,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Serving Colorado as Governor, Michael champions democratic values and good governance.",
    "location": "Denver, CO",
    "status": "Challenger"
  },
  {
    "id": "7",
    "name": "Ned Lamont",
    "photo": "/photos/ned-lamont.jpg",
    "lat": 41.7658,
    "lng": -72.6734,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Ned serves as Governor for Connecticut, working to strengthen democratic institutions and civic engagement.",
    "location": "Hartford, CT",
    "status": "Incumbent"
  },
  {
    "id": "8",
    "name": "JP Pritzker",
    "photo": "/photos/jp-pritzker.jpg",
    "lat": 39.7817,
    "lng": -89.6501,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "JP works tirelessly as Governor to protect democratic norms and expand civic participation.",
    "location": "Springfield, IL",
    "status": "Incumbent"
  },
  {
    "id": "9",
    "name": "Andy Beshear",
    "photo": "/photos/andy-beshear.jpg",
    "lat": 38.2009,
    "lng": -84.8733,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Serving Kentucky as Governor, Andy champions democratic values and good governance.",
    "location": "Frankfort, KY",
    "status": "Incumbent"
  },
  {
    "id": "10",
    "name": "Wes Moore",
    "photo": "/photos/wes-moore.jpg",
    "lat": 38.9784,
    "lng": -76.4922,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Serving Maryland as Governor, Wes champions democratic values and good governance.",
    "location": "Annapolis, MD",
    "status": "Incumbent"
  },
  {
    "id": "11",
    "name": "Maura Healey",
    "photo": "/photos/maura-healey.jpg",
    "lat": 42.3601,
    "lng": -71.0589,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Maura serves as Governor for Massachusetts, working to strengthen democratic institutions and civic engagement.",
    "location": "Boston, MA",
    "status": "Incumbent"
  },
  {
    "id": "12",
    "name": "Gretchen Whitmer",
    "photo": "/photos/gretchen-whitmer.jpg",
    "lat": 42.7325,
    "lng": -84.5555,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Serving Michigan as Governor, Gretchen champions democratic values and good governance.",
    "location": "Lansing, MI",
    "status": "Incumbent"
  },
  {
    "id": "13",
    "name": "Josh Stein",
    "photo": "/photos/josh-stein.jpg",
    "lat": 35.7796,
    "lng": -78.6382,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Josh works tirelessly as Governor to protect democratic norms and expand civic participation.",
    "location": "Raleigh, NC",
    "status": "Incumbent"
  },
  {
    "id": "14",
    "name": "Amy Acton",
    "photo": "/photos/amy-acton.jpg",
    "lat": 39.9612,
    "lng": -82.9988,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "As Governor, Amy is committed to defending voting rights and ensuring fair elections in Ohio.",
    "location": "Columbus, OH",
    "status": "Challenger"
  },
  {
    "id": "15",
    "name": "Josh Shapiro",
    "photo": "/photos/josh-shapiro.jpg",
    "lat": 40.2732,
    "lng": -76.8867,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "democratic"
    ],
    "title": "Governor",
    "bio": "Josh brings dedicated leadership to the role of Governor, focusing on transparency and accountability.",
    "location": "Harrisburg, PA",
    "status": "Incumbent"
  },
  {
    "id": "16",
    "name": "Spencer Cox",
    "photo": "/photos/spencer-cox.jpg",
    "lat": 40.7608,
    "lng": -111.891,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "republican"
    ],
    "title": "Governor",
    "bio": "Spencer serves as Governor for Utah, working to strengthen democratic institutions and civic engagement.",
    "location": "Salt Lake City, UT",
    "status": "Incumbent"
  },
  {
    "id": "17",
    "name": "Phil Scott",
    "photo": "/photos/phil-scott.jpg",
    "lat": 44.2601,
    "lng": -72.5754,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "policy",
      "state-leadership",
      "republican"
    ],
    "title": "Governor",
    "bio": "Phil serves as Governor for Vermont, working to strengthen democratic institutions and civic engagement.",
    "location": "Montpelier, VT",
    "status": "Incumbent"
  },
  {
    "id": "18",
    "name": "French Hill",
    "photo": "/photos/H001072_French_Hill.jpg",
    "lat": 34.7465,
    "lng": -92.2896,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "republican"
    ],
    "title": "U.S. Representative, AR-2",
    "bio": "As U.S. Representative, AR-2, French is committed to defending voting rights and ensuring fair elections in AR-2.",
    "location": "Little Rock, AR",
    "status": "Incumbent"
  },
  {
    "id": "19",
    "name": "Greg Stanton",
    "photo": "/photos/S001211_Greg_Stanton.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, AZ-4",
    "bio": "Greg works tirelessly as U.S. Representative, AZ-4 to protect democratic norms and expand civic participation.",
    "location": "Phoenix, AZ",
    "status": "Incumbent"
  },
  {
    "id": "20",
    "name": "JoAnna Mendoza",
    "photo": "/photos/joanna-mendoza.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, AZ-6",
    "bio": "JoAnna serves as U.S. Representative, AZ-6 for AZ-6, working to strengthen democratic institutions and civic engagement.",
    "location": "Phoenix, AZ",
    "status": "Challenger"
  },
  {
    "id": "21",
    "name": "Adam Gray",
    "photo": "/photos/G000599_Adam_Gray.jpg",
    "lat": 37.6391,
    "lng": -120.9969,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CA-13",
    "bio": "Adam works tirelessly as U.S. Representative, CA-13 to protect democratic norms and expand civic participation.",
    "location": "Modesto, CA",
    "status": "Incumbent"
  },
  {
    "id": "22",
    "name": "Sam Liccardo",
    "photo": "/photos/sam-liccardo.jpg",
    "lat": 37.3382,
    "lng": -121.8863,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CA-16",
    "bio": "Sam brings dedicated leadership to the role of U.S. Representative, CA-16, focusing on transparency and accountability.",
    "location": "San Jose, CA",
    "status": "Incumbent"
  },
  {
    "id": "23",
    "name": "George T. Whitesides",
    "photo": "/photos/george-t-whitesides.jpg",
    "lat": 34.0522,
    "lng": -118.2437,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CA-27",
    "bio": "George works tirelessly as U.S. Representative, CA-27 to protect democratic norms and expand civic participation.",
    "location": "Los Angeles, CA",
    "status": "Incumbent"
  },
  {
    "id": "24",
    "name": "Eric Jones",
    "photo": "/photos/eric-jones.jpg",
    "lat": 38.5816,
    "lng": -121.4944,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CA-4",
    "bio": "Eric serves as U.S. Representative, CA-4 for CA-4, working to strengthen democratic institutions and civic engagement.",
    "location": "Sacramento, CA",
    "status": "Challenger"
  },
  {
    "id": "25",
    "name": "Josh Harder",
    "photo": "/photos/H001090_Josh_Harder.jpg",
    "lat": 37.9577,
    "lng": -121.2908,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CA-9",
    "bio": "Josh serves as U.S. Representative, CA-9 for CA-9, working to strengthen democratic institutions and civic engagement.",
    "location": "Stockton, CA",
    "status": "Incumbent"
  },
  {
    "id": "26",
    "name": "Joe Neguse",
    "photo": "/photos/N000191_Joe_Neguse.jpg",
    "lat": 40.015,
    "lng": -105.2705,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CO-2",
    "bio": "Joe serves as U.S. Representative, CO-2 for CO-2, working to strengthen democratic institutions and civic engagement.",
    "location": "Boulder, CO",
    "status": "Incumbent"
  },
  {
    "id": "27",
    "name": "Jason Crow",
    "photo": "/photos/C001121_Jason_Crow.jpg",
    "lat": 39.7294,
    "lng": -104.8319,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CO-6",
    "bio": "Jason brings dedicated leadership to the role of U.S. Representative, CO-6, focusing on transparency and accountability.",
    "location": "Aurora, CO",
    "status": "Incumbent"
  },
  {
    "id": "28",
    "name": "Brittany Pettersen",
    "photo": "/photos/P000628_Brittany_Pettersen.jpg",
    "lat": 39.7392,
    "lng": -104.9903,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CO-7",
    "bio": "Brittany serves as U.S. Representative, CO-7 for CO-7, working to strengthen democratic institutions and civic engagement.",
    "location": "Denver, CO",
    "status": "Incumbent"
  },
  {
    "id": "29",
    "name": "Jim Himes",
    "photo": "/photos/H001047_Jim_Himes.jpg",
    "lat": 41.1865,
    "lng": -73.1952,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, CT-4",
    "bio": "Serving CT-4 as U.S. Representative, CT-4, Jim champions democratic values and good governance.",
    "location": "Bridgeport, CT",
    "status": "Incumbent"
  },
  {
    "id": "30",
    "name": "Lucy McBath",
    "photo": "/photos/M001208_Lucy_McBath.jpg",
    "lat": 33.749,
    "lng": -84.388,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, GA-6",
    "bio": "Lucy brings dedicated leadership to the role of U.S. Representative, GA-6, focusing on transparency and accountability.",
    "location": "Atlanta, GA",
    "status": "Incumbent"
  },
  {
    "id": "31",
    "name": "Nikki Budzinski",
    "photo": "/photos/B001303_Nikki_Budzinski.jpg",
    "lat": 39.7817,
    "lng": -89.6501,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, IL-13",
    "bio": "As U.S. Representative, IL-13, Nikki is committed to defending voting rights and ensuring fair elections in IL-13.",
    "location": "Springfield, IL",
    "status": "Incumbent"
  },
  {
    "id": "32",
    "name": "Lauren Underwood",
    "photo": "/photos/U000040_Lauren_Underwood.jpg",
    "lat": 41.7508,
    "lng": -88.1535,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, IL-14",
    "bio": "Lauren works tirelessly as U.S. Representative, IL-14 to protect democratic norms and expand civic participation.",
    "location": "Naperville, IL",
    "status": "Incumbent"
  },
  {
    "id": "33",
    "name": "Sean Casten",
    "photo": "/photos/C001117_Sean_Casten.jpg",
    "lat": 41.8781,
    "lng": -87.6298,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, IL-6",
    "bio": "Sean works tirelessly as U.S. Representative, IL-6 to protect democratic norms and expand civic participation.",
    "location": "Chicago, IL",
    "status": "Incumbent"
  },
  {
    "id": "34",
    "name": "Lori Trahan",
    "photo": "/photos/lori-trahan.jpg",
    "lat": 42.6334,
    "lng": -71.3162,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, MA-3",
    "bio": "Lori serves as U.S. Representative, MA-3 for MA-3, working to strengthen democratic institutions and civic engagement.",
    "location": "Lowell, MA",
    "status": "Incumbent"
  },
  {
    "id": "35",
    "name": "Jake Auchincloss",
    "photo": "/photos/A000148_Jake_Auchincloss.jpg",
    "lat": 42.337,
    "lng": -71.2092,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, MA-4",
    "bio": "As U.S. Representative, MA-4, Jake is committed to defending voting rights and ensuring fair elections in MA-4.",
    "location": "Newton, MA",
    "status": "Incumbent"
  },
  {
    "id": "36",
    "name": "Bridget Brink",
    "photo": "/photos/bridget-brink.jpg",
    "lat": 42.7325,
    "lng": -84.5555,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, MI-7",
    "bio": "Serving MI-7 as U.S. Representative, MI-7, Bridget champions democratic values and good governance.",
    "location": "Lansing, MI",
    "status": "Challenger"
  },
  {
    "id": "37",
    "name": "Kristen McDonald Rivet",
    "photo": "/photos/kristen-mcdonald-rivet.jpg",
    "lat": 43.0125,
    "lng": -83.6875,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, MI-8",
    "bio": "Kristen brings dedicated leadership to the role of U.S. Representative, MI-8, focusing on transparency and accountability.",
    "location": "Flint, MI",
    "status": "Incumbent"
  },
  {
    "id": "38",
    "name": "Don Davis",
    "photo": "/photos/D000032_Don_Davis.jpg",
    "lat": 35.9382,
    "lng": -77.7905,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NC-1",
    "bio": "Don brings dedicated leadership to the role of U.S. Representative, NC-1, focusing on transparency and accountability.",
    "location": "Rocky Mount, NC",
    "status": "Incumbent"
  },
  {
    "id": "39",
    "name": "Maggie Goodlander",
    "photo": "/photos/maggie-goodlander.jpg",
    "lat": 43.2081,
    "lng": -71.5376,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NH-2",
    "bio": "Maggie brings dedicated leadership to the role of U.S. Representative, NH-2, focusing on transparency and accountability.",
    "location": "Concord, NH",
    "status": "Incumbent"
  },
  {
    "id": "40",
    "name": "Rebecca Bennett",
    "photo": "/photos/rebecca-bennett.jpg",
    "lat": 40.7357,
    "lng": -74.1724,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NJ-7",
    "bio": "As U.S. Representative, NJ-7, Rebecca is committed to defending voting rights and ensuring fair elections in NJ-7.",
    "location": "Newark, NJ",
    "status": "Challenger"
  },
  {
    "id": "41",
    "name": "Dan Goldman",
    "photo": "/photos/G000596_Dan_Goldman.jpg",
    "lat": 40.7831,
    "lng": -73.9712,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-10",
    "bio": "Dan brings dedicated leadership to the role of U.S. Representative, NY-10, focusing on transparency and accountability.",
    "location": "Manhattan, NY",
    "status": "Incumbent"
  },
  {
    "id": "42",
    "name": "Ritchie Torres",
    "photo": "/photos/T000486_Ritchie_Torres.jpg",
    "lat": 40.8448,
    "lng": -73.8648,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-15",
    "bio": "Ritchie brings dedicated leadership to the role of U.S. Representative, NY-15, focusing on transparency and accountability.",
    "location": "Bronx, NY",
    "status": "Incumbent"
  },
  {
    "id": "43",
    "name": "Cait Conley",
    "photo": "/photos/cait-conley.jpg",
    "lat": 41.3948,
    "lng": -73.9574,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-17",
    "bio": "Cait serves as U.S. Representative, NY-17 for NY-17, working to strengthen democratic institutions and civic engagement.",
    "location": "Hudson Valley, NY",
    "status": "Challenger"
  },
  {
    "id": "44",
    "name": "Pat Ryan",
    "photo": "/photos/R000617_Pat_Ryan.jpg",
    "lat": 41.7004,
    "lng": -73.9209,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-18",
    "bio": "Pat works tirelessly as U.S. Representative, NY-18 to protect democratic norms and expand civic participation.",
    "location": "Poughkeepsie, NY",
    "status": "Incumbent"
  },
  {
    "id": "45",
    "name": "Josh Riley",
    "photo": "/photos/R000626_Josh_Riley.jpg",
    "lat": 42.444,
    "lng": -76.5019,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-19",
    "bio": "Serving NY-19 as U.S. Representative, NY-19, Josh champions democratic values and good governance.",
    "location": "Ithaca, NY",
    "status": "Incumbent"
  },
  {
    "id": "46",
    "name": "Tom Suozzi",
    "photo": "/photos/S001201_Tom_Suozzi.jpg",
    "lat": 40.7891,
    "lng": -73.135,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-3",
    "bio": "As U.S. Representative, NY-3, Tom is committed to defending voting rights and ensuring fair elections in NY-3.",
    "location": "Long Island, NY",
    "status": "Incumbent"
  },
  {
    "id": "47",
    "name": "Laura Gillen",
    "photo": "/photos/G000600_Laura_Gillen.jpg",
    "lat": 40.7891,
    "lng": -73.135,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-4",
    "bio": "Laura works tirelessly as U.S. Representative, NY-4 to protect democratic norms and expand civic participation.",
    "location": "Long Island, NY",
    "status": "Incumbent"
  },
  {
    "id": "48",
    "name": "Hakeem Jeffries",
    "photo": "/photos/J000294_Hakeem_Jeffries.jpg",
    "lat": 40.6782,
    "lng": -73.9442,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, NY-8",
    "bio": "As U.S. Representative, NY-8, Hakeem is committed to defending voting rights and ensuring fair elections in NY-8.",
    "location": "Brooklyn, NY",
    "status": "Incumbent"
  },
  {
    "id": "49",
    "name": "Emilia Sykes",
    "photo": "/photos/S001226_Emilia_Sykes.jpg",
    "lat": 41.0814,
    "lng": -81.519,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, OH-13",
    "bio": "As U.S. Representative, OH-13, Emilia is committed to defending voting rights and ensuring fair elections in OH-13.",
    "location": "Akron, OH",
    "status": "Incumbent"
  },
  {
    "id": "50",
    "name": "Janelle Bynum",
    "photo": "/photos/B001314_Janelle_Bynum.jpg",
    "lat": 44.9429,
    "lng": -123.0351,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, OR-5",
    "bio": "As U.S. Representative, OR-5, Janelle is committed to defending voting rights and ensuring fair elections in OR-5.",
    "location": "Salem, OR",
    "status": "Incumbent"
  },
  {
    "id": "51",
    "name": "Andrewa Salinas",
    "photo": "/photos/andrewa-salinas.jpg",
    "lat": 45.5152,
    "lng": -122.6784,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, OR-6",
    "bio": "Andrewa serves as U.S. Representative, OR-6 for OR-6, working to strengthen democratic institutions and civic engagement.",
    "location": "Portland, OR",
    "status": "Incumbent"
  },
  {
    "id": "52",
    "name": "Janelle Stelson",
    "photo": "/photos/janelle-stelson.jpg",
    "lat": 40.2732,
    "lng": -76.8867,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, PA-10",
    "bio": "As U.S. Representative, PA-10, Janelle is committed to defending voting rights and ensuring fair elections in PA-10.",
    "location": "Harrisburg, PA",
    "status": "Challenger"
  },
  {
    "id": "53",
    "name": "Brendan Boyle",
    "photo": "/photos/brendan-boyle.jpg",
    "lat": 39.9526,
    "lng": -75.1652,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, PA-2",
    "bio": "Brendan serves as U.S. Representative, PA-2 for PA-2, working to strengthen democratic institutions and civic engagement.",
    "location": "Philadelphia, PA",
    "status": "Incumbent"
  },
  {
    "id": "54",
    "name": "Chrissy Houlahan",
    "photo": "/photos/H001085_Chrissy_Houlahan.jpg",
    "lat": 40.3356,
    "lng": -75.9269,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, PA-6",
    "bio": "Chrissy works tirelessly as U.S. Representative, PA-6 to protect democratic norms and expand civic participation.",
    "location": "Reading, PA",
    "status": "Incumbent"
  },
  {
    "id": "55",
    "name": "Paige Cognetti",
    "photo": "/photos/paige-cognetti.jpg",
    "lat": 41.409,
    "lng": -75.6624,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, PA-8",
    "bio": "Paige brings dedicated leadership to the role of U.S. Representative, PA-8, focusing on transparency and accountability.",
    "location": "Scranton, PA",
    "status": "Challenger"
  },
  {
    "id": "56",
    "name": "Seth Magaziner",
    "photo": "/photos/M001223_Seth_Magaziner.jpg",
    "lat": 41.824,
    "lng": -71.4128,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, RI-2",
    "bio": "Serving RI-2 as U.S. Representative, RI-2, Seth champions democratic values and good governance.",
    "location": "Providence, RI",
    "status": "Incumbent"
  },
  {
    "id": "57",
    "name": "Colin Allred",
    "photo": "/photos/A000376_Colin_Allred.jpg",
    "lat": 32.7767,
    "lng": -96.797,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy"
    ],
    "title": "U.S. Representative, TX-33",
    "bio": "Colin serves as U.S. Representative, TX-33 for TX-33, working to strengthen democratic institutions and civic engagement.",
    "location": "Dallas, TX",
    "status": "Challenger"
  },
  {
    "id": "58",
    "name": "Vicente Gonzalez",
    "photo": "/photos/G000581_Vicente_Gonzalez.jpg",
    "lat": 26.2034,
    "lng": -98.23,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy"
    ],
    "title": "U.S. Representative, TX-34",
    "bio": "As U.S. Representative, TX-34, Vicente is committed to defending voting rights and ensuring fair elections in TX-34.",
    "location": "McAllen, TX",
    "status": "Incumbent"
  },
  {
    "id": "59",
    "name": "Eugene Vindman",
    "photo": "/photos/V000139_Eugene_Vindman.jpg",
    "lat": 37.5407,
    "lng": -77.436,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, VA-07",
    "bio": "Eugene serves as U.S. Representative, VA-07 for VA-07, working to strengthen democratic institutions and civic engagement.",
    "location": "Richmond, VA",
    "status": "Incumbent"
  },
  {
    "id": "60",
    "name": "Marie Gluesenkamp Perez",
    "photo": "/photos/G000592_Marie_Gluesenkamp_Perez.jpg",
    "lat": 45.6387,
    "lng": -122.6615,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, WA-03",
    "bio": "Marie serves as U.S. Representative, WA-03 for WA-03, working to strengthen democratic institutions and civic engagement.",
    "location": "Vancouver, WA",
    "status": "Incumbent"
  },
  {
    "id": "61",
    "name": "Rebecca Cooke",
    "photo": "/photos/rebecca-cooke.jpg",
    "lat": 43.8014,
    "lng": -91.2396,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Representative, WI-03",
    "bio": "As U.S. Representative, WI-03, Rebecca is committed to defending voting rights and ensuring fair elections in WI-03.",
    "location": "La Crosse, WI",
    "status": "Challenger"
  },
  {
    "id": "62",
    "name": "Greg Landsman",
    "photo": "/photos/L000603_Greg_Landsman.jpg",
    "lat": 38.9072,
    "lng": -77.0369,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy"
    ],
    "title": "U.S. Representative",
    "bio": "Serving  as U.S. Representative, Greg champions democratic values and good governance.",
    "location": "Washington, DC",
    "status": "Incumbent"
  },
  {
    "id": "63",
    "name": "Mary Peltola",
    "photo": "/photos/P000636_Mary_Peltola.jpg",
    "lat": 58.3019,
    "lng": -134.4197,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, Mary is committed to defending voting rights and ensuring fair elections in Alaska.",
    "location": "Juneau, AK",
    "status": "Challenger"
  },
  {
    "id": "64",
    "name": "Lisa Murkowski",
    "photo": "/photos/M001153_Lisa_Murkowski.jpg",
    "lat": 58.3019,
    "lng": -134.4197,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "republican"
    ],
    "title": "U.S. Senator",
    "bio": "Lisa works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Juneau, AK",
    "status": "Incumbent"
  },
  {
    "id": "65",
    "name": "Mark Kelly",
    "photo": "/photos/K000388_Mark_Kelly.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Serving Arizona as U.S. Senator, Mark champions democratic values and good governance.",
    "location": "Phoenix, AZ",
    "status": "Incumbent"
  },
  {
    "id": "66",
    "name": "Ruben Gallego",
    "photo": "/photos/G000574_Ruben_Gallego.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Ruben works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Phoenix, AZ",
    "status": "Incumbent"
  },
  {
    "id": "67",
    "name": "John Hickenlooper",
    "photo": "/photos/H001090_John_Hickenlooper.jpg",
    "lat": 39.7392,
    "lng": -104.9903,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, John is committed to defending voting rights and ensuring fair elections in Colorado.",
    "location": "Denver, CO",
    "status": "Incumbent"
  },
  {
    "id": "68",
    "name": "Chris Coons",
    "photo": "/photos/C001088_Chris_Coons.jpg",
    "lat": 39.1582,
    "lng": -75.5244,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, Chris is committed to defending voting rights and ensuring fair elections in Deleware.",
    "location": "Dover, DE",
    "status": "Incumbent"
  },
  {
    "id": "69",
    "name": "Hector Mujica",
    "photo": "/photos/hector-mujica.jpg",
    "lat": 30.4383,
    "lng": -84.2807,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, Hector is committed to defending voting rights and ensuring fair elections in Florida.",
    "location": "Tallahassee, FL",
    "status": "Challenger"
  },
  {
    "id": "70",
    "name": "Jon Ossoff",
    "photo": "/photos/O000174_Jon_Ossoff.jpg",
    "lat": 33.749,
    "lng": -84.388,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Jon serves as U.S. Senator for Georgia, working to strengthen democratic institutions and civic engagement.",
    "location": "Atlanta, GA",
    "status": "Incumbent"
  },
  {
    "id": "71",
    "name": "Raja Krishnamoorthi",
    "photo": "/photos/K000391_Raja_Krishnamoorthi.jpg",
    "lat": 39.7817,
    "lng": -89.6501,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Raja works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Springfield, IL",
    "status": "Challenger"
  },
  {
    "id": "72",
    "name": "Seth Moulton",
    "photo": "/photos/M001196_Seth_Moulton.jpg",
    "lat": 42.3601,
    "lng": -71.0589,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Seth works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Boston, MA",
    "status": "Challenger"
  },
  {
    "id": "73",
    "name": "Elissa Slotkin",
    "photo": "/photos/S001208_Elissa_Slotkin.jpg",
    "lat": 42.7325,
    "lng": -84.5555,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Elissa serves as U.S. Senator for Michigan, working to strengthen democratic institutions and civic engagement.",
    "location": "Lansing, MI",
    "status": "Incumbent"
  },
  {
    "id": "74",
    "name": "Angie Craig",
    "photo": "/photos/C001119_Angie_Craig.jpg",
    "lat": 44.9537,
    "lng": -93.09,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, Angie is committed to defending voting rights and ensuring fair elections in Minnesota.",
    "location": "St. Paul, MN",
    "status": "Challenger"
  },
  {
    "id": "75",
    "name": "Dan Osborn (I)",
    "photo": "/photos/dan-osborn-i.jpg",
    "lat": 40.8136,
    "lng": -96.7026,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, Dan is committed to defending voting rights and ensuring fair elections in Nebraska.",
    "location": "Lincoln, NE",
    "status": "Challenger"
  },
  {
    "id": "76",
    "name": "Roy Cooper",
    "photo": "/photos/roy-cooper.jpg",
    "lat": 35.7796,
    "lng": -78.6382,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Roy works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Raleigh, NC",
    "status": "Challenger"
  },
  {
    "id": "77",
    "name": "Sherrod Brown",
    "photo": "/photos/B001135_Sherrod_Brown.jpg",
    "lat": 38.9072,
    "lng": -77.0369,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "As U.S. Senator, Sherrod is committed to defending voting rights and ensuring fair elections in Ohio (SE).",
    "location": "Washington, DC",
    "status": "Challenger"
  },
  {
    "id": "78",
    "name": "Jack Reed",
    "photo": "/photos/R000122_Jack_Reed.jpg",
    "lat": 41.824,
    "lng": -71.4128,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Serving Rhode Island as U.S. Senator, Jack champions democratic values and good governance.",
    "location": "Providence, RI",
    "status": "Incumbent"
  },
  {
    "id": "79",
    "name": "Mark Warner",
    "photo": "/photos/W000805_Mark_Warner.jpg",
    "lat": 37.5407,
    "lng": -77.436,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Mark works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Richmond, VA",
    "status": "Incumbent"
  },
  {
    "id": "80",
    "name": "Tim Kaine",
    "photo": "/photos/K000384_Tim_Kaine.jpg",
    "lat": 37.5407,
    "lng": -77.436,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "federal-legislation",
      "policy",
      "democratic"
    ],
    "title": "U.S. Senator",
    "bio": "Tim works tirelessly as U.S. Senator to protect democratic norms and expand civic participation.",
    "location": "Richmond, VA",
    "status": "Incumbent"
  },
  {
    "id": "81",
    "name": "Adrian Fontes",
    "photo": "/photos/adrian-fontes.jpg",
    "lat": 33.4484,
    "lng": -112.074,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Secretary of State",
    "bio": "Adrian brings dedicated leadership to the role of Secretary of State, focusing on transparency and accountability.",
    "location": "Phoenix, AZ",
    "status": "Incumbent"
  },
  {
    "id": "82",
    "name": "Dana Barrett",
    "photo": "/photos/dana-barrett.jpg",
    "lat": 33.749,
    "lng": -84.388,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Secretary of State",
    "bio": "Dana serves as Secretary of State for Georgia, working to strengthen democratic institutions and civic engagement.",
    "location": "Atlanta, GA",
    "status": "Challenger"
  },
  {
    "id": "83",
    "name": "Phil McGrane",
    "photo": "/photos/phil-mcgrane.jpg",
    "lat": 43.615,
    "lng": -116.2023,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "republican"
    ],
    "title": "Secretary of State",
    "bio": "Phil works tirelessly as Secretary of State to protect democratic norms and expand civic participation.",
    "location": "Boise, ID",
    "status": "Incumbent"
  },
  {
    "id": "84",
    "name": "Barbara Byrum",
    "photo": "/photos/barbara-byrum.jpg",
    "lat": 42.7325,
    "lng": -84.5555,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Secretary of State",
    "bio": "Serving Michigan as Secretary of State, Barbara champions democratic values and good governance.",
    "location": "Lansing, MI",
    "status": "Challenger"
  },
  {
    "id": "85",
    "name": "Sarah Godlewski",
    "photo": "/photos/sarah-godlewski.jpg",
    "lat": 43.0731,
    "lng": -89.4012,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "voting-rights",
      "electoral-reform",
      "democratic"
    ],
    "title": "Secretary of State",
    "bio": "Sarah brings dedicated leadership to the role of Secretary of State, focusing on transparency and accountability.",
    "location": "Madison, WI",
    "status": "Challenger"
  },
  {
    "id": "86",
    "name": "Sen. Eric Bassler",
    "photo": "/photos/sen-eric-bassler.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. serves as State Senator for Indiana, working to strengthen democratic institutions and civic engagement.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "87",
    "name": "Sen. Vaneta Becker",
    "photo": "/photos/sen-vaneta-becker.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. serves as State Senator for Indiana, working to strengthen democratic institutions and civic engagement.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "88",
    "name": "Sen. Mike Bohecek",
    "photo": "/photos/sen-mike-bohecek.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Serving Indiana as State Senator, Sen. champions democratic values and good governance.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "89",
    "name": "Sen. Rodric Bray",
    "photo": "/photos/sen-rodric-bray.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Serving Indiana as State Senator, Sen. champions democratic values and good governance.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "90",
    "name": "Sen. Brian Buchanan",
    "photo": "/photos/sen-brian-buchanan.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. serves as State Senator for Indiana, working to strengthen democratic institutions and civic engagement.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "91",
    "name": "Sen. Jim Buck",
    "photo": "/photos/sen-jim-buck.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Serving Indiana as State Senator, Sen. champions democratic values and good governance.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "92",
    "name": "Sen. Ed Charbonneau",
    "photo": "/photos/sen-ed-charbonneau.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. works tirelessly as State Senator to protect democratic norms and expand civic participation.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "93",
    "name": "Sen. Brett Clark",
    "photo": "/photos/sen-brett-clark.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. serves as State Senator for Indiana, working to strengthen democratic institutions and civic engagement.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "94",
    "name": "Sen. Mike Crider",
    "photo": "/photos/sen-mike-crider.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. works tirelessly as State Senator to protect democratic norms and expand civic participation.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "95",
    "name": "Sen. Spencer Deery",
    "photo": "/photos/sen-spencer-deery.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. brings dedicated leadership to the role of State Senator, focusing on transparency and accountability.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "96",
    "name": "Sen. Dan Dernulc",
    "photo": "/photos/sen-dan-dernulc.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. works tirelessly as State Senator to protect democratic norms and expand civic participation.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "97",
    "name": "Sen. Blake Doriot",
    "photo": "/photos/sen-blake-doriot.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "As State Senator, Sen. is committed to defending voting rights and ensuring fair elections in Indiana.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "98",
    "name": "Sen. Sue Glick",
    "photo": "/photos/sen-sue-glick.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Serving Indiana as State Senator, Sen. champions democratic values and good governance.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "99",
    "name": "Sen. Greg Goode",
    "photo": "/photos/sen-greg-goode.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. brings dedicated leadership to the role of State Senator, focusing on transparency and accountability.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "100",
    "name": "Sen. Travis Holdman",
    "photo": "/photos/sen-travis-holdman.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. serves as State Senator for Indiana, working to strengthen democratic institutions and civic engagement.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "101",
    "name": "Sen. Jean Leising",
    "photo": "/photos/sen-jean-leising.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. works tirelessly as State Senator to protect democratic norms and expand civic participation.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "102",
    "name": "Sen. Ryan Mishler",
    "photo": "/photos/sen-ryan-mishler.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Serving Indiana as State Senator, Sen. champions democratic values and good governance.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "103",
    "name": "Sen. Rick Niemeyer",
    "photo": "/photos/sen-rick-niemeyer.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "As State Senator, Sen. is committed to defending voting rights and ensuring fair elections in Indiana.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "104",
    "name": "Sen. Linda Rogers",
    "photo": "/photos/sen-linda-rogers.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Serving Indiana as State Senator, Sen. champions democratic values and good governance.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "105",
    "name": "Sen. Greg Walker",
    "photo": "/photos/sen-greg-walker.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "As State Senator, Sen. is committed to defending voting rights and ensuring fair elections in Indiana.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  },
  {
    "id": "106",
    "name": "Sen. Kyle Walker",
    "photo": "/photos/sen-kyle-walker.jpg",
    "lat": 39.7684,
    "lng": -86.1581,
    "tags": [
      "leadership",
      "democracy",
      "governance",
      "state-policy",
      "local-leadership",
      "republican"
    ],
    "title": "State Senator",
    "bio": "Sen. works tirelessly as State Senator to protect democratic norms and expand civic participation.",
    "location": "Indianapolis, IN",
    "status": "Incumbent"
  }
];

// Extract all unique tags from people data
export const allTags = [...new Set(people.flatMap(person => person.tags))].sort();
