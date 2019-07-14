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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\ntd {\r\n    border: 1px solid black;\r\n    padding: 5px;\r\n}\r\na {\r\n    color: black;\r\n}\r\n\r\n.task {\r\n    width: 400px;\r\n    border: none;\r\n}\r\n.td-for-task.rs-touday {\r\n    /* background-color: #dcdcdc;   */\r\n    border-left: none;\r\n}\r\n.rs-line.rs-touday {\r\n    margin-left: -18px;\r\n}\r\n.rs-line {\r\n    display: block;\r\n    background-color: lightcoral;   \r\n    height: 20px;\r\n    margin-right: 11px;\r\n    /* margin-left: 13px; */\r\n    border-radius: 15px;\r\n    /* margin-bottom: 5px; */\r\n}\r\n.rs-line--last {\r\n    margin-right: 0;\r\n    border-radius: 15px 0 0 15px;\r\n}\r\n\r\n.table__title {\r\n    font-size: 28px;\r\n    text-align: center;\r\n    position: relative;\r\n    width: 80%;\r\n    line-height: 28px;\r\n}\r\n.rs-type {\r\n    background-color: lightgrey;\r\n}\r\n.rs-objects {\r\n    width: 300px;\r\n}\r\n\r\n.btn--prev {\r\n    float: left;\r\n} \r\n.btn--next {\r\n    float: right;\r\n} \r\n\r\n#table tbody tr:hover {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.rs-show-modal{\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.modal-footer--space {\r\n    justify-content: flex-end;\r\n}\r\n.rs-day-column {\r\n    min-width: 25px;\r\n    height: 25px;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/create-deal.js":
/*!*******************************!*\
  !*** ./src/js/create-deal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  return new Promise(function (resolve) {
    console.log(data);
    BX24.callBatch({
      task_add: ['tasks.task.add', {
        'fields': {
          'TITLE': data['task-name'],
          'RESPONSIBLE_ID': 16,
          'START_DATE_PLAN': data['date-start'],
          'DEADLINE': data['date-end'],
          'UF_CRM_TASK': [data['company-id']]
        }
      }] // get_company_list: ['crm.company.list', {'order': { "UF_CRM_1561620120175": "ASC" }, 'filter': { 'COMPANY_TYPE' : 'SUPPLIER' }, 'select': [ "*", "UF_*",  ] }],

    }, function (result) {
      return resolve(result);
    });
  });
}); // BX24.callMethod(
//     'tasks.task.add', 
//     {fields:{TITLE:'task for test', RESPONSIBLE_ID:1}}, 
//     function(res){console.log(res.answer.result);}
//  );

/***/ }),

/***/ "./src/js/get-company.js":
/*!*******************************!*\
  !*** ./src/js/get-company.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return new Promise(function (resolve) {
    BX24.callBatch({
      get_company_fields: ['crm.company.fields', {}],
      get_company_list: ['crm.company.list', {
        'order': {
          "UF_CRM_1561620120175": "ASC"
        },
        'filter': {
          'COMPANY_TYPE': 'SUPPLIER'
        },
        'select': ["*", "UF_*"]
      }],
      get_task_list: ['tasks.task.list', {
        'filter': {
          '!UF_CRM_TASK': false
        },
        'select': ["*", "UF_*"]
      }]
    }, function (result) {
      console.log(result.get_task_list.data());
      window.typesOfCompany = [];
      result.get_company_fields.data().UF_CRM_1561620120175.items.forEach(function (elem) {
        window.typesOfCompany.push({
          'NAME': elem.VALUE,
          'COMPANIES': result.get_company_list.data().filter(function (company) {
            return company.UF_CRM_1561620120175 == elem.ID;
          })
        });
      });
      window.objCompanyTasks = {};
      result.get_task_list.data().tasks.forEach(function (task) {
        if (objCompanyTasks[task.ufCrmTask[0]] == undefined) {
          objCompanyTasks[task.ufCrmTask[0]] = [];
        }

        task.timestamp_start = +new Date(task.startDatePlan);
        task.timestamp_end = +new Date(task.deadline) - 3600 * 24;
        objCompanyTasks[task.ufCrmTask[0]].push(task);
      });
      return resolve(window.typesOfCompany);
    });
  });
});

/***/ }),

