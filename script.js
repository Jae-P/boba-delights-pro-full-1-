const MENU_ITEMS = [
  {
    "category": "fruit-smoothies",
    "name": "Strawberry Smoothie",
    "price": "$6.99",
    "desc": "Fresh strawberry smoothie with fruit jellies and optional boba.",
    "image": "assets/menu/BobaDelight_Strawberry.jpg"
  },
  {
    "category": "fruit-smoothies",
    "name": "Mango Smoothie",
    "price": "$6.99",
    "desc": "Tropical mango blended smooth, perfect with classic boba.",
    "image": "assets/menu/BobaDelight_Mango.jpg"
  },
  {
    "category": "fruit-smoothies",
    "name": "Pineapple Smoothie",
    "price": "$6.99",
    "desc": "Bright pineapple smoothie, icy and refreshing.",
    "image": "assets/menu/BobaDelight_Pineapple.jpg"
  },
  {
    "category": "fruit-smoothies",
    "name": "Mixed Fruit Smoothie",
    "price": "$6.99",
    "desc": "Choose from banana, kiwi, peach, lychee or watermelon flavors.",
    "image": "assets/menu/BobaDelight_StrawberryWithBoba.jpg"
  },
  {
    "category": "milk-teas",
    "name": "Taro Milk Tea",
    "price": "$6.99",
    "desc": "Creamy purple taro milk tea with tapioca pearls.",
    "image": "assets/menu/BobaDelight_ButterflyPeaTea.jpg"
  },
  {
    "category": "milk-teas",
    "name": "Thai Milk Tea",
    "price": "$6.99",
    "desc": "Sweet Thai-style black tea with milk and boba.",
    "image": "assets/menu/BobaDelight_StrawberryWithBoba.jpg"
  },
  {
    "category": "milk-teas",
    "name": "Matcha Milk Tea",
    "price": "$6.99",
    "desc": "Earthy matcha blended with milk and chewy boba pearls.",
    "image": "assets/menu/BobaDelight_GreenTeaLychee.jpg"
  },
  {
    "category": "milk-teas",
    "name": "Brown Sugar Milk Tea",
    "price": "$6.99",
    "desc": "Brown sugar swirl with milk tea and loaded boba.",
    "image": "assets/menu/BobaDelight_Pineapple.jpg"
  },
  {
    "category": "ice-teas",
    "name": "Lychee Ice Tea",
    "price": "$6.99",
    "desc": "Chilled tea with lychee flavor and fruit pieces.",
    "image": "assets/menu/BobaDelight_GreenTeaLychee.jpg"
  },
  {
    "category": "ice-teas",
    "name": "Peach Ice Tea",
    "price": "$6.99",
    "desc": "Peach flavored iced tea, light and refreshing.",
    "image": "assets/menu/BobaDelight_GreenTeaLychee.jpg"
  },
  {
    "category": "ice-teas",
    "name": "Butterfly Pea Tea",
    "price": "$6.99",
    "desc": "Blue-purple butterfly pea tea with citrusy finish.",
    "image": "assets/menu/BobaDelight_ButterflyPeaTea.jpg"
  },
  {
    "category": "ice-teas",
    "name": "Lemonade Ice Tea",
    "price": "$6.99",
    "desc": "Iced tea with classic lemonade twist.",
    "image": "assets/menu/BobaDelight_Strawberry.jpg"
  },
  {
    "category": "snacks",
    "name": "Pork Fried Gyoza (6 pc)",
    "price": "$5.00",
    "desc": "Crispy pork and veggie dumplings with dipping sauce.",
    "image": "assets/menu/BobaDelight_FriedGyoza.jpg"
  },
  {
    "category": "snacks",
    "name": "Pork Steamed Gyoza (6 pc)",
    "price": "$5.50",
    "desc": "Soft steamed gyoza, juicy and savory.",
    "image": "assets/menu/BobaDelight_SteamedGyoza.jpg"
  },
  {
    "category": "snacks",
    "name": "Beef Yakisoba",
    "price": "$6.50",
    "desc": "Stir fry noodles with beef, veggies and sauce.",
    "image": "assets/menu/BobaDelight_Hero.jpg"
  },
  {
    "category": "snacks",
    "name": "Veggie Yakisoba",
    "price": "$6.00",
    "desc": "Stir fry noodles with veggies, no meat.",
    "image": "assets/menu/BobaDelight_Hero.jpg"
  },
  {
    "category": "snacks",
    "name": "Octopus Takoyaki (5 pc)",
    "price": "$7.50",
    "desc": "Takoyaki balls topped with sauce, mayo and bonito flakes.",
    "image": "assets/menu/BobaDelight_Tokoyaki.jpg"
  },
  {
    "category": "toppings",
    "name": "Rainbow Jelly",
    "price": "+$0.75",
    "desc": "Colorful jelly cubes with fruity flavor.",
    "image": "assets/menu/BobaDelight_Hero.jpg"
  },
  {
    "category": "toppings",
    "name": "Lychee Jelly",
    "price": "+$0.75",
    "desc": "Sweet lychee flavored jelly pieces.",
    "image": "assets/menu/BobaDelight_Hero.jpg"
  },
  {
    "category": "toppings",
    "name": "Boba / Crystal Boba",
    "price": "+$0.75",
    "desc": "Classic tapioca pearls or clear crystal boba.",
    "image": "assets/menu/BobaDelight_StrawberryWithBoba.jpg"
  },
  {
    "category": "toppings",
    "name": "Fresh Fruit Toppings",
    "price": "+$0.75",
    "desc": "Strawberries, pineapple, mango, kiwi or watermelon.",
    "image": "assets/menu/BobaDelight_Strawberry.jpg"
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("menu-grid");
  const tabs = document.querySelectorAll(".menu-tab");

  function renderMenu(category) {
    if (!grid) return;
    grid.innerHTML = "";
    const items = MENU_ITEMS.filter((item) => item.category === category);
    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-card";
      card.innerHTML = `
        <div class="menu-image-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-image" />
        </div>
        <div class="menu-body">
          <div class="menu-title-row">
            <h4 class="menu-title">${item.name}</h4>
            <span class="menu-price">${item.price}</span>
          </div>
          <p class="menu-desc">${item.desc}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderMenu(tab.dataset.category || "fruit-smoothies");
    });
  });

  renderMenu("fruit-smoothies");

  const form = document.getElementById("quick-order-form");
  const resultEl = document.getElementById("quick-order-result");
  if (form && resultEl) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const item = data.get("item");
      const size = data.get("size");
      const notes = data.get("notes");
      let preview = `Preview: ${item || "Item"}`;
      if (size) preview += ` · ${size}`;
      if (notes) preview += `. Notes: ${notes}`;
      resultEl.textContent =
        preview +
        " — Later you can connect this to email, WhatsApp, or your POS system.";
    });
  }

  const playBtn = document.getElementById("play-btn");
  const board = document.getElementById("game-board");
  const scoreEl = document.getElementById("score");
  let score = 0;
  let tiles = [];
  const SIZE = 4;

  function buildBoard() {
    if (!board) return;
    board.innerHTML = "";
    tiles = [];
    const nums = Array.from({ length: SIZE * SIZE - 1 }, (_, i) => i + 1);
    nums.push(null);
    nums.sort(() => Math.random() - 0.5);
    nums.forEach((n) => {
      const tile = document.createElement("div");
      tile.classList.add("bubble-tile");
      if (n === null) {
        tile.classList.add("empty");
      } else {
        tile.textContent = n;
      }
      tiles.push(tile);
      board.appendChild(tile);
    });
    tiles.forEach((tile, index) => {
      tile.addEventListener("click", () => handleTileClick(index));
    });
    score = 0;
    updateScore();
  }

  function updateScore() {
    if (scoreEl) scoreEl.textContent = score;
  }

  function getCoords(i) {
    return { row: Math.floor(i / SIZE), col: i % SIZE };
  }

  function handleTileClick(index) {
    const tile = tiles[index];
    if (tile.classList.contains("empty")) return;
    const emptyIndex = tiles.findIndex((t) => t.classList.contains("empty"));
    const { row, col } = getCoords(index);
    const { row: er, col: ec } = getCoords(emptyIndex);
    const isNeighbor =
      (row === er && Math.abs(col - ec) === 1) ||
      (col === ec && Math.abs(row - er) === 1);
    if (!isNeighbor) return;

    const tmp = tile.innerHTML;
    tile.innerHTML = "";
    tile.classList.add("empty");
    const emptyTile = tiles[emptyIndex];
    emptyTile.innerHTML = tmp;
    emptyTile.classList.remove("empty");
    score += 10;
    updateScore();
  }

  if (playBtn && board) {
    playBtn.addEventListener("click", buildBoard);
    buildBoard();
  }
});
