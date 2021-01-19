module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Giba\\Desktop\\imersao04\\site\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Home() {
  const {
    0: orcamento,
    1: setOrcamento
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    email: '',
    phone: '',
    whatsApp: '',
    msg: ''
  });
  const {
    0: response,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    formSave: false,
    type: '',
    message: ''
  });

  const onChangeInput = e => setOrcamento(_objectSpread(_objectSpread({}, orcamento), {}, {
    [e.target.name]: e.target.value
  }));

  const sendOrcamento = async e => {
    e.preventDefault();
    setResponse({
      formSave: true
    });

    try {
      const res = await fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseEnv = await res.json(); //console.log(responseEnv.error);

      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        });
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        });
      }
    } catch (err) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Erro: Solicitação de orçamento não enviado com sucesso, tente mais tarde!'
      });
    }
  };

  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      color: "info",
      dark: true,
      expand: "md",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
          href: "/",
          children: "Inicial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
            className: "mr-auto",
            navbar: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                href: "/",
                children: "Or\xE7amento"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
      className: "pg-orcamento",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: `.pg-orcamento{
                        background-color: #f5fbfa;
                        color: #17a2b8;
                        padding-top: 50px;
                        padding-bottom: 100px;
                        margin-bottom: 0rem !important;
                    }`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4 text-center",
          children: "Nossos consultores est\xE3o prontos para lhe ajudar!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead text-center mb-4",
          children: "Deixe seus contatos abaixo que retornaremos com uma proposta espec\xEDfica para sua necessidade."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
          color: "danger",
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 49
        }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
          color: "success",
          children: response.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 51
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          onSubmit: sendOrcamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Preencha com o nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Preencha com o seu melhor",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(XX) XXXX-XXXX",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "whatsApp",
              children: "WhatsApp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "text",
              name: "whatsApp",
              id: "whatsApp",
              placeholder: "(XX) XXXX-XXXX",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
              for: "msg",
              children: "Conte\xFAdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              type: "textarea",
              name: "msg",
              id: "msg",
              placeholder: "Fale um pouco do seu projeto",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "submit",
            outline: true,
            color: "info",
            disabled: true,
            children: "Enviando..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 46
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "submit",
            outline: true,
            color: "info",
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 121
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
      fluid: true,
      className: "rodape bg-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: `.rodape{
                        color: #fff;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        margin-bottom: 0rem !important;
                    }`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "lead text-center",
          children: "Rodap\xE9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiSG9tZSIsIm9yY2FtZW50byIsInNldE9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c0FwcCIsIm1zZyIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRPcmNhbWVudG8iLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2VFbnYiLCJqc29uIiwiZXJyb3IiLCJlcnIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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O0FBQUEsa0JBMUJwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkosZUFnRUkscUVBQUMsb0RBQUQ7QUFBVyxXQUFLLE1BQWhCO0FBQWlCLGVBQVMsRUFBQyxnQkFBM0I7QUFBQSw4QkFDSTtBQUFBLGtCQUNNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBU0kscUVBQUMsb0RBQUQ7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0ZIOztBQUVjWCxtRUFBZixFOzs7Ozs7Ozs7OztBQy9KQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXZiYXJCcmFuZCxcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgSnVtYm90cm9uLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1Hcm91cCxcclxuICAgIExhYmVsLFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBBbGVydFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICB3aGF0c0FwcDogJycsXHJcbiAgICAgICAgbXNnOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRPcmNhbWVudG8oeyAuLi5vcmNhbWVudG8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuXHJcbiAgICBjb25zdCBzZW5kT3JjYW1lbnRvID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlKHtmb3JtU2F2ZTogdHJ1ZX0pO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9vcmNhbWVudG8nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9yY2FtZW50byksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlRW52LmVycm9yKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VFbnYuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvOiBTb2xpY2l0YcOnw6NvIGRlIG9yw6dhbWVudG8gbsOjbyBlbnZpYWRvIGNvbSBzdWNlc3NvLCB0ZW50ZSBtYWlzIHRhcmRlISdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwiaW5mb1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+SW5pY2lhbDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiPk9yw6dhbWVudG88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICAgICA8SnVtYm90cm9uIGNsYXNzTmFtZT1cInBnLW9yY2FtZW50b1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgLnBnLW9yY2FtZW50b3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmJmYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxN2EyYjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5Ob3Nzb3MgY29uc3VsdG9yZXMgZXN0w6NvIHByb250b3MgcGFyYSBsaGUgYWp1ZGFyITwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCB0ZXh0LWNlbnRlciBtYi00XCI+RGVpeGUgc2V1cyBjb250YXRvcyBhYmFpeG8gcXVlIHJldG9ybmFyZW1vcyBjb20gdW1hIHByb3Bvc3RhIGVzcGVjw61maWNhIHBhcmEgc3VhIG5lY2Vzc2lkYWRlLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3BvbnNlLnR5cGUgPT09ICdlcnJvcic/IDxBbGVydCBjb2xvcj1cImRhbmdlclwiPntyZXNwb25zZS5tZXNzYWdlfTwvQWxlcnQ+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UudHlwZSA9PT0gJ3N1Y2Nlc3MnPyA8QWxlcnQgY29sb3I9XCJzdWNjZXNzXCI+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9BbGVydD4gOiBcIlwifVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17c2VuZE9yY2FtZW50b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIlByZWVuY2hhIGNvbSBvIG5vbWUgY29tcGxldG9cIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJQcmVlbmNoYSBjb20gbyBzZXUgbWVsaG9yXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJwaG9uZVwiPlRlbGVmb25lPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIihYWCkgWFhYWC1YWFhYXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJ3aGF0c0FwcFwiPldoYXRzQXBwPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ3aGF0c0FwcFwiIGlkPVwid2hhdHNBcHBcIiBwbGFjZWhvbGRlcj1cIihYWCkgWFhYWC1YWFhYXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJtc2dcIj5Db250ZcO6ZG88L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJtc2dcIiBpZD1cIm1zZ1wiIHBsYWNlaG9sZGVyPVwiRmFsZSB1bSBwb3VjbyBkbyBzZXUgcHJvamV0b1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS5mb3JtU2F2ZSA/IDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG91dGxpbmUgY29sb3I9XCJpbmZvXCIgZGlzYWJsZWQ+RW52aWFuZG8uLi48L0J1dHRvbj4gOiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvdXRsaW5lIGNvbG9yPVwiaW5mb1wiPkVudmlhcjwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJyb2RhcGUgYmctaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgLnJvZGFwZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxlYWQgdGV4dC1jZW50ZXJcIj5Sb2RhcMOpPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==