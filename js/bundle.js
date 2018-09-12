(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var gift = require('./parts-babel/gift-get.js');

  var hoverPic = require('./parts-babel/hoverPicture.js');

  var style = require('./parts-babel/more-styles.js');

  var showPopup = require('./parts-babel/popup-consultation.js');

  var popupDesign = require('./parts-babel/popup-design.js');

  var sliderFeedback = require('./parts-babel/slider-feedback.js');

  var sliderMain = require('./parts-babel/slider-main.js');

  var sort = require('./parts-babel/sort.js');

  var form = require('./parts-babel/work-form.js');

  var calc = require('./parts-babel/calc.js');

  var accord = require('./parts-babel/accordeon.js');

  var gamburger = require('./parts-babel/gamburger.js');

  sliderMain();
  form();
  gift();
  hoverPic();
  style();
  showPopup();
  popupDesign();
  sliderFeedback();
  sort();
  calc();
  accord();
  gamburger();
});
},{"./parts-babel/accordeon.js":51,"./parts-babel/calc.js":52,"./parts-babel/gamburger.js":53,"./parts-babel/gift-get.js":54,"./parts-babel/hoverPicture.js":55,"./parts-babel/more-styles.js":56,"./parts-babel/popup-consultation.js":57,"./parts-babel/popup-design.js":58,"./parts-babel/slider-feedback.js":59,"./parts-babel/slider-main.js":60,"./parts-babel/sort.js":61,"./parts-babel/work-form.js":62}],2:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],3:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":18,"./_wks":46}],4:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":22}],5:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":39,"./_to-iobject":41,"./_to-length":42}],6:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],7:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],8:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":2}],9:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],10:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":14}],11:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":16,"./_is-object":22}],12:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],13:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":7,"./_ctx":8,"./_global":16,"./_hide":18,"./_redefine":35}],14:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],15:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":9,"./_fails":14,"./_hide":18,"./_redefine":35,"./_wks":46}],16:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],17:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],18:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":10,"./_object-dp":29,"./_property-desc":34}],19:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":16}],20:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":10,"./_dom-create":11,"./_fails":14}],21:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":6}],22:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],23:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":18,"./_object-create":28,"./_property-desc":34,"./_set-to-string-tag":36,"./_wks":46}],24:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":13,"./_hide":18,"./_iter-create":23,"./_iterators":26,"./_library":27,"./_object-gpo":31,"./_redefine":35,"./_set-to-string-tag":36,"./_wks":46}],25:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],26:[function(require,module,exports){
module.exports = {};

},{}],27:[function(require,module,exports){
module.exports = false;

},{}],28:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":4,"./_dom-create":11,"./_enum-bug-keys":12,"./_html":19,"./_object-dps":30,"./_shared-key":37}],29:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":4,"./_descriptors":10,"./_ie8-dom-define":20,"./_to-primitive":44}],30:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":4,"./_descriptors":10,"./_object-dp":29,"./_object-keys":33}],31:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":17,"./_shared-key":37,"./_to-object":43}],32:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":5,"./_has":17,"./_shared-key":37,"./_to-iobject":41}],33:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":12,"./_object-keys-internal":32}],34:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],35:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":7,"./_global":16,"./_has":17,"./_hide":18,"./_uid":45}],36:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":17,"./_object-dp":29,"./_wks":46}],37:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":38,"./_uid":45}],38:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":7,"./_global":16,"./_library":27}],39:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":40}],40:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],41:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":9,"./_iobject":21}],42:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":40}],43:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":9}],44:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":22}],45:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],46:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":16,"./_shared":38,"./_uid":45}],47:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":3,"./_iter-define":24,"./_iter-step":25,"./_iterators":26,"./_to-iobject":41}],48:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":15}],49:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":15}],50:[function(require,module,exports){
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./_global":16,"./_hide":18,"./_iterators":26,"./_object-keys":33,"./_redefine":35,"./_wks":46,"./es6.array.iterator":47}],51:[function(require,module,exports){
"use strict";

function accord() {
  var accordLink = document.querySelectorAll('.accordion-heading > span'),
      accordItem = document.querySelectorAll('.accordion-block'),
      accordBox = document.getElementById('accordion');
  accordBox.addEventListener('click', function (event) {
    var target = event.target;

    if (target.tagName == 'SPAN') {
      for (var i = 0; i < accordLink.length; i++) {
        hideAccord(i);

        if (target == accordLink[i]) {
          accordLink[i].classList.add('activeAccord');
          showAccord(i);
          break;
        }
      }
    }
  });

  function showAccord(b) {
    accordItem[b].style.display = 'flex';
  }

  function hideAccord(a) {
    for (var i = a; i < accordItem.length; i++) {
      accordItem[i].style.display = 'none';
      accordLink[i].classList.remove('activeAccord');
    }
  }
}

