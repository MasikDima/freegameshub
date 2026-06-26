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
        'claimed': '✅ Забрал',
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
        'telegram-btn': '📱 Подписаться на Telegram'
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
        'claimed': '✅ Reclamado',
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
        'telegram-btn': '📱 Suscríbete en Telegram'
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
        'claimed': '✅ Claimed',
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
        'telegram-btn': '📱 Subscribe on Telegram'
    }
};

// ========== БАЗА ИГР ==========
var games = [
    { id: 1, title: 'Citizen Sleeper', image: 'https://gamingbolt.com/wp-content/uploads/2022/04/citizen-sleeper.jpg', usualPrice: '17.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/citizen-sleeper-944858', status: 'active', endDate: '2026-06-25T17:00:00', emoji: '🎲', desc: { ru: 'Ролевая игра в киберпанк-мире.', es: 'Juego de rol cyberpunk.', en: 'Cyberpunk RPG.' } },
    { id: 2, title: 'ROBOBEAT', image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000082961/cb20eaa0fbddb5a363ae5b58cbf6b046eead8980c28edccb1d5c7d908eb9ed8e', usualPrice: '19.49€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/robobeat-5f084b', status: 'active', endDate: '2026-06-25T17:00:00', emoji: '🤖', desc: { ru: 'Ритм-шутер с роботами!', es: '¡Shooter rítmico con robots!', en: 'Rhythm shooter with robots!' } },
    { id: 3, title: 'RollerCoaster Tycoon 3', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2700/header.jpg', usualPrice: '19.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/rollercoaster-tycoon-3-complete-edition', status: 'active', startDate: '2026-06-25T17:00:00', endDate: '2026-07-02T17:00:00', emoji: '🎢', desc: { ru: 'Строй парк аттракционов!', es: '¡Construye tu parque!', en: 'Build your theme park!' } },
    { id: 4, title: 'Voidwrought', image: 'https://cdn1.epicgames.com/spt-assets/ae3f962fab4d42eba2dbefa4a1e76ff6/voidwrought-bio8j.jpg', usualPrice: '17.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/voidwrought-ce8f4b', status: 'active', startDate: '2026-06-25T17:00:00', endDate: '2026-07-02T17:00:00', emoji: '🕳️', desc: { ru: 'Мрачная метроидвания.', es: 'Metroidvania oscura.', en: 'Dark metroidvania.' } },
    { id: 24, title: 'I Have No Mouth, and I Must Scream', image: 'https://cdn.flickeringmyth.com/wp-content/uploads/2025/03/I-Have-No-Mouth-and-I-Must-Scream.jpg', usualPrice: '5.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/i-have-no-mouth-and-i-must-scream', status: 'new', startDate: '2026-07-02T17:00:00', endDate: '2026-07-09T17:00:00', emoji: '😱', desc: { ru: 'Культовый хоррор-квест.', es: 'Aventura de terror de culto.', en: 'Cult horror adventure.' } },
    { id: 25, title: 'River City Girls 2', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202502/2500/4b05e131a3a025d4cb069740b0903e19afa0b0a528d2dbe1.jpg', usualPrice: '35.99€', store: 'Epic Games Store', storeUrl: 'https://store.epicgames.com/p/river-city-girls-2', status: 'new', startDate: '2026-07-02T17:00:00', endDate: '2026-07-09T17:00:00', emoji: '👊', desc: { ru: 'Битэмап с аниме-девушками!', es: '¡Beat \'em up con chicas anime!', en: 'Beat \'em up with anime girls!' } },
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
    { id: 21, title: 'Grounded', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202404/1120/64a12b89992b8e34ecace3e5c7d1d39b954c2ab1d73de70a.png', usualPrice: '39.99€', store: 'PlayStation', storeUrl: 'https://www.playstation.com/games/grounded/', status: 'active', endDate: '2026-07-01T17:00:00', emoji: '🐜', desc: { ru: 'Выживание в мире насекомых!', es: '¡Supervivencia en el mundo de los insectos!', en: 'Survival in the world of insects!' } },
    { id: 22, title: 'Nickelodeon All-Star Brawl 2', image: 'https://gaming-cdn.com/images/products/14679/orig-fallback-v1/nickelodeon-all-star-brawl-2-pc-game-steam-cover.jpg?v=1701184748', usualPrice: '49.99€', store: 'PlayStation', storeUrl: 'https://www.playstation.com/games/nickelodeon-all-star-brawl-2/', status: 'active', endDate: '2026-07-01T17:00:00', emoji: '🥊', desc: { ru: 'Файтинг с героями Nickelodeon!', es: '¡Lucha con héroes de Nickelodeon!', en: 'Fight with Nickelodeon heroes!' } },
    { id: 23, title: 'Warhammer 40K: Darktide', image: 'https://www.wallpaperbetter.com/wallpaper/594/966/371/warhammer-40k-space-marines-hd-1080P-wallpaper.jpg', usualPrice: '39.99€', store: 'PlayStation', storeUrl: 'https://www.playstation.com/es-es/games/warhammer-40000-darktide/', status: 'active', endDate: '2026-07-01T17:00:00', emoji: '⚔️', desc: { ru: 'Эпический экшен Warhammer!', es: '¡Acción épica Warhammer!', en: 'Epic Warhammer action!' } }
];

// ========== ЯЗЫК ==========
var currentLang = 'ru';
function t(key) { return translations[currentLang][key] || key; }

function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-key]').forEach(function(el) {
        var tr = t(el.dataset.key);
        if (tr && tr !== el.dataset.key) el.textContent = tr;
    });
    var te = document.getElementById('currentLangText');
    if (te) te.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(function(o) { o.classList.toggle('active', o.dataset.lang === lang); });
    renderGames(currentFilter);
    localStorage.setItem('lang', lang);
}

