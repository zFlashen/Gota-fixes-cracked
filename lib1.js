function f(p, p2) {
    var v;
    var v2;
    var v3;
    var v4;
    var v5 = typeof Symbol != "undefined" && p[Symbol.iterator] || p["@@iterator"];
    if (v5) {
      v2 = !(v = !0);
      return {
        s: function () {
          v5 = v5.call(p);
        },
        n: function () {
          var v6 = v5.next();
          v = v6.done;
          return v6;
        },
        e: function (p3) {
          v2 = !0;
          v3 = p3;
        },
        f: function () {
          try {
            if (!v && v5.return != null) {
              v5.return();
            }
          } finally {
            if (v2) {
              throw v3;
            }
          }
        }
      };
    }
    if (Array.isArray(p) || (v5 = f8(p)) || p2 && p && typeof p.length == "number") {
      if (v5) {
        p = v5;
      }
      v4 = 0;
      return {
        s: p2 = function () {},
        n: function () {
          var vO = {
            done: !0
          };
          if (v4 >= p.length) {
            return vO;
          } else {
            return {
              done: false,
              value: p[v4++]
            };
          }
        },
        e: function (p4) {
          throw p4;
        },
        f: p2
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f2(p5) {
    return f5(p5) || f4(p5) || f8(p5) || f3();
  }
  function f3() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f4(p6) {
    if (typeof Symbol != "undefined" && p6[Symbol.iterator] != null || p6["@@iterator"] != null) {
      return Array.from(p6);
    }
  }
  function f5(p7) {
    if (Array.isArray(p7)) {
      return f9(p7);
    }
  }
  function f6(p8, p9) {
    return f11(p8) || f10(p8, p9) || f8(p8, p9) || f7();
  }
  function f7() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function f8(p10, p11) {
    var v7;
    if (p10) {
      if (typeof p10 == "string") {
        return f9(p10, p11);
      } else if ((v7 = (v7 = Object.prototype.toString.call(p10).slice(8, -1)) === "Object" && p10.constructor ? p10.constructor.name : v7) === "Map" || v7 === "Set") {
        return Array.from(p10);
      } else if (v7 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v7)) {
        return f9(p10, p11);
      } else {
        return undefined;
      }
    }
  }
  function f9(p12, p13) {
    if (p13 == null || p13 > p12.length) {
      p13 = p12.length;
    }
    for (var vLN0 = 0, v8 = new Array(p13); vLN0 < p13; vLN0++) {
      v8[vLN0] = p12[vLN0];
    }
    return v8;
  }
  function f10(p14, p15) {
    var v9 = p14 == null ? null : typeof Symbol != "undefined" && p14[Symbol.iterator] || p14["@@iterator"];
    if (v9 != null) {
      var v10;
      var v11;
      var vA = [];
      var v12 = !0;
      var v13 = !1;
      try {
        for (v9 = v9.call(p14); !(v12 = (v10 = v9.next()).done) && (vA.push(v10.value), !p15 || vA.length !== p15); v12 = !0);
      } catch (e2) {
        v13 = !0;
        v11 = e2;
      } finally {
        try {
          if (!v12 && v9.return != null) {
            v9.return();
          }
        } finally {
          if (v13) {
            throw v11;
          }
        }
      }
      return vA;
    }
  }
  function f11(p16) {
    if (Array.isArray(p16)) {
      return p16;
    }
  }
  function f12(p17, p18, p19, p20, p21, p22, p23) {
    try {
      var v14 = p17[p22](p23);
      var v15 = v14.value;
    } catch (e3) {
      p19(e3);
      return;
    }
    if (v14.done) {
      p18(v15);
    } else {
      Promise.resolve(v15).then(p20, p21);
    }
  }
  function f13(p24) {
    return function () {
      var vThis = this;
      var vArguments = arguments;
      return new Promise(function (p25, p26) {
        var v16 = p24.apply(vThis, vArguments);
        function f14(p27) {
          f12(v16, p25, p26, f14, f15, "next", p27);
        }
        function f15(p28) {
          f12(v16, p25, p26, f14, f15, "throw", p28);
        }
        f14(undefined);
      });
    };
  }
  f13(regeneratorRuntime.mark(function f16(p29, p30) {
    var v17;
    var v18;
    var v19;
    var v20;
    var v21;
    var v22;
    var v23;
    var v24;
    var v25;
    var v26;
    var v27;
    var v28;
    var v29;
    var v30;
    return regeneratorRuntime.wrap(function (p31) {
      while (true) {
        switch (p31.prev = p31.next) {
          case 0:
            var vO2 = {
              range: "bytes=27-282"
            };
            v17 = function (p32) {
              throw new p29.Error(p32);
            };
            v21 = function (p33, p34 = {}) {
              var v31;
              var v32 = new p29.XMLHttpRequest();
              v32.open("GET", p33, false);
              for (v31 in p34) {
                v32.setRequestHeader(v31, p34[v31]);
              }
              v32.send();
              var v33 = v32.status;
              if (v33 >= 200 && v33 < 300) {
                return v32.responseText;
              }
              v17("Failed to fetch " + p33 + ". Code: " + v32.status);
            };
            v23 = p29.GM_info.script;
            v22 = v23.version;
            v23 = v23.downloadURL;
            delete p29.GM_info;
            if (!(v24 = v21(v23, vO2).match(new p29.RegExp("@version\\s+([\\d.]+)")))) {
              v17("Failed to retrieve latest script version.");
            }
            if (v22 === v24[1]) {
              p31.next = 6;
            } else {
              p30.documentElement.innerHTML = "Gota Fixes is out of date. Please install the latest version from <a href=\"" + v23 + "\">" + v23 + "</a> and then refresh the page (CTRL + R)!";
              p29.Object.assign(p30.body.style, {
                textAlign: "center",
                fontSize: "18px",
                whiteSpace: "pre-line"
              });
              p31.next = 27;
            }
            break;
          case 6:
            p30.documentElement.innerHTML = v21(p29.location.href);
            v25 = 0;
            v26 = [["playerId", "pId"], ["playerScore", "pScore"], ["playerFps", "pFps"], ["playerPing", "pPing"], ["playerCells", "pCells"]];
            for (; v25 < v26.length; v25++) {
              v27 = f6(v26[v25], 2);
              v18 = v27[0];
              v27 = v27[1];
              if ((v27 = p30.querySelector("#" + v27 + " span")) != null) {
                v27.id = v18;
              }
            }
            ["getElementById", "querySelector", "querySelectorAll"].forEach(function (p35) {
              [p29.Document, p29.Element].forEach(function (p36) {
                if (p35 in p36.prototype) {
                  p36.prototype[p35] = p29.Function("a", "b", "return function " + p35 + "(c){return a.call(this,c.replace(b,'pMouse'))}")(p36.prototype[p35], new p29.RegExp("\\bscore-mouse\\b", "g"));
                }
              });
            });
            if ((v28 = p30.getElementById("pId")) != null) {
              v28.classList.add("pID");
            }
            v28 = 0;
            v29 = f2(p30.scripts);
          case 10:
            if (v28 < v29.length) {
              if ((v30 = v29[v28]).src.includes("gota.js")) {
                p31.t0 = p29;
                p31.next = 16;
                return p29.nsjag("https://zflashen.github.io/Gota-fixes-cracked/lib2.js");
              }
              p31.next = 20;
            } else {
              p31.next = 24;
            }
            break;
          case 16:
            p31.t1 = p31.sent;
            p31.t0.eval.call(p31.t0, p31.t1);
            p31.next = 21;
            break;
          case 20:
            return p31.delegateYield(regeneratorRuntime.mark(function f17() {
              var v34;
              var v35;
              var v36;
              var v37;
              return regeneratorRuntime.wrap(function (p37) {
                while (true) {
                  switch (p37.prev = p37.next) {
                    case 0:
                      if (v30.src.match(new p29.RegExp("pixi[\\w.-]+?js\\?v=([\\d.]+)"))) {
                        v30.setAttribute("src", "https://unpkg.com/pixi.js-legacy@7.2.4/dist/pixi-legacy.min.js");
                      }
                      (v34 = p30.createElement("script")).innerHTML = v30.innerHTML;
                      v35 = f(v30.attributes);
                      try {
                        for (v35.s(); !(v36 = v35.n()).done;) {
                          v37 = v36.value;
                          v19 = v37.name;
                          v20 = v37.value;
                          v34.setAttribute(v19, v20);
                        }
                      } catch (e4) {
                        v35.e(e4);
                      } finally {
                        v35.f();
                      }
                      v30.replaceWith(v34);
                      p37.t0 = v30.src && !v30.async;
                      if (p37.t0) {
                        p37.next = 10;
                        return new p29.Promise(function (p38) {
                          return v34.onload = v34.onerror = p38;
                        });
                      }
                      p37.next = 10;
                      break;
                    case 10:
                    case "end":
                      return p37.stop();
                  }
                }
              }, f17);
            })(), "t2", 21);
          case 21:
            v28++;
            p31.next = 10;
            break;
          case 24:
            p29.gajsn();
            delete p29.gajsn;
            v22 = p30.getElementsByClassName("main-version")[0];
            v24 = "Improved by Weyno";
            v22.innerText = v22.innerText.replace("Client version:", "$& " + p29.version + " | " + v24);
            p30.title = "Gota.io - " + v24;
            v23 = new p29.Event("DOMContentLoaded");
            p30.dispatchEvent(v23);
            p29.dispatchEvent(v23);
            p30.dispatchEvent(new p29.Event("readystatechange"));
            p29.dispatchEvent(new p29.Event("load"));
          case 27:
          case "end":
            return p31.stop();
        }
      }
    }, f16);
  }))(window, document);
