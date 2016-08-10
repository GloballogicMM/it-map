
class Main {

    constructor() {
        var firebaseconfig = {
            apiKey: "AIzaSyDEZBo3lOJaG_7Va6M2CiQGDSCCngs4YBk",
            authDomain: "itoffices-3fa8a.firebaseapp.com",
            databaseURL: "https://itoffices-3fa8a.firebaseio.com",
            storageBucket: "itoffices-3fa8a.appspot.com",
        };

        firebase.initializeApp(firebaseconfig);

        var database = firebase.database();

        firebase.auth().signInAnonymously().then(requestOffices).catch();

        function requestOffices() {
            database.ref("offices/").once('value').then(function (a) {
                var offices = a.val();

                console.log(offices);
            });
        }

        function addOffice(title, data) {
            database.ref('offices/' + title).set(data);
        }

    }

}