/***/ "./src/js/get-time.js":
/*!****************************!*\
  !*** ./src/js/get-time.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  //Считаем количество дней в месяце
  Date.prototype.daysInMonth = function () {
    return 33 - new Date(this.getFullYear(), this.getMonth() + month, 33).getDate();
  };

  var countDay = new Date().daysInMonth();
  window.timestamp = [];

  for (var i = 1; i <= countDay; i++) {
    timestamp.push(+new Date(d.getFullYear(), d.getMonth() + month, i));
  }

  var monthName = new Date();
  monthName = new Date(monthName.getFullYear(), monthName.getMonth() + window.month, monthName.getDate());
  monthName = monthName.toLocaleString('ru', {
    'month': 'long',
    'year': 'numeric'
  });
  content = "<thead><tr>\n                    <td rowspan=\"2\" colspan=\"2\" class=\"rs-objects\">\u041E\u0431\u044A\u0435\u043A\u0442\u044B</td>\n                    <td class=\"table__title\" colspan=\"".concat(countDay, "\">\n                        <a href=\"javascript:void(0)\" onclick=\"changeMonth('prev')\" class=\"btn btn--prev\" id=\"prev\"><i class=\"fas fa-backward\"></i></a>\n                        ").concat(monthName, "\n                        <a href=\"javascript:void(0)\" onclick=\"changeMonth('next')\" class=\"btn btn--next\" id=\"next\"><i class=\"fas fa-forward\"></i></a>\n                    </td>\n                </tr>");
  content += "<tr>";

  for (var j = 1; j <= countDay; j++) {
    content += "<td  class=\"rs-day-column\">".concat(j, "</td>");
  }

  content += "</tr></thead>";
  window.dataObj = {
    'COUNT_DAY': countDay,
    'DATE_STRING': monthName,
    'TIMESTAMP': timestamp
  };
});

/***/ }),

/***/ "./src/js/show-table.js":
/*!******************************!*\
  !*** ./src/js/show-table.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  content += "<tbody>";
  typesOfCompany.forEach(function (type) {
    if (!type['COMPANIES'].length) {
      return false;
    }

    content += "<tr><td colspan=\"50\" class=\"rs-type\">".concat(type['NAME'], "</td></tr>");
    type['COMPANIES'].forEach(function (company) {
      content += "<tr>\n                        <td><a href=\"https://bazaivolga.bitrix24.ru/crm/company/details/".concat(company.ID, "/\" target=\"blank\">").concat(company.TITLE, "</a></td>\n                        <td class=\"rs-show-modal\" data-id=\"").concat(company.ID, "\">\n                            <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#add-deal\" data-company-id=\"CO_").concat(company.ID, "\" data-company-name=\"").concat(company.TITLE, "\"><i class=\"fas fa-user-plus\"></i></a>\n                        </td>");
      var arTasks = [];

      if (window.objCompanyTasks["CO_".concat(company.ID)]) {
        arTasks = window.objCompanyTasks["CO_".concat(company.ID)].filter(function (task) {
          return task.timestamp_end >= timestamp[0] && task.timestamp_start <= timestamp[window.dataObj['COUNT_DAY'] - 1];
        }).sort(function (a, b) {
          return a.timestamp_start - b.timestamp_start;
        });
      }

      var flag_start = false;
      var count = 0;
      var todayClass = '';
      var i = 0;
      /**
       * Вывод диаграммы
       */

      console.log(arTasks);

      for (var j = 1; j <= window.dataObj['COUNT_DAY']; j++) {
        if (window.objCompanyTasks["CO_".concat(company.ID)]) {
          if (flag_start && arTasks[i].timestamp_end <= timestamp[j]) {
            i++;
            count++;
            content += "<td colspan=\"".concat(count, "\" class=\"td-for-task ").concat(todayClass, "\"><a href=\"#\" class=\"rs-line ").concat(todayClass, "\"></a></td>");

            if (arTasks[i] && arTasks[i].timestamp_end >= timestamp[j] && arTasks[i].timestamp_start <= timestamp[j]) {
              todayClass = 'rs-touday';
              count = 0;
              continue;
            }

            count = 0;
            todayClass = '';
            flag_start = false;
            continue;
          }

          if (arTasks[i] && arTasks[i].timestamp_end >= timestamp[j] && arTasks[i].timestamp_start <= timestamp[j]) {
            flag_start = true;
          }

          console.log(flag_start);

          if (flag_start && window.dataObj['COUNT_DAY'] == j) {
            count++;

            if (arTasks[i].timestamp_end > timestamp[j - 1]) {
              content += "<td colspan=\"".concat(count, "\" class=\"td-for-task ").concat(todayClass, "\"><a href=\"#\" class=\"rs-line rs-line--last\"></a></td>");
            } else {
              content += "<td colspan=\"".concat(count, "\" class=\"td-for-task ").concat(todayClass, "\"><a href=\"#\" class=\"rs-line\"></a></td>");
            }
          }

          if (flag_start) {
            count++;
            continue;
          }

          content += "<td  class=\"\">".concat(j, "</td>");
        } else {
          content += "<td  class=\"\">".concat(j, "</td>");
        }
      }

      return content += "</tr>"; // }
      // for ( var j = 1; j <= window.dataObj['COUNT_DAY']; j++ ) {
      //     for (let i = 0; i < arTasks.length; i++) {
      //         if (arTasks[i].timestamp_end >= timestamp[j] && arTasks[i].timestamp_start <= timestamp[j]) {
      //             content += '<td  class="td-for-task">'+ j +'</td>';
      //         } else {
      //             content += `<td  class=""></td>`;
      //         }
      //     }
      //     // if ( dateEndPlan >= timestamp[j] && dateStart <= timestamp[j] ) {//|| dateStart > timestamp[1]) ) {
      //     // 	daysForTask += '<td  class="td-for-task">'+ j +'</td>';
      //     // } else {
      //     //     content += `<td  class=""></td>`;
      //     // }	
      // }		
    });
  });
  content += "</tbody>";
  $("#table").html(content);
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_get_company_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/get-company.js */ "./src/js/get-company.js");
/* harmony import */ var _js_show_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/show-table.js */ "./src/js/show-table.js");
/* harmony import */ var _js_get_time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/get-time.js */ "./src/js/get-time.js");
/* harmony import */ var _js_create_deal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/create-deal.js */ "./src/js/create-deal.js");
// styles
 // js





