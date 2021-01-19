/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generate.js":
/*!*************************!*\
  !*** ./src/generate.js ***!
  \*************************/
/*! namespace exports */
/*! export generate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": () => /* binding */ generate\n/* harmony export */ });\nfunction generate() {\n  document.body.innerHTML = '<div class=\"video_button\"><button class=\"unmute\">Unmute</button><button class=\"skip\">Skip</button></div> <video id=\"ocScreencapVideo\" src=\"../src/img/gta_1.mp4\" autoplay=\"autoplay\" muted=\"muted\"  playsinline=\"playsinline\" preload=\"metadata\" data-aos=\"fade-up\"><source src=\"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4\" type=\"video/mp4\"> Your browser does not support MP4 Format videos or HTML5 Video.</video><div class=\"menu\"><div class=\"menu-position\"><img class=\"level-photo\" src=\"../src/img/1x.jpg\" alt=\"\"><img class=\"icon\" src=\"../src/img/icons8-san-andreas-500.png\" alt=\"\"><button class=\"restart hover\">New-game</button><button disabled class=\"continue hover\">Continue</button><button class=\"settings hover\">Settings</button><div class=\"level\"><button class=\"mission hover\">Easy</button></div><button class=\"addsound hover\">Music off</button><button class=\"soundon hover\">Sound on</button><button class=\"About hover\">About</button><p class=\"checker\"></p><button class=\"exit2 hover\">Exit to menu</button><button class=\"exit hover\">Exit</button></div></div> <div class=\"center\"><div class=\"house\"><img src=\"../src/img/hous.png\" alt=\"\"></div><div class=\"recordlist\"><div class=\"ul\"></div></div><div class=\"field\"></div><div class=\"complete\"><p class=\"result\"></p><img class=\"scale\" src=\"../src/img/pngfind.com-gta-png-2851262.png\" alt=\"\"></div><div class=\"wrapper\"><button class=\"solution\">solution</button><button class=\"solution2\">solution</button> <h2 class=\"move\">move 0</h2><p><span id=\"seconds\">00</span>:<span id=\"tens\">00</span></p><button id=\"button-start\">Start</button><button id=\"button-stop\">Stop</button></div></div> <audio class=\"first\"   src=\"../src/img/gta.mp3\"></audio><audio class=\"second\" src=\"../src/img/respect.mp3\"></audio><audio class=\"third\" src=\"../src/img/button.mp3\"></audio>';\n}\n\n//# sourceURL=webpack://puzzle/./src/generate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate */ \"./src/generate.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n(0,_generate__WEBPACK_IMPORTED_MODULE_1__.generate)();\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\nvar soundon = 2;\nvar top = [];\nvar answer = [];\nvar seconds = '00';\nvar tens = '00';\nvar Interval;\nvar missions = [1, 2, 3, 4, 5];\nvar currentMission = 0;\nvar n = 0;\nvar way = 1;\nvar field = document.querySelector('.field');\nvar cellsize = 100;\nvar third = document.querySelector('.third');\nvar sound = document.querySelector('.first');\nvar ul = document.querySelector('.ul');\nvar rank = localStorage.getItem('rank');\nvar cells = [];\nvar empty = {\n  top: 0,\n  value: 0,\n  left: 0\n};\ncells.push(empty);\nvar photo = [['a'], ['b'], ['c'], ['d'], ['e']];\nvar ranphoto = photo[Math.floor(Math.random() * photo.length)]; // checking text content of level and set it\n\nif (localStorage.getItem('level') !== null) {\n  currentMission = Number(localStorage.getItem('level'));\n  document.querySelector('.level-photo').src = \"../src/img/\".concat(Number(localStorage.getItem('level')) + 1, \"x.jpg\");\n\n  switch (localStorage.getItem('level')) {\n    case '0':\n      document.querySelector('.mission').textContent = 'Easy';\n      break;\n\n    case '1':\n      document.querySelector('.mission').textContent = 'Normal';\n      break;\n\n    case '2':\n      document.querySelector('.mission').textContent = 'Hard';\n      break;\n\n    case '3':\n      document.querySelector('.mission').textContent = 'Super hard';\n      break;\n\n    case '4':\n      document.querySelector('.mission').textContent = 'Extremely hard';\n      break;\n  }\n} // checking textcontent of move and set it\n\n\nif (localStorage.getItem('way') !== null) {\n  way = Number(localStorage.getItem('way'));\n  document.querySelector('.move').textContent = \"Move \".concat(way);\n} // checking solutions of array and set it\n\n\nif (localStorage.getItem('answer') === null) {\n  answer = [];\n} else {\n  answer = localStorage.getItem('answer');\n  answer = answer.split(',');\n\n  for (var i = 0; i < answer.length; i++) {\n    answer[i] = Number(answer[i]);\n  }\n\n  answer.reverse();\n} // checking textcontent of ranking and set it\n\n\nif (rank !== null) {\n  ul.innerHTML = rank;\n  var place = document.querySelectorAll('.place');\n\n  for (var x = 0; x < place.length; x++) {\n    top.push(place[x].value);\n  }\n} // checking empty cells position and set it\n\n\nif (localStorage.getItem('top') !== null) {\n  empty.top = Number(localStorage.getItem('top'));\n  empty.left = Number(localStorage.getItem('left'));\n} // function for randomlize game field\n\n\nfunction move() {\n  while (n < 25) {\n    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\n    var item = array[Math.floor(Math.random() * array.length)];\n    var cell = cells[item];\n    var leftdiff = Math.abs(empty.left - cell.left);\n    var topdiff = Math.abs(empty.top - cell.top);\n\n    if (leftdiff + topdiff > 1) {\n      continue;\n    } else {\n      if (answer.length > 2 && answer[n - 1] === item) {\n        continue;\n      } else {\n        answer.push(item);\n        n++;\n        cell.element.style.left = \"\".concat(empty.left * cellsize, \"px\");\n        cell.element.style.top = \"\".concat(empty.top * cellsize, \"px\");\n        var empetyleft = empty.left;\n        var empetytop = empty.top;\n        empty.left = cell.left;\n        empty.top = cell.top;\n        cell.left = empetyleft;\n        cell.top = empetytop;\n      }\n    }\n  }\n} // function for movement of cells\n\n\nfunction move2(index) {\n  var cell = cells[index];\n  var leftdiff = Math.abs(empty.left - cell.left);\n  var topdiff = Math.abs(empty.top - cell.top);\n\n  if (leftdiff + topdiff > 1) {\n    return;\n  }\n\n  answer.reverse();\n  answer.push(index);\n  answer.reverse();\n  cell.element.style.left = \"\".concat(empty.left * cellsize, \"px\");\n  cell.element.style.top = \"\".concat(empty.top * cellsize, \"px\");\n  var empetyleft = empty.left;\n  var empetytop = empty.top;\n  empty.left = cell.left;\n  empty.top = cell.top;\n  cell.left = empetyleft;\n  cell.top = empetytop;\n  var isFinished = cells.every(function (cell) {\n    if (document.querySelectorAll('.cell').length === 15) {\n      return cell.value === cell.top * 4 + cell.left;\n    } else if (document.querySelectorAll('.cell').length === 24) {\n      return cell.value === cell.top * 5 + cell.left;\n    } else if (document.querySelectorAll('.cell').length === 35) {\n      return cell.value === cell.top * 6 + cell.left;\n    } else if (document.querySelectorAll('.cell').length === 48) {\n      return cell.value === cell.top * 7 + cell.left;\n    } else if (document.querySelectorAll('.cell').length === 63) {\n      return cell.value === cell.top * 8 + cell.left;\n    }\n  });\n\n  if (isFinished) {\n    top.push(way);\n    complete(way);\n    rayting();\n\n    if (document.querySelectorAll('.cell').length === 15) {\n      randomres();\n    } else if (document.querySelectorAll('.cell').length === 24) {\n      randomres5x5(24, 'f');\n    } else if (document.querySelectorAll('.cell').length === 35) {\n      randomres5x5(35, 'g');\n    } else if (document.querySelectorAll('.cell').length === 48) {\n      randomres5x5(48, 'h');\n    } else if (document.querySelectorAll('.cell').length === 63) {\n      randomres5x5(63, 'o');\n    }\n\n    answer.reverse();\n  }\n\n  localStorage.setItem('all', field.innerHTML);\n  localStorage.setItem('top', empty.top);\n  localStorage.setItem('left', empty.left);\n  localStorage.setItem('answer', answer);\n  way++;\n} // function for create ranking list\n\n\nvar rayting = function rayting() {\n  var ul = document.querySelector('.ul');\n  top.sort(function (a, rank) {\n    return a - rank;\n  });\n\n  if (top.length > 10) {\n    top.pop();\n  }\n\n  ul.innerHTML = '';\n\n  for (var j = 0; j < top.length; j++) {\n    ul.innerHTML += \"<li class=\\\"place\\\"value=\\\"\".concat(top[j], \"\\\">\").concat(j + 1, \" place moves:\").concat(top[j], \"</li>\");\n  }\n\n  localStorage.setItem(\"rank\", ul.innerHTML);\n}; // function for finish game\n\n\nfunction complete(way) {\n  localStorage.setItem('way', 0);\n\n  function addrespect(way) {\n    document.querySelector('.complete').style.display = 'block';\n    document.querySelector('.result').textContent = \"You win with \".concat(way, \" moves and \").concat(document.getElementById('seconds').textContent, \" seconds\");\n    document.querySelector('.second').play();\n    clearInterval(Interval);\n    tens = \"00\";\n    seconds = \"00\";\n    document.getElementById(\"tens\").innerHTML = tens;\n    document.getElementById(\"seconds\").innerHTML = seconds;\n    document.querySelector('.complete').style.opacity = '1';\n  }\n\n  setTimeout(function () {\n    document.querySelector('.complete').style.opacity = '1';\n    document.querySelector('.complete').style.display = 'none';\n  }, 4000);\n  addrespect(way);\n} // function for create diiferent size field\n\n\nfunction square5x5(looplength, picture) {\n  field.innerHTML = '';\n\n  var numbers = _toConsumableArray(Array(looplength).keys());\n\n  cells = [];\n  cells.push(empty);\n\n  var _loop = function _loop(_i) {\n    var cell = document.createElement('button');\n    cell.className = 'cell';\n    var value = numbers[_i - 1] + 1;\n    cell.value = value;\n    cell.innerHTML = \"<img class=\\\"img\\\" src=\\\"../src/img/\".concat(picture).concat(_i, \".jpg\\\" alt=\\\"\\\">\");\n\n    var left = _i % Math.sqrt(looplength + 1);\n\n    cell.draggable = true;\n    var top = (_i - left) / Math.sqrt(looplength + 1);\n    cells.push({\n      left: left,\n      top: top,\n      value: value,\n      element: cell\n    });\n    cell.style.left = \"\".concat(left * cellsize, \"px\");\n    cell.style.top = \"\".concat(top * cellsize, \"px\");\n    field.append(cell);\n    cell.addEventListener('dragstart', dragStart);\n\n    var dragStart = function dragStart() {\n      setTimeout(function () {\n        cell.classList.add('hide');\n      }, 0);\n    };\n\n    cell.addEventListener('dragend', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      cell.classList.remove('hide');\n      move2(cell.value);\n    });\n    document.body.addEventListener(\"dragover\", function (event) {\n      event.preventDefault();\n    });\n    cell.addEventListener('click', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      move2(cell.value);\n      setTimeout(function () {}, 1000);\n    });\n  };\n\n  for (var _i = 1; _i <= looplength; _i++) {\n    _loop(_i);\n  }\n} // checking condition of game field and set it \n\n\nif (localStorage.getItem('all') !== null) {\n  field.innerHTML = localStorage.getItem('all');\n  document.querySelector('.continue').disabled = false;\n\n  if (document.querySelectorAll('.cell').length === 15) {\n    document.querySelector('.solution').style.display = \"block\";\n  } else {\n    document.querySelector('.solution').style.display = \"none\";\n    document.querySelector('.solution2').style.display = \"block\";\n  }\n\n  var _loop2 = function _loop2(_i2) {\n    var cell = document.querySelectorAll('.cell')[_i2 - 1];\n\n    var value = cell.value;\n    var left = cell.style.left.substring(0, cell.style.top.length - 2);\n\n    if (left === '0px') {\n      left = 0;\n    }\n\n    if (Number(left) > 20) {\n      left = Number(left) / 100;\n    } else {\n      left = Number(left);\n    }\n\n    var top = cell.style.top.substring(0, cell.style.top.length - 2);\n\n    if (Number(top) > 20) {\n      top = Number(top) / 100;\n    } else {\n      top = Number(top);\n    }\n\n    cells.push({\n      left: Number(left),\n      top: top,\n      value: Number(value),\n      element: cell\n    });\n\n    var dragStart = function dragStart() {\n      setTimeout(function () {\n        cell.classList.add('hide');\n      }, 0);\n    };\n\n    cell.addEventListener('dragstart', dragStart);\n    cell.addEventListener('dragend', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n      localStorage.setItem('way', way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      if (document.querySelectorAll('.cell').length === 15) {\n        move2(_i2);\n        cell.classList.remove('hide');\n      } else {\n        move2(_i2);\n      }\n\n      setTimeout(function () {}, 1000);\n    });\n    document.body.addEventListener(\"dragover\", function (event) {\n      event.preventDefault();\n    });\n    cell.addEventListener('click', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n      localStorage.setItem('way', way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      if (document.querySelectorAll('.cell').length === 15) {\n        move2(_i2);\n      } else {\n        move2(_i2);\n      }\n\n      setTimeout(function () {}, 1000);\n    });\n  };\n\n  for (var _i2 = 1; _i2 <= document.querySelectorAll('.cell').length; _i2++) {\n    _loop2(_i2);\n  }\n} else {\n  if (localStorage.getItem('level') === null) {\n    randomres();\n  }\n}\n\nif (localStorage.getItem('all') === null && document.querySelectorAll('.cell').length === 15) {\n  move();\n}\n\nanswer.reverse();\ndocument.querySelector('.solution').addEventListener('click', function () {\n  way = way + 5;\n  document.querySelector('.move').textContent = \"move \".concat(way);\n  var cell = cells[answer[0]];\n\n  if (typeof cell === 'undefined') {\n    return;\n  }\n\n  cell.element.style.left = \"\".concat(empty.left * cellsize, \"px\");\n  cell.element.style.top = \"\".concat(empty.top * cellsize, \"px\");\n  var empetyleft = empty.left;\n  var empetytop = empty.top;\n  empty.left = cell.left;\n  empty.top = cell.top;\n  cell.left = empetyleft;\n  cell.top = empetytop;\n  answer.shift();\n});\nvar continues = document.querySelector('.continue');\ncontinues.addEventListener('click', function () {\n  document.querySelector('.menu').style.display = \"none\";\n}); // stopwatch function\n\nwindow.onload = function () {\n  seconds = '00';\n  tens = '00';\n\n  document.getElementById('button-start').onclick = function () {\n    clearInterval(Interval);\n    Interval = setInterval(startTimer, 10);\n  };\n\n  document.getElementById('button-stop').onclick = function () {\n    clearInterval(Interval);\n  };\n\n  var loops;\n\n  if (localStorage.getItem('disabled') !== null) {\n    document.querySelector('.continue').disabled = false;\n  }\n\n  document.querySelector('.restart').onclick = function () {\n    document.querySelector('.continue').disabled = false;\n    localStorage.setItem('disabled', 0);\n    clearInterval(Interval);\n    document.querySelector('.menu').style.display = \"none\";\n    loops = document.getElementsByClassName('cell').length;\n\n    if (loops === 15) {\n      randomres();\n      answer.reverse();\n    } else if (loops === 24) {\n      randomres5x5(loops, \"f\");\n    } else if (loops === 35) {\n      randomres5x5(loops, \"g\");\n    } else if (loops === 48) {\n      randomres5x5(loops, \"h\");\n    } else if (loops === 63) {\n      randomres5x5(loops, \"o\");\n    }\n\n    localStorage.setItem('way', 0);\n    tens = \"00\";\n    seconds = \"00\";\n    document.getElementById(\"tens\").innerHTML = tens;\n    document.getElementById(\"seconds\").innerHTML = seconds;\n  };\n\n  function startTimer() {\n    tens++;\n\n    if (tens < 9) {\n      document.getElementById(\"tens\").innerHTML = \"0\" + tens;\n    }\n\n    if (tens > 9) {\n      document.getElementById(\"tens\").innerHTML = tens;\n    }\n\n    if (tens > 99) {\n      seconds++;\n      document.getElementById(\"seconds\").innerHTML = \"0\" + seconds;\n      tens = 0;\n      document.getElementById(\"tens\").innerHTML = \"0\" + 0;\n    }\n\n    if (seconds > 9) {\n      document.getElementById(\"seconds\").innerHTML = seconds;\n    }\n  }\n}; // function for new game for 4x4\n\n\nfunction randomres() {\n  field.innerHTML = \"\";\n  n = 0;\n\n  var numbers = _toConsumableArray(Array(15).keys());\n\n  way = 1;\n  document.querySelector('.move').textContent = 'move 0';\n  answer = [];\n  cellsize = 100;\n  cells = [];\n  empty = {\n    top: 0,\n    value: 0,\n    left: 0\n  };\n  cells.push(empty);\n  photo = [['a'], ['b'], ['c'], ['d'], ['e']];\n  ranphoto = photo[Math.floor(Math.random() * photo.length)];\n\n  var _loop3 = function _loop3(_i3) {\n    var value = numbers[_i3 - 1] + 1;\n    var cell = document.createElement('button');\n    cell.className = 'cell';\n    cell.innerHTML = \"<img class=\\\"img\\\" src=\\\"../src/img/\".concat(ranphoto).concat(_i3, \".jpg\\\" alt=\\\"\\\">\");\n    cell.value = value;\n    var left = _i3 % 4;\n    var top = (_i3 - left) / 4;\n    cells.push({\n      left: left,\n      top: top,\n      value: value,\n      element: cell\n    });\n    cell.style.left = \"\".concat(left * cellsize, \"px\");\n    cell.style.top = \"\".concat(top * cellsize, \"px\");\n    field.append(cell);\n\n    var dragStart = function dragStart() {\n      setTimeout(function () {\n        cell.classList.add('hide');\n      }, 0);\n    };\n\n    cell.addEventListener('dragstart', dragStart);\n    cell.addEventListener('dragend', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      move2(_i3);\n      cell.classList.remove('hide');\n    });\n    document.body.addEventListener(\"dragover\", function (event) {\n      event.preventDefault();\n    });\n    cell.addEventListener('click', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      move2(_i3);\n      setTimeout(function () {}, 1000);\n    });\n  };\n\n  for (var _i3 = 1; _i3 <= 15; _i3++) {\n    _loop3(_i3);\n  }\n\n  move();\n} // function for new game for 5x5,6x6,7x7,8x8\n\n\nfunction randomres5x5(looplength, picture) {\n  field.innerHTML = \"\";\n  n = 0;\n  var numbers;\n\n  if (looplength === 24) {\n    numbers = _toConsumableArray(Array(looplength + 1).keys());\n    numbers.shift();\n    numbers.sort(function () {\n      return Math.random() - 0.5;\n    });\n  } else if (looplength === 35) {\n    numbers = _toConsumableArray(Array(looplength + 1).keys());\n    numbers.shift();\n    numbers.sort(function () {\n      return Math.random() - 0.5;\n    });\n  } else if (looplength === 48) {\n    numbers = _toConsumableArray(Array(looplength + 1).keys());\n    numbers.shift();\n    numbers.sort(function () {\n      return Math.random() - 0.5;\n    });\n  } else if (looplength === 63) {\n    numbers = _toConsumableArray(Array(looplength + 1).keys());\n    numbers.shift();\n    numbers.sort(function () {\n      return Math.random() - 0.5;\n    });\n  }\n\n  way = 1;\n  document.querySelector('.move').textContent = 'move 0';\n  answer = [];\n  cellsize = 100;\n  cells = [];\n  empty = {\n    top: 0,\n    value: 0,\n    left: 0\n  };\n  cells.push(empty);\n  ranphoto = photo[Math.floor(Math.random() * photo.length)];\n\n  var _loop4 = function _loop4(_i4) {\n    var value = numbers[_i4 - 1] + 1;\n    var cell = document.createElement('button');\n    cell.className = 'cell';\n    cell.innerHTML = \"<img class=\\\"img\\\" src=\\\"../src/img/\".concat(picture).concat(numbers[_i4 - 1], \".jpg\\\" alt=\\\"\\\">\");\n    cell.value = value;\n\n    var left = _i4 % Math.sqrt(looplength + 1);\n\n    var top = (_i4 - left) / Math.sqrt(looplength + 1);\n    cells.push({\n      left: left,\n      top: top,\n      value: value,\n      element: cell\n    });\n    cell.style.left = \"\".concat(left * cellsize, \"px\");\n    cell.style.top = \"\".concat(top * cellsize, \"px\");\n    field.append(cell);\n\n    var dragStart = function dragStart() {\n      setTimeout(function () {\n        cell.classList.add('hide');\n      }, 0);\n    };\n\n    cell.addEventListener('dragstart', dragStart);\n    cell.addEventListener('dragend', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      move2(_i4);\n      cell.classList.remove('hide');\n    });\n    document.body.addEventListener(\"dragover\", function (event) {\n      event.preventDefault();\n    });\n    cell.addEventListener('click', function () {\n      document.querySelector('.move').textContent = \"move \".concat(way);\n\n      if (soundon % 2 === 0) {\n        third.currentTime = 0;\n        third.play();\n      }\n\n      move2(_i4);\n    });\n  };\n\n  for (var _i4 = 1; _i4 <= looplength; _i4++) {\n    _loop4(_i4);\n  }\n\n  answer.reverse();\n}\n\ndocument.querySelector('.soundon').addEventListener('click', function () {\n  soundon++;\n\n  if (soundon % 2 === 0) {\n    document.querySelector('.soundon').textContent = 'Sound on';\n  } else {\n    document.querySelector('.soundon').textContent = 'Sound off';\n  }\n});\ndocument.querySelector('.addsound').addEventListener('click', function () {\n  if (document.querySelector('.addsound').textContent === 'Music on') {\n    sound.pause();\n    document.querySelector('.addsound').textContent = 'Music off';\n    return;\n  }\n\n  sound.load();\n  sound.play();\n  document.querySelector('.addsound').textContent = 'Music on';\n}); // set gamefield size\n\ndocument.querySelector('.mission').addEventListener('click', function () {\n  currentMission++;\n\n  if (currentMission > 4) {\n    currentMission = 0;\n  }\n\n  document.querySelector('.level-photo').src = \"../src/img/\".concat(missions[currentMission], \"x.jpg\");\n  var looplength;\n\n  switch (missions[currentMission]) {\n    case 1:\n      document.querySelector('.mission').textContent = 'Easy';\n      randomres();\n      localStorage.setItem('empty', \"\".concat(empty.top, \",\").concat(empty.value));\n      document.querySelector('.solution2').style.display = \"none\";\n      document.querySelector('.field').style.height = '400px';\n      document.querySelector('.solution').style.display = \"block\";\n      document.querySelector('.field').style.width = '400px';\n      answer.reverse();\n      localStorage.setItem('answer', answer);\n      break;\n\n    case 2:\n      looplength = 24;\n      square5x5(looplength, \"f\");\n      document.querySelector('.solution').style.display = \"none\";\n      randomres5x5(looplength, \"f\");\n      document.querySelector('.solution2').style.display = \"block\";\n      localStorage.setItem('all', field.innerHTML);\n      document.querySelector('.field').style.height = '500px';\n      document.querySelector('.mission').textContent = 'Normal';\n      document.querySelector('.field').style.width = '500px';\n      break;\n\n    case 3:\n      looplength = 35;\n      square5x5(looplength, \"g\");\n      randomres5x5(looplength, \"g\");\n      document.querySelector('.solution').style.display = \"none\";\n      localStorage.setItem('all', field.innerHTML);\n      document.querySelector('.solution2').style.display = \"block\";\n      document.querySelector('.field').style.height = '600px';\n      document.querySelector('.field').style.width = '600px';\n      localStorage.setItem('sizefield', document.querySelector('.field').style.height);\n      document.querySelector('.mission').textContent = 'Hard';\n      break;\n\n    case 4:\n      document.querySelector('.mission').textContent = 'Super hard';\n      looplength = 48;\n      square5x5(looplength, \"h\");\n      randomres5x5(looplength, \"h\");\n      document.querySelector('.solution2').style.display = \"block\";\n      document.querySelector('.solution').style.display = \"none\";\n      localStorage.setItem('all', field.innerHTML);\n      document.querySelector('.field').style.height = '700px';\n      document.querySelector('.field').style.width = '700px';\n      localStorage.setItem('sizefield', document.querySelector('.field').style.height);\n      break;\n\n    case 5:\n      document.querySelector('.mission').textContent = 'Extremely hard';\n      document.querySelector('.solution2').style.display = \"block\";\n      looplength = 63;\n      square5x5(looplength, \"o\");\n      randomres5x5(looplength, \"o\");\n      document.querySelector('.solution').style.display = \"none\";\n      localStorage.setItem('all', field.innerHTML);\n      document.querySelector('.field').style.height = '800px';\n      document.querySelector('.field').style.width = '800px';\n      localStorage.setItem('sizefield', document.querySelector('.field').style.height);\n      break;\n  }\n\n  localStorage.setItem('level', currentMission);\n});\ndocument.querySelector('.solution2').addEventListener('click', function () {\n  var looplength = document.querySelectorAll('.cell').length;\n  var characterOfPhoto;\n\n  if (looplength === 24) {\n    characterOfPhoto = \"f\";\n  } else if (looplength === 35) {\n    characterOfPhoto = \"g\";\n  } else if (looplength === 48) {\n    characterOfPhoto = \"h\";\n  } else if (looplength === 63) {\n    characterOfPhoto = \"o\";\n  }\n\n  empty = {\n    top: 0,\n    value: 0,\n    left: 0\n  };\n  square5x5(looplength, characterOfPhoto);\n});\n\n//# sourceURL=webpack://puzzle/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! namespace exports */
/*! export menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu\n/* harmony export */ });\nfunction menu() {\n  document.querySelector('.settings').addEventListener('click', function () {\n    document.querySelector('.settings').style.display = \"none\";\n    document.querySelector('.addsound').style.display = \"block\";\n    document.querySelector('.soundon').style.display = \"block\";\n    var x = window.matchMedia(\"(min-width: 1280px)\");\n\n    if (x.matches) {\n      document.querySelector('.level').style.display = \"block\";\n      document.querySelector('.level-photo').style.display = \"block\";\n    }\n\n    document.querySelector('.exit').style.display = \"block\";\n    document.querySelector('.icon').style.display = \"none\";\n    document.querySelector('.About').style.display = \"block\";\n    document.querySelector('.restart').style.display = \"none\";\n    document.querySelector('.continue').style.display = \"none\";\n  });\n  document.querySelector('.exit').addEventListener('click', function () {\n    document.querySelector('.settings').style.display = \"block\";\n    document.querySelector('.level-photo').style.display = \"none\";\n    document.querySelector('.icon').style.display = \"block\";\n    document.querySelector('.addsound').style.display = \"none\";\n    document.querySelector('.soundon').style.display = \"none\";\n    document.querySelector('.exit').style.display = \"none\";\n    document.querySelector('.level').style.display = \"none\";\n    document.querySelector('.About').style.display = \"none\";\n    document.querySelector('.restart').style.display = \"block\";\n    document.querySelector('.continue').style.display = \"block\";\n  });\n  document.querySelector('.About').addEventListener('click', function () {\n    document.querySelector('.addsound').style.display = \"none\";\n    document.querySelector('.soundon').style.display = \"none\";\n    document.querySelector('.exit').style.display = \"none\";\n    document.querySelector('.level-photo').style.display = \"none\";\n    document.querySelector('.icon').style.display = \"block\";\n    document.querySelector('.level').style.display = \"none\";\n    document.querySelector('.icon').style.display = \"none\";\n    document.querySelector('.checker').style.display = \"block\";\n    document.querySelector('.exit2').style.display = \"block\";\n    document.querySelector('.About').style.display = \"none\";\n    document.querySelector('.checker').textContent = 'Dear checker, please give your discord visible or give me max mark 😉 and if you can not watch video it is problem with you internet speed or your browser. You can give me advice(I am new in programing).';\n  });\n  document.querySelector('.exit2').addEventListener('click', function () {\n    document.querySelector('.addsound').style.display = \"block\";\n    document.querySelector('.soundon').style.display = \"block\";\n    document.querySelector('.checker').style.display = \"none\";\n    document.querySelector('.icon').style.display = \"none\";\n    document.querySelector('.exit2').style.display = \"none\";\n    document.querySelector('.About').style.display = \"block\";\n    var x = window.matchMedia(\"(min-width: 1280px)\");\n\n    if (x.matches) {\n      document.querySelector('.level').style.display = \"block\";\n      document.querySelector('.level-photo').style.display = \"block\";\n    }\n\n    document.querySelector('.exit').style.display = \"block\";\n  });\n  document.querySelector('.house').addEventListener('click', function () {\n    document.querySelector('.menu').style.display = \"block\";\n  });\n\n  if (localStorage.getItem('sizefield') !== null) {\n    document.querySelector('.field').style.height = localStorage.getItem('sizefield');\n    document.querySelector('.field').style.width = localStorage.getItem('sizefield');\n  }\n\n  document.querySelector('.skip').addEventListener('click', function () {\n    document.querySelector('.skip').style.display = \"none\";\n    document.querySelector('.unmute').style.display = \"none\";\n    document.querySelector('#ocScreencapVideo').pause();\n    document.querySelector('#ocScreencapVideo').style.display = \"none\";\n  });\n\n  document.querySelector('#ocScreencapVideo').onended = function () {\n    document.querySelector('.skip').style.display = \"none\";\n    document.querySelector('.unmute').style.display = \"none\";\n    document.querySelector('#ocScreencapVideo').style.display = \"none\";\n  };\n\n  var mute = 0;\n  document.querySelector('.unmute').addEventListener('click', function () {\n    if (mute % 2 === 0) {\n      document.querySelector('#ocScreencapVideo').muted = false;\n      document.querySelector('.unmute').innerHTML = \"Mute\";\n    } else {\n      document.querySelector('#ocScreencapVideo').muted = true;\n      document.querySelector('.unmute').textContent = \"Unmute\";\n    }\n\n    mute++;\n  });\n}\n\n//# sourceURL=webpack://puzzle/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://puzzle/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;