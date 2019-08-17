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
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\ntd {\r\n    border: 1px solid #ced4da;\r\n    padding: 5px;\r\n}\r\na {\r\n    color: black;\r\n}\r\na:hover {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n.task {\r\n    width: 400px;\r\n    border: none;\r\n}\r\n\r\n.rs-line {\r\n    display: block;\r\n    background-color: red;   \r\n    border-radius: 15px;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.rs-line:hover {\r\n    color: #fff;\r\n}\r\n.rs-line--last {\r\n    margin-right: 0;\r\n    border-top-right-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.rs-line--first {\r\n    margin-right: 0;\r\n    border-top-left-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n}\r\n.table__title {\r\n    font-size: 28px;\r\n    text-align: center;\r\n    position: relative;\r\n    width: 80%;\r\n    line-height: 28px;\r\n}\r\n.rs-type {\r\n    background-color: lightgrey;\r\n}\r\n.rs-objects {\r\n    width: 300px;\r\n}\r\n\r\n.btn--prev {\r\n    float: left;\r\n} \r\n.btn--next {\r\n    float: right;\r\n} \r\n\r\n#table tbody tr:hover {\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.rs-show-modal{\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.modal-footer--space {\r\n    justify-content: space-between;\r\n}\r\n.rs-day-column {\r\n    min-width: 25px;\r\n    height: 25px;\r\n    text-align: center;\r\n}\r\n.rs-container {\r\n\tpadding: 0 20px;\r\n\tmax-width: 1200px;\r\n\tmargin: 0 auto;\r\n}\r\ncaption {\r\n\tcaption-side: top!important;\r\n}\r\n.rs-form {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin-bottom: 20px;\r\n    margin-top: 40px;\r\n    align-items: flex-end;\r\n}\r\n.rs-form__img  h1{\r\n    line-height: 34px;\r\n    color: #0062cc;\r\n}\r\n.rs-form-list {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\t/*width: 728px;*/\r\n}\r\n.rs-form-item:not(:last-child) {\r\n\tmargin-right: 20px;\r\n}\r\n.rs-form__img img{\r\n\tmax-width: 223px;\r\n}\r\n.rs-green {\r\n    background-color: green;\r\n}\r\n\r\n.rs-red {\r\n    background-color: lightcoral;\r\n}\r\n.rs-grey {\r\n    background-color: lightgrey;\r\n}\r\n.rs-task-deal {\r\n    color: red;\r\n}\r\n\r\n.rs-task-deal a {\r\n    color: #0062cc;\r\n}\r\n\r\n.weekend {\r\n    color: red;\r\n}\r\n.touday { \r\n    background-color: #fffc98;\r\n}", ""]);


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

/***/ "./src/js/application-start.js":
/*!*************************************!*\
  !*** ./src/js/application-start.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-table */ "./src/js/get-table.js");
/* harmony import */ var _get_deals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-deals.js */ "./src/js/get-deals.js");
/* harmony import */ var _get_time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-time.js */ "./src/js/get-time.js");



/**
 * 
 * @param {object} obj 
 */

var getBusyDays = function getBusyDays(obj) {
  obj.DEALS.forEach(function (deal) {
    deal.busy = [];
    obj.DATE.TIMESTAMP.forEach(function (timestamp, index) {
      if (deal.timestamp_end >= timestamp && deal.timestamp_start <= timestamp) {
        deal.busy.push(index);
      }
    });
  });
  return obj;
};
/**
 * 
 * @param {object} obj
 */


var getTypesOfCompany = function getTypesOfCompany(obj) {
  var typesOfCompany = [];
  obj.company_fields.forEach(function (elem) {
    typesOfCompany.push({
      'ID': elem.ID,
      'NAME': elem.VALUE,
      'COMPANIES': obj.company_list.filter(function (company) {
        company.deals = obj.DEALS.filter(function (deal) {
          return deal.UF_CRM_1563881923 == company.ID;
        });
        return company.UF_CRM_1561620120175 == elem.ID;
      })
    });
  });
  return typesOfCompany;
};
/**
 * 
 * @param {object} obj
 */


/* harmony default export */ __webpack_exports__["default"] = (function (obj) {
  Object(_get_deals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj).then(function (deals) {
    obj['DEALS'] = deals;
    obj['DATE'] = Object(_get_time_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj.MONTH_COUNTER);
    obj['TYPES_OF_COMPANY'] = getTypesOfCompany(obj);
    data = getBusyDays(obj);
    var content = Object(_get_table__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
    document.querySelector("#table").innerHTML = content;
    console.log(data);
  });
});

/***/ }),

