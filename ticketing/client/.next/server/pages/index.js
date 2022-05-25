"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // we are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixpRUFBZ0IsRUFBQyxDQUFDQyxHQUFHLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDekIsRUFBRSxFQUFFLElBQTZCLEVBQUUsQ0FBQztRQUNoQyxFQUF1QjtRQUN2QixNQUFNLENBQUNELG1EQUFZLENBQUMsQ0FBQztZQUNqQkcsT0FBTyxFQUFFLENBQWlFO1lBQzFFQyxPQUFPLEVBQUVILEdBQUcsQ0FBQ0csT0FBTztRQUN4QixDQUFDO0lBQ0wsQ0FBQyxNQUFNLEVBS047QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vYXBpL2J1aWxkLWNsaWVudC5qcz9jNmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyByZXEgfSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gd2UgYXJlIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9pbmdyZXNzLW5naW54LWNvbnRyb2xsZXIuaW5ncmVzcy1uZ2lueC5zdmMuY2x1c3Rlci5sb2NhbCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB3ZSBhcmUgb24gdGhlIGJyb3dzZXJcclxuICAgICAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogJy8nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\n\nconst LandingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are signed\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\louie\\\\Desktop\\\\Code\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 24\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are NOT signed in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\louie\\\\Desktop\\\\Code\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 50\n    }, undefined);\n};\nLandingPage.getInitialProps = async (context)=>{\n    const build = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(context);\n    const { data  } = await build.get('/api/users/currentuser');\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ29CO0FBRTdDLEtBQUssQ0FBQ0UsV0FBVyxJQUFJLENBQUMsQ0FBQ0MsV0FBVyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQ0EsV0FBVywrRUFBSUMsQ0FBRTtrQkFBQyxDQUFjOzs7OztnR0FBU0EsQ0FBRTtrQkFBQyxDQUFxQjs7Ozs7O0FBQzFFLENBQUM7QUFFREYsV0FBVyxDQUFDRyxlQUFlLFVBQVVDLE9BQU8sR0FBSyxDQUFDO0lBQ2hELEtBQUssQ0FBQ0MsS0FBSyxHQUFHTiw2REFBVyxDQUFDSyxPQUFPO0lBQ2pDLEtBQUssQ0FBQyxDQUFDRSxDQUFBQSxJQUFJLEdBQUMsR0FBRyxLQUFLLENBQUNELEtBQUssQ0FBQ0UsR0FBRyxDQUFDLENBQXdCO0lBQ3ZELE1BQU0sQ0FBQ0QsSUFBSTtBQUNiLENBQUM7QUFFRCxpRUFBZU4sV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCdcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKHsgY3VycmVudFVzZXIgfSkgPT4ge1xyXG4gIHJldHVybiBjdXJyZW50VXNlciA/IDxoMT5Zb3UgYXJlIHNpZ25lZDwvaDE+IDogPGgxPllvdSBhcmUgTk9UIHNpZ25lZCBpbjwvaDE+XHJcbn1cclxuXHJcbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYnVpbGQgPSBidWlsZENsaWVudChjb250ZXh0KVxyXG4gIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGJ1aWxkLmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpXHJcbiAgcmV0dXJuIGRhdGFcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJidWlsZENsaWVudCIsIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJidWlsZCIsImRhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();