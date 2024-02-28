const allHeros = [
    {
        id:1,
        name: "Iron man",
        profile: "Heart of Marvel",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmI8BCnMAysbfXdLq9xTXGcOhr4gq8z2dA3A&s",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae nobis nequ vel, quidem laboriosam quod minima doloremque placeat corrupti."
    },
    {
        id:2,
        name: "Thor",
        profile: "God Of Thunder",
        img: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/332d21ac73439818e6397627efa5cd46.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae nobis nequ vel, quidem laboriosam quod minima doloremque placeat corrupti."
    },
    {
        id:3,
        name: "Cap",
        profile: "Captain America",
        img: "https://wallpapers.com/images/high/captain-america-pictures-7nremf7zva9ap6d3.webp",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae nobis nequ vel, quidem laboriosam quod minima doloremque placeat corrupti."
    },
    {
        id:4,
        name: "Black Widow",
        profile: "Spy",
        img: "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2020/02/13060741/1.jpg",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae nobis nequ vel, quidem laboriosam quod minima doloremque placeat corrupti."
    },
    {
        id:5,
        name: "hawkeye",
        profile: "Archery ",
        img: "https://images.immediate.co.uk/production/volatile/sites/3/2019/07/avengers-8bb66cd.jpg?quality=90&webp=true&resize=727,485",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae nobis nequ vel, quidem laboriosam quod minima doloremque placeat corrupti."
    },
    {
        id:6,
        name: "Hulk",
        profile: "Hulk",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zuyOF7g_ROX-LqrXH5p5bmjdz8KBRO5Thoq4Rfz4Pg&s",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae nobis nequ vel, quidem laboriosam quod minima doloremque placeat corrupti."
    }
];

// select content form html page 

const img = document.getElementById("hero-img");
const name = document.getElementById("name");
const profile = document.getElementById("profile");
const info = document.getElementById("info");

// select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// select heros 

let currentHero = 0;
window.addEventListener("DOMContentLoaded", function () {
    showHeros(currentHero);
})

// add data in home page 

function showHeros(heros) {
    const hero = allHeros[heros];
    img.src = hero.img;
    name.textContent = hero.name;
    profile.textContent = hero.profile;
    info.textContent = hero.info;
}

// click on next btn 
nextBtn.addEventListener("click", function() {
    currentHero++;
    if (currentHero > allHeros.length -1) {
        currentHero = 0;
    }
    showHeros(currentHero);
})
// click on prev btn 
prevBtn.addEventListener("click", function() {
    currentHero--;
    if (currentHero < 0) {
        currentHero = allHeros.length -1;
    }
    showHeros(currentHero);
})