module.exports = accord;
},{}],52:[function(require,module,exports){
"use strict";

function calc() {
  var size = document.getElementById('size'),
      material = document.getElementById('material'),
      options = document.getElementById('options'),
      promocode = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      sizeSum = 0,
      materialSum = 0,
      optionsSum = 0,
      promocodeCode = 'IWANTPOPART',
      promocodeCodeSum = 0,
      total = 0;
  var a;
  size.addEventListener('change', function () {
    sizeSum = +this.value;
    clear();
  });
  material.addEventListener('change', function () {
    materialSum = +this.value;
    clear();
  });
  options.addEventListener('change', function () {
    optionsSum = +this.value;

    if (options.value == 0) {
      clear();
    } else {
      clear();
    }
  });
  promocode.addEventListener('change', function () {
    if (promocode.value == promocodeCode) {
      promocodeCodeSum = a * 0.3;
    }

    clear();
  });

  function clear() {
    if (size.value == 0 || material.value == 0) {
      totalValue.textContent = ' Укажите материал и размер ';
    } else if (promocode.value == promocodeCode) {
      total = sizeSum + materialSum + optionsSum;
      a = total;
      totalValue.textContent = total - promocodeCodeSum;
    } else {
      total = sizeSum + materialSum + optionsSum;
      a = total;
      totalValue.textContent = a;
    }
  }
}

;
module.exports = calc;
},{}],53:[function(require,module,exports){
"use strict";

function gamburger() {
  var menuBtn = document.querySelector('.burger'),
      menu = document.querySelector('.burger-menu');

  window.onresize = function () {
  var width = window.innerWidth;

    if (width < 768) {
      menuBtn.addEventListener('click', function () {
        menu.style.display = 'block';
      });
    }

    if (width > 768) {
      menu.style.display = 'none';
    }
  };
}

module.exports = gamburger;
},{}],54:[function(require,module,exports){
"use strict";

function gift() {
  var giftBtn = document.querySelector('.fixed-gift'),
      giftModal = document.querySelector('.popup-gift'),
      isClicker = false;

  function hideGift() {
    giftModal.style.display = 'none';
  }

  ;
  giftBtn.addEventListener('click', function () {
    isClicker = true;
    this.style.display = 'none';
    giftModal.style.display = 'flex';
  });
  giftModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'popup-close' || target.className == 'popup-gift') {
      hideGift();
    }

    ;
  }); // var hideGiftBtn = function() {
  // 	giftBtn.style.display = 'none';
  // }
  // var showGiftBtn = function() {
  // 	giftBtn.style.display = 'flex';
  // }

  var buttonAll = document.getElementsByTagName('button');

  for (var i = 0; i < buttonAll.length; i++) {
    buttonAll[i].onclick = function () {
      isClicker = true;
    };
  }

  window.onscroll = function () {
    // размер скролла
    var scrolled = window.pageYOffset || document.documentElement.scrollTop,
        // высота окна
    heightWindow = window.innerHeight || document.documentElement.clientHeight,
        // высота всего документа
    heightDocument = document.body.clientHeight;

    if (scrolled + heightWindow >= heightDocument && isClicker == false) {
      giftModal.style.display = 'flex';
      giftBtn.style.display = 'none';
    } else {
      giftModal.style.display = 'none';
    }
  };
}

