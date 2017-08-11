import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  elements =
    {
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
      },
      "followers" : {
        "href" : null,
        "total" : 4930256
      },
      "genres" : [ "modern rock", "pop", "vegas indie" ],
      "href" : "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
      "id" : "53XhwfbYqKCa1cC15pYq2q",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/de3c2c4f4e822edab6fd8c2103102413502635ea",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/0242e9f3cdaeb9abd0c9724248213c8e364fc921",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/affb5c546adf0b6f718282528e56f24854026be1",
        "width" : 160
      } ],
      "name" : "Imagine Dragons",
      "popularity" : 95,
      "type" : "artist",
      "uri" : "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
      },
      "followers" : {
        "href" : null,
        "total" : 4920698
      },
      "genres" : [ "hip hop", "rap", "west coast rap" ],
      "href" : "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
      "id" : "2YZyLoL8N0Wb9xBt1NhZWg",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/106c76de27f7e556ebb43947aadd1228862d6cd7",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/70780996aaeb7cbab1cd71d2039cd0b7521a53e1",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/df44832488c25cc6a387272cf881fd9b98122795",
        "width" : 160
      } ],
      "name" : "Kendrick Lamar",
      "popularity" : 96,
      "type" : "artist",
      "uri" : "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2UwqpfQtNuhBwviIC0f2ie"
      },
      "followers" : {
        "href" : null,
        "total" : 135417
      },
      "genres" : [ "trap francais" ],
      "href" : "https://api.spotify.com/v1/artists/2UwqpfQtNuhBwviIC0f2ie",
      "id" : "2UwqpfQtNuhBwviIC0f2ie",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/29e8d54bf540ec8c4e04904d8c3c677c1fe914af",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/31672e09d64b5b829b89bf5f18ebc7b580e7a460",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/716a465804a53d7937440339afc21b61613bb018",
        "width" : 160
      } ],
      "name" : "Damso",
      "popularity" : 78,
      "type" : "artist",
      "uri" : "spotify:artist:2UwqpfQtNuhBwviIC0f2ie"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
      },
      "followers" : {
        "href" : null,
        "total" : 6789631
      },
      "genres" : [ "canadian pop", "pop", "rap" ],
      "href" : "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
      "id" : "1Xyo4u8uXC1ZmMpatF05PJ",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/a1bbafd8c21c14fd685a3d8efb0906db7c059a97",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/30f5cabd38de3634a79bb527f3507581e96799c7",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/22e74f760f42dc5a8f91b8dbbbd38a0c6eaacbf4",
        "width" : 160
      } ],
      "name" : "The Weeknd",
      "popularity" : 94,
      "type" : "artist",
      "uri" : "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
      },
      "followers" : {
        "href" : null,
        "total" : 5217193
      },
      "genres" : [ "dance pop", "pop" ],
      "href" : "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
      "id" : "00FQb4jTyendYWaN8pK0wa",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/56a3782b07eab32b5340f164c566349450ee84cd",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/7891384e95fa3c1a7020645ae790c7924f7ae1dc",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/79e5bc2897ca24249707294d1e9324441bda97af",
        "width" : 160
      } ],
      "name" : "Lana Del Rey",
      "popularity" : 90,
      "type" : "artist",
      "uri" : "spotify:artist:00FQb4jTyendYWaN8pK0wa"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1Yfe3ONJlioHys7jwHdfVm"
      },
      "followers" : {
        "href" : null,
        "total" : 23869
      },
      "genres" : [ "french hip hop", "trap francais" ],
      "href" : "https://api.spotify.com/v1/artists/1Yfe3ONJlioHys7jwHdfVm",
      "id" : "1Yfe3ONJlioHys7jwHdfVm",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/e4ae700b003a65c17faa3d72c2e3b425b9f320c0",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/84bae6e914719f3d0fa0efb80f75bed7a2f4a9d4",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/989d464fdd36de6baf7f9bb963705637de174aff",
        "width" : 160
      } ],
      "name" : "Lomepal",
      "popularity" : 65,
      "type" : "artist",
      "uri" : "spotify:artist:1Yfe3ONJlioHys7jwHdfVm"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/7rz6ZZErn5YFDteXKhyf3g"
      },
      "followers" : {
        "href" : null,
        "total" : 50750
      },
      "genres" : [ "francoton", "french hip hop", "french pop", "trap francais" ],
      "href" : "https://api.spotify.com/v1/artists/7rz6ZZErn5YFDteXKhyf3g",
      "id" : "7rz6ZZErn5YFDteXKhyf3g",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/bb0d6797c11bcc0eaf4e646eded8a78242a0818e",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/24e7195af890b4d9fc86d4d7c09d8ba8e58b3f8c",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/c9bff513e0c19e2f38ea49ed689695907ea2a8c5",
        "width" : 160
      } ],
      "name" : "Disiz La Peste",
      "popularity" : 62,
      "type" : "artist",
      "uri" : "spotify:artist:7rz6ZZErn5YFDteXKhyf3g"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2kIs76sEGiulKeqetZq6ua"
      },
      "followers" : {
        "href" : null,
        "total" : 13773
      },
      "genres" : [ "francoton", "trap francais" ],
      "href" : "https://api.spotify.com/v1/artists/2kIs76sEGiulKeqetZq6ua",
      "id" : "2kIs76sEGiulKeqetZq6ua",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/d37ce9f3bae5190a6e028035e6220d3303036fe7",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/a015c040ed60c40846c5f419ee0a17742f6598bf",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/80d5ae0e81456b4835d2ae80076b70f9e0b3fead",
        "width" : 64
      } ],
      "name" : "Jok'air",
      "popularity" : 61,
      "type" : "artist",
      "uri" : "spotify:artist:2kIs76sEGiulKeqetZq6ua"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/02kJSzxNuaWGqwubyUba0Z"
      },
      "followers" : {
        "href" : null,
        "total" : 2159559
      },
      "genres" : [ "pop rap", "rap", "underground pop rap" ],
      "href" : "https://api.spotify.com/v1/artists/02kJSzxNuaWGqwubyUba0Z",
      "id" : "02kJSzxNuaWGqwubyUba0Z",
      "images" : [ {
        "height" : 659,
        "url" : "https://i.scdn.co/image/1c7f2b8152422fc8c6022debaaa05cd86931ceed",
        "width" : 1000
      }, {
        "height" : 422,
        "url" : "https://i.scdn.co/image/1d2a5f6cb6b48debca81e613cde4c013f0676ac7",
        "width" : 640
      }, {
        "height" : 132,
        "url" : "https://i.scdn.co/image/796c13f41dbfa38c34c5eef8d76fdd9d1eaeece2",
        "width" : 200
      }, {
        "height" : 42,
        "url" : "https://i.scdn.co/image/d42f3c2f7b3ced4de3d675ceb7cef67fcd00c934",
        "width" : 64
      } ],
      "name" : "G-Eazy",
      "popularity" : 88,
      "type" : "artist",
      "uri" : "spotify:artist:02kJSzxNuaWGqwubyUba0Z"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/738wLrAtLtCtFOLvQBXOXp"
      },
      "followers" : {
        "href" : null,
        "total" : 2150306
      },
      "genres" : [ "dance pop", "edm", "electro house", "moombahton", "pop", "tropical house" ],
      "href" : "https://api.spotify.com/v1/artists/738wLrAtLtCtFOLvQBXOXp",
      "id" : "738wLrAtLtCtFOLvQBXOXp",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/c330a7f6245ebd393a57f763a32d8d8a0aa4f34d",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/084a657d9ed0a92a1ddd5bd6e428978b41ba0c59",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/7a953b8fde9df763099fc433dbc0c4ecda0af582",
        "width" : 160
      } ],
      "name" : "Major Lazer",
      "popularity" : 91,
      "type" : "artist",
      "uri" : "spotify:artist:738wLrAtLtCtFOLvQBXOXp"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C"
      },
      "followers" : {
        "href" : null,
        "total" : 7235426
      },
      "genres" : [ "dance pop", "pop" ],
      "href" : "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C",
      "id" : "0du5cEVh5yTK9QJze8zA0C",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/aa32d6d4ca2467974403518dd3ebfe8831c5ced1",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/63cad86cb183568085a4e5f0be86aa187cc511e4",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/5461dcbb3f23e1df62d85c8273fc49cc4edd49d5",
        "width" : 160
      } ],
      "name" : "Bruno Mars",
      "popularity" : 92,
      "type" : "artist",
      "uri" : "spotify:artist:0du5cEVh5yTK9QJze8zA0C"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/68DWke2VjdDmA75aJX5C57"
      },
      "followers" : {
        "href" : null,
        "total" : 559238
      },
      "genres" : [ "dirty south rap", "hip hop", "pop rap", "rap", "southern hip hop", "trap music" ],
      "href" : "https://api.spotify.com/v1/artists/68DWke2VjdDmA75aJX5C57",
      "id" : "68DWke2VjdDmA75aJX5C57",
      "images" : [ {
        "height" : 500,
        "url" : "https://i.scdn.co/image/ac4dac096c6684852d408d4591a55f2b9f2fced1",
        "width" : 500
      }, {
        "height" : 200,
        "url" : "https://i.scdn.co/image/1f4a5c7aa1f58f54c476a60dcde142a2363b399c",
        "width" : 200
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/bdebbe8e32e5ef4a6a73c4f3030acba6f872ae34",
        "width" : 64
      } ],
      "name" : "Yelawolf",
      "popularity" : 72,
      "type" : "artist",
      "uri" : "spotify:artist:68DWke2VjdDmA75aJX5C57"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6Xc0KDqzw5u6EQLgdfeoKO"
      },
      "followers" : {
        "href" : null,
        "total" : 36327
      },
      "genres" : [ "francoton", "french hip hop", "trap francais" ],
      "href" : "https://api.spotify.com/v1/artists/6Xc0KDqzw5u6EQLgdfeoKO",
      "id" : "6Xc0KDqzw5u6EQLgdfeoKO",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/1b8ac4af5a9a8097ec0cef923bfc23b653319ea4",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/733767a6cebd458140dad3be2cf493548e0e8677",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/fd9bfe94d17232f11750da91f1caa01729ca63d8",
        "width" : 160
      } ],
      "name" : "Georgio",
      "popularity" : 59,
      "type" : "artist",
      "uri" : "spotify:artist:6Xc0KDqzw5u6EQLgdfeoKO"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh"
      },
      "followers" : {
        "href" : null,
        "total" : 1293701
      },
      "genres" : [ "indie pop", "indietronica", "modern rock", "pop", "shimmer pop" ],
      "href" : "https://api.spotify.com/v1/artists/77SW9BnxLY8rJ0RciFqkHh",
      "id" : "77SW9BnxLY8rJ0RciFqkHh",
      "images" : [ {
        "height" : 1000,
        "url" : "https://i.scdn.co/image/b89a03080133cc03cbb4e6e783f01804c1f3f6bd",
        "width" : 1000
      }, {
        "height" : 640,
        "url" : "https://i.scdn.co/image/dc71e3b138c8cf49d63d0a39db4ff0d48640fe60",
        "width" : 640
      }, {
        "height" : 200,
        "url" : "https://i.scdn.co/image/298a65ebcaeaef2d83cc0c5519c881169ca55ddb",
        "width" : 200
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ee44cdddb1d0639561576cbb4b84daf4b7179622",
        "width" : 64
      } ],
      "name" : "The Neighbourhood",
      "popularity" : 77,
      "type" : "artist",
      "uri" : "spotify:artist:77SW9BnxLY8rJ0RciFqkHh"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/6TIYQ3jFPwQSRmorSezPxX"
      },
      "followers" : {
        "href" : null,
        "total" : 804532
      },
      "genres" : [ "hip hop", "pop rap", "rap", "southern hip hop", "trap music" ],
      "href" : "https://api.spotify.com/v1/artists/6TIYQ3jFPwQSRmorSezPxX",
      "id" : "6TIYQ3jFPwQSRmorSezPxX",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/596309b80b738e4524bc70ba47fb3c7e837d6fbf",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/1744e79565d68f08684bb3ddd90dd44b7c1e3f05",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/724774ed8b291ea961d2dfb775499c2c9bee0218",
        "width" : 160
      } ],
      "name" : "Machine Gun Kelly",
      "popularity" : 82,
      "type" : "artist",
      "uri" : "spotify:artist:6TIYQ3jFPwQSRmorSezPxX"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
      },
      "followers" : {
        "href" : null,
        "total" : 1314292
      },
      "genres" : [ "dwn trap", "pop rap", "rap", "trap music" ],
      "href" : "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
      "id" : "0Y5tJX1MQlPlqiwlOH1tJY",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/bbab705fecb1133cf5d3580f7cdb32966797b7e4",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/78b7b6b6b69baa0fe4352e2edd349895cf737141",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/270570e16abb405058f22a9d35a5f27aab0211f4",
        "width" : 160
      } ],
      "name" : "Travis Scott",
      "popularity" : 94,
      "type" : "artist",
      "uri" : "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"
      },
      "followers" : {
        "href" : null,
        "total" : 8241721
      },
      "genres" : [ "dance pop", "pop", "pop christmas", "pop rock" ],
      "href" : "https://api.spotify.com/v1/artists/04gDigrS5kc9YWfZHwBETP",
      "id" : "04gDigrS5kc9YWfZHwBETP",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/5eb1ba2ee2551e02006a433b4e1ec98075645e9b",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/f2833af05c1ae1278585ae7de0dc59b2130f27bf",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/67c4150ffb16cba6dfdf45d23382c5c2e5c91156",
        "width" : 160
      } ],
      "name" : "Maroon 5",
      "popularity" : 88,
      "type" : "artist",
      "uri" : "spotify:artist:04gDigrS5kc9YWfZHwBETP"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/2P5sC9cVZDToPxyomzF1UH"
      },
      "followers" : {
        "href" : null,
        "total" : 604162
      },
      "genres" : [ "dirty south rap", "hip hop", "pop rap", "rap", "southern hip hop", "trap music", "underground hip hop" ],
      "href" : "https://api.spotify.com/v1/artists/2P5sC9cVZDToPxyomzF1UH",
      "id" : "2P5sC9cVZDToPxyomzF1UH",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/e0dad297864612528dbedd52e0cd8e6fa7ee4b5a",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/f353e3a8a692a878d744ec6b6a4fce25af19b5f7",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/94dbeaa50cd983a7d4f8f3d74627cc4572627c66",
        "width" : 160
      } ],
      "name" : "Joey Bada$$",
      "popularity" : 79,
      "type" : "artist",
      "uri" : "spotify:artist:2P5sC9cVZDToPxyomzF1UH"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/3CnCGFxXbOA8bAK54jR8js"
      },
      "followers" : {
        "href" : null,
        "total" : 60418
      },
      "genres" : [ "francoton", "trap francais" ],
      "href" : "https://api.spotify.com/v1/artists/3CnCGFxXbOA8bAK54jR8js",
      "id" : "3CnCGFxXbOA8bAK54jR8js",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ec2846a65ceb2d272d308bbbbd575f5f6be89ba5",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/8eeeed322df8bba3878b65c0ad67c0f67f3d9f3c",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/c8b274429019ef4eeb062c2787aad88b8443071c",
        "width" : 160
      } ],
      "name" : "Vald",
      "popularity" : 64,
      "type" : "artist",
      "uri" : "spotify:artist:3CnCGFxXbOA8bAK54jR8js"
    }, {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/4xRYI6VqpkE3UwrDrAZL8L"
      },
      "followers" : {
        "href" : null,
        "total" : 1291679
      },
      "genres" : [ "pop rap", "rap" ],
      "href" : "https://api.spotify.com/v1/artists/4xRYI6VqpkE3UwrDrAZL8L",
      "id" : "4xRYI6VqpkE3UwrDrAZL8L",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/9aab47129b8405aa80afc5590ed295b7899154f1",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/6477b1188b0a70dbd1ffa34aa0407261fa168723",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/c5489e624a05f7f7dea92accf713cb0e03c19940",
        "width" : 160
      } ],
      "name" : "Logic",
      "popularity" : 88,
      "type" : "artist",
      "uri" : "spotify:artist:4xRYI6VqpkE3UwrDrAZL8L"
    } ],
    "total" : 50,
    "limit" : 20,
    "offset" : 0,
    "previous" : null,
    "href" : "https://api.spotify.com/v1/me/top/artists",
    "next" : "https://api.spotify.com/v1/me/top/artists?limit=20&offset=20"
    };
  constructor() { }

  ngOnInit() {
  }

  orderByPopularity(){

  }

}
