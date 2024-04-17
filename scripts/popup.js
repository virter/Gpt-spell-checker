class oi6tb217 {
    constructor(dz7mu4nrw, al2v010um = () => {
    }, l2v5jl5 = () => {
    }) {
        this['block'] = dz7mu4nrw;
        this['lowRateCallback'] = al2v010um;
        this['highRateCallback'] = l2v5jl5;
        this['maxRate'] = 0x5;
        this['init']();
    }
    ['init']() {
        this['stars'] = this['block']['querySelectorAll']('[data-rate_star]');
        this['mouseOverHandler'] = rk5597kb0 => {
            const i4gjq = parseInt(rk5597kb0['target']['dataset']['rate_star'], 0xa);
            this['unsetClass']('hover');
            this['unsetClass']('unhover');
            this['setClass'](i4gjq, 'hover', 'unhover');
        };
        this['mouseOutHandler'] = x10dc7r => {
            this['unsetClass']('hover');
            this['unsetClass']('unhover');
        };
        this['clickHandler'] = wvt3hu9j => {
            const f4n61gx9 = parseInt(wvt3hu9j['target']['dataset']['rate_star'], 0xa);
            this['unsetClass']('active');
            this['setClass'](f4n61gx9, 'active');
            this['rateAction'](f4n61gx9);
        };
        this['stars']['forEach'](y6jq18o1 => {
            y6jq18o1['addEventListener']('mouseover', this['mouseOverHandler']);
            y6jq18o1['addEventListener']('mouseout', this['mouseOutHandler']);
            y6jq18o1['addEventListener']('click', this['clickHandler']);
        });
        this['setClass'](this['maxRate'], 'active');
    }
    ['unsetClass'](j65gz3e91) {
        this['stars']['forEach'](ft510gt => {
            ft510gt['classList']['remove'](j65gz3e91);
        });
    }
    ['setClass'](s6tl8n9ct, v7r800y69, um879w = null) {
        for (let yzma70nl6 = 0x1; yzma70nl6 <= s6tl8n9ct; yzma70nl6++) {
            const lycw5v = this['block']['querySelector']('[data-rate_star=\x22' + yzma70nl6 + '\x22]');
            if (!lycw5v)
                continue;
            lycw5v['classList']['add'](v7r800y69);
        }
        if (!um879w)
            return;
        for (let fu0k6h0 = s6tl8n9ct + 0x1; fu0k6h0 <= this['maxRate']; fu0k6h0++) {
            const ru339uy = this['block']['querySelector']('[data-rate_star=\x22' + fu0k6h0 + '\x22]');
            if (!ru339uy)
                continue;
            ru339uy['classList']['add'](um879w);
        }
    }
    ['rateAction'](xe122) {
        if (xe122 >= 0x4) {
            this['highRateCallback'] && this['highRateCallback']();
        } else {
            this['lowRateCallback'] && this['lowRateCallback']();
        }
    }
    ['destroy']() {
        this['stars']['forEach'](r4s91 => {
            r4s91['removeEventListener']('mouseover', this['mouseOverHandler']);
            r4s91['removeEventListener']('mouseout', this['mouseOutHandler']);
            r4s91['removeEventListener']('click', this['clickHandler']);
            this['block']['remove']();
        });
    }
}
class c467xr4q9 {
    constructor(lq5vi) {
        const {
            selector: s3193u8,
            parent: parent = document,
            onSignIn: onSignIn = () => {
            }
        } = lq5vi;
        this['block'] = parent['querySelector'](s3193u8);
        this['btn'] = this['block']['querySelector']('[data-sign_in_btn]');
        this['onSignIn'] = onSignIn;
        this['userService'] = new r8mmsx7u();
        this['init']();
    }
    async ['init']() {
        const nxpxksva8 = await this['userService']['getToken']();
        if (nxpxksva8)
            return;
        this['show']();
        this['btn']['addEventListener']('click', () => {
            chrome['runtime']['sendMessage']({ 'action': 'login' }, async ilzt5ug7 => {
                if (!ilzt5ug7['token'] || !ilzt5ug7['email'])
                    return;
                await this['userService']['setToken'](ilzt5ug7['token']);
                await this['userService']['setEmail'](ilzt5ug7['email']);
                this['onSignIn']({
                    'token': ilzt5ug7['token'],
                    'email': ilzt5ug7['email']
                });
                this['hide']();
                return !![];
            });
        });
    }
    ['hide']() {
        this['block']['classList']['add']('hidden');
    }
    ['show']() {
        this['block']['classList']['remove']('hidden');
    }
}
class lph62a1ip {
    constructor(vcqdb0a1d, iql518yfy = document) {
        this['block'] = iql518yfy['querySelector'](vcqdb0a1d);
        this['emailBlock'] = this['block']['querySelector']('[data-email_block]');
        this['userService'] = new r8mmsx7u();
        this['init']();
    }
    async ['init']() {
        const iou38ve20 = await this['userService']['getEmail']();
        if (!iou38ve20) {
            this['hide']();
            return;
        }
        this['show'](iou38ve20);
    }
    ['setEmail'](nzea20omo) {
        this['emailBlock']['textContent'] = nzea20omo;
    }
    ['hide']() {
        this['setEmail']('');
        this['block']['classList']['add']('hidden');
    }
    ['show'](gplhq223m) {
        this['setEmail'](gplhq223m);
        this['block']['classList']['remove']('hidden');
    }
}
function zqg1p0q(x9o98v74) {
    return chrome['runtime']['getURL'](x9o98v74);
}
function g56cw4f6n() {
    return ([0x989680] + -0x3e8 + -0xfa0 + -0x1f40 + -0x174876e800)['replace'](/[018]/g, cl6cq7g0 => (cl6cq7g0 ^ crypto['getRandomValues'](new Uint8Array(0x1))[0x0] & 0xf >> cl6cq7g0 / 0x4)['toString'](0x10));
}
class s6i65h3 {
    constructor() {
    }
    ['sendContentMessage'](swymh4) {
        chrome['tabs']['query']({}, en58at => {
            for (let s3y91w5n of en58at) {
                chrome['tabs']['sendMessage'](s3y91w5n['id'], swymh4, f12x7vm04 => {
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
    async ['setState'](anokw5y) {
        if (anokw5y === 'on') {
            await chrome['storage']['local']['set']({ 'enabled': !![] });
            this['sendContentMessage']({ 'action': 'enable' });
        } else {
            await chrome['storage']['local']['set']({ 'enabled': ![] });
            this['sendContentMessage']({ 'action': 'disable' });
        }
    }
    async ['getState']() {
        const pq98sc190 = await chrome['storage']['local']['get'](['enabled']);
        return await pq98sc190['enabled'];
    }
}
const sx347ep = new s6i65h3();
class c317kp {
    constructor() {
        this['events'] = {};
    }
    ['add'](e575c) {
        let {
            event: z71451,
            element: yq3p0,
            handler: o3uo19bjz,
            type: type = 'event',
            useCapture: useCapture = ![],
            occlude: occlude = ![]
        } = e575c;
        let zjyps9 = [];
        if (Array['isArray'](yq3p0)) {
            zjyps9 = yq3p0;
        } else if (yq3p0 instanceof NodeList) {
            zjyps9 = Array['from'](yq3p0);
        } else {
            zjyps9 = [yq3p0];
        }
        const pjg2wb = !occlude ? o3uo19bjz : chgcs05 => {
            chgcs05['stopPropagation']();
            chgcs05['preventDefault']();
            o3uo19bjz(chgcs05);
        };
        zjyps9['forEach'](dqnux220 => {
            try {
                dqnux220['addEventListener'](z71451, pjg2wb, useCapture);
            } catch (ht5ne71) {
                console['log'](ht5ne71);
            }
        });
        const pcaqhm = g56cw4f6n();
        this['events'][pcaqhm] = {
            'event': z71451,
            'handler': pjg2wb,
            'elements': zjyps9
        };
        return pcaqhm;
    }
    ['remove'](v42a20h) {
        if (!(v42a20h in this['events']))
            return !![];
        const rbwsxd5 = this['events'][v42a20h];
        rbwsxd5['elements']['forEach'](a1m4a7 => {
            try {
                a1m4a7['removeEventListener'](rbwsxd5['event'], rbwsxd5['handler']);
            } catch (g2a3972p8) {
                console['log'](g2a3972p8);
            }
        });
        delete this['events'][v42a20h];
        return !![];
    }
    ['removeAll']() {
        for (let zn5012 of Object['keys'](this['events'])) {
            this['remove'](zn5012);
        }
    }
}
class r8mmsx7u {
    constructor() {
    }
    async ['setId'](b9u85p795) {
        await chrome['storage']['local']['set']({ 'userId': b9u85p795 });
    }
    async ['getId']() {
        const y0y28a7 = await chrome['storage']['local']['get'](['userId']);
        return 'userId' in y0y28a7 ? y0y28a7['userId'] : null;
    }
    async ['setEmail'](n1y9p7) {
        await chrome['storage']['local']['set']({ 'userEmail': n1y9p7 });
    }
    async ['getEmail']() {
        const hifwbeiaf = await chrome['storage']['local']['get'](['userEmail']);
        if (!('userEmail' in hifwbeiaf))
            return '';
        return hifwbeiaf['userEmail'];
    }
    async ['setToken'](k1za5x3in) {
        await chrome['storage']['local']['set']({ 'userToken': k1za5x3in });
    }
    async ['getToken']() {
        const m6331s = await chrome['storage']['local']['get'](['userToken']);
        if (!('userToken' in m6331s))
            return '';
        return m6331s['userToken'];
    }
}
async function r778fw() {
    const d2cb18l8 = await sx347ep['getState']();
    document['querySelector']('[data-state_switch]')['checked'] = d2cb18l8;
    document['querySelector']('[data-state_switch]')['addEventListener']('change', async zz68b => {
        if (zz68b['target']['checked']) {
            chrome['runtime']['sendMessage']({
                'action': 'setState',
                'state': 'on'
            });
        } else {
            chrome['runtime']['sendMessage']({
                'action': 'setState',
                'state': 'off'
            });
        }
    });
}
function ae74qti() {
    const c4956 = document['querySelectorAll']('[data-localize]');
    for (let z88x1983v of c4956) {
        const x61268d1 = z88x1983v['dataset']['localize'];
        z88x1983v['innerHTML'] = chrome['i18n']['getMessage'](x61268d1);
    }
}
function t3dgbta8b(d70790) {
    chrome['tabs']['create']({ 'url': d70790 });
}
async function b18570r() {
    let j814zn8 = {
        'active': !![],
        'lastFocusedWindow': !![]
    };
    let [disududr3] = await chrome['tabs']['query'](j814zn8);
    return disududr3;
}
async function ti02a() {
    const i36h4 = await chrome['storage']['local']['get'](['siteSupport']);
    if (!('siteSupport' in i36h4))
        return !![];
    const o2lns = await b18570r();
    if (!(o2lns && 'url' in o2lns))
        return !![];
    for (let fzk68j112 of i36h4['siteSupport']['unavailable']) {
        if (o2lns['url']['indexOf'](fzk68j112['domain']) === -0x1)
            continue;
        return !![];
    }
    ;
    return ![];
}
async function v3045z78() {
    const biy4279u = await chrome['storage']['local']['get'](['siteSupport']);
    if (!('siteSupport' in biy4279u))
        return ![];
    const j1604yp = await b18570r();
    if (!(j1604yp && 'url' in j1604yp))
        return ![];
    for (let oi2145mr of biy4279u['siteSupport']['available']) {
        if (j1604yp['url']['indexOf'](oi2145mr['domain']) === -0x1)
            continue;
        return !![];
    }
    ;
    return ![];
}
async function be8xxk3() {
    const u09zk6jl = await ti02a();
    if (!u09zk6jl)
        return;
    const mk8f30 = document['querySelector']('[data-unsupported_notice]');
    mk8f30['classList']['add']('visible');
    const sha699 = document['querySelectorAll']('[data-unsupported_hide]');
    sha699['forEach'](fk082yb => {
        fk082yb['classList']['add']('hidden');
    });
}
function h2wbp() {
    const ex7m15 = document['querySelector']('[data-feedback_modal]');
    ex7m15['classList']['remove']('-frogtool-modal--open');
    const l36s6a6 = document['querySelector']('[data-main_modal]');
    l36s6a6['classList']['remove']('hidden');
}
function q1458(am6msb0g) {
    h2wbp();
    switch (am6msb0g) {
    case 'feedback':
        const ir3369 = document['querySelector']('[data-main_modal]');
        ir3369['classList']['add']('hidden');
        const u565ga14 = document['querySelector']('[data-feedback_modal]');
        u565ga14['classList']['add']('-frogtool-modal--open');
        break;
    case 'share':
        break;
    }
}
function va4g3() {
    const r91y552xo = document['querySelector']('[data-feedback_open_btn]');
    r91y552xo['addEventListener']('click', () => {
        t3dgbta8b('https://docs.google.com/forms/d/e/1FAIpQLSf9yBwMNDfFKz-G4oaonyy3PX8PfZFJq_L889CjItPJgJEWKw/viewform');
    });
    const c0u60 = document['querySelectorAll']('[data-close]');
    c0u60['forEach'](e1jee7f37 => {
        e1jee7f37['addEventListener']('click', () => {
            h2wbp();
        });
    });
}
function ik014vhz4() {
    const wq05i09 = document['querySelector']('[data-open_dialog_btn]');
    wq05i09['addEventListener']('click', () => {
        chrome['tabs']['query']({
            'currentWindow': !![],
            'active': !![]
        }, async rqr5k => {
            const f1of3nu = rqr5k[0x0];
            await chrome['tabs']['sendMessage'](f1of3nu['id'], { 'action': 'openDialog' });
        });
    });
}
const paz95 = new r8mmsx7u();
async function t7x0bbtc() {
    r778fw();
    ae74qti();
    va4g3();
    const kiny1vx83 = await paz95['getToken']();
    const bnu5212 = new lph62a1ip('[data-welcome_block]');
    const qvex57 = new oi6tb217(document['querySelector']('[data-rate_block]'), () => {
        t3dgbta8b('https://docs.google.com/forms/d/e/1FAIpQLSePxbYdXGHHx9fup2iWEgCSQn9iyeEoQXomZrKRXsVKW5OcUg/viewform');
    }, () => {
        t3dgbta8b('https://chrome.google.com/webstore/detail/grammar-check/hbffkehliekjohgiklfhbeoecbplbhdb/reviews');
    });
    ik014vhz4();
}
t7x0bbtc();