/***/ "./src/js/change-month.js":
/*!********************************!*\
  !*** ./src/js/change-month.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-start */ "./src/js/application-start.js");

/**
 * 
 * @param {boolean} next 
 */

/* harmony default export */ __webpack_exports__["default"] = (function (next) {
  next ? data.MONTH_COUNTER++ : data.MONTH_COUNTER--;
  Object(_application_start__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
});

/***/ }),

/***/ "./src/js/datetimepicker.js":
/*!**********************************!*\
  !*** ./src/js/datetimepicker.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$.datetimepicker.setLocale('ru');
$('#date_timepicker_find_start').datetimepicker({
  format: 'd/m/Y',
  dayOfWeekStart: 1,
  value: new Date(),
  scrollMonth: false,
  onShow: function onShow(ct) {
    this.setOptions({
      maxDate: $('#date_timepicker_find_end').val() ? $('#date_timepicker_find_end').val().split('/').reverse().join('/') : false
    });
  },
  timepicker: false
});
$('#date_timepicker_find_end').datetimepicker({
  format: 'd/m/Y',
  dayOfWeekStart: 1,
  value: new Date(),
  scrollMonth: false,
  onShow: function onShow(ct) {
    this.setOptions({
      minDate: $('#date_timepicker_find_start').val() ? $('#date_timepicker_find_start').val().split('/').reverse().join('/') : false
    });
  },
  timepicker: false
});
$('#date_timepicker_deal_start').datetimepicker({
  format: 'd/m/Y',
  dayOfWeekStart: 1,
  value: '',
  scrollMonth: false,
  onShow: function onShow(ct) {
    this.setOptions({});
  },
  timepicker: false
});
$('#date_timepicker_deal_end').datetimepicker({
  format: 'd/m/Y',
  dayOfWeekStart: 1,
  value: '',
  scrollMonth: false,
  onShow: function onShow(ct) {
    this.setOptions({
      minDate: $('#date_timepicker_deal_start').val() ? $('#date_timepicker_deal_start').val().split('/').reverse().join('/') : false // Странный эффект, если не reverse(), то не работает

    });
  },
  timepicker: false
}); //----- /datetimepicker -----//

/***/ }),

/***/ "./src/js/find-free-company.js":
/*!*************************************!*\
  !*** ./src/js/find-free-company.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * В BX24 не реализован фильтр со сложной логикой
 * Приходится делать batch запрос
 * 
 * @param {object} date
 */
/* harmony default export */ __webpack_exports__["default"] = (function (date) {
  return new Promise(function (resolve) {
    BX24.callBatch({
      first: ['crm.deal.list', {
        'filter': {
          "<=UF_CRM_1563776654352": date.start,
          '>=UF_CRM_1563776665746': date.start,
          '!UF_CRM_1563881923': false
        },
        'select': ["UF_CRM_1563881923"]
      }],
      second: ['crm.deal.list', {
        'filter': {
          "<=UF_CRM_1563776654352": date.end,
          '>=UF_CRM_1563776665746': date.end,
          '!UF_CRM_1563881923': false
        },
        'select': ["UF_CRM_1563881923"]
      }],
      third: ['crm.deal.list', {
        'filter': {
          ">=UF_CRM_1563776654352": date.start,
          '<=UF_CRM_1563776665746': date.end,
          '!UF_CRM_1563881923': false
        },
        'select': ["UF_CRM_1563881923"]
      }]
    }, function (result) {
      return resolve([].concat(_toConsumableArray(result.first.data()), _toConsumableArray(result.second.data()), _toConsumableArray(result.third.data())));
    });
  });
});

/***/ }),

/***/ "./src/js/get-company.js":
/*!*******************************!*\
  !*** ./src/js/get-company.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @return {object} 
 */
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return new Promise(function (resolve) {
    BX24.callBatch({
      get_deal_fields: ['crm.deal.fields', {}],
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
      get_deal_place: ['crm.deal.get', {
        id: BX24.placement.info().options.ID
      }]
    }, function (result) {
      return resolve({
        'deal_place': result.get_deal_place.data(),
        'deal_fields': {
          'UF_CRM_1563514438': result.get_deal_fields.data().UF_CRM_1563514438.items,
          'UF_CRM_1565683410717': result.get_deal_fields.data().UF_CRM_1565683410717.items,
          'UF_CRM_1565683470394': result.get_deal_fields.data().UF_CRM_1565683470394.items
        },
        'company_fields': result.get_company_fields.data().UF_CRM_1561620120175.items,
        'company_list': result.get_company_list.data(),
        'MONTH_COUNTER': 0
      });
    });
  });
});