module.exports = gift;
},{}],55:[function(require,module,exports){
"use strict";

require("core-js/modules/web.dom.iterable");

function hoverPic() {
  var wrapPicture = document.querySelector('.sizes-wrapper'),
      img = wrapPicture.getElementsByTagName('img'),
      imgHover = ["sizes-1-1", "sizes-2-1", "sizes-3-1", "sizes-4-1"],
      imgDefault = ["sizes-1", "sizes-2", "sizes-3", "sizes-4"],
      count = 0;

  if (isTouchDevice() === true) {
    wrapPicture.addEventListener('mouseenter', function (event) {
      var target = event.target;
      event.preventDefault();

      if (target.tagName == 'IMG') {
        for (var i = 0; i < img.length; i++) {
          if (target == img[i]) {
            showPic(i);
            break;
          }
        }
      } else {
        img.forEach(function (i) {
          hidePic(i);
        });
      }
    }, false);
  } else {
    var _loop = function _loop(i) {
      img[i].addEventListener('mouseover', function () {
        showPic(i);
      });
      img[i].addEventListener('mouseout', function () {
        hidePic(i);
      });
    };

    for (var i = 0; i < img.length; i++) {
      _loop(i);
    }
  }

  function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  }

  function showPic(b) {
    img[b].style.position = 'relative';
    img[b].style.zIndex = '100';
    img[b].src = "img/".concat(imgHover[b], ".png");
  }

  function hidePic(i) {
    img[i].style.position = '';
    img[i].style.zIndex = '';
    img[i].src = "img/".concat(imgDefault[i], ".png");
  }
}

module.exports = hoverPic;
},{"core-js/modules/web.dom.iterable":50}],56:[function(require,module,exports){
"use strict";

function style() {
  var btnStyles = document.querySelector('.button-styles'),
      boxMore = document.getElementsByClassName('styles-2');
  btnStyles.addEventListener('click', function () {
    this.style.display = 'none';

    for (var i = 0; i < boxMore.length; i++) {
      boxMore[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      boxMore[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    }
  });
}

module.exports = style;
},{}],57:[function(require,module,exports){
"use strict";

function showPopup() {
  var btnConsultant = document.querySelectorAll('.button-consultation'),
      consultantModal = document.querySelector('.popup-consultation');
  setTimeout(function () {
    if (document.querySelector('.popup-design').style.display == 'flex' || document.querySelector('.popup-gift').style.display == 'flex') {
      consultantModal.style.display = 'none';
    } else {
      consultantModal.style.display = 'flex';
    }
  }, 60000); // function popupConsultant() {

  for (var i = 0; i < btnConsultant.length; i++) {
    btnConsultant[i].addEventListener('click', function () {
      consultantModal.style.display = 'flex'; // hideGiftBtn();
    });
  }

  consultantModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'popup-close' || target.className == 'popup-consultation') {
      consultantModal.style.display = 'none'; // showGiftBtn();
    }

    ;
  }); // }
}

module.exports = showPopup;
},{}],58:[function(require,module,exports){
"use strict";

function popupDesign() {
  var btnDesign = document.getElementsByClassName('button-design'),
      designModal = document.querySelector('.popup-design');

  for (var i = 0; i < btnDesign.length; i++) {
    btnDesign[i].addEventListener('click', function () {
      designModal.style.display = 'flex'; // hideGiftBtn();
    });
  }

  designModal.addEventListener('click', function (event) {
    var target = event.target;

    if (target.className == 'popup-close' || target.className == 'popup-design') {
      designModal.style.display = 'none'; // showGiftBtn();
    }
  });
}

module.exports = popupDesign;
},{}],59:[function(require,module,exports){
"use strict";

// slider feedback
function sliderFeedback() {
  function nextAuto() {
    plusSlides(1);
  }

  setInterval(function () {
    nextAuto();
  }, 5000);
  var slideIndex = 0,
      boxSlider = document.querySelector('.feedback-slider-box'),
      slidesF = document.getElementsByClassName('feedback-slider-item').length,
      prevF = document.querySelector('.main-prev-btn'),
      nextF = document.querySelector('.main-next-btn');
  showSlidesF(slideIndex); // show 1 slide

  function showSlidesF(n) {
    // return to first after scrolling to last
    if (n > slidesF - 1) {
      slideIndex = 0;
    }

    ;

    if (n < 0) {
      slideIndex = slidesF - 1;
    }

    ;
    var boxWidth = boxSlider.clientWidth,
        offset = -slideIndex * boxWidth;
    boxSlider.setAttribute('style', "transform: translate(".concat(offset, "px)"));
  }

  function plusSlides(n) {
    showSlidesF(slideIndex += n);
  }

  prevF.addEventListener('click', function () {
    plusSlides(-1);
  });
  nextF.addEventListener('click', function () {
    plusSlides(1);
  });
}

module.exports = sliderFeedback;
},{}],60:[function(require,module,exports){
"use strict";

// slider main / header
function sliderMain() {
  var slideIndex = 0,
      boxSlider = document.querySelector('.main-slider'),
      slides = document.getElementsByClassName('main-slider-item').length;
  showSlidesF(slideIndex); // show 1 slide

  function showSlidesF(n) {
    // return to first after scrolling to last
    if (n > slides - 1) {
      slideIndex = 0;
    }

    ;

    if (n < 0) {
      slideIndex = slides - 1;
    }

    ;
    var boxHeight = boxSlider.clientHeight,
        offset = -slideIndex * boxHeight;
    boxSlider.setAttribute('style', "transform: translateY(".concat(offset, "px)"));
  }

  function plusSlides(n) {
    showSlidesF(slideIndex += n);
  }

  function nextAuto() {
    plusSlides(1);
  }

  setInterval(function () {
    nextAuto();
  }, 5000);
}

module.exports = sliderMain;
},{}],61:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.match");

