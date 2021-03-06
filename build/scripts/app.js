/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/app.ts":
/*!***********************************!*\
  !*** ./src/assets/scripts/app.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_numberFormater_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/numberFormater.js */ "./src/assets/scripts/utils/numberFormater.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/accordion */ "./src/components/accordion/index.js");


Object(_utils_numberFormater_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
/**
 * Аккордион
 */
var accordion = new _components_accordion__WEBPACK_IMPORTED_MODULE_1__["default"]();
accordion.init({
    selector: '.j-accordion',
    selectorParentData: 'data-item',
    selectorBtnData: 'data-btn',
    selectorBodyData: 'data-body',
    activeClassParent: 'accordion__item_active',
    activeClassBtn: 'accordion__btn_active',
    activeClassBody: 'accordion__body_active',
    closeOthers: true
});


/***/ }),

/***/ "./src/assets/scripts/utils/numberFormater.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/utils/numberFormater.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (number => number);

/***/ }),

/***/ "./src/components/accordion/index.js":
/*!*******************************************!*\
  !*** ./src/components/accordion/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Accordion {
  constructor() {
    // Опции по умолчанию
    this.defaultOptions = {
      selector: '.j-accordion',
      selectorParentData: 'data-item',
      selectorBtnData: 'data-btn',
      selectorBodyData: 'data-body',
      activeClassParent: 'accordion__item_active',
      activeClassBtn: 'accordion__btn_active',
      activeClassBody: 'accordion__body_active',
      closeOthers: true
    };
  }
  /**
   * Иницализирует модуль
   * @param {object} options - опции аккордиона
   */


  init(options) {
    // применение опций из настроек
    this.optionsUpdate(options);
    this.accordionList(this.defaultOptions.selector);
  }
  /**
   * Получает список аккордионов
   * @param {object} wrapper - обёртка аккордиона
   */


  accordionList(wrapper) {
    this.accordionList = Array.from(document.querySelectorAll(wrapper));

    if (!this.accordionList.length) {
      return;
    }

    this.accordionList.forEach(item => {
      this.bindEvents(item);
    });
  }
  /**
   * Навешивает обработчик событий
   * @param {object} item - аккордион
   */


  bindEvents(item) {
    item.addEventListener('click', event => {
      const btn = event.target.closest(`[data-${this.defaultOptions.selectorBtnData}]`);

      if (!btn) {
        return;
      } // Получаем контент


      const body = item.querySelector(`[data-${this.defaultOptions.selectorBodyData}='${btn.dataset[this.defaultOptions.selectorBtnData]}']`); // Получаем родителя

      const parent = event.target.closest(`[data-${this.defaultOptions.selectorParentData}]`);
      const isActive = btn.classList.contains(this.defaultOptions.activeClassBtn);

      if (isActive) {
        // Закрываем аккардеон
        this.close(btn, this.defaultOptions.activeClassBtn);

        if (parent) {
          this.close(parent, this.defaultOptions.activeClassParent);
        }

        if (body) {
          this.close(body, this.defaultOptions.activeClassBody);
        }
      } else {
        // Закрываем другие аккардеоны если нужно
        if (this.defaultOptions.closeOthers) {
          this.closeOthers(parent);
        } // Открываем аккардеон


        this.open(btn, this.defaultOptions.activeClassBtn);

        if (parent) {
          this.open(parent, this.defaultOptions.activeClassParent);
        }

        if (body) {
          this.open(body, this.defaultOptions.activeClassBody);
        }
      }
    });
  }

  nextItems(element, elementsList = []) {
    const nextElement = element.nextElementSibling;

    if (nextElement) {
      elementsList.push(nextElement);
      this.nextItems(nextElement, elementsList);
    }

    return elementsList;
  }

  prevItems(element, elementsList = []) {
    const prevElement = element.previousElementSibling;

    if (prevElement) {
      elementsList.push(prevElement);
      this.prevItems(prevElement, elementsList);
    }

    return elementsList;
  }

  nighboursItems(element) {
    return [...this.prevItems(element), ...this.nextItems(element)];
  }
  /**
   * Переключает класс элемента аккардиона
   * @param {object} element - текущий элемент
   * @param {object} elementClass -  перключаемый класс
   */


  open(element, elementClass) {
    element.classList.add(elementClass);
  }
  /**
   * Переключает класс элемента аккардиона
   * @param {object} element - текущий элемент
   * @param {object} elementClass -  перключаемый класс
   */


  close(element, elementClass) {
    element.classList.remove(elementClass);
  }
  /**
   * Применяет пользовательские опции
   * @param {object} options - текущий элемент аккардиона
   */


  optionsUpdate(options) {
    if (options) {
      for (const key in options) {
        if (this.defaultOptions[key]) {
          this.defaultOptions[key] = options[key];
        } else {
          console.log(`Опции: ${key}, нет для аккордиона`);
        }

        if (key === 'selectorParentData' || key === 'selectorBtnData' || key === 'selectorBodyData') {
          this.defaultOptions[key] = this.defaultOptions[key].replace(/data-{1}/i, '');
        }
      }
    }
  }
  /**
   * Если изначально установлен активный класс, то метод откроет аккордион.
   * @private
   */


  checkActiveState() {
    const isActive = this.wrapper.classList.contains(this.defaultOptions.activeClassParent);

    if (isActive) {
      this.contentWrapper.style.height = `${this.height}px`;
      this.state = 'open';
    }
  }
  /**
   * Если при открытии аккардеона другие нужно закрывать
   * @private
   */


  closeOthers(item) {
    const nightboursList = this.nighboursItems(item);
    console.log(nightboursList); // if (this.defaultOptions.closeOthers === true) {
    //   const itemActivies = item.querySelectorAll(`
    //     .${this.defaultOptions.activeClassParent},
    //     .${this.defaultOptions.activeClassBtn},
    //     .${this.defaultOptions.activeClassBody}`);
    // console.log(itemActivies);
    //

    if (nightboursList.length) {
      nightboursList.forEach(el => {
        el.classList.remove(`${this.defaultOptions.activeClassParent}`);
        el.classList.remove(`${this.defaultOptions.activeClassBtn}`);
        el.classList.remove(`${this.defaultOptions.activeClassBody}`);
      });
    } // }

  }

}

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ })

/******/ });
//# sourceMappingURL=app.js.map