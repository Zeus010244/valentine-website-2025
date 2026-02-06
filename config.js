// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

    // Your Valentine's name
    valentineName: "Harshika",

    // Floating photos
    floatingImages: [
        "https://res.cloudinary.com/ddtgpwp3b/image/upload/v1770379211/WhatsApp_Image_2026-02-06_at_17.26.01_1_pnyhk4.jpg",
        "https://res.cloudinary.com/ddtgpwp3b/image/upload/v1770379210/WhatsApp_Image_2026-02-06_at_17.25.42_pxeiga.jpg",
        "https://res.cloudinary.com/ddtgpwp3b/image/upload/v1770379210/WhatsApp_Image_2026-02-06_at_17.27.13_ezvb9o.jpg",
        "https://res.cloudinary.com/ddtgpwp3b/image/upload/v1770379210/WhatsApp_Image_2026-02-06_at_17.26.02_plnxdm.jpg",
        "https://res.cloudinary.com/ddtgpwp3b/image/upload/v1770379209/WhatsApp_Image_2026-02-06_at_17.26.01_miqj7b.jpg"
    ],

    // Page title
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026 and forever and ever and ever until we both die hand in hand? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    loveMessages: {
        extreme: "OMG YAAAAAAAAAAAAAAAAAYYYYYYYY I LOVE YOUUUU SOOOOO MUCHHHH",
        high: "sirf 100% baby mein toh aapse isse 10000000 guna zyada pyaar karta hu",
        normal: "aw sirf ittu sa pyaar karti ho kya? i love you soo much more"
    },

    celebration: {
        title: "YAAAYAYAYAYAYYAYAYAYAYAYA IM SOOOO HAAPPPPPYYYYYYYYYYYYYYY!!!!!!!!!!!!",
        message: "I love you so much my sweet baby girl, youre the perfect girlfriend for me i love you with all my heart i promise i will work to give you the best life you deserve, i cant wait to spend the rest of my life with you i will never stop making you laugh and irritating you it is literally my favourite thing ever second only to you, i love you so much mrs rustomji happy valentines day my sweet baby girl ❤️",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/ddtgpwp3b/video/upload/v1770362903/Apocalypse_-_Cigarettes_After_Sex_o9yhem.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// REQUIRED
window.VALENTINE_CONFIG = CONFIG;



// ============================================
// FLOATING IMAGE SYSTEM
// ============================================

function createFloatingImage() {

    const images = window.VALENTINE_CONFIG.floatingImages;

    if (!images || images.length === 0) return;

    const img = document.createElement("img");

    img.src = images[Math.floor(Math.random() * images.length)];

    img.style.position = "fixed";
    img.style.bottom = "-100px";
    img.style.left = Math.random() * 100 + "vw";

    const size = 60 + Math.random() * 50;

    img.style.width = size + "px";
    img.style.height = size + "px";

    img.style.pointerEvents = "none";
    img.style.zIndex = "0";

    const duration = 12 + Math.random() * 8;

    img.style.animation = `floatPhoto ${duration}s linear forwards`;

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, duration * 1000);
}


// spawn images
setInterval(createFloatingImage, 1000);


// animation CSS
const style = document.createElement("style");

style.innerHTML = `
@keyframes floatPhoto {
    0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh) rotate(360deg);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);
