// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"mpVp":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  //  cards
  var linkBtn = document.querySelector('.services-btn');
  var cardsParent = document.querySelector('.services-prices');
  var cards = document.querySelectorAll('.services-price');
  cardsParent.addEventListener('click', function (e) {
    cards.forEach(function (card, idx) {
      card.classList.remove('_active');

      if (e.target === card || e.target.parentNode === card || e.target.parentNode.parentNode === card) {
        card.classList.add('_active');

        if (idx === 0) {
          linkBtn.href = 'https://www.google.com/search?q=1';
        } else if (idx === 1) {
          linkBtn.href = 'https://www.google.com/search?q=2';
        } else if (idx === 2) {
          linkBtn.href = 'https://www.google.com/search?q=3';
        }
      }
    });
  }); //  slider

  var slider = document.querySelector('.slider');
  var slides = document.querySelectorAll('.slider-item');
  var sliderTrack = document.querySelector('.slider-track');
  var currentWidth = parseInt(window.getComputedStyle(slides[0]).width);
  var currentSlide = 0;

  function swipeRight() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentWidth;
    sliderTrack.style.transition = '0.5s';
    currentSlide++;
    sliderTrack.style.transform = "translateX(-".concat((currentWidth + 7.5) * currentSlide, "px)");

    if (currentSlide === slides.length - 1) {
      clearInterval(interval);
    }
  }

  function swipeLeft() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentWidth;
    sliderTrack.style.transition = '0.5s';
    currentSlide--;
    sliderTrack.style.transform = "translateX(-".concat((currentWidth + 7.5) * currentSlide, "px)");
  }

  var interval = null;

  function autoPlay() {
    interval = setInterval(swipeRight, 5000);
  }

  autoPlay(); //  swipe

  var startX = null;
  var currentX = null;
  var resultX = null;
  slider.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });
  slider.addEventListener('touchmove', function (e) {
    clearInterval(interval);
    currentX = e.touches[0].clientX;
    resultX = startX - currentX;
  });
  slider.addEventListener('touchend', function () {
    if (resultX > 0 && currentSlide !== slides.length - 1) {
      swipeRight();
    } else if (resultX < 0 && currentSlide) {
      swipeLeft();
    }
  }); //  dark theme

  var buttonsPar = document.querySelector('.header-buttons');
  var buttons = document.querySelectorAll('.header-btn');
  var moonBtn = document.querySelector('#header-btn__moon');
  var body = document.querySelector('body');
  buttonsPar.addEventListener('click', function (e) {
    buttons.forEach(function (btn) {
      btn.classList.toggle('_active');
    });

    if (e.target !== moonBtn || e.target.parentNode !== moonBtn) {
      body.classList.toggle('dark');
    }
  });
});
},{}]},{},["mpVp"], null)