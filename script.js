// ========== ПЕРЕВОДЫ ==========
var translations = {
    ru: {
        'hero-title': 'Бесплатные игры каждую неделю',
        'hero-subtitle': 'Забери лучшие игры бесплатно, пока не поздно!',
        'free-now': 'Бесплатно сейчас',
        'upcoming': 'Скоро будет',
        'filter-all': 'Все',
        'filter-expiring': '🔴 Истекает',
        'filter-new': '🟡 Новые',
        'filter-active': '🟢 Бесплатно',
        'subscribe-title': 'Не пропусти халяву!',
        'subscribe-text': 'Подпишись на уведомления в Telegram',
        'footer-text': 'Все ссылки ведут на официальные магазины.',
        'get-free': '🎁 ЗАБРАТЬ БЕСПЛАТНО',
        'days-left': 'дней',
        'store': 'Магазин',
        'history-btn': '📦 История'
    },
    es: {
        'hero-title': 'Juegos gratis cada semana',
        'hero-subtitle': '¡Consigue los mejores juegos gratis!',
        'free-now': 'Gratis ahora',
        'upcoming': 'Próximamente',
        'filter-all': 'Todos',
        'filter-expiring': '🔴 Termina',
        'filter-new': '🟡 Próximos',
        'filter-active': '🟢 Gratis',
        'subscribe-title': '¡No te pierdas nada!',
        'subscribe-text': 'Suscríbete a Telegram',
        'footer-text': 'Enlaces oficiales.',
        'get-free': '🎁 CONSEGUIR GRATIS',
        'days-left': 'días',
        'store': 'Tienda',
        'history-btn': '📦 Historial'
    },
    en: {
        'hero-title': 'Free Games Every Week',
        'hero-subtitle': 'Grab the best games for free!',
        'free-now': 'Free Now',
        'upcoming': 'Coming Soon',
        'filter-all': 'All',
        'filter-expiring': '🔴 Expiring',
        'filter-new': '🟡 Upcoming',
        'filter-active': '🟢 Free',
        'subscribe-title': 'Don\'t Miss Out!',
        'subscribe-text': 'Subscribe to Telegram',
        'footer-text': 'Official store links.',
        'get-free': '🎁 GET IT FREE',
        'days-left': 'days',
        'store': 'Store',
        'history-btn': '📦 History'
    }
};
// ========== БАЗА ИГР ==========
var games = [
    {
        id: 1, title: 'Citizen Sleeper',
        image: 'https://gamingbolt.com/wp-content/uploads/2022/04/citizen-sleeper.jpg',
        usualPrice: '17.99€', store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/citizen-sleeper-944858',
        status: 'active', endDate: '2026-06-25T17:00:00', emoji: '🎲',
        desc: {
            ru: 'Ролевая игра в киберпанк-мире.',
            es: 'Juego de rol cyberpunk.',
            en: 'Cyberpunk RPG.'
        }
    },
    {
        id: 2, title: 'ROBOBEAT',
        image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000082961/cb20eaa0fbddb5a363ae5b58cbf6b046eead8980c28edccb1d5c7d908eb9ed8e',
        usualPrice: '19.49€', store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/robobeat-5f084b',
        status: 'active', endDate: '2026-06-25T17:00:00', emoji: '🤖',
        desc: {
            ru: 'Ритм-шутер с роботами!',
            es: '¡Shooter rítmico con robots!',
            en: 'Rhythm shooter with robots!'
        }
    },
    {
        id: 3, title: 'RollerCoaster Tycoon 3',
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2700/header.jpg',
        usualPrice: '19.99€', store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/rollercoaster-tycoon-3-complete-edition',
        status: 'new', startDate: '2026-06-25T17:00:00', endDate: '2026-07-02T17:00:00', emoji: '🎢',
        desc: {
            ru: 'Строй парк аттракционов! С 25 июня.',
            es: '¡Construye tu parque! Desde el 25 jun.',
            en: 'Build your theme park! From Jun 25.'
        }
    },
    {
        id: 4, title: 'Voidwrought',
        image: 'https://cdn1.epicgames.com/spt-assets/ae3f962fab4d42eba2dbefa4a1e76ff6/voidwrought-bio8j.jpg',
        usualPrice: '17.99€', store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/voidwrought-ce8f4b',
        status: 'new', startDate: '2026-06-25T17:00:00', endDate: '2026-07-02T17:00:00', emoji: '🕳️',
        desc: {
            ru: 'Мрачная метроидвания. С 25 июня.',
            es: 'Metroidvania oscura. Desde el 25 jun.',
            en: 'Dark metroidvania. From Jun 25.'
        }
    },
    {
        id: 5, title: 'Valorant',
        image: 'https://valorworld.ru/wp-content/uploads/valorant_bg.jpg',
        usualPrice: '0€', store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/valorant',
        status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🎯',
        desc: {
            ru: 'Тактический шутер от Riot Games.',
            es: 'Shooter táctico de Riot Games.',
            en: 'Tactical shooter from Riot Games.'
        }
    },
    {
        id: 6, title: 'Fall Guys',
        image: 'https://cdn2.unrealengine.com/fg-10-3-evg-keyart-withlogo-1920x1080-11-1920x1080-198587253bf0.png',
        usualPrice: '0€', store: 'Epic Games Store',
        storeUrl: 'https://store.epicgames.com/p/fall-guys',
        status: 'active', endDate: '2099-12-31T23:59:59', emoji: '👑',
        desc: {
            ru: 'Королевская битва с человечками.',
            es: 'Battle royale con muñecos.',
            en: 'Battle royale with cute beans.'
        }
    }
];

