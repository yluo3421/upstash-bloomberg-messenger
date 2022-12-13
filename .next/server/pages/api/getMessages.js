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
exports.id = "pages/api/getMessages";
exports.ids = ["pages/api/getMessages"];
exports.modules = {

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "(api)/./pages/api/getMessages.ts":
/*!**********************************!*\
  !*** ./pages/api/getMessages.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redis */ \"(api)/./redis.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        res.status(405).json({\n            body: \"Method Not Aloowed\"\n        });\n        return;\n    }\n    const messagesRes = await _redis__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hvals(\"messages\");\n    const messages = messagesRes.map((message)=>JSON.parse(message)).sort((a, b)=>a.created_at - b.created_at);\n    res.status(200).json({\n        messages\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TWVzc2FnZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFFN0M7QUFXakIsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFzQyxFQUN0QztJQUNFLElBQUtELElBQUlFLE1BQU0sS0FBSyxPQUFRO1FBQ3hCRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU07UUFBb0I7UUFDakQ7SUFDSixDQUFDO0lBQ0QsTUFBTUMsY0FBYyxNQUFNUixvREFBVyxDQUFDO0lBQ3RDLE1BQU1VLFdBQ0ZGLFlBQVlHLEdBQUcsQ0FBQyxDQUFDQyxVQUFpQkMsS0FBS0MsS0FBSyxDQUFDRixVQUFVRyxJQUFJLENBQUMsQ0FBQ0MsR0FBV0MsSUFBY0QsRUFBRUUsVUFBVSxHQUFHRCxFQUFFQyxVQUFVO0lBQ3JIZixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVJO0lBQVM7QUFDcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9nZXRNZXNzYWdlcy50cz83ZDI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHJlZGlzIGZyb20gXCIuLi8uLi9yZWRpc1wiO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL3R5cGluZ3MnO1xuXG50eXBlIERhdGEgPSB7XG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XG59XG5cbnR5cGUgRXJyb3JEYXRhID0ge1xuICAgIGJvZHk6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhIHwgRXJyb3JEYXRhPlxuKSB7XG4gICAgaWYgKCByZXEubWV0aG9kICE9PSAnR0VUJyApIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBib2R5OiBcIk1ldGhvZCBOb3QgQWxvb3dlZFwifSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZXNSZXMgPSBhd2FpdCByZWRpcy5odmFscygnbWVzc2FnZXMnKTtcbiAgICBjb25zdCBtZXNzYWdlczogTWVzc2FnZVtdID0gXG4gICAgICAgIG1lc3NhZ2VzUmVzLm1hcCgobWVzc2FnZTogYW55KSA9PiBKU09OLnBhcnNlKG1lc3NhZ2UpKS5zb3J0KChhOk1lc3NhZ2UsIGI6TWVzc2FnZSkgPT4gYS5jcmVhdGVkX2F0IC0gYi5jcmVhdGVkX2F0KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZXMgfSlcbn1cbiJdLCJuYW1lcyI6WyJyZWRpcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiYm9keSIsIm1lc3NhZ2VzUmVzIiwiaHZhbHMiLCJtZXNzYWdlcyIsIm1hcCIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getMessages.ts\n");

/***/ }),

/***/ "(api)/./redis.ts":
/*!******************!*\
  !*** ./redis.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Redis = __webpack_require__(/*! ioredis */ \"ioredis\");\nconst redis = new Redis(process.env.REDIS_URL);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redis);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9yZWRpcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUUMsbUJBQU9BLENBQUMsd0JBQVM7QUFFL0IsTUFBTUMsUUFBUSxJQUFJRixNQUFNRyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7QUFFN0MsaUVBQWVILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWRpcy50cz9mMDg0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlZGlzID0gcmVxdWlyZShcImlvcmVkaXNcIik7XG5cbmNvbnN0IHJlZGlzID0gbmV3IFJlZGlzKHByb2Nlc3MuZW52LlJFRElTX1VSTCEpO1xuXG5leHBvcnQgZGVmYXVsdCByZWRpczsiXSwibmFtZXMiOlsiUmVkaXMiLCJyZXF1aXJlIiwicmVkaXMiLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./redis.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getMessages.ts"));
module.exports = __webpack_exports__;

})();