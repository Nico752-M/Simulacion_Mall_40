const categories = [
  { id: "hamburguesas", name: "Hamburguesas", icon: "🍔" },
  { id: "perros", name: "Perros", icon: "🌭" },
  { id: "asados", name: "Asados y Más", icon: "🥩" },
  { id: "entradas", name: "Entradas", icon: "🍟" },
  { id: "salchipapa", name: "Salchipapa", icon: "🍳" },
  { id: "toppings", name: "Toppings", icon: "🧀" },
];

const menuItems = [
  // Hamburguesas
  { id: "h1", name: "Palace", price: 29000, description: "Carne Angus a la plancha 200 gr, costilla deshuesada, cebolla caramelizada, salsa BBQ Jack Daniel's, queso mozzarella, lechuga crespa y tomate", category: "hamburguesas" },
  { id: "h2", name: "Candy", price: 27000, description: "Carne Angus a la plancha 200 gr, piña asada, queso mozzarella, tocineta, lechuga crespa, tomate y mayonesa especiada", category: "hamburguesas" },
  { id: "h3", name: "Crunchy Chicken", price: 25000, description: "Pollo crujiente, salsa de queso cheddar, tomate, lechuga crespa, tocineta, queso mozzarella, mayonesa especiada", category: "hamburguesas" },
  { id: "h4", name: "Bacon Chicken", price: 24000, description: "Pechuga de pollo a la plancha 170 gr, salsa de queso cheddar, lechuga crespa, tomate, tocineta, queso mozzarella y mayonesa especiada", category: "hamburguesas" },
  { id: "h5", name: "Tequeña", price: 31000, description: "Pan teque relleno de queso, carne Angus a la plancha 200gr, costilla deshuesada, queso mozzarella, tocineta, mayonesa especiada y salsa BBQ Jack Daniel's", category: "hamburguesas" },
  { id: "h6", name: "Doble Especial", price: 31000, description: "Doble porción de carne Angus 200gr, doble porción de queso mozzarella, cebolla caramelizada, tomate verde, tocineta, salsa BBQ especial con maracuyá en reducción de whisky", category: "hamburguesas" },
  { id: "h7", name: "Mix", price: 30000, description: "Carne Angus 200 gr a la plancha, pollo crujiente, doble porción de queso mozzarella, lechuga, tomate, mayonesa premium, salsa de leña y BBQ", category: "hamburguesas" },
  { id: "h8", name: "Burgerfestival 1 Puesto 2024", price: 29000, description: "Carne Angus 200gr, mayonesa premium, queso Philadelphia, tocineta caramelizada, aros de cebolla y tomate verde", category: "hamburguesas" },
  { id: "h9", name: "Festiburger 3 Puesto 2021", price: 28000, description: "Carne Angus a la plancha 200gr, queso costeño, maduro caramelizado, salsa de maíz, lechuga crespa y tocineta", category: "hamburguesas" },
  { id: "h10", name: "Callejera", price: 32000, description: "Doble porción de carne Angus 200 gr, tomate verde, salsa rosada, salsa de piña, cebolla caramelizada, ripio papa, tocineta, bañada en queso mozzarella gratinado", category: "hamburguesas" },
  // Perros
  { id: "p1", name: "Festival 2024", price: 28000, description: "Salchicha americana, cerdo desmechado, maduro caramelizado, salsa verde, papa francesa, gratinado en mezcla de queso mozzarella y cheddar, maicitos y tocineta", category: "perros" },
  { id: "p2", name: "Palace", price: 26000, description: "Salchicha americana, cerdo desmechado, tocineta, cebolla caramelizada, salsa BBQ, salsa de queso cheddar y ripio de papa", category: "perros" },
  { id: "p3", name: "Hawaiano", price: 26000, description: "Salchicha americana, cebolla caramelizada, piña asada, salsa de queso cheddar, queso mozzarella, ripio de papa, tocineta y mayonesa especiada", category: "perros" },
  { id: "p4", name: "Clásico", price: 22000, description: "Salchicha americana, salsa de queso cheddar, tocineta, queso mozzarella, ripio de papa, mayonesa especiada y BBQ", category: "perros" },
  { id: "p5", name: "Perro Callejero", price: 25000, description: "Salchicha americana, cebolla caramelizada, ripio de papa, salsa rosada y de piña, tocineta, cubierta de queso mozzarella gratinada", category: "perros" },
  // Asados
  { id: "a1", name: "Churrasco", price: 38000, description: "350 gr de churrasco de res corte mariposa acompañado de ensalada, guacamole, papitas, mayonesa especiada y chimichurry", category: "asados" },
  { id: "a2", name: "Filete de Pollo", price: 31000, description: "280 gr de pechuga a la plancha acompañada de ensalada, papita, mayonesa especiada, guacamole y chimichurry", category: "asados" },
  { id: "a3", name: "Punta de Anca", price: 44000, description: "350 gr de corte punta de anca de res, acompañado de ensalada, papitas, guacamole y chimichurry", category: "asados" },
  { id: "a4", name: "Baby Bee", price: 41000, description: "350 gr baby bee de res corte especial acompañado de ensalada y papitas", category: "asados" },
  // Entradas
  { id: "e1", name: "Alitas", price: 21000, description: "7 alitas acompañadas de papitas, bañadas en salsa QQB agridulce o picante", category: "entradas" },
  { id: "e2", name: "Nachos", price: 21000, description: "Salsa de queso cheddar, guacamole, pico de gallo y tocineta", category: "entradas" },
  { id: "e3", name: "Aros de Cebolla", price: 16000, description: "8 aros de cebolla acompañados de salsa de queso cheddar, mayonesa especiada y guacamole", category: "entradas" },
  { id: "e4", name: "Dedos de Queso", price: 14000, description: "4 deditos de queso acompañados de salsa de queso y tocineta", category: "entradas" },
  { id: "e5", name: "Crispy", price: 17000, description: "Papitas a la francesa, pollo en tiras apanado especial de la casa en Chettos, salsa agridulce hecha en casa y mayonesa especiada", category: "entradas" },
  // Salchipapa
  { id: "s1", name: "Salchipalace", price: 30000, description: "Papa francesa o amarilla, salchicha ranchera, cerdo desmechado en salsa BBQ, tocineta, tomate verde en dados, queso gratinado, maicitos, salsa BBQ, mayonesa especiada y salsa de piña", category: "salchipapa" },
  { id: "s2", name: "Salchichicharrón", price: 32000, description: "Papa francesa o amarilla, salchicha ranchera, salsa BBQ y de leña, queso mozzarella gratinado, chorizo de pollo, chicharrón de cerdo y guacamole", category: "salchipapa" },
  { id: "s3", name: "Salchicallejera", price: 35000, description: "Papa francesa o amarilla, salchicha ranchera, salsa de piña, ripio de papa, crema agria, cerdo desmechado en BBQ, tomate verde en dados, salsa verde de finas hiervas, queso mozzarella, gratinado y tocineta premium", category: "salchipapa" },
  // Toppings
  { id: "t1", name: "Carne de Cerdo Desmechada", price: 8000, description: "Porción de carne de cerdo desmechada", category: "toppings" },
  { id: "t2", name: "Carne de Hamburguesa", price: 9000, description: "Porción adicional de carne para hamburguesa", category: "toppings" },
  { id: "t3", name: "Piña Asada", price: 3000, description: "Rodaja de piña asada a la plancha", category: "toppings" },
  { id: "t4", name: "Salsa Porción 2 onz", price: 2000, description: "Porción de salsa a elección", category: "toppings" },
  { id: "t5", name: "Tocineta", price: 5000, description: "Porción de tocineta crujiente", category: "toppings" },
  { id: "t6", name: "Queso Fantasma", price: 6000, description: "Queso derretido especial", category: "toppings" },
  { id: "t7", name: "Guacamole", price: 3000, description: "Porción de guacamole fresco", category: "toppings" },
  { id: "t8", name: "Pico de Gallo", price: 3000, description: "Porción de pico de gallo", category: "toppings" },
  { id: "t9", name: "Cebolla Caramelizada", price: 3000, description: "Porción de cebolla caramelizada", category: "toppings" },
  { id: "t10", name: "Ripio de Papa", price: 3000, description: "Porción de ripio de papa crujiente", category: "toppings" },
  { id: "t11", name: "Pollo de Burguer Apanado", price: 8000, description: "Porción de pollo apanado", category: "toppings" },
  { id: "t12", name: "Chorizo de Cerdo", price: 7000, description: "Porción de chorizo de cerdo", category: "toppings" },
];

