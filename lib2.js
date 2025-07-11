(function () {
    function _0x206513(_0x405575) {
      return (_0x206513 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x4e9e30) {
        return typeof _0x4e9e30;
      } : function (_0x26c0d4) {
        return _0x26c0d4 && typeof Symbol == "function" && _0x26c0d4.constructor === Symbol && _0x26c0d4 !== Symbol.prototype ? "symbol" : typeof _0x26c0d4;
      })(_0x405575);
    }
    function _0x5e0cc7() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x210104(_0x3b52a5) {
      if (typeof Symbol != "undefined" && _0x3b52a5[Symbol.iterator] != null || _0x3b52a5["@@iterator"] != null) {
        return Array.from(_0x3b52a5);
      }
    }
    function _0x1f5a1c(_0x12b6bb) {
      if (Array.isArray(_0x12b6bb)) {
        return _0x15249f(_0x12b6bb);
      }
    }
    function _0x41b368() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x90875f(_0x18e3c1, _0x10e1d7) {
      var _0x47d9fd;
      if (_0x18e3c1) {
        if (typeof _0x18e3c1 == "string") {
          return _0x15249f(_0x18e3c1, _0x10e1d7);
        } else {
          if ((_0x47d9fd = (_0x47d9fd = Object.prototype.toString.call(_0x18e3c1).slice(0x8, -0x1)) === "Object" && _0x18e3c1.constructor ? _0x18e3c1.constructor.name : _0x47d9fd) === 'Map' || _0x47d9fd === "Set") {
            return Array.from(_0x18e3c1);
          } else {
            return _0x47d9fd === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x47d9fd) ? _0x15249f(_0x18e3c1, _0x10e1d7) : undefined;
          }
        }
      }
    }
    function _0x15249f(_0x47174e, _0x53b562) {
      if (_0x53b562 == null || _0x53b562 > _0x47174e.length) {
        _0x53b562 = _0x47174e.length;
      }
      var _0x184751 = 0x0;
      for (var _0x41d220 = new Array(_0x53b562); _0x184751 < _0x53b562; _0x184751++) {
        _0x41d220[_0x184751] = _0x47174e[_0x184751];
      }
      return _0x41d220;
    }
    function _0x4d18e8(_0x2c30e0, _0x17781a) {
      var _0xc3cc38 = _0x2c30e0 == null ? null : typeof Symbol != 'undefined' && _0x2c30e0[Symbol.iterator] || _0x2c30e0["@@iterator"];
      if (_0xc3cc38 != null) {
        var _0x1eee8f;
        var _0x125831;
        var _0x69d7d7;
        var _0x1df6ec;
        var _0x597783 = [];
        var _0x5bced5 = true;
        var _0x1b749f = false;
        try {
          _0x69d7d7 = (_0xc3cc38 = _0xc3cc38.call(_0x2c30e0)).next;
          if (_0x17781a === 0x0) {
            if (Object(_0xc3cc38) !== _0xc3cc38) {
              return;
            }
            _0x5bced5 = false;
          } else {
            for (; !(_0x5bced5 = (_0x1eee8f = _0x69d7d7.call(_0xc3cc38)).done) && (_0x597783.push(_0x1eee8f.value), _0x597783.length !== _0x17781a); _0x5bced5 = true) {
              ;
            }
          }
        } catch (_0x4fba55) {
          _0x1b749f = true;
          _0x125831 = _0x4fba55;
        } finally {
          try {
            if (!_0x5bced5 && _0xc3cc38["return"] != null && (_0x1df6ec = _0xc3cc38['return'](), Object(_0x1df6ec) !== _0x1df6ec)) {
              return;
            }
          } finally {
            if (_0x1b749f) {
              throw _0x125831;
            }
          }
        }
        return _0x597783;
      }
    }
    function _0x23f9c1(_0x32c095) {
      if (Array.isArray(_0x32c095)) {
        return _0x32c095;
      }
    }
    function _0x26515(_0x1e5518, _0x2d0562) {
      var _0xf906b4;
      var _0x4ea624 = Object.keys(_0x1e5518);
      if (Object.getOwnPropertySymbols) {
        _0xf906b4 = Object.getOwnPropertySymbols(_0x1e5518);
        if (_0x2d0562) {
          _0xf906b4 = _0xf906b4.filter(function (_0x335662) {
            return Object.getOwnPropertyDescriptor(_0x1e5518, _0x335662).enumerable;
          });
        }
        _0x4ea624.push.apply(_0x4ea624, _0xf906b4);
      }
      return _0x4ea624;
    }
    function _0x379f46(_0x5dd7f2) {
      for (var _0x24fad7 = 0x1; _0x24fad7 < arguments.length; _0x24fad7++) {
        var _0x4f0f81 = arguments[_0x24fad7] ?? {};
        if (_0x24fad7 % 0x2) {
          _0x26515(Object(_0x4f0f81), true).forEach(function (_0x2a544f) {
            _0x3efeef(_0x5dd7f2, _0x2a544f, _0x4f0f81[_0x2a544f]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(_0x5dd7f2, Object.getOwnPropertyDescriptors(_0x4f0f81));
        } else {
          _0x26515(Object(_0x4f0f81)).forEach(function (_0x17c51d) {
            Object.defineProperty(_0x5dd7f2, _0x17c51d, Object.getOwnPropertyDescriptor(_0x4f0f81, _0x17c51d));
          });
        }
      }
      return _0x5dd7f2;
    }
    function _0x3efeef(_0x26dd6e, _0x54ec4f, _0x1b502b) {
      if ((_0x54ec4f = _0x48e717(_0x54ec4f)) in _0x26dd6e) {
        Object.defineProperty(_0x26dd6e, _0x54ec4f, {
          'value': _0x1b502b,
          'enumerable': true,
          'configurable': true,
          'writable': true
        });
      } else {
        _0x26dd6e[_0x54ec4f] = _0x1b502b;
      }
    }
    function _0x48e717(_0x50414a) {
      _0x50414a = _0x535cbf(_0x50414a, "string");
      return _0x206513(_0x50414a) === "symbol" ? _0x50414a : String(_0x50414a);
    }
    function _0x535cbf(_0x15317b, _0x546703) {
      if (_0x206513(_0x15317b) !== "object" || _0x15317b === null) {
        return _0x15317b;
      }
      var _0x520f8d = _0x15317b[Symbol.toPrimitive];
      if (_0x520f8d === undefined) {
        return (_0x546703 === "string" ? String : Number)(_0x15317b);
      }
      _0x520f8d = _0x520f8d.call(_0x15317b, _0x546703 || "default");
      if (_0x206513(_0x520f8d) !== "object") {
        return _0x520f8d;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    (function (_0x4e579d, _0x54467d) {
      var _0x438c4c = _0x4e579d(_0x54467d("d2luZG93"));
      var _0x189125 = _0x438c4c.$;
      var _0x470b4b = _0x438c4c.document;
      var _0x5dd517;
      if (_0x438c4c.fuckAdBlock == null) {
        _0x438c4c.aiptag = _0x438c4c.aiptag ?? {};
        Object.defineProperty(_0x438c4c.aiptag, 'settings', {
          'get': function () {
            return _0x5dd517;
          },
          'set': function (_0x2aa215) {
            _0x2aa215.iBtLoader = false;
            _0x5dd517 = _0x2aa215;
          }
        });
      }
      _0x438c4c.gajsn = function () {
        var _0x27d035;
        var _0x18803e = _0x438c4c.Math;
        var _0x5c1da9 = new function () {
          this.t = false;
          this.i = "CP_0918_01";
          this.o = 'https://gota.io/policies/privacy.html?v=' + this.i + "#cookies";
          this.l = _0x189125("#cc_acceptCookies");
          this.u = {
            'p': "cookieConsent",
            'm': "yes+" + this.i,
            'k': 0x2da,
            '$': "/web"
          };
          this._ = {
            'S': _0x189125('#cookie-banner'),
            'N': _0x189125("#declineCookies"),
            'C': _0x189125('#acceptCookies'),
            'O': false
          };
          this.H = function () {
            this.M();
            this.l.on('change', function () {
              _0x5c1da9.F(_0x189125(this).prop("checked"));
            });
            if (this.D() === this.u.m) {
              this.F(true);
              this.A(false);
            } else {
              this.F(false);
              this.A(true);
            }
          };
          this.F = function (_0x2cbfbe) {
            this.t = _0x2cbfbe;
            _0x438c4c.aiptag.consented = _0x2cbfbe;
            this.l.prop("checked", _0x2cbfbe);
            if (_0x2cbfbe) {
              this.I();
              this.A(false);
              if (_0x5c1da9.t) {
                var _0x2cbfbe = _0x438c4c.localStorage.getItem('theme');
                var _0x4e701b = _0x438c4c.localStorage.getItem('fixes_theme');
                _0x123455(_0x379f46(_0x379f46({}, JSON.parse(_0x2cbfbe ?? '{}')), JSON.parse(_0x4e701b ?? '{}')));
                var _0x3faae0 = _0x438c4c.localStorage.getItem("keybinds");
                if (_0x3faae0) {
                  _0x3faae0 = JSON.parse(_0x3faae0);
                  for (var _0x5c415d in _0x5daf1e) {
                    var _0x65f9b = _0x3faae0[_0x5c415d];
                    if (Number.isInteger(_0x65f9b)) {
                      _0x5daf1e[_0x5c415d] = _0x65f9b;
                    }
                  }
                }
                var _0x1f4917 = _0x438c4c.localStorage.getItem("options");
                if (_0x1f4917) {
                  _0x1f4917 = JSON.parse(_0x1f4917);
                  for (var _0x2cb53a in _0x343b32) {
                    if (_0x2cb53a in _0x1f4917) {
                      _0x343b32[_0x2cb53a] = _0x1f4917[_0x2cb53a];
                    }
                  }
                }
                var _0x2f67c4;
                var _0x5a9a01 = _0x438c4c.localStorage.getItem("fixes_version");
                var _0x24654a = '';
                for (_0x2f67c4 of [[0x14, "Added an option to change zoom delay.\n\nIncreased the default zoom delay to match Gota's zoom speed at 60fps.\n\nAdded an option for darker bot colors."], [0x15, "Fixed an issue where certain ad-blockers were causing a red error banner to appear.\n\nFixed an issue where Donut linesplits were not working properly after a recent Gota Fixes update."], [0x16, "Fixed a Gota bug causing a red error banner to appear whenever viewing a player's profile while logged out.\n\nUpdated to Gota version 3.6.4:\n- Nothing needed to be changed besides the version number."], [0x17, "Fixed an issue causing store advertisements to still show in chat every 30 minutes.\n\nAdded Gota's halloween theme."], [0x18, "Improved FPS while using the \"Show Coordinates\" option by about 15%.\n\nOther slight optimisations."], [0x19, "Added a linesplit keybind:\n\n- Pretty much 100% success rate, unless your mouse is too close to the center of your cell. Animation delay, camera delay or ping doesn't affect it.\n\n- Lineup time is as low as 50ms, depending on your ping.\n\n- Allows activation when you have more than 1 cell.\n\n- Allows splitting immediately after lining up.\n\n- Option for toggle or hold activation.\n\nPlease let me know if there are any issues. I can tweak it to take a little longer to lineup for more consistency."], [0x1a, "Fixed an issue causing the script to break when using Violentmonkey.\n\nFixed an issue causing no cells to appear after seeing the \"Allow Cookies\" prompt."], [0x1b, "Slightly increased linesplit line-up time for more consistency with large mass.\n\nFixed an issue causing degrading performance over long game sessions.\n\nFreezing mouse before and after linesplitting should now work as expected.\nNote: Freezing mouse quickly after pressing the linesplit key will cause your cell to freeze if it hasn't lined up yet."], [0x1c, "Hopefully fixed the Gota bug that causes auto respawn to break when dying immediately after pressing Play.\n\nFixed a Gota bug preventing the Esc key from closing social menus such as profile and friends list.\n\nFixed an issue causing the Spectate button to break if it was pressed while the player is still alive.\n\nAdded an option slider to change menu animation speed: Menu Delay.\nIt can be set to 0 if you want no animations."], [0x1d, "Slightly decreased the delay between switching tabs when multiboxing with capped FPS."], [0x1e, "Added options and keybinds to hide bot names, masses and skins.\n\nContext menu for names in the chat, leaderboard and party now take priority over cell context menus.\nIn other words, trying to right click a chat name when a cell is underneath will show the chat name context menu, as expected.\n\nThe Context Menu keybind now applies to chat, leaderboard and party, instead of just cells.\n\nAdded 5 more zoom level keybinds. Zoom difference between each level has decreased for finer control.\n\nAdded a theme option for map background image.\n\nFixed an issue preventing the Linesplit Mode option from saving after refreshing the page."], [0x1f, "Updated to Gota version 3.6.5:\n- Halloween theme.\n- Chat message history can be accessed using the up and down arrows when typing in chat.\n- Added score panel style option: Hidden, Vertical, Horizontal.\n- Added reconnect seconds option.\n- Added some (barely functional) mobile device compatibility.\n- Added Mass in score panel.\n- Moved Score next to Cells in score panel.\n\nFixed a Gota issue causing horizontal score panel to expand the party panel.\n\nFixed a minor Gota issue with the chat message history.\n\nFixed issues causing some scripts to break after the Gota update."], [0x20, "Fixed a Gota issue causing the player to not spawn in when connecting to a server using the Play button while logged in with silent login disabled."]]) {
                  var _0x456f0b = _0x23f9c1(_0x2f67c4) || _0x4d18e8(_0x2f67c4, 0x2) || _0x90875f(_0x2f67c4, 0x2) || _0x41b368();
                  var _0x4691fc = _0x456f0b[0x0];
                  var _0x456f0b = _0x456f0b[0x1];
                  if (_0x5a9a01 < _0x4691fc) {
                    _0x24654a += _0x456f0b + "\n\n";
                  }
                }
                if (_0x24654a.length !== 0x0) {
                  _0x206e53("Gota Fixes was updated!", _0x24654a += "\nIf you enjoy these updates, please consider donating to help me make more!");
                }
                _0x438c4c.localStorage.setItem('fixes_version', '32');
                var _0x506f83;
                var _0x13145d;
                var _0x118449 = _0x438c4c.localStorage.getItem("fixes_options");
                var _0x10e837 = _0x438c4c.localStorage.getItem("fixes_keybinds");
                if (_0x118449) {
                  var _0x48fd43;
                  var _0x355d21 = (_0x118449 = JSON.parse(_0x118449)).loadver;
                  if (_0x355d21 != null && (_0x355d21 & 0x1201) === 0x1201) {
                    _0x30d89d.forEach(function (_0x551ac4) {
                      var _0x551ac4 = _0x23f9c1(_0x551ac4) || _0x4d18e8(_0x551ac4, 0x3) || _0x90875f(_0x551ac4, 0x3) || _0x41b368();
                      var _0x428dad = _0x551ac4[0x0];
                      var _0x1e2975 = _0x551ac4[0x1];
                      var _0x551ac4 = _0x551ac4[0x2];
                      _0x343b32[_0x551ac4] = _0x1e2975 === 0x1 ? !!(_0x355d21 & 0x1 << _0x428dad) : _0x355d21 >> _0x428dad & (0x1 << _0x1e2975) - 0x1;
                    });
                    delete _0x118449.loadver;
                  }
                  if (_0x118449.cHorizontalScorePanel) {
                    _0x343b32.sScorePanel = '1';
                  }
                  for (_0x48fd43 in _0x2e9c33) {
                    if (_0x48fd43 in _0x118449) {
                      _0x343b32[_0x48fd43] = _0x118449[_0x48fd43];
                    }
                  }
                }
                if (_0x10e837) {
                  if (!("kZoom10" in (_0x10e837 = JSON.parse(_0x10e837))) && "kZoom5" in _0x10e837) {
                    Object.assign(_0x10e837, {
                      'kZoom2': _0x5daf1e.kZoom2,
                      'kZoom3': _0x10e837.kZoom2,
                      'kZoom4': _0x5daf1e.kZoom4,
                      'kZoom5': _0x5daf1e.kZoom5,
                      'kZoom6': _0x10e837.kZoom3,
                      'kZoom8': _0x10e837.kZoom4,
                      'kZoom10': _0x10e837.kZoom5
                    });
                  }
                  for (var _0x3aa5f7 in _0x170dbe) {
                    if (_0x3aa5f7 in _0x10e837) {
                      _0x5daf1e[_0x3aa5f7] = _0x10e837[_0x3aa5f7];
                    }
                  }
                }
                for (_0x506f83 in _0x5daf1e) {
                  var _0x484b4e = _0x189125('#' + _0x506f83);
                  if (_0x484b4e.length !== 0x0) {
                    _0xcf2244(_0x484b4e);
                  }
                }
                for (_0x13145d of Object.entries(_0x343b32)) {
                  var _0x58223b = _0x23f9c1(_0x13145d) || _0x4d18e8(_0x13145d, 0x2) || _0x90875f(_0x13145d, 0x2) || _0x41b368();
                  var _0x184c3e = _0x58223b[0x0];
                  var _0x1f2771 = _0x58223b[0x1];
                  var _0x3b87ec = _0x189125('#' + _0x184c3e);
                  if (_0x3b87ec.length !== 0x0) {
                    switch (_0x184c3e.charAt(0x0)) {
                      case 'c':
                        if (_0x1f2771 === true) {
                          _0x3b87ec.prop("checked", true);
                          _0x2bac48(_0x3b87ec);
                        }
                        break;
                      case 's':
                        _0x3b87ec.val(_0x1f2771);
                        _0x3af392(_0x3b87ec);
                        break;
                      case 'r':
                        _0x3b87ec.val(_0x1f2771);
                        _0x1918c8(_0x3b87ec);
                        break;
                      case 'i':
                        _0x3b87ec.val(_0x1f2771);
                        _0x138b26(_0x3b87ec);
                    }
                  }
                }
                _0x41c44b.P.css("width", "360px");
                _0x41c44b.P.css("height", "250px");
                _0x45c216("cThemeEnabled");
                if ((_0x2cbfbe = _0x438c4c.localStorage.getItem("name")) != null) {
                  _0x189125("#name-box").val(_0x2cbfbe);
                }
                var _0x4191fd = _0x438c4c.localStorage.getItem('subpanel');
                if (_0x4191fd) {
                  _0x4191fd = JSON.parse(_0x4191fd);
                  for (var _0x43d23f in _0x50ee2a) {
                    if (_0x43d23f in _0x4191fd) {
                      _0x50ee2a[_0x43d23f] = _0x4191fd[_0x43d23f];
                    }
                  }
                }
              }
              _0x1fff68();
              _0x189125("#spNameColor").spectrum({
                'color': _0x50ee2a.nameColor,
                'showAlpha': false,
                'showInput': true,
                'preferredFormat': "rgb"
              });
              _0x189125("#spChatColor").spectrum({
                'showPaletteOnly': true,
                'showPalette': true,
                'color': _0x5547fe[0x0],
                'palette': _0x5547fe
              });
              _0x189125('#spSkinName').val('');
              _0x189125("#spLowerName").prop('checked', false);
              _0x189125("#spEffect").val(0x0);
              _0x189125("#spNameFont").val(0x0);
              _0x189125('#btn-chg-ln').on("click", function () {
                var _0x35ec52;
                var _0xc98fe4;
                if (_0xf2832c && (_0x35ec52 = prompt("Enter new locked name!"))) {
                  _0xc98fe4 = typeof _0x35ec52 != 'string' ? "Please enter a valid name!" : null;
                  if (_0x35ec52.length < 0x2) {
                    _0xc98fe4 = "Locked names must be 2 or more characters long.";
                  }
                  if ((_0xc98fe4 = _0x35ec52.length > 0x14 ? "Locked names must be 20 or less characters long." : _0xc98fe4) != null) {
                    alert(_0xc98fe4);
                  } else {
                    _0x35ec52 = _0x35ec52.trim();
                    if (confirm("You are about to change your locked name to: '" + _0x35ec52 + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
                      _0x24f82e.T(_0x5af10a.L(_0x35ec52));
                    }
                  }
                }
              });
              _0x189125("#btn-updateSP").on("click", _0x131493);
              _0x189125('#btn-subpanel-rules').on('click', function () {
                _0x50ee2a.rules = true;
                _0x1fff68();
              });
              _0x189125("#no_cookie_consent").hide();
              if (_0x189125('#account-loader').css("display") !== 'none') {
                _0x189125("#guest").hide();
              } else {
                _0x189125("#guest").show();
              }
            } else {
              this.R();
              if (_0xee5ae.auth().currentUser != null) {
                _0xee5ae.auth().signOut()['catch'](function () {});
              }
              _0x189125("#authed").hide();
              _0x189125("#account-loader").hide();
              _0x189125('#guest').hide();
              _0x189125('#no_cookie_consent').show();
              this.A(true);
            }
          };
          this.A = function (_0xf87277) {
            if (_0xf87277) {
              if (!this._.O) {
                this.U();
                this._.O = true;
              }
              this._.S.slideDown();
            } else {
              this._.S.slideUp();
            }
          };
          this.U = function () {
            this._.N.on("click", function () {
              _0x5c1da9.F(false);
              _0x5c1da9.A(false);
            });
            this._.C.on("click", function () {
              _0x5c1da9.F(true);
              _0x5c1da9.A(false);
            });
            _0x189125("#cookie-banner .description").append(" <a href=\"" + this.o + "\" target=\"_blank\">Our Cookie Policy!</a>");
          };
          this.I = function () {
            (_0x5dd8c1 = new Date()).setTime(_0x5dd8c1.getTime() + this.u.k * 0x18 * 0x3c * 0x3c * 0x3e8);
            var _0x5dd8c1 = 'expires=' + _0x5dd8c1.toUTCString();
            _0x470b4b.cookie = this.u.p + '=' + this.u.m + ';' + _0x5dd8c1 + ";path=" + this.u.$ + ';';
          };
          this.R = function () {
            _0x470b4b.cookie = this.u.p + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.u.$ + ';';
          };
          this.D = function () {
            var _0x516b8b = this.u.p + '=';
            var _0x77a4a7 = decodeURIComponent(_0x470b4b.cookie).split(';');
            for (var _0xee2e2b = 0x0; _0xee2e2b < _0x77a4a7.length; _0xee2e2b++) {
              for (var _0x7017fa = _0x77a4a7[_0xee2e2b]; _0x7017fa.charAt(0x0) === " ";) {
                _0x7017fa = _0x7017fa.substring(0x1);
              }
              if (_0x7017fa.indexOf(_0x516b8b) === 0x0) {
                return _0x7017fa.substring(_0x516b8b.length, _0x7017fa.length);
              }
            }
            return false;
          };
          this.M = function () {
            var _0x18354c = decodeURIComponent(_0x470b4b.cookie).split(';');
            var _0x5c7589 = null;
            for (var _0x2a27db = 0x0; _0x2a27db < _0x18354c.length; _0x2a27db++) {
              for (var _0x2bd163 = _0x18354c[_0x2a27db]; _0x2bd163.charAt(0x0) === " ";) {
                _0x2bd163 = _0x2bd163.substring(0x1);
              }
              if (_0x2bd163.indexOf("cookieconsent_status=") === 0x0) {
                _0x5c7589 = _0x2bd163.substring("cookieconsent_status=".length, _0x2bd163.length);
              }
            }
            if (_0x5c7589 === "allow") {
              this.I();
            }
            _0x470b4b.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;";
          };
        }();
        var _0x92e209 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
        var _0x5457aa = ['', "MOUSE1", 'MOUSE2', "MOUSE3", "MOUSE4", "MOUSE5", "HELP", '', "BACK_SPACE", "TAB", '', '', "CLEAR", "ENTER", "ENTER_SPECIAL", '', "SHIFT", 'CONTROL', "ALT", "PAUSE", "CAPS_LOCK", 'KANA', "EISU", "JUNJA", "FINAL", 'HANJA', '', "ESCAPE", "CONVERT", 'NONCONVERT', 'ACCEPT', "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", 'HOME', 'LEFT', 'UP', "RIGHT", "DOWN", "SELECT", 'PRINT', "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "OS_KEY", '', 'CONTEXT_MENU', '', "SLEEP", "NUMPAD0", 'NUMPAD1', "NUMPAD2", "NUMPAD3", "NUMPAD4", 'NUMPAD5', "NUMPAD6", "NUMPAD7", 'NUMPAD8', "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", 'SUBTRACT', "DECIMAL", "DIVIDE", 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', "F10", "F11", "F12", "F13", "F14", "F15", 'F16', "F17", "F18", 'F19', 'F20', 'F21', "F22", "F23", "F24", '', '', '', '', '', '', '', '', "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", 'WIN_OEM_FJ_TOUROKU', "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", '', '', '', '', '', '', '', '', '', 'CIRCUMFLEX', "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", 'PLUS', "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", '', '', '', '', "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", '', '', 'SEMICOLON', "EQUALS", "COMMA", 'MINUS', 'PERIOD', "SLASH", "BACK_QUOTE", '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'OPEN_BRACKET', "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", '', "META", "ALTGR", '', 'WIN_ICO_HELP', "WIN_ICO_00", '', 'WIN_ICO_CLEAR', '', '', "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", 'WIN_OEM_PA2', "WIN_OEM_PA3", 'WIN_OEM_WSCTRL', "WIN_OEM_CUSEL", "WIN_OEM_ATTN", 'WIN_OEM_FINISH', "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", 'EXSEL', "EREOF", 'PLAY', "ZOOM", '', "PA1", "WIN_OEM_CLEAR", ''];
        var _0x379215 = ["heart", 'star', "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", 'skull', 'mug', "flower", 'music', 'checkmark', "clover", "crown", "fancy", "fish", 'fire', "lightning", "paw", "duck", 'snowflake', "bomb", "butterfly", "cherry", 'watermelon', "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave"];
        for (_0x27d035 of "abcdefghijklmnopqrstuvwxyz") {
          _0x379215.push("letter_" + _0x27d035);
        }
        for (var _0x291f30 = 0x0; _0x291f30 < 0xa; _0x291f30++) {
          _0x379215.push("number_" + _0x291f30);
        }
        var _0x44d4ce;
        var _0x5d18c1 = [];
        var _0x5bbced = [new _0x27c05f("Random", "random", 0x0), new _0x27c05f("Maximum Cells Upgrade", "extracells", 0x1), new _0x27c05f("Extra Consumable Slot", "extraconsumable", 0x1), new _0x27c05f("Merge", "merge", 0x2), new _0x27c05f('Grow', "grow", 0x2), new _0x27c05f("Speed", "speed", 0x2), new _0x27c05f("Shield", 'shield', 0x2), new _0x27c05f('Virus', 'spike', 0x3), new _0x27c05f("Disrupt", "disrupt", 0x3), new _0x27c05f('Teleport', "teleport", 0x3), new _0x27c05f('Disrupt', "_disrupt", 0x4), new _0x27c05f("Silver", "phoenix", 0x1), new _0x27c05f("Consumable Shield", "_shield", 0x3), new _0x27c05f('Magnet', 'magnet', 0x2), new _0x27c05f('Decay', 'decay', 0x3), new _0x27c05f('Decay', "_decay", 0x4)];
        var _0x2b895b = _0x438c4c.PIXI;
        var _0xee5ae = _0x438c4c.firebase;
        _0x438c4c.PIXI = null;
        var _0x18e5df = {
          'THICK': 0x9,
          'THIN': 0x5,
          'NONE': 0x0
        };
        var _0x51b5ea = {
          'fontFamily': 'Verdana',
          'fontWeight': "bold",
          'fontSize': 0x45,
          'fill': 0xffffff
        };
        var _0xd8bf05 = new _0x2b895b.Point(0.5, 0.5);
        var _0x4b59d3 = new _0x2b895b.Container();
        var _0x5502b2 = new _0x2b895b.Sprite();
        _0x5502b2.visible = false;
        var _0x6b95b3 = new _0x2b895b.Graphics();
        _0x6b95b3.visible = false;
        var _0x4a4698 = new _0x2b895b.Container();
        var _0xc09d42 = _0x23f9c1(function () {
          class _0xf6a6a extends _0x2b895b.ParticleContainer {
            ['Y']() {
              var _0x4e9a0a = _0x18803e.ceil(this.children.length / this._batchSize);
              if (_0x4e9a0a !== 0x0) {
                ++this._updateID;
                for (var _0x1eb39e = 0x0; _0x1eb39e < _0x4e9a0a; ++_0x1eb39e) {
                  this._bufferUpdateIDs[_0x1eb39e] = this._updateID;
                }
              }
            }
          }
          return [new _0xf6a6a(0x5dc, null, 0x4000, true), new _0x2b895b.ParticleContainer(0x5dc, null, 0x4000, true)];
        }()) || _0x4d18e8(function () {
          class _0xf6a6a extends _0x2b895b.ParticleContainer {
            ['Y']() {
              var _0x4e9a0a = _0x18803e.ceil(this.children.length / this._batchSize);
              if (_0x4e9a0a !== 0x0) {
                ++this._updateID;
                for (var _0x1eb39e = 0x0; _0x1eb39e < _0x4e9a0a; ++_0x1eb39e) {
                  this._bufferUpdateIDs[_0x1eb39e] = this._updateID;
                }
              }
            }
          }
          return [new _0xf6a6a(0x5dc, null, 0x4000, true), new _0x2b895b.ParticleContainer(0x5dc, null, 0x4000, true)];
        }(), 0x2) || _0x90875f(function () {
          class _0xf6a6a extends _0x2b895b.ParticleContainer {
            ['Y']() {
              var _0x4e9a0a = _0x18803e.ceil(this.children.length / this._batchSize);
              if (_0x4e9a0a !== 0x0) {
                ++this._updateID;
                for (var _0x1eb39e = 0x0; _0x1eb39e < _0x4e9a0a; ++_0x1eb39e) {
                  this._bufferUpdateIDs[_0x1eb39e] = this._updateID;
                }
              }
            }
          }
          return [new _0xf6a6a(0x5dc, null, 0x4000, true), new _0x2b895b.ParticleContainer(0x5dc, null, 0x4000, true)];
        }(), 0x2) || _0x41b368();
        var _0x22d68b = _0xc09d42[0x0];
        var _0x5ca3b8 = _0xc09d42[0x1];
        var _0x172488 = new _0x2b895b.Container();
        var _0x50caf6 = new _0x2b895b.Sprite();
        function _0x2bafa6(_0x3de9e1) {
          var _0x1303db = _0x470b4b.createElement('canvas');
          var _0x366ed2 = _0x1303db.getContext('2d');
          _0x1303db.width = _0x1303db.height = _0x3de9e1 * 0x2;
          _0x366ed2.beginPath();
          _0x366ed2.arc(_0x3de9e1, _0x3de9e1, _0x3de9e1, 0x0, _0x2b895b.PI_2);
          _0x366ed2.fillStyle = "#fff";
          _0x366ed2.fill();
          (_0x3de9e1 = _0x2b895b.Texture.from(_0x1303db)).defaultAnchor = _0xd8bf05;
          return _0x3de9e1;
        }
        var _0x1880fa = _0x2bafa6(0x100);
        var _0x25b269 = _0x2bafa6(0x6);
        _0x4a4698.addChild(_0x5502b2, _0x6b95b3, _0x22d68b, _0x5ca3b8, _0x172488);
        _0x4b59d3.addChild(_0x4a4698, _0x50caf6);
        var _0x439611;
        var _0x1692c6;
        var _0x475a61;
        var _0x24f82e;
        var _0x1322cc;
        var _0x3adc10;
        var _0x4af1eb;
        var _0x593fae;
        var _0x3c549b;
        var _0x54ce49;
        var _0x4fbfae;
        var _0x5f1f08;
        var _0x4c1ed4;
        var _0x39c272;
        var _0x32493c;
        var _0x1db7a6;
        var _0x304d31;
        var _0x18b0e1;
        var _0xb7d857;
        var _0x44cdc6;
        var _0x5dd998;
        var _0x4ebda1;
        var _0x3909d1;
        var _0x1f772f;
        var _0x37f994;
        var _0x5cc0b7;
        var _0x4aaac0;
        var _0x38b8cc;
        var _0x206e53;
        var _0x47159e;
        var _0x2f1091;
        var _0x4a93cb = '';
        var _0xf2832c = false;
        var _0x59c59f = null;
        var _0x41254e = null;
        var _0x11b3cb = false;
        var _0x403f7f = {
          'V': [],
          'K': [],
          'Z': [],
          'X': []
        };
        var _0x1e1c4c = [];
        var _0x47e59e = false;
        var _0x287a2c = null;
        var _0x4985b8 = true;
        var _0x2f2d2f = _0x18803e.PI * 0x2;
        var _0x41c44b = {};
        var _0xbd235a = new _0xee5ae.auth.GoogleAuthProvider();
        var _0x310ced = {
          'q': "halloween2023",
          'ee': [0xee8d1c, 0xab4422, 0x903e6f, 0x602749],
          'te': '',
          'ie': 0x192ea2bec00,
          'ne': {
            'se': _0xd8bf05,
            'ae': {
              'oe': 0x1,
              're': 0x1
            }
          }
        };
        _0x310ced.ce = Date.now() < 0x192ea2bec00;
        _0xee5ae.initializeApp({
          'apiKey': "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
          'authDomain': "accounts.gota.io",
          'databaseURL': "https://gota-io.firebaseio.com",
          'projectId': "gota-io",
          'storageBucket': "gota-io.appspot.com",
          'messagingSenderId': "570450309042",
          'appId': "1:570450309042:web:380ab6c94d44de2f"
        });
        var _0x19dea9 = {};
        var _0x3e7b6a = {};
        var _0x532435 = {
          'le': 0x0,
          'de': 0x0,
          'he': 0x0,
          'ue': 0x1
        };
        var _0x4c4009 = [{
          'name': 'All',
          'flags': 0xff,
          'maxMessages': 0x64
        }, {
          'name': 'Party',
          'flags': 0x2,
          'maxMessages': 0x64
        }];
        var _0x18ca31 = 0xfa0;
        var _0x2c7ffa = 0xfa0;
        var _0x434f46 = {
          'pe': 0x1,
          'fe': 0xf,
          'me': 0xb,
          'ge': 0x1,
          'be': function (_0x49b906, _0x18c2c8) {
            _0x343b32[_0x49b906] = _0x18c2c8;
            var _0x122001 = (0xf - _0x18c2c8) * 0x3e8 + 0x2ee;
            switch (_0x49b906) {
              case "rRainbowNameSpeed":
                _0x18ca31 = _0x122001;
                break;
              case "rRainbowCellSpeed":
                _0x2c7ffa = _0x122001;
            }
          }
        };
        var _0x174dfe = 0x0;
        var _0x54723e = [];
        var _0x32fbb3 = -0x1;
        var _0x343b32 = {
          'cDisableAA': false,
          'cAutoRespawn': false,
          'customCellColor': "#ffffff",
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
          'rViewDistance': 150,
          '_ChatTabs': JSON.parse(JSON.stringify(_0x4c4009))
        };
        var _0x5daf1e = {
          'kContextMenu': _0x12c20a("mouse3"),
          'kEjectMass': _0x12c20a('w'),
          'kToggleSpec': _0x12c20a('q'),
          'kSplit': _0x12c20a("space"),
          'kDoubleSplit': -0x1,
          'kTripleSplit': -0x1,
          'kQuadSplit': -0x1,
          'kHexaSplit': -0x1,
          'kFreezeMouse': -0x1
        };
        var _0x816bd5 = Object.freeze({
          'ke': _0x12c20a("enter"),
          '$e': _0x12c20a("escape"),
          'zoomIn': _0x12c20a('up'),
          'zoomOut': _0x12c20a("down"),
          'chatInputHistoryUp': _0x12c20a('up'),
          'chatInputHistoryDown': _0x12c20a("down"),
          'ye': _0x12c20a("escape")
        });
        var _0x2e9c33 = {
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
        var _0x170dbe = {
          'kLinesplit': -0x1,
          'kPentaSplit': -0x1,
          'kSeptiSplit': -0x1,
          'kOctoSplit': -0x1,
          'kCycleNames': _0x12c20a('n'),
          'kCycleMasses': _0x12c20a('m'),
          'kCycleSkins': _0x12c20a('k'),
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
        var _0x3bd53f = {
          'iMapBackground': ''
        };
        var _0x33420f = function () {
          var _0x4ba369 = {};
          for (var _0x42de0c = 0x1; _0x42de0c <= 0xa; _0x42de0c++) {
            var _0x4c9f1e = "kZoom" + _0x42de0c;
            _0x170dbe[_0x4c9f1e] = -0x1;
            _0x4ba369[_0x4c9f1e] = {
              've': "Zoom level " + _0x42de0c,
              'we': 0.6993157867655625 ** (_0x42de0c - 0x1) * 0x5
            };
          }
          return _0x4ba369;
        }();
        var _0x3836af = new Map();
        var _0x5ef439 = false;
        var _0x35d18e = Object.assign({}, _0x5daf1e);
        var _0x3748af = _0x438c4c.ontouchstart !== undefined;
        var _0x451eb9 = {
          'version': 0x2,
          'uiForegroundColor': "rgb(255, 255, 255)",
          'uiBackgroundColor': "rgba(22, 22, 22, 0.8)",
          'uiBorderColor': "rgba(255, 255, 255, .2)",
          'uiMenuBackgroundColor': "#2A2A2A",
          'uiMenuTitleBackgroundColor': "#404040",
          'uiMenuSubBackgroundColor': '#363636',
          'uiMenuSubBackground2Color': '#404040',
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
        var _0x1ecf15 = _0x379f46({}, _0x451eb9);
        var _0x380e41 = {
          '_e': null,
          'Se': null
        };
        Object.assign(_0x343b32, _0x2e9c33);
        Object.assign(_0x5daf1e, _0x170dbe);
        Object.assign(_0x451eb9, _0x3bd53f);
        var _0x49645f = [];
        var _0x50ee2a = {
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
        var _0x3d0418 = null;
        var _0x5ae580 = 0x0;
        var _0x58eed3 = null;
        var _0x5df28e = _0x438c4c.atob("YlZheHkzYVdEd2NDZ3l4YW1kQkxadFVSMWVEMg==");
        var _0x278919 = _0x438c4c.performance.now.bind(_0x438c4c.performance);
        var _0x1928f0 = {
          'Ne': null,
          'Ce': function () {},
          'Ee': function () {},
          'Oe': function () {},
          'xe': function () {},
          'He': function () {},
          'Me': function () {},
          'Fe': function () {},
          'De': function () {}
        };
        var _0x5af10a = {
          'Ae': function () {
            var _0x1eaf35 = "Gota Web " + _0x438c4c.version;
            var _0x1b6465 = new _0x477c23(0x1 + _0x1eaf35.length + 0x1 + 0x1);
            var _0x22220a = new _0xbf8e1b(_0x1b6465);
            _0x22220a.setUint8(0x0, 0xff);
            _0x22220a.setUint8(0x1, 0x6);
            _0x30066d(0x2, _0x22220a, _0x1eaf35);
            return _0x1b6465;
          },
          'Ie': function (_0x27c7ac) {
            var _0x5b3f82 = new _0x477c23(0x2 + (_0x27c7ac.length + 0x1) * 0x2);
            var _0x292979 = new _0xbf8e1b(_0x5b3f82);
            _0x292979.setUint8(0x0, 0x0);
            _0x564f0d(0x1, _0x292979, _0x27c7ac);
            return _0x5b3f82;
          },
          'Pe': function (_0x21e8bd) {
            var _0x539dc7 = new _0x477c23(0x1);
            new _0xbf8e1b(_0x539dc7).setUint8(0x0, _0x21e8bd);
            return _0x539dc7;
          },
          'Te': function (_0x224b8f, _0x597ae4) {
            var _0xd962e6 = new _0x477c23(0x9);
            var _0x38c34a = new _0xbf8e1b(_0xd962e6);
            _0x38c34a.setUint8(0x0, 0x10);
            _0x38c34a.setInt32(0x1, _0x224b8f, true);
            _0x38c34a.setInt32(0x5, _0x597ae4, true);
            return _0xd962e6;
          },
          'Le': function (_0x41cce0) {
            var _0x22cf52 = new _0x477c23(0x1);
            new _0xbf8e1b(_0x22cf52).setUint8(0x0, _0x41cce0 ? 0x3 : 0x4);
            return _0x22cf52;
          },
          'Re': function () {
            var _0x75003 = new _0x477c23(0x1);
            new _0xbf8e1b(_0x75003).setUint8(0x0, 0x47);
            return _0x75003;
          },
          'Ue': function (_0x38c917) {
            var _0x4742d2 = new _0x477c23(0x3);
            var _0xc14385 = new _0xbf8e1b(_0x4742d2);
            _0xc14385.setUint8(0x0, 0x1);
            if (_0x38c917) {
              _0xc14385.setUint16(0x1, _0x38c917, true);
            }
            return _0x4742d2;
          },
          'Be': function (_0x20b086, _0x1b7b88) {
            var _0x5adcb4 = new _0x477c23(0x2 + (_0x20b086.length + 0x1) * 0x2);
            var _0x4c34ed = new _0xbf8e1b(_0x5adcb4);
            _0x4c34ed.setUint8(0x0, 0x48);
            _0x4c34ed.setUint8(0x1, _0x1b7b88);
            _0x564f0d(0x2, _0x4c34ed, _0x20b086);
            return _0x5adcb4;
          },
          'je': function (_0x320ae2) {
            var _0x17ee5e = new _0x477c23(0x2);
            var _0x1f29ad = new _0xbf8e1b(_0x17ee5e);
            _0x1f29ad.setUint8(0x0, 0x29);
            _0x1f29ad.setUint8(0x1, _0x320ae2 ? 0x1 : 0x0);
            return _0x17ee5e;
          },
          'Ge': function (_0x3c4549, _0x2fbcac) {
            var _0x454191 = new _0x477c23(0x6);
            var _0x2a166a = new _0xbf8e1b(_0x454191);
            _0x2a166a.setUint8(0x0, 0x28);
            _0x2a166a.setUint8(0x1, _0x3c4549);
            _0x2a166a.setUint32(0x2, _0x2fbcac, true);
            return _0x454191;
          },
          'ze': function (_0x1e5b8f) {
            var _0x5cd145 = new _0x477c23(0x1 + _0x1e5b8f.length + 0x1);
            var _0x2f48be = new _0xbf8e1b(_0x5cd145);
            _0x2f48be.setUint8(0x0, 0x2a);
            _0x30066d(0x1, _0x2f48be, _0x1e5b8f);
            return _0x5cd145;
          },
          'We': function (_0x1a4283) {
            var _0x1bd9ec = new _0x477c23(0x3);
            var _0x3638d2 = new _0xbf8e1b(_0x1bd9ec);
            _0x3638d2.setUint8(0x0, 0x67);
            _0x3638d2.setUint16(0x1, _0x1a4283, true);
            return _0x1bd9ec;
          },
          'Je': function (_0x1bb93c, _0x11e02b) {
            var _0x5f583d = new _0x477c23(0x5 + (_0x11e02b.length + 0x1) * 0x2);
            var _0x32678f = new _0xbf8e1b(_0x5f583d);
            _0x32678f.setUint8(0x0, 0x49);
            _0x32678f.setUint32(0x1, _0x1bb93c, true);
            _0x564f0d(0x5, _0x32678f, _0x11e02b);
            return _0x5f583d;
          },
          'Ye': function () {
            var _0x44386c = new _0x477c23(0x8 + (''.length + 0x1));
            var _0x306e6f = new _0xbf8e1b(_0x44386c);
            _0x306e6f.setUint8(0x0, 0xa);
            _0x306e6f.setUint8(0x1, _0x50ee2a.nameColor.r);
            _0x306e6f.setUint8(0x2, _0x50ee2a.nameColor.g);
            _0x306e6f.setUint8(0x3, _0x50ee2a.nameColor.b);
            _0x306e6f.setUint8(0x4, 0x0);
            _0x306e6f.setUint8(0x5, 0x0);
            _0x306e6f.setUint8(0x6, 0x0);
            _0x30066d(0x7, _0x306e6f, '');
            _0x306e6f.setUint8(0x8 + ''.length, 0x0);
            return _0x44386c;
          },
          'L': function (_0x492e9d) {
            var _0x5e8100 = new _0x477c23(0x1 + (_0x492e9d.length + 0x1));
            var _0x47b6df = new _0xbf8e1b(_0x5e8100);
            _0x47b6df.setUint8(0x0, 0xb);
            _0x30066d(0x1, _0x47b6df, _0x492e9d);
            return _0x5e8100;
          },
          'Ve': function () {
            var _0x57c971 = new _0x477c23(0x3);
            var _0x1300d4 = new _0xbf8e1b(_0x57c971);
            _0x1300d4.setUint8(0x0, 0x68);
            _0x1300d4.setUint16(0x1, 0x64, true);
            return _0x57c971;
          },
          'Ke': function (_0x996792) {
            var _0x2b87d7 = new _0x477c23(0x5);
            var _0x3d5ebe = new _0xbf8e1b(_0x2b87d7);
            _0x3d5ebe.setUint8(0x0, 0x50);
            _0x3d5ebe.setUint8(0x1, _0x996792);
            _0x3d5ebe.setUint8(0x2, 0x0);
            _0x3d5ebe.setUint16(0x3, 0x0);
            return _0x2b87d7;
          },
          'Ze': function (_0x4e0083) {
            var _0x29cd4d = new _0x477c23(0x2);
            var _0x29dc98 = new _0xbf8e1b(_0x29cd4d);
            _0x29dc98.setUint8(0x0, 0x5a);
            _0x29dc98.setUint8(0x1, _0x4e0083);
            return _0x29cd4d;
          },
          'Qe': function () {
            var _0x144ed7 = new _0x477c23(0x1);
            new _0xbf8e1b(_0x144ed7).setUint8(0x0, 0x51);
            return _0x144ed7;
          },
          'Xe': function () {
            var _0x784b6d = new _0x477c23(0x2);
            new _0xbf8e1b(_0x784b6d).setUint8(0x0, 0x5d);
            return _0x784b6d;
          },
          'qe': function (_0x2e5c77, _0x4aa5cd) {
            var _0x421d74 = new _0x477c23(0x5 + (_0x4aa5cd.length + 0x1) * 0x2);
            var _0x13b842 = new _0xbf8e1b(_0x421d74);
            _0x13b842.setUint8(0x0, 0x5e);
            _0x13b842.setUint32(0x1, _0x2e5c77, true);
            _0x564f0d(0x5, _0x13b842, _0x4aa5cd);
            return _0x421d74;
          },
          'et': function (_0x1624d5) {
            var _0x248803 = new _0x477c23(0x1 + (_0x1624d5.length + 0x1));
            var _0x4b83fa = new _0xbf8e1b(_0x248803);
            _0x4b83fa.setUint8(0x0, 0x64);
            _0x30066d(0x1, _0x4b83fa, _0x1624d5);
            return _0x248803;
          },
          'tt': function (_0x5e025f) {
            var _0x625d71 = new _0x477c23(0x1 + (_0x5e025f.length + 0x1));
            var _0x1bf605 = new _0xbf8e1b(_0x625d71);
            _0x1bf605.setUint8(0x0, 0x65);
            _0x30066d(0x1, _0x1bf605, _0x5e025f);
            return _0x625d71;
          },
          'it': function (_0x5cb239, _0x104c24, _0x56a59c) {
            var _0x413c13 = new _0x477c23(0x4);
            var _0x4b9a94 = new _0xbf8e1b(_0x413c13);
            _0x4b9a94.setUint8(0x0, 0x5b);
            _0x4b9a94.setUint8(0x1, _0x5cb239);
            if (_0x5cb239 === 0x3 || _0x5cb239 === 0x7) {
              _0x4b9a94.setUint16(0x2, _0x104c24, false);
            } else if (_0x5cb239 === 0xb) {
              _0x4b9a94.setInt16(0x2, _0x104c24, false);
            } else {
              _0x4b9a94.setUint8(0x2, _0x104c24);
              _0x4b9a94.setUint8(0x3, _0x56a59c);
            }
            return _0x413c13;
          },
          'rt': function (_0x3f9fb3, _0x355cbe) {
            var _0x5383e2 = new _0x477c23(0x2 + (_0x355cbe.length + 0x1) * 0x2);
            var _0x4c2b66 = new _0xbf8e1b(_0x5383e2);
            _0x4c2b66.setUint8(0x0, 0x5c);
            _0x4c2b66.setUint8(0x1, _0x3f9fb3);
            _0x564f0d(0x2, _0x4c2b66, _0x355cbe);
            return _0x5383e2;
          }
        };
        function _0x517bd7(_0x114691) {
          _0x439611 = _0x470b4b.getElementById('canvas');
          console.log("Waiting for 3000ms before checking for element ID 'colorPickerContainer2'...");
          setTimeout(function () {
            console.log("Checking for container element ID 'colorPickerContainer2' now.");
            const _0x374f66 = document.getElementById("colorPickerContainer2");
            if (_0x374f66) {
              console.log("Container element with ID 'colorPickerContainer2' exists.");
              const _0xe2bbe8 = document.getElementById("colorPicker2");
              if (_0xe2bbe8) {
                console.log("Found color input element '#colorPicker2'. Attaching change listener.");
                _0xe2bbe8.addEventListener('change', function (_0x776ef1) {
                  const _0x1c98c2 = _0x776ef1.target.value;
                  console.log("'colorPicker2' input value changed to: " + _0x1c98c2);
                  console.log("Detected Hex Color from input change:", _0x1c98c2);
                });
                const _0x3565e2 = _0xe2bbe8.value;
                console.log("Initial Hex value of '#colorPicker2' is: " + _0x3565e2);
              } else {
                console.warn("Could not find the input element with ID '#colorPicker2' inside '#colorPickerContainer2'.");
              }
            } else {
              console.log("Container element with ID 'colorPickerContainer2' does NOT exist after the wait.");
            }
          }, 0xbb8);
          console.log("Timeout has been set.");
          _0x1692c6 = _0x470b4b.getElementById("minimap-canvas");
          _0x475a61 = _0x1692c6.getContext('2d');
          _0x5f1f08 = _0x189125("#main");
          _0x4c1ed4 = _0x189125("#party-panel");
          _0x39c272 = _0x189125(".hud-panel");
          _0x4aaac0 = _0x189125("#score-panel");
          _0x1db7a6 = _0x189125("#main-scrimmage");
          _0x304d31 = _0x189125('#context-menu');
          _0x18b0e1 = _0x189125("#chat-input");
          _0x32493c = _0x189125("#leaderboard-header");
          _0x5cc0b7 = _0x189125("#scrimmage-custom");
          Object.assign(_0x41c44b, {
            'ct': _0x189125("#pMouse"),
            'lt': _0x189125("#pScore span")[0x0],
            'dt': _0x189125("#pMass span")[0x0],
            'ht': _0x189125("#pPing span")[0x0],
            'ut': _0x189125("#pCells span")[0x0],
            'ft': _0x189125("#pFps span")[0x0],
            'gt': _0x189125("#extra-reset-timer"),
            'bt': _0x189125('#resetTime'),
            'kt': _0x189125('#extra-respawn-cooldown'),
            '$t': _0x189125("#respawnCooldown"),
            'yt': _0x189125("#spectatorCount"),
            'vt': 0x0,
            'wt': _0x189125('#minimap-coordinates'),
            '_t': _0x4c1ed4,
            'St': _0x189125("#social-online-friends-count"),
            'Nt': _0x189125("#popup-profile"),
            'Ct': _0x189125("#popup-account-username"),
            'Et': _0x189125("#scrimmage-map"),
            'Ot': _0x189125('#scrimmage-mapmode'),
            'xt': _0x189125("#scrimmage-mapsize"),
            'Ht': _0x189125("#scrimmage-startmass"),
            'P': _0x189125("#chat-panel"),
            'Mt': _0x189125("#touch_controls")
          });
          _0x189125("td:contains(Disable Auto Name Hiding)").text("Disable Auto Mass Hiding");
          _0x189125("#cShowMass").parents('tr').hide();
          _0x189125("#sShowNames").parents('tr').hide();
          _0x189125("#sShowSkins").parents('tr').hide();
          _0x189125("#pServer").hide();
          _0x189125('#cHideServer').parents('tr').hide();
          _0x189125("#main-options table").prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Options</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Hides all locked name features (besides cell colors) of other players.\" data-balloon-pos=\"down\" data-balloon-length=\"fit\">\n              Hide Locked Name Features\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLockedNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Name</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnName\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Mass</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnMass\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Masses</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Skin</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnSkin\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemySkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Darker Bot Colors</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cDarkerBotColors\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Uncap FPS</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cUncapFPS\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Small cells will have smoother skins and edges, but cells and names may appear to be blurry.\" data-balloon-pos=\"up\" data-balloon-length=\"fit\">\n              Smooth Cells\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cSmoothCells\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Linesplit Mode</td>\n            <td>\n              <select id=\"sLinesplitMode\">\n                <option value=\"TOGGLE\">Toggle</option>\n                <option value=\"HOLD\">Hold</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Leaderboard/Queue Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLeaderboardHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Party Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHidePartyHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Enable Sounds</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cEnableSounds\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Split Sound: </td>\n            <td><input id=\"iSplitSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Eject Sound: </td>\n            <td><input id=\"iEjectSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Camera Focus</td>\n            <td>\n              <select id=\"sCameraFocus\">\n                <option value=\"CENTER\">Center</option>\n                <option value=\"MASS\">Biggest Cells</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 0\" data-balloon-pos=\"up\">Camera Delay: <input class=\"options-input\" id=\"cameraDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rCameraDelay\" min=\"0\" max=\"250\" value=\"0\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 165\" data-balloon-pos=\"up\">Zoom Delay: <input class=\"options-input\" id=\"zoomDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rZoomDelay\" min=\"0\" max=\"400\" value=\"165\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 500\" data-balloon-pos=\"up\">Menu Delay: <input class=\"options-input\" id=\"menuDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rMenuDelay\" min=\"0\" max=\"1000\" value=\"500\" step=\"5\" /></td>\n          </tr>\n        </tbody>\n      ");
          var _0x2f2e7e;
          var _0xfdee93 = "\n        <thead>\n          <th colspan=\"4\">Gota Fixes Keybinds</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Linesplit</td>\n          <td><button id=\"kLinesplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Penta Split (32x)</td>\n          <td><button id=\"kPentaSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Septi Split (128x)</td>\n          <td><button id=\"kSeptiSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Octo Split (256x)</td>\n          <td><button id=\"kOctoSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Names</td>\n          <td><button id=\"kCycleNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Masses</td>\n          <td><button id=\"kCycleMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Skins</td>\n          <td><button id=\"kCycleSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Name</td>\n          <td><button id=\"kHideOwnName\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Names</td>\n          <td><button id=\"kHideFriendNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Names</td>\n          <td><button id=\"kHideBotNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Names</td>\n          <td><button id=\"kHideEnemyNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Mass</td>\n          <td><button id=\"kHideOwnMass\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Masses</td>\n          <td><button id=\"kHideFriendMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Masses</td>\n          <td><button id=\"kHideBotMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Masses (Autosplit)</td>\n          <td><button id=\"kHideEnemyMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Skin</td>\n          <td><button id=\"kHideOwnSkin\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Skins</td>\n          <td><button id=\"kHideFriendSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Skins</td>\n          <td><button id=\"kHideBotSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Skins</td>\n          <td><button id=\"kHideEnemySkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n      ";
          for (_0x2f2e7e of Object.entries(_0x33420f)) {
            var _0x516f76 = _0x23f9c1(_0x2f2e7e) || _0x4d18e8(_0x2f2e7e, 0x2) || _0x90875f(_0x2f2e7e, 0x2) || _0x41b368();
            var _0x212044 = _0x516f76[0x0];
            var _0x516f76 = _0x516f76[0x1];
            var _0x582d6c = _0x516f76.ve;
            var _0x516f76 = _0x516f76.we;
            _0xfdee93 += "<tr>\n            <td colSpan=\"3\">" + _0x582d6c + "</td>\n            <td><button id=\"" + _0x212044 + "\" class=\"keybinds-btn\"></button></td>\n          </tr>";
            _0x33420f[_0x212044] = _0x516f76;
          }
          _0x189125("#main-hotkeys table").prepend(_0xfdee93);
          _0x189125("#main-themes table").prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Theme</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Map Background: </td>\n          <td><input id=\"iMapBackground\" class=\"input-option\" placeholder=\"https://example.png\" /></td>\n        </tr>\n      ");
          _0x189125(".main-content, .main-right").css("height", "530px");
          _0x189125(".server-table tbody").css("height", "421px");
          _0x189125(".options-container").css("height", "480px");
          _0x189125('#server-content').css('height', "456px");
          _0x189125("#main-rb").css("height", '340px');
          _0x189125(".main-rb-title").css("padding", "10px");
          _0x189125("#main-account").css('height', '180px');
          _0x189125(".policyLinks").css({
            'flex-wrap': 'wrap'
          }).append("<span style=\"text-align: center\">If you enjoy using Gota Fixes, please consider donating to support the developer.</span>", _0x189125("<a href=\"https://ko-fi.com/camlan\" target=\"_blank\">Donate</a>").css({
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
          Object.assign(_0x189125("#account-shop")[0x0].dataset, {
            'balloon': "Use code \"camlan\" in the \"Support A Creator\" section at checkout for a 10% discount!",
            'balloonPos': 'left',
            'balloonLength': 'medium'
          });
          _0x189125("#rAnimationDelay").attr("min", 0x1);
          var _0x533f05;
          var _0x3f1e09;
          var _0x5b9a58;
          var _0xf223e4;
          var _0x38a343;
          var _0x563764 = _0x470b4b.createElement("style");
          function _0x4c491b(_0x13bad6, _0xb6c1d1, _0x4572a0) {
            var _0x48c7d3 = _0x4572a0.pe;
            var _0x59c33c = _0x4572a0.fe;
            var _0x347d50 = _0x4572a0.me;
            var _0x5f9594 = _0x4572a0.ge;
            var _0xa9ab0e = _0x4572a0.be;
            var _0x4572a0 = _0xb6c1d1;
            var _0xb6c1d1 = _0x343b32[_0x13bad6];
            var _0x404d6a = (_0x4572a0 = _0x189125("\n          <tr>\n            <td style=\"overflow-x: visible\" data-balloon=\"Default: " + _0x347d50 + "\" data-balloon-pos=\"up\">" + _0x4572a0 + ": <input class=\"options-input\" style=\"float: none;\" value=\"" + _0xb6c1d1 + "\"></td>\n            <td><input type=\"range\" min=\"" + _0x48c7d3 + "\" max=\"" + _0x59c33c + "\" value=\"" + _0xb6c1d1 + "\" step=\"" + _0x5f9594 + "\"/></td>\n          </tr>\n        ")).find(".options-input");
            var _0x192e3a = _0x4572a0.find("[type=range]");
            _0x404d6a.on("change", function () {
              var _0x566ef2 = parseInt(_0x404d6a.val());
              var _0x566ef2 = _0x18803e.min(_0x18803e.max(_0x566ef2 = isNaN(_0x566ef2) ? _0x347d50 : _0x566ef2, _0x48c7d3), _0x59c33c);
              _0x404d6a.val(_0x566ef2);
              _0x192e3a.val(_0x566ef2);
              _0xa9ab0e(_0x13bad6, _0x566ef2);
            });
            _0x192e3a.on("input", function () {
              var _0x23f8d7 = parseInt(_0x192e3a.val());
              _0x404d6a.val(_0x23f8d7);
              _0xa9ab0e(_0x13bad6, _0x23f8d7);
            });
            _0xa9ab0e(_0x13bad6, _0xb6c1d1);
            return _0x4572a0;
          }
          function _0x6bd972(_0x10a0d9) {
            if (_0x10a0d9 && !_0x58eed3) {
              _0x58eed3 = _0x189125("<thead><th colspan=\"2\">Gota Fixes</th></thead>").add(_0x189125("<tbody>").append("<tr>\n                  <td>Rainbow Name</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowName\"></td>\n                </tr>", _0x4c491b('rRainbowNameSpeed', "Rainbow Name Speed", _0x434f46), "<tr>\n                  <td>Rainbow Cell</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowCell\"></td>\n                </tr>", _0x4c491b("rRainbowCellSpeed", "Rainbow Cell Speed", _0x434f46)));
              _0x17f5c7.append(_0x58eed3);
              _0x17f5c7.find("[type=checkbox]").change(function () {
                _0x2bac48(_0x189125(this));
              }).prop("checked", function () {
                return _0x343b32[this.id];
              });
              _0x17f5c7.find('[type=range]').css('width', '110px');
            } else if (!_0x10a0d9) {
              _0x343b32.spRainbowName = _0x343b32.spRainbowCell = false;
              if ((_0x10a0d9 = _0x24f82e.Dt) != null) {
                _0x10a0d9.Ft();
              }
              if (_0x58eed3) {
                _0x58eed3.remove();
                _0x58eed3 = null;
              }
            }
            _0x1fff68();
          }
          _0x563764.innerHTML = "\n        .input-option {\n          border: none;\n          border-radius: 5px;\n        }\n      ";
          _0x563764.innerHTML += "\n          .popup-container {\n            width: initial;\n            max-width: 640px;\n            min-width: 320px;\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            align-content: center;\n          }\n\n          #popup-party-code {\n            width: 320px;\n          }\n\n          .alert-scroller {\n            max-height: 450px;\n            margin-bottom: 5px;\n            overflow-y: auto;\n          }\n\n          .alert-scroller::-webkit-scrollbar {\n            width: 6px\n          }\n          \n          .alert-scroller::-webkit-scrollbar-thumb {\n            background-color: #a9a9a9;\n            border-radius: 4px\n          }\n        ";
          _0x533f05 = _0x189125("<div class=\"popup-panel\" style=\"display: none\">");
          _0x3f1e09 = _0x189125("<span class=\"title-text menu-title\">");
          _0x5b9a58 = _0x189125("<div style=\"font: 12pt open sans; white-space: pre-line; margin: 5px 16px\">");
          _0xf223e4 = _0x189125("<button class=\"gota-btn\" style=\"margin: 5px auto; display: block\">Dismiss</button>");
          _0x38a343 = _0x189125("<div class=\"alert-scroller\">").append(_0x5b9a58, _0xf223e4);
          _0x533f05.append(_0x3f1e09, _0x38a343);
          _0x189125(".popup-container").append(_0x533f05);
          _0x206e53 = function (_0x77b513, _0x55cd7e) {
            var _0x56660b;
            if (!_0x533f05.is(":visible")) {
              if (_0x56660b = _0x5f1f08.is(":visible")) {
                _0x319f2b(_0x5f1f08);
              }
              _0x3f1e09.text(_0x77b513);
              _0x5b9a58.html(_0x55cd7e);
              _0xf223e4.one("click", function () {
                _0x319f2b(_0x533f05);
                if (_0x56660b) {
                  _0x494cb4(_0x5f1f08);
                }
              });
              _0x494cb4(_0x533f05);
            }
          };
          var _0x5c1dd5;
          var _0x57a1b0;
          var _0x15281f;
          var _0x5540b6;
          var _0x17f5c7 = _0x189125("#subpanel-content > table");
          function _0x29b2a0() {
            if (_0x24f82e && _0xb7d857) {
              _0xb7d857 = false;
              _0x44cdc6 = Date.now();
              _0x24f82e.T(_0x5af10a.Le(false));
            }
          }
          _0x47159e = _0x17f5c7.children();
          _0xee5ae.auth().onAuthStateChanged(function (_0x374bb5) {
            if (_0x374bb5) {
              _0xee5ae.database().ref("/friendships/" + _0x374bb5.uid).on('value', function (_0x81e209) {
                _0x6bd972(_0x81e209 = (_0x81e209 = _0x81e209.val()) && Object.entries(_0x81e209).some(function (_0x51bbfe) {
                  var _0x51bbfe = _0x23f9c1(_0x51bbfe) || _0x4d18e8(_0x51bbfe, 0x2) || _0x90875f(_0x51bbfe, 0x2) || _0x41b368();
                  var _0x1059e2 = _0x51bbfe[0x0];
                  var _0x51bbfe = _0x51bbfe[0x1];
                  return _0x1059e2 === _0x5df28e && _0x51bbfe;
                }));
              });
            } else {
              _0x6bd972(false);
            }
          });
          _0x563764.innerHTML += "\n        #party-panel { width: max-content }\n      ";
          _0x563764.innerHTML += "\n        #leaderboard-panel { padding: 5px 0 }\n        #leaderboard-panel > * { margin: 0 }\n      ";
          _0x563764.innerHTML += "\n        #leaderboard-canvas { pointer-events: auto }\n      ";
          _0x563764.innerHTML += "\n        #minimap-coordinates { color: unset }\n      ";
          _0x470b4b.head.appendChild(_0x563764);
          _0x57a1b0 = _0x32493c[0x0];
          _0x2f1091 = function (_0x3de7d9) {
            if (_0x3de7d9 !== _0x57a1b0.textContent) {
              _0x57a1b0.textContent = _0x3de7d9;
            }
          };
          _0x39c272.hide();
          _0xb7d857 = false;
          _0x44cdc6 = 0x0;
          if (_0x3748af) {
            _0x438c4c.FastClick.attach(_0x470b4b.body);
            _0x438c4c.nipplejs.create({
              'zone': _0x189125('#joystick')[0x0],
              'mode': "static",
              'position': {
                'left': "10%",
                'bottom': '20%'
              },
              'color': "red",
              'size': 0x64,
              'restOpacity': 0.5,
              'dynamicPage': true
            }).on("move", function (_0x433fdc, _0x7f29d6) {
              var _0x1958fd = _0x7f29d6.distance;
              var _0x203d86 = _0x7f29d6.force;
              var _0x7f29d6 = _0x7f29d6.angle;
              _0x24f82e.At = _0x1958fd * _0x203d86 * _0x18803e.cos(_0x7f29d6.radian) + _0x438c4c.innerWidth / 0x2;
              _0x24f82e.It = _0x1958fd * _0x203d86 * _0x18803e.sin(-_0x7f29d6.radian) + _0x438c4c.innerHeight / 0x2;
            });
            _0x343b32.cHideChat = true;
            _0x343b32.cHideLeaderboard = true;
            _0x5c1dd5 = function (_0x32cf0f) {
              return _0x24f82e.Pt(_0x5daf1e[_0x32cf0f]);
            };
            _0x189125('.touch_button').on("touchstart touchend", function (_0x423fab) {
              var _0x26edee = _0x423fab.type;
              _0x423fab.target.style.opacity = _0x26edee === "touchstart" ? 0x1 : 0.3;
            });
            _0x189125("#button_split").on('touchstart', function () {
              return _0x5c1dd5('kSplit');
            });
            _0x189125("#button_double").on('touchstart', function () {
              return _0x5c1dd5("kDoubleSplit");
            });
            _0x189125("#button_triple").on("touchstart", function () {
              return _0x5c1dd5("kTripleSplit");
            });
            _0x189125("#button_eject").on('touchstart', function () {
              return _0x5c1dd5("kEjectMass");
            }).on("touchend", _0x29b2a0);
          } else {
            _0x438c4c.onmousemove = function (_0x504fce) {
              _0x24f82e.At = _0x504fce.clientX;
              _0x24f82e.It = _0x504fce.clientY;
            };
            _0x438c4c.onmousedown = function (_0xa38481) {
              var _0x4ad735 = _0xa38481.button + 0x1;
              if (_0x5ef439) {
                _0x201b80(_0x4ad735);
                _0xa38481.preventDefault();
              } else if (!_0x189125('input').is(":focus")) {
                _0x24f82e.Pt(_0x4ad735);
              }
            };
            _0x438c4c.onmouseup = function (_0x2daa2c) {
              if ((_0x2daa2c = _0x2daa2c.button + 0x1) === _0x5daf1e.kEjectMass) {
                _0x29b2a0();
              } else if (_0x2daa2c === _0x5daf1e.kLinesplit) {
                _0x1928f0.xe();
              }
            };
            _0x438c4c.onwheel = function (_0x528285) {
              if (!(_0x5f1f08.is(':visible') && _0x5c5075.get(_0x5f1f08.selector) !== "hide") && _0x528285.target.id === 'canvas') {
                _0x528285 = _0x528285.wheelDelta || _0x528285.deltaY * -0x1;
                _0x24f82e.Tt *= _0x528285 > 0x0 ? 1.1 : 0.9;
              }
            };
          }
          _0x438c4c.onkeydown = function (_0x2468ce) {
            var _0x11f806 = _0x2468ce.which || _0x2468ce.keyCode || _0x2468ce.charCode;
            if (!(_0x11f806 <= 0x5)) {
              if (_0x5ef439) {
                _0x201b80(_0x11f806);
                _0x2468ce.preventDefault();
              } else if (!_0x189125('input').is(":focus")) {
                _0x24f82e.Pt(_0x11f806);
              }
            }
          };
          _0x438c4c.onkeyup = function (_0x122bdc) {
            if ((_0x122bdc = _0x122bdc.which || _0x122bdc.keyCode || _0x122bdc.charCode) === _0x5daf1e.kEjectMass) {
              _0x29b2a0();
            } else if (_0x122bdc === _0x5daf1e.kLinesplit) {
              _0x1928f0.xe();
            }
          };
          _0x438c4c.addEventListener("blur", function () {});
          _0x470b4b.addEventListener("contextmenu", function (_0x45c85a) {
            return _0x45c85a.preventDefault();
          });
          _0x1409a1();
          _0xbb062c();
          _0x5dd998 = {};
          _0x4ebda1 = {};
          for (_0x15281f in _0xdc621e) {
            var _0x45d6a5 = _0xdc621e[_0x15281f];
            _0x189125(".emote-list").append("<li><img name='" + _0x45d6a5 + "' title='" + _0x45d6a5 + "' src='https://gota.io/emotes/" + _0x45d6a5 + ".png' /></li>");
            _0x5dd998[_0x45d6a5] = true;
          }
          for (_0x5540b6 in _0x2fdbe3) {
            var _0x58bbd8 = _0x2fdbe3[_0x5540b6];
            _0x189125('.gif-list').append("<li><img name='" + _0x58bbd8 + "' title='" + _0x58bbd8 + "' src='https://gota.io/emotes/gifs/" + _0x58bbd8 + ".gif' /></li>");
            _0x4ebda1[_0x58bbd8] = true;
          }
          var _0x402b12;
          var _0x3bebb7;
          var _0x3661aa;
          var _0xcdd0d1;
          for (var _0x479907 = 0x0; _0x479907 < _0x379215.length; _0x479907++) {
            (function (_0x2b6651) {
              _0x3bebb7 = (_0x402b12 = _0x379215[_0x2b6651]).replace(/^(letter|number)_/, '');
              _0x189125('#spEffect').append("<option value=\"" + (_0x2b6651 + 0x1) + "\">" + (_0x3bebb7[0x0].toUpperCase() + _0x3bebb7.slice(0x1)) + '</option>');
              _0x5d18c1[_0x2b6651] = _0x1880fa;
              var _0x5a7171 = new Image();
              _0x5a7171.src = "images/ejected_mass_skins/" + _0x402b12 + '.png';
              _0x5a7171.onload = function () {
                return _0x5d18c1[_0x2b6651] = _0x2b895b.Texture.from(_0x5a7171);
              };
            })(_0x479907);
          }
          for (_0x3661aa of _0x5bbced) {
            (function (_0x2e39b2) {
              var _0x1508c8 = new Image();
              _0x1508c8.src = "images/powerups/" + _0x2e39b2.Lt + ".png";
              _0x1508c8.addEventListener("load", function () {
                _0x2e39b2.Rt = _0x2b895b.Texture.from(_0x1508c8);
                _0x2e39b2.Rt.defaultAnchor = _0xd8bf05;
              });
              _0x2e39b2.Ut = _0x1508c8;
            })(_0x3661aa);
          }
          function _0x3a5eb0(_0x3e6663) {
            _0x189125.ajax({
              'type': "GET",
              'dataType': "json",
              'url': "https://accounts.gota.io/api/v1/utilities/servers",
              'success': function (_0x282713) {
                var _0x43920f;
                for (_0x43920f of _0x282713) {
                  (function () {
                    var _0x170de0 = _0x43920f.region;
                    var _0x2e495c = _0x43920f.servers;
                    _0x19dea9[_0x170de0] = {};
                    _0x2e495c.sort(function (_0x3d8162, _0x2a066d) {
                      return _0x3d8162.order - _0x2a066d.order;
                    }).forEach(function (_0x964a72) {
                      _0x964a72.players = +_0x964a72.players;
                      _0x964a72.bots ||= 0x0;
                      _0x964a72.playersText = _0x964a72.players + _0x964a72.bots + '/' + _0x964a72.playersMax;
                      if (_0x964a72.bots > 0x0) {
                        _0x964a72.playersText += '*';
                      }
                      _0x964a72.region = _0x170de0;
                      _0x19dea9[_0x170de0][_0x964a72.name] = _0x964a72;
                    });
                  })();
                }
                _0x231736();
                if (_0x3e6663 != null) {
                  _0x3e6663();
                } else if (_0x54ce49 != null) {
                  _0x4b1570(_0x54ce49.name);
                }
              },
              'error': _0x231736
            });
          }
          function _0x2a290d(_0x24522f, _0x563d65) {
            if (_0x24522f) {
              _0x189125(_0x563d65).prop('disabled', false);
              _0x189125(_0x563d65).text("Set");
            } else {
              _0x189125(_0x563d65).prop('disabled', true);
              _0x189125(_0x563d65).text("...");
            }
          }
          function _0x5a1c80(_0x415f48) {
            _0x9e738f.style.width = _0x1e7113 + _0x415f48.clientX - _0x1f303e + 'px';
            _0x9e738f.style.height = _0x3ec897 - (_0x415f48.clientY - _0x35f0f6) + 'px';
          }
          function _0x4dfae0() {
            _0x470b4b.documentElement.removeEventListener("mousemove", _0x5a1c80, false);
            _0x470b4b.documentElement.removeEventListener("mouseup", _0x4dfae0, false);
          }
          _0x1c5840 = _0x2b895b.Texture.from("images/shield.png");
          _0x210805 = _0x2b895b.Texture.from("images/debuff.png");
          _0x1c5840.defaultAnchor = _0x210805.defaultAnchor = _0xd8bf05;
          _0x38a343 = _0x23f9c1(_0x438c4c.location.href.split('#').slice(0x1).join('#').split('&')) || _0x4d18e8(_0x438c4c.location.href.split('#').slice(0x1).join('#').split('&'), 0x2) || _0x90875f(_0x438c4c.location.href.split('#').slice(0x1).join('#').split('&'), 0x2) || _0x41b368();
          _0xcdd0d1 = _0x38a343[0x0];
          _0x3909d1 = _0x38a343[0x1];
          _0x38b8cc = function () {
            if ((_0xcdd0d1 = _0x5b9f43(_0xcdd0d1) || _0x5b9f43(_0x438c4c.localStorage.getItem("server"))) != null) {
              _0x4b1570(_0xcdd0d1.name);
              _0x411ccb(_0xcdd0d1.region);
            } else if (_0x54ce49 != null) {
              _0x4b1570(_0x54ce49.name);
            } else {
              _0x411ccb('eu');
              _0x4b1570("Vendetta");
            }
          };
          _0xee5ae.database().ref("/game").on("value", function (_0x42fe0a) {
            var _0x521135;
            var _0x4d203c = _0x42fe0a.val();
            if (/\d+\.\d+/.exec(_0x438c4c.version)[0x0] !== /\d+\.\d+/.exec(_0x4d203c.version)[0x0]) {
              _0x24f82e.Bt("Gota has updated to version " + _0x4d203c.version + ". Gota Fixes script may be unstable.");
            }
            if ((_0x42fe0a = _0x4d203c.motd) != null && !_0x42fe0a.toLowerCase().includes("store") && _0x4a93cb !== _0x42fe0a) {
              _0x4a93cb = _0x42fe0a;
              _0x24f82e.Bt(_0x42fe0a);
            }
            if (_0x4d203c.listRefresh !== _0x5ae580) {
              _0x5ae580 = _0x4d203c.listRefresh;
              _0x19dea9 = {};
              _0x3a5eb0(_0x38b8cc);
              clearInterval(_0x3d0418);
              _0x3d0418 = setInterval(function () {
                _0x3a5eb0();
              }, _0x4d203c.listRefresh);
            }
            for (_0x521135 in _0x4d203c.titles) {
              _0x1b6227[_0x521135] = _0x4d203c.titles[_0x521135];
            }
          });
          if (true && _0x310ced.ce) {
            _0x189125("body").toggleClass("event-halloween2023");
          }
          _0x189125(".server-tab").on("click", function () {
            _0x411ccb(_0x189125(this).attr('region'));
          });
          _0x189125("#btn-play").on('click', function () {
            if (_0x54ce49 != null) {
              if (_0x24f82e.jt() && _0x24f82e.Gt === _0x54ce49.name) {
                _0x319f2b(_0x5f1f08);
              } else {
                _0x24f82e.zt = false;
                _0x24f82e.Wt();
              }
            }
          });
          _0x189125("#btn-spec").on("click", function () {
            if (_0x54ce49 != null) {
              if ((_0x24f82e.jt() || _0x24f82e.zt) && _0x24f82e.Gt === _0x54ce49.name) {
                _0x319f2b(_0x5f1f08);
              } else {
                _0x24f82e.zt = true;
                _0x24f82e.Jt();
              }
            }
          });
          _0x189125('#btn-servers').on('click', function () {
            return _0x45b509('main-servers');
          });
          _0x189125("#btn-options").on("click", function () {
            return _0x45b509("main-options");
          });
          _0x189125("#btn-hotkeys").on("click", function () {
            return _0x45b509("main-hotkeys");
          });
          _0x189125("#btn-themes").on('click', function () {
            return _0x45b509('main-themes');
          });
          _0x189125("#btn-cellpanel").on("click", function () {
            return _0x45b509('main-subpanel');
          });
          _0x189125("#btn-reddit").on("click", function () {
            return _0x438c4c.open('https://www.reddit.com/r/PlayGotaIO/', "_blank");
          });
          _0x189125("#btn-discord").on("click", function () {
            return _0x438c4c.open('https://gota.io/discord', "_blank");
          });
          _0x189125("#name-box").keypress(function (_0x5a91a1) {
            if (_0x5a91a1.keyCode === _0x816bd5.ke && _0x189125(this).is(":focus")) {
              _0x24f82e.Wt();
            }
          });
          var _0x1f303e;
          var _0x35f0f6;
          var _0x1e7113;
          var _0x3ec897;
          var _0x5dfe81 = _0x189125("#autocomplete-panel");
          _0x18b0e1.keyup(function (_0x365d13) {
            var _0x3fd161;
            var _0x45dadc = _0x189125(this).val();
            var _0x40e810 = _0x45dadc.split(" ");
            switch (_0x365d13.keyCode) {
              case _0x816bd5.ke:
                if ((_0x3fd161 = _0x45dadc).length !== 0x0) {
                  if (_0x3fd161.charAt(0x0) === '/') {
                    (function () {
                      var _0x4c1c6d;
                      var _0x15174b = _0x3fd161.split(" ");
                      var _0x4649df = _0x15174b[0x0].substring(0x1);
                      _0x5a4e6e('');
                      for (_0x4c1c6d of _0x574df5) {
                        if (_0x4c1c6d.Yt.includes(_0x4649df)) {
                          return _0x4c1c6d.Vt(_0x15174b.slice(0x1));
                        }
                      }
                      _0x24f82e.Bt("Invalid command!");
                    })();
                  } else {
                    _0x24f82e.T(_0x5af10a.Be(_0x3fd161, 0x0));
                    _0x5a4e6e('');
                  }
                  if (_0x54723e.length > 0x14) {
                    _0x54723e.shift();
                  }
                  _0x54723e.push(_0x3fd161);
                }
                break;
              case _0x816bd5.chatInputHistoryUp:
                if (_0x32fbb3 === -0x1) {
                  _0x32fbb3 = _0x54723e.length - 0x1;
                } else if (_0x32fbb3 > 0x0) {
                  _0x32fbb3--;
                }
                _0x5a4e6e(_0x54723e[_0x32fbb3 = _0x32fbb3 <= 0x0 ? 0x0 : _0x32fbb3]);
                return;
              case _0x816bd5.chatInputHistoryDown:
                if (_0x32fbb3 === -0x1) {
                  _0x32fbb3 = 0x0;
                } else if (_0x32fbb3 < _0x54723e.length - 0x1) {
                  _0x32fbb3++;
                }
                _0x5a4e6e(_0x54723e[_0x32fbb3 = _0x54723e.length - 0x1 <= _0x32fbb3 ? _0x54723e.length - 0x1 : _0x32fbb3]);
                return;
            }
            if (_0x45dadc.length === 0x0 || _0x45dadc.endsWith(" ") || _0x365d13.keyCode === _0x816bd5.ke) {
              _0x5dfe81.html('').hide();
            } else {
              if (_0x45dadc.startsWith('/')) {
                if (_0x40e810.length > 0x1) {
                  return;
                }
                _0x5dfe81.html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                var _0x396e17;
                var _0x435d38 = _0x40e810[0x0].substring(0x1).toLowerCase();
                var _0x4f4de7 = _0x189125("#autocomplete-panel tbody");
                for (_0x396e17 of _0x574df5) {
                  var _0x233151 = _0x396e17.Yt.find(function (_0x2b4760) {
                    return _0x2b4760.toLowerCase().startsWith(_0x435d38);
                  });
                  if (_0x233151 != null) {
                    _0x4f4de7.append("<tr><td>" + _0x233151 + "</td><td>" + _0x396e17.Yt + "</td><td>" + _0x396e17.Kt + '</td></tr>');
                  }
                }
                _0x5dfe81.toggle(_0x4f4de7.children().length > 0x0);
              } else {
                if (_0x40e810[_0x40e810.length - 0x1].startsWith(':')) {
                  _0x5dfe81.html('');
                  var _0x365d13 = Object.keys(_0x5dd998).filter(function (_0x25076e) {
                    return _0x25076e.toLowerCase().includes(_0x40e810[_0x40e810.length - 0x1].substring(0x1).toLowerCase());
                  });
                  var _0x5acc23 = Object.keys(_0x4ebda1).filter(function (_0x28391f) {
                    return _0x28391f.toLowerCase().includes(_0x40e810[_0x40e810.length - 0x1].substring(0x1).toLowerCase());
                  });
                  if (_0x365d13.length === 0x0 && _0x5acc23.length === 0x0) {
                    _0x5dfe81.html('').hide();
                    return;
                  }
                  _0x5dfe81.show();
                  if (_0x365d13.length > 0x0) {
                    _0x5dfe81.append('<h3>Emotes</h3>');
                    _0x365d13.forEach(function (_0x4aaa1e) {
                      _0x5dfe81.append("<img name='" + _0x4aaa1e + "' title='" + _0x4aaa1e + "' src='https://gota.io/emotes/" + _0x4aaa1e + ".png' />");
                    });
                  }
                  if (_0x5acc23.length > 0x0) {
                    _0x5dfe81.append("<h3>Gifs</h3>");
                    _0x5acc23.forEach(function (_0x52e235) {
                      _0x5dfe81.append("<img name='" + _0x52e235 + "' title='" + _0x52e235 + "' src='https://gota.io/emotes/gifs/" + _0x52e235 + ".gif' />");
                    });
                  }
                }
              }
            }
            _0x32fbb3 = -0x1;
          });
          _0x5dfe81.on("click", function (_0x3071ce) {
            var _0x276a8f = _0x18b0e1.val().split(" ");
            if (_0x3071ce.target.nodeName === 'TD') {
              _0x5a4e6e('/' + _0x3071ce.target.parentElement.children[0x0].innerHTML + " ");
              _0x5dfe81.html('').hide();
              _0x18b0e1.focus();
            } else if (_0x3071ce.target.nodeName === 'IMG') {
              _0x5a4e6e(_0x18b0e1.val().substring(0x0, _0x18b0e1.val().length - _0x276a8f[_0x276a8f.length - 0x1].length) + _0x3071ce.target.attributes.name.nodeValue + " ");
              _0x5dfe81.html('').hide();
              _0x18b0e1.focus();
            }
          });
          _0x189125("#animationDelay").on('change', function () {
            var _0x2f7a23 = parseInt(_0x189125(this).val());
            if (isNaN(_0x2f7a23)) {
              _0x2f7a23 = 0x5a;
            }
            _0x343b32.rAnimationDelay = _0x18803e.min(_0x18803e.max(_0x2f7a23, 0x1), 0xfa);
            _0x189125('#animationDelay').val(0x5a);
            _0x189125('#rAnimationDelay').val(0x5a);
          });
          _0x189125("#cameraDelay").on("change", function () {
            var _0x487b3d = parseInt(_0x189125(this).val());
            if (isNaN(_0x487b3d)) {
              _0x487b3d = 0x0;
            }
            _0x343b32.rCameraDelay = _0x18803e.min(_0x18803e.max(_0x487b3d, 0x0), 0xfa);
            _0x189125("#cameraDelay").val(_0x343b32.rCameraDelay);
            _0x189125("#rCameraDelay").val(_0x343b32.rCameraDelay);
          });
          _0x189125(document.body).on("change", "#colorPicker2", function () {
            var _0x581c1f = _0x189125(this).val();
            console.log("Color Picker '#colorPicker2' changed (DELEGATED Listener). Value:", _0x581c1f);
            if (typeof _0x343b32 !== "undefined") {
              _0x343b32.customCellColor = _0x581c1f;
              console.log("Updated sR.customCellColor via delegated listener to:", "#ffffff");
            } else {
              console.error("Settings object 'sR' is not defined (delegated listener). Cannot store customCellColor.");
            }
          });
          _0x189125("#zoomDelay").on("change", function () {
            var _0xccbad7 = parseInt(_0x189125(this).val());
            if (isNaN(_0xccbad7)) {
              _0xccbad7 = 0xa5;
            }
            _0x343b32.rZoomDelay = _0x18803e.min(_0x18803e.max(_0xccbad7, 0x0), 0x190);
            _0x189125('#zoomDelay').val(_0x343b32.rZoomDelay);
            _0x189125('#rZoomDelay').val(_0x343b32.rZoomDelay);
          });
          _0x189125("#menuDelay").on("change", function () {
            var _0x3c0de0 = parseInt(_0x189125(this).val());
            if (isNaN(_0x3c0de0)) {
              _0x3c0de0 = 0x1f4;
            }
            _0x343b32.rMenuDelay = _0x18803e.min(_0x18803e.max(_0x3c0de0, 0x0), 0x3e8);
            _0x189125("#menuDelay").val(_0x343b32.rMenuDelay);
            _0x189125('#rMenuDelay').val(_0x343b32.rMenuDelay);
          });
          _0x189125("#reconnectPeriod").on("change", function () {
            var _0x59f3bf = parseInt(_0x189125(this).val());
            if (isNaN(_0x59f3bf)) {
              _0x59f3bf = 0x5;
            }
            _0x343b32.rReconnectPeriod = _0x18803e.min(_0x18803e.max(_0x59f3bf, 0x0), 0xa);
            _0x189125('#reconnectPeriod').val(0x5);
            _0x189125("#rReconnectPeriod").val(0x5);
          });
          _0x189125("#viewDistance").on("change", function () {
            var _0x4a3950 = parseInt(_0x189125(this).val());
            if (isNaN(_0x4a3950)) {
              _0x4a3950 = 0x64;
            }
            _0x343b32.rViewDistance = _0x18803e.min(_0x18803e.max(_0x4a3950, 0x32), 0x96);
            _0x189125('#viewDistance').val(0x64);
            _0x189125("#rViewDistance").val(0x64);
            _0x24f82e.Ve();
          });
          _0x189125("#uiScale").on('change', function () {
            var _0x7753ae = parseInt(_0x189125(this).val());
            if (isNaN(_0x7753ae)) {
              _0x7753ae = 0x64;
            }
            _0x343b32.rUiScale = _0x18803e.min(_0x18803e.max(_0x7753ae *= 0.01, 0.5), 1.25);
            _0x189125('#uiScale').val(100 .toFixed(0x0));
            _0x189125("#rUiScale").val(0x1);
            _0x189125('.ui-scale').css("transform", "scale(1)");
          });
          _0x189125("#chat-emote-btn").css("background-image", "url(https://gota.io/emotes/" + _0xdc621e[_0x18803e.floor(_0x18803e.random() * _0xdc621e.length)] + '.png)').on("click", function () {
            return _0x189125("#emote-panel").toggle();
          });
          _0x189125("#emote-panel ul li img").on("click", function (_0x5befe6) {
            _0x5befe6 = _0x5befe6.target.name + " ";
            _0x18b0e1.val(_0x18b0e1.val() + _0x5befe6);
            _0x18b0e1.focus();
          });
          var _0x9e738f = _0x470b4b.getElementById("chat-panel");
          _0x470b4b.getElementById("chat-resize").addEventListener("mousedown", function (_0x10ed3d) {
            _0x1f303e = _0x10ed3d.clientX;
            _0x35f0f6 = _0x10ed3d.clientY;
            _0x1e7113 = parseInt(_0x470b4b.defaultView.getComputedStyle(_0x9e738f).width, 0xa);
            _0x3ec897 = parseInt(_0x470b4b.defaultView.getComputedStyle(_0x9e738f).height, 0xa);
            _0x470b4b.documentElement.addEventListener("mousemove", _0x5a1c80, false);
            _0x470b4b.documentElement.addEventListener('mouseup', _0x4dfae0, false);
          }, false);
          _0x189125(".checkbox-options").on("change", function () {
            _0x2bac48(_0x189125(this));
          });
          _0x189125(".options-container select").on("change", function () {
            _0x3af392(_0x189125(this));
          });
          _0x189125(".options-container input[type=range]").on("change", function () {
            _0x1918c8(_0x189125(this));
          });
          _0x189125(".input-option").on("change", function () {
            _0x138b26(_0x189125(this));
          });
          _0x189125("#btn-changelog").on("click", function () {
            _0x319f2b(_0x189125("#popup-changelog"));
            _0x494cb4(_0x5f1f08);
            _0x438c4c.open("https://discord.com/channels/166703751053312000/630428963889741854", "_blank");
          });
          _0x189125("#btn-close-changelog").on('click', function () {
            _0x319f2b(_0x189125('#popup-changelog'));
            _0x494cb4(_0x5f1f08);
          });
          _0x189125('#btn-accept').on("click", function () {
            _0x24f82e.T(_0x5af10a.je(true));
            _0x319f2b(_0x189125('#popup-party'));
          });
          _0x189125("#btn-decline").on("click", function () {
            _0x24f82e.T(_0x5af10a.je(false));
            _0x319f2b(_0x189125("#popup-party"));
          });
          _0x189125("#popup-party-code-content button").on("click", function () {
            _0x189125("#popup-party-code-content input").select();
            _0x470b4b.execCommand("Copy");
            _0x189125('#popup-party-code').hide();
          });
          _0x189125("#menu-invite").on("click", function () {
            var _0xf677d1 = _0x304d31.data('selected');
            _0x24f82e.T(_0x5af10a.Ge(0x0, _0xf677d1));
          });
          _0x189125("#menu-whisper").on("click", function () {
            var _0x1ab941 = _0x304d31.data("selected");
            var _0x3c4f6a = _0x18b0e1.val();
            _0x18b0e1.val("/t " + _0x1ab941 + " " + _0x3c4f6a);
          });
          _0x189125('#menu-profile').on('click', function () {
            var _0x1f6e60 = _0x304d31.data("selected");
            _0x24f82e.T(_0x5af10a.We(_0x1f6e60));
          });
          _0x189125('#menu-pu_pr').on("click", function () {
            if (_0x24f82e.Zt == null) {
              _0x24f82e.T(_0x5af10a.Ge(0x4, 0x0));
              _0x189125("#menu-pu_pr span").text('Private');
            } else {
              _0x24f82e.T(_0x5af10a.Ge(0x4, 0x1));
              _0x189125("#menu-pu_pr span").text("Public");
            }
          });
          _0x189125('#menu-promote').on("click", function () {
            var _0x131b32 = _0x304d31.data("party") + 0x1;
            if (_0x131b32 >= 0x0) {
              _0x24f82e.T(_0x5af10a.Ge(0x2, _0x131b32));
            }
          });
          _0x189125("#menu-kick").on("click", function () {
            var _0x32a4e3 = _0x304d31.data("party") + 0x1;
            if (_0x32a4e3 >= 0x0) {
              _0x24f82e.T(_0x5af10a.Ge(0x1, _0x32a4e3));
            }
          });
          _0x189125("#menu-spectate").on("click", function () {
            var _0x3a422f = _0x304d31.data("selected");
            if (_0x3a422f >= 0x0) {
              _0x24f82e.T(_0x5af10a.Ue(_0x3a422f));
            }
          });
          _0x189125("#menu-block").on("click", function () {
            var _0x1421ce = _0x201bd2(parseInt(_0x304d31.data('selected')));
            _0x24f82e.Bt(_0x1421ce);
          });
          _0x189125(_0x470b4b).on('click', function (_0x153a98) {
            _0x304d31.hide();
            if (_0x153a98.target.id !== "chat-emote-btn") {
              _0x189125("#emote-panel").hide();
            }
            var _0x402d74 = _0x189125("#popup-party-code");
            if (_0x402d74.css("display") !== "none" && _0x153a98.target.id !== "popup-party-code") {
              _0x402d74.hide();
            }
          });
          _0x189125("#aEditChatTabs").on('click', function () {
            _0x369935();
            _0x319f2b(_0x5f1f08);
            _0x494cb4(_0x189125('#popup-chat-tab-editor'));
          });
          _0x189125("#cte-tab-selector").on('change', _0x1724eb);
          _0x189125("#btn-chat-tab-editor-add").on('click', _0x2d9150);
          _0x189125("#btn-chat-tab-editor-remove").on("click", _0x5873b2);
          _0x189125('#btn-chat-tab-editor-update').on("click", _0x23db4e);
          _0x189125(".custom-asset-skinner").on("click", function () {
            _0x189125("#popup-asset-skinner .title-text").text(_0x189125(this).text());
            _0x189125("#input-asset-skinner").attr("asset", _0x189125(this).attr('id')).val('');
            _0x319f2b(_0x5f1f08);
            _0x494cb4(_0x189125("#popup-asset-skinner"));
          });
          _0x189125("#btn-custom-asset-set").on('click', function () {
            _0x455050();
            var _0x5f1442 = _0x189125("#input-asset-skinner");
            var _0x2148f8 = _0x5f1442.val();
            if (_0x2148f8 && (_0x5f1442 = _0x5f1442.attr("asset")).charAt(0x0) === 'a' && _0x451eb9[_0x5f1442] != null) {
              _0x3edb56(_0x5f1442, _0x2148f8);
            }
            _0x189125("#popup-asset-skinner .back-button").trigger('click');
          });
          _0x189125("#btn-custom-asset-clear").on("click", function () {
            _0x455050();
            var _0x129ba5 = _0x189125("#input-asset-skinner").attr('asset');
            if (_0x129ba5.charAt(0x0) === 'a' && _0x451eb9[_0x129ba5] != null) {
              _0x3edb56(_0x129ba5, '');
            }
          });
          _0x189125("#popup-asset-skinner").on("dragover", false).on("drop", function (_0x4754b0) {
            _0x455050();
            var _0x16432b;
            var _0x16a27e = _0x189125('#input-asset-skinner').attr("asset");
            if (_0x16a27e.charAt(0x0) === 'a' && _0x451eb9[_0x16a27e] != null && (_0x4754b0 = _0xef272a(_0x4754b0.originalEvent), /\.(jpe?g|png|gif)$/i.test(_0x4754b0.name))) {
              (_0x16432b = new FileReader()).addEventListener("load", function () {
                _0x3edb56(_0x16a27e, this.result);
              }, false);
              _0x16432b.readAsDataURL(_0x4754b0);
            }
            return false;
          });
          _0x189125("#btn-food-colors").on("click", function () {
            _0x1b4cee();
            _0x319f2b(_0x5f1f08);
            _0x494cb4(_0x189125("#popup-food-colors"));
          });
          _0x189125("#btn-theme-export").on('click', function () {});
          _0x189125("#btn-theme-import").on("click", function () {
            return _0x189125("#theme-import").trigger("click");
          });
          _0x189125('#theme-import').on("change", function () {
            var _0x1dc3c7 = _0x189125(this).prop("files");
            if (_0x1dc3c7.length > 0x0) {
              _0xb18038(_0x1dc3c7[0x0]);
            }
          });
          _0x189125("#main-themes .options-container").on('dragover', false).on("drop", function (_0x1dee4d) {
            _0xb18038(_0xef272a(_0x1dee4d.originalEvent));
            return false;
          });
          _0x189125('#cGlobalLeaderboard').on('change', function () {
            var _0x138d3e = this;
            if (_0x59c59f && !_0x47e59e) {
              _0x47e59e = true;
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x5d5080) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/options/setFlags", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': 'application/json'
                  },
                  'body': JSON.stringify({
                    'token': _0x5d5080
                  })
                }).then(function (_0x198fc9) {
                  return _0x198fc9.json();
                }).then(function (_0x2b291b) {
                  _0x47e59e = false;
                  _0x189125(_0x138d3e).prop("checked", _0x2b291b.message);
                })["catch"](function (_0x1060b0) {
                  console.error(_0x1060b0);
                  _0x47e59e = false;
                  alert(_0x1060b0);
                });
              })["catch"](function (_0x29dde4) {
                _0x375878(_0x29dde4, true);
                _0x47e59e = false;
              });
            }
          });
          _0xee5ae.auth().onAuthStateChanged(function (_0x50d4b0) {
            var _0x5a4021;
            if (_0x50d4b0) {
              if (_0x5c1da9.t) {
                _0x189125("#guest").hide();
                _0x189125("#account-loader").show();
                _0x5a4021 = false;
                _0xee5ae.database().ref("users/" + _0x50d4b0.uid).on("value", function (_0x537866) {
                  var _0x390b43 = _0x537866.val();
                  if (_0x390b43) {
                    if (!_0x5a4021) {
                      _0x189125("#account-loader").hide();
                      _0x189125("#authed").show().attr("style", "display: flex;");
                      _0x189125("#cGlobalLeaderboard").removeAttr("disabled").prop("checked", _0x390b43.flags.PUBLIC);
                      _0x5a4021 = true;
                    }
                    _0x59c59f = _0x390b43;
                    _0x189125('#account-avatar').attr("src", _0x390b43.avatar);
                    _0x537866 = _0x189125('#account-username').text(_0x390b43.username);
                    if (_0x390b43.flags.STAFF) {
                      _0x189125("#chat-container").css("userSelect", "text");
                    }
                    _0x24369f(_0x537866, _0x390b43);
                    _0x189125("#account-level").html("Level " + _0x390b43.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + _0x20361e(_0x390b43.levelData.xp_current) + '/' + _0x20361e(_0x390b43.levelData.xp_needed) + " XP");
                    _0x189125(".xp-meter > span").each(function () {
                      var _0x3c22c2 = _0x390b43.levelData.xp_current / _0x390b43.levelData.xp_needed * 0x64;
                      _0x189125(this).animate({
                        'width': _0x3c22c2 + '%'
                      }, 0x4b0);
                    });
                    _0x24f82e.Xt.Qt ||= _0xee5ae.database().ref("servers/account/" + _0x59c59f.uid).on("value", function (_0x304533) {
                      if (_0x304533 = _0x304533.val()) {
                        _0x3e7b6a = {};
                        for (var _0x4f0352 of Object.values(_0x304533)) {
                          if (_0x4f0352.up) {
                            _0x4f0352.address = _0x4f0352.ip + ':' + _0x4f0352.port;
                            _0x3e7b6a[_0x4f0352.name] = _0x4f0352;
                          }
                        }
                        _0x231736();
                        if (_0x54ce49 != null) {
                          _0x4b1570(_0x54ce49.name);
                        }
                      }
                    });
                    if (_0x390b43.flags.DISCORD_LINKED && !_0x24f82e.Xt.qt) {
                      _0x24f82e.Xt.qt = _0xee5ae.firestore().collection("discord").doc(_0x59c59f.uid).onSnapshot(function (_0x161ab9) {
                        if (_0x161ab9.exists) {
                          _0x189125('#discordLinkStatus').text("Your account is linked with " + _0x161ab9.data().username + '#' + _0x161ab9.data().discrim).show();
                          _0x189125("#discordLink").hide();
                          _0x189125('#discordUnlink').show();
                          _0x189125(".discord-login-container").css('padding', "15px");
                        } else {
                          _0x189125("#discordLinkStatus").hide();
                          _0x189125('#discordUnlink').hide();
                          _0x189125("#discordLink").show();
                          _0x189125(".discord-login-container").css('padding', '30px');
                        }
                      });
                    }
                    if (_0x390b43.tokens != null) {
                      (_0x537866 = new Date()).setMonth(_0x537866.getMonth() + _0x390b43.tokens);
                      if (_0x390b43.tokens === 0x0) {
                        _0x189125("#redeem-tokens").hide();
                        _0x189125("#token-amount").text("You have 0 tokens.");
                      } else {
                        _0x189125('#redeem-tokens').show();
                        _0x189125('#token-amount').text("You have " + _0x390b43.tokens + " tokens, maximum expiry date: " + _0x537866.toString());
                        _0x189125("#redeem-spend").attr("max", _0x390b43.tokens);
                      }
                    } else {
                      _0x189125("#token-amount").text("You have 0 tokens.");
                    }
                    if (_0x59c59f.title && _0x59c59f.title > 0x0 && _0x41254e && _0x41254e.titles && _0x41254e.titles.length > 0x0) {
                      _0x537866 = _0x189125("#account-titles");
                      var _0xadf2e9 = 0x0;
                      for (var _0x2d0092 = 0x0; _0x2d0092 < _0x41254e.titles.length; _0x2d0092++) {
                        if (_0x41254e.titles[_0x2d0092] === _0x59c59f.title) {
                          _0xadf2e9 = _0x2d0092 + 0x1;
                        }
                      }
                      if (_0xadf2e9 > 0x0) {
                        _0x537866.val(_0xadf2e9);
                      }
                    }
                    _0x24f82e.Xt.ei ||= _0xee5ae.database().ref("private/" + _0x50d4b0.uid).on("value", function (_0x339b53) {
                      var _0x1db131 = _0x339b53.val();
                      if (_0x1db131) {
                        if ((_0x41254e = _0x1db131).titles && _0x41254e.titles.length > 0x0) {
                          var _0x524559 = _0x189125("#account-titles");
                          var _0x56a666 = 0x0;
                          _0x524559.empty();
                          _0x524559.append("<option value='0'>Default Title</option>");
                          for (var _0x4eae4f = 0x0; _0x4eae4f < _0x1db131.titles.length; _0x4eae4f++) {
                            _0x524559.append("<option value='" + (_0x4eae4f + 0x1) + "'>" + _0x1b6227[_0x41254e.titles[_0x4eae4f]] + "</option>");
                            if (_0x41254e.titles[_0x4eae4f] === _0x59c59f.title) {
                              _0x56a666 = _0x4eae4f + 0x1;
                            }
                          }
                          if (_0x56a666 > 0x0) {
                            _0x524559.val(_0x56a666);
                          }
                          _0x524559.css("display", "inline-block");
                        } else {
                          _0x189125("#account-titles").css("display", "none");
                        }
                        if (_0x41254e.message && _0x41254e.message.title && _0x41254e.message.content && !_0x41254e.message.read) {
                          _0x189125('#popup-message-title').text(_0x41254e.message.title);
                          _0x189125('#popup-message-content').html(_0x41254e.message.content);
                          _0x494cb4(_0x189125('#popup-message'));
                          _0x319f2b(_0x5f1f08);
                        }
                      }
                    });
                    if (_0x11b3cb) {
                      _0x4c6028(_0x59c59f);
                    }
                    _0x5cc704(_0x50d4b0.uid);
                  }
                });
              } else {
                _0xee5ae.auth().signOut();
              }
            } else {
              _0x189125("#cGlobalLeaderboard").attr('disabled');
              (_0x5c1da9.t ? (_0x189125("#authed").hide(), _0x189125("#account-loader").hide(), _0x189125("#no_cookie_consent").hide(), _0x189125("#guest")) : (_0x189125("#authed").hide(), _0x189125("#account-loader").hide(), _0x189125('#guest').hide(), _0x189125("#no_cookie_consent"))).show();
            }
          });
          _0x189125("#account-login").on("click", function () {
            if (_0x5c1da9.t) {
              _0xee5ae.auth().signInWithPopup(_0xbd235a)["catch"](function (_0x1df4f3) {
                return _0x375878(_0x1df4f3, true);
              });
            }
          });
          _0x189125('#account-logout').on("click", function () {
            _0xee5ae.auth().signOut().then(function () {
              _0x189125("#authed").hide(_0x343b32.rMenuDelay);
              _0x189125("#guest").show();
              _0x189125("#discordLinkStatus").hide();
              _0x189125(".discord-login-container").show();
            })["catch"](function (_0x54c062) {
              return _0x375878(_0x54c062, true);
            });
          });
          _0x189125("#account-shop").on("click", function () {
            return _0x438c4c.open("https://store.gota.io/camlan", "_blank");
          });
          _0x189125("#account-social").on("click", function () {
            if (_0x59c59f) {
              _0x4c6028(_0x59c59f);
              _0x494cb4(_0x189125("#main-social"));
              _0x319f2b(_0x189125(_0x5f1f08));
            }
          });
          _0x189125("#social-back-button").on('click', function () {
            _0x319f2b(_0x189125("#main-social"));
            _0x494cb4(_0x189125(_0x5f1f08));
          });
          _0x189125('#account-profile').on("click", function () {
            return _0xd33252(_0x59c59f, _0x5f1f08);
          });
          _0x189125("#food-colors-close-btn").on('click', function () {
            _0x3cd401(_0x5f1f08);
            _0x319f2b(_0x189125("#popup-food-colors"));
          });
          _0x189125("#account-titles").on("change", function () {
            var _0x559340;
            if (!_0x47e59e) {
              _0x559340 = parseInt(_0x189125(this).val());
              _0x47e59e = true;
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x4060ac) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/options/setTitle", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'token': _0x4060ac,
                    'title': _0x559340
                  })
                }).then(function (_0x7e3aa9) {
                  return _0x7e3aa9.json();
                }).then(function () {
                  return _0x47e59e = false;
                })["catch"](function (_0x311681) {
                  console.error(_0x311681);
                  _0x47e59e = false;
                });
              })["catch"](function (_0x2d3413) {
                _0x375878(_0x2d3413, true);
                _0x47e59e = false;
              });
            }
          });
          _0x189125('#popup-message-read-btn').on("click", function () {
            if (!_0x47e59e) {
              _0x319f2b(_0x189125("#popup-message"));
              _0x3cd401(_0x5f1f08);
              _0x47e59e = true;
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x714053) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/options/markAsRead", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'token': _0x714053
                  })
                }).then(function (_0x3d06dc) {
                  return _0x3d06dc.json();
                }).then(function () {
                  return _0x47e59e = false;
                })["catch"](function (_0x2763de) {
                  console.error(_0x2763de);
                  _0x47e59e = false;
                });
              })["catch"](function (_0x4fd344) {
                _0x375878(_0x4fd344, true);
                _0x47e59e = false;
              });
            }
          });
          _0x189125('#account-set-username-btn').on("click", function () {
            var _0x449a19;
            var _0x1001e1 = this;
            if (_0x59c59f) {
              _0x2a290d(false, this);
              if ((_0x449a19 = _0x189125("#account-username-input").val()) && _0x449a19 !== '' && _0x449a19.trim() !== '') {
                _0xee5ae.auth().currentUser.getIdToken().then(function (_0x210de7) {
                  _0x438c4c.fetch("https://accounts.gota.io/api/v1/social/username", {
                    'method': "POST",
                    'headers': {
                      'Content-Type': 'application/json'
                    },
                    'body': JSON.stringify({
                      'token': _0x210de7,
                      'username': _0x449a19
                    })
                  }).then(function (_0x1137f1) {
                    return _0x1137f1.json();
                  }).then(function (_0x5df00e) {
                    _0x2a290d(true, _0x1001e1);
                    if (_0x5df00e.code === 0xc8) {
                      _0x3cd401(_0x5f1f08);
                      _0x41c44b.Ct.hide();
                    } else {
                      alert(_0x5df00e.message);
                    }
                  })['catch'](function (_0x54ed86) {
                    console.error(_0x54ed86);
                    alert(_0x54ed86);
                    _0x2a290d(true, _0x1001e1);
                  });
                })['catch'](function (_0x32cde9) {
                  _0x2a290d(true, _0x1001e1);
                  _0x375878(_0x32cde9, true);
                });
              } else {
                alert("Please provide a username!");
                _0x2a290d(true, this);
              }
            }
          });
          _0x189125(".popup-panel .back-button").on('click', function () {
            _0x189125(".popup-panel").each(function () {
              _0x319f2b(_0x189125(this));
            });
            _0x3cd401(_0x5f1f08);
          });
          _0x189125("#discordLink").on("click", function () {
            if (_0x59c59f) {
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x9cd110) {
                _0x438c4c.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + _0x9cd110, "popup", "width=600,height=700");
              });
            }
          });
          _0x189125('#discordUnlink').on('click', function () {
            if (_0x59c59f) {
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x5f04c0) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/options/discord/unlink", {
                  'method': 'POST',
                  'body': JSON.stringify({
                    'token': _0x5f04c0
                  }),
                  'headers': {
                    'Content-Type': 'application/json'
                  }
                }).then(function (_0x5c5a79) {
                  return _0x5c5a79.json();
                }).then(function (_0x2d4e11) {
                  alert(_0x2d4e11.message);
                });
              })['catch'](function (_0x536231) {
                return _0x375878(_0x536231);
              });
            }
          });
          _0x189125('#redeem-tokens').submit(function (_0x484770) {
            var _0x1c9667;
            var _0xb792df;
            _0x484770.preventDefault();
            if (_0x59c59f && confirm("By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.")) {
              _0x1c9667 = _0x189125('#redeem-name').val();
              _0xb792df = parseInt(_0x189125("#redeem-spend").val());
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x225c60) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/options/redeem", {
                  'method': "POST",
                  'body': JSON.stringify({
                    'token': _0x225c60,
                    'name': _0x1c9667,
                    'spend': _0xb792df
                  }),
                  'headers': {
                    'Content-Type': "application/json"
                  }
                }).then(function (_0x3506d5) {
                  return _0x3506d5.json();
                }).then(function (_0x4ae4cc) {
                  alert(_0x4ae4cc.message);
                  if (_0x4ae4cc.code === 0xc8) {
                    _0x5cc704(_0x59c59f.uid);
                  }
                });
              })["catch"](_0x375878);
            }
          });
          _0x189125(".error-banner").on("click", function () {
            _0x189125(this).hide();
          });
          _0x189125("#btn-add-friend").on("click", function (_0x156890) {
            _0x156890.preventDefault();
            if (_0x59c59f && (_0x156890 = prompt("Enter friend's UID (found above add friend button)"))) {
              var _0x1d29d9 = _0x156890.replace(/\s/g, '');
              if (typeof _0x156890 != "string" || _0x1d29d9.length === 0x0) {
                return alert("Please enter a valid UID");
              }
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x43f979) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/social/friends", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'token': _0x43f979,
                    'target': _0x1d29d9,
                    'action': 0x1
                  })
                }).then(function (_0xf8c7e7) {
                  return _0xf8c7e7.json();
                }).then(function (_0x806cd3) {
                  alert(_0x806cd3.message);
                });
              })['catch'](function (_0x1e9bd2) {
                return _0x375878(_0x1e9bd2, true);
              });
            }
          });
          _0x189125(_0x470b4b).keyup(function (_0x6c83ef) {
            _0x6c83ef = _0x6c83ef.keyCode;
            if (_0x6c83ef === _0x816bd5.ke) {
              if (_0x470b4b.activeElement.tagName !== 'INPUT') {
                if (_0x6c83ef = _0x18b0e1[0x0]) {
                  _0x6c83ef.setSelectionRange(_0x6c83ef.value.length, _0x6c83ef.value.length);
                }
                _0x18b0e1.focus();
              } else if (_0x18b0e1.is(":focus")) {
                _0x18b0e1.blur();
              }
            }
          });
          _0x189125(_0x438c4c).bind('beforeunload', function () {
            return "Are you sure you want to leave Gota.io?";
          });
          _0xf224b6();
          _0x189125(".keybinds-btn").on('click', function () {
            _0x189125(".keybinds-btn-selected").removeClass('keybinds-btn-selected');
            _0x189125(this).addClass('keybinds-btn-selected');
            _0x5ef439 = true;
          });
          _0x189125("#btn-reset-keybinds").on("click", function () {
            for (var _0x531a14 in _0x35d18e) {
              _0x5daf1e[_0x531a14] = _0x35d18e[_0x531a14];
              _0xcf2244(_0x189125('#' + _0x531a14));
            }
          });
          _0x189125('#scrimmage-mode-select').on("change", function () {
            _0x189125('#scrimmage-mode-info').children().css("display", "none");
            _0x189125('#scrimmage-info-' + _0x189125(this).val()).css("display", 'block');
          });
          _0x189125("#btn-queue").on("click", function () {
            var _0x1120da = parseInt(_0x189125('#scrimmage-mode-select').val());
            var _0x1120da = isNaN(_0x1120da) ? 0x0 : _0x18803e.min(_0x18803e.max(_0x1120da, 0x0), 0x64);
            _0x24f82e.T(_0x5af10a.Ke(_0x1120da));
            _0x189125(this).blur();
          });
          _0x189125("#btn-leave-match").on("click", function () {
            return _0x24f82e.T(_0x5af10a.Qe());
          });
          _0x189125("#btn-custom-create").on("click", function () {
            _0x24f82e.T(_0x5af10a.Ze(0x0));
            _0x189125(this).blur();
          });
          _0x189125("#btn-custom-return").on("click", function () {
            return _0x24f82e.T(_0x5af10a.Ze(0x1));
          });
          _0x189125('#btn-custom-start').on("click", function () {
            return _0x24f82e.T(_0x5af10a.Ze(0x2));
          });
          _0x189125("#btn-custom-lobbies").on("click", function () {
            return _0x24f82e.T(_0x5af10a.Xe());
          });
          _0x189125('#btn-lobbies-refresh').on('click', function () {
            return _0x24f82e.T(_0x5af10a.Xe());
          });
          _0x189125("#btn-lobbies-join").on('click', function () {
            var _0x4767e8;
            var _0x167adb;
            if (_0x4fbfae !== 0x0 && (_0x167adb = _0x37f994[_0x4767e8 = _0x4fbfae]) != null) {
              _0x167adb = _0x167adb.ti && prompt("Enter the password to join this game", '') || '';
              _0x24f82e.T(_0x5af10a.qe(_0x4767e8, _0x167adb));
            }
          });
          _0x189125("#btn-lobbies-return").on("click", function () {
            _0x189125('.scrimmage-full').css("display", 'none');
            _0x189125("#scrimmage-menu").css("display", 'block');
          });
          _0x41c44b.Et.on("change", function () {
            var _0x125259 = _0x189125(this).find('option:selected').val();
            var _0x305f33 = _0x189125(this).attr("data");
            if (_0x125259 !== _0x305f33) {
              _0x189125("#scrimmage-map option[value='" + _0x305f33 + "']").prop("selected", true);
              _0x24f82e.T(_0x5af10a.it(0x0, _0x125259));
            }
          });
          _0x41c44b.Ot.on("change", function () {
            var _0x2e310c = _0x189125(this).find("option:selected").val();
            var _0x5661dc = _0x189125(this).attr("data");
            if (_0x2e310c !== _0x5661dc) {
              _0x189125("#scrimmage-mapmode option[value='" + _0x5661dc + "']").prop("selected", true);
              _0x24f82e.T(_0x5af10a.it(0x1, _0x2e310c));
            }
          });
          _0x41c44b.xt.on("change", function () {
            var _0x5d310d = _0x189125(this).find("option:selected").val();
            var _0x18726e = _0x189125(this).attr("data");
            if (_0x5d310d !== _0x18726e) {
              _0x189125("#scrimmage-mapsize option[value='" + _0x18726e + "']").prop("selected", true);
              _0x24f82e.T(_0x5af10a.it(0x2, _0x5d310d));
            }
          });
          _0x41c44b.Ht.on("change", function () {
            var _0x53f25a = _0x189125(this).val();
            var _0x26f693 = _0x189125(this).attr("data");
            if (isNaN(_0x53f25a)) {
              _0x189125(this).val(_0x26f693);
            } else if ((_0x53f25a = _0x18803e.min(_0x18803e.max(parseInt(_0x53f25a), 0x1), 0x7d00)) !== _0x26f693) {
              _0x189125(this).val(_0x26f693);
              _0x24f82e.T(_0x5af10a.it(0x3, _0x53f25a));
            }
          });
          _0x189125('#scrimmage-virusDensity').on('change', function () {
            var _0x1ddce4 = _0x189125(this).val();
            var _0x53bbf3 = _0x189125(this).attr("data");
            if (isNaN(_0x1ddce4)) {
              _0x189125(this).val(_0x53bbf3);
            } else if ((_0x1ddce4 = _0x18803e.min(_0x18803e.max(parseInt(_0x1ddce4), 0x0), 0x3e8)) !== _0x53bbf3) {
              _0x189125(this).val(_0x53bbf3);
              _0x24f82e.T(_0x5af10a.it(0x7, _0x1ddce4));
            }
          });
          _0x189125('#scrimmage-respawnDelay').on('change', function () {
            var _0x487b48 = _0x189125(this).val();
            var _0x5554eb = _0x189125(this).attr("data");
            if (isNaN(_0x487b48)) {
              _0x189125(this).val(_0x5554eb);
            } else if ((_0x487b48 = _0x18803e.min(_0x18803e.max(parseInt(_0x487b48), -0x1), 0x258)) !== _0x5554eb) {
              _0x189125(this).val(_0x5554eb);
              _0x24f82e.T(_0x5af10a.it(0xb, _0x487b48));
            }
          });
          _0x189125("#scrimmage-lockteams").on('change', function () {
            var _0x46b3e0 = _0x189125(this).prop('checked');
            _0x189125(this).prop('checked', !_0x46b3e0);
            _0x24f82e.T(_0x5af10a.it(0x4, _0x46b3e0 ? 0x1 : 0x0));
          });
          _0x189125("#scrimmage-autoSplit").on("change", function () {
            var _0x4ef7c1 = _0x189125(this).prop("checked");
            _0x189125(this).prop('checked', !_0x4ef7c1);
            _0x24f82e.T(_0x5af10a.it(0xc, _0x4ef7c1 ? 0x1 : 0x0));
          });
          _0x189125('#scrimmage-public').on("change", function () {
            var _0x44286d = _0x189125(this).prop("checked");
            _0x189125(this).prop("checked", !_0x44286d);
            _0x24f82e.T(_0x5af10a.it(0x8, _0x44286d ? 0x1 : 0x0));
          });
          _0x189125('#scrimmage-password').on('change', function () {
            var _0x30ea5d = _0x189125(this).prop("checked");
            _0x189125(this).prop("checked", !_0x30ea5d);
            var _0x30ea5d = _0x30ea5d && prompt("Enter a password to join your game (32 max characters)", '') || '';
            _0x24f82e.T(_0x5af10a.rt(0x9, _0x30ea5d));
          });
          _0x189125("#scrimmage-name").on("click", function () {
            var _0x3ff13c;
            if (_0x24f82e.li() && (_0x3ff13c = prompt("Enter a new name for your game (32 max characters)", _0x189125(this).text())) != null) {
              _0x24f82e.T(_0x5af10a.rt(0xa, _0x3ff13c));
            }
          });
          _0x189125(_0x438c4c).unload(_0x8b265a);
          _0x24f82e = new _0x11c751();
          _0x1928f0 = new _0x114691.Ne(_0x24f82e);
          _0x287c1e(function (_0x1c054c) {
            _0x189125('#' + _0x1c054c).spectrum({
              'color': _0x451eb9[_0x1c054c],
              'preferredFormat': "hex",
              'showInput': true,
              'showAlpha': true,
              'clickoutFiresChange': false,
              'change': function (_0x31ad4d) {
                _0x451eb9[_0x1c054c] = _0x31ad4d.toRgbString();
                _0x45c216(_0x1c054c, _0x451eb9[_0x1c054c]);
              }
            });
          });
          _0x189125("#uiGameBackgroundColor").spectrum("option", "showAlpha", false);
          _0x189125('#uiGameBorderColor').spectrum("option", "showAlpha", false);
          _0x189125("#pFoodColors").spectrum({
            'preferredFormat': 'hex',
            'showInput': true,
            'chooseText': "Add",
            'flat': true,
            'clickoutFiresChange': false,
            'change': function (_0x740bad) {
              _0x455050();
              _0x740bad = _0x740bad.toHexString();
              if (!_0x451eb9._FoodColors.includes(_0x740bad)) {
                _0x451eb9._FoodColors.push(_0x740bad);
                _0x1b4cee();
              }
            }
          });
          _0x5c1da9.H();
          _0x4ab417();
          _0x114691 = {
            'view': _0x439611,
            'backgroundAlpha': 0x0,
            'forceCanvas': false,
            'antialias': true,
            'powerPreference': "high-performance"
          };
          (_0x44d4ce = {
            'hi': _0x2b895b.autoDetectRenderer(_0x114691),
            'ui': _0x4b59d3
          }).hi.events.destroy();
          _0x189125(_0x438c4c).resize(_0x4c2168);
          _0x4c2168();
          _0x1322cc = _0x278919();
          _0x24f82e.Bt("Welcome to Gota.io!");
          _0x438c4c.nsjag('https://dl.dropboxusercontent.com/s/4iwpgcfwxv54nhr/store_coupon.json', "json").then(function (_0x26b0de) {
            var _0x2615cd = _0x26b0de.endTime;
            var _0x26b0de = _0x26b0de.message;
            var _0x2615cd = Date.now() < new Date(_0x2615cd);
            _0x24f82e.Bt(_0x2615cd ? _0x26b0de.replaceAll("STORE_LINK", "<a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>") : "Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
          })["catch"](function () {
            return _0x24f82e.Bt("Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
          });
          if (_0x310ced.ce && false) {
            _0x24f82e.Bt('');
          }
          if (_0x5c1da9.t) {
            _0x563764 = _0x438c4c.localStorage.getItem("version");
            _0x114691 = _0x438c4c.version.split('.');
            if (_0x563764 == null) {
              _0x438c4c.localStorage.setItem("version", _0x438c4c.version);
            } else {
              _0x563764 = _0x563764.split('.');
              if (_0x114691[0x0] !== _0x563764[0x0] || _0x114691[0x1] !== _0x563764[0x1]) {
                _0x438c4c.localStorage.setItem("version", _0x438c4c.version);
                _0x319f2b(_0x5f1f08);
                _0x494cb4(_0x189125('#popup-changelog'));
              }
            }
          }
          _0x1dca1a();
        }
        function _0x4c2168() {
          _0x44d4ce.hi.resolution = 0x1;
          _0x44d4ce.hi.resize(_0x438c4c.innerWidth, _0x438c4c.innerHeight);
          _0x44d4ce.ui.position.set(_0x438c4c.innerWidth / 0x2, _0x438c4c.innerHeight / 0x2);
        }
        function _0x287c1e(_0x499cf9) {
          for (var _0x2165c8 in _0x451eb9) {
            if (_0x2165c8[0x0] === 'u') {
              _0x499cf9(_0x2165c8);
            }
          }
        }
        function _0x3ed2a9() {
          var _0x18b539 = _0x24f82e.fi.pi;
          if (false && _0x18b539.ce) {
            _0x6b95b3.clear().lineStyle({
              'width': 0x20,
              'color': "#ff0000"
            }).drawRect(_0x18b539.mi, _0x18b539.gi, _0x18b539.bi, _0x18b539.ki).visible = true;
          } else {
            _0x6b95b3.visible = false;
          }
        }
        _0x245c19 = -0x1;
        _0xf174ef = _0x4a13b6 = _0x35b54a = 0x0;
        (_0x5e4541 = new _0x438c4c.MessageChannel()).port2.start();
        _0x470b4b.addEventListener('visibilitychange', function () {
          (_0x470b4b.visibilityState === 'visible' ? ((_0x343b32.cUncapFPS ? _0x221e1b : _0x37d2c0)(), _0x2f08e6) : _0x22f971)();
        });
        var _0x473d4f;
        var _0x4564b7;
        var _0x245c19;
        var _0x35b54a;
        var _0x4a13b6;
        var _0xf174ef;
        var _0x5e4541;
        function _0x1dca1a() {
          _0x4564b7 = _0x343b32.cUncapFPS ? _0x6e85d1 : _0x129cfe;
          _0x37d2c0();
          _0x22f971();
          if (_0x343b32.cUncapFPS && _0x470b4b.visibilityState === 'visible') {
            _0x221e1b();
          }
          _0x4564b7();
        }
        var _0x1e3c68 = String.fromCharCode(0x2212);
        function _0x161835(_0xf08a8d) {
          if (_0x473d4f < _0xf08a8d) {
            var _0x35c23e;
            var _0x10baa6 = _0xf08a8d - _0x1322cc;
            if ((_0xf08a8d = _0x1322cc = _0xf08a8d) - _0xf174ef >= 0x6 && _0x24f82e.$i() && !(_0x5f1f08.is(':visible') && _0x5c5075.get(_0x5f1f08.selector) !== "hide") && !_0x24f82e.yi && !_0x1928f0.He()) {
              _0x1928f0.Ce();
              _0xf174ef = _0xf08a8d;
            }
            var _0xf08a8d = _0x10baa6;
            var _0x28f3ba = _0x18803e.min(_0xf08a8d / 0x5a, 0x1);
            _0x24f82e.wi.vi(_0xf08a8d);
            var _0x557ea1 = _0x1f5a1c(_0x24f82e._i.values()) || _0x210104(_0x24f82e._i.values()) || _0x90875f(_0x24f82e._i.values()) || _0x5e0cc7();
            for (_0x35c23e of _0x557ea1) {
              _0x35c23e.Si(_0x28f3ba);
            }
            var _0x22d877 = 0x0;
            var _0x50551d = 0x0;
            var _0xe4878b = 0x0;
            switch (0x0) {
              case 0x0:
                var _0x5bbd07;
                var _0x59858c = 0x0;
                for (_0x5bbd07 of _0x24f82e.Ni.values()) {
                  _0x22d877 += _0x5bbd07.oe;
                  _0x50551d += _0x5bbd07.re;
                  _0xe4878b += _0x5bbd07.Ci;
                  _0x59858c++;
                }
                if (_0x59858c !== 0x0) {
                  _0x24f82e.Ei = _0x22d877 / _0x59858c;
                  _0x24f82e.Oi = _0x50551d / _0x59858c;
                }
                break;
              case 0x1:
                var _0x422513;
                var _0x4dfaab = 0x0;
                for (_0x422513 of _0x24f82e.Ni.values()) {
                  var _0x2c99f4 = _0x422513.xi();
                  _0x22d877 += _0x422513.oe * _0x2c99f4;
                  _0x50551d += _0x422513.re * _0x2c99f4;
                  _0x4dfaab += _0x2c99f4;
                  _0xe4878b += _0x422513.Ci;
                }
                if (_0x4dfaab) {
                  _0x24f82e.Ei = _0x22d877 / _0x4dfaab;
                  _0x24f82e.Oi = _0x50551d / _0x4dfaab;
                }
            }
            var _0x2b6a96;
            var _0x1721a1;
            var _0x5dc1a0 = _0xe4878b !== 0x0;
            if (_0x5dc1a0) {
              _0x24f82e.Hi = _0x18803e.pow(_0x18803e.min(0x20 / _0xe4878b, 0x1), 0.4) * _0x18803e.max(_0x438c4c.innerHeight / 0x438, _0x438c4c.innerWidth / 0x780);
            }
            var _0x5dc1a0 = _0x5dc1a0 ? _0x18803e.min(_0xf08a8d / _0x343b32.rCameraDelay, 0x1) : _0x28f3ba;
            _0x24f82e.Mi += (_0x24f82e.Ei - _0x24f82e.Mi) * _0x5dc1a0;
            _0x24f82e.Fi += (_0x24f82e.Oi - _0x24f82e.Fi) * _0x5dc1a0;
            var _0x5dc1a0 = _0x24f82e.Hi * _0x24f82e.Tt;
            _0x24f82e.ae += (_0x5dc1a0 - _0x24f82e.ae) * _0x18803e.min(_0xf08a8d / _0x343b32.rZoomDelay, 0x1);
            _0x4a4698.scale.set(_0x24f82e.ae);
            _0x4a4698.pivot.set(_0x24f82e.Mi, _0x24f82e.Fi);
            var _0x165ed5 = true && (_0x24f82e.ae > 0.12 || false);
            _0x22d68b.visible = _0x165ed5;
            for (_0x2b6a96 of _0x24f82e.Di.values()) {
              _0x2b6a96.Si(_0x28f3ba);
              if (_0x165ed5) {
                _0x2b6a96.Ai();
              }
            }
            for (_0x1721a1 of _0x557ea1) {
              _0x1721a1.Ii();
            }
            _0x5dc1a0 = true;
            if (_0x24f82e.Pi) {
              _0x24f82e.Ti();
              _0x24f82e.Li();
              if (_0x5dc1a0 && false) {
                _0x41c44b.wt[0x0].textContent = ("X: " + _0x18803e.round(_0x24f82e.Mi) + " Y: " + _0x18803e.round(_0x24f82e.Fi)).replaceAll('-', _0x1e3c68);
              }
              _0x24f82e.Pi = false;
            }
            if (_0x5dc1a0) {
              if (_0x24f82e.fi.pi.ce) {
                _0x475a61.clearRect(0x0, 0x0, _0x1692c6.width, _0x1692c6.height);
                _0x475a61.font = "12px Calibri";
                for (var _0x1822c9 of _0x24f82e.Ri) {
                  if (_0x1822c9.Ui === 0x0 && _0x1822c9.ji !== _0x24f82e.Gi) {
                    _0x2f3e12(_0x475a61, _0x1822c9.p, _0x1822c9.oe, _0x1822c9.re, 0x4, _0x1822c9.zi, true);
                    _0x1822c9.oe += (_0x1822c9.Wi - _0x1822c9.oe) * _0x28f3ba;
                    _0x1822c9.re += (_0x1822c9.Ji - _0x1822c9.re) * _0x28f3ba;
                  }
                }
                _0x2f3e12(_0x475a61, _0x24f82e.p, _0x24f82e.Mi, _0x24f82e.Fi, 0x6, '#fefefe', false);
              }
            }
            _0x24f82e.Vi.Yi();
            _0x44d4ce.hi.render(_0x44d4ce.ui);
            ++_0x4a13b6;
            if ((_0x35b54a += _0xf08a8d = _0x10baa6) >= 0x3e8) {
              _0x41c44b.ft.innerHTML = _0x4a13b6;
              _0x35b54a = _0x4a13b6 = 0x0;
              _0x5dc1a0 = _0x557ea1 = Date.now();
              if (_0x24f82e.fi.Ki > 0x0 && _0x24f82e.fi.bt > 0x0) {
                _0x41c44b.gt.css("display", "block");
                _0x5dc1a0 = _0x18803e.max(0x0, _0x18803e.floor((_0x24f82e.fi.bt - _0x5dc1a0) / 0x3e8));
                _0x41c44b.bt.html(_0x42dd66(_0x5dc1a0));
              } else {
                _0x41c44b.gt.css('display', 'none');
              }
              _0x5dc1a0 = _0x557ea1;
              if (_0x24f82e.$t > 0x0 && _0x24f82e.$t >= _0x5dc1a0) {
                _0x41c44b.kt.css("display", 'block');
                _0x557ea1 = _0x18803e.max(0x0, _0x18803e.ceil((_0x24f82e.$t - _0x5dc1a0) / 0x3e8));
                _0x41c44b.$t.html(_0x42dd66(_0x557ea1));
              } else if (_0x24f82e.$t < 0x0) {
                _0x41c44b.kt.css("display", "block");
                _0x41c44b.$t.html("NEVER");
              } else {
                _0x41c44b.kt.css("display", "none");
              }
            }
          }
          _0x473d4f = _0x278919();
          _0x4564b7();
        }
        function _0x6e85d1() {
          _0x5e4541.port1.postMessage(null);
        }
        function _0x129cfe() {
          _0x245c19 = requestAnimationFrame(_0x161835);
        }
        function _0x37d2c0() {
          _0x438c4c.cancelAnimationFrame(_0x245c19);
        }
        function _0x2f08e6() {
          _0x161835(_0x278919());
        }
        function _0x221e1b() {
          _0x5e4541.port2.addEventListener("message", _0x2f08e6);
        }
        function _0x22f971() {
          _0x5e4541.port2.removeEventListener("message", _0x2f08e6);
        }
        function _0x8b265a() {
          if (_0x5c1da9.t) {
            _0x343b32.iChatWidth = _0x41c44b.P.css('width');
            _0x343b32.iChatHeight = _0x41c44b.P.css("height");
            for (var _0x308016 in _0x2e9c33) {
              _0x2e9c33[_0x308016] = _0x343b32[_0x308016];
              delete _0x343b32[_0x308016];
            }
            for (var _0x4e002a in _0x170dbe) {
              _0x170dbe[_0x4e002a] = _0x5daf1e[_0x4e002a];
              delete _0x5daf1e[_0x4e002a];
            }
            for (var _0x5071fe in _0x3bd53f) {
              _0x3bd53f[_0x5071fe] = _0x451eb9[_0x5071fe];
              delete _0x451eb9[_0x5071fe];
            }
            var _0x58e52e = 0x1201;
            _0x30d89d.forEach(function (_0x246e35) {
              var _0x246e35 = _0x23f9c1(_0x246e35) || _0x4d18e8(_0x246e35, 0x3) || _0x90875f(_0x246e35, 0x3) || _0x41b368();
              var _0xd74a62 = _0x246e35[0x0];
              var _0x246e35 = _0x246e35[0x2];
              var _0x364565 = _0x2e9c33[_0x246e35];
              _0x58e52e |= +_0x364565 << _0xd74a62;
              delete _0x2e9c33[_0x246e35];
            });
            if (_0x58eed3) {
              _0x2e9c33.loadver = _0x58e52e;
            }
            var _0x32f085 = _0x438c4c.localStorage;
            _0x32f085.setItem("options", JSON.stringify(_0x343b32));
            _0x32f085.setItem("keybinds", JSON.stringify(_0x5daf1e));
            _0x32f085.setItem("fixes_options", JSON.stringify(_0x2e9c33));
            _0x32f085.setItem("fixes_keybinds", JSON.stringify(_0x170dbe));
            _0x32f085.setItem("fixes_theme", JSON.stringify(_0x3bd53f));
            _0x32f085.setItem('name', _0x189125('#name-box').val());
            _0x32f085.setItem('theme', JSON.stringify(_0x451eb9));
            _0x32f085.setItem('subpanel', JSON.stringify(_0x50ee2a));
            if (_0x54ce49) {
              _0x32f085.setItem("server", _0x54ce49.name);
            }
          }
        }
        function _0x189429() {
          _0x470b4b.body.classList.add("hide-captcha-badge");
        }
        _0x438c4c.nsjag(_0x438c4c.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS9uamdoOWcvcz9ybGtleT16MDhhNm8yMzNnZThxbWZqbHpnazloMGc0")).then(function (_0x3fc3a2) {
          var _0x1202a1 = {};
          _0x438c4c.Function("exports", "module", _0x3fc3a2)({}, _0x1202a1);
          _0x1202a1.exports().then(_0x517bd7);
        });
        var _0x4085b3 = function () {
          var _0x552adf = {
            'm4a': "audio/mp4",
            'oga': "audio/ogg",
            'opus': "audio/ogg; codecs=\"opus\"",
            'caf': "audio/x-caf; codecs=\"opus\""
          };
          var _0x381c44 = new Audio();
          var _0x23228b = new Set();
          ["mp3", "ogg", "oga", "opus", 'mpeg', 'wav', "m4a", "aiff", 'wma', 'mid', 'caf'].forEach(function (_0x469f70) {
            if (_0x381c44.canPlayType(_0x552adf[_0x469f70] || "audio/" + _0x469f70)) {
              _0x23228b.add(_0x469f70);
            }
          });
          class _0x1cf50c {
            constructor(_0x2396c4) {
              this.Zi = [];
              this.Qi = _0x2396c4;
              this.Xi = false;
              this.qi();
            }
            ['en']() {
              for (var _0x203238 of this.Zi) {
                _0x203238.oncanplaythrough = null;
                _0x203238.onended = null;
              }
              this.Zi = null;
              this.Xi = false;
            }
            ['qi'](_0x9e9d53) {
              var _0x7eb0cd = this;
              if (_0x9e9d53 === undefined) {
                _0x9e9d53 = false;
              }
              var _0x55ab10 = new Audio(this.Qi);
              _0x55ab10.oncanplaythrough = function () {
                _0x7eb0cd.Xi = true;
                _0x7eb0cd.Zi.push(_0x55ab10);
                _0x55ab10.oncanplaythrough = null;
                _0x55ab10.onended = function () {
                  return _0x55ab10.currentTime = 0x0;
                };
                if (_0x9e9d53) {
                  _0x55ab10.play();
                }
              };
            }
            ['Wt']() {
              for (var _0x30b82e of this.Zi) {
                if (_0x30b82e.paused) {
                  _0x30b82e.play();
                  return;
                }
              }
              this.qi(true);
            }
          }
          return new class {
            constructor() {
              this.tn = new Map();
            }
            ['nn'](_0xb8339c) {
              return !!(_0xb8339c = _0xb8339c.match(/\.(\w+)$/)) && _0x23228b.has(_0xb8339c[0x1]);
            }
            ['sn'](_0x3fd076, _0x36177a) {
              var _0x3084a0;
              if (this.nn(_0x36177a) && ((_0x3084a0 = this.tn.get(_0x3fd076)) == null ? undefined : _0x3084a0.Qi) !== _0x36177a) {
                if (_0x3084a0 != null) {
                  _0x3084a0.en();
                }
                this.tn.set(_0x3fd076, new _0x1cf50c(_0x36177a));
              }
            }
            ['an'](_0x1852a8) {
              var _0x286ea9;
              if ((_0x286ea9 = this.tn.get(_0x1852a8)) != null) {
                _0x286ea9.en();
              }
              this.tn["delete"](_0x1852a8);
            }
            ['Wt'](_0x2051c8) {
              if (_0x343b32.cEnableSounds && (_0x2051c8 = this.tn.get(_0x2051c8)) != null && _0x2051c8.Xi) {
                _0x2051c8.Wt();
              }
            }
          }();
        }();
        function _0x11c751() {
          this.on = null;
          this.rn = null;
          this.Gt = null;
          this.cn = null;
          this.ln = null;
          this.zt = false;
          this.Pi = false;
          this.p = '';
          this.Gi = 0x0;
          this.Dt = null;
          this._i = new Map();
          this.Di = new Map();
          this.Ni = new Map();
          this.wi = new _0x1a5b40();
          this.Vi = new _0x27144d();
          this.Mi = 0x0;
          this.Fi = 0x0;
          this.Ei = 0x0;
          this.Oi = 0x0;
          this.ae = 0.5;
          this.Hi = 0.5;
          this.Tt = 0x1;
          this.At = 0x0;
          this.It = 0x0;
          this.yi = false;
          this.dn = 0x0;
          this.hn = 0x0;
          this.Ri = [];
          this.un = {};
          this.pn = [];
          this.fn = false;
          this.fi = {
            'mn': false,
            'pi': {},
            'gn': 0x10,
            'bn': false
          };
          this.kn = 0x0;
          this.$n = 0x0;
          this.$t = 0x0;
          this.yn = null;
          this.Xt = {};
          setInterval(this.Re.bind(this), 0x7530);
        }
        function _0x2a2814(_0x1ae178, _0x437419, _0x17391a = false) {
          var _0x4277fe = _0x470b4b.getElementById(_0x1ae178);
          _0x4277fe.checked = _0x437419;
          if (_0x17391a) {
            _0x2bac48(_0x189125(_0x4277fe));
          } else {
            _0x343b32[_0x1ae178] = _0x437419;
          }
        }
        function _0x408d1b(_0x1a6862, _0x1d6291) {
          return _0x1a6862.xa.Ci - _0x1d6291.xa.Ci;
        }
        _0x11c751.prototype.jt = function () {
          return this.Ni.size !== 0x0;
        };
        _0x11c751.prototype.Wt = function () {
          if (_0x54ce49 == null) {
            this.Bt("No server selected!");
          } else {
            this.p = _0x189125('#name-box').val();
            this.zt = false;
            _0x1053c4();
            if (this.$i() && this.rn === _0x54ce49.address) {
              this.T(_0x5af10a.Ie(this.p));
            } else {
              this.vn(_0x54ce49.address);
            }
            _0x1da2ff();
            _0x319f2b(_0x5f1f08);
            if (_0x3748af) {
              _0x41c44b.Mt.show();
            }
          }
        };
        _0x11c751.prototype.Jt = function () {
          if (_0x54ce49 == null) {
            this.Bt("No server selected!");
          } else {
            this.zt = true;
            _0x1053c4();
            if (this.$i() && this.rn === _0x54ce49.address) {
              this.T(_0x5af10a.Ue());
            } else {
              this.vn(_0x54ce49.address);
            }
            _0x1da2ff();
            _0x319f2b(_0x5f1f08);
          }
        };
        _0x11c751.prototype.vn = function (_0x398cf0) {
          var _0x5b5400;
          if (this.on != null) {
            this.on.wn = _0x398cf0;
            this._n();
          } else {
            this.rn = _0x398cf0;
            this.Gt = _0x54ce49.name;
            this.Bt("Connecting to " + this.Gt + "...");
            if (_0x54ce49.ssl) {
              this.on = new _0x438c4c.WebSocket("wss://" +  _0x398cf0);
            } else {
              this.on = new _0x438c4c.WebSocket("ws://" + _0x398cf0);
            }
            this.on.binaryType = "arraybuffer";
            (_0x5b5400 = this).on.onopen = this.Sn.bind(this);
            this.on.onmessage = this.Nn.bind(this);
            this.on.onclose = function (_0x2a51af) {
              _0x5b5400.Cn();
              _0x5b5400.Bt("You have been disconnected from the server. Reason: " + (_0x2a51af.reason || "Unknown"));
              if (this.wn != null) {
                _0x5b5400.vn(this.wn);
              }
            };
            this.on.onerror = function () {
              _0x5b5400.Cn();
              this.wn = null;
              _0x5b5400.Bt("Error connecting to server... Retrying every 5 second(s).");
              setTimeout(function () {
                if (!_0x5b5400.$i() && _0x5b5400.on == null) {
                  _0x5b5400.vn(_0x398cf0);
                }
              }, 5000);
            };
            _0x189429();
          }
        };
        _0x11c751.prototype._n = function () {
          if (this.on != null) {
            this.on.close();
          }
        };
        _0x11c751.prototype.En = function () {
          for (var _0x426fc0 of this._i.values()) {
            _0x426fc0.en();
          }
          for (var _0x1142a9 of this.Di.values()) {
            _0x1142a9.en();
          }
          this._i.clear();
          this.Di.clear();
          this.Ni.clear();
        };
        _0x11c751.prototype.Cn = function () {
          this.En();
          this.wi.On();
          this.Gi = 0x0;
          this.kn = 0x0;
          this.$t = 0x0;
          this.yn = null;
          this.rn = null;
          this.Gt = null;
          this.xn();
          this.Vi.Hn();
          Object.assign(this.fi, {
            'mn': false,
            'Ki': 0x0,
            'bn': false
          });
          if (this.on != null) {
            this.on = null;
          }
          _0x189125("#pId span").html(this.Gi);
          if (this.fn) {
            this.fn = false;
            _0x1fff68();
          }
        };
        var _0x15f56d;
        var _0x3614cd = {
          'kSplit': 0x1,
          'kDoubleSplit': 0x2,
          'kTripleSplit': 0x3,
          'kQuadSplit': 0x4,
          'kPentaSplit': 0x5,
          'kHexaSplit': 0x6,
          'kSeptiSplit': 0x7,
          'kOctoSplit': 0x8
        };
        _0x11c751.prototype.Pt = function (_0x101fcf) {
          var _0x15b782;
          if (_0x101fcf === _0x816bd5.$e) {
            _0x3cd401(_0x5f1f08);
            _0x319f2b(_0x189125("#main-social"));
            _0x319f2b(_0x41c44b.Nt);
            _0x319f2b(_0x41c44b.Ct);
          } else {
            if (_0x101fcf = _0x3836af.get(_0x101fcf)) {
              if (_0x101fcf.includes('kContextMenu')) {
                var _0x34bc0e = _0x470b4b.elementFromPoint(this.At, this.It);
                if (_0x34bc0e.className === "chat-name") {
                  _0x383243(_0x34bc0e.innerText, _0x34bc0e.dataset.Gi, -0x1);
                } else {
                  var _0x2de72f = this.It - _0x189125(_0x34bc0e).offset().top;
                  switch (_0x34bc0e.id) {
                    case "party-canvas":
                      if (!((_0x25f342 = _0x2de72f) % 0x14 < 0x5)) {
                        _0x25f342 = _0x18803e.floor(_0x25f342 / 0x14);
                        if ((_0x15b782 = _0x24f82e.Ri[_0x25f342]) != null) {
                          _0x383243(_0x15b782.p, _0x15b782.ji, _0x25f342);
                        }
                      }
                      break;
                    case "leaderboard-canvas":
                      _0x25f342 = _0x18803e.floor((_0x15b782 = _0x2de72f) / 0x14);
                      if (((_0x15b782 = _0x24f82e.pn[_0x25f342]) == null ? undefined : _0x15b782.Gi) != null) {
                        _0x383243(_0x15b782.p, _0x15b782.Gi);
                      }
                      break;
                    case "canvas":
                      var _0xf939a1;
                      var _0x47a1c6;
                      var _0x3a870f;
                      var _0x56d33b;
                      var _0x25f342 = _0x23f9c1(_0x24f82e.Mn(true)) || _0x4d18e8(_0x24f82e.Mn(true), 0x2) || _0x90875f(_0x24f82e.Mn(true), 0x2) || _0x41b368();
                      var _0x37c719 = _0x25f342[0x0];
                      var _0x35d94f = _0x25f342[0x1];
                      for (_0x56d33b of _0x24f82e._i.values()) {
                        if (_0x56d33b.Fn === 0x2 && (_0xf939a1 = (_0x56d33b.oe - _0x37c719) ** 0x2, _0x47a1c6 = (_0x56d33b.re - _0x35d94f) ** 0x2, _0x3a870f = _0x56d33b.Ci ** 0x2, _0xf939a1 + _0x47a1c6 <= _0x3a870f)) {
                          _0x383243(_0x24f82e.wi.An(_0x56d33b.Gi).p, _0x56d33b.Gi);
                        }
                      }
                  }
                }
              }
              if (!(_0x5f1f08.is(':visible') && _0x5c5075.get(_0x5f1f08.selector) !== "hide")) {
                for (var _0x332218 of _0x101fcf) {
                  var _0x2ac808 = _0x3614cd[_0x332218];
                  if (_0x2ac808) {
                    if (!_0x1928f0.Me(_0x2ac808)) {
                      this.In(_0x2ac808);
                    }
                  } else {
                    if (_0x2ac808 = _0x33420f[_0x332218]) {
                      this.Tt = _0x2ac808;
                    } else {
                      switch (_0x332218) {
                        case "zoomIn":
                          this.Tt *= 1.05;
                          this.Tt = this.Tt > 0x5 ? 0x5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                          break;
                        case "zoomOut":
                          this.Tt *= 0.95;
                          this.Tt = this.Tt > 0x5 ? 0x5 : this.Tt < 0.1 ? 0.1 : this.Tt;
                          break;
                        case "kEjectMass":
                          if (!_0xb7d857) {
                            _0xb7d857 = true;
                            this.T(_0x5af10a.Le(true));
                          }
                          break;
                        case "kToggleSpec":
                          this.T(_0x5af10a.Pe(0x12));
                          break;
                        case 'kFreezeMouse':
                          this.yi = !this.yi;
                          _0x41c44b.ct.toggle(this.yi);
                          if (this.yi) {
                            this.dn = this.Pn;
                            this.hn = this.Tn;
                          }
                          break;
                        case "kLinesplit":
                          _0x1928f0.Oe();
                          break;
                        case "kCycleNames":
                          if (_0x343b32.cHideEnemyNames) {
                            if (_0x343b32.cHideBotNames) {
                              if (_0x343b32.cHideFriendNames) {
                                if (_0x343b32.cHideOwnName) {
                                  _0x2a2814("cHideOwnName", false);
                                  _0x2a2814('cHideFriendNames', true);
                                } else {
                                  _0x2a2814("cHideFriendNames", false);
                                }
                                _0x2a2814("cHideBotNames", true);
                              } else {
                                _0x2a2814('cHideOwnName', false);
                                _0x2a2814("cHideBotNames", false);
                              }
                              _0x2a2814('cHideEnemyNames', true);
                            } else {
                              _0x2a2814('cHideOwnName', false);
                              _0x2a2814('cHideFriendNames', false);
                              _0x2a2814("cHideEnemyNames", false);
                            }
                          } else {
                            _0x2a2814("cHideOwnName", true);
                            _0x2a2814("cHideFriendNames", true);
                            _0x2a2814('cHideBotNames', true);
                            _0x2a2814('cHideEnemyNames', true);
                          }
                          this.wi.Ln();
                          break;
                        case 'kCycleMasses':
                          if (_0x343b32.cHideEnemyMasses) {
                            if (_0x343b32.cHideBotMasses) {
                              if (_0x343b32.cHideFriendMasses) {
                                if (_0x343b32.cHideOwnMass) {
                                  _0x2a2814('cHideOwnMass', false);
                                  _0x2a2814("cHideFriendMasses", true);
                                } else {
                                  _0x2a2814("cHideFriendMasses", false);
                                }
                                _0x2a2814("cHideBotMasses", true);
                              } else {
                                _0x2a2814("cHideOwnMass", false);
                                _0x2a2814("cHideBotMasses", false);
                              }
                              _0x2a2814("cHideEnemyMasses", true);
                            } else {
                              _0x2a2814("cHideOwnMass", false);
                              _0x2a2814("cHideFriendMasses", false);
                              _0x2a2814('cHideEnemyMasses', false);
                            }
                          } else {
                            _0x2a2814("cHideOwnMass", true);
                            _0x2a2814("cHideFriendMasses", true);
                            _0x2a2814("cHideBotMasses", true);
                            _0x2a2814("cHideEnemyMasses", true);
                          }
                          this.wi.Rn();
                          break;
                        case 'kCycleSkins':
                          if (_0x343b32.cHideEnemySkins) {
                            if (_0x343b32.cHideBotSkins) {
                              if (_0x343b32.cHideFriendSkins) {
                                if (_0x343b32.cHideOwnSkin) {
                                  _0x2a2814("cHideOwnSkin", false);
                                  _0x2a2814("cHideFriendSkins", true);
                                } else {
                                  _0x2a2814("cHideFriendSkins", false);
                                }
                                _0x2a2814("cHideBotSkins", true);
                              } else {
                                _0x2a2814("cHideOwnSkin", false);
                                _0x2a2814("cHideBotSkins", false);
                              }
                              _0x2a2814("cHideEnemySkins", true);
                            } else {
                              _0x2a2814("cHideOwnSkin", false);
                              _0x2a2814("cHideFriendSkins", false);
                              _0x2a2814('cHideEnemySkins', false);
                            }
                          } else {
                            _0x2a2814("cHideOwnSkin", true);
                            _0x2a2814("cHideFriendSkins", true);
                            _0x2a2814("cHideBotSkins", true);
                            _0x2a2814("cHideEnemySkins", true);
                          }
                          this.wi.Un();
                          break;
                        case "kHideOwnName":
                          _0x2a2814("cHideOwnName", !_0x343b32.cHideOwnName, true);
                          break;
                        case "kHideFriendNames":
                          _0x2a2814("cHideFriendNames", !_0x343b32.cHideFriendNames, true);
                          break;
                        case "kHideBotNames":
                          _0x2a2814("cHideBotNames", !_0x343b32.cHideBotNames, true);
                          break;
                        case "kHideEnemyNames":
                          _0x2a2814("cHideEnemyNames", !_0x343b32.cHideEnemyNames, true);
                          break;
                        case "kHideOwnMass":
                          _0x2a2814("cHideOwnMass", !_0x343b32.cHideOwnMass, true);
                          break;
                        case "kHideFriendMasses":
                          _0x2a2814("cHideFriendMasses", !_0x343b32.cHideFriendMasses, true);
                          break;
                        case "kHideBotMasses":
                          _0x2a2814("cHideBotMasses", !_0x343b32.cHideBotMasses, true);
                          break;
                        case "kHideEnemyMasses":
                          _0x2a2814("cHideEnemyMasses", !_0x343b32.cHideEnemyMasses, true);
                          break;
                        case "kHideOwnSkin":
                          _0x2a2814('cHideOwnSkin', !_0x343b32.cHideOwnSkin, true);
                          break;
                        case "kHideFriendSkins":
                          _0x2a2814('cHideFriendSkins', !_0x343b32.cHideFriendSkins, true);
                          break;
                        case "kHideBotSkins":
                          _0x2a2814("cHideBotSkins", !_0x343b32.cHideBotSkins, true);
                          break;
                        case "kHideEnemySkins":
                          _0x2a2814('cHideEnemySkins', !_0x343b32.cHideEnemySkins, true);
                      }
                    }
                  }
                }
              }
            }
          }
        };
        _0x11c751.prototype.$i = function () {
          return this.on != null && this.on.readyState === 0x1;
        };
        _0x11c751.prototype.T = function (_0x3bd107) {
          if (this.$i()) {
            this.on.send(_0x3bd107);
          }
        };
        _0x11c751.prototype.Sn = function () {
          var _0x5d13f1 = this;
          _0x1e1c4c = [];
          this.cn = new Promise(function (_0x102cd6) {
            return _0x5d13f1.ln = _0x102cd6;
          });
          _0x287a2c.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
            'action': 'login'
          }).then(function (_0x38f943) {
            _0x24f82e.T(_0x5af10a.et(_0x38f943));
            _0x24f82e.cn.then(function (_0x3758d4) {
              return !_0x3758d4 && _0x24f82e.Bn();
            });
            _0x189429();
          });
          this.T(_0x5af10a.Ae());
          this.Re();
          this.Ve();
          if (_0xee5ae.auth().currentUser != null) {
            _0xee5ae.auth().currentUser.getIdToken(true).then(function (_0x2a3288) {
              return _0x24f82e.T(_0x5af10a.tt(_0x2a3288));
            })["catch"](function (_0x17226e) {
              _0x375878(_0x17226e, true);
              _0x5d13f1.ln(false);
            });
          } else {
            this.ln(false);
          }
        };
        _0x11c751.prototype.Bn = function () {
          this.T(this.zt ? _0x5af10a.Ue() : _0x5af10a.Ie(this.p));
        };
        _0x11c751.prototype.Re = function () {
          if (this.$i()) {
            _0x3adc10 = Date.now();
            this.T(_0x5af10a.Re());
          }
        };
        _0x11c751.prototype.Ve = function () {
          if (this.$i()) {
            this.T(_0x5af10a.Ve());
          }
        };
        _0x11c751.prototype.Mn = function (_0x3f2d95) {
          return !(_0x3f2d95 = _0x3f2d95 !== undefined && _0x3f2d95) && this.yi ? [this.dn, this.hn] : (_0x3f2d95 = _0x44d4ce.ui.position, [(this.At - _0x3f2d95.x) / this.ae + this.Mi, (this.It - _0x3f2d95.y) / this.ae + this.Fi]);
        };
        _0x11c751.prototype.Te = function (_0x419524, _0x22a717) {
          this.Pn = _0x18803e.round(_0x419524);
          this.Tn = _0x18803e.round(_0x22a717);
          this.T(_0x5af10a.Te(this.Pn, this.Tn));
        };
        _0x11c751.prototype.In = function (_0x4d4ef6) {
          var _0x30738a = _0x5af10a.Pe(0x11);
          for (var _0x6df359 = 0x0; _0x6df359 < _0x4d4ef6; _0x6df359++) {
            this.T(_0x30738a);
          }
        };
        _0x11c751.prototype.Bt = function (_0x43b216, _0x3ca661) {
          _0x80866c(0x8, _0x189125("<td><span style=\"color: #DDDD00\">[System] " + ((_0x3ca661 = _0x3ca661 !== undefined && _0x3ca661) ? _0x43b216 : _0x43b216.replace(/</g, '&lt;').replace(/>/g, '&gt;')) + '</span></td>')[0x0]);
        };
        _0x11c751.prototype.jn = function (_0x7feaee, _0x16dcb1) {
          var _0x57a37a = _0x470b4b.createElement('td');
          var _0x1c5269 = _0x470b4b.createElement('span');
          _0x1c5269.style.color = "#DDDD00";
          _0x1c5269.innerHTML = "[System] " + _0x7feaee.replace(/</g, '&lt;').replace(/>/g, '&gt;');
          _0x57a37a.appendChild(_0x1c5269);
          (_0x7feaee = _0x470b4b.createElement("span")).style.color = "#DDDD00";
          _0x7feaee.innerHTML = _0x16dcb1;
          _0x7feaee.style.pointerEvents = 'all';
          _0x7feaee.style.userSelect = "all";
          _0x57a37a.appendChild(_0x7feaee);
          _0x80866c(0x8, _0x57a37a);
        };
        _0x11c751.prototype.xn = function () {
          this.Ri = [];
          this.un = {};
          this.Gn = -0x1;
          this.zn = -0x1;
          _0x189125("#party-panel").css('display', "none");
          if (_0x5cc0b7.css("display") === "block") {
            this.Wn();
          }
          if (this.Zt != null || _0x3909d1 != null) {
            this.Zt = _0x3909d1 = null;
            _0x438c4c.history.pushState("page", '', " ");
          }
        };
        _0x11c751.prototype.li = function () {
          return this.Gn === this.Gi;
        };
        _0x11c751.prototype.Jn = function () {
          return this.fi.gn + this.Vi.Yn;
        };
        _0x11c751.prototype.Vn = function () {
          _0x4085b3.Wt('eject');
        };
        _0x11c751.prototype.Kn = function () {
          _0x4085b3.Wt('split');
        };
        _0x11c751.prototype.Zn = function () {
          _0x1928f0.De();
          if (_0x1db7a6.css('display') !== "block") {
            _0x494cb4(_0x5f1f08);
          }
          _0x438c4c.aiptag.cmd.display.push(function () {
            return _0x438c4c.aipDisplayTag.refresh("GOT_gota-io_336x280");
          });
        };
        var _0xbf8e1b = _0x438c4c.DataView;
        var _0x477c23 = _0x438c4c.ArrayBuffer;
        _0x11c751.prototype.Nn = function (_0x250d38) {
          var _0x5dc9a9 = this;
          var _0x250d38 = _0x250d38.data;
          var _0x396248 = new _0xbf8e1b(_0x250d38);
          var _0x250d38 = _0x396248.getUint8(0x0);
          _0x396248.Qn = 0x1;
          switch (_0x250d38) {
            case 0x2:
              _0x5dc9a9.Xn(_0x396248);
              break;
            case 0xa:
              _0x5dc9a9.qn(_0x396248);
              break;
            case 0x15:
              _0x5dc9a9.es(_0x396248);
              break;
            case 0x16:
              _0x5dc9a9.ts(_0x396248);
              break;
            case 0x17:
              _0x5dc9a9.ns();
              break;
            case 0x28:
              _0x5dc9a9.ss(_0x396248);
              break;
            case 0x29:
              _0x5dc9a9.os(_0x396248);
              break;
            case 0x2d:
              _0x5dc9a9.rs(_0x396248);
              break;
            case 0x2b:
              _0x5dc9a9.cs(_0x396248);
              break;
            case 0x31:
              _0x5dc9a9.ls(_0x396248);
              break;
            case 0x32:
              _0x5dc9a9.ds(_0x396248);
              break;
            case 0x3f:
              _0x5dc9a9.hs(_0x396248);
              break;
            case 0x40:
              _0x5dc9a9.us(_0x396248);
              break;
            case 0x41:
              _0x5dc9a9.ps();
              break;
            case 0x42:
              _0x5dc9a9.fs(_0x396248);
              break;
            case 0x44:
              _0x5dc9a9.gs(_0x396248);
              break;
            case 0x45:
              _0x5dc9a9.bs(_0x396248);
              break;
            case 0x46:
              _0x5dc9a9.ks(_0x396248);
              break;
            case 0x47:
              _0x5dc9a9.$s();
              break;
            case 0x48:
              _0x5dc9a9.ys(_0x396248);
              break;
            case 0x49:
              _0x5dc9a9.vs(_0x396248);
              break;
            case 0x4a:
              _0x5dc9a9.ws(_0x396248);
              break;
            case 0x50:
              _0x5dc9a9._s();
              break;
            case 0x51:
              _0x5dc9a9.Ss(_0x396248);
              break;
            case 0x52:
              _0x5dc9a9.Ns(_0x396248);
              break;
            case 0x53:
              _0x5dc9a9.Cs(_0x396248);
              break;
            case 0x5a:
              _0x5dc9a9.Es(_0x396248);
              break;
            case 0x5b:
              _0x5dc9a9.Os(_0x396248);
              break;
            case 0x5c:
              _0x5dc9a9.xs(_0x396248);
              break;
            case 0x5d:
              _0x5dc9a9.Wn();
              break;
            case 0x5e:
              _0x5dc9a9.Hs(_0x396248);
              break;
            case 0x64:
              _0x5dc9a9.Ms(_0x396248);
              break;
            case 0x65:
              _0x5dc9a9.Fs(_0x396248);
              break;
            case 0x66:
              _0x5dc9a9.Ds(_0x396248);
              break;
            case 0x67:
              _0x5dc9a9.As(_0x396248);
              break;
            case 0x68:
              _0x5dc9a9.Is(_0x396248);
          }
        };
        _0x11c751.prototype.Ps = function (_0x24c394) {
          var _0x1a1cd8 = _0x24c394.getUint16(_0x24c394.Qn, true);
          for (_0x24c394.Qn += 0x2; _0x1a1cd8 > 0x0; --_0x1a1cd8) {
            this.wi.Ts(_0x24c394.getUint16(_0x24c394.Qn, true));
            _0x24c394.Qn += 0x2;
          }
        };
        _0x11c751.prototype.Ls = function (_0x5c6e59) {
          var _0x30d5a5 = _0x5c6e59.getUint16(_0x5c6e59.Qn, true);
          for (_0x5c6e59.Qn += 0x2; _0x30d5a5 > 0x0; --_0x30d5a5) {
            var _0x237d1c = _0x5c6e59.getUint16(_0x5c6e59.Qn, true);
            _0x5c6e59.Qn += 0x2;
            var _0x159d70 = this._i.get(_0x237d1c) || this.Di.get(_0x237d1c);
            if (_0x159d70 != null) {
              if (_0x159d70.Fn === 0x6) {
                this.Di["delete"](_0x237d1c);
              } else {
                this._i["delete"](_0x237d1c);
                if (_0x159d70.Gi === this.Gi) {
                  this.Ni["delete"](_0x237d1c);
                }
              }
              _0x159d70.en();
            }
          }
        };
        _0x11c751.prototype.Us = function (_0x3dbd92) {
          return _0x3dbd92 && !_0x3dbd92.endsWith('.gif') ? _0x3dbd92 : null;
        };
        _0x11c751.prototype.Bs = function (_0xd1e62e) {
          while (true) {
            var _0x2d1c30 = _0xd1e62e.getUint16(_0xd1e62e.Qn, true);
            _0xd1e62e.Qn += 0x2;
            if (_0x2d1c30 === 0x0) {
              break;
            }
            var _0x118c9f = _0xd1e62e.getUint8(_0xd1e62e.Qn++) / 0xff;
            var _0x270298 = _0xd1e62e.getUint8(_0xd1e62e.Qn++) / 0xff;
            var _0x400d0d = _0xd1e62e.getUint8(_0xd1e62e.Qn++) / 0xff;
            var _0x32f6e1 = _0x1d0f23(_0xd1e62e);
            var _0x38d62f = this.wi.An(_0x2d1c30);
            if (_0x38d62f == null) {
              _0x38d62f = new _0x5a6f54(_0x2d1c30, _0x32f6e1.endsWith('🤖'));
              this.wi.sn(_0x38d62f);
            }
            _0x38d62f.p = _0x32f6e1;
            _0x38d62f.js = [_0x118c9f, _0x270298, _0x400d0d];
            _0x2d1c30 = this.Us(_0x31a8c8(_0xd1e62e));
            _0x38d62f.Gs = _0xd1e62e.getUint8(_0xd1e62e.Qn++);
            if ((_0x38d62f.Gs & 0x2) == 0x2) {
              _0x38d62f.zs = {
                'Ws': (_0xd1e62e.getUint8(_0xd1e62e.Qn++) << 0x10) + (_0xd1e62e.getUint8(_0xd1e62e.Qn++) << 0x8) + _0xd1e62e.getUint8(_0xd1e62e.Qn++),
                'Js': _0xd1e62e.getUint8(_0xd1e62e.Qn++) >= 0x40,
                'Ys': _0xd1e62e.getUint8(_0xd1e62e.Qn++),
                'Vs': _0x2d1c30
              };
            } else {
              _0x38d62f.Vs = _0x2d1c30;
              _0x38d62f.zs = null;
            }
            _0x38d62f.Yi();
            this.wi.Ks(_0x38d62f);
          }
        };
        _0x11c751.prototype.Zs = function (_0x57fc9f, _0x532f74) {
          while (true) {
            var _0x269c33 = _0x57fc9f.getUint16(_0x57fc9f.Qn, true);
            _0x57fc9f.Qn += 0x2;
            if (_0x269c33 === 0x0) {
              break;
            }
            var _0x3455bd = _0x269c33 === this.Gi;
            for (_0x3455bd && _0x532f74 && this.Kn();;) {
              var _0x752f1a = _0x57fc9f.getUint16(_0x57fc9f.Qn, true);
              _0x57fc9f.Qn += 0x2;
              if (_0x752f1a === 0x0) {
                break;
              }
              (_0x752f1a = new (_0x3455bd ? _0x1e6a83 : _0x32a5d6)(_0x752f1a, this)).Qs(_0x57fc9f.getInt16(_0x57fc9f.Qn, true));
              _0x752f1a.Xs(_0x57fc9f.getInt16(_0x57fc9f.Qn + 0x2, true));
              _0x752f1a.qs(_0x57fc9f.getUint16(_0x57fc9f.Qn + 0x4, true));
              _0x57fc9f.Qn += 0x6;
              _0x752f1a.Gi = _0x269c33;
            }
          }
        };
        _0x11c751.prototype.ea = function (_0x49e66d, _0x45ed47) {
          var _0x3c259d = !_0xb7d857 && Date.now() - _0x44cdc6 > 0x190;
          var _0x463992 = (_0x135b7b = this.Dt) == null ? undefined : _0x135b7b.js;
          while (true) {
            var _0x135b7b;
            var _0x15c807 = _0x49e66d.getUint8(_0x49e66d.Qn++);
            if (_0x15c807 === 0x2) {
              this.Zs(_0x49e66d, _0x45ed47);
            } else {
              if (_0x15c807 === 0x0) {
                break;
              }
              while (true) {
                var _0x50f9e8 = _0x49e66d.getUint16(_0x49e66d.Qn, true);
                _0x49e66d.Qn += 0x2;
                if (_0x50f9e8 === 0x0) {
                  break;
                }
                var _0x2d5f28 = _0x330ee2.ta(_0x50f9e8, _0x15c807, this);
                _0x2d5f28.Qs(_0x49e66d.getInt16(_0x49e66d.Qn, true));
                _0x2d5f28.Xs(_0x49e66d.getInt16(_0x49e66d.Qn + 0x2, true));
                _0x49e66d.Qn += 0x4;
                if (_0x15c807 !== 0x6) {
                  _0x2d5f28.qs(_0x49e66d.getUint16(_0x49e66d.Qn, true));
                  _0x49e66d.Qn += 0x2;
                  switch (_0x15c807) {
                    case 0x1:
                      _0x2d5f28.na = (_0x49e66d.getUint8(_0x49e66d.Qn++) << 0x10) + (_0x49e66d.getUint8(_0x49e66d.Qn++) << 0x8) + _0x49e66d.getUint8(_0x49e66d.Qn++);
                      var _0x655ba6 = _0x49e66d.getUint8(_0x49e66d.Qn++);
                      _0x2d5f28.Vs = (_0x655ba6 & 0x7f) - 0x1;
                      if (!_0x3c259d && _0x2d5f28.na === _0x463992) {
                        this.Vn();
                        _0x3c259d = true;
                      }
                      break;
                    case 0x5:
                      _0x2d5f28.aa = _0x49e66d.getUint8(_0x49e66d.Qn++);
                  }
                }
              }
            }
          }
        };
        _0x11c751.prototype.oa = function (_0x3b3130) {
          while (true) {
            var _0x36af84 = _0x3b3130.getUint8(_0x3b3130.Qn++);
            if (_0x36af84 === 0x0) {
              break;
            }
            while (true) {
              var _0x17d1ac = _0x3b3130.getUint16(_0x3b3130.Qn, true);
              _0x3b3130.Qn += 0x2;
              if (_0x17d1ac === 0x0) {
                break;
              }
              var _0x155c4a = (_0x36af84 === 0x6 ? this.Di : this._i).get(_0x17d1ac);
              (_0x155c4a = _0x155c4a == null ? _0x330ee2.ta(_0x17d1ac, _0x36af84, this) : _0x155c4a).ra(_0x3b3130.getInt16(_0x3b3130.Qn, true));
              _0x155c4a.ca(_0x3b3130.getInt16(_0x3b3130.Qn + 0x2, true));
              _0x3b3130.Qn += 0x4;
              if (_0x36af84 === 0x2 || _0x36af84 === 0x3 || _0x36af84 === 0x4) {
                _0x155c4a.ha(_0x3b3130.getUint16(_0x3b3130.Qn, true));
                _0x3b3130.Qn += 0x2;
              }
            }
          }
        };
        _0x11c751.prototype.Xn = function (_0x1f5eec) {
          var _0xd78324 = this.jt();
          this.Ps(_0x1f5eec);
          this.Ls(_0x1f5eec);
          this.Bs(_0x1f5eec);
          this.ea(_0x1f5eec, _0xd78324);
          this.oa(_0x1f5eec);
          if (_0xd78324 && !this.jt()) {
            this.Zn();
          }
          this.Pi = true;
          this.ua();
          _0x1928f0.Ee();
        };
        _0x11c751.prototype.qn = function (_0x59dc27) {
          this.Ei = _0x59dc27.getFloat32(_0x59dc27.Qn, true);
          _0x59dc27.Qn += 0x4;
          this.Oi = _0x59dc27.getFloat32(_0x59dc27.Qn, true);
          _0x59dc27.Qn += 0x4;
          this.Hi = _0x59dc27.getFloat32(_0x59dc27.Qn, true);
        };
        _0x11c751.prototype.hs = function (_0x5b038d) {
          this.$t = _0x5b038d.getFloat64(_0x5b038d.Qn, true);
        };
        _0x11c751.prototype.us = function (_0x328433) {
          this.Gi = _0x328433.getUint16(_0x328433.Qn, true);
          _0x328433.Qn += 0x3;
          this.fs(_0x328433);
          this.fi.gn = _0x328433.getUint16(_0x328433.Qn, true);
          _0x328433.Qn += 0x2;
          for (; _0x328433.getUint8(_0x328433.Qn++) !== 0x0;) {
            ;
          }
          this.fi.bn = !!_0x328433.getUint8(_0x328433.Qn++);
          _0x189125("#pId span").html(this.Gi);
          this.Li(true);
          if (_0x3909d1 != null) {
            this.T(_0x5af10a.ze(_0x3909d1));
          }
          _0x1db7a6.css("display", "none");
          _0x189125("#scrimmage-btn-leave").css('display', 'none');
        };
        _0x11c751.prototype.fs = function (_0x502e77) {
          var _0x29ee37 = {
            'mi': _0x502e77.getInt16(_0x502e77.Qn, true),
            'gi': _0x502e77.getInt16(_0x502e77.Qn + 0x2, true),
            'pa': _0x502e77.getInt16(_0x502e77.Qn + 0x4, true),
            'fa': _0x502e77.getInt16(_0x502e77.Qn + 0x6, true)
          };
          _0x502e77.Qn += 0x8;
          _0x29ee37.bi = _0x29ee37.pa - _0x29ee37.mi;
          _0x29ee37.ki = _0x29ee37.fa - _0x29ee37.gi;
          _0x29ee37.ce = _0x29ee37.bi !== 0x0 && _0x29ee37.ki !== 0x0;
          if ((_0x502e77 = this.fi.pi = _0x29ee37).ce) {
            _0x5502b2.width = _0x502e77.bi;
            _0x5502b2.height = _0x502e77.ki;
            _0x5502b2.position.set(_0x502e77.mi, _0x502e77.gi);
          }
          _0x5502b2.visible = _0x502e77.ce;
          _0x3ed2a9();
        };
        _0x11c751.prototype.gs = function (_0x34fc5a) {
          this.fi.Ki = _0x34fc5a.getUint8(_0x34fc5a.Qn++);
          this.fi.bt = _0x34fc5a.getFloat64(_0x34fc5a.Qn, true);
        };
        _0x11c751.prototype.bs = function (_0x167a62) {
          this.ma = _0x167a62.getUint16(_0x167a62.Qn, true);
          this.ga();
        };
        _0x11c751.prototype.ps = function () {
          this.En();
        };
        _0x11c751.prototype.ls = function (_0x37ba6b) {
          this.pn.length = 0x0;
          var _0x5d30e4 = _0x37ba6b.getUint32(_0x37ba6b.Qn, true);
          _0x37ba6b.Qn += 0x4;
          for (var _0x5712a4 = 0x1; _0x5712a4 <= _0x5d30e4; _0x5712a4++) {
            var _0x573c1a = _0x37ba6b.getUint16(_0x37ba6b.Qn, true);
            _0x37ba6b.Qn += 0x2;
            var _0x4028b1 = _0x1d0f23(_0x37ba6b) || "An unnamed cell";
            var _0x597912 = _0x573c1a === this.Gi ? "#ffaaaa" : this.un[_0x573c1a] != null ? "#ffff00" : "rgb(255, 255, 255)";
            this.pn.push({
              'Gi': _0x573c1a,
              'p': _0x4028b1,
              've': _0x5712a4 + ". " + _0x4028b1,
              'ba': _0x597912
            });
          }
          this.ka();
        };
        _0x11c751.prototype.ds = function (_0x19d157) {
          this.pn.length = 0x0;
          var _0x37c408 = _0x19d157.getUint16(_0x19d157.Qn, true);
          var _0x482528 = _0x19d157.getUint8(_0x19d157.Qn + 0x2);
          _0x19d157.Qn += 0x4;
          for (var _0x3fb8cd = 0x0; _0x3fb8cd < _0x37c408; _0x3fb8cd++) {
            this.pn.push({
              've': _0x31a8c8(_0x19d157),
              'ba': _0x3fb8cd === _0x482528 ? "#ffaaaa" : "rgb(255, 255, 255)"
            });
          }
          this.ka();
        };
        _0x11c751.prototype.$s = function () {
          var _0x3318c6 = Date.now() - _0x3adc10;
          var _0x38ddeb = "rgb(255, 255, 255)";
          _0x38ddeb = _0x3318c6 < 0x64 ? "#00ff00" : _0x3318c6 < 0xc8 ? "#ffff00" : "#ff0000";
          this.$n = _0x3318c6;
          _0x41c44b.ht.style.color = _0x38ddeb;
          _0x41c44b.ht.innerHTML = _0x3318c6 + 'ms';
        };
        _0x11c751.prototype.ys = function (_0x38279c) {
          var _0x359346 = _0x38279c.getUint8(_0x38279c.Qn++);
          var _0x4281a6 = "rgb(" + _0x38279c.getUint8(_0x38279c.Qn++) + ',' + _0x38279c.getUint8(_0x38279c.Qn++) + ',' + _0x38279c.getUint8(_0x38279c.Qn++) + ')';
          var _0x38f026 = _0x38279c.getUint8(_0x38279c.Qn++);
          var _0x57f122 = _0x38279c.getUint16(_0x38279c.Qn, true);
          _0x38279c.Qn += 0x2;
          if (!_0x1e1c4c.includes(_0x57f122)) {
            var _0x2413d7 = _0x1d0f23(_0x38279c).replace(/</g, '&lt;').replace(/>/g, '&gt;');
            _0x38279c.Qn++;
            var _0x4aed39 = _0x1d0f23(_0x38279c).replace(/</g, '&lt;').replace(/>/g, '&gt;') || "An unnamed cell";
            var _0x16be68 = _0x1d0f23(_0x38279c).replace(/</g, '&lt;').replace(/>/g, '&gt;');
            if (!_0x2413d7.startsWith('System') || !_0x16be68.includes("store")) {
              var _0x496947;
              var _0x4267c4 = 0x1;
              switch (_0x359346) {
                case 0x1:
                  _0x496947 = "Party";
                  _0x4267c4 = 0x2;
                  break;
                case 0x2:
                  _0x496947 = "Admin";
                  _0x4267c4 = 0x10;
                  break;
                default:
                  _0x496947 = "All";
              }
              var _0x359346 = _0x343b32.cHideLockedNames && _0x57f122 !== this.Gi;
              if (_0x2413d7.length > 0x0 && (!_0x359346 || _0x2413d7 !== "Gold")) {
                _0x496947 += " - " + _0x2413d7;
              }
              var _0x2413d7 = _0x470b4b.createElement('td');
              var _0x1daa90 = _0x470b4b.createElement("span");
              _0x1daa90.innerHTML = '[' + _0x496947 + "] ";
              _0x2413d7.appendChild(_0x1daa90);
              (_0x1daa90 = _0x470b4b.createElement("span")).innerText = _0x4aed39;
              _0x1daa90.dataset.Gi = _0x57f122;
              _0x1daa90.style.color = _0x4281a6;
              _0x1daa90.className = "chat-name";
              _0x2413d7.appendChild(_0x1daa90);
              (_0x4aed39 = _0x470b4b.createElement("span")).innerHTML = ": ";
              _0x2413d7.appendChild(_0x4aed39);
              _0x57f122 = _0x470b4b.createElement("span");
              if (_0x38279c.Qn < _0x38279c.byteLength) {
                _0x57f122.dataset.msgid = _0x38279c.getBigInt64(_0x38279c.Qn, true);
              }
              _0x57f122.innerHTML = _0x2b5755(_0x16be68);
              _0x57f122.style.color = _0x5547fe[_0x359346 ? 0x0 : _0x38f026];
              _0x2413d7.appendChild(_0x57f122);
              _0x80866c(_0x4267c4, _0x2413d7);
            }
          }
        };
        _0x11c751.prototype.vs = function (_0x3d0853) {
          var _0x9a8c09;
          var _0xe48fc0;
          var _0x59097e;
          var _0x317fee;
          var _0x4aac82;
          var _0x45b582;
          var _0x594e59 = _0x1d0f23(_0x3d0853).replace(/</g, '&lt;').replace(/>/g, '&gt;') || "An unnamed cell";
          var _0x470cf8 = _0x3d0853.getUint16(_0x3d0853.Qn, true);
          _0x3d0853.Qn += 0x2;
          if (!_0x1e1c4c.includes(_0x470cf8)) {
            _0x45b582 = "rgb(" + _0x3d0853.getUint8(_0x3d0853.Qn++) + ',' + _0x3d0853.getUint8(_0x3d0853.Qn++) + ',' + _0x3d0853.getUint8(_0x3d0853.Qn++) + ')';
            _0x9a8c09 = _0x1d0f23(_0x3d0853).replace(/</g, '&lt;').replace(/>/g, '&gt;') || "An unnamed cell";
            _0xe48fc0 = _0x3d0853.getUint16(_0x3d0853.Qn, true);
            _0x3d0853.Qn += 0x2;
            _0x59097e = "rgb(" + _0x3d0853.getUint8(_0x3d0853.Qn++) + ',' + _0x3d0853.getUint8(_0x3d0853.Qn++) + ',' + _0x3d0853.getUint8(_0x3d0853.Qn++) + ')';
            _0x3d0853 = _0x1d0f23(_0x3d0853).replace(/</g, '&lt;').replace(/>/g, '&gt;');
            _0x317fee = _0x470b4b.createElement('td');
            (_0x4aac82 = _0x470b4b.createElement('span')).innerText = _0x594e59;
            _0x4aac82.dataset.Gi = _0x470cf8;
            _0x4aac82.style.color = _0x45b582;
            _0x4aac82.className = "chat-name";
            _0x317fee.appendChild(_0x4aac82);
            (_0x594e59 = _0x470b4b.createElement("span")).innerHTML = " > ";
            _0x317fee.appendChild(_0x594e59);
            (_0x470cf8 = _0x470b4b.createElement('span')).innerText = _0x9a8c09;
            _0x470cf8.dataset.Gi = _0xe48fc0;
            _0x470cf8.style.color = _0x59097e;
            _0x470cf8.className = "chat-name";
            _0x317fee.appendChild(_0x470cf8);
            (_0x45b582 = _0x470b4b.createElement('span')).innerHTML = ": " + _0x2b5755(_0x3d0853);
            _0x317fee.appendChild(_0x45b582);
            _0x80866c(0x4, _0x317fee);
          }
        };
        _0x11c751.prototype.ws = function (_0x91dfaf) {
          var _0x41805a = _0x91dfaf.getBigInt64(_0x91dfaf.Qn, true);
          _0x91dfaf.Qn += 0x8;
          var _0x91dfaf = _0x1d0f23(_0x91dfaf).replace(/</g, '&lt;').replace(/>/g, '&gt;');
          var _0x41805a = _0x189125(".chat-table [data-msgid='" + _0x41805a + "']");
          if (_0x91dfaf.length > 0x0) {
            _0x41805a.html(_0x2b5755(_0x91dfaf));
          } else {
            _0x41805a.closest('tr').remove();
          }
        };
        _0x11c751.prototype.ks = function (_0x125f6f) {
          this.Bt(_0x1d0f23(_0x125f6f));
        };
        _0x11c751.prototype.As = function (_0x1502e2) {
          if (_0x1502e2.getUint8(0x1) !== 0x1) {
            this.Bn();
            this.ln(true);
          } else {
            this.Bt("Invalid authentication token! Please logout and try again!");
            this.ln(false);
          }
        };
        _0x11c751.prototype.Is = function (_0xf39cb1) {
          _0xd33252(JSON.parse(_0x31a8c8(_0xf39cb1)));
        };
        _0x11c751.prototype.ss = function (_0x28f093) {
          _0x28f093 = _0x1d0f23(_0x28f093).replace(/</g, '&lt;').replace(/>/g, '&gt;');
          _0x189125("#popup-party-text").text(_0x28f093 + " has invited you to a party.");
          _0x494cb4(_0x189125('#popup-party'));
        };
        _0x11c751.prototype.os = function (_0x35940d) {
          var _0x126420;
          var _0x445bab = {};
          var _0x30fbea = [];
          var _0x2c822a = -0x1;
          var _0x4d8079 = _0x35940d.getUint16(_0x35940d.Qn, true);
          _0x35940d.Qn += 0x2;
          var _0x205816;
          for (var _0x16dcb = 0x0; _0x16dcb < _0x4d8079; _0x16dcb++) {
            var _0x410fc3 = {};
            var _0x59b3fe = _0x35940d.getUint8(_0x35940d.Qn++) === 0x1;
            _0x410fc3.ji = _0x35940d.getUint16(_0x35940d.Qn, true);
            _0x445bab[_0x410fc3.ji] = _0x16dcb;
            _0x35940d.Qn += 0x2;
            if (_0x59b3fe) {
              _0x2c822a = _0x410fc3.ji;
              _0x410fc3.ya = true;
            } else {
              _0x410fc3.ya = false;
            }
            _0x410fc3.p = _0x1d0f23(_0x35940d) || "An unnamed cell";
            _0x410fc3.oe = 0x0;
            _0x410fc3.re = 0x0;
            _0x410fc3.Wi = 0x0;
            _0x410fc3.Ji = 0x0;
            _0x410fc3.kn = 0x0;
            _0x410fc3.va = -0x1;
            _0x410fc3.wa = 0x0;
            _0x410fc3.Ui = _0x159336._a;
            if (this.un[_0x410fc3.ji] != null) {
              _0x59b3fe = this.Ri[this.un[_0x410fc3.ji]];
              _0x410fc3.oe = _0x59b3fe.oe;
              _0x410fc3.re = _0x59b3fe.re;
              _0x410fc3.Wi = _0x59b3fe.Wi;
              _0x410fc3.Ji = _0x59b3fe.Ji;
              _0x410fc3.Ui = _0x59b3fe.Ui;
              _0x410fc3.kn = _0x59b3fe.kn;
              _0x410fc3.zi = _0x59b3fe.zi;
            } else {
              _0x410fc3.zi = _0x392ea6[(_0x59b3fe = _0x410fc3.ji) % _0x392ea6.length];
              if (_0x59b3fe = _0x24f82e.wi.An(_0x410fc3.ji)) {
                _0x59b3fe.Sa(true);
              }
            }
            _0x30fbea.push(_0x410fc3);
          }
          for (_0x205816 in this.un) {
            if (_0x445bab[_0x205816] == null && (_0x126420 = _0x24f82e.wi.An(+_0x205816))) {
              _0x126420.Sa(false);
            }
          }
          this.Ri = _0x30fbea;
          this.un = _0x445bab;
          if (this.Gn !== _0x2c822a && (this.Gn = _0x2c822a, _0x5cc0b7.css("display") === "block")) {
            _0x2a3f58.Na();
          }
          if (_0x4d8079 > 0x0) {
            this.Ca();
          } else {
            this.xn();
          }
        };
        _0x11c751.prototype.rs = function (_0x3b29e6) {
          var _0x375586 = _0x3b29e6.getUint16(_0x3b29e6.Qn, true);
          _0x3b29e6.Qn += 0x2;
          if (_0x375586 === this.Ri.length) {
            for (var _0x4ca00b = 0x0; _0x4ca00b < _0x375586; _0x4ca00b++) {
              var _0x532ed0 = this.Ri[_0x4ca00b];
              _0x532ed0.Ui = _0x3b29e6.getUint8(_0x3b29e6.Qn++);
              if (_0x532ed0.Ui === 0x0) {
                _0x532ed0.Wi = _0x3b29e6.getInt16(_0x3b29e6.Qn, true);
                _0x532ed0.Ji = _0x3b29e6.getInt16(_0x3b29e6.Qn + 0x2, true);
                _0x532ed0.kn = _0x3b29e6.getInt32(_0x3b29e6.Qn + 0x4, true);
                _0x3b29e6.Qn += 0x8;
              }
            }
            this.Ca();
          }
        };
        _0x11c751.prototype.cs = function (_0x7a197e) {
          var _0x56d30c = _0x31a8c8(_0x7a197e);
          this.Zt = _0x31a8c8(_0x7a197e) || null;
          if (this.Zt) {
            _0x7a197e = "/join " + this.Zt;
            this.jn(_0x56d30c, _0x7a197e);
            _0x189125("#popup-party-code-content input").val(_0x7a197e);
            _0x189125("#popup-party-code").show();
            _0x438c4c.history.pushState("page", '', '#' + this.Gt + '&' + this.Zt);
          } else {
            this.Bt(_0x56d30c);
            _0x438c4c.history.pushState("page", '', " ");
          }
        };
        _0x11c751.prototype.es = function (_0x296539) {
          var _0x25921f = _0x296539.getUint16(_0x296539.Qn, true);
          _0x296539.Qn += 0x2;
          var _0xb7e4cb = _0x1d0f23(_0x296539) || "An unnamed cell";
          var _0x24978f = _0x296539.getUint32(_0x296539.Qn, true);
          var _0x78da76 = _0x296539.getUint32(_0x296539.Qn + 0x4, true);
          var _0x19ccc1 = _0x296539.getUint32(_0x296539.Qn + 0x8, true);
          var _0x7d886a = _0x296539.getUint32(_0x296539.Qn + 0xc, true);
          var _0x4aba5b = _0x296539.getUint32(_0x296539.Qn + 0x10, true);
          var _0x40dd3a = _0x296539.getUint32(_0x296539.Qn + 0x14, true);
          var _0x4b9823 = _0x296539.getUint32(_0x296539.Qn + 0x18, true);
          var _0x752700 = _0x296539.getUint32(_0x296539.Qn + 0x1c, true);
          var _0x588f8f = _0x296539.getUint32(_0x296539.Qn + 0x20, true);
          _0x296539.Qn += 0x24;
          _0x189125("#main-stats").html("<span>Name: " + _0xb7e4cb + " (" + _0x25921f + ")</span><br><span>Alive: " + _0x42dd66(_0x24978f) + "</span><br><span>Food eaten: " + _0x78da76 + " (" + _0x40dd3a + ")</span><br><span>Ejected mass eaten: " + _0x19ccc1 + " (" + _0x4b9823 + ")</span><br><span>Viruses eaten: " + _0x7d886a + " (" + _0x752700 + ")</span><br><span>Player cells eaten: " + _0x4aba5b + " (" + _0x588f8f + ")</span><br>");
        };
        _0x11c751.prototype.ts = function (_0x1be7a2) {
          _0x1be7a2 = _0x1be7a2.getUint8(_0x1be7a2.Qn++) === 0x1;
          this.fn = _0x1be7a2;
          _0x1fff68();
          if (_0x1be7a2) {
            if (!this.fi.mn) {
              _0x131493();
              this.fi.mn = true;
            }
            _0x189429();
          }
        };
        _0x11c751.prototype.ns = function () {
          if (_0x59c59f) {
            _0x5cc704(_0x59c59f.uid);
          }
        };
        _0x11c751.prototype.ga = function () {
          _0x41c44b.yt.html(this.ma);
        };
        _0x11c751.prototype.Ms = function (_0x577abd) {
          this.Vi.Ea(_0x577abd.getUint8(_0x577abd.Qn++), _0x577abd.getUint8(_0x577abd.Qn++), _0x577abd.getFloat64(_0x577abd.Qn, true));
          _0x577abd.Qn += 0x8;
        };
        _0x11c751.prototype.Fs = function (_0x2536ac) {
          this.Vi.Oa(_0x2536ac.getUint8(_0x2536ac.Qn++));
        };
        _0x11c751.prototype.Ds = function (_0x35a336) {
          this.Vi.Hn(_0x35a336.getUint8(_0x35a336.Qn++) === 0x1);
        };
        _0x11c751.prototype.Ti = function () {
          _0x172488.children.sort(_0x408d1b);
        };
        _0x11c751.prototype.Ha = function () {
          var _0x237e0d;
          var _0x363599 = 0x0;
          for (_0x237e0d of this.Ni.values()) {
            _0x363599 += _0x237e0d.xi();
          }
          return _0x363599;
        };
        _0x11c751.prototype.ua = function () {
          var _0x28da6f = this.Ha();
          var _0x5686f = _0x28da6f.toLocaleString();
          _0x41c44b.dt.innerHTML = _0x5686f;
          if (_0x28da6f > this.kn) {
            this.kn = _0x28da6f;
            _0x41c44b.lt.innerHTML = _0x5686f;
          }
        };
        _0x11c751.prototype.Li = function (_0x51d4b5) {
          var _0x2fbc56;
          var _0x4831bd;
          var _0x1270e3 = this.Ni.size;
          if (_0x41c44b.vt !== _0x1270e3 || !!_0x51d4b5) {
            _0x51d4b5 = this.Jn();
            _0x4831bd = "rgb(255, 255, 255)";
            _0x4831bd = (_0x2fbc56 = _0x1270e3 / _0x51d4b5) >= 0x1 ? "#ff0000" : _0x2fbc56 >= 0.5 ? "#ffff00" : "#00ff00";
            _0x41c44b.vt = _0x1270e3;
            _0x41c44b.ut.style.color = _0x4831bd;
            _0x41c44b.ut.innerHTML = _0x1270e3 + '/' + _0x51d4b5;
          }
        };
        _0x11c751.prototype.ka = function (_0x56b837 = 'Leaderboard') {
          var _0x3f57bc = _0x470b4b.getElementById("leaderboard-canvas");
          var _0x5c9c9f = _0x3f57bc.getContext('2d');
          var _0x466927 = this.pn.length;
          _0x2f1091(_0x56b837);
          _0x3f57bc.width = 0xc8;
          _0x3f57bc.height = _0x466927 * 0x14 + 0x4;
          if (_0x466927 !== 0x0) {
            _0x5c9c9f.font = "16px Calibri";
            for (var _0x1f0269 = 0x0; _0x1f0269 < _0x466927; _0x1f0269++) {
              var _0x1e0271 = this.pn[_0x1f0269];
              var _0x551397 = _0x1e0271.ba;
              var _0x1e0271 = _0x1e0271.ve;
              _0x5c9c9f.fillStyle = _0x551397;
              _0x5c9c9f.fillText(_0x1e0271, 0xa, (_0x1f0269 + 0x1) * 0x14);
            }
          }
        };
        _0x11c751.prototype.Ca = function () {
          var _0x50900e = this.Ri.length;
          if (_0x50900e !== 0x0) {
            if (_0x343b32.cHidePartyPanel) {
              _0x41c44b._t.css('display', 'none');
            } else if (_0x41c44b._t.css("display") === 'none' && _0x39c272.css('display') !== "none") {
              _0x41c44b._t.css("display", "block");
            }
            var _0x166b9d = _0x470b4b.getElementById("party-canvas");
            var _0x3dee67 = _0x166b9d.getContext('2d');
            _0x3dee67.font = "16px Calibri";
            var _0xa485aa = 0x0;
            var _0x405e8d = 0x0;
            var _0x52edd9 = 0x0;
            for (var _0x3f5d5d = 0x0; _0x3f5d5d < _0x50900e; _0x3f5d5d++) {
              var _0x427db0 = this.Ri[_0x3f5d5d];
              if (_0x427db0.va === -0x1) {
                _0x427db0.va = _0x3dee67.measureText(_0x3f5d5d + 0x1 + ". " + _0x427db0.p).width;
              }
              if (_0x427db0.va > _0xa485aa) {
                _0xa485aa = _0x427db0.va;
              }
              if (_0x427db0.Ui === 0x0 || _0x427db0.Ui === _0x159336._a) {
                _0x427db0.Ma = _0x427db0.kn.toLocaleString();
                _0x52edd9 += _0x427db0.kn;
              } else {
                if (_0x427db0.Ui === 0x1) {
                  _0x427db0.Ma = "DEAD";
                } else if (_0x427db0.Ui === 0x2) {
                  _0x427db0.Ma = 'SPEC';
                }
              }
              if (_0x405e8d < (_0x427db0 = _0x3dee67.measureText(_0x427db0.Ma).width)) {
                _0x405e8d = _0x427db0;
              }
            }
            var _0x3af4c3 = _0x52edd9.toLocaleString();
            var _0x405e8d = _0x18803e.max(_0x405e8d, _0x3dee67.measureText(_0x3af4c3).width);
            _0x166b9d.width = 0xf + _0xa485aa + 0x32 + _0x405e8d;
            _0x166b9d.height = _0x50900e * 0x14 + 0x5 + (_0x50900e > 0x1 ? 0x14 : 0x0);
            _0x3dee67.font = "16px Calibri";
            var _0x13de05 = 0x14;
            var _0x4247c2 = 0x5 + _0xa485aa + 0x32;
            for (var _0x3e4f64 = 0x0; _0x3e4f64 < _0x50900e; _0x3e4f64++) {
              var _0x134cb2 = this.Ri[_0x3e4f64];
              _0x3dee67.fillStyle = _0x134cb2.ya ? "#00ffff" : "rgb(255, 255, 255)";
              _0x3dee67.fillText(_0x3e4f64 + 0x1 + ". " + _0x134cb2.p, 0x5, _0x13de05);
              _0x3dee67.fillText(_0x134cb2.Ma, _0x4247c2, _0x13de05);
              _0x13de05 += 0x14;
            }
            if (_0x50900e > 0x1) {
              _0x3dee67.fillStyle = "rgb(255, 255, 255)";
              _0x3dee67.fillText("Total:", 0x5, _0x13de05);
              _0x3dee67.fillText(_0x3af4c3, _0x4247c2, _0x13de05);
            }
          }
        };
        _0x11c751.prototype._s = function () {
          _0x5f1f08.stop(true).hide();
          _0x1db7a6.css('display', "block");
          _0x189125("#scrimmage-btn-leave").css('display', 'none');
          _0x24f82e.fi.pi.ce = false;
        };
        _0x11c751.prototype.Ss = function (_0x4ff18b) {
          var _0x2429fe = ["Mode: " + _0x31a8c8(_0x4ff18b), "Time: " + _0x42dd66(_0x4ff18b.getUint32(_0x4ff18b.Qn, true))];
          _0x4ff18b.Qn += 0x4;
          if (_0x4ff18b.Qn < _0x4ff18b.byteLength) {
            _0x2429fe.push("Queued players: " + _0x4ff18b.getUint8(_0x4ff18b.Qn));
          }
          this.pn = _0x2429fe.map(function (_0xc41f66) {
            return {
              'ba': "rgb(255, 255, 255)",
              've': _0xc41f66
            };
          });
          this.ka('Queue');
        };
        _0x11c751.prototype.Ns = function (_0x5b0568) {
          this.pn.length = 0x0;
          this.ka('Queue');
          this.Bt("You have left the queue for [" + _0x31a8c8(_0x5b0568) + ']');
        };
        _0x11c751.prototype.Cs = function (_0x138096) {
          var _0x5ef32c;
          if ((_0x138096 = _0x138096.byteLength === 0x1 ? 0x0 : _0x138096.getUint8(_0x138096.Qn++)) === 0x0) {
            this.Bt("A match has been found. Good luck and have fun!");
            if (!_0x4985b8 && ((_0x5ef32c = _0x438c4c.Notification) == null ? undefined : _0x5ef32c.permission) === "granted") {
              new _0x438c4c.Notification("Your match has started.", {
                'icon': 'https://gota.io/assets/images/favicon.png'
              });
            }
          } else if (_0x138096 === 0x1) {
            _0x189125('#scrimmage-btn-leave').css("display", "block");
          }
        };
        _0x11c751.prototype.Es = function (_0x5f306a) {
          var _0x3b4ae4 = _0x189125('#scrimmage-mode-select');
          var _0x332c19 = _0x189125("#scrimmage-mode-info");
          var _0xf8292d = parseInt(_0x3b4ae4.val());
          _0x3b4ae4.empty();
          _0x332c19.empty();
          var _0x2c1fa4 = new Set();
          for (var _0xe08bd7 = _0x5f306a.getUint8(_0x5f306a.Qn++); _0xe08bd7--;) {
            var _0x44cb8a = _0x5f306a.getUint8(_0x5f306a.Qn++);
            var _0x39978b = _0x31a8c8(_0x5f306a);
            var _0x1403a8 = _0x31a8c8(_0x5f306a);
            var _0x582621 = _0x470b4b.createElement("option");
            _0x582621.innerHTML = _0x39978b;
            _0x582621.value = _0x44cb8a;
            _0x3b4ae4.append(_0x582621);
            (_0x39978b = _0x470b4b.createElement("div")).innerHTML = _0x1403a8;
            _0x39978b.id = 'scrimmage-info-' + _0x44cb8a;
            _0x39978b.style.display = 'none';
            _0x332c19.append(_0x39978b);
            _0x2c1fa4.add(_0x44cb8a);
          }
          _0x1f772f = {
            'Aa': {},
            'Ia': {},
            'Pa': []
          };
          if (_0x5f306a.byteLength - 0x1 > _0x5f306a.Qn) {
            for (var _0x36ec3a = _0x5f306a.getUint8(_0x5f306a.Qn++); _0x36ec3a--;) {
              var _0x4d6439 = _0x5f306a.getUint8(_0x5f306a.Qn++);
              _0x1f772f.Aa[_0x4d6439] = {
                'ji': _0x4d6439,
                'p': _0x31a8c8(_0x5f306a)
              };
            }
            for (var _0x67231 = _0x5f306a.getUint8(_0x5f306a.Qn++); _0x67231--;) {
              var _0x15a74c = _0x5f306a.getUint8(_0x5f306a.Qn++);
              _0x1f772f.Ia[_0x15a74c] = {
                'ji': _0x15a74c,
                'p': _0x31a8c8(_0x5f306a)
              };
            }
            for (var _0x57cd8c = _0x5f306a.getUint8(_0x5f306a.Qn++); _0x57cd8c--;) {
              var _0x34b969 = {
                'p': _0x31a8c8(_0x5f306a),
                'Ta': 0x0,
                'La': 0x0,
                'Aa': [],
                'Ia': []
              };
              for (var _0xa929f2 = _0x5f306a.getUint8(_0x5f306a.Qn++); _0xa929f2--;) {
                _0x34b969.Aa.push(_0x5f306a.getUint8(_0x5f306a.Qn++));
              }
              for (var _0x3289f8 = _0x5f306a.getUint8(_0x5f306a.Qn++); _0x3289f8--;) {
                _0x34b969.Ia.push(_0x5f306a.getUint8(_0x5f306a.Qn++));
              }
              _0x34b969.Ta = _0x5f306a.getUint16(_0x5f306a.Qn, true);
              _0x34b969.Ra = _0x5f306a.getInt16(_0x5f306a.Qn + 0x2, true);
              _0x5f306a.Qn += 0x4;
              _0x34b969.La = _0x5f306a.getUint8(_0x5f306a.Qn++);
              _0x1f772f.Pa.push(_0x34b969);
            }
          }
          _0x189125("#scrimmage-custom-btn-container").css("display", _0x1f772f.Pa.length === 0x0 ? "none" : 'block');
          _0x41c44b.Et.empty();
          for (var _0xf12b79 = 0x0; _0xf12b79 < _0x1f772f.Pa.length; _0xf12b79++) {
            _0x41c44b.Et.append("<option value='" + _0xf12b79 + "'>" + _0x1f772f.Pa[_0xf12b79].p + "</option>");
          }
          if (_0x2c1fa4.has(_0xf8292d)) {
            _0x3b4ae4.val(_0xf8292d);
          } else {
            _0x3b4ae4.prop("selectedIndex", 0x0);
          }
          _0x3b4ae4.trigger("change");
        };
        _0x11c751.prototype.xs = function (_0x5e308d) {
          switch (_0x5e308d.getUint8(_0x5e308d.Qn++)) {
            case 0x0:
              _0x2a3f58.Ua(_0x5e308d.getUint8(_0x5e308d.Qn++));
              break;
            case 0x1:
              _0x2a3f58.Ba(_0x5e308d.getUint8(_0x5e308d.Qn++));
              break;
            case 0x2:
              _0x2a3f58.ha(_0x5e308d.getUint8(_0x5e308d.Qn++));
              break;
            case 0x3:
              _0x2a3f58.ja(_0x5e308d.getUint16(_0x5e308d.Qn, true));
              _0x5e308d.Qn += 0x2;
              break;
            case 0x4:
              _0x2a3f58.Ga(_0x5e308d.getUint8(_0x5e308d.Qn++) === 0x1);
              break;
            case 0x5:
              var _0x5c8936 = _0x5e308d.getUint8(_0x5e308d.Qn++);
              _0x24f82e.Ri[_0x5c8936].wa = _0x5e308d.getUint8(_0x5e308d.Qn++);
              _0x2a3f58.Wa(_0x5c8936);
              break;
            case 0x6:
              var _0x16d5d0 = 0x0;
              for (var _0x236f3c = _0x5e308d.getUint8(_0x5e308d.Qn++); _0x16d5d0 < _0x236f3c; _0x16d5d0++) {
                _0x24f82e.Ri[_0x16d5d0].wa = _0x5e308d.getUint8(_0x5e308d.Qn++);
              }
              _0x2a3f58.Ya();
              break;
            case 0x7:
              _0x2a3f58.Va(_0x5e308d.getUint16(_0x5e308d.Qn, true));
              _0x5e308d.Qn += 0x2;
              break;
            case 0xb:
              _0x2a3f58.Ka(_0x5e308d.getInt16(_0x5e308d.Qn, true));
              _0x5e308d.Qn += 0x2;
              break;
            case 0xc:
              _0x2a3f58.Za(_0x5e308d.getUint8(_0x5e308d.Qn++) === 0x1);
              break;
            case 0x8:
              _0x2a3f58.Qa(_0x5e308d.getUint8(_0x5e308d.Qn++) === 0x1);
              break;
            case 0x9:
              _0x2a3f58.Xa(_0x5e308d.getUint8(_0x5e308d.Qn++) === 0x1);
              break;
            case 0xa:
              _0x2a3f58.qa(_0x1d0f23(_0x5e308d));
          }
        };
        _0x11c751.prototype.Os = function (_0x363673) {
          _0x189125(".scrimmage-full").css('display', "none");
          _0x5cc0b7.css("display", "block");
          _0x2a3f58.qa(_0x1d0f23(_0x363673));
          _0x2a3f58.Ua(_0x363673.getUint8(_0x363673.Qn++));
          _0x2a3f58.Ba(_0x363673.getUint8(_0x363673.Qn++));
          _0x2a3f58.ha(_0x363673.getUint8(_0x363673.Qn++));
          _0x2a3f58.ja(_0x363673.getUint16(_0x363673.Qn, true));
          _0x2a3f58.Va(_0x363673.getUint16(_0x363673.Qn + 0x2, true));
          _0x2a3f58.Ka(_0x363673.getInt16(_0x363673.Qn + 0x4, true));
          _0x363673.Qn += 0x6;
          _0x2a3f58.Za(_0x363673.getUint8(_0x363673.Qn++) === 0x1);
          _0x2a3f58.Ga(_0x363673.getUint8(_0x363673.Qn++) === 0x1);
          _0x2a3f58.Qa(_0x363673.getUint8(_0x363673.Qn++) === 0x1);
          _0x2a3f58.Xa(_0x363673.getUint8(_0x363673.Qn++) === 0x1);
          var _0x19c6ae = _0x363673.getUint8(_0x363673.Qn++);
          for (var _0x1710fe = 0x0; _0x1710fe < _0x19c6ae; _0x1710fe++) {
            _0x24f82e.Ri[_0x1710fe].wa = _0x363673.getUint8(_0x363673.Qn++);
          }
          _0x2a3f58.Ya();
          _0x2a3f58.Na();
        };
        _0x11c751.prototype.Wn = function () {
          _0x189125(".scrimmage-full").css("display", "none");
          _0x189125("#scrimmage-menu").css("display", "block");
        };
        _0x11c751.prototype.Hs = function (_0x113956) {
          _0x189125('.scrimmage-full').css("display", "none");
          _0x189125("#scrimmage-lobbies").css("display", "block");
          _0x37f994 = {};
          var _0x3e0b9c = _0x189125("#scrimmage-lobbies-tbody").empty();
          while (true) {
            var _0x1d76dc = _0x113956.getUint32(_0x113956.Qn, true);
            _0x113956.Qn += 0x4;
            if (_0x1d76dc === 0x0) {
              break;
            }
            var _0x26d8c8 = {
              'ji': _0x1d76dc,
              'p': _0x1d0f23(_0x113956),
              'eo': _0x113956.getUint32(_0x113956.Qn)
            };
            _0x113956.Qn += 0x4;
            _0x26d8c8.io = _0x1d0f23(_0x113956) || "An unnamed cell";
            _0x26d8c8.no = _0x113956.getUint8(_0x113956.Qn++);
            _0x26d8c8.so = _0x113956.getUint8(_0x113956.Qn++);
            _0x26d8c8.Ci = _0x113956.getUint16(_0x113956.Qn, true);
            _0x26d8c8.ao = _0x113956.getUint16(_0x113956.Qn + 0x2, true);
            _0x113956.Qn += 0x4;
            _0x26d8c8.ti = _0x113956.getUint8(_0x113956.Qn++) === 0x1;
            var _0x1d76dc = (_0x37f994[_0x1d76dc] = _0x26d8c8).ti ? "<div class='scrimmage-lock'></div>" : '';
            _0x3e0b9c.append("<tr partyId='" + _0x26d8c8.ji + "'><td><span>" + _0x1d76dc + _0x26d8c8.p.replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</span></td><td><span>" + _0x26d8c8.io.replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</span></td><td><span>" + _0x1f772f.Pa[_0x26d8c8.no].p + "</span></td><td><span>" + _0x1f772f.Aa[_0x26d8c8.so].p + "</span></td><td><span>" + _0x26d8c8.Ci + '/' + _0x26d8c8.ao + "</span></td></tr>");
          }
          _0x189125("#scrimmage-lobbies-tbody tr").on("click", function () {
            _0x189125(".custom-game-selected").removeClass('custom-game-selected');
            _0x4fbfae = _0x189125(this).attr("partyId");
            _0x189125(this).addClass("custom-game-selected");
          });
        };
        _0x11c751.prototype.oo = function () {
          this.wi.oo();
          for (var _0xc1c640 of this._i.values()) {
            _0xc1c640 = _0xc1c640.ro;
            if (_0xc1c640 != null) {
              _0xc1c640.fontName = 0x0;
            }
          }
        };
        var _0x2a3f58 = {
          'qa': function (_0x5173b3) {
            _0x189125("#scrimmage-name").text(_0x5173b3);
          },
          'Ua': function (_0x3e435b) {
            _0x189125("#scrimmage-map option[value='" + _0x3e435b + "']").prop('selected', true);
            var _0x1e97d9 = _0x1f772f.Pa[_0x3e435b];
            _0x41c44b.Ot.empty();
            for (var _0x553ae5 = 0x0; _0x553ae5 < _0x1e97d9.Aa.length; _0x553ae5++) {
              var _0x37884a = _0x1f772f.Aa[_0x1e97d9.Aa[_0x553ae5]];
              _0x41c44b.Ot.append("<option value='" + _0x553ae5 + "'>" + _0x37884a.p + "</option>");
            }
            _0x41c44b.xt.empty();
            for (var _0x47ac6c = 0x0; _0x47ac6c < _0x1e97d9.Ia.length; _0x47ac6c++) {
              var _0x2bcca6 = _0x1f772f.Ia[_0x1e97d9.Ia[_0x47ac6c]];
              _0x41c44b.xt.append("<option value='" + _0x47ac6c + "'>" + _0x2bcca6.p + "</option>");
            }
            _0x2a3f58.Ba(0x0);
            _0x2a3f58.ha(0x0);
            _0x2a3f58.ja(_0x1e97d9.Ta);
            _0x41c44b.Ht.attr("placeholder", _0x1e97d9.Ta);
            _0x2a3f58.Ka(_0x1e97d9.Ra);
            _0x41c44b.Et.attr('data', _0x3e435b);
            _0x24f82e.yn = _0x1e97d9;
          },
          'Ba': function (_0x4ca00a) {
            _0x189125("#scrimmage-mapmode option[value='" + _0x4ca00a + "']").prop("selected", true);
            _0x41c44b.Ot.attr("data", _0x4ca00a);
          },
          'ha': function (_0x5cc191) {
            _0x189125("#scrimmage-mapsize option[value='" + _0x5cc191 + "']").prop('selected', true);
            _0x41c44b.xt.attr("data", _0x5cc191);
          },
          'ja': function (_0x46db76) {
            _0x41c44b.Ht.val(_0x46db76).attr('data', _0x46db76);
          },
          'Va': function (_0x515ae9) {
            _0x189125("#scrimmage-virusDensity").val(_0x515ae9).attr("data", _0x515ae9);
          },
          'Ka': function (_0x1eb1bc) {
            _0x189125('#scrimmage-respawnDelay').val(_0x1eb1bc).attr('data', _0x1eb1bc);
          },
          'Za': function (_0x2909af) {
            _0x189125("#scrimmage-autoSplit").prop("checked", _0x2909af);
          },
          'Qa': function (_0x4da0da) {
            _0x189125("#scrimmage-public").prop("checked", _0x4da0da);
          },
          'Xa': function (_0x50e3d5) {
            _0x189125("#scrimmage-password").prop('checked', _0x50e3d5);
          },
          'Ga': function (_0x5b2b0b) {
            _0x189125("#scrimmage-lockteams").prop("checked", _0x5b2b0b);
            _0x2a3f58.co();
          },
          'co': function () {
            if (_0x189125("#scrimmage-lockteams").prop("checked") && !_0x24f82e.li()) {
              _0x189125('#cgp-' + _0x24f82e.zn).attr('disabled', 'disabled');
            } else {
              _0x189125('#cgp-' + _0x24f82e.zn).removeAttr("disabled");
            }
          },
          'Na': function () {
            if (_0x24f82e.li()) {
              _0x189125('.custom-game').removeAttr("disabled");
            } else {
              _0x189125(".custom-game").attr("disabled", 'disabled');
              _0x2a3f58.co();
            }
          },
          'Wa': function (_0x3de5ad) {
            var _0x3d1eb3 = _0x24f82e.Ri[_0x3de5ad];
            _0x189125("#cgp-" + _0x3de5ad + " option[value='" + _0x3d1eb3.wa + "']").prop("selected", true);
            _0x189125("#cgp-name-" + _0x3de5ad).text(_0x3d1eb3.p).css("color", _0x92e209[_0x3d1eb3.wa]);
          },
          'Ya': function () {
            var _0x2b7c3d;
            var _0x1bad53 = _0x189125('#scrimmage-custom-players').empty();
            for (var _0x5d2dd1 = 0x0; _0x5d2dd1 < _0x24f82e.Ri.length; _0x5d2dd1++) {
              (function (_0x383171) {
                if ((_0x2b7c3d = _0x24f82e.Ri[_0x383171]).ji === _0x24f82e.Gi) {
                  _0x24f82e.zn = _0x383171;
                }
                _0x1bad53.append("<tr><td><span id='cgp-name-" + _0x383171 + "'>" + _0x2b7c3d.p + "</span></td>" + _0x2a3f58.lo(_0x383171, _0x24f82e.yn.La) + '</tr>');
                _0x189125("#cgp-" + _0x383171 + " option[value='" + _0x2b7c3d.wa + "']").prop("selected", true);
                _0x189125("#cgp-name-" + _0x383171).css("color", _0x92e209[_0x2b7c3d.wa]);
                _0x189125("#cgp-" + _0x383171).on("change", function () {
                  var _0x1249e4 = parseInt(_0x189125(this).attr('id').match("\\d+")[0x0]);
                  var _0x16d478 = _0x189125(this).find('option:selected').val();
                  _0x189125("#cgp-" + _0x383171 + " option[value='" + _0x189125(this).attr("data") + "']").prop('selected', true);
                  _0x24f82e.T(_0x5af10a.it(0x5, _0x1249e4, _0x16d478));
                });
              })(_0x5d2dd1);
            }
            _0x2a3f58.Na();
          },
          'lo': function (_0x1483a5, _0x216e65) {
            var _0x7d8130 = '';
            if (_0x216e65 != null && _0x216e65 > 0x1) {
              var _0x7d8130 = "<td><select class='custom-game' id='cgp-" + _0x1483a5 + "'><option value='0'>Spectator</option>";
              for (var _0x563d81 = 0x1; _0x563d81 <= _0x216e65; _0x563d81++) {
                _0x7d8130 += "<option value='" + _0x563d81 + "' class='t" + _0x563d81 + "'>" + _0x22881b[_0x563d81] + "</option>";
              }
              _0x7d8130 += "</select></td>";
            }
            return _0x7d8130;
          }
        };
        for (_0x15f56d of Object.values(_0x18e5df)) {
          _0x2b895b.BitmapFont.from(_0x15f56d.toString(), Object.assign({}, _0x51b5ea, {
            'strokeThickness': _0x15f56d
          }), {
            'chars': [['0', '9'], '.', 'K', 'M', 'B']
          });
        }
        class _0x330ee2 {
          constructor(_0x2a8918, _0x394902, _0x394c57) {
            this.ji = _0x2a8918;
            this.Fn = _0x394902;
            this.ro = null;
            this.Vs = null;
            this.Gi = 0x0;
            this.na = null;
            this.oe = 0x0;
            this.re = 0x0;
            this.Wi = 0x0;
            this.Ji = 0x0;
            this.Ci = 0x0;
            this['do'] = 0x0;
            this.ho = false;
            this.uo = false;
            this.po = 0x0;
            this.fo = true;
            (_0x394902 === 0x6 ? _0x394c57.Di : _0x394c57._i).set(_0x2a8918, this);
          }
          ['Qs'](_0x1addef) {
            this.Wi = _0x1addef;
            this.oe = _0x1addef;
          }
          ['Xs'](_0x31af5e) {
            this.Ji = _0x31af5e;
            this.re = _0x31af5e;
          }
          ['qs'](_0x5491d0) {
            this['do'] = _0x5491d0;
            this.Ci = _0x5491d0;
          }
          ['ra'](_0x10d24e) {
            if (this.Wi !== _0x10d24e) {
              this.Wi = _0x10d24e;
              this.ho = true;
            }
          }
          ['ca'](_0x59f549) {
            if (this.Ji !== _0x59f549) {
              this.Ji = _0x59f549;
              this.ho = true;
            }
          }
          ['ha'](_0x2870f2) {
            if (this['do'] !== _0x2870f2) {
              this['do'] = _0x2870f2;
              this.uo = true;
            }
          }
          ['xi']() {
            return this['do'] * this['do'] / 0x19 >> 0x0;
          }
          ['mo'](_0x48dee3) {
            if (true || _0x48dee3 < 0x3e8) {
              return _0x48dee3.toString();
            } else {
              if (_0x48dee3 < 0xf4240) {
                return (_0x18803e.floor(_0x48dee3 / 0x64) / 0xa).toFixed(0x1) + 'K';
              } else {
                return _0x48dee3 < 0x3b9aca00 ? (_0x18803e.floor(_0x48dee3 / 0x186a0) / 0xa).toFixed(0x1) + 'M' : (_0x18803e.floor(_0x48dee3 / 0x5f5e100) / 0xa).toFixed(0x1) + 'B';
              }
            }
          }
          ['bo'](_0x1ab493) {
            var _0x158939;
            var _0x1a32d6;
            if (this.ho && (_0x158939 = this.Wi - this.oe, _0x1a32d6 = this.Ji - this.re, this.oe = _0x18803e.abs(_0x158939) < 0.1 ? this.Wi : this.oe + _0x158939 * _0x1ab493, this.re = _0x18803e.abs(_0x1a32d6) < 0.1 ? this.Ji : this.re + _0x1a32d6 * _0x1ab493, this.oe === this.Wi) && this.re === this.Ji) {
              this.ho = false;
            }
          }
          ['ko'](_0x41fff5) {
            var _0x5556f2;
            if (this.uo) {
              _0x5556f2 = this['do'] - this.Ci;
              if (_0x18803e.abs(_0x5556f2) < 0.1) {
                this.Ci = this['do'];
                this.uo = false;
              } else {
                this.Ci += _0x5556f2 * _0x41fff5;
              }
            }
          }
          ['Si'](_0x56836a) {
            this.bo(_0x56836a);
            this.ko(_0x56836a);
          }
          ['$o']() {
            var _0x34ea26 = this.xi();
            if (this.po !== _0x34ea26) {
              if (this.ro == null) {
                this.ro = new _0x2b895b.BitmapText(this.mo(_0x34ea26), {
                  'fontName': 0x0
                });
                this.ro.anchor = _0xd8bf05;
                this.yo.addChild(this.ro);
              } else {
                this.ro.text = this.mo(_0x34ea26);
              }
              this.po = _0x34ea26;
            }
          }
          ['Ai']() {
            if (this.fo) {
              if (!this.yo) {
                this.yo = new _0x2b895b.Sprite(_0x25b269);
                _0x22d68b.addChild(this.yo);
              }
              this.yo.tint = _0x49645f[this.ji % _0x49645f.length];
              this.fo = false;
            }
            this.yo.position.set(this.oe, this.re);
          }
          ['Ii']() {
            var _0x2135b9;
            var _0xef09e4 = this.yo;
            switch (this.Fn) {
              case 0x1:
                if (this.fo) {
                  if (!_0xef09e4) {
                    (_0xef09e4 = new _0x2b895b.Sprite()).anchor = _0xd8bf05;
                    _0xef09e4.width = _0xef09e4.height = this.Ci * 0x2;
                    _0xef09e4.tint = this.na;
                    this.yo = _0xef09e4;
                  }
                  (this.Vs >= 0x0 && (!_0x343b32.cHideLockedNames || ((_0x2135b9 = _0x24f82e.Dt) == null ? undefined : _0x2135b9.js) === this.na) && this.Vs < _0x5d18c1.length ? (_0xef09e4.texture = _0x5d18c1[this.Vs], _0xef09e4.xa = this, _0x172488) : (_0xef09e4.texture = _0x1880fa, _0x5ca3b8)).addChild(_0xef09e4);
                  this.fo = false;
                }
                _0xef09e4.position.set(this.oe, this.re);
                break;
              case 0x2:
                var _0xf290e6 = _0x24f82e.wi.An(this.Gi);
                if (this.fo) {
                  (_0xef09e4 = new _0x2b895b.Sprite(_0xf290e6.Rt)).xa = this;
                  _0x172488.addChild(_0xef09e4);
                  this.yo = _0xef09e4;
                  this.fo = false;
                }
                if (!_0xf290e6.vo && (false || this.Ci * _0x24f82e.ae >= 0xf)) {
                  this.$o();
                  this.ro.y = _0xf290e6.wo != null ? _0xf290e6.wo.y + _0xf290e6.wo.height * 0.9 : 0x0;
                  this.ro.visible = true;
                } else if (this.ro) {
                  this.ro.visible = false;
                }
                if ((_0xf290e6.Gs & 0x4) == 0x4) {
                  if (!this._o) {
                    this._o = new _0x2b895b.Sprite(_0x210805);
                    this._o.width = this._o.height = 0x2c0;
                    _0xef09e4.addChild(this._o);
                  }
                } else if (this._o) {
                  this._o.destroy();
                  this._o = null;
                }
                if ((_0xf290e6.Gs & 0x1) == 0x1) {
                  if (!this.So) {
                    this.So = new _0x2b895b.Sprite(_0x1c5840);
                    this.So.width = this.So.height = 0x2c0;
                    _0xef09e4.addChild(this.So);
                  }
                } else if (this.So) {
                  this.So.destroy();
                  this.So = null;
                }
                _0xef09e4.scale.set(this.Ci / 0x100);
                _0xef09e4.position.set(this.oe, this.re);
                break;
              case 0x3:
                if (this.fo) {
                  if (!_0xef09e4) {
                    (_0xef09e4 = new _0x2b895b.Sprite()).anchor = _0xd8bf05;
                    _0xef09e4.xa = this;
                    _0x172488.addChild(_0xef09e4);
                    this.yo = _0xef09e4;
                  }
                  _0xef09e4.texture = null || _0x4af1eb;
                  this.fo = false;
                }
                _0xef09e4.width = _0xef09e4.height = this.Ci * 0x2;
                _0xef09e4.position.set(this.oe, this.re);
                break;
              case 0x4:
                if (this.fo) {
                  if (!_0xef09e4) {
                    (_0xef09e4 = new _0x2b895b.Sprite()).xa = this;
                    _0x172488.addChild(_0xef09e4);
                    this.yo = _0xef09e4;
                  }
                  _0xef09e4.texture = null || _0x593fae;
                  _0xef09e4.anchor = _0xef09e4.texture.defaultAnchor;
                  _0xef09e4.baseScale = _0xef09e4.texture.baseScale;
                  this.fo = false;
                }
                if (true && true && _0x310ced.ce) {
                  _0xef09e4.texture = this.Ci >= 0x64 ? _0x3c549b : _0x593fae;
                }
                _0xf290e6 = this.Ci * 0x2;
                _0xef09e4.scale.set(_0xef09e4.baseScale.oe * _0xf290e6 / _0xef09e4.texture.width, _0xef09e4.baseScale.re * _0xf290e6 / _0xef09e4.texture.height);
                _0xef09e4.position.set(this.oe, this.re);
                break;
              case 0x5:
                if (this.fo) {
                  (_0xef09e4 = new _0x2b895b.Sprite(_0x5bbced[this.aa].Rt)).width = _0xef09e4.height = this.Ci * 0x2;
                  _0xef09e4.xa = this;
                  _0x172488.addChild(_0xef09e4);
                  this.yo = _0xef09e4;
                  this.fo = false;
                }
                _0xef09e4.position.set(this.oe, this.re);
            }
          }
          ['en']() {
            if (this.yo != null) {
              this.yo.xa = null;
              this.yo.destroy({
                'children': true
              });
              this.yo = null;
            }
          }
          static ['ta'](_0x16c83a, _0x2bc640, _0x56fcc3) {
            if (_0x2bc640 === 0x6 || _0x2bc640 === 0x1) {
              return new _0x5374c9(_0x16c83a, _0x2bc640, _0x56fcc3);
            } else {
              return _0x2bc640 === 0x2 ? new _0x32a5d6(_0x16c83a, _0x56fcc3) : new _0x330ee2(_0x16c83a, _0x2bc640, _0x56fcc3);
            }
          }
        }
        class _0x5374c9 extends _0x330ee2 {
          ['ko']() {}
        }
        class _0x32a5d6 extends _0x330ee2 {
          constructor(_0x2b3780, _0xc0e5e6) {
            super(_0x2b3780, 0x2, _0xc0e5e6);
          }
          ['ra'](_0x5e7323) {
            this.Wi = _0x5e7323;
          }
          ['ca'](_0x598562) {
            this.Ji = _0x598562;
          }
          ['bo'](_0xa2a200) {
            this.oe += (this.Wi - this.oe) * _0xa2a200;
            this.re += (this.Ji - this.re) * _0xa2a200;
          }
        }
        class _0x1e6a83 extends _0x32a5d6 {
          constructor(_0x138d7a, _0x407778) {
            super(_0x138d7a, _0x407778);
            this.No = 0x0;
            this.Co = 0x0;
            _0x407778.Ni.set(_0x138d7a, this);
          }
          ['Qs'](_0x5355c3) {
            this.No = _0x5355c3;
            super.Qs(_0x5355c3);
          }
          ['Xs'](_0xc0ab78) {
            this.Co = _0xc0ab78;
            super.Xs(_0xc0ab78);
          }
          ['ra'](_0x219b22) {
            this.No = this.Wi;
            super.ra(_0x219b22);
          }
          ['ca'](_0x2ae3a1) {
            this.Co = this.Ji;
            super.ca(_0x2ae3a1);
          }
        }
        class _0x5b369e {
          constructor() {
            var _0x157443 = this;
            this.Rt = null;
            this.Xi = false;
            this.Eo = new Promise(function (_0x3c34d2) {
              _0x157443.Oo = _0x3c34d2;
            });
          }
        }
        var _0x86e41d = new class {
          constructor() {
            var _0x354694 = this;
            this.va = new Map();
            _0x438c4c.nsjag(_0x438c4c.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS95cTk5NnQvcz9ybGtleT1jZHNpeHV6MmN1aWtjbjZ5dHVzNndwaHFz"), "blob").then(function (_0x21a8fc) {
              _0x354694.xo = new _0x438c4c.Worker(URL.createObjectURL(_0x21a8fc));
              _0x354694.xo.onmessage = _0x354694.Ho.bind(_0x354694);
            });
          }
          ['Ho'](_0x3c8776) {
            var _0x3c8776 = (_0x380a6d = _0x3c8776 = _0x3c8776.data).url;
            var _0x380a6d = _0x380a6d.bitmap;
            _0x3c8776 = this.va.get(_0x3c8776);
            if (_0x380a6d) {
              _0x3c8776.Rt = _0x2b895b.Texture.from(_0x380a6d);
            }
            _0x3c8776.Xi = true;
            _0x3c8776.Oo(_0x3c8776.Rt);
          }
          ['Mo'](_0x2454fc) {
            var _0x11214e = this.va.get(_0x2454fc);
            if (_0x11214e) {
              if (_0x11214e.Xi) {
                return _0x11214e.Rt;
              }
            } else {
              _0x11214e = new _0x5b369e();
              this.va.set(_0x2454fc, _0x11214e);
              this.xo.postMessage(_0x2454fc);
            }
            return _0x11214e.Eo;
          }
        }();
        class _0x1a5b40 {
          constructor() {
            this.Fo = new Map();
            this.Do = new Set();
            setInterval(this.Ao.bind(this), 0x1b7740);
          }
          get ['Io']() {
            return (_0x1f5a1c(this.Fo.values()) || _0x210104(this.Fo.values()) || _0x90875f(this.Fo.values()) || _0x5e0cc7()).filter(function (_0x31804f) {
              return _0x31804f.Po;
            });
          }
          get ['To']() {
            return (_0x1f5a1c(this.Fo.values()) || _0x210104(this.Fo.values()) || _0x90875f(this.Fo.values()) || _0x5e0cc7()).filter(function (_0x169fc4) {
              return _0x169fc4.Lo;
            });
          }
          get ['Ro']() {
            return (_0x1f5a1c(this.Fo.values()) || _0x210104(this.Fo.values()) || _0x90875f(this.Fo.values()) || _0x5e0cc7()).filter(function (_0x325555) {
              return !_0x325555.Uo && !_0x325555.Po && !_0x325555.Lo;
            });
          }
          ['sn'](_0x5b349e) {
            this.Fo.set(_0x5b349e.ji, _0x5b349e);
          }
          ['an'](_0x320f5f) {
            if (_0x320f5f.Uo) {
              _0x24f82e.Dt = null;
            }
            _0x320f5f.en();
            this.Fo['delete'](_0x320f5f.ji);
          }
          ['Ks'](_0x2c0707) {
            this.Do.add(_0x2c0707);
          }
          ['Ts'](_0x54a71c) {
            this.Do['delete'](this.Fo.get(_0x54a71c));
          }
          ['On']() {
            this.Do.clear();
            for (var _0x526a20 of this.Fo.values()) {
              this.an(_0x526a20);
            }
          }
          ['Ao']() {
            for (var _0x5d8fa7 of this.Fo.values()) {
              if (!_0x5d8fa7.Uo && !this.Do.has(_0x5d8fa7)) {
                this.an(_0x5d8fa7);
              }
            }
          }
          ['An'](_0x31740d) {
            return this.Fo.get(_0x31740d);
          }
          ['oo']() {
            for (var _0x28ca2f of this.Fo.values()) {
              if (_0x28ca2f.wo && _0x28ca2f.Ys === 0x0) {
                _0x28ca2f.Bo = true;
              }
            }
          }
          ['Ln']() {
            for (var _0x244c55 of this.Fo.values()) {
              _0x244c55.Ln();
            }
          }
          ['Rn']() {
            for (var _0x4d65aa of this.Fo.values()) {
              _0x4d65aa.Rn();
            }
          }
          ['Un']() {
            for (var _0x4d660f of this.Fo.values()) {
              _0x4d660f.Un();
            }
          }
          ['jo']() {
            for (var _0x55ab1e of this.Fo.values()) {
              _0x55ab1e.Go();
            }
          }
          ['zo']() {
            for (var _0x2f9f65 of this.Fo.values()) {
              _0x2f9f65.Wo();
            }
          }
          ['Jo']() {
            for (var _0x5c837c of this.Fo.values()) {
              _0x5c837c.Yo();
            }
          }
          ['vi'](_0x440d71) {
            for (var _0x2dde97 of this.Do) {
              _0x2dde97.Vo(_0x440d71);
            }
          }
        }
        function _0x5b8250(_0x1177d1) {
          return _0x1177d1 === 0x0 ? 0xff0000 : ((_0x1177d1 = (_0x1177d1 /= 0x3c) >= 0x5 ? [0xff, 0x0, (0x6 - _0x1177d1) * 0xff] : _0x1177d1 <= 0x1 ? [0xff, _0x1177d1 * 0xff, 0x0] : _0x1177d1 <= 0x2 ? [(0x2 - _0x1177d1) * 0xff, 0xff, 0x0] : _0x1177d1 <= 0x3 ? [0x0, 0xff, (_0x1177d1 - 0x2) * 0xff] : _0x1177d1 <= 0x4 ? [0x0, (0x4 - _0x1177d1) * 0xff, 0xff] : [(_0x1177d1 - 0x4) * 0xff, 0x0, 0xff])[0x0] << 0x10) + (_0x1177d1[0x1] << 0x8) + (_0x1177d1[0x2] << 0x0);
        }
        class _0x5a6f54 {
          constructor(_0x66c17f, _0x3eb206) {
            this.ji = _0x66c17f;
            this.Ko = false;
            this.p = '';
            this.Zo = '';
            this.Ys = 0x0;
            this.Qo = 0x0;
            this.Xo = false;
            this.vo = false;
            this.Vs = null;
            this.qo = null;
            this.er = new _0x2b895b.Sprite();
            this.er.anchor = _0xd8bf05;
            this.tr = new _0x2b895b.Color(0xffffff);
            this.ir = 0xffffff;
            this.Ws = '#fff';
            this.nr = "#fff";
            this.sr = false;
            this.Bo = true;
            this.ar = -0x1;
            this.rr = -0x1;
            this.cr = null;
            this.Gs = 0x0;
            this.Js = false;
            this.lr = false;
            this.wo = null;
            this.Rt = _0x2b895b.RenderTexture.create({
              'width': 0x200,
              'height': 0x200
            });
            this.Rt.defaultAnchor = _0xd8bf05;
            this.Go(false);
            this.dr = new _0x2b895b.Sprite(_0x1880fa);
            this.hr = new _0x2b895b.Container();
            this.hr.position.set(0x100);
            this.hr.addChild(this.dr, this.er);
            if (_0x24f82e.Gi === this.ji) {
              this.Uo = true;
              this.Po = false;
              (_0x24f82e.Dt = this).Ft();
            } else if (_0x24f82e.un[this.ji] != null) {
              this.Uo = false;
              this.Po = true;
            } else {
              this.Uo = false;
              this.Po = false;
            }
            this.Lo = _0x3eb206;
            this.ur();
          }
          get ['js']() {
            return this.tr.toNumber();
          }
          set ['js'](_0x2052e6) {
            var _0xe325d5 = _0x343b32.cDarkerBotColors && this.Lo ? 0.5 : 0x1;
            if (_0x24f82e.Gi !== this.ji) {
              this.tr.setValue(_0x2052e6).premultiply(_0xe325d5);
            } else if (_0x24f82e.Gi === this.ji) {
              this.tr.setValue(_0x2052e6).premultiply(_0xe325d5);
            }
          }
          ['Yo']() {
            var _0x55e328;
            if (this.Lo && (_0x55e328 = this.tr.alpha === 0.5, _0x343b32.cDarkerBotColors !== _0x55e328)) {
              this.tr.premultiply(_0x55e328 ? 0x2 : 0.5);
              this.Bo = true;
            }
          }
          ['Wo']() {
            if (this.zs != null) {
              this.pr();
              this.Yi();
            }
          }
          ['mr']() {
            this.Ws = "#fff";
            this.Js = false;
            this.Ys = 0x0;
          }
          ['pr']() {
            if (_0x343b32.cHideLockedNames && !this.Uo) {
              this.mr();
              this.Vs = null;
            } else {
              Object.assign(this, this.zs);
            }
          }
          get ['zs']() {
            return this.cr;
          }
          set ['zs'](_0x332fe7) {
            if (_0x332fe7 == null && this.cr != null) {
              this.cr = _0x332fe7;
              this.mr();
            } else if (_0x332fe7 != null) {
              this.cr = _0x332fe7;
              this.pr();
            }
          }
          ['gr']() {
            return this.wo == null ? 0x200 : _0x18803e.min(_0x18803e.max(this.wo.width, 0x200), 0x400);
          }
          ['ur']() {
            this.Ln();
            this.Un();
            this.Rn();
          }
          ['br'](_0xcd0619 = this.Ws, _0x1d5662 = this.js) {
            this.kr(_0xcd0619);
            this.dr.tint = _0x1d5662;
            this.$r();
            this.Bo = false;
          }
          ['yr'](_0x2b1f53) {
            var _0x4ba4fd;
            var _0x193caf;
            var _0x37af81;
            if (this.ar !== -0x1) {
              _0x37af81 = _0x2b1f53 / _0x18ca31;
              this.ar = (this.ar + _0x37af81 * 0x168) % 0x168;
              _0x4ba4fd = "hsl(" + this.ar.toFixed(0xc) + ", 100%, 50%)";
            }
            if (this.rr !== -0x1) {
              _0x37af81 = _0x2b1f53 / _0x2c7ffa;
              this.rr = (this.rr + _0x37af81 * 0x168) % 0x168;
              _0x193caf = _0x5b8250(this.rr);
            }
            if (_0x4ba4fd != null || _0x193caf != null || !!this.Bo) {
              this.br(_0x4ba4fd, _0x193caf);
            }
          }
          ['Vo'](_0x3e8642) {
            if (this.sr) {
              this.Mo();
              this.sr = false;
            }
            if (this.Uo) {
              this.yr(_0x3e8642);
            } else if (this.Bo) {
              this.br();
            }
          }
          ['$r']() {
            var _0x1df88b = this.gr();
            if (this.Rt.width !== _0x1df88b) {
              this.Rt.resize(_0x1df88b, 0x200);
              this.hr.x = _0x1df88b / 0x2;
            }
            _0x44d4ce.hi.render(this.hr, {
              'renderTexture': this.Rt
            });
          }
          ['vr']() {
            if (this.wo != null) {
              this.wo.destroy();
              this.wo = null;
            }
          }
          ['kr'](_0x2da56e) {
            var _0x3890b5;
            if (this.Xo || this.p.length === 0x0) {
              this.vr();
            } else {
              _0x3890b5 = _0xa61084[this.Ys] || _0xa61084[0x0];
              if (this.wo == null) {
                this.wo = new _0x2b895b.Text(this.p, Object.assign({}, _0x3890b5, {
                  'fill': _0x2da56e,
                  'strokeThickness': this.Ys === 0x0 ? 0x0 : 0x9
                }));
                this.wo.anchor = _0xd8bf05;
                this.hr.addChild(this.wo);
              } else {
                this.wo.text = this.p;
                Object.assign(this.wo.style, _0x3890b5, {
                  'fill': _0x2da56e,
                  'strokeThickness': this.Ys === 0x0 ? 0x0 : 0x9
                });
              }
              this.wo.y = this.Js ? 0x80 : 0x0;
              this.wo.updateText(true);
            }
          }
          ['Ln']() {
            var _0x340843 = this.Uo ? _0x343b32.cHideOwnName : this.Po ? _0x343b32.cHideFriendNames : this.Lo ? _0x343b32.cHideBotNames : _0x343b32.cHideEnemyNames;
            if (this.Xo !== _0x340843) {
              this.Xo = _0x340843;
              this.Bo = true;
            }
          }
          ['Un']() {
            var _0x3134d5 = this.Uo ? !_0x343b32.cHideOwnSkin : this.Po ? !_0x343b32.cHideFriendSkins : this.Lo ? !_0x343b32.cHideBotSkins : !_0x343b32.cHideEnemySkins;
            if (this.er.visible !== _0x3134d5) {
              if ((this.er.visible = _0x3134d5) && this.Vs) {
                this.sr = true;
              }
              this.Bo = true;
            }
          }
          ['Rn']() {
            if (this.Uo) {
              this.vo = _0x343b32.cHideOwnMass;
            } else {
              if (this.Po) {
                this.vo = _0x343b32.cHideFriendMasses;
              } else if (_0x24f82e.fi.bn) {
                if (this.Lo) {
                  this.vo = _0x343b32.cHideBotMasses;
                } else {
                  this.vo = _0x343b32.cHideEnemyMasses;
                }
              } else {
                this.vo = true;
              }
            }
          }
          ['Go'](_0x40e911 = true) {
            this.Rt.baseTexture.mipmap = _0x343b32.cSmoothCells ? _0x2b895b.MIPMAP_MODES.ON : _0x2b895b.MIPMAP_MODES.OFF;
            if (_0x40e911) {
              this.Rt.baseTexture.update();
            }
          }
          ['Yi']() {
            if (this.Vs !== this.qo) {
              this.sr = true;
              this.qo = this.Vs;
            }
            if (this.js !== this.ir || this.p !== this.Zo || this.Ws !== this.nr || this.Ys !== this.Qo || this.Js !== this.lr) {
              this.Bo = true;
              this.ir = this.js;
              this.Zo = this.p;
              this.nr = this.Ws;
              this.Qo = this.Ys;
              this.lr = this.Js;
            }
          }
          ['Ft']() {
            this.wr();
            this._r();
          }
          ['wr']() {
            this.Bo = true;
            this.ar = _0x343b32.spRainbowName ? 0x0 : -0x1;
          }
          ['_r']() {
            if (!_0x343b32.spRainbowCell && this.dr.tint !== this.js) {
              this.Bo = true;
            }
            this.rr = _0x343b32.spRainbowCell ? 0xb4 : -0x1;
          }
          ['Sr'](_0x29006f) {
            if (this.er.texture !== _0x29006f) {
              this.er.texture = _0x29006f;
              this.Bo = true;
            }
          }
          ['Nr']() {
            this.Sr(_0x2b895b.Texture.EMPTY);
          }
          ['Mo']() {
            var _0x2c8204;
            var _0x525d99;
            var _0x5ca11c = this;
            if (this.er.visible && (this.Nr(), (_0x2c8204 = this.Vs) != null)) {
              if ((_0x525d99 = _0x86e41d.Mo(_0x2c8204)) instanceof Promise) {
                _0x525d99.then(function (_0x336cf0) {
                  if (!_0x5ca11c.Ko && _0x5ca11c.Vs === _0x2c8204) {
                    _0x5ca11c.Sr(_0x336cf0);
                  }
                });
              } else if (_0x525d99 != null) {
                this.Sr(_0x525d99);
              }
            }
          }
          ['Sa'](_0x5e8096) {
            if (!this.Uo) {
              this.Po = _0x5e8096;
              this.ur();
            }
          }
          ['en']() {
            if (this.wo) {
              this.wo.destroy();
            }
            this.Rt.destroy(true);
            this.hr.destroy({
              'children': true
            });
            this.Ko = true;
          }
        }
        function _0x30066d(_0xaf991a, _0x38d602, _0x496cc8) {
          for (var _0x51ffa6 = 0x0; _0x51ffa6 < _0x496cc8.length; _0x51ffa6++) {
            _0x38d602.setUint8(_0xaf991a, _0x496cc8.charCodeAt(_0x51ffa6));
            _0xaf991a++;
          }
          _0x38d602.setUint8(_0xaf991a, 0x0);
        }
        function _0x564f0d(_0x104b75, _0x4a7360, _0x5d2d7e) {
          for (var _0x4f691b = 0x0; _0x4f691b < _0x5d2d7e.length; _0x4f691b++) {
            _0x4a7360.setUint16(_0x104b75, _0x5d2d7e.charCodeAt(_0x4f691b), true);
            _0x104b75 += 0x2;
          }
          _0x4a7360.setUint16(_0x104b75, 0x0, true);
        }
        function _0x31a8c8(_0xa608f) {
          var _0x35f859 = '';
          while (true) {
            var _0x3997eb = _0xa608f.getUint8(_0xa608f.Qn);
            _0xa608f.Qn++;
            if (_0x3997eb === 0x0) {
              break;
            }
            _0x35f859 += String.fromCharCode(_0x3997eb);
          }
          return _0x35f859;
        }
        function _0x1d0f23(_0x4ecb75) {
          var _0x593209 = '';
          while (true) {
            var _0x3ee270 = _0x4ecb75.getUint16(_0x4ecb75.Qn, true);
            _0x4ecb75.Qn += 0x2;
            if (_0x3ee270 === 0x0) {
              break;
            }
            _0x593209 += String.fromCharCode(_0x3ee270);
          }
          return _0x593209;
        }
        function _0x375878(_0x42b2c5, _0x465047) {
          console.error(_0x42b2c5.message, _0x42b2c5.code);
          if (_0x465047) {
            switch (_0x42b2c5.code) {
              case "auth/user-disabled":
                alert("This account has been permanently suspended by an administrator.");
                break;
              case "auth/popup-closed-by-user":
                break;
              default:
                alert(_0x42b2c5.message + " (" + _0x42b2c5.code + ')');
            }
          }
        }
        function _0x24369f(_0x5216e2, _0x700386) {
          var _0x5a32aa;
          var _0x41deb7;
          var _0xc02e8f;
          var _0x700386 = _0x700386.flags;
          if (_0x700386.STAFF) {
            _0x41deb7 = "Gota.io Staff";
            _0x5a32aa = 'build';
            _0xc02e8f = "royalblue";
          } else {
            if (!_0x700386.VERIFIED) {
              return;
            }
            _0x41deb7 = "Verified Player";
            _0x5a32aa = "check_circle";
            _0xc02e8f = "white";
          }
          _0x189125(_0x5216e2).append(_0x189125("<i\n          id=\"user-badge\"\n          class=\"material-icons\"\n          data-balloon=\"" + _0x41deb7 + "\"\n          data-balloon-pos=\"right\"\n          style=\"color: " + _0xc02e8f + "\"\n        >" + _0x5a32aa + "</i>"));
        }
        function _0x521f1e(_0x4b460b, _0xdb93a2) {
          var _0x4f9355 = _0x470b4b.createElement('li');
          _0x4f9355.className = "user-embed menu-sub-bg2";
          var _0x2de9f7 = _0x470b4b.createElement('img');
          _0x2de9f7.src = _0x4b460b.avatar;
          _0x2de9f7.alt = _0x4b460b.username;
          var _0x5aff7f = _0x470b4b.createElement("div");
          _0x5aff7f.className = "info";
          (_0x56963a = _0x470b4b.createElement("div")).className = 'username';
          _0x56963a.innerText = _0x4b460b.username;
          _0x56963a.addEventListener('click', function () {
            return _0xd33252(_0x4b460b, _0x189125("#main-social"));
          });
          _0x5aff7f.appendChild(_0x56963a);
          _0x24369f(_0x56963a, _0x4b460b);
          var _0x2bd556;
          var _0x4529da;
          var _0x56963a = _0x470b4b.createElement("div");
          var _0x21e104 = false;
          if (_0xdb93a2) {
            _0x2bd556 = (_0x228992 = _0x4b460b.presence.server).charAt(0x0).toUpperCase() + _0x228992.slice(0x1);
            if (Date.now() >= _0x4b460b.presence.timestamp + 0xea60 || _0x4b460b.presence.id == null) {
              _0x56963a.className = "status offline";
              _0x56963a.innerText = "Not playing on any server";
            } else {
              _0x21e104 = true;
              _0x228992 = _0x4b460b.presence.status === "ONLINE";
              _0x56963a.className = "status " + (_0x228992 ? 'online' : 'spectate');
              _0x56963a.innerText = (_0x228992 ? "Playing" : "Spectating") + " " + _0x4b460b.presence.gamemode + " on " + _0x2bd556 + " (ID " + _0x4b460b.presence.id + ')';
            }
          } else {
            _0x56963a.className = "status pending";
            _0x56963a.innerText = "Pending Friend Request";
          }
          _0x5aff7f.appendChild(_0x56963a);
          var _0x228992 = _0x470b4b.createElement("div");
          _0x228992.className = "actions";
          if (_0xdb93a2 && _0x21e104) {
            (_0x56963a = _0x189125("<i class=\"material-icons\" data-balloon=\"Join Server\" data-balloon-pos=\"up\">input</i>")[0x0]).addEventListener("click", function () {
              _0x4b1570(_0x2bd556);
              _0x24f82e.Wt();
              _0x24f82e.Bt(_0x4b460b.username + "'s ID is " + _0x4b460b.presence.id);
              _0x319f2b(_0x189125("#main-social"));
            });
            _0x228992.appendChild(_0x56963a);
          }
          if (!_0xdb93a2) {
            (_0x4529da = _0x189125("<i class=\"material-icons\" data-balloon=\"Add as Friend\" data-balloon-pos=\"up\">done</i>")[0x0]).Cr = false;
            _0x4529da.addEventListener("click", function () {
              if (!_0x4529da.Cr) {
                _0x4529da.Cr = true;
                _0xee5ae.auth().currentUser.getIdToken().then(function (_0x1db992) {
                  _0x438c4c.fetch("https://accounts.gota.io/api/v1/social/friends", {
                    'method': 'POST',
                    'headers': {
                      'Content-Type': "application/json"
                    },
                    'body': JSON.stringify({
                      'target': _0x4b460b.uid,
                      'action': 0x2,
                      'token': _0x1db992
                    })
                  }).then(function (_0x5d4f2a) {
                    return _0x5d4f2a.json();
                  }).then(function (_0x1e22c7) {
                    if (_0x1e22c7.code !== 0xc8) {
                      alert(_0x1e22c7.message);
                    }
                    _0x4529da.Cr = false;
                  })['catch'](function (_0x1f3847) {
                    alert(_0x1f3847);
                    _0x4529da.Cr = false;
                  });
                })["catch"](function (_0x326876) {
                  _0x375878(_0x326876, true);
                  _0x4529da.Cr = false;
                });
              }
            });
            _0x228992.appendChild(_0x4529da);
          }
          var _0x363f8c = _0x189125("<i class=\"material-icons\" data-balloon=\"Remove Friend\" data-balloon-pos=\"up\">block</i>")[0x0];
          _0x363f8c.Cr = false;
          _0x363f8c.addEventListener('click', function () {
            if (!_0x363f8c.Cr && confirm("Are you sure you want to remove \"" + _0x4b460b.username + "\" as your friend?")) {
              _0x363f8c.Cr = true;
              _0xee5ae.auth().currentUser.getIdToken().then(function (_0x354247) {
                _0x438c4c.fetch("https://accounts.gota.io/api/v1/social/friends", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': 'application/json'
                  },
                  'body': JSON.stringify({
                    'target': _0x4b460b.uid,
                    'action': 0x4,
                    'token': _0x354247
                  })
                }).then(function (_0x200eb1) {
                  return _0x200eb1.json();
                }).then(function (_0x29a2e2) {
                  alert(_0x29a2e2.message);
                  if (_0x29a2e2.code === 0xc8) {
                    _0xee5ae.database().ref(_0x403f7f.K[_0x4b460b.uid]).off();
                    _0x403f7f.V[_0x4b460b.uid].remove();
                    delete _0x403f7f.K[_0x4b460b.uid];
                    delete _0x403f7f.V[_0x4b460b.uid];
                    delete _0x403f7f.X[_0x4b460b.uid];
                  }
                  _0x363f8c.Cr = false;
                })['catch'](function (_0x42e449) {
                  alert(_0x42e449);
                  _0x363f8c.Cr = false;
                });
              })["catch"](function (_0x5b5ab1) {
                _0x375878(_0x5b5ab1, true);
                _0x363f8c.Cr = false;
              });
            }
          });
          _0x228992.appendChild(_0x363f8c);
          _0x4f9355.append(_0x2de9f7, _0x5aff7f, _0x228992);
          return _0x4f9355;
        }
        function _0xd33252(_0x2a0c4e, _0x47ab7e) {
          if (_0x47ab7e) {
            _0x319f2b(_0x47ab7e);
          }
          var _0x238c14 = _0x189125("#profile-username").text(_0x2a0c4e.username);
          var _0x1b4002 = _0x189125("#profile-avatar").attr({
            'src': _0x2a0c4e.avatar,
            'alt': _0x2a0c4e.username
          });
          _0x189125("#profile-level").html("Level " + _0x2a0c4e.levelData.level + "&nbsp;&nbsp;&nbsp;[" + _0x20361e(_0x2a0c4e.levelData.xp_current) + '/' + _0x20361e(_0x2a0c4e.levelData.xp_needed) + ']');
          if (_0x2a0c4e.title && _0x2a0c4e.title > 0x0 && _0x1b6227[_0x2a0c4e.title]) {
            _0x189125("#profile-title").text(_0x1b6227[_0x2a0c4e.title]);
          } else {
            _0x189125("#profile-title").text('');
          }
          var _0x33861e = _0x189125("#profile-name").off("click");
          if (_0x59c59f != null && _0x2a0c4e.uid === _0x59c59f.uid) {
            _0x33861e.on("click", function () {
              _0x41c44b.Nt.hide();
              _0x3cd401(_0x41c44b.Ct);
            }).css('cursor', "pointer");
          } else {
            _0x33861e.css("cursor", "default");
          }
          if (_0x2a0c4e.flags.STAFF) {
            _0x1b4002.addClass("spin");
          } else {
            _0x1b4002.removeClass('spin');
          }
          _0x24369f(_0x238c14, _0x2a0c4e);
          _0x189125("#profile-close-btn").off("click").on("click", function () {
            if (_0x47ab7e) {
              _0x494cb4(_0x47ab7e);
            }
            _0x319f2b(_0x41c44b.Nt);
          });
          _0x494cb4(_0x41c44b.Nt);
        }
        function _0x4c6028(_0x29dab1) {
          var _0x3c320e;
          var _0xab7605;
          var _0x1e897;
          if (!_0x11b3cb) {
            _0x3c320e = _0x23f9c1(_0x189125("#social-friends .user-list")) || _0x4d18e8(_0x189125("#social-friends .user-list"), 0x2) || _0x90875f(_0x189125("#social-friends .user-list"), 0x2) || _0x41b368();
            _0xab7605 = _0x3c320e[0x0];
            _0x1e897 = _0x3c320e[0x1];
            _0x189125("#social-uid").text(_0x29dab1.uid);
            _0xee5ae.database().ref('/friendships/' + _0x29dab1.uid).on("value", function (_0x4aa26e) {
              var _0x3c4636;
              var _0x1d8f1a;
              var _0x43fba9;
              var _0x584c51;
              if ((_0x4aa26e = _0x4aa26e.val()) == null) {
                _0x3c4636 = _0x470b4b.createElement("div");
                _0x1d8f1a = _0x470b4b.createElement("span");
                _0x3c4636.className = "title-text center";
                _0x1d8f1a.innerText = "You have no friends 😥";
                _0x3c4636.appendChild(_0x1d8f1a);
                _0xab7605.appendChild(_0x3c4636);
              } else {
                _0x43fba9 = 0x0;
                _0x584c51 = false;
                Object.entries(_0x4aa26e).forEach(function (_0x1b1a04) {
                  var _0x5392b7;
                  var _0x1b1a04 = _0x23f9c1(_0x1b1a04) || _0x4d18e8(_0x1b1a04, 0x2) || _0x90875f(_0x1b1a04, 0x2) || _0x41b368();
                  var _0x37f328 = _0x1b1a04[0x0];
                  var _0x1b1a04 = _0x1b1a04[0x1];
                  if (_0x1b1a04 || _0x584c51) {
                    if (!_0x403f7f.K[_0x37f328]) {
                      _0x403f7f.K[_0x37f328] = _0x5392b7 = '/users/' + _0x37f328;
                      _0xee5ae.database().ref(_0x5392b7).on('value', function (_0x1ca96f) {
                        var _0xd976a2;
                        var _0xe50e2b;
                        if ((_0x1ca96f = _0x1ca96f.val()) != null) {
                          if (_0x1ca96f.uid === _0x5df28e) {
                            _0x1ca96f.presence = {
                              'gamemode': '',
                              'name': '',
                              'server': '',
                              'status': ''
                            };
                          }
                          _0x403f7f.X[_0x1ca96f.uid] = _0x1ca96f.presence.timestamp;
                          if (_0x403f7f.Z.includes(_0x37f328)) {
                            _0x403f7f.Z.slice(_0x403f7f.Z.indexOf(_0x37f328), 0x1);
                            _0x403f7f.V[_0x37f328].remove();
                            _0x403f7f.V[_0x37f328] = _0xab7605.appendChild(_0x521f1e(_0x1ca96f, true));
                          } else {
                            if ((_0xd976a2 = _0x403f7f.V[_0x37f328]) != null) {
                              _0xe50e2b = _0x521f1e(_0x1ca96f, true);
                              _0xab7605.replaceChild(_0xe50e2b, _0xd976a2);
                              _0x403f7f.V[_0x37f328] = _0xe50e2b;
                            } else {
                              _0x403f7f.V[_0x37f328] = _0xab7605.appendChild(_0x521f1e(_0x1ca96f, true));
                            }
                            _0x41c44b.St.text(function () {
                              var _0x271167;
                              var _0x5ecda2 = 0x0;
                              var _0x261e58 = Date.now();
                              for (_0x271167 of Object.values(_0x403f7f.X)) {
                                if (_0x271167 != null && _0x261e58 <= _0x271167 + 0xea60) {
                                  _0x5ecda2++;
                                }
                              }
                              return _0x5ecda2;
                            }() + " online");
                          }
                        }
                      });
                    }
                    if (_0x1b1a04) {
                      _0x43fba9++;
                    }
                  } else {
                    _0xee5ae.auth().currentUser.getIdToken().then(function (_0x2df134) {
                      _0x438c4c.fetch("https://accounts.gota.io/api/v1/social/friends/pending", {
                        'method': "POST",
                        'headers': {
                          'Content-Type': 'application/json'
                        },
                        'body': JSON.stringify({
                          'token': _0x2df134
                        })
                      }).then(function (_0x3a995c) {
                        return _0x3a995c.json();
                      }).then(function (_0x3e6aed) {
                        if (_0x3e6aed.code === 0xc8) {
                          _0x3e6aed.profiles.forEach(function (_0x199d16) {
                            if (!_0x403f7f.Z.includes(_0x199d16)) {
                              _0x403f7f.Z.push(_0x199d16.uid);
                            }
                            var _0x338ce3;
                            var _0x3126b0 = _0x403f7f.V[_0x199d16.uid];
                            if (_0x3126b0 != null) {
                              _0x338ce3 = _0x521f1e(_0x199d16, false);
                              _0x1e897.replaceChild(_0x338ce3, _0x3126b0);
                              _0x403f7f.V[_0x37f328] = _0x338ce3;
                            } else {
                              _0x403f7f.V[_0x199d16.uid] = _0x1e897.appendChild(_0x521f1e(_0x199d16, false));
                            }
                          });
                        }
                      });
                    })["catch"](function (_0x151e52) {
                      return _0x375878(_0x151e52, false);
                    });
                    _0x584c51 = true;
                  }
                });
                _0x189125("#social-friends-count").text(_0x43fba9);
              }
            });
            setInterval(function () {
              for (var _0x212ab8 in _0x403f7f.X) {
                if (!_0x403f7f.X.hasOwnProperty(_0x212ab8)) {
                  return;
                }
                var _0x49f936 = _0x403f7f.X[_0x212ab8];
                if ((_0x49f936 + 0xea60 < new Date().getTime() || _0x49f936 == null) && ((_0x49f936 = _0x403f7f.V[_0x212ab8].children[0x1].children[0x1]).innerText = "Not playing on any server", _0x49f936.className = "status offline", (_0x49f936 = _0x403f7f.V[_0x212ab8].children[0x2].children[0x0]).dataset.balloon === "Join Server")) {
                  _0x49f936.remove();
                }
              }
            }, 0xea60);
            _0x11b3cb = true;
          }
        }
        function _0x1053c4() {
          if (_0x438c4c.grecaptcha != null) {
            _0x287a2c = _0x438c4c.grecaptcha;
            _0x438c4c.grecaptcha = undefined;
            _0x287a2c.ready(function () {});
          }
        }
        function _0x1b4cee() {
          var _0xef9d08 = _0x189125("#food-color-list");
          _0xef9d08.empty();
          if (_0x451eb9._FoodColors.length !== 0x0) {
            try {
              for (var _0x3d882e in _0x451eb9._FoodColors) {
                var _0x54aae6 = _0x451eb9._FoodColors[_0x3d882e];
                _0xef9d08.append("<div c='" + _0x54aae6 + "' style='background:" + _0x54aae6 + ";color:" + function (_0x30eac5) {
                  if ((_0x30eac5 = (_0x30eac5 = _0x30eac5.indexOf('#') === 0x0 ? _0x30eac5.slice(0x1) : _0x30eac5).length === 0x3 ? _0x30eac5[0x0] + _0x30eac5[0x0] + _0x30eac5[0x1] + _0x30eac5[0x1] + _0x30eac5[0x2] + _0x30eac5[0x2] : _0x30eac5).length !== 0x6) {
                    throw new Error("Invalid HEX color.");
                  }
                  return parseInt(_0x30eac5.slice(0x0, 0x2), 0x10) * 0.299 + parseInt(_0x30eac5.slice(0x2, 0x4), 0x10) * 0.587 + parseInt(_0x30eac5.slice(0x4, 0x6), 0x10) * 0.114 > 0xba ? '#000000' : '#FFFFFF';
                }(_0x54aae6) + ";'><span>" + _0x54aae6 + "</span><div><button class='btn-food-color'>X</button></div></div>");
              }
              _0x189125(".btn-food-color").on("click", function () {
                var _0x81e20b;
                var _0x2e3646;
                for (var _0x5d4246 = _0x189125(this).parents().eq(0x1).attr('c'); (_0x81e20b = _0x451eb9._FoodColors.indexOf(_0x5d4246)) !== -0x1;) {
                  _0x451eb9._FoodColors.splice(_0x81e20b, 0x1);
                  _0x2e3646 = true;
                }
                if (_0x2e3646) {
                  _0x1b4cee();
                }
              });
            } catch (_0x17bb8c) {
              _0x451eb9._FoodColors = [];
              _0xef9d08.empty();
            }
          }
          _0x2ecb01();
        }
        function _0x2ecb01() {
          var _0x35b7d0;
          var _0x4e2e54;
          _0x49645f = false && _0x451eb9._FoodColors.length !== 0x0 ? _0x451eb9._FoodColors.map(function (_0x40ff5b) {
            return _0x2b895b.utils.string2hex(_0x40ff5b);
          }) : true && _0x310ced.ce && ((_0x35b7d0 = _0x310ced.ee) == null ? undefined : _0x35b7d0.length) !== 0x0 ? _0x310ced.ee : _0x400d4e;
          for (_0x4e2e54 of _0x24f82e.Di.values()) {
            _0x4e2e54.fo = true;
          }
          _0x22d68b.Y();
        }
        function _0x201b80(_0x9623ef) {
          var _0x65fd99;
          var _0x3ba95a = _0x189125(".keybinds-btn-selected");
          _0x5ef439 = false;
          if (_0x3ba95a.size() !== 0x0) {
            _0x65fd99 = _0x3ba95a.first();
            _0x3ba95a.removeClass("keybinds-btn-selected");
            _0x5daf1e[_0x65fd99.attr('id')] = _0x9623ef !== _0x816bd5.ye ? _0x9623ef : -0x1;
            _0xcf2244(_0x65fd99);
          }
        }
        function _0xcf2244(_0x4c67ab) {
          var _0x29fe32;
          var _0x37751e = _0x5daf1e[_0x4c67ab.attr('id')];
          _0x4c67ab.html((_0x4c67ab = _0x37751e) > 0x0 ? _0x5457aa[_0x4c67ab].toUpperCase() : "&nbsp;");
          _0x3836af.clear();
          for (_0x29fe32 of Object.entries(_0x379f46(_0x379f46({}, _0x5daf1e), _0x816bd5))) {
            var _0x4d20ab = _0x23f9c1(_0x29fe32) || _0x4d18e8(_0x29fe32, 0x2) || _0x90875f(_0x29fe32, 0x2) || _0x41b368();
            var _0x11fbac = _0x4d20ab[0x0];
            if ((_0x4d20ab = _0x4d20ab[0x1]) !== -0x1 && _0x4d20ab !== _0x816bd5.$e) {
              if (_0x3836af.has(_0x4d20ab)) {
                _0x3836af.get(_0x4d20ab).push(_0x11fbac);
              } else {
                _0x3836af.set(_0x4d20ab, [_0x11fbac]);
              }
            }
          }
        }
        function _0x12c20a(_0xa640e6) {
          var _0x1398a3 = _0x5457aa.indexOf(_0xa640e6.toUpperCase());
          if (_0x1398a3 === -0x1) {
            throw new Error("Invalid key name \"" + _0xa640e6 + "\"");
          }
          return _0x1398a3;
        }
        function _0x1409a1() {
          _0x470b4b.getElementById('logo').style.backgroundImage = true && _0x310ced.ce ? "url('images/events/halloween2023/logo.png')" : "url('images/logo.png')";
        }
        function _0x40cca3(_0x4b7715) {
          if (_0x24f82e) {
            for (var _0x1f129f of _0x24f82e._i.values()) {
              if (_0x1f129f.Fn === _0x4b7715) {
                _0x1f129f.fo = true;
              }
            }
          }
        }
        function _0x382acf(_0x15517f, _0xc24100) {
          return _0x2b895b.Texture.fromURL(_0x15517f)["catch"](function () {
            if (_0xc24100 && _0x24f82e != null) {
              _0x24f82e.Bt(_0xc24100);
            }
            return null;
          });
        }
        function _0x38772c(_0x5391c3) {
          return _0x382acf(_0x5391c3, "Unable to load virus image.").then(function (_0x346f3d) {
            if (_0x346f3d != null) {
              _0x40cca3(0x3);
            }
            return _0x346f3d;
          });
        }
        function _0x2207fe(_0x349ce6, _0x1d1163 = true && _0x310ced.ce) {
          return _0x382acf(_0x349ce6, "Unable to load mother cell image.").then(function (_0x14c71f) {
            if (_0x14c71f != null) {
              _0x14c71f.defaultAnchor = _0x1d1163 ? _0x310ced.ne.se : _0xd8bf05;
              _0x14c71f.baseScale = _0x1d1163 ? _0x310ced.ne.ae : {
                'oe': 0x1,
                're': 0x1
              };
              _0x40cca3(0x4);
            }
            return _0x14c71f;
          });
        }
        function _0xbb062c() {
          var _0x41f755;
          var _0x453335 = true && _0x310ced.ce ? (_0x41f755 = "images/events/halloween2023", "/spike_mother_happy.png") : (_0x41f755 = "images", '/spike_mother.png');
          _0x38772c(_0x41f755 + '/spike.png').then(function (_0x3006b0) {
            return _0x4af1eb = _0x3006b0;
          });
          _0x2207fe(_0x41f755 + '/spike_mother.png').then(function (_0x1e846c) {
            return _0x593fae = _0x1e846c;
          });
          _0x2207fe(_0x41f755 + _0x453335).then(function (_0x33fa6c) {
            return _0x3c549b = _0x33fa6c;
          });
        }
        function _0x53e427(_0x2a5205, _0x3dd68b) {
          _0x2a5205.css("display", _0x3dd68b ? 'none' : '');
        }
        function _0x502572(_0x313848, _0x4951f6, _0xa23410) {
          if (_0xa23410.length === 0x0) {
            _0x4085b3.an(_0x313848);
          } else {
            _0x4085b3.sn(_0x313848, _0xa23410);
          }
          _0x343b32[_0x4951f6] = _0xa23410;
        }
        var _0x4712a7 = {
          'cDisableAA': _0x2bafa6 = function () {
            return _0x44d4ce && _0x189125("#performance-refresh").css('display', "table-row");
          },
          'sRenderType': _0x2bafa6,
          'cHideId': function () {
            _0x189125("#pId").toggle(true);
          },
          'cTransCells': function () {
            _0x4a4698.alpha = 0x1;
          },
          'cColoredCellCount': function () {
            _0x24f82e.Li(true);
          },
          'cHideChat': function () {
            _0x41c44b.P.css('visibility', 'visible');
          },
          'cHideMinimap': function () {
            _0x189125("#minimap-panel").css("display", "block");
          },
          'sScorePanel': function () {
            _0x4aaac0.css("display", ['none', "flex", "inline-block"]['2']);
          },
          'cHideLeaderboard': function () {
            var _0x2fa702 = _0x343b32.cHideLeaderboard ? "none" : "block";
            _0x189125("#leaderboard-panel").css("display", _0x2fa702);
          },
          'cHideExtraPanel': function () {
            var _0x4a8652 = _0x343b32.cHideExtraPanel ? "none" : 'block';
            _0x189125('#extra-panel').css('display', _0x4a8652);
          },
          'cShowCoordinates': function () {
            _0x189125("#minimap-coordinates").css("display", "none");
            _0xf224b6();
          },
          'cThemeEnabled': function () {
            _0x4a9722();
            _0x287c1e(function (_0x582635) {
              if (!(_0x582635 in _0x3bd53f)) {
                _0x189125('#' + _0x582635).spectrum("disable");
              }
            });
            _0x2ecb01();
          },
          'cShowBorder': _0x3ed2a9,
          'cDisableEventSkins': function () {
            if (_0x310ced.ce) {
              _0x189125("body").toggleClass("event-halloween2023");
            }
            _0xbb062c();
            _0x1409a1();
            _0x2ecb01();
          },
          'cResizableChat': function () {
            _0x189125('#chat-resize').css("display", "none");
          },
          'cHideLockedNames': function () {
            _0x24f82e.wi.zo();
            for (var _0x144f7c of _0x24f82e._i.values()) {
              if (_0x144f7c.Fn === 0x1) {
                _0x144f7c.fo = true;
              }
            }
          },
          'cHideOwnName': function () {
            var _0x3a605b;
            if ((_0x3a605b = _0x24f82e.Dt) != null) {
              _0x3a605b.Ln();
            }
          },
          'cHideFriendNames': function () {
            _0x24f82e.wi.Io.forEach(function (_0x440c1c) {
              return _0x440c1c.Ln();
            });
          },
          'cHideBotNames': function () {
            _0x24f82e.wi.To.forEach(function (_0x40b158) {
              return _0x40b158.Ln();
            });
          },
          'cHideEnemyNames': function () {
            _0x24f82e.wi.Ro.forEach(function (_0x32aae0) {
              return _0x32aae0.Ln();
            });
          },
          'cHideOwnSkin': function () {
            var _0x14f9c5;
            if ((_0x14f9c5 = _0x24f82e.Dt) != null) {
              _0x14f9c5.Un();
            }
          },
          'cHideFriendSkins': function () {
            _0x24f82e.wi.Io.forEach(function (_0x3d3acd) {
              return _0x3d3acd.Un();
            });
          },
          'cHideBotSkins': function () {
            _0x24f82e.wi.To.forEach(function (_0x3a2fcc) {
              return _0x3a2fcc.Un();
            });
          },
          'cHideEnemySkins': function () {
            _0x24f82e.wi.Ro.forEach(function (_0x1ddd30) {
              return _0x1ddd30.Un();
            });
          },
          'cHideOwnMass': function () {
            var _0x34aa35;
            if ((_0x34aa35 = _0x24f82e.Dt) != null) {
              _0x34aa35.Rn();
            }
          },
          'cHideFriendMasses': function () {
            _0x24f82e.wi.Io.forEach(function (_0x96d8f8) {
              return _0x96d8f8.Rn();
            });
          },
          'cHideBotMasses': function () {
            _0x24f82e.wi.To.forEach(function (_0x647caf) {
              return _0x647caf.Rn();
            });
          },
          'cHideEnemyMasses': function () {
            _0x24f82e.wi.Ro.forEach(function (_0xcebfc7) {
              return _0xcebfc7.Rn();
            });
          },
          'cDarkerBotColors': function () {
            _0x24f82e.wi.Jo();
          },
          'cUncapFPS': _0x1dca1a,
          'cSmoothCells': function () {
            _0x24f82e.wi.jo();
          },
          'sLinesplitMode': function () {
            _0x1928f0.Fe(_0x343b32.sLinesplitMode);
          },
          'cHideLeaderboardHeader': function () {
            _0x53e427(_0x32493c, _0x343b32.cHideLeaderboardHeader);
          },
          'cHidePartyHeader': function () {
            _0x53e427(_0x189125("#party-header"), _0x343b32.cHidePartyHeader);
          },
          'iSplitSound': function (_0x4f00af) {
            _0x502572("split", "iSplitSound", _0x4f00af);
          },
          'iEjectSound': function (_0x9fddfb) {
            _0x502572("eject", "iEjectSound", _0x9fddfb);
          },
          'sMassType': function () {
            _0x532435.de = 0x0;
          },
          'sCameraFocus': function () {
            _0x532435.le = _0xed59a1[_0x343b32.sCameraFocus];
          },
          'sTextOutlines': function () {
            _0x532435.he = 0x0;
            _0x24f82e.oo();
          },
          'spRainbowName': function () {
            var _0x4a5adc;
            if ((_0x4a5adc = _0x24f82e.Dt) != null) {
              _0x4a5adc.wr();
            }
          },
          'spRainbowCell': function () {
            var _0x350b3c;
            if ((_0x350b3c = _0x24f82e.Dt) != null) {
              _0x350b3c._r();
            }
          },
          'sQuality': function () {},
          'uiForegroundColor': function (_0xd3f142) {
            if (_0x24f82e) {
              _0x24f82e.Ca();
            }
            _0x189125(".fg-interface-color").css("color", _0xd3f142);
            _0x189125(".interface-color").css("color", _0xd3f142);
            _0x189125(".gota-btn").css("color", _0xd3f142).css('border-color', _0xd3f142);
            _0x189125(".popup-panel").css("color", _0xd3f142);
            _0x189125(".main").css("color", _0xd3f142);
            _0x189125(".main-bottom-stats").css('border-color', _0xd3f142);
          },
          'uiBackgroundColor': function (_0x5638c1) {
            _0x189125(".hud-panel .interface-color").css("background-color", _0x5638c1);
          },
          'uiButtonColor': function (_0x1e3600) {
            _0x189125(".gota-btn").css('background-color', _0x1e3600);
          },
          'uiBorderColor': function (_0x29b029) {
            _0x189125(".ui-pane").css("border-color", _0x29b029);
            _0x189125('#chat-tab-container').css("border-color", _0x29b029);
            _0x189125(".chat-tab").css("border-color", _0x29b029);
          },
          'uiMenuBackgroundColor': function (_0x1bf208) {
            _0x189125(".main-panel").css("background-color", _0x1bf208);
            _0x189125(".popup-panel").css('background-color', _0x1bf208);
            _0x189125(".options-container").css("background-color", _0x1bf208);
          },
          'uiMenuTitleBackgroundColor': function (_0x709606) {
            _0x189125(".menu-title").css("background-color", _0x709606);
          },
          'uiMenuSubBackgroundColor': function (_0x2e4e0a) {
            _0x189125(".menu-sub-bg").css("background-color", _0x2e4e0a);
            _0x189125('.server-active').css("background-color", _0x2e4e0a);
            _0x189125("#server-content").css('background-color', _0x2e4e0a);
          },
          'uiMenuSubBackground2Color': function (_0x38b924) {
            _0x189125(".menu-sub-bg2").css("background-color", _0x38b924);
            _0x189125(".server-table tbody").css("background-color", _0x38b924);
          },
          'uiPartyLeaderColor': function () {
            if (_0x24f82e) {
              _0x24f82e.Ca();
            }
          },
          'uiGameColorSuccess': function (_0x886eba) {
            _0x189125('#social-friends-online-count').css('color', _0x886eba);
          },
          'uiGameBackgroundColor': function (_0x49a292) {
            _0x470b4b.body.style.background = _0x49a292;
          },
          'uiGameBorderColor': _0x3ed2a9,
          'rUiScale': function (_0x3ce862) {
            _0x343b32.rUiScale = _0x18803e.min(_0x18803e.max(_0x3ce862, 0.5), 1.25);
            _0x189125("#uiScale").val(100 .toFixed(0x0));
            _0x189125(".ui-scale").css('transform', "scale(1)");
          },
          'rReconnectPeriod': function (_0x54d52e) {
            _0x343b32.rReconnectPeriod = _0x18803e.min(_0x18803e.max(_0x54d52e, 0x0), 0xa);
            _0x189125("#reconnectPeriod").val(0x5);
          },
          'rAnimationDelay': function (_0x2079ef) {
            _0x343b32.rAnimationDelay = _0x18803e.min(_0x18803e.max(_0x2079ef, 0x1), 0xfa);
            _0x189125('#animationDelay').val(0x5a);
          },
          'rCameraDelay': function (_0x5bd0ed) {
            _0x343b32.rCameraDelay = _0x18803e.min(_0x18803e.max(_0x5bd0ed, 0x0), 0xfa);
            _0x189125("#cameraDelay").val(_0x343b32.rCameraDelay);
          },
          'rZoomDelay': function (_0x223c73) {
            _0x343b32.rZoomDelay = _0x18803e.min(_0x18803e.max(_0x223c73, 0x0), 0x190);
            _0x189125('#zoomDelay').val(_0x343b32.rZoomDelay);
          },
          'rMenuDelay': function (_0x96e13b) {
            _0x343b32.rMenuDelay = _0x18803e.min(_0x18803e.max(_0x96e13b, 0x0), 0x3e8);
            _0x189125("#menuDelay").val(_0x343b32.rMenuDelay);
          },
          'rViewDistance': function (_0x472641) {
            _0x343b32.rViewDistance = _0x18803e.min(_0x18803e.max(_0x472641, 0x32), 0x96);
            _0x189125("#viewDistance").val(0x64);
            _0x24f82e.Ve();
          },
          'rBorderSize': function (_0x2e1658) {
            _0x451eb9.rBorderSize = _0x18803e.min(_0x18803e.max(_0x2e1658, 0x1), 0x100);
            _0x189125("#borderSize").text(0x20);
            _0x3ed2a9();
          },
          'rBackgroundOpacity': function (_0x5287cb) {
            _0x451eb9.rBackgroundOpacity = _0x18803e.min(_0x18803e.max(_0x5287cb, 0x0), 0x1);
            _0x189125("#backgroundOpacity").text(100 .toFixed(0x0));
            _0x470b4b.getElementById('canvas-background').style.opacity = 0x1;
          },
          'aCustomBackground': function (_0x54c557) {
            _0x470b4b.getElementById("canvas-background").style.backgroundImage = "url('" + _0x54c557 + "')";
            _0x470b4b.getElementById("canvas-background").style.backgroundSize = "100% 100%";
          },
          'aCustomSpike': function (_0x1b07b5) {
            _0x380e41._e = null;
            _0x40cca3(0x3);
            if (_0x1b07b5.length !== 0x0) {
              _0x38772c(_0x1b07b5).then(function (_0x22aac5) {
                return _0x380e41._e = _0x22aac5;
              });
            }
          },
          'aCustomMother': function (_0x41fce4) {
            _0x380e41.Se = null;
            _0x40cca3(0x4);
            if (_0x41fce4.length !== 0x0) {
              _0x2207fe(_0x41fce4, false).then(function (_0xe3ec53) {
                return _0x380e41.Se = _0xe3ec53;
              });
            }
          },
          'iMapBackground': function (_0x220852) {
            _0x451eb9.iMapBackground = _0x220852;
            _0x5502b2.texture = null;
            if (_0x220852.length !== 0x0) {
              _0x382acf(_0x220852, "Unable to load map background image.").then(function (_0x2fda78) {
                return _0x5502b2.texture = _0x2fda78;
              });
            }
          }
        };
        function _0xf224b6() {
          _0x189125("#minimap-canvas").css({
            'border-top': '0'
          });
          _0x189125('#minimap-panel').css({
            'height': '250px'
          });
        }
        function _0x131493(_0x2b4fdc) {
          _0x50ee2a.skinName = _0x189125("#spSkinName").val().toLowerCase();
          _0x50ee2a.lowerName = _0x189125("#spLowerName").prop("checked");
          _0x50ee2a.nameColor = _0x189125("#spNameColor").spectrum("get").toRgb();
          var _0x328534 = _0x189125('#spChatColor').spectrum("get").toHexString().toUpperCase();
          var _0x486c82 = _0x5547fe.findIndex(function (_0x125dc3) {
            return _0x125dc3 === _0x328534;
          });
          _0x50ee2a.chatColor = _0x486c82 === -0x1 ? 0x0 : _0x486c82;
          _0x50ee2a.effect = parseInt(_0x189125("#spEffect").val());
          _0x50ee2a.nameFont = parseInt(_0x189125('#spNameFont').val());
          _0x24f82e.T(_0x5af10a.Ye(_0x2b4fdc));
        }
        function _0x1fff68() {
          var _0x87f3ba = _0xf2832c || _0x24f82e.fn;
          var _0x2d9f0a = _0x189125("#btn-cellpanel");
          if (_0x87f3ba || _0x58eed3) {
            if (_0x87f3ba) {
              _0x47159e.show();
              _0x189125('.subpanel-name-dashboard').css("display", _0xf2832c ? '' : 'none');
            } else {
              _0x47159e.hide();
            }
            _0x87f3ba = _0x87f3ba && true;
            _0x189125("#subpanel-rules").css("display", _0x87f3ba ? "block" : "none");
            _0x189125('#subpanel-content').css("display", _0x87f3ba ? "none" : 'block');
            _0x2d9f0a.prop("disabled", false);
          } else {
            _0x2d9f0a.prop("disabled", true);
          }
        }
        function _0x5cc704(_0x5c9432) {
          _0x24f82e.Xt.Er ||= _0xee5ae.firestore().collection("accounts").doc(_0x5c9432).onSnapshot(function (_0x34c115) {
            if ((_0x34c115 = _0x34c115.data()) != null && _0x34c115.locked) {
              _0xf2832c = true;
              _0x189125("#spLockedName").html(_0x34c115.name);
              if (_0x34c115.lastChange != null) {
                _0x189125("#btn-chg-ln").attr('title', "Last Changed: " + new Date(_0x34c115.lastChange).toLocaleString());
              }
              _0x189125("#spExpiry").html(_0x34c115.expiry != null ? new Date(_0x34c115.expiry.seconds * 0x3e8).toLocaleString() : 'Never');
            } else {
              _0xf2832c = false;
              if (_0x189125("#main-subpanel").css("display") !== 'none') {
                _0x45b509('main-servers');
              }
            }
            _0x1fff68();
            _0x24f82e.Xt.Er();
            _0x24f82e.Xt.Er = null;
          }, function () {
            _0x24f82e.Xt.Er();
            _0x24f82e.Xt.Er = null;
          });
        }
        function _0x231736() {
          _0x189125('[id^=servers-body-]').empty();
          for (var _0x3b3519 in _0x19dea9) {
            for (var _0x221904 of Object.values(_0x19dea9[_0x3b3519])) {
              var _0x5f080c = _0x221904.name;
              var _0x54fee1 = _0x221904.players;
              var _0x4fca46 = _0x221904.bots;
              var _0x3f60ac = _0x221904.playersText;
              var _0x221904 = _0x221904.gamemode;
              var _0x54fee1 = _0x4fca46 > 0x0 ? " title=\"Players: " + _0x54fee1 + "&#10;Bots: " + _0x4fca46 + "\"" : '';
              _0x189125("#servers-body-" + _0x3b3519).append("<tr id=\"s_" + _0x5f080c + "\" class=\"server-row\" server=\"" + _0x5f080c + "\"><td class=\"server-table-name\">" + _0x5f080c + "</td><td class=\"server-table-players\"" + _0x54fee1 + '>' + _0x3f60ac + "</td><td class=\"server-table-mode\">" + _0x221904 + "</td></tr>");
            }
          }
          for (var _0x334a67 of Object.values(_0x3e7b6a)) {
            var _0x48a617 = _0x334a67.region;
            var _0x400ba6 = _0x334a67.name;
            var _0x66cd85 = _0x334a67.playersText;
            var _0x334a67 = _0x334a67.gamemode;
            _0x189125("#servers-body-" + _0x48a617).prepend("<tr id=\"s_" + _0x400ba6 + "\" class=\"account-server server-row\" server=\"" + _0x400ba6 + "\"><td class=\"server-table-name\">" + _0x400ba6 + "</td><td class=\"server-table-players\">" + _0x66cd85 + "</td><td class=\"server-table-mode\">" + _0x334a67 + '</td></tr>');
          }
          _0x189125('.server-row').on("click", function () {
            _0x4b1570(_0x189125(this).attr('server'));
          });
        }
        function _0x5b9f43(_0x4679ab) {
          if (_0x4679ab) {
            _0x4679ab = _0x4679ab.toLowerCase();
            for (var _0x456eff in _0x19dea9) {
              for (var _0x154436 in _0x19dea9[_0x456eff]) {
                if (_0x154436.toLowerCase() === _0x4679ab) {
                  return _0x19dea9[_0x456eff][_0x154436];
                }
              }
            }
            for (var _0x2c1af1 in _0x3e7b6a) {
              if (_0x2c1af1.toLowerCase() === _0x4679ab) {
                return _0x3e7b6a[_0x2c1af1];
              }
            }
          }
          return null;
        }
        function _0x4b1570(_0x2fd81b) {
          if (_0x54ce49 != null) {
            _0x189125('#s_' + _0x54ce49.name).removeClass("server-selected");
          }
          if ((_0x54ce49 = _0x5b9f43(_0x2fd81b)) != null) {
            _0x189125("#s_" + _0x54ce49.name).addClass("server-selected");
          }
        }
        function _0x411ccb(_0x14880d) {
          _0x14880d = _0x14880d.toLowerCase();
          var _0x5ba2f4 = _0x189125('#server-tab-' + _0x14880d);
          _0x189125(".server-active").css("background-color", "inherit");
          _0x189125("#server-tab-container").children().removeClass('server-active');
          _0x5ba2f4.addClass("server-active");
          _0x189125('.server-active').css("background-color", '#363636');
          _0x189125("#server-content").children().css("display", "none");
          _0x189125("#servers-" + _0x14880d).css("display", "block");
        }
        function _0x80866c(_0x2f5273, _0x176457) {
          _0x343b32._ChatTabs.forEach(function (_0x1cb81a, _0x17025c) {
            var _0x2570b9;
            var _0x3eff10 = _0x1cb81a.flags;
            var _0x1cb81a = _0x1cb81a.maxMessages;
            if ((_0x2f5273 & _0x3eff10) === _0x2f5273 && ((_0x3eff10 = _0x189125('#chat-body-' + _0x17025c + " tr")).length >= _0x1cb81a && _0x3eff10.first().remove(), _0x3eff10 = (_0x1cb81a = _0x189125('#chat-container-' + _0x17025c)[0x0]).scrollHeight - _0x1cb81a.scrollTop <= _0x1cb81a.clientHeight + 0xa, _0x2570b9 = _0x176457.cloneNode(true), _0x189125("#chat-body-" + _0x17025c).append(_0x189125("<tr>").append(_0x2570b9)), _0x3eff10)) {
              _0x1cb81a.scrollTop = _0x1cb81a.scrollHeight;
            }
          });
        }
        function _0x5a4e6e(_0x269000) {
          _0x18b0e1.val(_0x269000);
        }
        function _0x4ab417() {
          var _0x530098;
          var _0x1ae89f = _0x189125("#chat-tab-container");
          var _0x2f19e8 = _0x189125("#chat-container");
          _0x1ae89f.empty();
          _0x2f19e8.empty();
          for (_0x530098 in _0x343b32._ChatTabs) {
            var _0x7152ec = _0x343b32._ChatTabs[_0x530098];
            if (_0x7152ec.name.length === 0x0) {
              _0x7152ec.name = "Unnamed";
            }
            _0x1ae89f.append("<li class='chat-tab' id='chat-tab-" + _0x530098 + "' name='" + _0x530098 + "'><span>" + _0x7152ec.name + "</span></li>");
            _0x2f19e8.append("<div class='chat-inner-container' id='chat-container-" + _0x530098 + "'><table class='chat-table'><tbody id='chat-body-" + _0x530098 + "'></tbody></table></div>");
          }
          _0x189125(".chat-tab").on('click', function () {
            _0x135de4(_0x189125(this).attr("name"));
          }).css("border-color", "rgba(255, 255, 255, .2)");
          if (_0x174dfe >= 0x0 && _0x174dfe < _0x343b32._ChatTabs.length) {
            _0x135de4(_0x174dfe);
          } else {
            _0x135de4(0x0);
          }
        }
        function _0x135de4(_0x2c18ed) {
          _0x189125(".chat-tab").removeClass('chat-active-tab');
          _0x189125(".chat-inner-container").removeClass("chat-active-container").css("display", 'none');
          _0x174dfe = _0x2c18ed;
          if (_0x343b32._ChatTabs[_0x2c18ed]) {
            _0x189125("#chat-tab-" + _0x2c18ed).addClass("chat-active-tab");
            _0x189125("#chat-container-" + _0x2c18ed).addClass("chat-active-container").css("display", 'block');
          }
        }
        function _0x369935(_0x26e6bd = 0x0) {
          var _0x81f2ce;
          var _0x5eee4c = _0x189125("#cte-tab-selector");
          _0x5eee4c.empty();
          for (_0x81f2ce in _0x343b32._ChatTabs) {
            _0x5eee4c.append("<option value='" + _0x81f2ce + "'>" + _0x343b32._ChatTabs[_0x81f2ce].name + "</option>");
          }
          _0x5eee4c.prop("selectedIndex", _0x26e6bd);
          _0x5eee4c.trigger("change");
        }
        function _0x1724eb() {
          var _0x49d194;
          var _0x367dda = _0x189125("#cte-tab-selector").val();
          var _0x384d6f = {
            'name': '',
            'flags': 0x0,
            'maxMessages': 0x0
          };
          var _0x5d9d3f = _0x343b32._ChatTabs[_0x367dda];
          if (_0x5d9d3f) {
            for (var _0x5d367a in _0x384d6f) {
              _0x384d6f[_0x5d367a] = _0x5d9d3f[_0x5d367a];
            }
          }
          _0x189125("#cte-tab-name").val('');
          for (_0x49d194 in _0x4c2295) {
            _0x189125('#cte-type-' + _0x49d194.toLowerCase()).prop('checked', (_0x4c2295[_0x49d194] & 0x0) === _0x4c2295[_0x49d194]);
          }
          _0x189125("#cte-max-messages").val(0x0);
        }
        function _0x23db4e() {
          var _0x50464b = _0x189125('#cte-tab-selector').val();
          var _0x1b8725 = _0x343b32._ChatTabs[_0x50464b];
          if (_0x1b8725) {
            var _0x4a178e = _0x1b8725.name;
            var _0x1b3e76 = _0x189125("#cte-tab-name").val();
            if (_0x1b3e76.length !== 0x0) {
              var _0x39e11f;
              var _0x4a178e = _0x1b3e76 !== _0x4a178e;
              var _0x4b7650 = 0x0;
              var _0x25f477 = parseInt(_0x189125("#cte-max-messages").val());
              for (_0x39e11f in _0x4c2295) {
                if (_0x189125("#cte-type-" + _0x39e11f.toLowerCase()).prop("checked")) {
                  _0x4b7650 += _0x4c2295[_0x39e11f];
                }
              }
              _0x1b8725.name = _0x1b3e76;
              _0x1b8725.flags = _0x4b7650;
              _0x1b8725.maxMessages = _0x25f477;
              if (_0x4a178e) {
                _0x369935(_0x50464b);
                for (var _0x39e141 in _0x343b32._ChatTabs) {
                  var _0x16e046 = _0x343b32._ChatTabs[_0x39e141];
                  if (_0x16e046 && (_0x16e046.name.length === 0x0 && (_0x16e046.name = "Unnamed"), _0x39e141 = _0x189125("#chat-tab-" + _0x39e141))) {
                    _0x39e141.html("<span>" + _0x16e046.name + "</span>");
                  }
                }
              }
            }
          }
        }
        function _0x2d9150() {
          _0x343b32._ChatTabs.push({
            'name': 'New',
            'flags': 0x0,
            'maxMessages': 0x64
          });
          _0x369935(_0x343b32._ChatTabs.length - 0x1);
          _0x4ab417();
        }
        function _0x5873b2() {
          var _0x20453e = _0x189125("#cte-tab-selector").val();
          if (_0x343b32._ChatTabs[_0x20453e]) {
            _0x343b32._ChatTabs.splice(_0x20453e, 0x1);
            _0x369935();
            _0x4ab417();
          }
        }
        function _0x383243(_0x4e3e49, _0x1e8ef6, _0x5153d2 = -0x1) {
          _0x189125("#context-name").text(_0x4e3e49 || "An unnamed cell");
          _0x304d31.data({
            'selected': _0x1e8ef6,
            'party': _0x5153d2
          });
          _0x189125(".context-action").css("display", "none");
          if (_0x5153d2 === -0x1) {
            _0x189125('#menu-invite').css("display", "block");
            _0x189125('#menu-whisper').css("display", "block");
            _0x189125("#menu-block").css("display", "block");
            _0x189125("#menu-profile").css('display', 'block');
          } else {
            _0x189125("#menu-whisper").css("display", "block");
            _0x189125("#menu-profile").css('display', "block");
            if (_0x24f82e.li()) {
              _0x189125('#menu-pu_pr').css("display", 'block');
              _0x189125("#menu-promote").css('display', "block");
              _0x189125("#menu-kick").css('display', "block");
            }
          }
          if (_0x24f82e.zt) {
            _0x189125("#menu-spectate").css("display", "block");
          }
          _0x304d31.css({
            'display': "block",
            'left': _0x18803e.min(_0x24f82e.At, _0x438c4c.innerWidth - _0x304d31.width()),
            'top': _0x18803e.min(_0x24f82e.It, _0x438c4c.innerHeight - _0x304d31.height())
          });
        }
        function _0x2f3e12(_0x4843fe, _0xc4d12c, _0x3f6016, _0x30187b, _0x2ab42f, _0x41ed56, _0x54e40d) {
          var _0x17832b = _0x24f82e.fi.pi;
          var _0xcec810 = _0x17832b.mi;
          var _0x49256e = _0x17832b.gi;
          var _0x30f38f = _0x17832b.bi;
          var _0x17832b = _0x17832b.ki;
          var _0xcec810 = (_0x3f6016 - _0xcec810) / _0x30f38f * _0x1692c6.width;
          var _0x30f38f = (_0x30187b - _0x49256e) / _0x17832b * _0x1692c6.height;
          _0x4843fe.beginPath();
          _0x4843fe.arc(_0xcec810, _0x30f38f, _0x2ab42f, 0x0, _0x2f2d2f, false);
          _0x4843fe.fillStyle = _0x41ed56;
          _0x4843fe.fill();
          if (_0x54e40d) {
            _0x3f6016 = _0xcec810 - _0x4843fe.measureText(_0xc4d12c).width / 0x2;
            _0x4843fe.fillText(_0xc4d12c, _0x3f6016, _0x30f38f - 0x5);
          }
        }
        var _0x5c5075 = new Map();
        function _0x51184e(_0x3b96c2, _0x2bf7a8) {
          var _0x4b1942;
          if (_0x2bf7a8 !== (_0x3b96c2.is(':visible') && _0x5c5075.get(_0x3b96c2.selector) !== "hide") && (_0x4b1942 = {
            'duration': _0x343b32.rMenuDelay,
            'always': function () {
              return _0x5c5075["delete"](_0x3b96c2.selector);
            }
          }, _0x5c5075.set(_0x3b96c2.selector, _0x2bf7a8 ? 'show' : "hide"), _0x2bf7a8 ? _0x3b96c2.fadeIn(_0x4b1942) : _0x3b96c2.fadeOut(_0x4b1942), _0x3b96c2.attr('id') === "main") && _0x3748af) {
            _0x41c44b.Mt.toggle(!_0x2bf7a8);
          }
        }
        function _0x494cb4(_0x131f2f) {
          _0x51184e(_0x131f2f, true);
        }
        function _0x319f2b(_0x3f2fc5) {
          _0x51184e(_0x3f2fc5, false);
        }
        function _0x3cd401(_0x28b372) {
          _0x51184e(_0x28b372, !(_0x28b372.is(':visible') && _0x5c5075.get(_0x28b372.selector) !== "hide"));
        }
        function _0x45b509(_0x30928c) {
          if ((_0x30928c = _0x189125('#' + _0x30928c)).css("display") === "none") {
            _0x189125(".main-right-panel").slideUp(_0x343b32.rMenuDelay);
            _0x30928c.slideDown(_0x343b32.rMenuDelay);
          }
        }
        function _0x1da2ff() {
          _0x39c272.show();
          if (_0x24f82e.Ri.length === 0x0 || !!_0x343b32.cHidePartyPanel) {
            _0x41c44b._t.css('display', 'none');
          }
        }
        function _0x2bac48(_0xf72003) {
          var _0x3d9d20 = _0xf72003.attr('id');
          _0x343b32[_0x3d9d20] = _0xf72003.prop("checked");
          _0x45c216(_0x3d9d20);
        }
        function _0x3af392(_0x47b586) {
          var _0x1c34c0 = _0x47b586.attr('id');
          _0x343b32[_0x1c34c0] = _0x47b586.val();
          _0x45c216(_0x1c34c0, _0x47b586.val());
        }
        function _0x1918c8(_0x4bcd57) {
          _0x45c216(_0x4bcd57.attr('id'), _0x4bcd57.val());
        }
        function _0x138b26(_0x214ce6) {
          _0x45c216(_0x214ce6.attr('id'), _0x214ce6.val());
        }
        function _0x45c216(_0x33c4fa, _0x13ef1b) {
          if ((_0x33c4fa = _0x4712a7[_0x33c4fa]) != null) {
            _0x33c4fa(_0x13ef1b);
          }
        }
        function _0x3edb56(_0x327019, _0x4962ea) {
          if (_0x4962ea != null) {
            _0x45c216(_0x327019, _0x451eb9[_0x327019] = _0x4962ea);
          }
        }
        var _0x210805;
        var _0x1c5840;
        var _0x30d89d = [[0x1, 0x4, "rRainbowNameSpeed"], [0x5, 0x4, 'rRainbowCellSpeed'], [0xa, 0x1, "spRainbowName"], [0xb, 0x1, "spRainbowCell"]];
        function _0x4a9722() {
          for (var _0x30e1ad in _0x1ecf15) {
            var _0x1ac375 = _0x30e1ad.charAt(0x0);
            if (_0x1ac375 === 'r') {
              _0x1918c8(_0x189125('#' + _0x30e1ad).val(_0x1ecf15[_0x30e1ad]));
            } else {
              if (_0x1ac375 === 'u') {
                _0x451eb9[_0x30e1ad] = _0x1ecf15[_0x30e1ad];
                _0x189125('#' + _0x30e1ad).spectrum('set', _0x451eb9[_0x30e1ad]);
                _0x45c216(_0x30e1ad, _0x451eb9[_0x30e1ad]);
              } else if (_0x1ac375 === 'a') {
                _0x3edb56(_0x30e1ad, '');
              } else {
                _0x451eb9[_0x30e1ad] = _0x1ecf15[_0x30e1ad];
              }
            }
          }
          _0x451eb9._FoodColors = [];
        }
        function _0x123455(_0x5de567) {
          try {
            var _0x52f3b5 = typeof _0x5de567 == "string" ? JSON.parse(_0x5de567) : _0x5de567;
            if (_0x52f3b5.version !== 0x2) {
              _0x4a9722();
            } else {
              for (var _0x3e6601 of Object.entries(_0x52f3b5)) {
                var _0x13162f = _0x23f9c1(_0x3e6601) || _0x4d18e8(_0x3e6601, 0x2) || _0x90875f(_0x3e6601, 0x2) || _0x41b368();
                var _0xd8ac0e = _0x13162f[0x0];
                var _0x1f0367 = _0x13162f[0x1];
                if (_0xd8ac0e in _0x451eb9 && _0x1f0367.length !== 0x0) {
                  _0x451eb9[_0xd8ac0e] = _0x1f0367;
                  var _0x3e05d8 = undefined;
                  var _0x952a71 = _0xd8ac0e;
                  var _0x46f73f = _0x1f0367;
                  var _0x3e05d8 = _0x189125('#' + _0x952a71);
                  switch (_0x952a71[0x0]) {
                    case 'u':
                      _0x3e05d8.spectrum("set", _0x46f73f);
                      _0x45c216(_0x952a71, _0x46f73f);
                      break;
                    case 'r':
                      _0x3e05d8.val(_0x46f73f);
                      _0x1918c8(_0x3e05d8);
                      break;
                    case 'a':
                      _0x3edb56(_0x952a71, _0x46f73f);
                      break;
                    case 'i':
                      _0x3e05d8.val(_0x46f73f);
                      _0x138b26(_0x3e05d8);
                  }
                }
              }
            }
          } catch (_0x458b4e) {
            _0x4a9722();
          } finally {
            _0x2ecb01();
          }
        }
        function _0xb18038(_0x596837) {
          var _0xccc0d0;
          if (/\.(json)$/i.test(_0x596837.name)) {
            (_0xccc0d0 = new FileReader()).addEventListener("load", function () {
              _0x455050();
              _0x4a9722();
              _0x123455(this.result);
            }, false);
            _0xccc0d0.readAsText(_0x596837);
          }
        }
        function _0x455050() {
          _0x189125("#cThemeEnabled").prop('checked', true).trigger("change");
        }
        function _0x2b5755(_0x4e6aa8) {
          var _0x1ac6c9 = _0x4e6aa8.split(" ");
          var _0xd547ca = '';
          var _0x384a71 = null;
          for (var _0x3bf68c = 0x0; _0x3bf68c < _0x1ac6c9.length; _0x3bf68c++) {
            if (_0x3bf68c !== 0x0) {
              _0xd547ca += " ";
            }
            _0x384a71 = _0x1ac6c9[_0x3bf68c];
            if (_0x5dd998[_0x384a71] != null) {
              _0xd547ca += "<img src=\"https://gota.io/emotes/" + (_0x384a71 = _0x384a71.startsWith(':') && _0x384a71.endsWith(':') ? _0x384a71.substring(0x1, _0x384a71.length - 0x1) : _0x384a71) + ".png\" height=\"17\" width=\"17\" alt=\"" + _0x384a71 + "\">";
            } else if (_0x4ebda1[_0x384a71] != null) {
              _0xd547ca += "<img src=\"https://gota.io/emotes/gifs/" + (_0x384a71 = _0x384a71.startsWith(':') && _0x384a71.endsWith(':') ? _0x384a71.substring(0x1, _0x384a71.length - 0x1) : _0x384a71) + ".gif\" height=\"17\" width=\"17\" alt=\"" + _0x384a71 + "\">";
            } else {
              _0xd547ca += _0x384a71;
            }
          }
          return _0xd547ca;
        }
        function _0x27c05f(_0x21df1e, _0x1bfc55, _0x9745f7) {
          this.p = _0x21df1e;
          this.Lt = _0x1bfc55;
          this.Fn = _0x9745f7;
          this.Ut = null;
          this.Rt = null;
        }
        function _0x27144d() {
          this.Or = {};
          this.Hr = [];
          this.Mr = [];
          this.va = null;
          this.Fr = 0x0;
          this.Rt = null;
          this.Yn = 0x0;
          this.Ea = function (_0x5b9aca, _0x2df1d6, _0x4e7ead) {
            var _0x3220a2;
            if (_0x5bbced[_0x5b9aca].Fn !== 0x3) {
              if (_0x3220a2 = this.Or[_0x5b9aca]) {
                _0x3220a2.Yi(_0x2df1d6, _0x4e7ead);
              } else {
                _0x3220a2 = new _0x3880d3(_0x5b9aca, _0x2df1d6, _0x4e7ead);
                this.Or[_0x5b9aca] = _0x3220a2;
                this.Dr();
              }
              this.Ar();
            } else {
              _0x3220a2 = new _0x3880d3(_0x5b9aca, _0x2df1d6, _0x4e7ead);
              this.Mr.push(_0x3220a2);
            }
            this.Ir();
            if (_0x3220a2) {
              _0x24f82e.Bt("Recieved buff: " + _0x3220a2.Pr.p);
            }
          };
          this.Oa = function (_0x19c2a2) {
            var _0xfa60cd = null;
            if (_0x5bbced[_0x19c2a2].Fn !== 0x3) {
              if (_0xfa60cd = this.Or[_0x19c2a2]) {
                delete this.Or[_0x19c2a2];
                this.Dr();
                this.Ir();
                this.Ar();
              }
            } else {
              for (var _0x33feb4 = 0x0; _0x33feb4 < this.Mr.length; _0x33feb4++) {
                if ((_0xfa60cd = this.Mr[_0x33feb4]).ji === _0x19c2a2) {
                  this.Mr.splice(_0x33feb4, 0x1);
                  this.Ir();
                  break;
                }
              }
            }
            if (_0xfa60cd) {
              _0x24f82e.Bt("Lost buff: " + _0xfa60cd.Pr.p);
            }
          };
          this.Hn = function (_0x953920) {
            if (this.Hr.length !== 0x0 || this.Mr.length !== 0x0) {
              for (var _0x12148d in this.Or) {
                var _0x40efe2 = this.Or[_0x12148d];
                if (!_0x953920 || _0x40efe2.Pr.Fn !== 0x1) {
                  delete this.Or[_0x12148d];
                }
              }
              this.Dr();
              this.Ar();
              this.Mr = [];
              this.Ir();
            }
          };
          this.Dr = function () {
            this.Hr = [];
            if (this.Or.length !== 0x0) {
              for (var _0x19f2d2 in this.Or) {
                if (this.Or[_0x19f2d2].Pr.Fn === 0x1) {
                  this.Hr.splice(0x0, 0x0, _0x19f2d2);
                } else {
                  this.Hr.push(_0x19f2d2);
                }
              }
            }
          };
          this.Ar = function () {
            var _0x4c2d01;
            this.Yn = 0x0;
            if (this.Or[0x1] != null) {
              _0x4c2d01 = this.Or[0x1];
              this.Yn = _0x4c2d01.Tr * 0x10;
            }
          };
          this.Yi = function () {
            if (this.Hr.length === 0x0 && this.Mr.length === 0x0) {
              _0x50caf6.visible = false;
            } else {
              if (Date.now() >= this.Fr) {
                this.Lr();
                this.Fr = Date.now() + 0x3e8;
              }
              if (!this.Rt) {
                this.Rt = _0x2b895b.Texture.from(this.va.canvas);
                _0x50caf6.texture = this.Rt;
                _0x50caf6.anchor.set(0x0);
              }
              _0x50caf6.position.set(_0x4aaac0.width() + 0x14 - _0x44d4ce.ui.position.x, 0xf - _0x44d4ce.ui.position.y);
              _0x50caf6.visible = true;
            }
          };
          this.Lr = function () {
            var _0xbde42 = ((_0xbde42 = this.va) == null ? undefined : _0xbde42.canvas) || _0x470b4b.createElement("canvas");
            var _0xbacbad = _0x18803e.max(this.Hr.length, this.Mr.length);
            _0xbde42.width = _0xbacbad * 0x37;
            _0xbde42.height = 0x69;
            this.va = _0xbde42.getContext('2d');
            this.va.fillStyle = "#222";
            this.va.font = "bold 16pt Calibri";
            var _0x216190 = 0x0;
            var _0xf6da05 = 0x0;
            for (var _0x164065 = 0x0; _0x164065 < this.Hr.length; _0x164065++) {
              this.Or[this.Hr[_0x164065]].Rr(this.va, _0x216190, _0xf6da05);
              _0x216190 += 0x37;
            }
            var _0x216190 = 0x0;
            var _0xf6da05 = 0x37;
            for (var _0x2332be = 0x0; _0x2332be < this.Mr.length; _0x2332be++) {
              this.Mr[_0x2332be].Rr(this.va, _0x216190, _0xf6da05);
              _0x216190 += 0x37;
            }
            if (this.Rt) {
              this.Rt.update();
            }
            this.Fr = Date.now() + 0x3e8;
          };
          this.Ir = function () {
            this.Fr = 0x0;
          };
        }
        var _0x19928a = _0x18803e.PI * 1.5;
        function _0x3880d3(_0x21b254, _0x48d362, _0x1cf0c8) {
          this.ji = _0x21b254;
          this.Pr = _0x5bbced[_0x21b254];
          this.Ur = Date.now();
          this.Br = _0x1cf0c8;
          this.Tr = _0x48d362;
          this.Yi = function (_0x5386ed, _0x2b75cf) {
            this.Ur = Date.now();
            this.Br = _0x2b75cf;
            this.Tr = _0x5386ed;
          };
          this.jr = function () {
            var _0xec2d47;
            var _0x339e54;
            return Date.now() >= this.Br ? _0x18803e.PI * 0x2 : (_0xec2d47 = this.Br - Date.now(), _0x339e54 = this.Br - this.Ur, _0x18803e.min(_0xec2d47 / _0x339e54, 0x1) * 0x2 * _0x18803e.PI);
          };
          this.Rr = function (_0x4ad455, _0x2a28ff, _0x4801b3) {
            _0x4ad455.drawImage(this.Pr.Ut, _0x2a28ff, _0x4801b3, 0x32, 0x32);
            if (this.Tr > 0x1) {
              _0x4ad455.fillStyle = "#000";
              _0x4ad455.fillText(this.Tr, _0x2a28ff + 0x23, _0x4801b3 + 0x11);
            }
            if (this.Br > 0x0) {
              _0x4ad455.beginPath();
              _0x4ad455.moveTo(_0x2a28ff + 0x19, _0x4801b3 + 0x19);
              _0x4ad455.arc(_0x2a28ff + 0x19, _0x4801b3 + 0x19, 0x19, _0x19928a, _0x19928a - this.jr(), false);
              _0x4ad455.closePath();
              _0x4ad455.globalAlpha = 0.75;
              _0x4ad455.fillStyle = "#222";
              _0x4ad455.fill();
              _0x4ad455.globalAlpha = 0x1;
            }
          };
        }
        function _0x8b0801(_0x467b09) {
          for (var _0x231fd9 = _0x467b09.length - 0x1; _0x231fd9 > 0x0; _0x231fd9--) {
            var _0x3fca7f = _0x18803e.floor(_0x18803e.random() * (_0x231fd9 + 0x1));
            var _0x3ef73e = [_0x467b09[_0x3fca7f], _0x467b09[_0x231fd9]];
            _0x467b09[_0x231fd9] = _0x3ef73e[0x0];
            _0x467b09[_0x3fca7f] = _0x3ef73e[0x1];
          }
          return _0x467b09;
        }
        var _0xf92881 = [];
        var _0x575032 = [];
        for (var _0x2f0b95 = 0x0; _0x2f0b95 < 0xb4; _0x2f0b95++) {
          var _0x559d9b = _0x438c4c.tinycolor({
            'h': _0x2f0b95 * 0x2,
            's': 97.25,
            'v': 0x64
          });
          var _0x2be9e8 = _0x559d9b.toRgb();
          _0xf92881[_0x2f0b95] = (_0x2be9e8.r << 0x10) + (_0x2be9e8.g << 0x8) + _0x2be9e8.b;
          _0x575032[_0x2f0b95] = _0x559d9b.toHexString();
        }
        var _0x400d4e = _0x8b0801(_0xf92881.slice(0x0));
        var _0x392ea6 = _0x8b0801(_0x575032.slice(0x0));
        var _0x5547fe = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", '#C80000', "#FF6900", "#FFFF00", "#00FF00", "#008000", '#008080', "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", '#8C4614'];
        var _0x1b6227 = {};
        function _0x201bd2(_0xa8ebd5) {
          if (_0xa8ebd5 === 0x0 || _0xa8ebd5 === _0x24f82e.Gi) {
            return "You cannot block that player.";
          } else {
            return _0x1e1c4c.includes(_0xa8ebd5) ? (delete _0x1e1c4c[_0xa8ebd5], "Unblocked player with ID: " + _0xa8ebd5) : (_0x1e1c4c.push(_0xa8ebd5), "Blocked player with ID: " + _0xa8ebd5);
          }
        }
        var _0x574df5 = [{
          'Kt': "Whisper a player by ID",
          'Yt': ['whisper', 't', 'w'],
          'Vt': function (_0x97f65f) {
            var _0x2bf057 = parseInt(_0x97f65f[0x0]);
            if (isNaN(_0x2bf057)) {
              _0x24f82e.Bt("Invalid player id.");
            } else {
              if ((_0x97f65f = _0x97f65f.slice(0x1).join(" ")).length !== 0x0) {
                _0x24f82e.T(_0x5af10a.Je(_0x2bf057, _0x97f65f));
              }
              _0x5a4e6e("/t " + _0x2bf057 + " ");
            }
          }
        }, {
          'Kt': "Reply to previous whisper",
          'Yt': ["reply", 'r'],
          'Vt': function (_0xf54f7f) {
            if ((_0xf54f7f = _0xf54f7f.join(" ")).length !== 0x0) {
              _0x24f82e.T(_0x5af10a.Je(0x0, _0xf54f7f));
            }
            _0x5a4e6e("/r ");
          }
        }, {
          'Kt': "Send a message to other party members",
          'Yt': ["party", 'p'],
          'Vt': function (_0x8deea5) {
            if ((_0x8deea5 = _0x8deea5.join(" ")).length !== 0x0) {
              _0x24f82e.T(_0x5af10a.Be(_0x8deea5, 0x1));
            }
            _0x5a4e6e("/p ");
          }
        }, {
          'Kt': "Invite a player to the party",
          'Yt': ["invite", 'i'],
          'Vt': function (_0x396dc3) {
            _0x396dc3 = parseInt(_0x396dc3[0x0]);
            if (isNaN(_0x396dc3)) {
              _0x24f82e.Bt("Invalid ID.");
            } else {
              _0x24f82e.T(_0x5af10a.Ge(0x0, _0x396dc3));
            }
          }
        }, {
          'Kt': "Leave your current party",
          'Yt': ["leave", 'l'],
          'Vt': function () {
            _0x24f82e.T(_0x5af10a.Ge(0x3, 0x0));
          }
        }, {
          'Kt': "Promote a party member to leader",
          'Yt': ["promote"],
          'Vt': function (_0x3bd310) {
            _0x3bd310 = parseInt(_0x3bd310[0x0]);
            if (isNaN(_0x3bd310)) {
              _0x24f82e.Bt("Invalid ID.");
            } else {
              _0x24f82e.T(_0x5af10a.Ge(0x2, _0x3bd310));
            }
          }
        }, {
          'Kt': "Kick a player from the party",
          'Yt': ["kick"],
          'Vt': function (_0xd57483) {
            _0xd57483 = parseInt(_0xd57483[0x0]);
            if (isNaN(_0xd57483)) {
              _0x24f82e.Bt("Invalid ID.");
            } else {
              _0x24f82e.T(_0x5af10a.Ge(0x1, _0xd57483));
            }
          }
        }, {
          'Kt': "Clear the chat tab",
          'Yt': ["clear"],
          'Vt': function () {
            return _0x189125("#chat-body-" + _0x174dfe).empty();
          }
        }, {
          'Kt': "Get your current ID",
          'Yt': ["info"],
          'Vt': function () {
            if (_0x24f82e.Gi > 0x0) {
              _0x24f82e.Bt("Your id is " + _0x24f82e.Gi);
            } else {
              _0x24f82e.Bt("You need to be connected to a server to use this command.");
            }
          }
        }, {
          'Kt': "Show the scrimmage menu",
          'Yt': ["scrimmenu"],
          'Vt': function () {
            _0x1db7a6.toggle();
          }
        }, {
          'Kt': "Join a party with a code",
          'Yt': ["join", 'j'],
          'Vt': function (_0x5c5ab2) {
            if ((_0x5c5ab2 = _0x5c5ab2[0x0]) != null && _0x5c5ab2.length !== 0x0) {
              _0x24f82e.T(_0x5af10a.ze(_0x5c5ab2));
            }
          }
        }, {
          'Kt': "Set the party to private",
          'Yt': ["private"],
          'Vt': function () {
            _0x24f82e.T(_0x5af10a.Ge(0x4, 0x1));
          }
        }, {
          'Kt': "Allow players to join the party without an invite",
          'Yt': ["public"],
          'Vt': function () {
            _0x24f82e.T(_0x5af10a.Ge(0x4, 0x0));
          }
        }, {
          'Kt': "Reset chat size",
          'Yt': ['resetchat'],
          'Vt': function () {
            _0x41c44b.P.css("width", "360px");
            _0x41c44b.P.css('height', '250px');
          }
        }, {
          'Kt': "Reset chat tab settings",
          'Yt': ['resetchattabs'],
          'Vt': function () {
            _0x343b32._ChatTabs = JSON.parse(JSON.stringify(_0x4c4009));
            _0x369935();
            _0x4ab417();
          }
        }, {
          'Kt': "Spectate a player",
          'Yt': ["spectate", 's'],
          'Vt': function (_0x1aa2c7) {
            _0x1aa2c7 = parseInt(_0x1aa2c7[0x0]);
            if (isNaN(_0x1aa2c7)) {
              _0x24f82e.Bt("Invalid ID.");
            } else {
              _0x24f82e.T(_0x5af10a.Ue(_0x1aa2c7));
            }
          }
        }, {
          'Kt': "Disconnect from the server",
          'Yt': ["disconnect"],
          'Vt': function () {
            _0x24f82e._n();
          }
        }, {
          'Kt': "Get Account UID",
          'Yt': ['account'],
          'Vt': function () {
            if (_0x59c59f == null) {
              _0x24f82e.Bt("You are not logged in.");
            } else {
              _0x24f82e.Bt("UID: " + _0x59c59f.uid);
            }
          }
        }, {
          'Kt': "Block or unblock a player by ID",
          'Yt': ['block', 'b'],
          'Vt': function (_0x1e46be) {
            _0x1e46be = parseInt(_0x1e46be[0x0]);
            if (!isNaN(_0x1e46be)) {
              _0x1e46be = _0x201bd2(_0x1e46be);
              _0x24f82e.Bt(_0x1e46be);
            }
          }
        }, {
          'Kt': "Get current renderer",
          'Yt': ['renderer'],
          'Vt': function () {
            _0x24f82e.Bt("Current renderer is " + (_0x44d4ce.hi.gl ? "WebGL" : "Canvas"));
          }
        }];
        var _0xdc621e = ["4Head", 'BibleThump', "DansGame", 'DatSheffy', 'FailFish', "FeelsBadMan", 'FeelsGoodMan', "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", 'AngeryBOYE', "TohruFlex", "Sadness", "nou", "MarioFP"];
        var _0x2fdbe3 = ['Ditto', "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", 'WeSmart', "PandaAww", 'SleepyCat', 'Clap'];
        function _0x42dd66(_0x5e5300) {
          var _0x3cad52;
          var _0x50e788;
          return _0x5e5300 <= 0x0 ? "0:00" : (_0x50e788 = _0x5e5300 - (_0x3cad52 = _0x18803e.floor(_0x5e5300 / 0xe10)) * 0xe10 - (_0x5e5300 = _0x18803e.floor((_0x5e5300 - _0x3cad52 * 0xe10) / 0x3c)) * 0x3c, (_0x3cad52 > 0x0 ? _0x3cad52 + ':' : '') + (_0x5e5300 < 0xa && _0x3cad52 > 0x0 ? '0' + _0x5e5300 : _0x5e5300) + ':' + (_0x50e788 < 0xa ? '0' + _0x50e788 : _0x50e788));
        }
        function _0x20361e(_0x5890dc) {
          (_0x5890dc = _0x5890dc.toString().split('.'))[0x0] = _0x5890dc[0x0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return _0x5890dc.join('.');
        }
        function _0xef272a(_0x53d380) {
          if (_0x53d380.dataTransfer.items) {
            for (var _0x318ad1 = 0x0; _0x318ad1 < _0x53d380.dataTransfer.items.length; _0x318ad1++) {
              if (_0x53d380.dataTransfer.items[_0x318ad1].kind === "file") {
                return _0x53d380.dataTransfer.items[_0x318ad1].getAsFile();
              }
            }
          } else {
            if (_0x53d380.dataTransfer.files.length !== 0x0) {
              return _0x53d380.dataTransfer.files[0x0];
            }
          }
        }
        var _0xed59a1 = {
          'CENTER': 0x0,
          'MASS': 0x1
        };
        var _0x22881b = {
          0x0: 'Spectator',
          0x1: "Blue",
          0x2: "Red",
          0x3: "Green",
          0x4: "Yellow",
          0x5: "Purple",
          0x6: "Orange",
          0x7: 'Pink',
          0x8: "Brown"
        };
        var _0x4c2295 = {
          'ALL': 0x1,
          'PARTY': 0x2,
          'WHISPER': 0x4,
          'SYSTEM': 0x8,
          'ADMIN': 0x10
        };
        var _0x159336 = {
          '_a': -0x1,
          'Bi': 0x0,
          'Fa': 0x1,
          'Da': 0x2
        };
        var _0xa61084 = [[0x0, "Verdana", 0x36], [0x1, "ampad", 0x4b], [0x2, 'burnstown', 0x51], [0x3, "chlorinar", 0x4b], [0x4, "Facon", 0x4b], [0x5, "archistico", 0x4b], [0x6, 'breakaway', 0x51], [0x7, 'conformity', 0x51], [0x8, "electroharmonix", 0x46], [0x9, "PWJoyeuxNoel", 0x46], [0xa, "leckerli-one", 0x4b], [0x65, "IceCaps", 0x51, 0xc9ff], [0x66, "BrazierFlame", 0x51, 0xe25822]].reduce(function (_0xea66a6, _0x58a2bb) {
          var _0x58a2bb = _0x23f9c1(_0x58a2bb) || _0x4d18e8(_0x58a2bb, 0x4) || _0x90875f(_0x58a2bb, 0x4) || _0x41b368();
          var _0x4300d2 = _0x58a2bb[0x0];
          var _0x375985 = _0x58a2bb[0x1];
          var _0x2a5fdf = _0x58a2bb[0x2];
          var _0x58a2bb = _0x58a2bb[0x3];
          new _0x438c4c.FontFaceObserver(_0x375985).load(null, 0x2710)["catch"](function () {});
          if (_0x4300d2 > 0x0 && _0x4300d2 < 0x40) {
            _0x189125("#spNameFont").append("<option value=\"" + _0x4300d2 + "\" style=\"font-family:" + _0x375985 + "\">" + (_0x375985.charAt(0x0).toUpperCase() + _0x375985.slice(0x1)) + "</option>");
          }
          _0xea66a6[_0x4300d2] = {
            'fontSize': _0x18803e.round(_0x2a5fdf / 0x36 * 0x45),
            'fontWeight': _0x4300d2 === 0x0 ? "bold" : 'normal',
            'stroke': _0x58a2bb || 0x0,
            'fontFamily': _0x375985
          };
          return _0xea66a6;
        }, {});
        _0x189125(_0x438c4c).focus(function () {
          _0x4985b8 = true;
        });
        _0x189125(_0x438c4c).blur(function () {
          _0x4985b8 = false;
        });
      };
      _0x438c4c.version = "3.6.5";
    })(eval, atob);
  })();
