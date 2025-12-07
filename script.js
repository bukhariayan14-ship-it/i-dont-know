// Example Pet Data (Use real PS99 images in production)
const pets = [
    { name: "Huge Happy Rock", value: "55B", image: "https://via.placeholder.com/150", rarity: "HUGE", type: "huges" },
    { name: "Huge Tech Dragon", value: "120B", image: "https://via.placeholder.com/150", rarity: "HUGE", type: "huges" },
    { name: "Exclusive Neon Tiger", value: "3B", image: "https://via.placeholder.com/150", rarity: "EXCLUSIVE", type: "exclusives" },
    { name: "Exclusive Crystal Monkey", value: "4.5B", image: "https://via.placeholder.com/150", rarity: "EXCLUSIVE", type: "exclusives" },
    { name: "Mythic Galaxy Phoenix", value: "600M", image: "https://via.placeholder.com/150", rarity: "MYTHIC", type: "mythics" },
    { name: "Event Snowball Cat", value: "150M", image: "https://via.placeholder.com/150", rarity: "EVENT", type: "events" },
];

const grid = document.getElementById("petGrid");
const searchBar = document.getElementById("searchBar");
const tabs = document.querySelectorAll(".tab");

let activeTab = "huges";
let darkMode = true;

function displayPets() {
    grid.innerHTML = "";
    const text = searchBar.value.toLowerCase();

    pets.filter(p => p.type === activeTab)
        .filter(p => p.name.toLowerCase().includes(text))
        .forEach(pet => {
            grid.innerHTML += `
                <div class="card" onclick="openPopup('${pet.name}')">
                    <img src="${pet.image}" alt="${pet.name}">
                    <div class="pet-name">${pet.name}</div>
                    <div class="value">Value: ${pet.value}</div>
                    <div class="rarity-badge">${pet.rarity}</div>
                </div>
            `;
        });
}

function openPopup(name) {
    const pet = pets.find(p => p.name === name);
    document.getElementById("petDetailName").textContent = pet.name;
    document.getElementById("petDetailImage").src = pet.image;
    document.getElementById("petDetailValue").textContent = pet.value;
    document.getElementById("petDetailRarity").textContent = pet.rarity;
    document.getElementById("petDetail").style.display = 'flex';
}

function closePopup() {
    document.getElementById("petDetail").style.display = 'none';
}

searchBar.addEventListener("input", displayPets);
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        activeTab = tab.dataset.tab;
        displayPets();
    });
});

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-theme", darkMode);
    document.body.classList.toggle("light-theme", !darkMode);
}

displayPets();
