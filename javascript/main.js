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
    });
}

function addOffice(title, data) {
    database.ref('offices/' + title).set(data);
}

var data = {
    name: "NetEnt",
    logo: "https://s.dou.ua/CACHE/images/img/static/companies/NETENT_LOGO2015_BETTERGAMING_RGB-BLACK/b85348e0af41f0cd67752dfdfd74e5e6.png",
    email: "yulia.kudina@netent.com",
    phone: "not available",
    website: "www.netent.com",
    address: {
        city: "Kiev",
        street: "Konstantinovskaya, 15",
        longitude: "50.466063",
        latitude: "30.513006",
    },
    size: "21..60",
    photos: [
        "https://s.dou.ua/CACHE/images/img/static/gallery/pic5_1/a938a7ef44fbc67535430aa42103a843.jpg",
        "https://s.dou.ua/CACHE/images/img/static/gallery/pic14/7c026f25a66fb1dd892b278b9f54927e.jpg",
        "https://s.dou.ua/CACHE/images/img/static/gallery/pic20/199a52455dbdc99f8f9ef69e18b5daf1.jpg"
    ],
    about: "NetEnt is a leading provider of premium gaming solutions to the world’s most successful online casino operators. It has been a true pioneer in driving the market with thrilling games powered by its own cutting-edge platform. The talented people of NetEnt take pride in delivering flexible digital casino solutions, so that the company’s customers can be unique, premium, informed and ahead, all at the same time. NetEnt’s award-winning CasinoModule™ is a complete gaming system featuring over 200 best-of-breed games and a powerful Back Office. The games are renowned in the industry for their high-entertainment value, and create the ultimate experience for the player. NetEnt, listed on Nasdaq OMX Stockholm, was born from the heritage of one of Scandinavia’s leading off-line casino operators, in 1996, and is one of the original pioneers of online gaming. With its finger firmly on the pulse of emerging industry trends, NetEnt invests heavily in its people and its products to bring unrivalled commitment, passion and innovation to the world of digital gaming. Cultural diversity is present throughout all of NetEnt’s offices in Sweden, Ukraine, Malta, Gibraltar, USA and Poland. All 47 nationalities and more than 800 talents that work here have the same thing in common: a passion for delivering the very best in gaming."
};

