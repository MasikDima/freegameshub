// ========== ПЕРЕВОДЫ ==========
var translations = {
    ru: {
        'hero-title': '🎮 Бесплатные игры',
        'hero-subtitle': 'Выбери платформу и забирай игры бесплатно!',
        'free-now': 'Бесплатно сейчас',
        'upcoming': 'Скоро будет',
        'filter-all': 'Все',
        'filter-expiring': '🔴 Истекает',
        'filter-new': '🟡 Новые',
        'filter-active': '🟢 Бесплатно',
        'subscribe-title': 'Узнай первым!',
        'subscribe-text': 'Подпишись на Telegram и получай уведомления',
        'footer-text': 'Все ссылки ведут на официальные магазины.',
        'get-free': '🎁 ЗАБРАТЬ БЕСПЛАТНО',
        'days-left': 'дней',
        'store': 'Магазин',
        'history-btn': '📦 История',
        'epic-desc': 'Бесплатные раздачи каждую неделю',
        'epic-btn': 'Смотреть игры',
        'steam-desc': 'Лучшие free-to-play игры',
        'steam-btn': 'Смотреть игры',
        'ps-desc': 'PS Plus — 3 игры в месяц',
        'ps-btn': 'Смотреть игры',
        'xbox-desc': 'Game Pass и Games with Gold',
        'xbox-btn': 'Смотреть игры',
        'online-text': '🟢 Онлайн',
'total-text': '👥 Всего',
'telegram-btn': '📱 Подписаться на Telegram',
    },
    es: {
        'hero-title': '🎮 Juegos Gratis',
        'hero-subtitle': '¡Elige plataforma y consigue juegos gratis!',
        'free-now': 'Gratis ahora',
        'upcoming': 'Próximamente',
        'filter-all': 'Todos',
        'filter-expiring': '🔴 Termina',
        'filter-new': '🟡 Próximos',
        'filter-active': '🟢 Gratis',
        'subscribe-title': '¡No te lo pierdas!',
        'subscribe-text': 'Suscríbete a Telegram para recibir notificaciones',
        'footer-text': 'Todos los enlaces llevan a tiendas oficiales.',
        'get-free': '🎁 CONSEGUIR GRATIS',
        'days-left': 'días',
        'store': 'Tienda',
        'history-btn': '📦 Historial',
        'epic-desc': 'Juegos gratis cada semana',
        'epic-btn': 'Ver juegos',
        'steam-desc': 'Mejores juegos free-to-play',
        'steam-btn': 'Ver juegos',
        'ps-desc': 'PS Plus — 3 juegos al mes',
        'ps-btn': 'Ver juegos',
        'xbox-desc': 'Game Pass y Games with Gold',
        'xbox-btn': 'Ver juegos',
        'online-text': '🟢 En línea',
'total-text': '👥 Total',
'telegram-btn': '📱 Suscríbete en Telegram',
    },
    en: {
        'hero-title': '🎮 Free Games',
        'hero-subtitle': 'Choose a platform and get free games!',
        'free-now': 'Free Now',
        'upcoming': 'Coming Soon',
        'filter-all': 'All',
        'filter-expiring': '🔴 Expiring',
        'filter-new': '🟡 Upcoming',
        'filter-active': '🟢 Free',
        'subscribe-title': 'Don\'t Miss Out!',
        'subscribe-text': 'Subscribe to Telegram for notifications',
        'footer-text': 'All links lead to official stores.',
        'get-free': '🎁 GET IT FREE',
        'days-left': 'days',
        'store': 'Store',
        'history-btn': '📦 History',
        'epic-desc': 'Free games every week',
        'epic-btn': 'View games',
        'steam-desc': 'Best free-to-play games',
        'steam-btn': 'View games',
        'ps-desc': 'PS Plus — 3 games monthly',
        'ps-btn': 'View games',
        'xbox-desc': 'Game Pass & Games with Gold',
        'xbox-btn': 'View games',
        'online-text': '🟢 Online',
'total-text': '👥 Total',
'telegram-btn': '📱 Subscribe on Telegram',
    }
};

