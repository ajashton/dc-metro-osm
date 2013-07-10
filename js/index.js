// - for example see tmcw's DC legislation browser
// - chainable call()s on selection 

d3.json('data/dc-metro.json').on('load', loaded).get();

function loaded(data) {
    //console.log(data);

    container = d3.select('#lines');

    _.each(data.elements, function(elem) {
        // get route relations
        if (elem.type == 'relation' && elem.tags.type == 'route') {
            var date_format = d3.time.format('%A %B %e, %Y at %H:%M UTC');

            // count stop
            var stops = 0;
            _.each(elem.members, function(member) {
                if (member.role == 'stop') {
                    stop++;
                }
            });

            container
                .append('li').text(elem.tags.name || '[unnamed]')
                .append('small').text(
                    ' relation last modified by ' +
                    elem.user + ' on ' +
                    date_format(new Date(elem.timestamp))
                )
                .append('ul').append('li').text(stops + ' stops');
            console.log(elem);
        }
    });
}

var map = L.mapbox.map('map', 'examples.map-d40qac29')
    .setView([38.89399, -77.03659], 17);
