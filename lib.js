function _createForOfIteratorHelper(_0x23593b, _0x192d09) {
    var _0x3e0d85,
      _0x37d728,
      _0x170ae6,
      _0x267bf6,
      _0x577a7e =
        ('undefined' != typeof Symbol && _0x23593b[Symbol.iterator]) ||
        _0x23593b['@@iterator']
    if (_0x577a7e) {
      return (
        (_0x37d728 = !(_0x3e0d85 = true)),
        {
          s: function () {
            _0x577a7e = _0x577a7e.call(_0x23593b)
          },
          n: function () {
            var _0x24c4a0 = _0x577a7e.next()
            return (_0x3e0d85 = _0x24c4a0.done), _0x24c4a0
          },
          e: function (_0x34f009) {
            _0x37d728 = true
            _0x170ae6 = _0x34f009
          },
          f: function () {
            try {
              _0x3e0d85 || null == _0x577a7e.return || _0x577a7e.return()
            } finally {
              if (_0x37d728) {
                throw _0x170ae6
              }
            }
          },
        }
      )
    }
    if (
      Array.isArray(_0x23593b) ||
      (_0x577a7e = _unsupportedIterableToArray(_0x23593b)) ||
      (_0x192d09 && _0x23593b && 'number' == typeof _0x23593b.length)
    ) {
      return (
        _0x577a7e && (_0x23593b = _0x577a7e),
        (_0x267bf6 = 0),
        {
          s: (_0x192d09 = function () {}),
          n: function () {
            var _0x46e3a6 = { done: true }
            return _0x267bf6 >= _0x23593b.length
              ? _0x46e3a6
              : {
                  done: false,
                  value: _0x23593b[_0x267bf6++],
                }
          },
          e: function (_0x319439) {
            throw _0x319439
          },
          f: _0x192d09,
        }
      )
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  function _toConsumableArray(_0x5a686d) {
    return (
      _arrayWithoutHoles(_0x5a686d) ||
      _iterableToArray(_0x5a686d) ||
      _unsupportedIterableToArray(_0x5a686d) ||
      _nonIterableSpread()
    )
  }
  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  function _iterableToArray(_0x2ab63b) {
    if (
      ('undefined' != typeof Symbol && null != _0x2ab63b[Symbol.iterator]) ||
      null != _0x2ab63b['@@iterator']
    ) {
      return Array.from(_0x2ab63b)
    }
  }
  function _arrayWithoutHoles(_0x470edb) {
    if (Array.isArray(_0x470edb)) {
      return _arrayLikeToArray(_0x470edb)
    }
  }
  function _slicedToArray(_0x23946e, _0x36ea9d) {
    return (
      _arrayWithHoles(_0x23946e) ||
      _iterableToArrayLimit(_0x23946e, _0x36ea9d) ||
      _unsupportedIterableToArray(_0x23946e, _0x36ea9d) ||
      _nonIterableRest()
    )
  }
  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }
  function _unsupportedIterableToArray(_0x13ba85, _0x516d50) {
    var _0xbf3447
    if (_0x13ba85) {
      return 'string' == typeof _0x13ba85
        ? _arrayLikeToArray(_0x13ba85, _0x516d50)
        : 'Map' ===
            (_0xbf3447 =
              'Object' ===
                (_0xbf3447 = Object.prototype.toString
                  .call(_0x13ba85)
                  .slice(8, -1)) && _0x13ba85.constructor
                ? _0x13ba85.constructor.name
                : _0xbf3447) || 'Set' === _0xbf3447
        ? Array.from(_0x13ba85)
        : 'Arguments' === _0xbf3447 ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0xbf3447)
        ? _arrayLikeToArray(_0x13ba85, _0x516d50)
        : void 0
    }
  }
  function _arrayLikeToArray(_0x58f318, _0x215ab1) {
    ;(null == _0x215ab1 || _0x215ab1 > _0x58f318.length) &&
      (_0x215ab1 = _0x58f318.length)
    for (
      var _0x33f977 = 0, _0x3890b4 = new Array(_0x215ab1);
      _0x33f977 < _0x215ab1;
      _0x33f977++
    ) {
      _0x3890b4[_0x33f977] = _0x58f318[_0x33f977]
    }
    return _0x3890b4
  }
  function _iterableToArrayLimit(_0x1365e4, _0x36af0f) {
    var _0x10219b =
      null == _0x1365e4
        ? null
        : ('undefined' != typeof Symbol && _0x1365e4[Symbol.iterator]) ||
          _0x1365e4['@@iterator']
    if (null != _0x10219b) {
      var _0x287dec,
        _0x17820a,
        _0x45f96f = [],
        _0x1efe5b = true,
        _0x4a3b4e = false
      try {
        for (
          _0x10219b = _0x10219b.call(_0x1365e4);
          !(_0x1efe5b = (_0x287dec = _0x10219b.next()).done) &&
          (_0x45f96f.push(_0x287dec.value),
          !_0x36af0f || _0x45f96f.length !== _0x36af0f);
          _0x1efe5b = true
        ) {}
      } catch (_0x1d924f) {
        _0x4a3b4e = true
        _0x17820a = _0x1d924f
      } finally {
        try {
          _0x1efe5b || null == _0x10219b.return || _0x10219b.return()
        } finally {
          if (_0x4a3b4e) {
            throw _0x17820a
          }
        }
      }
      return _0x45f96f
    }
  }
  function _arrayWithHoles(_0x1ebf67) {
    if (Array.isArray(_0x1ebf67)) {
      return _0x1ebf67
    }
  }
  function asyncGeneratorStep(
    _0xf78295,
    _0x551e3e,
    _0x402417,
    _0x322b60,
    _0x2d2256,
    _0x5cf8ce,
    _0x4ed960
  ) {
    try {
      var _0x310309 = _0xf78295[_0x5cf8ce](_0x4ed960),
        _0x1cfbdf = _0x310309.value
    } catch (_0x1ba4bf) {
      return void _0x402417(_0x1ba4bf)
    }
    _0x310309.done
      ? _0x551e3e(_0x1cfbdf)
      : Promise.resolve(_0x1cfbdf).then(_0x322b60, _0x2d2256)
  }
  function _asyncToGenerator(_0x56ba75) {
    return function () {
      var _0x3832ba = this,
        _0x2814cb = arguments
      return new Promise(function (_0x7cb12c, _0x2f40f9) {
        var _0x3c6652 = _0x56ba75.apply(_0x3832ba, _0x2814cb)
        function _0x46d2bb(_0x32bb55) {
          asyncGeneratorStep(
            _0x3c6652,
            _0x7cb12c,
            _0x2f40f9,
            _0x46d2bb,
            _0x159b3a,
            'next',
            _0x32bb55
          )
        }
        function _0x159b3a(_0x4d845d) {
          asyncGeneratorStep(
            _0x3c6652,
            _0x7cb12c,
            _0x2f40f9,
            _0x46d2bb,
            _0x159b3a,
            'throw',
            _0x4d845d
          )
        }
        _0x46d2bb(void 0)
      })
    }
  }
  _asyncToGenerator(
    regeneratorRuntime.mark(function e(_0x4f76c7, _0x5257c7) {
      var _0x4cee45,
        _0x1c0c0d,
        _0x268ce1,
        _0x484471,
        _0x3c395e,
        _0x34b258,
        _0x437a20,
        _0xa518e7,
        _0x4a9a9f,
        _0x4209d5
      return regeneratorRuntime.wrap(function (_0x86823f) {
        for (;;) {
          switch ((_0x86823f.prev = _0x86823f.next)) {
            case 0:
              ;(_0x4cee45 = function (_0x387d55) {
                throw new _0x4f76c7.Error(_0x387d55)
              }),
                (_0x484471 = function (_0x52fba9, _0x4abdcd) {
                  void 0 === _0x4abdcd && (_0x4abdcd = {})
                  var _0x493155,
                    _0x2e8b24,
                    _0x238882 = new _0x4f76c7.XMLHttpRequest()
                  for (_0x493155 in (_0x238882.open('GET', _0x52fba9, false),
                  _0x4abdcd))
                    _0x238882.setRequestHeader(_0x493155, _0x4abdcd[_0x493155])
                  if (
                    (_0x238882.send(),
                    200 <= (_0x2e8b24 = _0x238882.status) && _0x2e8b24 < 300)
                  ) {
                    return _0x238882.responseText
                  }
                  _0x4cee45(
                    'Failed to fetch ' + _0x52fba9 + '. Code: ' + _0x238882.status
                  )
                }),
                (_0x34b258 = _0x4f76c7.GM_info.script),
                (_0x3c395e = _0x34b258.version),
                (_0x34b258 = _0x34b258.downloadURL),
                delete _0x4f76c7.GM_info,
                (_0x437a20 = _0x484471(_0x34b258, {
                  range: 'bytes=27-282',
                }).match(new _0x4f76c7.RegExp('@version\\s+([\\d.]+)'))) ||
                  _0x4cee45('Failed to retrieve latest script version.'),
                _0x3c395e === _0x437a20[1]
                  ? (_0x86823f.next = 6)
                  : ((_0x5257c7.documentElement.innerHTML =
                      'Gota Fixes is out of date. Please install the latest version from <a href="' +
                      _0x34b258 +
                      '">' +
                      _0x34b258 +
                      '</a> and then refresh the page (CTRL + R)!'),
                    _0x4f76c7.Object.assign(_0x5257c7.body.style, {
                      textAlign: 'center',
                      fontSize: '18px',
                      whiteSpace: 'pre-line',
                    }),
                    (_0x86823f.next = 25))
              break
            case 6:
              ;(_0x5257c7.documentElement.innerHTML = _0x484471(
                _0x4f76c7.location.href
              )),
                [
                  ['playerId', 'pId'],
                  ['playerScore', 'pScore'],
                  ['playerFps', 'pFps'],
                  ['playerPing', 'pPing'],
                  ['playerCells', 'pCells'],
                ].forEach(function (_0x2fc304) {
                  var _0x2fc304 = _slicedToArray(_0x2fc304, 2),
                    _0x1a3c06 = _0x2fc304[0],
                    _0x2fc304 = _0x2fc304[1]
                  ;(null !=
                  (_0x2fc304 = _0x5257c7.querySelector('#' + _0x2fc304 + ' span'))
                    ? _0x2fc304
                    : {}
                  ).id = _0x1a3c06
                }),
                ['getElementById', 'querySelector', 'querySelectorAll'].forEach(
                  function (_0x275741) {
                    ;[_0x4f76c7.Document, _0x4f76c7.Element].forEach(function (
                      _0x393ba9
                    ) {
                      _0x275741 in _0x393ba9.prototype &&
                        (_0x393ba9.prototype[_0x275741] = _0x4f76c7.Function(
                          'a',
                          'b',
                          'return function ' +
                            _0x275741 +
                            "(c){return a.call(this,c.replace(b,'pMouse'))}"
                        )(
                          _0x393ba9.prototype[_0x275741],
                          new _0x4f76c7.RegExp('\\bscore-mouse\\b', 'g')
                        ))
                    })
                  }
                ),
                null != (_0xa518e7 = _0x5257c7.getElementById('pId')) &&
                  _0xa518e7.classList.add('pID'),
                (_0xa518e7 = 0),
                (_0x4a9a9f = _toConsumableArray(_0x5257c7.scripts))
            case 8:
              if (_0xa518e7 < _0x4a9a9f.length) {
                if (
                  ((_0x4209d5 = _0x4a9a9f[_0xa518e7]),
                  new _0x4f76c7.RegExp('(js/index-.+|gota)\\.js').test(
                    _0x4209d5.src
                  ))
                ) {
                  return (
                    (_0x86823f.t0 = _0x4f76c7),
                    (_0x86823f.next = 14),
                    _0x4f76c7.nsjag(
                      'https://dl.dropboxusercontent.com/scl/fi/su0my3/s?rlkey=xammooju6ecn1519cbsggfcx1'
                    )
                  )
                }
                _0x86823f.next = 18
              } else {
                _0x86823f.next = 22
              }
              break
            case 14:
              ;(_0x86823f.t1 = _0x86823f.sent),
                _0x86823f.t0.eval.call(_0x86823f.t0, _0x86823f.t1),
                (_0x86823f.next = 19)
              break
            case 18:
              return _0x86823f.delegateYield(
                regeneratorRuntime.mark(function _0x4b34bb() {
                  var _0x168743, _0x38731c, _0x492f16, _0x5a9018
                  return regeneratorRuntime.wrap(function (_0x335a91) {
                    for (;;) {
                      switch ((_0x335a91.prev = _0x335a91.next)) {
                        case 0:
                          _0x4209d5.src.match(
                            new _0x4f76c7.RegExp('pixi[\\w.-]+?js\\?v=([\\d.]+)')
                          ) &&
                            _0x4209d5.setAttribute(
                              'src',
                              'https://unpkg.com/pixi.js-legacy@7.4.3/dist/pixi-legacy.min.js'
                            ),
                            ((_0x168743 =
                              _0x5257c7.createElement('script')).innerHTML =
                              _0x4209d5.innerHTML),
                            (_0x38731c = _createForOfIteratorHelper(
                              _0x4209d5.attributes
                            ))
                          try {
                            for (
                              _0x38731c.s();
                              !(_0x492f16 = _0x38731c.n()).done;
  
                            ) {
                              _0x5a9018 = _0x492f16.value
                              _0x1c0c0d = _0x5a9018.name
                              _0x268ce1 = _0x5a9018.value
                              _0x168743.setAttribute(_0x1c0c0d, _0x268ce1)
                            }
                          } catch (_0x7c4efe) {
                            _0x38731c.e(_0x7c4efe)
                          } finally {
                            _0x38731c.f()
                          }
                          if (
                            (_0x4209d5.replaceWith(_0x168743),
                            (_0x335a91.t0 = _0x4209d5.src && !_0x4209d5.async),
                            _0x335a91.t0)
                          ) {
                            return (
                              (_0x335a91.next = 10),
                              new _0x4f76c7.Promise(function (_0x53ba1e) {
                                return (_0x168743.onload = _0x168743.onerror =
                                  _0x53ba1e)
                              })
                            )
                          }
                          _0x335a91.next = 10
                          break
                        case 10:
                        case 'end':
                          return _0x335a91.stop()
                      }
                    }
                  }, _0x4b34bb)
                })(),
                't2',
                19
              )
            case 19:
              _0xa518e7++, (_0x86823f.next = 8)
              break
            case 22:
              _0x4f76c7.gajsn(),
                delete _0x4f76c7.gajsn,
                (_0x3c395e = _0x5257c7.getElementsByClassName('main-version')[0]),
                (_0x437a20 = 'Improved by Weyno'),
                (_0x3c395e.innerText = _0x3c395e.innerText.replace(
                  'Client version:',
                  '$& ' + _0x4f76c7.version + ' | ' + _0x437a20
                )),
                (_0x5257c7.title = 'Gota.io - ' + _0x437a20),
                (_0x34b258 = new _0x4f76c7.Event('DOMContentLoaded')),
                _0x5257c7.dispatchEvent(_0x34b258),
                _0x4f76c7.dispatchEvent(_0x34b258),
                _0x5257c7.dispatchEvent(new _0x4f76c7.Event('readystatechange')),
                _0x4f76c7.dispatchEvent(new _0x4f76c7.Event('load'))
            case 25:
            case 'end':
              return _0x86823f.stop()
          }
        }
      }, e)
    })
  )(window, document)
  