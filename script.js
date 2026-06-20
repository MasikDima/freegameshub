// ========== ПЕРЕВОДЫ ==========
const translations = {
    ru: {
        'hero-title': 'Бесплатные игры каждую неделю',
        'hero-subtitle': 'Забери лучшие игры бесплатно, пока не поздно!',
        'free-now': 'Бесплатно сейчас',
        'upcoming': 'Скоро будет',
        'filter-all': 'Все',
        'filter-expiring': '🔴 Истекает',
        'filter-new': '🟡 Новые',
        'filter-active': '🟢 Действуют',
        'subscribe-title': 'Не пропусти халяву!',
        'subscribe-text': 'Подпишись на уведомления в Telegram',
        'footer-text': 'Все ссылки ведут на официальные магазины.',
        'get-free': '🎁 ЗАБРАТЬ БЕСПЛАТНО',
        'days-left': 'дней',
        'hours-left': 'часов',
        'ending-today': '🔴 ЗАКАНЧИВАЕТСЯ СЕГОДНЯ!',
        'new-deal': '🟡 НОВАЯ РАЗДАЧА!',
        'still-free': '🟢 ВСЁ ЕЩЁ БЕСПЛАТНО',
        'usual-price': 'Обычная цена',
        'store': 'Магазин'
    },
    es: {
        'hero-title': 'Juegos gratis cada semana',
        'hero-subtitle': '¡Consigue los mejores juegos gratis antes de que sea tarde!',
        'free-now': 'Gratis ahora',
        'upcoming': 'Próximamente',
        'filter-all': 'Todos',
        'filter-expiring': '🔴 Termina pronto',
        'filter-new': '🟡 Nuevos',
        'filter-active': '🟢 Activos',
        'subscribe-title': '¡No te pierdas nada!',
        'subscribe-text': 'Suscríbete a las notificaciones de Telegram',
        'footer-text': 'Todos los enlaces llevan a tiendas oficiales.',
        'get-free': '🎁 CONSEGUIR GRATIS',
        'days-left': 'días',
        'hours-left': 'horas',
        'ending-today': '🔴 ¡TERMINA HOY!',
        'new-deal': '🟡 ¡NUEVA OFERTA!',
        'still-free': '🟢 TODAVÍA GRATIS',
        'usual-price': 'Precio habitual',
        'store': 'Tienda'
    },
    en: {
        'hero-title': 'Free Games Every Week',
        'hero-subtitle': 'Grab the best games for free before they\'re gone!',
        'free-now': 'Free Now',
        'upcoming': 'Coming Soon',
        'filter-all': 'All',
        'filter-expiring': '🔴 Expiring',
        'filter-new': '🟡 New',
        'filter-active': '🟢 Active',
        'subscribe-title': 'Don\'t Miss Out!',
        'subscribe-text': 'Subscribe to Telegram notifications',
        'footer-text': 'All links lead to official stores.',
        'get-free': '🎁 GET IT FREE',
        'days-left': 'days',
        'hours-left': 'hours',
        'ending-today': '🔴 ENDING TODAY!',
        'new-deal': '🟡 NEW DEAL!',
        'still-free': '🟢 STILL FREE',
        'usual-price': 'Usual price',
        'store': 'Store'
    }
};

// ========== БАЗА ИГР ==========
const games = [
    {
        id: 1,
        title: 'Grand Theft Auto V',
        image: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_V01-2560x1440-2d9d3593cf3305ae9a8162b1e82e28a5.jpg',
        usualPrice: '29.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/ru/p/grand-theft-auto-v',
        status: 'expiring',
        daysLeft: 0,
        description: {
            ru: 'Одна из лучших игр всех времён. Открытый мир, сюжет, онлайн-режим.',
            es: 'Uno de los mejores juegos de todos los tiempos. Mundo abierto, historia, modo online.',
            en: 'One of the best games of all time. Open world, story, online mode.'
        }
    },
    {
        id: 2,
        title: 'Frostpunk',
        image: 'https://cdn1.epicgames.com/offer/32bc7c6aaecd40eeb5f58bb83dba1e05/EGS_Frostpunk_11bitstudios_S2_1200x1600-8b36c5dbab248d09b9fc4d5af82a6af2',
        usualPrice: '29.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/ru/p/frostpunk',
        status: 'new',
        daysLeft: 6,
        description: {
            ru: 'Градостроительный симулятор выживания в ледяном постапокалипсисе.',
            es: 'Simulador de construcción y supervivencia en un apocalipsis helado.',
            en: 'City-building survival simulator in a frozen post-apocalypse.'
        }
    },
    {
        id: 3,
        title: 'Among Us',
        image: 'https://cdn1.epicgames.com/offer/33956bcb55d4485dbe80c5332b2b074b/EGS_AmongUs_Innersloth_S2_1200x1600-c2b1c9a2e8d1f0b3a5d7c9e1f3b5d7c9',
        usualPrice: '3.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/ru/p/among-us',
        status: 'active',
        daysLeft: 12,
        description: {
            ru: 'Найди предателя на космическом корабле! Мультиплеер до 15 игроков.',
            es: '¡Encuentra al impostor en la nave espacial! Multijugador hasta 15 jugadores.',
            en: 'Find the impostor on the spaceship! Multiplayer up to 15 players.'
        }
    },
    {
        id: 4,
        title: 'The Witcher 3: Wild Hunt',
        image: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329955a8a5e6fa0c3e8',
        usualPrice: '39.99€',
        store: 'GOG',
        storeUrl: 'https://www.gog.com/game/the_witcher_3_wild_hunt',
        status: 'new',
        daysLeft: 5,
        description: {
            ru: 'Шедевр RPG. Огромный мир, захватывающий сюжет, сотни часов геймплея.',
            es: 'Obra maestra del RPG. Mundo enorme, historia cautivadora, cientos de horas.',
            en: 'RPG masterpiece. Huge world, captivating story, hundreds of hours.'
        }
    },
    {
        id: 5,
        title: 'Rocket League',
        image: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-1e13e5c9a0b2d4f6c8e0a2b4c6d8e0f2',
        usualPrice: '19.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/ru/p/rocket-league',
        status: 'active',
        daysLeft: 20,
        description: {
            ru: 'Футбол на машинах! Безумно весело, просто освоить, сложно стать профи.',
            es: '¡Fútbol con coches! Increíblemente divertido, fácil de aprender.',
            en: 'Soccer with cars! Insanely fun, easy to learn, hard to master.'
        }
    },
    {
        id: 6,
        title: 'Portal 2',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg',
        usualPrice: '9.99€',
        store: 'Steam',
        storeUrl: 'https://store.steampowered.com/app/620/Portal_2/',
        status: 'expiring',
        daysLeft: 1,
        description: {
            ru: 'Культовая головоломка. Порталы, юмор, кооператив на двоих.',
            es: 'Rompecabezas de culto. Portales, humor, cooperativo para dos.',
            en: 'Cult puzzle game. Portals, humor, two-player co-op.'
        }
    }
];