// ========== БАЗА ИГР ==========
var games = [
    { id: 1, title: 'Citizen Sleeper', image: 'https://gamingbolt.com/wp-content/uploads/2022/04/citizen-sleeper.jpg', usualPrice: '17.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/citizen-sleeper-944858', status: 'active', endDate: '2026-06-25T17:00:00', emoji: '🎲', desc: { ru: 'Ролевая игра в киберпанк-мире.', es: 'Juego de rol cyberpunk.', en: 'Cyberpunk RPG.' } },
    { id: 2, title: 'ROBOBEAT', image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000082961/cb20eaa0fbddb5a363ae5b58cbf6b046eead8980c28edccb1d5c7d908eb9ed8e', usualPrice: '19.49€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/robobeat-5f084b', status: 'active', endDate: '2026-06-25T17:00:00', emoji: '🤖', desc: { ru: 'Ритм-шутер с роботами!', es: '¡Shooter rítmico con robots!', en: 'Rhythm shooter with robots!' } },
    { id: 3, title: 'RollerCoaster Tycoon 3', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2700/header.jpg', usualPrice: '19.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/rollercoaster-tycoon-3-complete-edition', status: 'new', startDate: '2026-06-25T17:00:00', endDate: '2026-07-02T17:00:00', emoji: '🎢', desc: { ru: 'Строй парк аттракционов!', es: '¡Construye tu parque!', en: 'Build your theme park!' } },
    { id: 4, title: 'Voidwrought', image: 'https://cdn1.epicgames.com/spt-assets/ae3f962fab4d42eba2dbefa4a1e76ff6/voidwrought-bio8j.jpg', usualPrice: '17.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/voidwrought-ce8f4b', status: 'new', startDate: '2026-06-25T17:00:00', endDate: '2026-07-02T17:00:00', emoji: '🕳️', desc: { ru: 'Мрачная метроидвания.', es: 'Metroidvania oscura.', en: 'Dark metroidvania.' } },
    { id: 5, title: 'Valorant', image: 'https://valorworld.ru/wp-content/uploads/valorant_bg.jpg', usualPrice: '0€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/valorant', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🎯', desc: { ru: 'Тактический шутер от Riot Games.', es: 'Shooter táctico de Riot Games.', en: 'Tactical shooter from Riot Games.' } },
    { id: 6, title: 'Fall Guys', image: 'https://cdn2.unrealengine.com/fg-10-3-evg-keyart-withlogo-1920x1080-11-1920x1080-198587253bf0.png', usualPrice: '0€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/fall-guys', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '👑', desc: { ru: 'Королевская битва с человечками.', es: 'Battle royale con muñecos.', en: 'Battle royale with cute beans.' } },
    { id: 7, title: 'Counter-Strike 2', image: 'https://wallpapercave.com/wp/wp12803829.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/730', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🔫', desc: { ru: 'Легендарный тактический шутер.', es: 'Legendario shooter táctico.', en: 'Legendary tactical shooter.' } },
    { id: 8, title: 'PUBG: BATTLEGROUNDS', image: 'https://wallpaperaccess.com/full/810309.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/578080', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '💥', desc: { ru: 'Королевская битва.', es: 'El battle royale original.', en: 'The original battle royale.' } },
    { id: 9, title: 'Warframe', image: 'https://www-static.warframe.com/images/landing/warframe-metacard.png', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/230410', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '⚔️', desc: { ru: 'Космические ниндзя!', es: '¡Ninjas espaciales!', en: 'Space ninjas!' } },
    { id: 10, title: 'Marvel Rivals', image: 'https://www.charlieintel.com/cdn-image/wp-content/uploads/2024/03/29/Marvel-Rivals-Game-Modes-Explained.jpg?width=1080&quality=75&format=auto', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/2767030', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🦸', desc: { ru: 'Герои Marvel!', es: '¡Héroes de Marvel!', en: 'Marvel heroes!' } },
    { id: 11, title: 'Wuthering Waves', image: 'https://tiermaker.com/images/media/hero_images/2024/16913411/wuthering-waves-tier-list-16913411/169134111719697675.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/3513350', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🌊', desc: { ru: 'RPG с открытым миром.', es: 'RPG de mundo abierto.', en: 'Open-world RPG.' } },
    { id: 12, title: 'Apex Legends', image: 'https://images.wallpapersden.com/image/download/apex-legends-season-18_bmZmZmuUmZqaraWkpJRmbmdlrWZlbWU.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/1172470', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🚀', desc: { ru: 'Королевская битва с героями.', es: 'Battle royale con héroes.', en: 'Hero battle royale.' } },
    { id: 13, title: 'The Sims 4', image: 'https://drop-assets.ea.com/images/3TVfXhrTgzhtM51RMVsywI/bd83de7daaccdd70c31d981ba52818ae/ts4-basegame-packart-16x9-en.png?im=AspectCrop=(4,3),xPosition=0.5,yPosition=0.5', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/1222670', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🏠', desc: { ru: 'Симулятор жизни.', es: 'Simulador de vida.', en: 'Life simulator.' } },
    { id: 14, title: 'Rainbow Six Siege', image: 'https://gamingbolt.com/wp-content/uploads/2025/03/rainbow-six-siege-x.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/359550', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🛡️', desc: { ru: 'Тактический шутер Ubisoft.', es: 'Shooter táctico Ubisoft.', en: 'Tactical shooter by Ubisoft.' } },
    { id: 15, title: 'Dota 2', image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/dota-2-heroes.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/570', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🐉', desc: { ru: 'Популярная MOBA.', es: 'MOBA popular.', en: 'Popular MOBA.' } },
    { id: 16, title: 'War Thunder', image: 'https://th.bing.com/th/id/R.92b827130b8d8db18711d49c2ebf0ec2?rik=ciPigECl%2bpzFvg&riu=http%3a%2f%2fwarthunder.com%2fupload%2fimage%2fwallpapers%2f1-55_2560x1440_logo_eng.jpg&ehk=EbJugdARTtVxnTyKUVesRCRkQDIy9AQXpQXE9cfA5cU%3d&risl=&pid=ImgRaw&r=0', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/236390', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '✈️', desc: { ru: 'Авиация, танки, флот.', es: 'Aviación, tanques.', en: 'Aviation, tanks, fleet.' } },
    { id: 17, title: 'NARAKA: BLADEPOINT', image: 'https://cdn.alza.cz/Foto/ImgGalery/Image/naraka-bladepoint-recenze-key-art.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/1203220', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🗡️', desc: { ru: 'Битва с мечами.', es: 'Batalla con espadas.', en: 'Battle with swords.' } },
    { id: 18, title: 'Overwatch 2', image: 'https://cdn.wccftech.com/wp-content/uploads/2024/07/Overwatch2-HD-scaled.jpg', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/2357570', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '⚡', desc: { ru: 'Геройский шутер Blizzard.', es: 'Shooter de héroes Blizzard.', en: 'Hero shooter by Blizzard.' } },
    { id: 19, title: 'Destiny 2', image: 'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EGS_Destiny2_Bungie_S1_2560x1440-d91ec3c799ec514732341a13ba0c030c', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/1085660', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '🌌', desc: { ru: 'Космический шутер Bungie.', es: 'Shooter espacial Bungie.', en: 'Space shooter by Bungie.' } },
    { id: 20, title: 'TBH: Task Bar Hero', image: 'https://tse4.mm.bing.net/th/id/OIF.aINjX7looWhcmfWNwwDQRg?rs=1&pid=ImgDetMain&o=7&rm=3', usualPrice: '0€', store: 'Steam', storeUrl: 'https://store.steampowered.com/app/3678970', status: 'active', endDate: '2099-12-31T23:59:59', emoji: '💻', desc: { ru: 'Уникальная инди-игра.', es: 'Juego indie único.', en: 'Unique indie game.' } },
    { id: 21, title: 'Grounded', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202404/1120/64a12b89992b8e34ecace3e5c7d1d39b954c2ab1d73de70a.png', usualPrice: '39.99€', store: 'PlayStation', storeUrl: 'https://www.playstation.com/games/grounded/',  emoji: '🐜', desc: { ru: 'Выживание в мире насекомых!', es: '¡Supervivencia en el mundo de los insectos!', en: 'Survival in the world of insects!' } },
    { id: 22, title: 'Nickelodeon All-Star Brawl 2', image: 'https://gaming-cdn.com/images/products/14679/orig-fallback-v1/nickelodeon-all-star-brawl-2-pc-game-steam-cover.jpg?v=1701184748', usualPrice: '49.99€', store: 'PlayStation', storeUrl: 'https://www.playstation.com/games/nickelodeon-all-star-brawl-2/',  emoji: '🥊', desc: { ru: 'Файтинг с героями Nickelodeon!', es: '¡Lucha con héroes de Nickelodeon!', en: 'Fight with Nickelodeon heroes!' } },
    { id: 23, title: 'Warhammer 40K: Darktide', image: 'https://www.wallpaperbetter.com/wallpaper/594/966/371/warhammer-40k-space-marines-hd-1080P-wallpaper.jpg', usualPrice: '39.99€', store: 'PlayStation', storeUrl: 'https://www.playstation.com/es-es/games/warhammer-40000-darktide/', emoji: '⚔️', desc: { ru: 'Эпический экшен Warhammer!', es: '¡Acción épica Warhammer!', en: 'Epic Warhammer action!' } }
];

// ========== ЯЗЫК ==========
var currentLang = 'ru';

function t(key) { return translations[currentLang][key] || key; }

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(function(el) {
        var translation = t(el.dataset.key);
        if (translation && translation !== el.dataset.key) {
            el.textContent = translation;
        }
    });
    var textEl = document.getElementById('currentLangText');
    if (textEl) textEl.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(function(opt) { opt.classList.toggle('active', opt.dataset.lang === lang); });
    renderGames(currentFilter);
    localStorage.setItem('lang', lang);
}

// ========== ВЫПАДАЮЩИЙ СПИСОК ==========
document.getElementById('langDropdownBtn').onclick = function(e) { e.stopPropagation(); document.getElementById('langDropdownContent').classList.toggle('open'); };
document.addEventListener('click', function() { document.getElementById('langDropdownContent').classList.remove('open'); });
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
function getDesc(game) { return game.desc[currentLang] || game.desc.en; }

function getStatusText(game) {
    var now = new Date();
    if (game.status === 'active' && game.endDate) {
        var end = new Date(game.endDate);
        if (Math.floor((end - now) / (1000 * 60 * 60 * 24)) <= 1) return t('filter-expiring');
    }
    return game.status === 'new' ? t('filter-new') : t('filter-active');
}

function getBadge(game) {
    var now = new Date();
    if (game.status === 'active' && game.endDate) {
        var end = new Date(game.endDate);
        if (Math.floor((end - now) / (1000 * 60 * 60 * 24)) <= 1) return 'badge-expiring';
    }
    return game.status === 'new' ? 'badge-new' : 'badge-active';
}

function getCard(game) {
    var now = new Date();
    if (game.status === 'active' && game.endDate) {
        var end = new Date(game.endDate);
        if (Math.floor((end - now) / (1000 * 60 * 60 * 24)) <= 1) return 'expiring';
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
            if (end <= now && end.getFullYear() < 2099) { finished.push(game); }
            else { stillActive.push(game); }
        } else { stillActive.push(game); }
    });
    if (finished.length > 0) {
        var saved = localStorage.getItem('allHistory');
        var archive = saved ? JSON.parse(saved) : [];
        finished.forEach(function(game) {
            if (!archive.some(function(a) { return a.id === game.id; })) {
                archive.push({ id: game.id, title: game.title, image: game.image, store: game.store });
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
            '<div class="game-info"><span class="game-badge ' + getBadge(game) + '">' + getStatusText(game) + '</span>' +
            '<h3 class="game-title">' + game.title + '</h3><p style="color:#aaa;margin-bottom:10px;">' + getDesc(game) + '</p>' +
            '<div class="game-price"><span class="original">' + game.usualPrice + '</span> → <span class="free">0€</span></div>' +
            '<div class="game-store">' + t('store') + ': ' + game.store + '</div>' +
            '<div class="game-timer">' + getTime(game) + '</div>' +
            '<a href="' + game.storeUrl + '" class="btn-get" target="_blank" rel="nofollow">' + t('get-free') + '</a></div></div>';
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

// ========== ЗАПУСК ==========
function detectLanguage() {
    var saved = localStorage.getItem('lang');
    if (saved) return saved;
    var browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.indexOf('ru') === 0) return 'ru';
    if (browserLang.indexOf('es') === 0) return 'es';
    if (browserLang.indexOf('en') === 0) return 'en';
    return 'en';
}
var detectedLang = detectLanguage();
switchLanguage(detectedLang);
renderGames();
