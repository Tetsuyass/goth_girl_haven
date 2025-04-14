////////////// LE SLIDER - DEBUT ///////////////





// j'ai repris un de mes codes (de mon portfolio pro) pour faire le slider, voila voila.





const slides = document.querySelectorAll(".slide");
const navButtons = document.querySelectorAll(".nav-button");
let currentIndex = 0;
let interval;

// Fonction pour afficher la slide souhaitée
function showSlide(index) {
    // Mise à jour de la position des slides
    const offset = -index * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

    // Mise à jour du bouton actif
    navButtons.forEach((button, i) => {
        button.classList.toggle("active", i === index);
    });

    // Met à jour l'index courant
    currentIndex = index;
}

// Fonction pour aller à une slide spécifique via les boutons
function goToSlide(index) {
    clearInterval(interval); // Stoppe l'auto défilement temporairement
    showSlide(index);
    startAutoSlide(); // Redémarre l'auto défilement après une interaction
}

// Fonction pour changer automatiquement de slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Démarre le défilement automatique
function startAutoSlide() {
    interval = setInterval(nextSlide, 4000); // Change toutes les 4 secondes
}

// Démarrage du slider
startAutoSlide();
showSlide(currentIndex); // Affiche la première slide


////////////// LE SLIDER - FIN ///////////////

////////////// FILTER BLOG (cest joli en vrai) ///////

function filterBlog(category) {
    const posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        const cat = post.getAttribute("data-category");
        if (category === "all" || cat === category) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    });
}
/////////////////////////////////////////////////////////