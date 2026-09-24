const pgs = [
    {
        name: "Rainbow PG for Gents",
        rating: 4.8,
        reviews: 475,
        phone: "+919963498114",
        address: "Bandepalya, Garvebhavi Palya, Bommanahalli",
        placeId: "ChIJPW5CB78VrjsRwdRyUcd8h34"
    },

    {
        name: "Sri Balaji PG for Gents",
        rating: 4.8,
        reviews: 81,
        phone: "+919632384527",
        address: "Popular Colony, Bommanahalli",
        placeId: "ChIJJ5WSv7cVrjsRUo0NNm9fDtY"
    },

    {
        name: "Sowmya Reddy PG for Gents",
        rating: 4.6,
        reviews: 140,
        phone: "+919985631121",
        address: "Popular Colony, Bommanahalli",
        placeId: "ChIJCWLSSF8VrjsRntF6zKnbB0o"
    },

    {
        name: "Thulasiram Mens PG",
        rating: 4.6,
        reviews: 389,
        phone: "+919035692286",
        address: "NGR Layout, Roopena Agrahara, Bommanahalli",
        placeId: "ChIJwWGz-fEUrjsRyaK-ly6opkw"
    },

    {
        name: "SRI ARUN PG FOR GENTS",
        rating: 4.6,
        reviews: 152,
        phone: "+917981966510",
        address: "Muniswamappa Layout, Bandepalya",
        placeId: "ChIJ0Xak_6oVrjsRPGRaBS11_Vo"
    },

    {
        name: "Sri Rama Gents PG",
        rating: 4.6,
        reviews: 46,
        phone: "+919705330351",
        address: "NGR Layout, Roopena Agrahara",
        placeId: "ChIJOeKVOhoVrjsR2XAvwPlW9pg"
    },

    {
        name: "Sivani Comforts PG For Gents",
        rating: 4.2,
        reviews: 381,
        phone: "+917090379379",
        address: "Begur Road, Bommanahalli",
        placeId: "ChIJN3do7rUVrjsRHruZpow6ghU"
    },

    {
        name: "Stayvel PG for Gents",
        rating: 4.2,
        reviews: 490,
        phone: "+919963490794",
        address: "Popular Colony, Mangammanapalya",
        placeId: "ChIJ3Z7QFpUUrjsRgXIhK6ocj4k"
    },

    {
        name: "Guru Lohitha PG for Gents",
        rating: 4.2,
        reviews: 69,
        phone: "+918884738453",
        address: "Popular Colony, Bommanahalli",
        placeId: "ChIJbRjdcZEVrjsRVYhY8Sm-xlM"
    },

    {
        name: "Vignesh Gents PG",
        rating: 4.3,
        reviews: 63,
        phone: "+919741800966",
        address: "Popular Colony, Bommanahalli",
        placeId: "ChIJeza4Mn4VrjsRyJSyZFc5ELU"
    },

    {
        name: "Sri Shiva PG for Gents",
        rating: 4.9,
        reviews: 34,
        phone: "+918050908896",
        address: "Virat Nagar, Bommanahalli",
        placeId: "ChIJKREskOMVrjsRvrBKP6S9MTs"
    },

    {
        name: "Sri Lakshmi Venkateswara PG",
        rating: 4.0,
        reviews: 70,
        phone: "+919989593566",
        address: "Mangammanapalya, Bommanahalli",
        placeId: "ChIJz_NT1UQVrjsRozKtiC0Rad0"
    }
];


const container =
    document.getElementById("pgContainer");

const searchInput =
    document.getElementById("searchInput");

const ratingFilter =
    document.getElementById("ratingFilter");

const sortSelect =
    document.getElementById("sortSelect");

const resultCount =
    document.getElementById("resultCount");


function showPGs() {

    let data = [...pgs];

    const search =
        searchInput.value.toLowerCase().trim();

    const minimumRating =
        Number(ratingFilter.value);


    // SEARCH
    data = data.filter(pg => {

        return (
            pg.name.toLowerCase().includes(search) ||
            pg.address.toLowerCase().includes(search)
        );

    });


    // RATING FILTER
    data = data.filter(pg => {

        return pg.rating >= minimumRating;

    });


    // SORT
    if (sortSelect.value === "rating") {

        data.sort(
            (a, b) => b.rating - a.rating
        );

    }


    if (sortSelect.value === "reviews") {

        data.sort(
            (a, b) => b.reviews - a.reviews
        );

    }


    if (sortSelect.value === "name") {

        data.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    container.innerHTML = "";


    resultCount.innerText =
        `${data.length} PGs found`;


    if (data.length === 0) {

        document.getElementById(
            "noResults"
        ).style.display = "block";

        return;

    }


    document.getElementById(
        "noResults"
    ).style.display = "none";


    data.forEach(pg => {

        const stars =
            "★".repeat(Math.round(pg.rating)) +
            "☆".repeat(
                5 - Math.round(pg.rating)
            );


        const mapsURL =
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pg.name + " " + pg.address)}&query_place_id=${pg.placeId}`;


        const card =
            document.createElement("div");

        card.className = "pg-card";


        card.innerHTML = `

            <div class="photo-gallery">

                <div class="photo-placeholder">
                    🏠
                </div>

                <div class="photo-placeholder">
                    📷
                </div>

            </div>


            <div class="pg-content">

                <div class="pg-name">
                    ${pg.name}
                </div>


                <div class="location">
                    📍 ${pg.address}
                </div>


                <div class="rating-row">

                    <span class="rating">
                        ${pg.rating}
                    </span>

                    <span class="stars">
                        ${stars}
                    </span>

                    <span class="review-count">
                        ${pg.reviews} reviews
                    </span>

                </div>


                <div class="phone">
                    📞 ${pg.phone}
                </div>


                <div class="buttons">

                    <a
                        class="btn call-btn"
                        href="tel:${pg.phone}"
                    >
                        📞 Call
                    </a>


                    <a
                        class="btn map-btn"
                        href="${mapsURL}"
                        target="_blank"
                    >
                        📍 Maps
                    </a>


                    <a
                        class="btn google-btn"
                        href="${mapsURL}"
                        target="_blank"
                    >
                        ⭐ Google Reviews & Photos
                    </a>

                </div>

            </div>
        `;


        container.appendChild(card);

    });

}


searchInput.addEventListener(
    "input",
    showPGs
);


ratingFilter.addEventListener(
    "change",
    showPGs
);


sortSelect.addEventListener(
    "change",
    showPGs
);


showPGs();