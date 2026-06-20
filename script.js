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
        'ending-today': '🔴 ЗАКАНЧИВАЕТСЯ СЕГОДНЯ!',
        'new-deal': '🟡 СКОРО БЕСПЛАТНО!',
        'still-free': '🟢 БЕСПЛАТНО',
        'usual-price': 'Обычная цена',
        'store': 'Магазин'
    },
    es: {
        'hero-title': 'Juegos gratis cada semana',
        'hero-subtitle': '¡Consigue los mejores juegos gratis antes de que sea tarde!',
        'free-now': 'Gratis ahora',
        'upcoming': 'Próximamente',
        'filter-all': 'Todos',
        'filter-expiring': '🔴 Termina',
        'filter-new': '🟡 Próximos',
        'filter-active': '🟢 Activos',
        'subscribe-title': '¡No te pierdas nada!',
        'subscribe-text': 'Suscríbete a las notificaciones de Telegram',
        'footer-text': 'Todos los enlaces llevan a tiendas oficiales.',
        'get-free': '🎁 CONSEGUIR GRATIS',
        'days-left': 'días',
        'ending-today': '🔴 ¡TERMINA HOY!',
        'new-deal': '🟡 ¡PRÓXIMAMENTE GRATIS!',
        'still-free': '🟢 GRATIS',
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
        'filter-new': '🟡 Upcoming',
        'filter-active': '🟢 Active',
        'subscribe-title': 'Don\'t Miss Out!',
        'subscribe-text': 'Subscribe to Telegram notifications',
        'footer-text': 'All links lead to official stores.',
        'get-free': '🎁 GET IT FREE',
        'days-left': 'days',
        'ending-today': '🔴 ENDING TODAY!',
        'new-deal': '🟡 COMING SOON!',
        'still-free': '🟢 FREE',
        'usual-price': 'Usual price',
        'store': 'Store'
    }
};

// ========== БАЗА ИГР ==========
const games = [
    {
        id: 1,
        title: 'Citizen Sleeper',
        image: 'https://gamingbolt.com/wp-content/uploads/2022/04/citizen-sleeper.jpg',
        usualPrice: '17.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/citizen-sleeper-944858',
        status: 'expiring',
        daysLeft: 5,
        emoji: '🎲',
        description: {
            ru: 'Ролевая игра в киберпанк-мире. Бросай кости и выживай на космической станции!',
            es: 'Juego de rol cyberpunk. ¡Lanza dados y sobrevive en una estación espacial!',
            en: 'Cyberpunk RPG. Roll dice and survive on a space station!'
        }
    },
    {
        id: 2,
        title: 'ROBOBEAT',
        image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000082961/cb20eaa0fbddb5a363ae5b58cbf6b046eead8980c28edccb1d5c7d908eb9ed8e',
        usualPrice: '19.49€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/robobeat-5f084b',
        status: 'expiring',
        daysLeft: 5,
        emoji: '🤖',
        description: {
            ru: 'Ритм-шутер с роботами! Стреляй в такт музыке.',
            es: '¡Shooter rítmico con robots! Dispara al ritmo de la música.',
            en: 'Rhythm shooter with robots! Shoot to the beat.'
        }
    },
    {
        id: 3,
        title: 'RollerCoaster Tycoon 3 Complete Edition',
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2700/header.jpg',
        usualPrice: '19.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/rollercoaster-tycoon-3-complete-edition',
        status: 'new',
        daysLeft: 5,
        emoji: '🎢',
        description: {
            ru: 'Строй парк аттракционов мечты! Бесплатно с 25 июня.',
            es: '¡Construye el parque de tus sueños! Gratis desde el 25 jun.',
            en: 'Build your dream theme park! Free from Jun 25.'
        }
    },
    {
        id: 4,
        title: 'Voidwrought',
        image: 'https://cdn1.epicgames.com/spt-assets/ae3f962fab4d42eba2dbefa4a1e76ff6/voidwrought-bio8j.jpg',
        usualPrice: '17.99€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/voidwrought-ce8f4b',
        status: 'new',
        daysLeft: 5,
        emoji: '🕳️',
        description: {
            ru: 'Мрачная метроидвания. Бесплатно с 25 июня.',
            es: 'Oscura metroidvania. Gratis desde el 25 jun.',
            en: 'Dark metroidvania. Free from Jun 25.'
        }
    },
    {
        id: 5,
        title: 'Valorant',
        image: 'https://valorworld.ru/wp-content/uploads/valorant_bg.jpg',
        usualPrice: '0€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/valorant',
        status: 'active',
        daysLeft: 999,
        emoji: '🎯',
        description: {
            ru: 'Тактический шутер от Riot Games. Всегда бесплатно!',
            es: 'Shooter táctico de Riot Games. ¡Siempre gratis!',
            en: 'Tactical shooter from Riot Games. Always free!'
        }
    },
    {
        id: 6,
        title: 'Fall Guys',
        image: 'https://cdn2.unrealengine.com/fg-10-3-evg-keyart-withlogo-1920x1080-11-1920x1080-198587253bf0.png',
        usualPrice: '0€',
        store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/fall-guys',
        status: 'active',
        daysLeft: 999,
        emoji: '👑',
        description: {
            ru: 'Королевская битва с милыми человечками. Бесплатно навсегда!',
            es: 'Battle royale con muñecos adorables. ¡Gratis para siempre!',
            en: 'Battle royale with cute beans. Free forever!'
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
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-key]').forEach(el => {
        el.textContent = getTranslation(el.dataset.key);
    });
    
    renderGames(currentFilter);
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
    if (game.daysLeft === 1) return '⏰ 1 день';
    if (game.daysLeft === 999) return '♾️ Навсегда';
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
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                 style="width:100%;height:200px;object-fit:cover;">
            <div style="display:none; background: linear-gradient(135deg, #1a1a3e, #0f0f2a); height: 200px; align-items: center; justify-content: center; font-size: 80px;">
                ${game.emoji}
            </div>
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
    
    const freeNow = games.filter(g => g.status === 'expiring' || g.status === 'active').length;
    const upcoming = games.filter(g => g.status === 'new').length;
    document.getElementById('freeGamesCount').textContent = freeNow;
    document.getElementById('upcomingCount').textContent = upcoming;
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
const savedLang = localStorage.getItem('lang') || 'ru';
switchLanguage(savedLang);
renderGames();