/***/ }),

/***/ "./src/js/get-contact.js":
/*!*******************************!*\
  !*** ./src/js/get-contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param {integer} id
 */
/* harmony default export */ __webpack_exports__["default"] = (function (id) {
  return new Promise(function (resolve) {
    BX24.callMethod("crm.contact.get", {
      id: id
    }, function (result) {
      if (result.error()) {
        alert('Произошла ошибка получения контакта...');
        return console.error(result.error());
      }

      return resolve(result.data());
    });
  });
});

/***/ }),

/***/ "./src/js/get-deals.js":
/*!*****************************!*\
  !*** ./src/js/get-deals.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Получаем на один месяц меньше текущего
 * @param {integer} month
 */
var getStartDate = function getStartDate(month) {
  var date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() + month - 1);
  return date;
};
/**
 *
 *
 * UF_CRM_1563776654352 - date_start
 * UF_CRM_1563776665746 - date_end
 * UF_CRM_1563881923 - object
 */


/* harmony default export */ __webpack_exports__["default"] = (function (obj) {
  var deals = [];
  return new Promise(function (resolve) {
    BX24.callMethod("crm.deal.list", {
      order: {
        "STAGE_ID": "ASC"
      },
      filter: {
        ">=UF_CRM_1563776654352": getStartDate(obj.MONTH_COUNTER),
        '!UF_CRM_1563881923': false
      },
      select: ["*", "UF_*"]
    }, function (result) {
      if (result.error()) {
        alert('Произошла ошибка получения сделки...');
        return console.error(result.error());
      }

      deals = [].concat(_toConsumableArray(deals), _toConsumableArray(result.data()));

      if (result.more()) {
        return result.next();
      }

      deals.forEach(function (deal) {
        deal.timestamp_start = +new Date(deal.UF_CRM_1563776654352);
        deal.timestamp_end = +new Date(deal.UF_CRM_1563776665746);
      });
      return resolve(deals);
    });
  });
});

/***/ }),

/***/ "./src/js/get-table.js":
/*!*****************************!*\
  !*** ./src/js/get-table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @param {object} data 
 * @param {object} deal 
 * @param {object} days 
 * @return {array}
 */
var isLong = function isLong(data, deal, days) {
  var className = []; // Если задача с прошлого месяца

  if (days.start == 1 && deal.timestamp_start < data.DATE.TIMESTAMP[days.start] - 3600 * 4 * 1000) {
    className.push('rs-line--first');
  } // Если задача закончится в следующем месяце 


  if (days.end == data.DATE.COUNT_DAY && deal.timestamp_end > data.DATE.TIMESTAMP[days.end]) {
    className.push('rs-line--last');
  }

  return className;
};
/**
 * 
 * @param {object}
 * @return {string}
 */


var getHead = function getHead(data) {
  return "<tr>\n                <td rowspan=\"2\" colspan=\"2\" class=\"rs-objects\">\u041E\u0431\u044A\u0435\u043A\u0442\u044B</td>\n                <td class=\"table__title\" colspan=\"".concat(data.DATE.COUNT_DAY, "\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn--prev\" data-name=\"control\" id=\"prev\"><i class=\"fas fa-backward\"></i></a>\n                    ").concat(data.DATE.MONTH, "\n                    <a href=\"javascript:void(0)\" class=\"btn btn--next\" data-name=\"control\" id=\"next\"><i class=\"fas fa-forward\"></i></a>\n                </td>\n            </tr>\n            <tr>\n                ").concat(data.DATE.HEAD, "\n            </tr>");
};
/**
 * 
 * @param {object} type 
 * @return {string}
 */


var getCompanyType = function getCompanyType(type) {
  return "<tr><td colspan=\"50\" class=\"rs-type\">".concat(type.NAME, "</td></tr>");
};
/**
 * 
 * @param {object} company 
 * @return {string}
 */


var getCompanyName = function getCompanyName(company) {
  return "<td>\n                <a href=\"https://bazaivolga.bitrix24.ru/crm/company/details/".concat(company.ID, "/\" target=\"_blank\">\n                    ").concat(company.TITLE, "\n                </a>\n            </td>\n            <td class=\"rs-show-modal rs-hidden\" data-id=\"").concat(company.ID, "\">\n                <a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#show-deal\" data-company-id=\"").concat(company.ID, "\" data-company-name=\"").concat(company.TITLE, "\"><i class=\"fas fa-user-plus\"></i></a>\n            </td>");
};