// ========== ВЫПАДАЮЩИЙ СПИСОК ==========
document.getElementById('langDropdownBtn').onclick = function(e) { e.stopPropagation(); document.getElementById('langDropdownContent').classList.toggle('open'); };
document.addEventListener('click', function() { document.getElementById('langDropdownContent').classList.remove('open'); });
document.querySelectorAll('.lang-option').forEach(function(o) {
    o.onclick = function(e) { e.preventDefault(); var l = this.dataset.lang; document.getElementById('currentLangText').textContent = l.toUpperCase(); switchLanguage(l); document.getElementById('langDropdownContent').classList.remove('open'); };
});

// ========== ФУНКЦИИ ИГР ==========
function getDesc(g) { return g.desc[currentLang] || g.desc.en; }
function getStatusText(g) {
    var n = new Date();
    if (g.status === 'new' && g.startDate && new Date(g.startDate) <= n) g.status = 'active';
    if (g.status === 'active' && g.endDate && Math.floor((new Date(g.endDate) - n) / 86400000) <= 1) return t('filter-expiring');
    return g.status === 'new' ? t('filter-new') : t('filter-active');
}
function getBadge(g) {
    if (g.status === 'active' && g.endDate && Math.floor((new Date(g.endDate) - new Date()) / 86400000) <= 1) return 'badge-expiring';
    return g.status === 'new' ? 'badge-new' : 'badge-active';
}
function getCard(g) {
    if (g.status === 'active' && g.endDate && Math.floor((new Date(g.endDate) - new Date()) / 86400000) <= 1) return 'expiring';
    return g.status === 'new' ? 'new' : 'active-game';
}
function getTime(g) {
    var n = new Date();
    if (g.status === 'new' && g.startDate) {
        var s = new Date(g.startDate);
        if (s <= n) {
            g.status = 'active';
            if (g.endDate) {
                var d = new Date(g.endDate) - n;
                var dd = Math.floor(d / 86400000), hh = Math.floor((d % 86400000) / 3600000), mm = Math.floor((d % 3600000) / 60000);
                if (dd > 0) return '⏰ ' + dd + 'д ' + hh + 'ч ' + mm + 'м';
                if (hh > 0) return '⏰ ' + hh + 'ч ' + mm + 'м';
                return '⏰ ' + mm + ' мин';
            }
            return '♾️ Навсегда';
        }
        var d = s - n;
        var dd = Math.floor(d / 86400000), hh = Math.floor((d % 86400000) / 3600000), mm = Math.floor((d % 3600000) / 60000);
        if (dd > 0) return '⏰ Старт через ' + dd + 'д ' + hh + 'ч ' + mm + 'м';
        if (hh > 0) return '⏰ Старт через ' + hh + 'ч ' + mm + 'м';
        return '⏰ Старт через ' + mm + ' мин';
    }
    if (g.endDate) {
        var d = new Date(g.endDate) - n;
        if (d > 999 * 86400000) return '♾️ Навсегда';
        if (d <= 0) return '⏰ Закончилось';
        var dd = Math.floor(d / 86400000), hh = Math.floor((d % 86400000) / 3600000), mm = Math.floor((d % 3600000) / 60000);
        if (dd > 0) return '⏰ ' + dd + 'д ' + hh + 'ч ' + mm + 'м';
        if (hh > 0) return '⏰ ' + hh + 'ч ' + mm + 'м';
        if (mm > 0) return '⏰ ' + mm + ' мин';
        return '⏰ Меньше минуты!';
    }
    return '';
}