// ========== ЯЗЫК ==========
var currentLang = 'ru';

function t(key) {
    return translations[currentLang][key] || key;
}

function switchLanguage(lang) {
    currentLang = lang;
    
    document.querySelectorAll('[data-key]').forEach(function(el) {
        el.textContent = t(el.dataset.key);
    });
    
    var textEl = document.getElementById('currentLangText');
    if (textEl) textEl.textContent = lang.toUpperCase();
    
    document.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    
    renderGames(currentFilter);
    localStorage.setItem('lang', lang);
}

// ========== ВЫПАДАЮЩИЙ СПИСОК ==========
document.getElementById('langDropdownBtn').onclick = function(e) {
    e.stopPropagation();
    var c = document.getElementById('langDropdownContent');
    c.classList.toggle('open');
};

document.addEventListener('click', function() {
    document.getElementById('langDropdownContent').classList.remove('open');
});

document.querySelectorAll('.lang-option').forEach(function(opt) {
    opt.onclick = function(e) {
        e.preventDefault();
        var lang = this.dataset.lang;
        document.getElementById('currentLangText').textContent = lang.toUpperCase();
        switchLanguage(lang);
        document.getElementById('langDropdownContent').classList.remove('open');
    };
});

// ========== ФУНКЦИИ ИГР ==========
function getDesc(game) {
    return game.desc[currentLang] || game.desc.en;
}

function getStatusText(game) {
    var now = new Date();
    
    if (game.status === 'active' && game.endDate) {
        var end = new Date(game.endDate);
        var diffDays = Math.floor((end - now) / (1000 * 60 * 60 * 24));
        if (diffDays <= 1) return t('filter-expiring');
    }
    
    return game.status === 'new' ? t('filter-new') : t('filter-active');
}

function getBadge(game) {
    var now = new Date();
    
    if (game.status === 'active' && game.endDate) {
        var end = new Date(game.endDate);
        var diffDays = Math.floor((end - now) / (1000 * 60 * 60 * 24));
        if (diffDays <= 1) return 'badge-expiring';
    }
    
    return game.status === 'new' ? 'badge-new' : 'badge-active';
}

function getCard(game) {
    var now = new Date();
    
    if (game.status === 'active' && game.endDate) {
        var end = new Date(game.endDate);
        var diffDays = Math.floor((end - now) / (1000 * 60 * 60 * 24));
        if (diffDays <= 1) return 'expiring';
    }
    
    return game.status === 'new' ? 'new' : 'active-game';
}