function sort() {
  var portfolioBox = document.querySelector('.portfolio-menu'),
      linkItem = portfolioBox.getElementsByTagName('li'),
      no = document.querySelector('.portfolio-no'),
      portfolio = document.getElementsByClassName('portfolio-block');
  portfolioBox.addEventListener('click', function (event) {
    var target = event.target.className;
    console.log(target);

    for (var i = 0; i < linkItem.length; i++) {
      if (linkItem[i].classList.contains(target)) {
        linkItem[i].classList.add('active');

        for (var j = 0; j < portfolio.length; j++) {
          if (portfolio[j].classList.contains(target)) {
            portfolio[j].style.display = 'block';
          } else if (target == 'grandmother' || target == 'granddad') {
            no.style.display = 'block';
            portfolio[j].style.display = 'none';
          } else {
            portfolio[j].style.display = 'none';
            no.style.display = 'none';
          }
        }
      } else {
        if (target.match(/\bactive\b/)) {
          break;
        } else {
          linkItem[i].classList.remove('active');
        }
      }
    }
  });
}

module.exports = sort;
},{"core-js/modules/es6.regexp.match":48}],62:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

function formFooter() {
  var message = new Object();
  message.loading = 'Загрузка...';
  message.success = 'Спасибо! Мы скоро вам позвоним';
  message.failure = 'Увы! Ничего не вышло...'; // find input form

  var input = document.getElementsByTagName('input'),
      // inputPhone = document.getElementsByName('phone'),
  textarea = document.getElementsByTagName('textarea'),
      // получили форму
  boxMain = document.getElementsByClassName('main-form'),
      sub_form = document.getElementsByTagName('form'),
      // уведомление об отправке
  statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  var _loop = function _loop(i) {
    sub_form[i].addEventListener('submit', function (event) {
      event.preventDefault();
      var num = event.target.length;
      showMessage(num);
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/x-www/form/urlencoded');
      var formData = new FormData(sub_form[i]);
      request.send(formData);

      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          statusMessage.textContent = message.loading;
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            sub_form[i].style.display = 'none';
            statusMessage.textContent = message.success;
            statusMessage.classList.toggle('status-active');
          } else {
            sub_form[i].style.display = 'none';
            statusMessage.textContent = message.failure;
            statusMessage.classList.toggle('status-active');
          }
        }
      };

      for (var _i3 = 0; _i3 < input.length; _i3++) {
        input[_i3].value = '';
      }

      for (var _i4 = 0; _i4 < textarea.length; _i4++) {
        textarea[_i4].value = '';
      }

      setTimeout(function () {
        sub_form[i].style.display = 'block';
        statusMessage.classList.toggle('status-active');
        statusMessage.textContent = '';
        hideMessage(num);
      }, 3000);
    });
  };

  for (var i = 0; i < sub_form.length; i++) {
    _loop(i);
  }

  ;

  function showMessage(a) {
    if (a == 3) {
      boxMain[1].appendChild(statusMessage);
    }

    if (a == 7) {
      boxMain[2].appendChild(statusMessage);
    }

    if (a == 5) {
      boxMain[0].appendChild(statusMessage);
    }
  }

  function hideMessage(a) {
    if (a == 3) {
      boxMain[1].removeChild(statusMessage);
    }

    if (a == 7) {
      boxMain[2].removeChild(statusMessage);
    }

    if (a == 5) {
      boxMain[0].removeChild(statusMessage);
    }
  } // конец отправки
  // форма по типу


  var nameInput = document.getElementsByName('name'),
      messageInput = document.getElementsByName('message'),
      phoneInput = document.getElementsByName('phone'); // проверка на русские буквы

  for (var i = 0; i < nameInput.length; i++) {
    nameInput[i].oninput = function (e) {
      checkInputText(e);
    };
  }

  for (var _i = 0; _i < messageInput.length; _i++) {
    messageInput[_i].oninput = function (e) {
      checkInputText(e);
    };
  }

  for (var _i2 = 0; _i2 < phoneInput.length; _i2++) {
    phoneInput[_i2].oninput = function (e) {
      checkInputText(e);
    };

    mask(_i2);
  }

  function checkInputText(e) {
    var target = e.target;
    var a = e.target.value;

    if (target.getAttribute('name') == 'phone') {
      e.target.value = a.replace(/[a-z|а-яё]/ig, '');
    }

    if (target.getAttribute('name') == 'name' || target.getAttribute('name') == 'message') {
      if (a.replace(/[^a-z|0-9]+/ig, '')) {
        e.target.value = '';
      }
    }
  }

  function mask(b) {
    phoneInput[b].onfocus = function () {
      phoneInput[b].value = "+7";
    };

    phoneInput[b].onkeydown = function () {
      var phone = phoneInput[b].value.length;
      if (phone == 2) this.value = this.value + '(';
      if (phone == 6) this.value = this.value + ')';
      if (phone == 10) this.value = this.value + '—';
      if (phone == 13) this.value = this.value + '—';
    };
  }
}

module.exports = formFooter;
},{"core-js/modules/es6.regexp.replace":49}]},{},[1]);
