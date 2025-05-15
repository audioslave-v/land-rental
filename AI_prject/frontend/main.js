// Реєстрація
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    document.getElementById('registerMessage').textContent = data.message;
  });
}

// Вхід
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      document.getElementById('loginMessage').textContent = 'Вхід успішний!';
      setTimeout(() => window.location.href = 'index.html', 1000);
    } else {
      document.getElementById('loginMessage').textContent = data.message;
    }
  });
}

// Приклад даних оголошень
const listings = [
  {
    id: 1,
    title: "Ділянка в екологічному районі",
    location: "Київ",
    type: "city",
    size: 4,
    price: 2000,
    description: "Чудова ділянка в екологічному районі міста. Ідеально підходить для вирощування овочів та квітів.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 2,
    title: "Сільська ділянка з водою",
    location: "Львів",
    type: "village",
    size: 10,
    price: 1500,
    description: "Велика ділянка в сільській місцевості з власним колодязем. Родюча земля.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 3,
    title: "Приміська ділянка з садом",
    location: "Харків",
    type: "suburb",
    size: 8,
    price: 1800,
    description: "Ділянка з молодим фруктовим садом. Є електрика та вода.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 4,
    title: "Міська ділянка в центрі",
    location: "Одеса",
    type: "city",
    size: 3,
    price: 2500,
    description: "Невелика ділянка в центрі міста. Ідеально для квітника.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 5,
    title: "Велика сільська ділянка",
    location: "Київ",
    type: "village",
    size: 15,
    price: 1200,
    description: "Велика ділянка в сільській місцевості. Родюча земля, є під'їзд.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 6,
    title: "Ділянка в новому районі",
    location: "Львів",
    type: "city",
    size: 5,
    price: 2200,
    description: "Ділянка в новому районі міста. Всі комунікації підведені.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 7,
    title: "Приміська ділянка з озером",
    location: "Харків",
    type: "suburb",
    size: 12,
    price: 1700,
    description: "Ділянка біля озера. Чудове місце для відпочинку та вирощування рослин.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 8,
    title: "Ділянка в екопарку",
    location: "Одеса",
    type: "city",
    size: 4,
    price: 2300,
    description: "Ділянка в екопарку. Чисте повітря, зручне розташування.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 9,
    title: "Сільська ділянка з лісом",
    location: "Київ",
    type: "village",
    size: 20,
    price: 1000,
    description: "Велика ділянка біля лісу. Ідеально для вирощування грибів та ягід.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 10,
    title: "Ділянка в садовому товаристві",
    location: "Львів",
    type: "suburb",
    size: 6,
    price: 1900,
    description: "Ділянка в садовому товаристві. Є всі необхідні комунікації.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 11,
    title: "Міська ділянка з теплицею",
    location: "Харків",
    type: "city",
    size: 4,
    price: 2400,
    description: "Ділянка з готовою теплицею. Ідеально для вирощування овочів цілий рік.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 12,
    title: "Приміська ділянка з садом",
    location: "Одеса",
    type: "suburb",
    size: 8,
    price: 1600,
    description: "Ділянка з фруктовим садом. Є система поливу.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 13,
    title: "Сільська ділянка з ставком",
    location: "Київ",
    type: "village",
    size: 25,
    price: 900,
    description: "Велика ділянка з власним ставком. Ідеально для комплексного господарства.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 14,
    title: "Ділянка в новому мікрорайоні",
    location: "Львів",
    type: "city",
    size: 5,
    price: 2100,
    description: "Ділянка в новому мікрорайоні. Всі комунікації підведені.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 15,
    title: "Приміська ділянка з виноградником",
    location: "Харків",
    type: "suburb",
    size: 10,
    price: 1750,
    description: "Ділянка з молодим виноградником. Родюча земля.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 16,
    title: "Міська ділянка в парку",
    location: "Одеса",
    type: "city",
    size: 3,
    price: 2600,
    description: "Невелика ділянка в міському парку. Ідеально для квітника.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 17,
    title: "Сільська ділянка з лісом",
    location: "Київ",
    type: "village",
    size: 30,
    price: 800,
    description: "Дуже велика ділянка біля лісу. Ідеально для фермерського господарства.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 18,
    title: "Ділянка в екологічному районі",
    location: "Львів",
    type: "city",
    size: 4,
    price: 2300,
    description: "Ділянка в екологічному районі. Чисте повітря, зручне розташування.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 19,
    title: "Приміська ділянка з озером",
    location: "Харків",
    type: "suburb",
    size: 15,
    price: 1500,
    description: "Ділянка біля озера. Чудове місце для відпочинку та вирощування рослин.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  },
  {
    id: 20,
    title: "Ділянка в садовому товаристві",
    location: "Одеса",
    type: "suburb",
    size: 6,
    price: 1800,
    description: "Ділянка в садовому товаристві. Є всі необхідні комунікації.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500"
  }
];

// Функція для створення картки оголошення
function createListingCard(listing) {
  return `
    <div class="listing-card">
      <img src="${listing.image}" alt="${listing.title}" class="listing-image">
      <div class="listing-content">
        <h3 class="listing-title">${listing.title}</h3>
        <p class="listing-location">${listing.location}</p>
        <div class="listing-details">
          <span>${listing.size} соток</span>
          <span>${listing.type === 'city' ? 'Міська' : listing.type === 'suburb' ? 'Приміська' : 'Сільська'}</span>
        </div>
        <p class="listing-price">${listing.price} грн/міс</p>
        <p class="listing-description">${listing.description}</p>
        <button class="listing-button">Детальніше</button>
      </div>
    </div>
  `;
}

// Функція для відображення оголошень
function displayListings(listings) {
  const container = document.getElementById('listingsContainer');
  container.innerHTML = listings.map(listing => createListingCard(listing)).join('');
}

// Функція для фільтрації оголошень
function filterListings() {
  const location = document.getElementById('locationFilter').value;
  const type = document.getElementById('typeFilter').value;
  const minSize = document.getElementById('sizeFilter').value;

  const filtered = listings.filter(listing => {
    const locationMatch = !location || listing.location === location;
    const typeMatch = !type || listing.type === type;
    const sizeMatch = !minSize || listing.size >= parseInt(minSize);
    return locationMatch && typeMatch && sizeMatch;
  });

  displayListings(filtered);
}

// Додаємо обробники подій для фільтрів
document.getElementById('locationFilter').addEventListener('change', filterListings);
document.getElementById('typeFilter').addEventListener('change', filterListings);
document.getElementById('sizeFilter').addEventListener('input', filterListings);

// Відображаємо всі оголошення при завантаженні сторінки
displayListings(listings); 