function getTime(game) {
    var now = new Date();
    
    if (game.status === 'new' && game.startDate) {
        var start = new Date(game.startDate);
        var diff = start - now;
        
        if (diff <= 0) return '⏰ Старт сегодня!';
        
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days > 0) return '⏰ Старт через ' + days + 'д ' + hours + 'ч ' + mins + 'м';
        if (hours > 0) return '⏰ Старт через ' + hours + 'ч ' + mins + 'м';
        return '⏰ Старт через ' + mins + ' мин';
    }
    
    if (game.endDate) {
        var end = new Date(game.endDate);
        var diff = end - now;
        
        if (diff > 999 * 24 * 60 * 60 * 1000) return '♾️ Навсегда';
        if (diff <= 0) return '⏰ Закончилось';
        
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days > 0) return '⏰ ' + days + 'д ' + hours + 'ч ' + mins + 'м';
        if (hours > 0) return '⏰ ' + hours + 'ч ' + mins + 'м';
        if (mins > 0) return '⏰ ' + mins + ' мин';
        return '⏰ Меньше минуты!';
    }
    
    return '';
}

function renderGames(filter) {
    filter = filter || 'all';
    var container = document.getElementById('gamesContainer');
    if (!container) return;
    
    var now = new Date();
    var finished = [];
    var stillActive = [];
    
    games.forEach(function(game) {
        if (game.status === 'active' && game.endDate) {
            var end = new Date(game.endDate);
            if (end <= now && end.getFullYear() < 2099) {
                finished.push(game);
            } else {
                stillActive.push(game);
            }
        } else {
            stillActive.push(game);
        }
    });
    
    if (finished.length > 0) {
        var saved = localStorage.getItem('allHistory');
        var archive = saved ? JSON.parse(saved) : [];
        
        finished.forEach(function(game) {
            var exists = archive.some(function(a) { return a.id === game.id; });
            if (!exists) {
                archive.push({
                    id: game.id,
                    title: game.title,
                    image: game.image,
                    store: game.store
                });
            }
        });
        
        localStorage.setItem('allHistory', JSON.stringify(archive));
        games = stillActive;
    }
    
    var list = games;
    if (filter === 'expiring') list = games.filter(function(g) { return getCard(g) === 'expiring'; });
    if (filter === 'new') list = games.filter(function(g) { return g.status === 'new'; });
    if (filter === 'active') list = games.filter(function(g) { return g.status === 'active' && getCard(g) !== 'expiring'; });
    
    container.innerHTML = list.map(function(game) {
        return '<div class="game-card ' + getCard(game) + '">' +
            '<img src="' + game.image + '" alt="' + game.title + '" class="game-image" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" style="width:100%;height:200px;object-fit:cover;">' +
            '<div style="display:none;background:linear-gradient(135deg,#1a1a3e,#0f0f2a);height:200px;align-items:center;justify-content:center;font-size:80px;">' + game.emoji + '</div>' +
            '<div class="game-info">' +
            '<span class="game-badge ' + getBadge(game) + '">' + getStatusText(game) + '</span>' +
            '<h3 class="game-title">' + game.title + '</h3>' +
            '<p style="color:#aaa;margin-bottom:10px;">' + getDesc(game) + '</p>' +
            '<div class="game-price"><span class="original">' + game.usualPrice + '</span> → <span class="free">0€</span></div>' +
            '<div class="game-store">' + t('store') + ': ' + game.store + '</div>' +
            '<div class="game-timer">' + getTime(game) + '</div>' +
            '<a href="' + game.storeUrl + '" class="btn-get" target="_blank" rel="nofollow">' + t('get-free') + '</a>' +
            '</div></div>';
    }).join('');
    
    document.getElementById('freeGamesCount').textContent = games.filter(function(g) { return g.status === 'active'; }).length;
    document.getElementById('upcomingCount').textContent = games.filter(function(g) { return g.status === 'new'; }).length;
    
    clearTimeout(window.timerRefresh);
    window.timerRefresh = setTimeout(function() { renderGames(currentFilter); }, 60000);
}

// ========== ФИЛЬТРЫ ==========
var currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderGames(currentFilter);
    });
});

// ========== АВТО-ОПРЕДЕЛЕНИЕ ЯЗЫКА ==========
function detectLanguage() {
    // Если пользователь уже выбрал язык — не меняем
    var saved = localStorage.getItem('lang');
    if (saved) return saved;
    
    // Определяем по языку браузера
    var browserLang = navigator.language || navigator.userLanguage;
    
    if (browserLang.indexOf('ru') === 0) return 'ru';
    if (browserLang.indexOf('es') === 0) return 'es';
    if (browserLang.indexOf('en') === 0) return 'en';
    
    // Если не определили — английский
    return 'en';
}

// ========== ЗАПУСК ==========
var detectedLang = detectLanguage();
switchLanguage(detectedLang);
renderGames();