var getColor = function getColor(deal) {
  var colors = {
    '78': 'rs-green',
    '80': 'rs-red',
    '82': 'rs-grey'
  };
  return colors[deal.UF_CRM_1563514438];
};
/**
 * 
 * 
 * @param {object} company
 * @param {object} data
 * @return {string} 
 */


var getDaysTable = function getDaysTable(company, data) {
  var result = [];

  var _loop = function _loop(_i, _j) {
    if (_j == 7) {
      _j = 0;
    } // Подсветка текущего дня


    var classTouday = "";

    if (data.DATE.TOUDAY == _i) {
      classTouday = 'touday';
    }

    var index = company.deals.findIndex(function (deal) {
      return deal.busy[0] == _i;
    }); // Текущий день не занят

    if (index == -1) {
      result.push("<td  class=\"rs-day-column ".concat(data.DATE.WEEKEND[_j], " ").concat(classTouday, " \">").concat(_i, "</td>"));
      i = _i;
      j = _j;
      return "continue";
    }

    var deal = company.deals[index];
    var day = {
      'start': _i,
      'end': _i + deal.busy.length - 1
    };
    var interval = day.start == day.end ? day.start : "".concat(day.start, " - ").concat(day.end);
    var color = getColor(deal);
    result.push("<td colspan=\"".concat(deal.busy.length, "\"><a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#show-deal\" data-id=\"").concat(deal.ID, "\" class=\"").concat(color, " rs-line ").concat(isLong(data, deal, day).join(' '), "\">").concat(interval, "</a></td>"));
    _i = day.end;
    _j = _j + deal.busy.length % 7 - 1;
    i = _i;
    j = _j;
  };

  for (var i = 1, j = data.DATE.START_WEEK_DAY; i <= data.DATE.COUNT_DAY; i++, j++) {
    var _ret = _loop(i, j);

    if (_ret === "continue") continue;
  }

  return result.join('');
};
/**
 * 
 * @param {object}
 * @return {string} 
 */


var getContent = function getContent(data) {
  var content = [];
  data.TYPES_OF_COMPANY.forEach(function (type) {
    if (!type.COMPANIES.length) {
      return false;
    }

    content.push(getCompanyType(type));
    type.COMPANIES.forEach(function (company) {
      // Для фильтра
      if (data.busy_companies) {
        var test = data.busy_companies.some(function (id) {
          return id == company.ID;
        });

        if (test) {
          return false;
        }
      }

      ;
      content.push("<tr>".concat(getCompanyName(company), " ").concat(getDaysTable(company, data), "</tr>"));
    });
  });
  return content.join('');
};
/**
 * 
 * @return {string}
 */


/* harmony default export */ __webpack_exports__["default"] = (function (data) {
  return "<thead> ".concat(getHead(data), " </thead><tbody> ").concat(getContent(data), " </tbody>");
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
/**
 * Считаем количество дней в месяце
 */
Date.prototype.daysInMonth = function () {
  return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

/* harmony default export */ __webpack_exports__["default"] = (function (month) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  var weekend = ['weekend', '', '', '', '', '', 'weekend'];
  var date = new Date();
  var touday = month == 0 ? date.getDate() : "";
  date.setDate(1);
  date.setMonth(date.getMonth() + month);
  var startWeekDay = date.getDay();
  var countDay = date.daysInMonth();
  var timestamp = [0];
  var head = "";
  var timeZone = Math.abs(new Date().getTimezoneOffset()) / 60;

  for (var i = 1, j = startWeekDay; i <= countDay; i++, j++) {
    if (j == 7) {
      j = 0;
    }

    var classTouday = i == touday ? "touday" : "";
    var time = +new Date(date.getFullYear(), date.getMonth(), i) + 3600 * timeZone * 1000;
    head += "<td  class=\"rs-day-column ".concat(weekend[j], " ").concat(classTouday, "\">").concat(days[j], "</td>");
    timestamp.push(time);
  }

  return {
    'TIME_ZONE': timeZone,
    'TOUDAY': touday,
    'WEEKEND': weekend,
    'START_WEEK_DAY': startWeekDay,
    'COUNT_DAY': countDay,
    'MONTH': date.toLocaleString('ru', {
      'month': 'long',
      'year': 'numeric'
    }),
    'TIMESTAMP': timestamp,
    'HEAD': head
  };
});

/***/ }),

