!function () {
  function b() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function Z(X) {
    if ("undefined" != typeof Symbol && null != X[Symbol.iterator] || null != X["@@iterator"]) {
      return Array.from(X);
    }
  }
  function a(X) {
    if (Array.isArray(X)) {
      return I(X);
    }
  }
  function N() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function o(X, D) {
    var C;
    if (X) {
      return "string" == typeof X ? I(X, D) : "Map" === (C = "Object" === (C = Object.prototype.toString.call(X).slice(0x8, -0x1)) && X.constructor ? X.constructor.name : C) || "Set" === C ? Array.from(X) : "Arguments" === C || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C) ? I(X, D) : undefined;
    }
  }
  function I(X, D) {
    if (null == D || D > X.length) {
      D = X.length;
    }
    var C = 0x0;
    for (var F = new Array(D); C < D; C++) {
      F[C] = X[C];
    }
    return F;
  }
  function q(X, D) {
    var C = null == X ? null : "undefined" != typeof Symbol && X[Symbol.iterator] || X["@@iterator"];
    if (null != C) {
      var F;
      var K;
      var R;
      var p;
      var l = [];
      var f = true;
      var j = false;
      try {
        R = (C = C.call(X)).next;
        if (0x0 === D) {
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
          if (!f && null != C["return"] && (p = C["return"](), Object(p) !== p)) {
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
    if (Array.isArray(X)) {
      return X;
    }
  }
  function x(X, D) {
    var C;
    var F = Object.keys(X);
    if (Object.getOwnPropertySymbols) {
      C = Object.getOwnPropertySymbols(X);
      if (D) {
        C = C.filter(function (s) {
          return Object.getOwnPropertyDescriptor(X, s).enumerable;
        });
      }
      F.push.apply(F, C);
    }
    return F;
  }
  function U(X) {
    for (var D = 0x1; D < arguments.length; D++) {
      var C = null != arguments[D] ? arguments[D] : {};
      if (D % 0x2) {
        x(Object(C), true).forEach(function (F) {
          r(X, F, C[F]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(X, Object.getOwnPropertyDescriptors(C));
      } else {
        x(Object(C)).forEach(function (F) {
          Object.defineProperty(X, F, Object.getOwnPropertyDescriptor(C, F));
        });
      }
    }
    return X;
  }
  function r(X, D, C) {
    if ((D = e(D)) in X) {
      Object.defineProperty(X, D, {
        'value': C,
        'enumerable': true,
        'configurable': true,
        'writable': true
      });
    } else {
      X[D] = C;
    }
  }
  function e(X) {
    X = P(X, "string");
    return "symbol" === J(X) ? X : String(X);
  }
  function P(X, D) {
    if ("object" !== J(X) || null === X) {
      return X;
    }
    var C = X[Symbol.toPrimitive];
    if (undefined === C) {
      return ("string" === D ? String : Number)(X);
    }
    C = C.call(X, D || "default");
    if ("object" !== J(C)) {
      return C;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  function J(X) {
    return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (D) {
      return typeof D;
    } : function (D) {
      return D && "function" == typeof Symbol && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
    })(X);
  }
  !function (X, D) {
    var C = X(D("d2luZG93"));
    var F = C.$;
    var s = C.document;
    var K = C.Math;
    var c;
    var t;
    (function () {
      function R(H1, H2, H3, H4, H5, H6, H7, H8) {
        var H9 = 0x0;
        var HH = 0x0;
        var Hb = Array.isArray(H6) && H6.length ? H6 : Q;
        if (null == H7) {
          H7 = 0x9e3779b1;
        }
        if (null == H8) {
          H8 = 0xa5a5a5a5;
        }
        for (var HZ = 0x0; HZ < Hb.length; HZ++) {
          switch (Hb[HZ]) {
            case 0x0:
              H9 = K.imul(H2 >>> 0x0, H7 >>> 0x0) >>> 0x0;
              break;
            case 0x1:
              HH = (H3 >>> 0x0 ^ H9) >>> 0x0;
              break;
            case 0x2:
              HH = HH + ((0xff & H1) << 0x10) >>> 0x0;
              break;
            case 0x3:
              HH = HH + (0xffff & H4) >>> 0x0;
              break;
            case 0x4:
              HH = H5(HH >>> 0x0, H3 >>> 0x0) >>> 0x0;
              break;
            case 0x5:
              HH = (HH ^ H8 >>> 0x0) >>> 0x0;
              break;
            case 0x6:
              HH = (HH ^ HH >>> 0x7) >>> 0x0;
          }
        }
        var Ha = new Array(0x7).fill(false);
        for (var HZ = 0x0; HZ < Hb.length; HZ++) {
          if (0x0 <= (HV = Hb[HZ]) && HV <= 0x6) {
            Ha[HV] = true;
          }
        }
        for (var HV = 0x0; HV <= 0x6; HV++) {
          if (!Ha[HV]) {
            switch (HV) {
              case 0x0:
                H9 = K.imul(H2 >>> 0x0, H7 >>> 0x0) >>> 0x0;
                break;
              case 0x1:
                HH = (H3 >>> 0x0 ^ H9) >>> 0x0;
                break;
              case 0x2:
                HH = HH + ((0xff & H1) << 0x10) >>> 0x0;
                break;
              case 0x3:
                HH = HH + (0xffff & H4) >>> 0x0;
                break;
              case 0x4:
                HH = H5(HH >>> 0x0, H3 >>> 0x0) >>> 0x0;
                break;
              case 0x5:
                HH = (HH ^ H8 >>> 0x0) >>> 0x0;
                break;
              case 0x6:
                HH = (HH ^ HH >>> 0x7) >>> 0x0;
            }
          }
        }
        return (HH >>> 0x0).toString(0x24).toUpperCase();
      }
      function j(H1) {
        var H2 = 0x811c9dc5;
        for (var H3 = 0x0; H3 < H1.length; H3++) {
          H2 = 0x1000193 * ((H2 ^ H1.charCodeAt(H3)) >>> 0x0);
        }
        return (H2 >>> 0x0).toString(0x24).toUpperCase();
      }
      if (!window.__aopc3mu9) {
        function H1(H2, H3) {
          return (H2 << (H3 &= 0x7) | H2 >>> 0x20 - H3) >>> 0x0;
        }
        var y = new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0, 0x1, 0x7, 0x1, 0x60, 0x4, 0x7f, 0x7f, 0x7f, 0x7f, 0x1, 0x7f, 0x3, 0x2, 0x1, 0x0, 0x7, 0x7, 0x1, 0x3, 0x72, 0x6f, 0x74, 0x0, 0x0, 0xa, 0x17, 0x1, 0x15, 0x0, 0x20, 0x3, 0x20, 0x2, 0x41, 0x7, 0x71, 0x74, 0x20, 0x3, 0x41, 0x20, 0x20, 0x2, 0x41, 0x7, 0x71, 0x6b, 0x76, 0x72, 0xb]);
        var Q = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6];
        Object.defineProperty(window, "__aopc3mu9", {
          'value': function (H2, H3, H4, H5, H6, H7, H8, H9) {
            H3 = R(H2, H3, H4, H5, H1, H6, H7, H8);
            if (0x4 <= H2) {
              try {
                var HH;
                var Hb = parseInt(H3, 0x24);
                if (!isNaN(Hb)) {
                  Hb = ((Hb = Hb >>> 0x0 ^ H9 >>> 0x0) << (HH = 0x7 & H9) | Hb >>> 0x20 - HH) >>> 0x0;
                  H3 = ((Hb ^= H9 >>> 0x3) >>> 0x0).toString(0x24).toUpperCase();
                }
              } catch (HZ) {}
            }
            return H3;
          },
          'writable': false
        });
        try {
          var O = window.__aopc3mu9;
          if (O && !O._envSig) {
            var T = window.navigator || {};
            var Y = T.userAgent || '';
            var M = T.userAgentData && T.userAgentData.platform || T.platform || '';
            var B = 0x0;
            try {
              B = T.plugins && T.plugins.length || 0x0;
            } catch (H2) {}
            var L = '';
            var G = '';
            var S = 0x0;
            try {
              var z;
              var W = s.createElement("canvas");
              var E = W.getContext("webgl") || W.getContext("experimental-webgl");
              if (E && (S = 0x1, z = E.getExtension("WEBGL_debug_renderer_info"))) {
                L = E.getParameter(z.UNMASKED_VENDOR_WEBGL) || '';
                G = E.getParameter(z.UNMASKED_RENDERER_WEBGL) || '';
              }
            } catch (H3) {}
            var w = 0x0;
            try {
              if (window.process && window.process.versions && window.process.versions.electron) {
                w |= 0x1;
              }
            } catch (H4) {}
            try {
              if (/Electron/i.test(Y)) {
                w |= 0x2;
              }
            } catch (H5) {}
            var H0 = [j(Y), j(M), B, S, j(L), j(G), w].join('.');
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
        if ("object" == ("undefined" == typeof WebAssembly ? "undefined" : J(WebAssembly))) {
          try {
            WebAssembly.instantiate(y).then(function (H7) {
              try {
                var H8 = H7.instance.exports.rot;
                var H9 = window.__aopc3mu9;
                Object.defineProperty(window, "__aopc3mu9", {
                  'value': function (HH, Hb, HZ, Ha, HV, HN, Ho, HI) {
                    Hb = R(HH, Hb, HZ, Ha, function (Hx, HU) {
                      return H8(0x0, 0x0, 0x0 | HU, 0x0 | Hx) >>> 0x0;
                    }, HV, HN, Ho);
                    if (0x4 <= HH) {
                      try {
                        var Hq;
                        var Hg = parseInt(Hb, 0x24);
                        if (!isNaN(Hg)) {
                          Hg = ((Hg = Hg >>> 0x0 ^ HI >>> 0x0) << (Hq = 0x7 & HI) | Hg >>> 0x20 - Hq) >>> 0x0;
                          Hb = ((Hg ^= HI >>> 0x3) >>> 0x0).toString(0x24).toUpperCase();
                        }
                      } catch (Hx) {}
                    }
                    return Hb;
                  },
                  'writable': false
                });
                try {
                  if (H9 && H9._envSig && !window.__aopc3mu9._envSig) {
                    window.__aopc3mu9._envSig = H9._envSig;
                    window.__aopc3mu9._env = H9._env;
                  }
                  window.__aopc3mu9._wasm = 0x1;
                } catch (HH) {}
              } catch (Hb) {}
            })["catch"](function () {});
          } catch (H7) {}
        }
      }
    })();
    (function () {
      function R(j, A, v, y, Q, O) {
        var T = navigator || {};
        var Y = T.userAgent || '';
        var M = {
          'tv': 0x2
        };
        try {
          var B = window[j];
          if (B && B._envSig) {
            M.mx = B._envSig;
          }
        } catch (W) {}
        var B = 0x0;
        var L = 0x0;
        try {
          if (window.process && process.versions && process.versions.electron) {
            B |= 0x1;
          }
        } catch (E) {}
        try {
          if (/Electron/i.test(Y)) {
            B |= 0x2;
          }
        } catch (w) {}
        try {
          if ("function" == typeof window.require) {
            B |= 0x4;
          }
        } catch (H0) {}
        try {
          if (window.process && "renderer" === window.process.type) {
            B |= 0x8;
          }
        } catch (H1) {}
        try {
          if (T.webdriver) {
            L |= 0x1;
          }
        } catch (H2) {}
        M.el = B;
        M.hv = L;
        M.ua = function (H3) {
          var H4 = 0x811c9dc5;
          for (var H5 = 0x0; H5 < H3.length; H5++) {
            H4 = 0x1000193 * ((H4 ^ H3.charCodeAt(H5)) >>> 0x0);
          }
          return (H4 >>> 0x0).toString(0x24).toUpperCase();
        }(Y);
        M.pf = T.userAgentData && T.userAgentData.platform || T.platform || '';
        j = [];
        if (0x1 & B) {
          j.push('EP');
        }
        if (0x2 & B) {
          j.push('EU');
        }
        if (0x4 & B) {
          j.push('RF');
        }
        if (0x8 & B) {
          j.push('PR');
        }
        if (0x1 & L) {
          j.push('WD');
        }
        if (j.length) {
          M.mk = j.join(',');
        }
        try {
          var G = R.toString();
          var k = G.length;
          var S = 0x0;
          for (var z = 0x0; z < G.length; z++) {
            S = S + G.charCodeAt(z) & 0xffff;
          }
          M.ti = {
            'l': k,
            'c': S
          };
          if (k < 0x96 || 0x4b0 < k) {
            (j.push ? j : []).push('TM');
          }
          if (j.length && !M.mk) {
            M.mk = j.join(',');
          } else if (j.length) {
            M.mk = M.mk + ',' + j[j.length - 0x1];
          }
          try {
            M.dq = ((0xffff & (k ^ S ^ 0x5f37)) >>> 0x0).toString(0x24).toUpperCase();
          } catch (H3) {}
        } catch (H4) {}
        return JSON.stringify(M);
      }
      var p;
      if (!window.__GOTA_TELEM_INIT__) {
        window.__GOTA_TELEM_INIT__ = true;
        p = "undefined" != typeof WeakSet ? new WeakSet() : [];
        window.sendEnvTelemetry = function (j, A, v, y, Q, O, T) {
          if (j && 0x1 === j.readyState && (z = j) && (p instanceof Array ? -0x1 === p.indexOf(z) : !p.has(z))) {
            if (z = j) {
              if (p instanceof Array) {
                if (-0x1 === p.indexOf(z)) {
                  p.push(z);
                }
              } else {
                p.add(z);
              }
            }
            z = R(y || '');
            try {
              var Y = new TextEncoder().encode(z);
              if (!(0x4b0 < Y.length)) {
                var B = (A ^ v ^ Q ^ O ^ T) >>> 0x0 >>> 0x0;
                for (var L = 0x0; L < Y.length; L++) {
                  B = ((B = (B ^= B << 0xd) ^ B >>> 0x11) ^ B << 0x5) >>> 0x0;
                  Y[L] ^= 0xff & B;
                }
                var G = new ArrayBuffer(0x3 + Y.length);
                var k = new DataView(G);
                k.setUint8(0x0, 0x7d);
                k.setUint16(0x1, Y.length, true);
                for (var S = 0x0; S < Y.length; S++) {
                  k.setUint8(0x3 + S, Y[S]);
                }
                j.send(G);
              }
            } catch (W) {}
          }
          var z;
        };
      }
    })();
    if (null == C.fuckAdBlock) {
      C.aiptag = null != (c = C.aiptag) ? c : {};
      Object.defineProperty(C.aiptag, "settings", {
        'get': function () {
          return t;
        },
        'set': function (R) {
          R.iBtLoader = false;
          t = R;
        }
      });
    }
    C.gajsn = function () {
      var H0;
      var H1 = new function () {
        this.t = false;
        this.i = "CP_0918_01";
        this.o = "https://gota.io/policies/privacy.html?v=" + this.i + "#cookies";
        this.h = F("#cc_acceptCookies");
        this.u = {
          'p': "cookieConsent",
          'm': "yes+" + this.i,
          'k': 0x2da,
          '$': "/web"
        };
        this.v = {
          '_': F("#cookie-banner"),
          'S': F("#declineCookies"),
          'N': F("#acceptCookies"),
          'M': false
        };
        this.C = function () {
          this.O();
          this.h.on("change", function () {
            H1.H(F(this).prop("checked"));
          });
          if (this.F() === this.u.m) {
            this.H(true);
            this.D(false);
          } else {
            this.H(false);
            this.D(true);
          }
        };
        this.H = function (VF) {
          this.t = VF;
          C.aiptag.consented = VF;
          this.h.prop("checked", VF);
          if (VF) {
            this.A();
            this.D(false);
            if (H1.t) {
              var VF = C.localStorage.getItem("theme");
              var Vs = C.localStorage.getItem("fixes_theme");
              ak(U(U({}, JSON.parse(null != VF ? VF : '{}')), JSON.parse(null != Vs ? Vs : '{}')));
              var VK = C.localStorage.getItem("keybinds");
              if (VK) {
                VK = JSON.parse(VK);
                for (var Vc in bC) {
                  var VR = VK[Vc];
                  if (Number.isInteger(VR)) {
                    bC[Vc] = VR;
                  }
                }
              }
              var Vp = C.localStorage.getItem("options");
              if (Vp) {
                Vp = JSON.parse(Vp);
                for (var Vl in bD) if (Vl in Vp) {
                  bD[Vl] = Vp[Vl];
                }
              }
              var Vf;
              var Vj = C.localStorage.getItem("fixes_version");
              var VA = '';
              for (Vf of [[0x14, "Added an option to change zoom delay.\n\nIncreased the default zoom delay to match Gota's zoom speed at 60fps.\n\nAdded an option for darker bot colors."], [0x15, "Fixed an issue where certain ad-blockers were causing a red error banner to appear.\n\nFixed an issue where Donut linesplits were not working properly after a recent Gota Fixes update."], [0x16, "Fixed a Gota bug causing a red error banner to appear whenever viewing a player's profile while logged out.\n\nUpdated to Gota version 3.6.4:\n- Nothing needed to be changed besides the version number."], [0x17, "Fixed an issue causing store advertisements to still show in chat every 30 minutes.\n\nAdded Gota's halloween theme."], [0x18, "Improved FPS while using the \"Show Coordinates\" option by about 15%.\n\nOther slight optimisations."], [0x19, "Added a linesplit keybind:\n\n- Pretty much 100% success rate, unless your mouse is too close to the center of your cell. Animation delay, camera delay or ping doesn't affect it.\n\n- Lineup time is as low as 50ms, depending on your ping.\n\n- Allows activation when you have more than 1 cell.\n\n- Allows splitting immediately after lining up.\n\n- Option for toggle or hold activation.\n\nPlease let me know if there are any issues. I can tweak it to take a little longer to lineup for more consistency."], [0x1a, "Fixed an issue causing the script to break when using Violentmonkey.\n\nFixed an issue causing no cells to appear after seeing the \"Allow Cookies\" prompt."], [0x1b, "Slightly increased linesplit line-up time for more consistency with large mass.\n\nFixed an issue causing degrading performance over long game sessions.\n\nFreezing mouse before and after linesplitting should now work as expected.\nNote: Freezing mouse quickly after pressing the linesplit key will cause your cell to freeze if it hasn't lined up yet."], [0x1c, "Hopefully fixed the Gota bug that causes auto respawn to break when dying immediately after pressing Play.\n\nFixed a Gota bug preventing the Esc key from closing social menus such as profile and friends list.\n\nFixed an issue causing the Spectate button to break if it was pressed while the player is still alive.\n\nAdded an option slider to change menu animation speed: Menu Delay.\nIt can be set to 0 if you want no animations."], [0x1d, "Slightly decreased the delay between switching tabs when multiboxing with capped FPS."], [0x1e, "Added options and keybinds to hide bot names, masses and skins.\n\nContext menu for names in the chat, leaderboard and party now take priority over cell context menus.\nIn other words, trying to right click a chat name when a cell is underneath will show the chat name context menu, as expected.\n\nThe Context Menu keybind now applies to chat, leaderboard and party, instead of just cells.\n\nAdded 5 more zoom level keybinds. Zoom difference between each level has decreased for finer control.\n\nAdded a theme option for map background image.\n\nFixed an issue preventing the Linesplit Mode option from saving after refreshing the page."], [0x1f, "Updated to Gota version 3.6.5:\n- Halloween theme.\n- Chat message history can be accessed using the up and down arrows when typing in chat.\n- Added score panel style option: Hidden, Vertical, Horizontal.\n- Added reconnect seconds option.\n- Added some (barely functional) mobile device compatibility.\n- Added Mass in score panel.\n- Moved Score next to Cells in score panel.\n\nFixed a Gota issue causing horizontal score panel to expand the party panel.\n\nFixed a minor Gota issue with the chat message history.\n\nFixed issues causing some scripts to break after the Gota update."], [0x20, "Fixed a Gota issue causing the player to not spawn in when connecting to a server using the Play button while logged in with silent login disabled."]]) {
                var Vv = g(Vf) || q(Vf, 0x2) || o(Vf, 0x2) || N();
                var Vy = Vv[0x0];
                var Vv = Vv[0x1];
                if (Vj < Vy) {
                  VA += Vv + "\n\n";
                }
              }
              if (0x0 !== VA.length) {
                Hw("Gota Fixes was updated!", VA += "\nIf you enjoy these updates, please consider donating to help me make more!");
              }
              C.localStorage.setItem("fixes_version", '32');
              var Vd;
              var VQ;
              var VO = C.localStorage.getItem("fixes_options");
              var VT = C.localStorage.getItem("fixes_keybinds");
              if (VO) {
                var VY;
                var VM = (VO = JSON.parse(VO)).loadver;
                if (null != VM && (VM & 0x1201) === 0x1201) {
                  aL.forEach(function (VE) {
                    var VE = g(VE) || q(VE, 0x3) || o(VE, 0x3) || N();
                    var Vu = VE[0x0];
                    var Vi = VE[0x1];
                    var VE = VE[0x2];
                    bD[VE] = 0x1 === Vi ? !!(VM & 0x1 << Vu) : VM >> Vu & (0x1 << Vi) - 0x1;
                  });
                  delete VO.loadver;
                }
                if (VO.cHorizontalScorePanel) {
                  bD.sScorePanel = '1';
                }
                for (VY in bs) if (VY in VO) {
                  bD[VY] = VO[VY];
                }
              }
              if (VT) {
                if (!("kZoom10" in (VT = JSON.parse(VT))) && "kZoom5" in VT) {
                  Object.assign(VT, {
                    'kZoom2': bC.kZoom2,
                    'kZoom3': VT.kZoom2,
                    'kZoom4': bC.kZoom4,
                    'kZoom5': bC.kZoom5,
                    'kZoom6': VT.kZoom3,
                    'kZoom8': VT.kZoom4,
                    'kZoom10': VT.kZoom5
                  });
                }
                for (var VB in bK) if (VB in VT) {
                  bC[VB] = VT[VB];
                }
              }
              for (Vd in bC) {
                var VL = F('#' + Vd);
                if (0x0 !== VL.length) {
                  ZW(VL);
                }
              }
              for (VQ of Object.entries(bD)) {
                var VG = g(VQ) || q(VQ, 0x2) || o(VQ, 0x2) || N();
                var Vk = VG[0x0];
                var Vm = VG[0x1];
                var VS = F('#' + Vk);
                if (0x0 !== VS.length) {
                  switch (Vk.charAt(0x0)) {
                    case 'c':
                      if (true === Vm) {
                        VS.prop("checked", true);
                        aA(VS);
                      }
                      break;
                    case 's':
                      VS.val(Vm);
                      av(VS);
                      break;
                    case 'r':
                      VS.val(Vm);
                      ay(VS);
                      break;
                    case 'i':
                      VS.val(Vm);
                      ad(VS);
                  }
                }
              }
              bZ.I.css("width", "360px");
              bZ.I.css("height", "250px");
              aQ("cThemeEnabled");
              if (null != (VF = C.localStorage.getItem("name"))) {
                F("#name-box").val(VF);
              }
              var Vz = C.localStorage.getItem("subpanel");
              if (Vz) {
                Vz = JSON.parse(Vz);
                for (var Vh in bO) if (Vh in Vz) {
                  bO[Vh] = Vz[Vh];
                }
              }
            }
            aH();
            var VW = F("#spNameColor");
            VW.val(Zf(bO.nameColor));
            VW[0x0].dispatchEvent(new Event("input", {
              'bubbles': true
            }));
            VW.on("input", function () {
              return bO.nameColor = Zl(VW.val());
            });
            var Vs = F("#spChatColor");
            Vs.val(V7[0x0]);
            Vs[0x0].dispatchEvent(new Event("input", {
              'bubbles': true
            }));
            Vs.on("input", function () {
              return bO.chatColor = a8();
            });
            F("#spSkinName").val('');
            F("#spLowerName").prop("checked", false);
            F("#spEffect").val(0x0);
            F("#spNameFont").val(0x0);
            F("#btn-chg-ln").on("click", function () {
              var VE;
              var Vu;
              if (b3 && (VE = prompt("Enter new locked name!"))) {
                Vu = "string" != typeof VE ? "Please enter a valid name!" : null;
                if (VE.length < 0x2) {
                  Vu = "Locked names must be 2 or more characters long.";
                }
                if (null != (Vu = 0x14 < VE.length ? "Locked names must be 20 or less characters long." : Vu)) {
                  alert(Vu);
                } else {
                  VE = VE.trim();
                  if (confirm("You are about to change your locked name to: '" + VE + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
                    Hc.T(bm.P(VE));
                  }
                }
              }
            });
            F("#btn-updateSP").on("click", a9);
            F("#btn-subpanel-rules").on("click", function () {
              bO.rules = true;
              aH();
            });
            F("#no_cookie_consent").hide();
            if ("none" !== F("#account-loader").css("display")) {
              F("#guest").hide();
            } else {
              F("#guest").show();
            }
          } else {
            this.L();
            if (null != Hb.auth().currentUser) {
              Hb.auth().signOut()["catch"](function () {});
            }
            F("#authed").hide();
            F("#account-loader").hide();
            F("#guest").hide();
            F("#no_cookie_consent").show();
            this.D(true);
          }
        };
        this.D = function (VF) {
          if (VF) {
            if (!this.v.M) {
              this.R();
              this.v.M = true;
            }
            this.v._.slideDown();
          } else {
            this.v._.slideUp();
          }
        };
        this.R = function () {
          this.v.S.on("click", function () {
            H1.H(false);
            H1.D(false);
          });
          this.v.N.on("click", function () {
            H1.H(true);
            H1.D(false);
          });
          F("#cookie-banner .description").append(" <a href=\"" + this.o + "\" target=\"_blank\">Our Cookie Policy!</a>");
        };
        this.A = function () {
          (VF = new Date()).setTime(VF.getTime() + 0x18 * this.u.k * 0x3c * 0x3c * 0x3e8);
          var VF = "expires=" + VF.toUTCString();
          s.cookie = this.u.p + '=' + this.u.m + ';' + VF + ";path=" + this.u.$ + ';';
        };
        this.L = function () {
          s.cookie = this.u.p + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.u.$ + ';';
        };
        this.F = function () {
          var VF = this.u.p + '=';
          var Vs = decodeURIComponent(s.cookie).split(';');
          for (var VK = 0x0; VK < Vs.length; VK++) {
            for (var Vc = Vs[VK]; ' ' === Vc.charAt(0x0);) {
              Vc = Vc.substring(0x1);
            }
            if (0x0 === Vc.indexOf(VF)) {
              return Vc.substring(VF.length, Vc.length);
            }
          }
          return false;
        };
        this.O = function () {
          var Vs = decodeURIComponent(s.cookie).split(';');
          var VK = null;
          for (var Vc = 0x0; Vc < Vs.length; Vc++) {
            for (var VR = Vs[Vc]; ' ' === VR.charAt(0x0);) {
              VR = VR.substring(0x1);
            }
            if (0x0 === VR.indexOf("cookieconsent_status=")) {
              VK = VR.substring("cookieconsent_status=".length, VR.length);
            }
          }
          if ("allow" === VK) {
            this.A();
          }
          s.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;";
        };
      }();
      var H2 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
      var H3 = ['', "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", '', "BACK_SPACE", "TAB", '', '', "CLEAR", "ENTER", "ENTER_SPECIAL", '', "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", '', "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", 'UP', "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "OS_KEY", '', "CONTEXT_MENU", '', "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", '', '', '', '', '', '', '', '', "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", '', '', '', '', '', '', '', '', '', "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", '', '', '', '', "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", '', '', "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", '', "META", "ALTGR", '', "WIN_ICO_HELP", "WIN_ICO_00", '', "WIN_ICO_CLEAR", '', '', "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", '', "PA1", "WIN_OEM_CLEAR", ''];
      var H4 = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave"];
      for (H0 of "abcdefghijklmnopqrstuvwxyz") H4.push("letter_" + H0);
      for (var H5 = 0x0; H5 < 0xa; H5++) {
        H4.push("number_" + H5);
      }
      var H6;
      var H7 = [];
      var H9 = [new ah("Random", "random", 0x0), new ah("Maximum Cells Upgrade", "extracells", 0x1), new ah("Extra Consumable Slot", "extraconsumable", 0x1), new ah("Merge", "merge", 0x2), new ah("Grow", "grow", 0x2), new ah("Speed", "speed", 0x2), new ah("Shield", "shield", 0x2), new ah("Virus", "spike", 0x3), new ah("Disrupt", "disrupt", 0x3), new ah("Teleport", "teleport", 0x3), new ah("Disrupt", "_disrupt", 0x4), new ah("Silver", "phoenix", 0x1), new ah("Consumable Shield", "_shield", 0x3), new ah("Magnet", "magnet", 0x2), new ah("Decay", "decay", 0x3), new ah("Decay", "_decay", 0x4)];
      var HH = C.PIXI;
      var Hb = C.firebase;
      C.PIXI = null;
      var Ha = {
        'THICK': 0x9,
        'THIN': 0x5,
        'NONE': 0x0
      };
      var HV = {
        'fontFamily': "Verdana",
        'fontWeight': "bold",
        'fontSize': 0x45,
        'fill': 0xffffff
      };
      var HN = new HH.Point(0.5, 0.5);
      var Ho = new HH.Container();
      var HI = new HH.Sprite();
      HI.visible = false;
      var Hq = new HH.Graphics();
      Hq.visible = false;
      var Hg = new HH.Container();
      var Hx = g(function () {
        class VF extends HH.ParticleContainer {
          ['J']() {
            var Vs = K.ceil(this.children.length / this._batchSize);
            if (0x0 !== Vs) {
              ++this._updateID;
              for (var VK = 0x0; VK < Vs; ++VK) {
                this._bufferUpdateIDs[VK] = this._updateID;
              }
            }
          }
        }
        return [new VF(0x5dc, null, 0x4000, true), new HH.ParticleContainer(0x5dc, null, 0x4000, true)];
      }()) || q(function () {
        class VF extends HH.ParticleContainer {
          ['J']() {
            var Vs = K.ceil(this.children.length / this._batchSize);
            if (0x0 !== Vs) {
              ++this._updateID;
              for (var VK = 0x0; VK < Vs; ++VK) {
                this._bufferUpdateIDs[VK] = this._updateID;
              }
            }
          }
        }
        return [new VF(0x5dc, null, 0x4000, true), new HH.ParticleContainer(0x5dc, null, 0x4000, true)];
      }(), 0x2) || o(function () {
        class VF extends HH.ParticleContainer {
          ['J']() {
            var Vs = K.ceil(this.children.length / this._batchSize);
            if (0x0 !== Vs) {
              ++this._updateID;
              for (var VK = 0x0; VK < Vs; ++VK) {
                this._bufferUpdateIDs[VK] = this._updateID;
              }
            }
          }
        }
        return [new VF(0x5dc, null, 0x4000, true), new HH.ParticleContainer(0x5dc, null, 0x4000, true)];
      }(), 0x2) || N();
      var HU = Hx[0x0];
      var Hr = Hx[0x1];
      var HP = new HH.Container();
      var HJ = new HH.Sprite();
      var Hx = function (VF) {
        var Vs = s.createElement("canvas");
        var VK = Vs.getContext('2d');
        Vs.width = Vs.height = 0x2 * VF;
        VK.beginPath();
        VK.arc(VF, VF, VF, 0x0, HH.PI_2);
        VK.fillStyle = "#fff";
        VK.fill();
        (VF = HH.Texture.from(Vs)).defaultAnchor = HN;
        return VF;
      };
      var HX = Hx(0x100);
      var HD = Hx(0x6);
      Hg.addChild(HI, Hq, HU, Hr, HP);
      Ho.addChild(Hg, HJ);
      var HF;
      var Hs;
      var HK;
      var Hc;
      var HR;
      var Hp;
      var Hl;
      var Hf;
      var Hj;
      var HA;
      var Hv;
      var Hy;
      var Hd;
      var HQ;
      var HO;
      var HT;
      var HY;
      var HM;
      var HB;
      var HL;
      var HG;
      var Hk;
      var Hm;
      var HS;
      var Hh;
      var HW;
      var HE;
      var Hu;
      var Hw;
      var b0;
      var b1;
      var b2 = '';
      var b3 = false;
      var b4 = null;
      var b5 = false;
      var b6 = {
        'Y': [],
        'V': [],
        'K': [],
        'Z': []
      };
      var b7 = [];
      var b8 = false;
      var b9 = null;
      var bH = true;
      var bb = 0x2 * K.PI;
      var bZ = {};
      var ba = new Hb.auth.GoogleAuthProvider();
      var bN = {
        'X': "halloween2023",
        'q': [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
        'ee': '',
        'te': 0x192ea2bec00,
        'ie': {
          'ne': HN,
          'se': {
            'ae': 0x1,
            'oe': 0x1
          }
        }
      };
      bN.re = Date.now() < 0x192ea2bec00;
      Hb.initializeApp({
        'apiKey': "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
        'authDomain': "accounts.gota.io",
        'databaseURL': "https://gota-io.firebaseio.com",
        'projectId': "gota-io",
        'storageBucket': "gota-io.appspot.com",
        'messagingSenderId': "570450309042",
        'appId': "1:570450309042:web:380ab6c94d44de2f"
      });
      var bo = {};
      var bI = {};
      var bq = {
        'ce': 0x0,
        'le': 0x0,
        'de': 0x0,
        'he': 0x1
      };
      var bg = [{
        'name': "All",
        'flags': 0xff,
        'maxMessages': 0x64
      }, {
        'name': "Party",
        'flags': 0x2,
        'maxMessages': 0x64
      }];
      var bx = 0xfa0;
      var bU = 0xfa0;
      var br = {
        'ue': 0x1,
        'pe': 0xf,
        'fe': 0xb,
        'me': 0x1,
        'ge': function (VF, Vs) {
          bD[VF] = Vs;
          var VK = 0x3e8 * (0xf - Vs) + 0x2ee;
          switch (VF) {
            case "rRainbowNameSpeed":
              bx = VK;
              break;
            case "rRainbowCellSpeed":
              bU = VK;
          }
        }
      };
      var bP = 0x0;
      var bJ = [];
      var bX = -0x1;
      var bD = {
        'cDisableAA': false,
        'cAutoRespawn': false,
        'cHideId': false,
        'sRenderType': "AUTO",
        'sTextOutlines': "NONE",
        'sQuality': "ULTRA",
        'sMassType': "DEFAULT",
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
        'iChatWidth': "360px",
        'iChatHeight': "250px",
        'rUiScale': 0x1,
        'rReconnectPeriod': 0x5,
        'rAnimationDelay': 0x5a,
        'rViewDistance': 0x64,
        '_ChatTabs': JSON.parse(JSON.stringify(bg))
      };
      var bC = {
        'kContextMenu': ZE("mouse3"),
        'kEjectMass': ZE('w'),
        'kToggleSpec': ZE('q'),
        'kSplit': ZE("space"),
        'kDoubleSplit': -0x1,
        'kTripleSplit': -0x1,
        'kQuadSplit': -0x1,
        'kHexaSplit': -0x1,
        'kFreezeMouse': -0x1
      };
      var bF = Object.freeze({
        'be': ZE("enter"),
        'ke': ZE("escape"),
        'zoomIn': ZE('up'),
        'zoomOut': ZE("down"),
        'chatInputHistoryUp': ZE('up'),
        'chatInputHistoryDown': ZE("down"),
        '$e': ZE("escape")
      });
      var bs = {
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
        'sLinesplitMode': "TOGGLE",
        'cHideLeaderboardHeader': false,
        'cHidePartyHeader': false,
        'cEnableSounds': true,
        'iSplitSound': '',
        'iEjectSound': '',
        'sCameraFocus': "CENTER",
        'rCameraDelay': 0x0,
        'rZoomDelay': 0xa5,
        'rMenuDelay': 0x1f4,
        'spRainbowName': false,
        'spRainbowCell': false,
        'rRainbowNameSpeed': 0xb,
        'rRainbowCellSpeed': 0xb
      };
      var bK = {
        'kLinesplit': -0x1,
        'kPentaSplit': -0x1,
        'kSeptiSplit': -0x1,
        'kOctoSplit': -0x1,
        'kCycleNames': ZE('n'),
        'kCycleMasses': ZE('m'),
        'kCycleSkins': ZE('k'),
        'kHideOwnName': -0x1,
        'kHideFriendNames': -0x1,
        'kHideBotNames': -0x1,
        'kHideEnemyNames': -0x1,
        'kHideOwnMass': -0x1,
        'kHideFriendMasses': -0x1,
        'kHideBotMasses': -0x1,
        'kHideEnemyMasses': -0x1,
        'kHideOwnSkin': -0x1,
        'kHideFriendSkins': -0x1,
        'kHideBotSkins': -0x1,
        'kHideEnemySkins': -0x1
      };
      var bc = {
        'iMapBackground': ''
      };
      var bR = function () {
        var VF = {};
        for (var Vs = 0x1; Vs <= 0xa; Vs++) {
          var VK = "kZoom" + Vs;
          bK[VK] = -0x1;
          VF[VK] = {
            'we': "Zoom level " + Vs,
            'ye': 0x5 * 0.6993157867655625 ** (Vs - 0x1)
          };
        }
        return VF;
      }();
      var bp = new Map();
      var bl = false;
      var bf = Object.assign({}, bC);
      var bA = undefined !== C.ontouchstart;
      var bv = {
        'version': 0x2,
        'uiForegroundColor': "rgb(255, 255, 255)",
        'uiBackgroundColor': "rgba(22, 22, 22, 0.8)",
        'uiBorderColor': "rgba(255, 255, 255, .2)",
        'uiMenuBackgroundColor': "#2A2A2A",
        'uiMenuTitleBackgroundColor': "#404040",
        'uiMenuSubBackgroundColor': "#363636",
        'uiMenuSubBackground2Color': "#404040",
        'uiButtonColor': "#444444",
        'uiGameBackgroundColor': "#121212",
        'uiGameBorderColor': "#ff0000",
        'uiLeaderboardHighlightSelf': "#ffaaaa",
        'uiLeaderboardHighlightParty': "#ffff00",
        'uiPartyLeaderColor': "#00ffff",
        'uiGameColorSuccess': "#00ff00",
        'uiGameColorWarning': "#ffff00",
        'uiGameColorError': "#ff0000",
        '_FoodColors': [],
        'aCustomBackground': '',
        'aCustomSpike': '',
        'aCustomMother': '',
        'rBorderSize': 0x20,
        'rBackgroundOpacity': 0x1
      };
      var by = U({}, bv);
      var bd = {
        've': null,
        '_e': null
      };
      Object.assign(bD, bs);
      Object.assign(bC, bK);
      Object.assign(bv, bc);
      var bQ = [];
      var bO = {
        'rules': false,
        'nameColor': {
          'r': 0x0,
          'g': 0xff,
          'b': 0xff
        },
        'chatColor': 0x0,
        'lowerName': false,
        'skinName': '',
        'effect': 0x0,
        'nameFont': 0x0
      };
      var bT = null;
      var bY = 0x0;
      var bM = null;
      var bB = C.atob("YlZheHkzYVdEd2NDZ3l4YW1kQkxadFVSMWVEMg==");
      var bG = C.performance.now.bind(C.performance);
      var bk = {
        'Se': null,
        'Ne': function () {},
        'Me': function () {},
        'Ce': function () {},
        'Ee': function () {},
        'xe': function () {},
        'Oe': function () {},
        'He': function () {},
        'Fe': function () {}
      };
      var bm = {
        'De': function () {
          var VF = "Gota Web " + C.version;
          var Vs = new ZJ(0x1 + VF.length + 0x1 + 0x1);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0xff);
          VK.setUint8(0x1, 0x6);
          ZA(0x2, VK, VF);
          return Vs;
        },
        'Ae': function (VF) {
          var Vs = new ZJ(0x2 + 0x2 * (VF.length + 0x1));
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x0);
          Zv(0x1, VK, VF);
          return Vs;
        },
        'Ie': function (VF) {
          var Vs = new ZJ(0x1);
          new ZP(Vs).setUint8(0x0, VF);
          return Vs;
        },
        'Te': function (VF, Vs) {
          var VK = new ZJ(0x9);
          var Vc = new ZP(VK);
          Vc.setUint8(0x0, 0x10);
          Vc.setInt32(0x1, VF, true);
          Vc.setInt32(0x5, Vs, true);
          return VK;
        },
        'Pe': function (VF) {
          var Vs = new ZJ(0x1);
          new ZP(Vs).setUint8(0x0, VF ? 0x3 : 0x4);
          return Vs;
        },
        'Le': function () {
          var VF = new ZJ(0x1);
          new ZP(VF).setUint8(0x0, 0x47);
          return VF;
        },
        'Re': function (VF) {
          var Vs = new ZJ(0x3);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x1);
          if (VF) {
            VK.setUint16(0x1, VF, true);
          }
          return Vs;
        },
        'Ue': function (VF, Vs) {
          var VK = new ZJ(0x2 + 0x2 * (VF.length + 0x1));
          var Vc = new ZP(VK);
          Vc.setUint8(0x0, 0x48);
          Vc.setUint8(0x1, Vs);
          Zv(0x2, Vc, VF);
          return VK;
        },
        'Be': function (VF) {
          var Vs = new ZJ(0x2);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x29);
          VK.setUint8(0x1, VF ? 0x1 : 0x0);
          return Vs;
        },
        'je': function (VF, Vs) {
          var VK = new ZJ(0x6);
          var Vc = new ZP(VK);
          Vc.setUint8(0x0, 0x28);
          Vc.setUint8(0x1, VF);
          Vc.setUint32(0x2, Vs, true);
          return VK;
        },
        'Ge': function (VF) {
          var Vs = new ZJ(0x1 + VF.length + 0x1);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x2a);
          ZA(0x1, VK, VF);
          return Vs;
        },
        'We': function (VF) {
          var Vs = new ZJ(0x3);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x67);
          VK.setUint16(0x1, VF, true);
          return Vs;
        },
        'ze': function (VF, Vs) {
          var VK = new ZJ(0x5 + 0x2 * (Vs.length + 0x1));
          var Vc = new ZP(VK);
          Vc.setUint8(0x0, 0x49);
          Vc.setUint32(0x1, VF, true);
          Zv(0x5, Vc, Vs);
          return VK;
        },
        'Je': function () {
          var VF = new ZJ(0x8 + (''.length + 0x1));
          var Vs = new ZP(VF);
          Vs.setUint8(0x0, 0xa);
          Vs.setUint8(0x1, bO.nameColor.r);
          Vs.setUint8(0x2, bO.nameColor.g);
          Vs.setUint8(0x3, bO.nameColor.b);
          Vs.setUint8(0x4, 0x0);
          Vs.setUint8(0x5, 0x0);
          Vs.setUint8(0x6, 0x0);
          ZA(0x7, Vs, '');
          Vs.setUint8(0x8 + ''.length, 0x0);
          return VF;
        },
        'P': function (VF) {
          var Vs = new ZJ(0x1 + (VF.length + 0x1));
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0xb);
          ZA(0x1, VK, VF);
          return Vs;
        },
        'Ye': function () {
          var VF = new ZJ(0x3);
          var Vs = new ZP(VF);
          Vs.setUint8(0x0, 0x68);
          Vs.setUint16(0x1, 0x64, true);
          return VF;
        },
        'Ve': function (VF) {
          var Vs = new ZJ(0x5);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x50);
          VK.setUint8(0x1, VF);
          VK.setUint8(0x2, 0x0);
          VK.setUint16(0x3, 0x0);
          return Vs;
        },
        'Ke': function (VF) {
          var Vs = new ZJ(0x2);
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x5a);
          VK.setUint8(0x1, VF);
          return Vs;
        },
        'Ze': function () {
          var VF = new ZJ(0x1);
          new ZP(VF).setUint8(0x0, 0x51);
          return VF;
        },
        'Qe': function () {
          var VF = new ZJ(0x2);
          new ZP(VF).setUint8(0x0, 0x5d);
          return VF;
        },
        'Xe': function (VF, Vs) {
          var VK = new ZJ(0x5 + 0x2 * (Vs.length + 0x1));
          var Vc = new ZP(VK);
          Vc.setUint8(0x0, 0x5e);
          Vc.setUint32(0x1, VF, true);
          Zv(0x5, Vc, Vs);
          return VK;
        },
        'qe': function (VF) {
          var Vs = new ZJ(0x1 + (VF.length + 0x1));
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x64);
          ZA(0x1, VK, VF);
          return Vs;
        },
        'et': function (VF) {
          var Vs = new ZJ(0x1 + (VF.length + 0x1));
          var VK = new ZP(Vs);
          VK.setUint8(0x0, 0x65);
          ZA(0x1, VK, VF);
          return Vs;
        },
        'tt': function (VF, Vs, VK) {
          var Vc = new ZJ(0x4);
          var VR = new ZP(Vc);
          VR.setUint8(0x0, 0x5b);
          VR.setUint8(0x1, VF);
          if (VF === 0x3 || VF === 0x7) {
            VR.setUint16(0x2, Vs, false);
          } else if (VF === 0xb) {
            VR.setInt16(0x2, Vs, false);
          } else {
            VR.setUint8(0x2, Vs);
            VR.setUint8(0x3, VK);
          }
          return Vc;
        },
        'ot': function (VF, Vs) {
          var VK = new ZJ(0x2 + 0x2 * (Vs.length + 0x1));
          var Vc = new ZP(VK);
          Vc.setUint8(0x0, 0x5c);
          Vc.setUint8(0x1, VF);
          Zv(0x2, Vc, Vs);
          return VK;
        }
      };
      function bS(VF) {
        HF = s.getElementById("canvas");
        Hs = s.getElementById("minimap-canvas");
        HK = Hs.getContext('2d');
        Hy = F("#main");
        Hd = F("#party-panel");
        HQ = F(".hud-panel");
        HE = F("#score-panel");
        HT = F("#main-scrimmage");
        HY = F("#context-menu");
        HM = F("#chat-input");
        HO = F("#leaderboard-header");
        HW = F("#scrimmage-custom");
        Object.assign(bZ, {
          'rt': F("#pMouse"),
          'ct': F("#pScore span")[0x0],
          'lt': F("#pMass span")[0x0],
          'dt': F("#pPing span")[0x0],
          'ht': F("#pCells span")[0x0],
          'ut': F("#pFps span")[0x0],
          'ft': F("#extra-reset-timer"),
          'gt': F("#resetTime"),
          'bt': F("#extra-respawn-cooldown"),
          'kt': F("#respawnCooldown"),
          '$t': F("#spectatorCount"),
          'wt': 0x0,
          'yt': F("#minimap-coordinates"),
          'vt': Hd,
          '_t': F("#social-online-friends-count"),
          'St': F("#popup-profile"),
          'Nt': F("#popup-account-username"),
          'Mt': F("#scrimmage-map"),
          'Ct': F("#scrimmage-mapmode"),
          'Et': F("#scrimmage-mapsize"),
          'xt': F("#scrimmage-startmass"),
          'I': F("#chat-panel"),
          'Ot': F("#touch_controls")
        });
        F("td:contains(Disable Auto Name Hiding)").text("Disable Auto Mass Hiding");
        F("#cShowMass").parents('tr').hide();
        F("#sShowNames").parents('tr').hide();
        F("#sShowSkins").parents('tr').hide();
        F("#pServer").hide();
        F("#cHideServer").parents('tr').hide();
        F("#main-options table").prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Options</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Hides all locked name features (besides cell colors) of other players.\" data-balloon-pos=\"down\" data-balloon-length=\"fit\">\n              Hide Locked Name Features\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLockedNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Name</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnName\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Mass</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnMass\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Masses</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Skin</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnSkin\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemySkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Darker Bot Colors</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cDarkerBotColors\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Uncap FPS</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cUncapFPS\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Small cells will have smoother skins and edges, but cells and names may appear to be blurry.\" data-balloon-pos=\"up\" data-balloon-length=\"fit\">\n              Smooth Cells\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cSmoothCells\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Linesplit Mode</td>\n            <td>\n              <select id=\"sLinesplitMode\">\n                <option value=\"TOGGLE\">Toggle</option>\n                <option value=\"HOLD\">Hold</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Leaderboard/Queue Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLeaderboardHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Party Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHidePartyHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Enable Sounds</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cEnableSounds\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Split Sound: </td>\n            <td><input id=\"iSplitSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Eject Sound: </td>\n            <td><input id=\"iEjectSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Camera Focus</td>\n            <td>\n              <select id=\"sCameraFocus\">\n                <option value=\"CENTER\">Center</option>\n                <option value=\"MASS\">Biggest Cells</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 0\" data-balloon-pos=\"up\">Camera Delay: <input class=\"options-input\" id=\"cameraDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rCameraDelay\" min=\"0\" max=\"250\" value=\"0\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 165\" data-balloon-pos=\"up\">Zoom Delay: <input class=\"options-input\" id=\"zoomDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rZoomDelay\" min=\"0\" max=\"400\" value=\"165\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 500\" data-balloon-pos=\"up\">Menu Delay: <input class=\"options-input\" id=\"menuDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rMenuDelay\" min=\"0\" max=\"1000\" value=\"500\" step=\"5\" /></td>\n          </tr>\n        </tbody>\n      ");
        var Vs;
        var VK = "\n        <thead>\n          <th colspan=\"4\">Gota Fixes Keybinds</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Linesplit</td>\n          <td><button id=\"kLinesplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Penta Split (32x)</td>\n          <td><button id=\"kPentaSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Septi Split (128x)</td>\n          <td><button id=\"kSeptiSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Octo Split (256x)</td>\n          <td><button id=\"kOctoSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Names</td>\n          <td><button id=\"kCycleNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Masses</td>\n          <td><button id=\"kCycleMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Skins</td>\n          <td><button id=\"kCycleSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Name</td>\n          <td><button id=\"kHideOwnName\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Names</td>\n          <td><button id=\"kHideFriendNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Names</td>\n          <td><button id=\"kHideBotNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Names</td>\n          <td><button id=\"kHideEnemyNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Mass</td>\n          <td><button id=\"kHideOwnMass\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Masses</td>\n          <td><button id=\"kHideFriendMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Masses</td>\n          <td><button id=\"kHideBotMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Masses (Autosplit)</td>\n          <td><button id=\"kHideEnemyMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Skin</td>\n          <td><button id=\"kHideOwnSkin\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Skins</td>\n          <td><button id=\"kHideFriendSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Skins</td>\n          <td><button id=\"kHideBotSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Skins</td>\n          <td><button id=\"kHideEnemySkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n      ";
        for (Vs of Object.entries(bR)) {
          var Vc = g(Vs) || q(Vs, 0x2) || o(Vs, 0x2) || N();
          var VR = Vc[0x0];
          var Vc = Vc[0x1];
          var Vp = Vc.we;
          var Vc = Vc.ye;
          VK += "<tr>\n            <td colSpan=\"3\">" + Vp + "</td>\n            <td><button id=\"" + VR + "\" class=\"keybinds-btn\"></button></td>\n          </tr>";
          bR[VR] = Vc;
        }
        F("#main-hotkeys table").prepend(VK);
        F("#main-themes table").prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Theme</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Map Background: </td>\n          <td><input id=\"iMapBackground\" class=\"input-option\" placeholder=\"https://example.png\" /></td>\n        </tr>\n      ");
        F(".main-content, .main-right").css("height", "530px");
        F(".server-table tbody").css("height", "421px");
        F(".options-container").css("height", "480px");
        F("#server-content").css("height", "456px");
        F("#main-rb").css("height", "340px");
        F(".main-rb-title").css("padding", "10px");
        F("#main-account").css("height", "180px");
        F(".policyLinks").css({
          'flex-wrap': "wrap"
        }).append("<span style=\"text-align: center\">If you enjoy using Gota Fixes, please consider donating to support the developer.</span>", F("<a href=\"https://ko-fi.com/camlan\" target=\"_blank\">Donate</a>").css({
          'border-radius': "15px",
          'background-color': "#00b9fe",
          'padding': "0 18px",
          'font-size': "16px",
          'text-decoration': "none",
          'font-weight': 0x258,
          'height': "26px",
          'line-height': "25px",
          'margin-top': "3px"
        }));
        Object.assign(F("#account-shop")[0x0].dataset, {
          'balloon': "Use code \"camlan\" in the \"Support A Creator\" section at checkout for a 10% discount!",
          'balloonPos': "left",
          'balloonLength': "medium"
        });
        F("#rAnimationDelay").attr("min", 0x1);
        var Vl;
        var Vf;
        var Vj;
        var VA;
        var Vv;
        var Vy = s.createElement("style");
        function Vd(N8, N9, NH) {
          var Nb = NH.ue;
          var NZ = NH.pe;
          var Na = NH.fe;
          var NV = NH.me;
          var NN = NH.ge;
          var NH = N9;
          var N9 = bD[N8];
          var No = (NH = F("\n          <tr>\n            <td style=\"overflow-x: visible\" data-balloon=\"Default: " + Na + "\" data-balloon-pos=\"up\">" + NH + ": <input class=\"options-input\" style=\"float: none;\" value=\"" + N9 + "\"></td>\n            <td><input type=\"range\" min=\"" + Nb + "\" max=\"" + NZ + "\" value=\"" + N9 + "\" step=\"" + NV + "\"/></td>\n          </tr>\n        ")).find(".options-input");
          var NI = NH.find("[type=range]");
          No.on("change", function () {
            var Nq = parseInt(No.val());
            var Nq = K.min(K.max(Nq = isNaN(Nq) ? Na : Nq, Nb), NZ);
            No.val(Nq);
            NI.val(Nq);
            NN(N8, Nq);
          });
          NI.on("input", function () {
            var Nq = parseInt(NI.val());
            No.val(Nq);
            NN(N8, Nq);
          });
          NN(N8, N9);
          return NH;
        }
        function VQ(N8) {
          if (N8 && !bM) {
            bM = F("<thead><th colspan=\"2\">Gota Fixes</th></thead>").add(F("<tbody>").append("<tr>\n                  <td>Rainbow Name</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowName\"></td>\n                </tr>", Vd("rRainbowNameSpeed", "Rainbow Name Speed", br), "<tr>\n                  <td>Rainbow Cell</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowCell\"></td>\n                </tr>", Vd("rRainbowCellSpeed", "Rainbow Cell Speed", br)));
            VB.append(bM);
            VB.find("[type=checkbox]").change(function () {
              aA(F(this));
            }).prop("checked", function () {
              return bD[this.id];
            });
            VB.find("[type=range]").css("width", "110px");
          } else if (!N8) {
            bD.spRainbowName = bD.spRainbowCell = false;
            if (null != (N8 = Hc.Ft)) {
              N8.Ht();
            }
            if (bM) {
              bM.remove();
              bM = null;
            }
          }
          aH();
        }
        Vy.innerHTML = "\n        .input-option {\n          border: none;\n          border-radius: 5px;\n        }\n      ";
        Vy.innerHTML += "\n          .popup-container {\n            width: initial;\n            max-width: 640px;\n            min-width: 320px;\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            align-content: center;\n          }\n\n          #popup-party-code {\n            width: 320px;\n          }\n\n          .alert-scroller {\n            max-height: 450px;\n            margin-bottom: 5px;\n            overflow-y: auto;\n          }\n\n          .alert-scroller::-webkit-scrollbar {\n            width: 6px\n          }\n          \n          .alert-scroller::-webkit-scrollbar-thumb {\n            background-color: #a9a9a9;\n            border-radius: 4px\n          }\n        ";
        Vl = F("<div class=\"popup-panel\" style=\"display: none\">");
        Vf = F("<span class=\"title-text menu-title\">");
        Vj = F("<div style=\"font: 12pt open sans; white-space: pre-line; margin: 5px 16px\">");
        VA = F("<button class=\"gota-btn\" style=\"margin: 5px auto; display: block\">Dismiss</button>");
        Vv = F("<div class=\"alert-scroller\">").append(Vj, VA);
        Vl.append(Vf, Vv);
        F(".popup-container").append(Vl);
        Hw = function (N8, N9) {
          var NH;
          if (!Vl.is(":visible")) {
            if (NH = Hy.is(":visible")) {
              ap(Hy);
            }
            Vf.text(N8);
            Vj.html(N9);
            VA.one("click", function () {
              ap(Vl);
              if (NH) {
                aR(Hy);
              }
            });
            aR(Vl);
          }
        };
        var VO;
        var VT;
        var VY;
        var VM;
        var VB = F("#subpanel-content > table");
        function VL() {
          if (Hc && HB) {
            HB = false;
            HL = Date.now();
            Hc.T(bm.Pe(false));
          }
        }
        b0 = VB.children();
        Hb.auth().onAuthStateChanged(function (N8) {
          if (N8) {
            Hb.database().ref("/friendships/" + N8.uid).on("value", function (N9) {
              VQ(N9 = (N9 = N9.val()) && Object.entries(N9).some(function (NH) {
                var NH = g(NH) || q(NH, 0x2) || o(NH, 0x2) || N();
                var Nb = NH[0x0];
                var NH = NH[0x1];
                return Nb === bB && NH;
              }));
            });
          } else {
            VQ(false);
          }
        });
        Vy.innerHTML += "\n        #party-panel { width: max-content }\n      ";
        Vy.innerHTML += "\n        #leaderboard-panel { padding: 5px 0 }\n        #leaderboard-panel > * { margin: 0 }\n      ";
        Vy.innerHTML += "\n        #leaderboard-canvas { pointer-events: auto }\n      ";
        Vy.innerHTML += "\n        #minimap-coordinates { color: unset }\n      ";
        s.head.appendChild(Vy);
        VT = HO[0x0];
        b1 = function (N8) {
          if (N8 !== VT.textContent) {
            VT.textContent = N8;
          }
        };
        HQ.hide();
        HB = false;
        HL = 0x0;
        if (bA) {
          C.FastClick.attach(s.body);
          C.nipplejs.create({
            'zone': F("#joystick")[0x0],
            'mode': "static",
            'position': {
              'left': "10%",
              'bottom': "20%"
            },
            'color': "red",
            'size': 0x64,
            'restOpacity': 0.5,
            'dynamicPage': true
          }).on("move", function (N8, N9) {
            var NH = N9.distance;
            var Nb = N9.force;
            var N9 = N9.angle;
            Hc.Dt = NH * Nb * K.cos(N9.radian) + C.innerWidth / 0x2;
            Hc.At = NH * Nb * K.sin(-N9.radian) + C.innerHeight / 0x2;
          });
          bD.cHideChat = true;
          bD.cHideLeaderboard = true;
          VO = function (N8) {
            return Hc.It(bC[N8]);
          };
          F(".touch_button").on("touchstart touchend", function (N8) {
            var N9 = N8.type;
            N8.target.style.opacity = "touchstart" === N9 ? 0x1 : 0.3;
          });
          F("#button_split").on("touchstart", function () {
            return VO("kSplit");
          });
          F("#button_double").on("touchstart", function () {
            return VO("kDoubleSplit");
          });
          F("#button_triple").on("touchstart", function () {
            return VO("kTripleSplit");
          });
          F("#button_eject").on("touchstart", function () {
            return VO("kEjectMass");
          }).on("touchend", VL);
        } else {
          C.onmousemove = function (N8) {
            Hc.Dt = N8.clientX;
            Hc.At = N8.clientY;
          };
          C.onmousedown = function (N8) {
            var N9 = N8.button + 0x1;
            if (bl) {
              Zh(N9);
              N8.preventDefault();
            } else if (!F("input").is(":focus")) {
              Hc.It(N9);
            }
          };
          C.onmouseup = function (N8) {
            if ((N8 = N8.button + 0x1) === bC.kEjectMass) {
              VL();
            } else if (N8 === bC.kLinesplit) {
              bk.Ee();
            }
          };
          C.onwheel = function (N8) {
            if (!(Hy.is(":visible") && "hide" !== as.get(Hy.selector) || "canvas" !== N8.target.id)) {
              N8 = N8.wheelDelta || -0x1 * N8.deltaY;
              Hc.Tt *= 0x0 < N8 ? 1.1 : 0.9;
            }
          };
        }
        C.onkeydown = function (N8) {
          var N9 = N8.which || N8.keyCode || N8.charCode;
          if (!(N9 <= 0x5)) {
            if (bl) {
              Zh(N9);
              N8.preventDefault();
            } else if (!F("input").is(":focus")) {
              Hc.It(N9);
            }
          }
        };
        C.onkeyup = function (N8) {
          if ((N8 = N8.which || N8.keyCode || N8.charCode) === bC.kEjectMass) {
            VL();
          } else if (N8 === bC.kLinesplit) {
            bk.Ee();
          }
        };
        C.addEventListener("blur", function () {});
        s.addEventListener("contextmenu", function (N8) {
          return N8.preventDefault();
        });
        Zi();
        a3();
        HG = {};
        Hk = {};
        for (VY in Va) {
          var VG = Va[VY];
          F(".emote-list").append("<li><img name='" + VG + "' title='" + VG + "' src='images/emotes/" + VG + ".png' /></li>");
          HG[VG] = true;
        }
        for (VM in VV) {
          var Vk = VV[VM];
          F(".gif-list").append("<li><img name='" + Vk + "' title='" + Vk + "' src='images/emotes/gifs/" + Vk + ".gif' /></li>");
          Hk[Vk] = true;
        }
        var Vm;
        var VS;
        var Vz;
        var Vh;
        for (var VW = 0x0; VW < H4.length; VW++) {
          !function (N8) {
            VS = (Vm = H4[N8]).replace(/^(letter|number)_/, '');
            F("#spEffect").append("<option value=\"" + (N8 + 0x1) + "\">" + (VS[0x0].toUpperCase() + VS.slice(0x1)) + "</option>");
            H7[N8] = HX;
            var N9 = new Image();
            N9.src = "images/ejected_mass_skins/" + Vm + ".png";
            N9.onload = function () {
              return H7[N8] = HH.Texture.from(N9);
            };
          }(VW);
        }
        for (Vz of H9) !function (N8) {
          var N9 = new Image();
          N9.src = "images/powerups/" + N8.Pt + ".png";
          N9.addEventListener("load", function () {
            N8.Lt = HH.Texture.from(N9);
            N8.Lt.defaultAnchor = HN;
          });
          N8.Rt = N9;
        }(Vz);
        function VE(N8) {
          F.ajax({
            'type': "GET",
            'dataType': "json",
            'url': "https://accounts.gota.io/api/v1/utilities/servers",
            'success': function (N9) {
              var NH;
              for (NH of N9) !function () {
                var Nb = NH.region;
                var NZ = NH.servers;
                bo[Nb] = {};
                NZ.sort(function (Na, NV) {
                  return Na.order - NV.order;
                }).forEach(function (Na) {
                  Na.players = +Na.players;
                  if (!Na.bots) {
                    Na.bots = 0x0;
                  }
                  Na.playersText = Na.players + Na.bots + '/' + Na.playersMax;
                  if (0x0 < Na.bots) {
                    Na.playersText += '*';
                  }
                  Na.region = Nb;
                  bo[Nb][Na.name] = Na;
                });
              }();
              aZ();
              if (null != N8) {
                N8();
              } else if (null != HA) {
                aV(HA.name);
              }
            },
            'error': aZ
          });
        }
        function Vu(N8, N9) {
          if (N8) {
            F(N9).prop("disabled", false);
            F(N9).text("Set");
          } else {
            F(N9).prop("disabled", true);
            F(N9).text("...");
          }
        }
        function Vi(N8) {
          N5.style.width = N2 + N8.clientX - N0 + 'px';
          N5.style.height = N3 - (N8.clientY - N1) + 'px';
        }
        function Vw() {
          s.documentElement.removeEventListener("mousemove", Vi, false);
          s.documentElement.removeEventListener("mouseup", Vw, false);
        }
        aY = HH.Texture.from("images/shield.png");
        aT = HH.Texture.from("images/debuff.png");
        aY.defaultAnchor = aT.defaultAnchor = HN;
        Vv = g(C.location.href.split('#').slice(0x1).join('#').split('&')) || q(C.location.href.split('#').slice(0x1).join('#').split('&'), 0x2) || o(C.location.href.split('#').slice(0x1).join('#').split('&'), 0x2) || N();
        Vh = Vv[0x0];
        Hm = Vv[0x1];
        Hu = function () {
          if (null != (Vh = aa(Vh) || aa(C.localStorage.getItem("server")))) {
            aV(Vh.name);
            aN(Vh.region);
          } else if (null != HA) {
            aV(HA.name);
          } else {
            aN('eu');
            aV("Vendetta");
          }
        };
        Hb.database().ref("/game").on("value", function (N8) {
          var N9;
          var NH = N8.val();
          if (/\d+\.\d+/.exec(C.version)[0x0] !== /\d+\.\d+/.exec(NH.version)[0x0]) {
            Hc.Ut("Gota has updated to version " + NH.version + ". Gota Fixes script may be unstable.");
          }
          var Nb = NH.motd;
          if (!(null == Nb || ["store", "accounts"].some(function (NZ) {
            return Nb.toLowerCase().includes(NZ);
          }) || b2 === Nb)) {
            b2 = Nb;
            Hc.Ut(Nb);
          }
          if (NH.listRefresh !== bY) {
            bY = NH.listRefresh;
            bo = {};
            VE(Hu);
            clearInterval(bT);
            bT = setInterval(function () {
              VE();
            }, NH.listRefresh);
          }
          for (N9 in NH.titles) V8.set(NH.titles[N9], parseInt(N9));
        });
        if (true && bN.re) {
          F("body").toggleClass("event-halloween2023");
        }
        F(".server-tab").on("click", function () {
          aN(F(this).attr("region"));
        });
        F("#btn-play").on("click", function () {
          if (null != HA) {
            if (Hc.Bt() && Hc.jt === HA.name) {
              ap(Hy);
            } else {
              Hc.Gt = false;
              Hc.Wt();
            }
          }
        });
        F("#btn-spec").on("click", function () {
          if (null != HA) {
            if ((Hc.Bt() || Hc.Gt) && Hc.jt === HA.name) {
              ap(Hy);
            } else {
              Hc.Gt = true;
              Hc.zt();
            }
          }
        });
        F("#btn-servers").on("click", function () {
          return af("main-servers");
        });
        F("#btn-options").on("click", function () {
          return af("main-options");
        });
        F("#btn-hotkeys").on("click", function () {
          return af("main-hotkeys");
        });
        F("#btn-themes").on("click", function () {
          return af("main-themes");
        });
        F("#btn-cellpanel").on("click", function () {
          return af("main-subpanel");
        });
        F("#btn-reddit").on("click", function () {
          return C.open("https://www.reddit.com/r/PlayGotaIO/", "_blank");
        });
        F("#btn-discord").on("click", function () {
          return C.open("https://gota.io/discord", "_blank");
        });
        F("#name-box").keypress(function (N8) {
          if (N8.keyCode === bF.be && F(this).is(":focus")) {
            Hc.Wt();
          }
        });
        var N0;
        var N1;
        var N2;
        var N3;
        var N4 = F("#autocomplete-panel");
        HM.keyup(function (N8) {
          var N9;
          var NH = F(this).val();
          var Nb = NH.split(' ');
          switch (N8.keyCode) {
            case bF.be:
              if (0x0 !== (N9 = NH).length) {
                if ('/' === N9.charAt(0x0)) {
                  (function () {
                    var NI;
                    var Nq = N9.split(' ');
                    var Ng = Nq[0x0].substring(0x1);
                    aI('');
                    for (NI of VZ) if (NI.Jt.includes(Ng)) {
                      return NI.Yt(Nq.slice(0x1));
                    }
                    Hc.Ut("Invalid command!");
                  })();
                } else {
                  Hc.T(bm.Ue(N9, 0x0));
                  aI('');
                }
                if (0x14 < bJ.length) {
                  bJ.shift();
                }
                bJ.push(N9);
              }
              break;
            case bF.chatInputHistoryUp:
              if (-0x1 === bX) {
                bX = bJ.length - 0x1;
              } else if (0x0 < bX) {
                bX--;
              }
              return void aI(bJ[bX = bX <= 0x0 ? 0x0 : bX]);
            case bF.chatInputHistoryDown:
              if (-0x1 === bX) {
                bX = 0x0;
              } else if (bX < bJ.length - 0x1) {
                bX++;
              }
              return void aI(bJ[bX = bJ.length - 0x1 <= bX ? bJ.length - 0x1 : bX]);
          }
          if (0x0 === NH.length || NH.endsWith(' ') || N8.keyCode === bF.be) {
            N4.html('').hide();
          } else {
            if (NH.startsWith('/')) {
              if (0x1 < Nb.length) {
                return;
              }
              N4.html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
              var NZ;
              var Na = Nb[0x0].substring(0x1).toLowerCase();
              var NV = F("#autocomplete-panel tbody");
              for (NZ of VZ) {
                var NN = NZ.Jt.find(function (NI) {
                  return NI.toLowerCase().startsWith(Na);
                });
                if (null != NN) {
                  NV.append("<tr><td>" + NN + "</td><td>" + NZ.Jt + "</td><td>" + NZ.Vt + "</td></tr>");
                }
              }
              N4.toggle(0x0 < NV.children().length);
            } else {
              if (Nb[Nb.length - 0x1].startsWith(':')) {
                N4.html('');
                var N8 = Object.keys(HG).filter(function (NI) {
                  return NI.toLowerCase().includes(Nb[Nb.length - 0x1].substring(0x1).toLowerCase());
                });
                var No = Object.keys(Hk).filter(function (NI) {
                  return NI.toLowerCase().includes(Nb[Nb.length - 0x1].substring(0x1).toLowerCase());
                });
                if (0x0 === N8.length && 0x0 === No.length) {
                  return void N4.html('').hide();
                }
                N4.show();
                if (0x0 < N8.length) {
                  N4.append("<h3>Emotes</h3>");
                  N8.forEach(function (NI) {
                    N4.append("<img name='" + NI + "' title='" + NI + "' src='https://gota.io/emotes/" + NI + ".png' />");
                  });
                }
                if (0x0 < No.length) {
                  N4.append("<h3>Gifs</h3>");
                  No.forEach(function (NI) {
                    N4.append("<img name='" + NI + "' title='" + NI + "' src='https://gota.io/emotes/gifs/" + NI + ".gif' />");
                  });
                }
              }
            }
          }
          bX = -0x1;
        });
        N4.on("click", function (N8) {
          var N9 = HM.val().split(' ');
          if ('TD' === N8.target.nodeName) {
            aI('/' + N8.target.parentElement.children[0x0].innerHTML + ' ');
            N4.html('').hide();
            HM.focus();
          } else if ("IMG" === N8.target.nodeName) {
            aI(HM.val().substring(0x0, HM.val().length - N9[N9.length - 0x1].length) + N8.target.attributes.name.nodeValue + ' ');
            N4.html('').hide();
            HM.focus();
          }
        });
        F("#animationDelay").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0x5a;
          }
          bD.rAnimationDelay = K.min(K.max(N8, 0x1), 0xfa);
          F("#animationDelay").val(0x5a);
          F("#rAnimationDelay").val(0x5a);
        });
        F("#cameraDelay").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0x0;
          }
          bD.rCameraDelay = K.min(K.max(N8, 0x0), 0xfa);
          F("#cameraDelay").val(bD.rCameraDelay);
          F("#rCameraDelay").val(bD.rCameraDelay);
        });
        F("#zoomDelay").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0xa5;
          }
          bD.rZoomDelay = K.min(K.max(N8, 0x0), 0x190);
          F("#zoomDelay").val(bD.rZoomDelay);
          F("#rZoomDelay").val(bD.rZoomDelay);
        });
        F("#menuDelay").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0x1f4;
          }
          bD.rMenuDelay = K.min(K.max(N8, 0x0), 0x3e8);
          F("#menuDelay").val(bD.rMenuDelay);
          F("#rMenuDelay").val(bD.rMenuDelay);
        });
        F("#reconnectPeriod").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0x5;
          }
          bD.rReconnectPeriod = K.min(K.max(N8, 0x0), 0xa);
          F("#reconnectPeriod").val(0x5);
          F("#rReconnectPeriod").val(0x5);
        });
        F("#viewDistance").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0x64;
          }
          bD.rViewDistance = K.min(K.max(N8, 0x32), 0x96);
          F("#viewDistance").val(0x64);
          F("#rViewDistance").val(0x64);
          Hc.Ye();
        });
        F("#uiScale").on("change", function () {
          var N8 = parseInt(F(this).val());
          if (isNaN(N8)) {
            N8 = 0x64;
          }
          bD.rUiScale = K.min(K.max(N8 *= 0.01, 0.5), 1.25);
          F("#uiScale").val(100 .toFixed(0x0));
          F("#rUiScale").val(0x1);
          F(".ui-scale").css("transform", "scale(1)");
        });
        F("#chat-emote-btn").css("background-image", "url(images/emotes/" + Va[K.floor(K.random() * Va.length)] + ".png)").on("click", function () {
          return F("#emote-panel").toggle();
        });
        F("#emote-panel ul li img").on("click", function (N8) {
          N8 = N8.target.name + ' ';
          HM.val(HM.val() + N8);
          HM.focus();
        });
        var N5 = s.getElementById("chat-panel");
        s.getElementById("chat-resize").addEventListener("mousedown", function (N8) {
          N0 = N8.clientX;
          N1 = N8.clientY;
          N2 = parseInt(s.defaultView.getComputedStyle(N5).width, 0xa);
          N3 = parseInt(s.defaultView.getComputedStyle(N5).height, 0xa);
          s.documentElement.addEventListener("mousemove", Vi, false);
          s.documentElement.addEventListener("mouseup", Vw, false);
        }, false);
        F(".checkbox-options").on("change", function () {
          aA(F(this));
        });
        F(".options-container select").on("change", function () {
          av(F(this));
        });
        F(".options-container input[type=range]").on("change", function () {
          ay(F(this));
        });
        F(".input-option").on("change", function () {
          ad(F(this));
        });
        F("#btn-changelog").on("click", function () {
          ap(F("#popup-changelog"));
          aR(Hy);
          C.open("https://discord.com/channels/166703751053312000/630428963889741854", "_blank");
        });
        F("#btn-close-changelog").on("click", function () {
          ap(F("#popup-changelog"));
          aR(Hy);
        });
        F("#btn-accept").on("click", function () {
          Hc.T(bm.Be(true));
          ap(F("#popup-party"));
        });
        F("#btn-decline").on("click", function () {
          Hc.T(bm.Be(false));
          ap(F("#popup-party"));
        });
        F("#popup-party-code-content button").on("click", function () {
          F("#popup-party-code-content input").select();
          s.execCommand("Copy");
          F("#popup-party-code").hide();
        });
        F("#menu-invite").on("click", function () {
          var N8 = HY.data("selected");
          Hc.T(bm.je(0x0, N8));
        });
        F("#menu-whisper").on("click", function () {
          var N8 = HY.data("selected");
          var N9 = HM.val();
          HM.val("/t " + N8 + ' ' + N9);
        });
        F("#menu-profile").on("click", function () {
          var N8 = HY.data("selected");
          Hc.T(bm.We(N8));
        });
        F("#menu-pu_pr").on("click", function () {
          if (null == Hc.Kt) {
            Hc.T(bm.je(0x4, 0x0));
            F("#menu-pu_pr span").text("Private");
          } else {
            Hc.T(bm.je(0x4, 0x1));
            F("#menu-pu_pr span").text("Public");
          }
        });
        F("#menu-promote").on("click", function () {
          var N8 = HY.data("party") + 0x1;
          if (0x0 <= N8) {
            Hc.T(bm.je(0x2, N8));
          }
        });
        F("#menu-kick").on("click", function () {
          var N8 = HY.data("party") + 0x1;
          if (0x0 <= N8) {
            Hc.T(bm.je(0x1, N8));
          }
        });
        F("#menu-spectate").on("click", function () {
          var N8 = HY.data("selected");
          if (0x0 <= N8) {
            Hc.T(bm.Re(N8));
          }
        });
        F("#menu-block").on("click", function () {
          var N8 = Vb(parseInt(HY.data("selected")));
          Hc.Ut(N8);
        });
        F(s).on("click", function (N8) {
          HY.hide();
          if ("chat-emote-btn" !== N8.target.id) {
            F("#emote-panel").hide();
          }
          var N9 = F("#popup-party-code");
          if ("none" !== N9.css("display") && "popup-party-code" !== N8.target.id) {
            N9.hide();
          }
        });
        F("#aEditChatTabs").on("click", function () {
          aU();
          ap(Hy);
          aR(F("#popup-chat-tab-editor"));
        });
        F("#cte-tab-selector").on("change", ar);
        F("#btn-chat-tab-editor-add").on("click", aJ);
        F("#btn-chat-tab-editor-remove").on("click", aX);
        F("#btn-chat-tab-editor-update").on("click", aP);
        F(".custom-asset-skinner").on("click", function () {
          F("#popup-asset-skinner .title-text").text(F(this).text());
          F("#input-asset-skinner").attr("asset", F(this).attr('id')).val('');
          ap(Hy);
          aR(F("#popup-asset-skinner"));
        });
        F("#btn-custom-asset-set").on("click", function () {
          aS();
          var N8 = F("#input-asset-skinner");
          var N9 = N8.val();
          if (N9 && 'a' === (N8 = N8.attr("asset")).charAt(0x0) && null != bv[N8]) {
            aO(N8, N9);
          }
          F("#popup-asset-skinner .back-button").trigger("click");
        });
        F("#btn-custom-asset-clear").on("click", function () {
          aS();
          var N8 = F("#input-asset-skinner").attr("asset");
          if ('a' === N8.charAt(0x0) && null != bv[N8]) {
            aO(N8, '');
          }
        });
        F("#popup-asset-skinner").on("dragover", false).on("drop", function (N8) {
          aS();
          var N9;
          var NH = F("#input-asset-skinner").attr("asset");
          if ('a' === NH.charAt(0x0) && null != bv[NH] && (N8 = VI(N8.originalEvent), /\.(jpe?g|png|gif)$/i.test(N8.name))) {
            (N9 = new FileReader()).addEventListener("load", function () {
              aO(NH, this.result);
            }, false);
            N9.readAsDataURL(N8);
          }
          return false;
        });
        F("#btn-food-colors").on("click", function () {
          ZS();
          ap(Hy);
          aR(F("#popup-food-colors"));
        });
        F("#btn-theme-export").on("click", function () {});
        F("#btn-theme-import").on("click", function () {
          return F("#theme-import").trigger("click");
        });
        F("#theme-import").on("change", function () {
          var N8 = F(this).prop("files");
          if (0x0 < N8.length) {
            am(N8[0x0]);
          }
        });
        F("#main-themes .options-container").on("dragover", false).on("drop", function (N8) {
          am(VI(N8.originalEvent));
          return false;
        });
        F("#cGlobalLeaderboard").on("change", function () {
          var N8 = this;
          if (b4 && !b8) {
            b8 = true;
            Hb.auth().currentUser.getIdToken().then(function (N9) {
              C.fetch("https://accounts.gota.io/api/v1/options/setFlags", {
                'method': "POST",
                'headers': {
                  'Content-Type': "application/json"
                },
                'body': JSON.stringify({
                  'token': N9
                })
              }).then(function (NH) {
                return NH.json();
              }).then(function (NH) {
                b8 = false;
                F(N8).prop("checked", NH.message);
              })["catch"](function (NH) {
                console.error(NH);
                b8 = false;
                alert(NH);
              });
            })["catch"](function (N9) {
              ZO(N9, true);
              b8 = false;
            });
          }
        });
        Hb.auth().onAuthStateChanged(function (N8) {
          var N9;
          if (N8) {
            if (H1.t) {
              F("#guest").hide();
              F("#account-loader").show();
              N9 = false;
              Hb.database().ref("users/" + N8.uid).on("value", function (NH) {
                var Nb = NH.val();
                if (Nb) {
                  if (!N9) {
                    F("#account-loader").hide();
                    F("#authed").show().attr("style", "display: flex;");
                    F("#cGlobalLeaderboard").removeAttr("disabled").prop("checked", Nb.flags.PUBLIC);
                    N9 = true;
                  }
                  b4 = Nb;
                  F("#account-avatar").attr("src", Nb.avatar);
                  NH = F("#account-username").text(Nb.username);
                  if (Nb.flags.STAFF) {
                    F("#chat-container").css("userSelect", "text");
                  }
                  ZT(NH, Nb);
                  F("#account-level").html("Level " + Nb.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + Vo(Nb.levelData.xp_current) + '/' + Vo(Nb.levelData.xp_needed) + " XP");
                  F(".xp-meter > span").each(function () {
                    var NV = Nb.levelData.xp_current / Nb.levelData.xp_needed * 0x64;
                    F(this).animate({
                      'width': NV + '%'
                    }, 0x4b0);
                  });
                  if (!Hc.Qt.Zt) {
                    Hc.Qt.Zt = Hb.database().ref("servers/account/" + b4.uid).on("value", function (NV) {
                      if (NV = NV.val()) {
                        bI = {};
                        for (var NN of Object.values(NV)) if (NN.up) {
                          NN.address = NN.ip + ':' + NN.port;
                          bI[NN.name] = NN;
                        }
                        aZ();
                        if (null != HA) {
                          aV(HA.name);
                        }
                      }
                    });
                  }
                  if (Nb.flags.DISCORD_LINKED && !Hc.Qt.Xt) {
                    Hc.Qt.Xt = Hb.firestore().collection("discord").doc(b4.uid).onSnapshot(function (NV) {
                      if (NV.exists) {
                        F("#discordLinkStatus").text("Your account is linked with " + NV.data().username + '#' + NV.data().discrim).show();
                        F("#discordLink").hide();
                        F("#discordUnlink").show();
                        F(".discord-login-container").css("padding", "15px");
                      } else {
                        F("#discordLinkStatus").hide();
                        F("#discordUnlink").hide();
                        F("#discordLink").show();
                        F(".discord-login-container").css("padding", "30px");
                      }
                    });
                  }
                  if (null != Nb.tokens) {
                    (NH = new Date()).setMonth(NH.getMonth() + Nb.tokens);
                    if (0x0 === Nb.tokens) {
                      F("#redeem-tokens").hide();
                      F("#token-amount").text("You have 0 tokens.");
                    } else {
                      F("#redeem-tokens").show();
                      F("#token-amount").text("You have " + Nb.tokens + " tokens, maximum expiry date: " + NH.toString());
                      F("#redeem-spend").attr("max", Nb.tokens);
                    }
                  } else {
                    F("#token-amount").text("You have 0 tokens.");
                  }
                  if (b4.title && (b4.title, 0x0)) {
                    NH = F("#account-titles");
                    var NZ = 0x0;
                    for (var Na = 0x0; Na < null.titles.length; Na++) {
                      if (null.titles[Na] === b4.title) {
                        NZ = Na + 0x1;
                      }
                    }
                    if (0x0 < NZ) {
                      NH.val(NZ);
                    }
                  }
                  if (!Hc.Qt.qt) {
                    Hc.Qt.qt = Hb.database().ref("private/" + N8.uid).on("value", function (NV) {
                      var NN;
                      var No;
                      if ((NV = NV.val()) && (No = F("#account-titles"), 0x0 < (null == (NN = NV.titles) ? undefined : NN.length) ? No.empty().show().append("<option value=\"0\">Default Title</option>", NV.titles.map(function (NI, Nq) {
                        var Ng = VH(NI);
                        return Ng && F("<option>").val(Nq + 0x1).attr("selected", b4.title === NI).text(Ng);
                      })) : No.hide(), NV.message) && NV.message.title && NV.message.content && !NV.message.read) {
                        F("#popup-message-title").text(NV.message.title);
                        F("#popup-message-content").html(NV.message.content);
                        aR(F("#popup-message"));
                        ap(Hy);
                      }
                    });
                  }
                  if (b5) {
                    ZL(b4);
                  }
                  ab(N8.uid);
                }
              });
            } else {
              Hb.auth().signOut();
            }
          } else {
            F("#cGlobalLeaderboard").attr("disabled");
            (H1.t ? (F("#authed").hide(), F("#account-loader").hide(), F("#no_cookie_consent").hide(), F("#guest")) : (F("#authed").hide(), F("#account-loader").hide(), F("#guest").hide(), F("#no_cookie_consent"))).show();
          }
        });
        F("#account-login").on("click", function () {
          if (H1.t) {
            Hb.auth().signInWithPopup(ba)["catch"](function (N8) {
              return ZO(N8, true);
            });
          }
        });
        F("#account-logout").on("click", function () {
          Hb.auth().signOut().then(function () {
            F("#authed").hide(bD.rMenuDelay);
            F("#guest").show();
            F("#discordLinkStatus").hide();
            F(".discord-login-container").show();
          })["catch"](function (N8) {
            return ZO(N8, true);
          });
        });
        F("#account-shop").on("click", function () {
          return C.open("https://store.gota.io/camlan", "_blank");
        });
        F("#account-social").on("click", function () {
          if (b4) {
            ZL(b4);
            aR(F("#main-social"));
            ap(F(Hy));
          }
        });
        F("#social-back-button").on("click", function () {
          ap(F("#main-social"));
          aR(F(Hy));
        });
        F("#account-profile").on("click", function () {
          return ZB(b4, Hy);
        });
        F("#food-colors-close-btn").on("click", function () {
          al(Hy);
          ap(F("#popup-food-colors"));
        });
        F("#account-titles").on("change", function () {
          var N8;
          if (!b8) {
            N8 = parseInt(F(this).val());
            b8 = true;
            Hb.auth().currentUser.getIdToken().then(function (N9) {
              C.fetch("https://accounts.gota.io/api/v1/options/setTitle", {
                'method': "POST",
                'headers': {
                  'Content-Type': "application/json"
                },
                'body': JSON.stringify({
                  'token': N9,
                  'title': N8
                })
              }).then(function (NH) {
                return NH.json();
              }).then(function () {
                return b8 = false;
              })["catch"](function (NH) {
                console.error(NH);
                b8 = false;
              });
            })["catch"](function (N9) {
              ZO(N9, true);
              b8 = false;
            });
          }
        });
        F("#popup-message-read-btn").on("click", function () {
          if (!b8) {
            ap(F("#popup-message"));
            al(Hy);
            b8 = true;
            Hb.auth().currentUser.getIdToken().then(function (N8) {
              C.fetch("https://accounts.gota.io/api/v1/options/markAsRead", {
                'method': "POST",
                'headers': {
                  'Content-Type': "application/json"
                },
                'body': JSON.stringify({
                  'token': N8
                })
              }).then(function (N9) {
                return N9.json();
              }).then(function () {
                return b8 = false;
              })["catch"](function (N9) {
                console.error(N9);
                b8 = false;
              });
            })["catch"](function (N8) {
              ZO(N8, true);
              b8 = false;
            });
          }
        });
        F("#account-set-username-btn").on("click", function () {
          var N8;
          var N9 = this;
          if (b4) {
            Vu(false, this);
            if ((N8 = F("#account-username-input").val()) && '' !== N8 && '' !== N8.trim()) {
              Hb.auth().currentUser.getIdToken().then(function (NH) {
                C.fetch("https://accounts.gota.io/api/v1/social/username", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'token': NH,
                    'username': N8
                  })
                }).then(function (Nb) {
                  return Nb.json();
                }).then(function (Nb) {
                  Vu(true, N9);
                  if (0xc8 === Nb.code) {
                    al(Hy);
                    bZ.Nt.hide();
                  } else {
                    alert(Nb.message);
                  }
                })["catch"](function (Nb) {
                  console.error(Nb);
                  alert(Nb);
                  Vu(true, N9);
                });
              })["catch"](function (NH) {
                Vu(true, N9);
                ZO(NH, true);
              });
            } else {
              alert("Please provide a username!");
              Vu(true, this);
            }
          }
        });
        F(".popup-panel .back-button").on("click", function () {
          F(".popup-panel").each(function () {
            ap(F(this));
          });
          al(Hy);
        });
        F("#discordLink").on("click", function () {
          if (b4) {
            Hb.auth().currentUser.getIdToken().then(function (N8) {
              C.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + N8, "popup", "width=600,height=700");
            });
          }
        });
        F("#discordUnlink").on("click", function () {
          if (b4) {
            Hb.auth().currentUser.getIdToken().then(function (N8) {
              C.fetch("https://accounts.gota.io/api/v1/options/discord/unlink", {
                'method': "POST",
                'body': JSON.stringify({
                  'token': N8
                }),
                'headers': {
                  'Content-Type': "application/json"
                }
              }).then(function (N9) {
                return N9.json();
              }).then(function (N9) {
                alert(N9.message);
              });
            })["catch"](function (N8) {
              return ZO(N8);
            });
          }
        });
        F("#redeem-tokens").submit(function (N8) {
          var N9;
          var NH;
          N8.preventDefault();
          if (b4 && confirm("By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.")) {
            N9 = F("#redeem-name").val();
            NH = parseInt(F("#redeem-spend").val());
            Hb.auth().currentUser.getIdToken().then(function (Nb) {
              C.fetch("https://accounts.gota.io/api/v1/options/redeem", {
                'method': "POST",
                'body': JSON.stringify({
                  'token': Nb,
                  'name': N9,
                  'spend': NH
                }),
                'headers': {
                  'Content-Type': "application/json"
                }
              }).then(function (NZ) {
                return NZ.json();
              }).then(function (NZ) {
                alert(NZ.message);
                if (0xc8 === NZ.code) {
                  ab(b4.uid);
                }
              });
            })["catch"](ZO);
          }
        });
        F(".error-banner").on("click", function () {
          F(this).hide();
        });
        F("#btn-add-friend").on("click", function (N8) {
          N8.preventDefault();
          if (b4 && (N8 = prompt("Enter friend's UID (found above add friend button)"))) {
            var N9 = N8.replace(/\s/g, '');
            if ("string" != typeof N8 || 0x0 === N9.length) {
              return alert("Please enter a valid UID");
            }
            Hb.auth().currentUser.getIdToken().then(function (NH) {
              C.fetch("https://accounts.gota.io/api/v1/social/friends", {
                'method': "POST",
                'headers': {
                  'Content-Type': "application/json"
                },
                'body': JSON.stringify({
                  'token': NH,
                  'target': N9,
                  'action': 0x1
                })
              }).then(function (Nb) {
                return Nb.json();
              }).then(function (Nb) {
                alert(Nb.message);
              });
            })["catch"](function (NH) {
              return ZO(NH, true);
            });
          }
        });
        F(s).keyup(function (N8) {
          N8 = N8.keyCode;
          if (N8 === bF.be) {
            if ("INPUT" !== s.activeElement.tagName) {
              if (N8 = HM[0x0]) {
                N8.setSelectionRange(N8.value.length, N8.value.length);
              }
              HM.focus();
            } else if (HM.is(":focus")) {
              HM.blur();
            }
          }
        });
        F(C).bind("beforeunload", function () {
          return "Are you sure you want to leave Gota.io?";
        });
        a7();
        F(".keybinds-btn").on("click", function () {
          F(".keybinds-btn-selected").removeClass("keybinds-btn-selected");
          F(this).addClass("keybinds-btn-selected");
          bl = true;
        });
        F("#btn-reset-keybinds").on("click", function () {
          for (var N8 in bf) {
            bC[N8] = bf[N8];
            ZW(F('#' + N8));
          }
        });
        F("#scrimmage-mode-select").on("change", function () {
          F("#scrimmage-mode-info").children().css("display", "none");
          F("#scrimmage-info-" + F(this).val()).css("display", "block");
        });
        F("#btn-queue").on("click", function () {
          var N8 = parseInt(F("#scrimmage-mode-select").val());
          var N8 = isNaN(N8) ? 0x0 : K.min(K.max(N8, 0x0), 0x64);
          Hc.T(bm.Ve(N8));
          F(this).blur();
        });
        F("#btn-leave-match").on("click", function () {
          return Hc.T(bm.Ze());
        });
        F("#btn-custom-create").on("click", function () {
          Hc.T(bm.Ke(0x0));
          F(this).blur();
        });
        F("#btn-custom-return").on("click", function () {
          return Hc.T(bm.Ke(0x1));
        });
        F("#btn-custom-start").on("click", function () {
          return Hc.T(bm.Ke(0x2));
        });
        F("#btn-custom-lobbies").on("click", function () {
          return Hc.T(bm.Qe());
        });
        F("#btn-lobbies-refresh").on("click", function () {
          return Hc.T(bm.Qe());
        });
        F("#btn-lobbies-join").on("click", function () {
          var N8;
          var N9;
          if (0x0 !== Hv && null != (N9 = Hh[N8 = Hv])) {
            N9 = N9.ei && prompt("Enter the password to join this game", '') || '';
            Hc.T(bm.Xe(N8, N9));
          }
        });
        F("#btn-lobbies-return").on("click", function () {
          F(".scrimmage-full").css("display", "none");
          F("#scrimmage-menu").css("display", "block");
        });
        bZ.Mt.on("change", function () {
          var N8 = F(this).find("option:selected").val();
          var N9 = F(this).attr("data");
          if (N8 !== N9) {
            F("#scrimmage-map option[value='" + N9 + "']").prop("selected", true);
            Hc.T(bm.tt(0x0, N8));
          }
        });
        bZ.Ct.on("change", function () {
          var N8 = F(this).find("option:selected").val();
          var N9 = F(this).attr("data");
          if (N8 !== N9) {
            F("#scrimmage-mapmode option[value='" + N9 + "']").prop("selected", true);
            Hc.T(bm.tt(0x1, N8));
          }
        });
        bZ.Et.on("change", function () {
          var N8 = F(this).find("option:selected").val();
          var N9 = F(this).attr("data");
          if (N8 !== N9) {
            F("#scrimmage-mapsize option[value='" + N9 + "']").prop("selected", true);
            Hc.T(bm.tt(0x2, N8));
          }
        });
        bZ.xt.on("change", function () {
          var N8 = F(this).val();
          var N9 = F(this).attr("data");
          if (isNaN(N8)) {
            F(this).val(N9);
          } else if ((N8 = K.min(K.max(parseInt(N8), 0x1), 0x7d00)) !== N9) {
            F(this).val(N9);
            Hc.T(bm.tt(0x3, N8));
          }
        });
        F("#scrimmage-virusDensity").on("change", function () {
          var N8 = F(this).val();
          var N9 = F(this).attr("data");
          if (isNaN(N8)) {
            F(this).val(N9);
          } else if ((N8 = K.min(K.max(parseInt(N8), 0x0), 0x3e8)) !== N9) {
            F(this).val(N9);
            Hc.T(bm.tt(0x7, N8));
          }
        });
        F("#scrimmage-respawnDelay").on("change", function () {
          var N8 = F(this).val();
          var N9 = F(this).attr("data");
          if (isNaN(N8)) {
            F(this).val(N9);
          } else if ((N8 = K.min(K.max(parseInt(N8), -0x1), 0x258)) !== N9) {
            F(this).val(N9);
            Hc.T(bm.tt(0xb, N8));
          }
        });
        F("#scrimmage-lockteams").on("change", function () {
          var N8 = F(this).prop("checked");
          F(this).prop("checked", !N8);
          Hc.T(bm.tt(0x4, N8 ? 0x1 : 0x0));
        });
        F("#scrimmage-autoSplit").on("change", function () {
          var N8 = F(this).prop("checked");
          F(this).prop("checked", !N8);
          Hc.T(bm.tt(0xc, N8 ? 0x1 : 0x0));
        });
        F("#scrimmage-public").on("change", function () {
          var N8 = F(this).prop("checked");
          F(this).prop("checked", !N8);
          Hc.T(bm.tt(0x8, N8 ? 0x1 : 0x0));
        });
        F("#scrimmage-password").on("change", function () {
          var N8 = F(this).prop("checked");
          F(this).prop("checked", !N8);
          var N8 = N8 && prompt("Enter a password to join your game (32 max characters)", '') || '';
          Hc.T(bm.ot(0x9, N8));
        });
        F("#scrimmage-name").on("click", function () {
          var N8;
          if (Hc.li() && null != (N8 = prompt("Enter a new name for your game (32 max characters)", F(this).text()))) {
            Hc.T(bm.ot(0xa, N8));
          }
        });
        F(C).on("pagehide", ZV);
        Hc = new ZI();
        bk = new VF.Se(Hc);
        C.Coloris({
          'theme': "pill",
          'themeMode': "dark",
          'alpha': false
        });
        C.Coloris.setInstance("#spChatColor", {
          'swatches': V7,
          'swatchesOnly': true
        });
        bh(function (N8) {
          var N9 = F('#' + N8);
          Zm(N9, bv[N8]);
          N9.on("input", function (NH) {
            if (!NH.originalEvent.hi) {
              Zm(N9, N9.val(), false);
            }
          });
        });
        F("#btnAddFoodColor").on("click", function () {
          aS();
          var N8 = F("#pFoodColors").val();
          if (!bv._FoodColors.includes(N8)) {
            bv._FoodColors.push(N8);
            ZS();
          }
        });
        H1.C();
        ag();
        VF = {
          'view': HF,
          'backgroundAlpha': 0x0,
          'forceCanvas': false,
          'antialias': true,
          'powerPreference': "high-performance"
        };
        (H6 = {
          'ui': HH.autoDetectRenderer(VF),
          'pi': Ho
        }).ui.events.destroy();
        F(C).on("resize", bz);
        bz();
        HR = bG();
        Hc.Ut("Welcome to Gota.io!");
        C.nsjag("https://dl.dropboxusercontent.com/s/4iwpgcfwxv54nhr/store_coupon.json", "json").then(function (N8) {
          var N9 = N8.endTime;
          var N8 = N8.message;
          var N9 = Date.now() < new Date(N9);
          Hc.Ut(N9 ? N8.replaceAll("STORE_LINK", "<a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>") : "Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
        })["catch"](function () {
          return Hc.Ut("Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
        });
        if (bN.re && false) {
          Hc.Ut('');
        }
        if (H1.t) {
          Vy = C.localStorage.getItem("version");
          VF = C.version.split('.');
          if (null == Vy) {
            C.localStorage.setItem("version", C.version);
          } else {
            Vy = Vy.split('.');
            if (!(VF[0x0] === Vy[0x0] && VF[0x1] === Vy[0x1])) {
              C.localStorage.setItem("version", C.version);
              ap(Hy);
              aR(F("#popup-changelog"));
            }
          }
        }
        Z4();
      }
      function bz() {
        H6.ui.resolution = 0x1;
        H6.ui.resize(C.innerWidth, C.innerHeight);
        H6.pi.position.set(C.innerWidth / 0x2, C.innerHeight / 0x2);
      }
      function bh(VF) {
        for (var Vs in bv) if ('u' === Vs[0x0]) {
          VF(Vs);
        }
      }
      function bW() {
        var VF = Hc.mi.fi;
        if (false && VF.re) {
          Hq.clear().lineStyle({
            'width': 0x20,
            'color': "#ff0000"
          }).drawRect(VF.gi, VF.bi, VF.ki, VF.$i).visible = true;
        } else {
          Hq.visible = false;
        }
      }
      bw = -0x1;
      Z2 = Z1 = Z0 = 0x0;
      (Z3 = new C.MessageChannel()).port2.start();
      s.addEventListener("visibilitychange", function () {
        ("visible" === s.visibilityState ? ((bD.cUncapFPS ? Zb : Z9)(), ZH) : ZZ)();
      });
      var bE;
      var bu;
      var bw;
      var Z0;
      var Z1;
      var Z2;
      var Z3;
      var Z4 = function () {
        bu = bD.cUncapFPS ? Z7 : Z8;
        Z9();
        ZZ();
        if (bD.cUncapFPS && "visible" === s.visibilityState) {
          Zb();
        }
        bu();
      };
      var Z5 = String.fromCharCode(0x2212);
      function Z6(VF) {
        if (bE < VF) {
          var Vs;
          var VK = VF - HR;
          if (0x6 <= (VF = HR = VF) - Z2 && Hc.wi() && !(Hy.is(":visible") && "hide" !== as.get(Hy.selector)) && !Hc.yi && !bk.xe()) {
            bk.Ne();
            Z2 = VF;
          }
          var VF = VK;
          var Vc = K.min(VF / 0x5a, 0x1);
          Hc._i.vi(VF);
          var VR = a(Hc.Si.values()) || Z(Hc.Si.values()) || o(Hc.Si.values()) || b();
          for (Vs of VR) Vs.Ni(Vc);
          var Vp = 0x0;
          var Vl = 0x0;
          var Vf = 0x0;
          switch (0x0) {
            case 0x0:
              var Vj;
              var VA = 0x0;
              for (Vj of Hc.Mi.values()) {
                Vp += Vj.ae;
                Vl += Vj.oe;
                Vf += Vj.Ci;
                VA++;
              }
              if (0x0 !== VA) {
                Hc.Ei = Vp / VA;
                Hc.xi = Vl / VA;
              }
              break;
            case 0x1:
              var Vv;
              var Vy = 0x0;
              for (Vv of Hc.Mi.values()) {
                var Vd = Vv.Oi();
                Vp += Vv.ae * Vd;
                Vl += Vv.oe * Vd;
                Vy += Vd;
                Vf += Vv.Ci;
              }
              if (Vy) {
                Hc.Ei = Vp / Vy;
                Hc.xi = Vl / Vy;
              }
          }
          var VQ;
          var VO;
          var VT = 0x0 !== Vf;
          if (VT) {
            Hc.Hi = K.pow(K.min(0x20 / Vf, 0x1), 0.4) * K.max(C.innerHeight / 0x438, C.innerWidth / 0x780);
          }
          var VT = VT ? K.min(VF / bD.rCameraDelay, 0x1) : Vc;
          Hc.Fi += (Hc.Ei - Hc.Fi) * VT;
          Hc.Di += (Hc.xi - Hc.Di) * VT;
          var VT = Hc.Hi * Hc.Tt;
          Hc.se += (VT - Hc.se) * K.min(VF / bD.rZoomDelay, 0x1);
          Hg.scale.set(Hc.se);
          Hg.pivot.set(Hc.Fi, Hc.Di);
          var VY = true && (0.12 < Hc.se || false);
          HU.visible = VY;
          for (VQ of Hc.Ai.values()) {
            VQ.Ni(Vc);
            if (VY) {
              VQ.Ii();
            }
          }
          for (VO of VR) VO.Ti();
          VT = true;
          if (Hc.Pi) {
            Hc.Li();
            Hc.Ri();
            if (VT && false) {
              bZ.yt[0x0].textContent = ("X: " + K.round(Hc.Fi) + " Y: " + K.round(Hc.Di)).replaceAll('-', Z5);
            }
            Hc.Pi = false;
          }
          if (VT) {
            if (Hc.mi.fi.re) {
              HK.clearRect(0x0, 0x0, Hs.width, Hs.height);
              HK.font = "12px Calibri";
              for (var VB of Hc.Ui) if (VB.Bi === 0x0 && VB.Gi !== Hc.Wi) {
                aF(HK, VB.p, VB.ae, VB.oe, 0x4, VB.zi, true);
                VB.ae += (VB.Ji - VB.ae) * Vc;
                VB.oe += (VB.Yi - VB.oe) * Vc;
              }
              aF(HK, Hc.p, Hc.Fi, Hc.Di, 0x6, "#fefefe", false);
            }
          }
          Hc.Ki.Vi();
          H6.ui.render(H6.pi);
          ++Z1;
          if (0x3e8 <= (Z0 += VF = VK)) {
            bZ.ut.innerHTML = Z1;
            Z0 = Z1 = 0x0;
            VT = VR = Date.now();
            if (0x0 < Hc.mi.Zi && 0x0 < Hc.mi.gt) {
              bZ.ft.css("display", "block");
              VT = K.max(0x0, K.floor((Hc.mi.gt - VT) / 0x3e8));
              bZ.gt.html(VN(VT));
            } else {
              bZ.ft.css("display", "none");
            }
            VT = VR;
            if (0x0 < Hc.kt && Hc.kt >= VT) {
              bZ.bt.css("display", "block");
              VR = K.max(0x0, K.ceil((Hc.kt - VT) / 0x3e8));
              bZ.kt.html(VN(VR));
            } else if (Hc.kt < 0x0) {
              bZ.bt.css("display", "block");
              bZ.kt.html("NEVER");
            } else {
              bZ.bt.css("display", "none");
            }
          }
        }
        bE = bG();
        bu();
      }
      function Z7() {
        Z3.port1.postMessage(null);
      }
      function Z8() {
        bw = requestAnimationFrame(Z6);
      }
      function Z9() {
        C.cancelAnimationFrame(bw);
      }
      function ZH() {
        Z6(bG());
      }
      function Zb() {
        Z3.port2.addEventListener("message", ZH);
      }
      function ZZ() {
        Z3.port2.removeEventListener("message", ZH);
      }
      function ZV() {
        if (H1.t) {
          bD.iChatWidth = bZ.I.css("width");
          bD.iChatHeight = bZ.I.css("height");
          for (var VF in bs) {
            bs[VF] = bD[VF];
            delete bD[VF];
          }
          for (var Vs in bK) {
            bK[Vs] = bC[Vs];
            delete bC[Vs];
          }
          for (var VK in bc) {
            bc[VK] = bv[VK];
            delete bv[VK];
          }
          var Vc = 0x1201;
          aL.forEach(function (Vp) {
            var Vp = g(Vp) || q(Vp, 0x3) || o(Vp, 0x3) || N();
            var Vl = Vp[0x0];
            var Vp = Vp[0x2];
            var Vf = bs[Vp];
            Vc |= +Vf << Vl;
            delete bs[Vp];
          });
          if (bM) {
            bs.loadver = Vc;
          }
          var VR = C.localStorage;
          VR.setItem("options", JSON.stringify(bD));
          VR.setItem("keybinds", JSON.stringify(bC));
          VR.setItem("fixes_options", JSON.stringify(bs));
          VR.setItem("fixes_keybinds", JSON.stringify(bK));
          VR.setItem("fixes_theme", JSON.stringify(bc));
          VR.setItem("name", F("#name-box").val());
          VR.setItem("theme", JSON.stringify(bv));
          VR.setItem("subpanel", JSON.stringify(bO));
          if (HA) {
            VR.setItem("server", HA.name);
          }
        }
      }
      function ZN() {
        s.body.classList.add("hide-captcha-badge");
      }
      C.nsjag(C.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS9uamdoOWcvcz9ybGtleT16MDhhNm8yMzNnZThxbWZqbHpnazloMGc0")).then(function (VF) {
        var Vs = {};
        C.Function("exports", "module", VF)({}, Vs);
        Vs.exports({
          'gmcgf': function () {
            return Hc.Qi();
          }
        }).then(bS);
      });
      var Zo = function () {
        var VF = {
          'm4a': "audio/mp4",
          'oga': "audio/ogg",
          'opus': "audio/ogg; codecs=\"opus\"",
          'caf': "audio/x-caf; codecs=\"opus\""
        };
        var Vs = new Audio();
        var VK = new Set();
        ["mp3", "ogg", "oga", "opus", "mpeg", "wav", "m4a", "aiff", "wma", "mid", "caf"].forEach(function (VR) {
          if (Vs.canPlayType(VF[VR] || "audio/" + VR)) {
            VK.add(VR);
          }
        });
        class Vc {
          constructor(VR) {
            this.Xi = [];
            this.qi = VR;
            this.en = false;
            this.tn();
          }
          ['nn']() {
            for (var VR of this.Xi) {
              VR.oncanplaythrough = null;
              VR.onended = null;
            }
            this.Xi = null;
            this.en = false;
          }
          ['tn'](VR) {
            var Vp = this;
            if (undefined === VR) {
              VR = false;
            }
            var Vl = new Audio(this.qi);
            Vl.oncanplaythrough = function () {
              Vp.en = true;
              Vp.Xi.push(Vl);
              Vl.oncanplaythrough = null;
              Vl.onended = function () {
                return Vl.currentTime = 0x0;
              };
              if (VR) {
                Vl.play();
              }
            };
          }
          ['Wt']() {
            for (var VR of this.Xi) if (VR.paused) {
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
            return !!(VR = VR.match(/\.(\w+)$/)) && VK.has(VR[0x1]);
          }
          ['on'](VR, Vp) {
            var Vl;
            if (this.an(Vp) && (null == (Vl = this.sn.get(VR)) ? undefined : Vl.qi) !== Vp) {
              if (null != Vl) {
                Vl.nn();
              }
              this.sn.set(VR, new Vc(Vp));
            }
          }
          ['rn'](VR) {
            var Vp;
            if (null != (Vp = this.sn.get(VR))) {
              Vp.nn();
            }
            this.sn["delete"](VR);
          }
          ['Wt'](VR) {
            if (bD.cEnableSounds && null != (VR = this.sn.get(VR)) && VR.en) {
              VR.Wt();
            }
          }
        }();
      }();
      function ZI() {
        this.cn = null;
        this.ln = null;
        this.jt = null;
        this.dn = null;
        this.hn = null;
        this.Gt = false;
        this.Pi = false;
        this.p = '';
        this.Wi = 0x0;
        this.Ft = null;
        this.Si = new Map();
        this.Ai = new Map();
        this.Mi = new Map();
        this._i = new ZR();
        this.Ki = new aW();
        this.Fi = 0x0;
        this.Di = 0x0;
        this.Ei = 0x0;
        this.xi = 0x0;
        this.se = 0.5;
        this.Hi = 0.5;
        this.Tt = 0x1;
        this.Dt = 0x0;
        this.At = 0x0;
        this.yi = false;
        this.un = 0x0;
        this.pn = 0x0;
        this.Ui = [];
        this.fn = {};
        this.mn = [];
        this.gn = false;
        this.mi = {
          'bn': false,
          'fi': {},
          'kn': 0x10,
          '$n': false
        };
        this.wn = 0x0;
        this.yn = 0x0;
        this.kt = 0x0;
        this.vn = null;
        this.Qt = {};
        setInterval(this.Le.bind(this), 0x7530);
      }
      function Zq(VF, Vs, VK) {
        if (undefined === VK) {
          VK = false;
        }
        var Vc = s.getElementById(VF);
        Vc.checked = Vs;
        if (VK) {
          aA(F(Vc));
        } else {
          bD[VF] = Vs;
        }
      }
      function Zg(VF, Vs) {
        return VF.Da.Ci - Vs.Da.Ci;
      }
      ZI.prototype.Bt = function () {
        return 0x0 !== this.Mi.size;
      };
      ZI.prototype.Wt = function () {
        if (null == HA) {
          this.Ut("No server selected!");
        } else {
          this.p = F("#name-box").val();
          this.Gt = false;
          ZG();
          if (this.wi() && this.ln === HA.address) {
            this.T(bm.Ae(this.p));
          } else {
            this._n(HA.address);
          }
          aj();
          ap(Hy);
          if (bA) {
            bZ.Ot.show();
          }
        }
      };
      ZI.prototype.zt = function () {
        if (null == HA) {
          this.Ut("No server selected!");
        } else {
          this.Gt = true;
          ZG();
          if (this.wi() && this.ln === HA.address) {
            this.T(bm.Re());
          } else {
            this._n(HA.address);
          }
          aj();
          ap(Hy);
        }
      };
      ZI.prototype._n = function (VF) {
        var Vs;
        if (null != this.cn) {
          this.cn.Sn = VF;
          this.Nn();
        } else {
          this.ln = VF;
          this.jt = HA.name;
          this.Ut("Connecting to " + this.jt + "...");
          if (HA.ssl) {
            this.cn = new C.WebSocket("wss://" + VF);
          } else {
            this.cn = new C.WebSocket("ws://" + VF);
          }
          this.cn.binaryType = "arraybuffer";
          (Vs = this).cn.onopen = this.Mn.bind(this);
          this.cn.onmessage = this.Cn.bind(this);
          this.cn.onclose = function (VK) {
            Vs.En();
            Vs.Ut("You have been disconnected from the server. Reason: " + (VK.reason || "Unknown"));
            if (null != this.Sn) {
              Vs._n(this.Sn);
            }
          };
          this.cn.onerror = function () {
            Vs.En();
            this.Sn = null;
            Vs.Ut("Error connecting to server... Retrying every 5 second(s).");
            setTimeout(function () {
              if (!(Vs.wi() || null != Vs.cn)) {
                Vs._n(VF);
              }
            }, 5000);
          };
          ZN();
        }
      };
      ZI.prototype.Nn = function () {
        if (null != this.cn) {
          this.cn.close();
        }
      };
      ZI.prototype.xn = function () {
        for (var VF of this.Si.values()) VF.nn();
        for (var Vs of this.Ai.values()) Vs.nn();
        this.Si.clear();
        this.Ai.clear();
        this.Mi.clear();
      };
      ZI.prototype.En = function () {
        this.xn();
        this._i.On();
        this.Wi = 0x0;
        this.wn = 0x0;
        this.kt = 0x0;
        this.vn = null;
        this.ln = null;
        this.jt = null;
        this.Hn();
        this.Ki.Fn();
        Object.assign(this.mi, {
          'bn': false,
          'Zi': 0x0,
          '$n': false
        });
        if (null != this.cn) {
          this.cn = null;
        }
        F("#pId span").html(this.Wi);
        if (this.gn) {
          this.gn = false;
          aH();
        }
      };
      var ZU;
      var Zr = {
        'kSplit': 0x1,
        'kDoubleSplit': 0x2,
        'kTripleSplit': 0x3,
        'kQuadSplit': 0x4,
        'kPentaSplit': 0x5,
        'kHexaSplit': 0x6,
        'kSeptiSplit': 0x7,
        'kOctoSplit': 0x8
      };
      ZI.prototype.It = function (VF) {
        var Vs;
        if (VF === bF.ke) {
          al(Hy);
          ap(F("#main-social"));
          ap(bZ.St);
          ap(bZ.Nt);
        } else {
          if (VF = bp.get(VF)) {
            if (VF.includes("kContextMenu")) {
              var VK = s.elementFromPoint(this.Dt, this.At);
              if ("chat-name" === VK.className) {
                aD(VK.innerText, VK.dataset.Wi, -0x1);
              } else {
                var Vc = this.At - F(VK).offset().top;
                switch (VK.id) {
                  case "party-canvas":
                    if (!((Vj = Vc) % 0x14 < 0x5)) {
                      Vj = K.floor(Vj / 0x14);
                      if (null != (Vs = Hc.Ui[Vj])) {
                        aD(Vs.p, Vs.Gi, Vj);
                      }
                    }
                    break;
                  case "leaderboard-canvas":
                    Vj = K.floor((Vs = Vc) / 0x14);
                    if (null != (null == (Vs = Hc.mn[Vj]) ? undefined : Vs.Wi)) {
                      aD(Vs.p, Vs.Wi);
                    }
                    break;
                  case "canvas":
                    var VR;
                    var Vp;
                    var Vl;
                    var Vf;
                    var Vj = g(Hc.Qi(true)) || q(Hc.Qi(true), 0x2) || o(Hc.Qi(true), 0x2) || N();
                    var VA = Vj[0x0];
                    var Vv = Vj[0x1];
                    for (Vf of Hc.Si.values()) if (Vf.Dn === 0x2 && (VR = (Vf.ae - VA) ** 0x2, Vp = (Vf.oe - Vv) ** 0x2, Vl = Vf.Ci ** 0x2, VR + Vp <= Vl)) {
                      aD(Hc._i.In(Vf.Wi).p, Vf.Wi);
                    }
                }
              }
            }
            if (!(Hy.is(":visible") && "hide" !== as.get(Hy.selector))) {
              for (var Vy of VF) {
                var Vd = Zr[Vy];
                if (Vd) {
                  if (!bk.Oe(Vd)) {
                    this.Tn(Vd);
                  }
                } else {
                  if (Vd = bR[Vy]) {
                    this.Tt = Vd;
                  } else {
                    switch (Vy) {
                      case "zoomIn":
                        this.Tt *= 1.05;
                        this.Tt = 0x5 < this.Tt ? 0x5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                        break;
                      case "zoomOut":
                        this.Tt *= 0.95;
                        this.Tt = 0x5 < this.Tt ? 0x5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                        break;
                      case "kEjectMass":
                        if (!HB) {
                          HB = true;
                          this.T(bm.Pe(true));
                        }
                        break;
                      case "kToggleSpec":
                        this.T(bm.Ie(0x12));
                        break;
                      case "kFreezeMouse":
                        this.yi = !this.yi;
                        bZ.rt.toggle(this.yi);
                        if (this.yi) {
                          this.un = this.Pn;
                          this.pn = this.Ln;
                        }
                        break;
                      case "kLinesplit":
                        bk.Ce();
                        break;
                      case "kCycleNames":
                        if (bD.cHideEnemyNames) {
                          if (bD.cHideBotNames) {
                            if (bD.cHideFriendNames) {
                              if (bD.cHideOwnName) {
                                Zq("cHideOwnName", false);
                                Zq("cHideFriendNames", true);
                              } else {
                                Zq("cHideFriendNames", false);
                              }
                              Zq("cHideBotNames", true);
                            } else {
                              Zq("cHideOwnName", false);
                              Zq("cHideBotNames", false);
                            }
                            Zq("cHideEnemyNames", true);
                          } else {
                            Zq("cHideOwnName", false);
                            Zq("cHideFriendNames", false);
                            Zq("cHideEnemyNames", false);
                          }
                        } else {
                          Zq("cHideOwnName", true);
                          Zq("cHideFriendNames", true);
                          Zq("cHideBotNames", true);
                          Zq("cHideEnemyNames", true);
                        }
                        this._i.Rn();
                        break;
                      case "kCycleMasses":
                        if (bD.cHideEnemyMasses) {
                          if (bD.cHideBotMasses) {
                            if (bD.cHideFriendMasses) {
                              if (bD.cHideOwnMass) {
                                Zq("cHideOwnMass", false);
                                Zq("cHideFriendMasses", true);
                              } else {
                                Zq("cHideFriendMasses", false);
                              }
                              Zq("cHideBotMasses", true);
                            } else {
                              Zq("cHideOwnMass", false);
                              Zq("cHideBotMasses", false);
                            }
                            Zq("cHideEnemyMasses", true);
                          } else {
                            Zq("cHideOwnMass", false);
                            Zq("cHideFriendMasses", false);
                            Zq("cHideEnemyMasses", false);
                          }
                        } else {
                          Zq("cHideOwnMass", true);
                          Zq("cHideFriendMasses", true);
                          Zq("cHideBotMasses", true);
                          Zq("cHideEnemyMasses", true);
                        }
                        this._i.Un();
                        break;
                      case "kCycleSkins":
                        if (bD.cHideEnemySkins) {
                          if (bD.cHideBotSkins) {
                            if (bD.cHideFriendSkins) {
                              if (bD.cHideOwnSkin) {
                                Zq("cHideOwnSkin", false);
                                Zq("cHideFriendSkins", true);
                              } else {
                                Zq("cHideFriendSkins", false);
                              }
                              Zq("cHideBotSkins", true);
                            } else {
                              Zq("cHideOwnSkin", false);
                              Zq("cHideBotSkins", false);
                            }
                            Zq("cHideEnemySkins", true);
                          } else {
                            Zq("cHideOwnSkin", false);
                            Zq("cHideFriendSkins", false);
                            Zq("cHideEnemySkins", false);
                          }
                        } else {
                          Zq("cHideOwnSkin", true);
                          Zq("cHideFriendSkins", true);
                          Zq("cHideBotSkins", true);
                          Zq("cHideEnemySkins", true);
                        }
                        this._i.Bn();
                        break;
                      case "kHideOwnName":
                        Zq("cHideOwnName", !bD.cHideOwnName, true);
                        break;
                      case "kHideFriendNames":
                        Zq("cHideFriendNames", !bD.cHideFriendNames, true);
                        break;
                      case "kHideBotNames":
                        Zq("cHideBotNames", !bD.cHideBotNames, true);
                        break;
                      case "kHideEnemyNames":
                        Zq("cHideEnemyNames", !bD.cHideEnemyNames, true);
                        break;
                      case "kHideOwnMass":
                        Zq("cHideOwnMass", !bD.cHideOwnMass, true);
                        break;
                      case "kHideFriendMasses":
                        Zq("cHideFriendMasses", !bD.cHideFriendMasses, true);
                        break;
                      case "kHideBotMasses":
                        Zq("cHideBotMasses", !bD.cHideBotMasses, true);
                        break;
                      case "kHideEnemyMasses":
                        Zq("cHideEnemyMasses", !bD.cHideEnemyMasses, true);
                        break;
                      case "kHideOwnSkin":
                        Zq("cHideOwnSkin", !bD.cHideOwnSkin, true);
                        break;
                      case "kHideFriendSkins":
                        Zq("cHideFriendSkins", !bD.cHideFriendSkins, true);
                        break;
                      case "kHideBotSkins":
                        Zq("cHideBotSkins", !bD.cHideBotSkins, true);
                        break;
                      case "kHideEnemySkins":
                        Zq("cHideEnemySkins", !bD.cHideEnemySkins, true);
                    }
                  }
                }
              }
            }
          }
        }
      };
      ZI.prototype.wi = function () {
        return null != this.cn && 0x1 === this.cn.readyState;
      };
      ZI.prototype.T = function (VF) {
        if (this.wi()) {
          this.cn.send(VF);
        }
      };
      ZI.prototype.Mn = function () {
        var VF = this;
        b7 = [];
        this.dn = new Promise(function (Vs) {
          return VF.hn = Vs;
        });
        b9.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
          'action': "login"
        }).then(function (Vs) {
          Hc.T(bm.qe(Vs));
          Hc.dn.then(function (VK) {
            return !VK && Hc.jn();
          });
          ZN();
        });
        this.T(bm.De());
        this.Le();
        this.Ye();
        if (null != Hb.auth().currentUser) {
          Hb.auth().currentUser.getIdToken(true).then(function (Vs) {
            return Hc.T(bm.et(Vs));
          })["catch"](function (Vs) {
            ZO(Vs, true);
            VF.hn(false);
          });
        } else {
          this.hn(false);
        }
      };
      ZI.prototype.jn = function () {
        this.T(this.Gt ? bm.Re() : bm.Ae(this.p));
      };
      ZI.prototype.Le = function () {
        if (this.wi()) {
          Hp = Date.now();
          this.T(bm.Le());
        }
      };
      ZI.prototype.Ye = function () {
        if (this.wi()) {
          this.T(bm.Ye());
        }
      };
      ZI.prototype.Qi = function (VF) {
        return !(VF = undefined !== VF && VF) && this.yi ? [this.un, this.pn] : (VF = H6.pi.position, [(this.Dt - VF.x) / this.se + this.Fi, (this.At - VF.y) / this.se + this.Di]);
      };
      ZI.prototype.Te = function (VF, Vs) {
        this.Pn = K.round(VF);
        this.Ln = K.round(Vs);
        this.T(bm.Te(this.Pn, this.Ln));
      };
      ZI.prototype.Tn = function (VF) {
        var Vs = bm.Ie(0x11);
        for (var VK = 0x0; VK < VF; VK++) {
          this.T(Vs);
        }
      };
      ZI.prototype.Ut = function (VF, Vs) {
        ao(0x8, F("<td><span style=\"color: #DDDD00\">[System] " + ((Vs = undefined !== Vs && Vs) ? VF : VF.replace(/</g, "&lt;").replace(/>/g, "&gt;")) + "</span></td>")[0x0]);
      };
      ZI.prototype.Gn = function (VF, Vs) {
        var VK = s.createElement('td');
        var Vc = s.createElement("span");
        Vc.style.color = "#DDDD00";
        Vc.innerHTML = "[System] " + VF.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        VK.appendChild(Vc);
        (VF = s.createElement("span")).style.color = "#DDDD00";
        VF.innerHTML = Vs;
        VF.style.pointerEvents = "all";
        VF.style.userSelect = "all";
        VK.appendChild(VF);
        ao(0x8, VK);
      };
      ZI.prototype.Hn = function () {
        this.Ui = [];
        this.fn = {};
        this.Wn = -0x1;
        this.zn = -0x1;
        F("#party-panel").css("display", "none");
        if ("block" === HW.css("display")) {
          this.Jn();
        }
        if (!(null == this.Kt && null == Hm)) {
          this.Kt = Hm = null;
          C.history.pushState("page", '', ' ');
        }
      };
      ZI.prototype.li = function () {
        return this.Wn === this.Wi;
      };
      ZI.prototype.Yn = function () {
        return this.mi.kn + this.Ki.Vn;
      };
      ZI.prototype.Kn = function () {
        Zo.Wt("eject");
      };
      ZI.prototype.Zn = function () {
        Zo.Wt("split");
      };
      ZI.prototype.Qn = function () {
        bk.Fe();
        if ("block" !== HT.css("display")) {
          aR(Hy);
        }
        C.aiptag.cmd.display.push(function () {
          return C.aipDisplayTag.refresh("GOT_gota-io_336x280");
        });
      };
      var ZP = C.DataView;
      var ZJ = C.ArrayBuffer;
      ZI.prototype.Cn = function (VF) {
        var Vs = this;
        var VF = VF.data;
        var VK = new ZP(VF);
        var VF = VK.getUint8(0x0);
        VK.Xn = 0x1;
        switch (VF) {
          case 0x7a:
            Vs.qn(VK);
            break;
          case 0x7c:
            Vs.es(VK);
            break;
          case 0x2:
            Vs.ts(VK);
            break;
          case 0xa:
            Vs.ns(VK);
            break;
          case 0x15:
            Vs.ss(VK);
            break;
          case 0x16:
            Vs.os(VK);
            break;
          case 0x17:
            Vs.rs();
            break;
          case 0x28:
            Vs.cs(VK);
            break;
          case 0x29:
            Vs.ls(VK);
            break;
          case 0x2d:
            Vs.ds(VK);
            break;
          case 0x2b:
            Vs.hs(VK);
            break;
          case 0x31:
            Vs.us(VK);
            break;
          case 0x32:
            Vs.ps(VK);
            break;
          case 0x3f:
            Vs.fs(VK);
            break;
          case 0x40:
            Vs.gs(VK);
            break;
          case 0x41:
            Vs.bs();
            break;
          case 0x42:
            Vs.ks(VK);
            break;
          case 0x44:
            Vs.$s(VK);
            break;
          case 0x45:
            Vs.ws(VK);
            break;
          case 0x46:
            Vs.ys(VK);
            break;
          case 0x47:
            Vs.vs();
            break;
          case 0x48:
            Vs._s(VK);
            break;
          case 0x49:
            Vs.Ss(VK);
            break;
          case 0x4a:
            Vs.Ns(VK);
            break;
          case 0x50:
            Vs.Ms();
            break;
          case 0x51:
            Vs.Cs(VK);
            break;
          case 0x52:
            Vs.Es(VK);
            break;
          case 0x53:
            Vs.xs(VK);
            break;
          case 0x5a:
            Vs.Os(VK);
            break;
          case 0x5b:
            Vs.Hs(VK);
            break;
          case 0x5c:
            Vs.Fs(VK);
            break;
          case 0x5d:
            Vs.Jn();
            break;
          case 0x5e:
            Vs.Ds(VK);
            break;
          case 0x64:
            Vs.As(VK);
            break;
          case 0x65:
            Vs.Is(VK);
            break;
          case 0x66:
            Vs.Ts(VK);
            break;
          case 0x67:
            Vs.Ps(VK);
            break;
          case 0x68:
            Vs.Ls(VK);
        }
      };
      ZI.prototype.Rs = function (VF) {
        var Vs = VF.getUint16(VF.Xn, true);
        for (VF.Xn += 0x2; 0x0 < Vs; --Vs) {
          this._i.Us(VF.getUint16(VF.Xn, true));
          VF.Xn += 0x2;
        }
      };
      ZI.prototype.Bs = function (VF) {
        var Vs = VF.getUint16(VF.Xn, true);
        for (VF.Xn += 0x2; 0x0 < Vs; --Vs) {
          var VK = VF.getUint16(VF.Xn, true);
          VF.Xn += 0x2;
          var Vc = this.Si.get(VK) || this.Ai.get(VK);
          if (null != Vc) {
            if (Vc.Dn === 0x6) {
              this.Ai["delete"](VK);
            } else {
              this.Si["delete"](VK);
              if (Vc.Wi === this.Wi) {
                this.Mi["delete"](VK);
              }
            }
            Vc.nn();
          }
        }
      };
      ZI.prototype.Gs = function (VF) {
        return VF && !VF.endsWith(".gif") ? VF : null;
      };
      ZI.prototype.Ws = function (VF) {
        for (;;) {
          var Vs = VF.getUint16(VF.Xn, true);
          VF.Xn += 0x2;
          if (0x0 === Vs) {
            break;
          }
          var VK = VF.getUint8(VF.Xn++) / 0xff;
          var Vc = VF.getUint8(VF.Xn++) / 0xff;
          var VR = VF.getUint8(VF.Xn++) / 0xff;
          var Vp = Zd(VF);
          var Vl = this._i.In(Vs);
          if (null == Vl) {
            Vl = new Zj(Vs, Vp.endsWith('🤖'));
            this._i.on(Vl);
          }
          Vl.p = Vp;
          Vl.zs = [VK, Vc, VR];
          Vs = this.Gs(Zy(VF));
          Vl.Js = VF.getUint8(VF.Xn++);
          if (0x2 == (0x2 & Vl.Js)) {
            Vl.Ys = {
              'Vs': (VF.getUint8(VF.Xn++) << 0x10) + (VF.getUint8(VF.Xn++) << 0x8) + VF.getUint8(VF.Xn++),
              'Ks': 0x40 <= VF.getUint8(VF.Xn++),
              'Zs': VF.getUint8(VF.Xn++),
              'Qs': Vs
            };
          } else {
            Vl.Qs = Vs;
            Vl.Ys = null;
          }
          Vl.Vi();
          this._i.Xs(Vl);
        }
      };
      ZI.prototype.qs = function (VF, Vs) {
        for (;;) {
          var VK = VF.getUint16(VF.Xn, true);
          VF.Xn += 0x2;
          if (0x0 === VK) {
            break;
          }
          var Vc = VK === this.Wi;
          for (Vc && Vs && this.Zn();;) {
            var VR = VF.getUint16(VF.Xn, true);
            VF.Xn += 0x2;
            if (0x0 === VR) {
              break;
            }
            (VR = new (Vc ? Zs : ZF)(VR, this)).ea(VF.getInt16(VF.Xn, true));
            VR.ta(VF.getInt16(VF.Xn + 0x2, true));
            VR.ia(VF.getUint16(VF.Xn + 0x4, true));
            VF.Xn += 0x6;
            VR.Wi = VK;
          }
        }
      };
      ZI.prototype.na = function (VF, Vs) {
        var VK = !HB && 0x190 < Date.now() - HL;
        for (var Vc = null == (VR = this.Ft) ? undefined : VR.zs;;) {
          var VR;
          var Vp = VF.getUint8(VF.Xn++);
          if (Vp === 0x2) {
            this.qs(VF, Vs);
          } else {
            if (Vp === 0x0) {
              break;
            }
            for (;;) {
              var Vl = VF.getUint16(VF.Xn, true);
              VF.Xn += 0x2;
              if (0x0 === Vl) {
                break;
              }
              var Vf = ZD.sa(Vl, Vp, this);
              Vf.ea(VF.getInt16(VF.Xn, true));
              Vf.ta(VF.getInt16(VF.Xn + 0x2, true));
              VF.Xn += 0x4;
              if (Vp !== 0x6) {
                Vf.ia(VF.getUint16(VF.Xn, true));
                VF.Xn += 0x2;
                switch (Vp) {
                  case 0x1:
                    Vf.oa = (VF.getUint8(VF.Xn++) << 0x10) + (VF.getUint8(VF.Xn++) << 0x8) + VF.getUint8(VF.Xn++);
                    var Vj = VF.getUint8(VF.Xn++);
                    Vf.Qs = (0x7f & Vj) - 0x1;
                    if (!(VK || Vf.oa !== Vc)) {
                      this.Kn();
                      VK = true;
                    }
                    break;
                  case 0x5:
                    Vf.ca = VF.getUint8(VF.Xn++);
                }
              }
            }
          }
        }
      };
      ZI.prototype.la = function (VF) {
        for (;;) {
          var Vs = VF.getUint8(VF.Xn++);
          if (Vs === 0x0) {
            break;
          }
          for (;;) {
            var VK = VF.getUint16(VF.Xn, true);
            VF.Xn += 0x2;
            if (0x0 === VK) {
              break;
            }
            var Vc = (Vs === 0x6 ? this.Ai : this.Si).get(VK);
            (Vc = null == Vc ? ZD.sa(VK, Vs, this) : Vc).da(VF.getInt16(VF.Xn, true));
            Vc.ha(VF.getInt16(VF.Xn + 0x2, true));
            VF.Xn += 0x4;
            if (!(Vs !== 0x2 && Vs !== 0x3 && Vs !== 0x4)) {
              Vc.ma(VF.getUint16(VF.Xn, true));
              VF.Xn += 0x2;
            }
          }
        }
      };
      ZI.prototype.qn = function (VF) {
        function Vs() {
          try {
            if ("function" == typeof window.__aopc3mu9) {
              var VT = window.__aopc3mu9;
              var VY = VT(VK, Vc, VR, Vp, Vl, Vv, Vy, Vd);
              if (0x4 <= VK && VT.length < 0x8) {
                try {
                  var VM;
                  var VB = parseInt(VY, 0x24);
                  if (!isNaN(VB)) {
                    VB = ((VB = VB >>> 0x0 ^ Vd >>> 0x0) << (VM = 0x7 & Vd) | VB >>> 0x20 - VM) >>> 0x0;
                    VY = ((VB ^= Vd >>> 0x3) >>> 0x0).toString(0x24).toUpperCase();
                  }
                } catch (Vz) {}
              }
              if (VY && '-' === VY.charAt(0x0)) {
                try {
                  var VL = parseInt(VY, 0x24);
                  if (!isNaN(VL)) {
                    VY = (VL >>> 0x0).toString(0x24).toUpperCase();
                  }
                } catch (Vh) {}
              }
              var VG = new TextEncoder().encode(VY);
              var Vk = new ZJ(0xc + VG.length);
              var Vm = new ZP(Vk);
              Vm.setUint8(0x0, 0x7b);
              Vm.setUint8(0x1, VK);
              Vm.setUint32(0x2, Vc, true);
              Vm.setUint32(0x6, VR, true);
              Vm.setUint16(0xa, VG.length, true);
              for (var VS = 0x0; VS < VG.length; VS++) {
                Vm.setUint8(0xc + VS, VG[VS]);
              }
              VQ.cn.send(Vk);
              try {
                sendEnvTelemetry(VQ.cn, Vc, VR, "__aopc3mu9", Vv, Vy, Vp);
              } catch (VW) {}
              if (0x4 <= VK) {
                try {
                  setTimeout(function () {
                    if (VQ.cn && 0x1 === VQ.cn.readyState) {
                      var VE = window.__aopc3mu9;
                      var Vu = 0x0;
                      try {
                        var Vi = VE.toString();
                        for (var Vw = 0x0; Vw < Vi.length; Vw++) {
                          Vu = 0x1000193 * (Vu ^ Vi.charCodeAt(Vw)) >>> 0x0;
                        }
                      } catch (N3) {}
                      var N0 = 0x0;
                      if (VE && VE._wasm) {
                        N0 |= 0x1;
                      }
                      var VE = 'v:' + VK + "|h:" + Vu.toString(0x24) + "|f:" + N0;
                      var N1 = new TextEncoder().encode(VE);
                      if (!(0x40 < N1.length)) {
                        var VE = new ZJ(0x2 + N1.length);
                        var N2 = new ZP(VE);
                        N2.setUint8(0x0, 0x7e);
                        N2.setUint8(0x1, N1.length);
                        for (Vw = 0x0; Vw < N1.length; Vw++) {
                          N2.setUint8(0x2 + Vw, N1[Vw]);
                        }
                        VQ.cn.send(VE);
                      }
                    }
                  }, 0x96);
                } catch (VE) {}
              }
              return 0x1;
            }
          } catch (Vu) {}
        }
        var VK = VF.getUint8(0x1);
        var Vc = VF.getUint32(0x2, true);
        var VR = VF.getUint32(0x6, true);
        var Vp = VF.getUint32(0xa, true);
        var Vl = null;
        var Vf = 0xe;
        if (0x2 <= VK) {
          var Vj = VF.getUint8(0xe);
          if (0x0 < Vj) {
            var Vl = [];
            for (var VA = 0x0; VA < Vj; VA++) {
              Vl.push(VF.getUint8(0xf + VA));
            }
          }
          Vf = 0xf + Vj;
        }
        var Vv = 0x9e3779b9;
        var Vy = 0xa5a5a5a5;
        var Vd = 0x0;
        if (0x3 <= VK && (Vv = VF.getUint32(Vf, true), Vy = VF.getUint32(Vf += 0x4, true), Vf += 0x4, 0x4 <= VK)) {
          Vd = VF.getUint32(Vf, true) >>> 0x0;
          Vf += 0x4;
        }
        var VQ = this;
        if (!(Vs() || window.__authScriptLoading)) {
          window.__authScriptLoading = true;
          (Vf = s.createElement("script")).src = "auth.js?_=" + Date.now();
          Vf.async = true;
          Vf.onload = function () {
            var VO;
            if (!Vs()) {
              VO = 0x0;
              (function VT() {
                if (!(Vs() || 0x28 <= ++VO)) {
                  setTimeout(VT, 0x64);
                }
              })();
            }
          };
          Vf.onerror = function () {
            window.__authScriptLoading = false;
          };
          s.head.appendChild(Vf);
        }
      };
      ZI.prototype.es = function (VF) {
        if (0x0 !== (VF = VF.getUint8(0x1))) {
          this.selfMsg("Client validation warning (code " + VF + ').');
        }
      };
      ZI.prototype.ts = function (VF) {
        var Vs = this.Bt();
        this.Rs(VF);
        this.Bs(VF);
        this.Ws(VF);
        this.na(VF, Vs);
        this.la(VF);
        if (Vs && !this.Bt()) {
          this.Qn();
        }
        this.Pi = true;
        this.ga();
        bk.Me();
      };
      ZI.prototype.ns = function (VF) {
        this.Ei = VF.getFloat32(VF.Xn, true);
        VF.Xn += 0x4;
        this.xi = VF.getFloat32(VF.Xn, true);
        VF.Xn += 0x4;
        this.Hi = VF.getFloat32(VF.Xn, true);
      };
      ZI.prototype.fs = function (VF) {
        this.kt = VF.getFloat64(VF.Xn, true);
      };
      ZI.prototype.gs = function (VF) {
        this.Wi = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x3;
        this.ks(VF);
        this.mi.kn = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x2;
        for (; 0x0 !== VF.getUint8(VF.Xn++);) {
          ;
        }
        this.mi.$n = !!VF.getUint8(VF.Xn++);
        F("#pId span").html(this.Wi);
        this.Ri(true);
        if (null != Hm) {
          this.T(bm.Ge(Hm));
        }
        HT.css("display", "none");
        F("#scrimmage-btn-leave").css("display", "none");
      };
      ZI.prototype.ks = function (VF) {
        var Vs = {
          'gi': VF.getInt16(VF.Xn, true),
          'bi': VF.getInt16(VF.Xn + 0x2, true),
          'ba': VF.getInt16(VF.Xn + 0x4, true),
          'ka': VF.getInt16(VF.Xn + 0x6, true)
        };
        VF.Xn += 0x8;
        Vs.ki = Vs.ba - Vs.gi;
        Vs.$i = Vs.ka - Vs.bi;
        Vs.re = 0x0 !== Vs.ki && 0x0 !== Vs.$i;
        if ((VF = this.mi.fi = Vs).re) {
          HI.width = VF.ki;
          HI.height = VF.$i;
          HI.position.set(VF.gi, VF.bi);
        }
        HI.visible = VF.re;
        bW();
      };
      ZI.prototype.$s = function (VF) {
        this.mi.Zi = VF.getUint8(VF.Xn++);
        this.mi.gt = VF.getFloat64(VF.Xn, true);
      };
      ZI.prototype.ws = function (VF) {
        this.$a = VF.getUint16(VF.Xn, true);
        this.wa();
      };
      ZI.prototype.bs = function () {
        this.xn();
      };
      ZI.prototype.us = function (VF) {
        this.mn.length = 0x0;
        var Vs = VF.getUint32(VF.Xn, true);
        VF.Xn += 0x4;
        for (var VK = 0x1; VK <= Vs; VK++) {
          var Vc = VF.getUint16(VF.Xn, true);
          VF.Xn += 0x2;
          var VR = Zd(VF) || "An unnamed cell";
          var Vp = Vc === this.Wi ? "#ffaaaa" : null != this.fn[Vc] ? "#ffff00" : "rgb(255, 255, 255)";
          this.mn.push({
            'Wi': Vc,
            'p': VR,
            'we': VK + '. ' + VR,
            'ya': Vp
          });
        }
        this.va();
      };
      ZI.prototype.ps = function (VF) {
        this.mn.length = 0x0;
        var Vs = VF.getUint16(VF.Xn, true);
        var VK = VF.getUint8(VF.Xn + 0x2);
        VF.Xn += 0x4;
        for (var Vc = 0x0; Vc < Vs; Vc++) {
          this.mn.push({
            'we': Zy(VF),
            'ya': Vc === VK ? "#ffaaaa" : "rgb(255, 255, 255)"
          });
        }
        this.va();
      };
      ZI.prototype.vs = function () {
        var VF = Date.now() - Hp;
        var Vs = "rgb(255, 255, 255)";
        Vs = VF < 0x64 ? "#00ff00" : VF < 0xc8 ? "#ffff00" : "#ff0000";
        this.yn = VF;
        bZ.dt.style.color = Vs;
        bZ.dt.innerHTML = VF + 'ms';
      };
      ZI.prototype._s = function (VF) {
        var Vs = VF.getUint8(VF.Xn++);
        var VK = "rgb(" + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ')';
        var Vc = VF.getUint8(VF.Xn++);
        var VR = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x2;
        if (!b7.includes(VR)) {
          var Vp = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;");
          var Vl = V9[V8.get(Vp)];
          VF.Xn++;
          var Vf = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
          var Vj = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;");
          if (!Vp.startsWith("System") || !Vj.includes("store")) {
            var VA;
            var Vv = 0x1;
            switch (Vs) {
              case 0x1:
                VA = "Party";
                Vv = 0x2;
                break;
              case 0x2:
                VA = "Admin";
                Vv = 0x10;
                break;
              default:
                VA = "All";
            }
            var Vs = s.createElement("span");
            var Vy = bD.cHideLockedNames && VR !== this.Wi;
            if (0x0 < Vp.length && (!Vy || "Gold" !== Vp)) {
              if (Vl) {
                (Vd = s.createElement("span")).innerHTML = Vp;
                Vd.className = "chat-title";
                Object.assign(Vd.style, Vl);
                Vs.textContent = '[' + VA + " - ";
                Vs.appendChild(Vd);
                Vs.appendChild(s.createTextNode('] '));
              } else {
                Vs.innerHTML = '[' + VA + " - " + Vp + '] ';
              }
            } else {
              Vs.innerHTML = '[' + VA + '] ';
            }
            (Vl = s.createElement('td')).appendChild(Vs);
            var Vd = s.createElement("span");
            Vd.innerText = Vf;
            Vd.dataset.Wi = VR;
            Vd.style.color = VK;
            Vd.className = "chat-name";
            Vl.appendChild(Vd);
            (Vp = s.createElement("span")).innerHTML = ': ';
            Vl.appendChild(Vp);
            Vs = s.createElement("span");
            if (VF.Xn < VF.byteLength) {
              Vs.dataset.msgid = VF.getBigInt64(VF.Xn, true);
            }
            Vs.innerHTML = az(Vj);
            Vs.style.color = V7[Vy ? 0x0 : Vc];
            Vl.appendChild(Vs);
            ao(Vv, Vl);
          }
        }
      };
      ZI.prototype.Ss = function (VF) {
        var Vs;
        var VK;
        var Vc;
        var VR;
        var Vp;
        var Vl;
        var Vf = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
        var Vj = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x2;
        if (!b7.includes(Vj)) {
          Vl = "rgb(" + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ')';
          Vs = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
          VK = VF.getUint16(VF.Xn, true);
          VF.Xn += 0x2;
          Vc = "rgb(" + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ',' + VF.getUint8(VF.Xn++) + ')';
          VF = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;");
          VR = s.createElement('td');
          (Vp = s.createElement("span")).innerText = Vf;
          Vp.dataset.Wi = Vj;
          Vp.style.color = Vl;
          Vp.className = "chat-name";
          VR.appendChild(Vp);
          (Vf = s.createElement("span")).innerHTML = " > ";
          VR.appendChild(Vf);
          (Vj = s.createElement("span")).innerText = Vs;
          Vj.dataset.Wi = VK;
          Vj.style.color = Vc;
          Vj.className = "chat-name";
          VR.appendChild(Vj);
          (Vl = s.createElement("span")).innerHTML = ': ' + az(VF);
          VR.appendChild(Vl);
          ao(0x4, VR);
        }
      };
      ZI.prototype.Ns = function (VF) {
        var Vs = VF.getBigInt64(VF.Xn, true);
        VF.Xn += 0x8;
        var VF = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var Vs = F(".chat-table [data-msgid='" + Vs + "']");
        if (0x0 < VF.length) {
          Vs.html(az(VF));
        } else {
          Vs.closest('tr').remove();
        }
      };
      ZI.prototype.ys = function (VF) {
        this.Ut(Zd(VF));
      };
      ZI.prototype.Ps = function (VF) {
        if (VF.getUint8(0x1) !== 0x1) {
          this.jn();
          this.hn(true);
        } else {
          this.Ut("Invalid authentication token! Please logout and try again!");
          this.hn(false);
        }
      };
      ZI.prototype.Ls = function (VF) {
        ZB(JSON.parse(Zy(VF)));
      };
      ZI.prototype.cs = function (VF) {
        VF = Zd(VF).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        F("#popup-party-text").text(VF + " has invited you to a party.");
        aR(F("#popup-party"));
      };
      ZI.prototype.ls = function (VF) {
        var Vs;
        var VK = {};
        var Vc = [];
        var VR = -0x1;
        var Vp = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x2;
        var Vl;
        for (var Vf = 0x0; Vf < Vp; Vf++) {
          var Vj = {};
          var VA = 0x1 === VF.getUint8(VF.Xn++);
          Vj.Gi = VF.getUint16(VF.Xn, true);
          VK[Vj.Gi] = Vf;
          VF.Xn += 0x2;
          if (VA) {
            VR = Vj.Gi;
            Vj.Sa = true;
          } else {
            Vj.Sa = false;
          }
          Vj.p = Zd(VF) || "An unnamed cell";
          Vj.ae = 0x0;
          Vj.oe = 0x0;
          Vj.Ji = 0x0;
          Vj.Yi = 0x0;
          Vj.wn = 0x0;
          Vj.Na = -0x1;
          Vj.Ma = 0x0;
          Vj.Bi = VD.Ca;
          if (null != this.fn[Vj.Gi]) {
            VA = this.Ui[this.fn[Vj.Gi]];
            Vj.ae = VA.ae;
            Vj.oe = VA.oe;
            Vj.Ji = VA.Ji;
            Vj.Yi = VA.Yi;
            Vj.Bi = VA.Bi;
            Vj.wn = VA.wn;
            Vj.zi = VA.zi;
          } else {
            Vj.zi = V6[(VA = Vj.Gi) % V6.length];
            if (VA = Hc._i.In(Vj.Gi)) {
              VA.Ea(true);
            }
          }
          Vc.push(Vj);
        }
        for (Vl in this.fn) if (null == VK[Vl] && (Vs = Hc._i.In(+Vl))) {
          Vs.Ea(false);
        }
        this.Ui = Vc;
        this.fn = VK;
        if (this.Wn !== VR && (this.Wn = VR, "block" === HW.css("display"))) {
          ZX.xa();
        }
        if (0x0 < Vp) {
          this.Oa();
        } else {
          this.Hn();
        }
      };
      ZI.prototype.ds = function (VF) {
        var Vs = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x2;
        if (Vs === this.Ui.length) {
          for (var VK = 0x0; VK < Vs; VK++) {
            var Vc = this.Ui[VK];
            Vc.Bi = VF.getUint8(VF.Xn++);
            if (Vc.Bi === 0x0) {
              Vc.Ji = VF.getInt16(VF.Xn, true);
              Vc.Yi = VF.getInt16(VF.Xn + 0x2, true);
              Vc.wn = VF.getInt32(VF.Xn + 0x4, true);
              VF.Xn += 0x8;
            }
          }
          this.Oa();
        }
      };
      ZI.prototype.hs = function (VF) {
        var Vs = Zy(VF);
        this.Kt = Zy(VF) || null;
        if (this.Kt) {
          VF = "/join " + this.Kt;
          this.Gn(Vs, VF);
          F("#popup-party-code-content input").val(VF);
          F("#popup-party-code").show();
          C.history.pushState("page", '', '#' + this.jt + '&' + this.Kt);
        } else {
          this.Ut(Vs);
          C.history.pushState("page", '', ' ');
        }
      };
      ZI.prototype.ss = function (VF) {
        var Vs = VF.getUint16(VF.Xn, true);
        VF.Xn += 0x2;
        var VK = Zd(VF) || "An unnamed cell";
        var Vc = VF.getUint32(VF.Xn, true);
        var VR = VF.getUint32(VF.Xn + 0x4, true);
        var Vp = VF.getUint32(VF.Xn + 0x8, true);
        var Vl = VF.getUint32(VF.Xn + 0xc, true);
        var Vf = VF.getUint32(VF.Xn + 0x10, true);
        var Vj = VF.getUint32(VF.Xn + 0x14, true);
        var VA = VF.getUint32(VF.Xn + 0x18, true);
        var Vv = VF.getUint32(VF.Xn + 0x1c, true);
        var Vy = VF.getUint32(VF.Xn + 0x20, true);
        VF.Xn += 0x24;
        F("#main-stats").html("<span>Name: " + VK + ' (' + Vs + ")</span><br><span>Alive: " + VN(Vc) + "</span><br><span>Food eaten: " + VR + ' (' + Vj + ")</span><br><span>Ejected mass eaten: " + Vp + ' (' + VA + ")</span><br><span>Viruses eaten: " + Vl + ' (' + Vv + ")</span><br><span>Player cells eaten: " + Vf + ' (' + Vy + ")</span><br>");
      };
      ZI.prototype.os = function (VF) {
        VF = 0x1 === VF.getUint8(VF.Xn++);
        this.gn = VF;
        aH();
        if (VF) {
          if (!this.mi.bn) {
            a9();
            this.mi.bn = true;
          }
          ZN();
        }
      };
      ZI.prototype.rs = function () {
        if (b4) {
          ab(b4.uid);
        }
      };
      ZI.prototype.wa = function () {
        bZ.$t.html(this.$a);
      };
      ZI.prototype.As = function (VF) {
        this.Ki.Ha(VF.getUint8(VF.Xn++), VF.getUint8(VF.Xn++), VF.getFloat64(VF.Xn, true));
        VF.Xn += 0x8;
      };
      ZI.prototype.Is = function (VF) {
        this.Ki.Fa(VF.getUint8(VF.Xn++));
      };
      ZI.prototype.Ts = function (VF) {
        this.Ki.Fn(0x1 === VF.getUint8(VF.Xn++));
      };
      ZI.prototype.Li = function () {
        HP.children.sort(Zg);
      };
      ZI.prototype.Aa = function () {
        var VF;
        var Vs = 0x0;
        for (VF of this.Mi.values()) Vs += VF.Oi();
        return Vs;
      };
      ZI.prototype.ga = function () {
        var VF = this.Aa();
        var Vs = VF.toLocaleString();
        bZ.lt.innerHTML = Vs;
        if (VF > this.wn) {
          this.wn = VF;
          bZ.ct.innerHTML = Vs;
        }
      };
      ZI.prototype.Ri = function (VF) {
        var Vs;
        var VK;
        var Vc = this.Mi.size;
        if (!(bZ.wt === Vc && !VF)) {
          VF = this.Yn();
          VK = "rgb(255, 255, 255)";
          VK = 0x1 <= (Vs = Vc / VF) ? "#ff0000" : 0.5 <= Vs ? "#ffff00" : "#00ff00";
          bZ.wt = Vc;
          bZ.ht.style.color = VK;
          bZ.ht.innerHTML = Vc + '/' + VF;
        }
      };
      ZI.prototype.va = function (VF) {
        if (undefined === VF) {
          VF = "Leaderboard";
        }
        var Vs = s.getElementById("leaderboard-canvas");
        var VK = Vs.getContext('2d');
        var Vc = this.mn.length;
        b1(VF);
        Vs.width = 0xc8;
        Vs.height = 0x14 * Vc + 0x4;
        if (0x0 !== Vc) {
          VK.font = "16px Calibri";
          for (var VR = 0x0; VR < Vc; VR++) {
            var Vp = this.mn[VR];
            var Vl = Vp.ya;
            var Vp = Vp.we;
            VK.fillStyle = Vl;
            VK.fillText(Vp, 0xa, 0x14 * (VR + 0x1));
          }
        }
      };
      ZI.prototype.Oa = function () {
        var VF = this.Ui.length;
        if (0x0 !== VF) {
          if (bD.cHidePartyPanel) {
            bZ.vt.css("display", "none");
          } else if ("none" === bZ.vt.css("display") && "none" !== HQ.css("display")) {
            bZ.vt.css("display", "block");
          }
          var Vs = s.getElementById("party-canvas");
          var VK = Vs.getContext('2d');
          var Vc = 0x0;
          var VR = 0x0;
          var Vp = 0x0;
          for (var Vl = 0x0; Vl < VF; Vl++) {
            var Vs;
            var VK;
            var Vc;
            var VR;
            var Vp;
            var Vl;
            var Vf = this.Ui[Vl];
            if (-0x1 === Vf.Na) {
              Vf.Na = VK.measureText(Vl + 0x1 + '. ' + Vf.p).width;
            }
            if (Vf.Na > Vc) {
              Vc = Vf.Na;
            }
            if (Vf.Bi === 0x0 || Vf.Bi === VD.Ca) {
              Vf.Ia = Vf.wn.toLocaleString();
              Vp += Vf.wn;
            } else if (Vf.Bi === 0x1) {
              Vf.Ia = "DEAD";
            } else if (Vf.Bi === 0x2) {
              Vf.Ia = "SPEC";
            }
            if (VR < (Vf = VK.measureText(Vf.Ia).width)) {
              VR = Vf;
            }
          }
          var Vj = Vp.toLocaleString();
          var VR = K.max(VR, VK.measureText(Vj).width);
          Vs.width = 0xf + Vc + 0x32 + VR;
          Vs.height = 0x14 * VF + 0x5 + (0x1 < VF ? 0x14 : 0x0);
          VK.font = "16px Calibri";
          var VA = 0x14;
          var Vv = 0x5 + Vc + 0x32;
          for (var Vy = 0x0; Vy < VF; Vy++) {
            var Vd = this.Ui[Vy];
            VK.fillStyle = Vd.Sa ? "#00ffff" : "rgb(255, 255, 255)";
            VK.fillText(Vy + 0x1 + '. ' + Vd.p, 0x5, VA);
            VK.fillText(Vd.Ia, Vv, VA);
            VA += 0x14;
          }
          if (0x1 < VF) {
            VK.fillStyle = "rgb(255, 255, 255)";
            VK.fillText("Total:", 0x5, VA);
            VK.fillText(Vj, Vv, VA);
          }
        }
      };
      ZI.prototype.Ms = function () {
        Hy.stop(true).hide();
        HT.css("display", "block");
        F("#scrimmage-btn-leave").css("display", "none");
        Hc.mi.fi.re = false;
      };
      ZI.prototype.Cs = function (VF) {
        var Vs = ["Mode: " + Zy(VF), "Time: " + VN(VF.getUint32(VF.Xn, true))];
        VF.Xn += 0x4;
        if (VF.Xn < VF.byteLength) {
          Vs.push("Queued players: " + VF.getUint8(VF.Xn));
        }
        this.mn = Vs.map(function (VK) {
          return {
            'ya': "rgb(255, 255, 255)",
            'we': VK
          };
        });
        this.va("Queue");
      };
      ZI.prototype.Es = function (VF) {
        this.mn.length = 0x0;
        this.va("Queue");
        this.Ut("You have left the queue for [" + Zy(VF) + ']');
      };
      ZI.prototype.xs = function (VF) {
        var Vs;
        if (0x0 === (VF = 0x1 === VF.byteLength ? 0x0 : VF.getUint8(VF.Xn++))) {
          this.Ut("A match has been found. Good luck and have fun!");
          if (!(bH || "granted" !== (null == (Vs = C.Notification) ? undefined : Vs.permission))) {
            new C.Notification("Your match has started.", {
              'icon': "https://gota.io/assets/images/favicon.png"
            });
          }
        } else if (0x1 === VF) {
          F("#scrimmage-btn-leave").css("display", "block");
        }
      };
      ZI.prototype.Os = function (VF) {
        var Vs = F("#scrimmage-mode-select");
        var VK = F("#scrimmage-mode-info");
        var Vc = parseInt(Vs.val());
        var VR = new Set();
        for (var Vp = VF.getUint8(VF.Xn++); Vp--;) {
          var Vs;
          var VK;
          var Vc;
          var VR;
          var Vp;
          var Vl = VF.getUint8(VF.Xn++);
          var Vf = Zy(VF);
          var Vj = Zy(VF);
          var VA = s.createElement("option");
          VA.innerHTML = Vf;
          VA.value = Vl;
          Vs.append(VA);
          (Vf = s.createElement("div")).innerHTML = Vj;
          Vf.id = "scrimmage-info-" + Vl;
          Vf.style.display = "none";
          VK.append(Vf);
          VR.add(Vl);
        }
        HS = {
          'La': {},
          'Ra': {},
          'Ua': []
        };
        if (VF.byteLength - 0x1 > VF.Xn) {
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
            var VT = {
              'p': Zy(VF),
              'Ba': 0x0,
              'ja': 0x0,
              'La': [],
              'Ra': []
            };
            for (var VY = VF.getUint8(VF.Xn++); VY--;) {
              VT.La.push(VF.getUint8(VF.Xn++));
            }
            for (var VM = VF.getUint8(VF.Xn++); VM--;) {
              VT.Ra.push(VF.getUint8(VF.Xn++));
            }
            VT.Ba = VF.getUint16(VF.Xn, true);
            VT.Ga = VF.getInt16(VF.Xn + 0x2, true);
            VF.Xn += 0x4;
            VT.ja = VF.getUint8(VF.Xn++);
            HS.Ua.push(VT);
          }
        }
        F("#scrimmage-custom-btn-container").css("display", 0x0 === HS.Ua.length ? "none" : "block");
        bZ.Mt.empty();
        for (var VB = 0x0; VB < HS.Ua.length; VB++) {
          bZ.Mt.append("<option value='" + VB + "'>" + HS.Ua[VB].p + "</option>");
        }
        if (VR.has(Vc)) {
          Vs.val(Vc);
        } else {
          Vs.prop("selectedIndex", 0x0);
        }
        Vs.trigger("change");
      };
      ZI.prototype.Fs = function (VF) {
        switch (VF.getUint8(VF.Xn++)) {
          case 0x0:
            ZX.Wa(VF.getUint8(VF.Xn++));
            break;
          case 0x1:
            ZX.za(VF.getUint8(VF.Xn++));
            break;
          case 0x2:
            ZX.ma(VF.getUint8(VF.Xn++));
            break;
          case 0x3:
            ZX.Ja(VF.getUint16(VF.Xn, true));
            VF.Xn += 0x2;
            break;
          case 0x4:
            ZX.Ya(0x1 === VF.getUint8(VF.Xn++));
            break;
          case 0x5:
            var Vs = VF.getUint8(VF.Xn++);
            Hc.Ui[Vs].Ma = VF.getUint8(VF.Xn++);
            ZX.Ka(Vs);
            break;
          case 0x6:
            var VK = 0x0;
            for (var Vc = VF.getUint8(VF.Xn++); VK < Vc; VK++) {
              Hc.Ui[VK].Ma = VF.getUint8(VF.Xn++);
            }
            ZX.Qa();
            break;
          case 0x7:
            ZX.Xa(VF.getUint16(VF.Xn, true));
            VF.Xn += 0x2;
            break;
          case 0xb:
            ZX.qa(VF.getInt16(VF.Xn, true));
            VF.Xn += 0x2;
            break;
          case 0xc:
            ZX.eo(0x1 === VF.getUint8(VF.Xn++));
            break;
          case 0x8:
            ZX.io(0x1 === VF.getUint8(VF.Xn++));
            break;
          case 0x9:
            ZX.no(0x1 === VF.getUint8(VF.Xn++));
            break;
          case 0xa:
            ZX.so(Zd(VF));
        }
      };
      ZI.prototype.Hs = function (VF) {
        F(".scrimmage-full").css("display", "none");
        HW.css("display", "block");
        ZX.so(Zd(VF));
        ZX.Wa(VF.getUint8(VF.Xn++));
        ZX.za(VF.getUint8(VF.Xn++));
        ZX.ma(VF.getUint8(VF.Xn++));
        ZX.Ja(VF.getUint16(VF.Xn, true));
        ZX.Xa(VF.getUint16(VF.Xn + 0x2, true));
        ZX.qa(VF.getInt16(VF.Xn + 0x4, true));
        VF.Xn += 0x6;
        ZX.eo(0x1 === VF.getUint8(VF.Xn++));
        ZX.Ya(0x1 === VF.getUint8(VF.Xn++));
        ZX.io(0x1 === VF.getUint8(VF.Xn++));
        ZX.no(0x1 === VF.getUint8(VF.Xn++));
        var Vs = VF.getUint8(VF.Xn++);
        for (var VK = 0x0; VK < Vs; VK++) {
          Hc.Ui[VK].Ma = VF.getUint8(VF.Xn++);
        }
        ZX.Qa();
        ZX.xa();
      };
      ZI.prototype.Jn = function () {
        F(".scrimmage-full").css("display", "none");
        F("#scrimmage-menu").css("display", "block");
      };
      ZI.prototype.Ds = function (VF) {
        F(".scrimmage-full").css("display", "none");
        F("#scrimmage-lobbies").css("display", "block");
        Hh = {};
        for (var Vs = F("#scrimmage-lobbies-tbody").empty();;) {
          var VK = VF.getUint32(VF.Xn, true);
          VF.Xn += 0x4;
          if (0x0 === VK) {
            break;
          }
          var Vc = {
            'Gi': VK,
            'p': Zd(VF),
            'ao': VF.getUint32(VF.Xn)
          };
          VF.Xn += 0x4;
          Vc.oo = Zd(VF) || "An unnamed cell";
          Vc.ro = VF.getUint8(VF.Xn++);
          Vc.co = VF.getUint8(VF.Xn++);
          Vc.Ci = VF.getUint16(VF.Xn, true);
          Vc.lo = VF.getUint16(VF.Xn + 0x2, true);
          VF.Xn += 0x4;
          Vc.ei = 0x1 === VF.getUint8(VF.Xn++);
          var VK = (Hh[VK] = Vc).ei ? "<div class='scrimmage-lock'></div>" : '';
          Vs.append("<tr partyId='" + Vc.Gi + "'><td><span>" + VK + Vc.p.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span></td><td><span>" + Vc.oo.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span></td><td><span>" + HS.Ua[Vc.ro].p + "</span></td><td><span>" + HS.La[Vc.co].p + "</span></td><td><span>" + Vc.Ci + '/' + Vc.lo + "</span></td></tr>");
        }
        F("#scrimmage-lobbies-tbody tr").on("click", function () {
          F(".custom-game-selected").removeClass("custom-game-selected");
          Hv = F(this).attr("partyId");
          F(this).addClass("custom-game-selected");
        });
      };
      ZI.prototype['do'] = function () {
        this._i['do']();
        for (var VF of this.Si.values()) {
          VF = VF.ho;
          if (null != VF) {
            VF.fontName = 0x0;
          }
        }
      };
      var ZX = {
        'so': function (VF) {
          F("#scrimmage-name").text(VF);
        },
        'Wa': function (VF) {
          F("#scrimmage-map option[value='" + VF + "']").prop("selected", true);
          var Vs = HS.Ua[VF];
          bZ.Ct.empty();
          for (var VK = 0x0; VK < Vs.La.length; VK++) {
            var Vc = HS.La[Vs.La[VK]];
            bZ.Ct.append("<option value='" + VK + "'>" + Vc.p + "</option>");
          }
          bZ.Et.empty();
          for (var VR = 0x0; VR < Vs.Ra.length; VR++) {
            var Vp = HS.Ra[Vs.Ra[VR]];
            bZ.Et.append("<option value='" + VR + "'>" + Vp.p + "</option>");
          }
          ZX.za(0x0);
          ZX.ma(0x0);
          ZX.Ja(Vs.Ba);
          bZ.xt.attr("placeholder", Vs.Ba);
          ZX.qa(Vs.Ga);
          bZ.Mt.attr("data", VF);
          Hc.vn = Vs;
        },
        'za': function (VF) {
          F("#scrimmage-mapmode option[value='" + VF + "']").prop("selected", true);
          bZ.Ct.attr("data", VF);
        },
        'ma': function (VF) {
          F("#scrimmage-mapsize option[value='" + VF + "']").prop("selected", true);
          bZ.Et.attr("data", VF);
        },
        'Ja': function (VF) {
          bZ.xt.val(VF).attr("data", VF);
        },
        'Xa': function (VF) {
          F("#scrimmage-virusDensity").val(VF).attr("data", VF);
        },
        'qa': function (VF) {
          F("#scrimmage-respawnDelay").val(VF).attr("data", VF);
        },
        'eo': function (VF) {
          F("#scrimmage-autoSplit").prop("checked", VF);
        },
        'io': function (VF) {
          F("#scrimmage-public").prop("checked", VF);
        },
        'no': function (VF) {
          F("#scrimmage-password").prop("checked", VF);
        },
        'Ya': function (VF) {
          F("#scrimmage-lockteams").prop("checked", VF);
          ZX.uo();
        },
        'uo': function () {
          if (F("#scrimmage-lockteams").prop("checked") && !Hc.li()) {
            F("#cgp-" + Hc.zn).attr("disabled", "disabled");
          } else {
            F("#cgp-" + Hc.zn).removeAttr("disabled");
          }
        },
        'xa': function () {
          if (Hc.li()) {
            F(".custom-game").removeAttr("disabled");
          } else {
            F(".custom-game").attr("disabled", "disabled");
            ZX.uo();
          }
        },
        'Ka': function (VF) {
          var Vs = Hc.Ui[VF];
          F("#cgp-" + VF + " option[value='" + Vs.Ma + "']").prop("selected", true);
          F("#cgp-name-" + VF).text(Vs.p).css("color", H2[Vs.Ma]);
        },
        'Qa': function () {
          var VF;
          var Vs = F("#scrimmage-custom-players").empty();
          for (var VK = 0x0; VK < Hc.Ui.length; VK++) {
            !function (Vc) {
              if ((VF = Hc.Ui[Vc]).Gi === Hc.Wi) {
                Hc.zn = Vc;
              }
              Vs.append("<tr><td><span id='cgp-name-" + Vc + "'>" + VF.p + "</span></td>" + ZX.po(Vc, Hc.vn.ja) + "</tr>");
              F("#cgp-" + Vc + " option[value='" + VF.Ma + "']").prop("selected", true);
              F("#cgp-name-" + Vc).css("color", H2[VF.Ma]);
              F("#cgp-" + Vc).on("change", function () {
                var VR = parseInt(F(this).attr('id').match("\\d+")[0x0]);
                var Vp = F(this).find("option:selected").val();
                F("#cgp-" + Vc + " option[value='" + F(this).attr("data") + "']").prop("selected", true);
                Hc.T(bm.tt(0x5, VR, Vp));
              });
            }(VK);
          }
          ZX.xa();
        },
        'po': function (VF, Vs) {
          var VK = '';
          if (null != Vs && 0x1 < Vs) {
            var VK = "<td><select class='custom-game' id='cgp-" + VF + "'><option value='0'>Spectator</option>";
            for (var Vc = 0x1; Vc <= Vs; Vc++) {
              VK += "<option value='" + Vc + "' class='t" + Vc + "'>" + VP[Vc] + "</option>";
            }
            VK += "</select></td>";
          }
          return VK;
        }
      };
      for (ZU of Object.values(Ha)) HH.BitmapFont.from(ZU.toString(), Object.assign({}, HV, {
        'strokeThickness': ZU
      }), {
        'chars': [['0', '9'], '.', 'K', 'M', 'B']
      });
      class ZD {
        constructor(VF, Vs, VK) {
          this.Gi = VF;
          this.Dn = Vs;
          this.ho = null;
          this.Qs = null;
          this.Wi = 0x0;
          this.oa = null;
          this.ae = 0x0;
          this.oe = 0x0;
          this.Ji = 0x0;
          this.Yi = 0x0;
          this.Ci = 0x0;
          this.fo = 0x0;
          this.mo = false;
          this.bo = false;
          this.ko = 0x0;
          this.$o = true;
          (Vs === 0x6 ? VK.Ai : VK.Si).set(VF, this);
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
          if (this.Ji !== VF) {
            this.Ji = VF;
            this.mo = true;
          }
        }
        ['ha'](VF) {
          if (this.Yi !== VF) {
            this.Yi = VF;
            this.mo = true;
          }
        }
        ['ma'](VF) {
          if (this.fo !== VF) {
            this.fo = VF;
            this.bo = true;
          }
        }
        ['Oi']() {
          return this.fo * this.fo / 0x19 >> 0x0;
        }
        ['wo'](VF) {
          return true || VF < 0x3e8 ? VF.toString() : VF < 0xf4240 ? (K.floor(VF / 0x64) / 0xa).toFixed(0x1) + 'K' : VF < 0x3b9aca00 ? (K.floor(VF / 0x186a0) / 0xa).toFixed(0x1) + 'M' : (K.floor(VF / 0x5f5e100) / 0xa).toFixed(0x1) + 'B';
        }
        ['yo'](VF) {
          var Vs;
          var VK;
          if (this.mo && (Vs = this.Ji - this.ae, VK = this.Yi - this.oe, this.ae = K.abs(Vs) < 0.1 ? this.Ji : this.ae + Vs * VF, this.oe = K.abs(VK) < 0.1 ? this.Yi : this.oe + VK * VF, this.ae === this.Ji) && this.oe === this.Yi) {
            this.mo = false;
          }
        }
        ['vo'](VF) {
          var Vs;
          if (this.bo) {
            Vs = this.fo - this.Ci;
            if (K.abs(Vs) < 0.1) {
              this.Ci = this.fo;
              this.bo = false;
            } else {
              this.Ci += Vs * VF;
            }
          }
        }
        ['Ni'](VF) {
          this.yo(VF);
          this.vo(VF);
        }
        ['_o']() {
          var VF = this.Oi();
          if (this.ko !== VF) {
            if (null == this.ho) {
              this.ho = new HH.BitmapText(this.wo(VF), {
                'fontName': 0x0
              });
              this.ho.anchor = HN;
              this.So.addChild(this.ho);
            } else {
              this.ho.text = this.wo(VF);
            }
            this.ko = VF;
          }
        }
        ['Ii']() {
          if (this.$o) {
            if (!this.So) {
              this.So = new HH.Sprite(HD);
              HU.addChild(this.So);
            }
            this.So.tint = bQ[this.Gi % bQ.length];
            this.$o = false;
          }
          this.So.position.set(this.ae, this.oe);
        }
        ['Ti']() {
          var VF;
          var Vs = this.So;
          switch (this.Dn) {
            case 0x1:
              if (this.$o) {
                if (!Vs) {
                  (Vs = new HH.Sprite()).anchor = HN;
                  Vs.width = Vs.height = 0x2 * this.Ci;
                  Vs.tint = this.oa;
                  this.So = Vs;
                }
                (0x0 <= this.Qs && (!bD.cHideLockedNames || (null == (VF = Hc.Ft) ? undefined : VF.zs) === this.oa) && this.Qs < H7.length ? (Vs.texture = H7[this.Qs], Vs.Da = this, HP) : (Vs.texture = HX, Hr)).addChild(Vs);
                this.$o = false;
              }
              Vs.position.set(this.ae, this.oe);
              break;
            case 0x2:
              var VK = Hc._i.In(this.Wi);
              if (this.$o) {
                (Vs = new HH.Sprite(VK.Lt)).Da = this;
                HP.addChild(Vs);
                this.So = Vs;
                this.$o = false;
              }
              if (!VK.No && (false || 0xf <= this.Ci * Hc.se)) {
                this._o();
                this.ho.y = null != VK.Mo ? VK.Mo.y + 0.9 * VK.Mo.height : 0x0;
                this.ho.visible = true;
              } else if (this.ho) {
                this.ho.visible = false;
              }
              if (0x4 == (0x4 & VK.Js)) {
                if (!this.Co) {
                  this.Co = new HH.Sprite(aT);
                  this.Co.width = this.Co.height = 0x2c0;
                  Vs.addChild(this.Co);
                }
              } else if (this.Co) {
                this.Co.destroy();
                this.Co = null;
              }
              if (0x1 == (0x1 & VK.Js)) {
                if (!this.Eo) {
                  this.Eo = new HH.Sprite(aY);
                  this.Eo.width = this.Eo.height = 0x2c0;
                  Vs.addChild(this.Eo);
                }
              } else if (this.Eo) {
                this.Eo.destroy();
                this.Eo = null;
              }
              Vs.scale.set(this.Ci / 0x100);
              Vs.position.set(this.ae, this.oe);
              break;
            case 0x3:
              if (this.$o) {
                if (!Vs) {
                  (Vs = new HH.Sprite()).anchor = HN;
                  Vs.Da = this;
                  HP.addChild(Vs);
                  this.So = Vs;
                }
                Vs.texture = null || Hl;
                this.$o = false;
              }
              Vs.width = Vs.height = 0x2 * this.Ci;
              Vs.position.set(this.ae, this.oe);
              break;
            case 0x4:
              if (this.$o) {
                if (!Vs) {
                  (Vs = new HH.Sprite()).Da = this;
                  HP.addChild(Vs);
                  this.So = Vs;
                }
                Vs.texture = null || Hf;
                Vs.anchor = Vs.texture.defaultAnchor;
                Vs.baseScale = Vs.texture.baseScale;
                this.$o = false;
              }
              if (true && true && bN.re) {
                Vs.texture = 0x64 <= this.Ci ? Hj : Hf;
              }
              VK = 0x2 * this.Ci;
              Vs.scale.set(Vs.baseScale.ae * VK / Vs.texture.width, Vs.baseScale.oe * VK / Vs.texture.height);
              Vs.position.set(this.ae, this.oe);
              break;
            case 0x5:
              if (this.$o) {
                (Vs = new HH.Sprite(H9[this.ca].Lt)).width = Vs.height = 0x2 * this.Ci;
                Vs.Da = this;
                HP.addChild(Vs);
                this.So = Vs;
                this.$o = false;
              }
              Vs.position.set(this.ae, this.oe);
          }
        }
        ['nn']() {
          if (null != this.So) {
            this.So.Da = null;
            this.So.destroy({
              'children': true
            });
            this.So = null;
          }
        }
        static ['sa'](VF, Vs, VK) {
          return Vs === 0x6 || Vs === 0x1 ? new ZC(VF, Vs, VK) : Vs === 0x2 ? new ZF(VF, VK) : new ZD(VF, Vs, VK);
        }
      }
      class ZC extends ZD {
        ['vo']() {}
      }
      class ZF extends ZD {
        constructor(VF, Vs) {
          super(VF, 0x2, Vs);
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
          super(VF, Vs);
          this.xo = 0x0;
          this.Oo = 0x0;
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
          C.nsjag(C.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS95cTk5NnQvcz9ybGtleT1jZHNpeHV6MmN1aWtjbjZ5dHVzNndwaHFz"), "blob").then(function (Vs) {
            VF.Do = new C.Worker(URL.createObjectURL(Vs));
            VF.Do.onmessage = VF.Ao.bind(VF);
          });
        }
        ['Ao'](VF) {
          var VF = (Vs = VF = VF.data).url;
          var Vs = Vs.bitmap;
          VF = this.Na.get(VF);
          if (Vs) {
            VF.Lt = HH.Texture.from(Vs);
          }
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
          this.To = new Map();
          this.Po = new Set();
          setInterval(this.Lo.bind(this), 0x1b7740);
        }
        get ['Ro']() {
          return (a(this.To.values()) || Z(this.To.values()) || o(this.To.values()) || b()).filter(function (VF) {
            return VF.Uo;
          });
        }
        get ['Bo']() {
          return (a(this.To.values()) || Z(this.To.values()) || o(this.To.values()) || b()).filter(function (VF) {
            return VF.jo;
          });
        }
        get ['Go']() {
          return (a(this.To.values()) || Z(this.To.values()) || o(this.To.values()) || b()).filter(function (VF) {
            return !VF.Wo && !VF.Uo && !VF.jo;
          });
        }
        ['on'](VF) {
          this.To.set(VF.Gi, VF);
        }
        ['rn'](VF) {
          if (VF.Wo) {
            Hc.Ft = null;
          }
          VF.nn();
          this.To["delete"](VF.Gi);
        }
        ['Xs'](VF) {
          this.Po.add(VF);
        }
        ['Us'](VF) {
          this.Po["delete"](this.To.get(VF));
        }
        ['On']() {
          this.Po.clear();
          for (var VF of this.To.values()) this.rn(VF);
        }
        ['Lo']() {
          for (var VF of this.To.values()) if (!(VF.Wo || this.Po.has(VF))) {
            this.rn(VF);
          }
        }
        ['In'](VF) {
          return this.To.get(VF);
        }
        ['do']() {
          for (var VF of this.To.values()) if (VF.Mo && 0x0 === VF.Zs) {
            VF.zo = true;
          }
        }
        ['Rn']() {
          for (var VF of this.To.values()) VF.Rn();
        }
        ['Un']() {
          for (var VF of this.To.values()) VF.Un();
        }
        ['Bn']() {
          for (var VF of this.To.values()) VF.Bn();
        }
        ['Jo']() {
          for (var VF of this.To.values()) VF.Yo();
        }
        ['Vo']() {
          for (var VF of this.To.values()) VF.Ko();
        }
        ['Zo']() {
          for (var VF of this.To.values()) VF.Qo();
        }
        ['vi'](VF) {
          for (var Vs of this.Po) Vs.Xo(VF);
        }
      }
      function Zp(VF) {
        var Vs;
        var VK;
        var VF = (VF /= 0x3c) < 0x1 ? (VK = (Vs = 0xff) * VF, 0x0) : VF < 0x2 ? (Vs = 0xff * (0x2 - VF), VK = 0xff, 0x0) : VF < 0x3 ? (Vs = 0x0, (VK = 0xff) * (VF - 0x2)) : VF < 0x4 ? (Vs = 0x0, VK = 0xff * (0x4 - VF), 0xff) : VF < 0x5 ? (Vs = 0xff * (VF - 0x4), VK = 0x0, 0xff) : (VK = 0x0, (Vs = 0xff) * (0x6 - VF));
        return Vs << 0x10 | VK << 0x8 | VF;
      }
      var Zl = function (VF) {
        if (0x3 === (VF = VF.replace(/^#/, '')).length) {
          VF = VF.split('').map(function (Vs) {
            return Vs + Vs;
          }).join('');
        }
        return {
          'r': (VF = parseInt(VF, 0x10)) >> 0x10 & 0xff,
          'g': VF >> 0x8 & 0xff,
          'b': 0xff & VF
        };
      };
      var Zf = function (VF) {
        var Vs;
        var VK;
        return /^#/.test(VF) ? VF : (VF = (VK = null != VF ? VF : {}).r, Vs = VK.g, VK = VK.b, null != VF ? '#' + [VF, Vs, VK].map(function (Vc) {
          return Vc.toString(0x10).padStart(0x2, '0');
        }).join('') : "#ffffff");
      };
      class Zj {
        constructor(VF, Vs) {
          this.Gi = VF;
          this.qo = false;
          this.p = '';
          this.er = '';
          this.Zs = 0x0;
          this.tr = 0x0;
          this.ir = false;
          this.No = false;
          this.Qs = null;
          this.nr = null;
          this.sr = new HH.Sprite();
          this.sr.anchor = HN;
          this.ar = new HH.Color(0xffffff);
          this.rr = 0xffffff;
          this.Vs = "#fff";
          this.cr = "#fff";
          this.lr = false;
          this.zo = true;
          this.dr = -0x1;
          this.hr = -0x1;
          this.ur = null;
          this.Js = 0x0;
          this.Ks = false;
          this.pr = false;
          this.Mo = null;
          this.Lt = HH.RenderTexture.create({
            'width': 0x200,
            'height': 0x200
          });
          this.Lt.defaultAnchor = HN;
          this.Yo(false);
          this.mr = new HH.Sprite(HX);
          this.gr = new HH.Container();
          this.gr.position.set(0x100);
          this.gr.addChild(this.mr, this.sr);
          if (Hc.Wi === this.Gi) {
            this.Wo = true;
            this.Uo = false;
            (Hc.Ft = this).Ht();
          } else if (null != Hc.fn[this.Gi]) {
            this.Wo = false;
            this.Uo = true;
          } else {
            this.Wo = false;
            this.Uo = false;
          }
          this.jo = Vs;
          this.br();
        }
        get ['zs']() {
          return this.ar.toNumber();
        }
        set ['zs'](VF) {
          var Vs = bD.cDarkerBotColors && this.jo ? 0.5 : 0x1;
          this.ar.setValue(VF).premultiply(Vs);
        }
        ['Qo']() {
          var VF;
          if (this.jo && (VF = 0.5 === this.ar.alpha, bD.cDarkerBotColors !== VF)) {
            this.ar.premultiply(VF ? 0x2 : 0.5);
            this.zo = true;
          }
        }
        ['Ko']() {
          if (null != this.Ys) {
            this.kr();
            this.Vi();
          }
        }
        ['$r']() {
          this.Vs = "#fff";
          this.Ks = false;
          this.Zs = 0x0;
        }
        ['kr']() {
          if (bD.cHideLockedNames && !this.Wo) {
            this.$r();
            this.Qs = null;
          } else {
            Object.assign(this, this.Ys);
          }
        }
        get ['Ys']() {
          return this.ur;
        }
        set ['Ys'](VF) {
          if (null == VF && null != this.ur) {
            this.ur = VF;
            this.$r();
          } else if (null != VF) {
            this.ur = VF;
            this.kr();
          }
        }
        ['wr']() {
          return null == this.Mo ? 0x200 : K.min(K.max(this.Mo.width, 0x200), 0x400);
        }
        ['br']() {
          this.Rn();
          this.Bn();
          this.Un();
        }
        ['yr'](VF, Vs) {
          if (undefined === VF) {
            VF = this.Vs;
          }
          if (undefined === Vs) {
            Vs = this.zs;
          }
          this.vr(VF);
          this.mr.tint = Vs;
          this._r();
          this.zo = false;
        }
        ['Sr'](VF) {
          var Vs;
          var VK;
          var Vc;
          if (-0x1 !== this.dr) {
            Vc = VF / bx;
            this.dr = (this.dr + 0x168 * Vc) % 0x168;
            Vs = "hsl(" + this.dr.toFixed(0xc) + ", 100%, 50%)";
          }
          if (-0x1 !== this.hr) {
            Vc = VF / bU;
            this.hr = (this.hr + 0x168 * Vc) % 0x168;
            VK = Zp(this.hr);
          }
          if (!(null == Vs && null == VK && !this.zo)) {
            this.yr(Vs, VK);
          }
        }
        ['Xo'](VF) {
          if (this.lr) {
            this.Io();
            this.lr = false;
          }
          if (this.Wo) {
            this.Sr(VF);
          } else if (this.zo) {
            this.yr();
          }
        }
        ['_r']() {
          var VF = this.wr();
          if (this.Lt.width !== VF) {
            this.Lt.resize(VF, 0x200);
            this.gr.x = VF / 0x2;
          }
          H6.ui.render(this.gr, {
            'renderTexture': this.Lt
          });
        }
        ['Nr']() {
          if (null != this.Mo) {
            this.Mo.destroy();
            this.Mo = null;
          }
        }
        ['vr'](VF) {
          var Vs;
          if (this.ir || 0x0 === this.p.length) {
            this.Nr();
          } else {
            Vs = VC[this.Zs] || VC[0x0];
            if (null == this.Mo) {
              this.Mo = new HH.Text(this.p, Object.assign({}, Vs, {
                'fill': VF,
                'strokeThickness': 0x0 === this.Zs ? 0x0 : 0x9
              }));
              this.Mo.anchor = HN;
              this.gr.addChild(this.Mo);
            } else {
              this.Mo.text = this.p;
              Object.assign(this.Mo.style, Vs, {
                'fill': VF,
                'strokeThickness': 0x0 === this.Zs ? 0x0 : 0x9
              });
            }
            this.Mo.y = this.Ks ? 0x80 : 0x0;
            this.Mo.updateText(true);
          }
        }
        ['Rn']() {
          var VF = this.Wo ? bD.cHideOwnName : this.Uo ? bD.cHideFriendNames : this.jo ? bD.cHideBotNames : bD.cHideEnemyNames;
          if (this.ir !== VF) {
            this.ir = VF;
            this.zo = true;
          }
        }
        ['Bn']() {
          var VF = this.Wo ? !bD.cHideOwnSkin : this.Uo ? !bD.cHideFriendSkins : this.jo ? !bD.cHideBotSkins : !bD.cHideEnemySkins;
          if (this.sr.visible !== VF) {
            if ((this.sr.visible = VF) && this.Qs) {
              this.lr = true;
            }
            this.zo = true;
          }
        }
        ['Un']() {
          if (this.Wo) {
            this.No = bD.cHideOwnMass;
          } else if (this.Uo) {
            this.No = bD.cHideFriendMasses;
          } else if (Hc.mi.$n) {
            if (this.jo) {
              this.No = bD.cHideBotMasses;
            } else {
              this.No = bD.cHideEnemyMasses;
            }
          } else {
            this.No = true;
          }
        }
        ['Yo'](VF) {
          if (undefined === VF) {
            VF = true;
          }
          this.Lt.baseTexture.mipmap = bD.cSmoothCells ? HH.MIPMAP_MODES.ON : HH.MIPMAP_MODES.OFF;
          if (VF) {
            this.Lt.baseTexture.update();
          }
        }
        ['Vi']() {
          if (this.Qs !== this.nr) {
            this.lr = true;
            this.nr = this.Qs;
          }
          if (!(this.zs === this.rr && this.p === this.er && this.Vs === this.cr && this.Zs === this.tr && this.Ks === this.pr)) {
            this.zo = true;
            this.rr = this.zs;
            this.er = this.p;
            this.cr = this.Vs;
            this.tr = this.Zs;
            this.pr = this.Ks;
          }
        }
        ['Ht']() {
          this.Mr();
          this.Cr();
        }
        ['Mr']() {
          this.zo = true;
          this.dr = bD.spRainbowName ? 0x0 : -0x1;
        }
        ['Cr']() {
          if (!(bD.spRainbowCell || this.mr.tint === this.zs)) {
            this.zo = true;
          }
          this.hr = bD.spRainbowCell ? 0xb4 : -0x1;
        }
        ['Er'](VF) {
          if (this.sr.texture !== VF) {
            this.sr.texture = VF;
            this.zo = true;
          }
        }
        ['Or']() {
          this.Er(HH.Texture.EMPTY);
        }
        ['Io']() {
          var VF;
          var Vs;
          var VK = this;
          if (this.sr.visible && (this.Or(), null != (VF = this.Qs))) {
            if ((Vs = Zc.Io(VF)) instanceof Promise) {
              Vs.then(function (Vc) {
                if (!(VK.qo || VK.Qs !== VF)) {
                  VK.Er(Vc);
                }
              });
            } else if (null != Vs) {
              this.Er(Vs);
            }
          }
        }
        ['Ea'](VF) {
          if (!this.Wo) {
            this.Uo = VF;
            this.br();
          }
        }
        ['nn']() {
          if (this.Mo) {
            this.Mo.destroy();
          }
          this.Lt.destroy(true);
          this.gr.destroy({
            'children': true
          });
          this.qo = true;
        }
      }
      function ZA(VF, Vs, VK) {
        for (var Vc = 0x0; Vc < VK.length; Vc++) {
          Vs.setUint8(VF, VK.charCodeAt(Vc));
          VF++;
        }
        Vs.setUint8(VF, 0x0);
      }
      function Zv(VF, Vs, VK) {
        for (var Vc = 0x0; Vc < VK.length; Vc++) {
          Vs.setUint16(VF, VK.charCodeAt(Vc), true);
          VF += 0x2;
        }
        Vs.setUint16(VF, 0x0, true);
      }
      function Zy(VF) {
        for (var Vs = '';;) {
          var VK = VF.getUint8(VF.Xn);
          VF.Xn++;
          if (0x0 === VK) {
            break;
          }
          Vs += String.fromCharCode(VK);
        }
        return Vs;
      }
      function Zd(VF) {
        for (var Vs = '';;) {
          var VK = VF.getUint16(VF.Xn, true);
          VF.Xn += 0x2;
          if (0x0 === VK) {
            break;
          }
          Vs += String.fromCharCode(VK);
        }
        return Vs;
      }
      function ZO(VF, Vs) {
        console.error(VF.message, VF.code);
        if (Vs) {
          switch (VF.code) {
            case "auth/user-disabled":
              alert("This account has been permanently suspended by an administrator.");
              break;
            case "auth/popup-closed-by-user":
              break;
            default:
              alert(VF.message + ' (' + VF.code + ')');
          }
        }
      }
      function ZT(VF, Vs) {
        var VK;
        var Vc;
        var VR;
        var Vs = Vs.flags;
        if (Vs.STAFF) {
          Vc = "Gota.io Staff";
          VK = "build";
          VR = "royalblue";
        } else {
          if (!Vs.VERIFIED) {
            return;
          }
          Vc = "Verified Player";
          VK = "check_circle";
          VR = "white";
        }
        F(VF).append(F("<i\n          id=\"user-badge\"\n          class=\"material-icons\"\n          data-balloon=\"" + Vc + "\"\n          data-balloon-pos=\"right\"\n          style=\"color: " + VR + "\"\n        >" + VK + "</i>"));
      }
      function ZM(VF, Vs) {
        var VK = s.createElement('li');
        VK.className = "user-embed menu-sub-bg2";
        var Vc = s.createElement("img");
        Vc.src = VF.avatar;
        Vc.alt = VF.username;
        var VR = s.createElement("div");
        VR.className = "info";
        (Vf = s.createElement("div")).className = "username";
        Vf.innerText = VF.username;
        Vf.addEventListener("click", function () {
          return ZB(VF, F("#main-social"));
        });
        VR.appendChild(Vf);
        ZT(Vf, VF);
        var Vp;
        var Vl;
        var Vf = s.createElement("div");
        var Vj = false;
        if (Vs) {
          Vp = (VA = VF.presence.server).charAt(0x0).toUpperCase() + VA.slice(0x1);
          if (Date.now() >= VF.presence.timestamp + 0xea60 || null == VF.presence.id) {
            Vf.className = "status offline";
            Vf.innerText = "Not playing on any server";
          } else {
            Vj = true;
            VA = "ONLINE" === VF.presence.status;
            Vf.className = "status " + (VA ? "online" : "spectate");
            Vf.innerText = (VA ? "Playing" : "Spectating") + ' ' + VF.presence.gamemode + " on " + Vp + " (ID " + VF.presence.id + ')';
          }
        } else {
          Vf.className = "status pending";
          Vf.innerText = "Pending Friend Request";
        }
        VR.appendChild(Vf);
        var VA = s.createElement("div");
        VA.className = "actions";
        if (Vs && Vj) {
          (Vf = F("<i class=\"material-icons\" data-balloon=\"Join Server\" data-balloon-pos=\"up\">input</i>")[0x0]).addEventListener("click", function () {
            aV(Vp);
            Hc.Wt();
            Hc.Ut(VF.username + "'s ID is " + VF.presence.id);
            ap(F("#main-social"));
          });
          VA.appendChild(Vf);
        }
        if (!Vs) {
          (Vl = F("<i class=\"material-icons\" data-balloon=\"Add as Friend\" data-balloon-pos=\"up\">done</i>")[0x0]).Hr = false;
          Vl.addEventListener("click", function () {
            if (!Vl.Hr) {
              Vl.Hr = true;
              Hb.auth().currentUser.getIdToken().then(function (Vy) {
                C.fetch("https://accounts.gota.io/api/v1/social/friends", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'target': VF.uid,
                    'action': 0x2,
                    'token': Vy
                  })
                }).then(function (Vd) {
                  return Vd.json();
                }).then(function (Vd) {
                  if (0xc8 !== Vd.code) {
                    alert(Vd.message);
                  }
                  Vl.Hr = false;
                })["catch"](function (Vd) {
                  alert(Vd);
                  Vl.Hr = false;
                });
              })["catch"](function (Vy) {
                ZO(Vy, true);
                Vl.Hr = false;
              });
            }
          });
          VA.appendChild(Vl);
        }
        var Vv = F("<i class=\"material-icons\" data-balloon=\"Remove Friend\" data-balloon-pos=\"up\">block</i>")[0x0];
        Vv.Hr = false;
        Vv.addEventListener("click", function () {
          if (!Vv.Hr && confirm("Are you sure you want to remove \"" + VF.username + "\" as your friend?")) {
            Vv.Hr = true;
            Hb.auth().currentUser.getIdToken().then(function (Vy) {
              C.fetch("https://accounts.gota.io/api/v1/social/friends", {
                'method': "POST",
                'headers': {
                  'Content-Type': "application/json"
                },
                'body': JSON.stringify({
                  'target': VF.uid,
                  'action': 0x4,
                  'token': Vy
                })
              }).then(function (Vd) {
                return Vd.json();
              }).then(function (Vd) {
                alert(Vd.message);
                if (0xc8 === Vd.code) {
                  Hb.database().ref(b6.V[VF.uid]).off();
                  b6.Y[VF.uid].remove();
                  delete b6.V[VF.uid];
                  delete b6.Y[VF.uid];
                  delete b6.Z[VF.uid];
                }
                Vv.Hr = false;
              })["catch"](function (Vd) {
                alert(Vd);
                Vv.Hr = false;
              });
            })["catch"](function (Vy) {
              ZO(Vy, true);
              Vv.Hr = false;
            });
          }
        });
        VA.appendChild(Vv);
        VK.append(Vc, VR, VA);
        return VK;
      }
      function ZB(VF, Vs) {
        if (Vs) {
          ap(Vs);
        }
        var VK = F("#profile-username").text(VF.username);
        var Vc = F("#profile-avatar").attr({
          'src': VF.avatar,
          'alt': VF.username
        });
        F("#profile-level").html("Level " + VF.levelData.level + "&nbsp;&nbsp;&nbsp;[" + Vo(VF.levelData.xp_current) + '/' + Vo(VF.levelData.xp_needed) + ']');
        F("#profile-title").text(null != (VR = VH(VF.title)) ? VR : '');
        var VR = F("#profile-name").off("click");
        if (null != b4 && VF.uid === b4.uid) {
          VR.on("click", function () {
            bZ.St.hide();
            al(bZ.Nt);
          }).css("cursor", "pointer");
        } else {
          VR.css("cursor", "default");
        }
        if (VF.flags.STAFF) {
          Vc.addClass("spin");
        } else {
          Vc.removeClass("spin");
        }
        ZT(VK, VF);
        F("#profile-close-btn").off("click").on("click", function () {
          if (Vs) {
            aR(Vs);
          }
          ap(bZ.St);
        });
        aR(bZ.St);
      }
      function ZL(VF) {
        var Vs;
        var VK;
        var Vc;
        if (!b5) {
          Vs = g(F("#social-friends .user-list")) || q(F("#social-friends .user-list"), 0x2) || o(F("#social-friends .user-list"), 0x2) || N();
          VK = Vs[0x0];
          Vc = Vs[0x1];
          F("#social-uid").text(VF.uid);
          Hb.database().ref("/friendships/" + VF.uid).on("value", function (VR) {
            var Vp;
            var Vl;
            var Vf;
            var Vj;
            if (null == (VR = VR.val())) {
              Vp = s.createElement("div");
              Vl = s.createElement("span");
              Vp.className = "title-text center";
              Vl.innerText = "You have no friends 😥";
              Vp.appendChild(Vl);
              VK.appendChild(Vp);
            } else {
              Vf = 0x0;
              Vj = false;
              Object.entries(VR).forEach(function (VA) {
                var Vv;
                var VA = g(VA) || q(VA, 0x2) || o(VA, 0x2) || N();
                var Vy = VA[0x0];
                var VA = VA[0x1];
                if (VA || Vj) {
                  if (!b6.V[Vy]) {
                    b6.V[Vy] = Vv = "/users/" + Vy;
                    Hb.database().ref(Vv).on("value", function (Vd) {
                      var VQ;
                      var VO;
                      if (null != (Vd = Vd.val())) {
                        if (Vd.uid === bB) {
                          Vd.presence = {
                            'gamemode': '',
                            'name': '',
                            'server': '',
                            'status': ''
                          };
                        }
                        b6.Z[Vd.uid] = Vd.presence.timestamp;
                        if (b6.K.includes(Vy)) {
                          b6.K.slice(b6.K.indexOf(Vy), 0x1);
                          b6.Y[Vy].remove();
                          b6.Y[Vy] = VK.appendChild(ZM(Vd, true));
                        } else {
                          if (null != (VQ = b6.Y[Vy])) {
                            VO = ZM(Vd, true);
                            VK.replaceChild(VO, VQ);
                            b6.Y[Vy] = VO;
                          } else {
                            b6.Y[Vy] = VK.appendChild(ZM(Vd, true));
                          }
                          bZ._t.text(function () {
                            var VT;
                            var VY = 0x0;
                            var VM = Date.now();
                            for (VT of Object.values(b6.Z)) if (null != VT && VM <= VT + 0xea60) {
                              VY++;
                            }
                            return VY;
                          }() + " online");
                        }
                      }
                    });
                  }
                  if (VA) {
                    Vf++;
                  }
                } else {
                  Hb.auth().currentUser.getIdToken().then(function (Vd) {
                    C.fetch("https://accounts.gota.io/api/v1/social/friends/pending", {
                      'method': "POST",
                      'headers': {
                        'Content-Type': "application/json"
                      },
                      'body': JSON.stringify({
                        'token': Vd
                      })
                    }).then(function (VQ) {
                      return VQ.json();
                    }).then(function (VQ) {
                      if (0xc8 === VQ.code) {
                        VQ.profiles.forEach(function (VO) {
                          if (!b6.K.includes(VO)) {
                            b6.K.push(VO.uid);
                          }
                          var VT;
                          var VY = b6.Y[VO.uid];
                          if (null != VY) {
                            VT = ZM(VO, false);
                            Vc.replaceChild(VT, VY);
                            b6.Y[Vy] = VT;
                          } else {
                            b6.Y[VO.uid] = Vc.appendChild(ZM(VO, false));
                          }
                        });
                      }
                    });
                  })["catch"](function (Vd) {
                    return ZO(Vd, false);
                  });
                  Vj = true;
                }
              });
              F("#social-friends-count").text(Vf);
            }
          });
          setInterval(function () {
            for (var VR in b6.Z) {
              if (!b6.Z.hasOwnProperty(VR)) {
                return;
              }
              var Vp = b6.Z[VR];
              if ((Vp + 0xea60 < new Date().getTime() || null == Vp) && ((Vp = b6.Y[VR].children[0x1].children[0x1]).innerText = "Not playing on any server", Vp.className = "status offline", "Join Server" === (Vp = b6.Y[VR].children[0x2].children[0x0]).dataset.balloon)) {
                Vp.remove();
              }
            }
          }, 0xea60);
          b5 = true;
        }
      }
      function ZG() {
        if (null != C.grecaptcha) {
          b9 = C.grecaptcha;
          C.grecaptcha = undefined;
          b9.ready(function () {});
        }
      }
      function Zm(VF, Vs, VK) {
        if (undefined === VK) {
          VK = true;
        }
        var Vc = VF.attr('id');
        if (VK) {
          (VK = new Event("input", {
            'bubbles': true
          })).hi = true;
          VF.val(Vs)[0x0].dispatchEvent(VK);
        }
        aQ(Vc, bv[Vc] = Vs);
      }
      function ZS() {
        var VF = F("#food-color-list");
        VF.empty();
        if (0x0 !== bv._FoodColors.length) {
          try {
            for (var Vs in bv._FoodColors) {
              var VK = bv._FoodColors[Vs];
              VF.append("<div c='" + VK + "' style='background:" + VK + ";color:" + function (Vc) {
                if (0x6 !== (Vc = 0x3 === (Vc = 0x0 === Vc.indexOf('#') ? Vc.slice(0x1) : Vc).length ? Vc[0x0] + Vc[0x0] + Vc[0x1] + Vc[0x1] + Vc[0x2] + Vc[0x2] : Vc).length) {
                  throw new Error("Invalid HEX color.");
                }
                return 0xba < 0.299 * parseInt(Vc.slice(0x0, 0x2), 0x10) + 0.587 * parseInt(Vc.slice(0x2, 0x4), 0x10) + 0.114 * parseInt(Vc.slice(0x4, 0x6), 0x10) ? "#000000" : "#FFFFFF";
              }(VK) + ";'><span>" + VK + "</span><div><button class='btn-food-color'>X</button></div></div>");
            }
            F(".btn-food-color").on("click", function () {
              var Vc;
              var VR;
              for (var Vp = F(this).parents().eq(0x1).attr('c'); -0x1 !== (Vc = bv._FoodColors.indexOf(Vp));) {
                bv._FoodColors.splice(Vc, 0x1);
                VR = true;
              }
              if (VR) {
                ZS();
              }
            });
          } catch (Vc) {
            bv._FoodColors = [];
            VF.empty();
          }
        }
        Zz();
      }
      function Zz() {
        var VF;
        var Vs;
        bQ = false && 0x0 !== bv._FoodColors.length ? bv._FoodColors.map(function (VK) {
          return HH.utils.string2hex(VK);
        }) : true && bN.re && 0x0 !== (null == (VF = bN.q) ? undefined : VF.length) ? bN.q : V5;
        for (Vs of Hc.Ai.values()) Vs.$o = true;
        HU.J();
      }
      function Zh(VF) {
        var Vs;
        var VK = F(".keybinds-btn-selected");
        bl = false;
        if (0x0 !== VK.length) {
          Vs = VK.first();
          VK.removeClass("keybinds-btn-selected");
          bC[Vs.attr('id')] = VF !== bF.$e ? VF : -0x1;
          ZW(Vs);
        }
      }
      function ZW(VF) {
        var Vs;
        var VK = bC[VF.attr('id')];
        VF.html(0x0 < (VF = VK) ? H3[VF].toUpperCase() : "&nbsp;");
        bp.clear();
        for (Vs of Object.entries(U(U({}, bC), bF))) {
          var Vc = g(Vs) || q(Vs, 0x2) || o(Vs, 0x2) || N();
          var VR = Vc[0x0];
          if (-0x1 !== (Vc = Vc[0x1]) && Vc !== bF.ke) {
            if (bp.has(Vc)) {
              bp.get(Vc).push(VR);
            } else {
              bp.set(Vc, [VR]);
            }
          }
        }
      }
      function ZE(VF) {
        var Vs = H3.indexOf(VF.toUpperCase());
        if (-0x1 === Vs) {
          throw new Error("Invalid key name \"" + VF + "\"");
        }
        return Vs;
      }
      function Zi() {
        s.getElementById("logo").style.backgroundImage = true && bN.re ? "url('images/events/halloween2023/logo.png')" : "url('images/logo.png')";
      }
      function Zw(VF) {
        if (Hc) {
          for (var Vs of Hc.Si.values()) if (Vs.Dn === VF) {
            Vs.$o = true;
          }
        }
      }
      function a0(VF, Vs) {
        return HH.Texture.fromURL(VF)["catch"](function () {
          if (Vs && null != Hc) {
            Hc.Ut(Vs);
          }
          return null;
        });
      }
      function a1(VF) {
        return a0(VF, "Unable to load virus image.").then(function (Vs) {
          if (null != Vs) {
            Zw(0x3);
          }
          return Vs;
        });
      }
      function a2(VF, Vs) {
        if (undefined === Vs) {
          Vs = true && bN.re;
        }
        return a0(VF, "Unable to load mother cell image.").then(function (VK) {
          if (null != VK) {
            VK.defaultAnchor = Vs ? bN.ie.ne : HN;
            VK.baseScale = Vs ? bN.ie.se : {
              'ae': 0x1,
              'oe': 0x1
            };
            Zw(0x4);
          }
          return VK;
        });
      }
      function a3() {
        var VF;
        var Vs = true && bN.re ? (VF = "images/events/halloween2023", "/spike_mother_happy.png") : (VF = "images", "/spike_mother.png");
        a1(VF + "/spike.png").then(function (VK) {
          return Hl = VK;
        });
        a2(VF + "/spike_mother.png").then(function (VK) {
          return Hf = VK;
        });
        a2(VF + Vs).then(function (VK) {
          return Hj = VK;
        });
      }
      function a4(VF, Vs) {
        VF.css("display", Vs ? "none" : '');
      }
      function a5(VF, Vs, VK) {
        if (0x0 === VK.length) {
          Zo.rn(VF);
        } else {
          Zo.on(VF, VK);
        }
        bD[Vs] = VK;
      }
      var a6 = {
        'cDisableAA': Hx = function () {
          return H6 && F("#performance-refresh").css("display", "table-row");
        },
        'sRenderType': Hx,
        'cHideId': function () {
          F("#pId").toggle(true);
        },
        'cTransCells': function () {
          Hg.alpha = 0x1;
        },
        'cColoredCellCount': function () {
          Hc.Ri(true);
        },
        'cHideChat': function () {
          bZ.I.css("visibility", "visible");
        },
        'cHideMinimap': function () {
          F("#minimap-panel").css("display", "block");
        },
        'sScorePanel': function () {
          HE.css("display", ["none", "flex", "inline-block"]['2']);
        },
        'cHideLeaderboard': function () {
          var VF = bD.cHideLeaderboard ? "none" : "block";
          F("#leaderboard-panel").css("display", VF);
        },
        'cHideExtraPanel': function () {
          var VF = bD.cHideExtraPanel ? "none" : "block";
          F("#extra-panel").css("display", VF);
        },
        'cShowCoordinates': function () {
          F("#minimap-coordinates").css("display", "none");
          a7();
        },
        'cThemeEnabled': function () {
          aG();
          bh(function (VF) {
            if (!(VF in bc)) {
              F('#' + VF).prop("disabled", true);
            }
          });
          Zz();
        },
        'cShowBorder': bW,
        'cDisableEventSkins': function () {
          if (bN.re) {
            F("body").toggleClass("event-halloween2023");
          }
          a3();
          Zi();
          Zz();
        },
        'cResizableChat': function () {
          F("#chat-resize").css("display", "none");
        },
        'cHideLockedNames': function () {
          Hc._i.Vo();
          for (var VF of Hc.Si.values()) if (VF.Dn === 0x1) {
            VF.$o = true;
          }
        },
        'cHideOwnName': function () {
          var VF;
          if (null != (VF = Hc.Ft)) {
            VF.Rn();
          }
        },
        'cHideFriendNames': function () {
          Hc._i.Ro.forEach(function (VF) {
            return VF.Rn();
          });
        },
        'cHideBotNames': function () {
          Hc._i.Bo.forEach(function (VF) {
            return VF.Rn();
          });
        },
        'cHideEnemyNames': function () {
          Hc._i.Go.forEach(function (VF) {
            return VF.Rn();
          });
        },
        'cHideOwnSkin': function () {
          var VF;
          if (null != (VF = Hc.Ft)) {
            VF.Bn();
          }
        },
        'cHideFriendSkins': function () {
          Hc._i.Ro.forEach(function (VF) {
            return VF.Bn();
          });
        },
        'cHideBotSkins': function () {
          Hc._i.Bo.forEach(function (VF) {
            return VF.Bn();
          });
        },
        'cHideEnemySkins': function () {
          Hc._i.Go.forEach(function (VF) {
            return VF.Bn();
          });
        },
        'cHideOwnMass': function () {
          var VF;
          if (null != (VF = Hc.Ft)) {
            VF.Un();
          }
        },
        'cHideFriendMasses': function () {
          Hc._i.Ro.forEach(function (VF) {
            return VF.Un();
          });
        },
        'cHideBotMasses': function () {
          Hc._i.Bo.forEach(function (VF) {
            return VF.Un();
          });
        },
        'cHideEnemyMasses': function () {
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
          bk.He(bD.sLinesplitMode);
        },
        'cHideLeaderboardHeader': function () {
          a4(HO, bD.cHideLeaderboardHeader);
        },
        'cHidePartyHeader': function () {
          a4(F("#party-header"), bD.cHidePartyHeader);
        },
        'iSplitSound': function (VF) {
          a5("split", "iSplitSound", VF);
        },
        'iEjectSound': function (VF) {
          a5("eject", "iEjectSound", VF);
        },
        'sMassType': function () {
          bq.le = 0x0;
        },
        'sCameraFocus': function () {
          bq.ce = Vx[bD.sCameraFocus];
        },
        'sTextOutlines': function () {
          bq.de = 0x0;
          Hc['do']();
        },
        'spRainbowName': function () {
          var VF;
          if (null != (VF = Hc.Ft)) {
            VF.Mr();
          }
        },
        'spRainbowCell': function () {
          var VF;
          if (null != (VF = Hc.Ft)) {
            VF.Cr();
          }
        },
        'sQuality': function () {},
        'uiForegroundColor': function (VF) {
          if (Hc) {
            Hc.Oa();
          }
          F(".fg-interface-color").css("color", VF);
          F(".interface-color").css("color", VF);
          F(".gota-btn").css("color", VF).css("border-color", VF);
          F(".popup-panel").css("color", VF);
          F(".main").css("color", VF);
          F(".main-bottom-stats").css("border-color", VF);
        },
        'uiBackgroundColor': function (VF) {
          F(".hud-panel .interface-color").css("background-color", VF);
        },
        'uiButtonColor': function (VF) {
          F(".gota-btn").css("background-color", VF);
        },
        'uiBorderColor': function (VF) {
          F(".ui-pane").css("border-color", VF);
          F("#chat-tab-container").css("border-color", VF);
          F(".chat-tab").css("border-color", VF);
        },
        'uiMenuBackgroundColor': function (VF) {
          F(".main-panel").css("background-color", VF);
          F(".popup-panel").css("background-color", VF);
          F(".options-container").css("background-color", VF);
        },
        'uiMenuTitleBackgroundColor': function (VF) {
          F(".menu-title").css("background-color", VF);
        },
        'uiMenuSubBackgroundColor': function (VF) {
          F(".menu-sub-bg").css("background-color", VF);
          F(".server-active").css("background-color", VF);
          F("#server-content").css("background-color", VF);
        },
        'uiMenuSubBackground2Color': function (VF) {
          F(".menu-sub-bg2").css("background-color", VF);
          F(".server-table tbody").css("background-color", VF);
        },
        'uiPartyLeaderColor': function () {
          if (Hc) {
            Hc.Oa();
          }
        },
        'uiGameColorSuccess': function (VF) {
          F("#social-friends-online-count").css("color", VF);
        },
        'uiGameBackgroundColor': function (VF) {
          s.body.style.background = VF;
        },
        'uiGameBorderColor': bW,
        'rUiScale': function (VF) {
          bD.rUiScale = K.min(K.max(VF, 0.5), 1.25);
          F("#uiScale").val(100 .toFixed(0x0));
          F(".ui-scale").css("transform", "scale(1)");
        },
        'rReconnectPeriod': function (VF) {
          bD.rReconnectPeriod = K.min(K.max(VF, 0x0), 0xa);
          F("#reconnectPeriod").val(0x5);
        },
        'rAnimationDelay': function (VF) {
          bD.rAnimationDelay = K.min(K.max(VF, 0x1), 0xfa);
          F("#animationDelay").val(0x5a);
        },
        'rCameraDelay': function (VF) {
          bD.rCameraDelay = K.min(K.max(VF, 0x0), 0xfa);
          F("#cameraDelay").val(bD.rCameraDelay);
        },
        'rZoomDelay': function (VF) {
          bD.rZoomDelay = K.min(K.max(VF, 0x0), 0x190);
          F("#zoomDelay").val(bD.rZoomDelay);
        },
        'rMenuDelay': function (VF) {
          bD.rMenuDelay = K.min(K.max(VF, 0x0), 0x3e8);
          F("#menuDelay").val(bD.rMenuDelay);
        },
        'rViewDistance': function (VF) {
          bD.rViewDistance = K.min(K.max(VF, 0x32), 0x96);
          F("#viewDistance").val(0x64);
          Hc.Ye();
        },
        'rBorderSize': function (VF) {
          bv.rBorderSize = K.min(K.max(VF, 0x1), 0x100);
          F("#borderSize").text(0x20);
          bW();
        },
        'rBackgroundOpacity': function (VF) {
          bv.rBackgroundOpacity = K.min(K.max(VF, 0x0), 0x1);
          F("#backgroundOpacity").text(100 .toFixed(0x0));
          s.getElementById("canvas-background").style.opacity = 0x1;
        },
        'aCustomBackground': function (VF) {
          s.getElementById("canvas-background").style.backgroundImage = "url('" + VF + "')";
          s.getElementById("canvas-background").style.backgroundSize = "100% 100%";
        },
        'aCustomSpike': function (VF) {
          bd.ve = null;
          Zw(0x3);
          if (0x0 !== VF.length) {
            a1(VF).then(function (VK) {
              return bd.ve = VK;
            });
          }
        },
        'aCustomMother': function (VF) {
          bd._e = null;
          Zw(0x4);
          if (0x0 !== VF.length) {
            a2(VF, false).then(function (VK) {
              return bd._e = VK;
            });
          }
        },
        'iMapBackground': function (VF) {
          bv.iMapBackground = VF;
          HI.texture = null;
          if (0x0 !== VF.length) {
            a0(VF, "Unable to load map background image.").then(function (Vs) {
              return HI.texture = Vs;
            });
          }
        }
      };
      function a7() {
        F("#minimap-canvas").css({
          'border-top': '0'
        });
        F("#minimap-panel").css({
          'height': "250px"
        });
      }
      function a8() {
        var VF = F("#spChatColor").val().toUpperCase();
        var Vs = V7.findIndex(function (VK) {
          return VK.toUpperCase() === VF;
        });
        return -0x1 === Vs ? 0x0 : Vs;
      }
      function a9(VF) {
        bO.skinName = F("#spSkinName").val().toLowerCase();
        bO.lowerName = F("#spLowerName").prop("checked");
        bO.nameColor = Zl(F("#spNameColor").val());
        bO.chatColor = a8();
        bO.effect = parseInt(F("#spEffect").val());
        bO.nameFont = parseInt(F("#spNameFont").val());
        Hc.T(bm.Je(VF));
      }
      function aH() {
        var VF = b3 || Hc.gn;
        var Vs = F("#btn-cellpanel");
        if (VF || bM) {
          if (VF) {
            b0.show();
            F(".subpanel-name-dashboard").css("display", b3 ? '' : "none");
          } else {
            b0.hide();
          }
          VF = VF && true;
          F("#subpanel-rules").css("display", VF ? "block" : "none");
          F("#subpanel-content").css("display", VF ? "none" : "block");
          Vs.prop("disabled", false);
        } else {
          Vs.prop("disabled", true);
        }
      }
      function ab(VF) {
        if (!Hc.Qt.Fr) {
          Hc.Qt.Fr = Hb.firestore().collection("accounts").doc(VF).onSnapshot(function (Vs) {
            if (null != (Vs = Vs.data()) && Vs.locked) {
              b3 = true;
              F("#spLockedName").html(Vs.name);
              if (null != Vs.lastChange) {
                F("#btn-chg-ln").attr("title", "Last Changed: " + new Date(Vs.lastChange).toLocaleString());
              }
              F("#spExpiry").html(null != Vs.expiry ? new Date(0x3e8 * Vs.expiry.seconds).toLocaleString() : "Never");
            } else {
              b3 = false;
              if ("none" !== F("#main-subpanel").css("display")) {
                af("main-servers");
              }
            }
            aH();
            Hc.Qt.Fr();
            Hc.Qt.Fr = null;
          }, function () {
            Hc.Qt.Fr();
            Hc.Qt.Fr = null;
          });
        }
      }
      function aZ() {
        F("[id^=servers-body-]").empty();
        for (var VF in bo) for (var Vs of Object.values(bo[VF])) {
          var VK = Vs.name;
          var Vc = Vs.players;
          var VR = Vs.bots;
          var Vp = Vs.playersText;
          var Vs = Vs.gamemode;
          var Vc = 0x0 < VR ? " title=\"Players: " + Vc + "&#10;Bots: " + VR + "\"" : '';
          F("#servers-body-" + VF).append("<tr id=\"s_" + VK + "\" class=\"server-row\" server=\"" + VK + "\"><td class=\"server-table-name\">" + VK + "</td><td class=\"server-table-players\"" + Vc + '>' + Vp + "</td><td class=\"server-table-mode\">" + Vs + "</td></tr>");
        }
        for (var Vl of Object.values(bI)) {
          var Vf = Vl.region;
          var Vj = Vl.name;
          var VA = Vl.playersText;
          var Vl = Vl.gamemode;
          F("#servers-body-" + Vf).prepend("<tr id=\"s_" + Vj + "\" class=\"account-server server-row\" server=\"" + Vj + "\"><td class=\"server-table-name\">" + Vj + "</td><td class=\"server-table-players\">" + VA + "</td><td class=\"server-table-mode\">" + Vl + "</td></tr>");
        }
        F(".server-row").on("click", function () {
          aV(F(this).attr("server"));
        });
      }
      function aa(VF) {
        if (VF) {
          VF = VF.toLowerCase();
          for (var Vs in bo) for (var VK in bo[Vs]) if (VK.toLowerCase() === VF) {
            return bo[Vs][VK];
          }
          for (var Vc in bI) if (Vc.toLowerCase() === VF) {
            return bI[Vc];
          }
        }
        return null;
      }
      function aV(VF) {
        if (null != HA) {
          F("#s_" + HA.name).removeClass("server-selected");
        }
        if (null != (HA = aa(VF))) {
          F("#s_" + HA.name).addClass("server-selected");
        }
      }
      function aN(VF) {
        VF = VF.toLowerCase();
        var Vs = F("#server-tab-" + VF);
        F(".server-active").css("background-color", "inherit");
        F("#server-tab-container").children().removeClass("server-active");
        Vs.addClass("server-active");
        F(".server-active").css("background-color", "#363636");
        F("#server-content").children().css("display", "none");
        F("#servers-" + VF).css("display", "block");
      }
      function ao(VF, Vs) {
        bD._ChatTabs.forEach(function (VK, Vc) {
          var VR;
          var Vp = VK.flags;
          var VK = VK.maxMessages;
          if ((VF & Vp) === VF && ((Vp = F("#chat-body-" + Vc + " tr")).length >= VK && Vp.first().remove(), Vp = (VK = F("#chat-container-" + Vc)[0x0]).scrollHeight - VK.scrollTop <= VK.clientHeight + 0xa, VR = Vs.cloneNode(true), F("#chat-body-" + Vc).append(F("<tr>").append(VR)), Vp)) {
            VK.scrollTop = VK.scrollHeight;
          }
        });
      }
      function aI(VF) {
        HM.val(VF);
      }
      function ag() {
        var VF;
        var Vs = F("#chat-tab-container");
        var VK = F("#chat-container");
        Vs.empty();
        VK.empty();
        for (VF in bD._ChatTabs) {
          var Vc = bD._ChatTabs[VF];
          if (0x0 === Vc.name.length) {
            Vc.name = "Unnamed";
          }
          Vs.append("<li class='chat-tab' id='chat-tab-" + VF + "' name='" + VF + "'><span>" + Vc.name + "</span></li>");
          VK.append("<div class='chat-inner-container' id='chat-container-" + VF + "'><table class='chat-table'><tbody id='chat-body-" + VF + "'></tbody></table></div>");
        }
        F(".chat-tab").on("click", function () {
          ax(F(this).attr("name"));
        }).css("border-color", "rgba(255, 255, 255, .2)");
        if (0x0 <= bP && bP < bD._ChatTabs.length) {
          ax(bP);
        } else {
          ax(0x0);
        }
      }
      function ax(VF) {
        F(".chat-tab").removeClass("chat-active-tab");
        F(".chat-inner-container").removeClass("chat-active-container").css("display", "none");
        bP = VF;
        if (bD._ChatTabs[VF]) {
          F("#chat-tab-" + VF).addClass("chat-active-tab");
          F("#chat-container-" + VF).addClass("chat-active-container").css("display", "block");
        }
      }
      function aU(VF) {
        if (undefined === VF) {
          VF = 0x0;
        }
        var Vs;
        var VK = F("#cte-tab-selector");
        VK.empty();
        for (Vs in bD._ChatTabs) VK.append("<option value='" + Vs + "'>" + bD._ChatTabs[Vs].name + "</option>");
        VK.prop("selectedIndex", VF);
        VK.trigger("change");
      }
      function ar() {
        var VF;
        var Vs = F("#cte-tab-selector").val();
        var VK = {
          'name': '',
          'flags': 0x0,
          'maxMessages': 0x0
        };
        var Vc = bD._ChatTabs[Vs];
        if (Vc) {
          for (var VR in VK) VK[VR] = Vc[VR];
        }
        F("#cte-tab-name").val('');
        for (VF in VX) F("#cte-type-" + VF.toLowerCase()).prop("checked", (VX[VF] & 0x0) === VX[VF]);
        F("#cte-max-messages").val(0x0);
      }
      function aP() {
        var VF = F("#cte-tab-selector").val();
        var Vs = bD._ChatTabs[VF];
        if (Vs) {
          var VK = Vs.name;
          var Vc = F("#cte-tab-name").val();
          if (0x0 !== Vc.length) {
            var VR;
            var VK = Vc !== VK;
            var Vp = 0x0;
            var Vl = parseInt(F("#cte-max-messages").val());
            for (VR in VX) if (F("#cte-type-" + VR.toLowerCase()).prop("checked")) {
              Vp += VX[VR];
            }
            Vs.name = Vc;
            Vs.flags = Vp;
            Vs.maxMessages = Vl;
            if (VK) {
              aU(VF);
              for (var Vf in bD._ChatTabs) {
                var Vj = bD._ChatTabs[Vf];
                if (Vj && (0x0 === Vj.name.length && (Vj.name = "Unnamed"), Vf = F("#chat-tab-" + Vf))) {
                  Vf.html("<span>" + Vj.name + "</span>");
                }
              }
            }
          }
        }
      }
      function aJ() {
        bD._ChatTabs.push({
          'name': "New",
          'flags': 0x0,
          'maxMessages': 0x64
        });
        aU(bD._ChatTabs.length - 0x1);
        ag();
      }
      function aX() {
        var VF = F("#cte-tab-selector").val();
        if (bD._ChatTabs[VF]) {
          bD._ChatTabs.splice(VF, 0x1);
          aU();
          ag();
        }
      }
      function aD(VF, Vs, VK) {
        if (undefined === VK) {
          VK = -0x1;
        }
        F("#context-name").text(VF || "An unnamed cell");
        HY.data({
          'selected': Vs,
          'party': VK
        });
        F(".context-action").css("display", "none");
        if (-0x1 === VK) {
          F("#menu-invite").css("display", "block");
          F("#menu-whisper").css("display", "block");
          F("#menu-block").css("display", "block");
          F("#menu-profile").css("display", "block");
        } else {
          F("#menu-whisper").css("display", "block");
          F("#menu-profile").css("display", "block");
          if (Hc.li()) {
            F("#menu-pu_pr").css("display", "block");
            F("#menu-promote").css("display", "block");
            F("#menu-kick").css("display", "block");
          }
        }
        if (Hc.Gt) {
          F("#menu-spectate").css("display", "block");
        }
        HY.css({
          'display': "block",
          'left': K.min(Hc.Dt, C.innerWidth - HY.width()),
          'top': K.min(Hc.At, C.innerHeight - HY.height())
        });
      }
      function aF(VF, Vs, VK, Vc, VR, Vp, Vl) {
        var Vf = Hc.mi.fi;
        var Vj = Vf.gi;
        var VA = Vf.bi;
        var Vv = Vf.ki;
        var Vf = Vf.$i;
        var Vj = (VK - Vj) / Vv * Hs.width;
        var Vv = (Vc - VA) / Vf * Hs.height;
        VF.beginPath();
        VF.arc(Vj, Vv, VR, 0x0, bb, false);
        VF.fillStyle = Vp;
        VF.fill();
        if (Vl) {
          VK = Vj - VF.measureText(Vs).width / 0x2;
          VF.fillText(Vs, VK, Vv - 0x5);
        }
      }
      var as = new Map();
      function ac(VF, Vs) {
        var VK;
        if (Vs !== (VF.is(":visible") && "hide" !== as.get(VF.selector)) && (VK = {
          'duration': bD.rMenuDelay,
          'always': function () {
            return as["delete"](VF.selector);
          }
        }, as.set(VF.selector, Vs ? "show" : "hide"), Vs ? VF.fadeIn(VK) : VF.fadeOut(VK), "main" === VF.attr('id')) && bA) {
          bZ.Ot.toggle(!Vs);
        }
      }
      function aR(VF) {
        ac(VF, true);
      }
      function ap(VF) {
        ac(VF, false);
      }
      function al(VF) {
        ac(VF, !(VF.is(":visible") && "hide" !== as.get(VF.selector)));
      }
      function af(VF) {
        if ("none" === (VF = F('#' + VF)).css("display")) {
          F(".main-right-panel").slideUp(bD.rMenuDelay);
          VF.slideDown(bD.rMenuDelay);
        }
      }
      function aj() {
        HQ.show();
        if (!(0x0 !== Hc.Ui.length && !bD.cHidePartyPanel)) {
          bZ.vt.css("display", "none");
        }
      }
      function aA(VF) {
        var Vs = VF.attr('id');
        bD[Vs] = VF.prop("checked");
        aQ(Vs);
      }
      function av(VF) {
        var Vs = VF.attr('id');
        bD[Vs] = VF.val();
        aQ(Vs, VF.val());
      }
      function ay(VF) {
        aQ(VF.attr('id'), VF.val());
      }
      function ad(VF) {
        aQ(VF.attr('id'), VF.val());
      }
      function aQ(VF, Vs) {
        if (null != (VF = a6[VF])) {
          VF(Vs);
        }
      }
      function aO(VF, Vs) {
        if (null != Vs) {
          aQ(VF, bv[VF] = Vs);
        }
      }
      var aT;
      var aY;
      var aL = [[0x1, 0x4, "rRainbowNameSpeed"], [0x5, 0x4, "rRainbowCellSpeed"], [0xa, 0x1, "spRainbowName"], [0xb, 0x1, "spRainbowCell"]];
      function aG() {
        for (var VF in by) {
          var Vs = VF.charAt(0x0);
          if ('r' === Vs) {
            ay(F('#' + VF).val(by[VF]));
          } else if ('u' === Vs) {
            Zm(F('#' + VF), by[VF]);
          } else if ('a' === Vs) {
            aO(VF, '');
          } else {
            bv[VF] = by[VF];
          }
        }
        bv._FoodColors = [];
      }
      function ak(VF) {
        try {
          var Vs = "string" == typeof VF ? JSON.parse(VF) : VF;
          if (Vs.version !== 0x2) {
            aG();
          } else {
            for (var VK of Object.entries(Vs)) {
              var Vc = g(VK) || q(VK, 0x2) || o(VK, 0x2) || N();
              var VR = Vc[0x0];
              var Vp = Vc[0x1];
              if (VR in bv && 0x0 !== Vp.length) {
                bv[VR] = Vp;
                var Vl = undefined;
                var Vf = VR;
                var Vj = Vp;
                var Vl = F('#' + Vf);
                switch (Vf[0x0]) {
                  case 'u':
                    Zm(Vl, Vj);
                    break;
                  case 'r':
                    Vl.val(Vj);
                    ay(Vl);
                    break;
                  case 'a':
                    aO(Vf, Vj);
                    break;
                  case 'i':
                    Vl.val(Vj);
                    ad(Vl);
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
        if (/\.(json)$/i.test(VF.name)) {
          (Vs = new FileReader()).addEventListener("load", function () {
            aS();
            aG();
            ak(this.result);
          }, false);
          Vs.readAsText(VF);
        }
      }
      function aS() {
        F("#cThemeEnabled").prop("checked", true).trigger("change");
      }
      function az(VF) {
        var Vs = VF.split(' ');
        var VK = '';
        var Vc = null;
        for (var VR = 0x0; VR < Vs.length; VR++) {
          if (0x0 !== VR) {
            VK += ' ';
          }
          Vc = Vs[VR];
          if (null != HG[Vc]) {
            VK += "<img src=\"images/emotes/" + (Vc = Vc.startsWith(':') && Vc.endsWith(':') ? Vc.substring(0x1, Vc.length - 0x1) : Vc) + ".png\" height=\"17\" width=\"17\" alt=\"" + Vc + "\">";
          } else if (null != Hk[Vc]) {
            VK += "<img src=\"images/emotes/gifs/" + (Vc = Vc.startsWith(':') && Vc.endsWith(':') ? Vc.substring(0x1, Vc.length - 0x1) : Vc) + ".gif\" height=\"17\" width=\"17\" alt=\"" + Vc + "\">";
          } else {
            VK += Vc;
          }
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
        this.Tr = 0x0;
        this.Lt = null;
        this.Vn = 0x0;
        this.Ha = function (VF, Vs, VK) {
          var Vc;
          if (H9[VF].Dn !== 0x3) {
            if (Vc = this.Dr[VF]) {
              Vc.Vi(Vs, VK);
            } else {
              Vc = new au(VF, Vs, VK);
              this.Dr[VF] = Vc;
              this.Pr();
            }
            this.Lr();
          } else {
            Vc = new au(VF, Vs, VK);
            this.Ir.push(Vc);
          }
          this.Rr();
          if (Vc) {
            Hc.Ut("Recieved buff: " + Vc.Ur.p);
          }
        };
        this.Fa = function (VF) {
          var Vs = null;
          if (H9[VF].Dn !== 0x3) {
            if (Vs = this.Dr[VF]) {
              delete this.Dr[VF];
              this.Pr();
              this.Rr();
              this.Lr();
            }
          } else {
            for (var VK = 0x0; VK < this.Ir.length; VK++) {
              if ((Vs = this.Ir[VK]).Gi === VF) {
                this.Ir.splice(VK, 0x1);
                this.Rr();
                break;
              }
            }
          }
          if (Vs) {
            Hc.Ut("Lost buff: " + Vs.Ur.p);
          }
        };
        this.Fn = function (VF) {
          if (0x0 !== this.Ar.length || 0x0 !== this.Ir.length) {
            for (var Vs in this.Dr) {
              var VK = this.Dr[Vs];
              if (!(VF && VK.Ur.Dn === 0x1)) {
                delete this.Dr[Vs];
              }
            }
            this.Pr();
            this.Lr();
            this.Ir = [];
            this.Rr();
          }
        };
        this.Pr = function () {
          this.Ar = [];
          if (0x0 !== this.Dr.length) {
            for (var VF in this.Dr) if (this.Dr[VF].Ur.Dn === 0x1) {
              this.Ar.splice(0x0, 0x0, VF);
            } else {
              this.Ar.push(VF);
            }
          }
        };
        this.Lr = function () {
          var VF;
          this.Vn = 0x0;
          if (null != this.Dr[0x1]) {
            VF = this.Dr[0x1];
            this.Vn = 0x10 * VF.Br;
          }
        };
        this.Vi = function () {
          if (0x0 === this.Ar.length && 0x0 === this.Ir.length) {
            HJ.visible = false;
          } else {
            if (Date.now() >= this.Tr) {
              this.jr();
              this.Tr = Date.now() + 0x3e8;
            }
            if (!this.Lt) {
              this.Lt = HH.Texture.from(this.Na.canvas);
              HJ.texture = this.Lt;
              HJ.anchor.set(0x0);
            }
            HJ.position.set(HE.width() + 0x14 - H6.pi.position.x, 0xf - H6.pi.position.y);
            HJ.visible = true;
          }
        };
        this.jr = function () {
          var VF = (null == (VF = this.Na) ? undefined : VF.canvas) || s.createElement("canvas");
          var Vs = K.max(this.Ar.length, this.Ir.length);
          var VK = 0x0;
          var Vc = 0x0;
          for (var VR = 0x0; VR < this.Ar.length; VR++) {
            var VF;
            var Vs;
            var VK;
            var Vc;
            var VR;
            this.Dr[this.Ar[VR]].Gr(this.Na, VK, Vc);
            VK += 0x37;
          }
          var VK = 0x0;
          var Vc = 0x37;
          for (var Vp = 0x0; Vp < this.Ir.length; Vp++) {
            this.Ir[Vp].Gr(this.Na, VK, Vc);
            VK += 0x37;
          }
          if (this.Lt) {
            this.Lt.update();
          }
          this.Tr = Date.now() + 0x3e8;
        };
        this.Rr = function () {
          this.Tr = 0x0;
        };
      }
      var aE = 1.5 * K.PI;
      function au(VF, Vs, VK) {
        this.Gi = VF;
        this.Ur = H9[VF];
        this.Wr = Date.now();
        this.zr = VK;
        this.Br = Vs;
        this.Vi = function (Vc, VR) {
          this.Wr = Date.now();
          this.zr = VR;
          this.Br = Vc;
        };
        this.Jr = function () {
          var Vc;
          var VR;
          return Date.now() >= this.zr ? 0x2 * K.PI : (Vc = this.zr - Date.now(), VR = this.zr - this.Wr, 0x2 * K.min(Vc / VR, 0x1) * K.PI);
        };
        this.Gr = function (Vc, VR, Vp) {
          Vc.drawImage(this.Ur.Rt, VR, Vp, 0x32, 0x32);
          if (0x1 < this.Br) {
            Vc.fillStyle = "#000";
            Vc.fillText(this.Br, VR + 0x23, Vp + 0x11);
          }
          if (0x0 < this.zr) {
            Vc.beginPath();
            Vc.moveTo(VR + 0x19, Vp + 0x19);
            Vc.arc(VR + 0x19, Vp + 0x19, 0x19, aE, aE - this.Jr(), false);
            Vc.closePath();
            Vc.globalAlpha = 0.75;
            Vc.fillStyle = "#222";
            Vc.fill();
            Vc.globalAlpha = 0x1;
          }
        };
      }
      function V0(VF) {
        for (var Vs = VF.length - 0x1; 0x0 < Vs; Vs--) {
          var VK = K.floor(K.random() * (Vs + 0x1));
          var Vc = [VF[VK], VF[Vs]];
          VF[Vs] = Vc[0x0];
          VF[VK] = Vc[0x1];
        }
        return VF;
      }
      var V1 = [];
      var V2 = [];
      for (var V3 = 0x0; V3 < 0x168; V3 += 0x2) {
        var V4 = Zp(V3);
        V1.push(V4);
        V2.push('#' + V4.toString(0x10).padStart(0x6, '0'));
      }
      var V5 = V0(V1.slice(0x0));
      var V6 = V0(V2.slice(0x0));
      var V7 = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
      var V8 = new Map();
      var V9 = {
        0x1f4: {
          'color': "#FFD700",
          'textShadow': "0 0 8px #FFD700, 0 0 12px #FF8C00",
          'fontWeight': "bold"
        },
        0x1f5: {
          'color': "#00FF00",
          'textShadow': "0 0 8px #00FF00, 0 0 12px #00AA00",
          'fontWeight': "bold"
        }
      };
      function VH(VF) {
        for (var Vs of V8) {
          var Vs = g(Vs) || q(Vs, 0x2) || o(Vs, 0x2) || N();
          var VK = Vs[0x0];
          var Vs = Vs[0x1];
          if (parseInt(VF) === Vs) {
            return VK;
          }
        }
        return null;
      }
      function Vb(VF) {
        return 0x0 === VF || VF === Hc.Wi ? "You cannot block that player." : b7.includes(VF) ? (delete b7[VF], "Unblocked player with ID: " + VF) : (b7.push(VF), "Blocked player with ID: " + VF);
      }
      var VZ = [{
        'Vt': "Whisper a player by ID",
        'Jt': ["whisper", 't', 'w'],
        'Yt': function (VF) {
          var Vs = parseInt(VF[0x0]);
          if (isNaN(Vs)) {
            Hc.Ut("Invalid player id.");
          } else {
            if (0x0 !== (VF = VF.slice(0x1).join(' ')).length) {
              Hc.T(bm.ze(Vs, VF));
            }
            aI("/t " + Vs + ' ');
          }
        }
      }, {
        'Vt': "Reply to previous whisper",
        'Jt': ["reply", 'r'],
        'Yt': function (VF) {
          if (0x0 !== (VF = VF.join(' ')).length) {
            Hc.T(bm.ze(0x0, VF));
          }
          aI("/r ");
        }
      }, {
        'Vt': "Send a message to other party members",
        'Jt': ["party", 'p'],
        'Yt': function (VF) {
          if (0x0 !== (VF = VF.join(' ')).length) {
            Hc.T(bm.Ue(VF, 0x1));
          }
          aI("/p ");
        }
      }, {
        'Vt': "Invite a player to the party",
        'Jt': ["invite", 'i'],
        'Yt': function (VF) {
          VF = parseInt(VF[0x0]);
          if (isNaN(VF)) {
            Hc.Ut("Invalid ID.");
          } else {
            Hc.T(bm.je(0x0, VF));
          }
        }
      }, {
        'Vt': "Leave your current party",
        'Jt': ["leave", 'l'],
        'Yt': function () {
          Hc.T(bm.je(0x3, 0x0));
        }
      }, {
        'Vt': "Promote a party member to leader",
        'Jt': ["promote"],
        'Yt': function (VF) {
          VF = parseInt(VF[0x0]);
          if (isNaN(VF)) {
            Hc.Ut("Invalid ID.");
          } else {
            Hc.T(bm.je(0x2, VF));
          }
        }
      }, {
        'Vt': "Kick a player from the party",
        'Jt': ["kick"],
        'Yt': function (VF) {
          VF = parseInt(VF[0x0]);
          if (isNaN(VF)) {
            Hc.Ut("Invalid ID.");
          } else {
            Hc.T(bm.je(0x1, VF));
          }
        }
      }, {
        'Vt': "Clear the chat tab",
        'Jt': ["clear"],
        'Yt': function () {
          return F("#chat-body-" + bP).empty();
        }
      }, {
        'Vt': "Get your current ID",
        'Jt': ["info"],
        'Yt': function () {
          if (0x0 < Hc.Wi) {
            Hc.Ut("Your id is " + Hc.Wi);
          } else {
            Hc.Ut("You need to be connected to a server to use this command.");
          }
        }
      }, {
        'Vt': "Show the scrimmage menu",
        'Jt': ["scrimmenu"],
        'Yt': function () {
          HT.toggle();
        }
      }, {
        'Vt': "Join a party with a code",
        'Jt': ["join", 'j'],
        'Yt': function (VF) {
          if (null != (VF = VF[0x0]) && 0x0 !== VF.length) {
            Hc.T(bm.Ge(VF));
          }
        }
      }, {
        'Vt': "Set the party to private",
        'Jt': ["private"],
        'Yt': function () {
          Hc.T(bm.je(0x4, 0x1));
        }
      }, {
        'Vt': "Allow players to join the party without an invite",
        'Jt': ["public"],
        'Yt': function () {
          Hc.T(bm.je(0x4, 0x0));
        }
      }, {
        'Vt': "Reset chat size",
        'Jt': ["resetchat"],
        'Yt': function () {
          bZ.I.css("width", "360px");
          bZ.I.css("height", "250px");
        }
      }, {
        'Vt': "Reset chat tab settings",
        'Jt': ["resetchattabs"],
        'Yt': function () {
          bD._ChatTabs = JSON.parse(JSON.stringify(bg));
          aU();
          ag();
        }
      }, {
        'Vt': "Spectate a player",
        'Jt': ["spectate", 's'],
        'Yt': function (VF) {
          VF = parseInt(VF[0x0]);
          if (isNaN(VF)) {
            Hc.Ut("Invalid ID.");
          } else {
            Hc.T(bm.Re(VF));
          }
        }
      }, {
        'Vt': "Disconnect from the server",
        'Jt': ["disconnect"],
        'Yt': function () {
          Hc.Nn();
        }
      }, {
        'Vt': "Get Account UID",
        'Jt': ["account"],
        'Yt': function () {
          if (null == b4) {
            Hc.Ut("You are not logged in.");
          } else {
            Hc.Ut("UID: " + b4.uid);
          }
        }
      }, {
        'Vt': "Block or unblock a player by ID",
        'Jt': ["block", 'b'],
        'Yt': function (VF) {
          VF = parseInt(VF[0x0]);
          if (!isNaN(VF)) {
            VF = Vb(VF);
            Hc.Ut(VF);
          }
        }
      }, {
        'Vt': "Get current renderer",
        'Jt': ["renderer"],
        'Yt': function () {
          Hc.Ut("Current renderer is " + (H6.ui.gl ? "WebGL" : "Canvas"));
        }
      }];
      var Va = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
      var VV = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];
      function VN(VF) {
        var Vs;
        var VK;
        return VF <= 0x0 ? "0:00" : (VK = VF - 0xe10 * (Vs = K.floor(VF / 0xe10)) - 0x3c * (VF = K.floor((VF - 0xe10 * Vs) / 0x3c)), (0x0 < Vs ? Vs + ':' : '') + (VF < 0xa && 0x0 < Vs ? '0' + VF : VF) + ':' + (VK < 0xa ? '0' + VK : VK));
      }
      function Vo(VF) {
        (VF = VF.toString().split('.'))[0x0] = VF[0x0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return VF.join('.');
      }
      function VI(VF) {
        if (VF.dataTransfer.items) {
          for (var Vs = 0x0; Vs < VF.dataTransfer.items.length; Vs++) {
            if ("file" === VF.dataTransfer.items[Vs].kind) {
              return VF.dataTransfer.items[Vs].getAsFile();
            }
          }
        } else {
          if (0x0 !== VF.dataTransfer.files.length) {
            return VF.dataTransfer.files[0x0];
          }
        }
      }
      var Vx = {
        'CENTER': 0x0,
        'MASS': 0x1
      };
      var VP = {
        0x0: "Spectator",
        0x1: "Blue",
        0x2: "Red",
        0x3: "Green",
        0x4: "Yellow",
        0x5: "Purple",
        0x6: "Orange",
        0x7: "Pink",
        0x8: "Brown"
      };
      var VX = {
        'ALL': 0x1,
        'PARTY': 0x2,
        'WHISPER': 0x4,
        'SYSTEM': 0x8,
        'ADMIN': 0x10
      };
      var VD = {
        'Ca': -0x1,
        'ji': 0x0,
        'Ta': 0x1,
        'Pa': 0x2
      };
      var VC = [[0x0, "Verdana", 0x36], [0x1, "ampad", 0x4b], [0x2, "burnstown", 0x51], [0x3, "chlorinar", 0x4b], [0x4, "Facon", 0x4b], [0x5, "archistico", 0x4b], [0x6, "breakaway", 0x51], [0x7, "conformity", 0x51], [0x8, "electroharmonix", 0x46], [0x9, "PWJoyeuxNoel", 0x46], [0xa, "leckerli-one", 0x4b], [0x65, "IceCaps", 0x51, 0xc9ff], [0x66, "BrazierFlame", 0x51, 0xe25822]].reduce(function (VF, Vs) {
        var Vs = g(Vs) || q(Vs, 0x4) || o(Vs, 0x4) || N();
        var VK = Vs[0x0];
        var Vc = Vs[0x1];
        var VR = Vs[0x2];
        var Vs = Vs[0x3];
        new C.FontFaceObserver(Vc).load(null, 0x2710)["catch"](function () {});
        if (0x0 < VK && VK < 0x40) {
          F("#spNameFont").append("<option value=\"" + VK + "\" style=\"font-family:" + Vc + "\">" + (Vc.charAt(0x0).toUpperCase() + Vc.slice(0x1)) + "</option>");
        }
        VF[VK] = {
          'fontSize': K.round(VR / 0x36 * 0x45),
          'fontWeight': 0x0 === VK ? "bold" : "normal",
          'stroke': Vs || 0x0,
          'fontFamily': Vc
        };
        return VF;
      }, {});
      F(C).focus(function () {
        bH = true;
      });
      F(C).blur(function () {
        bH = false;
      });
    };
    C.version = "3.6.5";
  }(eval, atob);
}();
