/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var button1 = document.getElementById('button1');\n  var button2 = document.getElementById('button2');\n  var button3 = document.getElementById('button3');\n  var audioCtx = new AudioContext();\n  console.log(audioCtx);\n  var audio1 = new Audio();\n  var audio2 = new Audio();\n  var audio3 = new Audio();\n  audio1.src = '../assets/sounds/Fox/HIYAAA.wav';\n  audio2.src = '../assets/sounds/ROY/up-b.wav';\n  audio3.src = '../assets/sounds/okay.wav';\n  button1.addEventListener('click', function () {\n    audio1.play();\n  });\n  button2.addEventListener('click', function () {\n    audio2.play();\n  });\n  button3.addEventListener('click', function () {\n    audio3.play();\n  });\n  var slider = document.getElementById('slider');\n  var currentTempo = document.querySelector('.tempo span');\n\n  slider.oninput = function () {\n    var val = slider.value;\n\n    if (val < 100) {\n      currentTempo.innerHTML = \"0\" + val + \" BPM\";\n    } else {\n      currentTempo.innerHTML = val + \" BPM\";\n    }\n  };\n\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n\n  function draw() {\n    ctx.canvas.width = window.innerWidth;\n    ctx.canvas.height = window.innerHeight;\n    ctx.beginPath(); // Start a new path\n\n    ctx.moveTo(30, 50); // Move the pen to (30, 50)\n\n    ctx.lineTo(150, 100); // Draw a line to (150, 100)\n\n    ctx.stroke();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uMSIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uMiIsImJ1dHRvbjMiLCJhdWRpb0N0eCIsIkF1ZGlvQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhdWRpbzEiLCJBdWRpbyIsImF1ZGlvMiIsImF1ZGlvMyIsInNyYyIsInBsYXkiLCJzbGlkZXIiLCJjdXJyZW50VGVtcG8iLCJxdWVyeVNlbGVjdG9yIiwib25pbnB1dCIsInZhbCIsInZhbHVlIiwiaW5uZXJIVE1MIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSJdLCJtYXBwaW5ncyI6IkFBQ0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFFdEQsTUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFoQjtBQUNBLE1BQU1FLE9BQU8sR0FBR0wsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUlDLFlBQUosRUFBakI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDQSxNQUFJSSxNQUFNLEdBQUcsSUFBSUMsS0FBSixFQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLElBQUlELEtBQUosRUFBYjtBQUNBLE1BQUlFLE1BQU0sR0FBRyxJQUFJRixLQUFKLEVBQWI7QUFFQUQsRUFBQUEsTUFBTSxDQUFDSSxHQUFQLEdBQWEsaUNBQWI7QUFDQUYsRUFBQUEsTUFBTSxDQUFDRSxHQUFQLEdBQWEsK0JBQWI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDQyxHQUFQLEdBQWEsMkJBQWI7QUFDQVosRUFBQUEsT0FBTyxDQUFDRCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQ3hDUyxJQUFBQSxNQUFNLENBQUNLLElBQVA7QUFDSCxHQUZEO0FBR0FYLEVBQUFBLE9BQU8sQ0FBQ0gsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUN4Q1csSUFBQUEsTUFBTSxDQUFDRyxJQUFQO0FBQ0gsR0FGRDtBQUdBVixFQUFBQSxPQUFPLENBQUNKLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVU7QUFDeENZLElBQUFBLE1BQU0sQ0FBQ0UsSUFBUDtBQUNILEdBRkQ7QUFPQSxNQUFNQyxNQUFNLEdBQUdoQixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1jLFlBQVksR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBckI7O0FBRUFGLEVBQUFBLE1BQU0sQ0FBQ0csT0FBUCxHQUFrQixZQUFNO0FBQ3BCLFFBQUlDLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxLQUFqQjs7QUFDQSxRQUFJRCxHQUFHLEdBQUcsR0FBVixFQUFlO0FBQ1hILE1BQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixNQUFNRixHQUFOLEdBQVksTUFBckM7QUFDSCxLQUZELE1BRU87QUFDSEgsTUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCRixHQUFHLEdBQUcsTUFBL0I7QUFDSDtBQUNKLEdBUEQ7O0FBV0EsTUFBTUcsTUFBTSxHQUFHdkIsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNcUIsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjs7QUFFQSxXQUFTQyxJQUFULEdBQWdCO0FBQ1pGLElBQUFBLEdBQUcsQ0FBQ0QsTUFBSixDQUFXSSxLQUFYLEdBQW9CQyxNQUFNLENBQUNDLFVBQTNCO0FBQ0FMLElBQUFBLEdBQUcsQ0FBQ0QsTUFBSixDQUFXTyxNQUFYLEdBQW9CRixNQUFNLENBQUNHLFdBQTNCO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ1EsU0FBSixHQUhZLENBR1c7O0FBQ3ZCUixJQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxFQUFYLEVBQWUsRUFBZixFQUpZLENBSVc7O0FBQ3ZCVCxJQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBTFksQ0FLVzs7QUFDdkJWLElBQUFBLEdBQUcsQ0FBQ1csTUFBSjtBQUNIO0FBRUosQ0FyREQiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGJ1dHRvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uMScpO1xuICAgIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uMicpO1xuICAgIGNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uMycpO1xuICAgIGNvbnN0IGF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGNvbnNvbGUubG9nKGF1ZGlvQ3R4KTtcbiAgICBsZXQgYXVkaW8xID0gbmV3IEF1ZGlvKCk7XG4gICAgbGV0IGF1ZGlvMiA9IG5ldyBBdWRpbygpO1xuICAgIGxldCBhdWRpbzMgPSBuZXcgQXVkaW8oKTtcbiAgICAgXG4gICAgYXVkaW8xLnNyYyA9ICcuLi9hc3NldHMvc291bmRzL0ZveC9ISVlBQUEud2F2JztcbiAgICBhdWRpbzIuc3JjID0gJy4uL2Fzc2V0cy9zb3VuZHMvUk9ZL3VwLWIud2F2JztcbiAgICBhdWRpbzMuc3JjID0gJy4uL2Fzc2V0cy9zb3VuZHMvb2theS53YXYnO1xuICAgIGJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBhdWRpbzEucGxheSgpXG4gICAgfSlcbiAgICBidXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgYXVkaW8yLnBsYXkoKVxuICAgIH0pXG4gICAgYnV0dG9uMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGF1ZGlvMy5wbGF5KClcbiAgICB9KVxuXG4gICAgXG4gICBcblxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcG8gc3BhbicpO1xuXG4gICAgc2xpZGVyLm9uaW5wdXQgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsID0gc2xpZGVyLnZhbHVlO1xuICAgICAgICBpZiAodmFsIDwgMTAwKSB7XG4gICAgICAgICAgICBjdXJyZW50VGVtcG8uaW5uZXJIVE1MID0gXCIwXCIgKyB2YWwgKyBcIiBCUE1cIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRlbXBvLmlubmVySFRNTCA9IHZhbCArIFwiIEJQTVwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7ICAgICAgIC8vIFN0YXJ0IGEgbmV3IHBhdGhcbiAgICAgICAgY3R4Lm1vdmVUbygzMCwgNTApOyAgICAvLyBNb3ZlIHRoZSBwZW4gdG8gKDMwLCA1MClcbiAgICAgICAgY3R4LmxpbmVUbygxNTAsIDEwMCk7ICAvLyBEcmF3IGEgbGluZSB0byAoMTUwLCAxMDApXG4gICAgICAgIGN0eC5zdHJva2UoKTsgICBcbiAgICB9XG4gICAgICBcbn0pIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;