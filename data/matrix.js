/* CoPlanAI — shared homepage data layer.
   ONE file feeds every mock-up in this folder. Change a number here and every page follows.
   Generated 2026-09-22 from Portfolio OS. Do not hand-edit counts: they are computed from `cases`. */
(function(){
var D = {
 "meta": {
  "updated": "2026-09-24",
  "source": "Portfolio OS ledger.json (2026-09-21) · mandate-table.json (Damiano, 2026-09-20) · Mandate Matrix kit",
  "note": "Baseline = the 63 cases shown in the keynote (Damiano, 2026-09-20). Merged 2026-09-22: 9 proposed additions and 1 proposed re-tag from the use cases added 2026-09-21 and a completeness sweep, all status \"provisional\" until Damiano confirms. See data/MATRIX-REFRESH.md. 2026-09-24 (Damiano): the two Eindhoven 'AI in the Hood' records merged into 2023-humankind-workshops (as in the ledger); 2025-seventh-hill-sessions (Ann Arbor) removed from the site; 2023-undp-kosovo-children-codesign kept after an evidence check."
 },
 "reach": {
  "engagements": 100,
  "cities": 76,
  "countries": 39,
  "since": 2021,
  "note": "From the keynote client map as regenerated 21 Sept 2026 23:16 (WORKING/map/src totals.json, cities.json, countries.json: 107 · 79 · 39), with the site's corrections of 24 Sept 2026 (map-data/build_web_data.py SITE_REMOVED / SITE_MOVED / SITE_ADDED): Ann Arbor removed (-1 engagement, -1 city); the merged 'AI in the Hood' workshop placed in Eindhoven, where it was held, not under the client's Amsterdam (-1 city). Added (SITE_ADDED): the KS workshop in Gjerdrum, Norway, 2026, on the framework but never on the keynote map (+1 engagement, +1 city, +1 country). Removed the same day: six subscription rows with no known use (Helsinki private client, Sitowise, Hakaniemi, Momentum, Luleå 2025, the GIZ subscription row; Budapest and Bonn leave the map, and Hungary with Budapest) and the Häme region row, the same engagement as the Harviala workshop (-7 engagements, -2 cities, -1 country). canon.yml still says 85 / 27."
 },
 "axes": {
  "vertical": {
   "top": "Open brief",
   "bottom": "Defined brief",
   "question": "Could this engagement still change what will be done, or only how?"
  },
  "horizontal": {
   "left": "Respond",
   "right": "Propose",
   "question": "Will people bring material you do not have yet, or respond to material you provide?"
  }
 },
 "quadrants": [
  {
   "key": "imagine",
   "label": "Futuring",
   "code": "PO",
   "brief": "open",
   "mode": "propose",
   "question": "What could this place become?",
   "decided": "Nothing yet. We want ideas about what this place could become.",
   "summary": "Everything is still open. People bring the future they want for a place, and it becomes the raw material of the brief.",
   "produces": "A bank of desired futures, clustered into directions and principles.",
   "needs": {
    "conditions": 4,
    "closed_by": 1
   }
  },
  {
   "key": "test",
   "label": "Scenario planning",
   "code": "RO",
   "brief": "open",
   "mode": "respond",
   "question": "What if this happened here?",
   "decided": "The question, not the answer. We have options to put to people.",
   "summary": "A scenario or a policy idea goes to people before anything is decided, and we learn what they could live with.",
   "produces": "A reading of the public response per scenario: appetite, red lines, support.",
   "needs": {
    "conditions": 2,
    "closed_by": 3
   }
  },
  {
   "key": "shape",
   "label": "Co-design",
   "code": "PD",
   "brief": "defined",
   "mode": "propose",
   "question": "How should it look and work?",
   "decided": "What we will build, but not yet how it looks.",
   "summary": "What will happen is decided: a street, a square, a building. How it takes shape is open, and what people propose feeds the design.",
   "produces": "Design proposals and priorities that feed the design.",
   "needs": {
    "conditions": 2,
    "closed_by": 2
   }
  },
  {
   "key": "improve",
   "label": "Design review",
   "code": "RD",
   "brief": "defined",
   "mode": "respond",
   "question": "What would make this better?",
   "decided": "The design. We want it better before it is final.",
   "summary": "The design exists. People react to the actual drawings while there is still time to revise.",
   "produces": "Issues and improvements the design team can act on before the drawing is final.",
   "needs": {
    "conditions": 1,
    "closed_by": 6
   }
  }
 ],
 "mandate_conditions": [
  "The question is open",
  "We can act",
  "It enters a decision",
  "It survives"
 ],
 "instruments": [
  "Rule",
  "Street",
  "Permit",
  "Money",
  "Option",
  "Land"
 ],
 "poles": {
  "propose": "#FF7A2F",
  "respond": "#4FC3F7",
  "open": "#FFE6BF",
  "defined": "#2B3A8F",
  "name": "Ember & Ice"
 },
 "featured": {
  "imagine": [
   "2023-lahti-city-centre",
   "2023-vantaa",
   "2026-lulea",
   "2023-undp-nusantara"
  ],
  "test": [
   "2024-undp-panama-betania",
   "2026-bologna",
   "2024-twente-climate-blue-green",
   "2023-tallinn-biodiverse-city-museum"
  ],
  "shape": [
   "2023-helsinki-summer-streets",
   "2024-sweco-kaarina",
   "2023-jyvaskyla-library",
   "2023-ura-singapore-codesign"
  ],
  "improve": [
   "2026-vienna",
   "2024-zamanand-munich",
   "2023-helsinki-market-squares",
   "2023-pristina-cluster"
  ]
 },
 "cases": [
  {
   "slug": "2023-ai-in-the-hood-eindhoven",
   "title": "AI in the Hood, Eindhoven",
   "year": 2023,
   "place": "Eindhoven, Netherlands",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed",
   "hidden": true,
   "hidden_note": "Merged into 2023-humankind-workshops (Damiano, 2026-09-24): one engagement, the closing workshop of Baltan Laboratories' AI in the Hood series in Eindhoven's Rochusbuurt, with Humankind. Same merge in the Portfolio OS ledger (journal 20260924-073717-merge-humankind-ai-in-the-hood); the survivor keeps its task (test) and title."
  },
  {
   "slug": "2023-newcastle-city-of-longevity",
   "title": "City of Longevity, Newcastle",
   "year": 2023,
   "place": "Newcastle, United Kingdom",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2023-vantaa",
   "title": "City of Vantaa",
   "year": 2023,
   "place": "Vantaa, Finland",
   "task": "imagine",
   "mandate": true,
   "image": "img/cases/2023-vantaa.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-dinnomo-zurich",
   "title": "Denk Züri Neu",
   "year": 2023,
   "place": "Zurich, Switzerland",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2023-dinnomo-zurich.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-dubai-world-government-summit",
   "title": "Edge of Government, World Government Summit",
   "year": 2023,
   "place": "Dubai, United Arab Emirates",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2023-dubai-world-government-summit.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-ace-children-playgrounds-to-planning",
   "title": "From Playgrounds to Planning",
   "year": 2023,
   "place": "Hämeenlinna, Finland",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2023-ace-children-playgrounds-to-planning.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-berlin-kiezlabor",
   "title": "Kiezlabor 2023",
   "year": 2023,
   "place": "Berlin, Germany",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2023-berlin-kiezlabor.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-lahti-city-centre",
   "title": "Lahti City Center Vision 2040",
   "year": 2023,
   "place": "Lahti, Finland",
   "task": "imagine",
   "mandate": true,
   "image": "img/cases/2023-lahti-city-centre.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-undp-nusantara",
   "title": "Nusantara Capital City 2024",
   "year": 2023,
   "place": "East Kalimantan (Nusantara), Indonesia",
   "task": "imagine",
   "mandate": true,
   "image": "img/cases/2023-undp-nusantara.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-undp-skopje",
   "title": "Urban Reimagination of Skopje",
   "year": 2023,
   "place": "Skopje, North Macedonia",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2023-undp-skopje.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-group-nao-valencia",
   "title": "Group NAO, Valencia",
   "year": 2023,
   "place": "Valencia, Spain",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2023-milan-design-week",
   "title": "Milan Design Week",
   "year": 2023,
   "place": "Milan, Italy",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2023-undp-batumi",
   "title": "Codesign the future-fit of your city, Batumi",
   "year": 2023,
   "place": "Batumi, Georgia",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2023-undp-batumi.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-civitas-athens",
   "title": "CIVINET Forum Workshop, Athens",
   "year": 2024,
   "place": "Athens, Greece",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-kyiv-school-of-economics-lviv",
   "title": "Co-Design for Reconstruction, Kyiv",
   "year": 2024,
   "place": "Kyiv, Ukraine",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2024-kyiv-school-of-economics-lviv.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-berlin-kiezlabor",
   "title": "Kiezlabor 2024",
   "year": 2024,
   "place": "Berlin, Germany",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-undp-m4eg",
   "title": "Mayors for Economic Growth Network",
   "year": 2024,
   "place": "Dusheti, Georgia",
   "task": "shape",
   "mandate": true,
   "image": "img/cases/2024-undp-m4eg.jpg",
   "status": "provisional",
   "note": "Proposed move Futuring → Co-design (its only participatory run, Dusheti 2024); mandate yes as ruled 2026-09-20 · needs Damiano"
  },
  {
   "slug": "2024-turku-university-nusantara",
   "title": "Nusantara codesign workshop",
   "year": 2024,
   "place": "Sepan Kel., Indonesia",
   "task": "imagine",
   "mandate": true,
   "image": "img/cases/2024-turku-university-nusantara.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-oman-planning-event",
   "title": "Oman planning event",
   "year": 2024,
   "place": "Oman",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-ypo-keynote",
   "title": "YPO keynote and workshop",
   "year": 2024,
   "place": "Tallinn, Estonia",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-museum-fur-werte",
   "title": "Museum für Werte, Berlin",
   "year": 2024,
   "place": "Berlin, Germany",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2024-museum-fur-werte.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2025-berlin-kiezlabor",
   "title": "Kiezlabor - City Lab Berlin",
   "year": 2025,
   "place": "Berlin, Germany",
   "task": "imagine",
   "mandate": false,
   "image": "img/cases/2025-berlin-kiezlabor.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2025-new-urban-habits-festival",
   "title": "New Urban Habits festival",
   "year": 2025,
   "place": "Romania",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-milan",
   "title": "Experiencing and envisioning La Statale",
   "year": 2026,
   "place": "Milan, Italy",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-lulea",
   "title": "Luleå University of Technology: letting children reimagine their city",
   "year": 2026,
   "place": "Luleå, Sweden",
   "task": "imagine",
   "mandate": true,
   "image": "img/cases/2026-lulea.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-avalinn-tallinn",
   "title": "AvaLinn, Tallinn’s Participation Hub",
   "year": 2023,
   "place": "Tallinn, Estonia",
   "task": "improve",
   "mandate": false,
   "image": "img/cases/2023-avalinn-tallinn.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-east-cleveland-connect",
   "title": "Connect East Cleveland",
   "year": 2023,
   "place": "East Cleveland, United States",
   "task": "improve",
   "mandate": true,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2023-helsinki-market-squares",
   "title": "Helsinki Market Squares",
   "year": 2023,
   "place": "Helsinki, Finland",
   "task": "improve",
   "mandate": true,
   "image": "img/cases/2023-helsinki-market-squares.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-tallinn-ministry-liivalaia",
   "title": "Liivalaia Street, Tallinn",
   "year": 2023,
   "place": "Tallinn, Estonia",
   "task": "improve",
   "mandate": false,
   "image": "img/cases/2023-tallinn-ministry-liivalaia.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-pristina-cluster",
   "title": "Pristina: Children, Festivals and Blloku 1",
   "year": 2023,
   "place": "Pristina, Kosovo",
   "task": "improve",
   "mandate": true,
   "image": "img/cases/2023-pristina-cluster.jpg",
   "status": "confirmed",
   "note": "Now stands for Blloku 1 and the architecture festival; the children strand is its own proposed Co-design dot"
  },
  {
   "slug": "2024-zamanand-munich",
   "title": "Re-Imaging the Car-Free City, Munich",
   "year": 2024,
   "place": "Munich, Germany",
   "task": "improve",
   "mandate": true,
   "image": "img/cases/2024-zamanand-munich.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-unimi-milan-workshop",
   "title": "UNIMI workshop, Milan",
   "year": 2024,
   "place": "Milan, Italy",
   "task": "improve",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-norway",
   "title": "Åmotsskogen, Norwegian Association of Local and Regional Authorities",
   "year": 2026,
   "place": "Gjerdrum, Norway",
   "task": "improve",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-vienna",
   "title": "Vienna Supergrätzl",
   "year": 2026,
   "place": "Vienna, Austria",
   "task": "improve",
   "mandate": true,
   "image": "img/cases/2026-vienna.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-helsinki-summer-streets",
   "title": "Helsinki Summer Streets",
   "year": 2023,
   "place": "Helsinki, Finland",
   "task": "shape",
   "mandate": true,
   "image": "img/cases/2023-helsinki-summer-streets.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-jyvaskyla-library",
   "title": "Jyväskylä Library Interiors",
   "year": 2023,
   "place": "Jyväskylä, Finland",
   "task": "shape",
   "mandate": true,
   "image": "img/cases/2023-jyvaskyla-library.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-kalamaja-street-design",
   "title": "Street Design with Artificial Intelligence - Kalamaja",
   "year": 2023,
   "place": "Tallinn, Estonia",
   "task": "shape",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2023-ura-singapore-codesign",
   "title": "URA codesign methods",
   "year": 2023,
   "place": "Singapore",
   "task": "shape",
   "mandate": true,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-giz-manila",
   "title": "GIZ Manila",
   "year": 2024,
   "place": "Manila, Philippines",
   "task": "shape",
   "mandate": true,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-sweco-kaarina",
   "title": "Kaarina Market Square",
   "year": 2024,
   "place": "Kaarina, Finland",
   "task": "shape",
   "mandate": true,
   "image": "img/cases/2024-sweco-kaarina.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-karlsruhe-private-subscription",
   "title": "Private client, Karlsruhe",
   "year": 2024,
   "place": "Karlsruhe, Germany",
   "task": "shape",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-rail4cities-rogoredo",
   "title": "Rail4Cities: Milano Rogoredo station",
   "year": 2024,
   "place": "Milan, Italy",
   "task": "shape",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2025-rta-demo-project",
   "title": "Roads and Transport Authority, Dubai",
   "year": 2025,
   "place": "Dubai, United Arab Emirates",
   "task": "shape",
   "mandate": true,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2025-oulu",
   "title": "Oulu",
   "year": 2025,
   "place": "Oulu, Finland",
   "task": "shape",
   "mandate": true,
   "image": "img/cases/2025-oulu.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2021-jyvaskyla-recenter",
   "title": "Re-Centre Jyväskylä",
   "year": 2021,
   "place": "Jyväskylä, Finland",
   "task": "test",
   "mandate": true,
   "image": "img/cases/2021-jyvaskyla-recenter.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2023-humankind-workshops",
   "title": "'AI in the Hood' closing workshop, Humankind",
   "year": 2023,
   "place": "Eindhoven, Netherlands",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed",
   "note": "2026-09-24: absorbed 2023-ai-in-the-hood-eindhoven (Damiano merged the two records, as in the ledger). Title = the ledger's, without the retired name. Place from the ledger brief: Buurthuis de Buut, Rochusbuurt, Eindhoven."
  },
  {
   "slug": "2023-lulea-youth",
   "title": "Lulea University: Participatory AI methods for youth engagement",
   "year": 2023,
   "place": "Luleå, Sweden",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2023-tallinn-biodiverse-city-museum",
   "title": "BiodiverseCity?, Estonian Museum of Natural History",
   "year": 2023,
   "place": "Tallinn, Estonia",
   "task": "test",
   "mandate": false,
   "image": "img/cases/2023-tallinn-biodiverse-city-museum.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-undp-panama-betania",
   "title": "Climate Scenario Planning, Panama",
   "year": 2024,
   "place": "Panama City, Panama",
   "task": "test",
   "mandate": true,
   "image": "img/cases/2024-undp-panama-betania.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-twente-climate-blue-green",
   "title": "Climate-Sensitive Blue and Green Spaces, Enschede",
   "year": 2024,
   "place": "Enschede, Netherlands",
   "task": "test",
   "mandate": true,
   "image": "img/cases/2024-twente-climate-blue-green.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-humankind-rotterdam",
   "title": "Humankind Rotterdam workshops and subscription",
   "year": 2024,
   "place": "Netherlands",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-must-turku",
   "title": "MUST: Enabling multi-species transition",
   "year": 2024,
   "place": "Turku, Finland",
   "task": "test",
   "mandate": false,
   "image": "img/cases/2024-must-turku.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2024-paces-stockholm",
   "title": "PACES Stockholm - Prototype of Accessible, Calm, Equitable and Shared Stockholm",
   "year": 2024,
   "place": "Stockholm, Sweden",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2024-hamburg-hal",
   "title": "Participatory AI for the youth, Hamburg",
   "year": 2024,
   "place": "Hamburg, Germany",
   "task": "test",
   "mandate": false,
   "image": "img/cases/2024-hamburg-hal.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2025-iclei-youth-codesign-workshop",
   "title": "ICLEI youth codesign workshop",
   "year": 2025,
   "place": "Finland",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2025-turku-biodiversity-park",
   "title": "Urban Biodiversity Parks, Turku",
   "year": 2025,
   "place": "Turku, Finland",
   "task": "test",
   "mandate": true,
   "image": "img/cases/2025-turku-biodiversity-park.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2026-ai-based-visualisation-for-affordable-housing-and-informal-settlement-upgrading-wuf13-baku",
   "title": "Affordable housing and informal settlement upgrading, WUF13",
   "year": 2026,
   "place": "Baku, Azerbaijan",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed",
   "hidden": true,
   "hidden_note": "Duplicate of 2026-wuf-2026: the same engagement (GIZ Connective Cities session and kiosk, WUF13 Baku, 21 May 2026), recorded twice (partner write-up + activity record). Kept 2026-wuf-2026. See data/CASE-IMAGES.md."
  },
  {
   "slug": "ai-based-visualisation-for-sustainable-and-affordable-housing",
   "title": "Sustainable and affordable housing visualisation",
   "year": 2026,
   "place": "Manila, Philippines",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-conwa-tuni",
   "title": "ConWa: Contested Waterfront Transformation",
   "year": 2026,
   "place": "Tampere, Finland",
   "task": "test",
   "mandate": true,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-giz",
   "title": "GIZ Connective Cities: visualising green corridors, Cairo to Berlin",
   "year": 2026,
   "place": "Manila, Philippines",
   "task": "test",
   "mandate": false,
   "image": "img/cases/2026-giz.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2026-bologna",
   "title": "TICO — Officina mobile della conoscenza, Bologna",
   "year": 2026,
   "place": "Bologna, Italy",
   "task": "test",
   "mandate": true,
   "image": "img/cases/2026-bologna.jpg",
   "status": "confirmed"
  },
  {
   "slug": "2026-wuf-2026",
   "title": "WUF13 Baku kiosk, with GIZ Connective Cities",
   "year": 2026,
   "place": "Baku, Azerbaijan",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2026-wiesbaden",
   "title": "Wiesbaden workshop series 2026",
   "year": 2026,
   "place": "Wiesbaden, Germany",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "confirmed"
  },
  {
   "slug": "2025-publictwin-malmo",
   "title": "Nyhamnen harbour futures, Malmö",
   "year": 2025,
   "place": "Malmö, Sweden",
   "task": "test",
   "mandate": false,
   "image": null,
   "status": "provisional",
   "note": "Use case added 2026-09-21 · task 4/4 test; mandate 4/4 no"
  },
  {
   "slug": "2025-seventh-hill-sessions",
   "title": "Ann Arbor school playgrounds and community murals",
   "year": 2025,
   "place": "Ann Arbor, United States",
   "task": "shape",
   "mandate": true,
   "image": null,
   "status": "provisional",
   "note": "Use case added 2026-09-21 · task 4/4 shape on each of the 4 use cases; mandate: Burns Park 4/4 yes, AAPS playground 3/4 yes, the two murals split (2 no, 1 yes, 1 unknown)",
   "hidden": true,
   "hidden_note": "Removed from the site by Damiano, 2026-09-24 (\"Ann Arbor remove\"). Kept here for provenance: never drawn, never counted, off the map."
  },
  {
   "slug": "2023-undp-kosovo-children-codesign",
   "title": "Children co-design public spaces, Pristina",
   "year": 2023,
   "place": "Pristina, Kosovo",
   "task": "shape",
   "mandate": true,
   "image": null,
   "status": "provisional",
   "note": "Use case added 2026-09-21 · task 4/4 shape; mandate 4/4 yes · kept 2026-09-24 after an evidence check (photos of the session with the platform on screen, UNDP's own article photo from the same session, the sales record). Claim only that the AI testing workshops ran on the platform: UNDP credits SpaceSyntaks and Save the Children with facilitating the process. The children's photos stay unpublished until consent is confirmed."
  },
  {
   "slug": "2024-undp-panama-utp-intergenerational",
   "title": "Intergenerational public-space design, Betania",
   "year": 2024,
   "place": "Panama City, Panama",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "provisional",
   "note": "Use case added 2026-09-21 · task 2/4 imagine vs 2/4 shape; mandate 2/4 yes vs 2/4 no; decided from the UNDP results report · needs Damiano"
  },
  {
   "slug": "2024-visible-city-minnesota",
   "title": "Washington Avenue Bridge and Rice Street, Twin Cities",
   "year": 2024,
   "place": "Minneapolis–Saint Paul, United States",
   "task": "imagine",
   "mandate": false,
   "image": null,
   "status": "provisional",
   "note": "Use case added 2026-09-21 · task: Rice Street 4/4 imagine, bridge ramp 2/4 imagine vs 2/4 shape (decided imagine); mandate 8/8 no · needs Damiano"
  },
  {
   "slug": "2026-wsp-helsinki-design-week",
   "title": "Helsinki Design Week street co-design",
   "year": 2026,
   "place": "Helsinki, Finland",
   "task": "shape",
   "mandate": true,
   "image": null,
   "status": "provisional",
   "note": "Found by the completeness sweep, 2026-09-22 · needs Damiano"
  },
  {
   "slug": "2024-rail4cities-ottignies",
   "title": "Rail4Cities: Ottignies station",
   "year": 2024,
   "place": "Ottignies, Belgium",
   "task": "shape",
   "mandate": false,
   "image": null,
   "status": "provisional",
   "note": "Found by the completeness sweep, 2026-09-22 · needs Damiano"
  },
  {
   "slug": "2024-rail4cities-tomaszow",
   "title": "Rail4Cities: Tomaszów Mazowiecki station",
   "year": 2024,
   "place": "Tomaszów Mazowiecki, Poland",
   "task": "shape",
   "mandate": false,
   "image": null,
   "status": "provisional",
   "note": "Found by the completeness sweep, 2026-09-22 · needs Damiano"
  },
  {
   "slug": "2024-rail4cities-toulouse",
   "title": "Rail4Cities: Toulouse-Matabiau station",
   "year": 2024,
   "place": "Toulouse, France",
   "task": "shape",
   "mandate": false,
   "image": null,
   "status": "provisional",
   "note": "Found by the completeness sweep, 2026-09-22 · needs Damiano"
  }
 ]
};

/* ---- computed stats -------------------------------------------------- */
function stats(){
  var s={total:0,mandate:0,provisional:0,q:{}};
  D.quadrants.forEach(function(q){ s.q[q.key]={n:0,m:0,pct:0,label:q.label}; });
  D.cases.forEach(function(c){ var q=s.q[c.task]; if(!q||c.hidden) return; q.n++; s.total++; if(c.mandate){q.m++; s.mandate++;} if(c.status==='provisional') s.provisional++; });
  Object.keys(s.q).forEach(function(k){ var q=s.q[k]; q.pct=q.n?Math.round(100*q.m/q.n):0; });
  var open=['imagine','test'], def=['shape','improve'];
  function grp(keys){ var n=0,m=0; keys.forEach(function(k){n+=s.q[k].n;m+=s.q[k].m;}); return {n:n,m:m,pct:n?Math.round(100*m/n):0}; }
  s.open=grp(open); s.defined=grp(def); s.propose=grp(['imagine','shape']); s.respond=grp(['test','improve']);
  s.pct=s.total?Math.round(100*s.mandate/s.total):0;
  s.one_in = s.mandate? Math.round(s.total/s.mandate) : 0;
  return s;
}

/* ---- OKLab colour mixing: quadrant colours are DERIVED from the four poles --- */
function hex2rgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(function(c){return c+c}).join('');return [0,2,4].map(function(i){return parseInt(h.substr(i,2),16)/255});}
function lin(c){return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4);}
function delin(c){c=Math.max(0,Math.min(1,c));return c<=0.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-0.055;}
function toOklab(hex){var r=hex2rgb(hex).map(lin);
  var l=0.4122214708*r[0]+0.5363325363*r[1]+0.0514459929*r[2],m=0.2119034982*r[0]+0.6806995451*r[1]+0.1073969566*r[2],s=0.0883024619*r[0]+0.2817188376*r[1]+0.6299787005*r[2];
  l=Math.cbrt(l);m=Math.cbrt(m);s=Math.cbrt(s);
  return [0.2104542553*l+0.7936177850*m-0.0040720468*s,1.9779984951*l-2.4285922050*m+0.4505937099*s,0.0259040371*l+0.7827717662*m-0.8086757660*s];}
