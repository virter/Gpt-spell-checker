function e2538b() {
    return ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800)['replace'](/[018]/g, v53918 => (v53918 ^ crypto['getRandomValues'](new Uint8Array(0x1))[0x0] & 0xf >> v53918 / 0x4)['toString'](0x10));
}
class vj12u86f2 {
    constructor() {
    }
    async ['init']() {
        const madk5w = await chrome['storage']['local']['get'](['enabled']);
        if (madk5w['enabled']) {
            this['setBadge']('on');
        } else {
            this['setBadge']('off');
        }
    }
    ['setBadge'](ar6i0mz5 = 'on') {
        if (ar6i0mz5 === 'on') {
            chrome['action']['setBadgeText']({ 'text': '' });
        } else {
            chrome['action']['setBadgeText']({ 'text': 'off' });
            chrome['action']['setBadgeBackgroundColor']({ 'color': '#FF2A51' });
            chrome['action']['setBadgeTextColor']({ 'color': '#FFFFFF' });
        }
    }
}
const l94f52e29 = new vj12u86f2();
class ui1l42 {
    constructor() {
    }
    ['sendContentMessage'](w4ee91q) {
        chrome['tabs']['query']({}, ss81w6 => {
            for (let qb9wp558 of ss81w6) {
                chrome['tabs']['sendMessage'](qb9wp558['id'], w4ee91q, c0ewree10 => {
                    if (chrome['runtime']['lastError']) {
                        console['log']('error:' + chrome['runtime']['lastError']);
                        console['log'](chrome['runtime']['lastError']);
                    } else {
                        console['log']('message\x20successfully\x20sent');
                    }
                });
            }
        });
    }
    async ['setState'](d9r8ke0m) {
        if (d9r8ke0m === 'on') {
            await chrome['storage']['local']['set']({ 'enabled': !![] });
            this['sendContentMessage']({ 'action': 'enable' });
        } else {
            await chrome['storage']['local']['set']({ 'enabled': ![] });
            this['sendContentMessage']({ 'action': 'disable' });
        }
    }
    async ['getState']() {
        const pe7w70b93 = await chrome['storage']['local']['get'](['enabled']);
        return await pe7w70b93['enabled'];
    }
}
const mr7i2qo = new ui1l42();
class fk3w49 {
    constructor() {
        this['apiKey'] = 'a938f4bda0de246d90f29f0262725d7';
        this['apiUrl'] = 'https://api2.amplitude.com/2/httpapi';
    }
    async ['sendEvent'](ki5t14gl0, bs2u7) {
        const a463q78 = {
            'api_key': this['apiKey'],
            'events': [{
                    'user_id': ki5t14gl0,
                    'event_type': bs2u7
                }]
        };
        try {
            let wx2d0e = await fetch(this['apiUrl'], {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Accept': '*/*'
                },
                'body': JSON['stringify'](a463q78)
            });
            return wx2d0e;
        } catch (f1ul79) {
            console['log'](f1ul79);
            return ![];
        }
    }
}
class f32q1 {
    constructor() {
    }
    async ['setId'](j34ol80fq) {
        await chrome['storage']['local']['set']({ 'userId': j34ol80fq });
    }
    async ['getId']() {
        const r9d4jy7w5 = await chrome['storage']['local']['get'](['userId']);
        return 'userId' in r9d4jy7w5 ? r9d4jy7w5['userId'] : null;
    }
    async ['setEmail'](vea0s1777) {
        await chrome['storage']['local']['set']({ 'userEmail': vea0s1777 });
    }
    async ['getEmail']() {
        const m8r35a813 = await chrome['storage']['local']['get'](['userEmail']);
        if (!('userEmail' in m8r35a813))
            return '';
        return m8r35a813['userEmail'];
    }
    async ['setToken'](l31f1n) {
        await chrome['storage']['local']['set']({ 'userToken': l31f1n });
    }
    async ['getToken']() {
        const b9d7qdxc9 = await chrome['storage']['local']['get'](['userToken']);
        if (!('userToken' in b9d7qdxc9))
            return '';
        return b9d7qdxc9['userToken'];
    }
}
async function h691x() {
    await v071ytxc();
}
async function v071ytxc() {
    const h01ll6t25 = 'https://aiwordchecker.online/api/settings';
    try {
        const idnjy = await fetch(h01ll6t25, {
            'method': 'GET',
            'headers': { 'Accept': 'application/json' }
        });
        settings = await idnjy['json']();
        await g5b4hb(settings);
        await i6z3jf(settings);
    } catch (ah41c7ah) {
        throw ah41c7ah;
    }
}
async function g5b4hb(dq4618) {
    if (!('languages' in dq4618))
        return;
    await ufb2246dg(dq4618['languages']);
}
async function ufb2246dg(a841ll4) {
    const mk58f = [];
    for (let s841n95 of a841ll4) {
        mk58f['push']({
            'code': s841n95['code'],
            'name': s841n95['name']
        });
    }
    try {
        await chrome['storage']['local']['set']({ 'languageList': mk58f });
        await chrome['storage']['local']['set']({ 'language': mk58f[0x0]['code'] });
    } catch {
        console['log'](error);
    }
}
async function i6z3jf() {
    const ocv47 = {
        'unsupported_domains': [],
        'supported_domains': []
    };
    if ('unsupported_domains' in settings) {
        ocv47['unsupported_domains'] = settings['unsupported_domains'];
    }
    if ('supported_domains' in settings) {
        ocv47['supported_domains'] = settings['supported_domains'];
    }
    await m78x3nw3(ocv47);
}
async function m78x3nw3(r62i3m2hh) {
    const v0hc9 = {
        'unavailable': [],
        'available': []
    };
    if ('unsupported_domains' in r62i3m2hh) {
        for (let h3dmgh of r62i3m2hh['unsupported_domains']) {
            v0hc9['unavailable']['push']({ 'domain': h3dmgh });
        }
    }
    if ('supported_domains' in r62i3m2hh) {
        for (let o48zx58f of r62i3m2hh['supported_domains']) {
            v0hc9['available']['push']({ 'domain': o48zx58f });
        }
    }
    try {
        await chrome['storage']['local']['set']({ 'siteSupport': v0hc9 });
    } catch (c5l51) {
        console['log'](c5l51);
    }
}
async function u64419() {
    const ockfw = { 'enabled': !![] };
    await chrome['storage']['local']['set'](ockfw);
    chrome['runtime']['setUninstallURL']('https://docs.google.com/forms/d/e/1FAIpQLSePxbYdXGHHx9fup2iWEgCSQn9iyeEoQXomZrKRXsVKW5OcUg/viewform');
}
function g0rf52(en82c6) {
    chrome['tabs']['create']({ 'url': en82c6 });
}
function ue4okt34(ru0362, e5tg340t) {
    if (ru0362['menuItemId'] === 'openDialog') {
        chrome['tabs']['sendMessage'](e5tg340t['id'], {
            'action': 'openDialog',
            'details': { 'text': ru0362['selectionText'] }
        });
    }
    return !![];
}
function isq86() {
    chrome['contextMenus']['removeAll']();
    chrome['contextMenus']['create']({
        'id': 'openDialog',
        'title': chrome['i18n']['getMessage']('context_open_dialog_btn'),
        'contexts': ['selection']
    });
    chrome['contextMenus']['onClicked']['addListener'](ue4okt34);
}
function wu5or8g4() {
    chrome['contextMenus']['onClicked']['removeListener'](ue4okt34);
    chrome['contextMenus']['removeAll']();
}
chrome['runtime']['onStartup']['addListener'](async () => {
    await h691x();
});
chrome['runtime']['onInstalled']['addListener'](async qa0vp => {
    await h691x();
    await u64419();
    if (qa0vp['reason'] === chrome['runtime']['OnInstalledReason']['INSTALL']) {
        const p947a7p = e2538b();
        const n9s7kj66 = new f32q1();
        await n9s7kj66['setId'](p947a7p);
        const o69q6449 = new fk3w49();
        o69q6449['sendEvent'](p947a7p, 'extension_install');
        g0rf52('https://wordsuperb.com/simple-checker-start');
    } else if (qa0vp['reason'] === chrome['runtime']['OnInstalledReason']['UPDATE']) {
    } else if (qa0vp['reason'] === chrome['runtime']['OnInstalledReason']['CHROME_UPDATE']) {
    } else if (qa0vp['reason'] === chrome['runtime']['OnInstalledReason']['SHARED_MODULE_UPDATE']) {
    }
});
const n0vqe = new Map();
n0vqe['set']('setState', (vb30tyhy3, wr0y6cb, f1zx3xn4) => {
    l94f52e29['setBadge'](vb30tyhy3['state']);
    mr7i2qo['setState'](vb30tyhy3['state']);
    return !![];
});
n0vqe['set']('menu', (j1048432r, i24dw6t1, xd1cd4s30) => {
    switch (j1048432r['state']) {
    case 'init':
        isq86();
        break;
    case 'destroy':
        wu5or8g4();
        break;
    }
    return !![];
});
n0vqe['set']('setLanguage', async (u151r8b1, l5atcy9, da3jcnk6) => {
    try {
        await chrome['storage']['local']['set']({ 'language': u151r8b1['language'] });
        da3jcnk6(!![]);
        return !![];
    } catch (j4hjfr) {
        return ![];
    }
});
chrome['runtime']['onMessage']['addListener']((b8wz4304, u7qm89, v5s2w) => {
    if (!n0vqe['has'](b8wz4304['action']))
        return ![];
    const ju0mmkc = n0vqe['get'](b8wz4304['action']);
    ju0mmkc(b8wz4304, u7qm89, v5s2w);
    return !![];
});