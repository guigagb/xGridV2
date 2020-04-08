import xGrid from '../xGridV2.js';

const grid = new xGrid.create({
    el: '#pnGrid',
    height: 300
    // columns:{
    //     'Nome': {
    //         dataField: 'firstName'
    //     },
    //     'Sobrenome': {
    //         dataField: 'lastName'
    //     }
    // }
});

let dados = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$3,712.04",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "brown",
        "firstName": "Sparks",
        "lastName": "Vaughn",
        "company": "ZENTIME",
        "email": "sparks.vaughn@zentime.name",
        "phone": 991114746,
        "address": "742 Jackson Place, Martinez, Mississippi, 1595"
    },
    {
        "index": 1,
        "isActive": false,
        "balance": "$1,787.15",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "blue",
        "firstName": "Gertrude",
        "lastName": "Kramer",
        "company": "OBLIQ",
        "email": "gertrude.kramer@obliq.tv",
        "phone": 998032644,
        "address": "172 Newkirk Avenue, Volta, Montana, 3884"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$1,863.56",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "firstName": "Sutton",
        "lastName": "White",
        "company": "OPTICOM",
        "email": "sutton.white@opticom.com",
        "phone": 993279636,
        "address": "225 Duryea Place, Belvoir, North Carolina, 5630"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,263.22",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "blue",
        "firstName": "Byers",
        "lastName": "Swanson",
        "company": "EVENTEX",
        "email": "byers.swanson@eventex.info",
        "phone": 99382477,
        "address": "871 Barlow Drive, Gibbsville, District Of Columbia, 1129"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$2,425.35",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "blue",
        "firstName": "House",
        "lastName": "Cote",
        "company": "ZILLAR",
        "email": "house.cote@zillar.ca",
        "phone": 999474964,
        "address": "950 Grace Court, Marion, Maryland, 7085"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$3,878.30",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "green",
        "firstName": "Benita",
        "lastName": "Downs",
        "company": "QUILTIGEN",
        "email": "benita.downs@quiltigen.biz",
        "phone": 991647490,
        "address": "294 Herkimer Court, Lorraine, Rhode Island, 7758"
    },
    {
        "index": 6,
        "isActive": false,
        "balance": "$3,322.64",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "blue",
        "firstName": "Sullivan",
        "lastName": "Valentine",
        "company": "NURALI",
        "email": "sullivan.valentine@nurali.org",
        "phone": 988447446,
        "address": "603 Albemarle Road, Lookingglass, Idaho, 8579"
    },
    {
        "index": 7,
        "isActive": false,
        "balance": "$3,284.03",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "brown",
        "firstName": "Skinner",
        "lastName": "Mcdonald",
        "company": "PYRAMIS",
        "email": "skinner.mcdonald@pyramis.me",
        "phone": 981761071,
        "address": "241 Paerdegat Avenue, Witmer, Georgia, 9305"
    },
    {
        "index": 8,
        "isActive": true,
        "balance": "$1,101.33",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "eyeColor": "brown",
        "firstName": "Norton",
        "lastName": "Boone",
        "company": "BEDLAM",
        "email": "norton.boone@bedlam.biz",
        "phone": 995622995,
        "address": "661 Emerald Street, Dante, New Hampshire, 7852"
    },
    {
        "index": 9,
        "isActive": true,
        "balance": "$3,849.51",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "green",
        "firstName": "Hammond",
        "lastName": "Holloway",
        "company": "GRONK",
        "email": "hammond.holloway@gronk.us",
        "phone": 990719747,
        "address": "552 Richards Street, Esmont, Virgin Islands, 8505"
    }
]

grid.source(dados)
// grid.sourceAdd(dados)
// grid.queryOpen()