function fromOklab(L){var l=L[0]+0.3963377774*L[1]+0.2158037573*L[2],m=L[0]-0.1055613458*L[1]-0.0638541728*L[2],s=L[0]-0.0894841775*L[1]-1.2914855480*L[2];
  l=l*l*l;m=m*m*m;s=s*s*s;
  var r=[4.0767416621*l-3.3077115913*m+0.2309699292*s,-1.2684380046*l+2.6097574011*m-0.3413193965*s,-0.0041960863*l-0.7034186147*m+1.7076147010*s];
  return '#'+r.map(function(c){return ('0'+Math.round(delin(c)*255).toString(16)).slice(-2)}).join('').toUpperCase();}
function mix(a,b,t){t=(t==null)?0.5:t;var A=toOklab(a),B=toOklab(b);return fromOklab([A[0]+(B[0]-A[0])*t,A[1]+(B[1]-A[1])*t,A[2]+(B[2]-A[2])*t]);}
/* quadrant colour = OKLab midpoint of the two poles that meet at its corner */
function quadrantColours(p){p=p||D.poles;return {imagine:mix(p.open,p.propose),test:mix(p.open,p.respond),shape:mix(p.defined,p.propose),improve:mix(p.defined,p.respond)};}
function luminance(hex){var r=hex2rgb(hex).map(lin);return 0.2126*r[0]+0.7152*r[1]+0.0722*r[2];}
function contrast(a,b){var A=luminance(a)+0.05,B=luminance(b)+0.05;return A>B?A/B:B/A;}
/* push a colour darker (in OKLab L) until it clears `target` contrast on `ground` — text colours are derived, never picked */
function readable(hex,ground,target){target=target||4.5;var L=toOklab(hex),i=0,out=hex;while(contrast(out,ground)<target&&i<60){L[0]-=0.01;out=fromOklab(L);i++;}return out;}