// ========== ТЕКУЩИЙ ЯЗЫК ==========
let currentLang = 'ru';

// ========== ФУНКЦИИ ==========
function getTranslation(key) {
    return translations[currentLang][key] || key;
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Обновляем кнопки
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Обновляем все элементы с data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        el.textContent = getTranslation(el.dataset.key);
    });
    
    // Перерисовываем игры
    renderGames(currentFilter);
    
    // Сохраняем язык
    localStorage.setItem('lang', lang);
}

function getGameDescription(game) {
    return game.description[currentLang] || game.description.en;
}

function getGameStatusText(game) {
    if (game.status === 'expiring' && game.daysLeft === 0) return getTranslation('ending-today');
    if (game.status === 'new') return getTranslation('new-deal');
    return getTranslation('still-free');
}

function getBadgeClass(game) {
    if (game.status === 'expiring') return 'badge-expiring';
    if (game.status === 'new') return 'badge-new';
    return 'badge-active';
}

function getCardClass(game) {
    if (game.status === 'expiring') return 'expiring';
    if (game.status === 'new') return 'new';
    return 'active-game';
}

function getTimeText(game) {
    if (game.daysLeft === 0) return '⏰ Сегодня!';
    if (game.daysLeft === 1) return `⏰ 1 ${getTranslation('days-left')}`;
    return `⏰ ${game.daysLeft} ${getTranslation('days-left')}`;
}

function renderGames(filter = 'all') {
    const container = document.getElementById('gamesContainer');
    
    let filteredGames = games;
    if (filter === 'expiring') filteredGames = games.filter(g => g.status === 'expiring');
    if (filter === 'new') filteredGames = games.filter(g => g.status === 'new');
    if (filter === 'active') filteredGames = games.filter(g => g.status === 'active');
    
    container.innerHTML = filteredGames.map(game => `
        <div class="game-card ${getCardClass(game)}">
            <img src="${game.image}" 
                 alt="${game.title}" 
                 class="game-image"
                 onerror="this.src='https://via.placeholder.com/350x200/1a1a3e/e94560?text=🎮+${encodeURIComponent(game.title)}'">
            <div class="game-info">
                <span class="game-badge ${getBadgeClass(game)}">${getGameStatusText(game)}</span>
                <h3 class="game-title">${game.title}</h3>
                <p style="color:#aaa;margin-bottom:10px;">${getGameDescription(game)}</p>
                <div class="game-price">
                    <span class="original">${game.usualPrice}</span> → 
                    <span class="free">0€</span>
                </div>
                <div class="game-store">${getTranslation('store')}: ${game.store}</div>
                <div class="game-timer">${getTimeText(game)}</div>
                <a href="${game.storeUrl}" class="btn-get" target="_blank" rel="nofollow">
                    ${getTranslation('get-free')}
                </a>
            </div>
        </div>
    `).join('');
    
    // Обновляем счётчики
    document.getElementById('freeGamesCount').textContent = games.length;
    document.getElementById('upcomingCount').textContent = games.filter(g => g.status === 'new').length;
}

// ========== ФИЛЬТРЫ ==========
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderGames(currentFilter);
    });
});

// ========== ЯЗЫКИ ==========
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        switchLanguage(this.dataset.lang);
    });
});

// ========== ЗАПУСК ==========
// Загружаем сохранённый язык
const savedLang = localStorage.getItem('lang') || 'ru';
switchLanguage(savedLang);

// Первый рендер
renderGames();