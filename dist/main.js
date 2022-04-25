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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var button1 = document.getElementById('button1');\n  var button2 = document.getElementById('button2');\n  var button3 = document.getElementById('button3');\n  var audioCtx = new AudioContext();\n  console.log(audioCtx);\n  var audio1 = new Audio();\n  var audio2 = new Audio();\n  var audio3 = new Audio();\n  audio1.src = '../assets/sounds/Fox/HIYAAA.wav';\n  audio2.src = '../assets/sounds/ROY/up-b.wav';\n  audio3.src = '../assets/sounds/okay.wav';\n  button1.addEventListener('click', function () {\n    audio1.play();\n  });\n  button2.addEventListener('click', function () {\n    audio2.play();\n  });\n  button3.addEventListener('click', function () {\n    audio3.play();\n  });\n  var slider = document.getElementById('slider');\n  var currentTempo = document.querySelector('.tempo span');\n\n  slider.oninput = function () {\n    var val = slider.value;\n\n    if (val < 100) {\n      currentTempo.innerHTML = \"0\" + val + \" BPM\";\n    } else {\n      currentTempo.innerHTML = val + \" BPM\";\n    }\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0dG9uMSIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uMiIsImJ1dHRvbjMiLCJhdWRpb0N0eCIsIkF1ZGlvQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJhdWRpbzEiLCJBdWRpbyIsImF1ZGlvMiIsImF1ZGlvMyIsInNyYyIsInBsYXkiLCJzbGlkZXIiLCJjdXJyZW50VGVtcG8iLCJxdWVyeVNlbGVjdG9yIiwib25pbnB1dCIsInZhbCIsInZhbHVlIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFDQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUV0RCxNQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0EsTUFBTUUsT0FBTyxHQUFHTCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsSUFBSUMsWUFBSixFQUFqQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBLE1BQUlJLE1BQU0sR0FBRyxJQUFJQyxLQUFKLEVBQWI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsSUFBSUQsS0FBSixFQUFiO0FBQ0EsTUFBSUUsTUFBTSxHQUFHLElBQUlGLEtBQUosRUFBYjtBQUVBRCxFQUFBQSxNQUFNLENBQUNJLEdBQVAsR0FBYSxpQ0FBYjtBQUNBRixFQUFBQSxNQUFNLENBQUNFLEdBQVAsR0FBYSwrQkFBYjtBQUNBRCxFQUFBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSwyQkFBYjtBQUNBWixFQUFBQSxPQUFPLENBQUNELGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVU7QUFDeENTLElBQUFBLE1BQU0sQ0FBQ0ssSUFBUDtBQUNILEdBRkQ7QUFHQVgsRUFBQUEsT0FBTyxDQUFDSCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQ3hDVyxJQUFBQSxNQUFNLENBQUNHLElBQVA7QUFDSCxHQUZEO0FBR0FWLEVBQUFBLE9BQU8sQ0FBQ0osZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUN4Q1ksSUFBQUEsTUFBTSxDQUFDRSxJQUFQO0FBQ0gsR0FGRDtBQUtBLE1BQU1DLE1BQU0sR0FBR2hCLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsTUFBTWMsWUFBWSxHQUFHakIsUUFBUSxDQUFDa0IsYUFBVCxDQUF1QixhQUF2QixDQUFyQjs7QUFFQUYsRUFBQUEsTUFBTSxDQUFDRyxPQUFQLEdBQWtCLFlBQU07QUFDcEIsUUFBSUMsR0FBRyxHQUFHSixNQUFNLENBQUNLLEtBQWpCOztBQUNBLFFBQUlELEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDWEgsTUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLE1BQU1GLEdBQU4sR0FBWSxNQUFyQztBQUNILEtBRkQsTUFFTztBQUNISCxNQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUJGLEdBQUcsR0FBRyxNQUEvQjtBQUNIO0FBQ0osR0FQRDtBQVdILENBdkNEIiwic291cmNlc0NvbnRlbnQiOlsiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBidXR0b24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbjEnKTtcbiAgICBjb25zdCBidXR0b24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbjInKTtcbiAgICBjb25zdCBidXR0b24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbjMnKTtcbiAgICBjb25zdCBhdWRpb0N0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBjb25zb2xlLmxvZyhhdWRpb0N0eCk7XG4gICAgbGV0IGF1ZGlvMSA9IG5ldyBBdWRpbygpO1xuICAgIGxldCBhdWRpbzIgPSBuZXcgQXVkaW8oKTtcbiAgICBsZXQgYXVkaW8zID0gbmV3IEF1ZGlvKCk7XG4gICAgIFxuICAgIGF1ZGlvMS5zcmMgPSAnLi4vYXNzZXRzL3NvdW5kcy9Gb3gvSElZQUFBLndhdic7XG4gICAgYXVkaW8yLnNyYyA9ICcuLi9hc3NldHMvc291bmRzL1JPWS91cC1iLndhdic7XG4gICAgYXVkaW8zLnNyYyA9ICcuLi9hc3NldHMvc291bmRzL29rYXkud2F2JztcbiAgICBidXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgYXVkaW8xLnBsYXkoKVxuICAgIH0pXG4gICAgYnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGF1ZGlvMi5wbGF5KClcbiAgICB9KVxuICAgIGJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBhdWRpbzMucGxheSgpXG4gICAgfSlcbiAgIFxuXG4gICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbyBzcGFuJyk7XG5cbiAgICBzbGlkZXIub25pbnB1dCA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBzbGlkZXIudmFsdWU7XG4gICAgICAgIGlmICh2YWwgPCAxMDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wby5pbm5lckhUTUwgPSBcIjBcIiArIHZhbCArIFwiIEJQTVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VGVtcG8uaW5uZXJIVE1MID0gdmFsICsgXCIgQlBNXCJcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgXG59KSJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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