/* ---- tiny binder: <span data-m="mandate">24</span> gets the live value ----- */
function get(obj,path){return path.split('.').reduce(function(o,k){return o==null?o:o[k]},obj);}
function bind(root){var s=stats(),ctx={s:s,reach:D.reach};
  (root||document).querySelectorAll('[data-m]').forEach(function(el){var k=el.getAttribute('data-m');var v=get(s,k);if(v==null)v=get(ctx,k);if(v!=null)el.textContent=v;});}

/* "hidden": true marks a record kept for provenance only (a duplicate, a merged record or a case removed
   from the site; the reason is in "hidden_note"): never drawn, never counted, never on the map */
function visibleCases(){return D.cases.filter(function(c){return !c.hidden});}
function byTask(key){return D.cases.filter(function(c){return c.task===key&&!c.hidden});}
function bySlug(slug){for(var i=0;i<D.cases.length;i++)if(D.cases[i].slug===slug)return D.cases[i];return null;}

window.COPLAN={data:D,visibleCases:visibleCases,stats:stats,mix:mix,quadrantColours:quadrantColours,contrast:contrast,readable:readable,bind:bind,byTask:byTask,bySlug:bySlug,toOklab:toOklab,fromOklab:fromOklab};
if(document.readyState!=='loading')bind();else document.addEventListener('DOMContentLoaded',function(){bind();});
})();
