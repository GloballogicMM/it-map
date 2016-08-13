class Main {

    constructor() {

        // When you add a marker using a Place instead of a location, the Maps
        // API will automatically add a 'Save to Google Maps' link to any info
        // window associated with that marker.







        //var react = new ReactMain();

        var firebaseconfig = {
            apiKey: "AIzaSyDEZBo3lOJaG_7Va6M2CiQGDSCCngs4YBk",
            authDomain: "itoffices-3fa8a.firebaseapp.com",
            databaseURL: "https://itoffices-3fa8a.firebaseio.com",
            storageBucket: "itoffices-3fa8a.appspot.com",
        };

        firebase.initializeApp(firebaseconfig);

        this.database = firebase.database();

        firebase.auth().signInAnonymously().then(this.requestOffices.bind(this)).catch();
    }

    requestOffices() {
        var self = this;

        this.database.ref("offices/").once('value').then(function (a) {
            var offices = a.val();

            self.setMarkers(offices);

            console.log(offices);
        });
    }

    addOffice(title, data) {
        this.database.ref('offices/' + title).set(data);
    }

    setMarkers(offices) {



        //TODO : create map module

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: {lat: 50.466076, lng: 30.513049}
        });



        var key, value;

        for (key in offices) {

            value = offices[key];

            if (!value.address) { continue; }

            var xmlhttp = new XMLHttpRequest();
            var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+value.address + ', ' + value.city+'&sensor=false';
            var marker;


            //TODO : shows only YANDEX marker
            (function(key) {

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        var data = JSON.parse(xmlhttp.responseText);

                        var p = data.results[0].geometry.location;

                        var latlng = new google.maps.LatLng(p.lat, p.lng);

                        marker = new google.maps.Marker({
                            map: map,
                            // Define the place with a location, and a query string.
                            place: {
                                location: latlng,
                                query: 'Google, Sydney, Australia'

                            },
                            // Attributions help users find your site again.
                            attribution: {
                                source: 'Google Maps JavaScript API',
                                webUrl: 'https://developers.google.com/maps/'
                            }
                        });

                        // Construct a new InfoWindow.
                        var infoWindow = new google.maps.InfoWindow({
                            content: key
                        });

                        // Opens the InfoWindow when marker is clicked.
                        marker.addListener('click', function () {
                            infoWindow.open(map, marker);
                        });

                        //myFunction(myArr);
                    }
                };
                xmlhttp.open("GET", url, true);
                xmlhttp.send();

            })(key);



        }


    }

}
