class Main {

    constructor() {


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
        this.database.ref("offices/").once('value').then(function (a) {
            var offices = a.val();

            console.log(offices);
        });
    }

    addOffice(title, data) {
        this.database.ref('offices/' + title).set(data);
    }

}