function markClaimed(id, el) {
    localStorage.setItem('claimed_' + id, 'true');
    el.textContent = t('claimed');
    el.style.background = '#444';
}

function renderGames(filter) {
    filter = filter || 'all';
    var c = document.getElementById('gamesContainer');
    if (!c) return;
    var n = new Date(), finished = [], still = [];
    games.forEach(function(g) {
        if (g.status === 'active' && g.endDate) {
            if (new Date(g.endDate) <= n && new Date(g.endDate).getFullYear() < 2099) finished.push(g);
            else still.push(g);
        } else still.push(g);
    });
    if (finished.length > 0) {
        var saved = localStorage.getItem('allHistory'), arch = saved ? JSON.parse(saved) : [];
        finished.forEach(function(g) {
            if (!arch.some(function(a) { return a.id === g.id; })) arch.push({ id: g.id, title: g.title, image: g.image, store: g.store });
        });
        localStorage.setItem('allHistory', JSON.stringify(arch));
        games = still;
    }
    var list = games;
    if (filter === 'expiring') list = games.filter(function(g) { return getCard(g) === 'expiring'; });
    if (filter === 'new') list = games.filter(function(g) { return g.status === 'new'; });
    if (filter === 'active') list = games.filter(function(g) { return g.status === 'active' && getCard(g) !== 'expiring'; });
    if (filter === 'all' || filter === 'active') {
        list.sort(function(a, b) {
            var at = a.endDate && new Date(a.endDate).getFullYear() < 2099;
            var bt = b.endDate && new Date(b.endDate).getFullYear() < 2099;
            if (at && !bt) return -1;
            if (!at && bt) return 1;
            return 0;
        });
    }
    c.innerHTML = list.map(function(g) {
        var claimed = localStorage.getItem('claimed_' + g.id);
        return '<div class="game-card ' + getCard(g) + '">' +
            '<img src="' + g.image + '" class="game-image" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" style="width:100%;height:200px;object-fit:cover;">' +
            '<div style="display:none;background:linear-gradient(135deg,#1a1a3e,#0f0f2a);height:200px;align-items:center;justify-content:center;font-size:80px;">' + g.emoji + '</div>' +
            '<div class="game-info"><span class="game-badge ' + getBadge(g) + '">' + getStatusText(g) + '</span>' +
            '<h3 class="game-title">' + g.title + '</h3><p style="color:#aaa;margin-bottom:10px;">' + getDesc(g) + '</p>' +
            '<div class="game-price"><span class="original">' + g.usualPrice + '</span> → <span class="free">0€</span></div>' +
            '<div class="game-store">' + t('store') + ': ' + g.store + '</div>' +
            '<div class="game-timer">' + getTime(g) + '</div>' +
            '<a href="' + g.storeUrl + '" class="btn-get" target="_blank" rel="nofollow" onclick="markClaimed(' + g.id + ', this)" style="' + (claimed ? 'background:#444;' : '') + '">' + (claimed ? t('claimed') : t('get-free')) + '</a></div></div>';
    }).join('');
    document.getElementById('freeGamesCount').textContent = games.filter(function(g) { return g.status === 'active'; }).length;
    document.getElementById('upcomingCount').textContent = games.filter(function(g) { return g.status === 'new'; }).length;
    clearTimeout(window.timerRefresh);
    window.timerRefresh = setTimeout(function() { renderGames(currentFilter); }, 60000);
}

// ========== ФИЛЬТРЫ ==========
var currentFilter = 'all';
document.querySelectorAll('.filter-btn').forEach(function(b) {
    b.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(function(x) { x.classList.remove('active'); });
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderGames(currentFilter);
    });
});

// ========== ЗАПУСК ==========
function detectLanguage() {
    var s = localStorage.getItem('lang'); if (s) return s;
    var l = navigator.language || navigator.userLanguage;
    if (l.indexOf('ru') === 0) return 'ru';
    if (l.indexOf('es') === 0) return 'es';
    if (l.indexOf('en') === 0) return 'en';
    return 'en';
}
switchLanguage(detectLanguage());
renderGames();
