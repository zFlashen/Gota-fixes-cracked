;
! function () {
    function H(X) {
        return a(X) || Z(X) || o(X) || b();
    }
    function b() {
        ;
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function Z(X) {
        ;
        if ('undefined' != typeof Symbol && null != X[Symbol.iterator] || null != X['@@iterator']) {
            return Array.from(X);
        }
    }
    function a(X) {
        ;
        if (Array.isArray(X)) {
            return I(X);
        }
    }
    function V(X, D) {
        return g(X) || q(X, D) || o(X, D) || N();
    }
    function N() {
        ;
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function o(X, D) {
        var C;
        if (X) {
            return 'string' == typeof X ? I(X, D) : 'Map' === (C = 'Object' === (C = Object.prototype.toString.call(X).slice(8, -1)) && X.constructor ? X.constructor.name : C) || 'Set' === C ? Array.from(X) : 'Arguments' === C || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? I(X, D) : void 0;
        }
    }
    function I(X, D) {
        ;
        (null == D || D > X.length) && (D = X.length);
        for (var C = 0, F = new Array(D); C < D; C++) {
            F[C] = X[C];
        }
        return F;
    }
    function q(X, D) {
        var C = null == X ? null : 'undefined' != typeof Symbol && X[Symbol.iterator] || X['@@iterator'];
        if (null != C) {
            var F, K, R, p, l = [],
                f = true,
                j = false;
            try {
                if (R = (C = C.call(X)).next, 0 === D) {
                    if (Object(C) !== C) {
                        return;
                    }
                    f = false;
                } else {
                    for (; !(f = (F = R.call(C)).done) && (l.push(F.value), l.length !== D); f = true) {
                        ;
                    }
                }
            } catch (A) {
                j = true;
                K = A;
            } finally {
                try {
                    if (!f && null != C.return && (p = C.return(), Object(p) !== p)) {
                        return;
                    }
                } finally {
                    if (j) {
                        throw K;
                    }
                }
            }
            return l;
        }
    }
    function g(X) {
        ;
        if (Array.isArray(X)) {
            return X;
        }
    }
    function x(X, D) {
        var C, F = Object.keys(X);
        return Object.getOwnPropertySymbols && (C = Object.getOwnPropertySymbols(X), D && (C = C.filter(function (s) {
            ;
            return Object.getOwnPropertyDescriptor(X, s).enumerable;
        })), F.push.apply(F, C)), F;
    }
    function U(X) {
        ;
        for (var D = 1; D < arguments.length; D++) {
            var C = null != arguments[D] ? arguments[D] : {};
            D % 2 ? x(Object(C), true).forEach(function (F) {
                r(X, F, C[F]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(C)) : x(Object(C)).forEach(function (F) {
                ;
                Object.defineProperty(X, F, Object.getOwnPropertyDescriptor(C, F));
            });
        }
        return X;
    }
    function r(X, D, C) {
        ;
        (D = e(D)) in X ? Object.defineProperty(X, D, {
            'value': C,
            'enumerable': true,
            'configurable': true,
            'writable': true
        }) : X[D] = C;
    }
    function e(X) {
        ;
        return X = P(X, 'string'), 'symbol' === J(X) ? X : String(X);
    }
    function P(X, D) {
        ;
        if ('object' !== J(X) || null === X) {
            return X;
        }
        var C = X[Symbol.toPrimitive];
        if (void 0 === C) {
            return ('string' === D ? String : Number)(X);
        }
        C = C.call(X, D || 'default');
        if ('object' !== J(C)) {
            return C;
        }
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    function J(X) {
        ;
        return (J = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (D) {
            return typeof D;
        } : function (D) {
            ;
            return D && 'function' == typeof Symbol && D.constructor === Symbol && D !== Symbol.prototype ? 'symbol' : typeof D;
        })(X);
    }! function (X, D) {
        var C = X(D('d2luZG93')),
            F = C.$,
            s = C.document,
            K = C.Math,
            c, t;
        (function () {
            ;
            function R(H1, H2, H3, H4, H5, H6, H7, H8) {
                var H9 = 0,
                    HH = 0,
                    Hb = Array.isArray(H6) && H6.length ? H6 : Q;
                null == H7 && (H7 = 2654435761);
                null == H8 && (H8 = 2779096485);
                for (var HZ = 0; HZ < Hb.length; HZ++) {
                    switch (Hb[HZ]) {
                    case 0:
                        H9 = K.imul(H2 >>> 0, H7 >>> 0) >>> 0;
                        break;
                    case 1:
                        HH = (H3 >>> 0 ^ H9) >>> 0;
                        break;
                    case 2:
                        HH = HH + ((255 & H1) << 16) >>> 0;
                        break;
                    case 3:
                        HH = HH + (65535 & H4) >>> 0;
                        break;
                    case 4:
                        HH = H5(HH >>> 0, H3 >>> 0) >>> 0;
                        break;
                    case 5:
                        HH = (HH ^ H8 >>> 0) >>> 0;
                        break;
                    case 6:
                        HH = (HH ^ HH >>> 7) >>> 0;
                    }
                }
                for (var Ha = new Array(7).fill(false), HZ = 0; HZ < Hb.length; HZ++) {
                    0 <= (HV = Hb[HZ]) && HV <= 6 && (Ha[HV] = true);
                }
                for (var HV = 0; HV <= 6; HV++) {
                    if (!Ha[HV]) {
                        switch (HV) {
                        case 0:
                            H9 = K.imul(H2 >>> 0, H7 >>> 0) >>> 0;
                            break;
                        case 1:
                            HH = (H3 >>> 0 ^ H9) >>> 0;
                            break;
                        case 2:
                            HH = HH + ((255 & H1) << 16) >>> 0;
                            break;
                        case 3:
                            HH = HH + (65535 & H4) >>> 0;
                            break;
                        case 4:
                            HH = H5(HH >>> 0, H3 >>> 0) >>> 0;
                            break;
                        case 5:
                            HH = (HH ^ H8 >>> 0) >>> 0;
                            break;
                        case 6:
                            HH = (HH ^ HH >>> 7) >>> 0;
                        }
                    }
                }
                return (HH >>> 0).toString(36).toUpperCase();
            }
            function j(H1) {
                ;
                for (var H2 = 2166136261, H3 = 0; H3 < H1.length; H3++) {
                    H2 = 16777619 * ((H2 ^ H1.charCodeAt(H3)) >>> 0);
                }
                return (H2 >>> 0).toString(36).toUpperCase();
            }
            var A = '__aopc3mu9';
            if (!window[A]) {
                function H1(H2, H3) {
                    return (H2 << (H3 &= 7) | H2 >>> 32 - H3) >>> 0;
                }
                var y = new Uint8Array([
                        0,
                        97,
                        115,
                        109,
                        1,
                        0,
                        0,
                        0,
                        1,
                        7,
                        1,
                        96,
                        4,
                        127,
                        127,
                        127,
                        127,
                        1,
                        127,
                        3,
                        2,
                        1,
                        0,
                        7,
                        7,
                        1,
                        3,
                        114,
                        111,
                        116,
                        0,
                        0,
                        10,
                        23,
                        1,
                        21,
                        0,
                        32,
                        3,
                        32,
                        2,
                        65,
                        7,
                        113,
                        116,
                        32,
                        3,
                        65,
                        32,
                        32,
                        2,
                        65,
                        7,
                        113,
                        107,
                        118,
                        114,
                        11
                    ]),
                    Q = [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ];
                Object.defineProperty(window, A, {
                    'value': function (H2, H3, H4, H5, H6, H7, H8, H9) {
                        ;
                        H3 = R(H2, H3, H4, H5, H1, H6, H7, H8);
                        if (4 <= H2) {
                            try {
                                var HH, Hb = parseInt(H3, 36);
                                isNaN(Hb) || (Hb = ((Hb = Hb >>> 0 ^ H9 >>> 0) << (HH = 7 & H9) | Hb >>> 32 - HH) >>> 0, H3 = ((Hb ^= H9 >>> 3) >>> 0).toString(36).toUpperCase());
                            } catch (HZ) {}
                        }
                        return H3;
                    },
                    'writable': false
                });
                try {
                    var O = window[A];
                    if (O && !O._envSig) {
                        var T = window.navigator || {},
                            Y = T.userAgent || '',
                            M = T.userAgentData && T.userAgentData.platform || T.platform || '',
                            B = 0;
                        try {
                            B = T.plugins && T.plugins.length || 0;
                        } catch (H2) {}
                        var L = '',
                            G = '',
                            S = 0;
                        try {
                            var z, W = s.createElement('canvas'),
                                E = W.getContext('webgl') || W.getContext('experimental-webgl');
                            E && (S = 1, z = E.getExtension('WEBGL_debug_renderer_info')) && (L = E.getParameter(z.UNMASKED_VENDOR_WEBGL) || '', G = E.getParameter(z.UNMASKED_RENDERER_WEBGL) || '');
                        } catch (H3) {}
                        var w = 0;
                        try {
                            window.process && window.process.versions && window.process.versions.electron && (w |= 1);
                        } catch (H4) {}
                        try {
                            /Electron/i.test(Y) && (w |= 2);
                        } catch (H5) {}
                        var H0 = [
                            j(Y),
                            j(M),
                            B,
                            S,
                            j(L),
                            j(G),
                            w
                        ].join('.');
                        O._envSig = H0;
                        O._env = {
                            'uaH': j(Y),
                            'pf': M,
                            'pc': B,
                            'gl': S,
                            'gvH': j(L),
                            'grH': j(G),
                            'eb': w
                        };
                    }
                } catch (H6) {}
                if ('object' == ('undefined' == typeof WebAssembly ? 'undefined' : J(WebAssembly))) {
                    try {
                        WebAssembly.instantiate(y).then(function (H7) {
                            ;
                            try {
                                var H8 = H7.instance.exports.rot,
                                    H9 = window[A];
                                Object.defineProperty(window, A, {
                                    'value': function (HH, Hb, HZ, Ha, HV, HN, Ho, HI) {
                                        ;
                                        Hb = R(HH, Hb, HZ, Ha, function (Hx, HU) {
                                            return H8(0, 0, 0 | HU, 0 | Hx) >>> 0;
                                        }, HV, HN, Ho);
                                        if (4 <= HH) {
                                            try {
                                                var Hq, Hg = parseInt(Hb, 36);
                                                isNaN(Hg) || (Hg = ((Hg = Hg >>> 0 ^ HI >>> 0) << (Hq = 7 & HI) | Hg >>> 32 - Hq) >>> 0, Hb = ((Hg ^= HI >>> 3) >>> 0).toString(36).toUpperCase());
                                            } catch (Hx) {}
                                        }
                                        return Hb;
                                    },
                                    'writable': false
                                });
                                try {
                                    H9 && H9._envSig && !window[A]._envSig && (window[A]._envSig = H9._envSig, window[A]._env = H9._env);
                                    window[A]._wasm = 1;
                                } catch (HH) {}
                            } catch (Hb) {}
                        }).catch(function () {});
                    } catch (H7) {}
                }
            }
        }());
        (function () {
            ;
            function R(j, A, v, y, Q, O) {
                var T = navigator || {},
                    Y = T.userAgent || '';
                try {
                    var B = window[j];
                    B && B._envSig && (M.mx = B._envSig);
                } catch (W) {}
                var B = 0,
                    L = 0;
                try {
                    window.process && process.versions && process.versions.electron && (B |= 1);
                } catch (E) {}
                try {
                    /Electron/i.test(Y) && (B |= 2);
                } catch (w) {}
                try {
                    'function' == typeof window.require && (B |= 4);
                } catch (H0) {}
                try {
                    window.process && 'renderer' === window.process.type && (B |= 8);
                } catch (H1) {}
                try {
                    T.webdriver && (L |= 1);
                } catch (H2) {}
                M.el = B;
                M.hv = L;
                M.ua = function (H3) {
                    ;
                    for (var H4 = 2166136261, H5 = 0; H5 < H3.length; H5++) {
                        H4 = 16777619 * ((H4 ^ H3.charCodeAt(H5)) >>> 0);
                    }
                    return (H4 >>> 0).toString(36).toUpperCase();
                }(Y);
                M.pf = T.userAgentData && T.userAgentData.platform || T.platform || '';
                j = [];
                1 & B && j.push('EP');
                2 & B && j.push('EU');
                4 & B && j.push('RF');
                8 & B && j.push('PR');
                1 & L && j.push('WD');
                j.length && (M.mk = j.join(','));
                try {
                    for (var G = R.toString(), k = G.length, S = 0, z = 0; z < G.length; z++) {
                        S = S + G.charCodeAt(z) & 65535;
                    }
                    M.ti = {
                        'l': k,
                        'c': S
                    };
                    (k < 150 || 1200 < k) && (j.push ? j : []).push('TM');
                    j.length && !M.mk ? M.mk = j.join(',') : j.length && (M.mk = M.mk + ',' + j[j.length - 1]);
                    try {
                        M.dq = ((65535 & (k ^ S ^ 24375)) >>> 0).toString(36).toUpperCase();
                    } catch (H3) {}
                } catch (H4) {}
                return JSON.stringify(M);
            }
            var p;
            window.__GOTA_TELEM_INIT__ || (window.__GOTA_TELEM_INIT__ = true, p = 'undefined' != typeof WeakSet ? new WeakSet() : [], window.sendEnvTelemetry = function (j, A, v, y, Q, O, T) {
                ;
                if (j && 1 === j.readyState && (z = j) && (p instanceof Array ? -1 === p.indexOf(z) : !p.has(z))) {
                    (z = j) && (p instanceof Array ? -1 === p.indexOf(z) && p.push(z) : p.add(z));
                    z = R(y || '');
                    try {
                        var Y = new TextEncoder().encode(z);
                        if (!(1200 < Y.length)) {
                            for (var M = Y, B = (A ^ v ^ Q ^ O ^ T) >>> 0 >>> 0, L = 0; L < M.length; L++) {
                                B = ((B = (B ^= B << 13) ^ B >>> 17) ^ B << 5) >>> 0;
                                M[L] ^= 255 & B;
                            }
                            var G = new ArrayBuffer(3 + Y.length),
                                k = new DataView(G);
                            k.setUint8(0, 125);
                            k.setUint16(1, Y.length, true);
                            for (var S = 0; S < Y.length; S++) {
                                k.setUint8(3 + S, Y[S]);
                            }
                            j.send(G);
                        }
                    } catch (W) {}
                }
                var z;
            });
        }());
        null == C.fuckAdBlock && (C.aiptag = null != (c = C.aiptag) ? c : {}, Object.defineProperty(C.aiptag, 'settings', {
            'get': function () {
                return t;
            },
            'set': function (R) {
                ;
                R.iBtLoader = false;
                t = R;
            }
        }));
        C.gajsn = function () {
            var H0, H1 = new function () {
                    ;
                    this.t = false;
                    this.i = 'CP_0918_01';
                    this.o = 'https://gota.io/policies/privacy.html?v=' + this.i + '#cookies';
                    this.h = F('#cc_acceptCookies');
                    this.u = {
                        'p': 'cookieConsent',
                        'm': 'yes+' + this.i,
                        'k': 730,
                        '$': '/web'
                    };
                    this.v = {
                        '_': F('#cookie-banner'),
                        'S': F('#declineCookies'),
                        'N': F('#acceptCookies'),
                        'M': false
                    };
                    this.C = function () {
                        ;
                        this.O();
                        this.h.on('change', function () {
                            ;
                            H1.H(F(this).prop('checked'));
                        });
                        this.F() === this.u.m ? (this.H(true), this.D(false)) : (this.H(false), this.D(true));
                    };
                    this.H = function (VF) {
                        ;
                        if (this.t = VF, C.aiptag.consented = VF, this.h.prop('checked', VF), VF) {
                            if (this.A(), this.D(false), H1.t) {
                                var VF = C.localStorage.getItem('theme'),
                                    Vs = C.localStorage.getItem('fixes_theme'),
                                    VK = (ak(U(U({}, JSON.parse(null != VF ? VF : '{}')), JSON.parse(null != Vs ? Vs : '{}'))), C.localStorage.getItem('keybinds'));
                                if (VK) {
                                    for (var Vc in (VK = JSON.parse(VK), bC)) {
                                        var VR = VK[Vc];
                                        Number.isInteger(VR) && (bC[Vc] = VR);
                                    }
                                }
                                var Vp = C.localStorage.getItem('options');
                                if (Vp) {
                                    for (var Vl in (Vp = JSON.parse(Vp), bD))
                                        Vl in Vp && (bD[Vl] = Vp[Vl]);
                                }
                                var Vf, Vj = C.localStorage.getItem('fixes_version'),
                                    VA = '';
                                for (Vf of [
                                        [
                                            20,
                                            'Added an option to change zoom delay.\n\nIncreased the default zoom delay to match Gota\'s zoom speed at 60fps.\n\nAdded an option for darker bot colors.'
                                        ],
                                        [
                                            21,
                                            'Fixed an issue where certain ad-blockers were causing a red error banner to appear.\n\nFixed an issue where Donut linesplits were not working properly after a recent Gota Fixes update.'
                                        ],
                                        [
                                            22,
                                            'Fixed a Gota bug causing a red error banner to appear whenever viewing a player\'s profile while logged out.\n\nUpdated to Gota version 3.6.4:\n- Nothing needed to be changed besides the version number.'
                                        ],
                                        [
                                            23,
                                            'Fixed an issue causing store advertisements to still show in chat every 30 minutes.\n\nAdded Gota\'s halloween theme.'
                                        ],
                                        [
                                            24,
                                            'Improved FPS while using the "Show Coordinates" option by about 15%.\n\nOther slight optimisations.'
                                        ],
                                        [
                                            25,
                                            'Added a linesplit keybind:\n\n- Pretty much 100% success rate, unless your mouse is too close to the center of your cell. Animation delay, camera delay or ping doesn\'t affect it.\n\n- Lineup time is as low as 50ms, depending on your ping.\n\n- Allows activation when you have more than 1 cell.\n\n- Allows splitting immediately after lining up.\n\n- Option for toggle or hold activation.\n\nPlease let me know if there are any issues. I can tweak it to take a little longer to lineup for more consistency.'
                                        ],
                                        [
                                            26,
                                            'Fixed an issue causing the script to break when using Violentmonkey.\n\nFixed an issue causing no cells to appear after seeing the "Allow Cookies" prompt.'
                                        ],
                                        [
                                            27,
                                            'Slightly increased linesplit line-up time for more consistency with large mass.\n\nFixed an issue causing degrading performance over long game sessions.\n\nFreezing mouse before and after linesplitting should now work as expected.\nNote: Freezing mouse quickly after pressing the linesplit key will cause your cell to freeze if it hasn\'t lined up yet.'
                                        ],
                                        [
                                            28,
                                            'Hopefully fixed the Gota bug that causes auto respawn to break when dying immediately after pressing Play.\n\nFixed a Gota bug preventing the Esc key from closing social menus such as profile and friends list.\n\nFixed an issue causing the Spectate button to break if it was pressed while the player is still alive.\n\nAdded an option slider to change menu animation speed: Menu Delay.\nIt can be set to 0 if you want no animations.'
                                        ],
                                        [
                                            29,
                                            'Slightly decreased the delay between switching tabs when multiboxing with capped FPS.'
                                        ],
                                        [
                                            30,
                                            'Added options and keybinds to hide bot names, masses and skins.\n\nContext menu for names in the chat, leaderboard and party now take priority over cell context menus.\nIn other words, trying to right click a chat name when a cell is underneath will show the chat name context menu, as expected.\n\nThe Context Menu keybind now applies to chat, leaderboard and party, instead of just cells.\n\nAdded 5 more zoom level keybinds. Zoom difference between each level has decreased for finer control.\n\nAdded a theme option for map background image.\n\nFixed an issue preventing the Linesplit Mode option from saving after refreshing the page.'
                                        ],
                                        [
                                            31,
                                            'Updated to Gota version 3.6.5:\n- Halloween theme.\n- Chat message history can be accessed using the up and down arrows when typing in chat.\n- Added score panel style option: Hidden, Vertical, Horizontal.\n- Added reconnect seconds option.\n- Added some (barely functional) mobile device compatibility.\n- Added Mass in score panel.\n- Moved Score next to Cells in score panel.\n\nFixed a Gota issue causing horizontal score panel to expand the party panel.\n\nFixed a minor Gota issue with the chat message history.\n\nFixed issues causing some scripts to break after the Gota update.'
                                        ],
                                        [
                                            32,
                                            'Fixed a Gota issue causing the player to not spawn in when connecting to a server using the Play button while logged in with silent login disabled.'
                                        ]
                                    ]) {
                                    var Vv = V(Vf, 2),
                                        Vy = Vv[0],
                                        Vv = Vv[1];
                                    Vj < Vy && (VA += Vv + '\n\n');
                                }
                                0 !== VA.length && Hw('Gota Fixes was updated!', VA += '\nIf you enjoy these updates, please consider donating to help me make more!');
                                C.localStorage.setItem('fixes_version', '32');
                                var Vd, VQ, VO = C.localStorage.getItem('fixes_options'),
                                    VT = C.localStorage.getItem('fixes_keybinds');
                                if (VO) {
                                    var VY, VM = (VO = JSON.parse(VO))[aB];
                                    for (VY in (null != VM && (VM & 4609) === 4609 && (aL.forEach(function (VE) {
                                            var VE = V(VE, 3),
                                                Vu = VE[0],
                                                Vi = VE[1],
                                                VE = VE[2];
                                            bD[VE] = 1 === Vi ? !!(VM & 1 << Vu) : VM >> Vu & (1 << Vi) - 1;
                                        }), delete VO[aB]), VO.cHorizontalScorePanel && (bD.sScorePanel = '1'), bs))
                                        VY in VO && (bD[VY] = VO[VY]);
                                }
                                if (VT) {
                                    for (var VB in (!('kZoom10' in (VT = JSON.parse(VT))) && 'kZoom5' in VT && Object.assign(VT, {
                                            'kZoom2': bC.kZoom2,
                                            'kZoom3': VT.kZoom2,
                                            'kZoom4': bC.kZoom4,
                                            'kZoom5': bC.kZoom5,
                                            'kZoom6': VT.kZoom3,
                                            'kZoom8': VT.kZoom4,
                                            'kZoom10': VT.kZoom5
                                        }), bK))
                                        VB in VT && (bC[VB] = VT[VB]);
                                }
                                for (Vd in bC) {
                                    var VL = F('#' + Vd);
                                    0 !== VL.length && ZW(VL);
                                }
                                for (VQ of Object.entries(bD)) {
                                    var VG = V(VQ, 2),
                                        Vk = VG[0],
                                        Vm = VG[1],
                                        VS = F('#' + Vk);
                                    if (0 !== VS.length) {
                                        switch (Vk.charAt(0)) {
                                        case 'c':
                                            true === Vm && (VS.prop('checked', true), aA(VS));
                                            break;
                                        case 's':
                                            VS.val(Vm), av(VS);
                                            break;
                                        case 'r':
                                            VS.val(Vm), ay(VS);
                                            break;
                                        case 'i':
                                            VS.val(Vm), ad(VS);
                                        }
                                    }
                                }
                                bZ.I.css('width', bD.iChatWidth);
                                bZ.I.css('height', bD.iChatHeight);
                                bD.cThemeEnabled || aQ('cThemeEnabled');
                                null != (VF = C.localStorage.getItem('name')) && F('#name-box').val(VF);
                                var Vz = C.localStorage.getItem('subpanel');
                                if (Vz) {
                                    for (var Vh in (Vz = JSON.parse(Vz), bO))
                                        Vh in Vz && (bO[Vh] = Vz[Vh]);
                                }
                            }
                            aH();
                            var VW = F('#spNameColor'),
                                Vs = (VW.val(Zf(bO.nameColor)), VW[0].dispatchEvent(Zk()), VW.on('input', function () {
                                    ;
                                    return bO.nameColor = Zl(VW.val());
                                }), F('#spChatColor'));
                            Vs.val(V7[bO.chatColor]);
                            Vs[0].dispatchEvent(Zk());
                            Vs.on('input', function () {
                                ;
                                return bO.chatColor = a8();
                            });
                            F('#spSkinName').val(bO.skinName);
                            F('#spLowerName').prop('checked', bO.lowerName);
                            F('#spEffect').val(bO.effect);
                            F('#spNameFont').val(bO.nameFont);
                            F('#btn-chg-ln').on('click', function () {
                                var VE, Vu;
                                b3 && (VE = prompt('Enter new locked name!')) && (Vu = 'string' != typeof VE ? 'Please enter a valid name!' : null, VE.length < 2 && (Vu = 'Locked names must be 2 or more characters long.'), null != (Vu = 20 < VE.length ? 'Locked names must be 20 or less characters long.' : Vu) ? alert(Vu) : (VE = VE.trim(), confirm('You are about to change your locked name to: \'' + VE + '\'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?') && Hc.T(bm.P(VE))));
                            });
                            F('#btn-updateSP').on('click', a9);
                            F('#btn-subpanel-rules').on('click', function () {
                                ;
                                bO.rules = true;
                                aH();
                            });
                            F('#no_cookie_consent').hide();
                            'none' !== F('#account-loader').css('display') ? F('#guest').hide() : F('#guest').show();
                        } else {
                            this.L();
                            null != Hb.auth().currentUser && Hb.auth().signOut().catch(function () {});
                            F('#authed').hide();
                            F('#account-loader').hide();
                            F('#guest').hide();
                            F('#no_cookie_consent').show();
                            this.D(true);
                        }
                    };
                    this.D = function (VF) {
                        ;
                        VF ? (this.v.M || (this.R(), this.v.M = true), this.v._.slideDown()) : this.v._.slideUp();
                    };
                    this.R = function () {
                        ;
                        this.v.S.on('click', function () {
                            H1.H(false);
                            H1.D(false);
                        });
                        this.v.N.on('click', function () {
                            H1.H(true);
                            H1.D(false);
                        });
                        F('#cookie-banner .description').append(' <a href="' + this.o + '" target="_blank">Our Cookie Policy!</a>');
                    };
                    this.A = function () {
                        ;
                        (VF = new Date()).setTime(VF.getTime() + 24 * this.u.k * 60 * 60 * 1000);
                        var VF = 'expires=' + VF.toUTCString();
                        s.cookie = this.u.p + '=' + this.u.m + ';' + VF + ';path=' + this.u.$ + ';';
                    };
                    this.L = function () {
                        ;
                        s.cookie = this.u.p + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + this.u.$ + ';';
                    };
                    this.F = function () {
                        ;
                        for (var VF = this.u.p + '=', Vs = decodeURIComponent(s.cookie).split(';'), VK = 0; VK < Vs.length; VK++) {
                            for (var Vc = Vs[VK];
                                ' ' === Vc.charAt(0);) {
                                Vc = Vc.substring(1);
                            }
                            if (0 === Vc.indexOf(VF)) {
                                return Vc.substring(VF.length, Vc.length);
                            }
                        }
                        return false;
                    };
                    this.O = function () {
                        ;
                        for (var VF = 'cookieconsent_status=', Vs = decodeURIComponent(s.cookie).split(';'), VK = null, Vc = 0; Vc < Vs.length; Vc++) {
                            for (var VR = Vs[Vc];
                                ' ' === VR.charAt(0);) {
                                VR = VR.substring(1);
                            }
                            0 === VR.indexOf(VF) && (VK = VR.substring(VF.length, VR.length));
                        }
                        'allow' === VK && this.A();
                        s.cookie = 'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;';
                    };
                }(),
                H2 = [
                    'white',
                    '#25f',
                    '#f31',
                    'green',
                    'yellow',
                    'purple',
                    'orange'
                ],
                H3 = [
                    '',
                    'MOUSE1',
                    'MOUSE2',
                    'MOUSE3',
                    'MOUSE4',
                    'MOUSE5',
                    'HELP',
                    '',
                    'BACK_SPACE',
                    'TAB',
                    '',
                    '',
                    'CLEAR',
                    'ENTER',
                    'ENTER_SPECIAL',
                    '',
                    'SHIFT',
                    'CONTROL',
                    'ALT',
                    'PAUSE',
                    'CAPS_LOCK',
                    'KANA',
                    'EISU',
                    'JUNJA',
                    'FINAL',
                    'HANJA',
                    '',
                    'ESCAPE',
                    'CONVERT',
                    'NONCONVERT',
                    'ACCEPT',
                    'MODECHANGE',
                    'SPACE',
                    'PAGE_UP',
                    'PAGE_DOWN',
                    'END',
                    'HOME',
                    'LEFT',
                    'UP',
                    'RIGHT',
                    'DOWN',
                    'SELECT',
                    'PRINT',
                    'EXECUTE',
                    'PRINTSCREEN',
                    'INSERT',
                    'DELETE',
                    '',
                    '0',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    ':',
                    ';',
                    '<',
                    '=',
                    '>',
                    '?',
                    'AT',
                    'A',
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L',
                    'M',
                    'N',
                    'O',
                    'P',
                    'Q',
                    'R',
                    'S',
                    'T',
                    'U',
                    'V',
                    'W',
                    'X',
                    'Y',
                    'Z',
                    'OS_KEY',
                    '',
                    'CONTEXT_MENU',
                    '',
                    'SLEEP',
                    'NUMPAD0',
                    'NUMPAD1',
                    'NUMPAD2',
                    'NUMPAD3',
                    'NUMPAD4',
                    'NUMPAD5',
                    'NUMPAD6',
                    'NUMPAD7',
                    'NUMPAD8',
                    'NUMPAD9',
                    'MULTIPLY',
                    'ADD',
                    'SEPARATOR',
                    'SUBTRACT',
                    'DECIMAL',
                    'DIVIDE',
                    'F1',
                    'F2',
                    'F3',
                    'F4',
                    'F5',
                    'F6',
                    'F7',
                    'F8',
                    'F9',
                    'F10',
                    'F11',
                    'F12',
                    'F13',
                    'F14',
                    'F15',
                    'F16',
                    'F17',
                    'F18',
                    'F19',
                    'F20',
                    'F21',
                    'F22',
                    'F23',
                    'F24',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'NUM_LOCK',
                    'SCROLL_LOCK',
                    'WIN_OEM_FJ_JISHO',
                    'WIN_OEM_FJ_MASSHOU',
                    'WIN_OEM_FJ_TOUROKU',
                    'WIN_OEM_FJ_LOYA',
                    'WIN_OEM_FJ_ROYA',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'CIRCUMFLEX',
                    'EXCLAMATION',
                    'DOUBLE_QUOTE',
                    'HASH',
                    'DOLLAR',
                    'PERCENT',
                    'AMPERSAND',
                    'UNDERSCORE',
                    'OPEN_PAREN',
                    'CLOSE_PAREN',
                    'ASTERISK',
                    'PLUS',
                    'PIPE',
                    'HYPHEN_MINUS',
                    'OPEN_CURLY_BRACKET',
                    'CLOSE_CURLY_BRACKET',
                    'TILDE',
                    '',
                    '',
                    '',
                    '',
                    'VOLUME_MUTE',
                    'VOLUME_DOWN',
                    'VOLUME_UP',
                    '',
                    '',
                    'SEMICOLON',
                    'EQUALS',
                    'COMMA',
                    'MINUS',
                    'PERIOD',
                    'SLASH',
                    'BACK_QUOTE',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    'OPEN_BRACKET',
                    'BACK_SLASH',
                    'CLOSE_BRACKET',
                    'QUOTE',
                    '',
                    'META',
                    'ALTGR',
                    '',
                    'WIN_ICO_HELP',
                    'WIN_ICO_00',
                    '',
                    'WIN_ICO_CLEAR',
                    '',
                    '',
                    'WIN_OEM_RESET',
                    'WIN_OEM_JUMP',
                    'WIN_OEM_PA1',
                    'WIN_OEM_PA2',
                    'WIN_OEM_PA3',
                    'WIN_OEM_WSCTRL',
                    'WIN_OEM_CUSEL',
                    'WIN_OEM_ATTN',
                    'WIN_OEM_FINISH',
                    'WIN_OEM_COPY',
                    'WIN_OEM_AUTO',
                    'WIN_OEM_ENLW',
                    'WIN_OEM_BACKTAB',
                    'ATTN',
                    'CRSEL',
                    'EXSEL',
                    'EREOF',
                    'PLAY',
                    'ZOOM',
                    '',
                    'PA1',
                    'WIN_OEM_CLEAR',
                    ''
                ],
                H4 = [
                    'heart',
                    'star',
                    'home',
                    'apple',
                    'spiral',
                    'dice',
                    'chicken',
                    'ghost',
                    'burger',
                    'bow',
                    'cloud',
                    'skull',
                    'mug',
                    'flower',
                    'music',
                    'checkmark',
                    'clover',
                    'crown',
                    'fancy',
                    'fish',
                    'fire',
                    'lightning',
                    'paw',
                    'duck',
                    'snowflake',
                    'bomb',
                    'butterfly',
                    'cherry',
                    'watermelon',
                    'cat',
                    'cupid',
                    'sword',
                    'shield',
                    'tornado',
                    'radioactive',
                    'rocket',
                    'wave'
                ];
            for (H0 of 'abcdefghijklmnopqrstuvwxyz')
                H4.push('letter_' + H0);
            for (var H5 = 0; H5 < 10; H5++) {
                H4.push('number_' + H5);
            }
            var H6, H7 = [],
                H9 = [
                    new ah('Random', 'random', 0),
                    new ah('Maximum Cells Upgrade', 'extracells', 1),
                    new ah('Extra Consumable Slot', 'extraconsumable', 1),
                    new ah('Merge', 'merge', 2),
                    new ah('Grow', 'grow', 2),
                    new ah('Speed', 'speed', 2),
                    new ah('Shield', 'shield', 2),
                    new ah('Virus', 'spike', 3),
                    new ah('Disrupt', 'disrupt', 3),
                    new ah('Teleport', 'teleport', 3),
                    new ah('Disrupt', '_disrupt', 4),
                    new ah('Silver', 'phoenix', 1),
                    new ah('Consumable Shield', '_shield', 3),
                    new ah('Magnet', 'magnet', 2),
                    new ah('Decay', 'decay', 3),
                    new ah('Decay', '_decay', 4)
                ],
                HH = C.PIXI,
                Hb = C.firebase,
                HZ = (C.PIXI = null, 'An unnamed cell'),
                HV = {
                    'fontFamily': 'Verdana',
                    'fontWeight': 'bold',
                    'fontSize': 69,
                    'fill': 16777215
                },
                HN = new HH.Point(0.5, 0.5),
                Ho = new HH.Container(),
                HI = new HH.Sprite(),
                Hq = (HI.visible = false, new HH.Graphics()),
                Hg = (Hq.visible = false, new HH.Container()),
                Hx = V(function () {
                    ;
                    class VF extends HH.ParticleContainer {
                        J() {
                            var Vs = K.ceil(this.children.length / this._batchSize);
                            if (0 !== Vs) {
                                ++this._updateID;
                                for (var VK = 0; VK < Vs; ++VK) {
                                    this._bufferUpdateIDs[VK] = this._updateID;
                                }
                            }
                        }
                    }
                    return [
                        new VF(1500, null, 16384, true),
                        new HH.ParticleContainer(1500, null, 16384, true)
                    ];
                }(), 2),
                HU = Hx[0],
                Hr = Hx[1],
                HP = new HH.Container(),
                HJ = new HH.Sprite(),
                Hx = function (VF) {
                    var Vs = s.createElement('canvas'),
                        VK = Vs.getContext('2d');
                    return Vs.width = Vs.height = 2 * VF, VK.beginPath(), VK.arc(VF, VF, VF, 0, HH.PI_2), VK.fillStyle = '#fff', VK.fill(), (VF = HH.Texture.from(Vs)).defaultAnchor = HN, VF;
                },
                HX = Hx(256),
                HD = Hx(6);
            function HC(VF, Vs, VK) {
                ;
                return K.min(K.max(VF, Vs), VK);
            }
            Hg.addChild(HI, Hq, HU, Hr, HP);
            Ho.addChild(Hg, HJ);
            var HF, Hs, HK, Hc, HR, Hp, Hl, Hf, Hj, HA, Hv, Hy, Hd, HQ, HO, HT, HY, HM, HB, HL, HG, Hk, Hm, HS, Hh, HW, HE, Hu, Hw, b0, b1, b2 = '',
                b3 = false,
                b4 = null,
                b5 = false,
                b6 = {
                    'Y': [],
                    'V': [],
                    'K': [],
                    'Z': []
                },
                b7 = [],
                b8 = false,
                b9 = null,
                bH = true,
                bb = 2 * K.PI,
                bZ = {},
                ba = new Hb.auth.GoogleAuthProvider(),
                bV = 'https://accounts.gota.io',
                bN = {
                    'X': 'halloween2023',
                    'q': [
                        15633692,
                        11224098,
                        9453167,
                        6301513
                    ],
                    'ee': '',
                    'te': 1730505600000,
                    'ie': {
                        'ne': HN,
                        'se': {
                            'ae': 1,
                            'oe': 1
                        }
                    }
                },
                bo = (bN.re = Date.now() < bN.te, Hb.initializeApp({
                    'apiKey': 'AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM',
                    'authDomain': 'accounts.gota.io',
                    'databaseURL': 'https://gota-io.firebaseio.com',
                    'projectId': 'gota-io',
                    'storageBucket': 'gota-io.appspot.com',
                    'messagingSenderId': '570450309042',
                    'appId': '1:570450309042:web:380ab6c94d44de2f'
                }), {}),
                bI = {},
                bg = [{
                        'name': 'All',
                        'flags': 255,
                        'maxMessages': 100
                    },
                    {
                        'name': 'Party',
                        'flags': 2,
                        'maxMessages': 100
                    }
                ],
                bx = 4000,
                bU = 4000,
                br = {
                    'ue': 1,
                    'pe': 15,
                    'fe': 11,
                    'me': 1,
                    'ge': function (VF, Vs) {
                        ;
                        bD[VF] = Vs;
                        var VK = 1000 * (br.pe - Vs) + 750;
                        switch (VF) {
                        case 'rRainbowNameSpeed':
                            bx = VK;
                            break;
                        case 'rRainbowCellSpeed':
                            bU = VK;
                        }
                    }
                },
                bP = 0,
                bJ = [],
                bX = -1,
                bD = {
                    'cDisableAA': false,
                    'cAutoRespawn': false,
                    'cHideId': false,
                    'sRenderType': 'AUTO',
                    'sTextOutlines': 'NONE',
                    'sQuality': 'ULTRA',
                    'sMassType': 'DEFAULT',
                    'cTransCells': false,
                    'cShowBorder': false,
                    'cSilentLogin': false,
                    'cHideChat': false,
                    'cHideMinimap': false,
                    'sScorePanel': '2',
                    'cShowCoordinates': false,
                    'cHideFood': false,
                    'cColoredPing': false,
                    'cColoredCellCount': false,
                    'cThemeEnabled': false,
                    'cDisableAutoZoom': false,
                    'cAutoDecline': false,
                    'cDisableEventSkins': false,
                    'cResizableChat': false,
                    'cDisableAutoNameHiding': false,
                    'cDisableAutoFoodHiding': false,
                    'cDisablePersistEjectMass': false,
                    'iChatWidth': '360px',
                    'iChatHeight': '250px',
                    'rUiScale': 1,
                    'rReconnectPeriod': 5,
                    'rAnimationDelay': 90,
                    'rViewDistance': 100,
                    '_ChatTabs': JSON.parse(JSON.stringify(bg))
                },
                bC = {
                    'kContextMenu': ZE('mouse3'),
                    'kEjectMass': ZE('w'),
                    'kToggleSpec': ZE('q'),
                    'kSplit': ZE('space'),
                    'kDoubleSplit': -1,
                    'kTripleSplit': -1,
                    'kQuadSplit': -1,
                    'kHexaSplit': -1,
                    'kFreezeMouse': -1
                },
                bF = Object.freeze({
                    'be': ZE('enter'),
                    'ke': ZE('escape'),
                    'zoomIn': ZE('up'),
                    'zoomOut': ZE('down'),
                    'chatInputHistoryUp': ZE('up'),
                    'chatInputHistoryDown': ZE('down'),
                    '$e': ZE('escape')
                }),
                bs = {
                    'cHideLockedNames': false,
                    'cHideOwnName': false,
                    'cHideFriendNames': false,
                    'cHideBotNames': false,
                    'cHideEnemyNames': false,
                    'cHideOwnMass': true,
                    'cHideFriendMasses': true,
                    'cHideBotMasses': true,
                    'cHideEnemyMasses': true,
                    'cHideOwnSkin': false,
                    'cHideFriendSkins': false,
                    'cHideBotSkins': false,
                    'cHideEnemySkins': false,
                    'cDarkerBotColors': true,
                    'cUncapFPS': false,
                    'cSmoothCells': true,
                    'sLinesplitMode': 'TOGGLE',
                    'cHideLeaderboardHeader': false,
                    'cHidePartyHeader': false,
                    'cEnableSounds': true,
                    'iSplitSound': '',
                    'iEjectSound': '',
                    'sCameraFocus': 'CENTER',
                    'rCameraDelay': 0,
                    'rZoomDelay': 165,
                    'rMenuDelay': 500,
                    'spRainbowName': false,
                    'spRainbowCell': false,
                    'rRainbowNameSpeed': br.fe,
                    'rRainbowCellSpeed': br.fe
                },
                bK = {
                    'kLinesplit': -1,
                    'kPentaSplit': -1,
                    'kSeptiSplit': -1,
                    'kOctoSplit': -1,
                    'kCycleNames': ZE('n'),
                    'kCycleMasses': ZE('m'),
                    'kCycleSkins': ZE('k'),
                    'kHideOwnName': -1,
                    'kHideFriendNames': -1,
                    'kHideBotNames': -1,
                    'kHideEnemyNames': -1,
                    'kHideOwnMass': -1,
                    'kHideFriendMasses': -1,
                    'kHideBotMasses': -1,
                    'kHideEnemyMasses': -1,
                    'kHideOwnSkin': -1,
                    'kHideFriendSkins': -1,
                    'kHideBotSkins': -1,
                    'kHideEnemySkins': -1
                },
                bR = function () {
                    ;
                    for (var VF = {
                            VK: {
                                'we': 'Zoom level ' + Vs,
                                'ye': 5 * (0.04 ** 0.1111111111111111) ** (Vs - 1)
                            }
                        }, Vs = 1; Vs <= 10; Vs++) {
                        var VK = 'kZoom' + Vs;
                        bK[VK] = -1;;
                    }
                    return VF;
                }(),
                bp = new Map(),
                bl = false,
                bf = Object.assign({}, bC),
                bA = void 0 !== C.ontouchstart,
                bv = {
                    'version': 2,
                    'uiForegroundColor': 'rgb(255, 255, 255)',
                    'uiBackgroundColor': 'rgba(22, 22, 22, 0.8)',
                    'uiBorderColor': 'rgba(255, 255, 255, .2)',
                    'uiMenuBackgroundColor': '#2A2A2A',
                    'uiMenuTitleBackgroundColor': '#404040',
                    'uiMenuSubBackgroundColor': '#363636',
                    'uiMenuSubBackground2Color': '#404040',
                    'uiButtonColor': '#444444',
                    'uiGameBackgroundColor': '#121212',
                    'uiGameBorderColor': '#ff0000',
                    'uiLeaderboardHighlightSelf': '#ffaaaa',
                    'uiLeaderboardHighlightParty': '#ffff00',
                    'uiPartyLeaderColor': '#00ffff',
                    'uiGameColorSuccess': '#00ff00',
                    'uiGameColorWarning': '#ffff00',
                    'uiGameColorError': '#ff0000',
                    '_FoodColors': [],
                    'aCustomBackground': '',
                    'aCustomSpike': '',
                    'aCustomMother': '',
                    'rBorderSize': 32,
                    'rBackgroundOpacity': 1
                },
                by = U({}, bv),
                bQ = (Object.assign(bD, bs), Object.assign(bC, bK), Object.assign(bv, bc), []),
                bO = {
                    'rules': false,
                    'nameColor': {
                        'r': 0,
                        'g': 255,
                        'b': 255
                    },
                    'chatColor': 0,
                    'lowerName': false,
                    'skinName': '',
                    'effect': 0,
                    'nameFont': 0
                },
                bT = null,
                bY = 0,
                bM = null,
                bB = C.atob('YlZheHkzYVdEd2NDZ3l4YW1kQkxadFVSMWVEMg=='),
                bL = 'https://store.gota.io/camlan',
                bG = C.performance.now.bind(C.performance),
                bk = {
                    'Se': null,
                    'Ne': function () {},
                    'Me': function () {},
                    'Ce': function () {},
                    'Ee': function () {},
                    'xe': function () {},
                    'Oe': function () {},
                    'He': function () {},
                    'Fe': function () {}
                },
                bm = {
                    'De': function () {
                        var VF = 'Gota Web ' + C.version,
                            Vs = new ZJ(1 + VF.length + 1 + 1),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 255), VK.setUint8(1, 6), ZA(2, VK, VF), Vs;
                    },
                    'Ae': function (VF) {
                        var Vs = new ZJ(2 + 2 * (VF.length + 1)),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 0), Zv(1, VK, VF), bD.cSilentLogin && VK.setUint8(2 + 2 * VF.length + 1, 1), Vs;
                    },
                    'Ie': function (VF) {
                        var Vs = new ZJ(1);
                        return new ZP(Vs).setUint8(0, VF), Vs;
                    },
                    'Te': function (VF, Vs) {
                        var VK = new ZJ(9),
                            Vc = new ZP(VK);
                        return Vc.setUint8(0, 16), Vc.setInt32(1, VF, true), Vc.setInt32(5, Vs, true), VK;
                    },
                    'Pe': function (VF) {
                        var Vs = new ZJ(1);
                        return new ZP(Vs).setUint8(0, VF ? 3 : 4), Vs;
                    },
                    'Le': function () {
                        var VF = new ZJ(1);
                        return new ZP(VF).setUint8(0, 71), VF;
                    },
                    'Re': function (VF) {
                        var Vs = new ZJ(3),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 1), VF && VK.setUint16(1, VF, true), Vs;
                    },
                    'Ue': function (VF, Vs) {
                        var VK = new ZJ(2 + 2 * (VF.length + 1)),
                            Vc = new ZP(VK);
                        return Vc.setUint8(0, 72), Vc.setUint8(1, Vs), Zv(2, Vc, VF), VK;
                    },
                    'Be': function (VF) {
                        var Vs = new ZJ(2),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 41), VK.setUint8(1, VF ? 1 : 0), Vs;
                    },
                    'je': function (VF, Vs) {
                        var VK = new ZJ(6),
                            Vc = new ZP(VK);
                        return Vc.setUint8(0, 40), Vc.setUint8(1, VF), Vc.setUint32(2, Vs, true), VK;
                    },
                    'Ge': function (VF) {
                        var Vs = new ZJ(1 + VF.length + 1),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 42), ZA(1, VK, VF), Vs;
                    },
                    'We': function (VF) {
                        var Vs = new ZJ(3),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 103), VK.setUint16(1, VF, true), Vs;
                    },
                    'ze': function (VF, Vs) {
                        var VK = new ZJ(5 + 2 * (Vs.length + 1)),
                            Vc = new ZP(VK);
                        return Vc.setUint8(0, 73), Vc.setUint32(1, VF, true), Zv(5, Vc, Vs), VK;
                    },
                    'Je': function () {
                        var VF = new ZJ(8 + (bO.skinName.length + 1)),
                            Vs = new ZP(VF);
                        return Vs.setUint8(0, 10), Vs.setUint8(1, bO.nameColor.r), Vs.setUint8(2, bO.nameColor.g), Vs.setUint8(3, bO.nameColor.b), Vs.setUint8(4, bO.chatColor), Vs.setUint8(5, bO.effect), Vs.setUint8(6, bO.lowerName ? 1 : 0), ZA(7, Vs, bO.skinName), Vs.setUint8(8 + bO.skinName.length, bO.nameFont), VF;
                    },
                    'P': function (VF) {
                        var Vs = new ZJ(1 + (VF.length + 1)),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 11), ZA(1, VK, VF), Vs;
                    },
                    'Ye': function () {
                        var VF = new ZJ(3),
                            Vs = new ZP(VF);
                        return Vs.setUint8(0, 104), Vs.setUint16(1, bD.rViewDistance, true), VF;
                    },
                    'Ve': function (VF) {
                        var Vs = new ZJ(5),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 80), VK.setUint8(1, VF), VK.setUint8(2, 0), VK.setUint16(3, 0), Vs;
                    },
                    'Ke': function (VF) {
                        var Vs = new ZJ(2),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 90), VK.setUint8(1, VF), Vs;
                    },
                    'Ze': function () {
                        var VF = new ZJ(1);
                        return new ZP(VF).setUint8(0, 81), VF;
                    },
                    'Qe': function () {
                        var VF = new ZJ(2);
                        return new ZP(VF).setUint8(0, 93), VF;
                    },
                    'Xe': function (VF, Vs) {
                        var VK = new ZJ(5 + 2 * (Vs.length + 1)),
                            Vc = new ZP(VK);
                        return Vc.setUint8(0, 94), Vc.setUint32(1, VF, true), Zv(5, Vc, Vs), VK;
                    },
                    'qe': function (VF) {
                        var Vs = new ZJ(1 + (VF.length + 1)),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 100), ZA(1, VK, VF), Vs;
                    },
                    'et': function (VF) {
                        var Vs = new ZJ(1 + (VF.length + 1)),
                            VK = new ZP(Vs);
                        return VK.setUint8(0, 101), ZA(1, VK, VF), Vs;
                    },
                    'tt': function (VF, Vs, VK) {
                        var Vc = new ZJ(4),
                            VR = new ZP(Vc);
                        return VR.setUint8(0, 91), VR.setUint8(1, VF), VF === 3 || VF === 7 ? VR.setUint16(2, Vs, false) : VF === 11 ? VR.setInt16(2, Vs, false) : (VR.setUint8(2, Vs), VR.setUint8(3, VK)), Vc;
                    },
                    'ot': function (VF, Vs) {
                        var VK = new ZJ(2 + 2 * (Vs.length + 1)),
                            Vc = new ZP(VK);
                        return Vc.setUint8(0, 92), Vc.setUint8(1, VF), Zv(2, Vc, Vs), VK;
                    }
                };
            function bS(VF) {
                ;
                HF = s.getElementById('canvas');
                Hs = s.getElementById('minimap-canvas');
                HK = Hs.getContext('2d');
                Hy = F('#main');
                Hd = F('#party-panel');
                HQ = F('.hud-panel');
                HE = F('#score-panel');
                HT = F('#main-scrimmage');
                HY = F('#context-menu');
                HM = F('#chat-input');
                HO = F('#leaderboard-header');
                HW = F('#scrimmage-custom');
                Object.assign(bZ, {
                    'rt': F('#pMouse'),
                    'ct': F('#pScore span')[0],
                    'lt': F('#pMass span')[0],
                    'dt': F('#pPing span')[0],
                    'ht': F('#pCells span')[0],
                    'ut': F('#pFps span')[0],
                    'ft': F('#extra-reset-timer'),
                    'gt': F('#resetTime'),
                    'bt': F('#extra-respawn-cooldown'),
                    'kt': F('#respawnCooldown'),
                    '$t': F('#spectatorCount'),
                    'wt': 0,
                    'yt': F('#minimap-coordinates'),
                    'vt': Hd,
                    '_t': F('#social-online-friends-count'),
                    'St': F('#popup-profile'),
                    'Nt': F('#popup-account-username'),
                    'Mt': F('#scrimmage-map'),
                    'Ct': F('#scrimmage-mapmode'),
                    'Et': F('#scrimmage-mapsize'),
                    'xt': F('#scrimmage-startmass'),
                    'I': F('#chat-panel'),
                    'Ot': F('#touch_controls')
                });
                F('td:contains(Disable Auto Name Hiding)').text('Disable Auto Mass Hiding');
                F('#cShowMass').parents('tr').hide();
                F('#sShowNames').parents('tr').hide();
                F('#sShowSkins').parents('tr').hide();
                F('#pServer').hide();
                F('#cHideServer').parents('tr').hide();
                F('#main-options table').prepend('\n        <thead>\n          <th colspan="4">Gota Fixes Options</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan="3" data-balloon="Hides all locked name features (besides cell colors) of other players." data-balloon-pos="down" data-balloon-length="fit">\n              Hide Locked Name Features\n            </td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideLockedNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Own Name</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideOwnName"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Friend Names</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideFriendNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Bot Names</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideBotNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Enemy Names</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideEnemyNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Own Mass</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideOwnMass"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Friend Masses</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideFriendMasses"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Bot Masses (Autosplit modes)</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideBotMasses"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Enemy Masses (Autosplit modes)</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideEnemyMasses"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Own Skin</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideOwnSkin"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Friend Skins</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideFriendSkins"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Bot Skins</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideBotSkins"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Enemy Skins</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideEnemySkins"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Darker Bot Colors</td>\n            <td><input type="checkbox" class="checkbox-options" id="cDarkerBotColors"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Uncap FPS</td>\n            <td><input type="checkbox" class="checkbox-options" id="cUncapFPS"></td>\n          </tr>\n          <tr>\n            <td colspan="3" data-balloon="Small cells will have smoother skins and edges, but cells and names may appear to be blurry." data-balloon-pos="up" data-balloon-length="fit">\n              Smooth Cells\n            </td>\n            <td><input type="checkbox" class="checkbox-options" id="cSmoothCells"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Linesplit Mode</td>\n            <td>\n              <select id="sLinesplitMode">\n                <option value="TOGGLE">Toggle</option>\n                <option value="HOLD">Hold</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Leaderboard/Queue Header</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideLeaderboardHeader"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Party Header</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHidePartyHeader"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Enable Sounds</td>\n            <td><input type="checkbox" class="checkbox-options" id="cEnableSounds"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Split Sound: </td>\n            <td><input id="iSplitSound" class="input-option" placeholder="https://example.wav" /></td>\n          </tr>\n          <tr>\n            <td colspan="3">Eject Sound: </td>\n            <td><input id="iEjectSound" class="input-option" placeholder="https://example.wav" /></td>\n          </tr>\n          <tr>\n            <td colspan="3">Camera Focus</td>\n            <td>\n              <select id="sCameraFocus">\n                <option value="CENTER">Center</option>\n                <option value="MASS">Biggest Cells</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan="2" style="overflow-x: visible" data-balloon="Default: 0" data-balloon-pos="up">Camera Delay: <input class="options-input" id="cameraDelay" style="float: none;"></td>\n            <td colspan="2"><input type="range" id="rCameraDelay" min="0" max="250" value="0" step="1" /></td>\n          </tr>\n          <tr>\n            <td colspan="2" style="overflow-x: visible" data-balloon="Default: 165" data-balloon-pos="up">Zoom Delay: <input class="options-input" id="zoomDelay" style="float: none;"></td>\n            <td colspan="2"><input type="range" id="rZoomDelay" min="0" max="400" value="165" step="1" /></td>\n          </tr>\n          <tr>\n            <td colspan="2" style="overflow-x: visible" data-balloon="Default: 500" data-balloon-pos="up">Menu Delay: <input class="options-input" id="menuDelay" style="float: none;"></td>\n            <td colspan="2"><input type="range" id="rMenuDelay" min="0" max="1000" value="500" step="5" /></td>\n          </tr>\n        </tbody>\n      ');
                var Vs, VK = '\n        <thead>\n          <th colspan="4">Gota Fixes Keybinds</th>\n        </thead>\n        <tr>\n          <td colspan="3">Linesplit</td>\n          <td><button id="kLinesplit" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Penta Split (32x)</td>\n          <td><button id="kPentaSplit" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Septi Split (128x)</td>\n          <td><button id="kSeptiSplit" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Octo Split (256x)</td>\n          <td><button id="kOctoSplit" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Cycle Names</td>\n          <td><button id="kCycleNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Cycle Masses</td>\n          <td><button id="kCycleMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Cycle Skins</td>\n          <td><button id="kCycleSkins" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Own Name</td>\n          <td><button id="kHideOwnName" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Friend Names</td>\n          <td><button id="kHideFriendNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Bot Names</td>\n          <td><button id="kHideBotNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Enemy Names</td>\n          <td><button id="kHideEnemyNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Own Mass</td>\n          <td><button id="kHideOwnMass" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Friend Masses</td>\n          <td><button id="kHideFriendMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Bot Masses</td>\n          <td><button id="kHideBotMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Enemy Masses (Autosplit)</td>\n          <td><button id="kHideEnemyMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Own Skin</td>\n          <td><button id="kHideOwnSkin" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Friend Skins</td>\n          <td><button id="kHideFriendSkins" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Bot Skins</td>\n          <td><button id="kHideBotSkins" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Enemy Skins</td>\n          <td><button id="kHideEnemySkins" class="keybinds-btn"></button></td>\n        </tr>\n      ';
                for (Vs of Object.entries(bR)) {
                    var Vc = V(Vs, 2),
                        VR = Vc[0],
                        Vc = Vc[1],
                        Vp = Vc.we,
                        Vc = Vc.ye;
                    VK += '<tr>\n            <td colSpan="3">' + Vp + '</td>\n            <td><button id="' + VR + '" class="keybinds-btn"></button></td>\n          </tr>';
                    bR[VR] = Vc;
                }
                F('#main-hotkeys table').prepend(VK);
                F('#main-themes table').prepend('\n        <thead>\n          <th colspan="4">Gota Fixes Theme</th>\n        </thead>\n        <tr>\n          <td colspan="3">Map Background: </td>\n          <td><input id="iMapBackground" class="input-option" placeholder="https://example.png" /></td>\n        </tr>\n      ');
                F('.main-content, .main-right').css('height', '530px');
                F('.server-table tbody').css('height', '421px');
                F('.options-container').css('height', '480px');
                F('#server-content').css('height', '456px');
                F('#main-rb').css('height', '340px');
                F('.main-rb-title').css('padding', '10px');
                F('#main-account').css('height', '180px');
                F('.policyLinks').css({
                    'flex-wrap': 'wrap'
                }).append('<span style="text-align: center">If you enjoy using Gota Fixes, please consider donating to support the developer.</span>', F('<a href="https://ko-fi.com/camlan" target="_blank">Donate</a>').css({
                    'border-radius': '15px',
                    'background-color': '#00b9fe',
                    'padding': '0 18px',
                    'font-size': '16px',
                    'text-decoration': 'none',
                    'font-weight': 600,
                    'height': '26px',
                    'line-height': '25px',
                    'margin-top': '3px'
                }));
                Object.assign(F('#account-shop')[0].dataset, {
                    'balloon': 'Use code "camlan" in the "Support A Creator" section at checkout for a 10% discount!',
                    'balloonPos': 'left',
                    'balloonLength': 'medium'
                });
                F('#rAnimationDelay').attr('min', 1);
                var Vl, Vf, Vj, VA, Vv, Vy = s.createElement('style');
                function Vd(N8, N9, NH) {
                    var Nb = NH.ue,
                        NZ = NH.pe,
                        Na = NH.fe,
                        NV = NH.me,
                        NN = NH.ge,
                        NH = N9,
                        N9 = bD[N8],
                        No = (NH = F('\n          <tr>\n            <td style="overflow-x: visible" data-balloon="Default: ' + Na + '" data-balloon-pos="up">' + NH + ': <input class="options-input" style="float: none;" value="' + N9 + '"></td>\n            <td><input type="range" min="' + Nb + '" max="' + NZ + '" value="' + N9 + '" step="' + NV + '"/></td>\n          </tr>\n        ')).find('.options-input'),
                        NI = NH.find('[type=range]');
                    return No.on('change', function () {
                        var Nq = parseInt(No.val()),
                            Nq = HC(Nq = isNaN(Nq) ? Na : Nq, Nb, NZ);
                        No.val(Nq);
                        NI.val(Nq);
                        NN(N8, Nq);
                    }), NI.on('input', function () {
                        var Nq = parseInt(NI.val());
                        No.val(Nq);
                        NN(N8, Nq);
                    }), NN(N8, N9), NH;
                }
                function VQ(N8) {
                    ;
                    N8 && !bM ? (bM = F('<thead><th colspan="2">Gota Fixes</th></thead>').add(F('<tbody>').append('<tr>\n                  <td>Rainbow Name</td>\n                  <td><input type="checkbox" id="spRainbowName"></td>\n                </tr>', Vd('rRainbowNameSpeed', 'Rainbow Name Speed', br), '<tr>\n                  <td>Rainbow Cell</td>\n                  <td><input type="checkbox" id="spRainbowCell"></td>\n                </tr>', Vd('rRainbowCellSpeed', 'Rainbow Cell Speed', br))), VB.append(bM), VB.find('[type=checkbox]').change(function () {
                        aA(F(this));
                    }).prop('checked', function () {
                        return bD[this.id];
                    }), VB.find('[type=range]').css('width', '110px')) : N8 || (bD.spRainbowName = bD.spRainbowCell = false, null != (N8 = Hc.Ft) && N8.Ht(), bM && (bM.remove(), bM = null));
                    aH();
                }
                Vy.innerHTML = '\n        .input-option {\n          border: none;\n          border-radius: 5px;\n        }\n      ';
                Vy.innerHTML += '\n          .popup-container {\n            width: initial;\n            max-width: 640px;\n            min-width: 320px;\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            align-content: center;\n          }\n\n          #popup-party-code {\n            width: 320px;\n          }\n\n          .alert-scroller {\n            max-height: 450px;\n            margin-bottom: 5px;\n            overflow-y: auto;\n          }\n\n          .alert-scroller::-webkit-scrollbar {\n            width: 6px\n          }\n          \n          .alert-scroller::-webkit-scrollbar-thumb {\n            background-color: #a9a9a9;\n            border-radius: 4px\n          }\n        ';
                Vl = F('<div class="popup-panel" style="display: none">');
                Vf = F('<span class="title-text menu-title">');
                Vj = F('<div style="font: 12pt open sans; white-space: pre-line; margin: 5px 16px">');
                VA = F('<button class="gota-btn" style="margin: 5px auto; display: block">Dismiss</button>');
                Vv = F('<div class="alert-scroller">').append(Vj, VA);
                Vl.append(Vf, Vv);
                F('.popup-container').append(Vl);
                Hw = function (N8, N9) {
                    var NH;
                    Vl.is(':visible') || ((NH = Hy.is(':visible')) && ap(Hy), Vf.text(N8), Vj.html(N9), VA.one('click', function () {
                        ap(Vl);
                        NH && aR(Hy);
                    }), aR(Vl));
                };
                var VO, VT, VY, VM, VB = F('#subpanel-content > table');
                function VL() {
                    ;
                    Hc && HB && (HB = false, HL = Date.now(), Hc.T(bm.Pe(false)));
                }
                for (VY in (b0 = VB.children(), Hb.auth().onAuthStateChanged(function (N8) {
                        ;
                        N8 ? Hb.database().ref('/friendships/' + N8.uid).on('value', function (N9) {
                            ;
                            VQ(N9 = (N9 = N9.val()) && Object.entries(N9).some(function (NH) {
                                var NH = V(NH, 2),
                                    Nb = NH[0],
                                    NH = NH[1];
                                return Nb === bB && NH;
                            }));
                        }) : VQ(false);
                    }), Vy.innerHTML += '\n        #party-panel { width: max-content }\n      ', Vy.innerHTML += '\n        #leaderboard-panel { padding: 5px 0 }\n        #leaderboard-panel > * { margin: 0 }\n      ', Vy.innerHTML += '\n        #leaderboard-canvas { pointer-events: auto }\n      ', Vy.innerHTML += '\n        #minimap-coordinates { color: unset }\n      ', s.head.appendChild(Vy), VT = HO[0], b1 = function (N8) {
                        ;
                        N8 !== VT.textContent && (VT.textContent = N8);
                    }, HQ.hide(), HB = false, HL = 0, bA ? (C.FastClick.attach(s.body), C.nipplejs.create({
                        'zone': F('#joystick')[0],
                        'mode': 'static',
                        'position': {
                            'left': '10%',
                            'bottom': '20%'
                        },
                        'color': 'red',
                        'size': 100,
                        'restOpacity': 0.5,
                        'dynamicPage': true
                    }).on('move', function (N8, N9) {
                        var NH = N9.distance,
                            Nb = N9.force,
                            N9 = N9.angle;
                        Hc.Dt = NH * Nb * K.cos(N9.radian) + C.innerWidth / 2;
                        Hc.At = NH * Nb * K.sin(-N9.radian) + C.innerHeight / 2;
                    }), bD.cHideChat = true, bD.cHideLeaderboard = true, VO = function (N8) {
                        return Hc.It(bC[N8]);
                    }, F('.touch_button').on('touchstart touchend', function (N8) {
                        var N9 = N8.type;
                        N8.target.style.opacity = 'touchstart' === N9 ? 1 : 0.3;
                    }), F('#button_split').on('touchstart', function () {
                        ;
                        return VO('kSplit');
                    }), F('#button_double').on('touchstart', function () {
                        ;
                        return VO('kDoubleSplit');
                    }), F('#button_triple').on('touchstart', function () {
                        ;
                        return VO('kTripleSplit');
                    }), F('#button_eject').on('touchstart', function () {
                        ;
                        return VO('kEjectMass');
                    }).on('touchend', VL)) : (C.onmousemove = function (N8) {
                        ;
                        Hc.Dt = N8.clientX;
                        Hc.At = N8.clientY;
                    }, C.onmousedown = function (N8) {
                        var N9 = N8.button + 1;
                        bl ? (Zh(N9), N8.preventDefault()) : F('input').is(':focus') || Hc.It(N9);
                    }, C.onmouseup = function (N8) {
                        ;
                        (N8 = N8.button + 1) === bC.kEjectMass ? VL() : N8 === bC.kLinesplit && bk.Ee();
                    }, C.onwheel = function (N8) {
                        ;
                        aK(Hy) || 'canvas' !== N8.target.id || (N8 = N8.wheelDelta || -1 * N8.deltaY, Hc.Tt *= 0 < N8 ? 1.1 : 0.9);
                    }), C.onkeydown = function (N8) {
                        var N9 = N8.which || N8.keyCode || N8.charCode;
                        N9 <= 5 || (bl ? (Zh(N9), N8.preventDefault()) : F('input').is(':focus') || Hc.It(N9));
                    }, C.onkeyup = function (N8) {
                        ;
                        (N8 = N8.which || N8.keyCode || N8.charCode) === bC.kEjectMass ? VL() : N8 === bC.kLinesplit && bk.Ee();
                    }, C.addEventListener('blur', function () {
                        ;
                        bD.cDisablePersistEjectMass && VL();
                    }), s.addEventListener('contextmenu', function (N8) {
                        ;
                        return N8.preventDefault();
                    }), Zi(), a3(), HG = {}, Hk = {}, Va)) {
                    var VG = Va[VY];
                    F('.emote-list').append('<li><img name=\'' + VG + '\' title=\'' + VG + '\' src=\'images/emotes/' + VG + '.png\' /></li>');
                    HG[VG] = true;
                }
                for (VM in VV) {
                    var Vk = VV[VM];
                    F('.gif-list').append('<li><img name=\'' + Vk + '\' title=\'' + Vk + '\' src=\'images/emotes/gifs/' + Vk + '.gif\' /></li>');
                    Hk[Vk] = true;
                }
                for (var Vm, VS, Vz, Vh, VW = 0; VW < H4.length; VW++) {
                    ! function (N8) {
                        ;
                        VS = (Vm = H4[N8]).replace(/^(letter|number)_/, '');
                        F('#spEffect').append('<option value="' + (N8 + 1) + '">' + (VS[0].toUpperCase() + VS.slice(1)) + '</option>');
                        H7[N8] = HX;
                        var N9 = new Image();
                        N9.src = 'images/ejected_mass_skins/' + Vm + '.png';
                        N9.onload = function () {
                            ;
                            return H7[N8] = HH.Texture.from(N9);
                        };
                    }(VW);
                }
                for (Vz of H9)
                    ! function (N8) {
                        var N9 = new Image();
                        N9.src = 'images/powerups/' + N8.Pt + '.png';
                        N9.addEventListener('load', function () {
                            ;
                            N8.Lt = HH.Texture.from(N9);
                            N8.Lt.defaultAnchor = HN;
                        });
                        N8.Rt = N9;
                    }(Vz);
                function VE(N8) {
                    ;
                    F.ajax({
                        'type': 'GET',
                        'dataType': 'json',
                        'url': bV + '/api/v1/utilities/servers',
                        'success': function (N9) {
                            var NH;
                            for (NH of N9)
                                ! function () {
                                    var Nb = NH.region,
                                        NZ = NH.servers;
                                    bo[Nb] = {};
                                    NZ.sort(function (Na, NV) {
                                        ;
                                        return Na.order - NV.order;
                                    }).forEach(function (Na) {
                                        ;
                                        Na.players = +Na.players;
                                        Na.bots || (Na.bots = 0);
                                        Na.playersText = Na.players + Na.bots + '/' + Na.playersMax;
                                        0 < Na.bots && (Na.playersText += '*');
                                        Na.region = Nb;
                                        bo[Nb][Na.name] = Na;
                                    });
                                }();
                            aZ();
                            null != N8 ? N8() : null != HA && aV(HA.name);
                        },
                        'error': aZ
                    });
                }
                function Vu(N8, N9) {
                    ;
                    N8 ? (F(N9).prop('disabled', false), F(N9).text('Set')) : (F(N9).prop('disabled', true), F(N9).text('...'));
                }
                function Vi(N8) {
                    ;
                    N5.style.width = N2 + N8.clientX - N0 + 'px';
                    N5.style.height = N3 - (N8.clientY - N1) + 'px';
                }
                function Vw() {
                    ;
                    s.documentElement.removeEventListener('mousemove', Vi, false);
                    s.documentElement.removeEventListener('mouseup', Vw, false);
                }
                aY = HH.Texture.from('images/shield.png');
                aT = HH.Texture.from('images/debuff.png');
                aY.defaultAnchor = aT.defaultAnchor = HN;
                Vv = V(C.location.href.split('#').slice(1).join('#').split('&'), 2);
                Vh = Vv[0];
                Hm = Vv[1];
                Hu = function () {
                    ;
                    null != (Vh = aa(Vh) || aa(C.localStorage.getItem('server'))) ? (aV(Vh.name), aN(Vh.region)) : null != HA ? aV(HA.name) : (aN('eu'), aV('Vendetta'));
                };
                Hb.database().ref('/game').on('value', function (N8) {
                    var N9, NH = N8.val(),
                        Nb = (/\d+\.\d+/.exec(C.version)[0] !== /\d+\.\d+/.exec(NH.version)[0] && Hc.Ut('Gota has updated to version ' + NH.version + '. Gota Fixes script may be unstable.'), NH.motd);
                    for (N9 in (null == Nb || [
                            'store',
                            'accounts'
                        ].some(function (NZ) {
                            ;
                            return Nb.toLowerCase().includes(NZ);
                        }) || b2 === Nb || (b2 = Nb, Hc.Ut(Nb)), NH.listRefresh !== bY && (bY = NH.listRefresh, bo = {}, VE(Hu), clearInterval(bT), bT = setInterval(function () {
                            VE();
                        }, NH.listRefresh)), NH.titles))
                        V8.set(NH.titles[N9], parseInt(N9));
                });
                Zu() && F('body').toggleClass('event-' + bN.X);
                F('.server-tab').on('click', function () {
                    ;
                    aN(F(this).attr('region'));
                });
                F('#btn-play').on('click', function () {
                    ;
                    null != HA && (Hc.Bt() && Hc.jt === HA.name ? ap(Hy) : (Hc.Gt = false, Hc.Wt()));
                });
                F('#btn-spec').on('click', function () {
                    ;
                    null != HA && ((Hc.Bt() || Hc.Gt) && Hc.jt === HA.name ? ap(Hy) : (Hc.Gt = true, Hc.zt()));
                });
                F('#btn-servers').on('click', function () {
                    ;
                    return af('main-servers');
                });
                F('#btn-options').on('click', function () {
                    ;
                    return af('main-options');
                });
                F('#btn-hotkeys').on('click', function () {
                    ;
                    return af('main-hotkeys');
                });
                F('#btn-themes').on('click', function () {
                    ;
                    return af('main-themes');
                });
                F('#btn-cellpanel').on('click', function () {
                    ;
                    return af('main-subpanel');
                });
                F('#btn-reddit').on('click', function () {
                    ;
                    return C.open('https://www.reddit.com/r/PlayGotaIO/', '_blank');
                });
                F('#btn-discord').on('click', function () {
                    ;
                    return C.open('https://gota.io/discord', '_blank');
                });
                F('#name-box').keypress(function (N8) {
                    ;
                    N8.keyCode === bF.be && F(this).is(':focus') && Hc.Wt();
                });
                var N0, N1, N2, N3, N4 = F('#autocomplete-panel'),
                    N5 = (HM.keyup(function (N8) {
                        var N9, NH = F(this).val(),
                            Nb = NH.split(' ');
                        switch (N8.keyCode) {
                        case bF.be:
                            0 !== (N9 = NH).length && ('/' === N9.charAt(0) ? function () {
                                var NI, Nq = N9.split(' '),
                                    Ng = Nq[0].substring(1);
                                aI('');
                                for (NI of VZ)
                                    if (NI.Jt.includes(Ng)) {
                                        return NI.Yt(Nq.slice(1));
                                    }
                                Hc.Ut('Invalid command!');
                            }() : (Hc.T(bm.Ue(N9, 0)), aI('')), 20 < bJ.length && bJ.shift(), bJ.push(N9));
                            break;
                        case bF.chatInputHistoryUp:
                            return -1 === bX ? bX = bJ.length - 1 : 0 < bX && bX--, void aI(bJ[bX = bX <= 0 ? 0 : bX]);
                        case bF.chatInputHistoryDown:
                            return -1 === bX ? bX = 0 : bX < bJ.length - 1 && bX++, void aI(bJ[bX = bJ.length - 1 <= bX ? bJ.length - 1 : bX]);
                        }
                        if (0 === NH.length || NH.endsWith(' ') || N8.keyCode === bF.be) {
                            N4.html('').hide();
                        } else {
                            if (NH.startsWith('/')) {
                                if (1 < Nb.length) {
                                    return;
                                }
                                N4.html('<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>');
                                var NZ, Na = Nb[0].substring(1).toLowerCase(),
                                    NV = F('#autocomplete-panel tbody');
                                for (NZ of VZ) {
                                    var NN = NZ.Jt.find(function (NI) {
                                        ;
                                        return NI.toLowerCase().startsWith(Na);
                                    });
                                    null != NN && NV.append('<tr><td>' + NN + '</td><td>' + NZ.Jt + '</td><td>' + NZ.Vt + '</td></tr>');
                                }
                                N4.toggle(0 < NV.children().length);
                            } else {
                                if (Nb[Nb.length - 1].startsWith(':')) {
                                    N4.html('');
                                    var N8 = Object.keys(HG).filter(function (NI) {
                                            ;
                                            return NI.toLowerCase().includes(Nb[Nb.length - 1].substring(1).toLowerCase());
                                        }),
                                        No = Object.keys(Hk).filter(function (NI) {
                                            ;
                                            return NI.toLowerCase().includes(Nb[Nb.length - 1].substring(1).toLowerCase());
                                        });
                                    if (0 === N8.length && 0 === No.length) {
                                        return void N4.html('').hide();
                                    }
                                    N4.show();
                                    0 < N8.length && (N4.append('<h3>Emotes</h3>'), N8.forEach(function (NI) {
                                        ;
                                        N4.append('<img name=\'' + NI + '\' title=\'' + NI + '\' src=\'https://gota.io/emotes/' + NI + '.png\' />');
                                    }));
                                    0 < No.length && (N4.append('<h3>Gifs</h3>'), No.forEach(function (NI) {
                                        ;
                                        N4.append('<img name=\'' + NI + '\' title=\'' + NI + '\' src=\'https://gota.io/emotes/gifs/' + NI + '.gif\' />');
                                    }));
                                }
                            }
                        }
                        bX = -1;
                    }), N4.on('click', function (N8) {
                        var N9 = aq().split(' ');
                        'TD' === N8.target.nodeName ? (aI('/' + N8.target.parentElement.children[0].innerHTML + ' '), N4.html('').hide(), HM.focus()) : 'IMG' === N8.target.nodeName && (aI(aq().substring(0, aq().length - N9[N9.length - 1].length) + N8.target.attributes.name.nodeValue + ' '), N4.html('').hide(), HM.focus());
                    }), F('#animationDelay').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 90);
                        bD.rAnimationDelay = HC(N8, 1, 250);
                        F('#animationDelay').val(bD.rAnimationDelay);
                        F('#rAnimationDelay').val(bD.rAnimationDelay);
                    }), F('#cameraDelay').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 0);
                        bD.rCameraDelay = HC(N8, 0, 250);
                        F('#cameraDelay').val(bD.rCameraDelay);
                        F('#rCameraDelay').val(bD.rCameraDelay);
                    }), F('#zoomDelay').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 165);
                        bD.rZoomDelay = HC(N8, 0, 400);
                        F('#zoomDelay').val(bD.rZoomDelay);
                        F('#rZoomDelay').val(bD.rZoomDelay);
                    }), F('#menuDelay').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 500);
                        bD.rMenuDelay = HC(N8, 0, 1000);
                        F('#menuDelay').val(bD.rMenuDelay);
                        F('#rMenuDelay').val(bD.rMenuDelay);
                    }), F('#reconnectPeriod').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 5);
                        bD.rReconnectPeriod = HC(N8, 0, 10);
                        F('#reconnectPeriod').val(bD.rReconnectPeriod);
                        F('#rReconnectPeriod').val(bD.rReconnectPeriod);
                    }), F('#viewDistance').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 100);
                        bD.rViewDistance = HC(N8, 50, 150);
                        F('#viewDistance').val(bD.rViewDistance);
                        F('#rViewDistance').val(bD.rViewDistance);
                        Hc.Ye();
                    }), F('#uiScale').on('change', function () {
                        var N8 = parseInt(F(this).val());
                        isNaN(N8) && (N8 = 100);
                        bD.rUiScale = HC(N8 *= 0.01, 0.5, 1.25);
                        F('#uiScale').val((100 * bD.rUiScale).toFixed(0));
                        F('#rUiScale').val(bD.rUiScale);
                        F('.ui-scale').css('transform', 'scale(' + bD.rUiScale + ')');
                    }), F('#chat-emote-btn').css('background-image', 'url(images/emotes/' + Va[K.floor(K.random() * Va.length)] + '.png)').on('click', function () {
                        ;
                        return F('#emote-panel').toggle();
                    }), F('#emote-panel ul li img').on('click', function (N8) {
                        ;
                        N8 = N8.target.name + ' ';
                        HM.val(aq() + N8);
                        HM.focus();
                    }), s.getElementById('chat-panel')),
                    N6 = (s.getElementById('chat-resize').addEventListener('mousedown', function (N8) {
                        ;
                        N0 = N8.clientX;
                        N1 = N8.clientY;
                        N2 = parseInt(s.defaultView.getComputedStyle(N5).width, 10);
                        N3 = parseInt(s.defaultView.getComputedStyle(N5).height, 10);
                        s.documentElement.addEventListener('mousemove', Vi, false);
                        s.documentElement.addEventListener('mouseup', Vw, false);
                    }, false), F('.checkbox-options').on('change', function () {
                        aA(F(this));
                    }), F('.options-container select').on('change', function () {
                        av(F(this));
                    }), F('.options-container input[type=range]').on('change', function () {
                        ay(F(this));
                    }), F('.input-option').on('change', function () {
                        ad(F(this));
                    }), F('#btn-changelog').on('click', function () {
                        ;
                        ap(F('#popup-changelog'));
                        aR(Hy);
                        C.open('https://discord.com/channels/166703751053312000/630428963889741854', '_blank');
                    }), F('#btn-close-changelog').on('click', function () {
                        ;
                        ap(F('#popup-changelog'));
                        aR(Hy);
                    }), F('#btn-accept').on('click', function () {
                        ;
                        Hc.T(bm.Be(true));
                        ap(F('#popup-party'));
                    }), F('#btn-decline').on('click', function () {
                        ;
                        Hc.T(bm.Be(false));
                        ap(F('#popup-party'));
                    }), F('#popup-party-code-content button').on('click', function () {
                        ;
                        F('#popup-party-code-content input').select();
                        s.execCommand('Copy');
                        F('#popup-party-code').hide();
                    }), F('#menu-invite').on('click', function () {
                        var N8 = HY.data('selected');
                        Hc.T(bm.je(0, N8));
                    }), F('#menu-whisper').on('click', function () {
                        var N8 = HY.data('selected'),
                            N9 = HM.val();
                        HM.val('/t ' + N8 + ' ' + N9);
                    }), F('#menu-profile').on('click', function () {
                        var N8 = HY.data('selected');
                        Hc.T(bm.We(N8));
                    }), F('#menu-pu_pr').on('click', function () {
                        ;
                        null == Hc.Kt ? (Hc.T(bm.je(4, 0)), F('#menu-pu_pr span').text('Private')) : (Hc.T(bm.je(4, 1)), F('#menu-pu_pr span').text('Public'));
                    }), F('#menu-promote').on('click', function () {
                        var N8 = HY.data('party') + 1;
                        0 <= N8 && Hc.T(bm.je(2, N8));
                    }), F('#menu-kick').on('click', function () {
                        var N8 = HY.data('party') + 1;
                        0 <= N8 && Hc.T(bm.je(1, N8));
                    }), F('#menu-spectate').on('click', function () {
                        var N8 = HY.data('selected');
                        0 <= N8 && Hc.T(bm.Re(N8));
                    }), F('#menu-block').on('click', function () {
                        var N8 = Vb(parseInt(HY.data('selected')));
                        Hc.Ut(N8);
                    }), F(s).on('click', function (N8) {
                        ;
                        HY.hide();
                        'chat-emote-btn' !== N8.target.id && F('#emote-panel').hide();
                        var N9 = F('#popup-party-code');
                        'none' !== N9.css('display') && 'popup-party-code' !== N8.target.id && N9.hide();
                    }), F('#aEditChatTabs').on('click', function () {
                        ;
                        aU();
                        ap(Hy);
                        aR(F('#popup-chat-tab-editor'));
                    }), F('#cte-tab-selector').on('change', ar), F('#btn-chat-tab-editor-add').on('click', aJ), F('#btn-chat-tab-editor-remove').on('click', aX), F('#btn-chat-tab-editor-update').on('click', aP), F('.custom-asset-skinner').on('click', function () {
                        ;
                        F('#popup-asset-skinner .title-text').text(F(this).text());
                        F('#input-asset-skinner').attr('asset', F(this).attr('id')).val('');
                        ap(Hy);
                        aR(F('#popup-asset-skinner'));
                    }), F('#btn-custom-asset-set').on('click', function () {
                        ;
                        bD.cThemeEnabled || aS();
                        var N8 = F('#input-asset-skinner'),
                            N9 = N8.val();
                        N9 && 'a' === (N8 = N8.attr('asset')).charAt(0) && null != bv[N8] && aO(N8, N9);
                        F('#popup-asset-skinner .back-button').trigger('click');
                    }), F('#btn-custom-asset-clear').on('click', function () {
                        ;
                        bD.cThemeEnabled || aS();
                        var N8 = F('#input-asset-skinner').attr('asset');
                        'a' === N8.charAt(0) && null != bv[N8] && aO(N8, '');
                    }), F('#popup-asset-skinner').on('dragover', false).on('drop', function (N8) {
                        ;
                        bD.cThemeEnabled || aS();
                        var N9, NH = F('#input-asset-skinner').attr('asset');
                        return 'a' === NH.charAt(0) && null != bv[NH] && (N8 = VI(N8.originalEvent), /\.(jpe?g|png|gif)$/i.test(N8.name)) && ((N9 = new FileReader()).addEventListener('load', function () {
                            ;
                            aO(NH, this.result);
                        }, false), N9.readAsDataURL(N8)), false;
                    }), F('#btn-food-colors').on('click', function () {
                        ;
                        ZS();
                        ap(Hy);
                        aR(F('#popup-food-colors'));
                    }), F('#btn-theme-export').on('click', function () {
                        var N8, N9, NH;
                        bD.cThemeEnabled && (N8 = JSON.stringify(bv, null, 2), N8 = new Blob([N8], {
                            'type': 'text/plain'
                        }), N9 = s.createElement('a'), NH = URL.createObjectURL(N8), N9.href = NH, N9.download = 'theme.json', s.body.appendChild(N9), N9.click(), setTimeout(function () {
                            ;
                            s.body.removeChild(N9);
                            URL.revokeObjectURL(NH);
                        }));
                    }), F('#btn-theme-import').on('click', function () {
                        ;
                        return F('#theme-import').trigger('click');
                    }), F('#theme-import').on('change', function () {
                        var N8 = F(this).prop('files');
                        0 < N8.length && am(N8[0]);
                    }), F('#main-themes .options-container').on('dragover', false).on('drop', function (N8) {
                        ;
                        return am(VI(N8.originalEvent)), false;
                    }), F('#cGlobalLeaderboard').on('change', function () {
                        var N8 = this;
                        b4 && !b8 && (b8 = true, Hb.auth().currentUser.getIdToken().then(function (N9) {
                            ;
                            C.fetch(bV + '/api/v1/options/setFlags', {
                                'method': 'POST',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'body': JSON.stringify({
                                    'token': N9
                                })
                            }).then(function (NH) {
                                ;
                                return NH.json();
                            }).then(function (NH) {
                                ;
                                b8 = false;
                                F(N8).prop('checked', NH.message);
                            }).catch(function (NH) {
                                ;
                                console.error(NH);
                                b8 = false;
                                alert(NH);
                            });
                        }).catch(function (N9) {
                            ZO(N9, true);
                            b8 = false;
                        }));
                    }), Hb.auth().onAuthStateChanged(function (N8) {
                        var N9;
                        N8 ? H1.t ? (F('#guest').hide(), F('#account-loader').show(), N9 = false, Hb.database().ref('users/' + N8.uid).on('value', function (NH) {
                            var Nb = NH.val();
                            if (Nb) {
                                if (N9 || (F('#account-loader').hide(), F('#authed').show().attr('style', 'display: flex;'), F('#cGlobalLeaderboard').removeAttr('disabled').prop('checked', Nb.flags.PUBLIC), N9 = true), b4 = Nb, F('#account-avatar').attr('src', Nb.avatar), NH = F('#account-username').text(Nb.username), Nb.flags.STAFF && F('#chat-container').css('userSelect', 'text'), ZT(NH, Nb), F('#account-level').html('Level ' + Nb.levelData.level + '&nbsp;&nbsp;&nbsp;&nbsp;' + Vo(Nb.levelData.xp_current) + '/' + Vo(Nb.levelData.xp_needed) + ' XP'), F('.xp-meter > span').each(function () {
                                        var NV = Nb.levelData.xp_current / Nb.levelData.xp_needed * 100;
                                        F(this).animate({
                                            'width': NV + '%'
                                        }, 1200);
                                    }), Hc.Qt.Zt || (Hc.Qt.Zt = Hb.database().ref('servers/account/' + b4.uid).on('value', function (NV) {
                                        ;
                                        if (NV = NV.val()) {
                                            bI = {};
                                            for (var NN of Object.values(NV))
                                                NN.up && (NN.address = NN.ip + ':' + NN.port, bI[NN.name] = NN);
                                            aZ();
                                            null != HA && aV(HA.name);
                                        }
                                    })), Nb.flags.DISCORD_LINKED && !Hc.Qt.Xt && (Hc.Qt.Xt = Hb.firestore().collection('discord').doc(b4.uid).onSnapshot(function (NV) {
                                        ;
                                        NV.exists ? (F('#discordLinkStatus').text('Your account is linked with ' + NV.data().username + '#' + NV.data().discrim).show(), F('#discordLink').hide(), F('#discordUnlink').show(), F('.discord-login-container').css('padding', '15px')) : (F('#discordLinkStatus').hide(), F('#discordUnlink').hide(), F('#discordLink').show(), F('.discord-login-container').css('padding', '30px'));
                                    })), null != Nb.tokens ? ((NH = new Date()).setMonth(NH.getMonth() + Nb.tokens), 0 === Nb.tokens ? (F('#redeem-tokens').hide(), F('#token-amount').text('You have 0 tokens.')) : (F('#redeem-tokens').show(), F('#token-amount').text('You have ' + Nb.tokens + ' tokens, maximum expiry date: ' + NH.toString()), F('#redeem-spend').attr('max', Nb.tokens))) : F('#token-amount').text('You have 0 tokens.'), b4.title && (b4.title, 0)) {
                                    NH = F('#account-titles');
                                    for (var NZ = 0, Na = 0; Na < null.titles.length; Na++) {
                                        null.titles[Na] === b4.title && (NZ = Na + 1);
                                    }
                                    0 < NZ && NH.val(NZ);
                                }
                                Hc.Qt.qt || (Hc.Qt.qt = Hb.database().ref('private/' + N8.uid).on('value', function (NV) {
                                    var NN, No;
                                    (NV = NV.val()) && (No = F('#account-titles'), 0 < (null == (NN = NV.titles) ? void 0 : NN.length) ? No.empty().show().append('<option value="0">Default Title</option>', NV.titles.map(function (NI, Nq) {
                                        var Ng = VH(NI);
                                        return Ng && F('<option>').val(Nq + 1).attr('selected', b4.title === NI).text(Ng);
                                    })) : No.hide(), NV.message) && NV.message.title && NV.message.content && !NV.message.read && (F('#popup-message-title').text(NV.message.title), F('#popup-message-content').html(NV.message.content), aR(F('#popup-message')), ap(Hy));
                                }));
                                b5 && ZL(b4);
                                ab(N8.uid);
                            }
                        })) : Hb.auth().signOut() : (F('#cGlobalLeaderboard').attr('disabled'), (H1.t ? (F('#authed').hide(), F('#account-loader').hide(), F('#no_cookie_consent').hide(), F('#guest')) : (F('#authed').hide(), F('#account-loader').hide(), F('#guest').hide(), F('#no_cookie_consent'))).show());
                    }), F('#account-login').on('click', function () {
                        ;
                        H1.t && Hb.auth().signInWithPopup(ba).catch(function (N8) {
                            return ZO(N8, true);
                        });
                    }), F('#account-logout').on('click', function () {
                        ;
                        Hb.auth().signOut().then(function () {
                            ;
                            F('#authed').hide(bD.rMenuDelay);
                            F('#guest').show();
                            F('#discordLinkStatus').hide();
                            F('.discord-login-container').show();
                        }).catch(function (N8) {
                            return ZO(N8, true);
                        });
                    }), F('#account-shop').on('click', function () {
                        ;
                        return C.open(bL, '_blank');
                    }), F('#account-social').on('click', function () {
                        ;
                        b4 && (ZL(b4), aR(F('#main-social')), ap(F(Hy)));
                    }), F('#social-back-button').on('click', function () {
                        ;
                        ap(F('#main-social'));
                        aR(F(Hy));
                    }), F('#account-profile').on('click', function () {
                        return ZB(b4, Hy);
                    }), F('#food-colors-close-btn').on('click', function () {
                        ;
                        al(Hy);
                        ap(F('#popup-food-colors'));
                    }), F('#account-titles').on('change', function () {
                        var N8;
                        b8 || (N8 = parseInt(F(this).val()), b8 = true, Hb.auth().currentUser.getIdToken().then(function (N9) {
                            ;
                            C.fetch(bV + '/api/v1/options/setTitle', {
                                'method': 'POST',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'body': JSON.stringify({
                                    'token': N9,
                                    'title': N8
                                })
                            }).then(function (NH) {
                                ;
                                return NH.json();
                            }).then(function () {
                                return b8 = false;
                            }).catch(function (NH) {
                                ;
                                console.error(NH);
                                b8 = false;
                            });
                        }).catch(function (N9) {
                            ZO(N9, true);
                            b8 = false;
                        }));
                    }), F('#popup-message-read-btn').on('click', function () {
                        ;
                        b8 || (ap(F('#popup-message')), al(Hy), b8 = true, Hb.auth().currentUser.getIdToken().then(function (N8) {
                            ;
                            C.fetch(bV + '/api/v1/options/markAsRead', {
                                'method': 'POST',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'body': JSON.stringify({
                                    'token': N8
                                })
                            }).then(function (N9) {
                                ;
                                return N9.json();
                            }).then(function () {
                                return b8 = false;
                            }).catch(function (N9) {
                                ;
                                console.error(N9);
                                b8 = false;
                            });
                        }).catch(function (N8) {
                            ZO(N8, true);
                            b8 = false;
                        }));
                    }), F('#account-set-username-btn').on('click', function () {
                        var N8, N9 = this;
                        b4 && (Vu(false, this), (N8 = F('#account-username-input').val()) && '' !== N8 && '' !== N8.trim() ? Hb.auth().currentUser.getIdToken().then(function (NH) {
                            ;
                            C.fetch(bV + '/api/v1/social/username', {
                                'method': 'POST',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'body': JSON.stringify({
                                    'token': NH,
                                    'username': N8
                                })
                            }).then(function (Nb) {
                                ;
                                return Nb.json();
                            }).then(function (Nb) {
                                ;
                                Vu(true, N9);
                                200 === Nb.code ? (al(Hy), bZ.Nt.hide()) : alert(Nb.message);
                            }).catch(function (Nb) {
                                ;
                                console.error(Nb);
                                alert(Nb);
                                Vu(true, N9);
                            });
                        }).catch(function (NH) {
                            Vu(true, N9);
                            ZO(NH, true);
                        }) : (alert('Please provide a username!'), Vu(true, this)));
                    }), F('.popup-panel .back-button').on('click', function () {
                        ;
                        F('.popup-panel').each(function () {
                            ap(F(this));
                        });
                        al(Hy);
                    }), F('#discordLink').on('click', function () {
                        ;
                        b4 && Hb.auth().currentUser.getIdToken().then(function (N8) {
                            ;
                            C.open('https://accounts.gota.io/api/v1/options/discord/redirect?token=' + N8, 'popup', 'width=600,height=700');
                        });
                    }), F('#discordUnlink').on('click', function () {
                        ;
                        b4 && Hb.auth().currentUser.getIdToken().then(function (N8) {
                            ;
                            C.fetch(bV + '/api/v1/options/discord/unlink', {
                                'method': 'POST',
                                'body': JSON.stringify({
                                    'token': N8
                                }),
                                'headers': {
                                    'Content-Type': 'application/json'
                                }
                            }).then(function (N9) {
                                ;
                                return N9.json();
                            }).then(function (N9) {
                                ;
                                alert(N9.message);
                            });
                        }).catch(function (N8) {
                            return ZO(N8);
                        });
                    }), F('#redeem-tokens').submit(function (N8) {
                        var N9, NH;
                        N8.preventDefault();
                        b4 && confirm('By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.') && (N9 = F('#redeem-name').val(), NH = parseInt(F('#redeem-spend').val()), Hb.auth().currentUser.getIdToken().then(function (Nb) {
                            ;
                            C.fetch(bV + '/api/v1/options/redeem', {
                                'method': 'POST',
                                'body': JSON.stringify({
                                    'token': Nb,
                                    'name': N9,
                                    'spend': NH
                                }),
                                'headers': {
                                    'Content-Type': 'application/json'
                                }
                            }).then(function (NZ) {
                                ;
                                return NZ.json();
                            }).then(function (NZ) {
                                ;
                                alert(NZ.message);
                                200 === NZ.code && ab(b4.uid);
                            });
                        }).catch(ZO));
                    }), F('.error-banner').on('click', function () {
                        ;
                        F(this).hide();
                    }), F('#btn-add-friend').on('click', function (N8) {
                        ;
                        if (N8.preventDefault(), b4 && (N8 = prompt('Enter friend\'s UID (found above add friend button)'))) {
                            var N9 = N8.replace(/\s/g, '');
                            if ('string' != typeof N8 || 0 === N9.length) {
                                return alert('Please enter a valid UID');
                            }
                            Hb.auth().currentUser.getIdToken().then(function (NH) {
                                ;
                                C.fetch(bV + '/api/v1/social/friends', {
                                    'method': 'POST',
                                    'headers': {
                                        'Content-Type': 'application/json'
                                    },
                                    'body': JSON.stringify({
                                        'token': NH,
                                        'target': N9,
                                        'action': 1
                                    })
                                }).then(function (Nb) {
                                    ;
                                    return Nb.json();
                                }).then(function (Nb) {
                                    ;
                                    alert(Nb.message);
                                });
                            }).catch(function (NH) {
                                return ZO(NH, true);
                            });
                        }
                    }), F(s).keyup(function (N8) {
                        ;
                        N8 = N8.keyCode;
                        N8 === bF.be && ('INPUT' !== s.activeElement.tagName ? ((N8 = HM[0]) && N8.setSelectionRange(N8.value.length, N8.value.length), HM.focus()) : HM.is(':focus') && HM.blur());
                    }), F(C).bind('beforeunload', function () {
                        ;
                        return 'Are you sure you want to leave Gota.io?';
                    }), a7(), F('.keybinds-btn').on('click', function () {
                        var N8 = 'keybinds-btn-selected';
                        F('.' + N8).removeClass(N8);
                        F(this).addClass(N8);
                        bl = true;
                    }), F('#btn-reset-keybinds').on('click', function () {
                        for (var N8 in bf)
                            bC[N8] = bf[N8], ZW(F('#' + N8));
                    }), F('#scrimmage-mode-select').on('change', function () {
                        ;
                        F('#scrimmage-mode-info').children().css('display', 'none');
                        F('#scrimmage-info-' + F(this).val()).css('display', 'block');
                    }), F('#btn-queue').on('click', function () {
                        var N8 = parseInt(F('#scrimmage-mode-select').val()),
                            N8 = isNaN(N8) ? 0 : HC(N8, 0, 100);
                        Hc.T(bm.Ve(N8));
                        F(this).blur();
                    }), F('#btn-leave-match').on('click', function () {
                        return Hc.T(bm.Ze());
                    }), F('#btn-custom-create').on('click', function () {
                        ;
                        Hc.T(bm.Ke(0));
                        F(this).blur();
                    }), F('#btn-custom-return').on('click', function () {
                        return Hc.T(bm.Ke(1));
                    }), F('#btn-custom-start').on('click', function () {
                        return Hc.T(bm.Ke(2));
                    }), F('#btn-custom-lobbies').on('click', function () {
                        return Hc.T(bm.Qe());
                    }), F('#btn-lobbies-refresh').on('click', function () {
                        return Hc.T(bm.Qe());
                    }), F('#btn-lobbies-join').on('click', function () {
                        var N8, N9;
                        0 !== Hv && null != (N9 = Hh[N8 = Hv]) && (N9 = N9.ei && prompt('Enter the password to join this game', '') || '', Hc.T(bm.Xe(N8, N9)));
                    }), F('#btn-lobbies-return').on('click', function () {
                        ;
                        F('.scrimmage-full').css('display', 'none');
                        F('#scrimmage-menu').css('display', 'block');
                    }), bZ.Mt.on('change', function () {
                        var N8 = F(this).find('option:selected').val(),
                            N9 = F(this).attr('data');
                        N8 !== N9 && (F('#scrimmage-map option[value=\'' + N9 + '\']').prop('selected', true), Hc.T(bm.tt(0, N8)));
                    }), bZ.Ct.on('change', function () {
                        var N8 = F(this).find('option:selected').val(),
                            N9 = F(this).attr('data');
                        N8 !== N9 && (F('#scrimmage-mapmode option[value=\'' + N9 + '\']').prop('selected', true), Hc.T(bm.tt(1, N8)));
                    }), bZ.Et.on('change', function () {
                        var N8 = F(this).find('option:selected').val(),
                            N9 = F(this).attr('data');
                        N8 !== N9 && (F('#scrimmage-mapsize option[value=\'' + N9 + '\']').prop('selected', true), Hc.T(bm.tt(2, N8)));
                    }), bZ.xt.on('change', function () {
                        var N8 = F(this).val(),
                            N9 = F(this).attr('data');
                        isNaN(N8) ? F(this).val(N9) : (N8 = HC(parseInt(N8), 1, 32000)) !== N9 && (F(this).val(N9), Hc.T(bm.tt(3, N8)));
                    }), F('#scrimmage-virusDensity').on('change', function () {
                        var N8 = F(this).val(),
                            N9 = F(this).attr('data');
                        isNaN(N8) ? F(this).val(N9) : (N8 = HC(parseInt(N8), 0, 1000)) !== N9 && (F(this).val(N9), Hc.T(bm.tt(7, N8)));
                    }), F('#scrimmage-respawnDelay').on('change', function () {
                        var N8 = F(this).val(),
                            N9 = F(this).attr('data');
                        isNaN(N8) ? F(this).val(N9) : (N8 = HC(parseInt(N8), -1, 600)) !== N9 && (F(this).val(N9), Hc.T(bm.tt(11, N8)));
                    }), F('#scrimmage-lockteams').on('change', function () {
                        var N8 = F(this).prop('checked');
                        F(this).prop('checked', !N8);
                        Hc.T(bm.tt(4, N8 ? 1 : 0));
                    }), F('#scrimmage-autoSplit').on('change', function () {
                        var N8 = F(this).prop('checked');
                        F(this).prop('checked', !N8);
                        Hc.T(bm.tt(12, N8 ? 1 : 0));
                    }), F('#scrimmage-public').on('change', function () {
                        var N8 = F(this).prop('checked');
                        F(this).prop('checked', !N8);
                        Hc.T(bm.tt(8, N8 ? 1 : 0));
                    }), F('#scrimmage-password').on('change', function () {
                        var N8 = F(this).prop('checked'),
                            N8 = (F(this).prop('checked', !N8), N8 && prompt('Enter a password to join your game (32 max characters)', '') || '');
                        Hc.T(bm.ot(9, N8));
                    }), F('#scrimmage-name').on('click', function () {
                        var N8;
                        Hc.li() && null != (N8 = prompt('Enter a new name for your game (32 max characters)', F(this).text())) && Hc.T(bm.ot(10, N8));
                    }), F(C).on('pagehide', ZV), Hc = new ZI(), bk = new VF.Se(Hc), C.Coloris({
                        'theme': 'pill',
                        'themeMode': 'dark',
                        'alpha': false
                    }), C.Coloris.setInstance('#spChatColor', {
                        'swatches': V7,
                        'swatchesOnly': true
                    }), bh(function (N8) {
                        var N9 = F('#' + N8);
                        Zm(N9, bv[N8]);
                        N9.on('input', function (NH) {
                            ;
                            NH.originalEvent.hi || Zm(N9, N9.val(), false);
                        });
                    }), F('#btnAddFoodColor').on('click', function () {
                        ;
                        bD.cThemeEnabled || aS();
                        var N8 = F('#pFoodColors').val();
                        bv._FoodColors.includes(N8) || (bv._FoodColors.push(N8), ZS());
                    }), H1.C(), ag(), VF = {
                        'view': HF,
                        'backgroundAlpha': 0,
                        'forceCanvas': 'CANVAS' === bD.sRenderType,
                        'antialias': !bD.cDisableAA,
                        'powerPreference': 'high-performance'
                    }, (H6 = {
                        'ui': HH.autoDetectRenderer(VF),
                        'pi': Ho
                    }).ui.events.destroy(), F(C).on('resize', bz), bz(), HR = bG(), Hc.Ut('Welcome to Gota.io!'), '<a href="' + bL + '" tabindex="-1" target="_blank" style="color: #3366bb; pointer-events: auto">' + bL + '</a>'),
                    N7 = 'Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the "Support A Creator" section during checkout at ' + N6 + '.';
                C.nsjag('https://dl.dropboxusercontent.com/s/4iwpgcfwxv54nhr/store_coupon.json', 'json').then(function (N8) {
                    var N9 = N8.endTime,
                        N8 = N8.message,
                        N9 = Date.now() < new Date(N9);
                    Hc.Ut(N9 ? N8.replaceAll('STORE_LINK', N6) : N7, true);
                }).catch(function () {
                    return Hc.Ut(N7, true);
                });
                bN.re && '' !== bN.ee && Hc.Ut(bN.ee);
                H1.t && (Vy = C.localStorage.getItem('version'), VF = C.version.split('.'), null == Vy ? C.localStorage.setItem('version', C.version) : (Vy = Vy.split('.'), VF[0] === Vy[0] && VF[1] === Vy[1] || (C.localStorage.setItem('version', C.version), ap(Hy), aR(F('#popup-changelog')))));
                Z4();
            }
            function bz() {
                ;
                H6.ui.resolution = 1;
                H6.ui.resize(C.innerWidth, C.innerHeight);
                H6.pi.position.set(C.innerWidth / 2, C.innerHeight / 2);
            }
            function bh(VF) {
                for (var Vs in bv)
                    'u' === Vs[0] && VF(Vs);
            }
            function bW() {
                var VF = Hc.mi.fi;
                bD.cShowBorder && VF.re ? Hq.clear().lineStyle({
                    'width': bv.rBorderSize,
                    'color': bv.uiGameBorderColor
                }).drawRect(VF.gi, VF.bi, VF.ki, VF.$i).visible = true : Hq.visible = false;
            }
            bw = -1;
            Z2 = Z1 = Z0 = 0;
            (Z3 = new C.MessageChannel()).port2.start();
            s.addEventListener('visibilitychange', function () {
                ;
                (Za() ? ((bD.cUncapFPS ? Zb : Z9)(), ZH) : ZZ)();
            });
            var bE, bu, bw, Z0, Z1, Z2, Z3, Z4 = function () {
                    ;
                    bu = bD.cUncapFPS ? Z7 : Z8;
                    Z9();
                    ZZ();
                    bD.cUncapFPS && Za() && Zb();
                    bu();
                },
                Z5 = String.fromCharCode(8722);
            function Z6(VF) {
                ;
                if (bE < VF) {
                    var Vs, VK = VF - HR,
                        VF = (6 <= (VF = HR = VF) - Z2 && Hc.wi() && !aK(Hy) && !Hc.yi && !bk.xe() && (bk.Ne(), Z2 = VF), VK),
                        Vc = K.min(VF / bD.rAnimationDelay, 1),
                        VR = (Hc._i.vi(VF), H(Hc.Si.values()));
                    for (Vs of VR)
                        Vs.Ni(Vc);
                    var Vp = 0,
                        Vl = 0,
                        Vf = 0;
                    switch (0) {
                    case Vx.CENTER:
                        var Vj, VA = 0;
                        for (Vj of Hc.Mi.values())
                            Vp += Vj.ae, Vl += Vj.oe, Vf += Vj.Ci, VA++;
                        0 !== VA && (Hc.Ei = Vp / VA, Hc.xi = Vl / VA);
                        break;
                    case Vx.MASS:
                        var Vv, Vy = 0;
                        for (Vv of Hc.Mi.values()) {
                            var Vd = Vv.Oi();
                            Vp += Vv.ae * Vd;
                            Vl += Vv.oe * Vd;
                            Vy += Vd;
                            Vf += Vv.Ci;
                        }
                        Vy && (Hc.Ei = Vp / Vy, Hc.xi = Vl / Vy);
                    }
                    var VQ, VO, VT = 0 !== Vf,
                        VT = (bD.cDisableAutoZoom ? Hc.Hi = 0.2 * K.max(C.innerHeight / 1080, C.innerWidth / 1920) : VT && (Hc.Hi = K.pow(K.min(32 / Vf, 1), 0.4) * K.max(C.innerHeight / 1080, C.innerWidth / 1920)), VT ? K.min(VF / bD.rCameraDelay, 1) : Vc),
                        VT = (Hc.Fi += (Hc.Ei - Hc.Fi) * VT, Hc.Di += (Hc.xi - Hc.Di) * VT, Hc.Hi * Hc.Tt),
                        VY = (Hc.se += (VT - Hc.se) * K.min(VF / bD.rZoomDelay, 1), Hg.scale.set(Hc.se), Hg.pivot.set(Hc.Fi, Hc.Di), !bD.cHideFood && (0.12 < Hc.se || bD.cDisableAutoFoodHiding));
                    HU.visible = VY;
                    for (VQ of Hc.Ai.values())
                        VQ.Ni(Vc), VY && VQ.Ii();
                    for (VO of VR)
                        VO.Ti();
                    if (VT = !bD.cHideMinimap, Hc.Pi && (Hc.Li(), Hc.Ri(), VT && bD.cShowCoordinates && (bZ.yt[0].textContent = ('X: ' + K.round(Hc.Fi) + ' Y: ' + K.round(Hc.Di)).replaceAll('-', Z5)), Hc.Pi = false), VT) {
                        var VM = Vc;
                        if (Hc.mi.fi.re) {
                            HK.clearRect(0, 0, Hs.width, Hs.height);
                            HK.font = '12px Calibri';
                            for (var VB of Hc.Ui)
                                VB.Bi === VD.ji && VB.Gi !== Hc.Wi && (aF(HK, VB.p, VB.ae, VB.oe, 4, VB.zi, true), VB.ae += (VB.Ji - VB.ae) * VM, VB.oe += (VB.Yi - VB.oe) * VM);
                            aF(HK, Hc.p, Hc.Fi, Hc.Di, 6, '#fefefe', false);
                        }
                    }
                    Hc.Ki.Vi();
                    H6.ui.render(H6.pi);
                    ++Z1;
                    1000 <= (Z0 += VF = VK) && (bZ.ut.innerHTML = Z1, Z0 = Z1 = 0, VT = VR = Date.now(), 0 < Hc.mi.Zi && 0 < Hc.mi.gt ? (bZ.ft.css('display', 'block'), VT = K.max(0, K.floor((Hc.mi.gt - VT) / 1000)), bZ.gt.html(VN(VT))) : bZ.ft.css('display', 'none'), VT = VR, 0 < Hc.kt && Hc.kt >= VT ? (bZ.bt.css('display', 'block'), VR = K.max(0, K.ceil((Hc.kt - VT) / 1000)), bZ.kt.html(VN(VR))) : Hc.kt < 0 ? (bZ.bt.css('display', 'block'), bZ.kt.html('NEVER')) : bZ.bt.css('display', 'none'));
                }
                bE = bG();
                bu();
            }
            function Z7() {
                ;
                Z3.port1.postMessage(null);
            }
            function Z8() {
                bw = requestAnimationFrame(Z6);
            }
            function Z9() {
                ;
                C.cancelAnimationFrame(bw);
            }
            function ZH() {
                Z6(bG());
            }
            function Zb() {
                ;
                Z3.port2.addEventListener('message', ZH);
            }
            function ZZ() {
                ;
                Z3.port2.removeEventListener('message', ZH);
            }
            function Za() {
                ;
                return 'visible' === s.visibilityState;
            }
            function ZV() {
                ;
                if (H1.t) {
                    for (var VF in (bD.iChatWidth = bZ.I.css('width'), bD.iChatHeight = bZ.I.css('height'), bs))
                        bs[VF] = bD[VF], delete bD[VF];
                    for (var Vs in bK)
                        bK[Vs] = bC[Vs], delete bC[Vs];
                    for (var VK in bc)
                        bc[VK] = bv[VK], delete bv[VK];
                    var Vc = 4609,
                        VR = (aL.forEach(function (Vp) {
                            var Vp = V(Vp, 3),
                                Vl = Vp[0],
                                Vp = Vp[2],
                                Vf = bs[Vp];
                            Vc |= +Vf << Vl;
                            delete bs[Vp];
                        }), bM && (bs[aB] = Vc), C.localStorage);
                    VR.setItem('options', JSON.stringify(bD));
                    VR.setItem('keybinds', JSON.stringify(bC));
                    VR.setItem('fixes_options', JSON.stringify(bs));
                    VR.setItem('fixes_keybinds', JSON.stringify(bK));
                    VR.setItem('fixes_theme', JSON.stringify(bc));
                    VR.setItem('name', F('#name-box').val());
                    VR.setItem('theme', JSON.stringify(bv));
                    VR.setItem('subpanel', JSON.stringify(bO));
                    HA && VR.setItem('server', HA.name);
                }
            }
            function ZN() {
                ;
                s.body.classList.add('hide-captcha-badge');
            }
            C.nsjag(C.atob('aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS9uamdoOWcvcz9ybGtleT16MDhhNm8yMzNnZThxbWZqbHpnazloMGc0')).then(function (VF) {
                var Vs = {
                    ki: Vs.ba - Vs.gi,
                    re: 0 !== Vs.ki && 0 !== Vs.$i,
                    innerHTML: az(Vj),
                    width: 15 + Vc + 50 + VR,
                    height: 20 * VF + 5 + (1 < VF ? 20 : 0)
                };
                C.Function('exports', 'module', VF)({}, Vs);
                Vs.exports({
                    'gmcgf': function () {
                        return Hc.Qi();
                    }
                }).then(bS);
            });
            var Zo = function () {
                var VF = {
                        'm4a': 'audio/mp4',
                        'oga': 'audio/ogg',
                        'opus': 'audio/ogg; codecs="opus"',
                        'caf': 'audio/x-caf; codecs="opus"'
                    },
                    Vs = new Audio(),
                    VK = new Set();
                [
                    'mp3',
                    'ogg',
                    'oga',
                    'opus',
                    'mpeg',
                    'wav',
                    'm4a',
                    'aiff',
                    'wma',
                    'mid',
                    'caf'
                ].forEach(function (VR) {
                    ;
                    Vs.canPlayType(VF[VR] || 'audio/' + VR) && VK.add(VR);
                });
                class Vc {
                    constructor(VR) {
                            this.Xi = [];
                            this.qi = VR;
                            this.en = false;
                            this.tn();
                        }
                        ['nn']() {
                            ;
                            for (var VR of this.Xi)
                                VR.oncanplaythrough = null, VR.onended = null;
                            this.Xi = null;
                            this.en = false;
                        }
                        ['tn'](VR) {
                            var Vp = this,
                                Vl = (void 0 === VR && (VR = false), new Audio(this.qi));
                            Vl.oncanplaythrough = function () {
                                ;
                                Vp.en = true;
                                Vp.Xi.push(Vl);
                                Vl.oncanplaythrough = null;
                                Vl.onended = function () {
                                    ;
                                    return Vl.currentTime = 0;
                                };
                                VR && Vl.play();
                            };
                        }
                        ['Wt']() {
                            ;
                            for (var VR of this.Xi)
                                if (VR.paused) {
                                    return void VR.play();
                                }
                            this.tn(true);
                        }
                }
                return new class {
                    constructor() {
                            this.sn = new Map();
                        }
                        ['an'](VR) {
                            ;
                            return !!(VR = VR.match(/\.(\w+)$/)) && VK.has(VR[1]);
                        }
                        ['on'](VR, Vp) {
                            var Vl;
                            this.an(Vp) && (null == (Vl = this.sn.get(VR)) ? void 0 : Vl.qi) !== Vp && (null != Vl && Vl.nn(), this.sn.set(VR, new Vc(Vp)));
                        }
                        ['rn'](VR) {
                            var Vp;
                            null != (Vp = this.sn.get(VR)) && Vp.nn();
                            this.sn.delete(VR);
                        }
                        ['Wt'](VR) {
                            ;
                            bD.cEnableSounds && null != (VR = this.sn.get(VR)) && VR.en && VR.Wt();
                        }
                }();
            }();
            function ZI() {
                ;
                this.cn = null;
                this.ln = null;
                this.jt = null;
                this.dn = null;
                this.hn = null;
                this.Gt = false;
                this.Pi = false;
                this.p = '';
                this.Wi = 0;
                this.Ft = null;
                this.Si = new Map();
                this.Ai = new Map();
                this.Mi = new Map();
                this._i = new ZR();
                this.Ki = new aW();
                this.Fi = 0;
                this.Di = 0;
                this.Ei = 0;
                this.xi = 0;
                this.se = 0.5;
                this.Hi = 0.5;
                this.Tt = 1;
                this.Dt = 0;
                this.At = 0;
                this.yi = false;
                this.un = 0;
                this.pn = 0;
                this.Ui = [];
                this.fn = {};
                this.mn = [];
                this.gn = false;
                this.mi = {
                    'bn': false,
                    'fi': {},
                    'kn': 16,
                    '$n': false
                };
                this.wn = 0;
                this.yn = 0;
                this.kt = 0;
                this.vn = null;
                this.Qt = {};
                setInterval(this.Le.bind(this), 30000);
            }
            function Zq(VF, Vs, VK) {
                ;
                void 0 === VK && (VK = false);
                var Vc = s.getElementById(VF);
                Vc.checked = Vs;
                VK ? aA(F(Vc)) : bD[VF] = Vs;
            }
            function Zg(VF, Vs) {
                return VF.Da.Ci - Vs.Da.Ci;
            }
            function Zx() {
                ;
                return new HH.Sprite(HX);
            }
            ZI.prototype.Bt = function () {
                ;
                return 0 !== this.Mi.size;
            };
            ZI.prototype.Wt = function () {
                ;
                null == HA ? this.Ut('No server selected!') : (this.p = F('#name-box').val(), this.Gt = false, ZG(), this.wi() && this.ln === HA.address ? this.T(bm.Ae(this.p)) : this._n(HA.address), aj(), ap(Hy), bA && bZ.Ot.show());
            };
            ZI.prototype.zt = function () {
                ;
                null == HA ? this.Ut('No server selected!') : (this.Gt = true, ZG(), this.wi() && this.ln === HA.address ? this.T(bm.Re()) : this._n(HA.address), aj(), ap(Hy));
            };
            ZI.prototype._n = function (VF) {
                var Vs;
                null != this.cn ? (this.cn.Sn = VF, this.Nn()) : (this.ln = VF, this.jt = HA.name, this.Ut('Connecting to ' + this.jt + '...'), HA.ssl ? this.cn = new C.WebSocket('wss://' + VF) : this.cn = new C.WebSocket('ws://' + VF), this.cn.binaryType = 'arraybuffer', (Vs = this).cn.onopen = this.Mn.bind(this), this.cn.onmessage = this.Cn.bind(this), this.cn.onclose = function (VK) {
                    ;
                    Vs.En();
                    Vs.Ut('You have been disconnected from the server. Reason: ' + (VK.reason || 'Unknown'));
                    null != this.Sn && Vs._n(this.Sn);
                }, this.cn.onerror = function () {
                    ;
                    Vs.En();
                    this.Sn = null;
                    var VK = bD.rReconnectPeriod;
                    0 < VK && (Vs.Ut('Error connecting to server... Retrying every ' + VK + ' second(s).'), setTimeout(function () {
                        Vs.wi() || null != Vs.cn || Vs._n(VF);
                    }, 1000 * VK));
                }, ZN());
            };
            ZI.prototype.Nn = function () {
                ;
                null != this.cn && this.cn.close();
            };
            ZI.prototype.xn = function () {
                ;
                for (var VF of this.Si.values())
                    VF.nn();
                for (var Vs of this.Ai.values())
                    Vs.nn();
                this.Si.clear();
                this.Ai.clear();
                this.Mi.clear();
            };
            ZI.prototype.En = function () {
                ;
                this.xn();
                this._i.On();
                this.Wi = 0;
                this.wn = 0;
                this.kt = 0;
                this.vn = null;
                this.ln = null;
                this.jt = null;
                this.Hn();
                this.Ki.Fn();
                Object.assign(this.mi, {
                    'bn': false,
                    'Zi': 0,
                    '$n': false
                });
                null != this.cn && (this.cn = null);
                F('#pId span').html(this.Wi);
                this.gn && (this.gn = false, aH());
            };
            var ZU, ZP = (ZI.prototype.It = function (VF) {
                    var Vs;
                    if (VF === bF.ke) {
                        al(Hy);
                        ap(F('#main-social'));
                        ap(bZ.St);
                        ap(bZ.Nt);
                    } else {
                        if (VF = bp.get(VF)) {
                            if (VF.includes('kContextMenu')) {
                                var VK = s.elementFromPoint(this.Dt, this.At);
                                if ('chat-name' === VK.className) {
                                    aD(VK.innerText, VK.dataset.Wi, -1);
                                } else {
                                    var Vc = this.At - F(VK).offset().top;
                                    switch (VK.id) {
                                    case 'party-canvas':
                                        (Vj = Vc) % 20 < 5 || (Vj = K.floor(Vj / 20), null != (Vs = Hc.Ui[Vj]) && aD(Vs.p, Vs.Gi, Vj));
                                        break;
                                    case 'leaderboard-canvas':
                                        Vj = K.floor((Vs = Vc) / 20), null != (null == (Vs = Hc.mn[Vj]) ? void 0 : Vs.Wi) && aD(Vs.p, Vs.Wi);
                                        break;
                                    case 'canvas':
                                        var VR, Vp, Vl, Vf, Vj = V(Hc.Qi(true), 2),
                                            VA = Vj[0],
                                            Vv = Vj[1];
                                        for (Vf of Hc.Si.values())
                                            Vf.Dn === 2 && (VR = (Vf.ae - VA) ** 2, Vp = (Vf.oe - Vv) ** 2, Vl = Vf.Ci ** 2, VR + Vp <= Vl) && aD(Hc._i.In(Vf.Wi).p, Vf.Wi);
                                    }
                                }
                            }
                            if (!aK(Hy)) {
                                for (var Vy of VF) {
                                    var Vd = Zr[Vy];
                                    if (Vd) {
                                        bk.Oe(Vd) || this.Tn(Vd);
                                    } else {
                                        if (Vd = bR[Vy]) {
                                            this.Tt = Vd;
                                        } else {
                                            switch (Vy) {
                                            case 'zoomIn':
                                                this.Tt *= 1.05, this.Tt = 5 < this.Tt ? 5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                                                break;
                                            case 'zoomOut':
                                                this.Tt *= 0.95, this.Tt = 5 < this.Tt ? 5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                                                break;
                                            case 'kEjectMass':
                                                HB || (HB = true, this.T(bm.Pe(true)));
                                                break;
                                            case 'kToggleSpec':
                                                this.T(bm.Ie(18));
                                                break;
                                            case 'kFreezeMouse':
                                                this.yi = !this.yi, bZ.rt.toggle(this.yi), this.yi && (this.un = this.Pn, this.pn = this.Ln);
                                                break;
                                            case 'kLinesplit':
                                                bk.Ce();
                                                break;
                                            case 'kCycleNames':
                                                bD.cHideEnemyNames ? bD.cHideBotNames ? (bD.cHideFriendNames ? (bD.cHideOwnName ? (Zq('cHideOwnName', false), Zq('cHideFriendNames', true)) : Zq('cHideFriendNames', false), Zq('cHideBotNames', true)) : (Zq('cHideOwnName', false), Zq('cHideBotNames', false)), Zq('cHideEnemyNames', true)) : (Zq('cHideOwnName', false), Zq('cHideFriendNames', false), Zq('cHideEnemyNames', false)) : (Zq('cHideOwnName', true), Zq('cHideFriendNames', true), Zq('cHideBotNames', true), Zq('cHideEnemyNames', true)), this._i.Rn();
                                                break;
                                            case 'kCycleMasses':
                                                bD.cHideEnemyMasses ? bD.cHideBotMasses ? (bD.cHideFriendMasses ? (bD.cHideOwnMass ? (Zq('cHideOwnMass', false), Zq('cHideFriendMasses', true)) : Zq('cHideFriendMasses', false), Zq('cHideBotMasses', true)) : (Zq('cHideOwnMass', false), Zq('cHideBotMasses', false)), Zq('cHideEnemyMasses', true)) : (Zq('cHideOwnMass', false), Zq('cHideFriendMasses', false), Zq('cHideEnemyMasses', false)) : (Zq('cHideOwnMass', true), Zq('cHideFriendMasses', true), Zq('cHideBotMasses', true), Zq('cHideEnemyMasses', true)), this._i.Un();
                                                break;
                                            case 'kCycleSkins':
                                                bD.cHideEnemySkins ? bD.cHideBotSkins ? (bD.cHideFriendSkins ? (bD.cHideOwnSkin ? (Zq('cHideOwnSkin', false), Zq('cHideFriendSkins', true)) : Zq('cHideFriendSkins', false), Zq('cHideBotSkins', true)) : (Zq('cHideOwnSkin', false), Zq('cHideBotSkins', false)), Zq('cHideEnemySkins', true)) : (Zq('cHideOwnSkin', false), Zq('cHideFriendSkins', false), Zq('cHideEnemySkins', false)) : (Zq('cHideOwnSkin', true), Zq('cHideFriendSkins', true), Zq('cHideBotSkins', true), Zq('cHideEnemySkins', true)), this._i.Bn();
                                                break;
                                            case 'kHideOwnName':
                                                Zq('cHideOwnName', !bD.cHideOwnName, true);
                                                break;
                                            case 'kHideFriendNames':
                                                Zq('cHideFriendNames', !bD.cHideFriendNames, true);
                                                break;
                                            case 'kHideBotNames':
                                                Zq('cHideBotNames', !bD.cHideBotNames, true);
                                                break;
                                            case 'kHideEnemyNames':
                                                Zq('cHideEnemyNames', !bD.cHideEnemyNames, true);
                                                break;
                                            case 'kHideOwnMass':
                                                Zq('cHideOwnMass', !bD.cHideOwnMass, true);
                                                break;
                                            case 'kHideFriendMasses':
                                                Zq('cHideFriendMasses', !bD.cHideFriendMasses, true);
                                                break;
                                            case 'kHideBotMasses':
                                                Zq('cHideBotMasses', !bD.cHideBotMasses, true);
                                                break;
                                            case 'kHideEnemyMasses':
                                                Zq('cHideEnemyMasses', !bD.cHideEnemyMasses, true);
                                                break;
                                            case 'kHideOwnSkin':
                                                Zq('cHideOwnSkin', !bD.cHideOwnSkin, true);
                                                break;
                                            case 'kHideFriendSkins':
                                                Zq('cHideFriendSkins', !bD.cHideFriendSkins, true);
                                                break;
                                            case 'kHideBotSkins':
                                                Zq('cHideBotSkins', !bD.cHideBotSkins, true);
                                                break;
                                            case 'kHideEnemySkins':
                                                Zq('cHideEnemySkins', !bD.cHideEnemySkins, true);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, ZI.prototype.wi = function () {
                    ;
                    return null != this.cn && 1 === this.cn.readyState;
                }, ZI.prototype.T = function (VF) {
                    ;
                    this.wi() && this.cn.send(VF);
                }, ZI.prototype.Mn = function () {
                    var VF = this;
                    b7 = [];
                    this.dn = new Promise(function (Vs) {
                        return VF.hn = Vs;
                    });
                    b9.execute('6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3', {
                        'action': 'login'
                    }).then(function (Vs) {
                        ;
                        Hc.T(bm.qe(Vs));
                        Hc.dn.then(function (VK) {
                            return !VK && Hc.jn();
                        });
                        ZN();
                    });
                    this.T(bm.De());
                    this.Le();
                    this.Ye();
                    null != Hb.auth().currentUser ? Hb.auth().currentUser.getIdToken(true).then(function (Vs) {
                        return Hc.T(bm.et(Vs));
                    }).catch(function (Vs) {
                        ZO(Vs, true);
                        VF.hn(false);
                    }) : this.hn(false);
                }, ZI.prototype.jn = function () {
                    this.T(this.Gt ? bm.Re() : bm.Ae(this.p));
                }, ZI.prototype.Le = function () {
                    ;
                    this.wi() && (Hp = Date.now(), this.T(bm.Le()));
                }, ZI.prototype.Ye = function () {
                    this.wi() && this.T(bm.Ye());
                }, ZI.prototype.Qi = function (VF) {
                    ;
                    return !(VF = void 0 !== VF && VF) && this.yi ? [
                        this.un,
                        this.pn
                    ] : (VF = H6.pi.position, [
                        (this.Dt - VF.x) / this.se + this.Fi,
                        (this.At - VF.y) / this.se + this.Di
                    ]);
                }, ZI.prototype.Te = function (VF, Vs) {
                    ;
                    this.Pn = K.round(VF);
                    this.Ln = K.round(Vs);
                    this.T(bm.Te(this.Pn, this.Ln));
                }, ZI.prototype.Tn = function (VF) {
                    for (var Vs = bm.Ie(17), VK = 0; VK < VF; VK++) {
                        this.T(Vs);
                    }
                }, ZI.prototype.Ut = function (VF, Vs) {
                    ;
                    ao(VX.SYSTEM, F('<td><span style="color: #DDDD00">[System] ' + ((Vs = void 0 !== Vs && Vs) ? VF : aC(VF)) + '</span></td>')[0]);
                }, ZI.prototype.Gn = function (VF, Vs) {
                    var VK = s.createElement('td'),
                        Vc = s.createElement('span');
                    Vc.style.color = '#DDDD00';
                    Vc.innerHTML = '[System] ' + aC(VF);
                    VK.appendChild(Vc);
                    (VF = s.createElement('span')).style.color = '#DDDD00';
                    VF.innerHTML = Vs;
                    VF.style.pointerEvents = 'all';
                    VF.style.userSelect = 'all';
                    VK.appendChild(VF);
                    ao(VX.SYSTEM, VK);
                }, ZI.prototype.Hn = function () {
                    ;
                    this.Ui = [];
                    this.fn = {};
                    this.Wn = -1;
                    this.zn = -1;
                    F('#party-panel').css('display', 'none');
                    'block' === HW.css('display') && this.Jn();
                    null == this.Kt && null == Hm || (this.Kt = Hm = null, C.history.pushState('page', '', ' '));
                }, ZI.prototype.li = function () {
                    return this.Wn === this.Wi;
                }, ZI.prototype.Yn = function () {
                    return this.mi.kn + this.Ki.Vn;
                }, ZI.prototype.Kn = function () {
                    ;
                    Zo.Wt('eject');
                }, ZI.prototype.Zn = function () {
                    ;
                    Zo.Wt('split');
                }, ZI.prototype.Qn = function () {
                    ;
                    bk.Fe();
                    bD.cAutoRespawn ? aK(Hy) || this.Wt() : ('block' !== HT.css('display') && aR(Hy), C.aiptag.cmd.display.push(function () {
                        ;
                        return C.aipDisplayTag.refresh('GOT_gota-io_336x280');
                    }));
                }, C.DataView),
                ZJ = C.ArrayBuffer,
                ZX = (ZI.prototype.Cn = function (VF) {
                    var Vs = this,
                        VF = VF.data,
                        VK = new ZP(VF),
                        VF = VK.getUint8(0);
                    switch (VK.Xn = 1, VF) {
                    case 122:
                        Vs.qn(VK);
                        break;
                    case 124:
                        Vs.es(VK);
                        break;
                    case 2:
                        Vs.ts(VK);
                        break;
                    case 10:
                        Vs.ns(VK);
                        break;
                    case 21:
                        Vs.ss(VK);
                        break;
                    case 22:
                        Vs.os(VK);
                        break;
                    case 23:
                        Vs.rs();
                        break;
                    case 40:
                        Vs.cs(VK);
                        break;
                    case 41:
                        Vs.ls(VK);
                        break;
                    case 45:
                        Vs.ds(VK);
                        break;
                    case 43:
                        Vs.hs(VK);
                        break;
                    case 49:
                        Vs.us(VK);
                        break;
                    case 50:
                        Vs.ps(VK);
                        break;
                    case 63:
                        Vs.fs(VK);
                        break;
                    case 64:
                        Vs.gs(VK);
                        break;
                    case 65:
                        Vs.bs();
                        break;
                    case 66:
                        Vs.ks(VK);
                        break;
                    case 68:
                        Vs.$s(VK);
                        break;
                    case 69:
                        Vs.ws(VK);
                        break;
                    case 70:
                        Vs.ys(VK);
                        break;
                    case 71:
                        Vs.vs();
                        break;
                    case 72:
                        Vs._s(VK);
                        break;
                    case 73:
                        Vs.Ss(VK);
                        break;
                    case 74:
                        Vs.Ns(VK);
                        break;
                    case 80:
                        Vs.Ms();
                        break;
                    case 81:
                        Vs.Cs(VK);
                        break;
                    case 82:
                        Vs.Es(VK);
                        break;
                    case 83:
                        Vs.xs(VK);
                        break;
                    case 90:
                        Vs.Os(VK);
                        break;
                    case 91:
                        Vs.Hs(VK);
                        break;
                    case 92:
                        Vs.Fs(VK);
                        break;
                    case 93:
                        Vs.Jn();
                        break;
                    case 94:
                        Vs.Ds(VK);
                        break;
                    case 100:
                        Vs.As(VK);
                        break;
                    case 101:
                        Vs.Is(VK);
                        break;
                    case 102:
                        Vs.Ts(VK);
                        break;
                    case 103:
                        Vs.Ps(VK);
                        break;
                    case 104:
                        Vs.Ls(VK);
                    }
                }, ZI.prototype.Rs = function (VF) {
                    var Vs = VF.getUint16(VF.Xn, true);
                    for (VF.Xn += 2; 0 < Vs; --Vs) {
                        this._i.Us(VF.getUint16(VF.Xn, true));
                        VF.Xn += 2;
                    }
                }, ZI.prototype.Bs = function (VF) {
                    var Vs = VF.getUint16(VF.Xn, true);
                    for (VF.Xn += 2; 0 < Vs; --Vs) {
                        var VK = VF.getUint16(VF.Xn, true),
                            Vc = (VF.Xn += 2, this.Si.get(VK) || this.Ai.get(VK));
                        null != Vc && (Vc.Dn === 6 ? this.Ai.delete(VK) : (this.Si.delete(VK), Vc.Wi === this.Wi && this.Mi.delete(VK)), Vc.nn());
                    }
                }, ZI.prototype.Gs = function (VF) {
                    ;
                    return VF && !VF.endsWith('.gif') ? VF : null;
                }, ZI.prototype.Ws = function (VF) {
                    ;
                    for (;;) {
                        var Vs = VF.getUint16(VF.Xn, true);
                        if (VF.Xn += 2, 0 === Vs) {
                            break;
                        }
                        var VK = VF.getUint8(VF.Xn++) / 255,
                            Vc = VF.getUint8(VF.Xn++) / 255,
                            VR = VF.getUint8(VF.Xn++) / 255,
                            Vp = Zd(VF),
                            Vl = this._i.In(Vs);
                        null == Vl && (Vl = new Zj(Vs, Vp.endsWith('🤖')), this._i.on(Vl));
                        Vl.p = Vp;
                        Vl.zs = [
                            VK,
                            Vc,
                            VR
                        ];
                        Vs = this.Gs(Zy(VF));
                        Vl.Js = VF.getUint8(VF.Xn++);
                        2 == (2 & Vl.Js) ? Vl.Ys = {
                            'Vs': ZQ(VF),
                            'Ks': 64 <= VF.getUint8(VF.Xn++),
                            'Zs': VF.getUint8(VF.Xn++),
                            'Qs': Vs
                        } : (Vl.Qs = Vs, Vl.Ys = null);
                        Vl.Vi();
                        this._i.Xs(Vl);
                    }
                }, ZI.prototype.qs = function (VF, Vs) {
                    ;
                    for (;;) {
                        var VK = VF.getUint16(VF.Xn, true);
                        if (VF.Xn += 2, 0 === VK) {
                            break;
                        }
                        var Vc = VK === this.Wi;
                        for (Vc && Vs && this.Zn();;) {
                            var VR = VF.getUint16(VF.Xn, true);
                            if (VF.Xn += 2, 0 === VR) {
                                break;
                            }
                            (VR = new(Vc ? Zs : ZF)(VR, this)).ea(VF.getInt16(VF.Xn, true));
                            VR.ta(VF.getInt16(VF.Xn + 2, true));
                            VR.ia(VF.getUint16(VF.Xn + 4, true));
                            VF.Xn += 6;
                            VR.Wi = VK;
                        }
                    }
                }, ZI.prototype.na = function (VF, Vs) {
                    ;
                    for (var VK = !HB && 400 < Date.now() - HL, Vc = null == (VR = this.Ft) ? void 0 : VR.zs;;) {
                        var VR, Vp = VF.getUint8(VF.Xn++);
                        if (Vp === 2) {
                            this.qs(VF, Vs);
                        } else {
                            if (Vp === 0) {
                                break;
                            }
                            for (;;) {
                                var Vl = VF.getUint16(VF.Xn, true);
                                if (VF.Xn += 2, 0 === Vl) {
                                    break;
                                }
                                var Vf = ZD.sa(Vl, Vp, this);
                                if (Vf.ea(VF.getInt16(VF.Xn, true)), Vf.ta(VF.getInt16(VF.Xn + 2, true)), VF.Xn += 4, Vp !== 6) {
                                    switch (Vf.ia(VF.getUint16(VF.Xn, true)), VF.Xn += 2, Vp) {
                                    case 1:
                                        Vf.oa = ZQ(VF);
                                        var Vj = VF.getUint8(VF.Xn++);
                                        Vf.Qs = (127 & Vj) - 1, VK || Vf.oa !== Vc || (this.Kn(), VK = true);
                                        break;
                                    case 5:
                                        Vf.ca = VF.getUint8(VF.Xn++);
                                    }
                                }
                            }
                        }
                    }
                }, ZI.prototype.la = function (VF) {
                    ;
                    for (;;) {
                        var Vs = VF.getUint8(VF.Xn++);
                        if (Vs === 0) {
                            break;
                        }
                        for (;;) {
                            var VK = VF.getUint16(VF.Xn, true);
                            if (VF.Xn += 2, 0 === VK) {
                                break;
                            }
                            var Vc = (Vs === 6 ? this.Ai : this.Si).get(VK);
                            (Vc = null == Vc ? ZD.sa(VK, Vs, this) : Vc).da(VF.getInt16(VF.Xn, true));
                            Vc.ha(VF.getInt16(VF.Xn + 2, true));
                            VF.Xn += 4;
                            Vs !== 2 && Vs !== 3 && Vs !== 4 || (Vc.ma(VF.getUint16(VF.Xn, true)), VF.Xn += 2);
                        }
                    }
                }, ZI.prototype.qn = function (VF) {
                    ;
                    function Vs() {
                        ;
                        try {
                            var VO = '__aopc3mu9';
                            if ('function' == typeof window[VO]) {
                                var VT = window[VO],
                                    VY = VT(VK, Vc, VR, Vp, Vl, Vv, Vy, Vd);
                                if (4 <= VK && VT.length < 8) {
                                    try {
                                        var VM, VB = parseInt(VY, 36);
                                        isNaN(VB) || (VB = ((VB = VB >>> 0 ^ Vd >>> 0) << (VM = 7 & Vd) | VB >>> 32 - VM) >>> 0, VY = ((VB ^= Vd >>> 3) >>> 0).toString(36).toUpperCase());
                                    } catch (Vz) {}
                                }
                                if (VY && '-' === VY.charAt(0)) {
                                    try {
                                        var VL = parseInt(VY, 36);
                                        isNaN(VL) || (VY = (VL >>> 0).toString(36).toUpperCase());
                                    } catch (Vh) {}
                                }
                                var VG = new TextEncoder().encode(VY),
                                    Vk = new ZJ(12 + VG.length),
                                    Vm = new ZP(Vk);
                                Vm.setUint8(0, 123);
                                Vm.setUint8(1, VK);
                                Vm.setUint32(2, Vc, true);
                                Vm.setUint32(6, VR, true);
                                Vm.setUint16(10, VG.length, true);
                                for (var VS = 0; VS < VG.length; VS++) {
                                    Vm.setUint8(12 + VS, VG[VS]);
                                }
                                VQ.cn.send(Vk);
                                try {
                                    sendEnvTelemetry(VQ.cn, Vc, VR, VO, Vv, Vy, Vp);
                                } catch (VW) {}
                                if (4 <= VK) {
                                    try {
                                        setTimeout(function () {
                                            ;
                                            if (VQ.cn && 1 === VQ.cn.readyState) {
                                                var VE = window[VO],
                                                    Vu = 0;
                                                try {
                                                    for (var Vi = VE.toString(), Vw = 0; Vw < Vi.length; Vw++) {
                                                        Vu = 16777619 * (Vu ^ Vi.charCodeAt(Vw)) >>> 0;
                                                    }
                                                } catch (N3) {}
                                                var N0 = 0,
                                                    VE = (VE && VE._wasm && (N0 |= 1), 'v:' + VK + '|h:' + Vu.toString(36) + '|f:' + N0),
                                                    N1 = new TextEncoder().encode(VE);
                                                if (!(64 < N1.length)) {
                                                    var VE = new ZJ(2 + N1.length),
                                                        N2 = new ZP(VE);
                                                    for (N2.setUint8(0, 126), N2.setUint8(1, N1.length), Vw = 0; Vw < N1.length; Vw++) {
                                                        N2.setUint8(2 + Vw, N1[Vw]);
                                                    }
                                                    VQ.cn.send(VE);
                                                }
                                            }
                                        }, 150);
                                    } catch (VE) {}
                                }
                                return 1;
                            }
                        } catch (Vu) {}
                    }
                    var VK = VF.getUint8(1),
                        Vc = VF.getUint32(2, true),
                        VR = VF.getUint32(6, true),
                        Vp = VF.getUint32(10, true),
                        Vl = null,
                        Vf = 14;
                    if (2 <= VK) {
                        var Vj = VF.getUint8(14);
                        if (0 < Vj) {
                            for (var Vl = [], VA = 0; VA < Vj; VA++) {
                                Vl.push(VF.getUint8(15 + VA));
                            }
                        }
                        Vf = 15 + Vj;
                    }
                    var Vv = 2654435769,
                        Vy = 2779096485,
                        Vd = 0,
                        VQ = (3 <= VK && (Vv = VF.getUint32(Vf, true), Vy = VF.getUint32(Vf += 4, true), Vf += 4, 4 <= VK) && (Vd = VF.getUint32(Vf, true) >>> 0, Vf += 4), this);
                    Vs() || window.__authScriptLoading || (window.__authScriptLoading = true, (Vf = s.createElement('script')).src = 'auth.js?_=' + Date.now(), Vf.async = true, Vf.onload = function () {
                        var VO;
                        Vs() || (VO = 0, function VT() {
                            Vs() || 40 <= ++VO || setTimeout(VT, 100);
                        }());
                    }, Vf.onerror = function () {
                        ;
                        window.__authScriptLoading = false;
                    }, s.head.appendChild(Vf));
                }, ZI.prototype.es = function (VF) {
                    ;
                    0 !== (VF = VF.getUint8(1)) && this.selfMsg('Client validation warning (code ' + VF + ').');
                }, ZI.prototype.ts = function (VF) {
                    var Vs = this.Bt();
                    this.Rs(VF);
                    this.Bs(VF);
                    this.Ws(VF);
                    this.na(VF, Vs);
                    this.la(VF);
                    Vs && !this.Bt() && this.Qn();
                    this.Pi = true;
                    this.ga();
                    bk.Me();
                }, ZI.prototype.ns = function (VF) {
                    ;
                    this.Ei = VF.getFloat32(VF.Xn, true);
                    VF.Xn += 4;
                    this.xi = VF.getFloat32(VF.Xn, true);
                    VF.Xn += 4;
                    bD.cDisableAutoZoom || (this.Hi = VF.getFloat32(VF.Xn, true));
                }, ZI.prototype.fs = function (VF) {
                    ;
                    this.kt = VF.getFloat64(VF.Xn, true);
                }, ZI.prototype.gs = function (VF) {
                    ;
                    this.Wi = VF.getUint16(VF.Xn, true);
                    VF.Xn += 3;
                    this.ks(VF);
                    this.mi.kn = VF.getUint16(VF.Xn, true);
                    VF.Xn += 2;
                    for (var Vs = VF; 0 !== Vs.getUint8(Vs.Xn++);) {
                        ;
                    }
                    this.mi.$n = !!VF.getUint8(VF.Xn++);
                    F('#pId span').html(this.Wi);
                    this.Ri(true);
                    null != Hm && this.T(bm.Ge(Hm));
                    HT.css('display', 'none');
                    F('#scrimmage-btn-leave').css('display', 'none');
                }, ZI.prototype.ks = function (VF) {
                    var Vs = {
                        'gi': VF.getInt16(VF.Xn, true),
                        'bi': VF.getInt16(VF.Xn + 2, true),
                        'ba': VF.getInt16(VF.Xn + 4, true),
                        'ka': VF.getInt16(VF.Xn + 6, true)
                    };
                    VF.Xn += 8;;
                    Vs.$i = Vs.ka - Vs.bi;;
                    (VF = this.mi.fi = Vs).re && (HI.width = VF.ki, HI.height = VF.$i, HI.position.set(VF.gi, VF.bi));
                    HI.visible = VF.re;
                    bW();
                }, ZI.prototype.$s = function (VF) {
                    ;
                    this.mi.Zi = VF.getUint8(VF.Xn++);
                    this.mi.gt = VF.getFloat64(VF.Xn, true);
                }, ZI.prototype.ws = function (VF) {
                    ;
                    this.$a = VF.getUint16(VF.Xn, true);
                    this.wa();
                }, ZI.prototype.bs = function () {
                    this.xn();
                }, ZI.prototype.us = function (VF) {
                    ;
                    this.mn.length = 0;
                    var Vs = VF.getUint32(VF.Xn, true);
                    VF.Xn += 4;
                    for (var VK = 1; VK <= Vs; VK++) {
                        var Vc = VF.getUint16(VF.Xn, true),
                            VR = (VF.Xn += 2, Zd(VF) || HZ),
                            Vp = Vc === this.Wi ? bv.uiLeaderboardHighlightSelf : null != this.fn[Vc] ? bv.uiLeaderboardHighlightParty : bv.uiForegroundColor;
                        this.mn.push({
                            'Wi': Vc,
                            'p': VR,
                            'we': VK + '. ' + VR,
                            'ya': Vp
                        });
                    }
                    this.va();
                }, ZI.prototype.ps = function (VF) {
                    ;
                    this.mn.length = 0;
                    var Vs = VF.getUint16(VF.Xn, true),
                        VK = VF.getUint8(VF.Xn + 2);
                    VF.Xn += 4;
                    for (var Vc = 0; Vc < Vs; Vc++) {
                        this.mn.push({
                            'we': Zy(VF),
                            'ya': Vc === VK ? bv.uiLeaderboardHighlightSelf : bv.uiForegroundColor
                        });
                    }
                    this.va();
                }, ZI.prototype.vs = function () {
                    var VF = Date.now() - Hp,
                        Vs = bv.uiForegroundColor;
                    bD.cColoredPing || (Vs = VF < 100 ? bv.uiGameColorSuccess : VF < 200 ? bv.uiGameColorWarning : bv.uiGameColorError);
                    this.yn = VF;
                    bZ.dt.style.color = Vs;
                    bZ.dt.innerHTML = VF + 'ms';
                }, ZI.prototype._s = function (VF) {
                    var Vs = VF.getUint8(VF.Xn++),
                        VK = 'rgb(' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ')',
                        Vc = VF.getUint8(VF.Xn++),
                        VR = VF.getUint16(VF.Xn, true);
                    if (VF.Xn += 2, !b7.includes(VR)) {
                        var Vp = aC(Zd(VF)),
                            Vl = V9[V8.get(Vp)],
                            Vf = (VF.Xn++, aC(Zd(VF)) || HZ),
                            Vj = aC(Zd(VF));
                        if (!Vp.startsWith('System') || !Vj.includes('store')) {
                            var VA, Vv = VX.ALL;
                            switch (Vs) {
                            case 1:
                                VA = 'Party', Vv = VX.PARTY;
                                break;
                            case 2:
                                VA = 'Admin', Vv = VX.ADMIN;
                                break;
                            default:
                                VA = 'All';
                            }
                            var Vs = s.createElement('span'),
                                Vy = bD.cHideLockedNames && VR !== this.Wi,
                                Vd = (0 < Vp.length && (!Vy || 'Gold' !== Vp) ? Vl ? ((Vd = s.createElement('span')).innerHTML = Vp, Vd.className = 'chat-title', Object.assign(Vd.style, Vl), Vs.textContent = '[' + VA + ' - ', Vs.appendChild(Vd), Vs.appendChild(s.createTextNode('] '))) : Vs.innerHTML = '[' + VA + ' - ' + Vp + '] ' : Vs.innerHTML = '[' + VA + '] ', (Vl = s.createElement('td')).appendChild(Vs), s.createElement('span'));
                            Vd.innerText = Vf;
                            Vd.dataset.Wi = VR;
                            Vd.style.color = VK;
                            Vd.className = 'chat-name';
                            Vl.appendChild(Vd);
                            (Vp = s.createElement('span')).innerHTML = ': ';
                            Vl.appendChild(Vp);
                            Vs = s.createElement('span');
                            VF.Xn < VF.byteLength && (Vs.dataset.msgid = VF.getBigInt64(VF.Xn, true));;
                            Vs.style.color = V7[Vy ? 0 : Vc];
                            Vl.appendChild(Vs);
                            ao(Vv, Vl);
                        }
                    }
                }, ZI.prototype.Ss = function (VF) {
                    var Vs, VK, Vc, VR, Vp, Vl, Vf = aC(Zd(VF)) || HZ,
                        Vj = VF.getUint16(VF.Xn, true);
                    VF.Xn += 2;
                    b7.includes(Vj) || (Vl = 'rgb(' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ')', Vs = aC(Zd(VF)) || HZ, VK = VF.getUint16(VF.Xn, true), VF.Xn += 2, Vc = 'rgb(' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ')', VF = aC(Zd(VF)), VR = s.createElement('td'), (Vp = s.createElement('span')).innerText = Vf, Vp.dataset.Wi = Vj, Vp.style.color = Vl, Vp.className = 'chat-name', VR.appendChild(Vp), (Vf = s.createElement('span')).innerHTML = ' > ', VR.appendChild(Vf), (Vj = s.createElement('span')).innerText = Vs, Vj.dataset.Wi = VK, Vj.style.color = Vc, Vj.className = 'chat-name', VR.appendChild(Vj), (Vl = s.createElement('span')).innerHTML = ': ' + az(VF), VR.appendChild(Vl), ao(VX.WHISPER, VR));
                }, ZI.prototype.Ns = function (VF) {
                    var Vs = VF.getBigInt64(VF.Xn, true),
                        VF = (VF.Xn += 8, aC(Zd(VF))),
                        Vs = F('.chat-table [data-msgid=\'' + Vs + '\']');
                    0 < VF.length ? Vs.html(az(VF)) : Vs.closest('tr').remove();
                }, ZI.prototype.ys = function (VF) {
                    this.Ut(Zd(VF));
                }, ZI.prototype.Ps = function (VF) {
                    ;
                    VF.getUint8(1) !== 1 ? (this.jn(), this.hn(true)) : (this.Ut('Invalid authentication token! Please logout and try again!'), this.hn(false));
                }, ZI.prototype.Ls = function (VF) {
                    ;
                    ZB(JSON.parse(Zy(VF)));
                }, ZI.prototype.cs = function (VF) {
                    ;
                    bD.cAutoDecline ? Hc.T(bm.Be(false)) : (VF = aC(Zd(VF)), F('#popup-party-text').text(VF + ' has invited you to a party.'), aR(F('#popup-party')));
                }, ZI.prototype.ls = function (VF) {
                    var Vs, VK = {
                            font: '16px Calibri',
                            fillStyle: Vl,
                            font: '16px Calibri',
                            fillStyle: Vd.Sa ? bv.uiPartyLeaderColor : bv.uiForegroundColor,
                            VR: Vc[VR]
                        },
                        Vc = [],
                        VR = -1,
                        Vp = VF.getUint16(VF.Xn, true);
                    VF.Xn += 2;
                    for (var Vl, Vf = 0; Vf < Vp; Vf++) {
                        var Vj = {
                                Gi: VF.getUint16(VF.Xn, true),
                                p: Zd(VF) || HZ,
                                ae: 0,
                                oe: 0,
                                Ji: 0,
                                Yi: 0,
                                wn: 0,
                                Na: -1,
                                Ma: 0,
                                Bi: VD.Ca
                            },
                            VA = 1 === VF.getUint8(VF.Xn++);;
                        VK[Vj.Gi] = Vf;
                        VF.Xn += 2;
                        VA ? (VR = Vj.Gi, Vj.Sa = true) : Vj.Sa = false;;;;;;;;;;
                        null != this.fn[Vj.Gi] ? (VA = this.Ui[this.fn[Vj.Gi]], Vj.ae = VA.ae, Vj.oe = VA.oe, Vj.Ji = VA.Ji, Vj.Yi = VA.Yi, Vj.Bi = VA.Bi, Vj.wn = VA.wn, Vj.zi = VA.zi) : (Vj.zi = V6[(VA = Vj.Gi) % V6.length], (VA = Hc._i.In(Vj.Gi)) && VA.Ea(true));
                        Vc.push(Vj);
                    }
                    for (Vl in this.fn)
                        null == VK[Vl] && (Vs = Hc._i.In(+Vl)) && Vs.Ea(false);
                    this.Ui = Vc;
                    this.fn = VK;
                    this.Wn !== VR && (this.Wn = VR, 'block' === HW.css('display')) && ZX.xa();
                    0 < Vp ? this.Oa() : this.Hn();
                }, ZI.prototype.ds = function (VF) {
                    var Vs = VF.getUint16(VF.Xn, true);
                    if (VF.Xn += 2, Vs === this.Ui.length) {
                        for (var VK = 0; VK < Vs; VK++) {
                            var Vc = this.Ui[VK];
                            Vc.Bi = VF.getUint8(VF.Xn++);
                            Vc.Bi === VD.ji && (Vc.Ji = VF.getInt16(VF.Xn, true), Vc.Yi = VF.getInt16(VF.Xn + 2, true), Vc.wn = VF.getInt32(VF.Xn + 4, true), VF.Xn += 8);
                        }
                        this.Oa();
                    }
                }, ZI.prototype.hs = function (VF) {
                    var Vs = Zy(VF);
                    this.Kt = Zy(VF) || null;
                    this.Kt ? (VF = '/join ' + this.Kt, this.Gn(Vs, VF), F('#popup-party-code-content input').val(VF), F('#popup-party-code').show(), C.history.pushState('page', '', '#' + this.jt + '&' + this.Kt)) : (this.Ut(Vs), C.history.pushState('page', '', ' '));
                }, ZI.prototype.ss = function (VF) {
                    var Vs = VF.getUint16(VF.Xn, true),
                        VK = (VF.Xn += 2, Zd(VF) || HZ),
                        Vc = VF.getUint32(VF.Xn, true),
                        VR = VF.getUint32(VF.Xn + 4, true),
                        Vp = VF.getUint32(VF.Xn + 8, true),
                        Vl = VF.getUint32(VF.Xn + 12, true),
                        Vf = VF.getUint32(VF.Xn + 16, true),
                        Vj = VF.getUint32(VF.Xn + 20, true),
                        VA = VF.getUint32(VF.Xn + 24, true),
                        Vv = VF.getUint32(VF.Xn + 28, true),
                        Vy = VF.getUint32(VF.Xn + 32, true);
                    VF.Xn += 36;
                    F('#main-stats').html('<span>Name: ' + VK + ' (' + Vs + ')</span><br><span>Alive: ' + VN(Vc) + '</span><br><span>Food eaten: ' + VR + ' (' + Vj + ')</span><br><span>Ejected mass eaten: ' + Vp + ' (' + VA + ')</span><br><span>Viruses eaten: ' + Vl + ' (' + Vv + ')</span><br><span>Player cells eaten: ' + Vf + ' (' + Vy + ')</span><br>');
                }, ZI.prototype.os = function (VF) {
                    ;
                    VF = 1 === VF.getUint8(VF.Xn++);
                    this.gn = VF;
                    aH();
                    VF && (this.mi.bn || (a9(), this.mi.bn = true), ZN());
                }, ZI.prototype.rs = function () {
                    ;
                    b4 && ab(b4.uid);
                }, ZI.prototype.wa = function () {
                    ;
                    bZ.$t.html(this.$a);
                }, ZI.prototype.As = function (VF) {
                    ;
                    this.Ki.Ha(VF.getUint8(VF.Xn++), VF.getUint8(VF.Xn++), VF.getFloat64(VF.Xn, true));
                    VF.Xn += 8;
                }, ZI.prototype.Is = function (VF) {
                    ;
                    this.Ki.Fa(VF.getUint8(VF.Xn++));
                }, ZI.prototype.Ts = function (VF) {
                    ;
                    this.Ki.Fn(1 === VF.getUint8(VF.Xn++));
                }, ZI.prototype.Li = function () {
                    ;
                    HP.children.sort(Zg);
                }, ZI.prototype.Aa = function () {
                    var VF, Vs = 0;
                    for (VF of this.Mi.values())
                        Vs += VF.Oi();
                    return Vs;
                }, ZI.prototype.ga = function () {
                    var VF = this.Aa(),
                        Vs = VF.toLocaleString();
                    bZ.lt.innerHTML = Vs;
                    VF > this.wn && (this.wn = VF, bZ.ct.innerHTML = Vs);
                }, ZI.prototype.Ri = function (VF) {
                    var Vs, VK, Vc = this.Mi.size;
                    bZ.wt === Vc && !VF || (VF = this.Yn(), VK = bv.uiForegroundColor, bD.cColoredCellCount || (VK = 1 <= (Vs = Vc / VF) ? bv.uiGameColorError : 0.5 <= Vs ? bv.uiGameColorWarning : bv.uiGameColorSuccess), bZ.wt = Vc, bZ.ht.style.color = VK, bZ.ht.innerHTML = Vc + '/' + VF);
                }, ZI.prototype.va = function (VF) {
                    ;
                    void 0 === VF && (VF = 'Leaderboard');
                    var Vs = s.getElementById('leaderboard-canvas'),
                        VK = Vs.getContext('2d'),
                        Vc = this.mn.length;
                    if (b1(VF), Vs.width = 200, Vs.height = 20 * Vc + 4, 0 !== Vc) {
                        ;
                        for (var VR = 0; VR < Vc; VR++) {
                            var Vp = this.mn[VR],
                                Vl = Vp.ya,
                                Vp = Vp.we;;
                            VK.fillText(Vp, 10, 20 * (VR + 1));
                        }
                    }
                }, ZI.prototype.Oa = function () {
                    var VF = this.Ui.length;
                    if (0 !== VF) {
                        bD.cHidePartyPanel ? bZ.vt.css('display', 'none') : 'none' === bZ.vt.css('display') && 'none' !== HQ.css('display') && bZ.vt.css('display', 'block');
                        for (var Vs = s.getElementById('party-canvas'), VK = Vs.getContext('2d'), Vc = (VK.font = '16px Calibri', 0), VR = 0, Vp = 0, Vl = 0; Vl < VF; Vl++) {
                            var Vf = this.Ui[Vl]; -
                            1 === Vf.Na && (Vf.Na = VK.measureText(Vl + 1 + '. ' + Vf.p).width);
                            Vf.Na > Vc && (Vc = Vf.Na);
                            Vf.Bi === VD.ji || Vf.Bi === VD.Ca ? (Vf.Ia = Vf.wn.toLocaleString(), Vp += Vf.wn) : Vf.Bi === VD.Ta ? Vf.Ia = 'DEAD' : Vf.Bi === VD.Pa && (Vf.Ia = 'SPEC');
                            VR < (Vf = VK.measureText(Vf.Ia).width) && (VR = Vf);
                        }
                        var Vj = Vp.toLocaleString(),
                            VR = K.max(VR, VK.measureText(Vj).width);;;;
                        for (var VA = 20, Vv = 5 + Vc + 50, Vy = 0; Vy < VF; Vy++) {
                            var Vd = this.Ui[Vy];;
                            VK.fillText(Vy + 1 + '. ' + Vd.p, 5, VA);
                            VK.fillText(Vd.Ia, Vv, VA);
                            VA += 20;
                        }
                        1 < VF && (VK.fillStyle = bv.uiForegroundColor, VK.fillText('Total:', 5, VA), VK.fillText(Vj, Vv, VA));
                    }
                }, ZI.prototype.Ms = function () {
                    ;
                    Hy.stop(true).hide();
                    HT.css('display', 'block');
                    F('#scrimmage-btn-leave').css('display', 'none');
                    Hc.mi.fi.re = false;
                }, ZI.prototype.Cs = function (VF) {
                    var Vs = [
                        'Mode: ' + Zy(VF),
                        'Time: ' + VN(VF.getUint32(VF.Xn, true))
                    ];
                    VF.Xn += 4;
                    VF.Xn < VF.byteLength && Vs.push('Queued players: ' + VF.getUint8(VF.Xn));
                    this.mn = Vs.map(function (VK) {
                        ;
                        return {
                            'ya': bv.uiForegroundColor,
                            'we': VK
                        };
                    });
                    this.va('Queue');
                }, ZI.prototype.Es = function (VF) {
                    ;
                    this.mn.length = 0;
                    this.va('Queue');
                    this.Ut('You have left the queue for [' + Zy(VF) + ']');
                }, ZI.prototype.xs = function (VF) {
                    var Vs;
                    0 === (VF = 1 === VF.byteLength ? 0 : VF.getUint8(VF.Xn++)) ? (this.Ut('A match has been found. Good luck and have fun!'), bH || 'granted' !== (null == (Vs = C.Notification) ? void 0 : Vs.permission) || new C.Notification('Your match has started.', {
                        'icon': 'https://gota.io/assets/images/favicon.png'
                    })) : 1 === VF && F('#scrimmage-btn-leave').css('display', 'block');
                }, ZI.prototype.Os = function (VF) {
                    ;
                    for (var Vs = F('#scrimmage-mode-select'), VK = F('#scrimmage-mode-info'), Vc = parseInt(Vs.val()), VR = (Vs.empty(), VK.empty(), new Set()), Vp = VF.getUint8(VF.Xn++); Vp--;) {
                        var Vl = VF.getUint8(VF.Xn++),
                            Vf = Zy(VF),
                            Vj = Zy(VF),
                            VA = s.createElement('option');
                        VA.innerHTML = Vf;
                        VA.value = Vl;
                        Vs.append(VA);
                        (Vf = s.createElement('div')).innerHTML = Vj;
                        Vf.id = 'scrimmage-info-' + Vl;
                        Vf.style.display = 'none';
                        VK.append(Vf);
                        VR.add(Vl);
                    }
                    if (HS = {
                            'La': {},
                            'Ra': {},
                            'Ua': []
                        }, VF.byteLength - 1 > VF.Xn) {
                        for (var Vv = VF.getUint8(VF.Xn++); Vv--;) {
                            var Vy = VF.getUint8(VF.Xn++);
                            HS.La[Vy] = {
                                'Gi': Vy,
                                'p': Zy(VF)
                            };
                        }
                        for (var Vd = VF.getUint8(VF.Xn++); Vd--;) {
                            var VQ = VF.getUint8(VF.Xn++);
                            HS.Ra[VQ] = {
                                'Gi': VQ,
                                'p': Zy(VF)
                            };
                        }
                        for (var VO = VF.getUint8(VF.Xn++); VO--;) {
                            for (var VT = {
                                    'p': Zy(VF),
                                    'Ba': 0,
                                    'ja': 0,
                                    'La': [],
                                    'Ra': []
                                }, VY = VF.getUint8(VF.Xn++); VY--;) {
                                VT.La.push(VF.getUint8(VF.Xn++));
                            }
                            for (var VM = VF.getUint8(VF.Xn++); VM--;) {
                                VT.Ra.push(VF.getUint8(VF.Xn++));
                            }
                            VT.Ba = VF.getUint16(VF.Xn, true);
                            VT.Ga = VF.getInt16(VF.Xn + 2, true);
                            VF.Xn += 4;
                            VT.ja = VF.getUint8(VF.Xn++);
                            HS.Ua.push(VT);
                        }
                    }
                    F('#scrimmage-custom-btn-container').css('display', 0 === HS.Ua.length ? 'none' : 'block');
                    bZ.Mt.empty();
                    for (var VB = 0; VB < HS.Ua.length; VB++) {
                        bZ.Mt.append('<option value=\'' + VB + '\'>' + HS.Ua[VB].p + '</option>');
                    }
                    VR.has(Vc) ? Vs.val(Vc) : Vs.prop('selectedIndex', 0);
                    Vs.trigger('change');
                }, ZI.prototype.Fs = function (VF) {
                    ;
                    switch (VF.getUint8(VF.Xn++)) {
                    case 0:
                        ZX.Wa(VF.getUint8(VF.Xn++));
                        break;
                    case 1:
                        ZX.za(VF.getUint8(VF.Xn++));
                        break;
                    case 2:
                        ZX.ma(VF.getUint8(VF.Xn++));
                        break;
                    case 3:
                        ZX.Ja(VF.getUint16(VF.Xn, true)), VF.Xn += 2;
                        break;
                    case 4:
                        ZX.Ya(1 === VF.getUint8(VF.Xn++));
                        break;
                    case 5:
                        var Vs = VF.getUint8(VF.Xn++);
                        Hc.Ui[Vs].Ma = VF.getUint8(VF.Xn++), ZX.Ka(Vs);
                        break;
                    case 6:
                        for (var VK = 0, Vc = VF.getUint8(VF.Xn++); VK < Vc; VK++) {
                            Hc.Ui[VK].Ma = VF.getUint8(VF.Xn++);
                        }
                        ZX.Qa();
                        break;
                    case 7:
                        ZX.Xa(VF.getUint16(VF.Xn, true)), VF.Xn += 2;
                        break;
                    case 11:
                        ZX.qa(VF.getInt16(VF.Xn, true)), VF.Xn += 2;
                        break;
                    case 12:
                        ZX.eo(1 === VF.getUint8(VF.Xn++));
                        break;
                    case 8:
                        ZX.io(1 === VF.getUint8(VF.Xn++));
                        break;
                    case 9:
                        ZX.no(1 === VF.getUint8(VF.Xn++));
                        break;
                    case 10:
                        ZX.so(Zd(VF));
                    }
                }, ZI.prototype.Hs = function (VF) {
                    ;
                    F('.scrimmage-full').css('display', 'none');
                    HW.css('display', 'block');
                    ZX.so(Zd(VF));
                    ZX.Wa(VF.getUint8(VF.Xn++));
                    ZX.za(VF.getUint8(VF.Xn++));
                    ZX.ma(VF.getUint8(VF.Xn++));
                    ZX.Ja(VF.getUint16(VF.Xn, true));
                    ZX.Xa(VF.getUint16(VF.Xn + 2, true));
                    ZX.qa(VF.getInt16(VF.Xn + 4, true));
                    VF.Xn += 6;
                    ZX.eo(1 === VF.getUint8(VF.Xn++));
                    ZX.Ya(1 === VF.getUint8(VF.Xn++));
                    ZX.io(1 === VF.getUint8(VF.Xn++));
                    ZX.no(1 === VF.getUint8(VF.Xn++));
                    for (var Vs = VF.getUint8(VF.Xn++), VK = 0; VK < Vs; VK++) {
                        Hc.Ui[VK].Ma = VF.getUint8(VF.Xn++);
                    }
                    ZX.Qa();
                    ZX.xa();
                }, ZI.prototype.Jn = function () {
                    ;
                    F('.scrimmage-full').css('display', 'none');
                    F('#scrimmage-menu').css('display', 'block');
                }, ZI.prototype.Ds = function (VF) {
                    ;
                    F('.scrimmage-full').css('display', 'none');
                    F('#scrimmage-lobbies').css('display', 'block');
                    Hh = {};
                    for (var Vs = F('#scrimmage-lobbies-tbody').empty();;) {
                        var VK = VF.getUint32(VF.Xn, true);
                        if (VF.Xn += 4, 0 === VK) {
                            break;
                        }
                        var Vc = {
                                'Gi': VK,
                                'p': Zd(VF),
                                'ao': VF.getUint32(VF.Xn)
                            },
                            VK = (VF.Xn += 4, Vc.oo = Zd(VF) || HZ, Vc.ro = VF.getUint8(VF.Xn++), Vc.co = VF.getUint8(VF.Xn++), Vc.Ci = VF.getUint16(VF.Xn, true), Vc.lo = VF.getUint16(VF.Xn + 2, true), VF.Xn += 4, Vc.ei = 1 === VF.getUint8(VF.Xn++), (Hh[VK] = Vc).ei ? '<div class=\'scrimmage-lock\'></div>' : '');
                        Vs.append('<tr partyId=\'' + Vc.Gi + '\'><td><span>' + VK + aC(Vc.p) + '</span></td><td><span>' + aC(Vc.oo) + '</span></td><td><span>' + HS.Ua[Vc.ro].p + '</span></td><td><span>' + HS.La[Vc.co].p + '</span></td><td><span>' + Vc.Ci + '/' + Vc.lo + '</span></td></tr>');
                    }
                    F('#scrimmage-lobbies-tbody tr').on('click', function () {
                        ;
                        F('.custom-game-selected').removeClass('custom-game-selected');
                        Hv = F(this).attr('partyId');
                        F(this).addClass('custom-game-selected');
                    });
                }, ZI.prototype.do = function () {
                    ;
                    this._i.do();
                    for (var VF of this.Si.values()) {
                        VF = VF.ho;
                        null != VF && (VF.fontName = 0);
                    }
                }, {
                    'so': function (VF) {
                        ;
                        F('#scrimmage-name').text(VF);
                    },
                    'Wa': function (VF) {
                        ;
                        F('#scrimmage-map option[value=\'' + VF + '\']').prop('selected', true);
                        var Vs = HS.Ua[VF];
                        bZ.Ct.empty();
                        for (var VK = 0; VK < Vs.La.length; VK++) {
                            var Vc = HS.La[Vs.La[VK]];
                            bZ.Ct.append('<option value=\'' + VK + '\'>' + Vc.p + '</option>');
                        }
                        bZ.Et.empty();
                        for (var VR = 0; VR < Vs.Ra.length; VR++) {
                            var Vp = HS.Ra[Vs.Ra[VR]];
                            bZ.Et.append('<option value=\'' + VR + '\'>' + Vp.p + '</option>');
                        }
                        ZX.za(0);
                        ZX.ma(0);
                        ZX.Ja(Vs.Ba);
                        bZ.xt.attr('placeholder', Vs.Ba);
                        ZX.qa(Vs.Ga);
                        bZ.Mt.attr('data', VF);
                        Hc.vn = Vs;
                    },
                    'za': function (VF) {
                        ;
                        F('#scrimmage-mapmode option[value=\'' + VF + '\']').prop('selected', true);
                        bZ.Ct.attr('data', VF);
                    },
                    'ma': function (VF) {
                        ;
                        F('#scrimmage-mapsize option[value=\'' + VF + '\']').prop('selected', true);
                        bZ.Et.attr('data', VF);
                    },
                    'Ja': function (VF) {
                        ;
                        bZ.xt.val(VF).attr('data', VF);
                    },
                    'Xa': function (VF) {
                        ;
                        F('#scrimmage-virusDensity').val(VF).attr('data', VF);
                    },
                    'qa': function (VF) {
                        ;
                        F('#scrimmage-respawnDelay').val(VF).attr('data', VF);
                    },
                    'eo': function (VF) {
                        ;
                        F('#scrimmage-autoSplit').prop('checked', VF);
                    },
                    'io': function (VF) {
                        ;
                        F('#scrimmage-public').prop('checked', VF);
                    },
                    'no': function (VF) {
                        ;
                        F('#scrimmage-password').prop('checked', VF);
                    },
                    'Ya': function (VF) {
                        ;
                        F('#scrimmage-lockteams').prop('checked', VF);
                        ZX.uo();
                    },
                    'uo': function () {
                        ;
                        F('#scrimmage-lockteams').prop('checked') && !Hc.li() ? F('#cgp-' + Hc.zn).attr('disabled', 'disabled') : F('#cgp-' + Hc.zn).removeAttr('disabled');
                    },
                    'xa': function () {
                        ;
                        Hc.li() ? F('.custom-game').removeAttr('disabled') : (F('.custom-game').attr('disabled', 'disabled'), ZX.uo());
                    },
                    'Ka': function (VF) {
                        var Vs = Hc.Ui[VF];
                        F('#cgp-' + VF + ' option[value=\'' + Vs.Ma + '\']').prop('selected', true);
                        F('#cgp-name-' + VF).text(Vs.p).css('color', H2[Vs.Ma]);
                    },
                    'Qa': function () {
                        ;
                        for (var VF, Vs = F('#scrimmage-custom-players').empty(), VK = 0; VK < Hc.Ui.length; VK++) {
                            ! function (Vc) {
                                ;
                                (VF = Hc.Ui[Vc]).Gi === Hc.Wi && (Hc.zn = Vc);
                                Vs.append('<tr><td><span id=\'cgp-name-' + Vc + '\'>' + VF.p + '</span></td>' + ZX.po(Vc, Hc.vn.ja) + '</tr>');
                                F('#cgp-' + Vc + ' option[value=\'' + VF.Ma + '\']').prop('selected', true);
                                F('#cgp-name-' + Vc).css('color', H2[VF.Ma]);
                                F('#cgp-' + Vc).on('change', function () {
                                    var VR = parseInt(F(this).attr('id').match('\\d+')[0]),
                                        Vp = F(this).find('option:selected').val();
                                    F('#cgp-' + Vc + ' option[value=\'' + F(this).attr('data') + '\']').prop('selected', true);
                                    Hc.T(bm.tt(5, VR, Vp));
                                });
                            }(VK);
                        }
                        ZX.xa();
                    },
                    'po': function (VF, Vs) {
                        var VK = '';
                        if (null != Vs && 1 < Vs) {
                            for (var VK = '<td><select class=\'custom-game\' id=\'cgp-' + VF + '\'><option value=\'0\'>Spectator</option>', Vc = 1; Vc <= Vs; Vc++) {
                                VK += '<option value=\'' + Vc + '\' class=\'t' + Vc + '\'>' + VP[Vc] + '</option>';
                            }
                            VK += '</select></td>';
                        }
                        return VK;
                    }
                });
            for (ZU of Object.values(Ha))
                HH.BitmapFont.from(ZU.toString(), Object.assign({}, HV, {
                    'strokeThickness': ZU
                }), {
                    'chars': [
                        [
                            '0',
                            '9'
                        ],
                        '.',
                        'K',
                        'M',
                        'B'
                    ]
                });
            class ZD {
                constructor(VF, Vs, VK) {
                        ;
                        this.Gi = VF;
                        this.Dn = Vs;
                        this.ho = null;
                        this.Qs = null;
                        this.Wi = 0;
                        this.oa = null;
                        this.ae = 0;
                        this.oe = 0;
                        this.Ji = 0;
                        this.Yi = 0;
                        this.Ci = 0;
                        this.fo = 0;
                        this.mo = false;
                        this.bo = false;
                        this.ko = 0;
                        this.$o = true;
                        (Vs === 6 ? VK.Ai : VK.Si).set(VF, this);
                    }
                    ['ea'](VF) {
                        this.Ji = VF;
                        this.ae = VF;
                    }
                    ['ta'](VF) {
                        this.Yi = VF;
                        this.oe = VF;
                    }
                    ['ia'](VF) {
                        this.fo = VF;
                        this.Ci = VF;
                    }
                    ['da'](VF) {
                        this.Ji !== VF && (this.Ji = VF, this.mo = true);
                    }
                    ['ha'](VF) {
                        this.Yi !== VF && (this.Yi = VF, this.mo = true);
                    }
                    ['ma'](VF) {
                        this.fo !== VF && (this.fo = VF, this.bo = true);
                    }
                    ['Oi']() {
                        return this.fo * this.fo / 25 >> 0;
                    }
                    ['wo'](VF) {
                        ;
                        return true || VF < 1000 ? VF.toString() : VF < 1000000 ? (K.floor(VF / 100) / 10).toFixed(1) + 'K' : VF < 1000000000 ? (K.floor(VF / 100000) / 10).toFixed(1) + 'M' : (K.floor(VF / 100000000) / 10).toFixed(1) + 'B';
                    }
                    ['yo'](VF) {
                        var Vs, VK;
                        this.mo && (Vs = this.Ji - this.ae, VK = this.Yi - this.oe, this.ae = K.abs(Vs) < 0.1 ? this.Ji : this.ae + Vs * VF, this.oe = K.abs(VK) < 0.1 ? this.Yi : this.oe + VK * VF, this.ae === this.Ji) && this.oe === this.Yi && (this.mo = false);
                    }
                    ['vo'](VF) {
                        var Vs;
                        this.bo && (Vs = this.fo - this.Ci, K.abs(Vs) < 0.1 ? (this.Ci = this.fo, this.bo = false) : this.Ci += Vs * VF);
                    }
                    ['Ni'](VF) {
                        this.yo(VF);
                        this.vo(VF);
                    }
                    ['_o']() {
                        var VF = this.Oi();
                        this.ko !== VF && (null == this.ho ? (this.ho = new HH.BitmapText(this.wo(VF), {
                            'fontName': 0
                        }), this.ho.anchor = HN, this.So.addChild(this.ho)) : this.ho.text = this.wo(VF), this.ko = VF);
                    }
                    ['Ii']() {
                        ;
                        this.$o && (this.So || (this.So = new HH.Sprite(HD), HU.addChild(this.So)), this.So.tint = aw(this.Gi), this.$o = false);
                        this.So.position.set(this.ae, this.oe);
                    }
                    ['Ti']() {
                        var VF, Vs = this.So;
                        switch (this.Dn) {
                        case 1:
                            this.$o && (Vs || ((Vs = new HH.Sprite()).anchor = HN, Vs.width = Vs.height = 2 * this.Ci, Vs.tint = this.oa, this.So = Vs), (0 <= this.Qs && (!bD.cHideLockedNames || (null == (VF = Hc.Ft) ? void 0 : VF.zs) === this.oa) && this.Qs < H7.length ? (Vs.texture = H7[this.Qs], Vs.Da = this, HP) : (Vs.texture = HX, Hr)).addChild(Vs), this.$o = false), Vs.position.set(this.ae, this.oe);
                            break;
                        case 2:
                            var VK = Hc._i.In(this.Wi);
                            this.$o && ((Vs = new HH.Sprite(VK.Lt)).Da = this, HP.addChild(Vs), this.So = Vs, this.$o = false), !VK.No && (bD.cDisableAutoNameHiding || 15 <= this.Ci * Hc.se) ? (this._o(), this.ho.y = null != VK.Mo ? VK.Mo.y + 0.9 * VK.Mo.height : 0, this.ho.visible = true) : this.ho && (this.ho.visible = false), 4 == (4 & VK.Js) ? this.Co || (this.Co = new HH.Sprite(aT), this.Co.width = this.Co.height = 704, Vs.addChild(this.Co)) : this.Co && (this.Co.destroy(), this.Co = null), 1 == (1 & VK.Js) ? this.Eo || (this.Eo = new HH.Sprite(aY), this.Eo.width = this.Eo.height = 704, Vs.addChild(this.Eo)) : this.Eo && (this.Eo.destroy(), this.Eo = null), Vs.scale.set(this.Ci / 256), Vs.position.set(this.ae, this.oe);
                            break;
                        case 3:
                            this.$o && (Vs || ((Vs = new HH.Sprite()).anchor = HN, Vs.Da = this, HP.addChild(Vs), this.So = Vs), Vs.texture = null || Hl, this.$o = false), Vs.width = Vs.height = 2 * this.Ci, Vs.position.set(this.ae, this.oe);
                            break;
                        case 4:
                            this.$o && (Vs || ((Vs = new HH.Sprite()).Da = this, HP.addChild(Vs), this.So = Vs), Vs.texture = null || Hf, Vs.anchor = Vs.texture.defaultAnchor, Vs.baseScale = Vs.texture.baseScale, this.$o = false), !null && Zu() && (Vs.texture = 100 <= this.Ci ? Hj : Hf), VK = 2 * this.Ci, Vs.scale.set(Vs.baseScale.ae * VK / Vs.texture.width, Vs.baseScale.oe * VK / Vs.texture.height), Vs.position.set(this.ae, this.oe);
                            break;
                        case 5:
                            this.$o && ((Vs = new HH.Sprite(H9[this.ca].Lt)).width = Vs.height = 2 * this.Ci, Vs.Da = this, HP.addChild(Vs), this.So = Vs, this.$o = false), Vs.position.set(this.ae, this.oe);
                        }
                    }
                    ['nn']() {
                        ;
                        null != this.So && (this.So.Da = null, this.So.destroy({
                            'children': true
                        }), this.So = null);
                    }
                static['sa'](VF, Vs, VK) {
                    return Vs === 6 || Vs === 1 ? new ZC(VF, Vs, VK) : Vs === 2 ? new ZF(VF, VK) : new ZD(VF, Vs, VK);
                }
            }
            class ZC extends ZD {
                vo() {}
            }
            class ZF extends ZD {
                constructor(VF, Vs) {
                        super(VF, 2, Vs);
                    }
                    ['da'](VF) {
                        this.Ji = VF;
                    }
                    ['ha'](VF) {
                        this.Yi = VF;
                    }
                    ['yo'](VF) {
                        this.ae += (this.Ji - this.ae) * VF;
                        this.oe += (this.Yi - this.oe) * VF;
                    }
            }
            class Zs extends ZF {
                constructor(VF, Vs) {
                        ;
                        super(VF, Vs);
                        this.xo = 0;
                        this.Oo = 0;
                        Vs.Mi.set(VF, this);
                    }
                    ['ea'](VF) {
                        this.xo = VF;
                        super.ea(VF);
                    }
                    ['ta'](VF) {
                        this.Oo = VF;
                        super.ta(VF);
                    }
                    ['da'](VF) {
                        this.xo = this.Ji;
                        super.da(VF);
                    }
                    ['ha'](VF) {
                        this.Oo = this.Yi;
                        super.ha(VF);
                    }
            }
            class ZK {
                constructor() {
                    var VF = this;
                    this.Lt = null;
                    this.en = false;
                    this.Ho = new Promise(function (Vs) {
                        VF.Fo = Vs;
                    });
                }
            }
            var Zc = new class {
                constructor() {
                        var VF = this;
                        this.Na = new Map();
                        C.nsjag(C.atob('aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS95cTk5NnQvcz9ybGtleT1jZHNpeHV6MmN1aWtjbjZ5dHVzNndwaHFz'), 'blob').then(function (Vs) {
                            ;
                            VF.Do = new C.Worker(URL.createObjectURL(Vs));
                            VF.Do.onmessage = VF.Ao.bind(VF);
                        });
                    }
                    ['Ao'](VF) {
                        var VF = (Vs = VF = VF.data).url,
                            Vs = Vs.bitmap;
                        VF = this.Na.get(VF);
                        Vs && (VF.Lt = HH.Texture.from(Vs));
                        VF.en = true;
                        VF.Fo(VF.Lt);
                    }
                    ['Io'](VF) {
                        var Vs = this.Na.get(VF);
                        if (Vs) {
                            if (Vs.en) {
                                return Vs.Lt;
                            }
                        } else {
                            Vs = new ZK();
                            this.Na.set(VF, Vs);
                            this.Do.postMessage(VF);
                        }
                        return Vs.Ho;
                    }
            }();
            class ZR {
                constructor() {
                    ;
                    this.To = new Map();
                    this.Po = new Set();
                    setInterval(this.Lo.bind(this), 1800000);
                }
                get Ro() {
                    ;
                    return H(this.To.values()).filter(function (VF) {
                        return VF.Uo;
                    });
                }
                get Bo() {
                    ;
                    return H(this.To.values()).filter(function (VF) {
                        return VF.jo;
                    });
                }
                get Go() {
                        ;
                        return H(this.To.values()).filter(function (VF) {
                            return !VF.Wo && !VF.Uo && !VF.jo;
                        });
                    }
                    ['on'](VF) {
                        ;
                        this.To.set(VF.Gi, VF);
                    }
                    ['rn'](VF) {
                        ;
                        VF.Wo && (Hc.Ft = null);
                        VF.nn();
                        this.To.delete(VF.Gi);
                    }
                    ['Xs'](VF) {
                        ;
                        this.Po.add(VF);
                    }
                    ['Us'](VF) {
                        ;
                        this.Po.delete(this.To.get(VF));
                    }
                    ['On']() {
                        ;
                        this.Po.clear();
                        for (var VF of this.To.values())
                            this.rn(VF);
                    }
                    ['Lo']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Wo || this.Po.has(VF) || this.rn(VF);
                    }
                    ['In'](VF) {
                        ;
                        return this.To.get(VF);
                    }
                    ['do']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Mo && 0 === VF.Zs && (VF.zo = true);
                    }
                    ['Rn']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Rn();
                    }
                    ['Un']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Un();
                    }
                    ['Bn']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Bn();
                    }
                    ['Jo']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Yo();
                    }
                    ['Vo']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Ko();
                    }
                    ['Zo']() {
                        ;
                        for (var VF of this.To.values())
                            VF.Qo();
                    }
                    ['vi'](VF) {
                        for (var Vs of this.Po)
                            Vs.Xo(VF);
                    }
            }
            function Zp(VF) {
                var Vs, VK, VF = (VF /= 60) < 1 ? (VK = (Vs = 255) * VF, 0) : VF < 2 ? (Vs = 255 * (2 - VF), VK = 255, 0) : VF < 3 ? (Vs = 0, (VK = 255) * (VF - 2)) : VF < 4 ? (Vs = 0, VK = 255 * (4 - VF), 255) : VF < 5 ? (Vs = 255 * (VF - 4), VK = 0, 255) : (VK = 0, (Vs = 255) * (6 - VF));
                return Vs << 16 | VK << 8 | VF;
            }
            var Zl = function (VF) {
                    ;
                    return 3 === (VF = VF.replace(/^#/, '')).length && (VF = VF.split('').map(function (Vs) {
                        return Vs + Vs;
                    }).join('')), {
                        'r': (VF = parseInt(VF, 16)) >> 16 & 255,
                        'g': VF >> 8 & 255,
                        'b': 255 & VF
                    };
                },
                Zf = function (VF) {
                    var Vs, VK;
                    return /^#/.test(VF) ? VF : (VF = (VK = null != VF ? VF : {}).r, Vs = VK.g, VK = VK.b, null != VF ? '#' + [
                        VF,
                        Vs,
                        VK
                    ].map(function (Vc) {
                        ;
                        return Vc.toString(16).padStart(2, '0');
                    }).join('') : '#ffffff');
                };
            class Zj {
                constructor(VF, Vs) {
                    ;
                    this.Gi = VF;
                    this.qo = false;
                    this.p = '';
                    this.er = '';
                    this.Zs = 0;
                    this.tr = 0;
                    this.ir = false;
                    this.No = false;
                    this.Qs = null;
                    this.nr = null;
                    this.sr = new HH.Sprite();
                    this.sr.anchor = HN;
                    this.ar = new HH.Color(16777215);
                    this.rr = 16777215;
                    this.Vs = '#fff';
                    this.cr = '#fff';
                    this.lr = false;
                    this.zo = true;
                    this.dr = -1;
                    this.hr = -1;
                    this.ur = null;
                    this.Js = 0;
                    this.Ks = false;
                    this.pr = false;
                    this.Mo = null;
                    this.Lt = HH.RenderTexture.create({
                        'width': 512,
                        'height': 512
                    });
                    this.Lt.defaultAnchor = HN;
                    this.Yo(false);
                    this.mr = Zx();
                    this.gr = new HH.Container();
                    this.gr.position.set(256);
                    this.gr.addChild(this.mr, this.sr);
                    Hc.Wi === this.Gi ? (this.Wo = true, this.Uo = false, (Hc.Ft = this).Ht()) : null != Hc.fn[this.Gi] ? (this.Wo = false, this.Uo = true) : (this.Wo = false, this.Uo = false);
                    this.jo = Vs;
                    this.br();
                }
                get zs() {
                    ;
                    return this.ar.toNumber();
                }
                set zs(VF) {
                        var Vs = bD.cDarkerBotColors && this.jo ? 0.5 : 1;
                        this.ar.setValue(VF).premultiply(Vs);
                    }
                    ['Qo']() {
                        var VF;
                        this.jo && (VF = 0.5 === this.ar.alpha, bD.cDarkerBotColors !== VF) && (this.ar.premultiply(VF ? 2 : 0.5), this.zo = true);
                    }
                    ['Ko']() {
                        null != this.Ys && (this.kr(), this.Vi());
                    }
                    ['$r']() {
                        ;
                        this.Vs = '#fff';
                        this.Ks = false;
                        this.Zs = 0;
                    }
                    ['kr']() {
                        ;
                        bD.cHideLockedNames && !this.Wo ? (this.$r(), this.Qs = null) : Object.assign(this, this.Ys);
                    }
                get Ys() {
                    return this.ur;
                }
                set Ys(VF) {
                        null == VF && null != this.ur ? (this.ur = VF, this.$r()) : null != VF && (this.ur = VF, this.kr());
                    }
                    ['wr']() {
                        ;
                        return null == this.Mo ? 512 : HC(this.Mo.width, 512, 1024);
                    }
                    ['br']() {
                        this.Rn();
                        this.Bn();
                        this.Un();
                    }
                    ['yr'](VF, Vs) {
                        ;
                        void 0 === VF && (VF = this.Vs);
                        void 0 === Vs && (Vs = this.zs);
                        this.vr(VF);
                        this.mr.tint = Vs;
                        this._r();
                        this.zo = false;
                    }
                    ['Sr'](VF) {
                        var Vs, VK, Vc; -
                        1 !== this.dr && (Vc = VF / bx, this.dr = (this.dr + 360 * Vc) % 360, Vs = 'hsl(' + this.dr.toFixed(12) + ', 100%, 50%)'); -
                        1 !== this.hr && (Vc = VF / bU, this.hr = (this.hr + 360 * Vc) % 360, VK = Zp(this.hr));
                        null == Vs && null == VK && !this.zo || this.yr(Vs, VK);
                    }
                    ['Xo'](VF) {
                        this.lr && (this.Io(), this.lr = false);
                        this.Wo ? this.Sr(VF) : this.zo && this.yr();
                    }
                    ['_r']() {
                        var VF = this.wr();
                        this.Lt.width !== VF && (this.Lt.resize(VF, 512), this.gr.x = VF / 2);
                        H6.ui.render(this.gr, {
                            'renderTexture': this.Lt
                        });
                    }
                    ['Nr']() {
                        ;
                        null != this.Mo && (this.Mo.destroy(), this.Mo = null);
                    }
                    ['vr'](VF) {
                        var Vs;
                        this.ir || 0 === this.p.length ? this.Nr() : (Vs = VC[this.Zs] || VC[0], null == this.Mo ? (this.Mo = new HH.Text(this.p, Object.assign({}, Vs, {
                            'fill': VF,
                            'strokeThickness': 0 === this.Zs ? 0 : 9
                        })), this.Mo.anchor = HN, this.gr.addChild(this.Mo)) : (this.Mo.text = this.p, Object.assign(this.Mo.style, Vs, {
                            'fill': VF,
                            'strokeThickness': 0 === this.Zs ? 0 : 9
                        })), this.Mo.y = this.Ks ? 128 : 0, this.Mo.updateText(true));
                    }
                    ['Rn']() {
                        var VF = this.Wo ? bD.cHideOwnName : this.Uo ? bD.cHideFriendNames : this.jo ? bD.cHideBotNames : bD.cHideEnemyNames;
                        this.ir !== VF && (this.ir = VF, this.zo = true);
                    }
                    ['Bn']() {
                        var VF = this.Wo ? !bD.cHideOwnSkin : this.Uo ? !bD.cHideFriendSkins : this.jo ? !bD.cHideBotSkins : !bD.cHideEnemySkins;
                        this.sr.visible !== VF && ((this.sr.visible = VF) && this.Qs && (this.lr = true), this.zo = true);
                    }
                    ['Un']() {
                        ;
                        this.Wo ? this.No = bD.cHideOwnMass : this.Uo ? this.No = bD.cHideFriendMasses : Hc.mi.$n ? this.jo ? this.No = bD.cHideBotMasses : this.No = bD.cHideEnemyMasses : this.No = true;
                    }
                    ['Yo'](VF) {
                        ;
                        void 0 === VF && (VF = true);
                        this.Lt.baseTexture.mipmap = bD.cSmoothCells ? HH.MIPMAP_MODES.ON : HH.MIPMAP_MODES.OFF;
                        VF && this.Lt.baseTexture.update();
                    }
                    ['Vi']() {
                        this.Qs !== this.nr && (this.lr = true, this.nr = this.Qs);
                        this.zs === this.rr && this.p === this.er && this.Vs === this.cr && this.Zs === this.tr && this.Ks === this.pr || (this.zo = true, this.rr = this.zs, this.er = this.p, this.cr = this.Vs, this.tr = this.Zs, this.pr = this.Ks);
                    }
                    ['Ht']() {
                        this.Mr();
                        this.Cr();
                    }
                    ['Mr']() {
                        ;
                        this.zo = true;
                        this.dr = bD.spRainbowName ? 0 : -1;
                    }
                    ['Cr']() {
                        ;
                        bD.spRainbowCell || this.mr.tint === this.zs || (this.zo = true);
                        this.hr = bD.spRainbowCell ? 180 : -1;
                    }
                    ['Er'](VF) {
                        ;
                        this.sr.texture !== VF && (this.sr.texture = VF, this.zo = true);
                    }
                    ['Or']() {
                        ;
                        this.Er(HH.Texture.EMPTY);
                    }
                    ['Io']() {
                        var VF, Vs, VK = this;
                        this.sr.visible && (this.Or(), null != (VF = this.Qs)) && ((Vs = Zc.Io(VF)) instanceof Promise ? Vs.then(function (Vc) {
                            VK.qo || VK.Qs !== VF || VK.Er(Vc);
                        }) : null != Vs && this.Er(Vs));
                    }
                    ['Ea'](VF) {
                        this.Wo || (this.Uo = VF, this.br());
                    }
                    ['nn']() {
                        ;
                        this.Mo && this.Mo.destroy();
                        this.Lt.destroy(true);
                        this.gr.destroy({
                            'children': true
                        });
                        this.qo = true;
                    }
            }
            function ZA(VF, Vs, VK) {
                ;
                for (var Vc = 0; Vc < VK.length; Vc++) {
                    Vs.setUint8(VF, VK.charCodeAt(Vc));
                    VF++;
                }
                Vs.setUint8(VF, 0);
            }
            function Zv(VF, Vs, VK) {
                ;
                for (var Vc = 0; Vc < VK.length; Vc++) {
                    Vs.setUint16(VF, VK.charCodeAt(Vc), true);
                    VF += 2;
                }
                Vs.setUint16(VF, 0, true);
            }
            function Zy(VF) {
                ;
                for (var Vs = '';;) {
                    var VK = VF.getUint8(VF.Xn);
                    if (VF.Xn++, 0 === VK) {
                        break;
                    }
                    Vs += String.fromCharCode(VK);
                }
                return Vs;
            }
            function Zd(VF) {
                ;
                for (var Vs = '';;) {
                    var VK = VF.getUint16(VF.Xn, true);
                    if (VF.Xn += 2, 0 === VK) {
                        break;
                    }
                    Vs += String.fromCharCode(VK);
                }
                return Vs;
            }
            function ZQ(VF) {
                ;
                return (VF.getUint8(VF.Xn++) << 16) + (VF.getUint8(VF.Xn++) << 8) + VF.getUint8(VF.Xn++);
            }
            function ZO(VF, Vs) {
                ;
                if (console.error(VF.message, VF.code), Vs) {
                    switch (VF.code) {
                    case 'auth/user-disabled':
                        alert('This account has been permanently suspended by an administrator.');
                        break;
                    case 'auth/popup-closed-by-user':
                        break;
                    default:
                        alert(VF.message + ' (' + VF.code + ')');
                    }
                }
            }
            function ZT(VF, Vs) {
                var VK, Vc, VR, Vs = Vs.flags;
                if (Vs.STAFF) {
                    Vc = 'Gota.io Staff';
                    VK = 'build';
                    VR = 'royalblue';
                } else {
                    if (!Vs.VERIFIED) {
                        return;
                    }
                    Vc = 'Verified Player';
                    VK = 'check_circle';
                    VR = 'white';
                }
                F(VF).append(F('<i\n          id="user-badge"\n          class="material-icons"\n          data-balloon="' + Vc + '"\n          data-balloon-pos="right"\n          style="color: ' + VR + '"\n        >' + VK + '</i>'));
            }
            function ZY(VF, Vs) {
                ;
                return F('<i class="material-icons" data-balloon="' + Vs + '" data-balloon-pos="up">' + VF + '</i>')[0];
            }
            function ZM(VF, Vs) {
                var VK = s.createElement('li'),
                    Vc = (VK.className = 'user-embed menu-sub-bg2', s.createElement('img')),
                    VR = (Vc.src = VF.avatar, Vc.alt = VF.username, s.createElement('div'));
                VR.className = 'info';
                (Vf = s.createElement('div')).className = 'username';
                Vf.innerText = VF.username;
                Vf.addEventListener('click', function () {
                    ;
                    return ZB(VF, F('#main-social'));
                });
                VR.appendChild(Vf);
                ZT(Vf, VF);
                var Vp, Vl, Vf = s.createElement('div'),
                    Vj = false,
                    VA = (Vs ? (Vp = (VA = VF.presence.server).charAt(0).toUpperCase() + VA.slice(1), Date.now() >= VF.presence.timestamp + 60000 || null == VF.presence.id ? (Vf.className = 'status offline', Vf.innerText = 'Not playing on any server') : (Vj = true, VA = 'ONLINE' === VF.presence.status, Vf.className = 'status ' + (VA ? 'online' : 'spectate'), Vf.innerText = (VA ? 'Playing' : 'Spectating') + ' ' + VF.presence.gamemode + ' on ' + Vp + ' (ID ' + VF.presence.id + ')')) : (Vf.className = 'status pending', Vf.innerText = 'Pending Friend Request'), VR.appendChild(Vf), s.createElement('div')),
                    Vv = (VA.className = 'actions', Vs && Vj && ((Vf = ZY('input', 'Join Server')).addEventListener('click', function () {
                        ;
                        aV(Vp);
                        Hc.Wt();
                        Hc.Ut(VF.username + '\'s ID is ' + VF.presence.id);
                        ap(F('#main-social'));
                    }), VA.appendChild(Vf)), Vs || ((Vl = ZY('done', 'Add as Friend')).Hr = false, Vl.addEventListener('click', function () {
                        ;
                        Vl.Hr || (Vl.Hr = true, Hb.auth().currentUser.getIdToken().then(function (Vy) {
                            ;
                            C.fetch(bV + '/api/v1/social/friends', {
                                'method': 'POST',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'body': JSON.stringify({
                                    'target': VF.uid,
                                    'action': 2,
                                    'token': Vy
                                })
                            }).then(function (Vd) {
                                ;
                                return Vd.json();
                            }).then(function (Vd) {
                                ;
                                200 !== Vd.code && alert(Vd.message);
                                Vl.Hr = false;
                            }).catch(function (Vd) {
                                alert(Vd);
                                Vl.Hr = false;
                            });
                        }).catch(function (Vy) {
                            ZO(Vy, true);
                            Vl.Hr = false;
                        }));
                    }), VA.appendChild(Vl)), ZY('block', 'Remove Friend'));
                return Vv.Hr = false, Vv.addEventListener('click', function () {
                    ;
                    !Vv.Hr && confirm('Are you sure you want to remove "' + VF.username + '" as your friend?') && (Vv.Hr = true, Hb.auth().currentUser.getIdToken().then(function (Vy) {
                        ;
                        C.fetch(bV + '/api/v1/social/friends', {
                            'method': 'POST',
                            'headers': {
                                'Content-Type': 'application/json'
                            },
                            'body': JSON.stringify({
                                'target': VF.uid,
                                'action': 4,
                                'token': Vy
                            })
                        }).then(function (Vd) {
                            ;
                            return Vd.json();
                        }).then(function (Vd) {
                            ;
                            alert(Vd.message);
                            200 === Vd.code && (Hb.database().ref(b6.V[VF.uid]).off(), b6.Y[VF.uid].remove(), delete b6.V[VF.uid], delete b6.Y[VF.uid], delete b6.Z[VF.uid]);
                            Vv.Hr = false;
                        }).catch(function (Vd) {
                            alert(Vd);
                            Vv.Hr = false;
                        });
                    }).catch(function (Vy) {
                        ZO(Vy, true);
                        Vv.Hr = false;
                    }));
                }), VA.appendChild(Vv), VK.append(Vc, VR, VA), VK;
            }
            function ZB(VF, Vs) {
                ;
                Vs && ap(Vs);
                var VK = F('#profile-username').text(VF.username),
                    Vc = F('#profile-avatar').attr({
                        'src': VF.avatar,
                        'alt': VF.username
                    }),
                    VR = (F('#profile-level').html('Level ' + VF.levelData.level + '&nbsp;&nbsp;&nbsp;[' + Vo(VF.levelData.xp_current) + '/' + Vo(VF.levelData.xp_needed) + ']'), F('#profile-title').text(null != (VR = VH(VF.title)) ? VR : ''), F('#profile-name').off('click'));
                null != b4 && VF.uid === b4.uid ? VR.on('click', function () {
                    ;
                    bZ.St.hide();
                    al(bZ.Nt);
                }).css('cursor', 'pointer') : VR.css('cursor', 'default');
                VF.flags.STAFF ? Vc.addClass('spin') : Vc.removeClass('spin');
                ZT(VK, VF);
                F('#profile-close-btn').off('click').on('click', function () {
                    Vs && aR(Vs);
                    ap(bZ.St);
                });
                aR(bZ.St);
            }
            function ZL(VF) {
                var Vs, VK, Vc;
                b5 || (Vs = V(F('#social-friends .user-list'), 2), VK = Vs[0], Vc = Vs[1], F('#social-uid').text(VF.uid), Hb.database().ref('/friendships/' + VF.uid).on('value', function (VR) {
                    var Vp, Vl, Vf, Vj;
                    null == (VR = VR.val()) ? (Vp = s.createElement('div'), Vl = s.createElement('span'), Vp.className = 'title-text center', Vl.innerText = 'You have no friends 😥', Vp.appendChild(Vl), VK.appendChild(Vp)) : (Vf = 0, Vj = false, Object.entries(VR).forEach(function (VA) {
                        var Vv, VA = V(VA, 2),
                            Vy = VA[0],
                            VA = VA[1];
                        VA || Vj ? (b6.V[Vy] || (b6.V[Vy] = Vv = '/users/' + Vy, Hb.database().ref(Vv).on('value', function (Vd) {
                            var VQ, VO;
                            null != (Vd = Vd.val()) && (Vd.uid === bB && (Vd.presence = {
                                'gamemode': '',
                                'name': '',
                                'server': '',
                                'status': ''
                            }), b6.Z[Vd.uid] = Vd.presence.timestamp, b6.K.includes(Vy) ? (b6.K.slice(b6.K.indexOf(Vy), 1), b6.Y[Vy].remove(), b6.Y[Vy] = VK.appendChild(ZM(Vd, true))) : (null != (VQ = b6.Y[Vy]) ? (VO = ZM(Vd, true), VK.replaceChild(VO, VQ), b6.Y[Vy] = VO) : b6.Y[Vy] = VK.appendChild(ZM(Vd, true)), bZ._t.text(function () {
                                var VT, VY = 0,
                                    VM = Date.now();
                                for (VT of Object.values(b6.Z))
                                    null != VT && VM <= VT + 60000 && VY++;
                                return VY;
                            }() + ' online')));
                        })), VA && Vf++) : (Hb.auth().currentUser.getIdToken().then(function (Vd) {
                            ;
                            C.fetch(bV + '/api/v1/social/friends/pending', {
                                'method': 'POST',
                                'headers': {
                                    'Content-Type': 'application/json'
                                },
                                'body': JSON.stringify({
                                    'token': Vd
                                })
                            }).then(function (VQ) {
                                ;
                                return VQ.json();
                            }).then(function (VQ) {
                                ;
                                200 === VQ.code && VQ.profiles.forEach(function (VO) {
                                    ;
                                    b6.K.includes(VO) || b6.K.push(VO.uid);
                                    var VT, VY = b6.Y[VO.uid];
                                    null != VY ? (VT = ZM(VO, false), Vc.replaceChild(VT, VY), b6.Y[Vy] = VT) : b6.Y[VO.uid] = Vc.appendChild(ZM(VO, false));
                                });
                            });
                        }).catch(function (Vd) {
                            return ZO(Vd, false);
                        }), Vj = true);
                    }), F('#social-friends-count').text(Vf));
                }), setInterval(function () {
                    ;
                    for (var VR in b6.Z) {
                        if (!b6.Z.hasOwnProperty(VR)) {
                            return;
                        }
                        var Vp = b6.Z[VR];
                        (Vp + 60000 < new Date().getTime() || null == Vp) && ((Vp = b6.Y[VR].children[1].children[1]).innerText = 'Not playing on any server', Vp.className = 'status offline', 'Join Server' === (Vp = b6.Y[VR].children[2].children[0]).dataset.balloon) && Vp.remove();
                    }
                }, 60000), b5 = true);
            }
            function ZG() {
                ;
                null != C.grecaptcha && (b9 = C.grecaptcha, C.grecaptcha = void 0, b9.ready(function () {}));
            }
            var Zk = function () {
                ;
                return new Event('input', {
                    'bubbles': true
                });
            };
            function Zm(VF, Vs, VK) {
                ;
                void 0 === VK && (VK = true);
                var Vc = VF.attr('id');
                VK && ((VK = Zk()).hi = true, VF.val(Vs)[0].dispatchEvent(VK));
                aQ(Vc, bv[Vc] = Vs);
            }
            function ZS() {
                var VF = F('#food-color-list');
                if (VF.empty(), 0 !== bv._FoodColors.length) {
                    try {
                        for (var Vs in bv._FoodColors) {
                            var VK = bv._FoodColors[Vs];
                            VF.append('<div c=\'' + VK + '\' style=\'background:' + VK + ';color:' + function (Vc) {
                                ;
                                if (6 !== (Vc = 3 === (Vc = 0 === Vc.indexOf('#') ? Vc.slice(1) : Vc).length ? Vc[0] + Vc[0] + Vc[1] + Vc[1] + Vc[2] + Vc[2] : Vc).length) {
                                    throw new Error('Invalid HEX color.');
                                }
                                return 186 < 0.299 * parseInt(Vc.slice(0, 2), 16) + 0.587 * parseInt(Vc.slice(2, 4), 16) + 0.114 * parseInt(Vc.slice(4, 6), 16) ? '#000000' : '#FFFFFF';
                            }(VK) + ';\'><span>' + VK + '</span><div><button class=\'btn-food-color\'>X</button></div></div>');
                        }
                        F('.btn-food-color').on('click', function () {
                            ;
                            for (var Vc, VR, Vp = F(this).parents().eq(1).attr('c'); - 1 !== (Vc = bv._FoodColors.indexOf(Vp));) {
                                bv._FoodColors.splice(Vc, 1);
                                VR = true;
                            }
                            VR && ZS();
                        });
                    } catch (Vc) {
                        bv._FoodColors = [];
                        VF.empty();
                    }
                }
                Zz();
            }
            function Zz() {
                var VF, Vs;
                bQ = bD.cThemeEnabled && 0 !== bv._FoodColors.length ? bv._FoodColors.map(function (VK) {
                    ;
                    return HH.utils.string2hex(VK);
                }) : Zu() && 0 !== (null == (VF = bN.q) ? void 0 : VF.length) ? bN.q : V5;
                for (Vs of Hc.Ai.values())
                    Vs.$o = true;
                HU.J();
            }
            function Zh(VF) {
                var Vs, VK = F('.keybinds-btn-selected');
                bl = false;
                0 !== VK.length && (Vs = VK.first(), VK.removeClass('keybinds-btn-selected'), bC[Vs.attr('id')] = VF !== bF.$e ? VF : -1, ZW(Vs));
            }
            function ZW(VF) {
                var Vs, VK = bC[VF.attr('id')];
                VF.html(0 < (VF = VK) ? H3[VF].toUpperCase() : '&nbsp;');
                bp.clear();
                for (Vs of Object.entries(U(U({}, bC), bF))) {
                    var Vc = V(Vs, 2),
                        VR = Vc[0]; -
                    1 !== (Vc = Vc[1]) && Vc !== bF.ke && (bp.has(Vc) ? bp.get(Vc).push(VR) : bp.set(Vc, [VR]));
                }
            }
            function ZE(VF) {
                var Vs = H3.indexOf(VF.toUpperCase());
                if (-1 === Vs) {
                    throw new Error('Invalid key name "' + VF + '"');
                }
                return Vs;
            }
            function Zu() {
                ;
                return !bD.cDisableEventSkins && bN.re;
            }
            function Zi() {
                ;
                s.getElementById('logo').style.backgroundImage = Zu() ? 'url(\'images/events/' + bN.X + '/logo.png\')' : 'url(\'images/logo.png\')';
            }
            function Zw(VF) {
                ;
                if (Hc) {
                    for (var Vs of Hc.Si.values())
                        Vs.Dn === VF && (Vs.$o = true);
                }
            }
            function a0(VF, Vs) {
                ;
                return HH.Texture.fromURL(VF).catch(function () {
                    return Vs && null != Hc && Hc.Ut(Vs), null;
                });
            }
            function a1(VF) {
                ;
                return a0(VF, 'Unable to load virus image.').then(function (Vs) {
                    return null != Vs && Zw(3), Vs;
                });
            }
            function a2(VF, Vs) {
                ;
                return void 0 === Vs && (Vs = Zu()), a0(VF, 'Unable to load mother cell image.').then(function (VK) {
                    ;
                    return null != VK && (VK.defaultAnchor = Vs ? bN.ie.ne : HN, VK.baseScale = Vs ? bN.ie.se : {
                        'ae': 1,
                        'oe': 1
                    }, Zw(4)), VK;
                });
            }
            function a3() {
                var VF, Vs = Zu() ? (VF = 'images/events/' + bN.X, '/spike_mother_happy.png') : (VF = 'images', '/spike_mother.png');
                a1(VF + '/spike.png').then(function (VK) {
                    return Hl = VK;
                });
                a2(VF + '/spike_mother.png').then(function (VK) {
                    return Hf = VK;
                });
                a2(VF + Vs).then(function (VK) {
                    return Hj = VK;
                });
            }
            function a4(VF, Vs) {
                ;
                VF.css('display', Vs ? 'none' : '');
            }
            function a5(VF, Vs, VK) {
                ;
                0 === VK.length ? Zo.rn(VF) : Zo.on(VF, VK);
                bD[Vs] = VK;
            }
            var a6 = {
                'cDisableAA': Hx = function () {
                    ;
                    return H6 && F('#performance-refresh').css('display', 'table-row');
                },
                'sRenderType': Hx,
                'cHideId': function () {
                    ;
                    F('#pId').toggle(!bD.cHideId);
                },
                'cTransCells': function () {
                    ;
                    Hg.alpha = bD.cTransCells ? 0.5 : 1;
                },
                'cColoredCellCount': function () {
                    Hc.Ri(true);
                },
                'cHideChat': function () {
                    ;
                    bZ.I.css('visibility', bD.cHideChat ? 'hidden' : 'visible');
                },
                'cHideMinimap': function () {
                    var VF = bD.cHideMinimap ? 'none' : 'block';
                    F('#minimap-panel').css('display', VF);
                },
                'sScorePanel': function () {
                    ;
                    HE.css('display', [
                        'none',
                        'flex',
                        'inline-block'
                    ][bD.sScorePanel]);
                },
                'cHideLeaderboard': function () {
                    var VF = bD.cHideLeaderboard ? 'none' : 'block';
                    F('#leaderboard-panel').css('display', VF);
                },
                'cHideExtraPanel': function () {
                    var VF = bD.cHideExtraPanel ? 'none' : 'block';
                    F('#extra-panel').css('display', VF);
                },
                'cShowCoordinates': function () {
                    var VF = bD.cShowCoordinates ? 'block' : 'none';
                    F('#minimap-coordinates').css('display', VF);
                    a7();
                },
                'cThemeEnabled': function () {
                    ;
                    bD.cThemeEnabled || aG();
                    bh(function (VF) {
                        ;
                        VF in bc || F('#' + VF).prop('disabled', !bD.cThemeEnabled);
                    });
                    Zz();
                },
                'cShowBorder': bW,
                'cDisableEventSkins': function () {
                    ;
                    bN.re && F('body').toggleClass('event-' + bN.X);
                    a3();
                    Zi();
                    Zz();
                },
                'cResizableChat': function () {
                    ;
                    F('#chat-resize').css('display', bD.cResizableChat ? 'block' : 'none');
                },
                'cHideLockedNames': function () {
                    ;
                    Hc._i.Vo();
                    for (var VF of Hc.Si.values())
                        VF.Dn === 1 && (VF.$o = true);
                },
                'cHideOwnName': function () {
                    var VF;
                    null != (VF = Hc.Ft) && VF.Rn();
                },
                'cHideFriendNames': function () {
                    ;
                    Hc._i.Ro.forEach(function (VF) {
                        return VF.Rn();
                    });
                },
                'cHideBotNames': function () {
                    ;
                    Hc._i.Bo.forEach(function (VF) {
                        return VF.Rn();
                    });
                },
                'cHideEnemyNames': function () {
                    ;
                    Hc._i.Go.forEach(function (VF) {
                        return VF.Rn();
                    });
                },
                'cHideOwnSkin': function () {
                    var VF;
                    null != (VF = Hc.Ft) && VF.Bn();
                },
                'cHideFriendSkins': function () {
                    ;
                    Hc._i.Ro.forEach(function (VF) {
                        return VF.Bn();
                    });
                },
                'cHideBotSkins': function () {
                    ;
                    Hc._i.Bo.forEach(function (VF) {
                        return VF.Bn();
                    });
                },
                'cHideEnemySkins': function () {
                    ;
                    Hc._i.Go.forEach(function (VF) {
                        return VF.Bn();
                    });
                },
                'cHideOwnMass': function () {
                    var VF;
                    null != (VF = Hc.Ft) && VF.Un();
                },
                'cHideFriendMasses': function () {
                    ;
                    Hc._i.Ro.forEach(function (VF) {
                        return VF.Un();
                    });
                },
                'cHideBotMasses': function () {
                    ;
                    Hc._i.Bo.forEach(function (VF) {
                        return VF.Un();
                    });
                },
                'cHideEnemyMasses': function () {
                    ;
                    Hc._i.Go.forEach(function (VF) {
                        return VF.Un();
                    });
                },
                'cDarkerBotColors': function () {
                    Hc._i.Zo();
                },
                'cUncapFPS': Z4,
                'cSmoothCells': function () {
                    Hc._i.Jo();
                },
                'sLinesplitMode': function () {
                    ;
                    bk.He(bD.sLinesplitMode);
                },
                'cHideLeaderboardHeader': function () {
                    ;
                    a4(HO, bD.cHideLeaderboardHeader);
                },
                'cHidePartyHeader': function () {
                    ;
                    a4(F('#party-header'), bD.cHidePartyHeader);
                },
                'iSplitSound': function (VF) {
                    ;
                    a5('split', 'iSplitSound', VF);
                },
                'iEjectSound': function (VF) {
                    ;
                    a5('eject', 'iEjectSound', VF);
                },
                'sMassType': function () {
                    ;
                    0 = Vg[bD.sMassType];
                },
                'sCameraFocus': function () {
                    ;
                    0 = Vx[bD.sCameraFocus];
                },
                'sTextOutlines': function () {
                    ;
                    0 = Ha[bD.sTextOutlines];
                    Hc.do();
                },
                'spRainbowName': function () {
                    var VF;
                    null != (VF = Hc.Ft) && VF.Mr();
                },
                'spRainbowCell': function () {
                    var VF;
                    null != (VF = Hc.Ft) && VF.Cr();
                },
                'sQuality': function () {
                    var VF = VU[bD.sQuality];
                    1 !== VF && (1 = VF, F(C).trigger('resize'));
                },
                'uiForegroundColor': function (VF) {
                    ;
                    Hc && Hc.Oa();
                    F('.fg-interface-color').css('color', VF);
                    F('.interface-color').css('color', VF);
                    F('.gota-btn').css('color', VF).css('border-color', VF);
                    F('.popup-panel').css('color', VF);
                    F('.main').css('color', VF);
                    F('.main-bottom-stats').css('border-color', VF);
                },
                'uiBackgroundColor': function (VF) {
                    ;
                    F('.hud-panel .interface-color').css('background-color', VF);
                },
                'uiButtonColor': function (VF) {
                    ;
                    F('.gota-btn').css('background-color', VF);
                },
                'uiBorderColor': function (VF) {
                    ;
                    F('.ui-pane').css('border-color', VF);
                    F('#chat-tab-container').css('border-color', VF);
                    F('.chat-tab').css('border-color', VF);
                },
                'uiMenuBackgroundColor': function (VF) {
                    ;
                    F('.main-panel').css('background-color', VF);
                    F('.popup-panel').css('background-color', VF);
                    F('.options-container').css('background-color', VF);
                },
                'uiMenuTitleBackgroundColor': function (VF) {
                    ;
                    F('.menu-title').css('background-color', VF);
                },
                'uiMenuSubBackgroundColor': function (VF) {
                    ;
                    F('.menu-sub-bg').css('background-color', VF);
                    F('.server-active').css('background-color', VF);
                    F('#server-content').css('background-color', VF);
                },
                'uiMenuSubBackground2Color': function (VF) {
                    ;
                    F('.menu-sub-bg2').css('background-color', VF);
                    F('.server-table tbody').css('background-color', VF);
                },
                'uiPartyLeaderColor': function () {
                    Hc && Hc.Oa();
                },
                'uiGameColorSuccess': function (VF) {
                    ;
                    F('#social-friends-online-count').css('color', VF);
                },
                'uiGameBackgroundColor': function (VF) {
                    ;
                    s.body.style.background = VF;
                },
                'uiGameBorderColor': bW,
                'rUiScale': function (VF) {
                    ;
                    bD.rUiScale = HC(VF, 0.5, 1.25);
                    F('#uiScale').val((100 * bD.rUiScale).toFixed(0));
                    F('.ui-scale').css('transform', 'scale(' + bD.rUiScale + ')');
                },
                'rReconnectPeriod': function (VF) {
                    ;
                    bD.rReconnectPeriod = HC(VF, 0, 10);
                    F('#reconnectPeriod').val(bD.rReconnectPeriod);
                },
                'rAnimationDelay': function (VF) {
                    ;
                    bD.rAnimationDelay = HC(VF, 1, 250);
                    F('#animationDelay').val(bD.rAnimationDelay);
                },
                'rCameraDelay': function (VF) {
                    ;
                    bD.rCameraDelay = HC(VF, 0, 250);
                    F('#cameraDelay').val(bD.rCameraDelay);
                },
                'rZoomDelay': function (VF) {
                    ;
                    bD.rZoomDelay = HC(VF, 0, 400);
                    F('#zoomDelay').val(bD.rZoomDelay);
                },
                'rMenuDelay': function (VF) {
                    ;
                    bD.rMenuDelay = HC(VF, 0, 1000);
                    F('#menuDelay').val(bD.rMenuDelay);
                },
                'rViewDistance': function (VF) {
                    ;
                    bD.rViewDistance = HC(VF, 50, 150);
                    F('#viewDistance').val(bD.rViewDistance);
                    Hc.Ye();
                },
                'rBorderSize': function (VF) {
                    ;
                    bv.rBorderSize = HC(VF, 1, 256);
                    F('#borderSize').text(bv.rBorderSize);
                    bW();
                },
                'rBackgroundOpacity': function (VF) {
                    ;
                    bv.rBackgroundOpacity = HC(VF, 0, 1);
                    F('#backgroundOpacity').text((100 * bv.rBackgroundOpacity).toFixed(0));
                    s.getElementById('canvas-background').style.opacity = bv.rBackgroundOpacity;
                },
                'aCustomBackground': function (VF) {
                    ;
                    s.getElementById('canvas-background').style.backgroundImage = 'url(\'' + VF + '\')';
                    s.getElementById('canvas-background').style.backgroundSize = '100% 100%';
                },
                'aCustomSpike': function (VF) {
                    var Vs;
                    null != (Vs = null) && Vs.destroy();
                    null = null;
                    Zw(3);
                    0 !== VF.length && a1(VF).then(function (VK) {
                        return null = VK;
                    });
                },
                'aCustomMother': function (VF) {
                    var Vs;
                    null != (Vs = null) && Vs.destroy();
                    null = null;
                    Zw(4);
                    0 !== VF.length && a2(VF, false).then(function (VK) {
                        return null = VK;
                    });
                },
                'iMapBackground': function (VF) {
                    ;
                    bv.iMapBackground = VF;
                    HI.texture = null;
                    0 !== VF.length && a0(VF, 'Unable to load map background image.').then(function (Vs) {
                        ;
                        return HI.texture = Vs;
                    });
                }
            };
            function a7() {
                ;
                bD.cShowCoordinates ? (F('#minimap-canvas').css({
                    'border-top': '2px solid rgba(255, 255, 255, .2)'
                }), F('#minimap-panel').css({
                    'height': '270px'
                })) : (F('#minimap-canvas').css({
                    'border-top': '0'
                }), F('#minimap-panel').css({
                    'height': '250px'
                }));
            }
            function a8() {
                var VF = F('#spChatColor').val().toUpperCase(),
                    Vs = V7.findIndex(function (VK) {
                        ;
                        return VK.toUpperCase() === VF;
                    });
                return -1 === Vs ? 0 : Vs;
            }
            function a9(VF) {
                ;
                bO.skinName = F('#spSkinName').val().toLowerCase();
                bO.lowerName = F('#spLowerName').prop('checked');
                bO.nameColor = Zl(F('#spNameColor').val());
                bO.chatColor = a8();
                bO.effect = parseInt(F('#spEffect').val());
                bO.nameFont = parseInt(F('#spNameFont').val());
                Hc.T(bm.Je(VF));
            }
            function aH() {
                var VF = b3 || Hc.gn,
                    Vs = F('#btn-cellpanel');
                VF || bM ? (VF ? (b0.show(), F('.subpanel-name-dashboard').css('display', b3 ? '' : 'none')) : b0.hide(), VF = VF && !bO.rules, F('#subpanel-rules').css('display', VF ? 'block' : 'none'), F('#subpanel-content').css('display', VF ? 'none' : 'block'), Vs.prop('disabled', false)) : Vs.prop('disabled', true);
            }
            function ab(VF) {
                ;
                Hc.Qt.Fr || (Hc.Qt.Fr = Hb.firestore().collection('accounts').doc(VF).onSnapshot(function (Vs) {
                    ;
                    null != (Vs = Vs.data()) && Vs.locked ? (b3 = true, F('#spLockedName').html(Vs.name), null != Vs.lastChange && F('#btn-chg-ln').attr('title', 'Last Changed: ' + new Date(Vs.lastChange).toLocaleString()), F('#spExpiry').html(null != Vs.expiry ? new Date(1000 * Vs.expiry.seconds).toLocaleString() : 'Never')) : (b3 = false, 'none' !== F('#main-subpanel').css('display') && af('main-servers'));
                    aH();
                    Hc.Qt.Fr();
                    Hc.Qt.Fr = null;
                }, function () {
                    Hc.Qt.Fr();
                    Hc.Qt.Fr = null;
                }));
            }
            function aZ() {
                ;
                for (var VF in (F('[id^=servers-body-]').empty(), bo))
                    for (var Vs of Object.values(bo[VF])) {
                        var VK = Vs.name,
                            Vc = Vs.players,
                            VR = Vs.bots,
                            Vp = Vs.playersText,
                            Vs = Vs.gamemode,
                            Vc = 0 < VR ? ' title="Players: ' + Vc + '&#10;Bots: ' + VR + '"' : '';
                        F('#servers-body-' + VF).append('<tr id="s_' + VK + '" class="server-row" server="' + VK + '"><td class="server-table-name">' + VK + '</td><td class="server-table-players"' + Vc + '>' + Vp + '</td><td class="server-table-mode">' + Vs + '</td></tr>');
                    }
                for (var Vl of Object.values(bI)) {
                    var Vf = Vl.region,
                        Vj = Vl.name,
                        VA = Vl.playersText,
                        Vl = Vl.gamemode;
                    F('#servers-body-' + Vf).prepend('<tr id="s_' + Vj + '" class="account-server server-row" server="' + Vj + '"><td class="server-table-name">' + Vj + '</td><td class="server-table-players">' + VA + '</td><td class="server-table-mode">' + Vl + '</td></tr>');
                }
                F('.server-row').on('click', function () {
                    ;
                    aV(F(this).attr('server'));
                });
            }
            function aa(VF) {
                ;
                if (VF) {
                    for (var Vs in (VF = VF.toLowerCase(), bo))
                        for (var VK in bo[Vs])
                            if (VK.toLowerCase() === VF) {
                                return bo[Vs][VK];
                            }
                    for (var Vc in bI)
                        if (Vc.toLowerCase() === VF) {
                            return bI[Vc];
                        }
                }
                return null;
            }
            function aV(VF) {
                ;
                null != HA && F('#s_' + HA.name).removeClass('server-selected');
                null != (HA = aa(VF)) && F('#s_' + HA.name).addClass('server-selected');
            }
            function aN(VF) {
                ;
                VF = VF.toLowerCase();
                var Vs = F('#server-tab-' + VF);
                F('.server-active').css('background-color', 'inherit');
                F('#server-tab-container').children().removeClass('server-active');
                Vs.addClass('server-active');
                F('.server-active').css('background-color', bv.uiMenuSubBackgroundColor);
                F('#server-content').children().css('display', 'none');
                F('#servers-' + VF).css('display', 'block');
            }
            function ao(VF, Vs) {
                ;
                bD._ChatTabs.forEach(function (VK, Vc) {
                    var VR, Vp = VK.flags,
                        VK = VK.maxMessages;
                    (VF & Vp) === VF && ((Vp = F('#chat-body-' + Vc + ' tr')).length >= VK && Vp.first().remove(), Vp = (VK = F('#chat-container-' + Vc)[0]).scrollHeight - VK.scrollTop <= VK.clientHeight + 10, VR = Vs.cloneNode(true), F('#chat-body-' + Vc).append(F('<tr>').append(VR)), Vp) && (VK.scrollTop = VK.scrollHeight);
                });
            }
            function aI(VF) {
                ;
                HM.val(VF);
            }
            function aq() {
                ;
                return HM.val();
            }
            function ag() {
                var VF, Vs = F('#chat-tab-container'),
                    VK = F('#chat-container');
                for (VF in (Vs.empty(), VK.empty(), bD._ChatTabs)) {
                    var Vc = bD._ChatTabs[VF];
                    0 === Vc.name.length && (Vc.name = 'Unnamed');
                    Vs.append('<li class=\'chat-tab\' id=\'chat-tab-' + VF + '\' name=\'' + VF + '\'><span>' + Vc.name + '</span></li>');
                    VK.append('<div class=\'chat-inner-container\' id=\'chat-container-' + VF + '\'><table class=\'chat-table\'><tbody id=\'chat-body-' + VF + '\'></tbody></table></div>');
                }
                F('.chat-tab').on('click', function () {
                    ;
                    ax(F(this).attr('name'));
                }).css('border-color', bv.uiBorderColor);
                0 <= bP && bP < bD._ChatTabs.length ? ax(bP) : ax(0);
            }
            function ax(VF) {
                ;
                F('.chat-tab').removeClass('chat-active-tab');
                F('.chat-inner-container').removeClass('chat-active-container').css('display', 'none');
                bP = VF;
                bD._ChatTabs[VF] && (F('#chat-tab-' + VF).addClass('chat-active-tab'), F('#chat-container-' + VF).addClass('chat-active-container').css('display', 'block'));
            }
            function aU(VF) {
                ;
                void 0 === VF && (VF = 0);
                var Vs, VK = F('#cte-tab-selector');
                for (Vs in (VK.empty(), bD._ChatTabs))
                    VK.append('<option value=\'' + Vs + '\'>' + bD._ChatTabs[Vs].name + '</option>');
                VK.prop('selectedIndex', VF);
                VK.trigger('change');
            }
            function ar() {
                var VF, Vs = F('#cte-tab-selector').val(),
                    Vc = bD._ChatTabs[Vs];
                if (Vc) {
                    for (var VR in VK);
                }
                for (VF in (F('#cte-tab-name').val(VK.name), VX))
                    F('#cte-type-' + VF.toLowerCase()).prop('checked', (VX[VF] & VK.flags) === VX[VF]);
                F('#cte-max-messages').val(VK.maxMessages);
            }
            function aP() {
                var VF = F('#cte-tab-selector').val(),
                    Vs = bD._ChatTabs[VF];
                if (Vs) {
                    var VK = Vs.name,
                        Vc = F('#cte-tab-name').val();
                    if (0 !== Vc.length) {
                        var VR, VK = Vc !== VK,
                            Vp = 0,
                            Vl = parseInt(F('#cte-max-messages').val());
                        for (VR in VX)
                            F('#cte-type-' + VR.toLowerCase()).prop('checked') && (Vp += VX[VR]);
                        if (Vs.name = Vc, Vs.flags = Vp, Vs.maxMessages = Vl, VK) {
                            for (var Vf in (aU(VF), bD._ChatTabs)) {
                                var Vj = bD._ChatTabs[Vf];
                                Vj && (0 === Vj.name.length && (Vj.name = 'Unnamed'), Vf = F('#chat-tab-' + Vf)) && Vf.html('<span>' + Vj.name + '</span>');
                            }
                        }
                    }
                }
            }
            function aJ() {
                ;
                bD._ChatTabs.push({
                    'name': 'New',
                    'flags': 0,
                    'maxMessages': 100
                });
                aU(bD._ChatTabs.length - 1);
                ag();
            }
            function aX() {
                var VF = F('#cte-tab-selector').val();
                bD._ChatTabs[VF] && (bD._ChatTabs.splice(VF, 1), aU(), ag());
            }
            function aD(VF, Vs, VK) {
                ;
                void 0 === VK && (VK = -1);
                F('#context-name').text(VF || HZ);
                HY.data({
                    'selected': Vs,
                    'party': VK
                });
                F('.context-action').css('display', 'none'); -
                1 === VK ? (F('#menu-invite').css('display', 'block'), F('#menu-whisper').css('display', 'block'), F('#menu-block').css('display', 'block'), F('#menu-profile').css('display', 'block')) : (F('#menu-whisper').css('display', 'block'), F('#menu-profile').css('display', 'block'), Hc.li() && (F('#menu-pu_pr').css('display', 'block'), F('#menu-promote').css('display', 'block'), F('#menu-kick').css('display', 'block')));
                Hc.Gt && F('#menu-spectate').css('display', 'block');
                HY.css({
                    'display': 'block',
                    'left': K.min(Hc.Dt, C.innerWidth - HY.width()),
                    'top': K.min(Hc.At, C.innerHeight - HY.height())
                });
            }
            function aC(VF) {
                ;
                return VF.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }
            function aF(VF, Vs, VK, Vc, VR, Vp, Vl) {
                var Vf = Hc.mi.fi,
                    Vj = Vf.gi,
                    VA = Vf.bi,
                    Vv = Vf.ki,
                    Vf = Vf.$i,
                    Vj = (VK - Vj) / Vv * Hs.width,
                    Vv = (Vc - VA) / Vf * Hs.height;
                VF.beginPath();
                VF.arc(Vj, Vv, VR, 0, bb, false);
                VF.fillStyle = Vp;
                VF.fill();
                Vl && (VK = Vj - VF.measureText(Vs).width / 2, VF.fillText(Vs, VK, Vv - 5));
            }
            var as = new Map();
            function aK(VF) {
                ;
                return VF.is(':visible') && 'hide' !== as.get(VF.selector);
            }
            function ac(VF, Vs) {
                var VK;
                Vs !== aK(VF) && (VK = {
                    'duration': bD.rMenuDelay,
                    'always': function () {
                        ;
                        return as.delete(VF.selector);
                    }
                }, as.set(VF.selector, Vs ? 'show' : 'hide'), Vs ? VF.fadeIn(VK) : VF.fadeOut(VK), 'main' === VF.attr('id')) && bA && bZ.Ot.toggle(!Vs);
            }
            function aR(VF) {
                ac(VF, true);
            }
            function ap(VF) {
                ac(VF, false);
            }
            function al(VF) {
                ac(VF, !aK(VF));
            }
            function af(VF) {
                ;
                'none' === (VF = F('#' + VF)).css('display') && (F('.main-right-panel').slideUp(bD.rMenuDelay), VF.slideDown(bD.rMenuDelay));
            }
            function aj() {
                ;
                HQ.show();
                0 !== Hc.Ui.length && !bD.cHidePartyPanel || bZ.vt.css('display', 'none');
                bD.cHideChat && bZ.I.css('visibility', 'hidden');
                bD.cHideMinimap && F('#minimap-panel').css('display', 'none');
            }
            function aA(VF) {
                var Vs = VF.attr('id');
                bD[Vs] = VF.prop('checked');
                aQ(Vs);
            }
            function av(VF) {
                var Vs = VF.attr('id');
                bD[Vs] = VF.val();
                aQ(Vs, VF.val());
            }
            function ay(VF) {
                ;
                aQ(VF.attr('id'), VF.val());
            }
            function ad(VF) {
                ;
                aQ(VF.attr('id'), VF.val());
            }
            function aQ(VF, Vs) {
                null != (VF = a6[VF]) && VF(Vs);
            }
            function aO(VF, Vs) {
                null != Vs && aQ(VF, bv[VF] = Vs);
            }
            var aT, aY, aB = 'loadver',
                aL = [
                    [
                        1,
                        4,
                        'rRainbowNameSpeed'
                    ],
                    [
                        5,
                        4,
                        'rRainbowCellSpeed'
                    ],
                    [
                        10,
                        1,
                        'spRainbowName'
                    ],
                    [
                        11,
                        1,
                        'spRainbowCell'
                    ]
                ];
            function aG() {
                ;
                for (var VF in by) {
                    var Vs = VF.charAt(0);
                    'r' === Vs ? ay(F('#' + VF).val(by[VF])) : 'u' === Vs ? Zm(F('#' + VF), by[VF]) : 'a' === Vs ? aO(VF, '') : bv[VF] = by[VF];
                }
                bv._FoodColors = [];
            }
            function ak(VF) {
                ;
                try {
                    var Vs = 'string' == typeof VF ? JSON.parse(VF) : VF;
                    if (Vs.version !== 2) {
                        aG();
                    } else {
                        for (var VK of Object.entries(Vs)) {
                            var Vc = V(VK, 2),
                                VR = Vc[0],
                                Vp = Vc[1];
                            if (VR in bv && 0 !== Vp.length) {
                                bv[VR] = Vp;
                                var Vl = void 0,
                                    Vf = VR,
                                    Vj = Vp,
                                    Vl = F('#' + Vf);
                                switch (Vf[0]) {
                                case 'u':
                                    Zm(Vl, Vj);
                                    break;
                                case 'r':
                                    Vl.val(Vj), ay(Vl);
                                    break;
                                case 'a':
                                    aO(Vf, Vj);
                                    break;
                                case 'i':
                                    Vl.val(Vj), ad(Vl);
                                }
                            }
                        }
                    }
                } catch (VA) {
                    aG();
                } finally {
                    Zz();
                }
            }
            function am(VF) {
                var Vs;
                /\.(json)$/i.test(VF.name) && ((Vs = new FileReader()).addEventListener('load', function () {
                    ;
                    bD.cThemeEnabled || aS();
                    aG();
                    ak(this.result);
                }, false), Vs.readAsText(VF));
            }
            function aS() {
                ;
                F('#cThemeEnabled').prop('checked', true).trigger('change');
            }
            function az(VF) {
                ;
                for (var Vs = VF.split(' '), VK = '', Vc = null, VR = 0; VR < Vs.length; VR++) {
                    0 !== VR && (VK += ' ');
                    Vc = Vs[VR];
                    null != HG[Vc] ? VK += '<img src="images/emotes/' + (Vc = Vc.startsWith(':') && Vc.endsWith(':') ? Vc.substring(1, Vc.length - 1) : Vc) + '.png" height="17" width="17" alt="' + Vc + '">' : null != Hk[Vc] ? VK += '<img src="images/emotes/gifs/' + (Vc = Vc.startsWith(':') && Vc.endsWith(':') ? Vc.substring(1, Vc.length - 1) : Vc) + '.gif" height="17" width="17" alt="' + Vc + '">' : VK += Vc;
                }
                return VK;
            }
            function ah(VF, Vs, VK) {
                this.p = VF;
                this.Pt = Vs;
                this.Dn = VK;
                this.Rt = null;
                this.Lt = null;
            }
            function aW() {
                this.Dr = {};
                this.Ar = [];
                this.Ir = [];
                this.Na = null;
                this.Tr = 0;
                this.Lt = null;
                this.Vn = 0;
                this.Ha = function (VF, Vs, VK) {
                    var Vc;
                    H9[VF].Dn !== 3 ? ((Vc = this.Dr[VF]) ? Vc.Vi(Vs, VK) : (Vc = new au(VF, Vs, VK), this.Dr[VF] = Vc, this.Pr()), this.Lr()) : (Vc = new au(VF, Vs, VK), this.Ir.push(Vc));
                    this.Rr();
                    Vc && Hc.Ut('Recieved buff: ' + Vc.Ur.p);
                };
                this.Fa = function (VF) {
                    var Vs = null;
                    if (H9[VF].Dn !== 3) {
                        (Vs = this.Dr[VF]) && (delete this.Dr[VF], this.Pr(), this.Rr(), this.Lr());
                    } else {
                        for (var VK = 0; VK < this.Ir.length; VK++) {
                            if ((Vs = this.Ir[VK]).Gi === VF) {
                                this.Ir.splice(VK, 1);
                                this.Rr();
                                break;
                            }
                        }
                    }
                    Vs && Hc.Ut('Lost buff: ' + Vs.Ur.p);
                };
                this.Fn = function (VF) {
                    ;
                    if (0 !== this.Ar.length || 0 !== this.Ir.length) {
                        for (var Vs in this.Dr) {
                            var VK = this.Dr[Vs];
                            VF && VK.Ur.Dn === 1 || delete this.Dr[Vs];
                        }
                        this.Pr();
                        this.Lr();
                        this.Ir = [];
                        this.Rr();
                    }
                };
                this.Pr = function () {
                    ;
                    if (this.Ar = [], 0 !== this.Dr.length) {
                        for (var VF in this.Dr)
                            this.Dr[VF].Ur.Dn === 1 ? this.Ar.splice(0, 0, VF) : this.Ar.push(VF);
                    }
                };
                this.Lr = function () {
                    var VF;
                    this.Vn = 0;
                    null != this.Dr[1] && (VF = this.Dr[1], this.Vn = 16 * VF.Br);
                };
                this.Vi = function () {
                    ;
                    0 === this.Ar.length && 0 === this.Ir.length ? HJ.visible = false : (Date.now() >= this.Tr && (this.jr(), this.Tr = Date.now() + 1000), this.Lt || (this.Lt = HH.Texture.from(this.Na.canvas), HJ.texture = this.Lt, HJ.anchor.set(0)), HJ.position.set(HE.width() + 20 - H6.pi.position.x, 15 - H6.pi.position.y), HJ.visible = true);
                };
                this.jr = function () {
                    ;
                    for (var VF = (null == (VF = this.Na) ? void 0 : VF.canvas) || s.createElement('canvas'), Vs = K.max(this.Ar.length, this.Ir.length), VK = (VF.width = 55 * Vs, VF.height = 105, this.Na = VF.getContext('2d'), this.Na.fillStyle = '#222', this.Na.font = 'bold 16pt Calibri', 0), Vc = 0, VR = 0; VR < this.Ar.length; VR++) {
                        this.Dr[this.Ar[VR]].Gr(this.Na, VK, Vc);
                        VK += 55;
                    }
                    for (var VK = 0, Vc = 55, Vp = 0; Vp < this.Ir.length; Vp++) {
                        this.Ir[Vp].Gr(this.Na, VK, Vc);
                        VK += 55;
                    }
                    this.Lt && this.Lt.update();
                    this.Tr = Date.now() + 1000;
                };
                this.Rr = function () {
                    this.Tr = 0;
                };
            }
            var aE = 1.5 * K.PI;
            function au(VF, Vs, VK) {
                ;
                this.Gi = VF;
                this.Ur = H9[VF];
                this.Wr = Date.now();
                this.zr = VK;
                this.Br = Vs;
                this.Vi = function (Vc, VR) {
                    ;
                    this.Wr = Date.now();
                    this.zr = VR;
                    this.Br = Vc;
                };
                this.Jr = function () {
                    var Vc, VR;
                    return Date.now() >= this.zr ? 2 * K.PI : (Vc = this.zr - Date.now(), VR = this.zr - this.Wr, 2 * K.min(Vc / VR, 1) * K.PI);
                };
                this.Gr = function (Vc, VR, Vp) {
                    ;
                    Vc.drawImage(this.Ur.Rt, VR, Vp, 50, 50);
                    1 < this.Br && (Vc.fillStyle = '#000', Vc.fillText(this.Br, VR + 35, Vp + 17));
                    0 < this.zr && (Vc.beginPath(), Vc.moveTo(VR + 25, Vp + 25), Vc.arc(VR + 25, Vp + 25, 25, aE, aE - this.Jr(), false), Vc.closePath(), Vc.globalAlpha = 0.75, Vc.fillStyle = '#222', Vc.fill(), Vc.globalAlpha = 1);
                };
            }
            function aw(VF) {
                ;
                return bQ[VF % bQ.length];
            }
            function V0(VF) {
                ;
                for (var Vs = VF.length - 1; 0 < Vs; Vs--) {
                    var VK = K.floor(K.random() * (Vs + 1)),
                        Vc = [
                            VF[VK],
                            VF[Vs]
                        ];
                    VF[Vs] = Vc[0];
                    VF[VK] = Vc[1];
                }
                return VF;
            }
            for (var V1 = [], V2 = [], V3 = 0; V3 < 360; V3 += 2) {
                var V4 = Zp(V3);
                V1.push(V4);
                V2.push('#' + V4.toString(16).padStart(6, '0'));
            }
            var V5 = V0(V1.slice(0)),
                V6 = V0(V2.slice(0)),
                V7 = [
                    '#FFFFFF',
                    '#FF9BDC',
                    '#FF00FF',
                    '#FF0000',
                    '#C80000',
                    '#FF6900',
                    '#FFFF00',
                    '#00FF00',
                    '#008000',
                    '#008080',
                    '#00FFFF',
                    '#0096FF',
                    '#0000FF',
                    '#CA48FA',
                    '#8A2BE2',
                    '#D2C878',
                    '#8C4614'
                ],
                V8 = new Map(),
                V9 = {
                    500: {
                        'color': '#FFD700',
                        'textShadow': '0 0 8px #FFD700, 0 0 12px #FF8C00',
                        'fontWeight': 'bold'
                    },
                    501: {
                        'color': '#00FF00',
                        'textShadow': '0 0 8px #00FF00, 0 0 12px #00AA00',
                        'fontWeight': 'bold'
                    }
                };
            function VH(VF) {
                for (var Vs of V8) {
                    var Vs = V(Vs, 2),
                        VK = Vs[0],
                        Vs = Vs[1];
                    if (parseInt(VF) === Vs) {
                        return VK;
                    }
                }
                return null;
            }
            function Vb(VF) {
                ;
                return 0 === VF || VF === Hc.Wi ? 'You cannot block that player.' : b7.includes(VF) ? (delete b7[VF], 'Unblocked player with ID: ' + VF) : (b7.push(VF), 'Blocked player with ID: ' + VF);
            }
            var VZ = [{
                        'Vt': 'Whisper a player by ID',
                        'Jt': [
                            'whisper',
                            't',
                            'w'
                        ],
                        'Yt': function (VF) {
                            var Vs = parseInt(VF[0]);
                            isNaN(Vs) ? Hc.Ut('Invalid player id.') : (0 !== (VF = VF.slice(1).join(' ')).length && Hc.T(bm.ze(Vs, VF)), aI('/t ' + Vs + ' '));
                        }
                    },
                    {
                        'Vt': 'Reply to previous whisper',
                        'Jt': [
                            'reply',
                            'r'
                        ],
                        'Yt': function (VF) {
                            ;
                            0 !== (VF = VF.join(' ')).length && Hc.T(bm.ze(0, VF));
                            aI('/r ');
                        }
                    },
                    {
                        'Vt': 'Send a message to other party members',
                        'Jt': [
                            'party',
                            'p'
                        ],
                        'Yt': function (VF) {
                            ;
                            0 !== (VF = VF.join(' ')).length && Hc.T(bm.Ue(VF, 1));
                            aI('/p ');
                        }
                    },
                    {
                        'Vt': 'Invite a player to the party',
                        'Jt': [
                            'invite',
                            'i'
                        ],
                        'Yt': function (VF) {
                            ;
                            VF = parseInt(VF[0]);
                            isNaN(VF) ? Hc.Ut('Invalid ID.') : Hc.T(bm.je(0, VF));
                        }
                    },
                    {
                        'Vt': 'Leave your current party',
                        'Jt': [
                            'leave',
                            'l'
                        ],
                        'Yt': function () {
                            Hc.T(bm.je(3, 0));
                        }
                    },
                    {
                        'Vt': 'Promote a party member to leader',
                        'Jt': ['promote'],
                        'Yt': function (VF) {
                            ;
                            VF = parseInt(VF[0]);
                            isNaN(VF) ? Hc.Ut('Invalid ID.') : Hc.T(bm.je(2, VF));
                        }
                    },
                    {
                        'Vt': 'Kick a player from the party',
                        'Jt': ['kick'],
                        'Yt': function (VF) {
                            ;
                            VF = parseInt(VF[0]);
                            isNaN(VF) ? Hc.Ut('Invalid ID.') : Hc.T(bm.je(1, VF));
                        }
                    },
                    {
                        'Vt': 'Clear the chat tab',
                        'Jt': ['clear'],
                        'Yt': function () {
                            ;
                            return F('#chat-body-' + bP).empty();
                        }
                    },
                    {
                        'Vt': 'Get your current ID',
                        'Jt': ['info'],
                        'Yt': function () {
                            ;
                            0 < Hc.Wi ? Hc.Ut('Your id is ' + Hc.Wi) : Hc.Ut('You need to be connected to a server to use this command.');
                        }
                    },
                    {
                        'Vt': 'Show the scrimmage menu',
                        'Jt': ['scrimmenu'],
                        'Yt': function () {
                            ;
                            HT.toggle();
                        }
                    },
                    {
                        'Vt': 'Join a party with a code',
                        'Jt': [
                            'join',
                            'j'
                        ],
                        'Yt': function (VF) {
                            ;
                            null != (VF = VF[0]) && 0 !== VF.length && Hc.T(bm.Ge(VF));
                        }
                    },
                    {
                        'Vt': 'Set the party to private',
                        'Jt': ['private'],
                        'Yt': function () {
                            Hc.T(bm.je(4, 1));
                        }
                    },
                    {
                        'Vt': 'Allow players to join the party without an invite',
                        'Jt': ['public'],
                        'Yt': function () {
                            Hc.T(bm.je(4, 0));
                        }
                    },
                    {
                        'Vt': 'Reset chat size',
                        'Jt': ['resetchat'],
                        'Yt': function () {
                            ;
                            bZ.I.css('width', '360px');
                            bZ.I.css('height', '250px');
                        }
                    },
                    {
                        'Vt': 'Reset chat tab settings',
                        'Jt': ['resetchattabs'],
                        'Yt': function () {
                            ;
                            bD._ChatTabs = JSON.parse(JSON.stringify(bg));
                            aU();
                            ag();
                        }
                    },
                    {
                        'Vt': 'Spectate a player',
                        'Jt': [
                            'spectate',
                            's'
                        ],
                        'Yt': function (VF) {
                            ;
                            VF = parseInt(VF[0]);
                            isNaN(VF) ? Hc.Ut('Invalid ID.') : Hc.T(bm.Re(VF));
                        }
                    },
                    {
                        'Vt': 'Disconnect from the server',
                        'Jt': ['disconnect'],
                        'Yt': function () {
                            Hc.Nn();
                        }
                    },
                    {
                        'Vt': 'Get Account UID',
                        'Jt': ['account'],
                        'Yt': function () {
                            ;
                            null == b4 ? Hc.Ut('You are not logged in.') : Hc.Ut('UID: ' + b4.uid);
                        }
                    },
                    {
                        'Vt': 'Block or unblock a player by ID',
                        'Jt': [
                            'block',
                            'b'
                        ],
                        'Yt': function (VF) {
                            VF = parseInt(VF[0]);
                            isNaN(VF) || (VF = Vb(VF), Hc.Ut(VF));
                        }
                    },
                    {
                        'Vt': 'Get current renderer',
                        'Jt': ['renderer'],
                        'Yt': function () {
                            ;
                            Hc.Ut('Current renderer is ' + (H6.ui.gl ? 'WebGL' : 'Canvas'));
                        }
                    }
                ],
                Va = [
                    '4Head',
                    'BibleThump',
                    'DansGame',
                    'DatSheffy',
                    'FailFish',
                    'FeelsBadMan',
                    'FeelsGoodMan',
                    'FeelsMadMan',
                    'GabeN',
                    'HassanChop',
                    'HeyGuys',
                    'Kappa',
                    'KappaPride',
                    'Keepo',
                    'Kreygasm',
                    'NotLikeThis',
                    'OMGScoots',
                    'PJSalt',
                    'PogChamp',
                    'rekt',
                    'rip',
                    'SaltyCorn',
                    'sodaC',
                    'sodaHeyGuys',
                    'sodaNOPE',
                    'sodaW',
                    'SwiftRage',
                    'WutFace',
                    'ResidentSleeper',
                    'LUL',
                    'MikuFail',
                    'PepoHype',
                    'KKona',
                    'MeguFace',
                    'AngryBork',
                    'AngeryBOYE',
                    'TohruFlex',
                    'Sadness',
                    'nou',
                    'MarioFP'
                ],
                VV = [
                    'Ditto',
                    'MichaelPls',
                    'RareParrot',
                    'PepePls',
                    'RooNoticeMe',
                    'PepeEyes',
                    'EverythingsFine',
                    'WeSmart',
                    'PandaAww',
                    'SleepyCat',
                    'Clap'
                ];
            function VN(VF) {
                var Vs, VK;
                return VF <= 0 ? '0:00' : (VK = VF - 3600 * (Vs = K.floor(VF / 3600)) - 60 * (VF = K.floor((VF - 3600 * Vs) / 60)), (0 < Vs ? Vs + ':' : '') + (VF < 10 && 0 < Vs ? '0' + VF : VF) + ':' + (VK < 10 ? '0' + VK : VK));
            }
            function Vo(VF) {
                ;
                return (VF = VF.toString().split('.'))[0] = VF[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','), VF.join('.');
            }
            function VI(VF) {
                ;
                if (VF.dataTransfer.items) {
                    for (var Vs = 0; Vs < VF.dataTransfer.items.length; Vs++) {
                        if ('file' === VF.dataTransfer.items[Vs].kind) {
                            return VF.dataTransfer.items[Vs].getAsFile();
                        }
                    }
                } else {
                    if (0 !== VF.dataTransfer.files.length) {
                        return VF.dataTransfer.files[0];
                    }
                }
            }
            var VP = {
                    0: 'Spectator',
                    1: 'Blue',
                    2: 'Red',
                    3: 'Green',
                    4: 'Yellow',
                    5: 'Purple',
                    6: 'Orange',
                    7: 'Pink',
                    8: 'Brown'
                },
                VD = {
                    'Ca': -1,
                    'ji': 0,
                    'Ta': 1,
                    'Pa': 2
                },
                VC = [
                    [
                        0,
                        'Verdana',
                        54
                    ],
                    [
                        1,
                        'ampad',
                        75
                    ],
                    [
                        2,
                        'burnstown',
                        81
                    ],
                    [
                        3,
                        'chlorinar',
                        75
                    ],
                    [
                        4,
                        'Facon',
                        75
                    ],
                    [
                        5,
                        'archistico',
                        75
                    ],
                    [
                        6,
                        'breakaway',
                        81
                    ],
                    [
                        7,
                        'conformity',
                        81
                    ],
                    [
                        8,
                        'electroharmonix',
                        70
                    ],
                    [
                        9,
                        'PWJoyeuxNoel',
                        70
                    ],
                    [
                        10,
                        'leckerli-one',
                        75
                    ],
                    [
                        101,
                        'IceCaps',
                        81,
                        51711
                    ],
                    [
                        102,
                        'BrazierFlame',
                        81,
                        14833698
                    ]
                ].reduce(function (VF, Vs) {
                    var Vs = V(Vs, 4),
                        VK = Vs[0],
                        Vc = Vs[1],
                        VR = Vs[2],
                        Vs = Vs[3];
                    return new C.FontFaceObserver(Vc).load(null, 10000).catch(function () {}), 0 < VK && VK < 64 && F('#spNameFont').append('<option value="' + VK + '" style="font-family:' + Vc + '">' + (Vc.charAt(0).toUpperCase() + Vc.slice(1)) + '</option>'), VF[VK] = {
                        'fontSize': K.round(VR / 54 * 69),
                        'fontWeight': 0 === VK ? 'bold' : 'normal',
                        'stroke': Vs || 0,
                        'fontFamily': Vc
                    }, VF;
                }, {});
            F(C).focus(function () {
                bH = true;
            });
            F(C).blur(function () {
                bH = false;
            });
        };
        C.version = '3.7.2';
    }(eval, atob);
}();;