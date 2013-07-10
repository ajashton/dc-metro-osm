A little something to play around with D3 and OSM data. Not really useful right now.

## Notes

Query:

    http://overpass.osm.rambler.ru/cgi/interpreter?data=%5Bout%3Ajson%5D%3Brelation%5B%22route%22%3D%22subway%22%5D%2838%2E65%2C%2D77%2E40%2C39%2E15%2C%2D76%2E65%29%3Bout%20meta%3B%3E%3Bout%20meta%3B

    http://overpass.osm.rambler.ru/cgi/interpreter?data=[out:json];relation["route"="subway"](38.65,-77.40,39.15,-76.65);out meta;>;out meta;;

- system overview map:
    - lines colored appropriately
    - stations marked
    - high zooms: stations labeled
    - high zooms: entrances marked (associated to station somehow?)
    - line count
    - station count
    - entrances count

- line overview page:
    - thumbnail map highlighting line in system
    - station count
    -

- station overview page:
    - map of entrances
        - stairs / escalators / elevators noted somehow
        - how are these associated to stations?