document.addEventListener('DOMContentLoaded', function () {
  var _this = this;

  window.timestamp = [];
  window.d = new Date();
  window.month = 0;
  window.content = '';

  window.changeMonth = function (direction) {
    if (direction == 'next') {
      month++;
    } else {
      month--;
    }

    Object(_js_get_time_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_js_show_table_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  };
  /**
   * Форма bootstrap 4 - забронировать время
   */


  $('#add-deal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var modal = $(_this);
    var companyName = button.data('company-name');
    modal.find('.modal-title').text("\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \xAB".concat(companyName, "\xBB"));
    modal.find('input[name="task-name"').val("".concat(companyName));
    modal.find('input[name="responsible"').val("\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u043A \u0441\u0434\u0435\u043B\u043A\u0435");
    modal.find('input[name="company-id"').val(button.data('company-id')); // modal.find('.modal-body input').val(recipient)
  });
  /**
   * Созздание задачи
   */

  $('#rs-add-task-form').on('submit', function (evt) {
    evt.preventDefault();
    console.log(evt);
    var form = evt.target;
    var data = {
      'date-start': form.querySelector('input[name="date-start"]').value,
      'date-end': form.querySelector('input[name="date-end"]').value,
      'task-name': form.querySelector('input[name="task-name"]').value,
      'responsible': form.querySelector('input[name="responsible"]').value,
      'company-id': form.querySelector('input[name="company-id"]').value
    };
    Object(_js_create_deal_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data).then(function (resolve) {
      console.log(resolve);
    });
  });
  /**
   * datetimepicker
   */

  $.datetimepicker.setLocale('ru');
  $('#date_timepicker_start').datetimepicker({
    format: 'd.m.Y',
    dayOfWeekStart: 1,
    value: new Date(),
    onShow: function onShow(ct) {
      this.setOptions({// maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false
      });
    },
    timepicker: false
  });
  $('#date_timepicker_end').datetimepicker({
    format: 'd.m.Y',
    dayOfWeekStart: 1,
    value: new Date(),
    onShow: function onShow(ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val() : false
      });
    },
    timepicker: false
  }); //----- /datetimepicker -----//

  BX24.init(function () {
    var place = BX24.placement.info();
    Object(_js_get_company_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (resolve) {
      Object(_js_get_time_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      Object(_js_show_table_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map