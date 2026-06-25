/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behaviour.js"
/*!**************************!*\
  !*** ./src/behaviour.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkItem: () => (/* binding */ checkItem),\n/* harmony export */   note: () => (/* binding */ note)\n/* harmony export */ });\n// As I develop this functionality, decide if I can merge the common\n// attributes (setText, getText) into one handleText function\nfunction checkItem(text) {\n    // want it to be editable so use let\n    let item = text;\n    const id = crypto.randomUUID();\n    let isChecked = false;\n\n    // deal with backspacing behaviour later\n    const editText = (text) => {\n        item = text;\n    }\n\n    // change checked status\n    const changeChecked = () => {\n        if (isChecked) {\n            isChecked = false;\n        } else {\n            isChecked = true;\n        }\n    }\n\n    const getText = () => item;\n    return {editText, getText, changeChecked};\n}\n\nfunction note(text) {\n    let note = text;\n    const id = crypto.randomUUID();\n\n    const editText = (text) => {\n        note = text;\n    }\n\n    const getText = () => note;\n    return {editText, getText};\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmVoYXZpb3VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXRvZG8tYXBwLy4vc3JjL2JlaGF2aW91ci5qcz9jMDQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFzIEkgZGV2ZWxvcCB0aGlzIGZ1bmN0aW9uYWxpdHksIGRlY2lkZSBpZiBJIGNhbiBtZXJnZSB0aGUgY29tbW9uXG4vLyBhdHRyaWJ1dGVzIChzZXRUZXh0LCBnZXRUZXh0KSBpbnRvIG9uZSBoYW5kbGVUZXh0IGZ1bmN0aW9uXG5mdW5jdGlvbiBjaGVja0l0ZW0odGV4dCkge1xuICAgIC8vIHdhbnQgaXQgdG8gYmUgZWRpdGFibGUgc28gdXNlIGxldFxuICAgIGxldCBpdGVtID0gdGV4dDtcbiAgICBjb25zdCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgLy8gZGVhbCB3aXRoIGJhY2tzcGFjaW5nIGJlaGF2aW91ciBsYXRlclxuICAgIGNvbnN0IGVkaXRUZXh0ID0gKHRleHQpID0+IHtcbiAgICAgICAgaXRlbSA9IHRleHQ7XG4gICAgfVxuXG4gICAgLy8gY2hhbmdlIGNoZWNrZWQgc3RhdHVzXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGV4dCA9ICgpID0+IGl0ZW07XG4gICAgcmV0dXJuIHtlZGl0VGV4dCwgZ2V0VGV4dCwgY2hhbmdlQ2hlY2tlZH07XG59XG5cbmZ1bmN0aW9uIG5vdGUodGV4dCkge1xuICAgIGxldCBub3RlID0gdGV4dDtcbiAgICBjb25zdCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG5cbiAgICBjb25zdCBlZGl0VGV4dCA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIG5vdGUgPSB0ZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRleHQgPSAoKSA9PiBub3RlO1xuICAgIHJldHVybiB7ZWRpdFRleHQsIGdldFRleHR9O1xufVxuXG5leHBvcnQge2NoZWNrSXRlbSwgbm90ZX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/behaviour.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\n\n// New board\nconst myBoard = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"My Board\");\n\n// Add lists to the board\nconst list1 = myBoard.addList(\"List 1\");\nconst list2 = myBoard.addList(\"List 2\");\nconst list3 = myBoard.addList(\"List 3\");\n\n// Add todos to one of the lists\nconst todo1 = list1.addTodo(\"todo 1\");\nconst todo2 = list1.addTodo(\"todo 2\");\n\n// Give todo1 a description, checklist item, note\ntodo1.setDescription(\"blah blah blah\");\ntodo1.addCheckItem(\"check!\");\ntodo1.createNote(\"note note note\");\n\n// get lists from board\nconst lists = myBoard.getLists();\n\n// print the array\nconst myBoardString = JSON.stringify(lists);\nconsole.log(myBoardString);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQUNKO0FBQ0E7O0FBRTdCO0FBQ0EsZ0JBQWdCLHVEQUFLOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXRvZG8tYXBwLy4vc3JjL2luZGV4LmpzPzYzMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJvYXJkIGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCBsaXN0IGZyb20gXCIuL2xpc3QuanNcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG8uanNcIjtcblxuLy8gTmV3IGJvYXJkXG5jb25zdCBteUJvYXJkID0gYm9hcmQoXCJNeSBCb2FyZFwiKTtcblxuLy8gQWRkIGxpc3RzIHRvIHRoZSBib2FyZFxuY29uc3QgbGlzdDEgPSBteUJvYXJkLmFkZExpc3QoXCJMaXN0IDFcIik7XG5jb25zdCBsaXN0MiA9IG15Qm9hcmQuYWRkTGlzdChcIkxpc3QgMlwiKTtcbmNvbnN0IGxpc3QzID0gbXlCb2FyZC5hZGRMaXN0KFwiTGlzdCAzXCIpO1xuXG4vLyBBZGQgdG9kb3MgdG8gb25lIG9mIHRoZSBsaXN0c1xuY29uc3QgdG9kbzEgPSBsaXN0MS5hZGRUb2RvKFwidG9kbyAxXCIpO1xuY29uc3QgdG9kbzIgPSBsaXN0MS5hZGRUb2RvKFwidG9kbyAyXCIpO1xuXG4vLyBHaXZlIHRvZG8xIGEgZGVzY3JpcHRpb24sIGNoZWNrbGlzdCBpdGVtLCBub3RlXG50b2RvMS5zZXREZXNjcmlwdGlvbihcImJsYWggYmxhaCBibGFoXCIpO1xudG9kbzEuYWRkQ2hlY2tJdGVtKFwiY2hlY2shXCIpO1xudG9kbzEuY3JlYXRlTm90ZShcIm5vdGUgbm90ZSBub3RlXCIpO1xuXG4vLyBnZXQgbGlzdHMgZnJvbSBib2FyZFxuY29uc3QgbGlzdHMgPSBteUJvYXJkLmdldExpc3RzKCk7XG5cbi8vIHByaW50IHRoZSBhcnJheVxuY29uc3QgbXlCb2FyZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxpc3RzKTtcbmNvbnNvbGUubG9nKG15Qm9hcmRTdHJpbmcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/list.js"
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n// list should be able to reorder todos and sort functionaliaty\nfunction list(title) {\n    let listTitle = title;\n    let todos = [];\n    const id = crypto.randomUUID();\n\n    // Add todos to todos list\n    const addTodo = (text) => {\n        const item = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text);\n        todos.push(item);\n        return item;\n    }\n\n    // Delete todos from todos list\n    const deleteTodo = (id) => {\n        todos = todos.filter(item => item.getID() !== id);\n    }\n\n    // Get todo from todos list\n    const getTodo = (id) => todos.find(item => item.getID() === id);\n\n    // Edit title\n    const editTitle = (text) => {\n        listTitle = text;\n    }\n\n    // Get todos array\n    const getTodos = () => [...todos];\n\n    // Get title\n    const getListTitle = () => listTitle;\n\n    // get id\n    const getID = () => id;\n\n    // Sort todos chronologically by date (newest)\n    const sortByNewest = () => {\n        todos.sort((a, b) => b.getDate().localeCompare(a.getDate()));\n    }\n\n    const sortByOldest = () => {\n        todos.sort((a, b) => a.getDate().localeCompare(b.getDate()));\n    }\n\n    // reorder todos\n    const reorderTodos = (currentIndex, targetIndex) => {\n        const movedItem = todos.find((item, index) => index === currentIndex);\n        const remainingItems = todos.filter(item => item !== movedItem);\n\n        const reorderedItems = [\n            ...remainingItems.slice(0, targetIndex),\n            movedItem,\n            ...remainingItems.slice(targetIndex)\n        ];\n\n        todos = reorderedItems;\n    }\n\n    return {addTodo, deleteTodo, getListTitle, getTodo, getTodos, editTitle, getID, reorderTodos, sortByNewest, sortByOldest};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXRvZG8tYXBwLy4vc3JjL2xpc3QuanM/ZGVkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbi8vIGxpc3Qgc2hvdWxkIGJlIGFibGUgdG8gcmVvcmRlciB0b2RvcyBhbmQgc29ydCBmdW5jdGlvbmFsaWF0eVxuZnVuY3Rpb24gbGlzdCh0aXRsZSkge1xuICAgIGxldCBsaXN0VGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgdG9kb3MgPSBbXTtcbiAgICBjb25zdCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG5cbiAgICAvLyBBZGQgdG9kb3MgdG8gdG9kb3MgbGlzdFxuICAgIGNvbnN0IGFkZFRvZG8gPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gdG9kbyh0ZXh0KTtcbiAgICAgICAgdG9kb3MucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRvZG9zIGZyb20gdG9kb3MgbGlzdFxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICAgICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmdldElEKCkgIT09IGlkKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdG9kbyBmcm9tIHRvZG9zIGxpc3RcbiAgICBjb25zdCBnZXRUb2RvID0gKGlkKSA9PiB0b2Rvcy5maW5kKGl0ZW0gPT4gaXRlbS5nZXRJRCgpID09PSBpZCk7XG5cbiAgICAvLyBFZGl0IHRpdGxlXG4gICAgY29uc3QgZWRpdFRpdGxlID0gKHRleHQpID0+IHtcbiAgICAgICAgbGlzdFRpdGxlID0gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBHZXQgdG9kb3MgYXJyYXlcbiAgICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IFsuLi50b2Rvc107XG5cbiAgICAvLyBHZXQgdGl0bGVcbiAgICBjb25zdCBnZXRMaXN0VGl0bGUgPSAoKSA9PiBsaXN0VGl0bGU7XG5cbiAgICAvLyBnZXQgaWRcbiAgICBjb25zdCBnZXRJRCA9ICgpID0+IGlkO1xuXG4gICAgLy8gU29ydCB0b2RvcyBjaHJvbm9sb2dpY2FsbHkgYnkgZGF0ZSAobmV3ZXN0KVxuICAgIGNvbnN0IHNvcnRCeU5ld2VzdCA9ICgpID0+IHtcbiAgICAgICAgdG9kb3Muc29ydCgoYSwgYikgPT4gYi5nZXREYXRlKCkubG9jYWxlQ29tcGFyZShhLmdldERhdGUoKSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRCeU9sZGVzdCA9ICgpID0+IHtcbiAgICAgICAgdG9kb3Muc29ydCgoYSwgYikgPT4gYS5nZXREYXRlKCkubG9jYWxlQ29tcGFyZShiLmdldERhdGUoKSkpO1xuICAgIH1cblxuICAgIC8vIHJlb3JkZXIgdG9kb3NcbiAgICBjb25zdCByZW9yZGVyVG9kb3MgPSAoY3VycmVudEluZGV4LCB0YXJnZXRJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBtb3ZlZEl0ZW0gPSB0b2Rvcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0l0ZW1zID0gdG9kb3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbW92ZWRJdGVtKTtcblxuICAgICAgICBjb25zdCByZW9yZGVyZWRJdGVtcyA9IFtcbiAgICAgICAgICAgIC4uLnJlbWFpbmluZ0l0ZW1zLnNsaWNlKDAsIHRhcmdldEluZGV4KSxcbiAgICAgICAgICAgIG1vdmVkSXRlbSxcbiAgICAgICAgICAgIC4uLnJlbWFpbmluZ0l0ZW1zLnNsaWNlKHRhcmdldEluZGV4KVxuICAgICAgICBdO1xuXG4gICAgICAgIHRvZG9zID0gcmVvcmRlcmVkSXRlbXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGRUb2RvLCBkZWxldGVUb2RvLCBnZXRMaXN0VGl0bGUsIGdldFRvZG8sIGdldFRvZG9zLCBlZGl0VGl0bGUsIGdldElELCByZW9yZGVyVG9kb3MsIHNvcnRCeU5ld2VzdCwgc29ydEJ5T2xkZXN0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/list.js\n\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\nfunction board(title) {\n    let boardTitle = title;\n    let lists = [];\n    const id = crypto.randomUUID();\n\n    // Add list to board\n    const addList = (text) => {\n        const listItem = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text);\n        lists.push(listItem);\n    }\n\n    // Delete list from board\n    const deleteList = (id) => {\n        lists = lists.filter(item => item.getID() !== id);\n    }\n\n    // reorder list\n    const reorderLists = (currentIndex, targetIndex) => {\n        const movedItem = lists.find((item, index) => index === currentIndex);\n        const remainingItems = lists.filter(item => item !== movedItem);\n\n        const reorderedItems = [\n            ...remainingItems.slice(0, targetIndex),\n            movedItem,\n            ...remainingItems.slice(targetIndex)\n        ];\n\n        lists = reorderedItems;\n    }\n\n    // Edit board title\n    const editTitle = (newTitle) => {\n        boardTitle = newTitle;\n    }\n\n    // Get board title\n    const getTitle = () => boardTitle;\n\n    // Get all lists\n    const getLists = () => [...lists];\n\n    return {addList, deleteList, reorderLists, editTitle, getTitle, getLists};\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBLGlFQUFlLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXRvZG8tYXBwLy4vc3JjL3Byb2plY3QuanM/Y2NjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGlzdCBmcm9tIFwiLi9saXN0LmpzXCI7XG5cbmZ1bmN0aW9uIGJvYXJkKHRpdGxlKSB7XG4gICAgbGV0IGJvYXJkVGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgbGlzdHMgPSBbXTtcbiAgICBjb25zdCBpZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG5cbiAgICAvLyBBZGQgbGlzdCB0byBib2FyZFxuICAgIGNvbnN0IGFkZExpc3QgPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGxpc3QodGV4dCk7XG4gICAgICAgIGxpc3RzLnB1c2gobGlzdEl0ZW0pO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSBsaXN0IGZyb20gYm9hcmRcbiAgICBjb25zdCBkZWxldGVMaXN0ID0gKGlkKSA9PiB7XG4gICAgICAgIGxpc3RzID0gbGlzdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5nZXRJRCgpICE9PSBpZCk7XG4gICAgfVxuXG4gICAgLy8gcmVvcmRlciBsaXN0XG4gICAgY29uc3QgcmVvcmRlckxpc3RzID0gKGN1cnJlbnRJbmRleCwgdGFyZ2V0SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbW92ZWRJdGVtID0gbGlzdHMuZmluZCgoaXRlbSwgaW5kZXgpID0+IGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdJdGVtcyA9IGxpc3RzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IG1vdmVkSXRlbSk7XG5cbiAgICAgICAgY29uc3QgcmVvcmRlcmVkSXRlbXMgPSBbXG4gICAgICAgICAgICAuLi5yZW1haW5pbmdJdGVtcy5zbGljZSgwLCB0YXJnZXRJbmRleCksXG4gICAgICAgICAgICBtb3ZlZEl0ZW0sXG4gICAgICAgICAgICAuLi5yZW1haW5pbmdJdGVtcy5zbGljZSh0YXJnZXRJbmRleClcbiAgICAgICAgXTtcblxuICAgICAgICBsaXN0cyA9IHJlb3JkZXJlZEl0ZW1zO1xuICAgIH1cblxuICAgIC8vIEVkaXQgYm9hcmQgdGl0bGVcbiAgICBjb25zdCBlZGl0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgYm9hcmRUaXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIC8vIEdldCBib2FyZCB0aXRsZVxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gYm9hcmRUaXRsZTtcblxuICAgIC8vIEdldCBhbGwgbGlzdHNcbiAgICBjb25zdCBnZXRMaXN0cyA9ICgpID0+IFsuLi5saXN0c107XG5cbiAgICByZXR1cm4ge2FkZExpc3QsIGRlbGV0ZUxpc3QsIHJlb3JkZXJMaXN0cywgZWRpdFRpdGxlLCBnZXRUaXRsZSwgZ2V0TGlzdHN9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBib2FyZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/project.js\n\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _behaviour_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behaviour.js */ \"./src/behaviour.js\");\n\n\nfunction todo(text) {\n    let title = text;\n    let description;\n    let dueDate;\n    const id = crypto.randomUUID();\n    let checkList = [];\n    let notes = [];\n\n    // description is optional, so we have setDescription()\n    const setDescription = (text) => {\n        description = text;\n    }\n\n    // note is optional so create note method.\n    const createNote = (text) => {\n        const noteItem = (0,_behaviour_js__WEBPACK_IMPORTED_MODULE_0__.note)(text);\n        notes.push(noteItem);\n    }\n\n    // Delete note\n    const deleteNote = (id) => {\n        notes = notes.filter(item => item.getID() !== id);\n    }\n\n    // Find note\n    const findNote = (id) => notes.find(item => item.getID() === id);\n\n    // checklist items are optional, so we have addCheckItem\n    const addCheckItem = (text) => {\n        checkList.push((0,_behaviour_js__WEBPACK_IMPORTED_MODULE_0__.checkItem)(text));\n    }\n\n    // Delete check item\n    const deleteCheckItem = (id) => {\n        checkList = checkList.filter(item => item.getID() !== id);\n    }\n\n    // find check item \n    const findCheckItem = (id) => checkList.find(item => item.getID() === id);\n\n    // set due date YYYY-MM-DD\n    const setDueDate = (date) => {\n        dueDate = date;\n    }\n\n    // edit title\n    const editTitle = (text) => {\n        title = text;\n    }\n\n    // get title\n    const getTitle = () => title;\n\n    // get todo ID\n    const getID = () => id;\n\n    // get date\n    const getDate = () => dueDate;\n\n    return {setDescription, \n        createNote, \n        addCheckItem, \n        deleteCheckItem, \n        getID, \n        getDate, \n        findNote, \n        findCheckItem,\n        setDueDate,\n        editTitle,\n        getTitle,\n        deleteNote\n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixtREFBSTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix3REFBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlci10b2RvLWFwcC8uL3NyYy90b2RvLmpzP2JhMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tJdGVtLCBub3RlIH0gZnJvbSBcIi4vYmVoYXZpb3VyLmpzXCI7XG5cbmZ1bmN0aW9uIHRvZG8odGV4dCkge1xuICAgIGxldCB0aXRsZSA9IHRleHQ7XG4gICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgIGxldCBkdWVEYXRlO1xuICAgIGNvbnN0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICBsZXQgY2hlY2tMaXN0ID0gW107XG4gICAgbGV0IG5vdGVzID0gW107XG5cbiAgICAvLyBkZXNjcmlwdGlvbiBpcyBvcHRpb25hbCwgc28gd2UgaGF2ZSBzZXREZXNjcmlwdGlvbigpXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAodGV4dCkgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IHRleHQ7XG4gICAgfVxuXG4gICAgLy8gbm90ZSBpcyBvcHRpb25hbCBzbyBjcmVhdGUgbm90ZSBtZXRob2QuXG4gICAgY29uc3QgY3JlYXRlTm90ZSA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdGVJdGVtID0gbm90ZSh0ZXh0KTtcbiAgICAgICAgbm90ZXMucHVzaChub3RlSXRlbSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIG5vdGVcbiAgICBjb25zdCBkZWxldGVOb3RlID0gKGlkKSA9PiB7XG4gICAgICAgIG5vdGVzID0gbm90ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5nZXRJRCgpICE9PSBpZCk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBub3RlXG4gICAgY29uc3QgZmluZE5vdGUgPSAoaWQpID0+IG5vdGVzLmZpbmQoaXRlbSA9PiBpdGVtLmdldElEKCkgPT09IGlkKTtcblxuICAgIC8vIGNoZWNrbGlzdCBpdGVtcyBhcmUgb3B0aW9uYWwsIHNvIHdlIGhhdmUgYWRkQ2hlY2tJdGVtXG4gICAgY29uc3QgYWRkQ2hlY2tJdGVtID0gKHRleHQpID0+IHtcbiAgICAgICAgY2hlY2tMaXN0LnB1c2goY2hlY2tJdGVtKHRleHQpKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgY2hlY2sgaXRlbVxuICAgIGNvbnN0IGRlbGV0ZUNoZWNrSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICBjaGVja0xpc3QgPSBjaGVja0xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5nZXRJRCgpICE9PSBpZCk7XG4gICAgfVxuXG4gICAgLy8gZmluZCBjaGVjayBpdGVtIFxuICAgIGNvbnN0IGZpbmRDaGVja0l0ZW0gPSAoaWQpID0+IGNoZWNrTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5nZXRJRCgpID09PSBpZCk7XG5cbiAgICAvLyBzZXQgZHVlIGRhdGUgWVlZWS1NTS1ERFxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICBkdWVEYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICAvLyBlZGl0IHRpdGxlXG4gICAgY29uc3QgZWRpdFRpdGxlID0gKHRleHQpID0+IHtcbiAgICAgICAgdGl0bGUgPSB0ZXh0O1xuICAgIH1cblxuICAgIC8vIGdldCB0aXRsZVxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICAvLyBnZXQgdG9kbyBJRFxuICAgIGNvbnN0IGdldElEID0gKCkgPT4gaWQ7XG5cbiAgICAvLyBnZXQgZGF0ZVxuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuXG4gICAgcmV0dXJuIHtzZXREZXNjcmlwdGlvbiwgXG4gICAgICAgIGNyZWF0ZU5vdGUsIFxuICAgICAgICBhZGRDaGVja0l0ZW0sIFxuICAgICAgICBkZWxldGVDaGVja0l0ZW0sIFxuICAgICAgICBnZXRJRCwgXG4gICAgICAgIGdldERhdGUsIFxuICAgICAgICBmaW5kTm90ZSwgXG4gICAgICAgIGZpbmRDaGVja0l0ZW0sXG4gICAgICAgIHNldER1ZURhdGUsXG4gICAgICAgIGVkaXRUaXRsZSxcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGRlbGV0ZU5vdGVcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;