let activeCategory = "hamburguesas";

function formatPrice(price) {
  return `$${price.toLocaleString("es-CO")}`;
}

function renderNav() {
  const navContainer = document.getElementById("nav-container");
  navContainer.innerHTML = categories
    .map(
      (cat) => `
      <button class="nav-btn ${activeCategory === cat.id ? 'active' : ''}" 
              data-category="${cat.id}">
        ${cat.icon}
        ${cat.name}
      </button>
  `
    )
    .join("");

  navContainer.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderNav();
      renderMenu();
    });
  });
}

function renderMenu() {
  const menuContent = document.getElementById("menu-content");
  const category = categories.find((c) => c.id === activeCategory);
  const items = menuItems.filter((item) => item.category === activeCategory);

  menuContent.innerHTML = `
    <div class="section">
      <div class="section-header">
        <span class="icon">${category.icon}</span>
        <h2>${category.name}</h2>
        <div class="line"></div>
      </div>
      <div class="menu-grid">
        ${items
          .map(
            (item, index) => `
            <div class="menu-card" style="animation-delay: ${index * 0.1}s">
              <div class="card-header">
                <h3>${item.name}</h3>
                <span class="price">${formatPrice(item.price)}</span>
              </div>
              <p class="card-description">${item.description}</p>
            </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// Initialize
renderNav();
renderMenu();