/***/ "./src/js/listener.js":
/*!****************************!*\
  !*** ./src/js/listener.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_deal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-deal.js */ "./src/js/update-deal.js");
/* harmony import */ var _change_month_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-month.js */ "./src/js/change-month.js");
/* harmony import */ var _application_start_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-start.js */ "./src/js/application-start.js");
/* harmony import */ var _get_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-contact.js */ "./src/js/get-contact.js");
/* harmony import */ var _find_free_company_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-free-company.js */ "./src/js/find-free-company.js");





/**
 * Фильтр для занятых компаний
 */

document.querySelector('#findTasks').addEventListener('click', function (evt) {
  evt.preventDefault();
  var date = {
    start: new Date(+new Date(document.querySelector('#date_timepicker_find_start').value.split('/').reverse().join('/')) + 1000 * 3600 * data.DATE.TIME_ZONE),
    end: new Date(+new Date(document.querySelector('#date_timepicker_find_end').value.split('/').reverse().join('/')) + 1000 * 3600 * data.DATE.TIME_ZONE)
  };
  Object(_find_free_company_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date).then(function (resolve) {
    data.busy_companies = resolve.map(function (deal) {
      return deal.UF_CRM_1563881923;
    });
    Object(_application_start_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
  });
});
/**
 * Перезапуск приложения
 */

document.querySelector('#resetApp').addEventListener('click', function (evt) {
  evt.preventDefault();
  data.busy_companies = [];
  Object(_application_start_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
});
/**
 * Слушатель на таблицу, для изменения месяца
 */

document.querySelector('#table').addEventListener('click', function (evt) {
  if (evt.target.closest('[data-name="control"]')) {
    var target = evt.target.closest('[data-name="control"]');
    target.id == 'next' ? Object(_change_month_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true) : Object(_change_month_js__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
  }
});
/**
 *
 * @param {object} filter
 */

var onUpdateDeal = function onUpdateDeal(filter) {
  var contact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  Object(_update_deal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(filter, contact).then(function (resolve) {
    Object(_application_start_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    $('.modal').modal('hide');
  });
};
/**
 *
 * @param {object} date
 * @return {string}
 */


var formatDate = function formatDate(date) {
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return "".concat(day, "/").concat(month, "/").concat(year);
};
/**
 * Просмотр сделки
 *
 * @param {object} -global data
 */


$('#show-deal').on('show.bs.modal', function (evt) {
  var button = evt.relatedTarget;
  var deal = {};
  var companyId = "";

  if (button.hasAttribute('data-company-id')) {
    deal = data.deal_place;
    companyId = button.getAttribute('data-company-id');
  } else {
    deal = data.DEALS.find(function (element) {
      return element.ID == button.getAttribute("data-id");
    });
    companyId = deal.UF_CRM_1563881923;
  }

  var modal = evt.target;
  var start = deal.UF_CRM_1563776654352 ? new Date(deal.UF_CRM_1563776654352) : false;
  var end = deal.UF_CRM_1563776665746 ? new Date(deal.UF_CRM_1563776665746) : false;
  var sum = parseInt(deal.OPPORTUNITY) || 0;
  var prepaid = parseInt(deal.UF_CRM_1561618933585) || 0;
  var contactInput = modal.querySelector("input[name=\"contact-name\"]");
  contactInput.value = '';
  contactInput.setAttribute('disabled', 'disabled');

  if (deal.CONTACT_ID) {
    contactInput.removeAttribute('disabled');
    contactInput.setAttribute('placeholder', 'Получаю контакт...');
    Object(_get_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])(deal.CONTACT_ID).then(function (contact) {
      contactInput.value = contact.NAME;
      contactInput.setAttribute('placeholder', 'Не указан');
    });
  }

  modal.querySelector(".modal-title").textContent = deal.TITLE;
  modal.querySelector("[name=\"deal-id\"]").value = deal.ID;
  modal.querySelector("[name=\"contact-id\"]").value = deal.CONTACT_ID;
  modal.querySelector("#date_timepicker_deal_start").value = start ? formatDate(start) : document.querySelector('#date_timepicker_find_start').value;
  modal.querySelector("#date_timepicker_deal_end").value = end ? formatDate(end) : document.querySelector('#date_timepicker_find_end').value;
  modal.querySelector("#deal-detail").setAttribute("href", "https://bazaivolga.bitrix24.ru/crm/deal/details/".concat(deal.ID, "/"));
  modal.querySelector("input[name=\"sum-deal\"]").value = sum;
  modal.querySelector("input[name=\"prepaid-deal\"]").value = prepaid;
  modal.querySelector("input[name=\"count-people\"]").value = deal.UF_CRM_1561535444028;
  modal.querySelector('input[name="company-id"]').value = companyId;
  modal.querySelector('textarea[name="comments"]').value = deal.COMMENTS;

  var getFields = function getFields(id) {
    return data.deal_fields[id].map(function (field) {
      var selected = deal[id] == field.ID ? "selected" : "";
      return "<option value=\"".concat(field.ID, "\" ").concat(selected, ">").concat(field.VALUE, "</option>");
    }).join(' ');
  };

  modal.querySelector("select[name=\"status-deal\"]").innerHTML = "<option value=\"0\">\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D</option>".concat(getFields('UF_CRM_1563514438'));
  modal.querySelector("select[name=\"type-of-prepaid\"]").innerHTML = "<option value=\"0\">\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D</option>".concat(getFields('UF_CRM_1565683410717'));
  modal.querySelector("select[name=\"type-of-postpay\"]").innerHTML = "<option value=\"0\">\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D</option>".concat(getFields('UF_CRM_1565683470394'));
});
/**
 * Обновление сделки
 */

$('#form-deal-update').on('submit', function (evt) {
  evt.preventDefault();
  var form = evt.target;
  var status = form.querySelector('select[name="status-deal"]').value;
  var date = {
    'start': status == 120 ? '' : form.querySelector('input[name="date-start"]').value.split('/').join('.'),
    'end': status == 120 ? '' : form.querySelector('input[name="date-end"]').value.split('/').join('.')
  };
  var company_id = form.querySelector('input[name="company-id"]').value;
  var filter = {
    'id': form.querySelector('input[name="deal-id"]').value,
    'fields': {
      'OPPORTUNITY': form.querySelector('input[name="sum-deal"]').value,
      'COMMENTS': form.querySelector('textarea[name="comments"]').value,
      'UF_CRM_1563514438': status,
      'UF_CRM_1565683410717': form.querySelector("select[name=\"type-of-prepaid\"]").value,
      'UF_CRM_1565683470394': form.querySelector("select[name=\"type-of-postpay\"]").value,
      'UF_CRM_1561618933585': form.querySelector('input[name="prepaid-deal"]').value,
      'UF_CRM_1561535444028': form.querySelector('input[name="count-people"]').value,
      'UF_CRM_1563776654352': date.start,
      'UF_CRM_1563776665746': date.end,
      'UF_CRM_1563881923': company_id
    }
  };
  var contact = {
    'id': form.querySelector('input[name="contact-id"]').value,
    'name': form.querySelector('input[name="contact-name"]').value
  };
  return onUpdateDeal(filter, contact);
});

/***/ }),

/***/ "./src/js/update-deal.js":
/*!*******************************!*\
  !*** ./src/js/update-deal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @param {object} contact 
 */
var updateContact = function updateContact(contact) {
  BX24.callMethod("crm.contact.update", {
    id: contact.id,
    fields: {
      "NAME": contact.name
    }
  }, function (result) {
    if (result.error()) {
      alert('Произошла ошибка обновления контакта...');
      return console.error(result.error());
    }

    return console.info(result.data());
  });
};
/**
 * @param {object} filter
 */


/* harmony default export */ __webpack_exports__["default"] = (function (filter) {
  var contact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (contact.id) {
    updateContact(contact);
  }

  return new Promise(function (resolve) {
    BX24.callMethod("crm.deal.update", filter, function (result) {
      if (result.error()) {
        alert('Произошла ошибка обновления сделки...');
        return console.error(result.error());
      }

      return resolve(result);
    });
  });
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
/* harmony import */ var _js_datetimepicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/datetimepicker.js */ "./src/js/datetimepicker.js");
/* harmony import */ var _js_datetimepicker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_datetimepicker_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_listener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/listener.js */ "./src/js/listener.js");
/* harmony import */ var _js_get_company_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/get-company.js */ "./src/js/get-company.js");
/* harmony import */ var _js_application_start__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/application-start */ "./src/js/application-start.js");
// styles
 // js





document.addEventListener('DOMContentLoaded', function () {
  window.data = {};
  BX24.init(function () {
    Object(_js_get_company_js__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (obj) {
      Object(_js_application_start__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map