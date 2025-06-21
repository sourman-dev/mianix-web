var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value2) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value2);
var __privateSet = (obj, member, value2, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value2) : member.set(obj, value2), value2);
var _value, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta;
const isFunction$1 = (input) => typeof input === "function";
const dual = function(arity, body) {
  if (typeof arity === "function") {
    return function() {
      if (arity(arguments)) {
        return body.apply(this, arguments);
      }
      return (self2) => body(self2, ...arguments);
    };
  }
  switch (arity) {
    case 0:
    case 1:
      throw new RangeError(`Invalid arity ${arity}`);
    case 2:
      return function(a, b) {
        if (arguments.length >= 2) {
          return body(a, b);
        }
        return function(self2) {
          return body(self2, a);
        };
      };
    case 3:
      return function(a, b, c) {
        if (arguments.length >= 3) {
          return body(a, b, c);
        }
        return function(self2) {
          return body(self2, a, b);
        };
      };
    case 4:
      return function(a, b, c, d) {
        if (arguments.length >= 4) {
          return body(a, b, c, d);
        }
        return function(self2) {
          return body(self2, a, b, c);
        };
      };
    case 5:
      return function(a, b, c, d, e) {
        if (arguments.length >= 5) {
          return body(a, b, c, d, e);
        }
        return function(self2) {
          return body(self2, a, b, c, d);
        };
      };
    default:
      return function() {
        if (arguments.length >= arity) {
          return body.apply(this, arguments);
        }
        const args2 = arguments;
        return function(self2) {
          return body(self2, ...args2);
        };
      };
  }
};
const identity = (a) => a;
const constant = (value2) => () => value2;
const constTrue = /* @__PURE__ */ constant(true);
const constFalse = /* @__PURE__ */ constant(false);
const constUndefined = /* @__PURE__ */ constant(void 0);
const constVoid = constUndefined;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default: {
      let ret = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
        ret = arguments[i](ret);
      }
      return ret;
    }
  }
}
const make$X = (isEquivalent) => (self2, that) => self2 === that || isEquivalent(self2, that);
const mapInput$1 = /* @__PURE__ */ dual(2, (self2, f) => make$X((x, y) => self2(f(x), f(y))));
const array$1 = (item) => make$X((self2, that) => {
  if (self2.length !== that.length) {
    return false;
  }
  for (let i = 0; i < self2.length; i++) {
    const isEq = item(self2[i], that[i]);
    if (!isEq) {
      return false;
    }
  }
  return true;
});
let moduleVersion = "3.15.2";
const getCurrentVersion = () => moduleVersion;
const globalStoreId = `effect/GlobalValue/globalStoreId/${/* @__PURE__ */ getCurrentVersion()}`;
let globalStore;
const globalValue = (id2, compute) => {
  if (!globalStore) {
    globalThis[globalStoreId] ?? (globalThis[globalStoreId] = /* @__PURE__ */ new Map());
    globalStore = globalThis[globalStoreId];
  }
  if (!globalStore.has(id2)) {
    globalStore.set(id2, compute());
  }
  return globalStore.get(id2);
};
const isString = (input) => typeof input === "string";
const isNumber = (input) => typeof input === "number";
const isBoolean = (input) => typeof input === "boolean";
const isBigInt = (input) => typeof input === "bigint";
const isSymbol = (input) => typeof input === "symbol";
const isFunction = isFunction$1;
const isUndefined = (input) => input === void 0;
const isNever = (_) => false;
const isRecordOrArray = (input) => typeof input === "object" && input !== null;
const isObject = (input) => isRecordOrArray(input) || isFunction(input);
const hasProperty = /* @__PURE__ */ dual(2, (self2, property) => isObject(self2) && property in self2);
const isTagged = /* @__PURE__ */ dual(2, (self2, tag2) => hasProperty(self2, "_tag") && self2["_tag"] === tag2);
const isNullable = (input) => input === null || input === void 0;
const isNotNullable = (input) => input !== null && input !== void 0;
const isUint8Array = (input) => input instanceof Uint8Array;
const isDate = (input) => input instanceof Date;
const isIterable = (input) => hasProperty(input, Symbol.iterator);
const isRecord = (input) => isRecordOrArray(input) && !Array.isArray(input);
const isPromiseLike = (input) => hasProperty(input, "then") && isFunction(input.then);
const getBugErrorMessage = (message) => `BUG: ${message} - please report an issue at https://github.com/Effect-TS/effect/issues`;
let SingleShotGen$1 = class SingleShotGen {
  constructor(self2) {
    __publicField(this, "self");
    __publicField(this, "called", false);
    this.self = self2;
  }
  /**
   * @since 2.0.0
   */
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  /**
   * @since 2.0.0
   */
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  /**
   * @since 2.0.0
   */
  throw(e) {
    throw e;
  }
  /**
   * @since 2.0.0
   */
  [Symbol.iterator]() {
    return new SingleShotGen(this.self);
  }
};
const defaultIncHi = 335903614;
const defaultIncLo = 4150755663;
const MUL_HI = 1481765933 >>> 0;
const MUL_LO = 1284865837 >>> 0;
const BIT_53 = 9007199254740992;
const BIT_27 = 134217728;
class PCGRandom {
  constructor(seedHi, seedLo, incHi, incLo) {
    __publicField(this, "_state");
    if (isNullable(seedLo) && isNullable(seedHi)) {
      seedLo = Math.random() * 4294967295 >>> 0;
      seedHi = 0;
    } else if (isNullable(seedLo)) {
      seedLo = seedHi;
      seedHi = 0;
    }
    if (isNullable(incLo) && isNullable(incHi)) {
      incLo = this._state ? this._state[3] : defaultIncLo;
      incHi = this._state ? this._state[2] : defaultIncHi;
    } else if (isNullable(incLo)) {
      incLo = incHi;
      incHi = 0;
    }
    this._state = new Int32Array([0, 0, incHi >>> 0, ((incLo || 0) | 1) >>> 0]);
    this._next();
    add64(this._state, this._state[0], this._state[1], seedHi >>> 0, seedLo >>> 0);
    this._next();
    return this;
  }
  /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 2.0.0
   */
  getState() {
    return [this._state[0], this._state[1], this._state[2], this._state[3]];
  }
  /**
   * Restore state previously retrieved using `getState()`.
   *
   * @since 2.0.0
   */
  setState(state) {
    this._state[0] = state[0];
    this._state[1] = state[1];
    this._state[2] = state[2];
    this._state[3] = state[3] | 1;
  }
  /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 2.0.0
   */
  integer(max) {
    return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % max;
  }
  /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 2.0.0
   */
  number() {
    const hi = (this._next() & 67108863) * 1;
    const lo = (this._next() & 134217727) * 1;
    return (hi * BIT_27 + lo) / BIT_53;
  }
  /** @internal */
  _next() {
    const oldHi = this._state[0] >>> 0;
    const oldLo = this._state[1] >>> 0;
    mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO);
    add64(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    let xsHi = oldHi >>> 18;
    let xsLo = (oldLo >>> 18 | oldHi << 14) >>> 0;
    xsHi = (xsHi ^ oldHi) >>> 0;
    xsLo = (xsLo ^ oldLo) >>> 0;
    const xorshifted = (xsLo >>> 27 | xsHi << 5) >>> 0;
    const rot = oldHi >>> 27;
    const rot2 = (-rot >>> 0 & 31) >>> 0;
    return (xorshifted >>> rot | xorshifted << rot2) >>> 0;
  }
}
function mul64(out, aHi, aLo, bHi, bLo) {
  let c1 = (aLo >>> 16) * (bLo & 65535) >>> 0;
  let c0 = (aLo & 65535) * (bLo >>> 16) >>> 0;
  let lo = (aLo & 65535) * (bLo & 65535) >>> 0;
  let hi = (aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16)) >>> 0;
  c0 = c0 << 16 >>> 0;
  lo = lo + c0 >>> 0;
  if (lo >>> 0 < c0 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  c1 = c1 << 16 >>> 0;
  lo = lo + c1 >>> 0;
  if (lo >>> 0 < c1 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  hi = hi + Math.imul(aLo, bHi) >>> 0;
  hi = hi + Math.imul(aHi, bLo) >>> 0;
  out[0] = hi;
  out[1] = lo;
}
function add64(out, aHi, aLo, bHi, bLo) {
  let hi = aHi + bHi >>> 0;
  const lo = aLo + bLo >>> 0;
  if (lo >>> 0 < aLo >>> 0) {
    hi = hi + 1 | 0;
  }
  out[0] = hi;
  out[1] = lo;
}
const YieldWrapTypeId = /* @__PURE__ */ Symbol.for("effect/Utils/YieldWrap");
class YieldWrap {
  constructor(value2) {
    /**
     * @since 3.0.6
     */
    __privateAdd(this, _value);
    __privateSet(this, _value, value2);
  }
  /**
   * @since 3.0.6
   */
  [YieldWrapTypeId]() {
    return __privateGet(this, _value);
  }
}
_value = new WeakMap();
function yieldWrapGet(self2) {
  if (typeof self2 === "object" && self2 !== null && YieldWrapTypeId in self2) {
    return self2[YieldWrapTypeId]();
  }
  throw new Error(getBugErrorMessage("yieldWrapGet"));
}
const structuralRegionState = /* @__PURE__ */ globalValue("effect/Utils/isStructuralRegion", () => ({
  enabled: false,
  tester: void 0
}));
const standard = {
  effect_internal_function: (body) => {
    return body();
  }
};
const forced = {
  effect_internal_function: (body) => {
    try {
      return body();
    } finally {
    }
  }
};
const isNotOptimizedAway = ((_a = standard.effect_internal_function(() => new Error().stack)) == null ? void 0 : /* @__PURE__ */ _a.includes("effect_internal_function")) === true;
const internalCall = isNotOptimizedAway ? standard.effect_internal_function : forced.effect_internal_function;
const genConstructor = (function* () {
}).constructor;
const isGeneratorFunction = (u) => isObject(u) && u.constructor === genConstructor;
const randomHashCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap());
const symbol$1 = /* @__PURE__ */ Symbol.for("effect/Hash");
const hash = (self2) => {
  if (structuralRegionState.enabled === true) {
    return 0;
  }
  switch (typeof self2) {
    case "number":
      return number$1(self2);
    case "bigint":
      return string(self2.toString(10));
    case "boolean":
      return string(String(self2));
    case "symbol":
      return string(String(self2));
    case "string":
      return string(self2);
    case "undefined":
      return string("undefined");
    case "function":
    case "object": {
      if (self2 === null) {
        return string("null");
      } else if (self2 instanceof Date) {
        return hash(self2.toISOString());
      } else if (self2 instanceof URL) {
        return hash(self2.href);
      } else if (isHash(self2)) {
        return self2[symbol$1]();
      } else {
        return random(self2);
      }
    }
    default:
      throw new Error(`BUG: unhandled typeof ${typeof self2} - please report an issue at https://github.com/Effect-TS/effect/issues`);
  }
};
const random = (self2) => {
  if (!randomHashCache.has(self2)) {
    randomHashCache.set(self2, number$1(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)));
  }
  return randomHashCache.get(self2);
};
const combine$7 = (b) => (self2) => self2 * 53 ^ b;
const optimize = (n) => n & 3221225471 | n >>> 1 & 1073741824;
const isHash = (u) => hasProperty(u, symbol$1);
const number$1 = (n) => {
  if (n !== n || n === Infinity) {
    return 0;
  }
  let h = n | 0;
  if (h !== n) {
    h ^= n * 4294967295;
  }
  while (n > 4294967295) {
    h ^= n /= 4294967295;
  }
  return optimize(h);
};
const string = (str) => {
  let h = 5381, i = str.length;
  while (i) {
    h = h * 33 ^ str.charCodeAt(--i);
  }
  return optimize(h);
};
const structureKeys = (o, keys2) => {
  let h = 12289;
  for (let i = 0; i < keys2.length; i++) {
    h ^= pipe(string(keys2[i]), combine$7(hash(o[keys2[i]])));
  }
  return optimize(h);
};
const structure = (o) => structureKeys(o, Object.keys(o));
const array = (arr) => {
  let h = 6151;
  for (let i = 0; i < arr.length; i++) {
    h = pipe(h, combine$7(hash(arr[i])));
  }
  return optimize(h);
};
const cached$1 = function() {
  if (arguments.length === 1) {
    const self3 = arguments[0];
    return function(hash3) {
      Object.defineProperty(self3, symbol$1, {
        value() {
          return hash3;
        },
        enumerable: false
      });
      return hash3;
    };
  }
  const self2 = arguments[0];
  const hash2 = arguments[1];
  Object.defineProperty(self2, symbol$1, {
    value() {
      return hash2;
    },
    enumerable: false
  });
  return hash2;
};
const symbol = /* @__PURE__ */ Symbol.for("effect/Equal");
function equals$1() {
  if (arguments.length === 1) {
    return (self2) => compareBoth(self2, arguments[0]);
  }
  return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self2, that) {
  if (self2 === that) {
    return true;
  }
  const selfType = typeof self2;
  if (selfType !== typeof that) {
    return false;
  }
  if (selfType === "object" || selfType === "function") {
    if (self2 !== null && that !== null) {
      if (isEqual(self2) && isEqual(that)) {
        if (hash(self2) === hash(that) && self2[symbol](that)) {
          return true;
        } else {
          return structuralRegionState.enabled && structuralRegionState.tester ? structuralRegionState.tester(self2, that) : false;
        }
      } else if (self2 instanceof Date && that instanceof Date) {
        return self2.toISOString() === that.toISOString();
      } else if (self2 instanceof URL && that instanceof URL) {
        return self2.href === that.href;
      }
    }
    if (structuralRegionState.enabled) {
      if (Array.isArray(self2) && Array.isArray(that)) {
        return self2.length === that.length && self2.every((v, i) => compareBoth(v, that[i]));
      }
      if (Object.getPrototypeOf(self2) === Object.prototype && Object.getPrototypeOf(self2) === Object.prototype) {
        const keysSelf = Object.keys(self2);
        const keysThat = Object.keys(that);
        if (keysSelf.length === keysThat.length) {
          for (const key of keysSelf) {
            if (!(key in that && compareBoth(self2[key], that[key]))) {
              return structuralRegionState.tester ? structuralRegionState.tester(self2, that) : false;
            }
          }
          return true;
        }
      }
      return structuralRegionState.tester ? structuralRegionState.tester(self2, that) : false;
    }
  }
  return structuralRegionState.enabled && structuralRegionState.tester ? structuralRegionState.tester(self2, that) : false;
}
const isEqual = (u) => hasProperty(u, symbol);
const equivalence$1 = () => equals$1;
const NodeInspectSymbol = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
const toJSON = (x) => {
  try {
    if (hasProperty(x, "toJSON") && isFunction(x["toJSON"]) && x["toJSON"].length === 0) {
      return x.toJSON();
    } else if (Array.isArray(x)) {
      return x.map(toJSON);
    }
  } catch {
    return {};
  }
  return redact$1(x);
};
const format$3 = (x) => JSON.stringify(x, null, 2);
const BaseProto = {
  toJSON() {
    return toJSON(this);
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format$3(this.toJSON());
  }
};
let Class$5 = class Class {
  /**
   * @since 2.0.0
   */
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  /**
   * @since 2.0.0
   */
  toString() {
    return format$3(this.toJSON());
  }
};
const toStringUnknown = (u, whitespace = 2) => {
  if (typeof u === "string") {
    return u;
  }
  try {
    return typeof u === "object" ? stringifyCircular(u, whitespace) : String(u);
  } catch {
    return String(u);
  }
};
const stringifyCircular = (obj, whitespace) => {
  let cache = [];
  const retVal = JSON.stringify(obj, (_key, value2) => typeof value2 === "object" && value2 !== null ? cache.includes(value2) ? void 0 : cache.push(value2) && (redactableState.fiberRefs !== void 0 && isRedactable(value2) ? value2[symbolRedactable](redactableState.fiberRefs) : value2) : value2, whitespace);
  cache = void 0;
  return retVal;
};
const symbolRedactable = /* @__PURE__ */ Symbol.for("effect/Inspectable/Redactable");
const isRedactable = (u) => typeof u === "object" && u !== null && symbolRedactable in u;
const redactableState = /* @__PURE__ */ globalValue("effect/Inspectable/redactableState", () => ({
  fiberRefs: void 0
}));
const withRedactableContext = (context2, f) => {
  const prev = redactableState.fiberRefs;
  redactableState.fiberRefs = context2;
  try {
    return f();
  } finally {
    redactableState.fiberRefs = prev;
  }
};
const redact$1 = (u) => {
  if (isRedactable(u) && redactableState.fiberRefs !== void 0) {
    return u[symbolRedactable](redactableState.fiberRefs);
  }
  return u;
};
const pipeArguments = (self2, args2) => {
  switch (args2.length) {
    case 0:
      return self2;
    case 1:
      return args2[0](self2);
    case 2:
      return args2[1](args2[0](self2));
    case 3:
      return args2[2](args2[1](args2[0](self2)));
    case 4:
      return args2[3](args2[2](args2[1](args2[0](self2))));
    case 5:
      return args2[4](args2[3](args2[2](args2[1](args2[0](self2)))));
    case 6:
      return args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self2))))));
    case 7:
      return args2[6](args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self2)))))));
    case 8:
      return args2[7](args2[6](args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self2))))))));
    case 9:
      return args2[8](args2[7](args2[6](args2[5](args2[4](args2[3](args2[2](args2[1](args2[0](self2)))))))));
    default: {
      let ret = self2;
      for (let i = 0, len = args2.length; i < len; i++) {
        ret = args2[i](ret);
      }
      return ret;
    }
  }
};
const OP_ASYNC = "Async";
const OP_COMMIT = "Commit";
const OP_FAILURE = "Failure";
const OP_ON_FAILURE$1 = "OnFailure";
const OP_ON_SUCCESS$1 = "OnSuccess";
const OP_ON_SUCCESS_AND_FAILURE = "OnSuccessAndFailure";
const OP_SUCCESS = "Success";
const OP_SYNC$1 = "Sync";
const OP_TAG = "Tag";
const OP_UPDATE_RUNTIME_FLAGS = "UpdateRuntimeFlags";
const OP_WHILE = "While";
const OP_ITERATOR = "Iterator";
const OP_WITH_RUNTIME = "WithRuntime";
const OP_YIELD$1 = "Yield";
const OP_REVERT_FLAGS = "RevertFlags";
const EffectTypeId$2 = /* @__PURE__ */ Symbol.for("effect/Effect");
const StreamTypeId$1 = /* @__PURE__ */ Symbol.for("effect/Stream");
const SinkTypeId$1 = /* @__PURE__ */ Symbol.for("effect/Sink");
const ChannelTypeId$1 = /* @__PURE__ */ Symbol.for("effect/Channel");
const effectVariance = {
  /* c8 ignore next */
  _R: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _,
  _V: /* @__PURE__ */ getCurrentVersion()
};
const sinkVariance$1 = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _L: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
const channelVariance$1 = {
  /* c8 ignore next */
  _Env: (_) => _,
  /* c8 ignore next */
  _InErr: (_) => _,
  /* c8 ignore next */
  _InElem: (_) => _,
  /* c8 ignore next */
  _InDone: (_) => _,
  /* c8 ignore next */
  _OutErr: (_) => _,
  /* c8 ignore next */
  _OutElem: (_) => _,
  /* c8 ignore next */
  _OutDone: (_) => _
};
const EffectPrototype$1 = {
  [EffectTypeId$2]: effectVariance,
  [StreamTypeId$1]: effectVariance,
  [SinkTypeId$1]: sinkVariance$1,
  [ChannelTypeId$1]: channelVariance$1,
  [symbol](that) {
    return this === that;
  },
  [symbol$1]() {
    return cached$1(this, random(this));
  },
  [Symbol.iterator]() {
    return new SingleShotGen$1(new YieldWrap(this));
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const StructuralPrototype = {
  [symbol$1]() {
    return cached$1(this, structure(this));
  },
  [symbol](that) {
    const selfKeys = Object.keys(this);
    const thatKeys = Object.keys(that);
    if (selfKeys.length !== thatKeys.length) {
      return false;
    }
    for (const key of selfKeys) {
      if (!(key in that && equals$1(this[key], that[key]))) {
        return false;
      }
    }
    return true;
  }
};
const CommitPrototype = {
  ...EffectPrototype$1,
  _op: OP_COMMIT
};
const StructuralCommitPrototype = {
  ...CommitPrototype,
  ...StructuralPrototype
};
const Base$1 = /* @__PURE__ */ function() {
  function Base2() {
  }
  Base2.prototype = CommitPrototype;
  return Base2;
}();
const TypeId$s = /* @__PURE__ */ Symbol.for("effect/Option");
const CommonProto$1 = {
  ...EffectPrototype$1,
  [TypeId$s]: {
    _A: (_) => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format$3(this.toJSON());
  }
};
const SomeProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto$1), {
  _tag: "Some",
  _op: "Some",
  [symbol](that) {
    return isOption$1(that) && isSome$1(that) && equals$1(this.value, that.value);
  },
  [symbol$1]() {
    return cached$1(this, combine$7(hash(this._tag))(hash(this.value)));
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag,
      value: toJSON(this.value)
    };
  }
});
const NoneHash = /* @__PURE__ */ hash("None");
const NoneProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto$1), {
  _tag: "None",
  _op: "None",
  [symbol](that) {
    return isOption$1(that) && isNone$1(that);
  },
  [symbol$1]() {
    return NoneHash;
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag
    };
  }
});
const isOption$1 = (input) => hasProperty(input, TypeId$s);
const isNone$1 = (fa) => fa._tag === "None";
const isSome$1 = (fa) => fa._tag === "Some";
const none$5 = /* @__PURE__ */ Object.create(NoneProto);
const some$1 = (value2) => {
  const a = Object.create(SomeProto);
  a.value = value2;
  return a;
};
const TypeId$r = /* @__PURE__ */ Symbol.for("effect/Either");
const CommonProto = {
  ...EffectPrototype$1,
  [TypeId$r]: {
    _R: (_) => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format$3(this.toJSON());
  }
};
const RightProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
  _tag: "Right",
  _op: "Right",
  [symbol](that) {
    return isEither$2(that) && isRight$1(that) && equals$1(this.right, that.right);
  },
  [symbol$1]() {
    return combine$7(hash(this._tag))(hash(this.right));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      right: toJSON(this.right)
    };
  }
});
const LeftProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
  _tag: "Left",
  _op: "Left",
  [symbol](that) {
    return isEither$2(that) && isLeft$1(that) && equals$1(this.left, that.left);
  },
  [symbol$1]() {
    return combine$7(hash(this._tag))(hash(this.left));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      left: toJSON(this.left)
    };
  }
});
const isEither$2 = (input) => hasProperty(input, TypeId$r);
const isLeft$1 = (ma) => ma._tag === "Left";
const isRight$1 = (ma) => ma._tag === "Right";
const left$1 = (left2) => {
  const a = Object.create(LeftProto);
  a.left = left2;
  return a;
};
const right$1 = (right2) => {
  const a = Object.create(RightProto);
  a.right = right2;
  return a;
};
const right = right$1;
const left = left$1;
const isEither$1 = isEither$2;
const isLeft = isLeft$1;
const isRight = isRight$1;
const mapBoth$4 = /* @__PURE__ */ dual(2, (self2, {
  onLeft,
  onRight
}) => isLeft(self2) ? left(onLeft(self2.left)) : right(onRight(self2.right)));
const mapLeft = /* @__PURE__ */ dual(2, (self2, f) => isLeft(self2) ? left(f(self2.left)) : right(self2.right));
const map$h = /* @__PURE__ */ dual(2, (self2, f) => isRight(self2) ? right(f(self2.right)) : left(self2.left));
const match$9 = /* @__PURE__ */ dual(2, (self2, {
  onLeft,
  onRight
}) => isLeft(self2) ? onLeft(self2.left) : onRight(self2.right));
const merge$8 = /* @__PURE__ */ match$9({
  onLeft: identity,
  onRight: identity
});
const getOrThrowWith = /* @__PURE__ */ dual(2, (self2, onLeft) => {
  if (isRight(self2)) {
    return self2.right;
  }
  throw onLeft(self2.left);
});
const getOrThrow = /* @__PURE__ */ getOrThrowWith(() => new Error("getOrThrow called on a Left"));
const isNonEmptyArray$1 = (self2) => self2.length > 0;
const make$W = (compare2) => (self2, that) => self2 === that ? 0 : compare2(self2, that);
const number = /* @__PURE__ */ make$W((self2, that) => self2 < that ? -1 : 1);
const mapInput = /* @__PURE__ */ dual(2, (self2, f) => make$W((b1, b2) => self2(f(b1), f(b2))));
const greaterThan$1 = (O) => dual(2, (self2, that) => O(self2, that) === 1);
const none$4 = () => none$5;
const some = some$1;
const isOption = isOption$1;
const isNone = isNone$1;
const isSome = isSome$1;
const match$8 = /* @__PURE__ */ dual(2, (self2, {
  onNone,
  onSome
}) => isNone(self2) ? onNone() : onSome(self2.value));
const getOrElse = /* @__PURE__ */ dual(2, (self2, onNone) => isNone(self2) ? onNone() : self2.value);
const orElse$1 = /* @__PURE__ */ dual(2, (self2, that) => isNone(self2) ? that() : self2);
const orElseSome = /* @__PURE__ */ dual(2, (self2, onNone) => isNone(self2) ? some(onNone()) : self2);
const fromNullable = (nullableValue) => nullableValue == null ? none$4() : some(nullableValue);
const getOrUndefined = /* @__PURE__ */ getOrElse(constUndefined);
const liftThrowable = (f) => (...a) => {
  try {
    return some(f(...a));
  } catch {
    return none$4();
  }
};
const map$g = /* @__PURE__ */ dual(2, (self2, f) => isNone(self2) ? none$4() : some(f(self2.value)));
const flatMap$a = /* @__PURE__ */ dual(2, (self2, f) => isNone(self2) ? none$4() : f(self2.value));
const flatMapNullable = /* @__PURE__ */ dual(2, (self2, f) => isNone(self2) ? none$4() : fromNullable(f(self2.value)));
const filterMap$4 = flatMap$a;
const filter$6 = /* @__PURE__ */ dual(2, (self2, predicate) => filterMap$4(self2, (b) => predicate(b) ? some$1(b) : none$5));
const getEquivalence$3 = (isEquivalent) => make$X((x, y) => isNone(x) ? isNone(y) : isNone(y) ? false : isEquivalent(x.value, y.value));
const containsWith$1 = (isEquivalent) => dual(2, (self2, a) => isNone(self2) ? false : isEquivalent(self2.value, a));
const _equivalence$3 = /* @__PURE__ */ equivalence$1();
const contains = /* @__PURE__ */ containsWith$1(_equivalence$3);
const exists = /* @__PURE__ */ dual(2, (self2, refinement) => isNone(self2) ? false : refinement(self2.value));
const mergeWith$2 = (f) => (o1, o2) => {
  if (isNone(o1)) {
    return o2;
  } else if (isNone(o2)) {
    return o1;
  }
  return some(f(o1.value, o2.value));
};
const make$V = (...elements) => elements;
const head$4 = (self2) => {
  const iterator = self2[Symbol.iterator]();
  const result = iterator.next();
  return result.done ? none$4() : some(result.value);
};
const unsafeHead$1 = (self2) => {
  const iterator = self2[Symbol.iterator]();
  const result = iterator.next();
  if (result.done) throw new Error("unsafeHead: empty iterable");
  return result.value;
};
const findFirst$1 = /* @__PURE__ */ dual(2, (self2, f) => {
  let i = 0;
  for (const a of self2) {
    const o = f(a, i);
    if (isBoolean(o)) {
      if (o) {
        return some(a);
      }
    } else {
      if (isSome(o)) {
        return o;
      }
    }
    i++;
  }
  return none$4();
});
const constEmpty = {
  [Symbol.iterator]() {
    return constEmptyIterator;
  }
};
const constEmptyIterator = {
  next() {
    return {
      done: true,
      value: void 0
    };
  }
};
const empty$v = () => constEmpty;
const filter$5 = /* @__PURE__ */ dual(2, (self2, predicate) => ({
  [Symbol.iterator]() {
    const iterator = self2[Symbol.iterator]();
    let i = 0;
    return {
      next() {
        let result = iterator.next();
        while (!result.done) {
          if (predicate(result.value, i++)) {
            return {
              done: false,
              value: result.value
            };
          }
          result = iterator.next();
        }
        return {
          done: true,
          value: void 0
        };
      }
    };
  }
}));
const map$f = /* @__PURE__ */ dual(2, (self2, f) => {
  const out = {
    ...self2
  };
  for (const key of keys$2(self2)) {
    out[key] = f(self2[key], key);
  }
  return out;
});
const keys$2 = (self2) => Object.keys(self2);
const allocate = (n) => new Array(n);
const makeBy = /* @__PURE__ */ dual(2, (n, f) => {
  const max = Math.max(1, Math.floor(n));
  const out = new Array(max);
  for (let i = 0; i < max; i++) {
    out[i] = f(i);
  }
  return out;
});
const fromIterable$8 = (collection) => Array.isArray(collection) ? collection : Array.from(collection);
const ensure = (self2) => Array.isArray(self2) ? self2 : [self2];
const matchLeft = /* @__PURE__ */ dual(2, (self2, {
  onEmpty,
  onNonEmpty
}) => isNonEmptyReadonlyArray(self2) ? onNonEmpty(headNonEmpty$1(self2), tailNonEmpty$1(self2)) : onEmpty());
const prepend$2 = /* @__PURE__ */ dual(2, (self2, head2) => [head2, ...self2]);
const append$2 = /* @__PURE__ */ dual(2, (self2, last2) => [...self2, last2]);
const appendAll$2 = /* @__PURE__ */ dual(2, (self2, that) => fromIterable$8(self2).concat(fromIterable$8(that)));
const isArray = Array.isArray;
const isEmptyArray = (self2) => self2.length === 0;
const isEmptyReadonlyArray = isEmptyArray;
const isNonEmptyArray = isNonEmptyArray$1;
const isNonEmptyReadonlyArray = isNonEmptyArray$1;
const isOutOfBounds = (i, as2) => i < 0 || i >= as2.length;
const clamp = (i, as2) => Math.floor(Math.min(Math.max(0, i), as2.length));
const get$g = /* @__PURE__ */ dual(2, (self2, index) => {
  const i = Math.floor(index);
  return isOutOfBounds(i, self2) ? none$4() : some(self2[i]);
});
const unsafeGet$5 = /* @__PURE__ */ dual(2, (self2, index) => {
  const i = Math.floor(index);
  if (isOutOfBounds(i, self2)) {
    throw new Error(`Index ${i} out of bounds`);
  }
  return self2[i];
});
const head$3 = /* @__PURE__ */ get$g(0);
const headNonEmpty$1 = /* @__PURE__ */ unsafeGet$5(0);
const last = (self2) => isNonEmptyReadonlyArray(self2) ? some(lastNonEmpty(self2)) : none$4();
const lastNonEmpty = (self2) => self2[self2.length - 1];
const tailNonEmpty$1 = (self2) => self2.slice(1);
const spanIndex = (self2, predicate) => {
  let i = 0;
  for (const a of self2) {
    if (!predicate(a, i)) {
      break;
    }
    i++;
  }
  return i;
};
const span = /* @__PURE__ */ dual(2, (self2, predicate) => splitAt$1(self2, spanIndex(self2, predicate)));
const drop$1 = /* @__PURE__ */ dual(2, (self2, n) => {
  const input = fromIterable$8(self2);
  return input.slice(clamp(n, input), input.length);
});
const findFirst = findFirst$1;
const reverse$2 = (self2) => Array.from(self2).reverse();
const sort = /* @__PURE__ */ dual(2, (self2, O) => {
  const out = Array.from(self2);
  out.sort(O);
  return out;
});
const zip$4 = /* @__PURE__ */ dual(2, (self2, that) => zipWith$3(self2, that, make$V));
const zipWith$3 = /* @__PURE__ */ dual(3, (self2, that, f) => {
  const as2 = fromIterable$8(self2);
  const bs = fromIterable$8(that);
  if (isNonEmptyReadonlyArray(as2) && isNonEmptyReadonlyArray(bs)) {
    const out = [f(headNonEmpty$1(as2), headNonEmpty$1(bs))];
    const len = Math.min(as2.length, bs.length);
    for (let i = 1; i < len; i++) {
      out[i] = f(as2[i], bs[i]);
    }
    return out;
  }
  return [];
});
const containsWith = (isEquivalent) => dual(2, (self2, a) => {
  for (const i of self2) {
    if (isEquivalent(a, i)) {
      return true;
    }
  }
  return false;
});
const _equivalence$2 = /* @__PURE__ */ equivalence$1();
const splitAt$1 = /* @__PURE__ */ dual(2, (self2, n) => {
  const input = Array.from(self2);
  const _n2 = Math.floor(n);
  if (isNonEmptyReadonlyArray(input)) {
    if (_n2 >= 1) {
      return splitNonEmptyAt(input, _n2);
    }
    return [[], input];
  }
  return [input, []];
});
const splitNonEmptyAt = /* @__PURE__ */ dual(2, (self2, n) => {
  const _n2 = Math.max(1, Math.floor(n));
  return _n2 >= self2.length ? [copy$1(self2), []] : [prepend$2(self2.slice(1, _n2), headNonEmpty$1(self2)), self2.slice(_n2)];
});
const copy$1 = (self2) => self2.slice();
const unionWith = /* @__PURE__ */ dual(3, (self2, that, isEquivalent) => {
  const a = fromIterable$8(self2);
  const b = fromIterable$8(that);
  if (isNonEmptyReadonlyArray(a)) {
    if (isNonEmptyReadonlyArray(b)) {
      const dedupe2 = dedupeWith(isEquivalent);
      return dedupe2(appendAll$2(a, b));
    }
    return a;
  }
  return b;
});
const union$2 = /* @__PURE__ */ dual(2, (self2, that) => unionWith(self2, that, _equivalence$2));
const intersectionWith = (isEquivalent) => {
  const has2 = containsWith(isEquivalent);
  return dual(2, (self2, that) => fromIterable$8(self2).filter((a) => has2(that, a)));
};
const intersection = /* @__PURE__ */ intersectionWith(_equivalence$2);
const empty$u = () => [];
const of$3 = (a) => [a];
const map$e = /* @__PURE__ */ dual(2, (self2, f) => self2.map(f));
const flatMap$9 = /* @__PURE__ */ dual(2, (self2, f) => {
  if (isEmptyReadonlyArray(self2)) {
    return [];
  }
  const out = [];
  for (let i = 0; i < self2.length; i++) {
    const inner = f(self2[i], i);
    for (let j = 0; j < inner.length; j++) {
      out.push(inner[j]);
    }
  }
  return out;
});
const flatten$7 = /* @__PURE__ */ flatMap$9(identity);
const filterMap$3 = /* @__PURE__ */ dual(2, (self2, f) => {
  const as2 = fromIterable$8(self2);
  const out = [];
  for (let i = 0; i < as2.length; i++) {
    const o = f(as2[i], i);
    if (isSome(o)) {
      out.push(o.value);
    }
  }
  return out;
});
const filter$4 = /* @__PURE__ */ dual(2, (self2, predicate) => {
  const as2 = fromIterable$8(self2);
  const out = [];
  for (let i = 0; i < as2.length; i++) {
    if (predicate(as2[i], i)) {
      out.push(as2[i]);
    }
  }
  return out;
});
const reduce$7 = /* @__PURE__ */ dual(3, (self2, b, f) => fromIterable$8(self2).reduce((b2, a, i) => f(b2, a, i), b));
const unfold$1 = (b, f) => {
  const out = [];
  let next = b;
  let o;
  while (isSome(o = f(next))) {
    const [a, b2] = o.value;
    out.push(a);
    next = b2;
  }
  return out;
};
const getEquivalence$2 = array$1;
const dedupeWith = /* @__PURE__ */ dual(2, (self2, isEquivalent) => {
  const input = fromIterable$8(self2);
  if (isNonEmptyReadonlyArray(input)) {
    const out = [headNonEmpty$1(input)];
    const rest = tailNonEmpty$1(input);
    for (const r of rest) {
      if (out.every((a) => !isEquivalent(r, a))) {
        out.push(r);
      }
    }
    return out;
  }
  return [];
});
const dedupe = (self2) => dedupeWith(self2, equivalence$1());
const join$3 = /* @__PURE__ */ dual(2, (self2, sep) => fromIterable$8(self2).join(sep));
const getKeysForIndexSignature = (input, parameter) => {
  switch (parameter._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(input);
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(input);
    case "Refinement":
      return getKeysForIndexSignature(input, parameter.from);
  }
};
const ownKeys = (o) => Object.keys(o).concat(Object.getOwnPropertySymbols(o));
const memoizeThunk = (f) => {
  let done2 = false;
  let a;
  return () => {
    if (done2) {
      return a;
    }
    a = f();
    done2 = true;
    return a;
  };
};
const formatDate = (date) => {
  try {
    return date.toISOString();
  } catch {
    return String(date);
  }
};
const formatUnknown = (u, checkCircular = true) => {
  if (Array.isArray(u)) {
    return `[${u.map((i) => formatUnknown(i, checkCircular)).join(",")}]`;
  }
  if (isDate(u)) {
    return formatDate(u);
  }
  if (hasProperty(u, "toString") && isFunction(u["toString"]) && u["toString"] !== Object.prototype.toString) {
    return u["toString"]();
  }
  if (isString(u)) {
    return JSON.stringify(u);
  }
  if (isNumber(u) || u == null || isBoolean(u) || isSymbol(u)) {
    return String(u);
  }
  if (isBigInt(u)) {
    return String(u) + "n";
  }
  if (isIterable(u)) {
    return `${u.constructor.name}(${formatUnknown(Array.from(u), checkCircular)})`;
  }
  try {
    if (checkCircular) {
      JSON.stringify(u);
    }
    const pojo = `{${ownKeys(u).map((k) => `${isString(k) ? JSON.stringify(k) : String(k)}:${formatUnknown(u[k], false)}`).join(",")}}`;
    const name = u.constructor.name;
    return u.constructor !== Object.prototype.constructor ? `${name}(${pojo})` : pojo;
  } catch {
    return "<circular structure>";
  }
};
const formatPropertyKey$1 = (name) => typeof name === "string" ? JSON.stringify(name) : String(name);
const isNonEmpty$3 = (x) => Array.isArray(x);
const isSingle = (x) => !Array.isArray(x);
const formatPathKey = (key) => `[${formatPropertyKey$1(key)}]`;
const formatPath = (path) => isNonEmpty$3(path) ? path.map(formatPathKey).join("") : formatPathKey(path);
const getErrorMessage = (reason, details, path, ast) => {
  let out = reason;
  if (path && isNonEmptyReadonlyArray(path)) {
    out += `
at path: ${formatPath(path)}`;
  }
  if (details !== void 0) {
    out += `
details: ${details}`;
  }
  if (ast) {
    out += `
schema (${ast._tag}): ${ast}`;
  }
  return out;
};
const getUnsupportedSchemaErrorMessage = (details, path, ast) => getErrorMessage("Unsupported schema", details, path, ast);
const getEquivalenceUnsupportedErrorMessage = (ast, path) => getUnsupportedSchemaErrorMessage("Cannot build an Equivalence", path, ast);
const getSchemaExtendErrorMessage = (x, y, path) => getErrorMessage("Unsupported schema or overlapping types", `cannot extend ${x} with ${y}`, path);
const getASTUnsupportedSchemaErrorMessage = (ast) => getUnsupportedSchemaErrorMessage(void 0, void 0, ast);
const getASTUnsupportedKeySchemaErrorMessage = (ast) => getErrorMessage("Unsupported key schema", void 0, void 0, ast);
const getASTUnsupportedLiteralErrorMessage = (literal) => getErrorMessage("Unsupported literal", `literal value: ${formatUnknown(literal)}`);
const getASTDuplicateIndexSignatureErrorMessage = (type) => getErrorMessage("Duplicate index signature", `${type} index signature`);
const getASTIndexSignatureParameterErrorMessage = /* @__PURE__ */ getErrorMessage("Unsupported index signature parameter", "An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types");
const getASTRequiredElementFollowinAnOptionalElementErrorMessage = /* @__PURE__ */ getErrorMessage("Invalid element", "A required element cannot follow an optional element. ts(1257)");
const getASTDuplicatePropertySignatureTransformationErrorMessage = (key) => getErrorMessage("Duplicate property signature transformation", `Duplicate key ${formatUnknown(key)}`);
const getASTDuplicatePropertySignatureErrorMessage = (key) => getErrorMessage("Duplicate property signature", `Duplicate key ${formatUnknown(key)}`);
const IntSchemaId$1 = /* @__PURE__ */ Symbol.for("effect/SchemaId/Int");
const BetweenSchemaId$1 = /* @__PURE__ */ Symbol.for("effect/SchemaId/Between");
const Order$1 = number;
const escape = (string2) => string2.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");
const BrandAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Brand");
const SchemaIdAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/SchemaId");
const MessageAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Message");
const MissingMessageAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/MissingMessage");
const IdentifierAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Identifier");
const TitleAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Title");
const AutoTitleAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/AutoTitle");
const DescriptionAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Description");
const ExamplesAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Examples");
const DefaultAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Default");
const JSONSchemaAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/JSONSchema");
const ArbitraryAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Arbitrary");
const PrettyAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Pretty");
const EquivalenceAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Equivalence");
const DocumentationAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Documentation");
const ConcurrencyAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Concurrency");
const BatchingAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Batching");
const ParseIssueTitleAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/ParseIssueTitle");
const ParseOptionsAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/ParseOptions");
const DecodingFallbackAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/DecodingFallback");
const SurrogateAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/Surrogate");
const StableFilterAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/StableFilter");
const getAnnotation = /* @__PURE__ */ dual(2, (annotated, key) => Object.prototype.hasOwnProperty.call(annotated.annotations, key) ? some(annotated.annotations[key]) : none$4());
const getBrandAnnotation = /* @__PURE__ */ getAnnotation(BrandAnnotationId);
const getMessageAnnotation = /* @__PURE__ */ getAnnotation(MessageAnnotationId);
const getMissingMessageAnnotation = /* @__PURE__ */ getAnnotation(MissingMessageAnnotationId);
const getTitleAnnotation = /* @__PURE__ */ getAnnotation(TitleAnnotationId);
const getAutoTitleAnnotation = /* @__PURE__ */ getAnnotation(AutoTitleAnnotationId);
const getIdentifierAnnotation = /* @__PURE__ */ getAnnotation(IdentifierAnnotationId);
const getDescriptionAnnotation = /* @__PURE__ */ getAnnotation(DescriptionAnnotationId);
const getConcurrencyAnnotation = /* @__PURE__ */ getAnnotation(ConcurrencyAnnotationId);
const getBatchingAnnotation = /* @__PURE__ */ getAnnotation(BatchingAnnotationId);
const getParseIssueTitleAnnotation$1 = /* @__PURE__ */ getAnnotation(ParseIssueTitleAnnotationId);
const getParseOptionsAnnotation = /* @__PURE__ */ getAnnotation(ParseOptionsAnnotationId);
const getDecodingFallbackAnnotation = /* @__PURE__ */ getAnnotation(DecodingFallbackAnnotationId);
const getSurrogateAnnotation = /* @__PURE__ */ getAnnotation(SurrogateAnnotationId);
const getStableFilterAnnotation = /* @__PURE__ */ getAnnotation(StableFilterAnnotationId);
const hasStableFilter = (annotated) => exists(getStableFilterAnnotation(annotated), (b) => b === true);
const JSONIdentifierAnnotationId = /* @__PURE__ */ Symbol.for("effect/annotation/JSONIdentifier");
const getJSONIdentifierAnnotation = /* @__PURE__ */ getAnnotation(JSONIdentifierAnnotationId);
const getJSONIdentifier = (annotated) => orElse$1(getJSONIdentifierAnnotation(annotated), () => getIdentifierAnnotation(annotated));
class Declaration {
  constructor(typeParameters, decodeUnknown2, encodeUnknown2, annotations2 = {}) {
    __publicField(this, "typeParameters");
    __publicField(this, "decodeUnknown");
    __publicField(this, "encodeUnknown");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Declaration");
    this.typeParameters = typeParameters;
    this.decodeUnknown = decodeUnknown2;
    this.encodeUnknown = encodeUnknown2;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => "<declaration schema>");
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      typeParameters: this.typeParameters.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const createASTGuard = (tag2) => (ast) => ast._tag === tag2;
let Literal$1 = class Literal {
  constructor(literal, annotations2 = {}) {
    __publicField(this, "literal");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Literal");
    this.literal = literal;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatUnknown(this.literal));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      literal: isBigInt(this.literal) ? String(this.literal) : this.literal,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
const isLiteral = /* @__PURE__ */ createASTGuard("Literal");
const $null = /* @__PURE__ */ new Literal$1(null);
class UniqueSymbol {
  constructor(symbol2, annotations2 = {}) {
    __publicField(this, "symbol");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "UniqueSymbol");
    this.symbol = symbol2;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatUnknown(this.symbol));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      symbol: String(this.symbol),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
class UndefinedKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "UndefinedKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const undefinedKeyword = /* @__PURE__ */ new UndefinedKeyword({
  [TitleAnnotationId]: "undefined"
});
class VoidKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "VoidKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const voidKeyword = /* @__PURE__ */ new VoidKeyword({
  [TitleAnnotationId]: "void"
});
class NeverKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "NeverKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const neverKeyword = /* @__PURE__ */ new NeverKeyword({
  [TitleAnnotationId]: "never"
});
const isNeverKeyword = /* @__PURE__ */ createASTGuard("NeverKeyword");
class UnknownKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "UnknownKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const unknownKeyword = /* @__PURE__ */ new UnknownKeyword({
  [TitleAnnotationId]: "unknown"
});
class AnyKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "AnyKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const anyKeyword = /* @__PURE__ */ new AnyKeyword({
  [TitleAnnotationId]: "any"
});
class StringKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "StringKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const stringKeyword = /* @__PURE__ */ new StringKeyword({
  [TitleAnnotationId]: "string",
  [DescriptionAnnotationId]: "a string"
});
const isStringKeyword = /* @__PURE__ */ createASTGuard("StringKeyword");
class NumberKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "NumberKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const numberKeyword = /* @__PURE__ */ new NumberKeyword({
  [TitleAnnotationId]: "number",
  [DescriptionAnnotationId]: "a number"
});
const isNumberKeyword = /* @__PURE__ */ createASTGuard("NumberKeyword");
class BooleanKeyword {
  constructor(annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "BooleanKeyword");
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return formatKeyword(this);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const booleanKeyword = /* @__PURE__ */ new BooleanKeyword({
  [TitleAnnotationId]: "boolean",
  [DescriptionAnnotationId]: "a boolean"
});
const isBooleanKeyword = /* @__PURE__ */ createASTGuard("BooleanKeyword");
const isSymbolKeyword = /* @__PURE__ */ createASTGuard("SymbolKeyword");
const isTemplateLiteral = /* @__PURE__ */ createASTGuard("TemplateLiteral");
let Type$1 = class Type {
  constructor(type, annotations2 = {}) {
    __publicField(this, "type");
    __publicField(this, "annotations");
    this.type = type;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type);
  }
};
class OptionalType extends Type$1 {
  constructor(type, isOptional, annotations2 = {}) {
    super(type, annotations2);
    __publicField(this, "isOptional");
    this.isOptional = isOptional;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return String(this.type) + (this.isOptional ? "?" : "");
  }
}
const getRestASTs = (rest) => rest.map((annotatedAST) => annotatedAST.type);
class TupleType {
  constructor(elements, rest, isReadonly, annotations2 = {}) {
    __publicField(this, "elements");
    __publicField(this, "rest");
    __publicField(this, "isReadonly");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "TupleType");
    this.elements = elements;
    this.rest = rest;
    this.isReadonly = isReadonly;
    this.annotations = annotations2;
    let hasOptionalElement = false;
    let hasIllegalRequiredElement = false;
    for (const e of elements) {
      if (e.isOptional) {
        hasOptionalElement = true;
      } else if (hasOptionalElement) {
        hasIllegalRequiredElement = true;
        break;
      }
    }
    if (hasIllegalRequiredElement || hasOptionalElement && rest.length > 1) {
      throw new Error(getASTRequiredElementFollowinAnOptionalElementErrorMessage);
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatTuple(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      elements: this.elements.map((e) => e.toJSON()),
      rest: this.rest.map((ast) => ast.toJSON()),
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const formatTuple = (ast) => {
  const formattedElements = ast.elements.map(String).join(", ");
  return matchLeft(ast.rest, {
    onEmpty: () => `readonly [${formattedElements}]`,
    onNonEmpty: (head2, tail) => {
      const formattedHead = String(head2);
      const wrappedHead = formattedHead.includes(" | ") ? `(${formattedHead})` : formattedHead;
      if (tail.length > 0) {
        const formattedTail = tail.map(String).join(", ");
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[], ${formattedTail}]`;
        } else {
          return `readonly [...${wrappedHead}[], ${formattedTail}]`;
        }
      } else {
        if (ast.elements.length > 0) {
          return `readonly [${formattedElements}, ...${wrappedHead}[]]`;
        } else {
          return `ReadonlyArray<${formattedHead}>`;
        }
      }
    }
  });
};
class PropertySignature extends OptionalType {
  constructor(name, type, isOptional, isReadonly, annotations2) {
    super(type, isOptional, annotations2);
    __publicField(this, "name");
    __publicField(this, "isReadonly");
    this.name = name;
    this.isReadonly = isReadonly;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return (this.isReadonly ? "readonly " : "") + String(this.name) + (this.isOptional ? "?" : "") + ": " + this.type;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      name: String(this.name),
      type: this.type.toJSON(),
      isOptional: this.isOptional,
      isReadonly: this.isReadonly,
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const isParameter = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return true;
    case "Refinement":
      return isParameter(ast.from);
  }
  return false;
};
class IndexSignature {
  constructor(parameter, type, isReadonly) {
    __publicField(this, "type");
    __publicField(this, "isReadonly");
    /**
     * @since 3.10.0
     */
    __publicField(this, "parameter");
    this.type = type;
    this.isReadonly = isReadonly;
    if (isParameter(parameter)) {
      this.parameter = parameter;
    } else {
      throw new Error(getASTIndexSignatureParameterErrorMessage);
    }
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return (this.isReadonly ? "readonly " : "") + `[x: ${this.parameter}]: ${this.type}`;
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      parameter: this.parameter.toJSON(),
      type: this.type.toJSON(),
      isReadonly: this.isReadonly
    };
  }
}
class TypeLiteral {
  constructor(propertySignatures, indexSignatures, annotations2 = {}) {
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "TypeLiteral");
    /**
     * @since 3.10.0
     */
    __publicField(this, "propertySignatures");
    /**
     * @since 3.10.0
     */
    __publicField(this, "indexSignatures");
    this.annotations = annotations2;
    const keys2 = {};
    for (let i = 0; i < propertySignatures.length; i++) {
      const name = propertySignatures[i].name;
      if (Object.prototype.hasOwnProperty.call(keys2, name)) {
        throw new Error(getASTDuplicatePropertySignatureErrorMessage(name));
      }
      keys2[name] = null;
    }
    const parameters = {
      string: false,
      symbol: false
    };
    for (let i = 0; i < indexSignatures.length; i++) {
      const encodedParameter = getEncodedParameter(indexSignatures[i].parameter);
      if (isStringKeyword(encodedParameter)) {
        if (parameters.string) {
          throw new Error(getASTDuplicateIndexSignatureErrorMessage("string"));
        }
        parameters.string = true;
      } else if (isSymbolKeyword(encodedParameter)) {
        if (parameters.symbol) {
          throw new Error(getASTDuplicateIndexSignatureErrorMessage("symbol"));
        }
        parameters.symbol = true;
      }
    }
    this.propertySignatures = propertySignatures;
    this.indexSignatures = indexSignatures;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => formatTypeLiteral(this));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      propertySignatures: this.propertySignatures.map((ps) => ps.toJSON()),
      indexSignatures: this.indexSignatures.map((ps) => ps.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}
const formatIndexSignatures = (iss) => iss.map(String).join("; ");
const formatTypeLiteral = (ast) => {
  if (ast.propertySignatures.length > 0) {
    const pss = ast.propertySignatures.map(String).join("; ");
    if (ast.indexSignatures.length > 0) {
      return `{ ${pss}; ${formatIndexSignatures(ast.indexSignatures)} }`;
    } else {
      return `{ ${pss} }`;
    }
  } else {
    if (ast.indexSignatures.length > 0) {
      return `{ ${formatIndexSignatures(ast.indexSignatures)} }`;
    } else {
      return "{}";
    }
  }
};
const isTypeLiteral = /* @__PURE__ */ createASTGuard("TypeLiteral");
const sortCandidates = /* @__PURE__ */ sort(/* @__PURE__ */ mapInput(Order$1, (ast) => {
  switch (ast._tag) {
    case "AnyKeyword":
      return 0;
    case "UnknownKeyword":
      return 1;
    case "ObjectKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
  }
  return 4;
}));
const literalMap = {
  string: "StringKeyword",
  number: "NumberKeyword",
  boolean: "BooleanKeyword",
  bigint: "BigIntKeyword"
};
const flatten$6 = (candidates) => flatMap$9(candidates, (ast) => isUnion(ast) ? flatten$6(ast.types) : [ast]);
const unify = (candidates) => {
  const cs = sortCandidates(candidates);
  const out = [];
  const uniques = {};
  const literals = [];
  for (const ast of cs) {
    switch (ast._tag) {
      case "NeverKeyword":
        break;
      case "AnyKeyword":
        return [anyKeyword];
      case "UnknownKeyword":
        return [unknownKeyword];
      // uniques
      case "ObjectKeyword":
      case "UndefinedKeyword":
      case "VoidKeyword":
      case "StringKeyword":
      case "NumberKeyword":
      case "BooleanKeyword":
      case "BigIntKeyword":
      case "SymbolKeyword": {
        if (!uniques[ast._tag]) {
          uniques[ast._tag] = ast;
          out.push(ast);
        }
        break;
      }
      case "Literal": {
        const type = typeof ast.literal;
        switch (type) {
          case "string":
          case "number":
          case "bigint":
          case "boolean": {
            const _tag = literalMap[type];
            if (!uniques[_tag] && !literals.includes(ast.literal)) {
              literals.push(ast.literal);
              out.push(ast);
            }
            break;
          }
          // null
          case "object": {
            if (!literals.includes(ast.literal)) {
              literals.push(ast.literal);
              out.push(ast);
            }
            break;
          }
        }
        break;
      }
      case "UniqueSymbol": {
        if (!uniques["SymbolKeyword"] && !literals.includes(ast.symbol)) {
          literals.push(ast.symbol);
          out.push(ast);
        }
        break;
      }
      case "TupleType": {
        if (!uniques["ObjectKeyword"]) {
          out.push(ast);
        }
        break;
      }
      case "TypeLiteral": {
        if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
          if (!uniques["{}"]) {
            uniques["{}"] = ast;
            out.push(ast);
          }
        } else if (!uniques["ObjectKeyword"]) {
          out.push(ast);
        }
        break;
      }
      default:
        out.push(ast);
    }
  }
  return out;
};
let Union$1 = (_b = class {
  constructor(types, annotations2 = {}) {
    __publicField(this, "types");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Union");
    this.types = types;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => this.types.map(String).join(" | "));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      types: this.types.map((ast) => ast.toJSON()),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
}, __publicField(_b, "make", (types, annotations2) => {
  return isMembers(types) ? new _b(types, annotations2) : types.length === 1 ? types[0] : neverKeyword;
}), /** @internal */
__publicField(_b, "unify", (candidates, annotations2) => {
  return _b.make(unify(flatten$6(candidates)), annotations2);
}), _b);
const mapMembers = (members, f) => members.map(f);
const isMembers = (as2) => as2.length > 1;
const isUnion = /* @__PURE__ */ createASTGuard("Union");
const toJSONMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Schema/AST/toJSONMemoMap"), () => /* @__PURE__ */ new WeakMap());
class Suspend {
  constructor(f, annotations2 = {}) {
    __publicField(this, "f");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Suspend");
    this.f = f;
    this.annotations = annotations2;
    this.f = memoizeThunk(f);
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getExpected(this).pipe(orElse$1(() => flatMap$a(liftThrowable(this.f)(), (ast) => getExpected(ast))), getOrElse(() => "<suspended schema>"));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    const ast = this.f();
    let out = toJSONMemoMap.get(ast);
    if (out) {
      return out;
    }
    toJSONMemoMap.set(ast, {
      _tag: this._tag
    });
    out = {
      _tag: this._tag,
      ast: ast.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
    toJSONMemoMap.set(ast, out);
    return out;
  }
}
let Refinement$1 = class Refinement {
  constructor(from, filter2, annotations2 = {}) {
    __publicField(this, "from");
    __publicField(this, "filter");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Refinement");
    this.from = from;
    this.filter = filter2;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getIdentifierAnnotation(this).pipe(getOrElse(() => match$8(getOrElseExpected(this), {
      onNone: () => `{ ${this.from} | filter }`,
      onSome: (expected) => isRefinement$1(this.from) ? String(this.from) + " & " + expected : expected
    })));
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
const isRefinement$1 = /* @__PURE__ */ createASTGuard("Refinement");
const defaultParseOption = {};
let Transformation$1 = class Transformation {
  constructor(from, to, transformation, annotations2 = {}) {
    __publicField(this, "from");
    __publicField(this, "to");
    __publicField(this, "transformation");
    __publicField(this, "annotations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Transformation");
    this.from = from;
    this.to = to;
    this.transformation = transformation;
    this.annotations = annotations2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return getOrElse(getExpected(this), () => `(${String(this.from)} <-> ${String(this.to)})`);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _tag: this._tag,
      from: this.from.toJSON(),
      to: this.to.toJSON(),
      annotations: toJSONAnnotations(this.annotations)
    };
  }
};
const isTransformation$1 = /* @__PURE__ */ createASTGuard("Transformation");
class FinalTransformation {
  constructor(decode2, encode2) {
    __publicField(this, "decode");
    __publicField(this, "encode");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "FinalTransformation");
    this.decode = decode2;
    this.encode = encode2;
  }
}
const createTransformationGuard = (tag2) => (ast) => ast._tag === tag2;
class ComposeTransformation {
  constructor() {
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "ComposeTransformation");
  }
}
const composeTransformation = /* @__PURE__ */ new ComposeTransformation();
let PropertySignatureTransformation$1 = class PropertySignatureTransformation {
  constructor(from, to, decode2, encode2) {
    __publicField(this, "from");
    __publicField(this, "to");
    __publicField(this, "decode");
    __publicField(this, "encode");
    this.from = from;
    this.to = to;
    this.decode = decode2;
    this.encode = encode2;
  }
};
class TypeLiteralTransformation {
  constructor(propertySignatureTransformations) {
    __publicField(this, "propertySignatureTransformations");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "TypeLiteralTransformation");
    this.propertySignatureTransformations = propertySignatureTransformations;
    const fromKeys = {};
    const toKeys = {};
    for (const pst of propertySignatureTransformations) {
      const from = pst.from;
      if (fromKeys[from]) {
        throw new Error(getASTDuplicatePropertySignatureTransformationErrorMessage(from));
      }
      fromKeys[from] = true;
      const to = pst.to;
      if (toKeys[to]) {
        throw new Error(getASTDuplicatePropertySignatureTransformationErrorMessage(to));
      }
      toKeys[to] = true;
    }
  }
}
const isTypeLiteralTransformation = /* @__PURE__ */ createTransformationGuard("TypeLiteralTransformation");
const annotations = (ast, overrides) => {
  const d = Object.getOwnPropertyDescriptors(ast);
  const value2 = {
    ...ast.annotations,
    ...overrides
  };
  const surrogate = getSurrogateAnnotation(ast);
  if (isSome(surrogate)) {
    value2[SurrogateAnnotationId] = annotations(surrogate.value, overrides);
  }
  d.annotations.value = value2;
  return Object.create(Object.getPrototypeOf(ast), d);
};
const STRING_KEYWORD_PATTERN = "[\\s\\S]*";
const NUMBER_KEYWORD_PATTERN = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?";
const getTemplateLiteralSpanTypePattern = (type, capture2) => {
  switch (type._tag) {
    case "Literal":
      return escape(String(type.literal));
    case "StringKeyword":
      return STRING_KEYWORD_PATTERN;
    case "NumberKeyword":
      return NUMBER_KEYWORD_PATTERN;
    case "TemplateLiteral":
      return getTemplateLiteralPattern(type);
    case "Union":
      return type.types.map((type2) => getTemplateLiteralSpanTypePattern(type2)).join("|");
  }
};
const handleTemplateLiteralSpanTypeParens = (type, s, capture2, top) => {
  if (isUnion(type)) ;
  else {
    return s;
  }
  return `(${s})`;
};
const getTemplateLiteralPattern = (ast, capture2, top) => {
  let pattern = ``;
  if (ast.head !== "") {
    const head2 = escape(ast.head);
    pattern += head2;
  }
  for (const span2 of ast.spans) {
    const spanPattern = getTemplateLiteralSpanTypePattern(span2.type);
    pattern += handleTemplateLiteralSpanTypeParens(span2.type, spanPattern);
    if (span2.literal !== "") {
      const literal = escape(span2.literal);
      pattern += literal;
    }
  }
  return pattern;
};
const getTemplateLiteralRegExp = (ast) => new RegExp(`^${getTemplateLiteralPattern(ast)}$`);
const getPropertySignatures = (ast) => {
  const annotation = getSurrogateAnnotation(ast);
  if (isSome(annotation)) {
    return getPropertySignatures(annotation.value);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.propertySignatures.slice();
    case "Suspend":
      return getPropertySignatures(ast.f());
    case "Refinement":
      return getPropertySignatures(ast.from);
  }
  return getPropertyKeys(ast).map((name) => getPropertyKeyIndexedAccess(ast, name));
};
const getIndexSignatures = (ast) => {
  const annotation = getSurrogateAnnotation(ast);
  if (isSome(annotation)) {
    return getIndexSignatures(annotation.value);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.indexSignatures.slice();
    case "Suspend":
      return getIndexSignatures(ast.f());
    case "Refinement":
      return getIndexSignatures(ast.from);
  }
  return [];
};
const getTypeLiteralPropertySignature = (ast, name) => {
  const ops = findFirst(ast.propertySignatures, (ps) => ps.name === name);
  if (isSome(ops)) {
    return ops.value;
  }
  if (isString(name)) {
    let out = void 0;
    for (const is2 of ast.indexSignatures) {
      const encodedParameter = getEncodedParameter(is2.parameter);
      switch (encodedParameter._tag) {
        case "TemplateLiteral": {
          const regex = getTemplateLiteralRegExp(encodedParameter);
          if (regex.test(name)) {
            return new PropertySignature(name, is2.type, false, true);
          }
          break;
        }
        case "StringKeyword": {
          if (out === void 0) {
            out = new PropertySignature(name, is2.type, false, true);
          }
        }
      }
    }
    if (out) {
      return out;
    }
  } else if (isSymbol(name)) {
    for (const is2 of ast.indexSignatures) {
      const encodedParameter = getEncodedParameter(is2.parameter);
      if (isSymbolKeyword(encodedParameter)) {
        return new PropertySignature(name, is2.type, false, true);
      }
    }
  }
};
const getPropertyKeyIndexedAccess = (ast, name) => {
  const annotation = getSurrogateAnnotation(ast);
  if (isSome(annotation)) {
    return getPropertyKeyIndexedAccess(annotation.value, name);
  }
  switch (ast._tag) {
    case "TypeLiteral": {
      const ps = getTypeLiteralPropertySignature(ast, name);
      if (ps) {
        return ps;
      }
      break;
    }
    case "Union":
      return new PropertySignature(name, Union$1.make(ast.types.map((ast2) => getPropertyKeyIndexedAccess(ast2, name).type)), false, true);
    case "Suspend":
      return getPropertyKeyIndexedAccess(ast.f(), name);
    case "Refinement":
      return getPropertyKeyIndexedAccess(ast.from, name);
  }
  throw new Error(getASTUnsupportedSchemaErrorMessage(ast));
};
const getPropertyKeys = (ast) => {
  const annotation = getSurrogateAnnotation(ast);
  if (isSome(annotation)) {
    return getPropertyKeys(annotation.value);
  }
  switch (ast._tag) {
    case "TypeLiteral":
      return ast.propertySignatures.map((ps) => ps.name);
    case "Union":
      return ast.types.slice(1).reduce((out, ast2) => intersection(out, getPropertyKeys(ast2)), getPropertyKeys(ast.types[0]));
    case "Suspend":
      return getPropertyKeys(ast.f());
    case "Refinement":
      return getPropertyKeys(ast.from);
    case "Transformation":
      return getPropertyKeys(ast.to);
  }
  return [];
};
const record = (key, value2) => {
  const propertySignatures = [];
  const indexSignatures = [];
  const go2 = (key2) => {
    switch (key2._tag) {
      case "NeverKeyword":
        break;
      case "StringKeyword":
      case "SymbolKeyword":
      case "TemplateLiteral":
      case "Refinement":
        indexSignatures.push(new IndexSignature(key2, value2, true));
        break;
      case "Literal":
        if (isString(key2.literal) || isNumber(key2.literal)) {
          propertySignatures.push(new PropertySignature(key2.literal, value2, false, true));
        } else {
          throw new Error(getASTUnsupportedLiteralErrorMessage(key2.literal));
        }
        break;
      case "Enums": {
        for (const [_, name] of key2.enums) {
          propertySignatures.push(new PropertySignature(name, value2, false, true));
        }
        break;
      }
      case "UniqueSymbol":
        propertySignatures.push(new PropertySignature(key2.symbol, value2, false, true));
        break;
      case "Union":
        key2.types.forEach(go2);
        break;
      default:
        throw new Error(getASTUnsupportedKeySchemaErrorMessage(key2));
    }
  };
  go2(key);
  return {
    propertySignatures,
    indexSignatures
  };
};
const pick$2 = (ast, keys2) => {
  const annotation = getSurrogateAnnotation(ast);
  if (isSome(annotation)) {
    return pick$2(annotation.value, keys2);
  }
  switch (ast._tag) {
    case "TypeLiteral": {
      const pss = [];
      const names = {};
      for (const ps of ast.propertySignatures) {
        names[ps.name] = null;
        if (keys2.includes(ps.name)) {
          pss.push(ps);
        }
      }
      for (const key of keys2) {
        if (!(key in names)) {
          const ps = getTypeLiteralPropertySignature(ast, key);
          if (ps) {
            pss.push(ps);
          }
        }
      }
      return new TypeLiteral(pss, []);
    }
    case "Union":
      return new TypeLiteral(keys2.map((name) => getPropertyKeyIndexedAccess(ast, name)), []);
    case "Suspend":
      return pick$2(ast.f(), keys2);
    case "Refinement":
      return pick$2(ast.from, keys2);
    case "Transformation": {
      switch (ast.transformation._tag) {
        case "ComposeTransformation":
          return new Transformation$1(pick$2(ast.from, keys2), pick$2(ast.to, keys2), composeTransformation);
        case "TypeLiteralTransformation": {
          const ts = [];
          const fromKeys = [];
          for (const k of keys2) {
            const t = ast.transformation.propertySignatureTransformations.find((t2) => t2.to === k);
            if (t) {
              ts.push(t);
              fromKeys.push(t.from);
            } else {
              fromKeys.push(k);
            }
          }
          return isNonEmptyReadonlyArray(ts) ? new Transformation$1(pick$2(ast.from, fromKeys), pick$2(ast.to, keys2), new TypeLiteralTransformation(ts)) : pick$2(ast.from, fromKeys);
        }
      }
    }
  }
  throw new Error(getASTUnsupportedSchemaErrorMessage(ast));
};
const omit$4 = (ast, keys2) => {
  let indexSignatures = getIndexSignatures(ast);
  if (indexSignatures.length > 0) {
    if (indexSignatures.some((is2) => isStringKeyword(getEncodedParameter(is2.parameter)))) {
      indexSignatures = indexSignatures.filter((is2) => !isTemplateLiteral(getEncodedParameter(is2.parameter)));
    }
    return new TypeLiteral([], indexSignatures);
  }
  return pick$2(ast, getPropertyKeys(ast).filter((name) => !keys2.includes(name)));
};
const orUndefined = (ast) => Union$1.make([ast, undefinedKeyword]);
const mutable$1 = (ast) => {
  switch (ast._tag) {
    case "TupleType":
      return ast.isReadonly === false ? ast : new TupleType(ast.elements, ast.rest, false, ast.annotations);
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (ps) => ps.isReadonly === false ? ps : new PropertySignature(ps.name, ps.type, ps.isOptional, false, ps.annotations));
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => is2.isReadonly === false ? is2 : new IndexSignature(is2.parameter, is2.type, false));
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, ast.annotations);
    }
    case "Union": {
      const types = changeMap(ast.types, mutable$1);
      return types === ast.types ? ast : Union$1.make(types, ast.annotations);
    }
    case "Suspend":
      return new Suspend(() => mutable$1(ast.f()), ast.annotations);
    case "Refinement": {
      const from = mutable$1(ast.from);
      return from === ast.from ? ast : new Refinement$1(from, ast.filter, ast.annotations);
    }
    case "Transformation": {
      const from = mutable$1(ast.from);
      const to = mutable$1(ast.to);
      return from === ast.from && to === ast.to ? ast : new Transformation$1(from, to, ast.transformation, ast.annotations);
    }
  }
  return ast;
};
const pickAnnotations = (annotationIds) => (annotated) => {
  let out = void 0;
  for (const id2 of annotationIds) {
    if (Object.prototype.hasOwnProperty.call(annotated.annotations, id2)) {
      if (out === void 0) {
        out = {};
      }
      out[id2] = annotated.annotations[id2];
    }
  }
  return out;
};
const omitAnnotations = (annotationIds) => (annotated) => {
  const out = {
    ...annotated.annotations
  };
  for (const id2 of annotationIds) {
    delete out[id2];
  }
  return out;
};
const preserveTransformationAnnotations = /* @__PURE__ */ pickAnnotations([ExamplesAnnotationId, DefaultAnnotationId, JSONSchemaAnnotationId, ArbitraryAnnotationId, PrettyAnnotationId, EquivalenceAnnotationId]);
const typeAST = (ast) => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, typeAST);
      return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = typeAST(e.type);
        return type === e.type ? e : new OptionalType(type, e.isOptional);
      });
      const restASTs = getRestASTs(ast.rest);
      const rest = changeMap(restASTs, typeAST);
      return elements === ast.elements && rest === restASTs ? ast : new TupleType(elements, rest.map((type) => new Type$1(type)), ast.isReadonly, ast.annotations);
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (p) => {
        const type = typeAST(p.type);
        return type === p.type ? p : new PropertySignature(p.name, type, p.isOptional, p.isReadonly);
      });
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => {
        const type = typeAST(is2.type);
        return type === is2.type ? is2 : new IndexSignature(is2.parameter, type, is2.isReadonly);
      });
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, ast.annotations);
    }
    case "Union": {
      const types = changeMap(ast.types, typeAST);
      return types === ast.types ? ast : Union$1.make(types, ast.annotations);
    }
    case "Suspend":
      return new Suspend(() => typeAST(ast.f()), ast.annotations);
    case "Refinement": {
      const from = typeAST(ast.from);
      return from === ast.from ? ast : new Refinement$1(from, ast.filter, ast.annotations);
    }
    case "Transformation": {
      const preserve = preserveTransformationAnnotations(ast);
      return typeAST(preserve !== void 0 ? annotations(ast.to, preserve) : ast.to);
    }
  }
  return ast;
};
const createJSONIdentifierAnnotation = (annotated) => match$8(getJSONIdentifier(annotated), {
  onNone: () => void 0,
  onSome: (identifier2) => ({
    [JSONIdentifierAnnotationId]: identifier2
  })
});
function changeMap(as2, f) {
  let changed = false;
  const out = allocate(as2.length);
  for (let i = 0; i < as2.length; i++) {
    const a = as2[i];
    const fa = f(a);
    if (fa !== a) {
      changed = true;
    }
    out[i] = fa;
  }
  return changed ? out : as2;
}
const encodedAST_ = (ast, isBound) => {
  switch (ast._tag) {
    case "Declaration": {
      const typeParameters = changeMap(ast.typeParameters, (ast2) => encodedAST_(ast2));
      return typeParameters === ast.typeParameters ? ast : new Declaration(typeParameters, ast.decodeUnknown, ast.encodeUnknown, ast.annotations);
    }
    case "TupleType": {
      const elements = changeMap(ast.elements, (e) => {
        const type = encodedAST_(e.type);
        return type === e.type ? e : new OptionalType(type, e.isOptional);
      });
      const restASTs = getRestASTs(ast.rest);
      const rest = changeMap(restASTs, (ast2) => encodedAST_(ast2));
      return elements === ast.elements && rest === restASTs ? ast : new TupleType(elements, rest.map((ast2) => new Type$1(ast2)), ast.isReadonly, createJSONIdentifierAnnotation(ast));
    }
    case "TypeLiteral": {
      const propertySignatures = changeMap(ast.propertySignatures, (ps) => {
        const type = encodedAST_(ps.type);
        return type === ps.type ? ps : new PropertySignature(ps.name, type, ps.isOptional, ps.isReadonly);
      });
      const indexSignatures = changeMap(ast.indexSignatures, (is2) => {
        const type = encodedAST_(is2.type);
        return type === is2.type ? is2 : new IndexSignature(is2.parameter, type, is2.isReadonly);
      });
      return propertySignatures === ast.propertySignatures && indexSignatures === ast.indexSignatures ? ast : new TypeLiteral(propertySignatures, indexSignatures, createJSONIdentifierAnnotation(ast));
    }
    case "Union": {
      const types = changeMap(ast.types, (ast2) => encodedAST_(ast2));
      return types === ast.types ? ast : Union$1.make(types, createJSONIdentifierAnnotation(ast));
    }
    case "Suspend":
      return new Suspend(() => encodedAST_(ast.f()), createJSONIdentifierAnnotation(ast));
    case "Refinement": {
      const from = encodedAST_(ast.from);
      const identifier2 = createJSONIdentifierAnnotation(ast);
      return identifier2 ? annotations(from, identifier2) : from;
    }
    case "Transformation": {
      const identifier2 = createJSONIdentifierAnnotation(ast);
      return encodedAST_(identifier2 ? annotations(ast.from, identifier2) : ast.from);
    }
  }
  return ast;
};
const encodedAST = (ast) => encodedAST_(ast);
const toJSONAnnotations = (annotations2) => {
  const out = {};
  for (const k of Object.getOwnPropertySymbols(annotations2)) {
    out[String(k)] = annotations2[k];
  }
  return out;
};
const getEncodedParameter = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return ast;
    case "Refinement":
      return getEncodedParameter(ast.from);
  }
};
const formatKeyword = (ast) => getOrElse(getExpected(ast), () => ast._tag);
function getBrands(ast) {
  return match$8(getBrandAnnotation(ast), {
    onNone: () => "",
    onSome: (brands) => brands.map((brand) => ` & Brand<${formatUnknown(brand)}>`).join("")
  });
}
const getOrElseExpected = (ast) => getTitleAnnotation(ast).pipe(orElse$1(() => getDescriptionAnnotation(ast)), orElse$1(() => getAutoTitleAnnotation(ast)), map$g((s) => s + getBrands(ast)));
const getExpected = (ast) => orElse$1(getIdentifierAnnotation(ast), () => getOrElseExpected(ast));
const pruneUndefined$1 = (ast, self2, onTransformation) => {
  switch (ast._tag) {
    case "UndefinedKeyword":
      return neverKeyword;
    case "Union": {
      const types = [];
      let hasUndefined = false;
      for (const type of ast.types) {
        const pruned = self2(type);
        if (pruned) {
          hasUndefined = true;
          if (!isNeverKeyword(pruned)) {
            types.push(pruned);
          }
        } else {
          types.push(type);
        }
      }
      if (hasUndefined) {
        return Union$1.make(types);
      }
      break;
    }
    case "Suspend":
      return self2(ast.f());
    case "Transformation":
      return onTransformation(ast);
  }
};
const RefinedConstructorsTypeId = /* @__PURE__ */ Symbol.for("effect/Brand/Refined");
const nominal = () => {
  return Object.assign((args2) => args2, {
    [RefinedConstructorsTypeId]: RefinedConstructorsTypeId,
    option: (args2) => some(args2),
    either: (args2) => right(args2),
    is: (_args) => true
  });
};
const TagTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Tag");
const ReferenceTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Reference");
const STMSymbolKey$1 = "effect/STM";
const STMTypeId$1 = /* @__PURE__ */ Symbol.for(STMSymbolKey$1);
const TagProto = {
  ...EffectPrototype$1,
  _op: "Tag",
  [STMTypeId$1]: effectVariance,
  [TagTypeId]: {
    _Service: (_) => _,
    _Identifier: (_) => _
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Tag",
      key: this.key,
      stack: this.stack
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  of(self2) {
    return self2;
  },
  context(self2) {
    return make$U(this, self2);
  }
};
const ReferenceProto = {
  ...TagProto,
  [ReferenceTypeId]: ReferenceTypeId
};
const makeGenericTag = (key) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  const tag2 = Object.create(TagProto);
  Object.defineProperty(tag2, "stack", {
    get() {
      return creationError.stack;
    }
  });
  tag2.key = key;
  return tag2;
};
const Tag$1 = (id2) => () => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function TagClass() {
  }
  Object.setPrototypeOf(TagClass, TagProto);
  TagClass.key = id2;
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return TagClass;
};
const Reference$1 = () => (id2, options2) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function ReferenceClass() {
  }
  Object.setPrototypeOf(ReferenceClass, ReferenceProto);
  ReferenceClass.key = id2;
  ReferenceClass.defaultValue = options2.defaultValue;
  Object.defineProperty(ReferenceClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return ReferenceClass;
};
const TypeId$q = /* @__PURE__ */ Symbol.for("effect/Context");
const ContextProto = {
  [TypeId$q]: {
    _Services: (_) => _
  },
  [symbol](that) {
    if (isContext$1(that)) {
      if (this.unsafeMap.size === that.unsafeMap.size) {
        for (const k of this.unsafeMap.keys()) {
          if (!that.unsafeMap.has(k) || !equals$1(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  },
  [symbol$1]() {
    return cached$1(this, number$1(this.unsafeMap.size));
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
const makeContext = (unsafeMap) => {
  const context2 = Object.create(ContextProto);
  context2.unsafeMap = unsafeMap;
  return context2;
};
const serviceNotFoundError = (tag2) => {
  const error = new Error(`Service not found${tag2.key ? `: ${String(tag2.key)}` : ""}`);
  if (tag2.stack) {
    const lines = tag2.stack.split("\n");
    if (lines.length > 2) {
      const afterAt = lines[2].match(/at (.*)/);
      if (afterAt) {
        error.message = error.message + ` (defined at ${afterAt[1]})`;
      }
    }
  }
  if (error.stack) {
    const lines = error.stack.split("\n");
    lines.splice(1, 3);
    error.stack = lines.join("\n");
  }
  return error;
};
const isContext$1 = (u) => hasProperty(u, TypeId$q);
const isTag$1 = (u) => hasProperty(u, TagTypeId);
const isReference = (u) => hasProperty(u, ReferenceTypeId);
const _empty$6 = /* @__PURE__ */ makeContext(/* @__PURE__ */ new Map());
const empty$t = () => _empty$6;
const make$U = (tag2, service) => makeContext(/* @__PURE__ */ new Map([[tag2.key, service]]));
const add$3 = /* @__PURE__ */ dual(3, (self2, tag2, service) => {
  const map2 = new Map(self2.unsafeMap);
  map2.set(tag2.key, service);
  return makeContext(map2);
});
const defaultValueCache = /* @__PURE__ */ globalValue("effect/Context/defaultValueCache", () => /* @__PURE__ */ new Map());
const getDefaultValue = (tag2) => {
  if (defaultValueCache.has(tag2.key)) {
    return defaultValueCache.get(tag2.key);
  }
  const value2 = tag2.defaultValue();
  defaultValueCache.set(tag2.key, value2);
  return value2;
};
const unsafeGetReference = (self2, tag2) => {
  return self2.unsafeMap.has(tag2.key) ? self2.unsafeMap.get(tag2.key) : getDefaultValue(tag2);
};
const unsafeGet$4 = /* @__PURE__ */ dual(2, (self2, tag2) => {
  if (!self2.unsafeMap.has(tag2.key)) {
    if (ReferenceTypeId in tag2) return getDefaultValue(tag2);
    throw serviceNotFoundError(tag2);
  }
  return self2.unsafeMap.get(tag2.key);
});
const get$f = unsafeGet$4;
const getOption$1 = /* @__PURE__ */ dual(2, (self2, tag2) => {
  if (!self2.unsafeMap.has(tag2.key)) {
    return isReference(tag2) ? some$1(getDefaultValue(tag2)) : none$5;
  }
  return some$1(self2.unsafeMap.get(tag2.key));
});
const merge$7 = /* @__PURE__ */ dual(2, (self2, that) => {
  const map2 = new Map(self2.unsafeMap);
  for (const [tag2, s] of that.unsafeMap) {
    map2.set(tag2, s);
  }
  return makeContext(map2);
});
const omit$3 = (...tags) => (self2) => {
  const newEnv = new Map(self2.unsafeMap);
  for (const tag2 of tags) {
    newEnv.delete(tag2.key);
  }
  return makeContext(newEnv);
};
const GenericTag = makeGenericTag;
const isContext = isContext$1;
const isTag = isTag$1;
const empty$s = empty$t;
const make$T = make$U;
const add$2 = add$3;
const get$e = get$f;
const unsafeGet$3 = unsafeGet$4;
const getOption = getOption$1;
const merge$6 = merge$7;
const omit$2 = omit$3;
const Tag = Tag$1;
const Reference = Reference$1;
const TypeId$p = /* @__PURE__ */ Symbol.for("effect/Chunk");
function copy(src, srcPos, dest, destPos, len) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i];
  }
  return dest;
}
const emptyArray = [];
const getEquivalence$1 = (isEquivalent) => make$X((self2, that) => self2.length === that.length && toReadonlyArray(self2).every((value2, i) => isEquivalent(value2, unsafeGet$2(that, i))));
const _equivalence$1 = /* @__PURE__ */ getEquivalence$1(equals$1);
const ChunkProto = {
  [TypeId$p]: {
    _A: (_) => _
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Chunk",
      values: toReadonlyArray(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol](that) {
    return isChunk(that) && _equivalence$1(this, that);
  },
  [symbol$1]() {
    return cached$1(this, array(toReadonlyArray(this)));
  },
  [Symbol.iterator]() {
    switch (this.backing._tag) {
      case "IArray": {
        return this.backing.array[Symbol.iterator]();
      }
      case "IEmpty": {
        return emptyArray[Symbol.iterator]();
      }
      default: {
        return toReadonlyArray(this)[Symbol.iterator]();
      }
    }
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeChunk = (backing) => {
  const chunk2 = Object.create(ChunkProto);
  chunk2.backing = backing;
  switch (backing._tag) {
    case "IEmpty": {
      chunk2.length = 0;
      chunk2.depth = 0;
      chunk2.left = chunk2;
      chunk2.right = chunk2;
      break;
    }
    case "IConcat": {
      chunk2.length = backing.left.length + backing.right.length;
      chunk2.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
      chunk2.left = backing.left;
      chunk2.right = backing.right;
      break;
    }
    case "IArray": {
      chunk2.length = backing.array.length;
      chunk2.depth = 0;
      chunk2.left = _empty$5;
      chunk2.right = _empty$5;
      break;
    }
    case "ISingleton": {
      chunk2.length = 1;
      chunk2.depth = 0;
      chunk2.left = _empty$5;
      chunk2.right = _empty$5;
      break;
    }
    case "ISlice": {
      chunk2.length = backing.length;
      chunk2.depth = backing.chunk.depth + 1;
      chunk2.left = _empty$5;
      chunk2.right = _empty$5;
      break;
    }
  }
  return chunk2;
};
const isChunk = (u) => hasProperty(u, TypeId$p);
const _empty$5 = /* @__PURE__ */ makeChunk({
  _tag: "IEmpty"
});
const empty$r = () => _empty$5;
const make$S = (...as2) => unsafeFromNonEmptyArray(as2);
const of$2 = (a) => makeChunk({
  _tag: "ISingleton",
  a
});
const fromIterable$7 = (self2) => isChunk(self2) ? self2 : unsafeFromArray(fromIterable$8(self2));
const copyToArray = (self2, array2, initial) => {
  switch (self2.backing._tag) {
    case "IArray": {
      copy(self2.backing.array, 0, array2, initial, self2.length);
      break;
    }
    case "IConcat": {
      copyToArray(self2.left, array2, initial);
      copyToArray(self2.right, array2, initial + self2.left.length);
      break;
    }
    case "ISingleton": {
      array2[initial] = self2.backing.a;
      break;
    }
    case "ISlice": {
      let i = 0;
      let j = initial;
      while (i < self2.length) {
        array2[j] = unsafeGet$2(self2, i);
        i += 1;
        j += 1;
      }
      break;
    }
  }
};
const toReadonlyArray_ = (self2) => {
  switch (self2.backing._tag) {
    case "IEmpty": {
      return emptyArray;
    }
    case "IArray": {
      return self2.backing.array;
    }
    default: {
      const arr = new Array(self2.length);
      copyToArray(self2, arr, 0);
      self2.backing = {
        _tag: "IArray",
        array: arr
      };
      self2.left = _empty$5;
      self2.right = _empty$5;
      self2.depth = 0;
      return arr;
    }
  }
};
const toReadonlyArray = toReadonlyArray_;
const reverseChunk = (self2) => {
  switch (self2.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return self2;
    case "IArray": {
      return makeChunk({
        _tag: "IArray",
        array: reverse$2(self2.backing.array)
      });
    }
    case "IConcat": {
      return makeChunk({
        _tag: "IConcat",
        left: reverse$1(self2.backing.right),
        right: reverse$1(self2.backing.left)
      });
    }
    case "ISlice":
      return unsafeFromArray(reverse$2(toReadonlyArray(self2)));
  }
};
const reverse$1 = reverseChunk;
const get$d = /* @__PURE__ */ dual(2, (self2, index) => index < 0 || index >= self2.length ? none$4() : some(unsafeGet$2(self2, index)));
const unsafeFromArray = (self2) => self2.length === 0 ? empty$r() : self2.length === 1 ? of$2(self2[0]) : makeChunk({
  _tag: "IArray",
  array: self2
});
const unsafeFromNonEmptyArray = (self2) => unsafeFromArray(self2);
const unsafeGet$2 = /* @__PURE__ */ dual(2, (self2, index) => {
  switch (self2.backing._tag) {
    case "IEmpty": {
      throw new Error(`Index out of bounds`);
    }
    case "ISingleton": {
      if (index !== 0) {
        throw new Error(`Index out of bounds`);
      }
      return self2.backing.a;
    }
    case "IArray": {
      if (index >= self2.length || index < 0) {
        throw new Error(`Index out of bounds`);
      }
      return self2.backing.array[index];
    }
    case "IConcat": {
      return index < self2.left.length ? unsafeGet$2(self2.left, index) : unsafeGet$2(self2.right, index - self2.left.length);
    }
    case "ISlice": {
      return unsafeGet$2(self2.backing.chunk, index + self2.backing.offset);
    }
  }
});
const append$1 = /* @__PURE__ */ dual(2, (self2, a) => appendAll$1(self2, of$2(a)));
const prepend$1 = /* @__PURE__ */ dual(2, (self2, elem) => appendAll$1(of$2(elem), self2));
const take$6 = /* @__PURE__ */ dual(2, (self2, n) => {
  if (n <= 0) {
    return _empty$5;
  } else if (n >= self2.length) {
    return self2;
  } else {
    switch (self2.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self2.backing.chunk,
          length: n,
          offset: self2.backing.offset
        });
      }
      case "IConcat": {
        if (n > self2.left.length) {
          return makeChunk({
            _tag: "IConcat",
            left: self2.left,
            right: take$6(self2.right, n - self2.left.length)
          });
        }
        return take$6(self2.left, n);
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self2,
          offset: 0,
          length: n
        });
      }
    }
  }
});
const drop = /* @__PURE__ */ dual(2, (self2, n) => {
  if (n <= 0) {
    return self2;
  } else if (n >= self2.length) {
    return _empty$5;
  } else {
    switch (self2.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self2.backing.chunk,
          offset: self2.backing.offset + n,
          length: self2.backing.length - n
        });
      }
      case "IConcat": {
        if (n > self2.left.length) {
          return drop(self2.right, n - self2.left.length);
        }
        return makeChunk({
          _tag: "IConcat",
          left: drop(self2.left, n),
          right: self2.right
        });
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self2,
          offset: n,
          length: self2.length - n
        });
      }
    }
  }
});
const appendAll$1 = /* @__PURE__ */ dual(2, (self2, that) => {
  if (self2.backing._tag === "IEmpty") {
    return that;
  }
  if (that.backing._tag === "IEmpty") {
    return self2;
  }
  const diff2 = that.depth - self2.depth;
  if (Math.abs(diff2) <= 1) {
    return makeChunk({
      _tag: "IConcat",
      left: self2,
      right: that
    });
  } else if (diff2 < -1) {
    if (self2.left.depth >= self2.right.depth) {
      const nr = appendAll$1(self2.right, that);
      return makeChunk({
        _tag: "IConcat",
        left: self2.left,
        right: nr
      });
    } else {
      const nrr = appendAll$1(self2.right.right, that);
      if (nrr.depth === self2.depth - 3) {
        const nr = makeChunk({
          _tag: "IConcat",
          left: self2.right.left,
          right: nrr
        });
        return makeChunk({
          _tag: "IConcat",
          left: self2.left,
          right: nr
        });
      } else {
        const nl = makeChunk({
          _tag: "IConcat",
          left: self2.left,
          right: self2.right.left
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: nrr
        });
      }
    }
  } else {
    if (that.right.depth >= that.left.depth) {
      const nl = appendAll$1(self2, that.left);
      return makeChunk({
        _tag: "IConcat",
        left: nl,
        right: that.right
      });
    } else {
      const nll = appendAll$1(self2, that.left.left);
      if (nll.depth === that.depth - 3) {
        const nl = makeChunk({
          _tag: "IConcat",
          left: nll,
          right: that.left.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: that.right
        });
      } else {
        const nr = makeChunk({
          _tag: "IConcat",
          left: that.left.right,
          right: that.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nll,
          right: nr
        });
      }
    }
  }
});
const filterMap$2 = /* @__PURE__ */ dual(2, (self2, f) => unsafeFromArray(filterMap$3(self2, f)));
const filter$3 = /* @__PURE__ */ dual(2, (self2, predicate) => unsafeFromArray(filter$4(self2, predicate)));
const isEmpty$7 = (self2) => self2.length === 0;
const isNonEmpty$2 = (self2) => self2.length > 0;
const head$2 = /* @__PURE__ */ get$d(0);
const unsafeHead = (self2) => unsafeGet$2(self2, 0);
const headNonEmpty = unsafeHead;
const map$d = /* @__PURE__ */ dual(2, (self2, f) => self2.backing._tag === "ISingleton" ? of$2(f(self2.backing.a, 0)) : unsafeFromArray(pipe(toReadonlyArray(self2), map$e((a, i) => f(a, i)))));
const splitAt = /* @__PURE__ */ dual(2, (self2, n) => [take$6(self2, n), drop(self2, n)]);
const splitWhere = /* @__PURE__ */ dual(2, (self2, predicate) => {
  let i = 0;
  for (const a of toReadonlyArray(self2)) {
    if (predicate(a)) {
      break;
    } else {
      i++;
    }
  }
  return splitAt(self2, i);
});
const tailNonEmpty = (self2) => drop(self2, 1);
const takeRight = /* @__PURE__ */ dual(2, (self2, n) => drop(self2, self2.length - n));
const reduce$6 = reduce$7;
const TypeId$o = /* @__PURE__ */ Symbol.for("effect/Duration");
const bigint0$2 = /* @__PURE__ */ BigInt(0);
const bigint24 = /* @__PURE__ */ BigInt(24);
const bigint60 = /* @__PURE__ */ BigInt(60);
const bigint1e3 = /* @__PURE__ */ BigInt(1e3);
const bigint1e6 = /* @__PURE__ */ BigInt(1e6);
const bigint1e9 = /* @__PURE__ */ BigInt(1e9);
const DURATION_REGEX = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/;
const decode$3 = (input) => {
  if (isDuration(input)) {
    return input;
  } else if (isNumber(input)) {
    return millis(input);
  } else if (isBigInt(input)) {
    return nanos(input);
  } else if (Array.isArray(input) && input.length === 2 && input.every(isNumber)) {
    if (input[0] === -Infinity || input[1] === -Infinity || Number.isNaN(input[0]) || Number.isNaN(input[1])) {
      return zero;
    }
    if (input[0] === Infinity || input[1] === Infinity) {
      return infinity;
    }
    return nanos(BigInt(Math.round(input[0] * 1e9)) + BigInt(Math.round(input[1])));
  } else if (isString(input)) {
    const match2 = DURATION_REGEX.exec(input);
    if (match2) {
      const [_, valueStr, unit] = match2;
      const value2 = Number(valueStr);
      switch (unit) {
        case "nano":
        case "nanos":
          return nanos(BigInt(valueStr));
        case "micro":
        case "micros":
          return micros(BigInt(valueStr));
        case "milli":
        case "millis":
          return millis(value2);
        case "second":
        case "seconds":
          return seconds(value2);
        case "minute":
        case "minutes":
          return minutes(value2);
        case "hour":
        case "hours":
          return hours(value2);
        case "day":
        case "days":
          return days(value2);
        case "week":
        case "weeks":
          return weeks(value2);
      }
    }
  }
  throw new Error("Invalid DurationInput");
};
const zeroValue = {
  _tag: "Millis",
  millis: 0
};
const infinityValue = {
  _tag: "Infinity"
};
const DurationProto = {
  [TypeId$o]: TypeId$o,
  [symbol$1]() {
    return cached$1(this, structure(this.value));
  },
  [symbol](that) {
    return isDuration(that) && equals(this, that);
  },
  toString() {
    return `Duration(${format$2(this)})`;
  },
  toJSON() {
    switch (this.value._tag) {
      case "Millis":
        return {
          _id: "Duration",
          _tag: "Millis",
          millis: this.value.millis
        };
      case "Nanos":
        return {
          _id: "Duration",
          _tag: "Nanos",
          hrtime: toHrTime(this)
        };
      case "Infinity":
        return {
          _id: "Duration",
          _tag: "Infinity"
        };
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const make$R = (input) => {
  const duration = Object.create(DurationProto);
  if (isNumber(input)) {
    if (isNaN(input) || input <= 0) {
      duration.value = zeroValue;
    } else if (!Number.isFinite(input)) {
      duration.value = infinityValue;
    } else if (!Number.isInteger(input)) {
      duration.value = {
        _tag: "Nanos",
        nanos: BigInt(Math.round(input * 1e6))
      };
    } else {
      duration.value = {
        _tag: "Millis",
        millis: input
      };
    }
  } else if (input <= bigint0$2) {
    duration.value = zeroValue;
  } else {
    duration.value = {
      _tag: "Nanos",
      nanos: input
    };
  }
  return duration;
};
const isDuration = (u) => hasProperty(u, TypeId$o);
const isZero = (self2) => {
  switch (self2.value._tag) {
    case "Millis": {
      return self2.value.millis === 0;
    }
    case "Nanos": {
      return self2.value.nanos === bigint0$2;
    }
    case "Infinity": {
      return false;
    }
  }
};
const zero = /* @__PURE__ */ make$R(0);
const infinity = /* @__PURE__ */ make$R(Infinity);
const nanos = (nanos2) => make$R(nanos2);
const micros = (micros2) => make$R(micros2 * bigint1e3);
const millis = (millis2) => make$R(millis2);
const seconds = (seconds2) => make$R(seconds2 * 1e3);
const minutes = (minutes2) => make$R(minutes2 * 6e4);
const hours = (hours2) => make$R(hours2 * 36e5);
const days = (days2) => make$R(days2 * 864e5);
const weeks = (weeks2) => make$R(weeks2 * 6048e5);
const toMillis = (self2) => match$7(self2, {
  onMillis: (millis2) => millis2,
  onNanos: (nanos2) => Number(nanos2) / 1e6
});
const unsafeToNanos = (self2) => {
  const _self = decode$3(self2);
  switch (_self.value._tag) {
    case "Infinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return _self.value.nanos;
    case "Millis":
      return BigInt(Math.round(_self.value.millis * 1e6));
  }
};
const toHrTime = (self2) => {
  const _self = decode$3(self2);
  switch (_self.value._tag) {
    case "Infinity":
      return [Infinity, 0];
    case "Nanos":
      return [Number(_self.value.nanos / bigint1e9), Number(_self.value.nanos % bigint1e9)];
    case "Millis":
      return [Math.floor(_self.value.millis / 1e3), Math.round(_self.value.millis % 1e3 * 1e6)];
  }
};
const match$7 = /* @__PURE__ */ dual(2, (self2, options2) => {
  const _self = decode$3(self2);
  switch (_self.value._tag) {
    case "Nanos":
      return options2.onNanos(_self.value.nanos);
    case "Infinity":
      return options2.onMillis(Infinity);
    case "Millis":
      return options2.onMillis(_self.value.millis);
  }
});
const matchWith = /* @__PURE__ */ dual(3, (self2, that, options2) => {
  const _self = decode$3(self2);
  const _that = decode$3(that);
  if (_self.value._tag === "Infinity" || _that.value._tag === "Infinity") {
    return options2.onMillis(toMillis(_self), toMillis(_that));
  } else if (_self.value._tag === "Nanos" || _that.value._tag === "Nanos") {
    const selfNanos = _self.value._tag === "Nanos" ? _self.value.nanos : BigInt(Math.round(_self.value.millis * 1e6));
    const thatNanos = _that.value._tag === "Nanos" ? _that.value.nanos : BigInt(Math.round(_that.value.millis * 1e6));
    return options2.onNanos(selfNanos, thatNanos);
  }
  return options2.onMillis(_self.value.millis, _that.value.millis);
});
const Equivalence = (self2, that) => matchWith(self2, that, {
  onMillis: (self3, that2) => self3 === that2,
  onNanos: (self3, that2) => self3 === that2
});
const times = /* @__PURE__ */ dual(2, (self2, times2) => match$7(self2, {
  onMillis: (millis2) => make$R(millis2 * times2),
  onNanos: (nanos2) => make$R(nanos2 * BigInt(times2))
}));
const sum = /* @__PURE__ */ dual(2, (self2, that) => matchWith(self2, that, {
  onMillis: (self3, that2) => make$R(self3 + that2),
  onNanos: (self3, that2) => make$R(self3 + that2)
}));
const lessThanOrEqualTo = /* @__PURE__ */ dual(2, (self2, that) => matchWith(self2, that, {
  onMillis: (self3, that2) => self3 <= that2,
  onNanos: (self3, that2) => self3 <= that2
}));
const greaterThanOrEqualTo = /* @__PURE__ */ dual(2, (self2, that) => matchWith(self2, that, {
  onMillis: (self3, that2) => self3 >= that2,
  onNanos: (self3, that2) => self3 >= that2
}));
const equals = /* @__PURE__ */ dual(2, (self2, that) => Equivalence(decode$3(self2), decode$3(that)));
const parts = (self2) => {
  const duration = decode$3(self2);
  if (duration.value._tag === "Infinity") {
    return {
      days: Infinity,
      hours: Infinity,
      minutes: Infinity,
      seconds: Infinity,
      millis: Infinity,
      nanos: Infinity
    };
  }
  const nanos2 = unsafeToNanos(duration);
  const ms = nanos2 / bigint1e6;
  const sec = ms / bigint1e3;
  const min2 = sec / bigint60;
  const hr = min2 / bigint60;
  const days2 = hr / bigint24;
  return {
    days: Number(days2),
    hours: Number(hr % bigint24),
    minutes: Number(min2 % bigint60),
    seconds: Number(sec % bigint60),
    millis: Number(ms % bigint1e3),
    nanos: Number(nanos2 % bigint1e6)
  };
};
const format$2 = (self2) => {
  const duration = decode$3(self2);
  if (duration.value._tag === "Infinity") {
    return "Infinity";
  }
  if (isZero(duration)) {
    return "0";
  }
  const fragments = parts(duration);
  const pieces = [];
  if (fragments.days !== 0) {
    pieces.push(`${fragments.days}d`);
  }
  if (fragments.hours !== 0) {
    pieces.push(`${fragments.hours}h`);
  }
  if (fragments.minutes !== 0) {
    pieces.push(`${fragments.minutes}m`);
  }
  if (fragments.seconds !== 0) {
    pieces.push(`${fragments.seconds}s`);
  }
  if (fragments.millis !== 0) {
    pieces.push(`${fragments.millis}ms`);
  }
  if (fragments.nanos !== 0) {
    pieces.push(`${fragments.nanos}ns`);
  }
  return pieces.join(" ");
};
const SIZE = 5;
const BUCKET_SIZE = /* @__PURE__ */ Math.pow(2, SIZE);
const MASK = BUCKET_SIZE - 1;
const MAX_INDEX_NODE = BUCKET_SIZE / 2;
const MIN_ARRAY_NODE = BUCKET_SIZE / 4;
function popcount(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
function hashFragment(shift2, h) {
  return h >>> shift2 & MASK;
}
function toBitmap(x) {
  return 1 << x;
}
function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
}
const make$Q = (value2, previous) => ({
  value: value2,
  previous
});
function arrayUpdate(mutate2, at, v, arr) {
  let out = arr;
  if (!mutate2) {
    const len = arr.length;
    out = new Array(len);
    for (let i = 0; i < len; ++i) out[i] = arr[i];
  }
  out[at] = v;
  return out;
}
function arraySpliceOut(mutate2, at, arr) {
  const newLen = arr.length - 1;
  let i = 0;
  let g = 0;
  let out = arr;
  if (mutate2) {
    i = g = at;
  } else {
    out = new Array(newLen);
    while (i < at) out[g++] = arr[i++];
  }
  ++i;
  while (i <= newLen) out[g++] = arr[i++];
  if (mutate2) {
    out.length = newLen;
  }
  return out;
}
function arraySpliceIn(mutate2, at, v, arr) {
  const len = arr.length;
  if (mutate2) {
    let i2 = len;
    while (i2 >= at) arr[i2--] = arr[i2];
    arr[at] = v;
    return arr;
  }
  let i = 0, g = 0;
  const out = new Array(len + 1);
  while (i < at) out[g++] = arr[i++];
  out[at] = v;
  while (i < len) out[++g] = arr[i++];
  return out;
}
class EmptyNode {
  constructor() {
    __publicField(this, "_tag", "EmptyNode");
  }
  modify(edit, _shift, f, hash2, key, size2) {
    const v = f(none$4());
    if (isNone(v)) return new EmptyNode();
    ++size2.value;
    return new LeafNode(edit, hash2, key, v);
  }
}
function isEmptyNode(a) {
  return isTagged(a, "EmptyNode");
}
function isLeafNode(node) {
  return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode";
}
function canEditNode(node, edit) {
  return isEmptyNode(node) ? false : edit === node.edit;
}
class LeafNode {
  constructor(edit, hash2, key, value2) {
    __publicField(this, "edit");
    __publicField(this, "hash");
    __publicField(this, "key");
    __publicField(this, "value");
    __publicField(this, "_tag", "LeafNode");
    this.edit = edit;
    this.hash = hash2;
    this.key = key;
    this.value = value2;
  }
  modify(edit, shift2, f, hash2, key, size2) {
    if (equals$1(key, this.key)) {
      const v2 = f(this.value);
      if (v2 === this.value) return this;
      else if (isNone(v2)) {
        --size2.value;
        return new EmptyNode();
      }
      if (canEditNode(this, edit)) {
        this.value = v2;
        return this;
      }
      return new LeafNode(edit, hash2, key, v2);
    }
    const v = f(none$4());
    if (isNone(v)) return this;
    ++size2.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash2, new LeafNode(edit, hash2, key, v));
  }
}
class CollisionNode {
  constructor(edit, hash2, children) {
    __publicField(this, "edit");
    __publicField(this, "hash");
    __publicField(this, "children");
    __publicField(this, "_tag", "CollisionNode");
    this.edit = edit;
    this.hash = hash2;
    this.children = children;
  }
  modify(edit, shift2, f, hash2, key, size2) {
    if (hash2 === this.hash) {
      const canEdit = canEditNode(this, edit);
      const list = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key, size2);
      if (list === this.children) return this;
      return list.length > 1 ? new CollisionNode(edit, this.hash, list) : list[0];
    }
    const v = f(none$4());
    if (isNone(v)) return this;
    ++size2.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash2, new LeafNode(edit, hash2, key, v));
  }
  updateCollisionList(mutate2, edit, hash2, list, f, key, size2) {
    const len = list.length;
    for (let i = 0; i < len; ++i) {
      const child = list[i];
      if ("key" in child && equals$1(key, child.key)) {
        const value2 = child.value;
        const newValue2 = f(value2);
        if (newValue2 === value2) return list;
        if (isNone(newValue2)) {
          --size2.value;
          return arraySpliceOut(mutate2, i, list);
        }
        return arrayUpdate(mutate2, i, new LeafNode(edit, hash2, key, newValue2), list);
      }
    }
    const newValue = f(none$4());
    if (isNone(newValue)) return list;
    ++size2.value;
    return arrayUpdate(mutate2, len, new LeafNode(edit, hash2, key, newValue), list);
  }
}
class IndexedNode {
  constructor(edit, mask, children) {
    __publicField(this, "edit");
    __publicField(this, "mask");
    __publicField(this, "children");
    __publicField(this, "_tag", "IndexedNode");
    this.edit = edit;
    this.mask = mask;
    this.children = children;
  }
  modify(edit, shift2, f, hash2, key, size2) {
    const mask = this.mask;
    const children = this.children;
    const frag = hashFragment(shift2, hash2);
    const bit = toBitmap(frag);
    const indx = fromBitmap(mask, bit);
    const exists2 = mask & bit;
    const canEdit = canEditNode(this, edit);
    if (!exists2) {
      const _newChild = new EmptyNode().modify(edit, shift2 + SIZE, f, hash2, key, size2);
      if (!_newChild) return this;
      return children.length >= MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children) : new IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children));
    }
    const current = children[indx];
    const child = current.modify(edit, shift2 + SIZE, f, hash2, key, size2);
    if (current === child) return this;
    let bitmap = mask;
    let newChildren;
    if (isEmptyNode(child)) {
      bitmap &= ~bit;
      if (!bitmap) return new EmptyNode();
      if (children.length <= 2 && isLeafNode(children[indx ^ 1])) {
        return children[indx ^ 1];
      }
      newChildren = arraySpliceOut(canEdit, indx, children);
    } else {
      newChildren = arrayUpdate(canEdit, indx, child, children);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return new IndexedNode(edit, bitmap, newChildren);
  }
}
class ArrayNode {
  constructor(edit, size2, children) {
    __publicField(this, "edit");
    __publicField(this, "size");
    __publicField(this, "children");
    __publicField(this, "_tag", "ArrayNode");
    this.edit = edit;
    this.size = size2;
    this.children = children;
  }
  modify(edit, shift2, f, hash2, key, size2) {
    let count = this.size;
    const children = this.children;
    const frag = hashFragment(shift2, hash2);
    const child = children[frag];
    const newChild = (child || new EmptyNode()).modify(edit, shift2 + SIZE, f, hash2, key, size2);
    if (child === newChild) return this;
    const canEdit = canEditNode(this, edit);
    let newChildren;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      ++count;
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      --count;
      if (count <= MIN_ARRAY_NODE) {
        return pack(edit, count, frag, children);
      }
      newChildren = arrayUpdate(canEdit, frag, new EmptyNode(), children);
    } else {
      newChildren = arrayUpdate(canEdit, frag, newChild, children);
    }
    if (canEdit) {
      this.size = count;
      this.children = newChildren;
      return this;
    }
    return new ArrayNode(edit, count, newChildren);
  }
}
function pack(edit, count, removed, elements) {
  const children = new Array(count - 1);
  let g = 0;
  let bitmap = 0;
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      const elem = elements[i];
      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }
  return new IndexedNode(edit, bitmap, children);
}
function expand(edit, frag, child, bitmap, subNodes) {
  const arr = [];
  let bit = bitmap;
  let count = 0;
  for (let i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++];
    bit >>>= 1;
  }
  arr[frag] = child;
  return new ArrayNode(edit, count + 1, arr);
}
function mergeLeavesInner(edit, shift2, h1, n1, h2, n2) {
  if (h1 === h2) return new CollisionNode(edit, h1, [n2, n1]);
  const subH1 = hashFragment(shift2, h1);
  const subH2 = hashFragment(shift2, h2);
  if (subH1 === subH2) {
    return (child) => new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), [child]);
  } else {
    const children = subH1 < subH2 ? [n1, n2] : [n2, n1];
    return new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), children);
  }
}
function mergeLeaves(edit, shift2, h1, n1, h2, n2) {
  let stack = void 0;
  let currentShift = shift2;
  while (true) {
    const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2);
    if (typeof res === "function") {
      stack = make$Q(res, stack);
      currentShift = currentShift + SIZE;
    } else {
      let final = res;
      while (stack != null) {
        final = stack.value(final);
        stack = stack.previous;
      }
      return final;
    }
  }
}
const HashMapSymbolKey = "effect/HashMap";
const HashMapTypeId = /* @__PURE__ */ Symbol.for(HashMapSymbolKey);
const HashMapProto = {
  [HashMapTypeId]: HashMapTypeId,
  [Symbol.iterator]() {
    return new HashMapIterator(this, (k, v) => [k, v]);
  },
  [symbol$1]() {
    let hash$1 = hash(HashMapSymbolKey);
    for (const item of this) {
      hash$1 ^= pipe(hash(item[0]), combine$7(hash(item[1])));
    }
    return cached$1(this, hash$1);
  },
  [symbol](that) {
    if (isHashMap(that)) {
      if (that._size !== this._size) {
        return false;
      }
      for (const item of this) {
        const elem = pipe(that, getHash(item[0], hash(item[0])));
        if (isNone(elem)) {
          return false;
        } else {
          if (!equals$1(item[1], elem.value)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeImpl$1 = (editable, edit, root, size2) => {
  const map2 = Object.create(HashMapProto);
  map2._editable = editable;
  map2._edit = edit;
  map2._root = root;
  map2._size = size2;
  return map2;
};
class HashMapIterator {
  constructor(map2, f) {
    __publicField(this, "map");
    __publicField(this, "f");
    __publicField(this, "v");
    this.map = map2;
    this.f = f;
    this.v = visitLazy(this.map._root, this.f, void 0);
  }
  next() {
    if (isNone(this.v)) {
      return {
        done: true,
        value: void 0
      };
    }
    const v0 = this.v.value;
    this.v = applyCont(v0.cont);
    return {
      done: false,
      value: v0.value
    };
  }
  [Symbol.iterator]() {
    return new HashMapIterator(this.map, this.f);
  }
}
const applyCont = (cont) => cont ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4]) : none$4();
const visitLazy = (node, f, cont = void 0) => {
  switch (node._tag) {
    case "LeafNode": {
      if (isSome(node.value)) {
        return some({
          value: f(node.key, node.value.value),
          cont
        });
      }
      return applyCont(cont);
    }
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode": {
      const children = node.children;
      return visitLazyChildren(children.length, children, 0, f, cont);
    }
    default: {
      return applyCont(cont);
    }
  }
};
const visitLazyChildren = (len, children, i, f, cont) => {
  while (i < len) {
    const child = children[i++];
    if (child && !isEmptyNode(child)) {
      return visitLazy(child, f, [len, children, i, f, cont]);
    }
  }
  return applyCont(cont);
};
const _empty$4 = /* @__PURE__ */ makeImpl$1(false, 0, /* @__PURE__ */ new EmptyNode(), 0);
const empty$q = () => _empty$4;
const fromIterable$6 = (entries) => {
  const map2 = beginMutation$1(empty$q());
  for (const entry of entries) {
    set$8(map2, entry[0], entry[1]);
  }
  return endMutation$1(map2);
};
const isHashMap = (u) => hasProperty(u, HashMapTypeId);
const isEmpty$6 = (self2) => self2 && isEmptyNode(self2._root);
const get$c = /* @__PURE__ */ dual(2, (self2, key) => getHash(self2, key, hash(key)));
const getHash = /* @__PURE__ */ dual(3, (self2, key, hash2) => {
  let node = self2._root;
  let shift2 = 0;
  while (true) {
    switch (node._tag) {
      case "LeafNode": {
        return equals$1(key, node.key) ? node.value : none$4();
      }
      case "CollisionNode": {
        if (hash2 === node.hash) {
          const children = node.children;
          for (let i = 0, len = children.length; i < len; ++i) {
            const child = children[i];
            if ("key" in child && equals$1(key, child.key)) {
              return child.value;
            }
          }
        }
        return none$4();
      }
      case "IndexedNode": {
        const frag = hashFragment(shift2, hash2);
        const bit = toBitmap(frag);
        if (node.mask & bit) {
          node = node.children[fromBitmap(node.mask, bit)];
          shift2 += SIZE;
          break;
        }
        return none$4();
      }
      case "ArrayNode": {
        node = node.children[hashFragment(shift2, hash2)];
        if (node) {
          shift2 += SIZE;
          break;
        }
        return none$4();
      }
      default:
        return none$4();
    }
  }
});
const has$3 = /* @__PURE__ */ dual(2, (self2, key) => isSome(getHash(self2, key, hash(key))));
const set$8 = /* @__PURE__ */ dual(3, (self2, key, value2) => modifyAt$1(self2, key, () => some(value2)));
const setTree = /* @__PURE__ */ dual(3, (self2, newRoot, newSize) => {
  if (self2._editable) {
    self2._root = newRoot;
    self2._size = newSize;
    return self2;
  }
  return newRoot === self2._root ? self2 : makeImpl$1(self2._editable, self2._edit, newRoot, newSize);
});
const keys$1 = (self2) => new HashMapIterator(self2, (key) => key);
const size$7 = (self2) => self2._size;
const beginMutation$1 = (self2) => makeImpl$1(true, self2._edit + 1, self2._root, self2._size);
const endMutation$1 = (self2) => {
  self2._editable = false;
  return self2;
};
const modifyAt$1 = /* @__PURE__ */ dual(3, (self2, key, f) => modifyHash(self2, key, hash(key), f));
const modifyHash = /* @__PURE__ */ dual(4, (self2, key, hash2, f) => {
  const size2 = {
    value: self2._size
  };
  const newRoot = self2._root.modify(self2._editable ? self2._edit : NaN, 0, f, hash2, key, size2);
  return pipe(self2, setTree(newRoot, size2.value));
});
const remove$4 = /* @__PURE__ */ dual(2, (self2, key) => modifyAt$1(self2, key, none$4));
const map$c = /* @__PURE__ */ dual(2, (self2, f) => reduce$5(self2, empty$q(), (map2, value2, key) => set$8(map2, key, f(value2, key))));
const forEach$4 = /* @__PURE__ */ dual(2, (self2, f) => reduce$5(self2, void 0, (_, value2, key) => f(value2, key)));
const reduce$5 = /* @__PURE__ */ dual(3, (self2, zero2, f) => {
  const root = self2._root;
  if (root._tag === "LeafNode") {
    return isSome(root.value) ? f(zero2, root.value.value, root.key) : zero2;
  }
  if (root._tag === "EmptyNode") {
    return zero2;
  }
  const toVisit = [root.children];
  let children;
  while (children = toVisit.pop()) {
    for (let i = 0, len = children.length; i < len; ) {
      const child = children[i++];
      if (child && !isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (isSome(child.value)) {
            zero2 = f(zero2, child.value.value, child.key);
          }
        } else {
          toVisit.push(child.children);
        }
      }
    }
  }
  return zero2;
});
const HashSetSymbolKey = "effect/HashSet";
const HashSetTypeId = /* @__PURE__ */ Symbol.for(HashSetSymbolKey);
const HashSetProto = {
  [HashSetTypeId]: HashSetTypeId,
  [Symbol.iterator]() {
    return keys$1(this._keyMap);
  },
  [symbol$1]() {
    return cached$1(this, combine$7(hash(this._keyMap))(hash(HashSetSymbolKey)));
  },
  [symbol](that) {
    if (isHashSet(that)) {
      return size$7(this._keyMap) === size$7(that._keyMap) && equals$1(this._keyMap, that._keyMap);
    }
    return false;
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashSet",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeImpl = (keyMap) => {
  const set2 = Object.create(HashSetProto);
  set2._keyMap = keyMap;
  return set2;
};
const isHashSet = (u) => hasProperty(u, HashSetTypeId);
const _empty$3 = /* @__PURE__ */ makeImpl(/* @__PURE__ */ empty$q());
const empty$p = () => _empty$3;
const fromIterable$5 = (elements) => {
  const set2 = beginMutation(empty$p());
  for (const value2 of elements) {
    add$1(set2, value2);
  }
  return endMutation(set2);
};
const make$P = (...elements) => {
  const set2 = beginMutation(empty$p());
  for (const value2 of elements) {
    add$1(set2, value2);
  }
  return endMutation(set2);
};
const has$2 = /* @__PURE__ */ dual(2, (self2, value2) => has$3(self2._keyMap, value2));
const size$6 = (self2) => size$7(self2._keyMap);
const beginMutation = (self2) => makeImpl(beginMutation$1(self2._keyMap));
const endMutation = (self2) => {
  self2._keyMap._editable = false;
  return self2;
};
const mutate = /* @__PURE__ */ dual(2, (self2, f) => {
  const transient = beginMutation(self2);
  f(transient);
  return endMutation(transient);
});
const add$1 = /* @__PURE__ */ dual(2, (self2, value2) => self2._keyMap._editable ? (set$8(value2, true)(self2._keyMap), self2) : makeImpl(set$8(value2, true)(self2._keyMap)));
const remove$3 = /* @__PURE__ */ dual(2, (self2, value2) => self2._keyMap._editable ? (remove$4(value2)(self2._keyMap), self2) : makeImpl(remove$4(value2)(self2._keyMap)));
const difference$1 = /* @__PURE__ */ dual(2, (self2, that) => mutate(self2, (set2) => {
  for (const value2 of that) {
    remove$3(set2, value2);
  }
}));
const union$1 = /* @__PURE__ */ dual(2, (self2, that) => mutate(empty$p(), (set2) => {
  forEach$3(self2, (value2) => add$1(set2, value2));
  for (const value2 of that) {
    add$1(set2, value2);
  }
}));
const forEach$3 = /* @__PURE__ */ dual(2, (self2, f) => forEach$4(self2._keyMap, (_, k) => f(k)));
const reduce$4 = /* @__PURE__ */ dual(3, (self2, zero2, f) => reduce$5(self2._keyMap, zero2, (z, _, a) => f(z, a)));
const empty$o = empty$p;
const fromIterable$4 = fromIterable$5;
const make$O = make$P;
const has$1 = has$2;
const size$5 = size$6;
const add = add$1;
const remove$2 = remove$3;
const difference = difference$1;
const union = union$1;
const reduce$3 = reduce$4;
const TypeId$n = /* @__PURE__ */ Symbol.for("effect/MutableRef");
const MutableRefProto = {
  [TypeId$n]: TypeId$n,
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableRef",
      current: toJSON(this.current)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const make$N = (value2) => {
  const ref = Object.create(MutableRefProto);
  ref.current = value2;
  return ref;
};
const compareAndSet = /* @__PURE__ */ dual(3, (self2, oldValue, newValue) => {
  if (equals$1(oldValue, self2.current)) {
    self2.current = newValue;
    return true;
  }
  return false;
});
const get$b = (self2) => self2.current;
const set$7 = /* @__PURE__ */ dual(2, (self2, value2) => {
  self2.current = value2;
  return self2;
});
const FiberIdSymbolKey = "effect/FiberId";
const FiberIdTypeId = /* @__PURE__ */ Symbol.for(FiberIdSymbolKey);
const OP_NONE = "None";
const OP_RUNTIME = "Runtime";
const OP_COMPOSITE = "Composite";
const emptyHash = /* @__PURE__ */ string(`${FiberIdSymbolKey}-${OP_NONE}`);
let None$2 = class None {
  constructor() {
    __publicField(this, _c, FiberIdTypeId);
    __publicField(this, "_tag", OP_NONE);
    __publicField(this, "id", -1);
    __publicField(this, "startTimeMillis", -1);
  }
  [(_c = FiberIdTypeId, symbol$1)]() {
    return emptyHash;
  }
  [symbol](that) {
    return isFiberId(that) && that._tag === OP_NONE;
  }
  toString() {
    return format$3(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
class Runtime {
  constructor(id2, startTimeMillis) {
    __publicField(this, "id");
    __publicField(this, "startTimeMillis");
    __publicField(this, _d, FiberIdTypeId);
    __publicField(this, "_tag", OP_RUNTIME);
    this.id = id2;
    this.startTimeMillis = startTimeMillis;
  }
  [(_d = FiberIdTypeId, symbol$1)]() {
    return cached$1(this, string(`${FiberIdSymbolKey}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [symbol](that) {
    return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
  }
  toString() {
    return format$3(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      id: this.id,
      startTimeMillis: this.startTimeMillis
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
}
let Composite$1 = class Composite {
  constructor(left2, right2) {
    __publicField(this, "left");
    __publicField(this, "right");
    __publicField(this, _e, FiberIdTypeId);
    __publicField(this, "_tag", OP_COMPOSITE);
    __publicField(this, "_hash");
    this.left = left2;
    this.right = right2;
  }
  [(_e = FiberIdTypeId, symbol$1)]() {
    return pipe(string(`${FiberIdSymbolKey}-${this._tag}`), combine$7(hash(this.left)), combine$7(hash(this.right)), cached$1(this));
  }
  [symbol](that) {
    return isFiberId(that) && that._tag === OP_COMPOSITE && equals$1(this.left, that.left) && equals$1(this.right, that.right);
  }
  toString() {
    return format$3(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      left: toJSON(this.left),
      right: toJSON(this.right)
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
const none$3 = /* @__PURE__ */ new None$2();
const runtime$3 = (id2, startTimeMillis) => {
  return new Runtime(id2, startTimeMillis);
};
const composite$1 = (left2, right2) => {
  return new Composite$1(left2, right2);
};
const isFiberId = (self2) => hasProperty(self2, FiberIdTypeId);
const combine$6 = /* @__PURE__ */ dual(2, (self2, that) => {
  if (self2._tag === OP_NONE) {
    return that;
  }
  if (that._tag === OP_NONE) {
    return self2;
  }
  return new Composite$1(self2, that);
});
const combineAll$1 = (fiberIds) => {
  return pipe(fiberIds, reduce$3(none$3, (a, b) => combine$6(b)(a)));
};
const ids$1 = (self2) => {
  switch (self2._tag) {
    case OP_NONE: {
      return empty$o();
    }
    case OP_RUNTIME: {
      return make$O(self2.id);
    }
    case OP_COMPOSITE: {
      return pipe(ids$1(self2.left), union(ids$1(self2.right)));
    }
  }
};
const _fiberCounter = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Fiber/Id/_fiberCounter"), () => make$N(0));
const make$M = (id2, startTimeSeconds) => {
  return new Runtime(id2, startTimeSeconds);
};
const threadName$1 = (self2) => {
  const identifiers = Array.from(ids$1(self2)).map((n) => `#${n}`).join(",");
  return identifiers;
};
const unsafeMake$a = () => {
  const id2 = get$b(_fiberCounter);
  pipe(_fiberCounter, set$7(id2 + 1));
  return new Runtime(id2, Date.now());
};
const none$2 = none$3;
const runtime$2 = runtime$3;
const composite = composite$1;
const combine$5 = combine$6;
const combineAll = combineAll$1;
const ids = ids$1;
const make$L = make$M;
const threadName = threadName$1;
const unsafeMake$9 = unsafeMake$a;
const empty$n = empty$q;
const fromIterable$3 = fromIterable$6;
const isEmpty$5 = isEmpty$6;
const get$a = get$c;
const set$6 = set$8;
const keys = keys$1;
const size$4 = size$7;
const modifyAt = modifyAt$1;
const map$b = map$c;
const forEach$2 = forEach$4;
const reduce$2 = reduce$5;
const TypeId$m = /* @__PURE__ */ Symbol.for("effect/List");
const toArray = (self2) => fromIterable$8(self2);
const getEquivalence = (isEquivalent) => mapInput$1(getEquivalence$2(isEquivalent), toArray);
const _equivalence = /* @__PURE__ */ getEquivalence(equals$1);
const ConsProto = {
  [TypeId$m]: TypeId$m,
  _tag: "Cons",
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Cons",
      values: toArray(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol](that) {
    return isList(that) && this._tag === that._tag && _equivalence(this, that);
  },
  [symbol$1]() {
    return cached$1(this, array(toArray(this)));
  },
  [Symbol.iterator]() {
    let done2 = false;
    let self2 = this;
    return {
      next() {
        if (done2) {
          return this.return();
        }
        if (self2._tag === "Nil") {
          done2 = true;
          return this.return();
        }
        const value2 = self2.head;
        self2 = self2.tail;
        return {
          done: done2,
          value: value2
        };
      },
      return(value2) {
        if (!done2) {
          done2 = true;
        }
        return {
          done: true,
          value: value2
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeCons = (head2, tail) => {
  const cons2 = Object.create(ConsProto);
  cons2.head = head2;
  cons2.tail = tail;
  return cons2;
};
const NilHash = /* @__PURE__ */ string("Nil");
const NilProto = {
  [TypeId$m]: TypeId$m,
  _tag: "Nil",
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol$1]() {
    return NilHash;
  },
  [symbol](that) {
    return isList(that) && this._tag === that._tag;
  },
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const _Nil = /* @__PURE__ */ Object.create(NilProto);
const isList = (u) => hasProperty(u, TypeId$m);
const isNil = (self2) => self2._tag === "Nil";
const isCons = (self2) => self2._tag === "Cons";
const nil = () => _Nil;
const cons = (head2, tail) => makeCons(head2, tail);
const empty$m = nil;
const of$1 = (value2) => makeCons(value2, _Nil);
const appendAll = /* @__PURE__ */ dual(2, (self2, that) => prependAll(that, self2));
const prepend = /* @__PURE__ */ dual(2, (self2, element) => cons(element, self2));
const prependAll = /* @__PURE__ */ dual(2, (self2, prefix) => {
  if (isNil(self2)) {
    return prefix;
  } else if (isNil(prefix)) {
    return self2;
  } else {
    const result = makeCons(prefix.head, self2);
    let curr = result;
    let that = prefix.tail;
    while (!isNil(that)) {
      const temp = makeCons(that.head, self2);
      curr.tail = temp;
      curr = temp;
      that = that.tail;
    }
    return result;
  }
});
const reduce$1 = /* @__PURE__ */ dual(3, (self2, zero2, f) => {
  let acc = zero2;
  let these = self2;
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
});
const reverse = (self2) => {
  let result = empty$m();
  let these = self2;
  while (!isNil(these)) {
    result = prepend(result, these.head);
    these = these.tail;
  }
  return result;
};
const Structural = /* @__PURE__ */ function() {
  function Structural2(args2) {
    if (args2) {
      Object.assign(this, args2);
    }
  }
  Structural2.prototype = StructuralPrototype;
  return Structural2;
}();
const ContextPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferContextPatch");
function variance$5(a) {
  return a;
}
const PatchProto$2 = {
  ...Structural.prototype,
  [ContextPatchTypeId]: {
    _Value: variance$5,
    _Patch: variance$5
  }
};
const EmptyProto$2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), {
  _tag: "Empty"
});
const _empty$2 = /* @__PURE__ */ Object.create(EmptyProto$2);
const empty$l = () => _empty$2;
const AndThenProto$2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), {
  _tag: "AndThen"
});
const makeAndThen$2 = (first, second) => {
  const o = Object.create(AndThenProto$2);
  o.first = first;
  o.second = second;
  return o;
};
const AddServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), {
  _tag: "AddService"
});
const makeAddService = (key, service) => {
  const o = Object.create(AddServiceProto);
  o.key = key;
  o.service = service;
  return o;
};
const RemoveServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), {
  _tag: "RemoveService"
});
const makeRemoveService = (key) => {
  const o = Object.create(RemoveServiceProto);
  o.key = key;
  return o;
};
const UpdateServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$2), {
  _tag: "UpdateService"
});
const makeUpdateService = (key, update2) => {
  const o = Object.create(UpdateServiceProto);
  o.key = key;
  o.update = update2;
  return o;
};
const diff$6 = (oldValue, newValue) => {
  const missingServices = new Map(oldValue.unsafeMap);
  let patch2 = empty$l();
  for (const [tag2, newService] of newValue.unsafeMap.entries()) {
    if (missingServices.has(tag2)) {
      const old = missingServices.get(tag2);
      missingServices.delete(tag2);
      if (!equals$1(old, newService)) {
        patch2 = combine$4(makeUpdateService(tag2, () => newService))(patch2);
      }
    } else {
      missingServices.delete(tag2);
      patch2 = combine$4(makeAddService(tag2, newService))(patch2);
    }
  }
  for (const [tag2] of missingServices.entries()) {
    patch2 = combine$4(makeRemoveService(tag2))(patch2);
  }
  return patch2;
};
const combine$4 = /* @__PURE__ */ dual(2, (self2, that) => makeAndThen$2(self2, that));
const patch$9 = /* @__PURE__ */ dual(2, (self2, context2) => {
  if (self2._tag === "Empty") {
    return context2;
  }
  let wasServiceUpdated = false;
  let patches = of$2(self2);
  const updatedContext = new Map(context2.unsafeMap);
  while (isNonEmpty$2(patches)) {
    const head2 = headNonEmpty(patches);
    const tail = tailNonEmpty(patches);
    switch (head2._tag) {
      case "Empty": {
        patches = tail;
        break;
      }
      case "AddService": {
        updatedContext.set(head2.key, head2.service);
        patches = tail;
        break;
      }
      case "AndThen": {
        patches = prepend$1(prepend$1(tail, head2.second), head2.first);
        break;
      }
      case "RemoveService": {
        updatedContext.delete(head2.key);
        patches = tail;
        break;
      }
      case "UpdateService": {
        updatedContext.set(head2.key, head2.update(updatedContext.get(head2.key)));
        wasServiceUpdated = true;
        patches = tail;
        break;
      }
    }
  }
  if (!wasServiceUpdated) {
    return makeContext(updatedContext);
  }
  const map2 = /* @__PURE__ */ new Map();
  for (const [tag2] of context2.unsafeMap) {
    if (updatedContext.has(tag2)) {
      map2.set(tag2, updatedContext.get(tag2));
      updatedContext.delete(tag2);
    }
  }
  for (const [tag2, s] of updatedContext) {
    map2.set(tag2, s);
  }
  return makeContext(map2);
});
const HashSetPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferHashSetPatch");
function variance$4(a) {
  return a;
}
const PatchProto$1 = {
  ...Structural.prototype,
  [HashSetPatchTypeId]: {
    _Value: variance$4,
    _Key: variance$4,
    _Patch: variance$4
  }
};
const EmptyProto$1 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), {
  _tag: "Empty"
});
const _empty$1 = /* @__PURE__ */ Object.create(EmptyProto$1);
const empty$k = () => _empty$1;
const AndThenProto$1 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), {
  _tag: "AndThen"
});
const makeAndThen$1 = (first, second) => {
  const o = Object.create(AndThenProto$1);
  o.first = first;
  o.second = second;
  return o;
};
const AddProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), {
  _tag: "Add"
});
const makeAdd = (value2) => {
  const o = Object.create(AddProto);
  o.value = value2;
  return o;
};
const RemoveProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto$1), {
  _tag: "Remove"
});
const makeRemove = (value2) => {
  const o = Object.create(RemoveProto);
  o.value = value2;
  return o;
};
const diff$5 = (oldValue, newValue) => {
  const [removed, patch2] = reduce$3([oldValue, empty$k()], ([set2, patch3], value2) => {
    if (has$1(value2)(set2)) {
      return [remove$2(value2)(set2), patch3];
    }
    return [set2, combine$3(makeAdd(value2))(patch3)];
  })(newValue);
  return reduce$3(patch2, (patch3, value2) => combine$3(makeRemove(value2))(patch3))(removed);
};
const combine$3 = /* @__PURE__ */ dual(2, (self2, that) => makeAndThen$1(self2, that));
const patch$8 = /* @__PURE__ */ dual(2, (self2, oldValue) => {
  if (self2._tag === "Empty") {
    return oldValue;
  }
  let set2 = oldValue;
  let patches = of$2(self2);
  while (isNonEmpty$2(patches)) {
    const head2 = headNonEmpty(patches);
    const tail = tailNonEmpty(patches);
    switch (head2._tag) {
      case "Empty": {
        patches = tail;
        break;
      }
      case "AndThen": {
        patches = prepend$1(head2.first)(prepend$1(head2.second)(tail));
        break;
      }
      case "Add": {
        set2 = add(head2.value)(set2);
        patches = tail;
        break;
      }
      case "Remove": {
        set2 = remove$2(head2.value)(set2);
        patches = tail;
      }
    }
  }
  return set2;
});
const ReadonlyArrayPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferReadonlyArrayPatch");
function variance$3(a) {
  return a;
}
const PatchProto = {
  ...Structural.prototype,
  [ReadonlyArrayPatchTypeId]: {
    _Value: variance$3,
    _Patch: variance$3
  }
};
const EmptyProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "Empty"
});
const _empty = /* @__PURE__ */ Object.create(EmptyProto);
const empty$j = () => _empty;
const AndThenProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "AndThen"
});
const makeAndThen = (first, second) => {
  const o = Object.create(AndThenProto);
  o.first = first;
  o.second = second;
  return o;
};
const AppendProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "Append"
});
const makeAppend = (values) => {
  const o = Object.create(AppendProto);
  o.values = values;
  return o;
};
const SliceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "Slice"
});
const makeSlice = (from, until) => {
  const o = Object.create(SliceProto);
  o.from = from;
  o.until = until;
  return o;
};
const UpdateProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "Update"
});
const makeUpdate = (index, patch2) => {
  const o = Object.create(UpdateProto);
  o.index = index;
  o.patch = patch2;
  return o;
};
const diff$4 = (options2) => {
  let i = 0;
  let patch2 = empty$j();
  while (i < options2.oldValue.length && i < options2.newValue.length) {
    const oldElement = options2.oldValue[i];
    const newElement = options2.newValue[i];
    const valuePatch = options2.differ.diff(oldElement, newElement);
    if (!equals$1(valuePatch, options2.differ.empty)) {
      patch2 = combine$2(patch2, makeUpdate(i, valuePatch));
    }
    i = i + 1;
  }
  if (i < options2.oldValue.length) {
    patch2 = combine$2(patch2, makeSlice(0, i));
  }
  if (i < options2.newValue.length) {
    patch2 = combine$2(patch2, makeAppend(drop$1(i)(options2.newValue)));
  }
  return patch2;
};
const combine$2 = /* @__PURE__ */ dual(2, (self2, that) => makeAndThen(self2, that));
const patch$7 = /* @__PURE__ */ dual(3, (self2, oldValue, differ2) => {
  if (self2._tag === "Empty") {
    return oldValue;
  }
  let readonlyArray2 = oldValue.slice();
  let patches = of$3(self2);
  while (isNonEmptyArray(patches)) {
    const head2 = headNonEmpty$1(patches);
    const tail = tailNonEmpty$1(patches);
    switch (head2._tag) {
      case "Empty": {
        patches = tail;
        break;
      }
      case "AndThen": {
        tail.unshift(head2.first, head2.second);
        patches = tail;
        break;
      }
      case "Append": {
        for (const value2 of head2.values) {
          readonlyArray2.push(value2);
        }
        patches = tail;
        break;
      }
      case "Slice": {
        readonlyArray2 = readonlyArray2.slice(head2.from, head2.until);
        patches = tail;
        break;
      }
      case "Update": {
        readonlyArray2[head2.index] = differ2.patch(head2.patch, readonlyArray2[head2.index]);
        patches = tail;
        break;
      }
    }
  }
  return readonlyArray2;
});
const DifferTypeId = /* @__PURE__ */ Symbol.for("effect/Differ");
const DifferProto = {
  [DifferTypeId]: {
    _P: identity,
    _V: identity
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const make$K = (params) => {
  const differ2 = Object.create(DifferProto);
  differ2.empty = params.empty;
  differ2.diff = params.diff;
  differ2.combine = params.combine;
  differ2.patch = params.patch;
  return differ2;
};
const environment = () => make$K({
  empty: empty$l(),
  combine: (first, second) => combine$4(second)(first),
  diff: (oldValue, newValue) => diff$6(oldValue, newValue),
  patch: (patch2, oldValue) => patch$9(oldValue)(patch2)
});
const hashSet = () => make$K({
  empty: empty$k(),
  combine: (first, second) => combine$3(second)(first),
  diff: (oldValue, newValue) => diff$5(oldValue, newValue),
  patch: (patch2, oldValue) => patch$8(oldValue)(patch2)
});
const readonlyArray = (differ2) => make$K({
  empty: empty$j(),
  combine: (first, second) => combine$2(first, second),
  diff: (oldValue, newValue) => diff$4({
    oldValue,
    newValue,
    differ: differ2
  }),
  patch: (patch2, oldValue) => patch$7(patch2, oldValue, differ2)
});
const update$3 = () => updateWith((_, a) => a);
const updateWith = (f) => make$K({
  empty: identity,
  combine: (first, second) => {
    if (first === identity) {
      return second;
    }
    if (second === identity) {
      return first;
    }
    return (a) => second(first(a));
  },
  diff: (oldValue, newValue) => {
    if (equals$1(oldValue, newValue)) {
      return identity;
    }
    return constant(newValue);
  },
  patch: (patch2, oldValue) => f(oldValue, patch2(oldValue))
});
const BIT_MASK = 255;
const BIT_SHIFT = 8;
const active = (patch2) => patch2 & BIT_MASK;
const enabled = (patch2) => patch2 >> BIT_SHIFT & BIT_MASK;
const make$J = (active2, enabled2) => (active2 & BIT_MASK) + ((enabled2 & active2 & BIT_MASK) << BIT_SHIFT);
const empty$i = /* @__PURE__ */ make$J(0, 0);
const enable$2 = (flag) => make$J(flag, flag);
const disable$1 = (flag) => make$J(flag, 0);
const exclude$1 = /* @__PURE__ */ dual(2, (self2, flag) => make$J(active(self2) & ~flag, enabled(self2)));
const andThen$2 = /* @__PURE__ */ dual(2, (self2, that) => self2 | that);
const invert = (n) => ~n >>> 0 & BIT_MASK;
const None$1 = 0;
const Interruption = 1 << 0;
const OpSupervision = 1 << 1;
const RuntimeMetrics = 1 << 2;
const WindDown = 1 << 4;
const CooperativeYielding = 1 << 5;
const cooperativeYielding = (self2) => isEnabled(self2, CooperativeYielding);
const enable$1 = /* @__PURE__ */ dual(2, (self2, flag) => self2 | flag);
const interruptible$3 = (self2) => interruption(self2) && !windDown(self2);
const interruption = (self2) => isEnabled(self2, Interruption);
const isEnabled = /* @__PURE__ */ dual(2, (self2, flag) => (self2 & flag) !== 0);
const make$I = (...flags) => flags.reduce((a, b) => a | b, 0);
const none$1 = /* @__PURE__ */ make$I(None$1);
const runtimeMetrics = (self2) => isEnabled(self2, RuntimeMetrics);
const windDown = (self2) => isEnabled(self2, WindDown);
const diff$3 = /* @__PURE__ */ dual(2, (self2, that) => make$J(self2 ^ that, that));
const patch$6 = /* @__PURE__ */ dual(2, (self2, patch2) => self2 & (invert(active(patch2)) | enabled(patch2)) | active(patch2) & enabled(patch2));
const differ$1 = /* @__PURE__ */ make$K({
  empty: empty$i,
  diff: (oldValue, newValue) => diff$3(oldValue, newValue),
  combine: (first, second) => andThen$2(second)(first),
  patch: (_patch, oldValue) => patch$6(oldValue, _patch)
});
const enable = enable$2;
const disable = disable$1;
const exclude = exclude$1;
const par = (self2, that) => ({
  _tag: "Par",
  left: self2,
  right: that
});
const seq = (self2, that) => ({
  _tag: "Seq",
  left: self2,
  right: that
});
const flatten$5 = (self2) => {
  let current = of$1(self2);
  let updated = empty$m();
  while (1) {
    const [parallel2, sequential2] = reduce$1(current, [parallelCollectionEmpty(), empty$m()], ([parallel3, sequential3], blockedRequest) => {
      const [par2, seq2] = step$1(blockedRequest);
      return [parallelCollectionCombine(parallel3, par2), appendAll(sequential3, seq2)];
    });
    updated = merge$5(updated, parallel2);
    if (isNil(sequential2)) {
      return reverse(updated);
    }
    current = sequential2;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
};
const step$1 = (requests) => {
  let current = requests;
  let parallel2 = parallelCollectionEmpty();
  let stack = empty$m();
  let sequential2 = empty$m();
  while (1) {
    switch (current._tag) {
      case "Empty": {
        if (isNil(stack)) {
          return [parallel2, sequential2];
        }
        current = stack.head;
        stack = stack.tail;
        break;
      }
      case "Par": {
        stack = cons(current.right, stack);
        current = current.left;
        break;
      }
      case "Seq": {
        const left2 = current.left;
        const right2 = current.right;
        switch (left2._tag) {
          case "Empty": {
            current = right2;
            break;
          }
          case "Par": {
            const l = left2.left;
            const r = left2.right;
            current = par(seq(l, right2), seq(r, right2));
            break;
          }
          case "Seq": {
            const l = left2.left;
            const r = left2.right;
            current = seq(l, seq(r, right2));
            break;
          }
          case "Single": {
            current = left2;
            sequential2 = cons(right2, sequential2);
            break;
          }
        }
        break;
      }
      case "Single": {
        parallel2 = parallelCollectionAdd(parallel2, current);
        if (isNil(stack)) {
          return [parallel2, sequential2];
        }
        current = stack.head;
        stack = stack.tail;
        break;
      }
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
};
const merge$5 = (sequential2, parallel2) => {
  if (isNil(sequential2)) {
    return of$1(parallelCollectionToSequentialCollection(parallel2));
  }
  if (parallelCollectionIsEmpty(parallel2)) {
    return sequential2;
  }
  const seqHeadKeys = sequentialCollectionKeys(sequential2.head);
  const parKeys = parallelCollectionKeys(parallel2);
  if (seqHeadKeys.length === 1 && parKeys.length === 1 && equals$1(seqHeadKeys[0], parKeys[0])) {
    return cons(sequentialCollectionCombine(sequential2.head, parallelCollectionToSequentialCollection(parallel2)), sequential2.tail);
  }
  return cons(parallelCollectionToSequentialCollection(parallel2), sequential2);
};
const RequestBlockParallelTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockParallel");
const parallelVariance = {
  /* c8 ignore next */
  _R: (_) => _
};
_f = RequestBlockParallelTypeId;
class ParallelImpl {
  constructor(map2) {
    __publicField(this, "map");
    __publicField(this, _f, parallelVariance);
    this.map = map2;
  }
}
const parallelCollectionEmpty = () => new ParallelImpl(empty$n());
const parallelCollectionAdd = (self2, blockedRequest) => new ParallelImpl(modifyAt(self2.map, blockedRequest.dataSource, (_) => orElseSome(map$g(_, append$1(blockedRequest.blockedRequest)), () => of$2(blockedRequest.blockedRequest))));
const parallelCollectionCombine = (self2, that) => new ParallelImpl(reduce$2(self2.map, that.map, (map2, value2, key) => set$6(map2, key, match$8(get$a(map2, key), {
  onNone: () => value2,
  onSome: (other) => appendAll$1(value2, other)
}))));
const parallelCollectionIsEmpty = (self2) => isEmpty$5(self2.map);
const parallelCollectionKeys = (self2) => Array.from(keys(self2.map));
const parallelCollectionToSequentialCollection = (self2) => sequentialCollectionMake(map$b(self2.map, (x) => of$2(x)));
const SequentialCollectionTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockSequential");
const sequentialVariance = {
  /* c8 ignore next */
  _R: (_) => _
};
_g = SequentialCollectionTypeId;
class SequentialImpl {
  constructor(map2) {
    __publicField(this, "map");
    __publicField(this, _g, sequentialVariance);
    this.map = map2;
  }
}
const sequentialCollectionMake = (map2) => new SequentialImpl(map2);
const sequentialCollectionCombine = (self2, that) => new SequentialImpl(reduce$2(that.map, self2.map, (map2, value2, key) => set$6(map2, key, match$8(get$a(map2, key), {
  onNone: () => empty$r(),
  onSome: (a) => appendAll$1(a, value2)
}))));
const sequentialCollectionKeys = (self2) => Array.from(keys(self2.map));
const sequentialCollectionToChunk = (self2) => Array.from(self2.map);
const OP_DIE$2 = "Die";
const OP_EMPTY$2 = "Empty";
const OP_FAIL$4 = "Fail";
const OP_INTERRUPT$2 = "Interrupt";
const OP_PARALLEL$1 = "Parallel";
const OP_SEQUENTIAL$1 = "Sequential";
const CauseSymbolKey = "effect/Cause";
const CauseTypeId = /* @__PURE__ */ Symbol.for(CauseSymbolKey);
const variance$2 = {
  /* c8 ignore next */
  _E: (_) => _
};
const proto$b = {
  [CauseTypeId]: variance$2,
  [symbol$1]() {
    return pipe(hash(CauseSymbolKey), combine$7(hash(flattenCause(this))), cached$1(this));
  },
  [symbol](that) {
    return isCause$1(that) && causeEquals(this, that);
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toJSON() {
    switch (this._tag) {
      case "Empty":
        return {
          _id: "Cause",
          _tag: this._tag
        };
      case "Die":
        return {
          _id: "Cause",
          _tag: this._tag,
          defect: toJSON(this.defect)
        };
      case "Interrupt":
        return {
          _id: "Cause",
          _tag: this._tag,
          fiberId: this.fiberId.toJSON()
        };
      case "Fail":
        return {
          _id: "Cause",
          _tag: this._tag,
          failure: toJSON(this.error)
        };
      case "Sequential":
      case "Parallel":
        return {
          _id: "Cause",
          _tag: this._tag,
          left: toJSON(this.left),
          right: toJSON(this.right)
        };
    }
  },
  toString() {
    return pretty$1(this);
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
const empty$h = /* @__PURE__ */ (() => {
  const o = /* @__PURE__ */ Object.create(proto$b);
  o._tag = OP_EMPTY$2;
  return o;
})();
const fail$c = (error) => {
  const o = Object.create(proto$b);
  o._tag = OP_FAIL$4;
  o.error = error;
  return o;
};
const die$7 = (defect) => {
  const o = Object.create(proto$b);
  o._tag = OP_DIE$2;
  o.defect = defect;
  return o;
};
const interrupt$7 = (fiberId2) => {
  const o = Object.create(proto$b);
  o._tag = OP_INTERRUPT$2;
  o.fiberId = fiberId2;
  return o;
};
const parallel$3 = (left2, right2) => {
  const o = Object.create(proto$b);
  o._tag = OP_PARALLEL$1;
  o.left = left2;
  o.right = right2;
  return o;
};
const sequential$3 = (left2, right2) => {
  const o = Object.create(proto$b);
  o._tag = OP_SEQUENTIAL$1;
  o.left = left2;
  o.right = right2;
  return o;
};
const isCause$1 = (u) => hasProperty(u, CauseTypeId);
const isEmptyType = (self2) => self2._tag === OP_EMPTY$2;
const isFailType$1 = (self2) => self2._tag === OP_FAIL$4;
const isDieType$1 = (self2) => self2._tag === OP_DIE$2;
const isEmpty$4 = (self2) => {
  if (self2._tag === OP_EMPTY$2) {
    return true;
  }
  return reduce(self2, true, (acc, cause) => {
    switch (cause._tag) {
      case OP_EMPTY$2: {
        return some(acc);
      }
      case OP_DIE$2:
      case OP_FAIL$4:
      case OP_INTERRUPT$2: {
        return some(false);
      }
      default: {
        return none$4();
      }
    }
  });
};
const isInterrupted$2 = (self2) => isSome(interruptOption(self2));
const isInterruptedOnly$1 = (self2) => reduceWithContext$1(void 0, IsInterruptedOnlyCauseReducer)(self2);
const failures = (self2) => reverse$1(reduce(self2, empty$r(), (list, cause) => cause._tag === OP_FAIL$4 ? some(pipe(list, prepend$1(cause.error))) : none$4()));
const defects = (self2) => reverse$1(reduce(self2, empty$r(), (list, cause) => cause._tag === OP_DIE$2 ? some(pipe(list, prepend$1(cause.defect))) : none$4()));
const interruptors$1 = (self2) => reduce(self2, empty$o(), (set2, cause) => cause._tag === OP_INTERRUPT$2 ? some(pipe(set2, add(cause.fiberId))) : none$4());
const failureOption = (self2) => find(self2, (cause) => cause._tag === OP_FAIL$4 ? some(cause.error) : none$4());
const failureOrCause$1 = (self2) => {
  const option = failureOption(self2);
  switch (option._tag) {
    case "None": {
      return right(self2);
    }
    case "Some": {
      return left(option.value);
    }
  }
};
const flipCauseOption$1 = (self2) => match$6(self2, {
  onEmpty: some(empty$h),
  onFail: map$g(fail$c),
  onDie: (defect) => some(die$7(defect)),
  onInterrupt: (fiberId2) => some(interrupt$7(fiberId2)),
  onSequential: mergeWith$2(sequential$3),
  onParallel: mergeWith$2(parallel$3)
});
const interruptOption = (self2) => find(self2, (cause) => cause._tag === OP_INTERRUPT$2 ? some(cause.fiberId) : none$4());
const stripFailures = (self2) => match$6(self2, {
  onEmpty: empty$h,
  onFail: () => empty$h,
  onDie: die$7,
  onInterrupt: interrupt$7,
  onSequential: sequential$3,
  onParallel: parallel$3
});
const electFailures = (self2) => match$6(self2, {
  onEmpty: empty$h,
  onFail: die$7,
  onDie: die$7,
  onInterrupt: interrupt$7,
  onSequential: sequential$3,
  onParallel: parallel$3
});
const map$a = /* @__PURE__ */ dual(2, (self2, f) => flatMap$8(self2, (e) => fail$c(f(e))));
const flatMap$8 = /* @__PURE__ */ dual(2, (self2, f) => match$6(self2, {
  onEmpty: empty$h,
  onFail: (error) => f(error),
  onDie: (defect) => die$7(defect),
  onInterrupt: (fiberId2) => interrupt$7(fiberId2),
  onSequential: (left2, right2) => sequential$3(left2, right2),
  onParallel: (left2, right2) => parallel$3(left2, right2)
}));
const causeEquals = (left2, right2) => {
  let leftStack = of$2(left2);
  let rightStack = of$2(right2);
  while (isNonEmpty$2(leftStack) && isNonEmpty$2(rightStack)) {
    const [leftParallel, leftSequential] = pipe(headNonEmpty(leftStack), reduce([empty$o(), empty$r()], ([parallel2, sequential2], cause) => {
      const [par2, seq2] = evaluateCause(cause);
      return some([pipe(parallel2, union(par2)), pipe(sequential2, appendAll$1(seq2))]);
    }));
    const [rightParallel, rightSequential] = pipe(headNonEmpty(rightStack), reduce([empty$o(), empty$r()], ([parallel2, sequential2], cause) => {
      const [par2, seq2] = evaluateCause(cause);
      return some([pipe(parallel2, union(par2)), pipe(sequential2, appendAll$1(seq2))]);
    }));
    if (!equals$1(leftParallel, rightParallel)) {
      return false;
    }
    leftStack = leftSequential;
    rightStack = rightSequential;
  }
  return true;
};
const flattenCause = (cause) => {
  return flattenCauseLoop(of$2(cause), empty$r());
};
const flattenCauseLoop = (causes, flattened) => {
  while (1) {
    const [parallel2, sequential2] = pipe(causes, reduce$7([empty$o(), empty$r()], ([parallel3, sequential3], cause) => {
      const [par2, seq2] = evaluateCause(cause);
      return [pipe(parallel3, union(par2)), pipe(sequential3, appendAll$1(seq2))];
    }));
    const updated = size$5(parallel2) > 0 ? pipe(flattened, prepend$1(parallel2)) : flattened;
    if (isEmpty$7(sequential2)) {
      return reverse$1(updated);
    }
    causes = sequential2;
    flattened = updated;
  }
  throw new Error(getBugErrorMessage("Cause.flattenCauseLoop"));
};
const find = /* @__PURE__ */ dual(2, (self2, pf) => {
  const stack = [self2];
  while (stack.length > 0) {
    const item = stack.pop();
    const option = pf(item);
    switch (option._tag) {
      case "None": {
        switch (item._tag) {
          case OP_SEQUENTIAL$1:
          case OP_PARALLEL$1: {
            stack.push(item.right);
            stack.push(item.left);
            break;
          }
        }
        break;
      }
      case "Some": {
        return option;
      }
    }
  }
  return none$4();
});
const evaluateCause = (self2) => {
  let cause = self2;
  const stack = [];
  let _parallel = empty$o();
  let _sequential = empty$r();
  while (cause !== void 0) {
    switch (cause._tag) {
      case OP_EMPTY$2: {
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause = stack.pop();
        break;
      }
      case OP_FAIL$4: {
        _parallel = add(_parallel, make$S(cause._tag, cause.error));
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause = stack.pop();
        break;
      }
      case OP_DIE$2: {
        _parallel = add(_parallel, make$S(cause._tag, cause.defect));
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause = stack.pop();
        break;
      }
      case OP_INTERRUPT$2: {
        _parallel = add(_parallel, make$S(cause._tag, cause.fiberId));
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause = stack.pop();
        break;
      }
      case OP_SEQUENTIAL$1: {
        switch (cause.left._tag) {
          case OP_EMPTY$2: {
            cause = cause.right;
            break;
          }
          case OP_SEQUENTIAL$1: {
            cause = sequential$3(cause.left.left, sequential$3(cause.left.right, cause.right));
            break;
          }
          case OP_PARALLEL$1: {
            cause = parallel$3(sequential$3(cause.left.left, cause.right), sequential$3(cause.left.right, cause.right));
            break;
          }
          default: {
            _sequential = prepend$1(_sequential, cause.right);
            cause = cause.left;
            break;
          }
        }
        break;
      }
      case OP_PARALLEL$1: {
        stack.push(cause.right);
        cause = cause.left;
        break;
      }
    }
  }
  throw new Error(getBugErrorMessage("Cause.evaluateCauseLoop"));
};
const IsInterruptedOnlyCauseReducer = {
  emptyCase: constTrue,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: constTrue,
  sequentialCase: (_, left2, right2) => left2 && right2,
  parallelCase: (_, left2, right2) => left2 && right2
};
const OP_SEQUENTIAL_CASE = "SequentialCase";
const OP_PARALLEL_CASE = "ParallelCase";
const match$6 = /* @__PURE__ */ dual(2, (self2, {
  onDie,
  onEmpty,
  onFail,
  onInterrupt: onInterrupt2,
  onParallel,
  onSequential
}) => {
  return reduceWithContext$1(self2, void 0, {
    emptyCase: () => onEmpty,
    failCase: (_, error) => onFail(error),
    dieCase: (_, defect) => onDie(defect),
    interruptCase: (_, fiberId2) => onInterrupt2(fiberId2),
    sequentialCase: (_, left2, right2) => onSequential(left2, right2),
    parallelCase: (_, left2, right2) => onParallel(left2, right2)
  });
});
const reduce = /* @__PURE__ */ dual(3, (self2, zero2, pf) => {
  let accumulator = zero2;
  let cause = self2;
  const causes = [];
  while (cause !== void 0) {
    const option = pf(accumulator, cause);
    accumulator = isSome(option) ? option.value : accumulator;
    switch (cause._tag) {
      case OP_SEQUENTIAL$1: {
        causes.push(cause.right);
        cause = cause.left;
        break;
      }
      case OP_PARALLEL$1: {
        causes.push(cause.right);
        cause = cause.left;
        break;
      }
      default: {
        cause = void 0;
        break;
      }
    }
    if (cause === void 0 && causes.length > 0) {
      cause = causes.pop();
    }
  }
  return accumulator;
});
const reduceWithContext$1 = /* @__PURE__ */ dual(3, (self2, context2, reducer) => {
  const input = [self2];
  const output = [];
  while (input.length > 0) {
    const cause = input.pop();
    switch (cause._tag) {
      case OP_EMPTY$2: {
        output.push(right(reducer.emptyCase(context2)));
        break;
      }
      case OP_FAIL$4: {
        output.push(right(reducer.failCase(context2, cause.error)));
        break;
      }
      case OP_DIE$2: {
        output.push(right(reducer.dieCase(context2, cause.defect)));
        break;
      }
      case OP_INTERRUPT$2: {
        output.push(right(reducer.interruptCase(context2, cause.fiberId)));
        break;
      }
      case OP_SEQUENTIAL$1: {
        input.push(cause.right);
        input.push(cause.left);
        output.push(left({
          _tag: OP_SEQUENTIAL_CASE
        }));
        break;
      }
      case OP_PARALLEL$1: {
        input.push(cause.right);
        input.push(cause.left);
        output.push(left({
          _tag: OP_PARALLEL_CASE
        }));
        break;
      }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either2 = output.pop();
    switch (either2._tag) {
      case "Left": {
        switch (either2.left._tag) {
          case OP_SEQUENTIAL_CASE: {
            const left2 = accumulator.pop();
            const right2 = accumulator.pop();
            const value2 = reducer.sequentialCase(context2, left2, right2);
            accumulator.push(value2);
            break;
          }
          case OP_PARALLEL_CASE: {
            const left2 = accumulator.pop();
            const right2 = accumulator.pop();
            const value2 = reducer.parallelCase(context2, left2, right2);
            accumulator.push(value2);
            break;
          }
        }
        break;
      }
      case "Right": {
        accumulator.push(either2.right);
        break;
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  return accumulator.pop();
});
const pretty$1 = (cause, options2) => {
  if (isInterruptedOnly$1(cause)) {
    return "All fibers interrupted without errors.";
  }
  return prettyErrors(cause).map(function(e) {
    if ((options2 == null ? void 0 : options2.renderErrorCause) !== true || e.cause === void 0) {
      return e.stack;
    }
    return `${e.stack} {
${renderErrorCause(e.cause, "  ")}
}`;
  }).join("\n");
};
const renderErrorCause = (cause, prefix) => {
  const lines = cause.stack.split("\n");
  let stack = `${prefix}[cause]: ${lines[0]}`;
  for (let i = 1, len = lines.length; i < len; i++) {
    stack += `
${prefix}${lines[i]}`;
  }
  if (cause.cause) {
    stack += ` {
${renderErrorCause(cause.cause, `${prefix}  `)}
${prefix}}`;
  }
  return stack;
};
class PrettyError extends globalThis.Error {
  constructor(originalError) {
    const originalErrorIsObject = typeof originalError === "object" && originalError !== null;
    const prevLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 1;
    super(prettyErrorMessage(originalError), originalErrorIsObject && "cause" in originalError && typeof originalError.cause !== "undefined" ? {
      cause: new PrettyError(originalError.cause)
    } : void 0);
    __publicField(this, "span");
    if (this.message === "") {
      this.message = "An error has occurred";
    }
    Error.stackTraceLimit = prevLimit;
    this.name = originalError instanceof Error ? originalError.name : "Error";
    if (originalErrorIsObject) {
      if (spanSymbol in originalError) {
        this.span = originalError[spanSymbol];
      }
      Object.keys(originalError).forEach((key) => {
        if (!(key in this)) {
          this[key] = originalError[key];
        }
      });
    }
    this.stack = prettyErrorStack(`${this.name}: ${this.message}`, originalError instanceof Error && originalError.stack ? originalError.stack : "", this.span);
  }
}
const prettyErrorMessage = (u) => {
  if (typeof u === "string") {
    return u;
  }
  if (typeof u === "object" && u !== null && u instanceof Error) {
    return u.message;
  }
  try {
    if (hasProperty(u, "toString") && isFunction(u["toString"]) && u["toString"] !== Object.prototype.toString && u["toString"] !== globalThis.Array.prototype.toString) {
      return u["toString"]();
    }
  } catch {
  }
  return stringifyCircular(u);
};
const locationRegex = /\((.*)\)/g;
const spanToTrace = /* @__PURE__ */ globalValue("effect/Tracer/spanToTrace", () => /* @__PURE__ */ new WeakMap());
const prettyErrorStack = (message, stack, span2) => {
  const out = [message];
  const lines = stack.startsWith(message) ? stack.slice(message.length).split("\n") : stack.split("\n");
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].includes(" at new BaseEffectError") || lines[i].includes(" at new YieldableError")) {
      i++;
      continue;
    }
    if (lines[i].includes("Generator.next")) {
      break;
    }
    if (lines[i].includes("effect_internal_function")) {
      break;
    }
    out.push(lines[i].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1").replace(/EffectPrimitive\.\w+/, "<anonymous>"));
  }
  if (span2) {
    let current = span2;
    let i = 0;
    while (current && current._tag === "Span" && i < 10) {
      const stackFn = spanToTrace.get(current);
      if (typeof stackFn === "function") {
        const stack2 = stackFn();
        if (typeof stack2 === "string") {
          const locationMatchAll = stack2.matchAll(locationRegex);
          let match2 = false;
          for (const [, location2] of locationMatchAll) {
            match2 = true;
            out.push(`    at ${current.name} (${location2})`);
          }
          if (!match2) {
            out.push(`    at ${current.name} (${stack2.replace(/^at /, "")})`);
          }
        } else {
          out.push(`    at ${current.name}`);
        }
      } else {
        out.push(`    at ${current.name}`);
      }
      current = getOrUndefined(current.parent);
      i++;
    }
  }
  return out.join("\n");
};
const spanSymbol = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
const prettyErrors = (cause) => reduceWithContext$1(cause, void 0, {
  emptyCase: () => [],
  dieCase: (_, unknownError) => {
    return [new PrettyError(unknownError)];
  },
  failCase: (_, error) => {
    return [new PrettyError(error)];
  },
  interruptCase: () => [],
  parallelCase: (_, l, r) => [...l, ...r],
  sequentialCase: (_, l, r) => [...l, ...r]
});
const OP_STATE_PENDING = "Pending";
const OP_STATE_DONE$1 = "Done";
const DeferredSymbolKey = "effect/Deferred";
const DeferredTypeId$1 = /* @__PURE__ */ Symbol.for(DeferredSymbolKey);
const deferredVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
const pending = (joiners) => {
  return {
    _tag: OP_STATE_PENDING,
    joiners
  };
};
const done$8 = (effect2) => {
  return {
    _tag: OP_STATE_DONE$1,
    effect: effect2
  };
};
class SingleShotGen2 {
  constructor(self2) {
    __publicField(this, "self");
    __publicField(this, "called", false);
    this.self = self2;
  }
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(this.self);
  }
}
const blocked = (blockedRequests, _continue2) => {
  const effect2 = new EffectPrimitive("Blocked");
  effect2.effect_instruction_i0 = blockedRequests;
  effect2.effect_instruction_i1 = _continue2;
  return effect2;
};
const runRequestBlock = (blockedRequests) => {
  const effect2 = new EffectPrimitive("RunBlocked");
  effect2.effect_instruction_i0 = blockedRequests;
  return effect2;
};
const EffectTypeId$1 = /* @__PURE__ */ Symbol.for("effect/Effect");
class RevertFlags {
  constructor(patch2, op) {
    __publicField(this, "patch");
    __publicField(this, "op");
    __publicField(this, "_op", OP_REVERT_FLAGS);
    this.patch = patch2;
    this.op = op;
  }
}
class EffectPrimitive {
  constructor(_op) {
    __publicField(this, "_op");
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, "trace");
    __publicField(this, _h, effectVariance);
    this._op = _op;
  }
  [(_h = EffectTypeId$1, symbol)](that) {
    return this === that;
  }
  [symbol$1]() {
    return cached$1(this, random(this));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      effect_instruction_i0: toJSON(this.effect_instruction_i0),
      effect_instruction_i1: toJSON(this.effect_instruction_i1),
      effect_instruction_i2: toJSON(this.effect_instruction_i2)
    };
  }
  toString() {
    return format$3(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
}
class EffectPrimitiveFailure {
  constructor(_op) {
    __publicField(this, "_op");
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, "trace");
    __publicField(this, _i, effectVariance);
    this._op = _op;
    this._tag = _op;
  }
  [(_i = EffectTypeId$1, symbol)](that) {
    return exitIsExit(that) && that._op === "Failure" && // @ts-expect-error
    equals$1(this.effect_instruction_i0, that.effect_instruction_i0);
  }
  [symbol$1]() {
    return pipe(
      // @ts-expect-error
      string(this._tag),
      // @ts-expect-error
      combine$7(hash(this.effect_instruction_i0)),
      cached$1(this)
    );
  }
  get cause() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: this.cause.toJSON()
    };
  }
  toString() {
    return format$3(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
}
class EffectPrimitiveSuccess {
  constructor(_op) {
    __publicField(this, "_op");
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, "trace");
    __publicField(this, _j, effectVariance);
    this._op = _op;
    this._tag = _op;
  }
  [(_j = EffectTypeId$1, symbol)](that) {
    return exitIsExit(that) && that._op === "Success" && // @ts-expect-error
    equals$1(this.effect_instruction_i0, that.effect_instruction_i0);
  }
  [symbol$1]() {
    return pipe(
      // @ts-expect-error
      string(this._tag),
      // @ts-expect-error
      combine$7(hash(this.effect_instruction_i0)),
      cached$1(this)
    );
  }
  get value() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: toJSON(this.value)
    };
  }
  toString() {
    return format$3(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
}
const isEffect$1 = (u) => hasProperty(u, EffectTypeId$1);
const withFiberRuntime$1 = (withRuntime) => {
  const effect2 = new EffectPrimitive(OP_WITH_RUNTIME);
  effect2.effect_instruction_i0 = withRuntime;
  return effect2;
};
const acquireUseRelease$3 = /* @__PURE__ */ dual(3, (acquire, use, release) => uninterruptibleMask$2((restore) => flatMap$7(acquire, (a) => flatMap$7(exit$1(suspend$7(() => restore(use(a)))), (exit2) => {
  return suspend$7(() => release(a, exit2)).pipe(matchCauseEffect$2({
    onFailure: (cause) => {
      switch (exit2._tag) {
        case OP_FAILURE:
          return failCause$9(sequential$3(exit2.effect_instruction_i0, cause));
        case OP_SUCCESS:
          return failCause$9(cause);
      }
    },
    onSuccess: () => exit2
  }));
}))));
const as$1 = /* @__PURE__ */ dual(2, (self2, value2) => flatMap$7(self2, () => succeed$a(value2)));
const asVoid$1 = (self2) => as$1(self2, void 0);
const custom = function() {
  const wrapper = new EffectPrimitive(OP_COMMIT);
  switch (arguments.length) {
    case 2: {
      wrapper.effect_instruction_i0 = arguments[0];
      wrapper.commit = arguments[1];
      break;
    }
    case 3: {
      wrapper.effect_instruction_i0 = arguments[0];
      wrapper.effect_instruction_i1 = arguments[1];
      wrapper.commit = arguments[2];
      break;
    }
    case 4: {
      wrapper.effect_instruction_i0 = arguments[0];
      wrapper.effect_instruction_i1 = arguments[1];
      wrapper.effect_instruction_i2 = arguments[2];
      wrapper.commit = arguments[3];
      break;
    }
    default: {
      throw new Error(getBugErrorMessage("you're not supposed to end up here"));
    }
  }
  return wrapper;
};
const unsafeAsync = (register, blockingOn = none$2) => {
  const effect2 = new EffectPrimitive(OP_ASYNC);
  let cancelerRef = void 0;
  effect2.effect_instruction_i0 = (resume2) => {
    cancelerRef = register(resume2);
  };
  effect2.effect_instruction_i1 = blockingOn;
  return onInterrupt$1(effect2, (_) => isEffect$1(cancelerRef) ? cancelerRef : void_$4);
};
const asyncInterrupt = (register, blockingOn = none$2) => suspend$7(() => unsafeAsync(register, blockingOn));
const async_ = (resume2, blockingOn = none$2) => {
  return custom(resume2, function() {
    let backingResume = void 0;
    let pendingEffect = void 0;
    function proxyResume(effect3) {
      if (backingResume) {
        backingResume(effect3);
      } else if (pendingEffect === void 0) {
        pendingEffect = effect3;
      }
    }
    const effect2 = new EffectPrimitive(OP_ASYNC);
    effect2.effect_instruction_i0 = (resume3) => {
      backingResume = resume3;
      if (pendingEffect) {
        resume3(pendingEffect);
      }
    };
    effect2.effect_instruction_i1 = blockingOn;
    let cancelerRef = void 0;
    let controllerRef = void 0;
    if (this.effect_instruction_i0.length !== 1) {
      controllerRef = new AbortController();
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume, controllerRef.signal));
    } else {
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume));
    }
    return cancelerRef || controllerRef ? onInterrupt$1(effect2, (_) => {
      if (controllerRef) {
        controllerRef.abort();
      }
      return cancelerRef ?? void_$4;
    }) : effect2;
  });
};
const catchAllCause$3 = /* @__PURE__ */ dual(2, (self2, f) => {
  const effect2 = new EffectPrimitive(OP_ON_FAILURE$1);
  effect2.effect_instruction_i0 = self2;
  effect2.effect_instruction_i1 = f;
  return effect2;
});
const catchAll$4 = /* @__PURE__ */ dual(2, (self2, f) => matchEffect$1(self2, {
  onFailure: f,
  onSuccess: succeed$a
}));
const catchIf$1 = /* @__PURE__ */ dual(3, (self2, predicate, f) => catchAllCause$3(self2, (cause) => {
  const either2 = failureOrCause$1(cause);
  switch (either2._tag) {
    case "Left":
      return predicate(either2.left) ? f(either2.left) : failCause$9(cause);
    case "Right":
      return failCause$9(either2.right);
  }
}));
const originalSymbol = /* @__PURE__ */ Symbol.for("effect/OriginalAnnotation");
const capture = (obj, span2) => {
  if (isSome(span2)) {
    return new Proxy(obj, {
      has(target, p) {
        return p === spanSymbol || p === originalSymbol || p in target;
      },
      get(target, p) {
        if (p === spanSymbol) {
          return span2.value;
        }
        if (p === originalSymbol) {
          return obj;
        }
        return target[p];
      }
    });
  }
  return obj;
};
const die$6 = (defect) => isObject(defect) && !(spanSymbol in defect) ? withFiberRuntime$1((fiber) => failCause$9(die$7(capture(defect, currentSpanFromFiber(fiber))))) : failCause$9(die$7(defect));
const dieMessage$1 = (message) => failCauseSync$1(() => die$7(new RuntimeException(message)));
const either$2 = (self2) => matchEffect$1(self2, {
  onFailure: (e) => succeed$a(left(e)),
  onSuccess: (a) => succeed$a(right(a))
});
const exit$1 = (self2) => matchCause$2(self2, {
  onFailure: exitFailCause$1,
  onSuccess: exitSucceed$1
});
const fail$b = (error) => isObject(error) && !(spanSymbol in error) ? withFiberRuntime$1((fiber) => failCause$9(fail$c(capture(error, currentSpanFromFiber(fiber))))) : failCause$9(fail$c(error));
const failSync$1 = (evaluate2) => flatMap$7(sync$5(evaluate2), fail$b);
const failCause$9 = (cause) => {
  const effect2 = new EffectPrimitiveFailure(OP_FAILURE);
  effect2.effect_instruction_i0 = cause;
  return effect2;
};
const failCauseSync$1 = (evaluate2) => flatMap$7(sync$5(evaluate2), failCause$9);
const fiberId = /* @__PURE__ */ withFiberRuntime$1((state) => succeed$a(state.id()));
const fiberIdWith$1 = (f) => withFiberRuntime$1((state) => f(state.id()));
const flatMap$7 = /* @__PURE__ */ dual(2, (self2, f) => {
  const effect2 = new EffectPrimitive(OP_ON_SUCCESS$1);
  effect2.effect_instruction_i0 = self2;
  effect2.effect_instruction_i1 = f;
  return effect2;
});
const andThen$1 = /* @__PURE__ */ dual(2, (self2, f) => flatMap$7(self2, (a) => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect$1(b)) {
    return b;
  } else if (isPromiseLike(b)) {
    return unsafeAsync((resume2) => {
      b.then((a2) => resume2(succeed$a(a2)), (e) => resume2(fail$b(new UnknownException(e, "An unknown error occurred in Effect.andThen"))));
    });
  }
  return succeed$a(b);
}));
const step = (self2) => {
  const effect2 = new EffectPrimitive("OnStep");
  effect2.effect_instruction_i0 = self2;
  return effect2;
};
const flatten$4 = (self2) => flatMap$7(self2, identity);
const matchCause$2 = /* @__PURE__ */ dual(2, (self2, options2) => matchCauseEffect$2(self2, {
  onFailure: (cause) => succeed$a(options2.onFailure(cause)),
  onSuccess: (a) => succeed$a(options2.onSuccess(a))
}));
const matchCauseEffect$2 = /* @__PURE__ */ dual(2, (self2, options2) => {
  const effect2 = new EffectPrimitive(OP_ON_SUCCESS_AND_FAILURE);
  effect2.effect_instruction_i0 = self2;
  effect2.effect_instruction_i1 = options2.onFailure;
  effect2.effect_instruction_i2 = options2.onSuccess;
  return effect2;
});
const matchEffect$1 = /* @__PURE__ */ dual(2, (self2, options2) => matchCauseEffect$2(self2, {
  onFailure: (cause) => {
    const defects$1 = defects(cause);
    if (defects$1.length > 0) {
      return failCause$9(electFailures(cause));
    }
    const failures$1 = failures(cause);
    if (failures$1.length > 0) {
      return options2.onFailure(unsafeHead(failures$1));
    }
    return failCause$9(cause);
  },
  onSuccess: options2.onSuccess
}));
const forEachSequential = /* @__PURE__ */ dual(2, (self2, f) => suspend$7(() => {
  const arr = fromIterable$8(self2);
  const ret = allocate(arr.length);
  let i = 0;
  return as$1(whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: (b) => {
      ret[i++] = b;
    }
  }), ret);
}));
const forEachSequentialDiscard = /* @__PURE__ */ dual(2, (self2, f) => suspend$7(() => {
  const arr = fromIterable$8(self2);
  let i = 0;
  return whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: () => {
      i++;
    }
  });
}));
const interrupt$6 = /* @__PURE__ */ flatMap$7(fiberId, (fiberId2) => interruptWith(fiberId2));
const interruptWith = (fiberId2) => failCause$9(interrupt$7(fiberId2));
const interruptible$2 = (self2) => {
  const effect2 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect2.effect_instruction_i0 = enable(Interruption);
  effect2.effect_instruction_i1 = () => self2;
  return effect2;
};
const intoDeferred$1 = /* @__PURE__ */ dual(2, (self2, deferred) => uninterruptibleMask$2((restore) => flatMap$7(exit$1(restore(self2)), (exit2) => deferredDone(deferred, exit2))));
const map$9 = /* @__PURE__ */ dual(2, (self2, f) => flatMap$7(self2, (a) => sync$5(() => f(a))));
const mapBoth$3 = /* @__PURE__ */ dual(2, (self2, options2) => matchEffect$1(self2, {
  onFailure: (e) => failSync$1(() => options2.onFailure(e)),
  onSuccess: (a) => sync$5(() => options2.onSuccess(a))
}));
const mapError$5 = /* @__PURE__ */ dual(2, (self2, f) => matchCauseEffect$2(self2, {
  onFailure: (cause) => {
    const either2 = failureOrCause$1(cause);
    switch (either2._tag) {
      case "Left": {
        return failSync$1(() => f(either2.left));
      }
      case "Right": {
        return failCause$9(either2.right);
      }
    }
  },
  onSuccess: succeed$a
}));
const onError$1 = /* @__PURE__ */ dual(2, (self2, cleanup) => onExit$2(self2, (exit2) => exitIsSuccess(exit2) ? void_$4 : cleanup(exit2.effect_instruction_i0)));
const onExit$2 = /* @__PURE__ */ dual(2, (self2, cleanup) => uninterruptibleMask$2((restore) => matchCauseEffect$2(restore(self2), {
  onFailure: (cause1) => {
    const result = exitFailCause$1(cause1);
    return matchCauseEffect$2(cleanup(result), {
      onFailure: (cause2) => exitFailCause$1(sequential$3(cause1, cause2)),
      onSuccess: () => result
    });
  },
  onSuccess: (success) => {
    const result = exitSucceed$1(success);
    return zipRight$4(cleanup(result), result);
  }
})));
const onInterrupt$1 = /* @__PURE__ */ dual(2, (self2, cleanup) => onExit$2(self2, exitMatch({
  onFailure: (cause) => isInterruptedOnly$1(cause) ? asVoid$1(cleanup(interruptors$1(cause))) : void_$4,
  onSuccess: () => void_$4
})));
const orDie$1 = (self2) => orDieWith(self2, identity);
const orDieWith = /* @__PURE__ */ dual(2, (self2, f) => matchEffect$1(self2, {
  onFailure: (e) => die$6(f(e)),
  onSuccess: succeed$a
}));
const runtimeFlags = /* @__PURE__ */ withFiberRuntime$1((_, status) => succeed$a(status.runtimeFlags));
const succeed$a = (value2) => {
  const effect2 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect2.effect_instruction_i0 = value2;
  return effect2;
};
const suspend$7 = (evaluate2) => {
  const effect2 = new EffectPrimitive(OP_COMMIT);
  effect2.commit = evaluate2;
  return effect2;
};
const sync$5 = (thunk) => {
  const effect2 = new EffectPrimitive(OP_SYNC$1);
  effect2.effect_instruction_i0 = thunk;
  return effect2;
};
const tap$3 = /* @__PURE__ */ dual((args2) => args2.length === 3 || args2.length === 2 && !(isObject(args2[1]) && "onlyEffect" in args2[1]), (self2, f) => flatMap$7(self2, (a) => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect$1(b)) {
    return as$1(b, a);
  } else if (isPromiseLike(b)) {
    return unsafeAsync((resume2) => {
      b.then((_) => resume2(succeed$a(a)), (e) => resume2(fail$b(new UnknownException(e, "An unknown error occurred in Effect.tap"))));
    });
  }
  return succeed$a(a);
}));
const transplant = (f) => withFiberRuntime$1((state) => {
  const scopeOverride = state.getFiberRef(currentForkScopeOverride);
  const scope2 = pipe(scopeOverride, getOrElse(() => state.scope()));
  return f(fiberRefLocally(currentForkScopeOverride, some(scope2)));
});
const uninterruptible$1 = (self2) => {
  const effect2 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect2.effect_instruction_i0 = disable(Interruption);
  effect2.effect_instruction_i1 = () => self2;
  return effect2;
};
const uninterruptibleMask$2 = (f) => custom(f, function() {
  const effect2 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect2.effect_instruction_i0 = disable(Interruption);
  effect2.effect_instruction_i1 = (oldFlags) => interruption(oldFlags) ? internalCall(() => this.effect_instruction_i0(interruptible$2)) : internalCall(() => this.effect_instruction_i0(uninterruptible$1));
  return effect2;
});
const void_$4 = /* @__PURE__ */ succeed$a(void 0);
const updateRuntimeFlags = (patch2) => {
  const effect2 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect2.effect_instruction_i0 = patch2;
  effect2.effect_instruction_i1 = void 0;
  return effect2;
};
const whenEffect = /* @__PURE__ */ dual(2, (self2, condition) => flatMap$7(condition, (b) => {
  if (b) {
    return pipe(self2, map$9(some));
  }
  return succeed$a(none$4());
}));
const whileLoop = (options2) => {
  const effect2 = new EffectPrimitive(OP_WHILE);
  effect2.effect_instruction_i0 = options2.while;
  effect2.effect_instruction_i1 = options2.body;
  effect2.effect_instruction_i2 = options2.step;
  return effect2;
};
const fromIterator = (iterator) => suspend$7(() => {
  const effect2 = new EffectPrimitive(OP_ITERATOR);
  effect2.effect_instruction_i0 = iterator();
  return effect2;
});
const gen$1 = function() {
  const f = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
  return fromIterator(() => f(pipe));
};
const fnUntraced$1 = (body, ...pipeables) => Object.defineProperty(pipeables.length === 0 ? function(...args2) {
  return fromIterator(() => body.apply(this, args2));
} : function(...args2) {
  let effect2 = fromIterator(() => body.apply(this, args2));
  for (const x of pipeables) {
    effect2 = x(effect2, ...args2);
  }
  return effect2;
}, "length", {
  value: body.length,
  configurable: true
});
const withRuntimeFlags = /* @__PURE__ */ dual(2, (self2, update2) => {
  const effect2 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect2.effect_instruction_i0 = update2;
  effect2.effect_instruction_i1 = () => self2;
  return effect2;
});
const yieldNow$3 = (options2) => {
  const effect2 = new EffectPrimitive(OP_YIELD$1);
  return typeof (options2 == null ? void 0 : options2.priority) !== "undefined" ? withSchedulingPriority(effect2, options2.priority) : effect2;
};
const zip$3 = /* @__PURE__ */ dual(2, (self2, that) => flatMap$7(self2, (a) => map$9(that, (b) => [a, b])));
const zipLeft$1 = /* @__PURE__ */ dual(2, (self2, that) => flatMap$7(self2, (a) => as$1(that, a)));
const zipRight$4 = /* @__PURE__ */ dual(2, (self2, that) => flatMap$7(self2, () => that));
const zipWith$2 = /* @__PURE__ */ dual(3, (self2, that, f) => flatMap$7(self2, (a) => map$9(that, (b) => f(a, b))));
const never = /* @__PURE__ */ asyncInterrupt(() => {
  const interval = setInterval(() => {
  }, 2 ** 31 - 1);
  return sync$5(() => clearInterval(interval));
});
const interruptFiber = (self2) => flatMap$7(fiberId, (fiberId2) => pipe(self2, interruptAsFiber(fiberId2)));
const interruptAsFiber = /* @__PURE__ */ dual(2, (self2, fiberId2) => flatMap$7(self2.interruptAsFork(fiberId2), () => self2.await));
const logLevelAll = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelFatal = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 5e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelError = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 4e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelWarning = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 3e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelInfo = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 2e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelDebug = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 1e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelTrace = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const logLevelNone = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const FiberRefSymbolKey = "effect/FiberRef";
const FiberRefTypeId = /* @__PURE__ */ Symbol.for(FiberRefSymbolKey);
const fiberRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
const fiberRefGet = (self2) => withFiberRuntime$1((fiber) => exitSucceed$1(fiber.getFiberRef(self2)));
const fiberRefGetWith = /* @__PURE__ */ dual(2, (self2, f) => flatMap$7(fiberRefGet(self2), f));
const fiberRefSet = /* @__PURE__ */ dual(2, (self2, value2) => fiberRefModify(self2, () => [void 0, value2]));
const fiberRefModify = /* @__PURE__ */ dual(2, (self2, f) => withFiberRuntime$1((state) => {
  const [b, a] = f(state.getFiberRef(self2));
  state.setFiberRef(self2, a);
  return succeed$a(b);
}));
const fiberRefLocally = /* @__PURE__ */ dual(3, (use, self2, value2) => acquireUseRelease$3(zipLeft$1(fiberRefGet(self2), fiberRefSet(self2, value2)), () => use, (oldValue) => fiberRefSet(self2, oldValue)));
const fiberRefLocallyWith = /* @__PURE__ */ dual(3, (use, self2, f) => fiberRefGetWith(self2, (a) => fiberRefLocally(use, self2, f(a))));
const fiberRefUnsafeMake = (initial, options2) => fiberRefUnsafeMakePatch(initial, {
  differ: update$3(),
  fork: (options2 == null ? void 0 : options2.fork) ?? identity,
  join: options2 == null ? void 0 : options2.join
});
const fiberRefUnsafeMakeHashSet = (initial) => {
  const differ2 = hashSet();
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ2,
    fork: differ2.empty
  });
};
const fiberRefUnsafeMakeReadonlyArray = (initial) => {
  const differ2 = readonlyArray(update$3());
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ2,
    fork: differ2.empty
  });
};
const fiberRefUnsafeMakeContext = (initial) => {
  const differ2 = environment();
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ2,
    fork: differ2.empty
  });
};
const fiberRefUnsafeMakePatch = (initial, options2) => {
  const _fiberRef = {
    ...CommitPrototype,
    [FiberRefTypeId]: fiberRefVariance,
    initial,
    commit() {
      return fiberRefGet(this);
    },
    diff: (oldValue, newValue) => options2.differ.diff(oldValue, newValue),
    combine: (first, second) => options2.differ.combine(first, second),
    patch: (patch2) => (oldValue) => options2.differ.patch(patch2, oldValue),
    fork: options2.fork,
    join: options2.join ?? ((_, n) => n)
  };
  return _fiberRef;
};
const fiberRefUnsafeMakeRuntimeFlags = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ: differ$1,
  fork: differ$1.empty
});
const currentContext$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(empty$s()));
const currentSchedulingPriority$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
const currentMaxOpsBeforeYield = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
const currentLogAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(empty$n()));
const currentLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
const currentLogSpan = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(empty$m()));
const withSchedulingPriority = /* @__PURE__ */ dual(2, (self2, scheduler) => fiberRefLocally(self2, currentSchedulingPriority$1, scheduler));
const currentConcurrency = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentConcurrency"), () => fiberRefUnsafeMake("unbounded"));
const currentRequestBatching = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestBatching"), () => fiberRefUnsafeMake(true));
const currentUnhandledErrorLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(some(logLevelDebug)));
const withUnhandledErrorLogLevel$1 = /* @__PURE__ */ dual(2, (self2, level) => fiberRefLocally(self2, currentUnhandledErrorLogLevel, level));
const currentMetricLabels = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeReadonlyArray(empty$u()));
const currentForkScopeOverride = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(none$4(), {
  fork: () => none$4(),
  join: (parent, _) => parent
}));
const currentInterruptedCause = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(empty$h, {
  fork: () => empty$h,
  join: (parent, _) => parent
}));
const currentTracerEnabled$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerEnabled"), () => fiberRefUnsafeMake(true));
const currentTracerTimingEnabled$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerTiming"), () => fiberRefUnsafeMake(true));
const currentTracerSpanAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpanAnnotations"), () => fiberRefUnsafeMake(empty$n()));
const currentTracerSpanLinks = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpanLinks"), () => fiberRefUnsafeMake(empty$r()));
const ScopeTypeId = /* @__PURE__ */ Symbol.for("effect/Scope");
const CloseableScopeTypeId = /* @__PURE__ */ Symbol.for("effect/CloseableScope");
const scopeAddFinalizer = (self2, finalizer) => self2.addFinalizer(() => asVoid$1(finalizer));
const scopeAddFinalizerExit = (self2, finalizer) => self2.addFinalizer(finalizer);
const scopeClose = (self2, exit2) => self2.close(exit2);
const scopeFork = (self2, strategy) => self2.fork(strategy);
const causeSquash = (self2) => {
  return causeSquashWith(identity)(self2);
};
const causeSquashWith = /* @__PURE__ */ dual(2, (self2, f) => {
  const option = pipe(self2, failureOption, map$g(f));
  switch (option._tag) {
    case "None": {
      return pipe(defects(self2), head$2, match$8({
        onNone: () => {
          const interrupts = fromIterable$8(interruptors$1(self2)).flatMap((fiberId2) => fromIterable$8(ids(fiberId2)).map((id2) => `#${id2}`));
          return new InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0);
        },
        onSome: identity
      }));
    }
    case "Some": {
      return option.value;
    }
  }
});
const YieldableError = /* @__PURE__ */ function() {
  class YieldableError2 extends globalThis.Error {
    commit() {
      return fail$b(this);
    }
    toJSON() {
      const obj = {
        ...this
      };
      if (this.message) obj.message = this.message;
      if (this.cause) obj.cause = this.cause;
      return obj;
    }
    [NodeInspectSymbol]() {
      if (this.toString !== globalThis.Error.prototype.toString) {
        return this.stack ? `${this.toString()}
${this.stack.split("\n").slice(1).join("\n")}` : this.toString();
      } else if ("Bun" in globalThis) {
        return pretty$1(fail$c(this), {
          renderErrorCause: true
        });
      }
      return this;
    }
  }
  Object.assign(YieldableError2.prototype, StructuralCommitPrototype);
  return YieldableError2;
}();
const makeException = (proto2, tag2) => {
  class Base2 extends YieldableError {
    constructor() {
      super(...arguments);
      __publicField(this, "_tag", tag2);
    }
  }
  Object.assign(Base2.prototype, proto2);
  Base2.prototype.name = tag2;
  return Base2;
};
const RuntimeExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/RuntimeException");
const RuntimeException = /* @__PURE__ */ makeException({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException");
const InterruptedExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/InterruptedException");
const InterruptedException = /* @__PURE__ */ makeException({
  [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}, "InterruptedException");
const isInterruptedException = (u) => hasProperty(u, InterruptedExceptionTypeId);
const IllegalArgumentExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/IllegalArgument");
const IllegalArgumentException$1 = /* @__PURE__ */ makeException({
  [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}, "IllegalArgumentException");
const NoSuchElementExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/NoSuchElement");
const NoSuchElementException$1 = /* @__PURE__ */ makeException({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException");
const TimeoutExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/Timeout");
const TimeoutException = /* @__PURE__ */ makeException({
  [TimeoutExceptionTypeId]: TimeoutExceptionTypeId
}, "TimeoutException");
const timeoutExceptionFromDuration = (duration) => new TimeoutException(`Operation timed out after '${format$2(duration)}'`);
const UnknownExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/UnknownException");
const UnknownException = /* @__PURE__ */ function() {
  class UnknownException2 extends YieldableError {
    constructor(cause, message) {
      super(message ?? "An unknown error occurred", {
        cause
      });
      __publicField(this, "_tag", "UnknownException");
      __publicField(this, "error");
      this.error = cause;
    }
  }
  Object.assign(UnknownException2.prototype, {
    [UnknownExceptionTypeId]: UnknownExceptionTypeId,
    name: "UnknownException"
  });
  return UnknownException2;
}();
const exitIsExit = (u) => isEffect$1(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure");
const exitIsFailure = (self2) => self2._tag === "Failure";
const exitIsSuccess = (self2) => self2._tag === "Success";
const exitIsInterrupted = (self2) => {
  switch (self2._tag) {
    case OP_FAILURE:
      return isInterrupted$2(self2.effect_instruction_i0);
    case OP_SUCCESS:
      return false;
  }
};
const exitAs = /* @__PURE__ */ dual(2, (self2, value2) => {
  switch (self2._tag) {
    case OP_FAILURE: {
      return exitFailCause$1(self2.effect_instruction_i0);
    }
    case OP_SUCCESS: {
      return exitSucceed$1(value2);
    }
  }
});
const exitAsVoid = (self2) => exitAs(self2, void 0);
const exitCollectAll = (exits, options2) => exitCollectAllInternal(exits, (options2 == null ? void 0 : options2.parallel) ? parallel$3 : sequential$3);
const exitDie$1 = (defect) => exitFailCause$1(die$7(defect));
const exitFail = (error) => exitFailCause$1(fail$c(error));
const exitFailCause$1 = (cause) => {
  const effect2 = new EffectPrimitiveFailure(OP_FAILURE);
  effect2.effect_instruction_i0 = cause;
  return effect2;
};
const exitInterrupt$1 = (fiberId2) => exitFailCause$1(interrupt$7(fiberId2));
const exitMap = /* @__PURE__ */ dual(2, (self2, f) => {
  switch (self2._tag) {
    case OP_FAILURE:
      return exitFailCause$1(self2.effect_instruction_i0);
    case OP_SUCCESS:
      return exitSucceed$1(f(self2.effect_instruction_i0));
  }
});
const exitMapBoth = /* @__PURE__ */ dual(2, (self2, {
  onFailure,
  onSuccess
}) => {
  switch (self2._tag) {
    case OP_FAILURE:
      return exitFailCause$1(pipe(self2.effect_instruction_i0, map$a(onFailure)));
    case OP_SUCCESS:
      return exitSucceed$1(onSuccess(self2.effect_instruction_i0));
  }
});
const exitMatch = /* @__PURE__ */ dual(2, (self2, {
  onFailure,
  onSuccess
}) => {
  switch (self2._tag) {
    case OP_FAILURE:
      return onFailure(self2.effect_instruction_i0);
    case OP_SUCCESS:
      return onSuccess(self2.effect_instruction_i0);
  }
});
const exitMatchEffect = /* @__PURE__ */ dual(2, (self2, {
  onFailure,
  onSuccess
}) => {
  switch (self2._tag) {
    case OP_FAILURE:
      return onFailure(self2.effect_instruction_i0);
    case OP_SUCCESS:
      return onSuccess(self2.effect_instruction_i0);
  }
});
const exitSucceed$1 = (value2) => {
  const effect2 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect2.effect_instruction_i0 = value2;
  return effect2;
};
const exitVoid$1 = /* @__PURE__ */ exitSucceed$1(void 0);
const exitZip = /* @__PURE__ */ dual(2, (self2, that) => exitZipWith(self2, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: sequential$3
}));
const exitZipRight = /* @__PURE__ */ dual(2, (self2, that) => exitZipWith(self2, that, {
  onSuccess: (_, a2) => a2,
  onFailure: sequential$3
}));
const exitZipWith = /* @__PURE__ */ dual(3, (self2, that, {
  onFailure,
  onSuccess
}) => {
  switch (self2._tag) {
    case OP_FAILURE: {
      switch (that._tag) {
        case OP_SUCCESS:
          return exitFailCause$1(self2.effect_instruction_i0);
        case OP_FAILURE: {
          return exitFailCause$1(onFailure(self2.effect_instruction_i0, that.effect_instruction_i0));
        }
      }
    }
    case OP_SUCCESS: {
      switch (that._tag) {
        case OP_SUCCESS:
          return exitSucceed$1(onSuccess(self2.effect_instruction_i0, that.effect_instruction_i0));
        case OP_FAILURE:
          return exitFailCause$1(that.effect_instruction_i0);
      }
    }
  }
});
const exitCollectAllInternal = (exits, combineCauses) => {
  const list = fromIterable$7(exits);
  if (!isNonEmpty$2(list)) {
    return none$4();
  }
  return pipe(tailNonEmpty(list), reduce$7(pipe(headNonEmpty(list), exitMap(of$2)), (accumulator, current) => pipe(accumulator, exitZipWith(current, {
    onSuccess: (list2, value2) => pipe(list2, prepend$1(value2)),
    onFailure: combineCauses
  }))), exitMap(reverse$1), exitMap((chunk2) => toReadonlyArray(chunk2)), some);
};
const deferredUnsafeMake = (fiberId2) => {
  const _deferred = {
    ...CommitPrototype,
    [DeferredTypeId$1]: deferredVariance,
    state: make$N(pending([])),
    commit() {
      return deferredAwait(this);
    },
    blockingOn: fiberId2
  };
  return _deferred;
};
const deferredMake = () => flatMap$7(fiberId, (id2) => deferredMakeAs(id2));
const deferredMakeAs = (fiberId2) => sync$5(() => deferredUnsafeMake(fiberId2));
const deferredAwait = (self2) => asyncInterrupt((resume2) => {
  const state = get$b(self2.state);
  switch (state._tag) {
    case OP_STATE_DONE$1: {
      return resume2(state.effect);
    }
    case OP_STATE_PENDING: {
      state.joiners.push(resume2);
      return deferredInterruptJoiner(self2, resume2);
    }
  }
}, self2.blockingOn);
const deferredComplete = /* @__PURE__ */ dual(2, (self2, effect2) => intoDeferred$1(effect2, self2));
const deferredCompleteWith = /* @__PURE__ */ dual(2, (self2, effect2) => sync$5(() => {
  const state = get$b(self2.state);
  switch (state._tag) {
    case OP_STATE_DONE$1: {
      return false;
    }
    case OP_STATE_PENDING: {
      set$7(self2.state, done$8(effect2));
      for (let i = 0, len = state.joiners.length; i < len; i++) {
        state.joiners[i](effect2);
      }
      return true;
    }
  }
}));
const deferredDone = /* @__PURE__ */ dual(2, (self2, exit2) => deferredCompleteWith(self2, exit2));
const deferredFail = /* @__PURE__ */ dual(2, (self2, error) => deferredCompleteWith(self2, fail$b(error)));
const deferredFailCause = /* @__PURE__ */ dual(2, (self2, cause) => deferredCompleteWith(self2, failCause$9(cause)));
const deferredInterrupt = (self2) => flatMap$7(fiberId, (fiberId2) => deferredCompleteWith(self2, interruptWith(fiberId2)));
const deferredInterruptWith = /* @__PURE__ */ dual(2, (self2, fiberId2) => deferredCompleteWith(self2, interruptWith(fiberId2)));
const deferredIsDone = (self2) => sync$5(() => get$b(self2.state)._tag === OP_STATE_DONE$1);
const deferredSucceed = /* @__PURE__ */ dual(2, (self2, value2) => deferredCompleteWith(self2, succeed$a(value2)));
const deferredUnsafeDone = (self2, effect2) => {
  const state = get$b(self2.state);
  if (state._tag === OP_STATE_PENDING) {
    set$7(self2.state, done$8(effect2));
    for (let i = 0, len = state.joiners.length; i < len; i++) {
      state.joiners[i](effect2);
    }
  }
};
const deferredInterruptJoiner = (self2, joiner) => sync$5(() => {
  const state = get$b(self2.state);
  if (state._tag === OP_STATE_PENDING) {
    const index = state.joiners.indexOf(joiner);
    if (index >= 0) {
      state.joiners.splice(index, 1);
    }
  }
});
const constContext = /* @__PURE__ */ withFiberRuntime$1((fiber) => exitSucceed$1(fiber.currentContext));
const context$2 = () => constContext;
const contextWithEffect = (f) => flatMap$7(context$2(), f);
const provideContext$4 = /* @__PURE__ */ dual(2, (self2, context2) => fiberRefLocally(currentContext$1, context2)(self2));
const provideSomeContext = /* @__PURE__ */ dual(2, (self2, context2) => fiberRefLocallyWith(currentContext$1, (parent) => merge$6(parent, context2))(self2));
const mapInputContext$1 = /* @__PURE__ */ dual(2, (self2, f) => contextWithEffect((context2) => provideContext$4(self2, f(context2))));
const currentSpanFromFiber = (fiber) => {
  const span2 = fiber.currentSpan;
  return span2 !== void 0 && span2._tag === "Span" ? some(span2) : none$4();
};
const NoopSpanProto = {
  _tag: "Span",
  spanId: "noop",
  traceId: "noop",
  sampled: false,
  status: {
    _tag: "Ended",
    startTime: /* @__PURE__ */ BigInt(0),
    endTime: /* @__PURE__ */ BigInt(0),
    exit: exitVoid$1
  },
  attributes: /* @__PURE__ */ new Map(),
  links: [],
  kind: "internal",
  attribute() {
  },
  event() {
  },
  end() {
  },
  addLinks() {
  }
};
const noopSpan = (options2) => Object.assign(Object.create(NoopSpanProto), options2);
const DeferredTypeId = DeferredTypeId$1;
const make$H = deferredMake;
const _await$2 = deferredAwait;
const complete$1 = deferredComplete;
const done$7 = deferredDone;
const fail$a = deferredFail;
const failCause$8 = deferredFailCause;
const interrupt$5 = deferredInterrupt;
const isDone$5 = deferredIsDone;
const succeed$9 = deferredSucceed;
const unsafeMake$8 = deferredUnsafeMake;
const unsafeDone = deferredUnsafeDone;
const isExit$1 = exitIsExit;
const isFailure = exitIsFailure;
const isSuccess$1 = exitIsSuccess;
const isInterrupted$1 = exitIsInterrupted;
const all$2 = exitCollectAll;
const die$5 = exitDie$1;
const fail$9 = exitFail;
const failCause$7 = exitFailCause$1;
const interrupt$4 = exitInterrupt$1;
const map$8 = exitMap;
const mapBoth$2 = exitMapBoth;
const match$5 = exitMatch;
const succeed$8 = exitSucceed$1;
const void_$3 = exitVoid$1;
const zip$2 = exitZip;
const zipRight$3 = exitZipRight;
const TypeId$l = /* @__PURE__ */ Symbol.for("effect/MutableHashMap");
const MutableHashMapProto = {
  [TypeId$l]: TypeId$l,
  [Symbol.iterator]() {
    return new MutableHashMapIterator(this);
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
class MutableHashMapIterator {
  constructor(self2) {
    __publicField(this, "self");
    __publicField(this, "referentialIterator");
    __publicField(this, "bucketIterator");
    this.self = self2;
    this.referentialIterator = self2.referential[Symbol.iterator]();
  }
  next() {
    if (this.bucketIterator !== void 0) {
      return this.bucketIterator.next();
    }
    const result = this.referentialIterator.next();
    if (result.done) {
      this.bucketIterator = new BucketIterator(this.self.buckets.values());
      return this.next();
    }
    return result;
  }
  [Symbol.iterator]() {
    return new MutableHashMapIterator(this.self);
  }
}
class BucketIterator {
  constructor(backing) {
    __publicField(this, "backing");
    __publicField(this, "currentBucket");
    this.backing = backing;
  }
  next() {
    if (this.currentBucket === void 0) {
      const result2 = this.backing.next();
      if (result2.done) {
        return result2;
      }
      this.currentBucket = result2.value[Symbol.iterator]();
    }
    const result = this.currentBucket.next();
    if (result.done) {
      this.currentBucket = void 0;
      return this.next();
    }
    return result;
  }
}
const empty$g = () => {
  const self2 = Object.create(MutableHashMapProto);
  self2.referential = /* @__PURE__ */ new Map();
  self2.buckets = /* @__PURE__ */ new Map();
  self2.bucketsSize = 0;
  return self2;
};
const get$9 = /* @__PURE__ */ dual(2, (self2, key) => {
  if (isEqual(key) === false) {
    return self2.referential.has(key) ? some(self2.referential.get(key)) : none$4();
  }
  const hash2 = key[symbol$1]();
  const bucket = self2.buckets.get(hash2);
  if (bucket === void 0) {
    return none$4();
  }
  return getFromBucket(self2, bucket, key);
});
const getFromBucket = (self2, bucket, key, remove2 = false) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[symbol](bucket[i][0])) {
      const value2 = bucket[i][1];
      if (remove2) {
        bucket.splice(i, 1);
        self2.bucketsSize--;
      }
      return some(value2);
    }
  }
  return none$4();
};
const has = /* @__PURE__ */ dual(2, (self2, key) => isSome(get$9(self2, key)));
const set$5 = /* @__PURE__ */ dual(3, (self2, key, value2) => {
  if (isEqual(key) === false) {
    self2.referential.set(key, value2);
    return self2;
  }
  const hash2 = key[symbol$1]();
  const bucket = self2.buckets.get(hash2);
  if (bucket === void 0) {
    self2.buckets.set(hash2, [[key, value2]]);
    self2.bucketsSize++;
    return self2;
  }
  removeFromBucket(self2, bucket, key);
  bucket.push([key, value2]);
  self2.bucketsSize++;
  return self2;
});
const removeFromBucket = (self2, bucket, key) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[symbol](bucket[i][0])) {
      bucket.splice(i, 1);
      self2.bucketsSize--;
      return;
    }
  }
};
const TypeId$k = /* @__PURE__ */ Symbol.for("effect/MutableList");
const MutableListProto = {
  [TypeId$k]: TypeId$k,
  [Symbol.iterator]() {
    let done2 = false;
    let head2 = this.head;
    return {
      next() {
        if (done2) {
          return this.return();
        }
        if (head2 == null) {
          done2 = true;
          return this.return();
        }
        const value2 = head2.value;
        head2 = head2.next;
        return {
          done: done2,
          value: value2
        };
      },
      return(value2) {
        if (!done2) {
          done2 = true;
        }
        return {
          done: true,
          value: value2
        };
      }
    };
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableList",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeNode = (value2) => ({
  value: value2,
  removed: false,
  prev: void 0,
  next: void 0
});
const empty$f = () => {
  const list = Object.create(MutableListProto);
  list.head = void 0;
  list.tail = void 0;
  list._length = 0;
  return list;
};
const isEmpty$3 = (self2) => length$1(self2) === 0;
const length$1 = (self2) => self2._length;
const append = /* @__PURE__ */ dual(2, (self2, value2) => {
  const node = makeNode(value2);
  if (self2.head === void 0) {
    self2.head = node;
  }
  if (self2.tail === void 0) {
    self2.tail = node;
  } else {
    self2.tail.next = node;
    node.prev = self2.tail;
    self2.tail = node;
  }
  self2._length += 1;
  return self2;
});
const shift = (self2) => {
  const head2 = self2.head;
  if (head2 !== void 0) {
    remove$1(self2, head2);
    return head2.value;
  }
  return void 0;
};
const remove$1 = (self2, node) => {
  if (node.removed) {
    return;
  }
  node.removed = true;
  if (node.prev !== void 0 && node.next !== void 0) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  } else if (node.prev !== void 0) {
    self2.tail = node.prev;
    node.prev.next = void 0;
  } else if (node.next !== void 0) {
    self2.head = node.next;
    node.next.prev = void 0;
  } else {
    self2.tail = void 0;
    self2.head = void 0;
  }
  if (self2._length > 0) {
    self2._length -= 1;
  }
};
const TypeId$j = /* @__PURE__ */ Symbol.for("effect/MutableQueue");
const EmptyMutableQueue = /* @__PURE__ */ Symbol.for("effect/mutable/MutableQueue/Empty");
const MutableQueueProto = {
  [TypeId$j]: TypeId$j,
  [Symbol.iterator]() {
    return Array.from(this.queue)[Symbol.iterator]();
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableQueue",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const make$G = (capacity2) => {
  const queue = Object.create(MutableQueueProto);
  queue.queue = empty$f();
  queue.capacity = capacity2;
  return queue;
};
const bounded$2 = (capacity2) => make$G(capacity2);
const unbounded$6 = () => make$G(void 0);
const length = (self2) => length$1(self2.queue);
const isEmpty$2 = (self2) => isEmpty$3(self2.queue);
const capacity = (self2) => self2.capacity === void 0 ? Infinity : self2.capacity;
const offer$4 = /* @__PURE__ */ dual(2, (self2, value2) => {
  const queueLength = length$1(self2.queue);
  if (self2.capacity !== void 0 && queueLength === self2.capacity) {
    return false;
  }
  append(value2)(self2.queue);
  return true;
});
const offerAll$2 = /* @__PURE__ */ dual(2, (self2, values) => {
  const iterator = values[Symbol.iterator]();
  let next;
  let remainder = empty$r();
  let offering = true;
  while (offering && (next = iterator.next()) && !next.done) {
    offering = offer$4(next.value)(self2);
  }
  while (next != null && !next.done) {
    remainder = prepend$1(next.value)(remainder);
    next = iterator.next();
  }
  return reverse$1(remainder);
});
const poll = /* @__PURE__ */ dual(2, (self2, def) => {
  if (isEmpty$3(self2.queue)) {
    return def;
  }
  return shift(self2.queue);
});
const pollUpTo = /* @__PURE__ */ dual(2, (self2, n) => {
  let result = empty$r();
  let count = 0;
  while (count < n) {
    const element = poll(EmptyMutableQueue)(self2);
    if (element === EmptyMutableQueue) {
      break;
    }
    result = prepend$1(element)(result);
    count += 1;
  }
  return reverse$1(result);
});
const ClockSymbolKey = "effect/Clock";
const ClockTypeId = /* @__PURE__ */ Symbol.for(ClockSymbolKey);
const clockTag = /* @__PURE__ */ GenericTag("effect/Clock");
const MAX_TIMER_MILLIS = 2 ** 31 - 1;
const globalClockScheduler = {
  unsafeSchedule(task, duration) {
    const millis2 = toMillis(duration);
    if (millis2 > MAX_TIMER_MILLIS) {
      return constFalse;
    }
    let completed = false;
    const handle = setTimeout(() => {
      completed = true;
      task();
    }, millis2);
    return () => {
      clearTimeout(handle);
      return !completed;
    };
  }
};
const performanceNowNanos = /* @__PURE__ */ function() {
  const bigint1e62 = /* @__PURE__ */ BigInt(1e6);
  if (typeof performance === "undefined") {
    return () => BigInt(Date.now()) * bigint1e62;
  }
  let origin;
  return () => {
    if (origin === void 0) {
      origin = BigInt(Date.now()) * bigint1e62 - BigInt(Math.round(performance.now() * 1e6));
    }
    return origin + BigInt(Math.round(performance.now() * 1e6));
  };
}();
const processOrPerformanceNow = /* @__PURE__ */ function() {
  const processHrtime = typeof process === "object" && "hrtime" in process && typeof process.hrtime.bigint === "function" ? process.hrtime : void 0;
  if (!processHrtime) {
    return performanceNowNanos;
  }
  const origin = /* @__PURE__ */ performanceNowNanos() - /* @__PURE__ */ processHrtime.bigint();
  return () => origin + processHrtime.bigint();
}();
_k = ClockTypeId;
class ClockImpl {
  constructor() {
    __publicField(this, _k, ClockTypeId);
    __publicField(this, "currentTimeMillis", /* @__PURE__ */ sync$5(() => this.unsafeCurrentTimeMillis()));
    __publicField(this, "currentTimeNanos", /* @__PURE__ */ sync$5(() => this.unsafeCurrentTimeNanos()));
  }
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return processOrPerformanceNow();
  }
  scheduler() {
    return succeed$a(globalClockScheduler);
  }
  sleep(duration) {
    return async_((resume2) => {
      const canceler = globalClockScheduler.unsafeSchedule(() => resume2(void_$4), duration);
      return asVoid$1(sync$5(canceler));
    });
  }
}
const make$F = () => new ClockImpl();
const OP_AND = "And";
const OP_OR = "Or";
const OP_INVALID_DATA = "InvalidData";
const OP_MISSING_DATA = "MissingData";
const OP_SOURCE_UNAVAILABLE = "SourceUnavailable";
const OP_UNSUPPORTED = "Unsupported";
const ConfigErrorSymbolKey = "effect/ConfigError";
const ConfigErrorTypeId = /* @__PURE__ */ Symbol.for(ConfigErrorSymbolKey);
const proto$a = {
  _tag: "ConfigError",
  [ConfigErrorTypeId]: ConfigErrorTypeId
};
const And = (self2, that) => {
  const error = Object.create(proto$a);
  error._op = OP_AND;
  error.left = self2;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} and ${this.right}`;
    }
  });
  Object.defineProperty(error, "message", {
    enumerable: false,
    get() {
      return this.toString();
    }
  });
  return error;
};
const Or = (self2, that) => {
  const error = Object.create(proto$a);
  error._op = OP_OR;
  error.left = self2;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} or ${this.right}`;
    }
  });
  Object.defineProperty(error, "message", {
    enumerable: false,
    get() {
      return this.toString();
    }
  });
  return error;
};
const InvalidData = (path, message, options2 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto$a);
  error._op = OP_INVALID_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join$3(options2.pathDelim));
      return `(Invalid data at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
const MissingData = (path, message, options2 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto$a);
  error._op = OP_MISSING_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join$3(options2.pathDelim));
      return `(Missing data at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
const SourceUnavailable = (path, message, cause, options2 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto$a);
  error._op = OP_SOURCE_UNAVAILABLE;
  error.path = path;
  error.message = message;
  error.cause = cause;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join$3(options2.pathDelim));
      return `(Source unavailable at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
const Unsupported = (path, message, options2 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto$a);
  error._op = OP_UNSUPPORTED;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join$3(options2.pathDelim));
      return `(Unsupported operation at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
const prefixed = /* @__PURE__ */ dual(2, (self2, prefix) => {
  switch (self2._op) {
    case OP_AND: {
      return And(prefixed(self2.left, prefix), prefixed(self2.right, prefix));
    }
    case OP_OR: {
      return Or(prefixed(self2.left, prefix), prefixed(self2.right, prefix));
    }
    case OP_INVALID_DATA: {
      return InvalidData([...prefix, ...self2.path], self2.message);
    }
    case OP_MISSING_DATA: {
      return MissingData([...prefix, ...self2.path], self2.message);
    }
    case OP_SOURCE_UNAVAILABLE: {
      return SourceUnavailable([...prefix, ...self2.path], self2.message, self2.cause);
    }
    case OP_UNSUPPORTED: {
      return Unsupported([...prefix, ...self2.path], self2.message);
    }
  }
});
const empty$e = {
  _tag: "Empty"
};
const patch$5 = /* @__PURE__ */ dual(2, (path, patch2) => {
  let input = of$1(patch2);
  let output = path;
  while (isCons(input)) {
    const patch3 = input.head;
    switch (patch3._tag) {
      case "Empty": {
        input = input.tail;
        break;
      }
      case "AndThen": {
        input = cons(patch3.first, cons(patch3.second, input.tail));
        break;
      }
      case "MapName": {
        output = map$e(output, patch3.f);
        input = input.tail;
        break;
      }
      case "Nested": {
        output = prepend$2(output, patch3.name);
        input = input.tail;
        break;
      }
      case "Unnested": {
        const containsName = pipe(head$3(output), contains(patch3.name));
        if (containsName) {
          output = tailNonEmpty$1(output);
          input = input.tail;
        } else {
          return left(MissingData(output, `Expected ${patch3.name} to be in path in ConfigProvider#unnested`));
        }
        break;
      }
    }
  }
  return right(output);
});
const OP_CONSTANT = "Constant";
const OP_FAIL$3 = "Fail";
const OP_FALLBACK = "Fallback";
const OP_DESCRIBED = "Described";
const OP_LAZY = "Lazy";
const OP_MAP_OR_FAIL = "MapOrFail";
const OP_NESTED = "Nested";
const OP_PRIMITIVE = "Primitive";
const OP_SEQUENCE = "Sequence";
const OP_HASHMAP = "HashMap";
const OP_ZIP_WITH$1 = "ZipWith";
var define_process_env_default$2 = {};
const concat$1 = (l, r) => [...l, ...r];
const ConfigProviderSymbolKey = "effect/ConfigProvider";
const ConfigProviderTypeId = /* @__PURE__ */ Symbol.for(ConfigProviderSymbolKey);
const configProviderTag = /* @__PURE__ */ GenericTag("effect/ConfigProvider");
const FlatConfigProviderSymbolKey = "effect/ConfigProviderFlat";
const FlatConfigProviderTypeId = /* @__PURE__ */ Symbol.for(FlatConfigProviderSymbolKey);
const make$E = (options2) => ({
  [ConfigProviderTypeId]: ConfigProviderTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options2
});
const makeFlat = (options2) => ({
  [FlatConfigProviderTypeId]: FlatConfigProviderTypeId,
  patch: options2.patch,
  load: (path, config, split = true) => options2.load(path, config, split),
  enumerateChildren: options2.enumerateChildren
});
const fromFlat = (flat) => make$E({
  load: (config) => flatMap$7(fromFlatLoop(flat, empty$u(), config, false), (chunk2) => match$8(head$3(chunk2), {
    onNone: () => fail$b(MissingData(empty$u(), `Expected a single value having structure: ${config}`)),
    onSome: succeed$a
  })),
  flattened: flat
});
const fromEnv = (options2) => {
  const {
    pathDelim,
    seqDelim
  } = Object.assign({}, {
    pathDelim: "_",
    seqDelim: ","
  }, options2);
  const makePathString = (path) => pipe(path, join$3(pathDelim));
  const unmakePathString = (pathString) => pathString.split(pathDelim);
  const getEnv = () => typeof process !== "undefined" && "env" in process && typeof define_process_env_default$2 === "object" ? define_process_env_default$2 : {};
  const load = (path, primitive, split = true) => {
    const pathString = makePathString(path);
    const current = getEnv();
    const valueOpt = pathString in current ? some(current[pathString]) : none$4();
    return pipe(valueOpt, mapError$5(() => MissingData(path, `Expected ${pathString} to exist in the process context`)), flatMap$7((value2) => parsePrimitive(value2, path, primitive, seqDelim, split)));
  };
  const enumerateChildren = (path) => sync$5(() => {
    const current = getEnv();
    const keys2 = Object.keys(current);
    const keyPaths = keys2.map((value2) => unmakePathString(value2.toUpperCase()));
    const filteredKeyPaths = keyPaths.filter((keyPath) => {
      for (let i = 0; i < path.length; i++) {
        const pathComponent = pipe(path, unsafeGet$5(i));
        const currentElement = keyPath[i];
        if (currentElement === void 0 || pathComponent !== currentElement) {
          return false;
        }
      }
      return true;
    }).flatMap((keyPath) => keyPath.slice(path.length, path.length + 1));
    return fromIterable$4(filteredKeyPaths);
  });
  return fromFlat(makeFlat({
    load,
    enumerateChildren,
    patch: empty$e
  }));
};
const extend$2 = (leftDef, rightDef, left2, right2) => {
  const leftPad = unfold$1(left2.length, (index) => index >= right2.length ? none$4() : some([leftDef(index), index + 1]));
  const rightPad = unfold$1(right2.length, (index) => index >= left2.length ? none$4() : some([rightDef(index), index + 1]));
  const leftExtension = concat$1(left2, leftPad);
  const rightExtension = concat$1(right2, rightPad);
  return [leftExtension, rightExtension];
};
const appendConfigPath = (path, config) => {
  let op = config;
  if (op._tag === "Nested") {
    const out = path.slice();
    while (op._tag === "Nested") {
      out.push(op.name);
      op = op.config;
    }
    return out;
  }
  return path;
};
const fromFlatLoop = (flat, prefix, config, split) => {
  const op = config;
  switch (op._tag) {
    case OP_CONSTANT: {
      return succeed$a(of$3(op.value));
    }
    case OP_DESCRIBED: {
      return suspend$7(() => fromFlatLoop(flat, prefix, op.config, split));
    }
    case OP_FAIL$3: {
      return fail$b(MissingData(prefix, op.message));
    }
    case OP_FALLBACK: {
      return pipe(suspend$7(() => fromFlatLoop(flat, prefix, op.first, split)), catchAll$4((error1) => {
        if (op.condition(error1)) {
          return pipe(fromFlatLoop(flat, prefix, op.second, split), catchAll$4((error2) => fail$b(Or(error1, error2))));
        }
        return fail$b(error1);
      }));
    }
    case OP_LAZY: {
      return suspend$7(() => fromFlatLoop(flat, prefix, op.config(), split));
    }
    case OP_MAP_OR_FAIL: {
      return suspend$7(() => pipe(fromFlatLoop(flat, prefix, op.original, split), flatMap$7(forEachSequential((a) => pipe(op.mapOrFail(a), mapError$5(prefixed(appendConfigPath(prefix, op.original))))))));
    }
    case OP_NESTED: {
      return suspend$7(() => fromFlatLoop(flat, concat$1(prefix, of$3(op.name)), op.config, split));
    }
    case OP_PRIMITIVE: {
      return pipe(patch$5(prefix, flat.patch), flatMap$7((prefix2) => pipe(flat.load(prefix2, op, split), flatMap$7((values) => {
        if (values.length === 0) {
          const name = pipe(last(prefix2), getOrElse(() => "<n/a>"));
          return fail$b(MissingData([], `Expected ${op.description} with name ${name}`));
        }
        return succeed$a(values);
      }))));
    }
    case OP_SEQUENCE: {
      return pipe(patch$5(prefix, flat.patch), flatMap$7((patchedPrefix) => pipe(flat.enumerateChildren(patchedPrefix), flatMap$7(indicesFrom), flatMap$7((indices) => {
        if (indices.length === 0) {
          return suspend$7(() => map$9(fromFlatLoop(flat, prefix, op.config, true), of$3));
        }
        return pipe(forEachSequential(indices, (index) => fromFlatLoop(flat, append$2(prefix, `[${index}]`), op.config, true)), map$9((chunkChunk) => {
          const flattened = flatten$7(chunkChunk);
          if (flattened.length === 0) {
            return of$3(empty$u());
          }
          return of$3(flattened);
        }));
      }))));
    }
    case OP_HASHMAP: {
      return suspend$7(() => pipe(patch$5(prefix, flat.patch), flatMap$7((prefix2) => pipe(flat.enumerateChildren(prefix2), flatMap$7((keys2) => {
        return pipe(keys2, forEachSequential((key) => fromFlatLoop(flat, concat$1(prefix2, of$3(key)), op.valueConfig, split)), map$9((matrix) => {
          if (matrix.length === 0) {
            return of$3(empty$n());
          }
          return pipe(transpose(matrix), map$e((values) => fromIterable$3(zip$4(fromIterable$8(keys2), values))));
        }));
      })))));
    }
    case OP_ZIP_WITH$1: {
      return suspend$7(() => pipe(fromFlatLoop(flat, prefix, op.left, split), either$2, flatMap$7((left2) => pipe(fromFlatLoop(flat, prefix, op.right, split), either$2, flatMap$7((right$12) => {
        if (isLeft(left2) && isLeft(right$12)) {
          return fail$b(And(left2.left, right$12.left));
        }
        if (isLeft(left2) && isRight(right$12)) {
          return fail$b(left2.left);
        }
        if (isRight(left2) && isLeft(right$12)) {
          return fail$b(right$12.left);
        }
        if (isRight(left2) && isRight(right$12)) {
          const path = pipe(prefix, join$3("."));
          const fail2 = fromFlatLoopFail(prefix, path);
          const [lefts, rights] = extend$2(fail2, fail2, pipe(left2.right, map$e(right)), pipe(right$12.right, map$e(right)));
          return pipe(lefts, zip$4(rights), forEachSequential(([left22, right2]) => pipe(zip$3(left22, right2), map$9(([left3, right3]) => op.zip(left3, right3)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
      })))));
    }
  }
};
const fromFlatLoopFail = (prefix, path) => (index) => left(MissingData(prefix, `The element at index ${index} in a sequence at path "${path}" was missing`));
const splitPathString = (text, delim) => {
  const split = text.split(new RegExp(`\\s*${escape(delim)}\\s*`));
  return split;
};
const parsePrimitive = (text, path, primitive, delimiter, split) => {
  if (!split) {
    return pipe(primitive.parse(text), mapBoth$3({
      onFailure: prefixed(path),
      onSuccess: of$3
    }));
  }
  return pipe(splitPathString(text, delimiter), forEachSequential((char) => primitive.parse(char.trim())), mapError$5(prefixed(path)));
};
const transpose = (array2) => {
  return Object.keys(array2[0]).map((column) => array2.map((row) => row[column]));
};
const indicesFrom = (quotedIndices) => pipe(forEachSequential(quotedIndices, parseQuotedIndex), mapBoth$3({
  onFailure: () => empty$u(),
  onSuccess: sort(Order$1)
}), either$2, map$9(merge$8));
const QUOTED_INDEX_REGEX = /^(\[(\d+)\])$/;
const parseQuotedIndex = (str) => {
  const match2 = str.match(QUOTED_INDEX_REGEX);
  if (match2 !== null) {
    const matchedIndex = match2[2];
    return pipe(matchedIndex !== void 0 && matchedIndex.length > 0 ? some(matchedIndex) : none$4(), flatMap$a(parseInteger));
  }
  return none$4();
};
const parseInteger = (str) => {
  const parsedIndex = Number.parseInt(str);
  return Number.isNaN(parsedIndex) ? none$4() : some(parsedIndex);
};
const TypeId$i = /* @__PURE__ */ Symbol.for("effect/Console");
const consoleTag = /* @__PURE__ */ GenericTag("effect/Console");
const defaultConsole = {
  [TypeId$i]: TypeId$i,
  assert(condition, ...args2) {
    return sync$5(() => {
      console.assert(condition, ...args2);
    });
  },
  clear: /* @__PURE__ */ sync$5(() => {
    console.clear();
  }),
  count(label) {
    return sync$5(() => {
      console.count(label);
    });
  },
  countReset(label) {
    return sync$5(() => {
      console.countReset(label);
    });
  },
  debug(...args2) {
    return sync$5(() => {
      console.debug(...args2);
    });
  },
  dir(item, options2) {
    return sync$5(() => {
      console.dir(item, options2);
    });
  },
  dirxml(...args2) {
    return sync$5(() => {
      console.dirxml(...args2);
    });
  },
  error(...args2) {
    return sync$5(() => {
      console.error(...args2);
    });
  },
  group(options2) {
    return (options2 == null ? void 0 : options2.collapsed) ? sync$5(() => console.groupCollapsed(options2 == null ? void 0 : options2.label)) : sync$5(() => console.group(options2 == null ? void 0 : options2.label));
  },
  groupEnd: /* @__PURE__ */ sync$5(() => {
    console.groupEnd();
  }),
  info(...args2) {
    return sync$5(() => {
      console.info(...args2);
    });
  },
  log(...args2) {
    return sync$5(() => {
      console.log(...args2);
    });
  },
  table(tabularData, properties) {
    return sync$5(() => {
      console.table(tabularData, properties);
    });
  },
  time(label) {
    return sync$5(() => console.time(label));
  },
  timeEnd(label) {
    return sync$5(() => console.timeEnd(label));
  },
  timeLog(label, ...args2) {
    return sync$5(() => {
      console.timeLog(label, ...args2);
    });
  },
  trace(...args2) {
    return sync$5(() => {
      console.trace(...args2);
    });
  },
  warn(...args2) {
    return sync$5(() => {
      console.warn(...args2);
    });
  },
  unsafe: console
};
const RandomSymbolKey = "effect/Random";
const RandomTypeId = /* @__PURE__ */ Symbol.for(RandomSymbolKey);
const randomTag = /* @__PURE__ */ GenericTag("effect/Random");
_l = RandomTypeId;
class RandomImpl {
  constructor(seed) {
    __publicField(this, "seed");
    __publicField(this, _l, RandomTypeId);
    __publicField(this, "PRNG");
    this.seed = seed;
    this.PRNG = new PCGRandom(seed);
  }
  get next() {
    return sync$5(() => this.PRNG.number());
  }
  get nextBoolean() {
    return map$9(this.next, (n) => n > 0.5);
  }
  get nextInt() {
    return sync$5(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(min2, max) {
    return map$9(this.next, (n) => (max - min2) * n + min2);
  }
  nextIntBetween(min2, max) {
    return sync$5(() => this.PRNG.integer(max - min2) + min2);
  }
  shuffle(elements) {
    return shuffleWith(elements, (n) => this.nextIntBetween(0, n));
  }
}
const shuffleWith = (elements, nextIntBounded) => {
  return suspend$7(() => pipe(sync$5(() => Array.from(elements)), flatMap$7((buffer) => {
    const numbers = [];
    for (let i = buffer.length; i >= 2; i = i - 1) {
      numbers.push(i);
    }
    return pipe(numbers, forEachSequentialDiscard((n) => pipe(nextIntBounded(n), map$9((k) => swap$1(buffer, n - 1, k)))), as$1(fromIterable$7(buffer)));
  })));
};
const swap$1 = (buffer, index1, index2) => {
  const tmp = buffer[index1];
  buffer[index1] = buffer[index2];
  buffer[index2] = tmp;
  return buffer;
};
const make$D = (seed) => new RandomImpl(hash(seed));
const TracerTypeId = /* @__PURE__ */ Symbol.for("effect/Tracer");
const make$C = (options2) => ({
  [TracerTypeId]: TracerTypeId,
  ...options2
});
const tracerTag = /* @__PURE__ */ GenericTag("effect/Tracer");
const spanTag = /* @__PURE__ */ GenericTag("effect/ParentSpan");
const randomHexString = /* @__PURE__ */ function() {
  const characters = "abcdef0123456789";
  const charactersLength = characters.length;
  return function(length2) {
    let result = "";
    for (let i = 0; i < length2; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}();
class NativeSpan {
  constructor(name, parent, context2, links, startTime, kind) {
    __publicField(this, "name");
    __publicField(this, "parent");
    __publicField(this, "context");
    __publicField(this, "startTime");
    __publicField(this, "kind");
    __publicField(this, "_tag", "Span");
    __publicField(this, "spanId");
    __publicField(this, "traceId", "native");
    __publicField(this, "sampled", true);
    __publicField(this, "status");
    __publicField(this, "attributes");
    __publicField(this, "events", []);
    __publicField(this, "links");
    this.name = name;
    this.parent = parent;
    this.context = context2;
    this.startTime = startTime;
    this.kind = kind;
    this.status = {
      _tag: "Started",
      startTime
    };
    this.attributes = /* @__PURE__ */ new Map();
    this.traceId = parent._tag === "Some" ? parent.value.traceId : randomHexString(32);
    this.spanId = randomHexString(16);
    this.links = Array.from(links);
  }
  end(endTime, exit2) {
    this.status = {
      _tag: "Ended",
      endTime,
      exit: exit2,
      startTime: this.status.startTime
    };
  }
  attribute(key, value2) {
    this.attributes.set(key, value2);
  }
  event(name, startTime, attributes) {
    this.events.push([name, startTime, attributes ?? {}]);
  }
  addLinks(links) {
    this.links.push(...links);
  }
}
const nativeTracer = /* @__PURE__ */ make$C({
  span: (name, parent, context2, links, startTime, kind) => new NativeSpan(name, parent, context2, links, startTime, kind),
  context: (f) => f()
});
const addSpanStackTrace = (options2) => {
  if ((options2 == null ? void 0 : options2.captureStackTrace) === false) {
    return options2;
  } else if ((options2 == null ? void 0 : options2.captureStackTrace) !== void 0 && typeof options2.captureStackTrace !== "boolean") {
    return options2;
  }
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 3;
  const traceError = new Error();
  Error.stackTraceLimit = limit;
  let cache = false;
  return {
    ...options2,
    captureStackTrace: () => {
      if (cache !== false) {
        return cache;
      }
      if (traceError.stack !== void 0) {
        const stack = traceError.stack.split("\n");
        if (stack[3] !== void 0) {
          cache = stack[3].trim();
          return cache;
        }
      }
    }
  };
};
const DisablePropagation = /* @__PURE__ */ Reference()("effect/Tracer/DisablePropagation", {
  defaultValue: constFalse
});
const liveServices = /* @__PURE__ */ pipe(/* @__PURE__ */ empty$s(), /* @__PURE__ */ add$2(clockTag, /* @__PURE__ */ make$F()), /* @__PURE__ */ add$2(consoleTag, defaultConsole), /* @__PURE__ */ add$2(randomTag, /* @__PURE__ */ make$D(/* @__PURE__ */ Math.random())), /* @__PURE__ */ add$2(configProviderTag, /* @__PURE__ */ fromEnv()), /* @__PURE__ */ add$2(tracerTag, nativeTracer));
const currentServices = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/DefaultServices/currentServices"), () => fiberRefUnsafeMakeContext(liveServices));
const sleep$3 = (duration) => {
  const decodedDuration = decode$3(duration);
  return clockWith$2((clock2) => clock2.sleep(decodedDuration));
};
const defaultServicesWith = (f) => withFiberRuntime$1((fiber) => f(fiber.currentDefaultServices));
const clockWith$2 = (f) => defaultServicesWith((services) => f(services.unsafeMap.get(clockTag.key)));
const currentTimeMillis$1 = /* @__PURE__ */ clockWith$2((clock2) => clock2.currentTimeMillis);
const tracerWith$2 = (f) => defaultServicesWith((services) => f(services.unsafeMap.get(tracerTag.key)));
const sleep$2 = sleep$3;
const currentTimeMillis = currentTimeMillis$1;
const clockWith$1 = clockWith$2;
const Clock = clockTag;
function unsafeMake$7(fiberRefLocals) {
  return new FiberRefsImpl(fiberRefLocals);
}
function empty$d() {
  return unsafeMake$7(/* @__PURE__ */ new Map());
}
const FiberRefsSym = /* @__PURE__ */ Symbol.for("effect/FiberRefs");
_m = FiberRefsSym;
class FiberRefsImpl {
  constructor(locals) {
    __publicField(this, "locals");
    __publicField(this, _m, FiberRefsSym);
    this.locals = locals;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const findAncestor = (_ref, _parentStack, _childStack, _childModified = false) => {
  const ref = _ref;
  let parentStack = _parentStack;
  let childStack = _childStack;
  let childModified = _childModified;
  let ret = void 0;
  while (ret === void 0) {
    if (isNonEmptyReadonlyArray(parentStack) && isNonEmptyReadonlyArray(childStack)) {
      const parentFiberId = headNonEmpty$1(parentStack)[0];
      const parentAncestors = tailNonEmpty$1(parentStack);
      const childFiberId = headNonEmpty$1(childStack)[0];
      const childRefValue = headNonEmpty$1(childStack)[1];
      const childAncestors = tailNonEmpty$1(childStack);
      if (parentFiberId.startTimeMillis < childFiberId.startTimeMillis) {
        childStack = childAncestors;
        childModified = true;
      } else if (parentFiberId.startTimeMillis > childFiberId.startTimeMillis) {
        parentStack = parentAncestors;
      } else {
        if (parentFiberId.id < childFiberId.id) {
          childStack = childAncestors;
          childModified = true;
        } else if (parentFiberId.id > childFiberId.id) {
          parentStack = parentAncestors;
        } else {
          ret = [childRefValue, childModified];
        }
      }
    } else {
      ret = [ref.initial, true];
    }
  }
  return ret;
};
const joinAs = /* @__PURE__ */ dual(3, (self2, fiberId2, that) => {
  const parentFiberRefs = new Map(self2.locals);
  that.locals.forEach((childStack, fiberRef) => {
    const childValue = childStack[0][1];
    if (!childStack[0][0][symbol](fiberId2)) {
      if (!parentFiberRefs.has(fiberRef)) {
        if (equals$1(childValue, fiberRef.initial)) {
          return;
        }
        parentFiberRefs.set(fiberRef, [[fiberId2, fiberRef.join(fiberRef.initial, childValue)]]);
        return;
      }
      const parentStack = parentFiberRefs.get(fiberRef);
      const [ancestor, wasModified] = findAncestor(fiberRef, parentStack, childStack);
      if (wasModified) {
        const patch2 = fiberRef.diff(ancestor, childValue);
        const oldValue = parentStack[0][1];
        const newValue = fiberRef.join(oldValue, fiberRef.patch(patch2)(oldValue));
        if (!equals$1(oldValue, newValue)) {
          let newStack;
          const parentFiberId = parentStack[0][0];
          if (parentFiberId[symbol](fiberId2)) {
            newStack = [[parentFiberId, newValue], ...parentStack.slice(1)];
          } else {
            newStack = [[fiberId2, newValue], ...parentStack];
          }
          parentFiberRefs.set(fiberRef, newStack);
        }
      }
    }
  });
  return new FiberRefsImpl(parentFiberRefs);
});
const forkAs = /* @__PURE__ */ dual(2, (self2, childId) => {
  const map2 = /* @__PURE__ */ new Map();
  unsafeForkAs(self2, map2, childId);
  return new FiberRefsImpl(map2);
});
const unsafeForkAs = (self2, map2, fiberId2) => {
  self2.locals.forEach((stack, fiberRef) => {
    const oldValue = stack[0][1];
    const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
    if (equals$1(oldValue, newValue)) {
      map2.set(fiberRef, stack);
    } else {
      map2.set(fiberRef, [[fiberId2, newValue], ...stack]);
    }
  });
};
const delete_ = /* @__PURE__ */ dual(2, (self2, fiberRef) => {
  const locals = new Map(self2.locals);
  locals.delete(fiberRef);
  return new FiberRefsImpl(locals);
});
const get$8 = /* @__PURE__ */ dual(2, (self2, fiberRef) => {
  if (!self2.locals.has(fiberRef)) {
    return none$4();
  }
  return some(headNonEmpty$1(self2.locals.get(fiberRef))[1]);
});
const getOrDefault$1 = /* @__PURE__ */ dual(2, (self2, fiberRef) => pipe(get$8(self2, fiberRef), getOrElse(() => fiberRef.initial)));
const updateAs = /* @__PURE__ */ dual(2, (self2, {
  fiberId: fiberId2,
  fiberRef,
  value: value2
}) => {
  if (self2.locals.size === 0) {
    return new FiberRefsImpl(/* @__PURE__ */ new Map([[fiberRef, [[fiberId2, value2]]]]));
  }
  const locals = new Map(self2.locals);
  unsafeUpdateAs(locals, fiberId2, fiberRef, value2);
  return new FiberRefsImpl(locals);
});
const unsafeUpdateAs = (locals, fiberId2, fiberRef, value2) => {
  const oldStack = locals.get(fiberRef) ?? [];
  let newStack;
  if (isNonEmptyReadonlyArray(oldStack)) {
    const [currentId, currentValue] = headNonEmpty$1(oldStack);
    if (currentId[symbol](fiberId2)) {
      if (equals$1(currentValue, value2)) {
        return;
      } else {
        newStack = [[fiberId2, value2], ...oldStack.slice(1)];
      }
    } else {
      newStack = [[fiberId2, value2], ...oldStack];
    }
  } else {
    newStack = [[fiberId2, value2]];
  }
  locals.set(fiberRef, newStack);
};
const updateManyAs$1 = /* @__PURE__ */ dual(2, (self2, {
  entries,
  forkAs: forkAs2
}) => {
  if (self2.locals.size === 0) {
    return new FiberRefsImpl(new Map(entries));
  }
  const locals = new Map(self2.locals);
  if (forkAs2 !== void 0) {
    unsafeForkAs(self2, locals, forkAs2);
  }
  entries.forEach(([fiberRef, values]) => {
    if (values.length === 1) {
      unsafeUpdateAs(locals, values[0][0], fiberRef, values[0][1]);
    } else {
      values.forEach(([fiberId2, value2]) => {
        unsafeUpdateAs(locals, fiberId2, fiberRef, value2);
      });
    }
  });
  return new FiberRefsImpl(locals);
});
const get$7 = get$8;
const getOrDefault = getOrDefault$1;
const updateManyAs = updateManyAs$1;
const empty$c = empty$d;
const All$1 = logLevelAll;
const Fatal = logLevelFatal;
const Error$2 = logLevelError;
const Warning = logLevelWarning;
const Info = logLevelInfo;
const Debug = logLevelDebug;
const Trace = logLevelTrace;
const None2 = logLevelNone;
const Order = /* @__PURE__ */ pipe(Order$1, /* @__PURE__ */ mapInput((level) => level.ordinal));
const greaterThan = /* @__PURE__ */ greaterThan$1(Order);
const fromLiteral = (literal) => {
  switch (literal) {
    case "All":
      return All$1;
    case "Debug":
      return Debug;
    case "Error":
      return Error$2;
    case "Fatal":
      return Fatal;
    case "Info":
      return Info;
    case "Trace":
      return Trace;
    case "None":
      return None2;
    case "Warning":
      return Warning;
  }
};
const formatLabel = (key) => key.replace(/[\s="]/g, "_");
const render = (now) => (self2) => {
  const label = formatLabel(self2.label);
  return `${label}=${now - self2.startTime}ms`;
};
const EffectPrototype = EffectPrototype$1;
const Base = Base$1;
let Class$4 = class Class2 extends Base {
};
const TypeId$h = /* @__PURE__ */ Symbol.for("effect/Readable");
const RefTypeId$1 = /* @__PURE__ */ Symbol.for("effect/Ref");
const refVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
class RefImpl extends (_p = Class$4, _o = RefTypeId$1, _n = TypeId$h, _p) {
  constructor(ref) {
    super();
    __publicField(this, "ref");
    __publicField(this, _o, refVariance);
    __publicField(this, _n, TypeId$h);
    __publicField(this, "get");
    this.ref = ref;
    this.get = sync$5(() => get$b(this.ref));
  }
  commit() {
    return this.get;
  }
  modify(f) {
    return sync$5(() => {
      const current = get$b(this.ref);
      const [b, a] = f(current);
      if (current !== a) {
        set$7(a)(this.ref);
      }
      return b;
    });
  }
}
const unsafeMake$6 = (value2) => new RefImpl(make$N(value2));
const make$B = (value2) => sync$5(() => unsafeMake$6(value2));
const get$6 = (self2) => self2.get;
const set$4 = /* @__PURE__ */ dual(2, (self2, value2) => self2.modify(() => [void 0, value2]));
const getAndSet$1 = /* @__PURE__ */ dual(2, (self2, value2) => self2.modify((a) => [a, value2]));
const modify$2 = /* @__PURE__ */ dual(2, (self2, f) => self2.modify(f));
const update$2 = /* @__PURE__ */ dual(2, (self2, f) => self2.modify((a) => [void 0, f(a)]));
const RefTypeId = RefTypeId$1;
const make$A = make$B;
const get$5 = get$6;
const getAndSet = getAndSet$1;
const modify$1 = modify$2;
const set$3 = set$4;
const update$1 = update$2;
const ParentSpan = spanTag;
const make$z = make$C;
const tracerWith$1 = tracerWith$2;
const OP_EMPTY$1 = "Empty";
const OP_ADD = "Add";
const OP_REMOVE = "Remove";
const OP_UPDATE = "Update";
const OP_AND_THEN$1 = "AndThen";
const empty$b = {
  _tag: OP_EMPTY$1
};
const diff$2 = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch2 = empty$b;
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue2 = headNonEmpty$1(pairs)[1];
    const old = missingLocals.get(fiberRef);
    if (old !== void 0) {
      const oldValue2 = headNonEmpty$1(old)[1];
      if (!equals$1(oldValue2, newValue2)) {
        patch2 = combine$1({
          _tag: OP_UPDATE,
          fiberRef,
          patch: fiberRef.diff(oldValue2, newValue2)
        })(patch2);
      }
    } else {
      patch2 = combine$1({
        _tag: OP_ADD,
        fiberRef,
        value: newValue2
      })(patch2);
    }
    missingLocals.delete(fiberRef);
  }
  for (const [fiberRef] of missingLocals.entries()) {
    patch2 = combine$1({
      _tag: OP_REMOVE,
      fiberRef
    })(patch2);
  }
  return patch2;
};
const combine$1 = /* @__PURE__ */ dual(2, (self2, that) => ({
  _tag: OP_AND_THEN$1,
  first: self2,
  second: that
}));
const patch$4 = /* @__PURE__ */ dual(3, (self2, fiberId2, oldValue) => {
  let fiberRefs2 = oldValue;
  let patches = of$3(self2);
  while (isNonEmptyReadonlyArray(patches)) {
    const head2 = headNonEmpty$1(patches);
    const tail = tailNonEmpty$1(patches);
    switch (head2._tag) {
      case OP_EMPTY$1: {
        patches = tail;
        break;
      }
      case OP_ADD: {
        fiberRefs2 = updateAs(fiberRefs2, {
          fiberId: fiberId2,
          fiberRef: head2.fiberRef,
          value: head2.value
        });
        patches = tail;
        break;
      }
      case OP_REMOVE: {
        fiberRefs2 = delete_(fiberRefs2, head2.fiberRef);
        patches = tail;
        break;
      }
      case OP_UPDATE: {
        const value2 = getOrDefault$1(fiberRefs2, head2.fiberRef);
        fiberRefs2 = updateAs(fiberRefs2, {
          fiberId: fiberId2,
          fiberRef: head2.fiberRef,
          value: head2.fiberRef.patch(head2.patch)(value2)
        });
        patches = tail;
        break;
      }
      case OP_AND_THEN$1: {
        patches = prepend$2(head2.first)(prepend$2(head2.second)(tail));
        break;
      }
    }
  }
  return fiberRefs2;
});
const MetricLabelSymbolKey = "effect/MetricLabel";
const MetricLabelTypeId = /* @__PURE__ */ Symbol.for(MetricLabelSymbolKey);
class MetricLabelImpl {
  constructor(key, value2) {
    __publicField(this, "key");
    __publicField(this, "value");
    __publicField(this, _q, MetricLabelTypeId);
    __publicField(this, "_hash");
    this.key = key;
    this.value = value2;
    this._hash = string(MetricLabelSymbolKey + this.key + this.value);
  }
  [(_q = MetricLabelTypeId, symbol$1)]() {
    return this._hash;
  }
  [symbol](that) {
    return isMetricLabel(that) && this.key === that.key && this.value === that.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const make$y = (key, value2) => {
  return new MetricLabelImpl(key, value2);
};
const isMetricLabel = (u) => hasProperty(u, MetricLabelTypeId);
const annotateLogs$1 = /* @__PURE__ */ dual((args2) => isEffect$1(args2[0]), function() {
  const args2 = arguments;
  return fiberRefLocallyWith(args2[0], currentLogAnnotations, typeof args2[1] === "string" ? set$6(args2[1], args2[2]) : (annotations2) => Object.entries(args2[1]).reduce((acc, [key, value2]) => set$6(acc, key, value2), annotations2));
});
const asSome = (self2) => map$9(self2, some);
const try_$1 = (arg) => {
  let evaluate2;
  let onFailure = void 0;
  if (typeof arg === "function") {
    evaluate2 = arg;
  } else {
    evaluate2 = arg.try;
    onFailure = arg.catch;
  }
  return suspend$7(() => {
    try {
      return succeed$a(internalCall(evaluate2));
    } catch (error) {
      return fail$b(onFailure ? internalCall(() => onFailure(error)) : new UnknownException(error, "An unknown error occurred in Effect.try"));
    }
  });
};
const catchAllDefect$1 = /* @__PURE__ */ dual(2, (self2, f) => catchAllCause$3(self2, (cause) => {
  const option = find(cause, (_) => isDieType$1(_) ? some(_) : none$4());
  switch (option._tag) {
    case "None": {
      return failCause$9(cause);
    }
    case "Some": {
      return f(option.value.defect);
    }
  }
}));
const catchSomeCause$1 = /* @__PURE__ */ dual(2, (self2, f) => matchCauseEffect$2(self2, {
  onFailure: (cause) => {
    const option = f(cause);
    switch (option._tag) {
      case "None": {
        return failCause$9(cause);
      }
      case "Some": {
        return option.value;
      }
    }
  },
  onSuccess: succeed$a
}));
const catchTag$1 = /* @__PURE__ */ dual((args2) => isEffect$1(args2[0]), (self2, ...args2) => {
  const f = args2[args2.length - 1];
  let predicate;
  if (args2.length === 2) {
    predicate = isTagged(args2[0]);
  } else {
    predicate = (e) => {
      const tag2 = hasProperty(e, "_tag") ? e["_tag"] : void 0;
      if (!tag2) return false;
      for (let i = 0; i < args2.length - 1; i++) {
        if (args2[i] === tag2) return true;
      }
      return false;
    };
  }
  return catchIf$1(self2, predicate, f);
});
const clockWith = clockWith$1;
const clock$1 = /* @__PURE__ */ clockWith(succeed$a);
const delay = /* @__PURE__ */ dual(2, (self2, duration) => zipRight$4(sleep$2(duration), self2));
const diffFiberRefs = (self2) => summarized(self2, fiberRefs, diff$2);
const diffFiberRefsAndRuntimeFlags = (self2) => summarized(self2, zip$3(fiberRefs, runtimeFlags), ([refs, flags], [refsNew, flagsNew]) => [diff$2(refs, refsNew), diff$3(flags, flagsNew)]);
const match$4 = /* @__PURE__ */ dual(2, (self2, options2) => matchEffect$1(self2, {
  onFailure: (e) => succeed$a(options2.onFailure(e)),
  onSuccess: (a) => succeed$a(options2.onSuccess(a))
}));
const forever$2 = (self2) => {
  const loop = flatMap$7(flatMap$7(self2, () => yieldNow$3()), () => loop);
  return loop;
};
const fiberRefs = /* @__PURE__ */ withFiberRuntime$1((state) => succeed$a(state.getFiberRefs()));
const ignore$1 = (self2) => match$4(self2, {
  onFailure: constVoid,
  onSuccess: constVoid
});
const ignoreLogged$1 = (self2) => matchCauseEffect$2(self2, {
  onFailure: (cause) => logDebug$1(cause, "An error was silently ignored because it is not anticipated to be useful"),
  onSuccess: () => void_$4
});
const logWithLevel = (level) => (...message) => {
  const levelOption = fromNullable(level);
  let cause = void 0;
  for (let i = 0, len = message.length; i < len; i++) {
    const msg = message[i];
    if (isCause$1(msg)) {
      if (cause !== void 0) {
        cause = sequential$3(cause, msg);
      } else {
        cause = msg;
      }
      message = [...message.slice(0, i), ...message.slice(i + 1)];
      i--;
    }
  }
  if (cause === void 0) {
    cause = empty$h;
  }
  return withFiberRuntime$1((fiberState) => {
    fiberState.log(message, cause, levelOption);
    return void_$4;
  });
};
const log$1 = /* @__PURE__ */ logWithLevel();
const logDebug$1 = /* @__PURE__ */ logWithLevel(Debug);
const logWarning$1 = /* @__PURE__ */ logWithLevel(Warning);
const logError$1 = /* @__PURE__ */ logWithLevel(Error$2);
const mapErrorCause$1 = /* @__PURE__ */ dual(2, (self2, f) => matchCauseEffect$2(self2, {
  onFailure: (c) => failCauseSync$1(() => f(c)),
  onSuccess: succeed$a
}));
const memoize = (self2) => pipe(deferredMake(), flatMap$7((deferred) => pipe(diffFiberRefsAndRuntimeFlags(self2), intoDeferred$1(deferred), once, map$9((complete2) => zipRight$4(complete2, pipe(deferredAwait(deferred), flatMap$7(([patch2, a]) => as$1(zip$3(patchFiberRefs(patch2[0]), updateRuntimeFlags(patch2[1])), a))))))));
const negate = (self2) => map$9(self2, (b) => !b);
const once = (self2) => map$9(make$A(true), (ref) => asVoid$1(whenEffect(self2, getAndSet(ref, false))));
const patchFiberRefs = (patch2) => updateFiberRefs((fiberId2, fiberRefs2) => pipe(patch2, patch$4(fiberId2, fiberRefs2)));
const promise$1 = (evaluate2) => evaluate2.length >= 1 ? async_((resolve, signal) => {
  try {
    evaluate2(signal).then((a) => resolve(exitSucceed$1(a)), (e) => resolve(exitDie$1(e)));
  } catch (e) {
    resolve(exitDie$1(e));
  }
}) : async_((resolve) => {
  try {
    ;
    evaluate2().then((a) => resolve(exitSucceed$1(a)), (e) => resolve(exitDie$1(e)));
  } catch (e) {
    resolve(exitDie$1(e));
  }
});
const provideService$1 = /* @__PURE__ */ dual(3, (self2, tag2, service) => contextWithEffect((env2) => provideContext$4(self2, add$2(env2, tag2, service))));
const sleep$1 = sleep$2;
const succeedNone = /* @__PURE__ */ succeed$a(/* @__PURE__ */ none$4());
const summarized = /* @__PURE__ */ dual(3, (self2, summary2, f) => flatMap$7(summary2, (start2) => flatMap$7(self2, (value2) => map$9(summary2, (end2) => [f(start2, end2), value2]))));
const tapErrorCause$1 = /* @__PURE__ */ dual(2, (self2, f) => matchCauseEffect$2(self2, {
  onFailure: (cause) => zipRight$4(f(cause), failCause$9(cause)),
  onSuccess: succeed$a
}));
const tracerWith = tracerWith$1;
const tracer$1 = /* @__PURE__ */ tracerWith(succeed$a);
const tryPromise$1 = (arg) => {
  let evaluate2;
  let catcher = void 0;
  if (typeof arg === "function") {
    evaluate2 = arg;
  } else {
    evaluate2 = arg.try;
    catcher = arg.catch;
  }
  const fail2 = (e) => catcher ? failSync$1(() => catcher(e)) : fail$b(new UnknownException(e, "An unknown error occurred in Effect.tryPromise"));
  if (evaluate2.length >= 1) {
    return async_((resolve, signal) => {
      try {
        evaluate2(signal).then((a) => resolve(exitSucceed$1(a)), (e) => resolve(fail2(e)));
      } catch (e) {
        resolve(fail2(e));
      }
    });
  }
  return async_((resolve) => {
    try {
      evaluate2().then((a) => resolve(exitSucceed$1(a)), (e) => resolve(fail2(e)));
    } catch (e) {
      resolve(fail2(e));
    }
  });
};
const tryMap$1 = /* @__PURE__ */ dual(2, (self2, options2) => flatMap$7(self2, (a) => try_$1({
  try: () => options2.try(a),
  catch: options2.catch
})));
const updateFiberRefs = (f) => withFiberRuntime$1((state) => {
  state.setFiberRefs(f(state.id(), state.getFiberRefs()));
  return void_$4;
});
const when$1 = /* @__PURE__ */ dual(2, (self2, condition) => suspend$7(() => condition() ? map$9(self2, some) : succeed$a(none$4())));
const serviceFunctions$1 = (getService) => new Proxy({}, {
  get(_target, prop, _receiver) {
    return (...args2) => flatMap$7(getService, (s) => s[prop](...args2));
  }
});
const serviceOption$1 = (tag2) => map$9(context$2(), getOption(tag2));
const annotateCurrentSpan$1 = function() {
  const args2 = arguments;
  return ignore$1(flatMap$7(currentSpan$1, (span2) => sync$5(() => {
    if (typeof args2[0] === "string") {
      span2.attribute(args2[0], args2[1]);
    } else {
      for (const key in args2[0]) {
        span2.attribute(key, args2[0][key]);
      }
    }
  })));
};
const currentSpan$1 = /* @__PURE__ */ flatMap$7(/* @__PURE__ */ context$2(), (context2) => {
  const span2 = context2.unsafeMap.get(spanTag.key);
  return span2 !== void 0 && span2._tag === "Span" ? succeed$a(span2) : fail$b(new NoSuchElementException$1());
});
const bigint0$1 = /* @__PURE__ */ BigInt(0);
const filterDisablePropagation = /* @__PURE__ */ flatMap$a((span2) => get$e(span2.context, DisablePropagation) ? span2._tag === "Span" ? filterDisablePropagation(span2.parent) : none$4() : some(span2));
const unsafeMakeSpan = (fiber, name, options2) => {
  const disablePropagation = !fiber.getFiberRef(currentTracerEnabled$1) || options2.context && get$e(options2.context, DisablePropagation);
  const context2 = fiber.getFiberRef(currentContext$1);
  const parent = options2.parent ? some(options2.parent) : options2.root ? none$4() : filterDisablePropagation(getOption(context2, spanTag));
  let span2;
  if (disablePropagation) {
    span2 = noopSpan({
      name,
      parent,
      context: add$2(options2.context ?? empty$s(), DisablePropagation, true)
    });
  } else {
    const services = fiber.getFiberRef(currentServices);
    const tracer2 = get$e(services, tracerTag);
    const clock2 = get$e(services, Clock);
    const timingEnabled = fiber.getFiberRef(currentTracerTimingEnabled$1);
    const fiberRefs2 = fiber.getFiberRefs();
    const annotationsFromEnv = get$7(fiberRefs2, currentTracerSpanAnnotations);
    const linksFromEnv = get$7(fiberRefs2, currentTracerSpanLinks);
    const links = linksFromEnv._tag === "Some" ? options2.links !== void 0 ? [...toReadonlyArray(linksFromEnv.value), ...options2.links ?? []] : toReadonlyArray(linksFromEnv.value) : options2.links ?? empty$u();
    span2 = tracer2.span(name, parent, options2.context ?? empty$s(), links, timingEnabled ? clock2.unsafeCurrentTimeNanos() : bigint0$1, options2.kind ?? "internal");
    if (annotationsFromEnv._tag === "Some") {
      forEach$2(annotationsFromEnv.value, (value2, key) => span2.attribute(key, value2));
    }
    if (options2.attributes !== void 0) {
      Object.entries(options2.attributes).forEach(([k, v]) => span2.attribute(k, v));
    }
  }
  if (typeof options2.captureStackTrace === "function") {
    spanToTrace.set(span2, options2.captureStackTrace);
  }
  return span2;
};
const makeSpan$1 = (name, options2) => {
  options2 = addSpanStackTrace(options2);
  return withFiberRuntime$1((fiber) => succeed$a(unsafeMakeSpan(fiber, name, options2)));
};
const endSpan = (span2, exit2, clock2, timingEnabled) => sync$5(() => {
  if (span2.status._tag === "Ended") {
    return;
  }
  if (exitIsFailure(exit2) && spanToTrace.has(span2)) {
    span2.attribute("code.stacktrace", spanToTrace.get(span2)());
  }
  span2.end(timingEnabled ? clock2.unsafeCurrentTimeNanos() : bigint0$1, exit2);
});
const useSpan$1 = (name, ...args2) => {
  const options2 = addSpanStackTrace(args2.length === 1 ? void 0 : args2[0]);
  const evaluate2 = args2[args2.length - 1];
  return withFiberRuntime$1((fiber) => {
    const span2 = unsafeMakeSpan(fiber, name, options2);
    const timingEnabled = fiber.getFiberRef(currentTracerTimingEnabled$1);
    const clock2 = get$e(fiber.getFiberRef(currentServices), clockTag);
    return onExit$2(evaluate2(span2), (exit2) => endSpan(span2, exit2, clock2, timingEnabled));
  });
};
const withParentSpan$1 = /* @__PURE__ */ dual(2, (self2, span2) => provideService$1(self2, spanTag, span2));
const withSpan$4 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options2 = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self2 = arguments[0];
    return useSpan$1(name, options2, (span2) => withParentSpan$1(self2, span2));
  }
  return (self2) => useSpan$1(name, options2, (span2) => withParentSpan$1(self2, span2));
};
const OP_SEQUENTIAL = "Sequential";
const OP_PARALLEL = "Parallel";
const OP_PARALLEL_N = "ParallelN";
const sequential$2 = {
  _tag: OP_SEQUENTIAL
};
const parallel$2 = {
  _tag: OP_PARALLEL
};
const parallelN$1 = (parallelism) => ({
  _tag: OP_PARALLEL_N,
  parallelism
});
const isSequential = (self2) => self2._tag === OP_SEQUENTIAL;
const isParallel = (self2) => self2._tag === OP_PARALLEL;
const sequential$1 = sequential$2;
const parallel$1 = parallel$2;
const parallelN = parallelN$1;
const diff$1 = diff$2;
const patch$3 = patch$4;
const FiberStatusSymbolKey = "effect/FiberStatus";
const FiberStatusTypeId = /* @__PURE__ */ Symbol.for(FiberStatusSymbolKey);
const OP_DONE$5 = "Done";
const OP_RUNNING$1 = "Running";
const OP_SUSPENDED = "Suspended";
const DoneHash = /* @__PURE__ */ string(`${FiberStatusSymbolKey}-${OP_DONE$5}`);
let Done$3 = class Done {
  constructor() {
    __publicField(this, _r, FiberStatusTypeId);
    __publicField(this, "_tag", OP_DONE$5);
  }
  [(_r = FiberStatusTypeId, symbol$1)]() {
    return DoneHash;
  }
  [symbol](that) {
    return isFiberStatus(that) && that._tag === OP_DONE$5;
  }
};
class Running {
  constructor(runtimeFlags2) {
    __publicField(this, "runtimeFlags");
    __publicField(this, _s, FiberStatusTypeId);
    __publicField(this, "_tag", OP_RUNNING$1);
    this.runtimeFlags = runtimeFlags2;
  }
  [(_s = FiberStatusTypeId, symbol$1)]() {
    return pipe(hash(FiberStatusSymbolKey), combine$7(hash(this._tag)), combine$7(hash(this.runtimeFlags)), cached$1(this));
  }
  [symbol](that) {
    return isFiberStatus(that) && that._tag === OP_RUNNING$1 && this.runtimeFlags === that.runtimeFlags;
  }
}
class Suspended {
  constructor(runtimeFlags2, blockingOn) {
    __publicField(this, "runtimeFlags");
    __publicField(this, "blockingOn");
    __publicField(this, _t, FiberStatusTypeId);
    __publicField(this, "_tag", OP_SUSPENDED);
    this.runtimeFlags = runtimeFlags2;
    this.blockingOn = blockingOn;
  }
  [(_t = FiberStatusTypeId, symbol$1)]() {
    return pipe(hash(FiberStatusSymbolKey), combine$7(hash(this._tag)), combine$7(hash(this.runtimeFlags)), combine$7(hash(this.blockingOn)), cached$1(this));
  }
  [symbol](that) {
    return isFiberStatus(that) && that._tag === OP_SUSPENDED && this.runtimeFlags === that.runtimeFlags && equals$1(this.blockingOn, that.blockingOn);
  }
}
const done$6 = /* @__PURE__ */ new Done$3();
const running$2 = (runtimeFlags2) => new Running(runtimeFlags2);
const suspended$1 = (runtimeFlags2, blockingOn) => new Suspended(runtimeFlags2, blockingOn);
const isFiberStatus = (u) => hasProperty(u, FiberStatusTypeId);
const isDone$4 = (self2) => self2._tag === OP_DONE$5;
const done$5 = done$6;
const running$1 = running$2;
const suspended = suspended$1;
const isDone$3 = isDone$4;
const TypeId$g = /* @__PURE__ */ Symbol.for("effect/Micro");
const MicroExitTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroExit");
const MicroCauseTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroCause");
const microCauseVariance = {
  _E: identity
};
class MicroCauseImpl extends globalThis.Error {
  constructor(_tag, originalError, traces) {
    const causeName = `MicroCause.${_tag}`;
    let name;
    let message;
    let stack;
    if (originalError instanceof globalThis.Error) {
      name = `(${causeName}) ${originalError.name}`;
      message = originalError.message;
      const messageLines = message.split("\n").length;
      stack = originalError.stack ? `(${causeName}) ${originalError.stack.split("\n").slice(0, messageLines + 3).join("\n")}` : `${name}: ${message}`;
    } else {
      name = causeName;
      message = toStringUnknown(originalError, 0);
      stack = `${name}: ${message}`;
    }
    if (traces.length > 0) {
      stack += `
    ${traces.join("\n    ")}`;
    }
    super(message);
    __publicField(this, "_tag");
    __publicField(this, "traces");
    __publicField(this, _u);
    this._tag = _tag;
    this.traces = traces;
    this[MicroCauseTypeId] = microCauseVariance;
    this.name = name;
    this.stack = stack;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toString() {
    return this.stack;
  }
  [(_u = MicroCauseTypeId, NodeInspectSymbol)]() {
    return this.stack;
  }
}
class Die extends MicroCauseImpl {
  constructor(defect, traces = []) {
    super("Die", defect, traces);
    __publicField(this, "defect");
    this.defect = defect;
  }
}
const causeDie = (defect, traces = []) => new Die(defect, traces);
class Interrupt extends MicroCauseImpl {
  constructor(traces = []) {
    super("Interrupt", "interrupted", traces);
  }
}
const causeInterrupt = (traces = []) => new Interrupt(traces);
const causeIsInterrupt = (self2) => self2._tag === "Interrupt";
const MicroFiberTypeId = /* @__PURE__ */ Symbol.for("effect/Micro/MicroFiber");
const fiberVariance$1 = {
  _A: identity,
  _E: identity
};
_v = MicroFiberTypeId;
class MicroFiberImpl {
  constructor(context2, interruptible2 = true) {
    __publicField(this, "context");
    __publicField(this, "interruptible");
    __publicField(this, _v);
    __publicField(this, "_stack", []);
    __publicField(this, "_observers", []);
    __publicField(this, "_exit");
    __publicField(this, "_children");
    __publicField(this, "currentOpCount", 0);
    __publicField(this, "_interrupted", false);
    // cancel the yielded operation, or for the yielded exit value
    __publicField(this, "_yielded");
    this.context = context2;
    this.interruptible = interruptible2;
    this[MicroFiberTypeId] = fiberVariance$1;
  }
  getRef(ref) {
    return unsafeGetReference(this.context, ref);
  }
  addObserver(cb) {
    if (this._exit) {
      cb(this._exit);
      return constVoid;
    }
    this._observers.push(cb);
    return () => {
      const index = this._observers.indexOf(cb);
      if (index >= 0) {
        this._observers.splice(index, 1);
      }
    };
  }
  unsafeInterrupt() {
    if (this._exit) {
      return;
    }
    this._interrupted = true;
    if (this.interruptible) {
      this.evaluate(exitInterrupt);
    }
  }
  unsafePoll() {
    return this._exit;
  }
  evaluate(effect2) {
    if (this._exit) {
      return;
    } else if (this._yielded !== void 0) {
      const yielded = this._yielded;
      this._yielded = void 0;
      yielded();
    }
    const exit2 = this.runLoop(effect2);
    if (exit2 === Yield) {
      return;
    }
    const interruptChildren = fiberMiddleware.interruptChildren && fiberMiddleware.interruptChildren(this);
    if (interruptChildren !== void 0) {
      return this.evaluate(flatMap$6(interruptChildren, () => exit2));
    }
    this._exit = exit2;
    for (let i = 0; i < this._observers.length; i++) {
      this._observers[i](exit2);
    }
    this._observers.length = 0;
  }
  runLoop(effect2) {
    let yielding = false;
    let current = effect2;
    this.currentOpCount = 0;
    try {
      while (true) {
        this.currentOpCount++;
        if (!yielding && this.getRef(CurrentScheduler).shouldYield(this)) {
          yielding = true;
          const prev = current;
          current = flatMap$6(yieldNow$2, () => prev);
        }
        current = current[evaluate$1](this);
        if (current === Yield) {
          const yielded = this._yielded;
          if (MicroExitTypeId in yielded) {
            this._yielded = void 0;
            return yielded;
          }
          return Yield;
        }
      }
    } catch (error) {
      if (!hasProperty(current, evaluate$1)) {
        return exitDie(`MicroFiber.runLoop: Not a valid effect: ${String(current)}`);
      }
      return exitDie(error);
    }
  }
  getCont(symbol2) {
    while (true) {
      const op = this._stack.pop();
      if (!op) return void 0;
      const cont = op[ensureCont] && op[ensureCont](this);
      if (cont) return {
        [symbol2]: cont
      };
      if (op[symbol2]) return op;
    }
  }
  yieldWith(value2) {
    this._yielded = value2;
    return Yield;
  }
  children() {
    return this._children ?? (this._children = /* @__PURE__ */ new Set());
  }
}
const fiberMiddleware = /* @__PURE__ */ globalValue("effect/Micro/fiberMiddleware", () => ({
  interruptChildren: void 0
}));
const identifier = /* @__PURE__ */ Symbol.for("effect/Micro/identifier");
const args = /* @__PURE__ */ Symbol.for("effect/Micro/args");
const evaluate$1 = /* @__PURE__ */ Symbol.for("effect/Micro/evaluate");
const successCont = /* @__PURE__ */ Symbol.for("effect/Micro/successCont");
const failureCont = /* @__PURE__ */ Symbol.for("effect/Micro/failureCont");
const ensureCont = /* @__PURE__ */ Symbol.for("effect/Micro/ensureCont");
const Yield = /* @__PURE__ */ Symbol.for("effect/Micro/Yield");
const microVariance = {
  _A: identity,
  _E: identity,
  _R: identity
};
const MicroProto = {
  ...EffectPrototype,
  _op: "Micro",
  [TypeId$g]: microVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  [Symbol.iterator]() {
    return new SingleShotGen$1(new YieldWrap(this));
  },
  toJSON() {
    return {
      _id: "Micro",
      op: this[identifier],
      ...args in this ? {
        args: this[args]
      } : void 0
    };
  },
  toString() {
    return format$3(this);
  },
  [NodeInspectSymbol]() {
    return format$3(this);
  }
};
function defaultEvaluate(_fiber) {
  return exitDie(`Micro.evaluate: Not implemented`);
}
const makePrimitiveProto = (options2) => ({
  ...MicroProto,
  [identifier]: options2.op,
  [evaluate$1]: options2.eval ?? defaultEvaluate,
  [successCont]: options2.contA,
  [failureCont]: options2.contE,
  [ensureCont]: options2.ensure
});
const makePrimitive = (options2) => {
  const Proto2 = makePrimitiveProto(options2);
  return function() {
    const self2 = Object.create(Proto2);
    self2[args] = options2.single === false ? arguments : arguments[0];
    return self2;
  };
};
const makeExit = (options2) => {
  const Proto2 = {
    ...makePrimitiveProto(options2),
    [MicroExitTypeId]: MicroExitTypeId,
    _tag: options2.op,
    get [options2.prop]() {
      return this[args];
    },
    toJSON() {
      return {
        _id: "MicroExit",
        _tag: options2.op,
        [options2.prop]: this[args]
      };
    },
    [symbol](that) {
      return isMicroExit(that) && that._tag === options2.op && equals$1(this[args], that[args]);
    },
    [symbol$1]() {
      return cached$1(this, combine$7(string(options2.op))(hash(this[args])));
    }
  };
  return function(value2) {
    const self2 = Object.create(Proto2);
    self2[args] = value2;
    self2[successCont] = void 0;
    self2[failureCont] = void 0;
    self2[ensureCont] = void 0;
    return self2;
  };
};
const succeed$7 = /* @__PURE__ */ makeExit({
  op: "Success",
  prop: "value",
  eval(fiber) {
    const cont = fiber.getCont(successCont);
    return cont ? cont[successCont](this[args], fiber) : fiber.yieldWith(this);
  }
});
const failCause$6 = /* @__PURE__ */ makeExit({
  op: "Failure",
  prop: "cause",
  eval(fiber) {
    let cont = fiber.getCont(failureCont);
    while (causeIsInterrupt(this[args]) && cont && fiber.interruptible) {
      cont = fiber.getCont(failureCont);
    }
    return cont ? cont[failureCont](this[args], fiber) : fiber.yieldWith(this);
  }
});
const yieldNowWith = /* @__PURE__ */ makePrimitive({
  op: "Yield",
  eval(fiber) {
    let resumed = false;
    fiber.getRef(CurrentScheduler).scheduleTask(() => {
      if (resumed) return;
      fiber.evaluate(exitVoid);
    }, this[args] ?? 0);
    return fiber.yieldWith(() => {
      resumed = true;
    });
  }
});
const yieldNow$2 = /* @__PURE__ */ yieldNowWith(0);
const void_$2 = /* @__PURE__ */ succeed$7(void 0);
const withMicroFiber = /* @__PURE__ */ makePrimitive({
  op: "WithMicroFiber",
  eval(fiber) {
    return this[args](fiber);
  }
});
const flatMap$6 = /* @__PURE__ */ dual(2, (self2, f) => {
  const onSuccess = Object.create(OnSuccessProto);
  onSuccess[args] = self2;
  onSuccess[successCont] = f;
  return onSuccess;
});
const OnSuccessProto = /* @__PURE__ */ makePrimitiveProto({
  op: "OnSuccess",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
const isMicroExit = (u) => hasProperty(u, MicroExitTypeId);
const exitSucceed = succeed$7;
const exitFailCause = failCause$6;
const exitInterrupt = /* @__PURE__ */ exitFailCause(/* @__PURE__ */ causeInterrupt());
const exitDie = (defect) => exitFailCause(causeDie(defect));
const exitVoid = /* @__PURE__ */ exitSucceed(void 0);
const setImmediate = "setImmediate" in globalThis ? globalThis.setImmediate : (f) => setTimeout(f, 0);
class MicroSchedulerDefault {
  constructor() {
    __publicField(this, "tasks", []);
    __publicField(this, "running", false);
    /**
     * @since 3.5.9
     */
    __publicField(this, "afterScheduled", () => {
      this.running = false;
      this.runTasks();
    });
  }
  /**
   * @since 3.5.9
   */
  scheduleTask(task, _priority) {
    this.tasks.push(task);
    if (!this.running) {
      this.running = true;
      setImmediate(this.afterScheduled);
    }
  }
  /**
   * @since 3.5.9
   */
  runTasks() {
    const tasks = this.tasks;
    this.tasks = [];
    for (let i = 0, len = tasks.length; i < len; i++) {
      tasks[i]();
    }
  }
  /**
   * @since 3.5.9
   */
  shouldYield(fiber) {
    return fiber.currentOpCount >= fiber.getRef(MaxOpsBeforeYield);
  }
  /**
   * @since 3.5.9
   */
  flush() {
    while (this.tasks.length > 0) {
      this.runTasks();
    }
  }
}
const updateContext$2 = /* @__PURE__ */ dual(2, (self2, f) => withMicroFiber((fiber) => {
  const prev = fiber.context;
  fiber.context = f(prev);
  return onExit$1(self2, () => {
    fiber.context = prev;
    return void_$2;
  });
}));
const provideContext$3 = /* @__PURE__ */ dual(2, (self2, provided) => updateContext$2(self2, merge$6(provided)));
class MaxOpsBeforeYield extends (/* @__PURE__ */ Reference()("effect/Micro/currentMaxOpsBeforeYield", {
  defaultValue: () => 2048
})) {
}
class CurrentScheduler extends (/* @__PURE__ */ Reference()("effect/Micro/currentScheduler", {
  defaultValue: () => new MicroSchedulerDefault()
})) {
}
const matchCauseEffect$1 = /* @__PURE__ */ dual(2, (self2, options2) => {
  const primitive = Object.create(OnSuccessAndFailureProto);
  primitive[args] = self2;
  primitive[successCont] = options2.onSuccess;
  primitive[failureCont] = options2.onFailure;
  return primitive;
});
const OnSuccessAndFailureProto = /* @__PURE__ */ makePrimitiveProto({
  op: "OnSuccessAndFailure",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
const onExit$1 = /* @__PURE__ */ dual(2, (self2, f) => uninterruptibleMask$1((restore) => matchCauseEffect$1(restore(self2), {
  onFailure: (cause) => flatMap$6(f(exitFailCause(cause)), () => failCause$6(cause)),
  onSuccess: (a) => flatMap$6(f(exitSucceed(a)), () => succeed$7(a))
})));
const setInterruptible = /* @__PURE__ */ makePrimitive({
  op: "SetInterruptible",
  ensure(fiber) {
    fiber.interruptible = this[args];
    if (fiber._interrupted && fiber.interruptible) {
      return () => exitInterrupt;
    }
  }
});
const interruptible$1 = (self2) => withMicroFiber((fiber) => {
  if (fiber.interruptible) return self2;
  fiber.interruptible = true;
  fiber._stack.push(setInterruptible(false));
  if (fiber._interrupted) return exitInterrupt;
  return self2;
});
const uninterruptibleMask$1 = (f) => withMicroFiber((fiber) => {
  if (!fiber.interruptible) return f(identity);
  fiber.interruptible = false;
  fiber._stack.push(setInterruptible(true));
  return f(interruptible$1);
});
const runFork$2 = (effect2, options2) => {
  const fiber = new MicroFiberImpl(CurrentScheduler.context(new MicroSchedulerDefault()));
  fiber.evaluate(effect2);
  return fiber;
};
class PriorityBuckets {
  constructor() {
    /**
     * @since 2.0.0
     */
    __publicField(this, "buckets", []);
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    const length2 = this.buckets.length;
    let bucket = void 0;
    let index = 0;
    for (; index < length2; index++) {
      if (this.buckets[index][0] <= priority) {
        bucket = this.buckets[index];
      } else {
        break;
      }
    }
    if (bucket && bucket[0] === priority) {
      bucket[1].push(task);
    } else if (index === length2) {
      this.buckets.push([priority, [task]]);
    } else {
      this.buckets.splice(index, 0, [priority, [task]]);
    }
  }
}
class MixedScheduler {
  constructor(maxNextTickBeforeTimer) {
    __publicField(this, "maxNextTickBeforeTimer");
    /**
     * @since 2.0.0
     */
    __publicField(this, "running", false);
    /**
     * @since 2.0.0
     */
    __publicField(this, "tasks", /* @__PURE__ */ new PriorityBuckets());
    this.maxNextTickBeforeTimer = maxNextTickBeforeTimer;
  }
  /**
   * @since 2.0.0
   */
  starveInternal(depth) {
    const tasks = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [_, toRun] of tasks) {
      for (let i = 0; i < toRun.length; i++) {
        toRun[i]();
      }
    }
    if (this.tasks.buckets.length === 0) {
      this.running = false;
    } else {
      this.starve(depth);
    }
  }
  /**
   * @since 2.0.0
   */
  starve(depth = 0) {
    if (depth >= this.maxNextTickBeforeTimer) {
      setTimeout(() => this.starveInternal(0), 0);
    } else {
      Promise.resolve(void 0).then(() => this.starveInternal(depth + 1));
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority$1) : false;
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    this.tasks.scheduleTask(task, priority);
    if (!this.running) {
      this.running = true;
      this.starve();
    }
  }
}
const defaultScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Scheduler/defaultScheduler"), () => new MixedScheduler(2048));
class SyncScheduler {
  constructor() {
    /**
     * @since 2.0.0
     */
    __publicField(this, "tasks", /* @__PURE__ */ new PriorityBuckets());
    /**
     * @since 2.0.0
     */
    __publicField(this, "deferred", false);
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    if (this.deferred) {
      defaultScheduler.scheduleTask(task, priority);
    } else {
      this.tasks.scheduleTask(task, priority);
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority$1) : false;
  }
  /**
   * @since 2.0.0
   */
  flush() {
    while (this.tasks.buckets.length > 0) {
      const tasks = this.tasks.buckets;
      this.tasks.buckets = [];
      for (const [_, toRun] of tasks) {
        for (let i = 0; i < toRun.length; i++) {
          toRun[i]();
        }
      }
    }
    this.deferred = true;
  }
}
const currentScheduler$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentScheduler"), () => fiberRefUnsafeMake(defaultScheduler));
const currentRequestMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestMap"), () => fiberRefUnsafeMake(/* @__PURE__ */ new Map()));
const match$3 = (concurrency, sequential2, unbounded2, bounded2) => {
  switch (concurrency) {
    case void 0:
      return sequential2();
    case "unbounded":
      return unbounded2();
    case "inherit":
      return fiberRefGetWith(currentConcurrency, (concurrency2) => concurrency2 === "unbounded" ? unbounded2() : concurrency2 > 1 ? bounded2(concurrency2) : sequential2());
    default:
      return concurrency > 1 ? bounded2(concurrency) : sequential2();
  }
};
const OP_INTERRUPT_SIGNAL = "InterruptSignal";
const OP_STATEFUL = "Stateful";
const OP_RESUME = "Resume";
const OP_YIELD_NOW = "YieldNow";
const interruptSignal = (cause) => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause
});
const stateful = (onFiber) => ({
  _tag: OP_STATEFUL,
  onFiber
});
const resume = (effect2) => ({
  _tag: OP_RESUME,
  effect: effect2
});
const yieldNow$1 = () => ({
  _tag: OP_YIELD_NOW
});
const FiberScopeSymbolKey = "effect/FiberScope";
const FiberScopeTypeId = /* @__PURE__ */ Symbol.for(FiberScopeSymbolKey);
_w = FiberScopeTypeId;
class Global {
  constructor() {
    __publicField(this, _w, FiberScopeTypeId);
    __publicField(this, "fiberId", none$2);
    __publicField(this, "roots", /* @__PURE__ */ new Set());
  }
  add(_runtimeFlags, child) {
    this.roots.add(child);
    child.addObserver(() => {
      this.roots.delete(child);
    });
  }
}
_x = FiberScopeTypeId;
class Local {
  constructor(fiberId2, parent) {
    __publicField(this, "fiberId");
    __publicField(this, "parent");
    __publicField(this, _x, FiberScopeTypeId);
    this.fiberId = fiberId2;
    this.parent = parent;
  }
  add(_runtimeFlags, child) {
    this.parent.tell(stateful((parentFiber) => {
      parentFiber.addChild(child);
      child.addObserver(() => {
        parentFiber.removeChild(child);
      });
    }));
  }
}
const unsafeMake$5 = (fiber) => {
  return new Local(fiber.id(), fiber);
};
const globalScope = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberScope/Global"), () => new Global());
const FiberSymbolKey = "effect/Fiber";
const FiberTypeId = /* @__PURE__ */ Symbol.for(FiberSymbolKey);
const fiberVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
const RuntimeFiberSymbolKey = "effect/Fiber";
const RuntimeFiberTypeId = /* @__PURE__ */ Symbol.for(RuntimeFiberSymbolKey);
const _await$1 = (self2) => self2.await;
const inheritAll$1 = (self2) => self2.inheritAll;
const interruptAllAs$1 = /* @__PURE__ */ dual(2, (fibers, fiberId2) => pipe(forEachSequentialDiscard(fibers, interruptAsFork(fiberId2)), zipRight$4(pipe(fibers, forEachSequentialDiscard(_await$1)))));
const interruptAsFork = /* @__PURE__ */ dual(2, (self2, fiberId2) => self2.interruptAsFork(fiberId2));
const join$2 = (self2) => zipLeft$1(flatten$4(self2.await), self2.inheritAll);
({
  ...CommitPrototype
});
const currentFiberURI = "effect/FiberCurrent";
const getCurrentFiber$1 = () => fromNullable(globalThis[currentFiberURI]);
const LoggerSymbolKey = "effect/Logger";
const LoggerTypeId = /* @__PURE__ */ Symbol.for(LoggerSymbolKey);
const loggerVariance = {
  /* c8 ignore next */
  _Message: (_) => _,
  /* c8 ignore next */
  _Output: (_) => _
};
const makeLogger = (log2) => ({
  [LoggerTypeId]: loggerVariance,
  log: log2,
  pipe() {
    return pipeArguments(this, arguments);
  }
});
const textOnly = /^[^\s"=]*$/;
const format$1 = (quoteValue, whitespace) => ({
  annotations: annotations2,
  cause,
  date,
  fiberId: fiberId2,
  logLevel,
  message,
  spans
}) => {
  const formatValue = (value2) => value2.match(textOnly) ? value2 : quoteValue(value2);
  const format2 = (label, value2) => `${formatLabel(label)}=${formatValue(value2)}`;
  const append2 = (label, value2) => " " + format2(label, value2);
  let out = format2("timestamp", date.toISOString());
  out += append2("level", logLevel.label);
  out += append2("fiber", threadName$1(fiberId2));
  const messages = ensure(message);
  for (let i = 0; i < messages.length; i++) {
    out += append2("message", toStringUnknown(messages[i], whitespace));
  }
  if (!isEmptyType(cause)) {
    out += append2("cause", pretty$1(cause, {
      renderErrorCause: true
    }));
  }
  for (const span2 of spans) {
    out += " " + render(date.getTime())(span2);
  }
  for (const [label, value2] of annotations2) {
    out += append2(label, toStringUnknown(value2, whitespace));
  }
  return out;
};
const escapeDoubleQuotes = (s) => `"${s.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
const stringLogger = /* @__PURE__ */ makeLogger(/* @__PURE__ */ format$1(escapeDoubleQuotes));
const structuredMessage = (u) => {
  switch (typeof u) {
    case "bigint":
    case "function":
    case "symbol": {
      return String(u);
    }
    default: {
      return toJSON(u);
    }
  }
};
const withColor = (text, ...colors2) => {
  let out = "";
  for (let i = 0; i < colors2.length; i++) {
    out += `\x1B[${colors2[i]}m`;
  }
  return out + text + "\x1B[0m";
};
const withColorNoop = (text, ..._colors) => text;
const colors = {
  bold: "1",
  red: "31",
  green: "32",
  yellow: "33",
  blue: "34",
  cyan: "36",
  white: "37",
  gray: "90",
  black: "30",
  bgBrightRed: "101"
};
const logLevelColors = {
  None: [],
  All: [],
  Trace: [colors.gray],
  Debug: [colors.blue],
  Info: [colors.green],
  Warning: [colors.yellow],
  Error: [colors.red],
  Fatal: [colors.bgBrightRed, colors.black]
};
const logLevelStyle = {
  None: "",
  All: "",
  Trace: "color:gray",
  Debug: "color:blue",
  Info: "color:green",
  Warning: "color:orange",
  Error: "color:red",
  Fatal: "background-color:red;color:white"
};
const defaultDateFormat$1 = (date) => `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
const hasProcessStdout = typeof process === "object" && process !== null && typeof process.stdout === "object" && process.stdout !== null;
const processStdoutIsTTY = hasProcessStdout && process.stdout.isTTY === true;
const hasProcessStdoutOrDeno = hasProcessStdout || "Deno" in globalThis;
const prettyLogger$1 = (options2) => {
  const mode_ = (options2 == null ? void 0 : options2.mode) ?? "auto";
  const mode = mode_ === "auto" ? hasProcessStdoutOrDeno ? "tty" : "browser" : mode_;
  const isBrowser = mode === "browser";
  const showColors = typeof (options2 == null ? void 0 : options2.colors) === "boolean" ? options2.colors : processStdoutIsTTY || isBrowser;
  const formatDate2 = (options2 == null ? void 0 : options2.formatDate) ?? defaultDateFormat$1;
  return isBrowser ? prettyLoggerBrowser({
    colors: showColors,
    formatDate: formatDate2
  }) : prettyLoggerTty({
    colors: showColors,
    formatDate: formatDate2,
    stderr: (options2 == null ? void 0 : options2.stderr) === true
  });
};
const prettyLoggerTty = (options2) => {
  const processIsBun = typeof process === "object" && "isBun" in process && process.isBun === true;
  const color = options2.colors ? withColor : withColorNoop;
  return makeLogger(({
    annotations: annotations2,
    cause,
    context: context2,
    date,
    fiberId: fiberId2,
    logLevel,
    message: message_,
    spans
  }) => {
    const services = getOrDefault(context2, currentServices);
    const console2 = get$e(services, consoleTag).unsafe;
    const log2 = options2.stderr === true ? console2.error : console2.log;
    const message = ensure(message_);
    let firstLine = color(`[${options2.formatDate(date)}]`, colors.white) + ` ${color(logLevel.label, ...logLevelColors[logLevel._tag])} (${threadName$1(fiberId2)})`;
    if (isCons(spans)) {
      const now = date.getTime();
      const render$1 = render(now);
      for (const span2 of spans) {
        firstLine += " " + render$1(span2);
      }
    }
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += " " + color(firstMaybeString, colors.bold, colors.cyan);
        messageIndex++;
      }
    }
    log2(firstLine);
    if (!processIsBun) console2.group();
    if (!isEmpty$4(cause)) {
      log2(pretty$1(cause, {
        renderErrorCause: true
      }));
    }
    if (messageIndex < message.length) {
      for (; messageIndex < message.length; messageIndex++) {
        log2(redact$1(message[messageIndex]));
      }
    }
    if (size$4(annotations2) > 0) {
      for (const [key, value2] of annotations2) {
        log2(color(`${key}:`, colors.bold, colors.white), redact$1(value2));
      }
    }
    if (!processIsBun) console2.groupEnd();
  });
};
const prettyLoggerBrowser = (options2) => {
  const color = options2.colors ? "%c" : "";
  return makeLogger(({
    annotations: annotations2,
    cause,
    context: context2,
    date,
    fiberId: fiberId2,
    logLevel,
    message: message_,
    spans
  }) => {
    const services = getOrDefault(context2, currentServices);
    const console2 = get$e(services, consoleTag).unsafe;
    const message = ensure(message_);
    let firstLine = `${color}[${options2.formatDate(date)}]`;
    const firstParams = [];
    if (options2.colors) {
      firstParams.push("color:gray");
    }
    firstLine += ` ${color}${logLevel.label}${color} (${threadName$1(fiberId2)})`;
    if (options2.colors) {
      firstParams.push(logLevelStyle[logLevel._tag], "");
    }
    if (isCons(spans)) {
      const now = date.getTime();
      const render$1 = render(now);
      for (const span2 of spans) {
        firstLine += " " + render$1(span2);
      }
    }
    firstLine += ":";
    let messageIndex = 0;
    if (message.length > 0) {
      const firstMaybeString = structuredMessage(message[0]);
      if (typeof firstMaybeString === "string") {
        firstLine += ` ${color}${firstMaybeString}`;
        if (options2.colors) {
          firstParams.push("color:deepskyblue");
        }
        messageIndex++;
      }
    }
    console2.groupCollapsed(firstLine, ...firstParams);
    if (!isEmpty$4(cause)) {
      console2.error(pretty$1(cause, {
        renderErrorCause: true
      }));
    }
    if (messageIndex < message.length) {
      for (; messageIndex < message.length; messageIndex++) {
        console2.log(redact$1(message[messageIndex]));
      }
    }
    if (size$4(annotations2) > 0) {
      for (const [key, value2] of annotations2) {
        const redacted = redact$1(value2);
        if (options2.colors) {
          console2.log(`%c${key}:`, "color:gray", redacted);
        } else {
          console2.log(`${key}:`, redacted);
        }
      }
    }
    console2.groupEnd();
  });
};
const MetricBoundariesSymbolKey = "effect/MetricBoundaries";
const MetricBoundariesTypeId = /* @__PURE__ */ Symbol.for(MetricBoundariesSymbolKey);
class MetricBoundariesImpl {
  constructor(values) {
    __publicField(this, "values");
    __publicField(this, _y, MetricBoundariesTypeId);
    __publicField(this, "_hash");
    this.values = values;
    this._hash = pipe(string(MetricBoundariesSymbolKey), combine$7(array(this.values)));
  }
  [(_y = MetricBoundariesTypeId, symbol$1)]() {
    return this._hash;
  }
  [symbol](u) {
    return isMetricBoundaries(u) && equals$1(this.values, u.values);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const isMetricBoundaries = (u) => hasProperty(u, MetricBoundariesTypeId);
const fromIterable$2 = (iterable) => {
  const values = pipe(iterable, appendAll$2(of$2(Number.POSITIVE_INFINITY)), dedupe);
  return new MetricBoundariesImpl(values);
};
const exponential$2 = (options2) => pipe(makeBy(options2.count - 1, (i) => options2.start * Math.pow(options2.factor, i)), unsafeFromArray, fromIterable$2);
const MetricKeyTypeSymbolKey = "effect/MetricKeyType";
const MetricKeyTypeTypeId = /* @__PURE__ */ Symbol.for(MetricKeyTypeSymbolKey);
const CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter";
const CounterKeyTypeTypeId = /* @__PURE__ */ Symbol.for(CounterKeyTypeSymbolKey);
const FrequencyKeyTypeSymbolKey = "effect/MetricKeyType/Frequency";
const FrequencyKeyTypeTypeId = /* @__PURE__ */ Symbol.for(FrequencyKeyTypeSymbolKey);
const GaugeKeyTypeSymbolKey = "effect/MetricKeyType/Gauge";
const GaugeKeyTypeTypeId = /* @__PURE__ */ Symbol.for(GaugeKeyTypeSymbolKey);
const HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram";
const HistogramKeyTypeTypeId = /* @__PURE__ */ Symbol.for(HistogramKeyTypeSymbolKey);
const SummaryKeyTypeSymbolKey = "effect/MetricKeyType/Summary";
const SummaryKeyTypeTypeId = /* @__PURE__ */ Symbol.for(SummaryKeyTypeSymbolKey);
const metricKeyTypeVariance = {
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _Out: (_) => _
};
class CounterKeyType {
  constructor(incremental, bigint) {
    __publicField(this, "incremental");
    __publicField(this, "bigint");
    __publicField(this, _A, metricKeyTypeVariance);
    __publicField(this, _z, CounterKeyTypeTypeId);
    __publicField(this, "_hash");
    this.incremental = incremental;
    this.bigint = bigint;
    this._hash = string(CounterKeyTypeSymbolKey);
  }
  [(_A = MetricKeyTypeTypeId, _z = CounterKeyTypeTypeId, symbol$1)]() {
    return this._hash;
  }
  [symbol](that) {
    return isCounterKey(that);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
class HistogramKeyType {
  constructor(boundaries) {
    __publicField(this, "boundaries");
    __publicField(this, _C, metricKeyTypeVariance);
    __publicField(this, _B, HistogramKeyTypeTypeId);
    __publicField(this, "_hash");
    this.boundaries = boundaries;
    this._hash = pipe(string(HistogramKeyTypeSymbolKey), combine$7(hash(this.boundaries)));
  }
  [(_C = MetricKeyTypeTypeId, _B = HistogramKeyTypeTypeId, symbol$1)]() {
    return this._hash;
  }
  [symbol](that) {
    return isHistogramKey(that) && equals$1(this.boundaries, that.boundaries);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const counter$4 = (options2) => new CounterKeyType((options2 == null ? void 0 : options2.incremental) ?? false, (options2 == null ? void 0 : options2.bigint) ?? false);
const histogram$4 = (boundaries) => {
  return new HistogramKeyType(boundaries);
};
const isCounterKey = (u) => hasProperty(u, CounterKeyTypeTypeId);
const isFrequencyKey = (u) => hasProperty(u, FrequencyKeyTypeTypeId);
const isGaugeKey = (u) => hasProperty(u, GaugeKeyTypeTypeId);
const isHistogramKey = (u) => hasProperty(u, HistogramKeyTypeTypeId);
const isSummaryKey = (u) => hasProperty(u, SummaryKeyTypeTypeId);
const MetricKeySymbolKey = "effect/MetricKey";
const MetricKeyTypeId = /* @__PURE__ */ Symbol.for(MetricKeySymbolKey);
const metricKeyVariance = {
  /* c8 ignore next */
  _Type: (_) => _
};
const arrayEquivilence = /* @__PURE__ */ getEquivalence$2(equals$1);
class MetricKeyImpl {
  constructor(name, keyType, description, tags = []) {
    __publicField(this, "name");
    __publicField(this, "keyType");
    __publicField(this, "description");
    __publicField(this, "tags");
    __publicField(this, _D, metricKeyVariance);
    __publicField(this, "_hash");
    this.name = name;
    this.keyType = keyType;
    this.description = description;
    this.tags = tags;
    this._hash = pipe(string(this.name + this.description), combine$7(hash(this.keyType)), combine$7(array(this.tags)));
  }
  [(_D = MetricKeyTypeId, symbol$1)]() {
    return this._hash;
  }
  [symbol](u) {
    return isMetricKey(u) && this.name === u.name && equals$1(this.keyType, u.keyType) && equals$1(this.description, u.description) && arrayEquivilence(this.tags, u.tags);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const isMetricKey = (u) => hasProperty(u, MetricKeyTypeId);
const counter$3 = (name, options2) => new MetricKeyImpl(name, counter$4(options2), fromNullable(options2 == null ? void 0 : options2.description));
const histogram$3 = (name, boundaries, description) => new MetricKeyImpl(name, histogram$4(boundaries), fromNullable(description));
const taggedWithLabels$1 = /* @__PURE__ */ dual(2, (self2, extraTags) => extraTags.length === 0 ? self2 : new MetricKeyImpl(self2.name, self2.keyType, self2.description, union$2(self2.tags, extraTags)));
const MetricStateSymbolKey = "effect/MetricState";
const MetricStateTypeId = /* @__PURE__ */ Symbol.for(MetricStateSymbolKey);
const CounterStateSymbolKey = "effect/MetricState/Counter";
const CounterStateTypeId = /* @__PURE__ */ Symbol.for(CounterStateSymbolKey);
const FrequencyStateSymbolKey = "effect/MetricState/Frequency";
const FrequencyStateTypeId = /* @__PURE__ */ Symbol.for(FrequencyStateSymbolKey);
const GaugeStateSymbolKey = "effect/MetricState/Gauge";
const GaugeStateTypeId = /* @__PURE__ */ Symbol.for(GaugeStateSymbolKey);
const HistogramStateSymbolKey = "effect/MetricState/Histogram";
const HistogramStateTypeId = /* @__PURE__ */ Symbol.for(HistogramStateSymbolKey);
const SummaryStateSymbolKey = "effect/MetricState/Summary";
const SummaryStateTypeId = /* @__PURE__ */ Symbol.for(SummaryStateSymbolKey);
const metricStateVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
class CounterState {
  constructor(count) {
    __publicField(this, "count");
    __publicField(this, _F, metricStateVariance);
    __publicField(this, _E, CounterStateTypeId);
    this.count = count;
  }
  [(_F = MetricStateTypeId, _E = CounterStateTypeId, symbol$1)]() {
    return pipe(hash(CounterStateSymbolKey), combine$7(hash(this.count)), cached$1(this));
  }
  [symbol](that) {
    return isCounterState(that) && this.count === that.count;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const arrayEquals = /* @__PURE__ */ getEquivalence$2(equals$1);
class FrequencyState {
  constructor(occurrences) {
    __publicField(this, "occurrences");
    __publicField(this, _H, metricStateVariance);
    __publicField(this, _G, FrequencyStateTypeId);
    __publicField(this, "_hash");
    this.occurrences = occurrences;
  }
  [(_H = MetricStateTypeId, _G = FrequencyStateTypeId, symbol$1)]() {
    return pipe(string(FrequencyStateSymbolKey), combine$7(array(fromIterable$8(this.occurrences.entries()))), cached$1(this));
  }
  [symbol](that) {
    return isFrequencyState(that) && arrayEquals(fromIterable$8(this.occurrences.entries()), fromIterable$8(that.occurrences.entries()));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
class GaugeState {
  constructor(value2) {
    __publicField(this, "value");
    __publicField(this, _J, metricStateVariance);
    __publicField(this, _I, GaugeStateTypeId);
    this.value = value2;
  }
  [(_J = MetricStateTypeId, _I = GaugeStateTypeId, symbol$1)]() {
    return pipe(hash(GaugeStateSymbolKey), combine$7(hash(this.value)), cached$1(this));
  }
  [symbol](u) {
    return isGaugeState(u) && this.value === u.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
class HistogramState {
  constructor(buckets, count, min2, max, sum2) {
    __publicField(this, "buckets");
    __publicField(this, "count");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "sum");
    __publicField(this, _L, metricStateVariance);
    __publicField(this, _K, HistogramStateTypeId);
    this.buckets = buckets;
    this.count = count;
    this.min = min2;
    this.max = max;
    this.sum = sum2;
  }
  [(_L = MetricStateTypeId, _K = HistogramStateTypeId, symbol$1)]() {
    return pipe(hash(HistogramStateSymbolKey), combine$7(hash(this.buckets)), combine$7(hash(this.count)), combine$7(hash(this.min)), combine$7(hash(this.max)), combine$7(hash(this.sum)), cached$1(this));
  }
  [symbol](that) {
    return isHistogramState(that) && equals$1(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
class SummaryState {
  constructor(error, quantiles, count, min2, max, sum2) {
    __publicField(this, "error");
    __publicField(this, "quantiles");
    __publicField(this, "count");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "sum");
    __publicField(this, _N, metricStateVariance);
    __publicField(this, _M, SummaryStateTypeId);
    this.error = error;
    this.quantiles = quantiles;
    this.count = count;
    this.min = min2;
    this.max = max;
    this.sum = sum2;
  }
  [(_N = MetricStateTypeId, _M = SummaryStateTypeId, symbol$1)]() {
    return pipe(hash(SummaryStateSymbolKey), combine$7(hash(this.error)), combine$7(hash(this.quantiles)), combine$7(hash(this.count)), combine$7(hash(this.min)), combine$7(hash(this.max)), combine$7(hash(this.sum)), cached$1(this));
  }
  [symbol](that) {
    return isSummaryState(that) && this.error === that.error && equals$1(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const counter$2 = (count) => new CounterState(count);
const frequency$1 = (occurrences) => {
  return new FrequencyState(occurrences);
};
const gauge$1 = (count) => new GaugeState(count);
const histogram$2 = (options2) => new HistogramState(options2.buckets, options2.count, options2.min, options2.max, options2.sum);
const summary$1 = (options2) => new SummaryState(options2.error, options2.quantiles, options2.count, options2.min, options2.max, options2.sum);
const isCounterState = (u) => hasProperty(u, CounterStateTypeId);
const isFrequencyState = (u) => hasProperty(u, FrequencyStateTypeId);
const isGaugeState = (u) => hasProperty(u, GaugeStateTypeId);
const isHistogramState = (u) => hasProperty(u, HistogramStateTypeId);
const isSummaryState = (u) => hasProperty(u, SummaryStateTypeId);
const MetricHookSymbolKey = "effect/MetricHook";
const MetricHookTypeId = /* @__PURE__ */ Symbol.for(MetricHookSymbolKey);
const metricHookVariance = {
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _Out: (_) => _
};
const make$x = (options2) => ({
  [MetricHookTypeId]: metricHookVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options2
});
const bigint0 = /* @__PURE__ */ BigInt(0);
const counter$1 = (key) => {
  let sum2 = key.keyType.bigint ? bigint0 : 0;
  const canUpdate = key.keyType.incremental ? key.keyType.bigint ? (value2) => value2 >= bigint0 : (value2) => value2 >= 0 : (_value2) => true;
  const update2 = (value2) => {
    if (canUpdate(value2)) {
      sum2 = sum2 + value2;
    }
  };
  return make$x({
    get: () => counter$2(sum2),
    update: update2,
    modify: update2
  });
};
const frequency = (key) => {
  const values = /* @__PURE__ */ new Map();
  for (const word of key.keyType.preregisteredWords) {
    values.set(word, 0);
  }
  const update2 = (word) => {
    const slotCount = values.get(word) ?? 0;
    values.set(word, slotCount + 1);
  };
  return make$x({
    get: () => frequency$1(values),
    update: update2,
    modify: update2
  });
};
const gauge = (_key, startAt) => {
  let value2 = startAt;
  return make$x({
    get: () => gauge$1(value2),
    update: (v) => {
      value2 = v;
    },
    modify: (v) => {
      value2 = value2 + v;
    }
  });
};
const histogram$1 = (key) => {
  const bounds = key.keyType.boundaries.values;
  const size2 = bounds.length;
  const values = new Uint32Array(size2 + 1);
  const boundaries = new Float32Array(size2);
  let count = 0;
  let sum2 = 0;
  let min2 = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  pipe(bounds, sort(Order$1), map$e((n, i) => {
    boundaries[i] = n;
  }));
  const update2 = (value2) => {
    let from = 0;
    let to = size2;
    while (from !== to) {
      const mid = Math.floor(from + (to - from) / 2);
      const boundary = boundaries[mid];
      if (value2 <= boundary) {
        to = mid;
      } else {
        from = mid;
      }
      if (to === from + 1) {
        if (value2 <= boundaries[from]) {
          to = from;
        } else {
          from = to;
        }
      }
    }
    values[from] = values[from] + 1;
    count = count + 1;
    sum2 = sum2 + value2;
    if (value2 < min2) {
      min2 = value2;
    }
    if (value2 > max) {
      max = value2;
    }
  };
  const getBuckets = () => {
    const builder = allocate(size2);
    let cumulated = 0;
    for (let i = 0; i < size2; i++) {
      const boundary = boundaries[i];
      const value2 = values[i];
      cumulated = cumulated + value2;
      builder[i] = [boundary, cumulated];
    }
    return builder;
  };
  return make$x({
    get: () => histogram$2({
      buckets: getBuckets(),
      count,
      min: min2,
      max,
      sum: sum2
    }),
    update: update2,
    modify: update2
  });
};
const summary = (key) => {
  const {
    error,
    maxAge,
    maxSize,
    quantiles
  } = key.keyType;
  const sortedQuantiles = pipe(quantiles, sort(Order$1));
  const values = allocate(maxSize);
  let head2 = 0;
  let count = 0;
  let sum2 = 0;
  let min2 = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  const snapshot = (now) => {
    const builder = [];
    let i = 0;
    while (i !== maxSize - 1) {
      const item = values[i];
      if (item != null) {
        const [t, v] = item;
        const age = millis(now - t);
        if (greaterThanOrEqualTo(age, zero) && lessThanOrEqualTo(age, maxAge)) {
          builder.push(v);
        }
      }
      i = i + 1;
    }
    return calculateQuantiles(error, sortedQuantiles, sort(builder, Order$1));
  };
  const observe = (value2, timestamp) => {
    if (maxSize > 0) {
      head2 = head2 + 1;
      const target = head2 % maxSize;
      values[target] = [timestamp, value2];
    }
    count = count + 1;
    sum2 = sum2 + value2;
    if (value2 < min2) {
      min2 = value2;
    }
    if (value2 > max) {
      max = value2;
    }
  };
  return make$x({
    get: () => summary$1({
      error,
      quantiles: snapshot(Date.now()),
      count,
      min: min2,
      max,
      sum: sum2
    }),
    update: ([value2, timestamp]) => observe(value2, timestamp),
    modify: ([value2, timestamp]) => observe(value2, timestamp)
  });
};
const calculateQuantiles = (error, sortedQuantiles, sortedSamples) => {
  const sampleCount = sortedSamples.length;
  if (!isNonEmptyReadonlyArray(sortedQuantiles)) {
    return empty$u();
  }
  const head2 = sortedQuantiles[0];
  const tail = sortedQuantiles.slice(1);
  const resolvedHead = resolveQuantile(error, sampleCount, none$4(), 0, head2, sortedSamples);
  const resolved = of$3(resolvedHead);
  tail.forEach((quantile) => {
    resolved.push(resolveQuantile(error, sampleCount, resolvedHead.value, resolvedHead.consumed, quantile, resolvedHead.rest));
  });
  return map$e(resolved, (rq) => [rq.quantile, rq.value]);
};
const resolveQuantile = (error, sampleCount, current, consumed, quantile, rest) => {
  let error_1 = error;
  let sampleCount_1 = sampleCount;
  let current_1 = current;
  let consumed_1 = consumed;
  let quantile_1 = quantile;
  let rest_1 = rest;
  let error_2 = error;
  let sampleCount_2 = sampleCount;
  let current_2 = current;
  let consumed_2 = consumed;
  let quantile_2 = quantile;
  let rest_2 = rest;
  while (1) {
    if (!isNonEmptyReadonlyArray(rest_1)) {
      return {
        quantile: quantile_1,
        value: none$4(),
        consumed: consumed_1,
        rest: []
      };
    }
    if (quantile_1 === 1) {
      return {
        quantile: quantile_1,
        value: some(lastNonEmpty(rest_1)),
        consumed: consumed_1 + rest_1.length,
        rest: []
      };
    }
    const headValue = headNonEmpty$1(rest_1);
    const sameHead = span(rest_1, (n) => n === headValue);
    const desired = quantile_1 * sampleCount_1;
    const allowedError = error_1 / 2 * desired;
    const candConsumed = consumed_1 + sameHead[0].length;
    const candError = Math.abs(candConsumed - desired);
    if (candConsumed < desired - allowedError) {
      error_2 = error_1;
      sampleCount_2 = sampleCount_1;
      current_2 = head$3(rest_1);
      consumed_2 = candConsumed;
      quantile_2 = quantile_1;
      rest_2 = sameHead[1];
      error_1 = error_2;
      sampleCount_1 = sampleCount_2;
      current_1 = current_2;
      consumed_1 = consumed_2;
      quantile_1 = quantile_2;
      rest_1 = rest_2;
      continue;
    }
    if (candConsumed > desired + allowedError) {
      const valueToReturn = isNone(current_1) ? some(headValue) : current_1;
      return {
        quantile: quantile_1,
        value: valueToReturn,
        consumed: consumed_1,
        rest: rest_1
      };
    }
    switch (current_1._tag) {
      case "None": {
        error_2 = error_1;
        sampleCount_2 = sampleCount_1;
        current_2 = head$3(rest_1);
        consumed_2 = candConsumed;
        quantile_2 = quantile_1;
        rest_2 = sameHead[1];
        error_1 = error_2;
        sampleCount_1 = sampleCount_2;
        current_1 = current_2;
        consumed_1 = consumed_2;
        quantile_1 = quantile_2;
        rest_1 = rest_2;
        continue;
      }
      case "Some": {
        const prevError = Math.abs(desired - current_1.value);
        if (candError < prevError) {
          error_2 = error_1;
          sampleCount_2 = sampleCount_1;
          current_2 = head$3(rest_1);
          consumed_2 = candConsumed;
          quantile_2 = quantile_1;
          rest_2 = sameHead[1];
          error_1 = error_2;
          sampleCount_1 = sampleCount_2;
          current_1 = current_2;
          consumed_1 = consumed_2;
          quantile_1 = quantile_2;
          rest_1 = rest_2;
          continue;
        }
        return {
          quantile: quantile_1,
          value: some(current_1.value),
          consumed: consumed_1,
          rest: rest_1
        };
      }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
};
const MetricPairSymbolKey = "effect/MetricPair";
const MetricPairTypeId = /* @__PURE__ */ Symbol.for(MetricPairSymbolKey);
const metricPairVariance = {
  /* c8 ignore next */
  _Type: (_) => _
};
const unsafeMake$4 = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return pipeArguments(this, arguments);
    }
  };
};
const MetricRegistrySymbolKey = "effect/MetricRegistry";
const MetricRegistryTypeId = /* @__PURE__ */ Symbol.for(MetricRegistrySymbolKey);
_O = MetricRegistryTypeId;
class MetricRegistryImpl {
  constructor() {
    __publicField(this, _O, MetricRegistryTypeId);
    __publicField(this, "map", /* @__PURE__ */ empty$g());
  }
  snapshot() {
    const result = [];
    for (const [key, hook] of this.map) {
      result.push(unsafeMake$4(key, hook.get()));
    }
    return result;
  }
  get(key) {
    const hook = pipe(this.map, get$9(key), getOrUndefined);
    if (hook == null) {
      if (isCounterKey(key.keyType)) {
        return this.getCounter(key);
      }
      if (isGaugeKey(key.keyType)) {
        return this.getGauge(key);
      }
      if (isFrequencyKey(key.keyType)) {
        return this.getFrequency(key);
      }
      if (isHistogramKey(key.keyType)) {
        return this.getHistogram(key);
      }
      if (isSummaryKey(key.keyType)) {
        return this.getSummary(key);
      }
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
    } else {
      return hook;
    }
  }
  getCounter(key) {
    let value2 = pipe(this.map, get$9(key), getOrUndefined);
    if (value2 == null) {
      const counter2 = counter$1(key);
      if (!pipe(this.map, has(key))) {
        pipe(this.map, set$5(key, counter2));
      }
      value2 = counter2;
    }
    return value2;
  }
  getFrequency(key) {
    let value2 = pipe(this.map, get$9(key), getOrUndefined);
    if (value2 == null) {
      const frequency$12 = frequency(key);
      if (!pipe(this.map, has(key))) {
        pipe(this.map, set$5(key, frequency$12));
      }
      value2 = frequency$12;
    }
    return value2;
  }
  getGauge(key) {
    let value2 = pipe(this.map, get$9(key), getOrUndefined);
    if (value2 == null) {
      const gauge$12 = gauge(key, key.keyType.bigint ? BigInt(0) : 0);
      if (!pipe(this.map, has(key))) {
        pipe(this.map, set$5(key, gauge$12));
      }
      value2 = gauge$12;
    }
    return value2;
  }
  getHistogram(key) {
    let value2 = pipe(this.map, get$9(key), getOrUndefined);
    if (value2 == null) {
      const histogram2 = histogram$1(key);
      if (!pipe(this.map, has(key))) {
        pipe(this.map, set$5(key, histogram2));
      }
      value2 = histogram2;
    }
    return value2;
  }
  getSummary(key) {
    let value2 = pipe(this.map, get$9(key), getOrUndefined);
    if (value2 == null) {
      const summary$12 = summary(key);
      if (!pipe(this.map, has(key))) {
        pipe(this.map, set$5(key, summary$12));
      }
      value2 = summary$12;
    }
    return value2;
  }
}
const make$w = () => {
  return new MetricRegistryImpl();
};
const MetricSymbolKey = "effect/Metric";
const MetricTypeId = /* @__PURE__ */ Symbol.for(MetricSymbolKey);
const metricVariance = {
  /* c8 ignore next */
  _Type: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _Out: (_) => _
};
const globalMetricRegistry = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Metric/globalMetricRegistry"), () => make$w());
const make$v = function(keyType, unsafeUpdate, unsafeValue, unsafeModify) {
  const metric = Object.assign((effect2) => tap$3(effect2, (a) => update(metric, a)), {
    [MetricTypeId]: metricVariance,
    keyType,
    unsafeUpdate,
    unsafeValue,
    unsafeModify,
    register() {
      this.unsafeValue([]);
      return this;
    },
    pipe() {
      return pipeArguments(this, arguments);
    }
  });
  return metric;
};
const counter = (name, options2) => fromMetricKey(counter$3(name, options2));
const fromMetricKey = (key) => {
  let untaggedHook;
  const hookCache = /* @__PURE__ */ new WeakMap();
  const hook = (extraTags) => {
    if (extraTags.length === 0) {
      if (untaggedHook !== void 0) {
        return untaggedHook;
      }
      untaggedHook = globalMetricRegistry.get(key);
      return untaggedHook;
    }
    let hook2 = hookCache.get(extraTags);
    if (hook2 !== void 0) {
      return hook2;
    }
    hook2 = globalMetricRegistry.get(taggedWithLabels$1(key, extraTags));
    hookCache.set(extraTags, hook2);
    return hook2;
  };
  return make$v(key.keyType, (input, extraTags) => hook(extraTags).update(input), (extraTags) => hook(extraTags).get(), (input, extraTags) => hook(extraTags).modify(input));
};
const histogram = (name, boundaries, description) => fromMetricKey(histogram$3(name, boundaries, description));
const tagged = /* @__PURE__ */ dual(3, (self2, key, value2) => taggedWithLabels(self2, [make$y(key, value2)]));
const taggedWithLabels = /* @__PURE__ */ dual(2, (self2, extraTags) => {
  return make$v(self2.keyType, (input, extraTags1) => self2.unsafeUpdate(input, union$2(extraTags, extraTags1)), (extraTags1) => self2.unsafeValue(union$2(extraTags, extraTags1)), (input, extraTags1) => self2.unsafeModify(input, union$2(extraTags, extraTags1)));
});
const update = /* @__PURE__ */ dual(2, (self2, input) => fiberRefGetWith(currentMetricLabels, (tags) => sync$5(() => self2.unsafeUpdate(input, tags))));
const RequestSymbolKey = "effect/Request";
const RequestTypeId = /* @__PURE__ */ Symbol.for(RequestSymbolKey);
const requestVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
const RequestPrototype = {
  ...StructuralPrototype,
  [RequestTypeId]: requestVariance
};
const Class$3 = /* @__PURE__ */ function() {
  function Class4(args2) {
    if (args2) {
      Object.assign(this, args2);
    }
  }
  Class4.prototype = RequestPrototype;
  return Class4;
}();
const complete = /* @__PURE__ */ dual(2, (self2, result) => fiberRefGetWith(currentRequestMap, (map2) => sync$5(() => {
  if (map2.has(self2)) {
    const entry = map2.get(self2);
    if (!entry.state.completed) {
      entry.state.completed = true;
      deferredUnsafeDone(entry.result, result);
    }
  }
})));
const SupervisorSymbolKey = "effect/Supervisor";
const SupervisorTypeId = /* @__PURE__ */ Symbol.for(SupervisorSymbolKey);
const supervisorVariance = {
  /* c8 ignore next */
  _T: (_) => _
};
_P = SupervisorTypeId;
const _ProxySupervisor = class _ProxySupervisor {
  constructor(underlying, value0) {
    __publicField(this, "underlying");
    __publicField(this, "value0");
    __publicField(this, _P, supervisorVariance);
    this.underlying = underlying;
    this.value0 = value0;
  }
  get value() {
    return this.value0;
  }
  onStart(context2, effect2, parent, fiber) {
    this.underlying.onStart(context2, effect2, parent, fiber);
  }
  onEnd(value2, fiber) {
    this.underlying.onEnd(value2, fiber);
  }
  onEffect(fiber, effect2) {
    this.underlying.onEffect(fiber, effect2);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new _ProxySupervisor(this, pipe(this.value, map$9(f)));
  }
  zip(right2) {
    return new Zip(this, right2);
  }
};
let ProxySupervisor = _ProxySupervisor;
_Q = SupervisorTypeId;
const _Zip = class _Zip {
  constructor(left2, right2) {
    __publicField(this, "left");
    __publicField(this, "right");
    __publicField(this, "_tag", "Zip");
    __publicField(this, _Q, supervisorVariance);
    this.left = left2;
    this.right = right2;
  }
  get value() {
    return zip$3(this.left.value, this.right.value);
  }
  onStart(context2, effect2, parent, fiber) {
    this.left.onStart(context2, effect2, parent, fiber);
    this.right.onStart(context2, effect2, parent, fiber);
  }
  onEnd(value2, fiber) {
    this.left.onEnd(value2, fiber);
    this.right.onEnd(value2, fiber);
  }
  onEffect(fiber, effect2) {
    this.left.onEffect(fiber, effect2);
    this.right.onEffect(fiber, effect2);
  }
  onSuspend(fiber) {
    this.left.onSuspend(fiber);
    this.right.onSuspend(fiber);
  }
  onResume(fiber) {
    this.left.onResume(fiber);
    this.right.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, map$9(f)));
  }
  zip(right2) {
    return new _Zip(this, right2);
  }
};
let Zip = _Zip;
const isZip = (self2) => hasProperty(self2, SupervisorTypeId) && isTagged(self2, "Zip");
_R = SupervisorTypeId;
class Const {
  constructor(effect2) {
    __publicField(this, "effect");
    __publicField(this, _R, supervisorVariance);
    this.effect = effect2;
  }
  get value() {
    return this.effect;
  }
  onStart(_context, _effect, _parent, _fiber) {
  }
  onEnd(_value2, _fiber) {
  }
  onEffect(_fiber, _effect) {
  }
  onSuspend(_fiber) {
  }
  onResume(_fiber) {
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, map$9(f)));
  }
  zip(right2) {
    return new Zip(this, right2);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
const fromEffect$5 = (effect2) => {
  return new Const(effect2);
};
const none = /* @__PURE__ */ globalValue("effect/Supervisor/none", () => fromEffect$5(void_$4));
const make$u = make$K;
const OP_EMPTY = "Empty";
const OP_ADD_SUPERVISOR = "AddSupervisor";
const OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
const OP_AND_THEN = "AndThen";
const empty$a = {
  _tag: OP_EMPTY
};
const combine = (self2, that) => {
  return {
    _tag: OP_AND_THEN,
    first: self2,
    second: that
  };
};
const patch$2 = (self2, supervisor) => {
  return patchLoop(supervisor, of$2(self2));
};
const patchLoop = (_supervisor, _patches) => {
  let supervisor = _supervisor;
  let patches = _patches;
  while (isNonEmpty$2(patches)) {
    const head2 = headNonEmpty(patches);
    switch (head2._tag) {
      case OP_EMPTY: {
        patches = tailNonEmpty(patches);
        break;
      }
      case OP_ADD_SUPERVISOR: {
        supervisor = supervisor.zip(head2.supervisor);
        patches = tailNonEmpty(patches);
        break;
      }
      case OP_REMOVE_SUPERVISOR: {
        supervisor = removeSupervisor(supervisor, head2.supervisor);
        patches = tailNonEmpty(patches);
        break;
      }
      case OP_AND_THEN: {
        patches = prepend$1(head2.first)(prepend$1(head2.second)(tailNonEmpty(patches)));
        break;
      }
    }
  }
  return supervisor;
};
const removeSupervisor = (self2, that) => {
  if (equals$1(self2, that)) {
    return none;
  } else {
    if (isZip(self2)) {
      return removeSupervisor(self2.left, that).zip(removeSupervisor(self2.right, that));
    } else {
      return self2;
    }
  }
};
const toSet = (self2) => {
  if (equals$1(self2, none)) {
    return empty$o();
  } else {
    if (isZip(self2)) {
      return pipe(toSet(self2.left), union(toSet(self2.right)));
    } else {
      return make$O(self2);
    }
  }
};
const diff = (oldValue, newValue) => {
  if (equals$1(oldValue, newValue)) {
    return empty$a;
  }
  const oldSupervisors = toSet(oldValue);
  const newSupervisors = toSet(newValue);
  const added = pipe(newSupervisors, difference(oldSupervisors), reduce$3(empty$a, (patch2, supervisor) => combine(patch2, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  })));
  const removed = pipe(oldSupervisors, difference(newSupervisors), reduce$3(empty$a, (patch2, supervisor) => combine(patch2, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  })));
  return combine(added, removed);
};
const differ = /* @__PURE__ */ make$u({
  empty: empty$a,
  patch: patch$2,
  combine,
  diff
});
const fiberStarted = /* @__PURE__ */ counter("effect_fiber_started", {
  incremental: true
});
const fiberActive = /* @__PURE__ */ counter("effect_fiber_active");
const fiberSuccesses = /* @__PURE__ */ counter("effect_fiber_successes", {
  incremental: true
});
const fiberFailures = /* @__PURE__ */ counter("effect_fiber_failures", {
  incremental: true
});
const fiberLifetimes = /* @__PURE__ */ tagged(/* @__PURE__ */ histogram("effect_fiber_lifetimes", /* @__PURE__ */ exponential$2({
  start: 0.5,
  factor: 2,
  count: 35
})), "time_unit", "milliseconds");
const EvaluationSignalContinue = "Continue";
const EvaluationSignalDone = "Done";
const EvaluationSignalYieldNow = "Yield";
const runtimeFiberVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
const absurd = (_) => {
  throw new Error(`BUG: FiberRuntime - ${toStringUnknown(_)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
};
const YieldedOp = /* @__PURE__ */ Symbol.for("effect/internal/fiberRuntime/YieldedOp");
const yieldedOpChannel = /* @__PURE__ */ globalValue("effect/internal/fiberRuntime/yieldedOpChannel", () => ({
  currentOp: null
}));
const contOpSuccess = {
  [OP_ON_SUCCESS$1]: (_, cont, value2) => {
    return internalCall(() => cont.effect_instruction_i1(value2));
  },
  ["OnStep"]: (_, _cont, value2) => {
    return exitSucceed$1(exitSucceed$1(value2));
  },
  [OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value2) => {
    return internalCall(() => cont.effect_instruction_i2(value2));
  },
  [OP_REVERT_FLAGS]: (self2, cont, value2) => {
    self2.patchRuntimeFlags(self2.currentRuntimeFlags, cont.patch);
    if (interruptible$3(self2.currentRuntimeFlags) && self2.isInterrupted()) {
      return exitFailCause$1(self2.getInterruptedCause());
    } else {
      return exitSucceed$1(value2);
    }
  },
  [OP_WHILE]: (self2, cont, value2) => {
    internalCall(() => cont.effect_instruction_i2(value2));
    if (internalCall(() => cont.effect_instruction_i0())) {
      self2.pushStack(cont);
      return internalCall(() => cont.effect_instruction_i1());
    } else {
      return void_$4;
    }
  },
  [OP_ITERATOR]: (self2, cont, value2) => {
    const state = internalCall(() => cont.effect_instruction_i0.next(value2));
    if (state.done) return exitSucceed$1(state.value);
    self2.pushStack(cont);
    return yieldWrapGet(state.value);
  }
};
const drainQueueWhileRunningTable = {
  [OP_INTERRUPT_SIGNAL]: (self2, runtimeFlags2, cur, message) => {
    self2.processNewInterruptSignal(message.cause);
    return interruptible$3(runtimeFlags2) ? exitFailCause$1(message.cause) : cur;
  },
  [OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [OP_STATEFUL]: (self2, runtimeFlags2, cur, message) => {
    message.onFiber(self2, running$1(runtimeFlags2));
    return cur;
  },
  [OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
    return flatMap$7(yieldNow$3(), () => cur);
  }
};
const runBlockedRequests = (self2) => forEachSequentialDiscard(flatten$5(self2), (requestsByRequestResolver) => forEachConcurrentDiscard(sequentialCollectionToChunk(requestsByRequestResolver), ([dataSource, sequential2]) => {
  const map2 = /* @__PURE__ */ new Map();
  const arr = [];
  for (const block of sequential2) {
    arr.push(toReadonlyArray(block));
    for (const entry of block) {
      map2.set(entry.request, entry);
    }
  }
  const flat = arr.flat();
  return fiberRefLocally(invokeWithInterrupt(dataSource.runAll(arr), flat, () => flat.forEach((entry) => {
    entry.listeners.interrupted = true;
  })), currentRequestMap, map2);
}, false, false));
const _version = /* @__PURE__ */ getCurrentVersion();
class FiberRuntime extends Class$4 {
  constructor(fiberId2, fiberRefs0, runtimeFlags0) {
    super();
    __publicField(this, _T, fiberVariance);
    __publicField(this, _S, runtimeFiberVariance);
    __publicField(this, "_fiberRefs");
    __publicField(this, "_fiberId");
    __publicField(this, "_queue", /* @__PURE__ */ new Array());
    __publicField(this, "_children", null);
    __publicField(this, "_observers", /* @__PURE__ */ new Array());
    __publicField(this, "_running", false);
    __publicField(this, "_stack", []);
    __publicField(this, "_asyncInterruptor", null);
    __publicField(this, "_asyncBlockingOn", null);
    __publicField(this, "_exitValue", null);
    __publicField(this, "_steps", []);
    __publicField(this, "_isYielding", false);
    __publicField(this, "currentRuntimeFlags");
    __publicField(this, "currentOpCount", 0);
    __publicField(this, "currentSupervisor");
    __publicField(this, "currentScheduler");
    __publicField(this, "currentTracer");
    __publicField(this, "currentSpan");
    __publicField(this, "currentContext");
    __publicField(this, "currentDefaultServices");
    __publicField(this, "run", () => {
      this.drainQueueOnCurrentThread();
    });
    this.currentRuntimeFlags = runtimeFlags0;
    this._fiberId = fiberId2;
    this._fiberRefs = fiberRefs0;
    if (runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(currentMetricLabels);
      fiberStarted.unsafeUpdate(1, tags);
      fiberActive.unsafeUpdate(1, tags);
    }
    this.refreshRefCache();
  }
  commit() {
    return join$2(this);
  }
  /**
   * The identity of the fiber.
   */
  id() {
    return this._fiberId;
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume(effect2) {
    this.tell(resume(effect2));
  }
  /**
   * The status of the fiber.
   */
  get status() {
    return this.ask((_, status) => status);
  }
  /**
   * Gets the fiber runtime flags.
   */
  get runtimeFlags() {
    return this.ask((state, status) => {
      if (isDone$3(status)) {
        return state.currentRuntimeFlags;
      }
      return status.runtimeFlags;
    });
  }
  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope() {
    return unsafeMake$5(this);
  }
  /**
   * Retrieves the immediate children of the fiber.
   */
  get children() {
    return this.ask((fiber) => Array.from(fiber.getChildren()));
  }
  /**
   * Gets the fiber's set of children.
   */
  getChildren() {
    if (this._children === null) {
      this._children = /* @__PURE__ */ new Set();
    }
    return this._children;
  }
  /**
   * Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
   * if the fiber has not been interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getInterruptedCause() {
    return this.getFiberRef(currentInterruptedCause);
  }
  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs() {
    return this.ask((fiber) => fiber.getFiberRefs());
  }
  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask(f) {
    return suspend$7(() => {
      const deferred = deferredUnsafeMake(this._fiberId);
      this.tell(stateful((fiber, status) => {
        deferredUnsafeDone(deferred, sync$5(() => f(fiber, status)));
      }));
      return deferredAwait(deferred);
    });
  }
  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(message) {
    this._queue.push(message);
    if (!this._running) {
      this._running = true;
      this.drainQueueLaterOnExecutor();
    }
  }
  get await() {
    return async_((resume2) => {
      const cb = (exit2) => resume2(succeed$a(exit2));
      this.tell(stateful((fiber, _) => {
        if (fiber._exitValue !== null) {
          cb(this._exitValue);
        } else {
          fiber.addObserver(cb);
        }
      }));
      return sync$5(() => this.tell(stateful((fiber, _) => {
        fiber.removeObserver(cb);
      })));
    }, this.id());
  }
  get inheritAll() {
    return withFiberRuntime$1((parentFiber, parentStatus) => {
      const parentFiberId = parentFiber.id();
      const parentFiberRefs = parentFiber.getFiberRefs();
      const parentRuntimeFlags = parentStatus.runtimeFlags;
      const childFiberRefs = this.getFiberRefs();
      const updatedFiberRefs = joinAs(parentFiberRefs, parentFiberId, childFiberRefs);
      parentFiber.setFiberRefs(updatedFiberRefs);
      const updatedRuntimeFlags = parentFiber.getFiberRef(currentRuntimeFlags);
      const patch2 = pipe(
        diff$3(parentRuntimeFlags, updatedRuntimeFlags),
        // Do not inherit WindDown or Interruption!
        exclude(Interruption),
        exclude(WindDown)
      );
      return updateRuntimeFlags(patch2);
    });
  }
  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  get poll() {
    return sync$5(() => fromNullable(this._exitValue));
  }
  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll() {
    return this._exitValue;
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(fiberId2) {
    return sync$5(() => this.tell(interruptSignal(interrupt$7(fiberId2))));
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  unsafeInterruptAsFork(fiberId2) {
    this.tell(interruptSignal(interrupt$7(fiberId2)));
  }
  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addObserver(observer) {
    if (this._exitValue !== null) {
      observer(this._exitValue);
    } else {
      this._observers.push(observer);
    }
  }
  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeObserver(observer) {
    this._observers = this._observers.filter((o) => o !== observer);
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRefs() {
    this.setFiberRef(currentRuntimeFlags, this.currentRuntimeFlags);
    return this._fiberRefs;
  }
  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef(fiberRef) {
    this._fiberRefs = delete_(this._fiberRefs, fiberRef);
  }
  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef(fiberRef) {
    if (this._fiberRefs.locals.has(fiberRef)) {
      return this._fiberRefs.locals.get(fiberRef)[0][1];
    }
    return fiberRef.initial;
  }
  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef(fiberRef, value2) {
    this._fiberRefs = updateAs(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef,
      value: value2
    });
    this.refreshRefCache();
  }
  refreshRefCache() {
    this.currentDefaultServices = this.getFiberRef(currentServices);
    this.currentTracer = this.currentDefaultServices.unsafeMap.get(tracerTag.key);
    this.currentSupervisor = this.getFiberRef(currentSupervisor);
    this.currentScheduler = this.getFiberRef(currentScheduler$1);
    this.currentContext = this.getFiberRef(currentContext$1);
    this.currentSpan = this.currentContext.unsafeMap.get(spanTag.key);
  }
  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(fiberRefs2) {
    this._fiberRefs = fiberRefs2;
    this.refreshRefCache();
  }
  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(child) {
    this.getChildren().add(child);
  }
  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(child) {
    this.getChildren().delete(child);
  }
  /**
   * Transfers all children of this fiber that are currently running to the
   * specified fiber scope.
   *
   * **NOTE**: This method must be invoked by the fiber itself after it has
   * evaluated the effects but prior to exiting.
   */
  transferChildren(scope2) {
    const children = this._children;
    this._children = null;
    if (children !== null && children.size > 0) {
      for (const child of children) {
        if (child._exitValue === null) {
          scope2.add(this.currentRuntimeFlags, child);
        }
      }
    }
  }
  /**
   * On the current thread, executes all messages in the fiber's inbox. This
   * method may return before all work is done, in the event the fiber executes
   * an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueOnCurrentThread() {
    let recurse = true;
    while (recurse) {
      let evaluationSignal = EvaluationSignalContinue;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        while (evaluationSignal === EvaluationSignalContinue) {
          evaluationSignal = this._queue.length === 0 ? EvaluationSignalDone : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
        }
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
      }
      if (this._queue.length > 0 && !this._running) {
        this._running = true;
        if (evaluationSignal === EvaluationSignalYieldNow) {
          this.drainQueueLaterOnExecutor();
          recurse = false;
        } else {
          recurse = true;
        }
      } else {
        recurse = false;
      }
    }
  }
  /**
   * Schedules the execution of all messages in the fiber's inbox.
   *
   * This method will return immediately after the scheduling
   * operation is completed, but potentially before such messages have been
   * executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueLaterOnExecutor() {
    this.currentScheduler.scheduleTask(this.run, this.getFiberRef(currentSchedulingPriority$1));
  }
  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(runtimeFlags2, cur0) {
    let cur = cur0;
    while (this._queue.length > 0) {
      const message = this._queue.splice(0, 1)[0];
      cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags2, cur, message);
    }
    return cur;
  }
  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted() {
    return !isEmpty$4(this.getFiberRef(currentInterruptedCause));
  }
  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(cause) {
    const oldSC = this.getFiberRef(currentInterruptedCause);
    this.setFiberRef(currentInterruptedCause, sequential$3(oldSC, cause));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause) {
    this.addInterruptedCause(cause);
    this.sendInterruptSignalToAllChildren();
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0) {
      return false;
    }
    let told = false;
    for (const child of this._children) {
      child.tell(interruptSignal(interrupt$7(this.id())));
      told = true;
    }
    return told;
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const it = this._children.values();
      this._children = null;
      let isDone2 = false;
      const body = () => {
        const next = it.next();
        if (!next.done) {
          return asVoid$1(next.value.await);
        } else {
          return sync$5(() => {
            isDone2 = true;
          });
        }
      };
      return whileLoop({
        while: () => !isDone2,
        body,
        step: () => {
        }
      });
    }
    return null;
  }
  reportExitValue(exit2) {
    if (runtimeMetrics(this.currentRuntimeFlags)) {
      const tags = this.getFiberRef(currentMetricLabels);
      const startTimeMillis = this.id().startTimeMillis;
      const endTimeMillis = Date.now();
      fiberLifetimes.unsafeUpdate(endTimeMillis - startTimeMillis, tags);
      fiberActive.unsafeUpdate(-1, tags);
      switch (exit2._tag) {
        case OP_SUCCESS: {
          fiberSuccesses.unsafeUpdate(1, tags);
          break;
        }
        case OP_FAILURE: {
          fiberFailures.unsafeUpdate(1, tags);
          break;
        }
      }
    }
    if (exit2._tag === "Failure") {
      const level = this.getFiberRef(currentUnhandledErrorLogLevel);
      if (!isInterruptedOnly$1(exit2.cause) && level._tag === "Some") {
        this.log("Fiber terminated with an unhandled error", exit2.cause, level);
      }
    }
  }
  setExitValue(exit2) {
    this._exitValue = exit2;
    this.reportExitValue(exit2);
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit2);
    }
    this._observers = [];
  }
  getLoggers() {
    return this.getFiberRef(currentLoggers$1);
  }
  log(message, cause, overrideLogLevel) {
    const logLevel = isSome(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(currentLogLevel);
    const minimumLogLevel = this.getFiberRef(currentMinimumLogLevel);
    if (greaterThan(minimumLogLevel, logLevel)) {
      return;
    }
    const spans = this.getFiberRef(currentLogSpan);
    const annotations2 = this.getFiberRef(currentLogAnnotations);
    const loggers = this.getLoggers();
    const contextMap = this.getFiberRefs();
    if (size$5(loggers) > 0) {
      const clockService = get$e(this.getFiberRef(currentServices), clockTag);
      const date = new Date(clockService.unsafeCurrentTimeMillis());
      withRedactableContext(contextMap, () => {
        for (const logger of loggers) {
          logger.log({
            fiberId: this.id(),
            logLevel,
            message,
            cause,
            context: contextMap,
            spans,
            annotations: annotations2,
            date
          });
        }
      });
    }
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message) {
    switch (message._tag) {
      case OP_YIELD_NOW: {
        return EvaluationSignalYieldNow;
      }
      case OP_INTERRUPT_SIGNAL: {
        this.processNewInterruptSignal(message.cause);
        if (this._asyncInterruptor !== null) {
          this._asyncInterruptor(exitFailCause$1(message.cause));
          this._asyncInterruptor = null;
        }
        return EvaluationSignalContinue;
      }
      case OP_RESUME: {
        this._asyncInterruptor = null;
        this._asyncBlockingOn = null;
        this.evaluateEffect(message.effect);
        return EvaluationSignalContinue;
      }
      case OP_STATEFUL: {
        message.onFiber(this, this._exitValue !== null ? done$5 : suspended(this.currentRuntimeFlags, this._asyncBlockingOn));
        return EvaluationSignalContinue;
      }
      default: {
        return absurd(message);
      }
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0) {
    this.currentSupervisor.onResume(this);
    try {
      let effect2 = interruptible$3(this.currentRuntimeFlags) && this.isInterrupted() ? exitFailCause$1(this.getInterruptedCause()) : effect0;
      while (effect2 !== null) {
        const eff = effect2;
        const exit2 = this.runLoop(eff);
        if (exit2 === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          yieldedOpChannel.currentOp = null;
          if (op._op === OP_YIELD$1) {
            if (cooperativeYielding(this.currentRuntimeFlags)) {
              this.tell(yieldNow$1());
              this.tell(resume(exitVoid$1));
              effect2 = null;
            } else {
              effect2 = exitVoid$1;
            }
          } else if (op._op === OP_ASYNC) {
            effect2 = null;
          }
        } else {
          this.currentRuntimeFlags = pipe(this.currentRuntimeFlags, enable$1(WindDown));
          const interruption2 = this.interruptAllChildren();
          if (interruption2 !== null) {
            effect2 = flatMap$7(interruption2, () => exit2);
          } else {
            if (this._queue.length === 0) {
              this.setExitValue(exit2);
            } else {
              this.tell(resume(exit2));
            }
            effect2 = null;
          }
        }
      }
    } finally {
      this.currentSupervisor.onSuspend(this);
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on the current
   * thread. This can be called to "kick off" execution of a fiber after it has
   * been created, in hopes that the effect can be executed synchronously.
   *
   * This is not the normal way of starting a fiber, but it is useful when the
   * express goal of executing the fiber is to synchronously produce its exit.
   */
  start(effect2) {
    if (!this._running) {
      this._running = true;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        this.evaluateEffect(effect2);
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
        if (this._queue.length > 0) {
          this.drainQueueLaterOnExecutor();
        }
      }
    } else {
      this.tell(resume(effect2));
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(effect2) {
    this.tell(resume(effect2));
  }
  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(oldRuntimeFlags, patch2) {
    const newRuntimeFlags = patch$6(oldRuntimeFlags, patch2);
    globalThis[currentFiberURI] = this;
    this.currentRuntimeFlags = newRuntimeFlags;
    return newRuntimeFlags;
  }
  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(runtimeFlags2, asyncRegister) {
    let alreadyCalled = false;
    const callback = (effect2) => {
      if (!alreadyCalled) {
        alreadyCalled = true;
        this.tell(resume(effect2));
      }
    };
    if (interruptible$3(runtimeFlags2)) {
      this._asyncInterruptor = callback;
    }
    try {
      asyncRegister(callback);
    } catch (e) {
      callback(failCause$9(die$7(e)));
    }
  }
  pushStack(cont) {
    this._stack.push(cont);
    if (cont._op === "OnStep") {
      this._steps.push({
        refs: this.getFiberRefs(),
        flags: this.currentRuntimeFlags
      });
    }
  }
  popStack() {
    const item = this._stack.pop();
    if (item) {
      if (item._op === "OnStep") {
        this._steps.pop();
      }
      return item;
    }
    return;
  }
  getNextSuccessCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OP_ON_FAILURE$1) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  getNextFailCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OP_ON_SUCCESS$1 && frame._op !== OP_WHILE && frame._op !== OP_ITERATOR) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  [(_T = FiberTypeId, _S = RuntimeFiberTypeId, OP_TAG)](op) {
    return sync$5(() => unsafeGet$3(this.currentContext, op));
  }
  ["Left"](op) {
    return fail$b(op.left);
  }
  ["None"](_) {
    return fail$b(new NoSuchElementException$1());
  }
  ["Right"](op) {
    return exitSucceed$1(op.right);
  }
  ["Some"](op) {
    return exitSucceed$1(op.value);
  }
  ["Micro"](op) {
    return unsafeAsync((microResume) => {
      let resume2 = microResume;
      const fiber = runFork$2(provideContext$3(op, this.currentContext));
      fiber.addObserver((exit2) => {
        if (exit2._tag === "Success") {
          return resume2(exitSucceed$1(exit2.value));
        }
        switch (exit2.cause._tag) {
          case "Interrupt": {
            return resume2(exitFailCause$1(interrupt$7(none$2)));
          }
          case "Fail": {
            return resume2(fail$b(exit2.cause.error));
          }
          case "Die": {
            return resume2(die$6(exit2.cause.defect));
          }
        }
      });
      return unsafeAsync((abortResume) => {
        resume2 = (_) => {
          abortResume(void_$4);
        };
        fiber.unsafeInterrupt();
      });
    });
  }
  [OP_SYNC$1](op) {
    const value2 = internalCall(() => op.effect_instruction_i0());
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, value2);
    } else {
      yieldedOpChannel.currentOp = exitSucceed$1(value2);
      return YieldedOp;
    }
  }
  [OP_SUCCESS](op) {
    const oldCur = op;
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, oldCur.effect_instruction_i0);
    } else {
      yieldedOpChannel.currentOp = oldCur;
      return YieldedOp;
    }
  }
  [OP_FAILURE](op) {
    const cause = op.effect_instruction_i0;
    const cont = this.getNextFailCont();
    if (cont !== void 0) {
      switch (cont._op) {
        case OP_ON_FAILURE$1:
        case OP_ON_SUCCESS_AND_FAILURE: {
          if (!(interruptible$3(this.currentRuntimeFlags) && this.isInterrupted())) {
            return internalCall(() => cont.effect_instruction_i1(cause));
          } else {
            return exitFailCause$1(stripFailures(cause));
          }
        }
        case "OnStep": {
          if (!(interruptible$3(this.currentRuntimeFlags) && this.isInterrupted())) {
            return exitSucceed$1(exitFailCause$1(cause));
          } else {
            return exitFailCause$1(stripFailures(cause));
          }
        }
        case OP_REVERT_FLAGS: {
          this.patchRuntimeFlags(this.currentRuntimeFlags, cont.patch);
          if (interruptible$3(this.currentRuntimeFlags) && this.isInterrupted()) {
            return exitFailCause$1(sequential$3(cause, this.getInterruptedCause()));
          } else {
            return exitFailCause$1(cause);
          }
        }
        default: {
          absurd(cont);
        }
      }
    } else {
      yieldedOpChannel.currentOp = exitFailCause$1(cause);
      return YieldedOp;
    }
  }
  [OP_WITH_RUNTIME](op) {
    return internalCall(() => op.effect_instruction_i0(this, running$1(this.currentRuntimeFlags)));
  }
  ["Blocked"](op) {
    const refs = this.getFiberRefs();
    const flags = this.currentRuntimeFlags;
    if (this._steps.length > 0) {
      const frames = [];
      const snap = this._steps[this._steps.length - 1];
      let frame = this.popStack();
      while (frame && frame._op !== "OnStep") {
        frames.push(frame);
        frame = this.popStack();
      }
      this.setFiberRefs(snap.refs);
      this.currentRuntimeFlags = snap.flags;
      const patchRefs = diff$1(snap.refs, refs);
      const patchFlags = diff$3(snap.flags, flags);
      return exitSucceed$1(blocked(op.effect_instruction_i0, withFiberRuntime$1((newFiber) => {
        while (frames.length > 0) {
          newFiber.pushStack(frames.pop());
        }
        newFiber.setFiberRefs(patch$3(newFiber.id(), newFiber.getFiberRefs())(patchRefs));
        newFiber.currentRuntimeFlags = patch$6(patchFlags)(newFiber.currentRuntimeFlags);
        return op.effect_instruction_i1;
      })));
    }
    return uninterruptibleMask$2((restore) => flatMap$7(forkDaemon$1(runRequestBlock(op.effect_instruction_i0)), () => restore(op.effect_instruction_i1)));
  }
  ["RunBlocked"](op) {
    return runBlockedRequests(op.effect_instruction_i0);
  }
  [OP_UPDATE_RUNTIME_FLAGS](op) {
    const updateFlags = op.effect_instruction_i0;
    const oldRuntimeFlags = this.currentRuntimeFlags;
    const newRuntimeFlags = patch$6(oldRuntimeFlags, updateFlags);
    if (interruptible$3(newRuntimeFlags) && this.isInterrupted()) {
      return exitFailCause$1(this.getInterruptedCause());
    } else {
      this.patchRuntimeFlags(this.currentRuntimeFlags, updateFlags);
      if (op.effect_instruction_i1) {
        const revertFlags = diff$3(newRuntimeFlags, oldRuntimeFlags);
        this.pushStack(new RevertFlags(revertFlags, op));
        return internalCall(() => op.effect_instruction_i1(oldRuntimeFlags));
      } else {
        return exitVoid$1;
      }
    }
  }
  [OP_ON_SUCCESS$1](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  ["OnStep"](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OP_ON_FAILURE$1](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OP_ON_SUCCESS_AND_FAILURE](op) {
    this.pushStack(op);
    return op.effect_instruction_i0;
  }
  [OP_ASYNC](op) {
    this._asyncBlockingOn = op.effect_instruction_i1;
    this.initiateAsync(this.currentRuntimeFlags, op.effect_instruction_i0);
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OP_YIELD$1](op) {
    this._isYielding = false;
    yieldedOpChannel.currentOp = op;
    return YieldedOp;
  }
  [OP_WHILE](op) {
    const check2 = op.effect_instruction_i0;
    const body = op.effect_instruction_i1;
    if (check2()) {
      this.pushStack(op);
      return body();
    } else {
      return exitVoid$1;
    }
  }
  [OP_ITERATOR](op) {
    return contOpSuccess[OP_ITERATOR](this, op, void 0);
  }
  [OP_COMMIT](op) {
    return internalCall(() => op.commit());
  }
  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(effect0) {
    let cur = effect0;
    this.currentOpCount = 0;
    while (true) {
      if ((this.currentRuntimeFlags & OpSupervision) !== 0) {
        this.currentSupervisor.onEffect(this, cur);
      }
      if (this._queue.length > 0) {
        cur = this.drainQueueWhileRunning(this.currentRuntimeFlags, cur);
      }
      if (!this._isYielding) {
        this.currentOpCount += 1;
        const shouldYield = this.currentScheduler.shouldYield(this);
        if (shouldYield !== false) {
          this._isYielding = true;
          this.currentOpCount = 0;
          const oldCur = cur;
          cur = flatMap$7(yieldNow$3({
            priority: shouldYield
          }), () => oldCur);
        }
      }
      try {
        cur = this.currentTracer.context(() => {
          if (_version !== cur[EffectTypeId$1]._V) {
            return dieMessage$1(`Cannot execute an Effect versioned ${cur[EffectTypeId$1]._V} with a Runtime of version ${getCurrentVersion()}`);
          }
          return this[cur._op](cur);
        }, this);
        if (cur === YieldedOp) {
          const op = yieldedOpChannel.currentOp;
          if (op._op === OP_YIELD$1 || op._op === OP_ASYNC) {
            return YieldedOp;
          }
          yieldedOpChannel.currentOp = null;
          return op._op === OP_SUCCESS || op._op === OP_FAILURE ? op : exitFailCause$1(die$7(op));
        }
      } catch (e) {
        if (cur !== YieldedOp && !hasProperty(cur, "_op") || !(cur._op in this)) {
          cur = dieMessage$1(`Not a valid effect: ${toStringUnknown(cur)}`);
        } else if (isInterruptedException(e)) {
          cur = exitFailCause$1(sequential$3(die$7(e), interrupt$7(none$2)));
        } else {
          cur = die$6(e);
        }
      }
    }
  }
}
const currentMinimumLogLevel = /* @__PURE__ */ globalValue("effect/FiberRef/currentMinimumLogLevel", () => fiberRefUnsafeMake(fromLiteral("Info")));
const loggerWithConsoleLog = (self2) => makeLogger((opts) => {
  const services = getOrDefault(opts.context, currentServices);
  get$e(services, consoleTag).unsafe.log(self2.log(opts));
});
const defaultLogger$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/defaultLogger"), () => loggerWithConsoleLog(stringLogger));
const tracerLogger$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Logger/tracerLogger"), () => makeLogger(({
  annotations: annotations2,
  cause,
  context: context2,
  fiberId: fiberId2,
  logLevel,
  message
}) => {
  const span2 = getOption(getOrDefault$1(context2, currentContext$1), spanTag);
  if (span2._tag === "None" || span2.value._tag === "ExternalSpan") {
    return;
  }
  const clockService = unsafeGet$3(getOrDefault$1(context2, currentServices), clockTag);
  const attributes = {};
  for (const [key, value2] of annotations2) {
    attributes[key] = value2;
  }
  attributes["effect.fiberId"] = threadName(fiberId2);
  attributes["effect.logLevel"] = logLevel.label;
  if (cause !== null && cause._tag !== "Empty") {
    attributes["effect.cause"] = pretty$1(cause, {
      renderErrorCause: true
    });
  }
  span2.value.event(toStringUnknown(Array.isArray(message) ? message[0] : message), clockService.unsafeCurrentTimeNanos(), attributes);
}));
const currentLoggers$1 = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLoggers"), () => fiberRefUnsafeMakeHashSet(make$O(defaultLogger$1, tracerLogger$1)));
const acquireRelease$1 = /* @__PURE__ */ dual((args2) => isEffect$1(args2[0]), (acquire, release) => uninterruptible$1(tap$3(acquire, (a) => addFinalizer$2((exit2) => release(a, exit2)))));
const addFinalizer$2 = (finalizer) => withFiberRuntime$1((runtime2) => {
  const acquireRefs = runtime2.getFiberRefs();
  const acquireFlags = runtime2.currentRuntimeFlags;
  return flatMap$7(scope$1, (scope2) => scopeAddFinalizerExit(scope2, (exit2) => withFiberRuntime$1((runtimeFinalizer) => {
    const preRefs = runtimeFinalizer.getFiberRefs();
    const preFlags = runtimeFinalizer.currentRuntimeFlags;
    const patchRefs = diff$1(preRefs, acquireRefs);
    const patchFlags = diff$3(preFlags, acquireFlags);
    const inverseRefs = diff$1(acquireRefs, preRefs);
    runtimeFinalizer.setFiberRefs(patch$3(patchRefs, runtimeFinalizer.id(), acquireRefs));
    return ensuring$5(withRuntimeFlags(finalizer(exit2), patchFlags), sync$5(() => {
      runtimeFinalizer.setFiberRefs(patch$3(inverseRefs, runtimeFinalizer.id(), runtimeFinalizer.getFiberRefs()));
    }));
  })));
});
const allResolveInput = (input) => {
  if (Array.isArray(input) || isIterable(input)) {
    return [input, none$4()];
  }
  const keys2 = Object.keys(input);
  const size2 = keys2.length;
  return [keys2.map((k) => input[k]), some((values) => {
    const res = {};
    for (let i = 0; i < size2; i++) {
      res[keys2[i]] = values[i];
    }
    return res;
  })];
};
const allValidate = (effects, reconcile, options2) => {
  const eitherEffects = [];
  for (const effect2 of effects) {
    eitherEffects.push(either$2(effect2));
  }
  return flatMap$7(forEach$1(eitherEffects, identity, {
    concurrency: options2 == null ? void 0 : options2.concurrency,
    batching: options2 == null ? void 0 : options2.batching,
    concurrentFinalizers: options2 == null ? void 0 : options2.concurrentFinalizers
  }), (eithers) => {
    const none2 = none$4();
    const size2 = eithers.length;
    const errors = new Array(size2);
    const successes = new Array(size2);
    let errored = false;
    for (let i = 0; i < size2; i++) {
      const either2 = eithers[i];
      if (either2._tag === "Left") {
        errors[i] = some(either2.left);
        errored = true;
      } else {
        successes[i] = either2.right;
        errors[i] = none2;
      }
    }
    if (errored) {
      return reconcile._tag === "Some" ? fail$b(reconcile.value(errors)) : fail$b(errors);
    } else if (options2 == null ? void 0 : options2.discard) {
      return void_$4;
    }
    return reconcile._tag === "Some" ? succeed$a(reconcile.value(successes)) : succeed$a(successes);
  });
};
const allEither = (effects, reconcile, options2) => {
  const eitherEffects = [];
  for (const effect2 of effects) {
    eitherEffects.push(either$2(effect2));
  }
  if (options2 == null ? void 0 : options2.discard) {
    return forEach$1(eitherEffects, identity, {
      concurrency: options2 == null ? void 0 : options2.concurrency,
      batching: options2 == null ? void 0 : options2.batching,
      discard: true,
      concurrentFinalizers: options2 == null ? void 0 : options2.concurrentFinalizers
    });
  }
  return map$9(forEach$1(eitherEffects, identity, {
    concurrency: options2 == null ? void 0 : options2.concurrency,
    batching: options2 == null ? void 0 : options2.batching,
    concurrentFinalizers: options2 == null ? void 0 : options2.concurrentFinalizers
  }), (eithers) => reconcile._tag === "Some" ? reconcile.value(eithers) : eithers);
};
const all$1 = (arg, options2) => {
  const [effects, reconcile] = allResolveInput(arg);
  if ((options2 == null ? void 0 : options2.mode) === "validate") {
    return allValidate(effects, reconcile, options2);
  } else if ((options2 == null ? void 0 : options2.mode) === "either") {
    return allEither(effects, reconcile, options2);
  }
  return (options2 == null ? void 0 : options2.discard) !== true && reconcile._tag === "Some" ? map$9(forEach$1(effects, identity, options2), reconcile.value) : forEach$1(effects, identity, options2);
};
const replicate = /* @__PURE__ */ dual(2, (self2, n) => Array.from({
  length: n
}, () => self2));
const replicateEffect = /* @__PURE__ */ dual((args2) => isEffect$1(args2[0]), (self2, n, options2) => all$1(replicate(self2, n), options2));
const forEach$1 = /* @__PURE__ */ dual((args2) => isIterable(args2[0]), (self2, f, options2) => withFiberRuntime$1((r) => {
  const isRequestBatchingEnabled = (options2 == null ? void 0 : options2.batching) === true || (options2 == null ? void 0 : options2.batching) === "inherit" && r.getFiberRef(currentRequestBatching);
  if (options2 == null ? void 0 : options2.discard) {
    return match$3(options2.concurrency, () => finalizersMaskInternal(sequential$1, options2 == null ? void 0 : options2.concurrentFinalizers)((restore) => isRequestBatchingEnabled ? forEachConcurrentDiscard(self2, (a, i) => restore(f(a, i)), true, false, 1) : forEachSequentialDiscard(self2, (a, i) => restore(f(a, i)))), () => finalizersMaskInternal(parallel$1, options2 == null ? void 0 : options2.concurrentFinalizers)((restore) => forEachConcurrentDiscard(self2, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false)), (n) => finalizersMaskInternal(parallelN(n), options2 == null ? void 0 : options2.concurrentFinalizers)((restore) => forEachConcurrentDiscard(self2, (a, i) => restore(f(a, i)), isRequestBatchingEnabled, false, n)));
  }
  return match$3(options2 == null ? void 0 : options2.concurrency, () => finalizersMaskInternal(sequential$1, options2 == null ? void 0 : options2.concurrentFinalizers)((restore) => isRequestBatchingEnabled ? forEachParN(self2, 1, (a, i) => restore(f(a, i)), true) : forEachSequential(self2, (a, i) => restore(f(a, i)))), () => finalizersMaskInternal(parallel$1, options2 == null ? void 0 : options2.concurrentFinalizers)((restore) => forEachParUnbounded(self2, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)), (n) => finalizersMaskInternal(parallelN(n), options2 == null ? void 0 : options2.concurrentFinalizers)((restore) => forEachParN(self2, n, (a, i) => restore(f(a, i)), isRequestBatchingEnabled)));
}));
const forEachParUnbounded = (self2, f, batching) => suspend$7(() => {
  const as2 = fromIterable$8(self2);
  const array2 = new Array(as2.length);
  const fn2 = (a, i) => flatMap$7(f(a, i), (b) => sync$5(() => array2[i] = b));
  return zipRight$4(forEachConcurrentDiscard(as2, fn2, batching, false), succeed$a(array2));
});
const forEachConcurrentDiscard = (self2, f, batching, processAll, n) => uninterruptibleMask$2((restore) => transplant((graft) => withFiberRuntime$1((parent) => {
  let todos = Array.from(self2).reverse();
  let target = todos.length;
  if (target === 0) {
    return void_$4;
  }
  let counter2 = 0;
  let interrupted2 = false;
  const fibersCount = n ? Math.min(todos.length, n) : todos.length;
  const fibers = /* @__PURE__ */ new Set();
  const results = new Array();
  const interruptAll = () => fibers.forEach((fiber) => {
    fiber.currentScheduler.scheduleTask(() => {
      fiber.unsafeInterruptAsFork(parent.id());
    }, 0);
  });
  const startOrder = new Array();
  const joinOrder = new Array();
  const residual = new Array();
  const collectExits = () => {
    const exits = results.filter(({
      exit: exit2
    }) => exit2._tag === "Failure").sort((a, b) => a.index < b.index ? -1 : a.index === b.index ? 0 : 1).map(({
      exit: exit2
    }) => exit2);
    if (exits.length === 0) {
      exits.push(exitVoid$1);
    }
    return exits;
  };
  const runFiber = (eff, interruptImmediately = false) => {
    const runnable = uninterruptible$1(graft(eff));
    const fiber = unsafeForkUnstarted(runnable, parent, parent.currentRuntimeFlags, globalScope);
    parent.currentScheduler.scheduleTask(() => {
      if (interruptImmediately) {
        fiber.unsafeInterruptAsFork(parent.id());
      }
      fiber.resume(runnable);
    }, 0);
    return fiber;
  };
  const onInterruptSignal = () => {
    if (!processAll) {
      target -= todos.length;
      todos = [];
    }
    interrupted2 = true;
    interruptAll();
  };
  const stepOrExit = batching ? step : exit$1;
  const processingFiber = runFiber(async_((resume2) => {
    const pushResult = (res, index) => {
      if (res._op === "Blocked") {
        residual.push(res);
      } else {
        results.push({
          index,
          exit: res
        });
        if (res._op === "Failure" && !interrupted2) {
          onInterruptSignal();
        }
      }
    };
    const next = () => {
      if (todos.length > 0) {
        const a = todos.pop();
        let index = counter2++;
        const returnNextElement = () => {
          const a2 = todos.pop();
          index = counter2++;
          return flatMap$7(yieldNow$3(), () => flatMap$7(stepOrExit(restore(f(a2, index))), onRes));
        };
        const onRes = (res) => {
          if (todos.length > 0) {
            pushResult(res, index);
            if (todos.length > 0) {
              return returnNextElement();
            }
          }
          return succeed$a(res);
        };
        const todo = flatMap$7(stepOrExit(restore(f(a, index))), onRes);
        const fiber = runFiber(todo);
        startOrder.push(fiber);
        fibers.add(fiber);
        if (interrupted2) {
          fiber.currentScheduler.scheduleTask(() => {
            fiber.unsafeInterruptAsFork(parent.id());
          }, 0);
        }
        fiber.addObserver((wrapped) => {
          let exit2;
          if (wrapped._op === "Failure") {
            exit2 = wrapped;
          } else {
            exit2 = wrapped.effect_instruction_i0;
          }
          joinOrder.push(fiber);
          fibers.delete(fiber);
          pushResult(exit2, index);
          if (results.length === target) {
            resume2(succeed$a(getOrElse(exitCollectAll(collectExits(), {
              parallel: true
            }), () => exitVoid$1)));
          } else if (residual.length + results.length === target) {
            const exits = collectExits();
            const requests = residual.map((blocked2) => blocked2.effect_instruction_i0).reduce(par);
            resume2(succeed$a(blocked(requests, forEachConcurrentDiscard([getOrElse(exitCollectAll(exits, {
              parallel: true
            }), () => exitVoid$1), ...residual.map((blocked2) => blocked2.effect_instruction_i1)], (i) => i, batching, true, n))));
          } else {
            next();
          }
        });
      }
    };
    for (let i = 0; i < fibersCount; i++) {
      next();
    }
  }));
  return asVoid$1(onExit$2(flatten$4(restore(join$2(processingFiber))), exitMatch({
    onFailure: (cause) => {
      onInterruptSignal();
      const target2 = residual.length + 1;
      const concurrency = Math.min(typeof n === "number" ? n : residual.length, residual.length);
      const toPop = Array.from(residual);
      return async_((cb) => {
        let count = 0;
        let index = 0;
        const check2 = (index2, hitNext) => (exit2) => {
          count++;
          if (count === target2) {
            cb(exitSucceed$1(exitFailCause$1(cause)));
          }
          if (toPop.length > 0 && hitNext) {
            next();
          }
        };
        const next = () => {
          runFiber(toPop.pop(), true).addObserver(check2(index, true));
          index++;
        };
        processingFiber.addObserver(check2(index, false));
        index++;
        for (let i = 0; i < concurrency; i++) {
          next();
        }
      });
    },
    onSuccess: () => forEachSequential(joinOrder, (f2) => f2.inheritAll)
  })));
})));
const forEachParN = (self2, n, f, batching) => suspend$7(() => {
  const as2 = fromIterable$8(self2);
  const array2 = new Array(as2.length);
  const fn2 = (a, i) => map$9(f(a, i), (b) => array2[i] = b);
  return zipRight$4(forEachConcurrentDiscard(as2, fn2, batching, false, n), succeed$a(array2));
});
const fork$2 = (self2) => withFiberRuntime$1((state, status) => succeed$a(unsafeFork$1(self2, state, status.runtimeFlags)));
const forkDaemon$1 = (self2) => forkWithScopeOverride(self2, globalScope);
const unsafeFork$1 = (effect2, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect2, parentFiber, parentRuntimeFlags, overrideScope);
  childFiber.resume(effect2);
  return childFiber;
};
const unsafeForkUnstarted = (effect2, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect2, parentFiber, parentRuntimeFlags, overrideScope);
  return childFiber;
};
const unsafeMakeChildFiber = (effect2, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childId = unsafeMake$9();
  const parentFiberRefs = parentFiber.getFiberRefs();
  const childFiberRefs = forkAs(parentFiberRefs, childId);
  const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags);
  const childContext = getOrDefault$1(childFiberRefs, currentContext$1);
  const supervisor = childFiber.currentSupervisor;
  supervisor.onStart(childContext, effect2, some(parentFiber), childFiber);
  childFiber.addObserver((exit2) => supervisor.onEnd(exit2, childFiber));
  const parentScope = overrideScope !== null ? overrideScope : pipe(parentFiber.getFiberRef(currentForkScopeOverride), getOrElse(() => parentFiber.scope()));
  parentScope.add(parentRuntimeFlags, childFiber);
  return childFiber;
};
const forkWithScopeOverride = (self2, scopeOverride) => withFiberRuntime$1((parentFiber, parentStatus) => succeed$a(unsafeFork$1(self2, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
const parallelFinalizers = (self2) => contextWithEffect((context2) => match$8(getOption(context2, scopeTag), {
  onNone: () => self2,
  onSome: (scope2) => {
    switch (scope2.strategy._tag) {
      case "Parallel":
        return self2;
      case "Sequential":
      case "ParallelN":
        return flatMap$7(scopeFork(scope2, parallel$1), (inner) => scopeExtend(self2, inner));
    }
  }
}));
const parallelNFinalizers = (parallelism) => (self2) => contextWithEffect((context2) => match$8(getOption(context2, scopeTag), {
  onNone: () => self2,
  onSome: (scope2) => {
    if (scope2.strategy._tag === "ParallelN" && scope2.strategy.parallelism === parallelism) {
      return self2;
    }
    return flatMap$7(scopeFork(scope2, parallelN(parallelism)), (inner) => scopeExtend(self2, inner));
  }
}));
const finalizersMaskInternal = (strategy, concurrentFinalizers) => (self2) => contextWithEffect((context2) => match$8(getOption(context2, scopeTag), {
  onNone: () => self2(identity),
  onSome: (scope2) => {
    if (concurrentFinalizers === true) {
      const patch2 = strategy._tag === "Parallel" ? parallelFinalizers : strategy._tag === "Sequential" ? sequentialFinalizers : parallelNFinalizers(strategy.parallelism);
      switch (scope2.strategy._tag) {
        case "Parallel":
          return patch2(self2(parallelFinalizers));
        case "Sequential":
          return patch2(self2(sequentialFinalizers));
        case "ParallelN":
          return patch2(self2(parallelNFinalizers(scope2.strategy.parallelism)));
      }
    } else {
      return self2(identity);
    }
  }
}));
const scopeWith = (f) => flatMap$7(scopeTag, f);
const scopedWith$3 = (f) => flatMap$7(scopeMake(), (scope2) => onExit$2(f(scope2), (exit2) => scope2.close(exit2)));
const scopedEffect = (effect2) => flatMap$7(scopeMake(), (scope2) => scopeUse(effect2, scope2));
const sequentialFinalizers = (self2) => contextWithEffect((context2) => match$8(getOption(context2, scopeTag), {
  onNone: () => self2,
  onSome: (scope2) => {
    switch (scope2.strategy._tag) {
      case "Sequential":
        return self2;
      case "Parallel":
      case "ParallelN":
        return flatMap$7(scopeFork(scope2, sequential$1), (inner) => scopeExtend(self2, inner));
    }
  }
}));
const zipOptions = /* @__PURE__ */ dual((args2) => isEffect$1(args2[1]), (self2, that, options2) => zipWithOptions(self2, that, (a, b) => [a, b], options2));
const zipLeftOptions = /* @__PURE__ */ dual((args2) => isEffect$1(args2[1]), (self2, that, options2) => {
  if ((options2 == null ? void 0 : options2.concurrent) !== true && ((options2 == null ? void 0 : options2.batching) === void 0 || options2.batching === false)) {
    return zipLeft$1(self2, that);
  }
  return zipWithOptions(self2, that, (a, _) => a, options2);
});
const zipRightOptions = /* @__PURE__ */ dual((args2) => isEffect$1(args2[1]), (self2, that, options2) => {
  if ((options2 == null ? void 0 : options2.concurrent) !== true && ((options2 == null ? void 0 : options2.batching) === void 0 || options2.batching === false)) {
    return zipRight$4(self2, that);
  }
  return zipWithOptions(self2, that, (_, b) => b, options2);
});
const zipWithOptions = /* @__PURE__ */ dual((args2) => isEffect$1(args2[1]), (self2, that, f, options2) => map$9(all$1([self2, that], {
  concurrency: (options2 == null ? void 0 : options2.concurrent) ? 2 : 1,
  batching: options2 == null ? void 0 : options2.batching,
  concurrentFinalizers: options2 == null ? void 0 : options2.concurrentFinalizers
}), ([a, a2]) => f(a, a2)));
const scopeTag = /* @__PURE__ */ GenericTag("effect/Scope");
const scope$1 = scopeTag;
const scopeUnsafeAddFinalizer = (scope2, fin) => {
  if (scope2.state._tag === "Open") {
    scope2.state.finalizers.set({}, fin);
  }
};
const ScopeImplProto = {
  [ScopeTypeId]: ScopeTypeId,
  [CloseableScopeTypeId]: CloseableScopeTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  fork(strategy) {
    return sync$5(() => {
      const newScope = scopeUnsafeMake(strategy);
      if (this.state._tag === "Closed") {
        newScope.state = this.state;
        return newScope;
      }
      const key = {};
      const fin = (exit2) => newScope.close(exit2);
      this.state.finalizers.set(key, fin);
      scopeUnsafeAddFinalizer(newScope, (_) => sync$5(() => {
        if (this.state._tag === "Open") {
          this.state.finalizers.delete(key);
        }
      }));
      return newScope;
    });
  },
  close(exit2) {
    return suspend$7(() => {
      if (this.state._tag === "Closed") {
        return void_$4;
      }
      const finalizers = Array.from(this.state.finalizers.values()).reverse();
      this.state = {
        _tag: "Closed",
        exit: exit2
      };
      if (finalizers.length === 0) {
        return void_$4;
      }
      return isSequential(this.strategy) ? pipe(forEachSequential(finalizers, (fin) => exit$1(fin(exit2))), flatMap$7((results) => pipe(exitCollectAll(results), map$g(exitAsVoid), getOrElse(() => exitVoid$1)))) : isParallel(this.strategy) ? pipe(forEachParUnbounded(finalizers, (fin) => exit$1(fin(exit2)), false), flatMap$7((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map$g(exitAsVoid), getOrElse(() => exitVoid$1)))) : pipe(forEachParN(finalizers, this.strategy.parallelism, (fin) => exit$1(fin(exit2)), false), flatMap$7((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map$g(exitAsVoid), getOrElse(() => exitVoid$1))));
    });
  },
  addFinalizer(fin) {
    return suspend$7(() => {
      if (this.state._tag === "Closed") {
        return fin(this.state.exit);
      }
      this.state.finalizers.set({}, fin);
      return void_$4;
    });
  }
};
const scopeUnsafeMake = (strategy = sequential$2) => {
  const scope2 = Object.create(ScopeImplProto);
  scope2.strategy = strategy;
  scope2.state = {
    _tag: "Open",
    finalizers: /* @__PURE__ */ new Map()
  };
  return scope2;
};
const scopeMake = (strategy = sequential$2) => sync$5(() => scopeUnsafeMake(strategy));
const scopeExtend = /* @__PURE__ */ dual(2, (effect2, scope2) => mapInputContext$1(
  effect2,
  // @ts-expect-error
  merge$6(make$T(scopeTag, scope2))
));
const scopeUse = /* @__PURE__ */ dual(2, (effect2, scope2) => pipe(effect2, scopeExtend(scope2), onExit$2((exit2) => scope2.close(exit2))));
const fiberRefUnsafeMakeSupervisor = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ,
  fork: empty$a
});
const fiberRefLocallyScoped = /* @__PURE__ */ dual(2, (self2, value2) => asVoid$1(acquireRelease$1(flatMap$7(fiberRefGet(self2), (oldValue) => as$1(fiberRefSet(self2, value2), oldValue)), (oldValue) => fiberRefSet(self2, oldValue))));
const fiberRefLocallyScopedWith = /* @__PURE__ */ dual(2, (self2, f) => fiberRefGetWith(self2, (a) => fiberRefLocallyScoped(self2, f(a))));
const currentRuntimeFlags = /* @__PURE__ */ fiberRefUnsafeMakeRuntimeFlags(none$1);
const currentSupervisor = /* @__PURE__ */ fiberRefUnsafeMakeSupervisor(none);
const raceWith$1 = /* @__PURE__ */ dual(3, (self2, other, options2) => raceFibersWith(self2, other, {
  onSelfWin: (winner, loser) => flatMap$7(winner.await, (exit2) => {
    switch (exit2._tag) {
      case OP_SUCCESS: {
        return flatMap$7(winner.inheritAll, () => options2.onSelfDone(exit2, loser));
      }
      case OP_FAILURE: {
        return options2.onSelfDone(exit2, loser);
      }
    }
  }),
  onOtherWin: (winner, loser) => flatMap$7(winner.await, (exit2) => {
    switch (exit2._tag) {
      case OP_SUCCESS: {
        return flatMap$7(winner.inheritAll, () => options2.onOtherDone(exit2, loser));
      }
      case OP_FAILURE: {
        return options2.onOtherDone(exit2, loser);
      }
    }
  })
}));
const disconnect$1 = (self2) => uninterruptibleMask$2((restore) => fiberIdWith$1((fiberId2) => flatMap$7(forkDaemon$1(restore(self2)), (fiber) => pipe(restore(join$2(fiber)), onInterrupt$1(() => pipe(fiber, interruptAsFork(fiberId2)))))));
const race$1 = /* @__PURE__ */ dual(2, (self2, that) => fiberIdWith$1((parentFiberId) => raceWith$1(self2, that, {
  onSelfDone: (exit2, right2) => exitMatchEffect(exit2, {
    onFailure: (cause) => pipe(join$2(right2), mapErrorCause$1((cause2) => parallel$3(cause, cause2))),
    onSuccess: (value2) => pipe(right2, interruptAsFiber(parentFiberId), as$1(value2))
  }),
  onOtherDone: (exit2, left2) => exitMatchEffect(exit2, {
    onFailure: (cause) => pipe(join$2(left2), mapErrorCause$1((cause2) => parallel$3(cause2, cause))),
    onSuccess: (value2) => pipe(left2, interruptAsFiber(parentFiberId), as$1(value2))
  })
})));
const raceFibersWith = /* @__PURE__ */ dual(3, (self2, other, options2) => withFiberRuntime$1((parentFiber, parentStatus) => {
  const parentRuntimeFlags = parentStatus.runtimeFlags;
  const raceIndicator = make$N(true);
  const leftFiber = unsafeMakeChildFiber(self2, parentFiber, parentRuntimeFlags, options2.selfScope);
  const rightFiber = unsafeMakeChildFiber(other, parentFiber, parentRuntimeFlags, options2.otherScope);
  return async_((cb) => {
    leftFiber.addObserver(() => completeRace(leftFiber, rightFiber, options2.onSelfWin, raceIndicator, cb));
    rightFiber.addObserver(() => completeRace(rightFiber, leftFiber, options2.onOtherWin, raceIndicator, cb));
    leftFiber.startFork(self2);
    rightFiber.startFork(other);
  }, combine$5(leftFiber.id(), rightFiber.id()));
}));
const completeRace = (winner, loser, cont, ab, cb) => {
  if (compareAndSet(true, false)(ab)) {
    cb(cont(winner, loser));
  }
};
const ensuring$5 = /* @__PURE__ */ dual(2, (self2, finalizer) => uninterruptibleMask$2((restore) => matchCauseEffect$2(restore(self2), {
  onFailure: (cause1) => matchCauseEffect$2(finalizer, {
    onFailure: (cause2) => failCause$9(sequential$3(cause1, cause2)),
    onSuccess: () => failCause$9(cause1)
  }),
  onSuccess: (a) => as$1(finalizer, a)
})));
const invokeWithInterrupt = (self2, entries, onInterrupt2) => fiberIdWith$1((id2) => flatMap$7(flatMap$7(forkDaemon$1(interruptible$2(self2)), (processing) => async_((cb) => {
  const counts = entries.map((_) => _.listeners.count);
  const checkDone = () => {
    if (counts.every((count) => count === 0)) {
      if (entries.every((_) => {
        if (_.result.state.current._tag === "Pending") {
          return true;
        } else if (_.result.state.current._tag === "Done" && exitIsExit(_.result.state.current.effect) && _.result.state.current.effect._tag === "Failure" && isInterrupted$2(_.result.state.current.effect.cause)) {
          return true;
        } else {
          return false;
        }
      })) {
        cleanup.forEach((f) => f());
        onInterrupt2 == null ? void 0 : onInterrupt2();
        cb(interruptFiber(processing));
      }
    }
  };
  processing.addObserver((exit2) => {
    cleanup.forEach((f) => f());
    cb(exit2);
  });
  const cleanup = entries.map((r, i) => {
    const observer = (count) => {
      counts[i] = count;
      checkDone();
    };
    r.listeners.addObserver(observer);
    return () => r.listeners.removeObserver(observer);
  });
  checkDone();
  return sync$5(() => {
    cleanup.forEach((f) => f());
  });
})), () => suspend$7(() => {
  const residual = entries.flatMap((entry) => {
    if (!entry.state.completed) {
      return [entry];
    }
    return [];
  });
  return forEachSequentialDiscard(residual, (entry) => complete(entry.request, exitInterrupt$1(id2)));
})));
const makeSpanScoped = (name, options2) => {
  options2 = addSpanStackTrace(options2);
  return uninterruptible$1(withFiberRuntime$1((fiber) => {
    const scope2 = unsafeGet$3(fiber.getFiberRef(currentContext$1), scopeTag);
    const span2 = unsafeMakeSpan(fiber, name, options2);
    const timingEnabled = fiber.getFiberRef(currentTracerTimingEnabled$1);
    const clock_ = get$e(fiber.getFiberRef(currentServices), clockTag);
    return as$1(scopeAddFinalizerExit(scope2, (exit2) => endSpan(span2, exit2, clock_, timingEnabled)), span2);
  }));
};
const withTracerScoped = (value2) => fiberRefLocallyScopedWith(currentServices, add$2(tracerTag, value2));
const withSpanScoped$1 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options2 = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self2 = arguments[0];
    return flatMap$7(makeSpanScoped(name, addSpanStackTrace(options2)), (span2) => provideService$1(self2, spanTag, span2));
  }
  return (self2) => flatMap$7(makeSpanScoped(name, addSpanStackTrace(options2)), (span2) => provideService$1(self2, spanTag, span2));
};
const empty$9 = empty$h;
const fail$8 = fail$c;
const die$4 = die$7;
const interrupt$3 = interrupt$7;
const parallel = parallel$3;
const sequential = sequential$3;
const isCause = isCause$1;
const isFailType = isFailType$1;
const isDieType = isDieType$1;
const isInterrupted = isInterrupted$2;
const isInterruptedOnly = isInterruptedOnly$1;
const interruptors = interruptors$1;
const failureOrCause = failureOrCause$1;
const flipCauseOption = flipCauseOption$1;
const map$7 = map$a;
const squash = causeSquash;
const reduceWithContext = reduceWithContext$1;
const IllegalArgumentException = IllegalArgumentException$1;
const NoSuchElementException = NoSuchElementException$1;
const pretty = pretty$1;
const IntervalSymbolKey = "effect/ScheduleInterval";
const IntervalTypeId = /* @__PURE__ */ Symbol.for(IntervalSymbolKey);
const empty$8 = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};
const make$t = (startMillis, endMillis) => {
  if (startMillis > endMillis) {
    return empty$8;
  }
  return {
    [IntervalTypeId]: IntervalTypeId,
    startMillis,
    endMillis
  };
};
const lessThan$3 = /* @__PURE__ */ dual(2, (self2, that) => min(self2, that) === self2);
const min = /* @__PURE__ */ dual(2, (self2, that) => {
  if (self2.endMillis <= that.startMillis) return self2;
  if (that.endMillis <= self2.startMillis) return that;
  if (self2.startMillis < that.startMillis) return self2;
  if (that.startMillis < self2.startMillis) return that;
  if (self2.endMillis <= that.endMillis) return self2;
  return that;
});
const isEmpty$1 = (self2) => {
  return self2.startMillis >= self2.endMillis;
};
const intersect$4 = /* @__PURE__ */ dual(2, (self2, that) => {
  const start2 = Math.max(self2.startMillis, that.startMillis);
  const end2 = Math.min(self2.endMillis, that.endMillis);
  return make$t(start2, end2);
});
const size$3 = (self2) => {
  return millis(self2.endMillis - self2.startMillis);
};
const after$1 = (startMilliseconds) => {
  return make$t(startMilliseconds, Number.POSITIVE_INFINITY);
};
const make$s = make$t;
const empty$7 = empty$8;
const lessThan$2 = lessThan$3;
const isEmpty = isEmpty$1;
const intersect$3 = intersect$4;
const size$2 = size$3;
const after = after$1;
const IntervalsSymbolKey = "effect/ScheduleIntervals";
const IntervalsTypeId = /* @__PURE__ */ Symbol.for(IntervalsSymbolKey);
const make$r = (intervals) => {
  return {
    [IntervalsTypeId]: IntervalsTypeId,
    intervals
  };
};
const intersect$2 = /* @__PURE__ */ dual(2, (self2, that) => intersectLoop(self2.intervals, that.intervals, empty$r()));
const intersectLoop = (_left, _right, _acc) => {
  let left2 = _left;
  let right2 = _right;
  let acc = _acc;
  while (isNonEmpty$2(left2) && isNonEmpty$2(right2)) {
    const interval = pipe(headNonEmpty(left2), intersect$3(headNonEmpty(right2)));
    const intervals = isEmpty(interval) ? acc : pipe(acc, prepend$1(interval));
    if (pipe(headNonEmpty(left2), lessThan$2(headNonEmpty(right2)))) {
      left2 = tailNonEmpty(left2);
    } else {
      right2 = tailNonEmpty(right2);
    }
    acc = intervals;
  }
  return make$r(reverse$1(acc));
};
const start$1 = (self2) => {
  return pipe(self2.intervals, head$2, getOrElse(() => empty$7)).startMillis;
};
const end$3 = (self2) => {
  return pipe(self2.intervals, head$2, getOrElse(() => empty$7)).endMillis;
};
const lessThan$1 = /* @__PURE__ */ dual(2, (self2, that) => start$1(self2) < start$1(that));
const isNonEmpty$1 = (self2) => {
  return isNonEmpty$2(self2.intervals);
};
const make$q = make$r;
const intersect$1 = intersect$2;
const start = start$1;
const end$2 = end$3;
const lessThan = lessThan$1;
const isNonEmpty = isNonEmpty$1;
const OP_CONTINUE$1 = "Continue";
const OP_DONE$4 = "Done";
const _continue$1 = (intervals) => {
  return {
    _tag: OP_CONTINUE$1,
    intervals
  };
};
const continueWith$1 = (interval) => {
  return {
    _tag: OP_CONTINUE$1,
    intervals: make$q(of$2(interval))
  };
};
const done$4 = {
  _tag: OP_DONE$4
};
const isContinue$1 = (self2) => {
  return self2._tag === OP_CONTINUE$1;
};
const isDone$2 = (self2) => {
  return self2._tag === OP_DONE$4;
};
const _continue = _continue$1;
const continueWith = continueWith$1;
const done$3 = done$4;
const isContinue = isContinue$1;
const isDone$1 = isDone$2;
const Scope = scopeTag;
const addFinalizer$1 = scopeAddFinalizer;
const addFinalizerExit = scopeAddFinalizerExit;
const close = scopeClose;
const extend$1 = scopeExtend;
const fork$1 = scopeFork;
const make$p = scopeMake;
const Class$2 = Structural;
const Error$1 = /* @__PURE__ */ function() {
  const plainArgsSymbol = /* @__PURE__ */ Symbol.for("effect/Data/Error/plainArgs");
  const O = {
    BaseEffectError: class extends YieldableError {
      constructor(args2) {
        super(args2 == null ? void 0 : args2.message, (args2 == null ? void 0 : args2.cause) ? {
          cause: args2.cause
        } : void 0);
        if (args2) {
          Object.assign(this, args2);
          Object.defineProperty(this, plainArgsSymbol, {
            value: args2,
            enumerable: false
          });
        }
      }
      toJSON() {
        return {
          ...this[plainArgsSymbol],
          ...this
        };
      }
    }
  };
  return O.BaseEffectError;
}();
const TaggedError$1 = (tag2) => {
  const O = {
    BaseEffectError: class extends Error$1 {
      constructor() {
        super(...arguments);
        __publicField(this, "_tag", tag2);
      }
    }
  };
  O.BaseEffectError.prototype.name = tag2;
  return O.BaseEffectError;
};
const ScheduleSymbolKey = "effect/Schedule";
const ScheduleTypeId = /* @__PURE__ */ Symbol.for(ScheduleSymbolKey);
const isSchedule = (u) => hasProperty(u, ScheduleTypeId);
const ScheduleDriverSymbolKey = "effect/ScheduleDriver";
const ScheduleDriverTypeId = /* @__PURE__ */ Symbol.for(ScheduleDriverSymbolKey);
const scheduleVariance = {
  /* c8 ignore next */
  _Out: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
const scheduleDriverVariance = {
  /* c8 ignore next */
  _Out: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
_U = ScheduleTypeId;
class ScheduleImpl {
  constructor(initial, step2) {
    __publicField(this, "initial");
    __publicField(this, "step");
    __publicField(this, _U, scheduleVariance);
    this.initial = initial;
    this.step = step2;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
_V = ScheduleDriverTypeId;
class ScheduleDriverImpl {
  constructor(schedule, ref) {
    __publicField(this, "schedule");
    __publicField(this, "ref");
    __publicField(this, _V, scheduleDriverVariance);
    this.schedule = schedule;
    this.ref = ref;
  }
  get state() {
    return map$9(get$6(this.ref), (tuple) => tuple[1]);
  }
  get last() {
    return flatMap$7(get$6(this.ref), ([element, _]) => {
      switch (element._tag) {
        case "None": {
          return failSync$1(() => new NoSuchElementException$1());
        }
        case "Some": {
          return succeed$a(element.value);
        }
      }
    });
  }
  get reset() {
    return set$4(this.ref, [none$4(), this.schedule.initial]);
  }
  next(input) {
    return pipe(map$9(get$6(this.ref), (tuple) => tuple[1]), flatMap$7((state) => pipe(currentTimeMillis, flatMap$7((now) => pipe(suspend$7(() => this.schedule.step(now, input, state)), flatMap$7(([state2, out, decision]) => {
      const setState = set$4(this.ref, [some(out), state2]);
      if (isDone$1(decision)) {
        return zipRight$4(setState, fail$b(none$4()));
      }
      const millis$1 = start(decision.intervals) - now;
      if (millis$1 <= 0) {
        return as$1(setState, out);
      }
      return pipe(setState, zipRight$4(sleep$1(millis(millis$1))), as$1(out));
    }))))));
  }
}
const makeWithState = (initial, step2) => new ScheduleImpl(initial, step2);
const addDelay = /* @__PURE__ */ dual(2, (self2, f) => addDelayEffect(self2, (out) => sync$5(() => f(out))));
const addDelayEffect = /* @__PURE__ */ dual(2, (self2, f) => modifyDelayEffect(self2, (out, duration) => map$9(f(out), (delay2) => sum(duration, decode$3(delay2)))));
const check = /* @__PURE__ */ dual(2, (self2, test) => checkEffect(self2, (input, out) => sync$5(() => test(input, out))));
const checkEffect = /* @__PURE__ */ dual(2, (self2, test) => makeWithState(self2.initial, (now, input, state) => flatMap$7(self2.step(now, input, state), ([state2, out, decision]) => {
  if (isDone$1(decision)) {
    return succeed$a([state2, out, done$3]);
  }
  return map$9(test(input, out), (cont) => cont ? [state2, out, decision] : [state2, out, done$3]);
})));
const delayedSchedule = (schedule) => addDelay(schedule, (x) => x);
const driver = (self2) => pipe(make$B([none$4(), self2.initial]), map$9((ref) => new ScheduleDriverImpl(self2, ref)));
const exponential$1 = (baseInput, factor = 2) => {
  const base = decode$3(baseInput);
  return delayedSchedule(map$6(forever$1, (i) => times(base, Math.pow(factor, i))));
};
const intersect = /* @__PURE__ */ dual(2, (self2, that) => intersectWith(self2, that, intersect$1));
const intersectWith = /* @__PURE__ */ dual(3, (self2, that, f) => makeWithState([self2.initial, that.initial], (now, input, state) => pipe(zipWith$2(self2.step(now, input, state[0]), that.step(now, input, state[1]), (a, b) => [a, b]), flatMap$7(([[lState, out, lDecision], [rState, out2, rDecision]]) => {
  if (isContinue(lDecision) && isContinue(rDecision)) {
    return intersectWithLoop(self2, that, input, lState, out, lDecision.intervals, rState, out2, rDecision.intervals, f);
  }
  return succeed$a([[lState, rState], [out, out2], done$3]);
}))));
const intersectWithLoop = (self2, that, input, lState, out, lInterval, rState, out2, rInterval, f) => {
  const combined = f(lInterval, rInterval);
  if (isNonEmpty(combined)) {
    return succeed$a([[lState, rState], [out, out2], _continue(combined)]);
  }
  if (pipe(lInterval, lessThan(rInterval))) {
    return flatMap$7(self2.step(end$2(lInterval), input, lState), ([lState2, out3, decision]) => {
      if (isDone$1(decision)) {
        return succeed$a([[lState2, rState], [out3, out2], done$3]);
      }
      return intersectWithLoop(self2, that, input, lState2, out3, decision.intervals, rState, out2, rInterval, f);
    });
  }
  return flatMap$7(that.step(end$2(rInterval), input, rState), ([rState2, out22, decision]) => {
    if (isDone$1(decision)) {
      return succeed$a([[lState, rState2], [out, out22], done$3]);
    }
    return intersectWithLoop(self2, that, input, lState, out, lInterval, rState2, out22, decision.intervals, f);
  });
};
const map$6 = /* @__PURE__ */ dual(2, (self2, f) => mapEffect$1(self2, (out) => sync$5(() => f(out))));
const mapEffect$1 = /* @__PURE__ */ dual(2, (self2, f) => makeWithState(self2.initial, (now, input, state) => flatMap$7(self2.step(now, input, state), ([state2, out, decision]) => map$9(f(out), (out2) => [state2, out2, decision]))));
const modifyDelayEffect = /* @__PURE__ */ dual(2, (self2, f) => makeWithState(self2.initial, (now, input, state) => flatMap$7(self2.step(now, input, state), ([state2, out, decision]) => {
  if (isDone$1(decision)) {
    return succeed$a([state2, out, decision]);
  }
  const intervals = decision.intervals;
  const delay2 = size$2(make$s(now, start(intervals)));
  return map$9(f(out, delay2), (durationInput) => {
    const duration = decode$3(durationInput);
    const oldStart = start(intervals);
    const newStart = now + toMillis(duration);
    const delta = newStart - oldStart;
    const newEnd = Math.max(0, end$2(intervals) + delta);
    const newInterval = make$s(newStart, newEnd);
    return [state2, out, continueWith(newInterval)];
  });
})));
const passthrough = (self2) => makeWithState(self2.initial, (now, input, state) => pipe(self2.step(now, input, state), map$9(([state2, _, decision]) => [state2, input, decision])));
const recurs = (n) => whileOutput(forever$1, (out) => out < n);
const spaced$1 = (duration) => addDelay(forever$1, () => duration);
const unfold = (initial, f) => makeWithState(initial, (now, _, state) => sync$5(() => [f(state), state, continueWith(after(now))]));
const untilInputEffect = /* @__PURE__ */ dual(2, (self2, f) => checkEffect(self2, (input, _) => negate(f(input))));
const whileInputEffect = /* @__PURE__ */ dual(2, (self2, f) => checkEffect(self2, (input, _) => f(input)));
const whileOutput = /* @__PURE__ */ dual(2, (self2, f) => check(self2, (_, out) => f(out)));
const ScheduleDefectTypeId = /* @__PURE__ */ Symbol.for("effect/Schedule/ScheduleDefect");
_W = ScheduleDefectTypeId;
class ScheduleDefect {
  constructor(error) {
    __publicField(this, "error");
    __publicField(this, _W);
    this.error = error;
    this[ScheduleDefectTypeId] = ScheduleDefectTypeId;
  }
}
const isScheduleDefect = (u) => hasProperty(u, ScheduleDefectTypeId);
const scheduleDefectWrap = (self2) => catchAll$4(self2, (e) => die$6(new ScheduleDefect(e)));
const scheduleDefectRefail = (self2) => catchAllCause$3(self2, (cause) => match$8(find(cause, (_) => isDieType$1(_) && isScheduleDefect(_.defect) ? some(_.defect) : none$4()), {
  onNone: () => failCause$9(cause),
  onSome: (error) => fail$b(error.error)
}));
const repeat_Effect = /* @__PURE__ */ dual(2, (self2, schedule) => repeatOrElse_Effect(self2, schedule, (e, _) => fail$b(e)));
const repeat_combined = /* @__PURE__ */ dual(2, (self2, options2) => {
  if (isSchedule(options2)) {
    return repeat_Effect(self2, options2);
  }
  const base = options2.schedule ?? passthrough(forever$1);
  const withWhile = options2.while ? whileInputEffect(base, (a) => {
    const applied = options2.while(a);
    if (typeof applied === "boolean") {
      return succeed$a(applied);
    }
    return scheduleDefectWrap(applied);
  }) : base;
  const withUntil = options2.until ? untilInputEffect(withWhile, (a) => {
    const applied = options2.until(a);
    if (typeof applied === "boolean") {
      return succeed$a(applied);
    }
    return scheduleDefectWrap(applied);
  }) : withWhile;
  const withTimes = options2.times ? intersect(withUntil, recurs(options2.times)).pipe(map$6((intersectionPair) => intersectionPair[0])) : withUntil;
  return scheduleDefectRefail(repeat_Effect(self2, withTimes));
});
const repeatOrElse_Effect = /* @__PURE__ */ dual(3, (self2, schedule, orElse2) => flatMap$7(driver(schedule), (driver2) => matchEffect$1(self2, {
  onFailure: (error) => orElse2(error, none$4()),
  onSuccess: (value2) => repeatOrElseEffectLoop(self2, driver2, orElse2, value2)
})));
const repeatOrElseEffectLoop = (self2, driver2, orElse2, value2) => {
  return matchEffect$1(driver2.next(value2), {
    onFailure: () => orDie$1(driver2.last),
    onSuccess: (b) => matchEffect$1(self2, {
      onFailure: (error) => orElse2(error, some(b)),
      onSuccess: (value3) => repeatOrElseEffectLoop(self2, driver2, orElse2, value3)
    })
  });
};
const retry_Effect = /* @__PURE__ */ dual(2, (self2, policy) => retryOrElse_Effect(self2, policy, (e, _) => fail$b(e)));
const retry_combined = /* @__PURE__ */ dual(2, (self2, options2) => {
  if (isSchedule(options2)) {
    return retry_Effect(self2, options2);
  }
  const base = options2.schedule ?? forever$1;
  const withWhile = options2.while ? whileInputEffect(base, (e) => {
    const applied = options2.while(e);
    if (typeof applied === "boolean") {
      return succeed$a(applied);
    }
    return scheduleDefectWrap(applied);
  }) : base;
  const withUntil = options2.until ? untilInputEffect(withWhile, (e) => {
    const applied = options2.until(e);
    if (typeof applied === "boolean") {
      return succeed$a(applied);
    }
    return scheduleDefectWrap(applied);
  }) : withWhile;
  const withTimes = options2.times ? intersect(withUntil, recurs(options2.times)) : withUntil;
  return scheduleDefectRefail(retry_Effect(self2, withTimes));
});
const retryOrElse_Effect = /* @__PURE__ */ dual(3, (self2, policy, orElse2) => flatMap$7(driver(policy), (driver2) => retryOrElse_EffectLoop(self2, driver2, orElse2)));
const retryOrElse_EffectLoop = (self2, driver2, orElse2) => {
  return catchAll$4(self2, (e) => matchEffect$1(driver2.next(e), {
    onFailure: () => pipe(driver2.last, orDie$1, flatMap$7((out) => orElse2(e, out))),
    onSuccess: () => retryOrElse_EffectLoop(self2, driver2, orElse2)
  }));
};
const forever$1 = /* @__PURE__ */ unfold(0, (n) => n + 1);
class Semaphore {
  constructor(permits) {
    __publicField(this, "permits");
    __publicField(this, "waiters", /* @__PURE__ */ new Set());
    __publicField(this, "taken", 0);
    __publicField(this, "take", (n) => asyncInterrupt((resume2) => {
      if (this.free < n) {
        const observer = () => {
          if (this.free < n) {
            return;
          }
          this.waiters.delete(observer);
          this.taken += n;
          resume2(succeed$a(n));
        };
        this.waiters.add(observer);
        return sync$5(() => {
          this.waiters.delete(observer);
        });
      }
      this.taken += n;
      return resume2(succeed$a(n));
    }));
    __publicField(this, "updateTaken", (f) => withFiberRuntime$1((fiber) => {
      this.taken = f(this.taken);
      if (this.waiters.size > 0) {
        fiber.getFiberRef(currentScheduler$1).scheduleTask(() => {
          const iter = this.waiters.values();
          let item = iter.next();
          while (item.done === false && this.free > 0) {
            item.value();
            item = iter.next();
          }
        }, fiber.getFiberRef(currentSchedulingPriority$1));
      }
      return succeed$a(this.free);
    }));
    __publicField(this, "release", (n) => this.updateTaken((taken) => taken - n));
    __publicField(this, "releaseAll", /* @__PURE__ */ this.updateTaken((_) => 0));
    __publicField(this, "withPermits", (n) => (self2) => uninterruptibleMask$2((restore) => flatMap$7(restore(this.take(n)), (permits) => ensuring$5(restore(self2), this.release(permits)))));
    __publicField(this, "withPermitsIfAvailable", (n) => (self2) => uninterruptibleMask$2((restore) => suspend$7(() => {
      if (this.free < n) {
        return succeedNone;
      }
      this.taken += n;
      return ensuring$5(restore(asSome(self2)), this.release(n));
    })));
    this.permits = permits;
  }
  get free() {
    return this.permits - this.taken;
  }
}
const unsafeMakeSemaphore = (permits) => new Semaphore(permits);
const makeSemaphore$1 = (permits) => sync$5(() => unsafeMakeSemaphore(permits));
class Latch extends Class$4 {
  constructor(isOpen) {
    super();
    __publicField(this, "isOpen");
    __publicField(this, "waiters", []);
    __publicField(this, "scheduled", false);
    __publicField(this, "flushWaiters", () => {
      this.scheduled = false;
      const waiters = this.waiters;
      this.waiters = [];
      for (let i = 0; i < waiters.length; i++) {
        waiters[i](exitVoid$1);
      }
    });
    __publicField(this, "open", /* @__PURE__ */ withFiberRuntime$1((fiber) => {
      if (this.isOpen) {
        return void_$4;
      }
      this.isOpen = true;
      return this.unsafeSchedule(fiber);
    }));
    __publicField(this, "release", /* @__PURE__ */ withFiberRuntime$1((fiber) => {
      if (this.isOpen) {
        return void_$4;
      }
      return this.unsafeSchedule(fiber);
    }));
    __publicField(this, "await", /* @__PURE__ */ asyncInterrupt((resume2) => {
      if (this.isOpen) {
        return resume2(void_$4);
      }
      this.waiters.push(resume2);
      return sync$5(() => {
        const index = this.waiters.indexOf(resume2);
        if (index !== -1) {
          this.waiters.splice(index, 1);
        }
      });
    }));
    __publicField(this, "close", /* @__PURE__ */ sync$5(() => {
      this.isOpen = false;
    }));
    __publicField(this, "whenOpen", (self2) => {
      return zipRight$4(this.await, self2);
    });
    this.isOpen = isOpen;
  }
  commit() {
    return this.await;
  }
  unsafeSchedule(fiber) {
    if (this.scheduled || this.waiters.length === 0) {
      return void_$4;
    }
    this.scheduled = true;
    fiber.currentScheduler.scheduleTask(this.flushWaiters, fiber.getFiberRef(currentSchedulingPriority$1));
    return void_$4;
  }
  unsafeOpen() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.flushWaiters();
  }
  unsafeClose() {
    this.isOpen = false;
  }
}
const unsafeMakeLatch$1 = (open) => new Latch(open ?? false);
const forkIn$1 = /* @__PURE__ */ dual(2, (self2, scope2) => withFiberRuntime$1((parent, parentStatus) => {
  const scopeImpl = scope2;
  const fiber = unsafeFork$1(self2, parent, parentStatus.runtimeFlags, globalScope);
  if (scopeImpl.state._tag === "Open") {
    const finalizer = () => fiberIdWith$1((fiberId2) => equals$1(fiberId2, fiber.id()) ? void_$4 : asVoid$1(interruptFiber(fiber)));
    const key = {};
    scopeImpl.state.finalizers.set(key, finalizer);
    fiber.addObserver(() => {
      if (scopeImpl.state._tag === "Closed") return;
      scopeImpl.state.finalizers.delete(key);
    });
  } else {
    fiber.unsafeInterruptAsFork(parent.id());
  }
  return succeed$a(fiber);
}));
const forkScoped$1 = (self2) => scopeWith((scope2) => forkIn$1(self2, scope2));
const raceFirst$1 = /* @__PURE__ */ dual(2, (self2, that) => pipe(exit$1(self2), race$1(exit$1(that)), (effect2) => flatten$4(effect2)));
const timeout$1 = /* @__PURE__ */ dual(2, (self2, duration) => timeoutFail(self2, {
  onTimeout: () => timeoutExceptionFromDuration(duration),
  duration
}));
const timeoutFail = /* @__PURE__ */ dual(2, (self2, {
  duration,
  onTimeout
}) => flatten$4(timeoutTo(self2, {
  onTimeout: () => failSync$1(onTimeout),
  onSuccess: succeed$a,
  duration
})));
const timeoutTo = /* @__PURE__ */ dual(2, (self2, {
  duration,
  onSuccess,
  onTimeout
}) => fiberIdWith$1((parentFiberId) => uninterruptibleMask$2((restore) => raceFibersWith(restore(self2), interruptible$2(sleep$1(duration)), {
  onSelfWin: (winner, loser) => flatMap$7(winner.await, (exit2) => {
    if (exit2._tag === "Success") {
      return flatMap$7(winner.inheritAll, () => as$1(interruptAsFiber(loser, parentFiberId), onSuccess(exit2.value)));
    } else {
      return flatMap$7(interruptAsFiber(loser, parentFiberId), () => exitFailCause$1(exit2.cause));
    }
  }),
  onOtherWin: (winner, loser) => flatMap$7(winner.await, (exit2) => {
    if (exit2._tag === "Success") {
      return flatMap$7(winner.inheritAll, () => as$1(interruptAsFiber(loser, parentFiberId), onTimeout()));
    } else {
      return flatMap$7(interruptAsFiber(loser, parentFiberId), () => exitFailCause$1(exit2.cause));
    }
  }),
  otherScope: globalScope
}))));
const SynchronizedSymbolKey = "effect/Ref/SynchronizedRef";
const SynchronizedTypeId = /* @__PURE__ */ Symbol.for(SynchronizedSymbolKey);
const synchronizedVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
class SynchronizedImpl extends (__ = Class$4, _Z = SynchronizedTypeId, _Y = RefTypeId$1, _X = TypeId$h, __) {
  constructor(ref, withLock) {
    super();
    __publicField(this, "ref");
    __publicField(this, "withLock");
    __publicField(this, _Z, synchronizedVariance);
    __publicField(this, _Y, refVariance);
    __publicField(this, _X, TypeId$h);
    __publicField(this, "get");
    this.ref = ref;
    this.withLock = withLock;
    this.get = get$6(this.ref);
  }
  commit() {
    return this.get;
  }
  modify(f) {
    return this.modifyEffect((a) => succeed$a(f(a)));
  }
  modifyEffect(f) {
    return this.withLock(pipe(flatMap$7(get$6(this.ref), f), flatMap$7(([b, a]) => as$1(set$4(this.ref, a), b))));
  }
}
const makeSynchronized = (value2) => sync$5(() => unsafeMakeSynchronized(value2));
const unsafeMakeSynchronized = (value2) => {
  const ref = unsafeMake$6(value2);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};
const TypeId$f = /* @__PURE__ */ Symbol.for("effect/ManagedRuntime");
const OP_FOLD$1 = "Fold";
const OP_FRESH = "Fresh";
const OP_FROM_EFFECT$2 = "FromEffect";
const OP_SCOPED = "Scoped";
const OP_SUSPEND$2 = "Suspend";
const OP_PROVIDE$2 = "Provide";
const OP_PROVIDE_MERGE = "ProvideMerge";
const OP_ZIP_WITH = "ZipWith";
const _await = _await$1;
const getCurrentFiber = getCurrentFiber$1;
const inheritAll = inheritAll$1;
const interrupt$2 = interruptFiber;
const interruptAs$1 = interruptAsFiber;
const interruptAllAs = interruptAllAs$1;
const join$1 = join$2;
const makeDual = (f) => function() {
  if (arguments.length === 1) {
    const runtime2 = arguments[0];
    return (effect2, ...args2) => f(runtime2, effect2, ...args2);
  }
  return f.apply(this, arguments);
};
const unsafeFork = /* @__PURE__ */ makeDual((runtime2, self2, options2) => {
  const fiberId2 = unsafeMake$9();
  const fiberRefUpdates = [[currentContext$1, [[fiberId2, runtime2.context]]]];
  if (options2 == null ? void 0 : options2.scheduler) {
    fiberRefUpdates.push([currentScheduler$1, [[fiberId2, options2.scheduler]]]);
  }
  let fiberRefs2 = updateManyAs(runtime2.fiberRefs, {
    entries: fiberRefUpdates,
    forkAs: fiberId2
  });
  if (options2 == null ? void 0 : options2.updateRefs) {
    fiberRefs2 = options2.updateRefs(fiberRefs2, fiberId2);
  }
  const fiberRuntime = new FiberRuntime(fiberId2, fiberRefs2, runtime2.runtimeFlags);
  let effect2 = self2;
  if (options2 == null ? void 0 : options2.scope) {
    effect2 = flatMap$7(fork$1(options2.scope, sequential$2), (closeableScope) => zipRight$4(scopeAddFinalizer(closeableScope, fiberIdWith$1((id2) => equals$1(id2, fiberRuntime.id()) ? void_$4 : interruptAsFiber(fiberRuntime, id2))), onExit$2(self2, (exit2) => close(closeableScope, exit2))));
  }
  const supervisor = fiberRuntime.currentSupervisor;
  if (supervisor !== none) {
    supervisor.onStart(runtime2.context, effect2, none$4(), fiberRuntime);
    fiberRuntime.addObserver((exit2) => supervisor.onEnd(exit2, fiberRuntime));
  }
  globalScope.add(runtime2.runtimeFlags, fiberRuntime);
  if ((options2 == null ? void 0 : options2.immediate) === false) {
    fiberRuntime.resume(effect2);
  } else {
    fiberRuntime.start(effect2);
  }
  return fiberRuntime;
});
const unsafeRunSync = /* @__PURE__ */ makeDual((runtime2, effect2) => {
  const result = unsafeRunSyncExit(runtime2)(effect2);
  if (result._tag === "Failure") {
    throw fiberFailure(result.effect_instruction_i0);
  }
  return result.effect_instruction_i0;
});
class AsyncFiberExceptionImpl extends Error {
  constructor(fiber) {
    super(`Fiber #${fiber.id().id} cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work`);
    __publicField(this, "fiber");
    __publicField(this, "_tag", "AsyncFiberException");
    this.fiber = fiber;
    this.name = this._tag;
    this.stack = this.message;
  }
}
const asyncFiberException = (fiber) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new AsyncFiberExceptionImpl(fiber);
  Error.stackTraceLimit = limit;
  return error;
};
const FiberFailureId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure");
const FiberFailureCauseId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure/Cause");
class FiberFailureImpl extends Error {
  constructor(cause) {
    const head2 = prettyErrors(cause)[0];
    super((head2 == null ? void 0 : head2.message) || "An error has occurred");
    __publicField(this, _aa);
    __publicField(this, _$);
    this[FiberFailureId] = FiberFailureId;
    this[FiberFailureCauseId] = cause;
    this.name = head2 ? `(FiberFailure) ${head2.name}` : "FiberFailure";
    if (head2 == null ? void 0 : head2.stack) {
      this.stack = head2.stack;
    }
  }
  toJSON() {
    return {
      _id: "FiberFailure",
      cause: this[FiberFailureCauseId].toJSON()
    };
  }
  toString() {
    return "(FiberFailure) " + pretty$1(this[FiberFailureCauseId], {
      renderErrorCause: true
    });
  }
  [(_aa = FiberFailureId, _$ = FiberFailureCauseId, NodeInspectSymbol)]() {
    return this.toString();
  }
}
const fiberFailure = (cause) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new FiberFailureImpl(cause);
  Error.stackTraceLimit = limit;
  return error;
};
const fastPath = (effect2) => {
  const op = effect2;
  switch (op._op) {
    case "Failure":
    case "Success": {
      return op;
    }
    case "Left": {
      return exitFail(op.left);
    }
    case "Right": {
      return exitSucceed$1(op.right);
    }
    case "Some": {
      return exitSucceed$1(op.value);
    }
    case "None": {
      return exitFail(NoSuchElementException$1());
    }
  }
};
const unsafeRunSyncExit = /* @__PURE__ */ makeDual((runtime2, effect2) => {
  const op = fastPath(effect2);
  if (op) {
    return op;
  }
  const scheduler = new SyncScheduler();
  const fiberRuntime = unsafeFork(runtime2)(effect2, {
    scheduler
  });
  scheduler.flush();
  const result = fiberRuntime.unsafePoll();
  if (result) {
    return result;
  }
  return exitDie$1(capture(asyncFiberException(fiberRuntime), currentSpanFromFiber(fiberRuntime)));
});
const unsafeRunPromise = /* @__PURE__ */ makeDual((runtime2, effect2, options2) => unsafeRunPromiseExit(runtime2, effect2, options2).then((result) => {
  switch (result._tag) {
    case OP_SUCCESS: {
      return result.effect_instruction_i0;
    }
    case OP_FAILURE: {
      throw fiberFailure(result.effect_instruction_i0);
    }
  }
}));
const unsafeRunPromiseExit = /* @__PURE__ */ makeDual((runtime2, effect2, options2) => new Promise((resolve) => {
  const op = fastPath(effect2);
  if (op) {
    resolve(op);
  }
  const fiber = unsafeFork(runtime2)(effect2);
  fiber.addObserver((exit2) => {
    resolve(exit2);
  });
  if ((options2 == null ? void 0 : options2.signal) !== void 0) {
    if (options2.signal.aborted) {
      fiber.unsafeInterruptAsFork(fiber.id());
    } else {
      options2.signal.addEventListener("abort", () => {
        fiber.unsafeInterruptAsFork(fiber.id());
      }, {
        once: true
      });
    }
  }
}));
class RuntimeImpl {
  constructor(context2, runtimeFlags2, fiberRefs2) {
    __publicField(this, "context");
    __publicField(this, "runtimeFlags");
    __publicField(this, "fiberRefs");
    this.context = context2;
    this.runtimeFlags = runtimeFlags2;
    this.fiberRefs = fiberRefs2;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const make$o = (options2) => new RuntimeImpl(options2.context, options2.runtimeFlags, options2.fiberRefs);
const runtime$1 = () => withFiberRuntime$1((state, status) => succeed$a(new RuntimeImpl(state.getFiberRef(currentContext$1), status.runtimeFlags, state.getFiberRefs())));
const defaultRuntimeFlags = /* @__PURE__ */ make$I(Interruption, CooperativeYielding, RuntimeMetrics);
const defaultRuntime = /* @__PURE__ */ make$o({
  context: /* @__PURE__ */ empty$s(),
  runtimeFlags: defaultRuntimeFlags,
  fiberRefs: /* @__PURE__ */ empty$c()
});
const updateContext$1 = /* @__PURE__ */ dual(2, (self2, f) => make$o({
  context: f(self2.context),
  runtimeFlags: self2.runtimeFlags,
  fiberRefs: self2.fiberRefs
}));
const unsafeForkEffect = /* @__PURE__ */ unsafeFork(defaultRuntime);
const unsafeRunPromiseEffect = /* @__PURE__ */ unsafeRunPromise(defaultRuntime);
const unsafeRunSyncEffect = /* @__PURE__ */ unsafeRunSync(defaultRuntime);
const modifyEffect = /* @__PURE__ */ dual(2, (self2, f) => self2.modifyEffect(f));
const LayerSymbolKey = "effect/Layer";
const LayerTypeId = /* @__PURE__ */ Symbol.for(LayerSymbolKey);
const layerVariance = {
  /* c8 ignore next */
  _RIn: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _ROut: (_) => _
};
const proto$9 = {
  [LayerTypeId]: layerVariance,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const MemoMapTypeIdKey = "effect/Layer/MemoMap";
const MemoMapTypeId = /* @__PURE__ */ Symbol.for(MemoMapTypeIdKey);
const CurrentMemoMap = /* @__PURE__ */ Reference()("effect/Layer/CurrentMemoMap", {
  defaultValue: () => unsafeMakeMemoMap()
});
const isLayer$1 = (u) => hasProperty(u, LayerTypeId);
const isFresh = (self2) => {
  return self2._op_layer === OP_FRESH;
};
_ba = MemoMapTypeId;
class MemoMapImpl {
  constructor(ref) {
    __publicField(this, "ref");
    __publicField(this, _ba);
    this.ref = ref;
    this[MemoMapTypeId] = MemoMapTypeId;
  }
  /**
   * Checks the memo map to see if a layer exists. If it is, immediately
   * returns it. Otherwise, obtains the layer, stores it in the memo map,
   * and adds a finalizer to the `Scope`.
   */
  getOrElseMemoize(layer2, scope2) {
    return pipe(modifyEffect(this.ref, (map2) => {
      const inMap = map2.get(layer2);
      if (inMap !== void 0) {
        const [acquire, release] = inMap;
        const cached2 = pipe(acquire, flatMap$7(([patch2, b]) => pipe(patchFiberRefs(patch2), as$1(b))), onExit$2(exitMatch({
          onFailure: () => void_$4,
          onSuccess: () => scopeAddFinalizerExit(scope2, release)
        })));
        return succeed$a([cached2, map2]);
      }
      return pipe(make$B(0), flatMap$7((observers) => pipe(deferredMake(), flatMap$7((deferred) => pipe(make$B(() => void_$4), map$9((finalizerRef) => {
        const resource = uninterruptibleMask$2((restore) => pipe(scopeMake(), flatMap$7((innerScope) => pipe(restore(flatMap$7(makeBuilder(layer2, innerScope, true), (f) => diffFiberRefs(f(this)))), exit$1, flatMap$7((exit2) => {
          switch (exit2._tag) {
            case OP_FAILURE: {
              return pipe(deferredFailCause(deferred, exit2.effect_instruction_i0), zipRight$4(scopeClose(innerScope, exit2)), zipRight$4(failCause$9(exit2.effect_instruction_i0)));
            }
            case OP_SUCCESS: {
              return pipe(set$4(finalizerRef, (exit3) => pipe(scopeClose(innerScope, exit3), whenEffect(modify$2(observers, (n) => [n === 1, n - 1])), asVoid$1)), zipRight$4(update$2(observers, (n) => n + 1)), zipRight$4(scopeAddFinalizerExit(scope2, (exit3) => pipe(sync$5(() => map2.delete(layer2)), zipRight$4(get$6(finalizerRef)), flatMap$7((finalizer) => finalizer(exit3))))), zipRight$4(deferredSucceed(deferred, exit2.effect_instruction_i0)), as$1(exit2.effect_instruction_i0[1]));
            }
          }
        })))));
        const memoized = [pipe(deferredAwait(deferred), onExit$2(exitMatchEffect({
          onFailure: () => void_$4,
          onSuccess: () => update$2(observers, (n) => n + 1)
        }))), (exit2) => pipe(get$6(finalizerRef), flatMap$7((finalizer) => finalizer(exit2)))];
        return [resource, isFresh(layer2) ? map2 : map2.set(layer2, memoized)];
      }))))));
    }), flatten$4);
  }
}
const makeMemoMap = /* @__PURE__ */ suspend$7(() => map$9(makeSynchronized(/* @__PURE__ */ new Map()), (ref) => new MemoMapImpl(ref)));
const unsafeMakeMemoMap = () => new MemoMapImpl(unsafeMakeSynchronized(/* @__PURE__ */ new Map()));
const build$1 = (self2) => scopeWith((scope2) => buildWithScope$1(self2, scope2));
const buildWithScope$1 = /* @__PURE__ */ dual(2, (self2, scope2) => flatMap$7(makeMemoMap, (memoMap) => buildWithMemoMap(self2, memoMap, scope2)));
const buildWithMemoMap = /* @__PURE__ */ dual(3, (self2, memoMap, scope2) => flatMap$7(makeBuilder(self2, scope2), (run2) => provideService$1(run2(memoMap), CurrentMemoMap, memoMap)));
const makeBuilder = (self2, scope2, inMemoMap = false) => {
  const op = self2;
  switch (op._op_layer) {
    case "Locally": {
      return sync$5(() => (memoMap) => op.f(memoMap.getOrElseMemoize(op.self, scope2)));
    }
    case "ExtendScope": {
      return sync$5(() => (memoMap) => scopeWith((scope3) => memoMap.getOrElseMemoize(op.layer, scope3)));
    }
    case "Fold": {
      return sync$5(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.layer, scope2), matchCauseEffect$2({
        onFailure: (cause) => memoMap.getOrElseMemoize(op.failureK(cause), scope2),
        onSuccess: (value2) => memoMap.getOrElseMemoize(op.successK(value2), scope2)
      })));
    }
    case "Fresh": {
      return sync$5(() => (_) => pipe(op.layer, buildWithScope$1(scope2)));
    }
    case "FromEffect": {
      return inMemoMap ? sync$5(() => (_) => op.effect) : sync$5(() => (memoMap) => memoMap.getOrElseMemoize(self2, scope2));
    }
    case "Provide": {
      return sync$5(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope2), flatMap$7((env2) => pipe(memoMap.getOrElseMemoize(op.second, scope2), provideContext$4(env2)))));
    }
    case "Scoped": {
      return inMemoMap ? sync$5(() => (_) => scopeExtend(op.effect, scope2)) : sync$5(() => (memoMap) => memoMap.getOrElseMemoize(self2, scope2));
    }
    case "Suspend": {
      return sync$5(() => (memoMap) => memoMap.getOrElseMemoize(op.evaluate(), scope2));
    }
    case "ProvideMerge": {
      return sync$5(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope2), zipWith$2(memoMap.getOrElseMemoize(op.second, scope2), op.zipK)));
    }
    case "ZipWith": {
      return sync$5(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope2), zipWithOptions(memoMap.getOrElseMemoize(op.second, scope2), op.zipK, {
        concurrent: true
      })));
    }
  }
};
const context$1 = () => fromEffectContext(context$2());
const fail$7 = (error) => failCause$5(fail$8(error));
const failCause$5 = (cause) => fromEffectContext(failCause$9(cause));
const flatMap$5 = /* @__PURE__ */ dual(2, (self2, f) => match$2(self2, {
  onFailure: fail$7,
  onSuccess: f
}));
const fromEffect$4 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag(a);
  const tag2 = tagFirst ? a : b;
  const effect2 = tagFirst ? b : a;
  return fromEffectContext(map$9(effect2, (service) => make$T(tag2, service)));
});
function fromEffectContext(effect2) {
  const fromEffect2 = Object.create(proto$9);
  fromEffect2._op_layer = OP_FROM_EFFECT$2;
  fromEffect2.effect = effect2;
  return fromEffect2;
}
const launch$1 = (self2) => scopedEffect(zipRight$4(scopeWith((scope2) => pipe(self2, buildWithScope$1(scope2))), never));
const matchCause$1 = /* @__PURE__ */ dual(2, (self2, {
  onFailure,
  onSuccess
}) => {
  const fold = Object.create(proto$9);
  fold._op_layer = OP_FOLD$1;
  fold.layer = self2;
  fold.failureK = onFailure;
  fold.successK = onSuccess;
  return fold;
});
const match$2 = /* @__PURE__ */ dual(2, (self2, {
  onFailure,
  onSuccess
}) => matchCause$1(self2, {
  onFailure: (cause) => {
    const failureOrCause$12 = failureOrCause(cause);
    switch (failureOrCause$12._tag) {
      case "Left": {
        return onFailure(failureOrCause$12.left);
      }
      case "Right": {
        return failCause$5(failureOrCause$12.right);
      }
    }
  },
  onSuccess
}));
const merge$4 = /* @__PURE__ */ dual(2, (self2, that) => zipWith$1(self2, that, (a, b) => merge$6(a, b)));
const mergeAll$1 = (...layers) => {
  let final = layers[0];
  for (let i = 1; i < layers.length; i++) {
    final = merge$4(final, layers[i]);
  }
  return final;
};
const scoped$4 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag(a);
  const tag2 = tagFirst ? a : b;
  const effect2 = tagFirst ? b : a;
  return scopedContext(map$9(effect2, (service) => make$T(tag2, service)));
});
const scopedDiscard$1 = (effect2) => scopedContext(pipe(effect2, as$1(empty$s())));
const scopedContext = (effect2) => {
  const scoped2 = Object.create(proto$9);
  scoped2._op_layer = OP_SCOPED;
  scoped2.effect = effect2;
  return scoped2;
};
const succeed$6 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag(a);
  const tag2 = tagFirst ? a : b;
  const resource = tagFirst ? b : a;
  return fromEffectContext(succeed$a(make$T(tag2, resource)));
});
const suspend$6 = (evaluate2) => {
  const suspend2 = Object.create(proto$9);
  suspend2._op_layer = OP_SUSPEND$2;
  suspend2.evaluate = evaluate2;
  return suspend2;
};
const sync$4 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag(a);
  const tag2 = tagFirst ? a : b;
  const evaluate2 = tagFirst ? b : a;
  return fromEffectContext(sync$5(() => make$T(tag2, evaluate2())));
});
const provide$2 = /* @__PURE__ */ dual(2, (self2, that) => suspend$6(() => {
  const provideTo = Object.create(proto$9);
  provideTo._op_layer = OP_PROVIDE$2;
  provideTo.first = Object.create(proto$9, {
    _op_layer: {
      value: OP_PROVIDE_MERGE,
      enumerable: true
    },
    first: {
      value: context$1(),
      enumerable: true
    },
    second: {
      value: Array.isArray(that) ? mergeAll$1(...that) : that
    },
    zipK: {
      value: (a, b) => pipe(a, merge$6(b))
    }
  });
  provideTo.second = self2;
  return provideTo;
}));
const zipWith$1 = /* @__PURE__ */ dual(3, (self2, that, f) => suspend$6(() => {
  const zipWith2 = Object.create(proto$9);
  zipWith2._op_layer = OP_ZIP_WITH;
  zipWith2.first = self2;
  zipWith2.second = that;
  zipWith2.zipK = f;
  return zipWith2;
}));
const unwrapEffect$1 = (self2) => {
  const tag2 = GenericTag("effect/Layer/unwrapEffect/Layer.Layer<R1, E1, A>");
  return flatMap$5(fromEffect$4(tag2, self2), (context2) => get$e(context2, tag2));
};
const unwrapScoped$4 = (self2) => {
  const tag2 = GenericTag("effect/Layer/unwrapScoped/Layer.Layer<R1, E1, A>");
  return flatMap$5(scoped$4(tag2, self2), (context2) => get$e(context2, tag2));
};
const provideSomeLayer = /* @__PURE__ */ dual(2, (self2, layer2) => scopedWith$3((scope2) => flatMap$7(buildWithScope$1(layer2, scope2), (context2) => provideSomeContext(self2, context2))));
const provideSomeRuntime = /* @__PURE__ */ dual(2, (self2, rt) => {
  const patchRefs = diff$1(defaultRuntime.fiberRefs, rt.fiberRefs);
  const patchFlags = diff$3(defaultRuntime.runtimeFlags, rt.runtimeFlags);
  return uninterruptibleMask$2((restore) => withFiberRuntime$1((fiber) => {
    const oldContext = fiber.getFiberRef(currentContext$1);
    const oldRefs = fiber.getFiberRefs();
    const newRefs = patch$3(fiber.id(), oldRefs)(patchRefs);
    const oldFlags = fiber.currentRuntimeFlags;
    const newFlags = patch$6(patchFlags)(oldFlags);
    const rollbackRefs = diff$1(newRefs, oldRefs);
    const rollbackFlags = diff$3(newFlags, oldFlags);
    fiber.setFiberRefs(newRefs);
    fiber.currentRuntimeFlags = newFlags;
    return ensuring$5(provideSomeContext(restore(self2), merge$6(oldContext, rt.context)), withFiberRuntime$1((fiber2) => {
      fiber2.setFiberRefs(patch$3(fiber2.id(), fiber2.getFiberRefs())(rollbackRefs));
      fiber2.currentRuntimeFlags = patch$6(rollbackFlags)(fiber2.currentRuntimeFlags);
      return void_$4;
    }));
  }));
});
const effect_provide = /* @__PURE__ */ dual(2, (self2, source) => {
  if (Array.isArray(source)) {
    return provideSomeLayer(self2, mergeAll$1(...source));
  } else if (isLayer$1(source)) {
    return provideSomeLayer(self2, source);
  } else if (isContext(source)) {
    return provideSomeContext(self2, source);
  } else if (TypeId$f in source) {
    return flatMap$7(source.runtimeEffect, (rt) => provideSomeRuntime(self2, rt));
  } else {
    return provideSomeRuntime(self2, source);
  }
});
const Class$1 = Class$3;
const EffectTypeId = EffectTypeId$1;
const isEffect = isEffect$1;
const cached = memoize;
const all = all$1;
const forEach = forEach$1;
const async = async_;
const withFiberRuntime = withFiberRuntime$1;
const fail$6 = fail$b;
const failCause$4 = failCause$9;
const die$3 = die$6;
const dieMessage = dieMessage$1;
const gen = gen$1;
const promise = promise$1;
const succeed$5 = succeed$a;
const suspend$5 = suspend$7;
const sync$3 = sync$5;
const _void = void_$4;
const yieldNow = yieldNow$3;
const catchAll$3 = catchAll$4;
const catchAllCause$2 = catchAllCause$3;
const catchAllDefect = catchAllDefect$1;
const catchIf = catchIf$1;
const catchSomeCause = catchSomeCause$1;
const catchTag = catchTag$1;
const ignore = ignore$1;
const ignoreLogged = ignoreLogged$1;
const retry$2 = retry_combined;
const try_ = try_$1;
const tryMap = tryMap$1;
const tryPromise = tryPromise$1;
const disconnect = disconnect$1;
const interrupt$1 = interrupt$6;
const interruptible = interruptible$2;
const onInterrupt = onInterrupt$1;
const uninterruptible = uninterruptible$1;
const uninterruptibleMask = uninterruptibleMask$2;
const as = as$1;
const asVoid = asVoid$1;
const map$5 = map$9;
const mapBoth$1 = mapBoth$3;
const mapError$4 = mapError$5;
const acquireRelease = acquireRelease$1;
const acquireUseRelease$2 = acquireUseRelease$3;
const addFinalizer = addFinalizer$2;
const ensuring$4 = ensuring$5;
const onError = onError$1;
const onExit = onExit$2;
const scope = scope$1;
const scopedWith$2 = scopedWith$3;
const scoped$3 = scopedEffect;
const fiberIdWith = fiberIdWith$1;
const fork = fork$2;
const forkDaemon = forkDaemon$1;
const forkIn = forkIn$1;
const forkScoped = forkScoped$1;
const clock = clock$1;
const sleep = sleep$1;
const timeout = timeout$1;
const context = context$2;
const mapInputContext = mapInputContext$1;
const provide$1 = effect_provide;
const provideService = provideService$1;
const serviceFunctions = serviceFunctions$1;
const serviceOption = serviceOption$1;
const either$1 = either$2;
const exit = exit$1;
const intoDeferred = intoDeferred$1;
const when = when$1;
const flatMap$4 = flatMap$7;
const andThen = andThen$1;
const flatten$3 = flatten$4;
const race = race$1;
const raceFirst = raceFirst$1;
const raceWith = raceWith$1;
const tap$2 = tap$3;
const tapErrorCause = tapErrorCause$1;
const forever = forever$2;
const repeat = repeat_combined;
const locallyWith = fiberRefLocallyWith;
const match$1 = match$4;
const matchCause = matchCause$2;
const matchCauseEffect = matchCauseEffect$2;
const matchEffect = matchEffect$1;
const log = log$1;
const logDebug = logDebug$1;
const logWarning = logWarning$1;
const logError = logError$1;
const annotateLogs = annotateLogs$1;
const withUnhandledErrorLogLevel = withUnhandledErrorLogLevel$1;
const orDie = orDie$1;
const runtime = runtime$1;
const makeSemaphore = makeSemaphore$1;
const unsafeMakeLatch = unsafeMakeLatch$1;
const runFork$1 = unsafeForkEffect;
const runPromise = unsafeRunPromiseEffect;
const runSync = unsafeRunSyncEffect;
const zip$1 = zipOptions;
const zipLeft = zipLeftOptions;
const zipRight$2 = zipRightOptions;
const zipWith = zipWithOptions;
const tracer = tracer$1;
const annotateCurrentSpan = annotateCurrentSpan$1;
const currentSpan = currentSpan$1;
const makeSpan = makeSpan$1;
const useSpan = useSpan$1;
const withSpan$3 = withSpan$4;
const withSpanScoped = withSpanScoped$1;
const withParentSpan = withParentSpan$1;
const fn = function(nameOrBody, ...pipeables) {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const errorDef = new Error();
  Error.stackTraceLimit = limit;
  if (typeof nameOrBody !== "string") {
    return defineLength(nameOrBody.length, function(...args2) {
      const limit2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const errorCall = new Error();
      Error.stackTraceLimit = limit2;
      return fnApply({
        self: this,
        body: nameOrBody,
        args: args2,
        pipeables,
        spanName: "<anonymous>",
        spanOptions: {
          context: DisablePropagation.context(true)
        },
        errorDef,
        errorCall
      });
    });
  }
  const name = nameOrBody;
  const options2 = pipeables[0];
  return (body, ...pipeables2) => defineLength(body.length, {
    [name](...args2) {
      const limit2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const errorCall = new Error();
      Error.stackTraceLimit = limit2;
      return fnApply({
        self: this,
        body,
        args: args2,
        pipeables: pipeables2,
        spanName: name,
        spanOptions: options2,
        errorDef,
        errorCall
      });
    }
  }[name]);
};
function defineLength(length2, fn2) {
  return Object.defineProperty(fn2, "length", {
    value: length2,
    configurable: true
  });
}
function fnApply(options2) {
  let effect2;
  let fnError = void 0;
  if (isGeneratorFunction(options2.body)) {
    effect2 = fromIterator(() => options2.body.apply(options2.self, options2.args));
  } else {
    try {
      effect2 = options2.body.apply(options2.self, options2.args);
    } catch (error) {
      fnError = error;
      effect2 = die$3(error);
    }
  }
  if (options2.pipeables.length > 0) {
    try {
      for (const x of options2.pipeables) {
        effect2 = x(effect2, ...options2.args);
      }
    } catch (error) {
      effect2 = fnError ? failCause$4(sequential$3(die$7(fnError), die$7(error))) : die$3(error);
    }
  }
  let cache = false;
  const captureStackTrace = () => {
    if (cache !== false) {
      return cache;
    }
    if (options2.errorCall.stack) {
      const stackDef = options2.errorDef.stack.trim().split("\n");
      const stackCall = options2.errorCall.stack.trim().split("\n");
      let endStackDef = stackDef.slice(2).join("\n").trim();
      if (!endStackDef.includes(`(`)) {
        endStackDef = endStackDef.replace(/at (.*)/, "at ($1)");
      }
      let endStackCall = stackCall.slice(2).join("\n").trim();
      if (!endStackCall.includes(`(`)) {
        endStackCall = endStackCall.replace(/at (.*)/, "at ($1)");
      }
      cache = `${endStackDef}
${endStackCall}`;
      return cache;
    }
  };
  const opts = options2.spanOptions && "captureStackTrace" in options2.spanOptions ? options2.spanOptions : {
    captureStackTrace,
    ...options2.spanOptions
  };
  return withSpan$3(effect2, options2.spanName, opts);
}
const fnUntraced = fnUntraced$1;
const unsafeMake$3 = fiberRefUnsafeMake;
const get$4 = fiberRefGet;
const getWith = fiberRefGetWith;
const currentContext = currentContext$1;
const currentSchedulingPriority = currentSchedulingPriority$1;
const currentLoggers = currentLoggers$1;
const currentScheduler = currentScheduler$1;
const currentTracerEnabled = currentTracerEnabled$1;
const currentTracerTimingEnabled = currentTracerTimingEnabled$1;
const withMinimumLogLevel$1 = /* @__PURE__ */ dual(2, (self2, level) => fiberRefLocally(currentMinimumLogLevel, level)(self2));
const addLogger = (logger) => scopedDiscard$1(fiberRefLocallyScopedWith(currentLoggers$1, add(logger)));
const removeLogger = (logger) => scopedDiscard$1(fiberRefLocallyScopedWith(currentLoggers$1, remove$2(logger)));
const replaceLogger = /* @__PURE__ */ dual(2, (self2, that) => flatMap$5(removeLogger(self2), () => addLogger(that)));
const setTracer$1 = (tracer2) => scopedDiscard$1(withTracerScoped(tracer2));
const isLayer = isLayer$1;
const build = build$1;
const buildWithScope = buildWithScope$1;
const effect$2 = fromEffect$4;
const launch = launch$1;
const merge$3 = merge$4;
const scoped$2 = scoped$4;
const scopedDiscard = scopedDiscard$1;
const succeed$4 = succeed$6;
const sync$2 = sync$4;
const provide = provide$2;
const unwrapEffect = unwrapEffect$1;
const unwrapScoped$3 = unwrapScoped$4;
const setTracer = setTracer$1;
const EnqueueSymbolKey = "effect/QueueEnqueue";
const EnqueueTypeId = /* @__PURE__ */ Symbol.for(EnqueueSymbolKey);
const DequeueSymbolKey = "effect/QueueDequeue";
const DequeueTypeId = /* @__PURE__ */ Symbol.for(DequeueSymbolKey);
const QueueStrategySymbolKey = "effect/QueueStrategy";
const QueueStrategyTypeId = /* @__PURE__ */ Symbol.for(QueueStrategySymbolKey);
const BackingQueueSymbolKey = "effect/BackingQueue";
const BackingQueueTypeId = /* @__PURE__ */ Symbol.for(BackingQueueSymbolKey);
const queueStrategyVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
const backingQueueVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
const enqueueVariance = {
  /* c8 ignore next */
  _In: (_) => _
};
const dequeueVariance = {
  /* c8 ignore next */
  _Out: (_) => _
};
class QueueImpl extends (_ea = Class$4, _da = EnqueueTypeId, _ca = DequeueTypeId, _ea) {
  constructor(queue, takers, shutdownHook, shutdownFlag, strategy) {
    super();
    __publicField(this, "queue");
    __publicField(this, "takers");
    __publicField(this, "shutdownHook");
    __publicField(this, "shutdownFlag");
    __publicField(this, "strategy");
    __publicField(this, _da, enqueueVariance);
    __publicField(this, _ca, dequeueVariance);
    this.queue = queue;
    this.takers = takers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  commit() {
    return this.take;
  }
  capacity() {
    return this.queue.capacity();
  }
  get size() {
    return suspend$7(() => catchAll$4(this.unsafeSize(), () => interrupt$6));
  }
  unsafeSize() {
    if (get$b(this.shutdownFlag)) {
      return none$4();
    }
    return some(this.queue.length() - length(this.takers) + this.strategy.surplusSize());
  }
  get isEmpty() {
    return map$9(this.size, (size2) => size2 <= 0);
  }
  get isFull() {
    return map$9(this.size, (size2) => size2 >= this.capacity());
  }
  get shutdown() {
    return uninterruptible$1(withFiberRuntime$1((state) => {
      pipe(this.shutdownFlag, set$7(true));
      return pipe(forEachConcurrentDiscard(unsafePollAll(this.takers), (d) => deferredInterruptWith(d, state.id()), false, false), zipRight$4(this.strategy.shutdown), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asVoid$1);
    }));
  }
  get isShutdown() {
    return sync$5(() => get$b(this.shutdownFlag));
  }
  get awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  isActive() {
    return !get$b(this.shutdownFlag);
  }
  unsafeOffer(value2) {
    if (get$b(this.shutdownFlag)) {
      return false;
    }
    let noRemaining;
    if (this.queue.length() === 0) {
      const taker = pipe(this.takers, poll(EmptyMutableQueue));
      if (taker !== EmptyMutableQueue) {
        unsafeCompleteDeferred$1(taker, value2);
        noRemaining = true;
      } else {
        noRemaining = false;
      }
    } else {
      noRemaining = false;
    }
    if (noRemaining) {
      return true;
    }
    const succeeded = this.queue.offer(value2);
    unsafeCompleteTakers(this.strategy, this.queue, this.takers);
    return succeeded;
  }
  offer(value2) {
    return suspend$7(() => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      let noRemaining;
      if (this.queue.length() === 0) {
        const taker = pipe(this.takers, poll(EmptyMutableQueue));
        if (taker !== EmptyMutableQueue) {
          unsafeCompleteDeferred$1(taker, value2);
          noRemaining = true;
        } else {
          noRemaining = false;
        }
      } else {
        noRemaining = false;
      }
      if (noRemaining) {
        return succeed$a(true);
      }
      const succeeded = this.queue.offer(value2);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return succeeded ? succeed$a(true) : this.strategy.handleSurplus([value2], this.queue, this.takers, this.shutdownFlag);
    });
  }
  offerAll(iterable) {
    return suspend$7(() => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      const values = fromIterable$8(iterable);
      const pTakers = this.queue.length() === 0 ? fromIterable$8(unsafePollN$1(this.takers, values.length)) : empty$u;
      const [forTakers, remaining] = pipe(values, splitAt$1(pTakers.length));
      for (let i = 0; i < pTakers.length; i++) {
        const taker = pTakers[i];
        const item = forTakers[i];
        unsafeCompleteDeferred$1(taker, item);
      }
      if (remaining.length === 0) {
        return succeed$a(true);
      }
      const surplus = this.queue.offerAll(remaining);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return isEmpty$7(surplus) ? succeed$a(true) : this.strategy.handleSurplus(surplus, this.queue, this.takers, this.shutdownFlag);
    });
  }
  get take() {
    return withFiberRuntime$1((state) => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      const item = this.queue.poll(EmptyMutableQueue);
      if (item !== EmptyMutableQueue) {
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return succeed$a(item);
      } else {
        const deferred = deferredUnsafeMake(state.id());
        return pipe(suspend$7(() => {
          pipe(this.takers, offer$4(deferred));
          unsafeCompleteTakers(this.strategy, this.queue, this.takers);
          return get$b(this.shutdownFlag) ? interrupt$6 : deferredAwait(deferred);
        }), onInterrupt$1(() => {
          return sync$5(() => unsafeRemove$1(this.takers, deferred));
        }));
      }
    });
  }
  get takeAll() {
    return suspend$7(() => {
      return get$b(this.shutdownFlag) ? interrupt$6 : sync$5(() => {
        const values = this.queue.pollUpTo(Number.POSITIVE_INFINITY);
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return fromIterable$7(values);
      });
    });
  }
  takeUpTo(max) {
    return suspend$7(() => get$b(this.shutdownFlag) ? interrupt$6 : sync$5(() => {
      const values = this.queue.pollUpTo(max);
      this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
      return fromIterable$7(values);
    }));
  }
  takeBetween(min2, max) {
    return suspend$7(() => takeRemainderLoop$1(this, min2, max, empty$r()));
  }
}
const takeRemainderLoop$1 = (self2, min2, max, acc) => {
  if (max < min2) {
    return succeed$a(acc);
  }
  return pipe(takeUpTo(self2, max), flatMap$7((bs) => {
    const remaining = min2 - bs.length;
    if (remaining === 1) {
      return pipe(take$5(self2), map$9((b) => pipe(acc, appendAll$1(bs), append$1(b))));
    }
    if (remaining > 1) {
      return pipe(take$5(self2), flatMap$7((b) => takeRemainderLoop$1(self2, remaining - 1, max - bs.length - 1, pipe(acc, appendAll$1(bs), append$1(b)))));
    }
    return succeed$a(pipe(acc, appendAll$1(bs)));
  }));
};
const bounded$1 = (requestedCapacity) => pipe(sync$5(() => bounded$2(requestedCapacity)), flatMap$7((queue) => make$n(backingQueueFromMutableQueue(queue), backPressureStrategy())));
const dropping$1 = (requestedCapacity) => pipe(sync$5(() => bounded$2(requestedCapacity)), flatMap$7((queue) => make$n(backingQueueFromMutableQueue(queue), droppingStrategy())));
const sliding$1 = (requestedCapacity) => pipe(sync$5(() => bounded$2(requestedCapacity)), flatMap$7((queue) => make$n(backingQueueFromMutableQueue(queue), slidingStrategy())));
const unbounded$5 = () => pipe(sync$5(() => unbounded$6()), flatMap$7((queue) => make$n(backingQueueFromMutableQueue(queue), droppingStrategy())));
const unsafeMake$2 = (queue, takers, shutdownHook, shutdownFlag, strategy) => {
  return new QueueImpl(queue, takers, shutdownHook, shutdownFlag, strategy);
};
const make$n = (queue, strategy) => pipe(deferredMake(), map$9((deferred) => unsafeMake$2(queue, unbounded$6(), deferred, make$N(false), strategy)));
_fa = BackingQueueTypeId;
class BackingQueueFromMutableQueue {
  constructor(mutable2) {
    __publicField(this, "mutable");
    __publicField(this, _fa, backingQueueVariance);
    this.mutable = mutable2;
  }
  poll(def) {
    return poll(this.mutable, def);
  }
  pollUpTo(limit) {
    return pollUpTo(this.mutable, limit);
  }
  offerAll(elements) {
    return offerAll$2(this.mutable, elements);
  }
  offer(element) {
    return offer$4(this.mutable, element);
  }
  capacity() {
    return capacity(this.mutable);
  }
  length() {
    return length(this.mutable);
  }
}
const backingQueueFromMutableQueue = (mutable2) => new BackingQueueFromMutableQueue(mutable2);
const size$1 = (self2) => self2.size;
const isShutdown$1 = (self2) => self2.isShutdown;
const shutdown$3 = (self2) => self2.shutdown;
const offer$3 = /* @__PURE__ */ dual(2, (self2, value2) => self2.offer(value2));
const offerAll$1 = /* @__PURE__ */ dual(2, (self2, iterable) => self2.offerAll(iterable));
const take$5 = (self2) => self2.take;
const takeAll$1 = (self2) => self2.takeAll;
const takeUpTo = /* @__PURE__ */ dual(2, (self2, max) => self2.takeUpTo(max));
const takeBetween$1 = /* @__PURE__ */ dual(3, (self2, min2, max) => self2.takeBetween(min2, max));
const backPressureStrategy = () => new BackPressureStrategy();
const droppingStrategy = () => new DroppingStrategy$1();
const slidingStrategy = () => new SlidingStrategy();
_ga = QueueStrategyTypeId;
class BackPressureStrategy {
  constructor() {
    __publicField(this, _ga, queueStrategyVariance);
    __publicField(this, "putters", /* @__PURE__ */ unbounded$6());
  }
  surplusSize() {
    return length(this.putters);
  }
  onCompleteTakersWithEmptyQueue(takers) {
    while (!isEmpty$2(this.putters) && !isEmpty$2(takers)) {
      const taker = poll(takers, void 0);
      const putter = poll(this.putters, void 0);
      if (putter[2]) {
        unsafeCompleteDeferred$1(putter[1], true);
      }
      unsafeCompleteDeferred$1(taker, putter[0]);
    }
  }
  get shutdown() {
    return pipe(fiberId, flatMap$7((fiberId2) => pipe(sync$5(() => unsafePollAll(this.putters)), flatMap$7((putters) => forEachConcurrentDiscard(putters, ([_, deferred, isLastItem]) => isLastItem ? pipe(deferredInterruptWith(deferred, fiberId2), asVoid$1) : void_$4, false, false)))));
  }
  handleSurplus(iterable, queue, takers, isShutdown2) {
    return withFiberRuntime$1((state) => {
      const deferred = deferredUnsafeMake(state.id());
      return pipe(suspend$7(() => {
        this.unsafeOffer(iterable, deferred);
        this.unsafeOnQueueEmptySpace(queue, takers);
        unsafeCompleteTakers(this, queue, takers);
        return get$b(isShutdown2) ? interrupt$6 : deferredAwait(deferred);
      }), onInterrupt$1(() => sync$5(() => this.unsafeRemove(deferred))));
    });
  }
  unsafeOnQueueEmptySpace(queue, takers) {
    let keepPolling = true;
    while (keepPolling && (queue.capacity() === Number.POSITIVE_INFINITY || queue.length() < queue.capacity())) {
      const putter = pipe(this.putters, poll(EmptyMutableQueue));
      if (putter === EmptyMutableQueue) {
        keepPolling = false;
      } else {
        const offered = queue.offer(putter[0]);
        if (offered && putter[2]) {
          unsafeCompleteDeferred$1(putter[1], true);
        } else if (!offered) {
          unsafeOfferAll$1(this.putters, pipe(unsafePollAll(this.putters), prepend$1(putter)));
        }
        unsafeCompleteTakers(this, queue, takers);
      }
    }
  }
  unsafeOffer(iterable, deferred) {
    const stuff = fromIterable$8(iterable);
    for (let i = 0; i < stuff.length; i++) {
      const value2 = stuff[i];
      if (i === stuff.length - 1) {
        pipe(this.putters, offer$4([value2, deferred, true]));
      } else {
        pipe(this.putters, offer$4([value2, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll$1(this.putters, pipe(unsafePollAll(this.putters), filter$3(([, _]) => _ !== deferred)));
  }
}
let DroppingStrategy$1 = (_ha = QueueStrategyTypeId, class DroppingStrategy {
  constructor() {
    __publicField(this, _ha, queueStrategyVariance);
  }
  surplusSize() {
    return 0;
  }
  get shutdown() {
    return void_$4;
  }
  onCompleteTakersWithEmptyQueue() {
  }
  handleSurplus(_iterable, _queue, _takers, _isShutdown) {
    return succeed$a(false);
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
  }
});
_ia = QueueStrategyTypeId;
class SlidingStrategy {
  constructor() {
    __publicField(this, _ia, queueStrategyVariance);
  }
  surplusSize() {
    return 0;
  }
  get shutdown() {
    return void_$4;
  }
  onCompleteTakersWithEmptyQueue() {
  }
  handleSurplus(iterable, queue, takers, _isShutdown) {
    return sync$5(() => {
      this.unsafeOffer(queue, iterable);
      unsafeCompleteTakers(this, queue, takers);
      return true;
    });
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
  }
  unsafeOffer(queue, iterable) {
    const iterator = iterable[Symbol.iterator]();
    let next;
    let offering = true;
    while (!(next = iterator.next()).done && offering) {
      if (queue.capacity() === 0) {
        return;
      }
      queue.poll(EmptyMutableQueue);
      offering = queue.offer(next.value);
    }
  }
}
const unsafeCompleteDeferred$1 = (deferred, a) => {
  return deferredUnsafeDone(deferred, succeed$a(a));
};
const unsafeOfferAll$1 = (queue, as2) => {
  return pipe(queue, offerAll$2(as2));
};
const unsafePollAll = (queue) => {
  return pipe(queue, pollUpTo(Number.POSITIVE_INFINITY));
};
const unsafePollN$1 = (queue, max) => {
  return pipe(queue, pollUpTo(max));
};
const unsafeRemove$1 = (queue, a) => {
  unsafeOfferAll$1(queue, pipe(unsafePollAll(queue), filter$3((b) => a !== b)));
};
const unsafeCompleteTakers = (strategy, queue, takers) => {
  let keepPolling = true;
  while (keepPolling && queue.length() !== 0) {
    const taker = pipe(takers, poll(EmptyMutableQueue));
    if (taker !== EmptyMutableQueue) {
      const element = queue.poll(EmptyMutableQueue);
      if (element !== EmptyMutableQueue) {
        unsafeCompleteDeferred$1(taker, element);
        strategy.unsafeOnQueueEmptySpace(queue, takers);
      } else {
        unsafeOfferAll$1(takers, pipe(unsafePollAll(takers), prepend$1(taker)));
      }
      keepPolling = true;
    } else {
      keepPolling = false;
    }
  }
  if (keepPolling && queue.length() === 0 && !isEmpty$2(takers)) {
    strategy.onCompleteTakersWithEmptyQueue(takers);
  }
};
const AbsentValue = /* @__PURE__ */ Symbol.for("effect/PubSub/AbsentValue");
const addSubscribers = (subscription, pollers) => (subscribers) => {
  if (!subscribers.has(subscription)) {
    subscribers.set(subscription, /* @__PURE__ */ new Set());
  }
  const set2 = subscribers.get(subscription);
  set2.add(pollers);
};
const removeSubscribers = (subscription, pollers) => (subscribers) => {
  if (!subscribers.has(subscription)) {
    return;
  }
  const set2 = subscribers.get(subscription);
  set2.delete(pollers);
  if (set2.size === 0) {
    subscribers.delete(subscription);
  }
};
const unbounded$4 = (options2) => suspend$7(() => {
  const pubsub = makeUnboundedPubSub(options2);
  return makePubSub(pubsub, new DroppingStrategy2());
});
const shutdown$2 = (self2) => self2.shutdown;
const publish$1 = /* @__PURE__ */ dual(2, (self2, value2) => self2.publish(value2));
const subscribe$1 = (self2) => self2.subscribe;
const makeUnboundedPubSub = (options2) => new UnboundedPubSub((options2 == null ? void 0 : options2.replay) ? new ReplayBuffer(options2.replay) : void 0);
const makeSubscription = (pubsub, subscribers, strategy) => map$9(deferredMake(), (deferred) => unsafeMakeSubscription(pubsub, subscribers, pubsub.subscribe(), unbounded$6(), deferred, make$N(false), strategy));
const unsafeMakeSubscription = (pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy) => new SubscriptionImpl(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy, pubsub.replayWindow());
class UnboundedPubSub {
  constructor(replayBuffer) {
    __publicField(this, "replayBuffer");
    __publicField(this, "publisherHead", {
      value: AbsentValue,
      subscribers: 0,
      next: null
    });
    __publicField(this, "publisherTail", this.publisherHead);
    __publicField(this, "publisherIndex", 0);
    __publicField(this, "subscribersIndex", 0);
    __publicField(this, "capacity", Number.MAX_SAFE_INTEGER);
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherHead === this.publisherTail;
  }
  isFull() {
    return false;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value2) {
    const subscribers = this.publisherTail.subscribers;
    if (subscribers !== 0) {
      this.publisherTail.next = {
        value: value2,
        subscribers,
        next: null
      };
      this.publisherTail = this.publisherTail.next;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value2);
    }
    return true;
  }
  publishAll(elements) {
    if (this.publisherTail.subscribers !== 0) {
      for (const a of elements) {
        this.publish(a);
      }
    } else if (this.replayBuffer) {
      this.replayBuffer.offerAll(elements);
    }
    return empty$r();
  }
  slide() {
    if (this.publisherHead !== this.publisherTail) {
      this.publisherHead = this.publisherHead.next;
      this.publisherHead.value = AbsentValue;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.publisherTail.subscribers += 1;
    return new UnboundedPubSubSubscription(this, this.publisherTail, this.publisherIndex, false);
  }
}
class UnboundedPubSubSubscription {
  constructor(self2, subscriberHead, subscriberIndex, unsubscribed) {
    __publicField(this, "self");
    __publicField(this, "subscriberHead");
    __publicField(this, "subscriberIndex");
    __publicField(this, "unsubscribed");
    this.self = self2;
    this.subscriberHead = subscriberHead;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    if (this.unsubscribed) {
      return true;
    }
    let empty2 = true;
    let loop = true;
    while (loop) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop = false;
      } else {
        if (this.subscriberHead.next.value !== AbsentValue) {
          empty2 = false;
          loop = false;
        } else {
          this.subscriberHead = this.subscriberHead.next;
          this.subscriberIndex += 1;
        }
      }
    }
    return empty2;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    let loop = true;
    let polled = default_;
    while (loop) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop = false;
      } else {
        const elem = this.subscriberHead.next.value;
        if (elem !== AbsentValue) {
          polled = elem;
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
          loop = false;
        }
        this.subscriberHead = this.subscriberHead.next;
        this.subscriberIndex += 1;
      }
    }
    return polled;
  }
  pollUpTo(n) {
    const builder = [];
    const default_ = AbsentValue;
    let i = 0;
    while (i !== n) {
      const a = this.poll(default_);
      if (a === default_) {
        i = n;
      } else {
        builder.push(a);
        i += 1;
      }
    }
    return fromIterable$7(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.publisherTail.subscribers -= 1;
      while (this.subscriberHead !== this.self.publisherTail) {
        if (this.subscriberHead.next.value !== AbsentValue) {
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
        }
        this.subscriberHead = this.subscriberHead.next;
      }
    }
  }
}
class SubscriptionImpl extends (_ka = Class$4, _ja = DequeueTypeId, _ka) {
  constructor(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy, replayWindow) {
    super();
    __publicField(this, "pubsub");
    __publicField(this, "subscribers");
    __publicField(this, "subscription");
    __publicField(this, "pollers");
    __publicField(this, "shutdownHook");
    __publicField(this, "shutdownFlag");
    __publicField(this, "strategy");
    __publicField(this, "replayWindow");
    __publicField(this, _ja, dequeueVariance);
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.subscription = subscription;
    this.pollers = pollers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
    this.replayWindow = replayWindow;
  }
  commit() {
    return this.take;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  capacity() {
    return this.pubsub.capacity;
  }
  isActive() {
    return !get$b(this.shutdownFlag);
  }
  get size() {
    return suspend$7(() => get$b(this.shutdownFlag) ? interrupt$6 : succeed$a(this.subscription.size() + this.replayWindow.remaining));
  }
  unsafeSize() {
    if (get$b(this.shutdownFlag)) {
      return none$4();
    }
    return some(this.subscription.size() + this.replayWindow.remaining);
  }
  get isFull() {
    return suspend$7(() => get$b(this.shutdownFlag) ? interrupt$6 : succeed$a(this.subscription.size() === this.capacity()));
  }
  get isEmpty() {
    return map$9(this.size, (size2) => size2 === 0);
  }
  get shutdown() {
    return uninterruptible$1(withFiberRuntime$1((state) => {
      set$7(this.shutdownFlag, true);
      return pipe(forEachParUnbounded(unsafePollAllQueue(this.pollers), (d) => deferredInterruptWith(d, state.id()), false), zipRight$4(sync$5(() => {
        this.subscribers.delete(this.subscription);
        this.subscription.unsubscribe();
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      })), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asVoid$1);
    }));
  }
  get isShutdown() {
    return sync$5(() => get$b(this.shutdownFlag));
  }
  get awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  get take() {
    return withFiberRuntime$1((state) => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      if (this.replayWindow.remaining > 0) {
        const message2 = this.replayWindow.take();
        return succeed$a(message2);
      }
      const message = isEmpty$2(this.pollers) ? this.subscription.poll(EmptyMutableQueue) : EmptyMutableQueue;
      if (message === EmptyMutableQueue) {
        const deferred = deferredUnsafeMake(state.id());
        return pipe(suspend$7(() => {
          pipe(this.pollers, offer$4(deferred));
          pipe(this.subscribers, addSubscribers(this.subscription, this.pollers));
          this.strategy.unsafeCompletePollers(this.pubsub, this.subscribers, this.subscription, this.pollers);
          return get$b(this.shutdownFlag) ? interrupt$6 : deferredAwait(deferred);
        }), onInterrupt$1(() => sync$5(() => unsafeRemove(this.pollers, deferred))));
      } else {
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
        return succeed$a(message);
      }
    });
  }
  get takeAll() {
    return suspend$7(() => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      const as2 = isEmpty$2(this.pollers) ? unsafePollAllSubscription(this.subscription) : empty$r();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      if (this.replayWindow.remaining > 0) {
        return succeed$a(appendAll$1(this.replayWindow.takeAll(), as2));
      }
      return succeed$a(as2);
    });
  }
  takeUpTo(max) {
    return suspend$7(() => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      let replay = void 0;
      if (this.replayWindow.remaining >= max) {
        const as3 = this.replayWindow.takeN(max);
        return succeed$a(as3);
      } else if (this.replayWindow.remaining > 0) {
        replay = this.replayWindow.takeAll();
        max = max - replay.length;
      }
      const as2 = isEmpty$2(this.pollers) ? unsafePollN(this.subscription, max) : empty$r();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      return replay ? succeed$a(appendAll$1(replay, as2)) : succeed$a(as2);
    });
  }
  takeBetween(min2, max) {
    return suspend$7(() => takeRemainderLoop(this, min2, max, empty$r()));
  }
}
const takeRemainderLoop = (self2, min2, max, acc) => {
  if (max < min2) {
    return succeed$a(acc);
  }
  return pipe(self2.takeUpTo(max), flatMap$7((bs) => {
    const remaining = min2 - bs.length;
    if (remaining === 1) {
      return pipe(self2.take, map$9((b) => pipe(acc, appendAll$1(bs), append$1(b))));
    }
    if (remaining > 1) {
      return pipe(self2.take, flatMap$7((b) => takeRemainderLoop(self2, remaining - 1, max - bs.length - 1, pipe(acc, appendAll$1(bs), append$1(b)))));
    }
    return succeed$a(pipe(acc, appendAll$1(bs)));
  }));
};
_ma = EnqueueTypeId, _la = DequeueTypeId;
class PubSubImpl {
  constructor(pubsub, subscribers, scope2, shutdownHook, shutdownFlag, strategy) {
    __publicField(this, "pubsub");
    __publicField(this, "subscribers");
    __publicField(this, "scope");
    __publicField(this, "shutdownHook");
    __publicField(this, "shutdownFlag");
    __publicField(this, "strategy");
    __publicField(this, _ma, enqueueVariance);
    __publicField(this, _la, dequeueVariance);
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.scope = scope2;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  capacity() {
    return this.pubsub.capacity;
  }
  get size() {
    return suspend$7(() => get$b(this.shutdownFlag) ? interrupt$6 : sync$5(() => this.pubsub.size()));
  }
  unsafeSize() {
    if (get$b(this.shutdownFlag)) {
      return none$4();
    }
    return some(this.pubsub.size());
  }
  get isFull() {
    return map$9(this.size, (size2) => size2 === this.capacity());
  }
  get isEmpty() {
    return map$9(this.size, (size2) => size2 === 0);
  }
  get awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  get isShutdown() {
    return sync$5(() => get$b(this.shutdownFlag));
  }
  get shutdown() {
    return uninterruptible$1(withFiberRuntime$1((state) => {
      pipe(this.shutdownFlag, set$7(true));
      return pipe(this.scope.close(exitInterrupt$1(state.id())), zipRight$4(this.strategy.shutdown), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asVoid$1);
    }));
  }
  publish(value2) {
    return suspend$7(() => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      if (this.pubsub.publish(value2)) {
        this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
        return succeed$a(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, of$2(value2), this.shutdownFlag);
    });
  }
  isActive() {
    return !get$b(this.shutdownFlag);
  }
  unsafeOffer(value2) {
    if (get$b(this.shutdownFlag)) {
      return false;
    }
    if (this.pubsub.publish(value2)) {
      this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
      return true;
    }
    return false;
  }
  publishAll(elements) {
    return suspend$7(() => {
      if (get$b(this.shutdownFlag)) {
        return interrupt$6;
      }
      const surplus = unsafePublishAll(this.pubsub, elements);
      this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
      if (isEmpty$7(surplus)) {
        return succeed$a(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, surplus, this.shutdownFlag);
    });
  }
  get subscribe() {
    const acquire = tap$3(all$1([this.scope.fork(sequential$2), makeSubscription(this.pubsub, this.subscribers, this.strategy)]), (tuple) => tuple[0].addFinalizer(() => tuple[1].shutdown));
    return map$9(acquireRelease$1(acquire, (tuple, exit2) => tuple[0].close(exit2)), (tuple) => tuple[1]);
  }
  offer(value2) {
    return this.publish(value2);
  }
  offerAll(elements) {
    return this.publishAll(elements);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const makePubSub = (pubsub, strategy) => flatMap$7(scopeMake(), (scope2) => map$9(deferredMake(), (deferred) => unsafeMakePubSub(pubsub, /* @__PURE__ */ new Map(), scope2, deferred, make$N(false), strategy)));
const unsafeMakePubSub = (pubsub, subscribers, scope2, shutdownHook, shutdownFlag, strategy) => new PubSubImpl(pubsub, subscribers, scope2, shutdownHook, shutdownFlag, strategy);
const unsafeCompleteDeferred = (deferred, a) => {
  deferredUnsafeDone(deferred, succeed$a(a));
};
const unsafeOfferAll = (queue, as2) => {
  return pipe(queue, offerAll$2(as2));
};
const unsafePollAllQueue = (queue) => {
  return pipe(queue, pollUpTo(Number.POSITIVE_INFINITY));
};
const unsafePollAllSubscription = (subscription) => {
  return subscription.pollUpTo(Number.POSITIVE_INFINITY);
};
const unsafePollN = (subscription, max) => {
  return subscription.pollUpTo(max);
};
const unsafePublishAll = (pubsub, as2) => {
  return pubsub.publishAll(as2);
};
const unsafeRemove = (queue, value2) => {
  unsafeOfferAll(queue, pipe(unsafePollAllQueue(queue), filter$3((elem) => elem !== value2)));
};
class DroppingStrategy2 {
  get shutdown() {
    return void_$4;
  }
  handleSurplus(_pubsub, _subscribers, _elements, _isShutdown) {
    return succeed$a(false);
  }
  unsafeOnPubSubEmptySpace(_pubsub, _subscribers) {
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
}
const unsafeStrategyCompletePollers = (strategy, pubsub, subscribers, subscription, pollers) => {
  let keepPolling = true;
  while (keepPolling && !subscription.isEmpty()) {
    const poller = pipe(pollers, poll(EmptyMutableQueue));
    if (poller === EmptyMutableQueue) {
      pipe(subscribers, removeSubscribers(subscription, pollers));
      if (isEmpty$2(pollers)) {
        keepPolling = false;
      } else {
        pipe(subscribers, addSubscribers(subscription, pollers));
      }
    } else {
      const pollResult = subscription.poll(EmptyMutableQueue);
      if (pollResult === EmptyMutableQueue) {
        unsafeOfferAll(pollers, pipe(unsafePollAllQueue(pollers), prepend$1(poller)));
      } else {
        unsafeCompleteDeferred(poller, pollResult);
        strategy.unsafeOnPubSubEmptySpace(pubsub, subscribers);
      }
    }
  }
};
const unsafeStrategyCompleteSubscribers = (strategy, pubsub, subscribers) => {
  for (const [subscription, pollersSet] of subscribers) {
    for (const pollers of pollersSet) {
      strategy.unsafeCompletePollers(pubsub, subscribers, subscription, pollers);
    }
  }
};
class ReplayBuffer {
  constructor(capacity2) {
    __publicField(this, "capacity");
    __publicField(this, "head", {
      value: AbsentValue,
      next: null
    });
    __publicField(this, "tail", this.head);
    __publicField(this, "size", 0);
    __publicField(this, "index", 0);
    this.capacity = capacity2;
  }
  slide() {
    this.index++;
  }
  offer(a) {
    this.tail.value = a;
    this.tail.next = {
      value: AbsentValue,
      next: null
    };
    this.tail = this.tail.next;
    if (this.size === this.capacity) {
      this.head = this.head.next;
    } else {
      this.size += 1;
    }
  }
  offerAll(as2) {
    for (const a of as2) {
      this.offer(a);
    }
  }
}
class ReplayWindowImpl {
  constructor(buffer) {
    __publicField(this, "buffer");
    __publicField(this, "head");
    __publicField(this, "index");
    __publicField(this, "remaining");
    this.buffer = buffer;
    this.index = buffer.index;
    this.remaining = buffer.size;
    this.head = buffer.head;
  }
  fastForward() {
    while (this.index < this.buffer.index) {
      this.head = this.head.next;
      this.index++;
    }
  }
  take() {
    if (this.remaining === 0) {
      return void 0;
    } else if (this.index < this.buffer.index) {
      this.fastForward();
    }
    this.remaining--;
    const value2 = this.head.value;
    this.head = this.head.next;
    return value2;
  }
  takeN(n) {
    if (this.remaining === 0) {
      return empty$r();
    } else if (this.index < this.buffer.index) {
      this.fastForward();
    }
    const len = Math.min(n, this.remaining);
    const items = new Array(len);
    for (let i = 0; i < len; i++) {
      const value2 = this.head.value;
      this.head = this.head.next;
      items[i] = value2;
    }
    this.remaining -= len;
    return unsafeFromArray(items);
  }
  takeAll() {
    return this.takeN(this.remaining);
  }
}
const emptyReplayWindow = {
  remaining: 0,
  take: () => void 0,
  takeN: () => empty$r(),
  takeAll: () => empty$r()
};
const unbounded$3 = unbounded$4;
const shutdown$1 = shutdown$2;
const publish = publish$1;
const subscribe = subscribe$1;
const bounded = bounded$1;
const dropping = dropping$1;
const sliding = sliding$1;
const unbounded$2 = unbounded$5;
const size = size$1;
const isShutdown = isShutdown$1;
const shutdown = shutdown$3;
const offer$2 = offer$3;
const offerAll = offerAll$1;
const take$4 = take$5;
const takeAll = takeAll$1;
const takeBetween = takeBetween$1;
const OP_CONTINUE = "Continue";
const OP_CLOSE = "Close";
const OP_YIELD = "Yield";
const ChildExecutorDecisionSymbolKey = "effect/ChannelChildExecutorDecision";
const ChildExecutorDecisionTypeId = /* @__PURE__ */ Symbol.for(ChildExecutorDecisionSymbolKey);
const proto$8 = {
  [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId
};
const Continue = (_) => {
  const op = Object.create(proto$8);
  op._tag = OP_CONTINUE;
  return op;
};
const OP_CONTINUATION_K = "ContinuationK";
const OP_CONTINUATION_FINALIZER = "ContinuationFinalizer";
const ContinuationTypeId = /* @__PURE__ */ Symbol.for("effect/ChannelContinuation");
const continuationVariance = {
  /* c8 ignore next */
  _Env: (_) => _,
  /* c8 ignore next */
  _InErr: (_) => _,
  /* c8 ignore next */
  _InElem: (_) => _,
  /* c8 ignore next */
  _InDone: (_) => _,
  /* c8 ignore next */
  _OutErr: (_) => _,
  /* c8 ignore next */
  _OutDone: (_) => _,
  /* c8 ignore next */
  _OutErr2: (_) => _,
  /* c8 ignore next */
  _OutElem: (_) => _,
  /* c8 ignore next */
  _OutDone2: (_) => _
};
_na = ContinuationTypeId;
class ContinuationKImpl {
  constructor(onSuccess, onHalt) {
    __publicField(this, "onSuccess");
    __publicField(this, "onHalt");
    __publicField(this, "_tag", OP_CONTINUATION_K);
    __publicField(this, _na, continuationVariance);
    this.onSuccess = onSuccess;
    this.onHalt = onHalt;
  }
  onExit(exit2) {
    return isFailure(exit2) ? this.onHalt(exit2.cause) : this.onSuccess(exit2.value);
  }
}
_oa = ContinuationTypeId;
class ContinuationFinalizerImpl {
  constructor(finalizer) {
    __publicField(this, "finalizer");
    __publicField(this, "_tag", OP_CONTINUATION_FINALIZER);
    __publicField(this, _oa, continuationVariance);
    this.finalizer = finalizer;
  }
}
const OP_PULL_AFTER_NEXT = "PullAfterNext";
const OP_PULL_AFTER_ALL_ENQUEUED = "PullAfterAllEnqueued";
const UpstreamPullStrategySymbolKey = "effect/ChannelUpstreamPullStrategy";
const UpstreamPullStrategyTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullStrategySymbolKey);
const upstreamPullStrategyVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
const proto$7 = {
  [UpstreamPullStrategyTypeId]: upstreamPullStrategyVariance
};
const PullAfterNext = (emitSeparator) => {
  const op = Object.create(proto$7);
  op._tag = OP_PULL_AFTER_NEXT;
  op.emitSeparator = emitSeparator;
  return op;
};
const OP_BRACKET_OUT = "BracketOut";
const OP_BRIDGE = "Bridge";
const OP_CONCAT_ALL = "ConcatAll";
const OP_EMIT$2 = "Emit";
const OP_ENSURING = "Ensuring";
const OP_FAIL$2 = "Fail";
const OP_FOLD = "Fold";
const OP_FROM_EFFECT$1 = "FromEffect";
const OP_PIPE_TO = "PipeTo";
const OP_PROVIDE$1 = "Provide";
const OP_READ$1 = "Read";
const OP_SUCCEED$2 = "Succeed";
const OP_SUCCEED_NOW = "SucceedNow";
const OP_SUSPEND$1 = "Suspend";
const ChannelSymbolKey = "effect/Channel";
const ChannelTypeId = /* @__PURE__ */ Symbol.for(ChannelSymbolKey);
const channelVariance = {
  /* c8 ignore next */
  _Env: (_) => _,
  /* c8 ignore next */
  _InErr: (_) => _,
  /* c8 ignore next */
  _InElem: (_) => _,
  /* c8 ignore next */
  _InDone: (_) => _,
  /* c8 ignore next */
  _OutErr: (_) => _,
  /* c8 ignore next */
  _OutElem: (_) => _,
  /* c8 ignore next */
  _OutDone: (_) => _
};
const proto$6 = {
  [ChannelTypeId]: channelVariance,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const isChannel = (u) => hasProperty(u, ChannelTypeId) || isEffect(u);
const acquireReleaseOut = /* @__PURE__ */ dual(2, (self2, release) => {
  const op = Object.create(proto$6);
  op._tag = OP_BRACKET_OUT;
  op.acquire = () => self2;
  op.finalizer = release;
  return op;
});
const catchAllCause$1 = /* @__PURE__ */ dual(2, (self2, f) => {
  const op = Object.create(proto$6);
  op._tag = OP_FOLD;
  op.channel = self2;
  op.k = new ContinuationKImpl(succeed$3, f);
  return op;
});
const concatAllWith = (channels, f, g) => {
  const op = Object.create(proto$6);
  op._tag = OP_CONCAT_ALL;
  op.combineInners = f;
  op.combineAll = g;
  op.onPull = () => PullAfterNext(none$4());
  op.onEmit = () => Continue;
  op.value = () => channels;
  op.k = identity;
  return op;
};
const concatMapWith = /* @__PURE__ */ dual(4, (self2, f, g, h) => {
  const op = Object.create(proto$6);
  op._tag = OP_CONCAT_ALL;
  op.combineInners = g;
  op.combineAll = h;
  op.onPull = () => PullAfterNext(none$4());
  op.onEmit = () => Continue;
  op.value = () => self2;
  op.k = f;
  return op;
});
const embedInput = /* @__PURE__ */ dual(2, (self2, input) => {
  const op = Object.create(proto$6);
  op._tag = OP_BRIDGE;
  op.input = input;
  op.channel = self2;
  return op;
});
const ensuringWith$2 = /* @__PURE__ */ dual(2, (self2, finalizer) => {
  const op = Object.create(proto$6);
  op._tag = OP_ENSURING;
  op.channel = self2;
  op.finalizer = finalizer;
  return op;
});
const fail$5 = (error) => failCause$3(fail$8(error));
const failCause$3 = (cause) => failCauseSync(() => cause);
const failCauseSync = (evaluate2) => {
  const op = Object.create(proto$6);
  op._tag = OP_FAIL$2;
  op.error = evaluate2;
  return op;
};
const flatMap$3 = /* @__PURE__ */ dual(2, (self2, f) => {
  const op = Object.create(proto$6);
  op._tag = OP_FOLD;
  op.channel = self2;
  op.k = new ContinuationKImpl(f, failCause$3);
  return op;
});
const fromEffect$3 = (effect2) => {
  const op = Object.create(proto$6);
  op._tag = OP_FROM_EFFECT$1;
  op.effect = () => effect2;
  return op;
};
const pipeTo = /* @__PURE__ */ dual(2, (self2, that) => {
  const op = Object.create(proto$6);
  op._tag = OP_PIPE_TO;
  op.left = () => self2;
  op.right = () => that;
  return op;
});
const provideContext$2 = /* @__PURE__ */ dual(2, (self2, env2) => {
  const op = Object.create(proto$6);
  op._tag = OP_PROVIDE$1;
  op.context = () => env2;
  op.inner = self2;
  return op;
});
const readWith = (options2) => readWithCause({
  onInput: options2.onInput,
  onFailure: (cause) => match$9(failureOrCause(cause), {
    onLeft: options2.onFailure,
    onRight: failCause$3
  }),
  onDone: options2.onDone
});
const readWithCause = (options2) => {
  const op = Object.create(proto$6);
  op._tag = OP_READ$1;
  op.more = options2.onInput;
  op.done = new ContinuationKImpl(options2.onDone, options2.onFailure);
  return op;
};
const succeed$3 = (value2) => sync$1(() => value2);
const succeedNow = (result) => {
  const op = Object.create(proto$6);
  op._tag = OP_SUCCEED_NOW;
  op.terminal = result;
  return op;
};
const suspend$4 = (evaluate2) => {
  const op = Object.create(proto$6);
  op._tag = OP_SUSPEND$1;
  op.channel = evaluate2;
  return op;
};
const sync$1 = (evaluate2) => {
  const op = Object.create(proto$6);
  op._tag = OP_SUCCEED$2;
  op.evaluate = evaluate2;
  return op;
};
const void_$1 = /* @__PURE__ */ succeedNow(void 0);
const write = (out) => {
  const op = Object.create(proto$6);
  op._tag = OP_EMIT$2;
  op.out = out;
  return op;
};
const OP_DONE$3 = "Done";
const OP_EMIT$1 = "Emit";
const OP_FROM_EFFECT = "FromEffect";
const OP_READ = "Read";
const ChannelStateTypeId = /* @__PURE__ */ Symbol.for("effect/ChannelState");
const channelStateVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
const proto$5 = {
  [ChannelStateTypeId]: channelStateVariance
};
const Done$2 = () => {
  const op = Object.create(proto$5);
  op._tag = OP_DONE$3;
  return op;
};
const Emit$1 = () => {
  const op = Object.create(proto$5);
  op._tag = OP_EMIT$1;
  return op;
};
const fromEffect$2 = (effect2) => {
  const op = Object.create(proto$5);
  op._tag = OP_FROM_EFFECT;
  op.effect = effect2;
  return op;
};
const Read = (upstream, onEffect, onEmit, onDone) => {
  const op = Object.create(proto$5);
  op._tag = OP_READ;
  op.upstream = upstream;
  op.onEffect = onEffect;
  op.onEmit = onEmit;
  op.onDone = onDone;
  return op;
};
const isFromEffect = (self2) => self2._tag === OP_FROM_EFFECT;
const effect$1 = (self2) => isFromEffect(self2) ? self2.effect : _void;
const effectOrUndefinedIgnored = (self2) => isFromEffect(self2) ? ignore(self2.effect) : void 0;
const OP_PULL_FROM_CHILD = "PullFromChild";
const OP_PULL_FROM_UPSTREAM = "PullFromUpstream";
const OP_DRAIN_CHILD_EXECUTORS = "DrainChildExecutors";
const OP_EMIT = "Emit";
class PullFromChild {
  constructor(childExecutor, parentSubexecutor, onEmit) {
    __publicField(this, "childExecutor");
    __publicField(this, "parentSubexecutor");
    __publicField(this, "onEmit");
    __publicField(this, "_tag", OP_PULL_FROM_CHILD);
    this.childExecutor = childExecutor;
    this.parentSubexecutor = parentSubexecutor;
    this.onEmit = onEmit;
  }
  close(exit$12) {
    const fin1 = this.childExecutor.close(exit$12);
    const fin2 = this.parentSubexecutor.close(exit$12);
    if (fin1 !== void 0 && fin2 !== void 0) {
      return zipWith(exit(fin1), exit(fin2), (exit1, exit2) => pipe(exit1, zipRight$3(exit2)));
    } else if (fin1 !== void 0) {
      return fin1;
    } else if (fin2 !== void 0) {
      return fin2;
    } else {
      return void 0;
    }
  }
  enqueuePullFromChild(_child) {
    return this;
  }
}
class PullFromUpstream {
  constructor(upstreamExecutor, createChild, lastDone, activeChildExecutors, combineChildResults, combineWithChildResult, onPull, onEmit) {
    __publicField(this, "upstreamExecutor");
    __publicField(this, "createChild");
    __publicField(this, "lastDone");
    __publicField(this, "activeChildExecutors");
    __publicField(this, "combineChildResults");
    __publicField(this, "combineWithChildResult");
    __publicField(this, "onPull");
    __publicField(this, "onEmit");
    __publicField(this, "_tag", OP_PULL_FROM_UPSTREAM);
    this.upstreamExecutor = upstreamExecutor;
    this.createChild = createChild;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
    this.onEmit = onEmit;
  }
  close(exit$12) {
    const fin1 = this.upstreamExecutor.close(exit$12);
    const fins = [...this.activeChildExecutors.map((child) => child !== void 0 ? child.childExecutor.close(exit$12) : void 0), fin1];
    const result = fins.reduce((acc, next) => {
      if (acc !== void 0 && next !== void 0) {
        return zipWith(acc, exit(next), (exit1, exit2) => zipRight$3(exit1, exit2));
      } else if (acc !== void 0) {
        return acc;
      } else if (next !== void 0) {
        return exit(next);
      } else {
        return void 0;
      }
    }, void 0);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(child) {
    return new PullFromUpstream(this.upstreamExecutor, this.createChild, this.lastDone, [...this.activeChildExecutors, child], this.combineChildResults, this.combineWithChildResult, this.onPull, this.onEmit);
  }
}
class DrainChildExecutors {
  constructor(upstreamExecutor, lastDone, activeChildExecutors, upstreamDone, combineChildResults, combineWithChildResult, onPull) {
    __publicField(this, "upstreamExecutor");
    __publicField(this, "lastDone");
    __publicField(this, "activeChildExecutors");
    __publicField(this, "upstreamDone");
    __publicField(this, "combineChildResults");
    __publicField(this, "combineWithChildResult");
    __publicField(this, "onPull");
    __publicField(this, "_tag", OP_DRAIN_CHILD_EXECUTORS);
    this.upstreamExecutor = upstreamExecutor;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.upstreamDone = upstreamDone;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
  }
  close(exit$12) {
    const fin1 = this.upstreamExecutor.close(exit$12);
    const fins = [...this.activeChildExecutors.map((child) => child !== void 0 ? child.childExecutor.close(exit$12) : void 0), fin1];
    const result = fins.reduce((acc, next) => {
      if (acc !== void 0 && next !== void 0) {
        return zipWith(acc, exit(next), (exit1, exit2) => zipRight$3(exit1, exit2));
      } else if (acc !== void 0) {
        return acc;
      } else if (next !== void 0) {
        return exit(next);
      } else {
        return void 0;
      }
    }, void 0);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(child) {
    return new DrainChildExecutors(this.upstreamExecutor, this.lastDone, [...this.activeChildExecutors, child], this.upstreamDone, this.combineChildResults, this.combineWithChildResult, this.onPull);
  }
}
class Emit {
  constructor(value2, next) {
    __publicField(this, "value");
    __publicField(this, "next");
    __publicField(this, "_tag", OP_EMIT);
    this.value = value2;
    this.next = next;
  }
  close(exit2) {
    const result = this.next.close(exit2);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(_child) {
    return this;
  }
}
const OP_PULLED = "Pulled";
const OP_NO_UPSTREAM = "NoUpstream";
const UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest";
const UpstreamPullRequestTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullRequestSymbolKey);
const upstreamPullRequestVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
const proto$4 = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
};
const Pulled = (value2) => {
  const op = Object.create(proto$4);
  op._tag = OP_PULLED;
  op.value = value2;
  return op;
};
const NoUpstream = (activeDownstreamCount) => {
  const op = Object.create(proto$4);
  op._tag = OP_NO_UPSTREAM;
  op.activeDownstreamCount = activeDownstreamCount;
  return op;
};
class ChannelExecutor {
  constructor(initialChannel, providedEnv, executeCloseLastSubstream) {
    __publicField(this, "_activeSubexecutor");
    __publicField(this, "_cancelled");
    __publicField(this, "_closeLastSubstream");
    __publicField(this, "_currentChannel");
    __publicField(this, "_done");
    __publicField(this, "_doneStack", []);
    __publicField(this, "_emitted");
    __publicField(this, "_executeCloseLastSubstream");
    __publicField(this, "_input");
    __publicField(this, "_inProgressFinalizer");
    __publicField(this, "_providedEnv");
    this._currentChannel = initialChannel;
    this._executeCloseLastSubstream = executeCloseLastSubstream;
    this._providedEnv = providedEnv;
  }
  run() {
    let result = void 0;
    while (result === void 0) {
      if (this._cancelled !== void 0) {
        result = this.processCancellation();
      } else if (this._activeSubexecutor !== void 0) {
        result = this.runSubexecutor();
      } else {
        try {
          if (this._currentChannel === void 0) {
            result = Done$2();
          } else {
            if (isEffect(this._currentChannel)) {
              this._currentChannel = fromEffect$3(this._currentChannel);
            }
            switch (this._currentChannel._tag) {
              case OP_BRACKET_OUT: {
                result = this.runBracketOut(this._currentChannel);
                break;
              }
              case OP_BRIDGE: {
                const bridgeInput = this._currentChannel.input;
                this._currentChannel = this._currentChannel.channel;
                if (this._input !== void 0) {
                  const inputExecutor = this._input;
                  this._input = void 0;
                  const drainer = () => flatMap$4(bridgeInput.awaitRead(), () => suspend$5(() => {
                    const state = inputExecutor.run();
                    switch (state._tag) {
                      case OP_DONE$3: {
                        return match$5(inputExecutor.getDone(), {
                          onFailure: (cause) => bridgeInput.error(cause),
                          onSuccess: (value2) => bridgeInput.done(value2)
                        });
                      }
                      case OP_EMIT$1: {
                        return flatMap$4(bridgeInput.emit(inputExecutor.getEmit()), () => drainer());
                      }
                      case OP_FROM_EFFECT: {
                        return matchCauseEffect(state.effect, {
                          onFailure: (cause) => bridgeInput.error(cause),
                          onSuccess: () => drainer()
                        });
                      }
                      case OP_READ: {
                        return readUpstream(state, () => drainer(), (cause) => bridgeInput.error(cause));
                      }
                    }
                  }));
                  result = fromEffect$2(flatMap$4(forkDaemon(interruptible(drainer())), (fiber) => sync$3(() => this.addFinalizer((exit2) => flatMap$4(interrupt$2(fiber), () => suspend$5(() => {
                    const effect2 = this.restorePipe(exit2, inputExecutor);
                    return effect2 !== void 0 ? effect2 : _void;
                  }))))));
                }
                break;
              }
              case OP_CONCAT_ALL: {
                const executor = new ChannelExecutor(this._currentChannel.value(), this._providedEnv, (effect2) => sync$3(() => {
                  const prevLastClose = this._closeLastSubstream === void 0 ? _void : this._closeLastSubstream;
                  this._closeLastSubstream = pipe(prevLastClose, zipRight$2(effect2));
                }));
                executor._input = this._input;
                const channel = this._currentChannel;
                this._activeSubexecutor = new PullFromUpstream(executor, (value2) => channel.k(value2), void 0, [], (x, y) => channel.combineInners(x, y), (x, y) => channel.combineAll(x, y), (request) => channel.onPull(request), (value2) => channel.onEmit(value2));
                this._closeLastSubstream = void 0;
                this._currentChannel = void 0;
                break;
              }
              case OP_EMIT$2: {
                this._emitted = this._currentChannel.out;
                this._currentChannel = this._activeSubexecutor !== void 0 ? void 0 : void_$1;
                result = Emit$1();
                break;
              }
              case OP_ENSURING: {
                this.runEnsuring(this._currentChannel);
                break;
              }
              case OP_FAIL$2: {
                result = this.doneHalt(this._currentChannel.error());
                break;
              }
              case OP_FOLD: {
                this._doneStack.push(this._currentChannel.k);
                this._currentChannel = this._currentChannel.channel;
                break;
              }
              case OP_FROM_EFFECT$1: {
                const effect2 = this._providedEnv === void 0 ? this._currentChannel.effect() : pipe(this._currentChannel.effect(), provide$1(this._providedEnv));
                result = fromEffect$2(matchCauseEffect(effect2, {
                  onFailure: (cause) => {
                    const state = this.doneHalt(cause);
                    return state !== void 0 && isFromEffect(state) ? state.effect : _void;
                  },
                  onSuccess: (value2) => {
                    const state = this.doneSucceed(value2);
                    return state !== void 0 && isFromEffect(state) ? state.effect : _void;
                  }
                }));
                break;
              }
              case OP_PIPE_TO: {
                const previousInput = this._input;
                const leftExec = new ChannelExecutor(this._currentChannel.left(), this._providedEnv, (effect2) => this._executeCloseLastSubstream(effect2));
                leftExec._input = previousInput;
                this._input = leftExec;
                this.addFinalizer((exit2) => {
                  const effect2 = this.restorePipe(exit2, previousInput);
                  return effect2 !== void 0 ? effect2 : _void;
                });
                this._currentChannel = this._currentChannel.right();
                break;
              }
              case OP_PROVIDE$1: {
                const previousEnv = this._providedEnv;
                this._providedEnv = this._currentChannel.context();
                this._currentChannel = this._currentChannel.inner;
                this.addFinalizer(() => sync$3(() => {
                  this._providedEnv = previousEnv;
                }));
                break;
              }
              case OP_READ$1: {
                const read = this._currentChannel;
                result = Read(this._input, identity, (emitted) => {
                  try {
                    this._currentChannel = read.more(emitted);
                  } catch (error) {
                    this._currentChannel = read.done.onExit(die$5(error));
                  }
                  return void 0;
                }, (exit2) => {
                  const onExit2 = (exit3) => {
                    return read.done.onExit(exit3);
                  };
                  this._currentChannel = onExit2(exit2);
                  return void 0;
                });
                break;
              }
              case OP_SUCCEED$2: {
                result = this.doneSucceed(this._currentChannel.evaluate());
                break;
              }
              case OP_SUCCEED_NOW: {
                result = this.doneSucceed(this._currentChannel.terminal);
                break;
              }
              case OP_SUSPEND$1: {
                this._currentChannel = this._currentChannel.channel();
                break;
              }
            }
          }
        } catch (error) {
          this._currentChannel = failCause$3(die$4(error));
        }
      }
    }
    return result;
  }
  getDone() {
    return this._done;
  }
  getEmit() {
    return this._emitted;
  }
  cancelWith(exit2) {
    this._cancelled = exit2;
  }
  clearInProgressFinalizer() {
    this._inProgressFinalizer = void 0;
  }
  storeInProgressFinalizer(finalizer) {
    this._inProgressFinalizer = finalizer;
  }
  popAllFinalizers(exit2) {
    const finalizers = [];
    let next = this._doneStack.pop();
    while (next) {
      if (next._tag === "ContinuationFinalizer") {
        finalizers.push(next.finalizer);
      }
      next = this._doneStack.pop();
    }
    const effect2 = finalizers.length === 0 ? _void : runFinalizers(finalizers, exit2);
    this.storeInProgressFinalizer(effect2);
    return effect2;
  }
  popNextFinalizers() {
    const builder = [];
    while (this._doneStack.length !== 0) {
      const cont = this._doneStack[this._doneStack.length - 1];
      if (cont._tag === OP_CONTINUATION_K) {
        return builder;
      }
      builder.push(cont);
      this._doneStack.pop();
    }
    return builder;
  }
  restorePipe(exit2, prev) {
    const currInput = this._input;
    this._input = prev;
    if (currInput !== void 0) {
      const effect2 = currInput.close(exit2);
      return effect2;
    }
    return _void;
  }
  close(exit$12) {
    let runInProgressFinalizers = void 0;
    const finalizer = this._inProgressFinalizer;
    if (finalizer !== void 0) {
      runInProgressFinalizers = pipe(finalizer, ensuring$4(sync$3(() => this.clearInProgressFinalizer())));
    }
    let closeSelf = void 0;
    const selfFinalizers = this.popAllFinalizers(exit$12);
    if (selfFinalizers !== void 0) {
      closeSelf = pipe(selfFinalizers, ensuring$4(sync$3(() => this.clearInProgressFinalizer())));
    }
    const closeSubexecutors = this._activeSubexecutor === void 0 ? void 0 : this._activeSubexecutor.close(exit$12);
    if (closeSubexecutors === void 0 && runInProgressFinalizers === void 0 && closeSelf === void 0) {
      return void 0;
    }
    return pipe(
      exit(ifNotNull(closeSubexecutors)),
      zip$1(exit(ifNotNull(runInProgressFinalizers))),
      zip$1(exit(ifNotNull(closeSelf))),
      map$5(([[exit1, exit2], exit3]) => pipe(exit1, zipRight$3(exit2), zipRight$3(exit3))),
      uninterruptible,
      // TODO: remove
      flatMap$4((exit2) => suspend$5(() => exit2))
    );
  }
  doneSucceed(value2) {
    if (this._doneStack.length === 0) {
      this._done = succeed$8(value2);
      this._currentChannel = void 0;
      return Done$2();
    }
    const head2 = this._doneStack[this._doneStack.length - 1];
    if (head2._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      this._currentChannel = head2.onSuccess(value2);
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = succeed$8(value2);
      this._currentChannel = void 0;
      return Done$2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), succeed$8(value2));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect2 = pipe(finalizerEffect, ensuring$4(sync$3(() => this.clearInProgressFinalizer())), uninterruptible, flatMap$4(() => sync$3(() => this.doneSucceed(value2))));
    return fromEffect$2(effect2);
  }
  doneHalt(cause) {
    if (this._doneStack.length === 0) {
      this._done = failCause$7(cause);
      this._currentChannel = void 0;
      return Done$2();
    }
    const head2 = this._doneStack[this._doneStack.length - 1];
    if (head2._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      try {
        this._currentChannel = head2.onHalt(cause);
      } catch (error) {
        this._currentChannel = failCause$3(die$4(error));
      }
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = failCause$7(cause);
      this._currentChannel = void 0;
      return Done$2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), failCause$7(cause));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect2 = pipe(finalizerEffect, ensuring$4(sync$3(() => this.clearInProgressFinalizer())), uninterruptible, flatMap$4(() => sync$3(() => this.doneHalt(cause))));
    return fromEffect$2(effect2);
  }
  processCancellation() {
    this._currentChannel = void 0;
    this._done = this._cancelled;
    this._cancelled = void 0;
    return Done$2();
  }
  runBracketOut(bracketOut) {
    const effect2 = uninterruptible(matchCauseEffect(this.provide(bracketOut.acquire()), {
      onFailure: (cause) => sync$3(() => {
        this._currentChannel = failCause$3(cause);
      }),
      onSuccess: (out) => sync$3(() => {
        this.addFinalizer((exit2) => this.provide(bracketOut.finalizer(out, exit2)));
        this._currentChannel = write(out);
      })
    }));
    return fromEffect$2(effect2);
  }
  provide(effect2) {
    if (this._providedEnv === void 0) {
      return effect2;
    }
    return pipe(effect2, provide$1(this._providedEnv));
  }
  runEnsuring(ensuring2) {
    this.addFinalizer(ensuring2.finalizer);
    this._currentChannel = ensuring2.channel;
  }
  addFinalizer(f) {
    this._doneStack.push(new ContinuationFinalizerImpl(f));
  }
  runSubexecutor() {
    const subexecutor = this._activeSubexecutor;
    switch (subexecutor._tag) {
      case OP_PULL_FROM_CHILD: {
        return this.pullFromChild(subexecutor.childExecutor, subexecutor.parentSubexecutor, subexecutor.onEmit, subexecutor);
      }
      case OP_PULL_FROM_UPSTREAM: {
        return this.pullFromUpstream(subexecutor);
      }
      case OP_DRAIN_CHILD_EXECUTORS: {
        return this.drainChildExecutors(subexecutor);
      }
      case OP_EMIT: {
        this._emitted = subexecutor.value;
        this._activeSubexecutor = subexecutor.next;
        return Emit$1();
      }
    }
  }
  replaceSubexecutor(nextSubExec) {
    this._currentChannel = void 0;
    this._activeSubexecutor = nextSubExec;
  }
  finishWithExit(exit2) {
    const state = match$5(exit2, {
      onFailure: (cause) => this.doneHalt(cause),
      onSuccess: (value2) => this.doneSucceed(value2)
    });
    this._activeSubexecutor = void 0;
    return state === void 0 ? _void : effect$1(state);
  }
  finishSubexecutorWithCloseEffect(subexecutorDone, ...closeFuncs) {
    this.addFinalizer(() => pipe(closeFuncs, forEach((closeFunc) => pipe(sync$3(() => closeFunc(subexecutorDone)), flatMap$4((closeEffect) => closeEffect !== void 0 ? closeEffect : _void)), {
      discard: true
    })));
    const state = pipe(subexecutorDone, match$5({
      onFailure: (cause) => this.doneHalt(cause),
      onSuccess: (value2) => this.doneSucceed(value2)
    }));
    this._activeSubexecutor = void 0;
    return state;
  }
  applyUpstreamPullStrategy(upstreamFinished, queue, strategy) {
    switch (strategy._tag) {
      case OP_PULL_AFTER_NEXT: {
        const shouldPrepend = !upstreamFinished || queue.some((subexecutor) => subexecutor !== void 0);
        return [strategy.emitSeparator, shouldPrepend ? [void 0, ...queue] : queue];
      }
      case OP_PULL_AFTER_ALL_ENQUEUED: {
        const shouldEnqueue = !upstreamFinished || queue.some((subexecutor) => subexecutor !== void 0);
        return [strategy.emitSeparator, shouldEnqueue ? [...queue, void 0] : queue];
      }
    }
  }
  pullFromChild(childExecutor, parentSubexecutor, onEmitted, subexecutor) {
    return Read(childExecutor, identity, (emitted) => {
      const childExecutorDecision = onEmitted(emitted);
      switch (childExecutorDecision._tag) {
        case OP_CONTINUE: {
          break;
        }
        case OP_CLOSE: {
          this.finishWithDoneValue(childExecutor, parentSubexecutor, childExecutorDecision.value);
          break;
        }
        case OP_YIELD: {
          const modifiedParent = parentSubexecutor.enqueuePullFromChild(subexecutor);
          this.replaceSubexecutor(modifiedParent);
          break;
        }
      }
      this._activeSubexecutor = new Emit(emitted, this._activeSubexecutor);
      return void 0;
    }, match$5({
      onFailure: (cause) => {
        const state = this.handleSubexecutorFailure(childExecutor, parentSubexecutor, cause);
        return state === void 0 ? void 0 : effectOrUndefinedIgnored(state);
      },
      onSuccess: (doneValue) => {
        this.finishWithDoneValue(childExecutor, parentSubexecutor, doneValue);
        return void 0;
      }
    }));
  }
  finishWithDoneValue(childExecutor, parentSubexecutor, doneValue) {
    const subexecutor = parentSubexecutor;
    switch (subexecutor._tag) {
      case OP_PULL_FROM_UPSTREAM: {
        const modifiedParent = new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone !== void 0 ? subexecutor.combineChildResults(subexecutor.lastDone, doneValue) : doneValue, subexecutor.activeChildExecutors, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit);
        this._closeLastSubstream = childExecutor.close(succeed$8(doneValue));
        this.replaceSubexecutor(modifiedParent);
        break;
      }
      case OP_DRAIN_CHILD_EXECUTORS: {
        const modifiedParent = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone !== void 0 ? subexecutor.combineChildResults(subexecutor.lastDone, doneValue) : doneValue, subexecutor.activeChildExecutors, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
        this._closeLastSubstream = childExecutor.close(succeed$8(doneValue));
        this.replaceSubexecutor(modifiedParent);
        break;
      }
    }
  }
  handleSubexecutorFailure(childExecutor, parentSubexecutor, cause) {
    return this.finishSubexecutorWithCloseEffect(failCause$7(cause), (exit2) => parentSubexecutor.close(exit2), (exit2) => childExecutor.close(exit2));
  }
  pullFromUpstream(subexecutor) {
    if (subexecutor.activeChildExecutors.length === 0) {
      return this.performPullFromUpstream(subexecutor);
    }
    const activeChild = subexecutor.activeChildExecutors[0];
    const parentSubexecutor = new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, subexecutor.activeChildExecutors.slice(1), subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit);
    if (activeChild === void 0) {
      return this.performPullFromUpstream(parentSubexecutor);
    }
    this.replaceSubexecutor(new PullFromChild(activeChild.childExecutor, parentSubexecutor, activeChild.onEmit));
    return void 0;
  }
  performPullFromUpstream(subexecutor) {
    return Read(subexecutor.upstreamExecutor, (effect2) => {
      const closeLastSubstream = this._closeLastSubstream === void 0 ? _void : this._closeLastSubstream;
      this._closeLastSubstream = void 0;
      return pipe(this._executeCloseLastSubstream(closeLastSubstream), zipRight$2(effect2));
    }, (emitted) => {
      if (this._closeLastSubstream !== void 0) {
        const closeLastSubstream = this._closeLastSubstream;
        this._closeLastSubstream = void 0;
        return pipe(this._executeCloseLastSubstream(closeLastSubstream), map$5(() => {
          const childExecutor2 = new ChannelExecutor(subexecutor.createChild(emitted), this._providedEnv, this._executeCloseLastSubstream);
          childExecutor2._input = this._input;
          const [emitSeparator2, updatedChildExecutors2] = this.applyUpstreamPullStrategy(false, subexecutor.activeChildExecutors, subexecutor.onPull(Pulled(emitted)));
          this._activeSubexecutor = new PullFromChild(childExecutor2, new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, updatedChildExecutors2, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit), subexecutor.onEmit);
          if (isSome(emitSeparator2)) {
            this._activeSubexecutor = new Emit(emitSeparator2.value, this._activeSubexecutor);
          }
          return void 0;
        }));
      }
      const childExecutor = new ChannelExecutor(subexecutor.createChild(emitted), this._providedEnv, this._executeCloseLastSubstream);
      childExecutor._input = this._input;
      const [emitSeparator, updatedChildExecutors] = this.applyUpstreamPullStrategy(false, subexecutor.activeChildExecutors, subexecutor.onPull(Pulled(emitted)));
      this._activeSubexecutor = new PullFromChild(childExecutor, new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, updatedChildExecutors, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit), subexecutor.onEmit);
      if (isSome(emitSeparator)) {
        this._activeSubexecutor = new Emit(emitSeparator.value, this._activeSubexecutor);
      }
      return void 0;
    }, (exit2) => {
      if (subexecutor.activeChildExecutors.some((subexecutor2) => subexecutor2 !== void 0)) {
        const drain2 = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, [void 0, ...subexecutor.activeChildExecutors], subexecutor.upstreamExecutor.getDone(), subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
        if (this._closeLastSubstream !== void 0) {
          const closeLastSubstream2 = this._closeLastSubstream;
          this._closeLastSubstream = void 0;
          return pipe(this._executeCloseLastSubstream(closeLastSubstream2), map$5(() => this.replaceSubexecutor(drain2)));
        }
        this.replaceSubexecutor(drain2);
        return void 0;
      }
      const closeLastSubstream = this._closeLastSubstream;
      const state = this.finishSubexecutorWithCloseEffect(pipe(exit2, map$8((a) => subexecutor.combineWithChildResult(subexecutor.lastDone, a))), () => closeLastSubstream, (exit3) => subexecutor.upstreamExecutor.close(exit3));
      return state === void 0 ? void 0 : (
        // NOTE: assuming finalizers cannot fail
        effectOrUndefinedIgnored(state)
      );
    });
  }
  drainChildExecutors(subexecutor) {
    if (subexecutor.activeChildExecutors.length === 0) {
      const lastClose = this._closeLastSubstream;
      if (lastClose !== void 0) {
        this.addFinalizer(() => succeed$5(lastClose));
      }
      return this.finishSubexecutorWithCloseEffect(subexecutor.upstreamDone, () => lastClose, (exit2) => subexecutor.upstreamExecutor.close(exit2));
    }
    const activeChild = subexecutor.activeChildExecutors[0];
    const rest = subexecutor.activeChildExecutors.slice(1);
    if (activeChild === void 0) {
      const [emitSeparator, remainingExecutors] = this.applyUpstreamPullStrategy(true, rest, subexecutor.onPull(NoUpstream(rest.reduce((n, curr) => curr !== void 0 ? n + 1 : n, 0))));
      this.replaceSubexecutor(new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, remainingExecutors, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull));
      if (isSome(emitSeparator)) {
        this._emitted = emitSeparator.value;
        return Emit$1();
      }
      return void 0;
    }
    const parentSubexecutor = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, rest, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
    this.replaceSubexecutor(new PullFromChild(activeChild.childExecutor, parentSubexecutor, activeChild.onEmit));
    return void 0;
  }
}
const ifNotNull = (effect2) => effect2 !== void 0 ? effect2 : _void;
const runFinalizers = (finalizers, exit$12) => {
  return pipe(forEach(finalizers, (fin) => exit(fin(exit$12))), map$5((exits) => pipe(all$2(exits), getOrElse(() => void_$3))), flatMap$4((exit2) => suspend$5(() => exit2)));
};
const readUpstream = (r, onSuccess, onFailure) => {
  const readStack = [r];
  const read = () => {
    const current = readStack.pop();
    if (current === void 0 || current.upstream === void 0) {
      return dieMessage("Unexpected end of input for channel execution");
    }
    const state = current.upstream.run();
    switch (state._tag) {
      case OP_EMIT$1: {
        const emitEffect = current.onEmit(current.upstream.getEmit());
        if (readStack.length === 0) {
          if (emitEffect === void 0) {
            return suspend$5(onSuccess);
          }
          return pipe(emitEffect, matchCauseEffect({
            onFailure,
            onSuccess
          }));
        }
        if (emitEffect === void 0) {
          return suspend$5(() => read());
        }
        return pipe(emitEffect, matchCauseEffect({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_DONE$3: {
        const doneEffect = current.onDone(current.upstream.getDone());
        if (readStack.length === 0) {
          if (doneEffect === void 0) {
            return suspend$5(onSuccess);
          }
          return pipe(doneEffect, matchCauseEffect({
            onFailure,
            onSuccess
          }));
        }
        if (doneEffect === void 0) {
          return suspend$5(() => read());
        }
        return pipe(doneEffect, matchCauseEffect({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_FROM_EFFECT: {
        readStack.push(current);
        return pipe(current.onEffect(state.effect), catchAllCause$2((cause) => suspend$5(() => {
          const doneEffect = current.onDone(failCause$7(cause));
          return doneEffect === void 0 ? _void : doneEffect;
        })), matchCauseEffect({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_READ: {
        readStack.push(current);
        readStack.push(state);
        return suspend$5(() => read());
      }
    }
  };
  return read();
};
const runIn = /* @__PURE__ */ dual(2, (self2, scope2) => {
  const run2 = (channelDeferred, scopeDeferred, scope3) => acquireUseRelease$2(sync$3(() => new ChannelExecutor(self2, void 0, identity)), (exec) => suspend$5(() => runScopedInterpret(exec.run(), exec).pipe(intoDeferred(channelDeferred), zipRight$2(_await$2(channelDeferred)), zipLeft(_await$2(scopeDeferred)))), (exec, exit2) => {
    const finalize = exec.close(exit2);
    if (finalize === void 0) {
      return _void;
    }
    return tapErrorCause(finalize, (cause) => addFinalizer$1(scope3, failCause$4(cause)));
  });
  return uninterruptibleMask((restore) => all([fork$1(scope2, sequential$1), make$H(), make$H()]).pipe(flatMap$4(([child, channelDeferred, scopeDeferred]) => restore(run2(channelDeferred, scopeDeferred, child)).pipe(forkIn(scope2), flatMap$4((fiber) => scope2.addFinalizer((exit2) => {
    const interruptors$12 = isFailure(exit2) ? interruptors(exit2.cause) : void 0;
    return isDone$5(channelDeferred).pipe(flatMap$4((isDone2) => isDone2 ? succeed$9(scopeDeferred, void 0).pipe(zipRight$2(_await(fiber)), zipRight$2(inheritAll(fiber))) : succeed$9(scopeDeferred, void 0).pipe(zipRight$2(interruptors$12 && size$5(interruptors$12) > 0 ? interruptAs$1(fiber, combineAll(interruptors$12)) : interrupt$2(fiber)), zipRight$2(inheritAll(fiber)))));
  }).pipe(zipRight$2(restore(_await$2(channelDeferred)))))))));
});
const runScopedInterpret = (channelState, exec) => {
  const op = channelState;
  switch (op._tag) {
    case OP_FROM_EFFECT: {
      return pipe(op.effect, flatMap$4(() => runScopedInterpret(exec.run(), exec)));
    }
    case OP_EMIT$1: {
      return runScopedInterpret(exec.run(), exec);
    }
    case OP_DONE$3: {
      return suspend$5(() => exec.getDone());
    }
    case OP_READ: {
      return readUpstream(op, () => runScopedInterpret(exec.run(), exec), failCause$4);
    }
  }
};
const OP_DONE$2 = "Done";
const OP_AWAIT = "Await";
const MergeDecisionSymbolKey = "effect/ChannelMergeDecision";
const MergeDecisionTypeId = /* @__PURE__ */ Symbol.for(MergeDecisionSymbolKey);
const proto$3 = {
  [MergeDecisionTypeId]: {
    _R: (_) => _,
    _E0: (_) => _,
    _Z0: (_) => _,
    _E: (_) => _,
    _Z: (_) => _
  }
};
const Done$1 = (effect2) => {
  const op = Object.create(proto$3);
  op._tag = OP_DONE$2;
  op.effect = effect2;
  return op;
};
const Await$1 = (f) => {
  const op = Object.create(proto$3);
  op._tag = OP_AWAIT;
  op.f = f;
  return op;
};
const OP_BOTH_RUNNING = "BothRunning";
const OP_LEFT_DONE = "LeftDone";
const OP_RIGHT_DONE = "RightDone";
const MergeStateSymbolKey = "effect/ChannelMergeState";
const MergeStateTypeId = /* @__PURE__ */ Symbol.for(MergeStateSymbolKey);
const proto$2 = {
  [MergeStateTypeId]: MergeStateTypeId
};
const BothRunning = (left2, right2) => {
  const op = Object.create(proto$2);
  op._tag = OP_BOTH_RUNNING;
  op.left = left2;
  op.right = right2;
  return op;
};
const LeftDone = (f) => {
  const op = Object.create(proto$2);
  op._tag = OP_LEFT_DONE;
  op.f = f;
  return op;
};
const RightDone = (f) => {
  const op = Object.create(proto$2);
  op._tag = OP_RIGHT_DONE;
  op.f = f;
  return op;
};
const OP_BACK_PRESSURE = "BackPressure";
const OP_BUFFER_SLIDING = "BufferSliding";
const MergeStrategySymbolKey = "effect/ChannelMergeStrategy";
const MergeStrategyTypeId = /* @__PURE__ */ Symbol.for(MergeStrategySymbolKey);
const proto$1 = {
  [MergeStrategyTypeId]: MergeStrategyTypeId
};
const BackPressure = (_) => {
  const op = Object.create(proto$1);
  op._tag = OP_BACK_PRESSURE;
  return op;
};
const BufferSliding = (_) => {
  const op = Object.create(proto$1);
  op._tag = OP_BUFFER_SLIDING;
  return op;
};
const match = /* @__PURE__ */ dual(2, (self2, {
  onBackPressure,
  onBufferSliding
}) => {
  switch (self2._tag) {
    case OP_BACK_PRESSURE: {
      return onBackPressure();
    }
    case OP_BUFFER_SLIDING: {
      return onBufferSliding();
    }
  }
});
const OP_STATE_EMPTY = "Empty";
const OP_STATE_EMIT = "Emit";
const OP_STATE_ERROR = "Error";
const OP_STATE_DONE = "Done";
const stateEmpty = (notifyProducer) => ({
  _tag: OP_STATE_EMPTY,
  notifyProducer
});
const stateEmit = (notifyConsumers) => ({
  _tag: OP_STATE_EMIT,
  notifyConsumers
});
const stateError = (cause) => ({
  _tag: OP_STATE_ERROR,
  cause
});
const stateDone = (done2) => ({
  _tag: OP_STATE_DONE,
  done: done2
});
class SingleProducerAsyncInputImpl {
  constructor(ref) {
    __publicField(this, "ref");
    this.ref = ref;
  }
  awaitRead() {
    return flatten$3(modify$1(this.ref, (state) => state._tag === OP_STATE_EMPTY ? [_await$2(state.notifyProducer), state] : [_void, state]));
  }
  get close() {
    return fiberIdWith((fiberId2) => this.error(interrupt$3(fiberId2)));
  }
  done(value2) {
    return flatten$3(modify$1(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await$2(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach(state.notifyConsumers, (deferred) => succeed$9(deferred, left(value2)), {
            discard: true
          }), stateDone(value2)];
        }
        case OP_STATE_ERROR: {
          return [interrupt$1, state];
        }
        case OP_STATE_DONE: {
          return [interrupt$1, state];
        }
      }
    }));
  }
  emit(element) {
    return flatMap$4(make$H(), (deferred) => flatten$3(modify$1(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await$2(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          const notifyConsumer = state.notifyConsumers[0];
          const notifyConsumers = state.notifyConsumers.slice(1);
          if (notifyConsumer !== void 0) {
            return [succeed$9(notifyConsumer, right(element)), notifyConsumers.length === 0 ? stateEmpty(deferred) : stateEmit(notifyConsumers)];
          }
          throw new Error("Bug: Channel.SingleProducerAsyncInput.emit - Queue was empty! please report an issue at https://github.com/Effect-TS/effect/issues");
        }
        case OP_STATE_ERROR: {
          return [interrupt$1, state];
        }
        case OP_STATE_DONE: {
          return [interrupt$1, state];
        }
      }
    })));
  }
  error(cause) {
    return flatten$3(modify$1(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await$2(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach(state.notifyConsumers, (deferred) => failCause$8(deferred, cause), {
            discard: true
          }), stateError(cause)];
        }
        case OP_STATE_ERROR: {
          return [interrupt$1, state];
        }
        case OP_STATE_DONE: {
          return [interrupt$1, state];
        }
      }
    }));
  }
  get take() {
    return this.takeWith((cause) => failCause$7(map$7(cause, left)), (elem) => succeed$8(elem), (done2) => fail$9(right(done2)));
  }
  takeWith(onError2, onElement, onDone) {
    return flatMap$4(make$H(), (deferred) => flatten$3(modify$1(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [zipRight$2(succeed$9(state.notifyProducer, void 0), matchCause(_await$2(deferred), {
            onFailure: onError2,
            onSuccess: match$9({
              onLeft: onDone,
              onRight: onElement
            })
          })), stateEmit([deferred])];
        }
        case OP_STATE_EMIT: {
          return [matchCause(_await$2(deferred), {
            onFailure: onError2,
            onSuccess: match$9({
              onLeft: onDone,
              onRight: onElement
            })
          }), stateEmit([...state.notifyConsumers, deferred])];
        }
        case OP_STATE_ERROR: {
          return [succeed$5(onError2(state.cause)), state];
        }
        case OP_STATE_DONE: {
          return [succeed$5(onDone(state.done)), state];
        }
      }
    })));
  }
}
const make$m = () => pipe(make$H(), flatMap$4((deferred) => make$A(stateEmpty(deferred))), map$5((ref) => new SingleProducerAsyncInputImpl(ref)));
const acquireUseRelease$1 = (acquire, use, release) => flatMap$3(fromEffect$3(make$A(() => _void)), (ref) => pipe(fromEffect$3(uninterruptible(tap$2(acquire, (a) => set$3(ref, (exit2) => release(a, exit2))))), flatMap$3(use), ensuringWith$2((exit2) => flatMap$4(get$5(ref), (f) => f(exit2)))));
const concatMap = /* @__PURE__ */ dual(2, (self2, f) => concatMapWith(self2, f, () => void 0, () => void 0));
const drain$1 = (self2) => {
  const drainer = readWithCause({
    onInput: () => drainer,
    onFailure: failCause$3,
    onDone: succeed$3
  });
  return pipeTo(self2, drainer);
};
const ensuring$3 = /* @__PURE__ */ dual(2, (self2, finalizer) => ensuringWith$2(self2, () => finalizer));
const flatten$2 = (self2) => flatMap$3(self2, identity);
const fromInput$3 = (input) => unwrap$2(input.takeWith(failCause$3, (elem) => flatMap$3(write(elem), () => fromInput$3(input)), succeed$3));
const identityChannel = () => readWith({
  onInput: (input) => flatMap$3(write(input), () => identityChannel()),
  onFailure: fail$5,
  onDone: succeedNow
});
const map$4 = /* @__PURE__ */ dual(2, (self2, f) => flatMap$3(self2, (a) => sync$1(() => f(a))));
const mapError$3 = /* @__PURE__ */ dual(2, (self2, f) => mapErrorCause(self2, map$7(f)));
const mapErrorCause = /* @__PURE__ */ dual(2, (self2, f) => catchAllCause$1(self2, (cause) => failCause$3(f(cause))));
const mapOut = /* @__PURE__ */ dual(2, (self2, f) => {
  const reader = readWith({
    onInput: (outElem) => flatMap$3(write(f(outElem)), () => reader),
    onFailure: fail$5,
    onDone: succeedNow
  });
  return pipeTo(self2, reader);
});
const mapOutEffect = /* @__PURE__ */ dual(2, (self2, f) => {
  const reader = readWithCause({
    onInput: (outElem) => pipe(fromEffect$3(f(outElem)), flatMap$3(write), flatMap$3(() => reader)),
    onFailure: failCause$3,
    onDone: succeedNow
  });
  return pipeTo(self2, reader);
});
const mapOutEffectPar = /* @__PURE__ */ dual(3, (self2, f, n) => unwrapScopedWith$1((scope2) => gen(function* () {
  const input = yield* make$m();
  const queueReader = fromInput$3(input);
  const queue = yield* bounded(n);
  yield* addFinalizer$1(scope2, shutdown(queue));
  const errorSignal = yield* make$H();
  const withPermits = n === Number.POSITIVE_INFINITY ? (_) => identity : (yield* makeSemaphore(n)).withPermits;
  const pull = yield* queueReader.pipe(pipeTo(self2), toPullIn(scope2));
  yield* pull.pipe(matchCauseEffect({
    onFailure: (cause) => offer$2(queue, failCause$4(cause)),
    onSuccess: match$9({
      onLeft: (outDone) => zipRight$2(interruptible(withPermits(n)(_void)), asVoid(offer$2(queue, succeed$5(left(outDone))))),
      onRight: (outElem) => gen(function* () {
        const deferred = yield* make$H();
        const latch = yield* make$H();
        yield* offer$2(queue, map$5(_await$2(deferred), right));
        yield* succeed$9(latch, void 0).pipe(zipRight$2(uninterruptibleMask((restore) => exit(restore(_await$2(errorSignal))).pipe(raceFirst(exit(restore(f(outElem)))), flatMap$4(identity))).pipe(tapErrorCause((cause) => failCause$8(errorSignal, cause)), intoDeferred(deferred))), withPermits(1), forkIn(scope2));
        yield* _await$2(latch);
      })
    })
  }), forever, interruptible, forkIn(scope2));
  const consumer = unwrap$2(matchCause(flatten$3(take$4(queue)), {
    onFailure: failCause$3,
    onSuccess: match$9({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap$3(write(outElem), () => consumer)
    })
  }));
  return embedInput(consumer, input);
})));
const mergeAll = (options2) => {
  return (channels) => mergeAllWith(options2)(channels, constVoid);
};
const mergeAllWith = ({
  bufferSize = 16,
  concurrency,
  mergeStrategy = BackPressure()
}) => (channels, f) => unwrapScopedWith$1((scope2) => gen(function* () {
  const concurrencyN = concurrency === "unbounded" ? Number.MAX_SAFE_INTEGER : concurrency;
  const input = yield* make$m();
  const queueReader = fromInput$3(input);
  const queue = yield* bounded(bufferSize);
  yield* addFinalizer$1(scope2, shutdown(queue));
  const cancelers = yield* unbounded$2();
  yield* addFinalizer$1(scope2, shutdown(cancelers));
  const lastDone = yield* make$A(none$4());
  const errorSignal = yield* make$H();
  const withPermits = (yield* makeSemaphore(concurrencyN)).withPermits;
  const pull = yield* toPullIn(pipeTo(queueReader, channels), scope2);
  function evaluatePull(pull2) {
    return pull2.pipe(flatMap$4(match$9({
      onLeft: (done2) => succeed$5(some(done2)),
      onRight: (outElem) => as(offer$2(queue, succeed$5(right(outElem))), none$4())
    })), repeat({
      until: (_) => isSome(_)
    }), flatMap$4((outDone) => update$1(lastDone, match$8({
      onNone: () => some(outDone.value),
      onSome: (lastDone2) => some(f(lastDone2, outDone.value))
    }))), catchAllCause$2((cause) => isInterrupted(cause) ? failCause$4(cause) : offer$2(queue, failCause$4(cause)).pipe(zipRight$2(succeed$9(errorSignal, void 0)), asVoid)));
  }
  yield* pull.pipe(matchCauseEffect({
    onFailure: (cause) => offer$2(queue, failCause$4(cause)).pipe(zipRight$2(succeed$5(false))),
    onSuccess: match$9({
      onLeft: (outDone) => raceWith(interruptible(_await$2(errorSignal)), interruptible(withPermits(concurrencyN)(_void)), {
        onSelfDone: (_, permitAcquisition) => as(interrupt$2(permitAcquisition), false),
        onOtherDone: (_, failureAwait) => zipRight$2(interrupt$2(failureAwait), get$5(lastDone).pipe(flatMap$4(match$8({
          onNone: () => offer$2(queue, succeed$5(left(outDone))),
          onSome: (lastDone2) => offer$2(queue, succeed$5(left(f(lastDone2, outDone))))
        })), as(false)))
      }),
      onRight: (channel) => match(mergeStrategy, {
        onBackPressure: () => gen(function* () {
          const latch = yield* make$H();
          const raceEffects = scopedWith$2((scope3) => toPullIn(pipeTo(queueReader, channel), scope3).pipe(flatMap$4((pull2) => race(exit(evaluatePull(pull2)), exit(interruptible(_await$2(errorSignal))))), flatMap$4(identity)));
          yield* succeed$9(latch, void 0).pipe(zipRight$2(raceEffects), withPermits(1), forkIn(scope2));
          yield* _await$2(latch);
          const errored = yield* isDone$5(errorSignal);
          return !errored;
        }),
        onBufferSliding: () => gen(function* () {
          const canceler = yield* make$H();
          const latch = yield* make$H();
          const size$12 = yield* size(cancelers);
          yield* take$4(cancelers).pipe(flatMap$4((canceler2) => succeed$9(canceler2, void 0)), when(() => size$12 >= concurrencyN));
          yield* offer$2(cancelers, canceler);
          const raceEffects = scopedWith$2((scope3) => toPullIn(pipeTo(queueReader, channel), scope3).pipe(flatMap$4((pull2) => exit(evaluatePull(pull2)).pipe(race(exit(interruptible(_await$2(errorSignal)))), race(exit(interruptible(_await$2(canceler)))))), flatMap$4(identity)));
          yield* succeed$9(latch, void 0).pipe(zipRight$2(raceEffects), withPermits(1), forkIn(scope2));
          yield* _await$2(latch);
          const errored = yield* isDone$5(errorSignal);
          return !errored;
        })
      })
    })
  }), repeat({
    while: (_) => _
  }), forkIn(scope2));
  const consumer = pipe(take$4(queue), flatten$3, matchCause({
    onFailure: failCause$3,
    onSuccess: match$9({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap$3(write(outElem), () => consumer)
    })
  }), unwrap$2);
  return embedInput(consumer, input);
}));
const mergeMap = /* @__PURE__ */ dual(3, (self2, f, options2) => mergeAll(options2)(mapOut(self2, f)));
const mergeWith$1 = /* @__PURE__ */ dual(2, (self2, options2) => {
  function merge2(scope2) {
    return gen(function* () {
      const input = yield* make$m();
      const queueReader = fromInput$3(input);
      const pullL = yield* toPullIn(pipeTo(queueReader, self2), scope2);
      const pullR = yield* toPullIn(pipeTo(queueReader, options2.other), scope2);
      function handleSide(exit2, fiber, pull) {
        return (done2, both, single) => {
          function onDecision(decision) {
            const op = decision;
            if (op._tag === OP_DONE$2) {
              return succeed$5(fromEffect$3(zipRight$2(interrupt$2(fiber), op.effect)));
            }
            return map$5(_await(fiber), match$5({
              onFailure: (cause) => fromEffect$3(op.f(failCause$7(cause))),
              onSuccess: match$9({
                onLeft: (done3) => fromEffect$3(op.f(succeed$8(done3))),
                onRight: (elem) => zipRight$1(write(elem), go2(single(op.f)))
              })
            }));
          }
          return match$5(exit2, {
            onFailure: (cause) => onDecision(done2(failCause$7(cause))),
            onSuccess: match$9({
              onLeft: (z) => onDecision(done2(succeed$8(z))),
              onRight: (elem) => succeed$5(flatMap$3(write(elem), () => flatMap$3(fromEffect$3(forkIn(interruptible(pull), scope2)), (leftFiber) => go2(both(leftFiber, fiber)))))
            })
          });
        };
      }
      function go2(state) {
        switch (state._tag) {
          case OP_BOTH_RUNNING: {
            const leftJoin = interruptible(join$1(state.left));
            const rightJoin = interruptible(join$1(state.right));
            return unwrap$2(raceWith(leftJoin, rightJoin, {
              onSelfDone: (leftExit, rf) => zipRight$2(interrupt$2(rf), handleSide(leftExit, state.right, pullL)(options2.onSelfDone, BothRunning, (f) => LeftDone(f))),
              onOtherDone: (rightExit, lf) => zipRight$2(interrupt$2(lf), handleSide(rightExit, state.left, pullR)(options2.onOtherDone, (left2, right2) => BothRunning(right2, left2), (f) => RightDone(f)))
            }));
          }
          case OP_LEFT_DONE: {
            return unwrap$2(map$5(exit(pullR), match$5({
              onFailure: (cause) => fromEffect$3(state.f(failCause$7(cause))),
              onSuccess: match$9({
                onLeft: (done2) => fromEffect$3(state.f(succeed$8(done2))),
                onRight: (elem) => flatMap$3(write(elem), () => go2(LeftDone(state.f)))
              })
            })));
          }
          case OP_RIGHT_DONE: {
            return unwrap$2(map$5(exit(pullL), match$5({
              onFailure: (cause) => fromEffect$3(state.f(failCause$7(cause))),
              onSuccess: match$9({
                onLeft: (done2) => fromEffect$3(state.f(succeed$8(done2))),
                onRight: (elem) => flatMap$3(write(elem), () => go2(RightDone(state.f)))
              })
            })));
          }
        }
      }
      return fromEffect$3(withFiberRuntime((parent) => {
        const inherit = withFiberRuntime((state) => {
          state.transferChildren(parent.scope());
          return _void;
        });
        const leftFiber = interruptible(pullL).pipe(ensuring$4(inherit), forkIn(scope2));
        const rightFiber = interruptible(pullR).pipe(ensuring$4(inherit), forkIn(scope2));
        return zipWith(leftFiber, rightFiber, (left2, right2) => BothRunning(left2, right2));
      })).pipe(flatMap$3(go2), embedInput(input));
    });
  }
  return unwrapScopedWith$1(merge2);
});
const pipeToOrFail = /* @__PURE__ */ dual(2, (self2, that) => suspend$4(() => {
  let channelException = void 0;
  const reader = readWith({
    onInput: (outElem) => flatMap$3(write(outElem), () => reader),
    onFailure: (outErr) => {
      channelException = ChannelException(outErr);
      return failCause$3(die$4(channelException));
    },
    onDone: succeedNow
  });
  const writer = readWithCause({
    onInput: (outElem) => pipe(write(outElem), flatMap$3(() => writer)),
    onFailure: (cause) => isDieType(cause) && isChannelException(cause.defect) && equals$1(cause.defect, channelException) ? fail$5(cause.defect.error) : failCause$3(cause),
    onDone: succeedNow
  });
  return pipeTo(pipeTo(pipeTo(self2, reader), that), writer);
}));
const run$2 = (self2) => scopedWith$2((scope2) => runIn(self2, scope2));
const runDrain$2 = (self2) => run$2(drain$1(self2));
const scoped$1 = (effect2) => unwrap$2(uninterruptibleMask((restore) => map$5(make$p(), (scope2) => acquireReleaseOut(tapErrorCause(restore(extend$1(effect2, scope2)), (cause) => close(scope2, failCause$7(cause))), (_, exit2) => close(scope2, exit2)))));
const scopedWith$1 = (f) => unwrapScoped$2(map$5(scope, (scope2) => flatMap$3(fromEffect$3(f(scope2)), write)));
const toPullIn = /* @__PURE__ */ dual(2, (self2, scope2) => zip$1(sync$3(() => new ChannelExecutor(self2, void 0, identity)), runtime()).pipe(tap$2(([executor, runtime2]) => addFinalizerExit(scope2, (exit2) => {
  const finalizer = executor.close(exit2);
  return finalizer !== void 0 ? provide$1(finalizer, runtime2) : _void;
})), uninterruptible, map$5(([executor]) => suspend$5(() => interpretToPull(executor.run(), executor)))));
const interpretToPull = (channelState, exec) => {
  const state = channelState;
  switch (state._tag) {
    case OP_DONE$3: {
      return match$5(exec.getDone(), {
        onFailure: failCause$4,
        onSuccess: (done2) => succeed$5(left(done2))
      });
    }
    case OP_EMIT$1: {
      return succeed$5(right(exec.getEmit()));
    }
    case OP_FROM_EFFECT: {
      return pipe(state.effect, flatMap$4(() => interpretToPull(exec.run(), exec)));
    }
    case OP_READ: {
      return readUpstream(state, () => interpretToPull(exec.run(), exec), (cause) => failCause$4(cause));
    }
  }
};
const unwrap$2 = (channel) => flatten$2(fromEffect$3(channel));
const unwrapScoped$2 = (self2) => concatAllWith(scoped$1(self2), (d, _) => d, (d, _) => d);
const unwrapScopedWith$1 = (f) => concatAllWith(scopedWith$1(f), (d, _) => d, (d, _) => d);
const withSpan$2 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options2 = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  const acquire = all([makeSpan(name, options2), context(), clock, get$4(currentTracerTimingEnabled)]);
  if (dataFirst) {
    const self2 = arguments[0];
    return acquireUseRelease$1(acquire, ([span2, context2]) => provideContext$2(self2, add$2(context2, spanTag, span2)), ([span2, , clock2, timingEnabled], exit2) => endSpan(span2, exit2, clock2, timingEnabled));
  }
  return (self2) => acquireUseRelease$1(acquire, ([span2, context2]) => provideContext$2(self2, add$2(context2, spanTag, span2)), ([span2, , clock2, timingEnabled], exit2) => endSpan(span2, exit2, clock2, timingEnabled));
};
const writeChunk = (outs) => writeChunkWriter(0, outs.length, outs);
const writeChunkWriter = (idx, len, chunk2) => {
  return idx === len ? void_$1 : pipe(write(pipe(chunk2, unsafeGet$2(idx))), flatMap$3(() => writeChunkWriter(idx + 1, len, chunk2)));
};
const zip = /* @__PURE__ */ dual((args2) => isChannel(args2[1]), (self2, that, options2) => (options2 == null ? void 0 : options2.concurrent) ? mergeWith$1(self2, {
  other: that,
  onSelfDone: (exit1) => Await$1((exit2) => suspend$5(() => zip$2(exit1, exit2))),
  onOtherDone: (exit2) => Await$1((exit1) => suspend$5(() => zip$2(exit1, exit2)))
}) : flatMap$3(self2, (a) => map$4(that, (b) => [a, b])));
const zipRight$1 = /* @__PURE__ */ dual((args2) => isChannel(args2[1]), (self2, that, options2) => (options2 == null ? void 0 : options2.concurrent) ? map$4(zip(self2, that, {
  concurrent: true
}), (tuple) => tuple[1]) : flatMap$3(self2, () => that));
const ChannelExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Channel/ChannelException");
const ChannelException = (error) => ({
  _tag: "ChannelException",
  [ChannelExceptionTypeId]: ChannelExceptionTypeId,
  error
});
const isChannelException = (u) => hasProperty(u, ChannelExceptionTypeId);
const SinkTypeId = /* @__PURE__ */ Symbol.for("effect/Sink");
const sinkVariance = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _In: (_) => _,
  /* c8 ignore next */
  _L: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
_pa = SinkTypeId;
class SinkImpl {
  constructor(channel) {
    __publicField(this, "channel");
    __publicField(this, _pa, sinkVariance);
    this.channel = channel;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const collectAll = () => new SinkImpl(collectAllLoop(empty$r()));
const collectAllLoop = (acc) => readWithCause({
  onInput: (chunk2) => collectAllLoop(pipe(acc, appendAll$1(chunk2))),
  onFailure: failCause$3,
  onDone: () => succeed$3(acc)
});
const drain = /* @__PURE__ */ new SinkImpl(/* @__PURE__ */ drain$1(/* @__PURE__ */ identityChannel()));
const forEachChunk = (f) => {
  const process2 = readWithCause({
    onInput: (input) => pipe(fromEffect$3(f(input)), flatMap$3(() => process2)),
    onFailure: failCause$3,
    onDone: () => void_$1
  });
  return new SinkImpl(process2);
};
const fromEffect$1 = (effect2) => new SinkImpl(fromEffect$3(effect2));
const toChannel$3 = (self2) => isEffect(self2) ? toChannel$3(fromEffect$1(self2)) : self2.channel;
const Done2 = Done$1;
const Await = Await$1;
const runFork = unsafeFork;
const runPromiseExit = unsafeRunPromiseExit;
const updateContext = updateContext$1;
const exponential = exponential$1;
const spaced = spaced$1;
const OP_LEFT = "Left";
const OP_RIGHT = "Right";
const OP_BOTH = "Both";
const OP_EITHER = "Either";
const Left = {
  _tag: OP_LEFT
};
const Right = {
  _tag: OP_RIGHT
};
const Both$1 = {
  _tag: OP_BOTH
};
const Either = {
  _tag: OP_EITHER
};
const fromInput$2 = (input) => {
  switch (input) {
    case "left":
      return Left;
    case "right":
      return Right;
    case "both":
      return Both$1;
    case "either":
      return Either;
    default:
      return input;
  }
};
const Both = Both$1;
class Versioned {
  constructor(value2) {
    __publicField(this, "value");
    this.value = value2;
  }
}
const make$l = (ref, isNew) => ({
  ref,
  isNew,
  isChanged: false,
  expected: ref.versioned,
  newValue: ref.versioned.value
});
const unsafeGet$1 = (self2) => {
  return self2.newValue;
};
const unsafeSet$2 = (self2, value2) => {
  self2.isChanged = true;
  self2.newValue = value2;
};
const commit = (self2) => {
  self2.ref.versioned = new Versioned(self2.newValue);
};
const isInvalid = (self2) => {
  return self2.ref.versioned !== self2.expected;
};
const isChanged = (self2) => {
  return self2.isChanged;
};
const JournalAnalysisInvalid = "Invalid";
const JournalAnalysisReadWrite = "ReadWrite";
const JournalAnalysisReadOnly = "ReadOnly";
const commitJournal = (journal) => {
  for (const entry of journal) {
    commit(entry[1]);
  }
};
const analyzeJournal = (journal) => {
  let val = JournalAnalysisReadOnly;
  for (const [, entry] of journal) {
    val = isInvalid(entry) ? JournalAnalysisInvalid : isChanged(entry) ? JournalAnalysisReadWrite : val;
    if (val === JournalAnalysisInvalid) {
      return val;
    }
  }
  return val;
};
const collectTodos = (journal) => {
  const allTodos = /* @__PURE__ */ new Map();
  for (const [, entry] of journal) {
    for (const todo of entry.ref.todos) {
      allTodos.set(todo[0], todo[1]);
    }
    entry.ref.todos = /* @__PURE__ */ new Map();
  }
  return allTodos;
};
const execTodos = (todos) => {
  const todosSorted = Array.from(todos.entries()).sort((x, y) => x[0] - y[0]);
  for (const [_, todo] of todosSorted) {
    todo();
  }
};
const addTodo = (txnId, journal, todoEffect) => {
  let added = false;
  for (const [, entry] of journal) {
    if (!entry.ref.todos.has(txnId)) {
      entry.ref.todos.set(txnId, todoEffect);
      added = true;
    }
  }
  return added;
};
const OP_WITH_STM_RUNTIME = "WithSTMRuntime";
const OP_ON_FAILURE = "OnFailure";
const OP_ON_RETRY = "OnRetry";
const OP_ON_SUCCESS = "OnSuccess";
const OP_PROVIDE = "Provide";
const OP_SYNC = "Sync";
const OP_SUCCEED$1 = "Succeed";
const OP_RETRY$1 = "Retry";
const OP_FAIL$1 = "Fail";
const OP_DIE$1 = "Die";
const OP_INTERRUPT$1 = "Interrupt";
const OP_FAIL = "Fail";
const OP_DIE = "Die";
const OP_INTERRUPT = "Interrupt";
const OP_SUCCEED = "Succeed";
const OP_RETRY = "Retry";
const OP_DONE$1 = "Done";
const OP_SUSPEND = "Suspend";
const OP_DONE = "Done";
const OP_INTERRUPTED = "Interrupted";
const OP_RUNNING = "Running";
const STMStateSymbolKey = "effect/STM/State";
const STMStateTypeId = /* @__PURE__ */ Symbol.for(STMStateSymbolKey);
const isSTMState = (u) => hasProperty(u, STMStateTypeId);
const isRunning = (self2) => {
  return self2._tag === OP_RUNNING;
};
const isDone = (self2) => {
  return self2._tag === OP_DONE;
};
const done$2 = (exit2) => {
  return {
    [STMStateTypeId]: STMStateTypeId,
    _tag: OP_DONE,
    exit: exit2,
    [symbol$1]() {
      return pipe(hash(STMStateSymbolKey), combine$7(hash(OP_DONE)), combine$7(hash(exit2)), cached$1(this));
    },
    [symbol](that) {
      return isSTMState(that) && that._tag === OP_DONE && equals$1(exit2, that.exit);
    }
  };
};
const interruptedHash = /* @__PURE__ */ pipe(/* @__PURE__ */ hash(STMStateSymbolKey), /* @__PURE__ */ combine$7(/* @__PURE__ */ hash(OP_INTERRUPTED)), /* @__PURE__ */ combine$7(/* @__PURE__ */ hash("interrupted")));
const interrupted = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OP_INTERRUPTED,
  [symbol$1]() {
    return interruptedHash;
  },
  [symbol](that) {
    return isSTMState(that) && that._tag === OP_INTERRUPTED;
  }
};
const runningHash = /* @__PURE__ */ pipe(/* @__PURE__ */ hash(STMStateSymbolKey), /* @__PURE__ */ combine$7(/* @__PURE__ */ hash(OP_RUNNING)), /* @__PURE__ */ combine$7(/* @__PURE__ */ hash("running")));
const running = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OP_RUNNING,
  [symbol$1]() {
    return runningHash;
  },
  [symbol](that) {
    return isSTMState(that) && that._tag === OP_RUNNING;
  }
};
const fromTExit = (tExit) => {
  switch (tExit._tag) {
    case OP_FAIL: {
      return done$2(fail$9(tExit.error));
    }
    case OP_DIE: {
      return done$2(die$5(tExit.defect));
    }
    case OP_INTERRUPT: {
      return done$2(interrupt$4(tExit.fiberId));
    }
    case OP_SUCCEED: {
      return done$2(succeed$8(tExit.value));
    }
    case OP_RETRY: {
      throw new Error("BUG: STM.STMState.fromTExit - please report an issue at https://github.com/Effect-TS/effect/issues");
    }
  }
};
const TExitSymbolKey = "effect/TExit";
const TExitTypeId = /* @__PURE__ */ Symbol.for(TExitSymbolKey);
const variance$1 = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _E: (_) => _
};
const isExit = (u) => hasProperty(u, TExitTypeId);
const isSuccess = (self2) => {
  return self2._tag === OP_SUCCEED;
};
const isRetry = (self2) => {
  return self2._tag === OP_RETRY;
};
const fail$4 = (error) => ({
  [TExitTypeId]: variance$1,
  _tag: OP_FAIL,
  error,
  [symbol$1]() {
    return pipe(hash(TExitSymbolKey), combine$7(hash(OP_FAIL)), combine$7(hash(error)), cached$1(this));
  },
  [symbol](that) {
    return isExit(that) && that._tag === OP_FAIL && equals$1(error, that.error);
  }
});
const die$2 = (defect) => ({
  [TExitTypeId]: variance$1,
  _tag: OP_DIE,
  defect,
  [symbol$1]() {
    return pipe(hash(TExitSymbolKey), combine$7(hash(OP_DIE)), combine$7(hash(defect)), cached$1(this));
  },
  [symbol](that) {
    return isExit(that) && that._tag === OP_DIE && equals$1(defect, that.defect);
  }
});
const interrupt = (fiberId2) => ({
  [TExitTypeId]: variance$1,
  _tag: OP_INTERRUPT,
  fiberId: fiberId2,
  [symbol$1]() {
    return pipe(hash(TExitSymbolKey), combine$7(hash(OP_INTERRUPT)), combine$7(hash(fiberId2)), cached$1(this));
  },
  [symbol](that) {
    return isExit(that) && that._tag === OP_INTERRUPT && equals$1(fiberId2, that.fiberId);
  }
});
const succeed$2 = (value2) => ({
  [TExitTypeId]: variance$1,
  _tag: OP_SUCCEED,
  value: value2,
  [symbol$1]() {
    return pipe(hash(TExitSymbolKey), combine$7(hash(OP_SUCCEED)), combine$7(hash(value2)), cached$1(this));
  },
  [symbol](that) {
    return isExit(that) && that._tag === OP_SUCCEED && equals$1(value2, that.value);
  }
});
const retryHash = /* @__PURE__ */ pipe(/* @__PURE__ */ hash(TExitSymbolKey), /* @__PURE__ */ combine$7(/* @__PURE__ */ hash(OP_RETRY)), /* @__PURE__ */ combine$7(/* @__PURE__ */ hash("retry")));
const retry$1 = {
  [TExitTypeId]: variance$1,
  _tag: OP_RETRY,
  [symbol$1]() {
    return retryHash;
  },
  [symbol](that) {
    return isExit(that) && isRetry(that);
  }
};
const done$1 = (exit2) => {
  return {
    _tag: OP_DONE$1,
    exit: exit2
  };
};
const suspend$3 = (journal) => {
  return {
    _tag: OP_SUSPEND,
    journal
  };
};
const txnCounter = {
  ref: 0
};
const make$k = () => {
  const newId = txnCounter.ref + 1;
  txnCounter.ref = newId;
  return newId;
};
const STMSymbolKey = "effect/STM";
const STMTypeId = /* @__PURE__ */ Symbol.for(STMSymbolKey);
const stmVariance = {
  /* c8 ignore next */
  _R: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
class STMPrimitive {
  constructor(effect_instruction_i0) {
    __publicField(this, "effect_instruction_i0");
    __publicField(this, "_op", OP_COMMIT);
    __publicField(this, "effect_instruction_i1");
    __publicField(this, "effect_instruction_i2");
    __publicField(this, _ta);
    __publicField(this, _sa);
    __publicField(this, _ra);
    __publicField(this, _qa);
    this.effect_instruction_i0 = effect_instruction_i0;
    this[EffectTypeId] = effectVariance;
    this[StreamTypeId$1] = stmVariance;
    this[SinkTypeId] = stmVariance;
    this[ChannelTypeId] = stmVariance;
  }
  get [(_ta = EffectTypeId, _sa = StreamTypeId$1, _ra = SinkTypeId, _qa = ChannelTypeId, STMTypeId)]() {
    return stmVariance;
  }
  [symbol](that) {
    return this === that;
  }
  [symbol$1]() {
    return cached$1(this, random(this));
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(new YieldWrap(this));
  }
  commit() {
    return unsafeAtomically(this, constVoid);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const unsafeAtomically = (self2, onDone, onInterrupt2) => withFiberRuntime$1((state) => {
  const fiberId2 = state.id();
  const env2 = state.getFiberRef(currentContext);
  const scheduler = state.getFiberRef(currentScheduler);
  const priority = state.getFiberRef(currentSchedulingPriority);
  const commitResult = tryCommitSync(fiberId2, self2, env2, scheduler, priority);
  switch (commitResult._tag) {
    case OP_DONE$1: {
      onDone(commitResult.exit);
      return commitResult.exit;
    }
    case OP_SUSPEND: {
      const txnId = make$k();
      const state2 = {
        value: running
      };
      const effect2 = async((k) => tryCommitAsync(fiberId2, self2, txnId, state2, env2, scheduler, priority, k));
      return uninterruptibleMask((restore) => pipe(restore(effect2), catchAllCause$2((cause) => {
        let currentState = state2.value;
        if (isRunning(currentState)) {
          state2.value = interrupted;
        }
        currentState = state2.value;
        if (isDone(currentState)) {
          onDone(currentState.exit);
          return currentState.exit;
        }
        return failCause$4(cause);
      })));
    }
  }
});
const tryCommit = (fiberId2, stm, state, env2, scheduler, priority) => {
  const journal = /* @__PURE__ */ new Map();
  const tExit = new STMDriver(stm, journal, fiberId2, env2).run();
  const analysis = analyzeJournal(journal);
  if (analysis === JournalAnalysisReadWrite) {
    commitJournal(journal);
  } else if (analysis === JournalAnalysisInvalid) {
    throw new Error("BUG: STM.TryCommit.tryCommit - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  switch (tExit._tag) {
    case OP_SUCCEED: {
      state.value = fromTExit(tExit);
      return completeTodos(succeed$8(tExit.value), journal, scheduler, priority);
    }
    case OP_FAIL: {
      state.value = fromTExit(tExit);
      const cause = fail$8(tExit.error);
      return completeTodos(failCause$7(cause), journal, scheduler, priority);
    }
    case OP_DIE: {
      state.value = fromTExit(tExit);
      const cause = die$4(tExit.defect);
      return completeTodos(failCause$7(cause), journal, scheduler, priority);
    }
    case OP_INTERRUPT: {
      state.value = fromTExit(tExit);
      const cause = interrupt$3(fiberId2);
      return completeTodos(failCause$7(cause), journal, scheduler, priority);
    }
    case OP_RETRY: {
      return suspend$3(journal);
    }
  }
};
const tryCommitSync = (fiberId2, stm, env2, scheduler, priority) => {
  const journal = /* @__PURE__ */ new Map();
  const tExit = new STMDriver(stm, journal, fiberId2, env2).run();
  const analysis = analyzeJournal(journal);
  if (analysis === JournalAnalysisReadWrite && isSuccess(tExit)) {
    commitJournal(journal);
  } else if (analysis === JournalAnalysisInvalid) {
    throw new Error("BUG: STM.TryCommit.tryCommitSync - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  switch (tExit._tag) {
    case OP_SUCCEED: {
      return completeTodos(succeed$8(tExit.value), journal, scheduler, priority);
    }
    case OP_FAIL: {
      const cause = fail$8(tExit.error);
      return completeTodos(failCause$7(cause), journal, scheduler, priority);
    }
    case OP_DIE: {
      const cause = die$4(tExit.defect);
      return completeTodos(failCause$7(cause), journal, scheduler, priority);
    }
    case OP_INTERRUPT: {
      const cause = interrupt$3(fiberId2);
      return completeTodos(failCause$7(cause), journal, scheduler, priority);
    }
    case OP_RETRY: {
      return suspend$3(journal);
    }
  }
};
const tryCommitAsync = (fiberId2, self2, txnId, state, context2, scheduler, priority, k) => {
  if (isRunning(state.value)) {
    const result = tryCommit(fiberId2, self2, state, context2, scheduler, priority);
    switch (result._tag) {
      case OP_DONE$1: {
        completeTryCommit(result.exit, k);
        break;
      }
      case OP_SUSPEND: {
        addTodo(txnId, result.journal, () => tryCommitAsync(fiberId2, self2, txnId, state, context2, scheduler, priority, k));
        break;
      }
    }
  }
};
const completeTodos = (exit2, journal, scheduler, priority) => {
  const todos = collectTodos(journal);
  if (todos.size > 0) {
    scheduler.scheduleTask(() => execTodos(todos), priority);
  }
  return done$1(exit2);
};
const completeTryCommit = (exit2, k) => {
  k(exit2);
};
class STMDriver {
  constructor(self2, journal, fiberId2, r0) {
    __publicField(this, "self");
    __publicField(this, "journal");
    __publicField(this, "fiberId");
    __publicField(this, "contStack", []);
    __publicField(this, "env");
    this.self = self2;
    this.journal = journal;
    this.fiberId = fiberId2;
    this.env = r0;
  }
  getEnv() {
    return this.env;
  }
  pushStack(cont) {
    this.contStack.push(cont);
  }
  popStack() {
    return this.contStack.pop();
  }
  nextSuccess() {
    let current = this.popStack();
    while (current !== void 0 && current.effect_instruction_i0 !== OP_ON_SUCCESS) {
      current = this.popStack();
    }
    return current;
  }
  nextFailure() {
    let current = this.popStack();
    while (current !== void 0 && current.effect_instruction_i0 !== OP_ON_FAILURE) {
      current = this.popStack();
    }
    return current;
  }
  nextRetry() {
    let current = this.popStack();
    while (current !== void 0 && current.effect_instruction_i0 !== OP_ON_RETRY) {
      current = this.popStack();
    }
    return current;
  }
  run() {
    let curr = this.self;
    let exit2 = void 0;
    while (exit2 === void 0 && curr !== void 0) {
      try {
        const current = curr;
        if (current) {
          switch (current._op) {
            case "Tag": {
              curr = effect((_, __2, env2) => unsafeGet$3(env2, current));
              break;
            }
            case "Left": {
              curr = fail$3(current.left);
              break;
            }
            case "None": {
              curr = fail$3(new NoSuchElementException());
              break;
            }
            case "Right": {
              curr = succeed$1(current.right);
              break;
            }
            case "Some": {
              curr = succeed$1(current.value);
              break;
            }
            case "Commit": {
              switch (current.effect_instruction_i0) {
                case OP_DIE$1: {
                  exit2 = die$2(internalCall(() => current.effect_instruction_i1()));
                  break;
                }
                case OP_FAIL$1: {
                  const cont = this.nextFailure();
                  if (cont === void 0) {
                    exit2 = fail$4(internalCall(() => current.effect_instruction_i1()));
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(internalCall(() => current.effect_instruction_i1())));
                  }
                  break;
                }
                case OP_RETRY$1: {
                  const cont = this.nextRetry();
                  if (cont === void 0) {
                    exit2 = retry$1;
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2());
                  }
                  break;
                }
                case OP_INTERRUPT$1: {
                  exit2 = interrupt(this.fiberId);
                  break;
                }
                case OP_WITH_STM_RUNTIME: {
                  curr = internalCall(() => current.effect_instruction_i1(this));
                  break;
                }
                case OP_ON_SUCCESS:
                case OP_ON_FAILURE:
                case OP_ON_RETRY: {
                  this.pushStack(current);
                  curr = current.effect_instruction_i1;
                  break;
                }
                case OP_PROVIDE: {
                  const env2 = this.env;
                  this.env = internalCall(() => current.effect_instruction_i2(env2));
                  curr = pipe(current.effect_instruction_i1, ensuring$2(sync(() => this.env = env2)));
                  break;
                }
                case OP_SUCCEED$1: {
                  const value2 = current.effect_instruction_i1;
                  const cont = this.nextSuccess();
                  if (cont === void 0) {
                    exit2 = succeed$2(value2);
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(value2));
                  }
                  break;
                }
                case OP_SYNC: {
                  const value2 = internalCall(() => current.effect_instruction_i1());
                  const cont = this.nextSuccess();
                  if (cont === void 0) {
                    exit2 = succeed$2(value2);
                  } else {
                    curr = internalCall(() => cont.effect_instruction_i2(value2));
                  }
                  break;
                }
              }
              break;
            }
          }
        }
      } catch (e) {
        curr = die$1(e);
      }
    }
    return exit2;
  }
}
const catchAll$2 = /* @__PURE__ */ dual(2, (self2, f) => {
  const stm = new STMPrimitive(OP_ON_FAILURE);
  stm.effect_instruction_i1 = self2;
  stm.effect_instruction_i2 = f;
  return stm;
});
const die$1 = (defect) => dieSync(() => defect);
const dieSync = (evaluate2) => {
  const stm = new STMPrimitive(OP_DIE$1);
  stm.effect_instruction_i1 = evaluate2;
  return stm;
};
const effect = (f) => withSTMRuntime((_) => succeed$1(f(_.journal, _.fiberId, _.getEnv())));
const ensuring$2 = /* @__PURE__ */ dual(2, (self2, finalizer) => matchSTM(self2, {
  onFailure: (e) => zipRight(finalizer, fail$3(e)),
  onSuccess: (a) => zipRight(finalizer, succeed$1(a))
}));
const fail$3 = (error) => failSync(() => error);
const failSync = (evaluate2) => {
  const stm = new STMPrimitive(OP_FAIL$1);
  stm.effect_instruction_i1 = evaluate2;
  return stm;
};
const flatMap$2 = /* @__PURE__ */ dual(2, (self2, f) => {
  const stm = new STMPrimitive(OP_ON_SUCCESS);
  stm.effect_instruction_i1 = self2;
  stm.effect_instruction_i2 = f;
  return stm;
});
const matchSTM = /* @__PURE__ */ dual(2, (self2, {
  onFailure,
  onSuccess
}) => pipe(self2, map$3(right), catchAll$2((e) => pipe(onFailure(e), map$3(left))), flatMap$2((either2) => {
  switch (either2._tag) {
    case "Left": {
      return succeed$1(either2.left);
    }
    case "Right": {
      return onSuccess(either2.right);
    }
  }
})));
const withSTMRuntime = (f) => {
  const stm = new STMPrimitive(OP_WITH_STM_RUNTIME);
  stm.effect_instruction_i1 = f;
  return stm;
};
const interruptAs = (fiberId2) => {
  const stm = new STMPrimitive(OP_INTERRUPT$1);
  stm.effect_instruction_i1 = fiberId2;
  return stm;
};
const map$3 = /* @__PURE__ */ dual(2, (self2, f) => pipe(self2, flatMap$2((a) => sync(() => f(a)))));
const retry = /* @__PURE__ */ new STMPrimitive(OP_RETRY$1);
const succeed$1 = (value2) => {
  const stm = new STMPrimitive(OP_SUCCEED$1);
  stm.effect_instruction_i1 = value2;
  return stm;
};
const sync = (evaluate2) => {
  const stm = new STMPrimitive(OP_SYNC);
  stm.effect_instruction_i1 = evaluate2;
  return stm;
};
const zipRight = /* @__PURE__ */ dual(2, (self2, that) => pipe(self2, flatMap$2(() => that)));
const OP_BACKPRESSURE_STRATEGY = "BackPressure";
const OP_DROPPING_STRATEGY = "Dropping";
const OP_SLIDING_STRATEGY = "Sliding";
const void_ = /* @__PURE__ */ succeed$1(void 0);
const TRefSymbolKey = "effect/TRef";
const TRefTypeId = /* @__PURE__ */ Symbol.for(TRefSymbolKey);
const tRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
_ua = TRefTypeId;
class TRefImpl {
  constructor(value2) {
    __publicField(this, _ua, tRefVariance);
    /** @internal */
    __publicField(this, "todos");
    /** @internal */
    __publicField(this, "versioned");
    this.versioned = new Versioned(value2);
    this.todos = /* @__PURE__ */ new Map();
  }
  modify(f) {
    return effect((journal) => {
      const entry = getOrMakeEntry(this, journal);
      const [retValue, newValue] = f(unsafeGet$1(entry));
      unsafeSet$2(entry, newValue);
      return retValue;
    });
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const make$j = (value2) => effect((journal) => {
  const ref = new TRefImpl(value2);
  journal.set(ref, make$l(ref, true));
  return ref;
});
const getOrMakeEntry = (self2, journal) => {
  if (journal.has(self2)) {
    return journal.get(self2);
  }
  const entry = make$l(self2, false);
  journal.set(self2, entry);
  return entry;
};
const unsafeGet = /* @__PURE__ */ dual(2, (self2, journal) => unsafeGet$1(getOrMakeEntry(self2, journal)));
const unsafeSet$1 = /* @__PURE__ */ dual(3, (self2, value2, journal) => {
  const entry = getOrMakeEntry(self2, journal);
  unsafeSet$2(entry, value2);
  return void 0;
});
const TEnqueueSymbolKey = "effect/TQueue/TEnqueue";
const TEnqueueTypeId = /* @__PURE__ */ Symbol.for(TEnqueueSymbolKey);
const TDequeueSymbolKey = "effect/TQueue/TDequeue";
const TDequeueTypeId = /* @__PURE__ */ Symbol.for(TDequeueSymbolKey);
const Dropping = {
  _tag: OP_DROPPING_STRATEGY
};
const tDequeueVariance = {
  /* c8 ignore next */
  _Out: (_) => _
};
const tEnqueueVariance = {
  /* c8 ignore next */
  _In: (_) => _
};
_wa = TDequeueTypeId, _va = TEnqueueTypeId;
class TQueueImpl {
  constructor(ref, requestedCapacity, strategy) {
    __publicField(this, "ref");
    __publicField(this, "requestedCapacity");
    __publicField(this, "strategy");
    __publicField(this, _wa, tDequeueVariance);
    __publicField(this, _va, tEnqueueVariance);
    __publicField(this, "size", /* @__PURE__ */ withSTMRuntime((runtime2) => {
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      return succeed$1(queue.length);
    }));
    __publicField(this, "isFull", /* @__PURE__ */ map$3(this.size, (size2) => size2 === this.requestedCapacity));
    __publicField(this, "isEmpty", /* @__PURE__ */ map$3(this.size, (size2) => size2 === 0));
    __publicField(this, "shutdown", /* @__PURE__ */ withSTMRuntime((runtime2) => {
      unsafeSet$1(this.ref, void 0, runtime2.journal);
      return void_;
    }));
    __publicField(this, "isShutdown", /* @__PURE__ */ effect((journal) => {
      const queue = unsafeGet(this.ref, journal);
      return queue === void 0;
    }));
    __publicField(this, "awaitShutdown", /* @__PURE__ */ flatMap$2(this.isShutdown, (isShutdown2) => isShutdown2 ? void_ : retry));
    __publicField(this, "peek", /* @__PURE__ */ withSTMRuntime((runtime2) => {
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      if (queue.length === 0) {
        return retry;
      }
      return succeed$1(queue[0]);
    }));
    __publicField(this, "peekOption", /* @__PURE__ */ withSTMRuntime((runtime2) => {
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      return succeed$1(fromNullable(queue[0]));
    }));
    __publicField(this, "take", /* @__PURE__ */ withSTMRuntime((runtime2) => {
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      if (queue.length === 0) {
        return retry;
      }
      const dequeued = queue.shift();
      unsafeSet$1(this.ref, queue, runtime2.journal);
      return succeed$1(dequeued);
    }));
    __publicField(this, "takeAll", /* @__PURE__ */ withSTMRuntime((runtime2) => {
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      unsafeSet$1(this.ref, [], runtime2.journal);
      return succeed$1(queue);
    }));
    this.ref = ref;
    this.requestedCapacity = requestedCapacity;
    this.strategy = strategy;
  }
  capacity() {
    return this.requestedCapacity;
  }
  offer(value2) {
    return withSTMRuntime((runtime2) => {
      const queue = pipe(this.ref, unsafeGet(runtime2.journal));
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      if (queue.length < this.requestedCapacity) {
        queue.push(value2);
        unsafeSet$1(this.ref, queue, runtime2.journal);
        return succeed$1(true);
      }
      switch (this.strategy._tag) {
        case OP_BACKPRESSURE_STRATEGY: {
          return retry;
        }
        case OP_DROPPING_STRATEGY: {
          return succeed$1(false);
        }
        case OP_SLIDING_STRATEGY: {
          if (queue.length === 0) {
            return succeed$1(true);
          }
          queue.shift();
          queue.push(value2);
          unsafeSet$1(this.ref, queue, runtime2.journal);
          return succeed$1(true);
        }
      }
    });
  }
  offerAll(iterable) {
    return withSTMRuntime((runtime2) => {
      const as2 = Array.from(iterable);
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      if (queue.length + as2.length <= this.requestedCapacity) {
        unsafeSet$1(this.ref, [...queue, ...as2], runtime2.journal);
        return succeed$1(true);
      }
      switch (this.strategy._tag) {
        case OP_BACKPRESSURE_STRATEGY: {
          return retry;
        }
        case OP_DROPPING_STRATEGY: {
          const forQueue = as2.slice(0, this.requestedCapacity - queue.length);
          unsafeSet$1(this.ref, [...queue, ...forQueue], runtime2.journal);
          return succeed$1(false);
        }
        case OP_SLIDING_STRATEGY: {
          const forQueue = as2.slice(0, this.requestedCapacity - queue.length);
          const toDrop = queue.length + forQueue.length - this.requestedCapacity;
          const newQueue = queue.slice(toDrop);
          unsafeSet$1(this.ref, [...newQueue, ...forQueue], runtime2.journal);
          return succeed$1(true);
        }
      }
    });
  }
  takeUpTo(max) {
    return withSTMRuntime((runtime2) => {
      const queue = unsafeGet(this.ref, runtime2.journal);
      if (queue === void 0) {
        return interruptAs(runtime2.fiberId);
      }
      const [toTake, remaining] = splitAt(unsafeFromArray(queue), max);
      unsafeSet$1(this.ref, Array.from(remaining), runtime2.journal);
      return succeed$1(Array.from(toTake));
    });
  }
}
const offer$1 = /* @__PURE__ */ dual(2, (self2, value2) => self2.offer(value2));
const peek$1 = (self2) => self2.peek;
const take$3 = (self2) => self2.take;
const unbounded$1 = () => makeQueue(Number.MAX_SAFE_INTEGER, Dropping);
const makeQueue = (requestedCapacity, strategy) => map$3(make$j([]), (ref) => new TQueueImpl(ref, requestedCapacity, strategy));
const offer = offer$1;
const peek = peek$1;
const take$2 = take$3;
const unbounded = unbounded$1;
const make$i = (emit) => {
  const ops = {
    chunk(as2) {
      return this(succeed$5(as2));
    },
    die(defect) {
      return this(die$3(defect));
    },
    dieMessage(message) {
      return this(dieMessage(message));
    },
    done(exit2) {
      return this(suspend$5(() => mapBoth$2(exit2, {
        onFailure: some,
        onSuccess: of$2
      })));
    },
    end() {
      return this(fail$6(none$4()));
    },
    fail(e) {
      return this(fail$6(some(e)));
    },
    fromEffect(effect2) {
      return this(mapBoth$1(effect2, {
        onFailure: some,
        onSuccess: of$2
      }));
    },
    fromEffectChunk(effect2) {
      return this(pipe(effect2, mapError$4(some)));
    },
    halt(cause) {
      return this(failCause$4(pipe(cause, map$7(some))));
    },
    single(value2) {
      return this(succeed$5(of$2(value2)));
    }
  };
  return Object.assign(emit, ops);
};
const makePush = (queue, scheduler) => {
  let finished = false;
  let buffer = [];
  let running2 = false;
  function array2(items) {
    if (finished) return false;
    if (items.length <= 5e4) {
      buffer.push.apply(buffer, items);
    } else {
      for (let i = 0; i < items.length; i++) {
        buffer.push(items[0]);
      }
    }
    if (!running2) {
      running2 = true;
      scheduler.scheduleTask(flush, 0);
    }
    return true;
  }
  function flush() {
    running2 = false;
    if (buffer.length > 0) {
      queue.unsafeOffer(buffer);
      buffer = [];
    }
  }
  function done2(exit2) {
    if (finished) return;
    finished = true;
    if (exit2._tag === "Success") {
      buffer.push(exit2.value);
    }
    flush();
    queue.unsafeOffer(exit2._tag === "Success" ? void_$3 : exit2);
  }
  return {
    single(value2) {
      if (finished) return false;
      buffer.push(value2);
      if (!running2) {
        running2 = true;
        scheduler.scheduleTask(flush, 0);
      }
      return true;
    },
    array: array2,
    chunk(chunk2) {
      return array2(toReadonlyArray(chunk2));
    },
    done: done2,
    end() {
      if (finished) return;
      finished = true;
      flush();
      queue.unsafeOffer(void_$3);
    },
    halt(cause) {
      return done2(failCause$7(cause));
    },
    fail(error) {
      return done2(fail$9(error));
    },
    die(defect) {
      return done2(die$5(defect));
    },
    dieMessage(message) {
      return done2(die$5(new Error(message)));
    }
  };
};
const TakeSymbolKey = "effect/Take";
const TakeTypeId = /* @__PURE__ */ Symbol.for(TakeSymbolKey);
const takeVariance = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _E: (_) => _
};
_xa = TakeTypeId;
class TakeImpl {
  constructor(exit2) {
    __publicField(this, "exit");
    __publicField(this, _xa, takeVariance);
    this.exit = exit2;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const chunk = (chunk2) => new TakeImpl(succeed$8(chunk2));
const done = (self2) => suspend$5(() => self2.exit);
const end$1 = /* @__PURE__ */ new TakeImpl(/* @__PURE__ */ fail$9(/* @__PURE__ */ none$4()));
const failCause$2 = (cause) => new TakeImpl(failCause$7(pipe(cause, map$7(some))));
const fromPull = (pull) => matchCause(pull, {
  onFailure: (cause) => match$8(flipCauseOption(cause), {
    onNone: () => end$1,
    onSome: failCause$2
  }),
  onSuccess: chunk
});
const of = (value2) => new TakeImpl(succeed$8(of$2(value2)));
const end = () => fail$6(none$4());
const failCause$1 = (cause) => mapError$4(failCause$4(cause), some);
const StreamSymbolKey = "effect/Stream";
const StreamTypeId = /* @__PURE__ */ Symbol.for(StreamSymbolKey);
const streamVariance = {
  _R: (_) => _,
  _E: (_) => _,
  _A: (_) => _
};
_ya = StreamTypeId;
class StreamImpl {
  constructor(channel) {
    __publicField(this, "channel");
    __publicField(this, _ya, streamVariance);
    this.channel = channel;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const isStream = (u) => hasProperty(u, StreamTypeId) || isEffect(u);
const DefaultChunkSize = 4096;
const queueFromBufferOptions = (bufferSize) => {
  if (bufferSize === "unbounded") {
    return unbounded$2();
  } else if (typeof bufferSize === "number" || bufferSize === void 0) {
    return bounded(bufferSize ?? 16);
  }
  switch (bufferSize.strategy) {
    case "dropping":
      return dropping(bufferSize.bufferSize ?? 16);
    case "sliding":
      return sliding(bufferSize.bufferSize ?? 16);
    default:
      return bounded(bufferSize.bufferSize ?? 16);
  }
};
const queueFromBufferOptionsPush = (options2) => {
  if ((options2 == null ? void 0 : options2.bufferSize) === "unbounded" || (options2 == null ? void 0 : options2.bufferSize) === void 0 && (options2 == null ? void 0 : options2.strategy) === void 0) {
    return unbounded$2();
  }
  switch (options2 == null ? void 0 : options2.strategy) {
    case "sliding":
      return sliding(options2.bufferSize ?? 16);
    default:
      return dropping((options2 == null ? void 0 : options2.bufferSize) ?? 16);
  }
};
const asyncPush = (register, options2) => acquireRelease(queueFromBufferOptionsPush(options2), shutdown).pipe(tap$2((queue) => getWith(currentScheduler, (scheduler) => register(makePush(queue, scheduler)))), map$5((queue) => {
  const loop = flatMap$3(take$4(queue), (item) => isExit$1(item) ? isSuccess$1(item) ? void_$1 : failCause$3(item.cause) : zipRight$1(write(unsafeFromArray(item)), loop));
  return loop;
}), unwrapScoped$2, fromChannel$1);
const asyncScoped$1 = (register, bufferSize) => pipe(acquireRelease(queueFromBufferOptions(bufferSize), (queue) => shutdown(queue)), flatMap$4((output) => pipe(runtime(), flatMap$4((runtime2) => pipe(register(make$i((k) => pipe(fromPull(k), flatMap$4((take2) => offer$2(output, take2)), asVoid, runPromiseExit(runtime2)).then((exit2) => {
  if (isFailure(exit2)) {
    if (!isInterrupted(exit2.cause)) {
      throw squash(exit2.cause);
    }
  }
}))), zipRight$2(make$A(false)), flatMap$4((ref) => pipe(get$5(ref), map$5((isDone2) => isDone2 ? end() : pipe(take$4(output), flatMap$4(done), onError(() => pipe(set$3(ref, true), zipRight$2(shutdown(output)))))))))))), scoped, flatMap$1(repeatEffectChunkOption));
const catchAll$1 = /* @__PURE__ */ dual(2, (self2, f) => catchAllCause(self2, (cause) => match$9(failureOrCause(cause), {
  onLeft: f,
  onRight: failCause
})));
const catchAllCause = /* @__PURE__ */ dual(2, (self2, f) => new StreamImpl(pipe(toChannel$2(self2), catchAllCause$1((cause) => toChannel$2(f(cause))))));
const concat = /* @__PURE__ */ dual(2, (self2, that) => new StreamImpl(pipe(toChannel$2(self2), zipRight$1(toChannel$2(that)))));
const die = (defect) => fromEffect(die$3(defect));
const empty$6 = /* @__PURE__ */ new StreamImpl(void_$1);
const ensuring$1 = /* @__PURE__ */ dual(2, (self2, finalizer) => new StreamImpl(pipe(toChannel$2(self2), ensuring$3(finalizer))));
const ensuringWith$1 = /* @__PURE__ */ dual(2, (self2, finalizer) => new StreamImpl(ensuringWith$2(toChannel$2(self2), finalizer)));
const fail$2 = (error) => fromEffectOption(fail$6(some(error)));
const failCause = (cause) => fromEffect(failCause$4(cause));
const filter$2 = /* @__PURE__ */ dual(2, (self2, predicate) => mapChunks(self2, filter$3(predicate)));
const filterEffect$1 = /* @__PURE__ */ dual(2, (self2, f) => {
  const loop = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (input) => loop(input[Symbol.iterator]()),
        onFailure: failCause$3,
        onDone: succeed$3
      });
    } else {
      return pipe(f(next.value), map$5((bool) => bool ? pipe(write(of$2(next.value)), flatMap$3(() => loop(iterator))) : loop(iterator)), unwrap$2);
    }
  };
  return new StreamImpl(suspend$4(() => pipe(toChannel$2(self2), pipeTo(loop(empty$r()[Symbol.iterator]())))));
});
const filterMap$1 = /* @__PURE__ */ dual(2, (self2, pf) => mapChunks(self2, filterMap$2(pf)));
const flatMap$1 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self2, f, options2) => {
  const bufferSize = (options2 == null ? void 0 : options2.bufferSize) ?? 16;
  if (options2 == null ? void 0 : options2.switch) {
    return matchConcurrency(options2 == null ? void 0 : options2.concurrency, () => flatMapParSwitchBuffer(self2, 1, bufferSize, f), (n) => flatMapParSwitchBuffer(self2, n, bufferSize, f));
  }
  return matchConcurrency(options2 == null ? void 0 : options2.concurrency, () => new StreamImpl(concatMap(toChannel$2(self2), (as2) => pipe(as2, map$d((a) => toChannel$2(f(a))), reduce$6(void_$1, (left2, right2) => pipe(left2, zipRight$1(right2)))))), (_) => new StreamImpl(pipe(toChannel$2(self2), concatMap(writeChunk), mergeMap((out) => toChannel$2(f(out)), options2))));
});
const matchConcurrency = (concurrency, sequential2, bounded2) => {
  switch (concurrency) {
    case void 0:
      return sequential2();
    case "unbounded":
      return bounded2(Number.MAX_SAFE_INTEGER);
    default:
      return concurrency > 1 ? bounded2(concurrency) : sequential2();
  }
};
const flatMapParSwitchBuffer = /* @__PURE__ */ dual(4, (self2, n, bufferSize, f) => new StreamImpl(pipe(toChannel$2(self2), concatMap(writeChunk), mergeMap((out) => toChannel$2(f(out)), {
  concurrency: n,
  mergeStrategy: BufferSliding(),
  bufferSize
}))));
const flatten$1 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self2, options2) => flatMap$1(self2, identity, options2));
const flattenChunks = (self2) => {
  const flatten2 = readWithCause({
    onInput: (chunks) => flatMap$3(writeChunk(chunks), () => flatten2),
    onFailure: failCause$3,
    onDone: () => void_$1
  });
  return new StreamImpl(pipe(toChannel$2(self2), pipeTo(flatten2)));
};
const flattenExitOption = (self2) => {
  const processChunk = (chunk2, cont) => {
    const [toEmit, rest] = pipe(chunk2, splitWhere((exit2) => !isSuccess$1(exit2)));
    const next = pipe(head$2(rest), match$8({
      onNone: () => cont,
      onSome: match$5({
        onFailure: (cause) => match$8(flipCauseOption(cause), {
          onNone: () => void_$1,
          onSome: failCause$3
        }),
        onSuccess: () => void_$1
      })
    }));
    return pipe(write(pipe(toEmit, filterMap$2((exit2) => isSuccess$1(exit2) ? some(exit2.value) : none$4()))), flatMap$3(() => next));
  };
  const process2 = readWithCause({
    onInput: (chunk2) => processChunk(chunk2, process2),
    onFailure: (cause) => failCause$3(cause),
    onDone: () => void_$1
  });
  return new StreamImpl(pipe(toChannel$2(self2), pipeTo(process2)));
};
const flattenTake = (self2) => flattenChunks(flattenExitOption(pipe(self2, map$2((take2) => take2.exit))));
const fromChannel$1 = (channel) => new StreamImpl(channel);
const toChannel$2 = (stream) => {
  if ("channel" in stream) {
    return stream.channel;
  } else if (isEffect(stream)) {
    return toChannel$2(fromEffect(stream));
  } else {
    throw new TypeError(`Expected a Stream.`);
  }
};
const fromChunk = (chunk2) => new StreamImpl(isEmpty$7(chunk2) ? void_$1 : write(chunk2));
const fromEffect = (effect2) => pipe(effect2, mapError$4(some), fromEffectOption);
const fromEffectOption = (effect2) => new StreamImpl(unwrap$2(match$1(effect2, {
  onFailure: match$8({
    onNone: () => void_$1,
    onSome: fail$5
  }),
  onSuccess: (a) => write(of$2(a))
})));
const fromPubSub$1 = (pubsub, options2) => {
  const maxChunkSize = (options2 == null ? void 0 : options2.maxChunkSize) ?? DefaultChunkSize;
  if (options2 == null ? void 0 : options2.scoped) {
    const effect2 = map$5(subscribe(pubsub), (queue) => fromQueue$1(queue, {
      maxChunkSize,
      shutdown: true
    }));
    return options2.shutdown ? map$5(effect2, ensuring$1(shutdown$1(pubsub))) : effect2;
  }
  const stream = flatMap$1(scoped(subscribe(pubsub)), (queue) => fromQueue$1(queue, {
    maxChunkSize
  }));
  return (options2 == null ? void 0 : options2.shutdown) ? ensuring$1(stream, shutdown$1(pubsub)) : stream;
};
const fromIterable$1 = (iterable) => suspend$2(() => isChunk(iterable) ? fromChunk(iterable) : fromIteratorSucceed(iterable[Symbol.iterator]()));
const fromIteratorSucceed = (iterator, maxChunkSize = DefaultChunkSize) => {
  return pipe(sync$3(() => {
    let builder = [];
    const loop = (iterator2) => pipe(sync$3(() => {
      let next = iterator2.next();
      if (maxChunkSize === 1) {
        if (next.done) {
          return void_$1;
        }
        return pipe(write(of$2(next.value)), flatMap$3(() => loop(iterator2)));
      }
      builder = [];
      let count = 0;
      while (next.done === false) {
        builder.push(next.value);
        count = count + 1;
        if (count >= maxChunkSize) {
          break;
        }
        next = iterator2.next();
      }
      if (count > 0) {
        return pipe(write(unsafeFromArray(builder)), flatMap$3(() => loop(iterator2)));
      }
      return void_$1;
    }), unwrap$2);
    return new StreamImpl(loop(iterator));
  }), unwrap$1);
};
const fromQueue$1 = (queue, options2) => pipe(takeBetween(queue, 1, (options2 == null ? void 0 : options2.maxChunkSize) ?? DefaultChunkSize), catchAllCause$2((cause) => pipe(isShutdown(queue), flatMap$4((isShutdown2) => isShutdown2 && isInterrupted(cause) ? end() : failCause$1(cause)))), repeatEffectChunkOption, (options2 == null ? void 0 : options2.shutdown) ? ensuring$1(shutdown(queue)) : identity);
const fromReadableStream$1 = (...args2) => {
  const evaluate2 = args2.length === 1 ? args2[0].evaluate : args2[0];
  const onError2 = args2.length === 1 ? args2[0].onError : args2[1];
  const releaseLockOnEnd = args2.length === 1 ? args2[0].releaseLockOnEnd === true : false;
  return unwrapScoped$1(map$5(acquireRelease(sync$3(() => evaluate2().getReader()), (reader) => releaseLockOnEnd ? sync$3(() => reader.releaseLock()) : promise(() => reader.cancel())), (reader) => repeatEffectOption(flatMap$4(tryPromise({
    try: () => reader.read(),
    catch: (reason) => some(onError2(reason))
  }), ({
    done: done2,
    value: value2
  }) => done2 ? fail$6(none$4()) : succeed$5(value2)))));
};
const make$h = (...as2) => fromIterable$1(as2);
const map$2 = /* @__PURE__ */ dual(2, (self2, f) => new StreamImpl(pipe(toChannel$2(self2), mapOut(map$d(f)))));
const mapChunks = /* @__PURE__ */ dual(2, (self2, f) => new StreamImpl(pipe(toChannel$2(self2), mapOut(f))));
const mapChunksEffect$1 = /* @__PURE__ */ dual(2, (self2, f) => new StreamImpl(pipe(toChannel$2(self2), mapOutEffect(f))));
const mapEffectSequential = /* @__PURE__ */ dual(2, (self2, f) => {
  const loop = (iterator) => {
    const next = iterator.next();
    if (next.done) {
      return readWithCause({
        onInput: (elem) => loop(elem[Symbol.iterator]()),
        onFailure: failCause$3,
        onDone: succeed$3
      });
    } else {
      const value2 = next.value;
      return unwrap$2(map$5(f(value2), (a2) => flatMap$3(write(of$2(a2)), () => loop(iterator))));
    }
  };
  return new StreamImpl(pipe(toChannel$2(self2), pipeTo(suspend$4(() => loop(empty$r()[Symbol.iterator]())))));
});
const mapEffectPar = /* @__PURE__ */ dual(3, (self2, n, f) => new StreamImpl(pipe(toChannel$2(self2), concatMap(writeChunk), mapOutEffectPar(f, n), mapOut(of$2))));
const mapError$2 = /* @__PURE__ */ dual(2, (self2, f) => new StreamImpl(pipe(toChannel$2(self2), mapError$3(f))));
const merge$2 = /* @__PURE__ */ dual((args2) => isStream(args2[1]), (self2, that, options2) => mergeWith(self2, that, {
  onSelf: identity,
  onOther: identity,
  haltStrategy: options2 == null ? void 0 : options2.haltStrategy
}));
const mergeWith = /* @__PURE__ */ dual(3, (self2, other, options2) => {
  const strategy = options2.haltStrategy ? fromInput$2(options2.haltStrategy) : Both;
  const handler = (terminate) => (exit2) => terminate || !isSuccess$1(exit2) ? (
    // TODO: remove
    Done2(suspend$5(() => exit2))
  ) : Await((exit3) => suspend$5(() => exit3));
  return new StreamImpl(mergeWith$1(toChannel$2(map$2(self2, options2.onSelf)), {
    other: toChannel$2(map$2(other, options2.onOther)),
    onSelfDone: handler(strategy._tag === "Either" || strategy._tag === "Left"),
    onOtherDone: handler(strategy._tag === "Either" || strategy._tag === "Right")
  }));
});
const provideContext$1 = /* @__PURE__ */ dual(2, (self2, context2) => new StreamImpl(pipe(toChannel$2(self2), provideContext$2(context2))));
const repeatEffectChunkOption = (effect2) => unfoldChunkEffect(effect2, (effect3) => pipe(map$5(effect3, (chunk2) => some([chunk2, effect3])), catchAll$3(match$8({
  onNone: () => succeed$5(none$4()),
  onSome: fail$6
}))));
const repeatEffectOption = (effect2) => repeatEffectChunkOption(pipe(effect2, map$5(of$2)));
const run$1 = /* @__PURE__ */ dual(2, (self2, sink) => toChannel$2(self2).pipe(pipeToOrFail(toChannel$3(sink)), runDrain$2));
const runCollect$1 = (self2) => run$1(self2, collectAll());
const runDrain$1 = (self2) => run$1(self2, drain);
const runForEachChunk$1 = /* @__PURE__ */ dual(2, (self2, f) => run$1(self2, forEachChunk(f)));
const scoped = (effect2) => new StreamImpl(ensuring$3(scoped$1(pipe(effect2, map$5(of$2))), _void));
const scopedWith = (f) => new StreamImpl(scopedWith$1((scope2) => f(scope2).pipe(map$5(of$2))));
const suspend$2 = (stream) => new StreamImpl(suspend$4(() => toChannel$2(stream())));
const take$1 = /* @__PURE__ */ dual(2, (self2, n) => {
  if (!Number.isInteger(n)) {
    return die(new IllegalArgumentException(`${n} must be an integer`));
  }
  const loop = (n2) => readWith({
    onInput: (input) => {
      const taken = pipe(input, take$6(Math.min(n2, Number.POSITIVE_INFINITY)));
      const leftover = Math.max(0, n2 - taken.length);
      const more = leftover > 0;
      if (more) {
        return pipe(write(taken), flatMap$3(() => loop(leftover)));
      }
      return write(taken);
    },
    onFailure: fail$5,
    onDone: succeed$3
  });
  return new StreamImpl(pipe(toChannel$2(self2), pipeToOrFail(0 < n ? loop(n) : void_$1)));
});
const tap$1 = /* @__PURE__ */ dual(2, (self2, f) => mapEffectSequential(self2, (a) => as(f(a), a)));
const toReadableStreamEffect$1 = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self2, options2) => map$5(runtime(), (runtime2) => toReadableStreamRuntime(self2, runtime2, options2)));
const toReadableStreamRuntime = /* @__PURE__ */ dual((args2) => isStream(args2[0]), (self2, runtime2, options2) => {
  const runFork$12 = runFork(runtime2);
  let currentResolve = void 0;
  let fiber = void 0;
  const latch = unsafeMakeLatch(false);
  return new ReadableStream({
    start(controller) {
      fiber = runFork$12(runForEachChunk$1(self2, (chunk2) => latch.whenOpen(sync$3(() => {
        latch.unsafeClose();
        for (const item of chunk2) {
          controller.enqueue(item);
        }
        currentResolve();
        currentResolve = void 0;
      }))));
      fiber.addObserver((exit2) => {
        if (exit2._tag === "Failure") {
          controller.error(squash(exit2.cause));
        } else {
          controller.close();
        }
      });
    },
    pull() {
      return new Promise((resolve) => {
        currentResolve = resolve;
        runSync(latch.open);
      });
    },
    cancel() {
      if (!fiber) return;
      return runPromise(asVoid(interrupt$2(fiber)));
    }
  }, options2 == null ? void 0 : options2.strategy);
});
const unfoldChunkEffect = (s, f) => suspend$2(() => {
  const loop = (s2) => unwrap$2(map$5(f(s2), match$8({
    onNone: () => void_$1,
    onSome: ([chunk2, s3]) => flatMap$3(write(chunk2), () => loop(s3))
  })));
  return new StreamImpl(loop(s));
});
const unwrap$1 = (effect2) => flatten$1(fromEffect(effect2));
const unwrapScoped$1 = (effect2) => flatten$1(scoped(effect2));
const unwrapScopedWith = (f) => flatten$1(scopedWith((scope2) => f(scope2)));
const withSpan$1 = function() {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options2 = addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self2 = arguments[0];
    return new StreamImpl(withSpan$2(toChannel$2(self2), name, options2));
  }
  return (self2) => new StreamImpl(withSpan$2(toChannel$2(self2), name, options2));
};
const fromEventListener$1 = (target, type, options2) => asyncPush((emit) => acquireRelease(sync$3(() => target.addEventListener(type, emit.single, options2)), () => sync$3(() => target.removeEventListener(type, emit.single, options2))), {
  bufferSize: typeof options2 === "object" ? options2.bufferSize : void 0
});
const acquireUseRelease = acquireUseRelease$1;
const RedactedSymbolKey = "effect/Redacted";
const redactedRegistry = /* @__PURE__ */ globalValue("effect/Redacted/redactedRegistry", () => /* @__PURE__ */ new WeakMap());
const RedactedTypeId = /* @__PURE__ */ Symbol.for(RedactedSymbolKey);
const proto = {
  [RedactedTypeId]: {
    _A: (_) => _
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toString() {
    return "<redacted>";
  },
  toJSON() {
    return "<redacted>";
  },
  [NodeInspectSymbol]() {
    return "<redacted>";
  },
  [symbol$1]() {
    return pipe(hash(RedactedSymbolKey), combine$7(hash(redactedRegistry.get(this))), cached$1(this));
  },
  [symbol](that) {
    return isRedacted(that) && equals$1(redactedRegistry.get(this), redactedRegistry.get(that));
  }
};
const isRedacted = (u) => hasProperty(u, RedactedTypeId);
const make$g = (value2) => {
  const redacted = Object.create(proto);
  redactedRegistry.set(redacted, value2);
  return redacted;
};
const DecodeExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Encoding/errors/Decode");
const DecodeException = (input, message) => {
  const out = {
    _tag: "DecodeException",
    [DecodeExceptionTypeId]: DecodeExceptionTypeId,
    input
  };
  if (isString(message)) {
    out.message = message;
  }
  return out;
};
const encoder = /* @__PURE__ */ new TextEncoder();
const encode$2 = (bytes) => {
  const length2 = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < length2; i += 3) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += base64abc[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += base64abc[bytes[i] & 63];
  }
  if (i === length2 + 1) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === length2) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += base64abc[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
};
const decode$2 = (str) => {
  const stripped = stripCrlf(str);
  const length2 = stripped.length;
  if (length2 % 4 !== 0) {
    return left(DecodeException(stripped, `Length must be a multiple of 4, but is ${length2}`));
  }
  const index = stripped.indexOf("=");
  if (index !== -1 && (index < length2 - 2 || index === length2 - 2 && stripped[length2 - 1] !== "=")) {
    return left(DecodeException(stripped, "Found a '=' character, but it is not at the end"));
  }
  try {
    const missingOctets = stripped.endsWith("==") ? 2 : stripped.endsWith("=") ? 1 : 0;
    const result = new Uint8Array(3 * (length2 / 4) - missingOctets);
    for (let i = 0, j = 0; i < length2; i += 4, j += 3) {
      const buffer = getBase64Code(stripped.charCodeAt(i)) << 18 | getBase64Code(stripped.charCodeAt(i + 1)) << 12 | getBase64Code(stripped.charCodeAt(i + 2)) << 6 | getBase64Code(stripped.charCodeAt(i + 3));
      result[j] = buffer >> 16;
      result[j + 1] = buffer >> 8 & 255;
      result[j + 2] = buffer & 255;
    }
    return right(result);
  } catch (e) {
    return left(DecodeException(stripped, e instanceof Error ? e.message : "Invalid input"));
  }
};
const stripCrlf = (str) => str.replace(/[\n\r]/g, "");
function getBase64Code(charCode) {
  if (charCode >= base64codes.length) {
    throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
  }
  const code = base64codes[charCode];
  if (code === 255) {
    throw new TypeError(`Invalid character ${String.fromCharCode(charCode)}`);
  }
  return code;
}
const base64abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
const base64codes = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
const encodeBase64 = (input) => typeof input === "string" ? encode$2(encoder.encode(input)) : encode$2(input);
const decodeBase64 = (str) => decode$2(str);
const TypeId$e = /* @__PURE__ */ Symbol.for("effect/FiberHandle");
const isFiberHandle = (u) => hasProperty(u, TypeId$e);
const Proto$4 = {
  [TypeId$e]: TypeId$e,
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberHandle",
      state: this.state
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const unsafeMake$1 = (deferred) => {
  const self2 = Object.create(Proto$4);
  self2.state = {
    _tag: "Open",
    fiber: void 0
  };
  self2.deferred = deferred;
  return self2;
};
const make$f = () => acquireRelease(map$5(make$H(), (deferred) => unsafeMake$1(deferred)), (handle) => withFiberRuntime((parent) => {
  const state = handle.state;
  if (state._tag === "Closed") return _void;
  handle.state = {
    _tag: "Closed"
  };
  return state.fiber ? intoDeferred(asVoid(interruptAs$1(state.fiber, combine$5(parent.id(), internalFiberId$1))), handle.deferred) : done$7(handle.deferred, void_$3);
}));
const internalFiberIdId$1 = -1;
const internalFiberId$1 = /* @__PURE__ */ make$L(internalFiberIdId$1, 0);
const isInternalInterruption$1 = /* @__PURE__ */ reduceWithContext(void 0, {
  emptyCase: constFalse,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: (_, fiberId2) => has$1(ids(fiberId2), internalFiberIdId$1),
  sequentialCase: (_, left2, right2) => left2 || right2,
  parallelCase: (_, left2, right2) => left2 || right2
});
const unsafeSet = /* @__PURE__ */ dual((args2) => isFiberHandle(args2[0]), (self2, fiber, options2) => {
  if (self2.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(combine$5((options2 == null ? void 0 : options2.interruptAs) ?? none$2, internalFiberId$1));
    return;
  } else if (self2.state.fiber !== void 0) {
    if ((options2 == null ? void 0 : options2.onlyIfMissing) === true) {
      fiber.unsafeInterruptAsFork(combine$5((options2 == null ? void 0 : options2.interruptAs) ?? none$2, internalFiberId$1));
      return;
    } else if (self2.state.fiber === fiber) {
      return;
    }
    self2.state.fiber.unsafeInterruptAsFork(combine$5((options2 == null ? void 0 : options2.interruptAs) ?? none$2, internalFiberId$1));
    self2.state.fiber = void 0;
  }
  self2.state.fiber = fiber;
  fiber.addObserver((exit2) => {
    if (self2.state._tag === "Open" && fiber === self2.state.fiber) {
      self2.state.fiber = void 0;
    }
    if (isFailure(exit2) && ((options2 == null ? void 0 : options2.propagateInterruption) === true ? !isInternalInterruption$1(exit2.cause) : !isInterruptedOnly(exit2.cause))) {
      unsafeDone(self2.deferred, exit2);
    }
  });
});
const constInterruptedFiber = /* @__PURE__ */ function() {
  let fiber = void 0;
  return () => {
    if (fiber === void 0) {
      fiber = runFork$1(interrupt$1);
    }
    return fiber;
  };
}();
const run = function() {
  const self2 = arguments[0];
  if (isEffect(arguments[1])) {
    return runImpl(self2, arguments[1], arguments[2]);
  }
  const options2 = arguments[1];
  return (effect2) => runImpl(self2, effect2, options2);
};
const runImpl = (self2, effect2, options2) => fiberIdWith((fiberId2) => {
  if (self2.state._tag === "Closed") {
    return interrupt$1;
  } else if (self2.state.fiber !== void 0 && (options2 == null ? void 0 : options2.onlyIfMissing) === true) {
    return sync$3(constInterruptedFiber);
  }
  return tap$2(forkDaemon(effect2), (fiber) => unsafeSet(self2, fiber, {
    ...options2,
    interruptAs: fiberId2
  }));
});
const TypeId$d = /* @__PURE__ */ Symbol.for("effect/FiberSet");
const isFiberSet = (u) => hasProperty(u, TypeId$d);
const Proto$3 = {
  [TypeId$d]: TypeId$d,
  [Symbol.iterator]() {
    if (this.state._tag === "Closed") {
      return empty$v();
    }
    return this.state.backing[Symbol.iterator]();
  },
  toString() {
    return format$3(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberMap",
      state: this.state
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const unsafeMake = (backing, deferred) => {
  const self2 = Object.create(Proto$3);
  self2.state = {
    _tag: "Open",
    backing
  };
  self2.deferred = deferred;
  return self2;
};
const make$e = () => acquireRelease(map$5(make$H(), (deferred) => unsafeMake(/* @__PURE__ */ new Set(), deferred)), (set2) => withFiberRuntime((parent) => {
  const state = set2.state;
  if (state._tag === "Closed") return _void;
  set2.state = {
    _tag: "Closed"
  };
  const fibers = state.backing;
  return interruptAllAs(fibers, combine$5(parent.id(), internalFiberId)).pipe(intoDeferred(set2.deferred));
}));
const internalFiberIdId = -1;
const internalFiberId = /* @__PURE__ */ make$L(internalFiberIdId, 0);
const isInternalInterruption = /* @__PURE__ */ reduceWithContext(void 0, {
  emptyCase: constFalse,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: (_, fiberId2) => has$1(ids(fiberId2), internalFiberIdId),
  sequentialCase: (_, left2, right2) => left2 || right2,
  parallelCase: (_, left2, right2) => left2 || right2
});
const unsafeAdd = /* @__PURE__ */ dual((args2) => isFiberSet(args2[0]), (self2, fiber, options2) => {
  if (self2.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(combine$5((options2 == null ? void 0 : options2.interruptAs) ?? none$2, internalFiberId));
    return;
  } else if (self2.state.backing.has(fiber)) {
    return;
  }
  self2.state.backing.add(fiber);
  fiber.addObserver((exit2) => {
    if (self2.state._tag === "Closed") {
      return;
    }
    self2.state.backing.delete(fiber);
    if (isFailure(exit2) && ((options2 == null ? void 0 : options2.propagateInterruption) === true ? !isInternalInterruption(exit2.cause) : !isInterruptedOnly(exit2.cause))) {
      unsafeDone(self2.deferred, exit2);
    }
  });
});
const join = (self2) => _await$2(self2.deferred);
const GroupBySymbolKey = "effect/GroupBy";
const GroupByTypeId = /* @__PURE__ */ Symbol.for(GroupBySymbolKey);
const groupByVariance = {
  /* c8 ignore next */
  _R: (_) => _,
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _K: (_) => _,
  /* c8 ignore next */
  _V: (_) => _
};
const isGroupBy = (u) => hasProperty(u, GroupByTypeId);
const evaluate = /* @__PURE__ */ dual((args2) => isGroupBy(args2[0]), (self2, f, options2) => flatMap$1(self2.grouped, ([key, queue]) => f(key, flattenTake(fromQueue$1(queue, {
  shutdown: true
}))), {
  concurrency: "unbounded",
  bufferSize: (options2 == null ? void 0 : options2.bufferSize) ?? 16
}));
const make$d = (grouped) => ({
  [GroupByTypeId]: groupByVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  grouped
});
const mapEffectOptions = /* @__PURE__ */ dual((args2) => typeof args2[0] !== "function", (self2, f, options2) => {
  if (options2 == null ? void 0 : options2.key) {
    return evaluate(groupByKey(self2, options2.key, {
      bufferSize: options2.bufferSize
    }), (_, s) => mapEffectSequential(s, f));
  }
  return matchConcurrency(options2 == null ? void 0 : options2.concurrency, () => mapEffectSequential(self2, f), (n) => (options2 == null ? void 0 : options2.unordered) ? flatMap$1(self2, (a) => fromEffect(f(a)), {
    concurrency: n
  }) : mapEffectPar(self2, n, f));
});
const groupByKey = /* @__PURE__ */ dual((args2) => typeof args2[0] !== "function", (self2, f, options2) => {
  const loop = (map2, outerQueue) => readWithCause({
    onInput: (input) => flatMap$3(fromEffect$3(forEach(groupByIterable(input, f), ([key, values]) => {
      const innerQueue = map2.get(key);
      if (innerQueue === void 0) {
        return pipe(bounded((options2 == null ? void 0 : options2.bufferSize) ?? 16), flatMap$4((innerQueue2) => pipe(sync$3(() => {
          map2.set(key, innerQueue2);
        }), zipRight$2(offer$2(outerQueue, of([key, innerQueue2]))), zipRight$2(pipe(offer$2(innerQueue2, chunk(values)), catchSomeCause((cause) => isInterruptedOnly(cause) ? some(_void) : none$4()))))));
      }
      return catchSomeCause(offer$2(innerQueue, chunk(values)), (cause) => isInterruptedOnly(cause) ? some(_void) : none$4());
    }, {
      discard: true
    })), () => loop(map2, outerQueue)),
    onFailure: (cause) => fromEffect$3(offer$2(outerQueue, failCause$2(cause))),
    onDone: () => pipe(fromEffect$3(pipe(forEach(map2.entries(), ([_, innerQueue]) => pipe(offer$2(innerQueue, end$1), catchSomeCause((cause) => isInterruptedOnly(cause) ? some(_void) : none$4())), {
      discard: true
    }), zipRight$2(offer$2(outerQueue, end$1)))))
  });
  return make$d(unwrapScopedWith((scope2) => gen(function* () {
    const map2 = /* @__PURE__ */ new Map();
    const queue = yield* unbounded$2();
    yield* addFinalizer$1(scope2, shutdown(queue));
    return yield* toChannel$2(self2).pipe(pipeTo(loop(map2, queue)), drain$1, runIn(scope2), forkIn(scope2), as(flattenTake(fromQueue$1(queue, {
      shutdown: true
    }))));
  })));
});
const groupByIterable = /* @__PURE__ */ dual(2, (iterable, f) => {
  const builder = [];
  const iterator = iterable[Symbol.iterator]();
  const map2 = /* @__PURE__ */ new Map();
  let next;
  while ((next = iterator.next()) && !next.done) {
    const value2 = next.value;
    const key = f(value2);
    if (map2.has(key)) {
      const innerBuilder = map2.get(key);
      innerBuilder.push(value2);
    } else {
      const innerBuilder = [value2];
      builder.push([key, innerBuilder]);
      map2.set(key, innerBuilder);
    }
  }
  return unsafeFromArray(builder.map((tuple) => [tuple[0], unsafeFromArray(tuple[1])]));
});
class Pointer {
  constructor(path, actual, issue) {
    __publicField(this, "path");
    __publicField(this, "actual");
    __publicField(this, "issue");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Pointer");
    this.path = path;
    this.actual = actual;
    this.issue = issue;
  }
}
class Unexpected {
  constructor(actual, message) {
    __publicField(this, "actual");
    __publicField(this, "message");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Unexpected");
    this.actual = actual;
    this.message = message;
  }
}
class Missing {
  constructor(ast, message) {
    __publicField(this, "ast");
    __publicField(this, "message");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Missing");
    /**
     * @since 3.10.0
     */
    __publicField(this, "actual");
    this.ast = ast;
    this.message = message;
  }
}
class Composite2 {
  constructor(ast, actual, issues, output) {
    __publicField(this, "ast");
    __publicField(this, "actual");
    __publicField(this, "issues");
    __publicField(this, "output");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Composite");
    this.ast = ast;
    this.actual = actual;
    this.issues = issues;
    this.output = output;
  }
}
class Refinement2 {
  constructor(ast, actual, kind, issue) {
    __publicField(this, "ast");
    __publicField(this, "actual");
    __publicField(this, "kind");
    __publicField(this, "issue");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Refinement");
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.issue = issue;
  }
}
class Transformation2 {
  constructor(ast, actual, kind, issue) {
    __publicField(this, "ast");
    __publicField(this, "actual");
    __publicField(this, "kind");
    __publicField(this, "issue");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Transformation");
    this.ast = ast;
    this.actual = actual;
    this.kind = kind;
    this.issue = issue;
  }
}
class Type2 {
  constructor(ast, actual, message) {
    __publicField(this, "ast");
    __publicField(this, "actual");
    __publicField(this, "message");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Type");
    this.ast = ast;
    this.actual = actual;
    this.message = message;
  }
}
class Forbidden {
  constructor(ast, actual, message) {
    __publicField(this, "ast");
    __publicField(this, "actual");
    __publicField(this, "message");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "Forbidden");
    this.ast = ast;
    this.actual = actual;
    this.message = message;
  }
}
const ParseErrorTypeId = /* @__PURE__ */ Symbol.for("effect/Schema/ParseErrorTypeId");
const isParseError = (u) => hasProperty(u, ParseErrorTypeId);
class ParseError extends (/* @__PURE__ */ TaggedError$1("ParseError")) {
  constructor() {
    super(...arguments);
    /**
     * @since 3.10.0
     */
    __publicField(this, _za, ParseErrorTypeId);
  }
  get message() {
    return this.toString();
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return TreeFormatter.formatIssueSync(this.issue);
  }
  /**
   * @since 3.10.0
   */
  toJSON() {
    return {
      _id: "ParseError",
      message: this.toString()
    };
  }
  /**
   * @since 3.10.0
   */
  [(_za = ParseErrorTypeId, NodeInspectSymbol)]() {
    return this.toJSON();
  }
}
const parseError = (issue) => new ParseError({
  issue
});
const succeed = right;
const fail$1 = left;
const isEither = isEither$1;
const flatMap = /* @__PURE__ */ dual(2, (self2, f) => {
  return isEither(self2) ? match$9(self2, {
    onLeft: left,
    onRight: f
  }) : flatMap$4(self2, f);
});
const map$1 = /* @__PURE__ */ dual(2, (self2, f) => {
  return isEither(self2) ? map$h(self2, f) : map$5(self2, f);
});
const mapError$1 = /* @__PURE__ */ dual(2, (self2, f) => {
  return isEither(self2) ? mapLeft(self2, f) : mapError$4(self2, f);
});
const mapBoth = /* @__PURE__ */ dual(2, (self2, options2) => {
  return isEither(self2) ? mapBoth$4(self2, {
    onLeft: options2.onFailure,
    onRight: options2.onSuccess
  }) : mapBoth$1(self2, options2);
});
const orElse = /* @__PURE__ */ dual(2, (self2, f) => {
  return isEither(self2) ? match$9(self2, {
    onLeft: f,
    onRight: right
  }) : catchAll$3(self2, f);
});
const mergeInternalOptions = (options2, overrideOptions) => {
  if (overrideOptions === void 0 || isNumber(overrideOptions)) {
    return options2;
  }
  if (options2 === void 0) {
    return overrideOptions;
  }
  return {
    ...options2,
    ...overrideOptions
  };
};
const getEither = (ast, isDecoding, options2) => {
  const parser = goMemo(ast, isDecoding);
  return (u, overrideOptions) => parser(u, mergeInternalOptions(options2, overrideOptions));
};
const getSync = (ast, isDecoding, options2) => {
  const parser = getEither(ast, isDecoding, options2);
  return (input, overrideOptions) => getOrThrowWith(parser(input, overrideOptions), parseError);
};
const getEffect = (ast, isDecoding, options2) => {
  const parser = goMemo(ast, isDecoding);
  return (input, overrideOptions) => parser(input, {
    ...mergeInternalOptions(options2, overrideOptions),
    isEffectAllowed: true
  });
};
const decodeUnknownSync = (schema2, options2) => getSync(schema2.ast, true, options2);
const decodeUnknownEither$1 = (schema2, options2) => getEither(schema2.ast, true, options2);
const decodeUnknown$1 = (schema2, options2) => getEffect(schema2.ast, true, options2);
const encodeUnknownSync = (schema2, options2) => getSync(schema2.ast, false, options2);
const encodeUnknown$1 = (schema2, options2) => getEffect(schema2.ast, false, options2);
const decodeSync = decodeUnknownSync;
const decode$1 = decodeUnknown$1;
const validateSync = (schema2, options2) => getSync(typeAST(schema2.ast), true, options2);
const is = (schema2, options2) => {
  const parser = goMemo(typeAST(schema2.ast), true);
  return (u, overrideOptions) => isRight(parser(u, {
    exact: true,
    ...mergeInternalOptions(options2, overrideOptions)
  }));
};
const encodeSync = encodeUnknownSync;
const encode$1 = encodeUnknown$1;
const decodeMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/ParseResult/decodeMemoMap"), () => /* @__PURE__ */ new WeakMap());
const encodeMemoMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/ParseResult/encodeMemoMap"), () => /* @__PURE__ */ new WeakMap());
const goMemo = (ast, isDecoding) => {
  const memoMap = isDecoding ? decodeMemoMap : encodeMemoMap;
  const memo = memoMap.get(ast);
  if (memo) {
    return memo;
  }
  const raw = go$1(ast, isDecoding);
  const parseOptionsAnnotation = getParseOptionsAnnotation(ast);
  const parserWithOptions = isSome(parseOptionsAnnotation) ? (i, options2) => raw(i, mergeInternalOptions(options2, parseOptionsAnnotation.value)) : raw;
  const decodingFallbackAnnotation = getDecodingFallbackAnnotation(ast);
  const parser = isDecoding && isSome(decodingFallbackAnnotation) ? (i, options2) => handleForbidden(orElse(parserWithOptions(i, options2), decodingFallbackAnnotation.value), ast, i, options2) : parserWithOptions;
  memoMap.set(ast, parser);
  return parser;
};
const getConcurrency = (ast) => getOrUndefined(getConcurrencyAnnotation(ast));
const getBatching = (ast) => getOrUndefined(getBatchingAnnotation(ast));
const go$1 = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Refinement": {
      if (isDecoding) {
        const from = goMemo(ast.from, true);
        return (i, options2) => {
          options2 = options2 ?? defaultParseOption;
          const allErrors = (options2 == null ? void 0 : options2.errors) === "all";
          const result = flatMap(orElse(from(i, options2), (ef) => {
            const issue = new Refinement2(ast, i, "From", ef);
            if (allErrors && hasStableFilter(ast) && isComposite(ef)) {
              return match$8(ast.filter(i, options2, ast), {
                onNone: () => left(issue),
                onSome: (ep) => left(new Composite2(ast, i, [issue, new Refinement2(ast, i, "Predicate", ep)]))
              });
            }
            return left(issue);
          }), (a) => match$8(ast.filter(a, options2, ast), {
            onNone: () => right(a),
            onSome: (ep) => left(new Refinement2(ast, i, "Predicate", ep))
          }));
          return handleForbidden(result, ast, i, options2);
        };
      } else {
        const from = goMemo(typeAST(ast), true);
        const to = goMemo(dropRightRefinement(ast.from), false);
        return (i, options2) => handleForbidden(flatMap(from(i, options2), (a) => to(a, options2)), ast, i, options2);
      }
    }
    case "Transformation": {
      const transform2 = getFinalTransformation(ast.transformation, isDecoding);
      const from = isDecoding ? goMemo(ast.from, true) : goMemo(ast.to, false);
      const to = isDecoding ? goMemo(ast.to, true) : goMemo(ast.from, false);
      return (i, options2) => handleForbidden(flatMap(mapError$1(from(i, options2), (e) => new Transformation2(ast, i, isDecoding ? "Encoded" : "Type", e)), (a) => flatMap(mapError$1(transform2(a, options2 ?? defaultParseOption, ast, i), (e) => new Transformation2(ast, i, "Transformation", e)), (i2) => mapError$1(to(i2, options2), (e) => new Transformation2(ast, i, isDecoding ? "Type" : "Encoded", e)))), ast, i, options2);
    }
    case "Declaration": {
      const parse = isDecoding ? ast.decodeUnknown(...ast.typeParameters) : ast.encodeUnknown(...ast.typeParameters);
      return (i, options2) => handleForbidden(parse(i, options2 ?? defaultParseOption, ast), ast, i, options2);
    }
    case "Literal":
      return fromRefinement(ast, (u) => u === ast.literal);
    case "UniqueSymbol":
      return fromRefinement(ast, (u) => u === ast.symbol);
    case "UndefinedKeyword":
      return fromRefinement(ast, isUndefined);
    case "NeverKeyword":
      return fromRefinement(ast, isNever);
    case "UnknownKeyword":
    case "AnyKeyword":
    case "VoidKeyword":
      return right;
    case "StringKeyword":
      return fromRefinement(ast, isString);
    case "NumberKeyword":
      return fromRefinement(ast, isNumber);
    case "BooleanKeyword":
      return fromRefinement(ast, isBoolean);
    case "BigIntKeyword":
      return fromRefinement(ast, isBigInt);
    case "SymbolKeyword":
      return fromRefinement(ast, isSymbol);
    case "ObjectKeyword":
      return fromRefinement(ast, isObject);
    case "Enums":
      return fromRefinement(ast, (u) => ast.enums.some(([_, value2]) => value2 === u));
    case "TemplateLiteral": {
      const regex = getTemplateLiteralRegExp(ast);
      return fromRefinement(ast, (u) => isString(u) && regex.test(u));
    }
    case "TupleType": {
      const elements = ast.elements.map((e) => goMemo(e.type, isDecoding));
      const rest = ast.rest.map((annotatedAST) => goMemo(annotatedAST.type, isDecoding));
      let requiredTypes = ast.elements.filter((e) => !e.isOptional);
      if (ast.rest.length > 0) {
        requiredTypes = requiredTypes.concat(ast.rest.slice(1));
      }
      const requiredLen = requiredTypes.length;
      const expectedIndexes = ast.elements.length > 0 ? ast.elements.map((_, i) => i).join(" | ") : "never";
      const concurrency = getConcurrency(ast);
      const batching = getBatching(ast);
      return (input, options2) => {
        if (!isArray(input)) {
          return left(new Type2(ast, input));
        }
        const allErrors = (options2 == null ? void 0 : options2.errors) === "all";
        const es = [];
        let stepKey = 0;
        const output = [];
        const len = input.length;
        for (let i2 = len; i2 <= requiredLen - 1; i2++) {
          const e = new Pointer(i2, input, new Missing(requiredTypes[i2 - len]));
          if (allErrors) {
            es.push([stepKey++, e]);
            continue;
          } else {
            return left(new Composite2(ast, input, e, output));
          }
        }
        if (ast.rest.length === 0) {
          for (let i2 = ast.elements.length; i2 <= len - 1; i2++) {
            const e = new Pointer(i2, input, new Unexpected(input[i2], `is unexpected, expected: ${expectedIndexes}`));
            if (allErrors) {
              es.push([stepKey++, e]);
              continue;
            } else {
              return left(new Composite2(ast, input, e, output));
            }
          }
        }
        let i = 0;
        let queue = void 0;
        for (; i < elements.length; i++) {
          if (len < i + 1) {
            if (ast.elements[i].isOptional) {
              continue;
            }
          } else {
            const parser = elements[i];
            const te = parser(input[i], options2);
            if (isEither(te)) {
              if (isLeft(te)) {
                const e = new Pointer(i, input, te.left);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left(new Composite2(ast, input, e, sortByIndex(output)));
                }
              }
              output.push([stepKey++, te.right]);
            } else {
              const nk = stepKey++;
              const index = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap$4(either$1(te), (t) => {
                if (isLeft(t)) {
                  const e = new Pointer(index, input, t.left);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return _void;
                  } else {
                    return left(new Composite2(ast, input, e, sortByIndex(output2)));
                  }
                }
                output2.push([nk, t.right]);
                return _void;
              }));
            }
          }
        }
        if (isNonEmptyReadonlyArray(rest)) {
          const [head2, ...tail] = rest;
          for (; i < len - tail.length; i++) {
            const te = head2(input[i], options2);
            if (isEither(te)) {
              if (isLeft(te)) {
                const e = new Pointer(i, input, te.left);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left(new Composite2(ast, input, e, sortByIndex(output)));
                }
              } else {
                output.push([stepKey++, te.right]);
              }
            } else {
              const nk = stepKey++;
              const index = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap$4(either$1(te), (t) => {
                if (isLeft(t)) {
                  const e = new Pointer(index, input, t.left);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return _void;
                  } else {
                    return left(new Composite2(ast, input, e, sortByIndex(output2)));
                  }
                } else {
                  output2.push([nk, t.right]);
                  return _void;
                }
              }));
            }
          }
          for (let j = 0; j < tail.length; j++) {
            i += j;
            if (len < i + 1) {
              continue;
            } else {
              const te = tail[j](input[i], options2);
              if (isEither(te)) {
                if (isLeft(te)) {
                  const e = new Pointer(i, input, te.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return left(new Composite2(ast, input, e, sortByIndex(output)));
                  }
                }
                output.push([stepKey++, te.right]);
              } else {
                const nk = stepKey++;
                const index = i;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap$4(either$1(te), (t) => {
                  if (isLeft(t)) {
                    const e = new Pointer(index, input, t.left);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return _void;
                    } else {
                      return left(new Composite2(ast, input, e, sortByIndex(output2)));
                    }
                  }
                  output2.push([nk, t.right]);
                  return _void;
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => isNonEmptyArray(es2) ? left(new Composite2(ast, input, sortByIndex(es2), sortByIndex(output2))) : right(sortByIndex(output2));
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend$5(() => {
            const state = {
              es: copy$1(es),
              output: copy$1(output)
            };
            return flatMap$4(forEach(cqueue, (f) => f(state), {
              concurrency,
              batching,
              discard: true
            }), () => computeResult(state));
          });
        }
        return computeResult({
          output,
          es
        });
      };
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return fromRefinement(ast, isNotNullable);
      }
      const propertySignatures = [];
      const expectedKeysMap = {};
      const expectedKeys = [];
      for (const ps of ast.propertySignatures) {
        propertySignatures.push([goMemo(ps.type, isDecoding), ps]);
        expectedKeysMap[ps.name] = null;
        expectedKeys.push(ps.name);
      }
      const indexSignatures = ast.indexSignatures.map((is2) => [goMemo(is2.parameter, isDecoding), goMemo(is2.type, isDecoding), is2.parameter]);
      const expectedAST = Union$1.make(ast.indexSignatures.map((is2) => is2.parameter).concat(expectedKeys.map((key) => isSymbol(key) ? new UniqueSymbol(key) : new Literal$1(key))));
      const expected = goMemo(expectedAST, isDecoding);
      const concurrency = getConcurrency(ast);
      const batching = getBatching(ast);
      return (input, options2) => {
        if (!isRecord(input)) {
          return left(new Type2(ast, input));
        }
        const allErrors = (options2 == null ? void 0 : options2.errors) === "all";
        const es = [];
        let stepKey = 0;
        const onExcessPropertyError = (options2 == null ? void 0 : options2.onExcessProperty) === "error";
        const onExcessPropertyPreserve = (options2 == null ? void 0 : options2.onExcessProperty) === "preserve";
        const output = {};
        let inputKeys;
        if (onExcessPropertyError || onExcessPropertyPreserve) {
          inputKeys = ownKeys(input);
          for (const key of inputKeys) {
            const te = expected(key, options2);
            if (isEither(te) && isLeft(te)) {
              if (onExcessPropertyError) {
                const e = new Pointer(key, input, new Unexpected(input[key], `is unexpected, expected: ${String(expectedAST)}`));
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return left(new Composite2(ast, input, e, output));
                }
              } else {
                output[key] = input[key];
              }
            }
          }
        }
        let queue = void 0;
        const isExact = (options2 == null ? void 0 : options2.exact) === true;
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = propertySignatures[i][1];
          const name = ps.name;
          const hasKey = Object.prototype.hasOwnProperty.call(input, name);
          if (!hasKey) {
            if (ps.isOptional) {
              continue;
            } else if (isExact) {
              const e = new Pointer(name, input, new Missing(ps));
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return left(new Composite2(ast, input, e, output));
              }
            }
          }
          const parser = propertySignatures[i][0];
          const te = parser(input[name], options2);
          if (isEither(te)) {
            if (isLeft(te)) {
              const e = new Pointer(name, input, hasKey ? te.left : new Missing(ps));
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return left(new Composite2(ast, input, e, output));
              }
            }
            output[name] = te.right;
          } else {
            const nk = stepKey++;
            const index = name;
            if (!queue) {
              queue = [];
            }
            queue.push(({
              es: es2,
              output: output2
            }) => flatMap$4(either$1(te), (t) => {
              if (isLeft(t)) {
                const e = new Pointer(index, input, hasKey ? t.left : new Missing(ps));
                if (allErrors) {
                  es2.push([nk, e]);
                  return _void;
                } else {
                  return left(new Composite2(ast, input, e, output2));
                }
              }
              output2[index] = t.right;
              return _void;
            }));
          }
        }
        for (let i = 0; i < indexSignatures.length; i++) {
          const indexSignature = indexSignatures[i];
          const parameter = indexSignature[0];
          const type = indexSignature[1];
          const keys2 = getKeysForIndexSignature(input, indexSignature[2]);
          for (const key of keys2) {
            const keu = parameter(key, options2);
            if (isEither(keu) && isRight(keu)) {
              const vpr = type(input[key], options2);
              if (isEither(vpr)) {
                if (isLeft(vpr)) {
                  const e = new Pointer(key, input, vpr.left);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return left(new Composite2(ast, input, e, output));
                  }
                } else {
                  if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                    output[key] = vpr.right;
                  }
                }
              } else {
                const nk = stepKey++;
                const index = key;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap$4(either$1(vpr), (tv) => {
                  if (isLeft(tv)) {
                    const e = new Pointer(index, input, tv.left);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return _void;
                    } else {
                      return left(new Composite2(ast, input, e, output2));
                    }
                  } else {
                    if (!Object.prototype.hasOwnProperty.call(expectedKeysMap, key)) {
                      output2[key] = tv.right;
                    }
                    return _void;
                  }
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => {
          if (isNonEmptyArray(es2)) {
            return left(new Composite2(ast, input, sortByIndex(es2), output2));
          }
          if ((options2 == null ? void 0 : options2.propertyOrder) === "original") {
            const keys2 = inputKeys || ownKeys(input);
            for (const name of expectedKeys) {
              if (keys2.indexOf(name) === -1) {
                keys2.push(name);
              }
            }
            const out = {};
            for (const key of keys2) {
              if (Object.prototype.hasOwnProperty.call(output2, key)) {
                out[key] = output2[key];
              }
            }
            return right(out);
          }
          return right(output2);
        };
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend$5(() => {
            const state = {
              es: copy$1(es),
              output: Object.assign({}, output)
            };
            return flatMap$4(forEach(cqueue, (f) => f(state), {
              concurrency,
              batching,
              discard: true
            }), () => computeResult(state));
          });
        }
        return computeResult({
          es,
          output
        });
      };
    }
    case "Union": {
      const searchTree = getSearchTree(ast.types, isDecoding);
      const ownKeys$1 = ownKeys(searchTree.keys);
      const ownKeysLen = ownKeys$1.length;
      const astTypesLen = ast.types.length;
      const map2 = /* @__PURE__ */ new Map();
      for (let i = 0; i < astTypesLen; i++) {
        map2.set(ast.types[i], goMemo(ast.types[i], isDecoding));
      }
      const concurrency = getConcurrency(ast) ?? 1;
      const batching = getBatching(ast);
      return (input, options2) => {
        const es = [];
        let stepKey = 0;
        let candidates = [];
        if (ownKeysLen > 0) {
          if (isRecordOrArray(input)) {
            for (let i = 0; i < ownKeysLen; i++) {
              const name = ownKeys$1[i];
              const buckets = searchTree.keys[name].buckets;
              if (Object.prototype.hasOwnProperty.call(input, name)) {
                const literal = String(input[name]);
                if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                  candidates = candidates.concat(buckets[literal]);
                } else {
                  const {
                    candidates: candidates2,
                    literals
                  } = searchTree.keys[name];
                  const literalsUnion = Union$1.make(literals);
                  const errorAst = candidates2.length === astTypesLen ? new TypeLiteral([new PropertySignature(name, literalsUnion, false, true)], []) : Union$1.make(candidates2);
                  es.push([stepKey++, new Composite2(errorAst, input, new Pointer(name, input, new Type2(literalsUnion, input[name])))]);
                }
              } else {
                const {
                  candidates: candidates2,
                  literals
                } = searchTree.keys[name];
                const fakePropertySignature = new PropertySignature(name, Union$1.make(literals), false, true);
                const errorAst = candidates2.length === astTypesLen ? new TypeLiteral([fakePropertySignature], []) : Union$1.make(candidates2);
                es.push([stepKey++, new Composite2(errorAst, input, new Pointer(name, input, new Missing(fakePropertySignature)))]);
              }
            }
          } else {
            const errorAst = searchTree.candidates.length === astTypesLen ? ast : Union$1.make(searchTree.candidates);
            es.push([stepKey++, new Type2(errorAst, input)]);
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise);
        }
        let queue = void 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          const pr = map2.get(candidate)(input, options2);
          if (isEither(pr) && (!queue || queue.length === 0)) {
            if (isRight(pr)) {
              return pr;
            } else {
              es.push([stepKey++, pr.left]);
            }
          } else {
            const nk = stepKey++;
            if (!queue) {
              queue = [];
            }
            queue.push((state) => suspend$5(() => {
              if ("finalResult" in state) {
                return _void;
              } else {
                return flatMap$4(either$1(pr), (t) => {
                  if (isRight(t)) {
                    state.finalResult = t;
                  } else {
                    state.es.push([nk, t.left]);
                  }
                  return _void;
                });
              }
            }));
          }
        }
        const computeResult = (es2) => isNonEmptyArray(es2) ? es2.length === 1 && es2[0][1]._tag === "Type" ? left(es2[0][1]) : left(new Composite2(ast, input, sortByIndex(es2))) : (
          // this should never happen
          left(new Type2(ast, input))
        );
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend$5(() => {
            const state = {
              es: copy$1(es)
            };
            return flatMap$4(forEach(cqueue, (f) => f(state), {
              concurrency,
              batching,
              discard: true
            }), () => {
              if ("finalResult" in state) {
                return state.finalResult;
              }
              return computeResult(state.es);
            });
          });
        }
        return computeResult(es);
      };
    }
    case "Suspend": {
      const get2 = memoizeThunk(() => goMemo(annotations(ast.f(), ast.annotations), isDecoding));
      return (a, options2) => get2()(a, options2);
    }
  }
};
const fromRefinement = (ast, refinement) => (u) => refinement(u) ? right(u) : left(new Type2(ast, u));
const getLiterals = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Declaration": {
      const annotation = getSurrogateAnnotation(ast);
      if (isSome(annotation)) {
        return getLiterals(annotation.value, isDecoding);
      }
      break;
    }
    case "TypeLiteral": {
      const out = [];
      for (let i = 0; i < ast.propertySignatures.length; i++) {
        const propertySignature2 = ast.propertySignatures[i];
        const type = isDecoding ? encodedAST(propertySignature2.type) : typeAST(propertySignature2.type);
        if (isLiteral(type) && !propertySignature2.isOptional) {
          out.push([propertySignature2.name, type]);
        }
      }
      return out;
    }
    case "TupleType": {
      const out = [];
      for (let i = 0; i < ast.elements.length; i++) {
        const element = ast.elements[i];
        const type = isDecoding ? encodedAST(element.type) : typeAST(element.type);
        if (isLiteral(type) && !element.isOptional) {
          out.push([i, type]);
        }
      }
      return out;
    }
    case "Refinement":
      return getLiterals(ast.from, isDecoding);
    case "Suspend":
      return getLiterals(ast.f(), isDecoding);
    case "Transformation":
      return getLiterals(isDecoding ? ast.from : ast.to, isDecoding);
  }
  return [];
};
const getSearchTree = (members, isDecoding) => {
  const keys2 = {};
  const otherwise = [];
  const candidates = [];
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const tags = getLiterals(member, isDecoding);
    if (tags.length > 0) {
      candidates.push(member);
      for (let j = 0; j < tags.length; j++) {
        const [key, literal] = tags[j];
        const hash2 = String(literal.literal);
        keys2[key] = keys2[key] || {
          buckets: {},
          literals: [],
          candidates: []
        };
        const buckets = keys2[key].buckets;
        if (Object.prototype.hasOwnProperty.call(buckets, hash2)) {
          if (j < tags.length - 1) {
            continue;
          }
          buckets[hash2].push(member);
          keys2[key].literals.push(literal);
          keys2[key].candidates.push(member);
        } else {
          buckets[hash2] = [member];
          keys2[key].literals.push(literal);
          keys2[key].candidates.push(member);
          break;
        }
      }
    } else {
      otherwise.push(member);
    }
  }
  return {
    keys: keys2,
    otherwise,
    candidates
  };
};
const dropRightRefinement = (ast) => isRefinement$1(ast) ? dropRightRefinement(ast.from) : ast;
const handleForbidden = (effect2, ast, actual, options2) => {
  if ((options2 == null ? void 0 : options2.isEffectAllowed) === true) {
    return effect2;
  }
  if (isEither(effect2)) {
    return effect2;
  }
  const scheduler = new SyncScheduler();
  const fiber = runFork$1(effect2, {
    scheduler
  });
  scheduler.flush();
  const exit2 = fiber.unsafePoll();
  if (exit2) {
    if (isSuccess$1(exit2)) {
      return right(exit2.value);
    }
    const cause = exit2.cause;
    if (isFailType(cause)) {
      return left(cause.error);
    }
    return left(new Forbidden(ast, actual, pretty(cause)));
  }
  return left(new Forbidden(ast, actual, "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"));
};
const compare = ([a], [b]) => a > b ? 1 : a < b ? -1 : 0;
function sortByIndex(es) {
  return es.sort(compare).map((t) => t[1]);
}
const getFinalTransformation = (transformation, isDecoding) => {
  switch (transformation._tag) {
    case "FinalTransformation":
      return isDecoding ? transformation.decode : transformation.encode;
    case "ComposeTransformation":
      return right;
    case "TypeLiteralTransformation":
      return (input) => {
        let out = right(input);
        for (const pst of transformation.propertySignatureTransformations) {
          const [from, to] = isDecoding ? [pst.from, pst.to] : [pst.to, pst.from];
          const transformation2 = isDecoding ? pst.decode : pst.encode;
          const f = (input2) => {
            const o = transformation2(Object.prototype.hasOwnProperty.call(input2, from) ? some(input2[from]) : none$4());
            delete input2[from];
            if (isSome(o)) {
              input2[to] = o.value;
            }
            return input2;
          };
          out = map$1(out, f);
        }
        return out;
      };
  }
};
const makeTree = (value2, forest = []) => ({
  value: value2,
  forest
});
const TreeFormatter = {
  formatIssue: (issue) => map$1(formatTree(issue), drawTree),
  formatIssueSync: (issue) => {
    const e = TreeFormatter.formatIssue(issue);
    return isEither(e) ? getOrThrow(e) : runSync(e);
  },
  formatError: (error) => TreeFormatter.formatIssue(error.issue),
  formatErrorSync: (error) => TreeFormatter.formatIssueSync(error.issue)
};
const drawTree = (tree) => tree.value + draw("\n", tree.forest);
const draw = (indentation, forest) => {
  let r = "";
  const len = forest.length;
  let tree;
  for (let i = 0; i < len; i++) {
    tree = forest[i];
    const isLast = i === len - 1;
    r += indentation + (isLast ? "└" : "├") + "─ " + tree.value;
    r += draw(indentation + (len > 1 && !isLast ? "│  " : "   "), tree.forest);
  }
  return r;
};
const formatTransformationKind = (kind) => {
  switch (kind) {
    case "Encoded":
      return "Encoded side transformation failure";
    case "Transformation":
      return "Transformation process failure";
    case "Type":
      return "Type side transformation failure";
  }
};
const formatRefinementKind = (kind) => {
  switch (kind) {
    case "From":
      return "From side refinement failure";
    case "Predicate":
      return "Predicate refinement failure";
  }
};
const getAnnotated = (issue) => "ast" in issue ? some(issue.ast) : none$4();
const Either_void = /* @__PURE__ */ right(void 0);
const getCurrentMessage = (issue) => getAnnotated(issue).pipe(flatMap$a(getMessageAnnotation), match$8({
  onNone: () => Either_void,
  onSome: (messageAnnotation) => {
    const union2 = messageAnnotation(issue);
    if (isString(union2)) {
      return right({
        message: union2,
        override: false
      });
    }
    if (isEffect(union2)) {
      return map$5(union2, (message) => ({
        message,
        override: false
      }));
    }
    if (isString(union2.message)) {
      return right({
        message: union2.message,
        override: union2.override
      });
    }
    return map$5(union2.message, (message) => ({
      message,
      override: union2.override
    }));
  }
}));
const createParseIssueGuard = (tag2) => (issue) => issue._tag === tag2;
const isComposite = /* @__PURE__ */ createParseIssueGuard("Composite");
const isRefinement = /* @__PURE__ */ createParseIssueGuard("Refinement");
const isTransformation = /* @__PURE__ */ createParseIssueGuard("Transformation");
const getMessage = (issue) => flatMap(getCurrentMessage(issue), (currentMessage) => {
  if (currentMessage !== void 0) {
    const useInnerMessage = !currentMessage.override && (isComposite(issue) || isRefinement(issue) && issue.kind === "From" || isTransformation(issue) && issue.kind !== "Transformation");
    return useInnerMessage ? isTransformation(issue) || isRefinement(issue) ? getMessage(issue.issue) : Either_void : right(currentMessage.message);
  }
  return Either_void;
});
const getParseIssueTitleAnnotation = (issue) => getAnnotated(issue).pipe(flatMap$a(getParseIssueTitleAnnotation$1), flatMapNullable((annotation) => annotation(issue)), getOrUndefined);
function getRefinementExpected(ast) {
  return getDescriptionAnnotation(ast).pipe(orElse$1(() => getTitleAnnotation(ast)), orElse$1(() => getAutoTitleAnnotation(ast)), orElse$1(() => getIdentifierAnnotation(ast)), getOrElse(() => `{ ${ast.from} | filter }`));
}
function getDefaultTypeMessage(issue) {
  if (issue.message !== void 0) {
    return issue.message;
  }
  const expected = isRefinement$1(issue.ast) ? getRefinementExpected(issue.ast) : String(issue.ast);
  return `Expected ${expected}, actual ${formatUnknown(issue.actual)}`;
}
const formatTypeMessage = (issue) => map$1(getMessage(issue), (message) => message ?? getParseIssueTitleAnnotation(issue) ?? getDefaultTypeMessage(issue));
const getParseIssueTitle = (issue) => getParseIssueTitleAnnotation(issue) ?? String(issue.ast);
const formatForbiddenMessage = (issue) => issue.message ?? "is forbidden";
const formatUnexpectedMessage = (issue) => issue.message ?? "is unexpected";
const formatMissingMessage = (issue) => {
  const missingMessageAnnotation = getMissingMessageAnnotation(issue.ast);
  if (isSome(missingMessageAnnotation)) {
    const annotation = missingMessageAnnotation.value();
    return isString(annotation) ? right(annotation) : annotation;
  }
  return right(issue.message ?? "is missing");
};
const formatTree = (issue) => {
  switch (issue._tag) {
    case "Type":
      return map$1(formatTypeMessage(issue), makeTree);
    case "Forbidden":
      return right(makeTree(getParseIssueTitle(issue), [makeTree(formatForbiddenMessage(issue))]));
    case "Unexpected":
      return right(makeTree(formatUnexpectedMessage(issue)));
    case "Missing":
      return map$1(formatMissingMessage(issue), makeTree);
    case "Transformation":
      return flatMap(getMessage(issue), (message) => {
        if (message !== void 0) {
          return right(makeTree(message));
        }
        return map$1(formatTree(issue.issue), (tree) => makeTree(getParseIssueTitle(issue), [makeTree(formatTransformationKind(issue.kind), [tree])]));
      });
    case "Refinement":
      return flatMap(getMessage(issue), (message) => {
        if (message !== void 0) {
          return right(makeTree(message));
        }
        return map$1(formatTree(issue.issue), (tree) => makeTree(getParseIssueTitle(issue), [makeTree(formatRefinementKind(issue.kind), [tree])]));
      });
    case "Pointer":
      return map$1(formatTree(issue.issue), (tree) => makeTree(formatPath(issue.path), [tree]));
    case "Composite":
      return flatMap(getMessage(issue), (message) => {
        if (message !== void 0) {
          return right(makeTree(message));
        }
        const parseIssueTitle = getParseIssueTitle(issue);
        return isNonEmpty$3(issue.issues) ? map$1(forEach(issue.issues, formatTree), (forest) => makeTree(parseIssueTitle, forest)) : map$1(formatTree(issue.issues), (tree) => makeTree(parseIssueTitle, [tree]));
      });
  }
};
const PoolTypeId = /* @__PURE__ */ Symbol.for("effect/Pool");
const poolVariance = {
  /* c8 ignore next */
  _E: (_) => _,
  /* c8 ignore next */
  _A: (_) => _
};
const makeWith$1 = (options2) => uninterruptibleMask$2((restore) => flatMap$7(context$2(), (context2) => {
  const scope2 = get$e(context2, scopeTag);
  const acquire = mapInputContext$1(options2.acquire, (input) => merge$6(context2, input));
  const pool = new PoolImpl(scope2, acquire, options2.concurrency ?? 1, options2.min, options2.max, options2.strategy, Math.min(Math.max(options2.targetUtilization ?? 1, 0.1), 1));
  const initialize = tap$3(forkDaemon$1(restore(pool.resize)), (fiber) => scope2.addFinalizer(() => interruptFiber(fiber)));
  const runStrategy = tap$3(forkDaemon$1(restore(options2.strategy.run(pool))), (fiber) => scope2.addFinalizer(() => interruptFiber(fiber)));
  return succeed$a(pool).pipe(zipLeft$1(scope2.addFinalizer(() => pool.shutdown)), zipLeft$1(initialize), zipLeft$1(runStrategy));
}));
const make$c = (options2) => makeWith$1({
  ...options2,
  min: options2.size,
  max: options2.size,
  strategy: strategyNoop()
});
const makeWithTTL$1 = (options2) => flatMap$7(options2.timeToLiveStrategy === "creation" ? strategyCreationTTL(options2.timeToLive) : strategyUsageTTL(options2.timeToLive), (strategy) => makeWith$1({
  ...options2,
  strategy
}));
class PoolImpl extends (_Ba = Class$4, _Aa = PoolTypeId, _Ba) {
  constructor(scope2, acquire, concurrency, minSize, maxSize, strategy, targetUtilization) {
    super();
    __publicField(this, "scope");
    __publicField(this, "acquire");
    __publicField(this, "concurrency");
    __publicField(this, "minSize");
    __publicField(this, "maxSize");
    __publicField(this, "strategy");
    __publicField(this, "targetUtilization");
    __publicField(this, _Aa);
    __publicField(this, "isShuttingDown", false);
    __publicField(this, "semaphore");
    __publicField(this, "items", /* @__PURE__ */ new Set());
    __publicField(this, "available", /* @__PURE__ */ new Set());
    __publicField(this, "availableLatch", /* @__PURE__ */ unsafeMakeLatch$1(false));
    __publicField(this, "invalidated", /* @__PURE__ */ new Set());
    __publicField(this, "waiters", 0);
    __publicField(this, "allocate", /* @__PURE__ */ acquireUseRelease$3(/* @__PURE__ */ scopeMake(), (scope2) => this.acquire.pipe(scopeExtend(scope2), exit$1, flatMap$7((exit2) => {
      const item = {
        exit: exit2,
        finalizer: catchAllCause$3(scope2.close(exit2), reportUnhandledError),
        refCount: 0,
        disableReclaim: false
      };
      this.items.add(item);
      this.available.add(item);
      return as$1(exit2._tag === "Success" ? this.strategy.onAcquire(item) : zipRight$4(item.finalizer, this.strategy.onAcquire(item)), item);
    })), (scope2, exit2) => exit2._tag === "Failure" ? scope2.close(exit2) : void_$4));
    __publicField(this, "resizeLoop", /* @__PURE__ */ suspend$7(() => {
      if (this.activeSize >= this.targetSize) {
        return void_$4;
      }
      const toAcquire = this.targetSize - this.activeSize;
      return this.strategy.reclaim(this).pipe(flatMap$7(match$8({
        onNone: () => this.allocate,
        onSome: succeed$a
      })), replicateEffect(toAcquire, {
        concurrency: toAcquire
      }), zipLeft$1(this.availableLatch.open), flatMap$7((items) => items.some((_) => _.exit._tag === "Failure") ? void_$4 : this.resizeLoop));
    }));
    __publicField(this, "resizeSemaphore", /* @__PURE__ */ unsafeMakeSemaphore(1));
    __publicField(this, "resize", /* @__PURE__ */ this.resizeSemaphore.withPermits(1)(this.resizeLoop));
    __publicField(this, "getPoolItem", /* @__PURE__ */ uninterruptibleMask$2((restore) => restore(this.semaphore.take(1)).pipe(zipRight$4(scopeTag), flatMap$7((scope2) => suspend$7(() => {
      this.waiters++;
      if (this.isShuttingDown) {
        return interrupt$6;
      } else if (this.targetSize > this.activeSize) {
        const self2 = this;
        return flatMap$7(this.resizeSemaphore.withPermitsIfAvailable(1)(forkIn$1(interruptible$2(this.resize), this.scope)), function loop() {
          if (self2.isShuttingDown) {
            return interrupt$6;
          } else if (self2.available.size > 0) {
            return succeed$a(unsafeHead$1(self2.available));
          }
          self2.availableLatch.unsafeClose();
          return flatMap$7(self2.availableLatch.await, loop);
        });
      }
      return succeed$a(unsafeHead$1(this.available));
    }).pipe(ensuring$5(sync$5(() => this.waiters--)), tap$3((item) => {
      if (item.exit._tag === "Failure") {
        this.items.delete(item);
        this.invalidated.delete(item);
        this.available.delete(item);
        return this.semaphore.release(1);
      }
      item.refCount++;
      this.available.delete(item);
      if (item.refCount < this.concurrency) {
        this.available.add(item);
      }
      return scope2.addFinalizer(() => zipRight$4(suspend$7(() => {
        item.refCount--;
        if (this.invalidated.has(item)) {
          return this.invalidatePoolItem(item);
        }
        this.available.add(item);
        return exitVoid$1;
      }), this.semaphore.release(1)));
    }), onInterrupt$1(() => this.semaphore.release(1)))))));
    __publicField(this, "get", /* @__PURE__ */ flatMap$7(/* @__PURE__ */ suspend$7(() => this.isShuttingDown ? interrupt$6 : this.getPoolItem), (_) => _.exit));
    this.scope = scope2;
    this.acquire = acquire;
    this.concurrency = concurrency;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.strategy = strategy;
    this.targetUtilization = targetUtilization;
    this[PoolTypeId] = poolVariance;
    this.semaphore = unsafeMakeSemaphore(concurrency * maxSize);
  }
  get currentUsage() {
    let count = this.waiters;
    for (const item of this.items) {
      count += item.refCount;
    }
    return count;
  }
  get targetSize() {
    if (this.isShuttingDown) return 0;
    const utilization = this.currentUsage / this.targetUtilization;
    const target = Math.ceil(utilization / this.concurrency);
    return Math.min(Math.max(this.minSize, target), this.maxSize);
  }
  get activeSize() {
    return this.items.size - this.invalidated.size;
  }
  commit() {
    return this.get;
  }
  invalidate(item) {
    return suspend$7(() => {
      if (this.isShuttingDown) return void_$4;
      for (const poolItem of this.items) {
        if (poolItem.exit._tag === "Success" && poolItem.exit.value === item) {
          poolItem.disableReclaim = true;
          return uninterruptible$1(this.invalidatePoolItem(poolItem));
        }
      }
      return void_$4;
    });
  }
  invalidatePoolItem(poolItem) {
    return suspend$7(() => {
      if (!this.items.has(poolItem)) {
        return void_$4;
      } else if (poolItem.refCount === 0) {
        this.items.delete(poolItem);
        this.available.delete(poolItem);
        this.invalidated.delete(poolItem);
        return zipRight$4(poolItem.finalizer, forkIn$1(interruptible$2(this.resize), this.scope));
      }
      this.invalidated.add(poolItem);
      this.available.delete(poolItem);
      return void_$4;
    });
  }
  get shutdown() {
    return suspend$7(() => {
      if (this.isShuttingDown) return void_$4;
      this.isShuttingDown = true;
      const size2 = this.items.size;
      const semaphore = unsafeMakeSemaphore(size2);
      return forEachSequentialDiscard(this.items, (item) => {
        if (item.refCount > 0) {
          item.finalizer = zipLeft$1(item.finalizer, semaphore.release(1));
          this.invalidated.add(item);
          return semaphore.take(1);
        }
        this.items.delete(item);
        this.available.delete(item);
        this.invalidated.delete(item);
        return item.finalizer;
      }).pipe(zipRight$4(this.semaphore.releaseAll), zipRight$4(this.availableLatch.open), zipRight$4(semaphore.take(size2)));
    });
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
const strategyNoop = () => ({
  run: (_) => void_$4,
  onAcquire: (_) => void_$4,
  reclaim: (_) => succeedNone
});
const strategyCreationTTL = (ttl) => clockWith$2((clock2) => map$9(unbounded$5(), (queue) => {
  const ttlMillis = toMillis(ttl);
  const creationTimes = /* @__PURE__ */ new WeakMap();
  return identity({
    run: (pool) => {
      const process2 = (item) => suspend$7(() => {
        if (!pool.items.has(item) || pool.invalidated.has(item)) {
          return void_$4;
        }
        const now = clock2.unsafeCurrentTimeMillis();
        const created = creationTimes.get(item);
        const remaining = ttlMillis - (now - created);
        return remaining > 0 ? delay(process2(item), remaining) : pool.invalidatePoolItem(item);
      });
      return queue.take.pipe(tap$3(process2), forever$2);
    },
    onAcquire: (item) => suspend$7(() => {
      creationTimes.set(item, clock2.unsafeCurrentTimeMillis());
      return queue.offer(item);
    }),
    reclaim: (_) => succeedNone
  });
}));
const strategyUsageTTL = (ttl) => map$9(unbounded$5(), (queue) => {
  return identity({
    run: (pool) => {
      const process2 = suspend$7(() => {
        const excess = pool.activeSize - pool.targetSize;
        if (excess <= 0) return void_$4;
        return queue.take.pipe(tap$3((item) => pool.invalidatePoolItem(item)), zipRight$4(process2));
      });
      return process2.pipe(delay(ttl), forever$2);
    },
    onAcquire: (item) => queue.offer(item),
    reclaim(pool) {
      return suspend$7(() => {
        if (pool.invalidated.size === 0) {
          return succeedNone;
        }
        const item = head$4(filter$5(pool.invalidated, (item2) => !item2.disableReclaim));
        if (item._tag === "None") {
          return succeedNone;
        }
        pool.invalidated.delete(item.value);
        if (item.value.refCount < pool.concurrency) {
          pool.available.add(item.value);
        }
        return as$1(queue.offer(item.value), item);
      });
    }
  });
});
const reportUnhandledError = (cause) => withFiberRuntime$1((fiber) => {
  const unhandledLogLevel = fiber.getFiberRef(currentUnhandledErrorLogLevel);
  if (unhandledLogLevel._tag === "Some") {
    fiber.log("Unhandled error in pool finalizer", cause, unhandledLogLevel);
  }
  return void_$4;
});
const replace = replaceLogger;
const withMinimumLogLevel = withMinimumLogLevel$1;
const defaultLogger = defaultLogger$1;
const prettyLogger = prettyLogger$1;
const tracerLogger = tracerLogger$1;
const TypeId$c = /* @__PURE__ */ Symbol.for("effect/Mailbox");
const ReadonlyTypeId = /* @__PURE__ */ Symbol.for("effect/Mailbox/ReadonlyMailbox");
const empty$5 = /* @__PURE__ */ empty$r();
const exitEmpty = /* @__PURE__ */ exitSucceed$1(empty$5);
const exitFalse = /* @__PURE__ */ exitSucceed$1(false);
const exitTrue = /* @__PURE__ */ exitSucceed$1(true);
const constDone = [empty$5, true];
class MailboxImpl extends Class$4 {
  constructor(scheduler, capacity2, strategy) {
    super();
    __publicField(this, "scheduler");
    __publicField(this, "capacity");
    __publicField(this, "strategy");
    __publicField(this, _Da, TypeId$c);
    __publicField(this, _Ca, ReadonlyTypeId);
    __publicField(this, "state", {
      _tag: "Open",
      takers: /* @__PURE__ */ new Set(),
      offers: /* @__PURE__ */ new Set(),
      awaiters: /* @__PURE__ */ new Set()
    });
    __publicField(this, "messages", []);
    __publicField(this, "messagesChunk", /* @__PURE__ */ empty$r());
    __publicField(this, "shutdown", /* @__PURE__ */ sync$5(() => {
      if (this.state._tag === "Done") {
        return true;
      }
      this.messages = [];
      this.messagesChunk = empty$5;
      const offers = this.state.offers;
      this.finalize(this.state._tag === "Open" ? exitVoid$1 : this.state.exit);
      if (offers.size > 0) {
        for (const entry of offers) {
          if (entry._tag === "Single") {
            entry.resume(exitFalse);
          } else {
            entry.resume(exitSucceed$1(unsafeFromArray(entry.remaining.slice(entry.offset))));
          }
        }
        offers.clear();
      }
      return true;
    }));
    __publicField(this, "end", /* @__PURE__ */ this.done(exitVoid$1));
    __publicField(this, "clear", /* @__PURE__ */ suspend$7(() => {
      if (this.state._tag === "Done") {
        return exitAs(this.state.exit, empty$5);
      }
      const messages = this.unsafeTakeAll();
      this.releaseCapacity();
      return succeed$a(messages);
    }));
    __publicField(this, "takeAll", /* @__PURE__ */ suspend$7(() => {
      if (this.state._tag === "Done") {
        return exitAs(this.state.exit, constDone);
      }
      const messages = this.unsafeTakeAll();
      if (messages.length === 0) {
        return zipRight$4(this.awaitTake, this.takeAll);
      }
      return succeed$a([messages, this.releaseCapacity()]);
    }));
    __publicField(this, "take", /* @__PURE__ */ suspend$7(() => this.unsafeTake() ?? zipRight$4(this.awaitTake, this.take)));
    __publicField(this, "await", /* @__PURE__ */ asyncInterrupt((resume2) => {
      if (this.state._tag === "Done") {
        return resume2(this.state.exit);
      }
      this.state.awaiters.add(resume2);
      return sync$5(() => {
        if (this.state._tag !== "Done") {
          this.state.awaiters.delete(resume2);
        }
      });
    }));
    __publicField(this, "size", /* @__PURE__ */ sync$5(() => this.unsafeSize()));
    __publicField(this, "awaitTake", /* @__PURE__ */ asyncInterrupt((resume2) => {
      if (this.state._tag === "Done") {
        return resume2(this.state.exit);
      }
      this.state.takers.add(resume2);
      return sync$5(() => {
        if (this.state._tag !== "Done") {
          this.state.takers.delete(resume2);
        }
      });
    }));
    __publicField(this, "scheduleRunning", false);
    __publicField(this, "releaseTaker", () => {
      this.scheduleRunning = false;
      if (this.state._tag === "Done") {
        return;
      } else if (this.state.takers.size === 0) {
        return;
      }
      const taker = unsafeHead$1(this.state.takers);
      this.state.takers.delete(taker);
      taker(exitVoid$1);
    });
    this.scheduler = scheduler;
    this.capacity = capacity2;
    this.strategy = strategy;
  }
  offer(message) {
    return suspend$7(() => {
      if (this.state._tag !== "Open") {
        return exitFalse;
      } else if (this.messages.length + this.messagesChunk.length >= this.capacity) {
        switch (this.strategy) {
          case "dropping":
            return exitFalse;
          case "suspend":
            if (this.capacity <= 0 && this.state.takers.size > 0) {
              this.messages.push(message);
              this.releaseTaker();
              return exitTrue;
            }
            return this.offerRemainingSingle(message);
          case "sliding":
            this.unsafeTake();
            this.messages.push(message);
            return exitTrue;
        }
      }
      this.messages.push(message);
      this.scheduleReleaseTaker();
      return exitTrue;
    });
  }
  unsafeOffer(message) {
    if (this.state._tag !== "Open") {
      return false;
    } else if (this.messages.length + this.messagesChunk.length >= this.capacity) {
      if (this.strategy === "sliding") {
        this.unsafeTake();
        this.messages.push(message);
        return true;
      } else if (this.capacity <= 0 && this.state.takers.size > 0) {
        this.messages.push(message);
        this.releaseTaker();
        return true;
      }
      return false;
    }
    this.messages.push(message);
    this.scheduleReleaseTaker();
    return true;
  }
  offerAll(messages) {
    return suspend$7(() => {
      if (this.state._tag !== "Open") {
        return succeed$a(fromIterable$7(messages));
      }
      const remaining = this.unsafeOfferAllArray(messages);
      if (remaining.length === 0) {
        return exitEmpty;
      } else if (this.strategy === "dropping") {
        return succeed$a(unsafeFromArray(remaining));
      }
      return this.offerRemainingArray(remaining);
    });
  }
  unsafeOfferAll(messages) {
    return unsafeFromArray(this.unsafeOfferAllArray(messages));
  }
  unsafeOfferAllArray(messages) {
    if (this.state._tag !== "Open") {
      return fromIterable$8(messages);
    } else if (this.capacity === Number.POSITIVE_INFINITY || this.strategy === "sliding") {
      if (this.messages.length > 0) {
        this.messagesChunk = appendAll$1(this.messagesChunk, unsafeFromArray(this.messages));
      }
      if (this.strategy === "sliding") {
        this.messagesChunk = this.messagesChunk.pipe(appendAll$1(fromIterable$7(messages)), takeRight(this.capacity));
      } else if (isChunk(messages)) {
        this.messagesChunk = appendAll$1(this.messagesChunk, messages);
      } else {
        this.messages = fromIterable$8(messages);
      }
      this.scheduleReleaseTaker();
      return [];
    }
    const free = this.capacity <= 0 ? this.state.takers.size : this.capacity - this.messages.length - this.messagesChunk.length;
    if (free === 0) {
      return fromIterable$8(messages);
    }
    const remaining = [];
    let i = 0;
    for (const message of messages) {
      if (i < free) {
        this.messages.push(message);
      } else {
        remaining.push(message);
      }
      i++;
    }
    this.scheduleReleaseTaker();
    return remaining;
  }
  fail(error) {
    return this.done(exitFail(error));
  }
  failCause(cause) {
    return this.done(exitFailCause$1(cause));
  }
  unsafeDone(exit2) {
    if (this.state._tag !== "Open") {
      return false;
    } else if (this.state.offers.size === 0 && this.messages.length === 0 && this.messagesChunk.length === 0) {
      this.finalize(exit2);
      return true;
    }
    this.state = {
      ...this.state,
      _tag: "Closing",
      exit: exit2
    };
    return true;
  }
  done(exit2) {
    return sync$5(() => this.unsafeDone(exit2));
  }
  takeN(n) {
    return suspend$7(() => {
      if (this.state._tag === "Done") {
        return exitAs(this.state.exit, constDone);
      } else if (n <= 0) {
        return succeed$a([empty$5, false]);
      }
      n = Math.min(n, this.capacity);
      let messages;
      if (n <= this.messagesChunk.length) {
        messages = take$6(this.messagesChunk, n);
        this.messagesChunk = drop(this.messagesChunk, n);
      } else if (n <= this.messages.length + this.messagesChunk.length) {
        this.messagesChunk = appendAll$1(this.messagesChunk, unsafeFromArray(this.messages));
        this.messages = [];
        messages = take$6(this.messagesChunk, n);
        this.messagesChunk = drop(this.messagesChunk, n);
      } else {
        return zipRight$4(this.awaitTake, this.takeN(n));
      }
      return succeed$a([messages, this.releaseCapacity()]);
    });
  }
  unsafeTake() {
    if (this.state._tag === "Done") {
      return exitZipRight(this.state.exit, exitFail(new NoSuchElementException()));
    }
    let message;
    if (this.messagesChunk.length > 0) {
      message = unsafeHead(this.messagesChunk);
      this.messagesChunk = drop(this.messagesChunk, 1);
    } else if (this.messages.length > 0) {
      message = this.messages[0];
      this.messagesChunk = drop(unsafeFromArray(this.messages), 1);
      this.messages = [];
    } else if (this.capacity <= 0 && this.state.offers.size > 0) {
      this.capacity = 1;
      this.releaseCapacity();
      this.capacity = 0;
      return this.messages.length > 0 ? exitSucceed$1(this.messages.pop()) : void 0;
    } else {
      return void 0;
    }
    this.releaseCapacity();
    return exitSucceed$1(message);
  }
  unsafeSize() {
    const size2 = this.messages.length + this.messagesChunk.length;
    return this.state._tag === "Done" ? none$4() : some(size2);
  }
  commit() {
    return this.takeAll;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "effect/Mailbox",
      state: this.state._tag,
      size: this.unsafeSize().toJSON()
    };
  }
  toString() {
    return format$3(this);
  }
  [(_Da = TypeId$c, _Ca = ReadonlyTypeId, NodeInspectSymbol)]() {
    return format$3(this);
  }
  offerRemainingSingle(message) {
    return asyncInterrupt((resume2) => {
      if (this.state._tag !== "Open") {
        return resume2(exitFalse);
      }
      const entry = {
        _tag: "Single",
        message,
        resume: resume2
      };
      this.state.offers.add(entry);
      return sync$5(() => {
        if (this.state._tag === "Open") {
          this.state.offers.delete(entry);
        }
      });
    });
  }
  offerRemainingArray(remaining) {
    return asyncInterrupt((resume2) => {
      if (this.state._tag !== "Open") {
        return resume2(exitSucceed$1(unsafeFromArray(remaining)));
      }
      const entry = {
        _tag: "Array",
        remaining,
        offset: 0,
        resume: resume2
      };
      this.state.offers.add(entry);
      return sync$5(() => {
        if (this.state._tag === "Open") {
          this.state.offers.delete(entry);
        }
      });
    });
  }
  releaseCapacity() {
    if (this.state._tag === "Done") {
      return this.state.exit._tag === "Success";
    } else if (this.state.offers.size === 0) {
      if (this.state._tag === "Closing" && this.messages.length === 0 && this.messagesChunk.length === 0) {
        this.finalize(this.state.exit);
        return this.state.exit._tag === "Success";
      }
      return false;
    }
    let n = this.capacity - this.messages.length - this.messagesChunk.length;
    for (const entry of this.state.offers) {
      if (n === 0) return false;
      else if (entry._tag === "Single") {
        this.messages.push(entry.message);
        n--;
        entry.resume(exitTrue);
        this.state.offers.delete(entry);
      } else {
        for (; entry.offset < entry.remaining.length; entry.offset++) {
          if (n === 0) return false;
          this.messages.push(entry.remaining[entry.offset]);
          n--;
        }
        entry.resume(exitEmpty);
        this.state.offers.delete(entry);
      }
    }
    return false;
  }
  scheduleReleaseTaker() {
    if (this.scheduleRunning) {
      return;
    }
    this.scheduleRunning = true;
    this.scheduler.scheduleTask(this.releaseTaker, 0);
  }
  unsafeTakeAll() {
    if (this.messagesChunk.length > 0) {
      const messages = this.messages.length > 0 ? appendAll$1(this.messagesChunk, unsafeFromArray(this.messages)) : this.messagesChunk;
      this.messagesChunk = empty$5;
      this.messages = [];
      return messages;
    } else if (this.messages.length > 0) {
      const messages = unsafeFromArray(this.messages);
      this.messages = [];
      return messages;
    } else if (this.state._tag !== "Done" && this.state.offers.size > 0) {
      this.capacity = 1;
      this.releaseCapacity();
      this.capacity = 0;
      return of$2(this.messages.pop());
    }
    return empty$5;
  }
  finalize(exit2) {
    if (this.state._tag === "Done") {
      return;
    }
    const openState = this.state;
    this.state = {
      _tag: "Done",
      exit: exit2
    };
    for (const taker of openState.takers) {
      taker(exit2);
    }
    openState.takers.clear();
    for (const awaiter of openState.awaiters) {
      awaiter(exit2);
    }
    openState.awaiters.clear();
  }
}
const make$b = (capacity2) => withFiberRuntime$1((fiber) => succeed$a(new MailboxImpl(fiber.currentScheduler, typeof capacity2 === "number" ? capacity2 : (capacity2 == null ? void 0 : capacity2.capacity) ?? Number.POSITIVE_INFINITY, typeof capacity2 === "number" ? "suspend" : (capacity2 == null ? void 0 : capacity2.strategy) ?? "suspend")));
const toChannel$1 = (self2) => {
  const loop = flatMap$3(self2.takeAll, ([messages, done2]) => done2 ? messages.length === 0 ? void_$1 : write(messages) : zipRight$1(write(messages), loop));
  return loop;
};
const TypeId$b = TypeId$c;
const isMailbox = (u) => hasProperty(u, TypeId$b);
const make$a = make$b;
const toChannel = toChannel$1;
const TypeId$a = /* @__PURE__ */ Symbol.for("@effect/matcher/Matcher");
const ValueMatcherProto = {
  [TypeId$a]: {
    _input: identity,
    _filters: identity,
    _result: identity,
    _return: identity
  },
  _tag: "ValueMatcher",
  add(_case) {
    if (this.value._tag === "Right") {
      return this;
    }
    if (_case._tag === "When" && _case.guard(this.provided) === true) {
      return makeValueMatcher(this.provided, right(_case.evaluate(this.provided)));
    } else if (_case._tag === "Not" && _case.guard(this.provided) === false) {
      return makeValueMatcher(this.provided, right(_case.evaluate(this.provided)));
    }
    return this;
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
function makeValueMatcher(provided, value2) {
  const matcher = Object.create(ValueMatcherProto);
  matcher.provided = provided;
  matcher.value = value2;
  return matcher;
}
const makeWhen = (guard, evaluate2) => ({
  _tag: "When",
  guard,
  evaluate: evaluate2
});
const value$1 = (i) => makeValueMatcher(i, left(i));
const discriminator = (field) => (...pattern) => {
  const f = pattern[pattern.length - 1];
  const values = pattern.slice(0, -1);
  const pred = values.length === 1 ? (_) => _[field] === values[0] : (_) => values.includes(_[field]);
  return (self2) => self2.add(makeWhen(pred, f));
};
const tag$3 = /* @__PURE__ */ discriminator("_tag");
const either = (self2) => {
  if (self2._tag === "ValueMatcher") {
    return self2.value;
  }
  const len = self2.cases.length;
  if (len === 1) {
    const _case = self2.cases[0];
    return (input) => {
      if (_case._tag === "When" && _case.guard(input) === true) {
        return right(_case.evaluate(input));
      } else if (_case._tag === "Not" && _case.guard(input) === false) {
        return right(_case.evaluate(input));
      }
      return left(input);
    };
  }
  return (input) => {
    for (let i = 0; i < len; i++) {
      const _case = self2.cases[i];
      if (_case._tag === "When" && _case.guard(input) === true) {
        return right(_case.evaluate(input));
      } else if (_case._tag === "Not" && _case.guard(input) === false) {
        return right(_case.evaluate(input));
      }
    }
    return left(input);
  };
};
const getExhaustiveAbsurdErrorMessage = "effect/Match/exhaustive: absurd";
const exhaustive$1 = (self2) => {
  const toEither = either(self2);
  if (isEither$1(toEither)) {
    if (toEither._tag === "Right") {
      return toEither.right;
    }
    throw new Error(getExhaustiveAbsurdErrorMessage);
  }
  return (u) => {
    const result = toEither(u);
    if (result._tag === "Right") {
      return result.right;
    }
    throw new Error(getExhaustiveAbsurdErrorMessage);
  };
};
const value = value$1;
const tag$2 = tag$3;
const exhaustive = exhaustive$1;
const make$9 = make$c;
const makeWithTTL = makeWithTTL$1;
const make$8 = make$g;
const pick$1 = /* @__PURE__ */ dual((args2) => isObject(args2[0]), (s, ...keys2) => {
  const out = {};
  for (const k of keys2) {
    if (k in s) {
      out[k] = s[k];
    }
  }
  return out;
});
const omit$1 = /* @__PURE__ */ dual((args2) => isObject(args2[0]), (s, ...keys2) => {
  const out = {
    ...s
  };
  for (const k of keys2) {
    delete out[k];
  }
  return out;
});
const TypeId$9 = /* @__PURE__ */ Symbol.for("effect/Schema");
function make$7(ast) {
  var _a2, _b2, _c2;
  return _b2 = TypeId$9, _a2 = TypeId$9, _c2 = class {
    constructor() {
      __publicField(this, _b2, variance);
    }
    static annotations(annotations2) {
      return make$7(mergeSchemaAnnotations(this.ast, annotations2));
    }
    static pipe() {
      return pipeArguments(this, arguments);
    }
    static toString() {
      return String(ast);
    }
  }, __publicField(_c2, "ast", ast), __publicField(_c2, "Type"), __publicField(_c2, "Encoded"), __publicField(_c2, "Context"), __publicField(_c2, _a2, variance), _c2;
}
const variance = {
  /* c8 ignore next */
  _A: (_) => _,
  /* c8 ignore next */
  _I: (_) => _,
  /* c8 ignore next */
  _R: (_) => _
};
const builtInAnnotations = {
  schemaId: SchemaIdAnnotationId,
  message: MessageAnnotationId,
  missingMessage: MissingMessageAnnotationId,
  identifier: IdentifierAnnotationId,
  title: TitleAnnotationId,
  description: DescriptionAnnotationId,
  examples: ExamplesAnnotationId,
  default: DefaultAnnotationId,
  documentation: DocumentationAnnotationId,
  jsonSchema: JSONSchemaAnnotationId,
  arbitrary: ArbitraryAnnotationId,
  pretty: PrettyAnnotationId,
  equivalence: EquivalenceAnnotationId,
  concurrency: ConcurrencyAnnotationId,
  batching: BatchingAnnotationId,
  parseIssueTitle: ParseIssueTitleAnnotationId,
  parseOptions: ParseOptionsAnnotationId,
  decodingFallback: DecodingFallbackAnnotationId
};
const toASTAnnotations = (annotations2) => {
  if (!annotations2) {
    return {};
  }
  const out = {
    ...annotations2
  };
  for (const key in builtInAnnotations) {
    if (key in annotations2) {
      const id2 = builtInAnnotations[key];
      out[id2] = annotations2[key];
      delete out[key];
    }
  }
  return out;
};
const mergeSchemaAnnotations = (ast, annotations$1) => annotations(ast, toASTAnnotations(annotations$1));
function asSchema(schema2) {
  return schema2;
}
const format = (schema2) => String(schema2.ast);
const encodedSchema = (schema2) => make$7(encodedAST(schema2.ast));
const typeSchema = (schema2) => make$7(typeAST(schema2.ast));
const encodeUnknown = (schema2, options2) => {
  const encodeUnknown2 = encodeUnknown$1(schema2, options2);
  return (u, overrideOptions) => mapError$1(encodeUnknown2(u, overrideOptions), parseError);
};
const encode = encodeUnknown;
const decodeUnknown = (schema2, options2) => {
  const decodeUnknown2 = decodeUnknown$1(schema2, options2);
  return (u, overrideOptions) => mapError$1(decodeUnknown2(u, overrideOptions), parseError);
};
const decodeUnknownEither = (schema2, options2) => {
  const decodeUnknownEither2 = decodeUnknownEither$1(schema2, options2);
  return (u, overrideOptions) => mapLeft(decodeUnknownEither2(u, overrideOptions), parseError);
};
const decode = decodeUnknown;
const decodeEither = decodeUnknownEither;
const isSchema = (u) => hasProperty(u, TypeId$9) && isObject(u[TypeId$9]);
function getDefaultLiteralAST(literals) {
  return isMembers(literals) ? Union$1.make(mapMembers(literals, (literal) => new Literal$1(literal))) : new Literal$1(literals[0]);
}
function makeLiteralClass(literals, ast = getDefaultLiteralAST(literals)) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeLiteralClass(this.literals, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "literals", [...literals]), _a2;
}
function Literal2(...literals) {
  return isNonEmptyReadonlyArray(literals) ? makeLiteralClass(literals) : Never;
}
const declareConstructor = (typeParameters, options2, annotations2) => makeDeclareClass(typeParameters, new Declaration(typeParameters.map((tp) => tp.ast), (...typeParameters2) => options2.decode(...typeParameters2.map(make$7)), (...typeParameters2) => options2.encode(...typeParameters2.map(make$7)), toASTAnnotations(annotations2)));
const declarePrimitive = (is2, annotations2) => {
  const decodeUnknown2 = () => (input, _, ast) => is2(input) ? succeed(input) : fail$1(new Type2(ast, input));
  const encodeUnknown2 = decodeUnknown2;
  return makeDeclareClass([], new Declaration([], decodeUnknown2, encodeUnknown2, toASTAnnotations(annotations2)));
};
function makeDeclareClass(typeParameters, ast) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeDeclareClass(this.typeParameters, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "typeParameters", [...typeParameters]), _a2;
}
const declare = function() {
  if (Array.isArray(arguments[0])) {
    const typeParameters = arguments[0];
    const options2 = arguments[1];
    const annotations3 = arguments[2];
    return declareConstructor(typeParameters, options2, annotations3);
  }
  const is2 = arguments[0];
  const annotations2 = arguments[1];
  return declarePrimitive(is2, annotations2);
};
const BrandSchemaId = /* @__PURE__ */ Symbol.for("effect/SchemaId/Brand");
const fromBrand = (constructor, annotations2) => (self2) => {
  const out = makeBrandClass(self2, new Refinement$1(self2.ast, function predicate(a, _, ast) {
    const either2 = constructor.either(a);
    return isLeft(either2) ? some(new Type2(ast, a, either2.left.map((v) => v.message).join(", "))) : none$4();
  }, toASTAnnotations({
    schemaId: BrandSchemaId,
    [BrandSchemaId]: {
      constructor
    },
    ...annotations2
  })));
  return out;
};
class Undefined extends (/* @__PURE__ */ make$7(undefinedKeyword)) {
}
class Void extends (/* @__PURE__ */ make$7(voidKeyword)) {
}
class Null extends (/* @__PURE__ */ make$7($null)) {
}
class Never extends (/* @__PURE__ */ make$7(neverKeyword)) {
}
class Unknown extends (/* @__PURE__ */ make$7(unknownKeyword)) {
}
class Any extends (/* @__PURE__ */ make$7(anyKeyword)) {
}
class String$ extends (/* @__PURE__ */ make$7(stringKeyword)) {
}
class Number$ extends (/* @__PURE__ */ make$7(numberKeyword)) {
}
class Boolean$ extends (/* @__PURE__ */ make$7(booleanKeyword)) {
}
const getDefaultUnionAST = (members) => Union$1.make(members.map((m) => m.ast));
function makeUnionClass(members, ast = getDefaultUnionAST(members)) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeUnionClass(this.members, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "members", [...members]), _a2;
}
function Union(...members) {
  return isMembers(members) ? makeUnionClass(members) : isNonEmptyReadonlyArray(members) ? members[0] : Never;
}
const UndefinedOr = (self2) => Union(self2, Undefined);
const getDefaultTupleTypeAST = (elements, rest) => new TupleType(elements.map((el) => isSchema(el) ? new OptionalType(el.ast, false) : el.ast), rest.map((el) => isSchema(el) ? new Type$1(el.ast) : el.ast), true);
function makeTupleTypeClass(elements, rest, ast = getDefaultTupleTypeAST(elements, rest)) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeTupleTypeClass(this.elements, this.rest, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "elements", [...elements]), __publicField(_a2, "rest", [...rest]), _a2;
}
function makeArrayClass(value2, ast) {
  var _a2;
  return _a2 = class extends makeTupleTypeClass([], [value2], ast) {
    static annotations(annotations2) {
      return makeArrayClass(this.value, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "value", value2), _a2;
}
const Array$ = (value2) => makeArrayClass(value2);
const formatPropertySignatureToken = (isOptional) => isOptional ? '"?:"' : '":"';
class PropertySignatureDeclaration extends OptionalType {
  constructor(type, isOptional, isReadonly, annotations2, defaultValue) {
    super(type, isOptional, annotations2);
    __publicField(this, "isReadonly");
    __publicField(this, "defaultValue");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "PropertySignatureDeclaration");
    this.isReadonly = isReadonly;
    this.defaultValue = defaultValue;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    const token = formatPropertySignatureToken(this.isOptional);
    const type = String(this.type);
    return `PropertySignature<${token}, ${type}, never, ${token}, ${type}>`;
  }
}
class FromPropertySignature extends OptionalType {
  constructor(type, isOptional, isReadonly, annotations2, fromKey) {
    super(type, isOptional, annotations2);
    __publicField(this, "isReadonly");
    __publicField(this, "fromKey");
    this.isReadonly = isReadonly;
    this.fromKey = fromKey;
  }
}
class ToPropertySignature extends OptionalType {
  constructor(type, isOptional, isReadonly, annotations2, defaultValue) {
    super(type, isOptional, annotations2);
    __publicField(this, "isReadonly");
    __publicField(this, "defaultValue");
    this.isReadonly = isReadonly;
    this.defaultValue = defaultValue;
  }
}
const formatPropertyKey = (p) => {
  if (p === void 0) {
    return "never";
  }
  if (isString(p)) {
    return JSON.stringify(p);
  }
  return String(p);
};
class PropertySignatureTransformation2 {
  constructor(from, to, decode2, encode2) {
    __publicField(this, "from");
    __publicField(this, "to");
    __publicField(this, "decode");
    __publicField(this, "encode");
    /**
     * @since 3.10.0
     */
    __publicField(this, "_tag", "PropertySignatureTransformation");
    this.from = from;
    this.to = to;
    this.decode = decode2;
    this.encode = encode2;
  }
  /**
   * @since 3.10.0
   */
  toString() {
    return `PropertySignature<${formatPropertySignatureToken(this.to.isOptional)}, ${this.to.type}, ${formatPropertyKey(this.from.fromKey)}, ${formatPropertySignatureToken(this.from.isOptional)}, ${this.from.type}>`;
  }
}
const mergeSignatureAnnotations = (ast, annotations2) => {
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      return new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, {
        ...ast.annotations,
        ...annotations2
      }, ast.defaultValue);
    }
    case "PropertySignatureTransformation": {
      return new PropertySignatureTransformation2(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, {
        ...ast.to.annotations,
        ...annotations2
      }, ast.to.defaultValue), ast.decode, ast.encode);
    }
  }
};
const PropertySignatureTypeId = /* @__PURE__ */ Symbol.for("effect/PropertySignature");
const isPropertySignature = (u) => hasProperty(u, PropertySignatureTypeId);
_Fa = TypeId$9, _Ea = PropertySignatureTypeId;
const _PropertySignatureImpl = class _PropertySignatureImpl {
  constructor(ast) {
    __publicField(this, "ast");
    __publicField(this, _Fa);
    __publicField(this, _Ea, null);
    __publicField(this, "_TypeToken");
    __publicField(this, "_Key");
    __publicField(this, "_EncodedToken");
    __publicField(this, "_HasDefault");
    this.ast = ast;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  annotations(annotations2) {
    return new _PropertySignatureImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations2)));
  }
  toString() {
    return String(this.ast);
  }
};
let PropertySignatureImpl = _PropertySignatureImpl;
const makePropertySignature = (ast) => new PropertySignatureImpl(ast);
class PropertySignatureWithFromImpl extends PropertySignatureImpl {
  constructor(ast, from) {
    super(ast);
    __publicField(this, "from");
    this.from = from;
  }
  annotations(annotations2) {
    return new PropertySignatureWithFromImpl(mergeSignatureAnnotations(this.ast, toASTAnnotations(annotations2)), this.from);
  }
}
const propertySignature = (self2) => new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(self2.ast, false, true, {}, void 0), self2);
const withConstructorDefault = /* @__PURE__ */ dual(2, (self2, defaultValue) => {
  const ast = self2.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration":
      return makePropertySignature(new PropertySignatureDeclaration(ast.type, ast.isOptional, ast.isReadonly, ast.annotations, defaultValue));
    case "PropertySignatureTransformation":
      return makePropertySignature(new PropertySignatureTransformation2(ast.from, new ToPropertySignature(ast.to.type, ast.to.isOptional, ast.to.isReadonly, ast.to.annotations, defaultValue), ast.decode, ast.encode));
  }
});
const applyDefaultValue = (o, defaultValue) => match$8(o, {
  onNone: () => some(defaultValue()),
  onSome: (value2) => some(value2 === void 0 ? defaultValue() : value2)
});
const pruneUndefined = (ast) => pruneUndefined$1(ast, pruneUndefined, (ast2) => {
  const pruned = pruneUndefined(ast2.to);
  if (pruned) {
    return new Transformation$1(ast2.from, pruned, ast2.transformation);
  }
});
const withDecodingDefault = /* @__PURE__ */ dual(2, (self2, defaultValue) => {
  const ast = self2.ast;
  switch (ast._tag) {
    case "PropertySignatureDeclaration": {
      const to = typeAST(ast.type);
      return makePropertySignature(new PropertySignatureTransformation2(new FromPropertySignature(ast.type, ast.isOptional, ast.isReadonly, ast.annotations), new ToPropertySignature(pruneUndefined(to) ?? to, false, true, {}, ast.defaultValue), (o) => applyDefaultValue(o, defaultValue), identity));
    }
    case "PropertySignatureTransformation": {
      const to = ast.to.type;
      return makePropertySignature(new PropertySignatureTransformation2(ast.from, new ToPropertySignature(pruneUndefined(to) ?? to, false, ast.to.isReadonly, ast.to.annotations, ast.to.defaultValue), (o) => applyDefaultValue(ast.decode(o), defaultValue), ast.encode));
    }
  }
});
const withDefaults = /* @__PURE__ */ dual(2, (self2, defaults) => self2.pipe(withDecodingDefault(defaults.decoding), withConstructorDefault(defaults.constructor)));
const optional = (self2) => {
  const ast = self2.ast === undefinedKeyword || self2.ast === neverKeyword ? undefinedKeyword : UndefinedOr(self2).ast;
  return new PropertySignatureWithFromImpl(new PropertySignatureDeclaration(ast, true, true, {}, void 0), self2);
};
const preserveMissingMessageAnnotation = /* @__PURE__ */ pickAnnotations([MissingMessageAnnotationId]);
const getDefaultTypeLiteralAST = (fields, records) => {
  const ownKeys$1 = ownKeys(fields);
  const pss = [];
  if (ownKeys$1.length > 0) {
    const from = [];
    const to = [];
    const transformations = [];
    for (let i = 0; i < ownKeys$1.length; i++) {
      const key = ownKeys$1[i];
      const field = fields[key];
      if (isPropertySignature(field)) {
        const ast = field.ast;
        switch (ast._tag) {
          case "PropertySignatureDeclaration": {
            const type = ast.type;
            const isOptional = ast.isOptional;
            const toAnnotations = ast.annotations;
            from.push(new PropertySignature(key, type, isOptional, true, preserveMissingMessageAnnotation(ast)));
            to.push(new PropertySignature(key, typeAST(type), isOptional, true, toAnnotations));
            pss.push(new PropertySignature(key, type, isOptional, true, toAnnotations));
            break;
          }
          case "PropertySignatureTransformation": {
            const fromKey = ast.from.fromKey ?? key;
            from.push(new PropertySignature(fromKey, ast.from.type, ast.from.isOptional, true, ast.from.annotations));
            to.push(new PropertySignature(key, ast.to.type, ast.to.isOptional, true, ast.to.annotations));
            transformations.push(new PropertySignatureTransformation$1(fromKey, key, ast.decode, ast.encode));
            break;
          }
        }
      } else {
        from.push(new PropertySignature(key, field.ast, false, true));
        to.push(new PropertySignature(key, typeAST(field.ast), false, true));
        pss.push(new PropertySignature(key, field.ast, false, true));
      }
    }
    if (isNonEmptyReadonlyArray(transformations)) {
      const issFrom = [];
      const issTo = [];
      for (const r of records) {
        const {
          indexSignatures,
          propertySignatures
        } = record(r.key.ast, r.value.ast);
        propertySignatures.forEach((ps) => {
          from.push(ps);
          to.push(new PropertySignature(ps.name, typeAST(ps.type), ps.isOptional, ps.isReadonly, ps.annotations));
        });
        indexSignatures.forEach((is2) => {
          issFrom.push(is2);
          issTo.push(new IndexSignature(is2.parameter, typeAST(is2.type), is2.isReadonly));
        });
      }
      return new Transformation$1(new TypeLiteral(from, issFrom, {
        [AutoTitleAnnotationId]: "Struct (Encoded side)"
      }), new TypeLiteral(to, issTo, {
        [AutoTitleAnnotationId]: "Struct (Type side)"
      }), new TypeLiteralTransformation(transformations));
    }
  }
  const iss = [];
  for (const r of records) {
    const {
      indexSignatures,
      propertySignatures
    } = record(r.key.ast, r.value.ast);
    propertySignatures.forEach((ps) => pss.push(ps));
    indexSignatures.forEach((is2) => iss.push(is2));
  }
  return new TypeLiteral(pss, iss);
};
const lazilyMergeDefaults = (fields, out) => {
  const ownKeys$1 = ownKeys(fields);
  for (const key of ownKeys$1) {
    const field = fields[key];
    if (out[key] === void 0 && isPropertySignature(field)) {
      const ast = field.ast;
      const defaultValue = ast._tag === "PropertySignatureDeclaration" ? ast.defaultValue : ast.to.defaultValue;
      if (defaultValue !== void 0) {
        out[key] = defaultValue();
      }
    }
  }
  return out;
};
function makeTypeLiteralClass(fields, records, ast = getDefaultTypeLiteralAST(fields, records)) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeTypeLiteralClass(this.fields, this.records, mergeSchemaAnnotations(this.ast, annotations2));
    }
    static pick(...keys2) {
      return Struct(pick$1(fields, ...keys2));
    }
    static omit(...keys2) {
      return Struct(omit$1(fields, ...keys2));
    }
  }, __publicField(_a2, "fields", {
    ...fields
  }), __publicField(_a2, "records", [...records]), __publicField(_a2, "make", (props, options2) => {
    const propsWithDefaults = lazilyMergeDefaults(fields, {
      ...props
    });
    return getDisableValidationMakeOption(options2) ? propsWithDefaults : validateSync(_a2)(propsWithDefaults);
  }), _a2;
}
function Struct(fields, ...records) {
  return makeTypeLiteralClass(fields, records);
}
const tag$1 = (tag2) => Literal2(tag2).pipe(propertySignature, withConstructorDefault(() => tag2));
const TaggedStruct = (value2, fields) => Struct({
  _tag: tag$1(value2),
  ...fields
});
function makeRecordClass(key, value2, ast) {
  var _a2;
  return _a2 = class extends makeTypeLiteralClass({}, [{
    key,
    value: value2
  }], ast) {
    static annotations(annotations2) {
      return makeRecordClass(key, value2, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "key", key), __publicField(_a2, "value", value2), _a2;
}
const Record = (options2) => makeRecordClass(options2.key, options2.value);
const pick = (...keys2) => (self2) => make$7(pick$2(self2.ast, keys2));
const omit = (...keys2) => (self2) => make$7(omit$4(self2.ast, keys2));
const pluck = /* @__PURE__ */ dual(2, (schema2, key) => {
  const ps = getPropertyKeyIndexedAccess(typeAST(schema2.ast), key);
  const value2 = make$7(ps.isOptional ? orUndefined(ps.type) : ps.type);
  const out = transform(schema2.pipe(pick(key)), value2, {
    strict: true,
    decode: (i) => i[key],
    encode: (a) => ps.isOptional && a === void 0 ? {} : {
      [key]: a
    }
  });
  return out;
});
function makeBrandClass(from, ast) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeBrandClass(this.from, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "make", (a, options2) => {
    return getDisableValidationMakeOption(options2) ? a : validateSync(_a2)(a);
  }), __publicField(_a2, "from", from), _a2;
}
const mutable = (schema2) => make$7(mutable$1(schema2.ast));
const intersectTypeLiterals = (x, y, path) => {
  if (isTypeLiteral(x) && isTypeLiteral(y)) {
    const propertySignatures = [...x.propertySignatures];
    for (const ps of y.propertySignatures) {
      const name = ps.name;
      const i = propertySignatures.findIndex((ps2) => ps2.name === name);
      if (i === -1) {
        propertySignatures.push(ps);
      } else {
        const {
          isOptional,
          type
        } = propertySignatures[i];
        propertySignatures[i] = new PropertySignature(name, extendAST(type, ps.type, path.concat(name)), isOptional, true);
      }
    }
    return new TypeLiteral(propertySignatures, x.indexSignatures.concat(y.indexSignatures));
  }
  throw new Error(getSchemaExtendErrorMessage(x, y, path));
};
const preserveRefinementAnnotations = /* @__PURE__ */ omitAnnotations([IdentifierAnnotationId]);
const addRefinementToMembers = (refinement, asts) => asts.map((ast) => new Refinement$1(ast, refinement.filter, preserveRefinementAnnotations(refinement)));
const extendAST = (x, y, path) => Union$1.make(intersectUnionMembers([x], [y], path));
const getTypes = (ast) => isUnion(ast) ? ast.types : [ast];
const intersectUnionMembers = (xs, ys, path) => flatMap$9(xs, (x) => flatMap$9(ys, (y) => {
  switch (y._tag) {
    case "Literal": {
      if (isString(y.literal) && isStringKeyword(x) || isNumber(y.literal) && isNumberKeyword(x) || isBoolean(y.literal) && isBooleanKeyword(x)) {
        return [y];
      }
      break;
    }
    case "StringKeyword": {
      if (y === stringKeyword) {
        if (isStringKeyword(x) || isLiteral(x) && isString(x.literal)) {
          return [x];
        } else if (isRefinement$1(x)) {
          return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
        }
      } else if (x === stringKeyword) {
        return [y];
      }
      break;
    }
    case "NumberKeyword": {
      if (y === numberKeyword) {
        if (isNumberKeyword(x) || isLiteral(x) && isNumber(x.literal)) {
          return [x];
        } else if (isRefinement$1(x)) {
          return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
        }
      } else if (x === numberKeyword) {
        return [y];
      }
      break;
    }
    case "BooleanKeyword": {
      if (y === booleanKeyword) {
        if (isBooleanKeyword(x) || isLiteral(x) && isBoolean(x.literal)) {
          return [x];
        } else if (isRefinement$1(x)) {
          return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
        }
      } else if (x === booleanKeyword) {
        return [y];
      }
      break;
    }
    case "Union":
      return intersectUnionMembers(getTypes(x), y.types, path);
    case "Suspend":
      return [new Suspend(() => extendAST(x, y.f(), path))];
    case "Refinement":
      return addRefinementToMembers(y, intersectUnionMembers(getTypes(x), getTypes(y.from), path));
    case "TypeLiteral": {
      switch (x._tag) {
        case "Union":
          return intersectUnionMembers(x.types, [y], path);
        case "Suspend":
          return [new Suspend(() => extendAST(x.f(), y, path))];
        case "Refinement":
          return addRefinementToMembers(x, intersectUnionMembers(getTypes(x.from), [y], path));
        case "TypeLiteral":
          return [intersectTypeLiterals(x, y, path)];
        case "Transformation": {
          const transformation = x.transformation;
          const from = intersectTypeLiterals(x.from, y, path);
          const to = intersectTypeLiterals(x.to, typeAST(y), path);
          switch (transformation._tag) {
            case "TypeLiteralTransformation":
              return [new Transformation$1(from, to, new TypeLiteralTransformation(transformation.propertySignatureTransformations))];
            case "ComposeTransformation":
              return [new Transformation$1(from, to, composeTransformation)];
            case "FinalTransformation":
              return [new Transformation$1(from, to, new FinalTransformation((fromA, options2, ast, fromI) => map$1(transformation.decode(fromA, options2, ast, fromI), (partial) => ({
                ...fromA,
                ...partial
              })), (toI, options2, ast, toA) => map$1(transformation.encode(toI, options2, ast, toA), (partial) => ({
                ...toI,
                ...partial
              }))))];
          }
        }
      }
      break;
    }
    case "Transformation": {
      if (isTransformation$1(x)) {
        if (isTypeLiteralTransformation(y.transformation) && isTypeLiteralTransformation(x.transformation)) {
          return [new Transformation$1(intersectTypeLiterals(x.from, y.from, path), intersectTypeLiterals(x.to, y.to, path), new TypeLiteralTransformation(y.transformation.propertySignatureTransformations.concat(x.transformation.propertySignatureTransformations)))];
        }
      } else {
        return intersectUnionMembers([y], [x], path);
      }
      break;
    }
  }
  throw new Error(getSchemaExtendErrorMessage(x, y, path));
}));
const extend = /* @__PURE__ */ dual(2, (self2, that) => make$7(extendAST(self2.ast, that.ast, [])));
const suspend$1 = (f) => make$7(new Suspend(() => f().ast));
const RefineSchemaId = /* @__PURE__ */ Symbol.for("effect/SchemaId/Refine");
function makeRefineClass(from, filter2, ast) {
  var _a2, _b2, _c2;
  return _c2 = class extends (_b2 = make$7(ast), _a2 = RefineSchemaId, _b2) {
    static annotations(annotations2) {
      return makeRefineClass(this.from, this.filter, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_c2, _a2, from), __publicField(_c2, "from", from), __publicField(_c2, "filter", filter2), __publicField(_c2, "make", (a, options2) => {
    return getDisableValidationMakeOption(options2) ? a : validateSync(_c2)(a);
  }), _c2;
}
const fromFilterPredicateReturnTypeItem = (item, ast, input) => {
  if (isBoolean(item)) {
    return item ? none$4() : some(new Type2(ast, input));
  }
  if (isString(item)) {
    return some(new Type2(ast, input, item));
  }
  if (item !== void 0) {
    if ("_tag" in item) {
      return some(item);
    }
    const issue = new Type2(ast, input, item.message);
    return some(isNonEmptyReadonlyArray(item.path) ? new Pointer(item.path, input, issue) : issue);
  }
  return none$4();
};
const toFilterParseIssue = (out, ast, input) => {
  if (isSingle(out)) {
    return fromFilterPredicateReturnTypeItem(out, ast, input);
  }
  if (isNonEmptyReadonlyArray(out)) {
    const issues = filterMap$3(out, (issue) => fromFilterPredicateReturnTypeItem(issue, ast, input));
    if (isNonEmptyReadonlyArray(issues)) {
      return some(issues.length === 1 ? issues[0] : new Composite2(ast, input, issues));
    }
  }
  return none$4();
};
function filter$1(predicate, annotations2) {
  return (self2) => {
    function filter2(input, options2, ast2) {
      return toFilterParseIssue(predicate(input, options2, ast2), ast2, input);
    }
    const ast = new Refinement$1(self2.ast, filter2, toASTAnnotations(annotations2));
    return makeRefineClass(self2, filter2, ast);
  };
}
function makeTransformationClass(from, to, ast) {
  var _a2;
  return _a2 = class extends make$7(ast) {
    static annotations(annotations2) {
      return makeTransformationClass(this.from, this.to, mergeSchemaAnnotations(this.ast, annotations2));
    }
  }, __publicField(_a2, "from", from), __publicField(_a2, "to", to), _a2;
}
const transformOrFail = /* @__PURE__ */ dual((args2) => isSchema(args2[0]) && isSchema(args2[1]), (from, to, options2) => makeTransformationClass(from, to, new Transformation$1(from.ast, to.ast, new FinalTransformation(options2.decode, options2.encode))));
const transform = /* @__PURE__ */ dual((args2) => isSchema(args2[0]) && isSchema(args2[1]), (from, to, options2) => transformOrFail(from, to, {
  strict: true,
  decode: (fromA, _options, _ast, toA) => succeed(options2.decode(fromA, toA)),
  encode: (toI, _options, _ast, toA) => succeed(options2.encode(toI, toA))
}));
const IntSchemaId = IntSchemaId$1;
const int = (annotations2) => (self2) => self2.pipe(filter$1((a) => Number.isSafeInteger(a), {
  schemaId: IntSchemaId,
  title: "int",
  description: "an integer",
  jsonSchema: {
    type: "integer"
  },
  ...annotations2
}));
const BetweenSchemaId = BetweenSchemaId$1;
const between = (minimum, maximum, annotations2) => (self2) => self2.pipe(filter$1((a) => a >= minimum && a <= maximum, {
  schemaId: BetweenSchemaId,
  title: `between(${minimum}, ${maximum})`,
  description: `a number between ${minimum} and ${maximum}`,
  jsonSchema: {
    minimum,
    maximum
  },
  ...annotations2
}));
class Int extends (/* @__PURE__ */ Number$.pipe(/* @__PURE__ */ int({
  identifier: "Int"
}))) {
}
const toComposite = (eff, onSuccess, ast, actual) => mapBoth(eff, {
  onFailure: (e) => new Composite2(ast, actual, e),
  onSuccess
});
class Uint8ArrayFromSelf extends (/* @__PURE__ */ declare(isUint8Array, {
  identifier: "Uint8ArrayFromSelf",
  pretty: () => (u8arr) => `new Uint8Array(${JSON.stringify(Array.from(u8arr))})`,
  arbitrary: () => (fc) => fc.uint8Array(),
  equivalence: () => getEquivalence$2(equals$1)
})) {
}
class Uint8 extends (/* @__PURE__ */ Number$.pipe(/* @__PURE__ */ between(0, 255, {
  identifier: "Uint8",
  description: "a 8-bit unsigned integer"
}))) {
}
class Uint8Array$ extends (/* @__PURE__ */ transform(Array$(Uint8).annotations({
  description: "an array of 8-bit unsigned integers to be decoded into a Uint8Array"
}), Uint8ArrayFromSelf, {
  strict: true,
  decode: (i) => Uint8Array.from(i),
  encode: (a) => Array.from(a)
}).annotations({
  identifier: "Uint8Array"
})) {
}
const makeUint8ArrayTransformation = (id2, decode2, encode2) => transformOrFail(String$.annotations({
  description: "a string to be decoded into a Uint8Array"
}), Uint8ArrayFromSelf, {
  strict: true,
  decode: (i, _, ast) => mapLeft(decode2(i), (decodeException) => new Type2(ast, i, decodeException.message)),
  encode: (a) => succeed(encode2(a))
}).annotations({
  identifier: id2
});
const Uint8ArrayFromBase64 = /* @__PURE__ */ makeUint8ArrayTransformation("Uint8ArrayFromBase64", decodeBase64, encodeBase64);
const OptionNoneEncoded = /* @__PURE__ */ Struct({
  _tag: Literal2("None")
}).annotations({
  description: "NoneEncoded"
});
const optionSomeEncoded = (value2) => Struct({
  _tag: Literal2("Some"),
  value: value2
}).annotations({
  description: `SomeEncoded<${format(value2)}>`
});
const optionEncoded = (value2) => Union(OptionNoneEncoded, optionSomeEncoded(value2)).annotations({
  description: `OptionEncoded<${format(value2)}>`
});
const optionDecode = (input) => input._tag === "None" ? none$4() : some(input.value);
const optionArbitrary = (value2, ctx) => (fc) => fc.oneof(ctx, fc.record({
  _tag: fc.constant("None")
}), fc.record({
  _tag: fc.constant("Some"),
  value: value2(fc)
})).map(optionDecode);
const optionPretty = (value2) => match$8({
  onNone: () => "none()",
  onSome: (a) => `some(${value2(a)})`
});
const optionParse = (decodeUnknown2) => (u, options2, ast) => isOption(u) ? isNone(u) ? succeed(none$4()) : toComposite(decodeUnknown2(u.value, options2), some, ast, u) : fail$1(new Type2(ast, u));
const OptionFromSelf = (value2) => {
  return declare([value2], {
    decode: (value3) => optionParse(decodeUnknown$1(value3)),
    encode: (value3) => optionParse(encodeUnknown$1(value3))
  }, {
    description: `Option<${format(value2)}>`,
    pretty: optionPretty,
    arbitrary: optionArbitrary,
    equivalence: getEquivalence$3
  });
};
const makeNoneEncoded = {
  _tag: "None"
};
const makeSomeEncoded = (value2) => ({
  _tag: "Some",
  value: value2
});
function Option(value2) {
  const value_ = asSchema(value2);
  const out = transform(optionEncoded(value_), OptionFromSelf(typeSchema(value_)), {
    strict: true,
    decode: (i) => optionDecode(i),
    encode: (a) => match$8(a, {
      onNone: () => makeNoneEncoded,
      onSome: makeSomeEncoded
    })
  });
  return out;
}
const isField = (u) => isSchema(u) || isPropertySignature(u);
const isFields = (fields) => ownKeys(fields).every((key) => isField(fields[key]));
const getFields = (hasFields) => "fields" in hasFields ? hasFields.fields : getFields(hasFields[RefineSchemaId]);
const getSchemaFromFieldsOr = (fieldsOr) => isFields(fieldsOr) ? Struct(fieldsOr) : isSchema(fieldsOr) ? fieldsOr : Struct(getFields(fieldsOr));
const getFieldsFromFieldsOr = (fieldsOr) => isFields(fieldsOr) ? fieldsOr : getFields(fieldsOr);
const Class3 = (identifier2) => (fieldsOr, annotations2) => makeClass({
  kind: "Class",
  identifier: identifier2,
  schema: getSchemaFromFieldsOr(fieldsOr),
  fields: getFieldsFromFieldsOr(fieldsOr),
  Base: Class$2,
  annotations: annotations2
});
const getClassTag = (tag2) => withConstructorDefault(propertySignature(Literal2(tag2)), () => tag2);
const TaggedError = (identifier2) => (tag2, fieldsOr, annotations2) => {
  class Base2 extends Error$1 {
  }
  Base2.prototype.name = tag2;
  const fields = getFieldsFromFieldsOr(fieldsOr);
  const schema2 = getSchemaFromFieldsOr(fieldsOr);
  const newFields = {
    _tag: getClassTag(tag2)
  };
  const taggedFields = extendFields(newFields, fields);
  const hasMessageField = "message" in taggedFields;
  class TaggedErrorClass extends makeClass({
    kind: "TaggedError",
    identifier: tag2,
    schema: extend(schema2, Struct(newFields)),
    fields: taggedFields,
    Base: Base2,
    annotations: annotations2,
    disableToString: true
  }) {
  }
  __publicField(TaggedErrorClass, "_tag", tag2);
  if (!hasMessageField) {
    Object.defineProperty(TaggedErrorClass.prototype, "message", {
      get() {
        return `{ ${ownKeys(fields).map((p) => `${formatPropertyKey$1(p)}: ${formatUnknown(this[p])}`).join(", ")} }`;
      },
      enumerable: false,
      // mirrors the built-in Error.prototype.message, whose descriptor is also non-enumerable
      configurable: true
    });
  }
  return TaggedErrorClass;
};
const extendFields = (a, b) => {
  const out = {
    ...a
  };
  for (const key of ownKeys(b)) {
    if (key in a) {
      throw new Error(getASTDuplicatePropertySignatureErrorMessage(key));
    }
    out[key] = b[key];
  }
  return out;
};
function getDisableValidationMakeOption(options2) {
  return isBoolean(options2) ? options2 : (options2 == null ? void 0 : options2.disableValidation) ?? false;
}
const astCache = /* @__PURE__ */ globalValue("effect/Schema/astCache", () => /* @__PURE__ */ new WeakMap());
const getClassAnnotations = (annotations2) => {
  if (annotations2 === void 0) {
    return [];
  } else if (Array.isArray(annotations2)) {
    return annotations2;
  } else {
    return [annotations2];
  }
};
const makeClass = ({
  Base: Base2,
  annotations: annotations2,
  disableToString,
  fields,
  identifier: identifier2,
  kind,
  schema: schema2
}) => {
  var _a2, _b2;
  const classSymbol = Symbol.for(`effect/Schema/${kind}/${identifier2}`);
  const [typeAnnotations, transformationAnnotations, encodedAnnotations] = getClassAnnotations(annotations2);
  const typeSchema_ = typeSchema(schema2);
  const declarationSurrogate = typeSchema_.annotations({
    identifier: identifier2,
    ...typeAnnotations
  });
  const typeSide = typeSchema_.annotations({
    [AutoTitleAnnotationId]: `${identifier2} (Type side)`,
    ...typeAnnotations
  });
  const constructorSchema = schema2.annotations({
    [AutoTitleAnnotationId]: `${identifier2} (Constructor)`,
    ...typeAnnotations
  });
  const encodedSide = schema2.annotations({
    [AutoTitleAnnotationId]: `${identifier2} (Encoded side)`,
    ...encodedAnnotations
  });
  const transformationSurrogate = schema2.annotations({
    [JSONIdentifierAnnotationId]: identifier2,
    ...encodedAnnotations,
    ...typeAnnotations,
    ...transformationAnnotations
  });
  const fallbackInstanceOf = (u) => hasProperty(u, classSymbol) && is(typeSide)(u);
  const klass = (_b2 = class extends Base2 {
    constructor(props = {}, options2 = false) {
      props = {
        ...props
      };
      if (kind !== "Class") {
        delete props["_tag"];
      }
      props = lazilyMergeDefaults(fields, props);
      if (!getDisableValidationMakeOption(options2)) {
        props = validateSync(constructorSchema)(props);
      }
      super(props, true);
    }
    static get ast() {
      let out = astCache.get(this);
      if (out) {
        return out;
      }
      const declaration = declare([schema2], {
        decode: () => (input, _, ast) => input instanceof this || fallbackInstanceOf(input) ? succeed(input) : fail$1(new Type2(ast, input)),
        encode: () => (input, options2) => input instanceof this ? succeed(input) : map$1(encodeUnknown$1(typeSide)(input, options2), (props) => new this(props, true))
      }, {
        identifier: identifier2,
        pretty: (pretty2) => (self2) => `${identifier2}(${pretty2(self2)})`,
        // @ts-expect-error
        arbitrary: (arb) => (fc) => arb(fc).map((props) => new this(props)),
        equivalence: identity,
        [SurrogateAnnotationId]: declarationSurrogate.ast,
        ...typeAnnotations
      });
      out = transform(encodedSide, declaration, {
        strict: true,
        decode: (i) => new this(i, true),
        encode: identity
      }).annotations({
        [SurrogateAnnotationId]: transformationSurrogate.ast,
        ...transformationAnnotations
      }).ast;
      astCache.set(this, out);
      return out;
    }
    static pipe() {
      return pipeArguments(this, arguments);
    }
    static annotations(annotations3) {
      return make$7(this.ast).annotations(annotations3);
    }
    static toString() {
      return `(${String(encodedSide)} <-> ${identifier2})`;
    }
    // ----------------
    // Class interface
    // ----------------
    static make(...args2) {
      return new this(...args2);
    }
    static extend(identifier3) {
      return (newFieldsOr, annotations3) => {
        const newFields = getFieldsFromFieldsOr(newFieldsOr);
        const newSchema = getSchemaFromFieldsOr(newFieldsOr);
        const extendedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier: identifier3,
          schema: extend(schema2, newSchema),
          fields: extendedFields,
          Base: this,
          annotations: annotations3
        });
      };
    }
    static transformOrFail(identifier3) {
      return (newFieldsOr, options2, annotations3) => {
        const transformedFields = extendFields(fields, newFieldsOr);
        return makeClass({
          kind,
          identifier: identifier3,
          schema: transformOrFail(schema2, typeSchema(Struct(transformedFields)), options2),
          fields: transformedFields,
          Base: this,
          annotations: annotations3
        });
      };
    }
    static transformOrFailFrom(identifier3) {
      return (newFields, options2, annotations3) => {
        const transformedFields = extendFields(fields, newFields);
        return makeClass({
          kind,
          identifier: identifier3,
          schema: transformOrFail(encodedSchema(schema2), Struct(transformedFields), options2),
          fields: transformedFields,
          Base: this,
          annotations: annotations3
        });
      };
    }
    // ----------------
    // other
    // ----------------
    get [(_a2 = TypeId$9, classSymbol)]() {
      return classSymbol;
    }
  }, // ----------------
  // Schema interface
  // ----------------
  __publicField(_b2, _a2, variance), __publicField(_b2, "fields", {
    ...fields
  }), __publicField(_b2, "identifier", identifier2), _b2);
  if (disableToString !== true) {
    Object.defineProperty(klass.prototype, "toString", {
      value() {
        return `${identifier2}({ ${ownKeys(fields).map((p) => `${formatPropertyKey$1(p)}: ${formatUnknown(this[p])}`).join(", ")} })`;
      },
      configurable: true,
      writable: true
    });
  }
  return klass;
};
const FiberIdNoneEncoded = /* @__PURE__ */ Struct({
  _tag: Literal2("None")
}).annotations({
  identifier: "FiberIdNoneEncoded"
});
const FiberIdRuntimeEncoded = /* @__PURE__ */ Struct({
  _tag: Literal2("Runtime"),
  id: Int,
  startTimeMillis: Int
}).annotations({
  identifier: "FiberIdRuntimeEncoded"
});
const FiberIdCompositeEncoded = /* @__PURE__ */ Struct({
  _tag: Literal2("Composite"),
  left: suspend$1(() => FiberIdEncoded),
  right: suspend$1(() => FiberIdEncoded)
}).annotations({
  identifier: "FiberIdCompositeEncoded"
});
const FiberIdEncoded = /* @__PURE__ */ Union(FiberIdNoneEncoded, FiberIdRuntimeEncoded, FiberIdCompositeEncoded).annotations({
  identifier: "FiberIdEncoded"
});
const fiberIdArbitrary = (fc) => fc.letrec((tie) => ({
  None: fc.record({
    _tag: fc.constant("None")
  }),
  Runtime: fc.record({
    _tag: fc.constant("Runtime"),
    id: fc.integer(),
    startTimeMillis: fc.integer()
  }),
  Composite: fc.record({
    _tag: fc.constant("Composite"),
    left: tie("FiberId"),
    right: tie("FiberId")
  }),
  FiberId: fc.oneof(tie("None"), tie("Runtime"), tie("Composite"))
})).FiberId.map(fiberIdDecode);
const fiberIdPretty = (fiberId2) => {
  switch (fiberId2._tag) {
    case "None":
      return "FiberId.none";
    case "Runtime":
      return `FiberId.runtime(${fiberId2.id}, ${fiberId2.startTimeMillis})`;
    case "Composite":
      return `FiberId.composite(${fiberIdPretty(fiberId2.right)}, ${fiberIdPretty(fiberId2.left)})`;
  }
};
const fiberIdDecode = (input) => {
  switch (input._tag) {
    case "None":
      return none$2;
    case "Runtime":
      return runtime$2(input.id, input.startTimeMillis);
    case "Composite":
      return composite(fiberIdDecode(input.left), fiberIdDecode(input.right));
  }
};
const causeDieEncoded = (defect) => Struct({
  _tag: Literal2("Die"),
  defect
});
const CauseEmptyEncoded = /* @__PURE__ */ Struct({
  _tag: /* @__PURE__ */ Literal2("Empty")
});
const causeFailEncoded = (error) => Struct({
  _tag: Literal2("Fail"),
  error
});
const CauseInterruptEncoded = /* @__PURE__ */ Struct({
  _tag: /* @__PURE__ */ Literal2("Interrupt"),
  fiberId: FiberIdEncoded
});
let causeEncodedId = 0;
const causeEncoded = (error, defect) => {
  const error_ = asSchema(error);
  const defect_ = asSchema(defect);
  const suspended2 = suspend$1(() => out);
  const out = Union(CauseEmptyEncoded, causeFailEncoded(error_), causeDieEncoded(defect_), CauseInterruptEncoded, Struct({
    _tag: Literal2("Sequential"),
    left: suspended2,
    right: suspended2
  }), Struct({
    _tag: Literal2("Parallel"),
    left: suspended2,
    right: suspended2
  })).annotations({
    title: `CauseEncoded<${format(error)}>`,
    [JSONIdentifierAnnotationId]: `CauseEncoded${causeEncodedId++}`
  });
  return out;
};
const causeArbitrary = (error, defect) => (fc) => fc.letrec((tie) => ({
  Empty: fc.record({
    _tag: fc.constant("Empty")
  }),
  Fail: fc.record({
    _tag: fc.constant("Fail"),
    error: error(fc)
  }),
  Die: fc.record({
    _tag: fc.constant("Die"),
    defect: defect(fc)
  }),
  Interrupt: fc.record({
    _tag: fc.constant("Interrupt"),
    fiberId: fiberIdArbitrary(fc)
  }),
  Sequential: fc.record({
    _tag: fc.constant("Sequential"),
    left: tie("Cause"),
    right: tie("Cause")
  }),
  Parallel: fc.record({
    _tag: fc.constant("Parallel"),
    left: tie("Cause"),
    right: tie("Cause")
  }),
  Cause: fc.oneof(tie("Empty"), tie("Fail"), tie("Die"), tie("Interrupt"), tie("Sequential"), tie("Parallel"))
})).Cause.map(causeDecode);
const causePretty = (error) => (cause) => {
  const f = (cause2) => {
    switch (cause2._tag) {
      case "Empty":
        return "Cause.empty";
      case "Fail":
        return `Cause.fail(${error(cause2.error)})`;
      case "Die":
        return `Cause.die(${pretty(cause2)})`;
      case "Interrupt":
        return `Cause.interrupt(${fiberIdPretty(cause2.fiberId)})`;
      case "Sequential":
        return `Cause.sequential(${f(cause2.left)}, ${f(cause2.right)})`;
      case "Parallel":
        return `Cause.parallel(${f(cause2.left)}, ${f(cause2.right)})`;
    }
  };
  return f(cause);
};
const causeParse = (decodeUnknown2) => (u, options2, ast) => isCause(u) ? toComposite(decodeUnknown2(causeEncode(u), options2), causeDecode, ast, u) : fail$1(new Type2(ast, u));
const CauseFromSelf = ({
  defect,
  error
}) => {
  return declare([error, defect], {
    decode: (error2, defect2) => causeParse(decodeUnknown$1(causeEncoded(error2, defect2))),
    encode: (error2, defect2) => causeParse(encodeUnknown$1(causeEncoded(error2, defect2)))
  }, {
    title: `Cause<${error.ast}>`,
    pretty: causePretty,
    arbitrary: causeArbitrary
  });
};
function causeDecode(cause) {
  switch (cause._tag) {
    case "Empty":
      return empty$9;
    case "Fail":
      return fail$8(cause.error);
    case "Die":
      return die$4(cause.defect);
    case "Interrupt":
      return interrupt$3(fiberIdDecode(cause.fiberId));
    case "Sequential":
      return sequential(causeDecode(cause.left), causeDecode(cause.right));
    case "Parallel":
      return parallel(causeDecode(cause.left), causeDecode(cause.right));
  }
}
function causeEncode(cause) {
  switch (cause._tag) {
    case "Empty":
      return {
        _tag: "Empty"
      };
    case "Fail":
      return {
        _tag: "Fail",
        error: cause.error
      };
    case "Die":
      return {
        _tag: "Die",
        defect: cause.defect
      };
    case "Interrupt":
      return {
        _tag: "Interrupt",
        fiberId: cause.fiberId
      };
    case "Sequential":
      return {
        _tag: "Sequential",
        left: causeEncode(cause.left),
        right: causeEncode(cause.right)
      };
    case "Parallel":
      return {
        _tag: "Parallel",
        left: causeEncode(cause.left),
        right: causeEncode(cause.right)
      };
  }
}
const Cause = ({
  defect,
  error
}) => {
  const error_ = asSchema(error);
  const defect_ = asSchema(defect);
  const out = transform(causeEncoded(error_, defect_), CauseFromSelf({
    error: typeSchema(error_),
    defect: typeSchema(defect_)
  }), {
    strict: false,
    decode: (i) => causeDecode(i),
    encode: (a) => causeEncode(a)
  });
  return out;
};
class Defect extends (/* @__PURE__ */ transform(Unknown, Unknown, {
  strict: true,
  decode: (i) => {
    if (isObject(i) && "message" in i && typeof i.message === "string") {
      const err = new Error(i.message, {
        cause: i
      });
      if ("name" in i && typeof i.name === "string") {
        err.name = i.name;
      }
      err.stack = "stack" in i && typeof i.stack === "string" ? i.stack : "";
      return err;
    }
    return String(i);
  },
  encode: (a) => {
    if (a instanceof Error) {
      return {
        name: a.name,
        message: a.message
        // no stack because of security reasons
      };
    }
    return prettyErrorMessage(a);
  }
}).annotations({
  identifier: "Defect"
})) {
}
const symbolSerializable = /* @__PURE__ */ Symbol.for("effect/Schema/Serializable/symbol");
const serialize = (self2) => encodeUnknown(self2[symbolSerializable])(self2);
const symbolWithResult = /* @__PURE__ */ Symbol.for("effect/Schema/Serializable/symbolResult");
const failureSchema = (self2) => self2[symbolWithResult].failure;
const successSchema = (self2) => self2[symbolWithResult].success;
const serializeFailure = /* @__PURE__ */ dual(2, (self2, value2) => encode(self2[symbolWithResult].failure)(value2));
const serializeSuccess = /* @__PURE__ */ dual(2, (self2, value2) => encode(self2[symbolWithResult].success)(value2));
const TaggedRequest = (identifier2) => (tag2, options2, annotations2) => {
  var _a2;
  const taggedFields = extendFields({
    _tag: getClassTag(tag2)
  }, options2.payload);
  return _a2 = class extends makeClass({
    kind: "TaggedRequest",
    identifier: tag2,
    schema: Struct(taggedFields),
    fields: taggedFields,
    Base: Class$1,
    annotations: annotations2
  }) {
    get [symbolSerializable]() {
      return this.constructor;
    }
    get [symbolWithResult]() {
      return {
        failure: options2.failure,
        success: options2.success
      };
    }
  }, __publicField(_a2, "_tag", tag2), __publicField(_a2, "success", options2.success), __publicField(_a2, "failure", options2.failure), _a2;
};
const equivalence = (schema2) => go(schema2.ast, []);
const getEquivalenceAnnotation = /* @__PURE__ */ getAnnotation(EquivalenceAnnotationId);
const go = (ast, path) => {
  const hook = getEquivalenceAnnotation(ast);
  if (isSome(hook)) {
    switch (ast._tag) {
      case "Declaration":
        return hook.value(...ast.typeParameters.map((tp) => go(tp, path)));
      case "Refinement":
        return hook.value(go(ast.from, path));
      default:
        return hook.value();
    }
  }
  switch (ast._tag) {
    case "NeverKeyword":
      throw new Error(getEquivalenceUnsupportedErrorMessage(ast, path));
    case "Transformation":
      return go(ast.to, path);
    case "Declaration":
    case "Literal":
    case "StringKeyword":
    case "TemplateLiteral":
    case "UniqueSymbol":
    case "SymbolKeyword":
    case "UnknownKeyword":
    case "AnyKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "Enums":
    case "ObjectKeyword":
      return equals$1;
    case "Refinement":
      return go(ast.from, path);
    case "Suspend": {
      const get2 = memoizeThunk(() => go(ast.f(), path));
      return (a, b) => get2()(a, b);
    }
    case "TupleType": {
      const elements = ast.elements.map((element, i) => go(element.type, path.concat(i)));
      const rest = ast.rest.map((annotatedAST) => go(annotatedAST.type, path));
      return make$X((a, b) => {
        const len = a.length;
        if (len !== b.length) {
          return false;
        }
        let i = 0;
        for (; i < Math.min(len, ast.elements.length); i++) {
          if (!elements[i](a[i], b[i])) {
            return false;
          }
        }
        if (isNonEmptyReadonlyArray(rest)) {
          const [head2, ...tail] = rest;
          for (; i < len - tail.length; i++) {
            if (!head2(a[i], b[i])) {
              return false;
            }
          }
          for (let j = 0; j < tail.length; j++) {
            i += j;
            if (!tail[j](a[i], b[i])) {
              return false;
            }
          }
        }
        return true;
      });
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return equals$1;
      }
      const propertySignatures = ast.propertySignatures.map((ps) => go(ps.type, path.concat(ps.name)));
      const indexSignatures = ast.indexSignatures.map((is2) => go(is2.type, path));
      return make$X((a, b) => {
        const aStringKeys = Object.keys(a);
        const aSymbolKeys = Object.getOwnPropertySymbols(a);
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = ast.propertySignatures[i];
          const name = ps.name;
          const aHas = Object.prototype.hasOwnProperty.call(a, name);
          const bHas = Object.prototype.hasOwnProperty.call(b, name);
          if (ps.isOptional) {
            if (aHas !== bHas) {
              return false;
            }
          }
          if (aHas && bHas && !propertySignatures[i](a[name], b[name])) {
            return false;
          }
        }
        let bSymbolKeys;
        let bStringKeys;
        for (let i = 0; i < indexSignatures.length; i++) {
          const is2 = ast.indexSignatures[i];
          const encodedParameter = getEncodedParameter(is2.parameter);
          const isSymbol2 = isSymbolKeyword(encodedParameter);
          if (isSymbol2) {
            bSymbolKeys = bSymbolKeys || Object.getOwnPropertySymbols(b);
            if (aSymbolKeys.length !== bSymbolKeys.length) {
              return false;
            }
          } else {
            bStringKeys = bStringKeys || Object.keys(b);
            if (aStringKeys.length !== bStringKeys.length) {
              return false;
            }
          }
          const aKeys = isSymbol2 ? aSymbolKeys : aStringKeys;
          for (let j = 0; j < aKeys.length; j++) {
            const key = aKeys[j];
            if (!Object.prototype.hasOwnProperty.call(b, key) || !indexSignatures[i](a[key], b[key])) {
              return false;
            }
          }
        }
        return true;
      });
    }
    case "Union": {
      const searchTree = getSearchTree(ast.types, true);
      const ownKeys$1 = ownKeys(searchTree.keys);
      const len = ownKeys$1.length;
      return make$X((a, b) => {
        let candidates = [];
        if (len > 0 && isRecordOrArray(a)) {
          for (let i = 0; i < len; i++) {
            const name = ownKeys$1[i];
            const buckets = searchTree.keys[name].buckets;
            if (Object.prototype.hasOwnProperty.call(a, name)) {
              const literal = String(a[name]);
              if (Object.prototype.hasOwnProperty.call(buckets, literal)) {
                candidates = candidates.concat(buckets[literal]);
              }
            }
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise);
        }
        const tuples = candidates.map((ast2) => [go(ast2, path), is({
          ast: ast2
        })]);
        for (let i = 0; i < tuples.length; i++) {
          const [equivalence2, is2] = tuples[i];
          if (is2(a) && is2(b)) {
            if (equivalence2(a, b)) {
              return true;
            }
          }
        }
        return false;
      });
    }
  }
};
const asyncScoped = asyncScoped$1;
const catchAll = catchAll$1;
const empty$4 = empty$6;
const ensuring = ensuring$1;
const ensuringWith = ensuringWith$1;
const fail = fail$2;
const filter = filter$2;
const filterEffect = filterEffect$1;
const filterMap = filterMap$1;
const flatten = flatten$1;
const fromChannel = fromChannel$1;
const fromPubSub = fromPubSub$1;
const fromQueue = fromQueue$1;
const fromReadableStream = fromReadableStream$1;
const map = map$2;
const mapChunksEffect = mapChunksEffect$1;
const mapEffect = mapEffectOptions;
const mapError = mapError$2;
const merge$1 = merge$2;
const provideContext = provideContext$1;
const runCollect = runCollect$1;
const runDrain = runDrain$1;
const runForEachChunk = runForEachChunk$1;
const suspend = suspend$2;
const take = take$1;
const tap = tap$1;
const toReadableStreamEffect = toReadableStreamEffect$1;
const unwrap = unwrap$1;
const unwrapScoped = unwrapScoped$1;
const withSpan = withSpan$1;
const fromEventListener = fromEventListener$1;
const TypeId$8 = /* @__PURE__ */ Symbol.for("effect/Subscribable");
const SynchronizedRefTypeId = SynchronizedTypeId;
const SubscriptionRefSymbolKey = "effect/SubscriptionRef";
const SubscriptionRefTypeId = /* @__PURE__ */ Symbol.for(SubscriptionRefSymbolKey);
const subscriptionRefVariance = {
  /* c8 ignore next */
  _A: (_) => _
};
class SubscriptionRefImpl extends (_La = Class$4, _Ka = TypeId$h, _Ja = TypeId$8, _Ia = RefTypeId, _Ha = SynchronizedRefTypeId, _Ga = SubscriptionRefTypeId, _La) {
  constructor(ref, pubsub, semaphore) {
    super();
    __publicField(this, "ref");
    __publicField(this, "pubsub");
    __publicField(this, "semaphore");
    __publicField(this, _Ka, TypeId$h);
    __publicField(this, _Ja, TypeId$8);
    __publicField(this, _Ia, refVariance);
    __publicField(this, _Ha, synchronizedVariance);
    __publicField(this, _Ga, subscriptionRefVariance);
    __publicField(this, "get");
    this.ref = ref;
    this.pubsub = pubsub;
    this.semaphore = semaphore;
    this.get = get$5(this.ref);
  }
  commit() {
    return this.get;
  }
  get changes() {
    return pipe(get$5(this.ref), flatMap$4((a) => map$5(fromPubSub$1(this.pubsub, {
      scoped: true
    }), (s) => concat(make$h(a), s))), this.semaphore.withPermits(1), unwrapScoped$1);
  }
  modify(f) {
    return this.modifyEffect((a) => succeed$5(f(a)));
  }
  modifyEffect(f) {
    return pipe(get$5(this.ref), flatMap$4(f), flatMap$4(([b, a]) => pipe(set$3(this.ref, a), as(b), zipLeft(publish(this.pubsub, a)))), this.semaphore.withPermits(1));
  }
}
const get$3 = (self2) => get$5(self2.ref);
const make$6 = (value2) => pipe(all([unbounded$3(), make$A(value2), makeSemaphore(1)]), map$5(([pubsub, ref, semaphore]) => new SubscriptionRefImpl(ref, pubsub, semaphore)));
const set$2 = /* @__PURE__ */ dual(2, (self2, value2) => pipe(set$3(self2.ref, value2), zipLeft(publish(self2.pubsub, value2)), self2.semaphore.withPermits(1)));
const get$2 = get$3;
const make$5 = make$6;
const set$1 = set$2;
const tapChunk = (f) => (self2) => mapChunksEffect(self2, (chunks) => pipe(f(chunks), map$5(() => chunks)));
const waitUntil = dual(2, (sref, predicate) => pipe(sref.changes, filter(predicate), take(1), runCollect, map$5(unsafeHead)));
const defaultDateFormat = (date) => `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}.${date.getMilliseconds().toString().padStart(3, "0")}`;
const prettyWithThread = (threadName2) => replace(defaultLogger, prettyLogger({
  formatDate: (date) => `${defaultDateFormat(date)} ${threadName2}`
}));
const __vite_import_meta_env__$1 = {};
var define_process_env_default$1 = {};
const isDevEnv = () => {
  if (typeof process !== "undefined" && define_process_env_default$1 !== void 0) {
    return false;
  }
  if (__vite_import_meta_env__$1 !== void 0) {
    return false;
  }
  if (typeof globalThis !== "undefined" && globalThis.__DEV__) {
    return true;
  }
  return false;
};
const objectToString = (error) => {
  const str = error == null ? void 0 : error.toString();
  if (str !== "[object Object]")
    return str;
  try {
    return JSON.stringify(error, null, 2);
  } catch (e) {
    console.log(error);
    return "Error while printing error: " + e;
  }
};
const envTruish = (env2) => env2 !== void 0 && env2.toLowerCase() !== "false" && env2.toLowerCase() !== "0";
const shouldNeverHappen = (msg, ...args2) => {
  console.error(msg, ...args2);
  if (isDevEnv()) {
    debugger;
  }
  throw new Error(`This should never happen: ${msg}`);
};
var SpanKind;
(function(SpanKind2) {
  SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
  SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
  SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
  SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
  SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
const OtelSpanTypeId = /* @__PURE__ */ Symbol.for("@effect/opentelemetry/Tracer/OtelSpan");
({
  "internal": SpanKind.INTERNAL,
  "client": SpanKind.CLIENT,
  "server": SpanKind.SERVER,
  "producer": SpanKind.PRODUCER,
  "consumer": SpanKind.CONSUMER
});
const currentOtelSpan$1 = /* @__PURE__ */ flatMap$4(currentSpan, (span2) => {
  if (OtelSpanTypeId in span2) {
    return succeed$5(span2.span);
  }
  return fail$6(new NoSuchElementException());
});
const currentOtelSpan = currentOtelSpan$1;
const indent = (str, n, char = " ") => str.split("\n").map((line) => char.repeat(n) + line).join("\n");
const isNotUndefined = (_) => _ !== void 0;
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": false };
var define_process_env_default = {};
const env = (name) => {
  if (typeof process !== "undefined" && define_process_env_default !== void 0) {
    return define_process_env_default[name];
  }
  if (__vite_import_meta_env__ !== void 0) {
    return __vite_import_meta_env__[name];
  }
  return void 0;
};
env("LS_TRACE_VERBOSE") !== void 0 || env("VITE_LS_TRACE_VERBOSE") !== void 0;
const LS_DEV = envTruish(env("LS_DEV")) || envTruish(env("VITE_LS_DEV"));
envTruish(env("CI"));
function casesHandled(unexpectedCase) {
  debugger;
  throw new Error(`A case was not handled for value: ${truncate(objectToString(unexpectedCase), 1e3)}`);
}
const truncate = (str, length2) => {
  if (str.length > length2) {
    return str.slice(0, length2) + "...";
  } else {
    return str;
  }
};
const scopeWithCloseable = (fn2) => gen(function* () {
  const scope2 = yield* make$p();
  yield* addFinalizer((exit2) => close(scope2, exit2));
  return yield* fn2(scope2).pipe(extend$1(scope2));
});
const addFinalizerLog = (...msgs) => addFinalizer(() => log(...msgs));
const tapCauseLogPretty = (eff) => tapErrorCause(eff, (cause) => gen(function* () {
  if (isInterruptedOnly(cause)) {
    return;
  }
  const span2 = yield* currentOtelSpan.pipe(catchTag("NoSuchElementException", (_) => succeed$5(void 0)));
  const firstErrLine = cause.toString().split("\n")[0];
  yield* logError(firstErrLine, cause).pipe((_) => span2 === void 0 ? _ : annotateLogs({ spanId: span2.spanContext().spanId, traceId: span2.spanContext().traceId })(_));
}));
const spanEvent = (message, attributes) => locallyWith(log(message).pipe(annotateLogs(attributes ?? {})), currentLoggers, () => make$O(tracerLogger));
const logWarnIfTakesLongerThan = ({ label, duration }) => (eff) => gen(function* () {
  const runtime$12 = yield* runtime();
  let tookLongerThanTimer = false;
  const timeoutFiber = sleep(duration).pipe(tap$2(() => {
    tookLongerThanTimer = true;
    return logWarning(`${label}: Took longer than ${duration}ms`);
  }), provide$1(runtime$12), runFork$1);
  const start2 = Date.now();
  const res = yield* eff.pipe(exit, onInterrupt(fn(function* () {
    const end2 = Date.now();
    yield* interrupt$2(timeoutFiber);
    if (tookLongerThanTimer) {
      yield* logWarning(`${label}: Interrupted after ${end2 - start2}ms`);
    }
  })));
  if (tookLongerThanTimer) {
    const end2 = Date.now();
    yield* logWarning(`${label}: Actual duration: ${end2 - start2}ms`);
  }
  yield* interrupt$2(timeoutFiber);
  return yield* res;
});
const getSpanTrace = () => {
  const fiberOption = getCurrentFiber();
  if (fiberOption._tag === "None" || fiberOption.value.currentSpan === void 0) {
    return "No current fiber";
  }
  return "";
};
const logSpanTrace = () => console.log(getSpanTrace());
globalThis.getSpanTrace = getSpanTrace;
globalThis.logSpanTrace = logSpanTrace;
const TypeIdError = (typeId, tag2) => {
  class Base2 extends Error$1 {
    constructor() {
      super(...arguments);
      __publicField(this, "_tag", tag2);
    }
  }
  Base2.prototype[typeId] = typeId;
  Base2.prototype.name = tag2;
  return Base2;
};
const TypeId$7 = /* @__PURE__ */ Symbol.for("@effect/platform/Cookies");
const CookieTypeId = /* @__PURE__ */ Symbol.for("@effect/platform/Cookies/Cookie");
const Proto$2 = {
  [TypeId$7]: TypeId$7,
  ...BaseProto,
  toJSON() {
    return {
      _id: "@effect/platform/Cookies",
      cookies: map$f(this.cookies, (cookie) => cookie.toJSON())
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const fromReadonlyRecord = (cookies) => {
  const self2 = Object.create(Proto$2);
  self2.cookies = cookies;
  return self2;
};
const fromIterable = (cookies) => {
  const record2 = {};
  for (const cookie of cookies) {
    record2[cookie.name] = cookie;
  }
  return fromReadonlyRecord(record2);
};
const fromSetCookie = (headers) => {
  const arrayHeaders = typeof headers === "string" ? [headers] : headers;
  const cookies = [];
  for (const header of arrayHeaders) {
    const cookie = parseSetCookie(header.trim());
    if (isSome(cookie)) {
      cookies.push(cookie.value);
    }
  }
  return fromIterable(cookies);
};
function parseSetCookie(header) {
  const parts2 = header.split(";").map((_) => _.trim()).filter((_) => _ !== "");
  if (parts2.length === 0) {
    return none$4();
  }
  const firstEqual = parts2[0].indexOf("=");
  if (firstEqual === -1) {
    return none$4();
  }
  const name = parts2[0].slice(0, firstEqual);
  if (!fieldContentRegExp.test(name)) {
    return none$4();
  }
  const valueEncoded = parts2[0].slice(firstEqual + 1);
  const value2 = tryDecodeURIComponent(valueEncoded);
  if (parts2.length === 1) {
    return some(Object.assign(Object.create(CookieProto), {
      name,
      value: value2,
      valueEncoded
    }));
  }
  const options2 = {};
  for (let i = 1; i < parts2.length; i++) {
    const part = parts2[i];
    const equalIndex = part.indexOf("=");
    const key = equalIndex === -1 ? part : part.slice(0, equalIndex).trim();
    const value3 = equalIndex === -1 ? void 0 : part.slice(equalIndex + 1).trim();
    switch (key.toLowerCase()) {
      case "domain": {
        if (value3 === void 0) {
          break;
        }
        const domain = value3.trim().replace(/^\./, "");
        if (domain) {
          options2.domain = domain;
        }
        break;
      }
      case "expires": {
        if (value3 === void 0) {
          break;
        }
        const date = new Date(value3);
        if (!isNaN(date.getTime())) {
          options2.expires = date;
        }
        break;
      }
      case "max-age": {
        if (value3 === void 0) {
          break;
        }
        const maxAge = parseInt(value3, 10);
        if (!isNaN(maxAge)) {
          options2.maxAge = seconds(maxAge);
        }
        break;
      }
      case "path": {
        if (value3 === void 0) {
          break;
        }
        if (value3[0] === "/") {
          options2.path = value3;
        }
        break;
      }
      case "priority": {
        if (value3 === void 0) {
          break;
        }
        switch (value3.toLowerCase()) {
          case "low":
            options2.priority = "low";
            break;
          case "medium":
            options2.priority = "medium";
            break;
          case "high":
            options2.priority = "high";
            break;
        }
        break;
      }
      case "httponly": {
        options2.httpOnly = true;
        break;
      }
      case "secure": {
        options2.secure = true;
        break;
      }
      case "partitioned": {
        options2.partitioned = true;
        break;
      }
      case "samesite": {
        if (value3 === void 0) {
          break;
        }
        switch (value3.toLowerCase()) {
          case "lax":
            options2.sameSite = "lax";
            break;
          case "strict":
            options2.sameSite = "strict";
            break;
          case "none":
            options2.sameSite = "none";
            break;
        }
        break;
      }
    }
  }
  return some(Object.assign(Object.create(CookieProto), {
    name,
    value: value2,
    valueEncoded,
    options: Object.keys(options2).length > 0 ? options2 : void 0
  }));
}
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const CookieProto = {
  [CookieTypeId]: CookieTypeId,
  ...BaseProto,
  toJSON() {
    return {
      _id: "@effect/platform/Cookies/Cookie",
      name: this.name,
      value: this.value,
      options: this.options
    };
  }
};
const tryDecodeURIComponent = (str) => {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
};
const HeadersTypeId = /* @__PURE__ */ Symbol.for("@effect/platform/Headers");
const Proto$1 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  [HeadersTypeId]: HeadersTypeId,
  [symbolRedactable](fiberRefs2) {
    return redact(this, getOrDefault(fiberRefs2, currentRedactedNames));
  }
});
const make$4 = (input) => Object.assign(Object.create(Proto$1), input);
const empty$3 = /* @__PURE__ */ Object.create(Proto$1);
const fromInput$1 = (input) => {
  if (input === void 0) {
    return empty$3;
  } else if (Symbol.iterator in input) {
    const out2 = Object.create(Proto$1);
    for (const [k, v] of input) {
      out2[k.toLowerCase()] = v;
    }
    return out2;
  }
  const out = Object.create(Proto$1);
  for (const [k, v] of Object.entries(input)) {
    if (Array.isArray(v)) {
      out[k.toLowerCase()] = v.join(", ");
    } else if (v !== void 0) {
      out[k.toLowerCase()] = v;
    }
  }
  return out;
};
const unsafeFromRecord = (input) => Object.setPrototypeOf(input, Proto$1);
const set = /* @__PURE__ */ dual(3, (self2, key, value2) => {
  const out = make$4(self2);
  out[key.toLowerCase()] = value2;
  return out;
});
const setAll$1 = /* @__PURE__ */ dual(2, (self2, headers) => make$4({
  ...self2,
  ...fromInput$1(headers)
}));
const merge = /* @__PURE__ */ dual(2, (self2, headers) => {
  const out = make$4(self2);
  Object.assign(out, headers);
  return out;
});
const remove = /* @__PURE__ */ dual(2, (self2, key) => {
  const out = make$4(self2);
  const modify2 = (key2) => {
    if (typeof key2 === "string") {
      const k = key2.toLowerCase();
      if (k in self2) {
        delete out[k];
      }
    } else {
      for (const name in self2) {
        if (key2.test(name)) {
          delete out[name];
        }
      }
    }
  };
  if (Array.isArray(key)) {
    for (let i = 0; i < key.length; i++) {
      modify2(key[i]);
    }
  } else {
    modify2(key);
  }
  return out;
});
const redact = /* @__PURE__ */ dual(2, (self2, key) => {
  const out = {
    ...self2
  };
  const modify2 = (key2) => {
    if (typeof key2 === "string") {
      const k = key2.toLowerCase();
      if (k in self2) {
        out[k] = make$8(self2[k]);
      }
    } else {
      for (const name in self2) {
        if (key2.test(name)) {
          out[name] = make$8(self2[name]);
        }
      }
    }
  };
  if (Array.isArray(key)) {
    for (let i = 0; i < key.length; i++) {
      modify2(key[i]);
    }
  } else {
    modify2(key);
  }
  return out;
});
const currentRedactedNames = /* @__PURE__ */ globalValue("@effect/platform/Headers/currentRedactedNames", () => unsafeMake$3(["authorization", "cookie", "set-cookie", "x-api-key"]));
const TypeId$6 = /* @__PURE__ */ Symbol.for("@effect/platform/HttpClientError");
const TypeId$5 = TypeId$6;
class RequestError extends (/* @__PURE__ */ TypeIdError(TypeId$5, "RequestError")) {
  get methodAndUrl() {
    return `${this.request.method} ${this.request.url}`;
  }
  get message() {
    return this.description ? `${this.reason}: ${this.description} (${this.methodAndUrl})` : `${this.reason} error (${this.methodAndUrl})`;
  }
}
class ResponseError extends (/* @__PURE__ */ TypeIdError(TypeId$5, "ResponseError")) {
  get methodAndUrl() {
    return `${this.request.method} ${this.request.url}`;
  }
  get message() {
    const info = `${this.response.status} ${this.methodAndUrl}`;
    return this.description ? `${this.reason}: ${this.description} (${info})` : `${this.reason} error (${info})`;
  }
}
const fromInput = (input) => {
  const parsed = fromInputNested(input);
  const out = [];
  for (let i = 0; i < parsed.length; i++) {
    if (Array.isArray(parsed[i][0])) {
      const [keys2, value2] = parsed[i];
      out.push([`${keys2[0]}[${keys2.slice(1).join("][")}]`, value2]);
    } else {
      out.push(parsed[i]);
    }
  }
  return out;
};
const fromInputNested = (input) => {
  const entries = Symbol.iterator in input ? fromIterable$8(input) : Object.entries(input);
  const out = [];
  for (const [key, value2] of entries) {
    if (Array.isArray(value2)) {
      for (let i = 0; i < value2.length; i++) {
        if (value2[i] !== void 0) {
          out.push([key, String(value2[i])]);
        }
      }
    } else if (typeof value2 === "object") {
      const nested = fromInputNested(value2);
      for (const [k, v] of nested) {
        out.push([[key, ...typeof k === "string" ? [k] : k], v]);
      }
    } else if (value2 !== void 0) {
      out.push([key, String(value2)]);
    }
  }
  return out;
};
const empty$2 = [];
const setAll = /* @__PURE__ */ dual(2, (self2, input) => {
  const toSet2 = fromInput(input);
  const keys2 = toSet2.map(([k]) => k);
  return appendAll$2(filter$4(self2, ([k]) => keys2.includes(k)), toSet2);
});
const makeUrl = (url, params, hash2) => {
  try {
    const urlInstance = new URL(url, baseUrl());
    for (let i = 0; i < params.length; i++) {
      const [key, value2] = params[i];
      if (value2 !== void 0) {
        urlInstance.searchParams.append(key, value2);
      }
    }
    if (hash2._tag === "Some") {
      urlInstance.hash = hash2.value;
    }
    return right(urlInstance);
  } catch (e) {
    return left(e);
  }
};
const baseUrl = () => {
  if ("location" in globalThis && globalThis.location !== void 0 && globalThis.location.origin !== void 0 && globalThis.location.pathname !== void 0) {
    return location.origin + location.pathname;
  }
  return void 0;
};
const TypeId$4 = /* @__PURE__ */ Symbol.for("@effect/platform/HttpIncomingMessage");
const inspect = (self2, that) => {
  const contentType = self2.headers["content-type"] ?? "";
  let body;
  if (contentType.includes("application/json")) {
    try {
      body = runSync(self2.json);
    } catch {
    }
  } else if (contentType.includes("text/") || contentType.includes("urlencoded")) {
    try {
      body = runSync(self2.text);
    } catch {
    }
  }
  const obj = {
    ...that,
    headers: redact$1(self2.headers),
    remoteAddress: self2.remoteAddress.toJSON()
  };
  if (body !== void 0) {
    obj.body = body;
  }
  return obj;
};
const toHeaders = (span2) => unsafeFromRecord({
  b3: `${span2.traceId}-${span2.spanId}-${span2.sampled ? "1" : "0"}${span2.parent._tag === "Some" ? `-${span2.parent.value.spanId}` : ""}`,
  traceparent: `00-${span2.traceId}-${span2.spanId}-${span2.sampled ? "01" : "00"}`
});
const TypeId$3 = /* @__PURE__ */ Symbol.for("@effect/platform/HttpBody");
class BodyBase {
  constructor() {
    __publicField(this, _Ma);
    this[TypeId$3] = TypeId$3;
  }
  [(_Ma = TypeId$3, NodeInspectSymbol)]() {
    return this.toJSON();
  }
  toString() {
    return format$3(this);
  }
}
class EmptyImpl extends BodyBase {
  constructor() {
    super(...arguments);
    __publicField(this, "_tag", "Empty");
  }
  toJSON() {
    return {
      _id: "@effect/platform/HttpBody",
      _tag: "Empty"
    };
  }
}
const empty$1 = /* @__PURE__ */ new EmptyImpl();
const TypeId$2 = /* @__PURE__ */ Symbol.for("@effect/platform/HttpClientRequest");
const Proto = {
  [TypeId$2]: TypeId$2,
  ...BaseProto,
  toJSON() {
    return {
      _id: "@effect/platform/HttpClientRequest",
      method: this.method,
      url: this.url,
      urlParams: this.urlParams,
      hash: this.hash,
      headers: redact$1(this.headers),
      body: this.body.toJSON()
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
function makeInternal(method, url, urlParams, hash2, headers, body) {
  const self2 = Object.create(Proto);
  self2.method = method;
  self2.url = url;
  self2.urlParams = urlParams;
  self2.hash = hash2;
  self2.headers = headers;
  self2.body = body;
  return self2;
}
const empty = /* @__PURE__ */ makeInternal("GET", "", empty$2, /* @__PURE__ */ none$4(), empty$3, empty$1);
const make$3 = (method) => (url, options2) => modify(empty, {
  method,
  url,
  ...options2 ?? void 0
});
const get$1 = /* @__PURE__ */ make$3("GET");
const post$1 = /* @__PURE__ */ make$3("POST");
const put$1 = /* @__PURE__ */ make$3("PUT");
const patch$1 = /* @__PURE__ */ make$3("PATCH");
const del$1 = /* @__PURE__ */ make$3("DELETE");
const head$1 = /* @__PURE__ */ make$3("HEAD");
const options$1 = /* @__PURE__ */ make$3("OPTIONS");
const modify = /* @__PURE__ */ dual(2, (self2, options2) => {
  let result = self2;
  if (options2.method) {
    result = setMethod(result, options2.method);
  }
  if (options2.url) {
    result = setUrl(result, options2.url);
  }
  if (options2.headers) {
    result = setHeaders(result, options2.headers);
  }
  if (options2.urlParams) {
    result = setUrlParams(result, options2.urlParams);
  }
  if (options2.hash) {
    result = setHash(result, options2.hash);
  }
  if (options2.body) {
    result = setBody(result, options2.body);
  }
  if (options2.accept) {
    result = accept(result, options2.accept);
  }
  if (options2.acceptJson) {
    result = acceptJson(result);
  }
  return result;
});
const setHeader = /* @__PURE__ */ dual(3, (self2, key, value2) => makeInternal(self2.method, self2.url, self2.urlParams, self2.hash, set(self2.headers, key, value2), self2.body));
const setHeaders = /* @__PURE__ */ dual(2, (self2, input) => makeInternal(self2.method, self2.url, self2.urlParams, self2.hash, setAll$1(self2.headers, input), self2.body));
const accept = /* @__PURE__ */ dual(2, (self2, mediaType) => setHeader(self2, "Accept", mediaType));
const acceptJson = /* @__PURE__ */ accept("application/json");
const setMethod = /* @__PURE__ */ dual(2, (self2, method) => makeInternal(method, self2.url, self2.urlParams, self2.hash, self2.headers, self2.body));
const setUrl = /* @__PURE__ */ dual(2, (self2, url) => {
  if (typeof url === "string") {
    return makeInternal(self2.method, url, self2.urlParams, self2.hash, self2.headers, self2.body);
  }
  const clone = new URL(url.toString());
  const urlParams = fromInput(clone.searchParams);
  const hash2 = clone.hash ? some(clone.hash.slice(1)) : none$4();
  clone.search = "";
  clone.hash = "";
  return makeInternal(self2.method, clone.toString(), urlParams, hash2, self2.headers, self2.body);
});
const setUrlParams = /* @__PURE__ */ dual(2, (self2, input) => makeInternal(self2.method, self2.url, setAll(self2.urlParams, input), self2.hash, self2.headers, self2.body));
const setHash = /* @__PURE__ */ dual(2, (self2, hash2) => makeInternal(self2.method, self2.url, self2.urlParams, some(hash2), self2.headers, self2.body));
const setBody = /* @__PURE__ */ dual(2, (self2, body) => {
  let headers = self2.headers;
  if (body._tag === "Empty" || body._tag === "FormData") {
    headers = remove(headers, ["Content-type", "Content-length"]);
  } else {
    const contentType = body.contentType;
    if (contentType) {
      headers = set(headers, "content-type", contentType);
    }
    const contentLength = body.contentLength;
    if (contentLength) {
      headers = set(headers, "content-length", contentLength.toString());
    }
  }
  return makeInternal(self2.method, self2.url, self2.urlParams, self2.hash, headers, body);
});
const TypeId$1 = /* @__PURE__ */ Symbol.for("@effect/platform/HttpClientResponse");
const fromWeb = (request, source) => new ClientResponseImpl(request, source);
class ClientResponseImpl extends (_Pa = Class$5, _Oa = TypeId$4, _Na = TypeId$1, _Pa) {
  constructor(request, source) {
    super();
    __publicField(this, "request");
    __publicField(this, "source");
    __publicField(this, _Oa);
    __publicField(this, _Na);
    __publicField(this, "cachedCookies");
    __publicField(this, "textBody");
    __publicField(this, "formDataBody");
    __publicField(this, "arrayBufferBody");
    this.request = request;
    this.source = source;
    this[TypeId$4] = TypeId$4;
    this[TypeId$1] = TypeId$1;
  }
  toJSON() {
    return inspect(this, {
      _id: "@effect/platform/HttpClientResponse",
      request: this.request.toJSON(),
      status: this.status
    });
  }
  get status() {
    return this.source.status;
  }
  get headers() {
    return fromInput$1(this.source.headers);
  }
  get cookies() {
    if (this.cachedCookies) {
      return this.cachedCookies;
    }
    return this.cachedCookies = fromSetCookie(this.source.headers.getSetCookie());
  }
  get remoteAddress() {
    return none$4();
  }
  get stream() {
    return this.source.body ? fromReadableStream(() => this.source.body, (cause) => new ResponseError({
      request: this.request,
      response: this,
      reason: "Decode",
      cause
    })) : fail(new ResponseError({
      request: this.request,
      response: this,
      reason: "EmptyBody",
      description: "can not create stream from empty body"
    }));
  }
  get json() {
    return tryMap(this.text, {
      try: (text) => text === "" ? null : JSON.parse(text),
      catch: (cause) => new ResponseError({
        request: this.request,
        response: this,
        reason: "Decode",
        cause
      })
    });
  }
  get text() {
    return this.textBody ?? (this.textBody = tryPromise({
      try: () => this.source.text(),
      catch: (cause) => new ResponseError({
        request: this.request,
        response: this,
        reason: "Decode",
        cause
      })
    }).pipe(cached, runSync));
  }
  get urlParamsBody() {
    return flatMap$4(this.text, (_) => try_({
      try: () => fromInput(new URLSearchParams(_)),
      catch: (cause) => new ResponseError({
        request: this.request,
        response: this,
        reason: "Decode",
        cause
      })
    }));
  }
  get formData() {
    return this.formDataBody ?? (this.formDataBody = tryPromise({
      try: () => this.source.formData(),
      catch: (cause) => new ResponseError({
        request: this.request,
        response: this,
        reason: "Decode",
        cause
      })
    }).pipe(cached, runSync));
  }
  get arrayBuffer() {
    return this.arrayBufferBody ?? (this.arrayBufferBody = tryPromise({
      try: () => this.source.arrayBuffer(),
      catch: (cause) => new ResponseError({
        request: this.request,
        response: this,
        reason: "Decode",
        cause
      })
    }).pipe(cached, runSync));
  }
}
const TypeId = /* @__PURE__ */ Symbol.for("@effect/platform/HttpClient");
const tag = /* @__PURE__ */ GenericTag("@effect/platform/HttpClient");
const currentTracerDisabledWhen = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("@effect/platform/HttpClient/tracerDisabledWhen"), () => unsafeMake$3(constFalse));
const currentTracerPropagation = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("@effect/platform/HttpClient/currentTracerPropagation"), () => unsafeMake$3(true));
const SpanNameGenerator = /* @__PURE__ */ Reference()("@effect/platform/HttpClient/SpanNameGenerator", {
  defaultValue: () => (request) => `http.client ${request.method}`
});
const ClientProto = {
  [TypeId]: TypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...BaseProto,
  toJSON() {
    return {
      _id: "@effect/platform/HttpClient"
    };
  },
  get(url, options2) {
    return this.execute(get$1(url, options2));
  },
  head(url, options2) {
    return this.execute(head$1(url, options2));
  },
  post(url, options2) {
    return this.execute(post$1(url, options2));
  },
  put(url, options2) {
    return this.execute(put$1(url, options2));
  },
  patch(url, options2) {
    return this.execute(patch$1(url, options2));
  },
  del(url, options2) {
    return this.execute(del$1(url, options2));
  },
  options(url, options2) {
    return this.execute(options$1(url, options2));
  }
};
const makeWith = (postprocess, preprocess) => {
  const self2 = Object.create(ClientProto);
  self2.preprocess = preprocess;
  self2.postprocess = postprocess;
  self2.execute = function(request) {
    return postprocess(preprocess(request));
  };
  return self2;
};
const responseRegistry = /* @__PURE__ */ globalValue("@effect/platform/HttpClient/responseRegistry", () => {
  if ("FinalizationRegistry" in globalThis && globalThis.FinalizationRegistry) {
    const registry = new FinalizationRegistry((controller) => {
      controller.abort();
    });
    return {
      register(response, controller) {
        registry.register(response, controller, response);
      },
      unregister(response) {
        registry.unregister(response);
      }
    };
  }
  const timers = /* @__PURE__ */ new Map();
  return {
    register(response, controller) {
      timers.set(response, setTimeout(() => controller.abort(), 5e3));
    },
    unregister(response) {
      const timer = timers.get(response);
      if (timer === void 0) return;
      clearTimeout(timer);
      timers.delete(response);
    }
  };
});
const make$2 = (f) => makeWith((effect2) => flatMap$4(effect2, (request) => withFiberRuntime((fiber) => {
  const controller = new AbortController();
  const urlResult = makeUrl(request.url, request.urlParams, request.hash);
  if (urlResult._tag === "Left") {
    return fail$6(new RequestError({
      request,
      reason: "InvalidUrl",
      cause: urlResult.left
    }));
  }
  const url = urlResult.right;
  const tracerDisabled = !fiber.getFiberRef(currentTracerEnabled) || fiber.getFiberRef(currentTracerDisabledWhen)(request);
  if (tracerDisabled) {
    return uninterruptibleMask((restore) => matchCauseEffect(restore(f(request, url, controller.signal, fiber)), {
      onSuccess(response) {
        responseRegistry.register(response, controller);
        return succeed$5(new InterruptibleResponse(response, controller));
      },
      onFailure(cause) {
        if (isInterrupted(cause)) {
          controller.abort();
        }
        return failCause$4(cause);
      }
    }));
  }
  const nameGenerator = get$e(fiber.currentContext, SpanNameGenerator);
  return useSpan(nameGenerator(request), {
    kind: "client",
    captureStackTrace: false
  }, (span2) => {
    span2.attribute("http.request.method", request.method);
    span2.attribute("server.address", url.origin);
    if (url.port !== "") {
      span2.attribute("server.port", +url.port);
    }
    span2.attribute("url.full", url.toString());
    span2.attribute("url.path", url.pathname);
    span2.attribute("url.scheme", url.protocol.slice(0, -1));
    const query = url.search.slice(1);
    if (query !== "") {
      span2.attribute("url.query", query);
    }
    const redactedHeaderNames = fiber.getFiberRef(currentRedactedNames);
    const redactedHeaders = redact(request.headers, redactedHeaderNames);
    for (const name in redactedHeaders) {
      span2.attribute(`http.request.header.${name}`, String(redactedHeaders[name]));
    }
    request = fiber.getFiberRef(currentTracerPropagation) ? setHeaders(request, toHeaders(span2)) : request;
    return uninterruptibleMask((restore) => restore(f(request, url, controller.signal, fiber)).pipe(withParentSpan(span2), matchCauseEffect({
      onSuccess: (response) => {
        span2.attribute("http.response.status_code", response.status);
        const redactedHeaders2 = redact(response.headers, redactedHeaderNames);
        for (const name in redactedHeaders2) {
          span2.attribute(`http.response.header.${name}`, String(redactedHeaders2[name]));
        }
        responseRegistry.register(response, controller);
        return succeed$5(new InterruptibleResponse(response, controller));
      },
      onFailure(cause) {
        if (isInterrupted(cause)) {
          controller.abort();
        }
        return failCause$4(cause);
      }
    })));
  });
})), succeed$5);
class InterruptibleResponse {
  constructor(original, controller) {
    __publicField(this, "original");
    __publicField(this, "controller");
    __publicField(this, _Ra, TypeId$1);
    __publicField(this, _Qa, TypeId$4);
    this.original = original;
    this.controller = controller;
  }
  applyInterrupt(effect2) {
    return suspend$5(() => {
      responseRegistry.unregister(this.original);
      return onInterrupt(effect2, () => sync$3(() => {
        this.controller.abort();
      }));
    });
  }
  get request() {
    return this.original.request;
  }
  get status() {
    return this.original.status;
  }
  get headers() {
    return this.original.headers;
  }
  get cookies() {
    return this.original.cookies;
  }
  get remoteAddress() {
    return this.original.remoteAddress;
  }
  get formData() {
    return this.applyInterrupt(this.original.formData);
  }
  get text() {
    return this.applyInterrupt(this.original.text);
  }
  get json() {
    return this.applyInterrupt(this.original.json);
  }
  get urlParamsBody() {
    return this.applyInterrupt(this.original.urlParamsBody);
  }
  get arrayBuffer() {
    return this.applyInterrupt(this.original.arrayBuffer);
  }
  get stream() {
    return suspend(() => {
      responseRegistry.unregister(this.original);
      return ensuringWith(this.original.stream, (exit2) => {
        if (isInterrupted$1(exit2)) {
          this.controller.abort();
        }
        return _void;
      });
    });
  }
  toJSON() {
    return this.original.toJSON();
  }
  [(_Ra = TypeId$1, _Qa = TypeId$4, NodeInspectSymbol)]() {
    return this.original[NodeInspectSymbol]();
  }
}
const {
  /** @internal */
  del,
  /** @internal */
  execute,
  /** @internal */
  get,
  /** @internal */
  head,
  /** @internal */
  options,
  /** @internal */
  patch,
  /** @internal */
  post,
  /** @internal */
  put
} = /* @__PURE__ */ serviceFunctions(tag);
const transformResponse = /* @__PURE__ */ dual(2, (self2, f) => {
  const client = self2;
  return makeWith((request) => f(client.postprocess(request)), client.preprocess);
});
const layerMergedContext = (effect2) => effect$2(tag, flatMap$4(context(), (context2) => map$5(effect2, (client) => transformResponse(client, mapInputContext((input) => merge$6(context2, input))))));
const fetchTagKey = "@effect/platform/FetchHttpClient/Fetch";
const requestInitTagKey = "@effect/platform/FetchHttpClient/FetchOptions";
const fetch = /* @__PURE__ */ make$2((request, url, signal, fiber) => {
  const context2 = fiber.getFiberRef(currentContext);
  const fetch2 = context2.unsafeMap.get(fetchTagKey) ?? globalThis.fetch;
  const options2 = context2.unsafeMap.get(requestInitTagKey) ?? {};
  const headers = options2.headers ? merge(fromInput$1(options2.headers), request.headers) : request.headers;
  const send = (body) => map$5(tryPromise({
    try: () => fetch2(url, {
      ...options2,
      method: request.method,
      headers,
      body,
      duplex: request.body._tag === "Stream" ? "half" : void 0,
      signal
    }),
    catch: (cause) => new RequestError({
      request,
      reason: "Transport",
      cause
    })
  }), (response) => fromWeb(request, response));
  switch (request.body._tag) {
    case "Raw":
    case "Uint8Array":
      return send(request.body.body);
    case "FormData":
      return send(request.body.formData);
    case "Stream":
      return flatMap$4(toReadableStreamEffect(request.body.stream), send);
  }
  return send(void 0);
});
const layer$5 = /* @__PURE__ */ layerMergedContext(/* @__PURE__ */ succeed$5(fetch));
const layer$4 = layer$5;
class Collector extends (/* @__PURE__ */ Tag("@effect/platform/Transferable/Collector")()) {
}
const unsafeMakeCollector = () => {
  let tranferables = [];
  const unsafeAddAll = (transfers) => {
    tranferables.push(...transfers);
  };
  const unsafeRead = () => tranferables;
  const unsafeClear = () => {
    const prev = tranferables;
    tranferables = [];
    return prev;
  };
  return Collector.of({
    unsafeAddAll,
    addAll: (transferables) => sync$3(() => unsafeAddAll(transferables)),
    unsafeRead,
    read: sync$3(unsafeRead),
    unsafeClear,
    clear: sync$3(unsafeClear)
  });
};
const makeCollector = /* @__PURE__ */ sync$3(unsafeMakeCollector);
const addAll = (tranferables) => flatMap$4(serviceOption(Collector), match$8({
  onNone: () => _void,
  onSome: (_) => _.addAll(tranferables)
}));
const schema = /* @__PURE__ */ dual(2, (self2, f) => transformOrFail(encodedSchema(self2), self2, {
  strict: true,
  decode: succeed,
  encode: (i) => as(addAll(f(i)), i)
}));
const MessagePort = /* @__PURE__ */ schema(Any, (_) => [_]);
const Uint8Array$1 = /* @__PURE__ */ schema(Uint8ArrayFromSelf, (_) => [_.buffer]);
const WorkerErrorTypeId$1 = /* @__PURE__ */ Symbol.for("@effect/platform/WorkerError");
const WorkerErrorTypeId = WorkerErrorTypeId$1;
const isWorkerError = (u) => hasProperty(u, WorkerErrorTypeId);
const _WorkerError = class _WorkerError extends (_Ta = /* @__PURE__ */ TaggedError()("WorkerError", {
  reason: /* @__PURE__ */ Literal2("spawn", "decode", "send", "unknown", "encode"),
  cause: Defect
}), _Sa = WorkerErrorTypeId, _Ta) {
  constructor() {
    super(...arguments);
    /**
     * @since 1.0.0
     */
    __publicField(this, _Sa, WorkerErrorTypeId);
  }
  /**
   * @since 1.0.0
   */
  get message() {
    switch (this.reason) {
      case "send":
        return "An error occurred calling .postMessage";
      case "spawn":
        return "An error occurred while spawning a worker";
      case "decode":
        return "An error occurred during decoding";
      case "encode":
        return "An error occurred during encoding";
      case "unknown":
        return "An unexpected error occurred";
    }
  }
};
/**
 * @since 1.0.0
 */
__publicField(_WorkerError, "Cause", /* @__PURE__ */ Cause({
  error: _WorkerError,
  defect: Defect
}));
/**
 * @since 1.0.0
 */
__publicField(_WorkerError, "encodeCause", /* @__PURE__ */ encodeSync(_WorkerError.Cause));
/**
 * @since 1.0.0
 */
__publicField(_WorkerError, "decodeCause", /* @__PURE__ */ decodeSync(_WorkerError.Cause));
let WorkerError = _WorkerError;
const PlatformWorkerTypeId = /* @__PURE__ */ Symbol.for("@effect/platform/Worker/PlatformWorker");
const PlatformWorker$1 = /* @__PURE__ */ GenericTag("@effect/platform/Worker/PlatformWorker");
const WorkerManagerTypeId = /* @__PURE__ */ Symbol.for("@effect/platform/Worker/WorkerManager");
const WorkerManager = /* @__PURE__ */ GenericTag("@effect/platform/Worker/WorkerManager");
const Spawner = /* @__PURE__ */ GenericTag("@effect/platform/Worker/Spawner");
const makeManager = /* @__PURE__ */ gen(function* () {
  const platform = yield* PlatformWorker$1;
  let idCounter = 0;
  return WorkerManager.of({
    [WorkerManagerTypeId]: WorkerManagerTypeId,
    spawn({
      encode: encode2,
      initialMessage
    }) {
      return gen(function* () {
        const id2 = idCounter++;
        let requestIdCounter = 0;
        const requestMap = /* @__PURE__ */ new Map();
        const collector = unsafeMakeCollector();
        const wrappedEncode = encode2 ? (message) => zipRight$2(collector.clear, provideService(encode2(message), Collector, collector)) : succeed$5;
        const readyLatch = yield* make$H();
        const backing = yield* platform.spawn(id2);
        yield* backing.run((message) => {
          if (message[0] === 0) {
            return complete$1(readyLatch, _void);
          }
          return handleMessage(message[1]);
        }).pipe(onError((cause) => forEach(requestMap.values(), (mailbox) => DeferredTypeId in mailbox ? failCause$8(mailbox, cause) : mailbox.failCause(cause))), tapErrorCause(logWarning), retry$2(spaced(1e3)), annotateLogs({
          package: "@effect/platform",
          module: "Worker"
        }), interruptible, forkScoped);
        yield* addFinalizer(() => zipRight$2(forEach(requestMap.values(), (mailbox) => DeferredTypeId in mailbox ? interrupt$5(mailbox) : mailbox.end, {
          discard: true
        }), sync$3(() => requestMap.clear())));
        const handleMessage = (response) => suspend$5(() => {
          const mailbox = requestMap.get(response[0]);
          if (!mailbox) return _void;
          switch (response[1]) {
            // data
            case 0: {
              return DeferredTypeId in mailbox ? succeed$9(mailbox, response[2][0]) : mailbox.offerAll(response[2]);
            }
            // end
            case 1: {
              if (response.length === 2) {
                return DeferredTypeId in mailbox ? interrupt$5(mailbox) : mailbox.end;
              }
              return DeferredTypeId in mailbox ? succeed$9(mailbox, response[2][0]) : zipRight$2(mailbox.offerAll(response[2]), mailbox.end);
            }
            // error / defect
            case 2:
            case 3: {
              if (response[1] === 2) {
                return DeferredTypeId in mailbox ? fail$a(mailbox, response[2]) : mailbox.fail(response[2]);
              }
              const cause = WorkerError.decodeCause(response[2]);
              return DeferredTypeId in mailbox ? failCause$8(mailbox, cause) : mailbox.failCause(cause);
            }
          }
        });
        const executeAcquire = (request, makeMailbox) => withFiberRuntime((fiber) => {
          const context2 = fiber.getFiberRef(currentContext);
          const span2 = getOption(context2, ParentSpan).pipe(filter$6((span3) => span3._tag === "Span"));
          const id3 = requestIdCounter++;
          return makeMailbox.pipe(tap$2((mailbox) => {
            requestMap.set(id3, mailbox);
            return wrappedEncode(request).pipe(tap$2((payload) => backing.send([id3, 0, payload, span2._tag === "Some" ? [span2.value.traceId, span2.value.spanId, span2.value.sampled] : void 0], collector.unsafeRead())), catchAllCause$2((cause) => isMailbox(mailbox) ? mailbox.failCause(cause) : failCause$8(mailbox, cause)));
          }), map$5((mailbox) => ({
            id: id3,
            mailbox
          })));
        });
        const executeRelease = ({
          id: id3
        }, exit2) => {
          const release = sync$3(() => requestMap.delete(id3));
          return isFailure(exit2) ? zipRight$2(orDie(backing.send([id3, 1])), release) : release;
        };
        const execute2 = (request) => fromChannel(acquireUseRelease(executeAcquire(request, make$a()), ({
          mailbox
        }) => toChannel(mailbox), executeRelease));
        const executeEffect = (request) => acquireUseRelease$2(executeAcquire(request, make$H()), ({
          mailbox
        }) => _await$2(mailbox), executeRelease);
        yield* _await$2(readyLatch);
        if (initialMessage) {
          yield* sync$3(initialMessage).pipe(flatMap$4(executeEffect), mapError$4((cause) => new WorkerError({
            reason: "spawn",
            cause
          })));
        }
        return {
          id: id2,
          execute: execute2,
          executeEffect
        };
      });
    }
  });
});
const layerManager$2 = /* @__PURE__ */ effect$2(WorkerManager, makeManager);
const makeSerialized$1 = (options2) => gen(function* () {
  const manager = yield* WorkerManager;
  const backing = yield* manager.spawn({
    ...options2,
    encode(message) {
      return mapError$4(serialize(message), (cause) => new WorkerError({
        reason: "encode",
        cause
      }));
    }
  });
  const execute2 = (message) => {
    const parseSuccess = decode(successSchema(message));
    const parseFailure = decode(failureSchema(message));
    return pipe(backing.execute(message), catchAll((error) => flatMap$4(parseFailure(error), fail$6)), mapEffect(parseSuccess));
  };
  const executeEffect = (message) => {
    const parseSuccess = decode(successSchema(message));
    const parseFailure = decode(failureSchema(message));
    return matchEffect(backing.executeEffect(message), {
      onFailure: (error) => flatMap$4(parseFailure(error), fail$6),
      onSuccess: parseSuccess
    });
  };
  return identity({
    id: backing.id,
    execute: execute2,
    executeEffect
  });
});
const makePoolSerialized$1 = (options2) => gen(function* () {
  const manager = yield* WorkerManager;
  const workers = /* @__PURE__ */ new Set();
  const acquire = pipe(makeSerialized$1(options2), tap$2((worker) => sync$3(() => workers.add(worker))), tap$2((worker) => addFinalizer(() => sync$3(() => workers.delete(worker)))), options2.onCreate ? tap$2(options2.onCreate) : identity, provideService(WorkerManager, manager));
  const backing = yield* "timeToLive" in options2 ? makeWithTTL({
    acquire,
    min: options2.minSize,
    max: options2.maxSize,
    concurrency: options2.concurrency,
    targetUtilization: options2.targetUtilization,
    timeToLive: options2.timeToLive
  }) : make$9({
    acquire,
    size: options2.size,
    concurrency: options2.concurrency,
    targetUtilization: options2.targetUtilization
  });
  const pool = {
    backing,
    broadcast: (message) => forEach(workers, (worker) => worker.executeEffect(message), {
      concurrency: "unbounded",
      discard: true
    }),
    execute: (message) => unwrapScoped(map$5(backing.get, (worker) => worker.execute(message))),
    executeEffect: (message) => scoped$3(flatMap$4(backing.get, (worker) => worker.executeEffect(message)))
  };
  yield* scoped$3(backing.get);
  return pool;
});
const layerSpawner$1 = (spawner) => succeed$4(Spawner, spawner);
const makePlatform$1 = () => (options2) => PlatformWorker$1.of({
  [PlatformWorkerTypeId]: PlatformWorkerTypeId,
  spawn(id2) {
    return gen(function* () {
      const spawn = yield* Spawner;
      let currentPort;
      const buffer = [];
      const run2 = (handler) => uninterruptibleMask((restore) => gen(function* () {
        const scope$12 = yield* scope;
        const port = yield* options2.setup({
          worker: spawn(id2),
          scope: scope$12
        });
        currentPort = port;
        yield* addFinalizer$1(scope$12, sync$3(() => {
          currentPort = void 0;
        }));
        const runtime$12 = (yield* runtime()).pipe(updateContext(omit$2(Scope)));
        const fiberSet = yield* make$e();
        const runFork$12 = runFork(runtime$12);
        yield* options2.listen({
          port,
          scope: scope$12,
          emit(data) {
            unsafeAdd(fiberSet, runFork$12(handler(data)));
          },
          deferred: fiberSet.deferred
        });
        if (buffer.length > 0) {
          for (const [message, transfers] of buffer) {
            port.postMessage([0, message], transfers);
          }
          buffer.length = 0;
        }
        return yield* restore(join(fiberSet));
      }).pipe(scoped$3));
      const send = (message, transfers) => try_({
        try: () => {
          if (currentPort === void 0) {
            buffer.push([message, transfers]);
          } else {
            currentPort.postMessage([0, message], transfers);
          }
        },
        catch: (cause) => new WorkerError({
          reason: "send",
          cause
        })
      });
      return {
        run: run2,
        send
      };
    });
  }
});
const makePlatform = makePlatform$1;
const PlatformWorker = PlatformWorker$1;
const layerManager$1 = layerManager$2;
const makePoolSerialized = makePoolSerialized$1;
const layerSpawner = layerSpawner$1;
const PlatformRunnerTypeId$1 = /* @__PURE__ */ Symbol.for("@effect/platform/Runner/PlatformRunner");
const PlatformRunner$1 = /* @__PURE__ */ GenericTag("@effect/platform/Runner/PlatformRunner");
const CloseLatch = /* @__PURE__ */ Reference()("@effect/platform/WorkerRunner/CloseLatch", {
  defaultValue: () => unsafeMake$8(none$2)
});
const layerCloseLatch = /* @__PURE__ */ effect$2(CloseLatch, /* @__PURE__ */ make$H());
const make$1 = /* @__PURE__ */ fnUntraced(function* (process2, options2) {
  const fiber = yield* withFiberRuntime(succeed$5);
  const platform = yield* PlatformRunner$1;
  const closeLatch = yield* CloseLatch;
  const backing = yield* platform.start(closeLatch);
  const fiberMap = /* @__PURE__ */ new Map();
  yield* _await$2(closeLatch).pipe(onExit(() => {
    fiber.currentScheduler.scheduleTask(() => {
      fiber.unsafeInterruptAsFork(fiber.id());
    }, 0);
    return _void;
  }), forkScoped);
  yield* backing.run((portId, [id2, kind, data, span2]) => {
    if (kind === 1) {
      const fiber2 = fiberMap.get(id2);
      if (!fiber2) return _void;
      return interrupt$2(fiber2);
    }
    return withFiberRuntime((fiber2) => {
      fiberMap.set(id2, fiber2);
      return (options2 == null ? void 0 : options2.decode) ? options2.decode(data) : succeed$5(data);
    }).pipe(flatMap$4((input) => {
      const collector = unsafeMakeCollector();
      const stream = process2(input);
      let effect2 = isEffect(stream) ? flatMap$4(stream, (out) => pipe((options2 == null ? void 0 : options2.encodeOutput) ? provideService(options2.encodeOutput(input, out), Collector, collector) : succeed$5(out), flatMap$4((payload) => backing.send(portId, [id2, 0, [payload]], collector.unsafeRead())))) : pipe(stream, runForEachChunk((chunk2) => {
        if ((options2 == null ? void 0 : options2.encodeOutput) === void 0) {
          const payload = toReadonlyArray(chunk2);
          return backing.send(portId, [id2, 0, payload]);
        }
        collector.unsafeClear();
        return pipe(forEach(chunk2, (data2) => options2.encodeOutput(input, data2)), provideService(Collector, collector), flatMap$4((payload) => backing.send(portId, [id2, 0, payload], collector.unsafeRead())));
      }), andThen(backing.send(portId, [id2, 1])));
      if (span2) {
        effect2 = withParentSpan(effect2, {
          _tag: "ExternalSpan",
          traceId: span2[0],
          spanId: span2[1],
          sampled: span2[2],
          context: empty$s()
        });
      }
      return uninterruptibleMask((restore) => restore(effect2).pipe(catchIf(isWorkerError, (error) => backing.send(portId, [id2, 3, WorkerError.encodeCause(fail$8(error))])), catchAllCause$2((cause) => match$9(failureOrCause(cause), {
        onLeft: (error) => {
          collector.unsafeClear();
          return pipe((options2 == null ? void 0 : options2.encodeError) ? provideService(options2.encodeError(input, error), Collector, collector) : succeed$5(error), flatMap$4((payload) => backing.send(portId, [id2, 2, payload], collector.unsafeRead())), catchAllCause$2((cause2) => backing.send(portId, [id2, 3, WorkerError.encodeCause(cause2)])));
        },
        onRight: (cause2) => backing.send(portId, [id2, 3, WorkerError.encodeCause(cause2)])
      }))));
    }), ensuring$4(sync$3(() => fiberMap.delete(id2))));
  });
});
const makeSerialized = (schema2, handlers) => gen(function* () {
  const scope$12 = yield* scope;
  let context2 = empty$s();
  const parseRequest = decodeUnknown(schema2);
  return yield* make$1((request) => {
    const result = handlers[request._tag](request);
    if (isLayer(result)) {
      return flatMap$4(buildWithScope(result, scope$12), (_) => sync$3(() => {
        context2 = merge$6(context2, _);
      }));
    } else if (isEffect(result)) {
      return provide$1(result, context2);
    }
    return provideContext(result, context2);
  }, {
    decode(message) {
      return mapError$4(parseRequest(message), (cause) => new WorkerError({
        reason: "decode",
        cause
      }));
    },
    encodeError(request, message) {
      return mapError$4(serializeFailure(request, message), (cause) => new WorkerError({
        reason: "encode",
        cause
      }));
    },
    encodeOutput(request, message) {
      return catchAllCause$2(serializeSuccess(request, message), (cause) => new WorkerError({
        reason: "encode",
        cause
      }));
    }
  });
});
const layerSerialized$1 = (schema2, handlers) => scopedDiscard(makeSerialized(schema2, handlers)).pipe(provide(layerCloseLatch));
const PlatformRunnerTypeId = PlatformRunnerTypeId$1;
const PlatformRunner = PlatformRunner$1;
const layerSerialized = layerSerialized$1;
const debugDiff = (base) => (a, b) => {
  const bag = [];
  debugDiffImpl(base.ast, a, b, "", bag);
  return bag;
};
const debugDiffImpl = (ast, a, b, path, bag) => {
  const eq = equivalence({ ast });
  if (eq(a, b) === false) {
    if (isUnion(ast)) {
      if (isTaggedUnion(ast)) {
        bag.push({ path, a, b, ast });
        return;
      } else {
        for (const type of ast.types) {
          try {
            debugDiffImpl(type, a, b, path, bag);
            return;
          } catch {
          }
        }
      }
    } else if (isTypeLiteral(ast)) {
      const props = getPropertySignatures(ast);
      for (const prop of props) {
        debugDiffImpl(prop.type, a[prop.name], b[prop.name], `${path}.${prop.name.toString()}`, bag);
      }
    } else {
      bag.push({ path, a, b, ast });
    }
  }
};
const isTaggedUnion = (ast) => {
  if (isUnion(ast)) {
    return ast.types.every((type) => {
      if (isTypeLiteral(type) === false)
        return false;
      const props = getPropertySignatures(type);
      return props.some((prop) => prop.name.toString() === "_tag");
    });
  }
};
const encodeWithTransferables = (schema2, options2) => (a, overrideOptions) => gen(function* () {
  const collector = yield* makeCollector;
  const encoded = yield* encode(schema2, options2)(a, overrideOptions).pipe(provideService(Collector, collector));
  return [encoded, collector.unsafeRead()];
});
const swap = (schema2) => transformOrFail(typeSchema(schema2), encodedSchema(schema2), {
  decode: encode$1(schema2),
  encode: decode$1(schema2)
});
swap(Uint8ArrayFromBase64);
const JsonValue = Union(String$, Number$, Boolean$, Null, Array$(suspend$1(() => JsonValue)), Record({ key: String$, value: suspend$1(() => JsonValue) })).annotations({ title: "JsonValue" });
const WebChannelSymbol = Symbol("WebChannel");
const DebugPingMessage = TaggedStruct("WebChannel.DebugPing", {
  message: String$,
  payload: optional(String$)
});
const WebChannelPing = TaggedStruct("WebChannel.Ping", {
  requestId: String$
});
const WebChannelPong = TaggedStruct("WebChannel.Pong", {
  requestId: String$
});
const WebChannelHeartbeat = Union(WebChannelPing, WebChannelPong);
const schemaWithWebChannelMessages = (schema2) => ({
  send: Union(schema2.send, DebugPingMessage, WebChannelPing, WebChannelPong),
  listen: Union(schema2.listen, DebugPingMessage, WebChannelPing, WebChannelPong)
});
const mapSchema = (schema2) => hasProperty(schema2, "send") && hasProperty(schema2, "listen") ? schemaWithWebChannelMessages(schema2) : schemaWithWebChannelMessages({ send: schema2, listen: schema2 });
const listenToDebugPing = (channelName) => (stream) => stream.pipe(filterEffect(fn(function* (msg) {
  if (msg._tag === "Right" && is(DebugPingMessage)(msg.right)) {
    yield* logDebug(`WebChannel:ping [${channelName}] ${msg.right.message}`, msg.right.payload);
    return false;
  }
  return true;
})));
const broadcastChannel = ({ channelName, schema: inputSchema }) => scopeWithCloseable((scope2) => gen(function* () {
  const schema2 = mapSchema(inputSchema);
  const channel = new BroadcastChannel(channelName);
  yield* addFinalizer(() => try_(() => channel.close()).pipe(ignoreLogged));
  const send = (message) => gen(function* () {
    const messageEncoded = yield* encode(schema2.send)(message);
    channel.postMessage(messageEncoded);
  });
  const listen = fromEventListener(channel, "message").pipe(map((_) => decodeEither(schema2.listen)(_.data)), listenToDebugPing(channelName));
  const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
  const supportsTransferables = false;
  return {
    [WebChannelSymbol]: WebChannelSymbol,
    send,
    listen,
    closedDeferred,
    shutdown: close(scope2, succeed$8("shutdown")),
    schema: schema2,
    supportsTransferables
  };
}).pipe(withSpan$3(`WebChannel:broadcastChannel(${channelName})`)));
const windowChannel = ({ listenWindow, sendWindow, targetOrigin = "*", ids: ids2, schema: inputSchema }) => scopeWithCloseable((scope2) => gen(function* () {
  const schema2 = mapSchema(inputSchema);
  const debugInfo = {
    sendTotal: 0,
    listenTotal: 0,
    targetOrigin,
    ids: ids2
  };
  const WindowMessageListen = Struct({
    message: schema2.listen,
    from: Literal2(ids2.other),
    to: Literal2(ids2.own)
  }).annotations({ title: "webmesh.WindowMessageListen" });
  const WindowMessageSend = Struct({
    message: schema2.send,
    from: Literal2(ids2.own),
    to: Literal2(ids2.other)
  }).annotations({ title: "webmesh.WindowMessageSend" });
  const send = (message) => gen(function* () {
    debugInfo.sendTotal++;
    const [messageEncoded, transferables] = yield* encodeWithTransferables(WindowMessageSend)({
      message,
      from: ids2.own,
      to: ids2.other
    });
    sendWindow.postMessage(messageEncoded, targetOrigin, transferables);
  });
  const listen = fromEventListener(listenWindow, "message").pipe(
    // Stream.tap((_) => Effect.log(`${ids.other}→${ids.own}:message`, _.data)),
    filter((_) => is(encodedSchema(WindowMessageListen))(_.data)),
    map((_) => {
      debugInfo.listenTotal++;
      return decodeEither(schema2.listen)(_.data.message);
    }),
    listenToDebugPing("window")
  );
  const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
  const supportsTransferables = true;
  return {
    [WebChannelSymbol]: WebChannelSymbol,
    send,
    listen,
    closedDeferred,
    shutdown: close(scope2, succeed$8("shutdown")),
    schema: schema2,
    supportsTransferables,
    debugInfo
  };
}).pipe(withSpan$3(`WebChannel:windowChannel`)));
const messagePortChannel = ({ port, schema: inputSchema, debugId }) => scopeWithCloseable((scope2) => gen(function* () {
  const schema2 = mapSchema(inputSchema);
  const label = debugId === void 0 ? "messagePort" : `messagePort:${debugId}`;
  const send = (message) => gen(function* () {
    const [messageEncoded, transferables] = yield* encodeWithTransferables(schema2.send)(message);
    port.postMessage(messageEncoded, transferables);
  });
  const listen = fromEventListener(port, "message").pipe(
    // Stream.tap((_) => Effect.log(`${label}:message`, _.data)),
    map((_) => decodeEither(schema2.listen)(_.data)),
    listenToDebugPing(label)
  );
  port.start();
  const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
  const supportsTransferables = true;
  yield* addFinalizer(() => try_(() => port.close()).pipe(ignoreLogged));
  return {
    [WebChannelSymbol]: WebChannelSymbol,
    send,
    listen,
    closedDeferred,
    shutdown: close(scope2, succeed$8("shutdown")),
    schema: schema2,
    supportsTransferables
  };
}).pipe(withSpan$3(`WebChannel:messagePortChannel`)));
globalValue("livestore:sameThreadChannels", () => /* @__PURE__ */ new Map());
const messagePortChannelWithAck = ({ port, schema: inputSchema, debugId }) => scopeWithCloseable((scope2) => gen(function* () {
  const schema2 = mapSchema(inputSchema);
  const label = debugId === void 0 ? "messagePort" : `messagePort:${debugId}`;
  const requestAckMap = /* @__PURE__ */ new Map();
  const ChannelRequest = TaggedStruct("ChannelRequest", {
    id: String$,
    payload: Union(schema2.listen, schema2.send)
  }).annotations({ title: "webmesh.ChannelRequest" });
  const ChannelRequestAck = TaggedStruct("ChannelRequestAck", {
    reqId: String$
  }).annotations({ title: "webmesh.ChannelRequestAck" });
  const ChannelMessage = Union(ChannelRequest, ChannelRequestAck).annotations({
    title: "webmesh.ChannelMessage"
  });
  const debugInfo = {
    sendTotal: 0,
    sendPending: 0,
    listenTotal: 0,
    id: debugId
  };
  const send = (message) => gen(function* () {
    debugInfo.sendTotal++;
    debugInfo.sendPending++;
    const id2 = crypto.randomUUID();
    const [messageEncoded, transferables] = yield* encodeWithTransferables(ChannelMessage)({
      _tag: "ChannelRequest",
      id: id2,
      payload: message
    });
    const ack = yield* make$H();
    requestAckMap.set(id2, ack);
    port.postMessage(messageEncoded, transferables);
    yield* ack;
    requestAckMap.delete(id2);
    debugInfo.sendPending--;
  });
  const listen = fromEventListener(port, "message").pipe(
    // Stream.onStart(Effect.log(`${label}:listen:start`)),
    // Stream.tap((_) => Effect.log(`${label}:message`, _.data)),
    map((_) => decodeEither(ChannelMessage)(_.data)),
    tap((msg) => gen(function* () {
      if (msg._tag === "Right") {
        if (msg.right._tag === "ChannelRequestAck") {
          yield* succeed$9(requestAckMap.get(msg.right.reqId), void 0);
        } else if (msg.right._tag === "ChannelRequest") {
          debugInfo.listenTotal++;
          port.postMessage(encodeSync(ChannelMessage)({ _tag: "ChannelRequestAck", reqId: msg.right.id }));
        }
      }
    })),
    filterMap((msg) => msg._tag === "Left" ? some(msg) : msg.right._tag === "ChannelRequest" ? some(right(msg.right.payload)) : none$4()),
    (_) => _,
    listenToDebugPing(label)
  );
  port.start();
  const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
  const supportsTransferables = true;
  yield* addFinalizer(() => try_(() => port.close()).pipe(ignoreLogged));
  return {
    [WebChannelSymbol]: WebChannelSymbol,
    send,
    listen,
    closedDeferred,
    shutdown: close(scope2, succeed$8("shutdown")),
    schema: schema2,
    supportsTransferables,
    debugInfo
  };
}).pipe(withSpan$3(`WebChannel:messagePortChannelWithAck`)));
const toOpenChannel = (channel, options2) => gen(function* () {
  const queue = yield* unbounded$2().pipe(acquireRelease(shutdown));
  const pendingPingDeferredRef = {
    current: void 0
  };
  yield* channel.listen.pipe(
    // TODO implement this on the "chunk" level for better performance
    (options2 == null ? void 0 : options2.heartbeat) ? filterEffect(fn(function* (msg) {
      if (msg._tag === "Right" && is(WebChannelHeartbeat)(msg.right)) {
        if (msg.right._tag === "WebChannel.Ping") {
          yield* channel.send(WebChannelPong.make({ requestId: msg.right.requestId }));
        } else {
          const { deferred, requestId: requestId2 } = pendingPingDeferredRef.current ?? shouldNeverHappen("No pending ping");
          if (requestId2 !== msg.right.requestId) {
            shouldNeverHappen("Received pong for unexpected requestId", requestId2, msg.right.requestId);
          }
          yield* succeed$9(deferred, void 0);
        }
        return false;
      }
      return true;
    })) : identity,
    tapChunk((chunk2) => offerAll(queue, chunk2)),
    runDrain,
    forkScoped
  );
  if (options2 == null ? void 0 : options2.heartbeat) {
    const { interval, timeout: timeout$12 } = options2.heartbeat;
    yield* gen(function* () {
      while (true) {
        yield* sleep(interval);
        const requestId2 = crypto.randomUUID();
        yield* channel.send(WebChannelPing.make({ requestId: requestId2 }));
        const deferred = yield* make$H();
        pendingPingDeferredRef.current = { deferred, requestId: requestId2 };
        yield* deferred.pipe(timeout(timeout$12), catchTag("TimeoutException", () => channel.shutdown));
      }
    }).pipe(withSpan$3(`WebChannel:heartbeat`), forkScoped);
  }
  const listen = fromQueue(queue, { maxChunkSize: 1 });
  return {
    [WebChannelSymbol]: WebChannelSymbol,
    send: channel.send,
    listen,
    closedDeferred: channel.closedDeferred,
    shutdown: channel.shutdown,
    schema: channel.schema,
    supportsTransferables: channel.supportsTransferables,
    debugInfo: {
      innerDebugInfo: channel.debugInfo,
      listenQueueSize: queue
    }
  };
});
const withAsyncTaggingTracing = (makeTrace) => (eff) => {
  if (hasProperty(console, "createTask") === false) {
    return eff;
  }
  const makeTracer = gen(function* () {
    const oldTracer = yield* tracer;
    return make$z({
      span: (name, ...args2) => {
        const span2 = oldTracer.span(name, ...args2);
        const trace = makeTrace(name);
        span2.runInTask = (f) => trace.run(f);
        return span2;
      },
      context: (f, fiber) => {
        const maybeParentSpan = getOption(ParentSpan)(fiber.currentContext);
        if (maybeParentSpan._tag === "None")
          return oldTracer.context(f, fiber);
        const parentSpan = maybeParentSpan.value;
        if (parentSpan._tag === "ExternalSpan")
          return oldTracer.context(f, fiber);
        const span2 = parentSpan;
        if ("runInTask" in span2 && typeof span2.runInTask === "function") {
          return span2.runInTask(() => oldTracer.context(f, fiber));
        }
        return oldTracer.context(f, fiber);
      }
    });
  });
  const withTracerLayer = pipe(makeTracer, map$5(setTracer), unwrapEffect);
  return provide$1(eff, withTracerLayer);
};
const platformWorkerImpl = /* @__PURE__ */ makePlatform()({
  setup({
    scope: scope2,
    worker
  }) {
    const port = "port" in worker ? worker.port : worker;
    return as(addFinalizer$1(scope2, sync$3(() => {
      port.postMessage([1]);
    })), port);
  },
  listen({
    deferred,
    emit,
    port,
    scope: scope2
  }) {
    function onMessage(event) {
      emit(event.data);
    }
    function onError2(event) {
      unsafeDone(deferred, new WorkerError({
        reason: "unknown",
        cause: event.error ?? event.message
      }));
    }
    port.addEventListener("message", onMessage);
    port.addEventListener("error", onError2);
    if ("start" in port) {
      port.start();
    }
    return addFinalizer$1(scope2, sync$3(() => {
      port.removeEventListener("message", onMessage);
      port.removeEventListener("error", onError2);
    }));
  }
});
const layerWorker = /* @__PURE__ */ succeed$4(PlatformWorker, platformWorkerImpl);
const layerManager = /* @__PURE__ */ provide(layerManager$1, layerWorker);
const layer$3 = (spawn) => merge$3(layerManager, layerSpawner(spawn));
const layer$2 = layer$3;
const cachedPorts = /* @__PURE__ */ globalValue("@effect/platform-browser/Worker/cachedPorts", () => /* @__PURE__ */ new Set());
function globalHandleConnect(event) {
  cachedPorts.add(event.ports[0]);
}
if (typeof self !== "undefined" && "onconnect" in self) {
  self.onconnect = globalHandleConnect;
}
const make = (self2) => PlatformRunner.of({
  [PlatformRunnerTypeId]: PlatformRunnerTypeId,
  start: fnUntraced(function* (closeLatch) {
    const disconnects = yield* make$a();
    let currentPortId = 0;
    const ports = /* @__PURE__ */ new Map();
    const send = (portId, message, transfer) => sync$3(() => {
      var _a2;
      (((_a2 = ports.get(portId)) == null ? void 0 : _a2[0]) ?? self2).postMessage([1, message], {
        transfer
      });
    });
    const run2 = fnUntraced(function* (handler) {
      const scope$12 = yield* scope;
      const runtime$12 = (yield* interruptible(runtime())).pipe(updateContext(omit$2(Scope)));
      const fiberSet = yield* make$e();
      const runFork$22 = runFork(runtime$12);
      function onExit2(exit2) {
        if (exit2._tag === "Failure" && !isInterruptedOnly(exit2.cause)) {
          unsafeDone(closeLatch, die$5(squash(exit2.cause)));
        }
      }
      function onMessage(portId) {
        return function(event) {
          const message = event.data;
          if (message[0] === 0) {
            const result = handler(portId, message[1]);
            if (isEffect(result)) {
              const fiber = runFork$22(result);
              fiber.addObserver(onExit2);
              unsafeAdd(fiberSet, fiber);
            }
          } else {
            const port = ports.get(portId);
            if (!port) {
              return;
            } else if (ports.size === 1) {
              return unsafeDone(closeLatch, void_$3);
            }
            ports.delete(portId);
            runFork$1(close(port[1], void_$3));
          }
        };
      }
      function onMessageError(error) {
        unsafeDone(closeLatch, new WorkerError({
          reason: "decode",
          cause: error.data
        }));
      }
      function onError2(error) {
        unsafeDone(closeLatch, new WorkerError({
          reason: "unknown",
          cause: error.data
        }));
      }
      function handlePort(port) {
        const fiber = fork$1(scope$12, sequential$1).pipe(flatMap$4((scope2) => {
          const portId = currentPortId++;
          ports.set(portId, [port, scope2]);
          const onMsg = onMessage(portId);
          port.addEventListener("message", onMsg);
          port.addEventListener("messageerror", onMessageError);
          if ("start" in port) {
            port.start();
          }
          port.postMessage([0]);
          return addFinalizer$1(scope2, sync$3(() => {
            port.removeEventListener("message", onMsg);
            port.removeEventListener("messageerror", onError2);
            port.close();
          }));
        }), runFork$22);
        fiber.addObserver(onExit2);
        unsafeAdd(fiberSet, fiber);
      }
      self2.addEventListener("error", onError2);
      let prevOnConnect;
      if ("onconnect" in self2) {
        prevOnConnect = self2.onconnect;
        self2.onconnect = function(event) {
          const port = event.ports[0];
          handlePort(port);
        };
        for (const port of cachedPorts) {
          handlePort(port);
        }
        cachedPorts.clear();
        yield* addFinalizer$1(scope$12, sync$3(() => self2.close()));
      } else {
        handlePort(self2);
      }
      yield* addFinalizer$1(scope$12, sync$3(() => {
        self2.removeEventListener("error", onError2);
        if ("onconnect" in self2) {
          self2.onconnect = prevOnConnect;
        }
      }));
    });
    return identity({
      run: run2,
      send,
      disconnects
    });
  })
});
const layer$1 = /* @__PURE__ */ sync$2(PlatformRunner, () => make(self));
const layer = layer$1;
const localEventSequenceNumber = nominal();
const ClientEventSequenceNumber = fromBrand(localEventSequenceNumber)(Int);
const globalEventSequenceNumber = nominal();
const GlobalEventSequenceNumber = fromBrand(globalEventSequenceNumber)(Int);
const clientDefault = 0;
const EventSequenceNumber = Struct({
  global: GlobalEventSequenceNumber,
  /** Only increments for clientOnly events */
  client: ClientEventSequenceNumber
  // TODO also provide a way to see "confirmation level" of event (e.g. confirmed by leader/sync backend)
  // TODO: actually add this field
  // Client only
  // generation: Schema.Number.pipe(Schema.optional),
}).annotations({ title: "LiveStore.EventSequenceNumber" });
const toString = (seqNum) => seqNum.client === 0 ? `e${seqNum.global}` : `e${seqNum.global}+${seqNum.client}`;
const nextPair = (seqNum, isLocal) => {
  if (isLocal) {
    return {
      seqNum: { global: seqNum.global, client: seqNum.client + 1 },
      parentSeqNum: seqNum
    };
  }
  return {
    seqNum: { global: seqNum.global + 1, client: clientDefault },
    // NOTE we always point to `client: 0` for non-clientOnly events
    parentSeqNum: { global: seqNum.global, client: clientDefault }
  };
};
const LeaderPullCursor = Struct({
  mergeCounter: Number$,
  eventNum: EventSequenceNumber
});
Struct({
  fileName: String$
}, { key: String$, value: Any }).annotations({ title: "LiveStore.PersistenceInfo" });
const BootStateProgress = Struct({
  done: Number$,
  total: Number$
});
const BootStatus = Union(Struct({ stage: Literal2("loading") }), Struct({ stage: Literal2("migrating"), progress: BootStateProgress }), Struct({ stage: Literal2("rehydrating"), progress: BootStateProgress }), Struct({ stage: Literal2("syncing"), progress: BootStateProgress }), Struct({ stage: Literal2("done") })).annotations({ title: "BootStatus" });
const _UnexpectedError = class _UnexpectedError extends TaggedError()("LiveStore.UnexpectedError", {
  cause: Defect,
  note: optional(String$),
  payload: optional(Any)
}) {
};
__publicField(_UnexpectedError, "mapToUnexpectedError", (effect2) => effect2.pipe(mapError$4((cause) => is(_UnexpectedError)(cause) ? cause : new _UnexpectedError({ cause })), catchAllDefect((cause) => new _UnexpectedError({ cause }))));
__publicField(_UnexpectedError, "mapToUnexpectedErrorStream", (stream) => stream.pipe(mapError((cause) => is(_UnexpectedError)(cause) ? cause : new _UnexpectedError({ cause }))));
let UnexpectedError = _UnexpectedError;
class IntentionalShutdownCause extends TaggedError()("LiveStore.IntentionalShutdownCause", {
  reason: Literal2("devtools-reset", "devtools-import", "adapter-reset", "manual")
}) {
}
class StoreInterrupted extends TaggedError()("LiveStore.StoreInterrupted", {
  reason: String$
}) {
}
class SqliteError extends TaggedError()("LiveStore.SqliteError", {
  query: optional(Struct({
    sql: String$,
    bindValues: Union(Record({ key: String$, value: Any }), Array$(Any))
  })),
  /** The SQLite result code */
  // code: Schema.optional(Schema.Number),
  // Added string support for Expo SQLite (we should refactor this to have a unified error type)
  code: optional(Union(Number$, String$)),
  /** The original SQLite3 error */
  cause: Defect,
  note: optional(String$)
}) {
}
const MigrationsReportEntry = Struct({
  tableName: String$,
  hashes: Struct({
    expected: Number$,
    actual: optional(Number$)
  })
});
const MigrationsReport = Struct({
  migrations: Array$(MigrationsReportEntry)
});
Struct({
  name: String$,
  args: Any,
  seqNum: EventSequenceNumber,
  parentSeqNum: EventSequenceNumber,
  clientId: String$,
  sessionId: String$
}).annotations({ title: "LiveStoreEvent.AnyDecoded" });
const AnyEncoded = Struct({
  name: String$,
  args: Any,
  seqNum: EventSequenceNumber,
  parentSeqNum: EventSequenceNumber,
  clientId: String$,
  sessionId: String$
}).annotations({ title: "LiveStoreEvent.AnyEncoded" });
const AnyEncodedGlobal = Struct({
  name: String$,
  args: Any,
  seqNum: GlobalEventSequenceNumber,
  parentSeqNum: GlobalEventSequenceNumber,
  clientId: String$,
  sessionId: String$
}).annotations({ title: "LiveStoreEvent.AnyEncodedGlobal" });
const PartialAnyEncoded = Struct({
  name: String$,
  args: Any
});
const _EncodedWithMeta = class _EncodedWithMeta extends Class3("LiveStoreEvent.EncodedWithMeta")({
  name: String$,
  args: Any,
  seqNum: EventSequenceNumber,
  parentSeqNum: EventSequenceNumber,
  clientId: String$,
  sessionId: String$,
  // TODO get rid of `meta` again by cleaning up the usage implementations
  meta: Struct({
    sessionChangeset: Union(TaggedStruct("sessionChangeset", {
      data: Uint8Array$,
      debug: Any.pipe(optional)
    }), TaggedStruct("no-op", {}), TaggedStruct("unset", {})),
    syncMetadata: Option(JsonValue),
    /** Used to detect if the materializer is side effecting (during dev) */
    materializerHashLeader: Option(Number$),
    materializerHashSession: Option(Number$)
  }).pipe(mutable, optional, withDefaults({
    constructor: () => ({
      sessionChangeset: { _tag: "unset" },
      syncMetadata: none$4(),
      materializerHashLeader: none$4(),
      materializerHashSession: none$4()
    }),
    decoding: () => ({
      sessionChangeset: { _tag: "unset" },
      syncMetadata: none$4(),
      materializerHashLeader: none$4(),
      materializerHashSession: none$4()
    })
  }))
}) {
  constructor() {
    super(...arguments);
    __publicField(this, "toJSON", () => {
      return {
        seqNum: `${toString(this.seqNum)} → ${toString(this.parentSeqNum)} (${this.clientId}, ${this.sessionId})`,
        name: this.name,
        args: this.args
      };
    });
    /**
     * Example: (global event)
     * For event e2 → e1 which should be rebased on event e3 → e2
     * the resulting event num will be e4 → e3
     *
     * Example: (client event)
     * For event e2+1 → e2 which should be rebased on event e3 → e2
     * the resulting event num will be e3+1 → e3
     *
     * Syntax: e2+2 → e2+1
     *          ^ ^    ^ ^
     *          | |    | +- client parent number
     *          | |    +--- global parent number
     *          | +-- client number
     *          +---- global number
     * Client num is ommitted for global events
     */
    __publicField(this, "rebase", (parentSeqNum, isClient) => new _EncodedWithMeta({
      ...this,
      ...nextPair(parentSeqNum, isClient)
    }));
    __publicField(this, "toGlobal", () => ({
      ...this,
      seqNum: this.seqNum.global,
      parentSeqNum: this.parentSeqNum.global
    }));
  }
};
__publicField(_EncodedWithMeta, "fromGlobal", (event, meta) => new _EncodedWithMeta({
  ...event,
  seqNum: { global: event.seqNum, client: clientDefault },
  parentSeqNum: { global: event.parentSeqNum, client: clientDefault },
  meta: {
    sessionChangeset: { _tag: "unset" },
    syncMetadata: meta.syncMetadata,
    materializerHashLeader: meta.materializerHashLeader,
    materializerHashSession: meta.materializerHashSession
  }
}));
let EncodedWithMeta = _EncodedWithMeta;
class IsOfflineError extends TaggedError()("IsOfflineError", {}) {
}
class InvalidPushError extends TaggedError()("InvalidPushError", {
  reason: Union(TaggedStruct("Unexpected", {
    message: String$
  }), TaggedStruct("ServerAhead", {
    minimumExpectedNum: Number$,
    providedNum: Number$
  }))
}) {
}
class InvalidPullError extends TaggedError()("InvalidPullError", {
  message: String$
}) {
}
class LeaderAheadError extends TaggedError()("LeaderAheadError", {
  minimumExpectedNum: EventSequenceNumber,
  providedNum: EventSequenceNumber
  /** Generation number the client session should use for subsequent pushes */
  // nextGeneration: Schema.Number,
}) {
}
class SyncState extends Class3("SyncState")({
  pending: Array$(EncodedWithMeta),
  /** What this node expects the next upstream node to have as its own local head */
  upstreamHead: EventSequenceNumber,
  /** Equivalent to `pending.at(-1)?.id` if there are pending events */
  localHead: EventSequenceNumber
}) {
  constructor() {
    super(...arguments);
    __publicField(this, "toJSON", () => ({
      pending: this.pending.map((e) => e.toJSON()),
      upstreamHead: toString(this.upstreamHead),
      localHead: toString(this.localHead)
    }));
  }
}
class PayloadUpstreamRebase extends TaggedStruct("upstream-rebase", {
  /** Events which need to be rolled back */
  rollbackEvents: Array$(EncodedWithMeta),
  /** Events which need to be applied after the rollback (already rebased by the upstream node) */
  newEvents: Array$(EncodedWithMeta)
}) {
}
class PayloadUpstreamAdvance extends TaggedStruct("upstream-advance", {
  newEvents: Array$(EncodedWithMeta)
}) {
}
class PayloadLocalPush extends TaggedStruct("local-push", {
  newEvents: Array$(EncodedWithMeta)
}) {
}
class Payload extends Union(PayloadUpstreamRebase, PayloadUpstreamAdvance, PayloadLocalPush) {
}
class PayloadUpstream extends Union(PayloadUpstreamRebase, PayloadUpstreamAdvance) {
}
class MergeContext extends Class3("MergeContext")({
  payload: Payload,
  syncState: SyncState
}) {
  constructor() {
    super(...arguments);
    __publicField(this, "toJSON", () => {
      const payload = value(this.payload).pipe(tag$2("local-push", () => ({
        _tag: "local-push",
        newEvents: this.payload.newEvents.map((e) => e.toJSON())
      })), tag$2("upstream-advance", () => ({
        _tag: "upstream-advance",
        newEvents: this.payload.newEvents.map((e) => e.toJSON())
      })), tag$2("upstream-rebase", (payload2) => ({
        _tag: "upstream-rebase",
        newEvents: payload2.newEvents.map((e) => e.toJSON()),
        rollbackEvents: payload2.rollbackEvents.map((e) => e.toJSON())
      })), exhaustive);
      return {
        payload,
        syncState: this.syncState.toJSON()
      };
    });
  }
}
class MergeResultAdvance extends Class3("MergeResultAdvance")({
  _tag: Literal2("advance"),
  newSyncState: SyncState,
  newEvents: Array$(EncodedWithMeta),
  /** Events which were previously pending but are now confirmed */
  confirmedEvents: Array$(EncodedWithMeta),
  mergeContext: MergeContext
}) {
  constructor() {
    super(...arguments);
    __publicField(this, "toJSON", () => {
      return {
        _tag: this._tag,
        newSyncState: this.newSyncState.toJSON(),
        newEvents: this.newEvents.map((e) => e.toJSON()),
        confirmedEvents: this.confirmedEvents.map((e) => e.toJSON()),
        mergeContext: this.mergeContext.toJSON()
      };
    });
  }
}
class MergeResultRebase extends Class3("MergeResultRebase")({
  _tag: Literal2("rebase"),
  newSyncState: SyncState,
  newEvents: Array$(EncodedWithMeta),
  /** Events which need to be rolled back */
  rollbackEvents: Array$(EncodedWithMeta),
  mergeContext: MergeContext
}) {
  constructor() {
    super(...arguments);
    __publicField(this, "toJSON", () => {
      return {
        _tag: this._tag,
        newSyncState: this.newSyncState.toJSON(),
        newEvents: this.newEvents.map((e) => e.toJSON()),
        rollbackEvents: this.rollbackEvents.map((e) => e.toJSON()),
        mergeContext: this.mergeContext.toJSON()
      };
    });
  }
}
class MergeResultReject extends Class3("MergeResultReject")({
  _tag: Literal2("reject"),
  /** The minimum id that the new events must have */
  expectedMinimumId: EventSequenceNumber,
  mergeContext: MergeContext
}) {
  constructor() {
    super(...arguments);
    __publicField(this, "toJSON", () => {
      return {
        _tag: this._tag,
        expectedMinimumId: toString(this.expectedMinimumId),
        mergeContext: this.mergeContext.toJSON()
      };
    });
  }
}
class MergeResultUnexpectedError extends Class3("MergeResultUnexpectedError")({
  _tag: Literal2("unexpected-error"),
  cause: UnexpectedError
}) {
}
class MergeResult extends Union(MergeResultAdvance, MergeResultRebase, MergeResultReject, MergeResultUnexpectedError) {
}
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = (size2 = 21) => {
  let id2 = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size2 |= 0));
  while (size2--) {
    id2 += urlAlphabet[bytes[size2] & 63];
  }
  return id2;
};
const RequestSessions = TaggedStruct("RequestSessions", {});
const SessionInfo = TaggedStruct("SessionInfo", {
  storeId: String$,
  clientId: String$,
  sessionId: String$,
  schemaAlias: String$,
  isLeader: Boolean$
});
const Message = Union(RequestSessions, SessionInfo);
const liveStoreVersion$1 = "0.3.1";
const NetworkStatus = Struct({
  isConnected: Boolean$,
  timestampMs: Number$,
  /** Whether the network status devtools latch is closed. Used to simulate network disconnection. */
  latchClosed: Boolean$
});
const requestId = String$;
const clientId = String$;
const liveStoreVersion = Literal2(liveStoreVersion$1);
const LSDMessage = (tag2, fields) => TaggedStruct(tag2, {
  liveStoreVersion,
  ...fields
}).annotations({ identifier: tag2 });
const LSDChannelMessage = (tag2, fields) => LSDMessage(tag2, {
  clientId,
  ...fields
});
const LSDReqResMessage = (tag2, fields) => LSDChannelMessage(tag2, {
  requestId,
  ...fields
});
const LeaderReqResMessage = (tag2, fields) => {
  const Success = TaggedStruct(`${tag2}.Response.Success`, {
    requestId,
    liveStoreVersion,
    ...fields.success
  }).annotations({ identifier: `${tag2}.Response.Success` });
  const Error2 = fields.error ? TaggedStruct(`${tag2}.Response.Error`, {
    requestId,
    liveStoreVersion,
    ...fields.error
  }).annotations({ identifier: `${tag2}.Response.Error` }) : Never;
  return {
    Request: TaggedStruct(`${tag2}.Request`, {
      requestId,
      liveStoreVersion,
      ...fields.payload
    }).annotations({ identifier: `${tag2}.Request` }),
    Response: Union(Success, Error2),
    Success,
    Error: Error2
  };
};
class ResetAllDataReq extends LSDReqResMessage("LSD.Leader.ResetAllDataReq", {
  mode: Literal2("all-data", "only-app-db")
}) {
}
class DatabaseFileInfoReq extends LSDReqResMessage("LSD.Leader.DatabaseFileInfoReq", {}) {
}
class DatabaseFileInfo extends Struct({
  fileSize: Number$,
  persistenceInfo: Struct({ fileName: String$ }, { key: String$, value: Any })
}) {
}
class DatabaseFileInfoRes extends LSDReqResMessage("LSD.Leader.DatabaseFileInfoRes", {
  state: DatabaseFileInfo,
  eventlog: DatabaseFileInfo
}) {
}
class NetworkStatusSubscribe extends LSDReqResMessage("LSD.Leader.NetworkStatusSubscribe", {
  subscriptionId: String$
}) {
}
class NetworkStatusUnsubscribe extends LSDReqResMessage("LSD.Leader.NetworkStatusUnsubscribe", {
  subscriptionId: String$
}) {
}
class NetworkStatusRes extends LSDReqResMessage("LSD.Leader.NetworkStatusRes", {
  networkStatus: NetworkStatus,
  subscriptionId: String$
}) {
}
class SyncingInfoReq extends LSDReqResMessage("LSD.Leader.SyncingInfoReq", {}) {
}
class SyncingInfo extends Struct({
  enabled: Boolean$,
  metadata: Record({ key: String$, value: Any })
}) {
}
class SyncingInfoRes extends LSDReqResMessage("LSD.Leader.SyncingInfoRes", {
  syncingInfo: SyncingInfo
}) {
}
class SyncHistorySubscribe extends LSDReqResMessage("LSD.Leader.SyncHistorySubscribe", {
  subscriptionId: String$
}) {
}
class SyncHistoryUnsubscribe extends LSDReqResMessage("LSD.Leader.SyncHistoryUnsubscribe", {
  subscriptionId: String$
}) {
}
class SyncHistoryRes extends LSDReqResMessage("LSD.Leader.SyncHistoryRes", {
  eventEncoded: AnyEncodedGlobal,
  metadata: Option(JsonValue),
  subscriptionId: String$
}) {
}
class SyncHeadSubscribe extends LSDReqResMessage("LSD.Leader.SyncHeadSubscribe", {
  subscriptionId: String$
}) {
}
class SyncHeadUnsubscribe extends LSDReqResMessage("LSD.Leader.SyncHeadUnsubscribe", {
  subscriptionId: String$
}) {
}
class SyncHeadRes extends LSDReqResMessage("LSD.Leader.SyncHeadRes", {
  local: EventSequenceNumber,
  upstream: EventSequenceNumber,
  subscriptionId: String$
}) {
}
class SnapshotReq extends LSDReqResMessage("LSD.Leader.SnapshotReq", {}) {
}
class SnapshotRes extends LSDReqResMessage("LSD.Leader.SnapshotRes", {
  snapshot: Uint8Array$1
}) {
}
const LoadDatabaseFile = LeaderReqResMessage("LSD.Leader.LoadDatabaseFile", {
  payload: {
    data: Uint8Array$1
  },
  success: {},
  error: {
    cause: Union(TaggedStruct("unsupported-file", {}), TaggedStruct("unsupported-database", {}), TaggedStruct("unexpected-error", { cause: Defect }))
  }
});
class SyncPull extends LSDMessage("LSD.Leader.SyncPull", {
  payload: PayloadUpstream
}) {
}
class CommitEventReq extends LSDReqResMessage("LSD.Leader.CommitEventReq", {
  eventEncoded: PartialAnyEncoded
}) {
}
class CommitEventRes extends LSDReqResMessage("LSD.Leader.CommitEventRes", {}) {
}
class EventlogReq extends LSDReqResMessage("LSD.Leader.EventlogReq", {}) {
}
class EventlogRes extends LSDReqResMessage("LSD.Leader.EventlogRes", {
  eventlog: Uint8Array$1
}) {
}
class Ping extends LSDReqResMessage("LSD.Leader.Ping", {}) {
}
class Pong extends LSDReqResMessage("LSD.Leader.Pong", {}) {
}
class Disconnect extends LSDReqResMessage("LSD.Leader.Disconnect", {}) {
}
const SetSyncLatch = LeaderReqResMessage("LSD.Leader.SetSyncLatch", {
  payload: {
    closeLatch: Boolean$
  },
  success: {}
});
const ResetAllData = LeaderReqResMessage("LSD.Leader.ResetAllData", {
  payload: {
    mode: Literal2("all-data", "only-app-db")
  },
  success: {}
});
const MessageToApp = Union(SnapshotReq, LoadDatabaseFile.Request, EventlogReq, ResetAllData.Request, NetworkStatusSubscribe, NetworkStatusUnsubscribe, Disconnect, CommitEventReq, Ping, DatabaseFileInfoReq, SyncHistorySubscribe, SyncHistoryUnsubscribe, SyncingInfoReq, SyncHeadSubscribe, SyncHeadUnsubscribe, SetSyncLatch.Request).annotations({ identifier: "LSD.Leader.MessageToApp" });
Union(SnapshotRes, LoadDatabaseFile.Response, EventlogRes, Disconnect, SyncPull, NetworkStatusRes, CommitEventRes, Pong, DatabaseFileInfoRes, SyncHistoryRes, SyncingInfoRes, SyncHeadRes, ResetAllData.Success, SetSyncLatch.Success).annotations({ identifier: "LSD.Leader.MessageFromApp" });
const DevtoolsMode = Union(TaggedStruct("node", {
  /** WebSocket URL */
  url: String$
}), TaggedStruct("web", {}), TaggedStruct("browser-extension", {}));
DevtoolsMode.pipe(pluck("_tag"), typeSchema);
const makeNodeName$1 = {
  client: {
    session: ({ storeId, clientId: clientId2, sessionId }) => `client-session-${storeId}-${clientId2}-${sessionId}`,
    leader: ({ storeId, clientId: clientId2 }) => `client-leader-${storeId}-${clientId2}`
  }
};
const id = String$.pipe(optional, withDefaults({ constructor: () => nanoid(10), decoding: () => nanoid(10) }));
const defaultPacketFields = {
  id,
  target: String$,
  source: String$,
  channelName: String$,
  hops: Array$(String$)
};
const remainingHopsUndefined = Undefined.pipe(optional);
class DirectChannelRequest extends TaggedStruct("DirectChannelRequest", {
  ...defaultPacketFields,
  remainingHops: Array$(String$).pipe(optional),
  channelVersion: Number$,
  /** Only set if the request is in response to an incoming request */
  reqId: UndefinedOr(String$),
  /**
   * Additionally to the `source` field, we use this field to track whether the instance of a
   * source has changed.
   */
  sourceId: String$
}) {
}
class DirectChannelResponseSuccess extends TaggedStruct("DirectChannelResponseSuccess", {
  ...defaultPacketFields,
  reqId: String$,
  port: MessagePort,
  // Since we can't copy this message, we need to follow the exact route back to the sender
  remainingHops: Array$(String$),
  channelVersion: Number$
}) {
}
class DirectChannelResponseNoTransferables extends TaggedStruct("DirectChannelResponseNoTransferables", {
  ...defaultPacketFields,
  reqId: String$,
  remainingHops: Array$(String$)
}) {
}
class ProxyChannelRequest extends TaggedStruct("ProxyChannelRequest", {
  ...defaultPacketFields,
  remainingHops: remainingHopsUndefined,
  channelIdCandidate: String$
}) {
}
class ProxyChannelResponseSuccess extends TaggedStruct("ProxyChannelResponseSuccess", {
  ...defaultPacketFields,
  reqId: String$,
  remainingHops: Array$(String$),
  combinedChannelId: String$,
  channelIdCandidate: String$
}) {
}
class ProxyChannelPayload extends TaggedStruct("ProxyChannelPayload", {
  ...defaultPacketFields,
  remainingHops: remainingHopsUndefined,
  payload: Any,
  combinedChannelId: String$
}) {
}
class ProxyChannelPayloadAck extends TaggedStruct("ProxyChannelPayloadAck", {
  ...defaultPacketFields,
  reqId: String$,
  remainingHops: Array$(String$),
  combinedChannelId: String$
}) {
}
class NetworkEdgeAdded extends TaggedStruct("NetworkEdgeAdded", {
  id,
  source: String$,
  target: String$
}) {
}
class NetworkTopologyRequest extends TaggedStruct("NetworkTopologyRequest", {
  id,
  hops: Array$(String$),
  /** Always fixed to who requested the topology */
  source: String$,
  target: Literal2("-")
}) {
}
class NetworkTopologyResponse extends TaggedStruct("NetworkTopologyResponse", {
  id,
  reqId: String$,
  remainingHops: Array$(String$),
  nodeName: String$,
  edges: Array$(String$),
  /** Always fixed to who requested the topology */
  source: String$,
  target: Literal2("-")
}) {
}
const BroadcastChannelPacket = TaggedStruct("BroadcastChannelPacket", {
  id,
  channelName: String$,
  /**
   * The payload is expected to be encoded/decoded by the send/listen schema.
   * Transferables are not supported.
   */
  payload: Any,
  hops: Array$(String$),
  source: String$,
  target: Literal2("-")
});
class DirectChannelPacket extends Union(DirectChannelRequest, DirectChannelResponseSuccess, DirectChannelResponseNoTransferables) {
}
class ProxyChannelPacket extends Union(ProxyChannelRequest, ProxyChannelResponseSuccess, ProxyChannelPayload, ProxyChannelPayloadAck) {
}
class Packet extends Union(DirectChannelPacket, ProxyChannelPacket, NetworkEdgeAdded, NetworkTopologyRequest, NetworkTopologyResponse, BroadcastChannelPacket) {
}
class DirectChannelPing extends TaggedStruct("DirectChannelPing", {}) {
}
class DirectChannelPong extends TaggedStruct("DirectChannelPong", {}) {
}
class EdgeAlreadyExistsError extends TaggedError()("EdgeAlreadyExistsError", {
  target: String$
}) {
}
const packetAsOtelAttributes = (packet) => ({
  packetId: packet.id,
  "span.label": packet.id + (hasProperty(packet, "reqId") && packet.reqId !== void 0 ? ` for ${packet.reqId}` : ""),
  ...packet._tag !== "DirectChannelResponseSuccess" && packet._tag !== "ProxyChannelPayload" ? { packet } : {}
});
Struct({
  channelName: String$,
  source: String$,
  mode: Union(Literal2("proxy"), Literal2("direct"))
});
const makeDeferredResult = make$H;
const makeDirectChannelInternal = ({ nodeName, incomingPacketsQueue, target, checkTransferableEdges, channelName, schema: schema_, sendPacket, channelVersion, scope: scope2, sourceId }) => gen(function* () {
  const deferred = yield* makeDeferredResult();
  const span2 = yield* currentOtelSpan.pipe(catchAll$3(() => succeed$5(void 0)));
  const schema2 = {
    send: Union(schema_.send, DirectChannelPing, DirectChannelPong),
    listen: Union(schema_.listen, DirectChannelPing, DirectChannelPong)
  };
  const channelStateRef = {
    current: { _tag: "Initial" }
  };
  const processMessagePacket = ({ packet, respondToSender }) => gen(function* () {
    const channelState2 = channelStateRef.current;
    span2 == null ? void 0 : span2.addEvent(`process:${packet._tag}`, {
      channelState: channelState2._tag,
      packetId: packet.id,
      packetReqId: packet.reqId,
      packetChannelVersion: hasProperty("channelVersion")(packet) ? packet.channelVersion : void 0
    });
    if (channelState2._tag === "Initial")
      return shouldNeverHappen();
    if (packet._tag === "DirectChannelResponseNoTransferables") {
      yield* fail$a(deferred, packet);
      return "close";
    }
    if (packet.channelVersion > channelVersion) {
      span2 == null ? void 0 : span2.addEvent(`incoming packet has higher version (${packet.channelVersion}), closing channel`);
      yield* close(scope2, succeed$8("higher-version-expected"));
      return "close";
    }
    if (packet.channelVersion < channelVersion) {
      const newPacket = DirectChannelRequest.make({
        source: nodeName,
        sourceId,
        target,
        channelName,
        channelVersion,
        hops: [],
        remainingHops: packet.hops,
        reqId: void 0
      });
      span2 == null ? void 0 : span2.addEvent(`incoming packet has lower version (${packet.channelVersion}), sending request to reconnect (${newPacket.id})`);
      yield* sendPacket(newPacket);
      return;
    }
    if (channelState2._tag === "Established" && packet._tag === "DirectChannelRequest") {
      if (packet.sourceId === channelState2.otherSourceId) {
        return;
      } else {
        span2 == null ? void 0 : span2.addEvent(`force-new-channel`);
        yield* close(scope2, succeed$8("force-new-channel"));
        return "close";
      }
    }
    switch (packet._tag) {
      // Assumption: Each side has sent an initial request and another request as a response for an incoming request
      case "DirectChannelRequest": {
        if (channelState2._tag !== "RequestSent") {
          return;
        }
        if (packet.reqId === channelState2.reqPacketId) ;
        else {
          const newRequestPacket = DirectChannelRequest.make({
            source: nodeName,
            sourceId,
            target,
            channelName,
            channelVersion,
            hops: [],
            remainingHops: packet.hops,
            reqId: packet.id
          });
          span2 == null ? void 0 : span2.addEvent(`Re-sending new request (${newRequestPacket.id}) for incoming request (${packet.id})`);
          yield* sendPacket(newRequestPacket);
        }
        const isWinner = nodeName > target;
        if (isWinner) {
          span2 == null ? void 0 : span2.addEvent(`winner side: creating direct channel and sending response`);
          const mc = new MessageChannel();
          const channel2 = yield* messagePortChannelWithAck({
            port: mc.port1,
            schema: schema2,
            debugId: channelVersion
          }).pipe(andThen(toOpenChannel));
          yield* respondToSender(DirectChannelResponseSuccess.make({
            reqId: packet.id,
            target,
            source: nodeName,
            channelName: packet.channelName,
            hops: [],
            remainingHops: packet.hops.slice(0, -1),
            port: mc.port2,
            channelVersion
          }));
          channelStateRef.current = { _tag: "winner:ResponseSent", channel: channel2, otherSourceId: packet.sourceId };
          yield* channel2.listen.pipe(flatten(), filter(is(DirectChannelPing)), take(1), runDrain);
          yield* channel2.send(DirectChannelPong.make({}));
          span2 == null ? void 0 : span2.addEvent(`winner side: established`);
          channelStateRef.current = { _tag: "Established", otherSourceId: packet.sourceId };
          yield* succeed$9(deferred, channel2);
        } else {
          span2 == null ? void 0 : span2.addEvent(`loser side: waiting for response`);
          channelStateRef.current = { _tag: "loser:WaitingForResponse", otherSourceId: packet.sourceId };
        }
        break;
      }
      case "DirectChannelResponseSuccess": {
        if (channelState2._tag !== "loser:WaitingForResponse") {
          return shouldNeverHappen(`Expected to find direct channel response from ${target}, but was in ${channelState2._tag} state`);
        }
        const channel2 = yield* messagePortChannelWithAck({
          port: packet.port,
          schema: schema2,
          debugId: channelVersion
        }).pipe(andThen(toOpenChannel));
        const waitForPongFiber = yield* channel2.listen.pipe(flatten(), filter(is(DirectChannelPong)), take(1), runDrain, fork);
        yield* channel2.send(DirectChannelPing.make({})).pipe(timeout(10), retry$2({ times: 2 }));
        yield* waitForPongFiber;
        span2 == null ? void 0 : span2.addEvent(`loser side: established`);
        channelStateRef.current = { _tag: "Established", otherSourceId: channelState2.otherSourceId };
        yield* succeed$9(deferred, channel2);
        return;
      }
      default: {
        return casesHandled(packet);
      }
    }
  }).pipe(withSpan$3(`handleMessagePacket:${packet._tag}:${packet.source}→${packet.target}`, {
    attributes: packetAsOtelAttributes(packet)
  }));
  yield* gen(function* () {
    while (true) {
      const packet = yield* take$4(incomingPacketsQueue);
      const res = yield* processMessagePacket(packet);
      if (res === "close") {
        return;
      }
    }
  }).pipe(interruptible, tapCauseLogPretty, forkScoped);
  const channelState = channelStateRef.current;
  if (channelState._tag !== "Initial") {
    return shouldNeverHappen(`Expected channel to be in Initial state, but was in ${channelState._tag} state`);
  }
  const edgeRequest = gen(function* () {
    const packet = DirectChannelRequest.make({
      source: nodeName,
      sourceId,
      target,
      channelName,
      channelVersion,
      hops: [],
      reqId: void 0
    });
    channelStateRef.current = { _tag: "RequestSent", reqPacketId: packet.id };
    const noTransferableResponse = checkTransferableEdges(packet);
    if (noTransferableResponse !== void 0) {
      yield* spanEvent(`No transferable edges found for ${packet.source}→${packet.target}`);
      return yield* fail$6(noTransferableResponse);
    }
    yield* sendPacket(packet);
    span2 == null ? void 0 : span2.addEvent(`initial edge request sent (${packet.id})`);
  });
  yield* edgeRequest;
  const channel = yield* deferred;
  return channel;
}).pipe(withSpanScoped(`makeDirectChannel:${channelVersion}`));
const makeDirectChannel = ({ schema: schema2, newEdgeAvailablePubSub, channelName, checkTransferableEdges, nodeName, incomingPacketsQueue, target, sendPacket }) => scopeWithCloseable((scope2) => gen(function* () {
  const sourceId = nanoid();
  const listenQueue = yield* unbounded$2();
  const sendQueue = yield* unbounded();
  const initialEdgeDeferred = yield* make$H();
  const debugInfo = {
    pendingSends: 0,
    totalSends: 0,
    connectCounter: 0,
    isConnected: false,
    innerChannelRef: { current: void 0 }
  };
  yield* gen(function* () {
    const resultDeferred = yield* make$H();
    while (true) {
      debugInfo.connectCounter++;
      const channelVersion2 = debugInfo.connectCounter;
      yield* spanEvent(`Connecting#${channelVersion2}`);
      const makeDirectChannelScope2 = yield* make$p();
      yield* addFinalizer((ex) => close(makeDirectChannelScope2, ex));
      const waitForNewEdgeFiber = yield* fromPubSub(newEdgeAvailablePubSub).pipe(tap((edgeName) => spanEvent(`new-conn:${edgeName}`)), take(1), runDrain, as("new-edge"), fork);
      const makeChannel = makeDirectChannelInternal({
        nodeName,
        sourceId,
        incomingPacketsQueue,
        target,
        checkTransferableEdges,
        channelName,
        schema: schema2,
        channelVersion: channelVersion2,
        sendPacket,
        scope: makeDirectChannelScope2
      }).pipe(
        extend$1(makeDirectChannelScope2),
        forkIn(makeDirectChannelScope2),
        // Given we only call `Effect.exit` later when joining the fiber,
        // we don't want Effect to produce a "unhandled error" log message
        withUnhandledErrorLogLevel(none$4())
      );
      const raceResult = yield* raceFirst(makeChannel, waitForNewEdgeFiber.pipe(disconnect));
      if (raceResult === "new-edge") {
        yield* close(makeDirectChannelScope2, fail$9("new-edge"));
      } else {
        const channelExit = yield* raceResult.pipe(exit);
        if (channelExit._tag === "Failure") {
          yield* close(makeDirectChannelScope2, channelExit);
          if (isFailType(channelExit.cause) && is(DirectChannelResponseNoTransferables)(channelExit.cause.error)) {
            yield* waitForNewEdgeFiber.pipe(exit);
          }
        } else {
          const channel2 = channelExit.value;
          yield* succeed$9(resultDeferred, { channel: channel2, makeDirectChannelScope: makeDirectChannelScope2, channelVersion: channelVersion2 });
          break;
        }
      }
    }
    const { channel, makeDirectChannelScope, channelVersion } = yield* resultDeferred;
    yield* spanEvent(`Connected#${channelVersion}`);
    debugInfo.isConnected = true;
    debugInfo.innerChannelRef.current = channel;
    yield* succeed$9(initialEdgeDeferred, void 0);
    yield* channel.listen.pipe(
      flatten(),
      // Stream.tap((msg) => Effect.log(`${target}→${channelName}→${nodeName}:message:${msg.message}`)),
      tapChunk((chunk2) => offerAll(listenQueue, chunk2)),
      runDrain,
      tapCauseLogPretty,
      forkIn(makeDirectChannelScope)
    );
    yield* gen(function* () {
      while (true) {
        const [msg, deferred] = yield* peek(sendQueue);
        yield* channel.send(msg);
        yield* succeed$9(deferred, void 0);
        yield* take$2(sendQueue);
      }
    }).pipe(forkIn(makeDirectChannelScope));
    yield* channel.closedDeferred;
    yield* close(makeDirectChannelScope, succeed$8("channel-closed"));
    yield* spanEvent(`Disconnected#${channelVersion}`);
    debugInfo.isConnected = false;
    debugInfo.innerChannelRef.current = void 0;
  }).pipe(
    scoped$3,
    // Additionally scoping here to clean up finalizers after each loop run
    forever,
    tapCauseLogPretty,
    forkScoped
  );
  const parentSpan = yield* currentSpan.pipe(orDie);
  const send = (message) => gen(function* () {
    const sentDeferred = yield* make$H();
    debugInfo.pendingSends++;
    debugInfo.totalSends++;
    yield* offer(sendQueue, [message, sentDeferred]);
    yield* sentDeferred;
    debugInfo.pendingSends--;
  }).pipe(scoped$3, withParentSpan(parentSpan));
  const listen = fromQueue(listenQueue, { maxChunkSize: 1 }).pipe(map(right));
  const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
  const webChannel = {
    [WebChannelSymbol]: WebChannelSymbol,
    send,
    listen,
    closedDeferred,
    supportsTransferables: true,
    schema: schema2,
    debugInfo,
    shutdown: close(scope2, succeed$8("shutdown"))
  };
  return {
    webChannel,
    initialEdgeDeferred
  };
}));
const makeProxyChannel = ({ queue, nodeName, newEdgeAvailablePubSub, sendPacket, target, channelName, schema: schema2 }) => scopeWithCloseable((scope2) => gen(function* () {
  const channelStateRef = { current: { _tag: "Initial" } };
  const debugInfo = {
    kind: "proxy-channel",
    pendingSends: 0,
    totalSends: 0,
    connectCounter: 0,
    isConnected: false
  };
  const channelIdCandidate = nanoid(5);
  yield* annotateCurrentSpan({ channelIdCandidate });
  const channelSpan = yield* currentSpan.pipe(orDie);
  const connectedStateRef = yield* make$5(false);
  const waitForEstablished = gen(function* () {
    const state = yield* waitUntil(connectedStateRef, (state2) => state2 !== false);
    return state;
  });
  const setStateToEstablished = (channelId) => gen(function* () {
    yield* spanEvent(`Connected (${channelId})`).pipe(withParentSpan(channelSpan));
    channelStateRef.current = {
      _tag: "Established",
      listenSchema: schema2.listen,
      listenQueue,
      ackMap,
      combinedChannelId: channelId
    };
    yield* set$1(connectedStateRef, channelStateRef.current);
    debugInfo.isConnected = true;
  });
  const edgeRequest = suspend$5(() => sendPacket(ProxyChannelRequest.make({ channelName, hops: [], source: nodeName, target, channelIdCandidate })));
  const getCombinedChannelId = (otherSideChannelIdCandidate) => [channelIdCandidate, otherSideChannelIdCandidate].sort().join("_");
  const earlyPayloadBuffer = yield* unbounded$2().pipe(acquireRelease(shutdown));
  const processProxyPacket = ({ packet, respondToSender }) => gen(function* () {
    const otherSideName = packet.source;
    const channelKey = `target:${otherSideName}, channelName:${packet.channelName}`;
    const channelState = channelStateRef.current;
    switch (packet._tag) {
      case "ProxyChannelRequest": {
        const combinedChannelId = getCombinedChannelId(packet.channelIdCandidate);
        if (channelState._tag === "Established") {
          if (channelState.combinedChannelId === combinedChannelId) ;
          else {
            yield* logWarning(`[${nodeName}] Received ProxyChannelRequest with different channel ID (${combinedChannelId}) while established with ${channelState.combinedChannelId}. Re-establishing.`);
            yield* set$1(connectedStateRef, false);
            channelStateRef.current = { _tag: "Pending", initiatedVia: "incoming-request" };
            yield* spanEvent(`Reconnecting (received conflicting ProxyChannelRequest)`).pipe(withParentSpan(channelSpan));
            debugInfo.isConnected = false;
            debugInfo.connectCounter++;
            yield* edgeRequest;
          }
        } else if (channelState._tag === "Initial") {
          yield* set$1(connectedStateRef, false);
          channelStateRef.current = { _tag: "Pending", initiatedVia: "incoming-request" };
          yield* spanEvent(`Connecting (received ProxyChannelRequest)`).pipe(withParentSpan(channelSpan));
          debugInfo.isConnected = false;
          debugInfo.connectCounter++;
        }
        yield* respondToSender(ProxyChannelResponseSuccess.make({
          reqId: packet.id,
          remainingHops: packet.hops,
          hops: [],
          target,
          source: nodeName,
          channelName,
          combinedChannelId,
          channelIdCandidate
        }));
        return;
      }
      case "ProxyChannelResponseSuccess": {
        if (channelState._tag !== "Pending") {
          if (channelState._tag === "Established" && channelState.combinedChannelId !== packet.combinedChannelId) {
            return shouldNeverHappen(`ProxyChannel[${channelKey}]: Expected proxy channel to have the same combinedChannelId as the packet:
${channelState.combinedChannelId} (channel) === ${packet.combinedChannelId} (packet)`);
          } else if (channelState._tag === "Established") {
            return;
          } else {
            yield* logWarning(`[${nodeName}] Ignoring ResponseSuccess ${packet.id} received in unexpected state ${channelState._tag}`);
            return;
          }
        }
        const combinedChannelId = getCombinedChannelId(packet.channelIdCandidate);
        if (combinedChannelId !== packet.combinedChannelId) {
          return yield* die$3(`ProxyChannel[${channelKey}]: Expected proxy channel to have the same combinedChannelId as the packet:
${combinedChannelId} (channel) === ${packet.combinedChannelId} (packet)`);
        }
        yield* setStateToEstablished(packet.combinedChannelId);
        const establishedState = channelStateRef.current;
        if (establishedState._tag === "Established") {
          const bufferedPackets = yield* takeAll(earlyPayloadBuffer);
          for (const bufferedPacket of bufferedPackets) {
            if (establishedState.combinedChannelId !== bufferedPacket.combinedChannelId) {
              yield* logWarning(`[${nodeName}] Discarding buffered payload ${bufferedPacket.id}: Combined channel ID mismatch during drain. Expected ${establishedState.combinedChannelId}, got ${bufferedPacket.combinedChannelId}`);
              continue;
            }
            const decodedMessage = yield* decodeUnknown(establishedState.listenSchema)(bufferedPacket.payload);
            yield* establishedState.listenQueue.pipe(offer$2(decodedMessage));
          }
        } else {
          yield* logError(`[${nodeName}] State is not Established immediately after setStateToEstablished was called. Cannot drain buffer. State: ${establishedState._tag}`);
        }
        return;
      }
      case "ProxyChannelPayload": {
        if (channelState._tag === "Established" && channelState.combinedChannelId !== packet.combinedChannelId) {
          return yield* die$3(`ProxyChannel[${channelKey}]: Expected proxy channel to have the same combinedChannelId as the packet:
${channelState.combinedChannelId} (channel) === ${packet.combinedChannelId} (packet)`);
        }
        yield* respondToSender(ProxyChannelPayloadAck.make({
          reqId: packet.id,
          remainingHops: packet.hops,
          hops: [],
          target,
          source: nodeName,
          channelName,
          combinedChannelId: channelState._tag === "Established" ? channelState.combinedChannelId : packet.combinedChannelId
        }));
        if (channelState._tag === "Established") {
          const decodedMessage = yield* decodeUnknown(channelState.listenSchema)(packet.payload);
          yield* channelState.listenQueue.pipe(offer$2(decodedMessage));
        } else {
          yield* offer$2(earlyPayloadBuffer, packet);
        }
        return;
      }
      case "ProxyChannelPayloadAck": {
        if (channelState._tag !== "Established") {
          yield* spanEvent(`Not yet connected to ${target}. dropping message`);
          yield* logWarning(`[${nodeName}] Received Ack but not established (State: ${channelState._tag}). Dropping Ack for ${packet.reqId}`);
          return;
        }
        const ack = channelState.ackMap.get(packet.reqId) ?? shouldNeverHappen(`[ProxyChannel[${channelKey}]] Expected ack for ${packet.reqId}`);
        yield* succeed$9(ack, void 0);
        channelState.ackMap.delete(packet.reqId);
        return;
      }
      default: {
        return casesHandled(packet);
      }
    }
  }).pipe(withSpan$3(`handleProxyPacket:${packet._tag}:${packet.source}->${packet.target}`, {
    attributes: packetAsOtelAttributes(packet)
  }));
  yield* fromQueue(queue).pipe(tap(processProxyPacket), runDrain, tapCauseLogPretty, forkScoped);
  const listenQueue = yield* unbounded$2();
  yield* spanEvent(`Connecting`);
  const ackMap = /* @__PURE__ */ new Map();
  {
    if (channelStateRef.current._tag !== "Initial") {
      return shouldNeverHappen("Expected proxy channel to be Initial");
    }
    channelStateRef.current = { _tag: "Pending", initiatedVia: "outgoing-request" };
    yield* edgeRequest;
    const retryOnNewEdgeFiber = yield* fromPubSub(newEdgeAvailablePubSub).pipe(tap(() => edgeRequest), runDrain, forkScoped);
    const { combinedChannelId: channelId } = yield* waitForEstablished;
    yield* interrupt$2(retryOnNewEdgeFiber);
    yield* setStateToEstablished(channelId);
  }
  const send = (message) => gen(function* () {
    const payload = yield* encodeUnknown(schema2.send)(message);
    const sendFiberHandle = yield* make$f();
    const sentDeferred = yield* make$H();
    debugInfo.pendingSends++;
    debugInfo.totalSends++;
    const trySend = gen(function* () {
      const { combinedChannelId } = yield* waitUntil(connectedStateRef, (channel) => channel !== false);
      const innerSend = gen(function* () {
        const ack = yield* make$H();
        const packet = ProxyChannelPayload.make({
          channelName,
          payload,
          hops: [],
          source: nodeName,
          target,
          combinedChannelId
        });
        ackMap.set(packet.id, ack);
        yield* sendPacket(packet);
        yield* ack;
        yield* succeed$9(sentDeferred, void 0);
        debugInfo.pendingSends--;
      });
      yield* innerSend.pipe(timeout(100), retry$2(exponential(10)), orDie);
    }).pipe(tapErrorCause(logError));
    const rerunOnNewChannelFiber = yield* connectedStateRef.changes.pipe(filter((_) => _ === false), tap(() => run(sendFiberHandle, trySend)), runDrain, fork);
    yield* run(sendFiberHandle, trySend);
    yield* sentDeferred;
    yield* interrupt$2(rerunOnNewChannelFiber);
  }).pipe(scoped$3, withSpan$3(`sendAckWithRetry:ProxyChannelPayload`), withParentSpan(channelSpan));
  const listen = fromQueue(listenQueue).pipe(map(right));
  const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
  const runtime$12 = yield* runtime();
  const webChannel = {
    [WebChannelSymbol]: WebChannelSymbol,
    send,
    listen,
    closedDeferred,
    supportsTransferables: false,
    schema: schema2,
    shutdown: close(scope2, void_$3),
    debugInfo,
    ...{
      debug: {
        ping: (message = "ping") => send(DebugPingMessage.make({ message })).pipe(provide$1(runtime$12), tapCauseLogPretty, runFork$1)
      }
    }
  };
  return webChannel;
}).pipe(withSpanScoped("makeProxyChannel")));
const _TimeoutSet = class _TimeoutSet {
  constructor({ timeout: timeout2 }) {
    __publicField(this, "values", /* @__PURE__ */ new Map());
    __publicField(this, "timeoutHandle");
    __publicField(this, "timeoutMs");
    __publicField(this, "onShutdown", () => clearTimeout(this.timeoutHandle));
    this.timeoutMs = toMillis(timeout2);
  }
  add(value2) {
    this.values.set(value2, Date.now());
    this.scheduleCleanup();
  }
  has(value2) {
    return this.values.has(value2);
  }
  delete(value2) {
    this.values.delete(value2);
  }
  scheduleCleanup() {
    if (this.timeoutHandle === void 0) {
      this.timeoutHandle = setTimeout(() => {
        this.cleanup();
        this.timeoutHandle = void 0;
      }, this.timeoutMs);
    }
  }
  cleanup() {
    const now = Date.now();
    for (const [value2, timestamp] of this.values.entries()) {
      if (now - timestamp >= this.timeoutMs) {
        this.values.delete(value2);
      }
    }
  }
};
__publicField(_TimeoutSet, "make", (timeout2) => gen(function* () {
  const timeoutSet = new _TimeoutSet({ timeout: timeout2 });
  yield* addFinalizer(() => sync$3(() => timeoutSet.onShutdown()));
  return timeoutSet;
}));
let TimeoutSet = _TimeoutSet;
const makeMeshNode = (nodeName) => gen(function* () {
  const edgeChannels = /* @__PURE__ */ new Map();
  const handledPacketIds = yield* TimeoutSet.make(minutes(1));
  const newEdgeAvailablePubSub = yield* unbounded$3().pipe(acquireRelease(shutdown$1));
  const channelMap = /* @__PURE__ */ new Map();
  const channelRequestsQueue = yield* unbounded$2().pipe(acquireRelease(shutdown));
  const topologyRequestsMap = /* @__PURE__ */ new Map();
  const broadcastChannelListenQueueMap = /* @__PURE__ */ new Map();
  const checkTransferableEdges = (packet) => {
    var _a2;
    if (packet._tag === "DirectChannelRequest" && (edgeChannels.size === 0 || // Either if direct edge does not support transferables ...
    ((_a2 = edgeChannels.get(packet.target)) == null ? void 0 : _a2.channel.supportsTransferables) === false) || // ... or if no forward-edges support transferables
    ![...edgeChannels.values()].some((c) => c.channel.supportsTransferables === true)) {
      return DirectChannelResponseNoTransferables.make({
        reqId: packet.id,
        channelName: packet.channelName,
        // NOTE for now we're "pretending" that the message is coming from the target node
        // even though we're already handling it here.
        // TODO we should clean this up at some point
        source: packet.target,
        target: packet.source,
        remainingHops: packet.hops,
        hops: []
      });
    }
  };
  const sendPacket = (packet) => gen(function* () {
    var _a2, _b2;
    if (is(NetworkEdgeAdded)(packet)) {
      yield* spanEvent("NetworkEdgeAdded", { packet, nodeName });
      yield* publish(newEdgeAvailablePubSub, packet.target);
      const edgesToForwardTo = Array.from(edgeChannels).filter(([name]) => name !== packet.source).map(([_, con]) => con.channel);
      yield* forEach(edgesToForwardTo, (con) => con.send(packet), { concurrency: "unbounded" });
      return;
    }
    if (is(BroadcastChannelPacket)(packet)) {
      const edgesToForwardTo = Array.from(edgeChannels).filter(([name]) => !packet.hops.includes(name)).map(([_, con]) => con.channel);
      const adjustedPacket = {
        ...packet,
        hops: [...packet.hops, nodeName]
      };
      yield* forEach(edgesToForwardTo, (con) => con.send(adjustedPacket), { concurrency: "unbounded" });
      if (packet.source === nodeName) {
        return;
      }
      const queue = broadcastChannelListenQueueMap.get(packet.channelName);
      if (queue !== void 0) {
        yield* offer$2(queue, packet);
      }
      return;
    }
    if (is(NetworkTopologyRequest)(packet)) {
      if (packet.source !== nodeName) {
        const backEdgeName = packet.hops.at(-1) ?? shouldNeverHappen(`${nodeName}: Expected hops for packet`, packet);
        const backEdgeChannel = edgeChannels.get(backEdgeName).channel;
        const response = NetworkTopologyResponse.make({
          reqId: packet.id,
          source: packet.source,
          target: packet.target,
          remainingHops: packet.hops.slice(0, -1),
          nodeName,
          edges: Array.from(edgeChannels.keys())
        });
        yield* backEdgeChannel.send(response);
      }
      const edgesToForwardTo = Array.from(edgeChannels).filter(([name]) => !packet.hops.includes(name)).map(([_, con]) => con.channel);
      const adjustedPacket = {
        ...packet,
        hops: [...packet.hops, nodeName]
      };
      yield* forEach(edgesToForwardTo, (con) => con.send(adjustedPacket), { concurrency: "unbounded" });
      return;
    }
    if (is(NetworkTopologyResponse)(packet)) {
      if (packet.source === nodeName) {
        const topologyRequestItem = topologyRequestsMap.get(packet.reqId);
        topologyRequestItem.set(packet.nodeName, new Set(packet.edges));
      } else {
        const remainingHops = packet.remainingHops;
        const routeBack = remainingHops.at(-1) ?? shouldNeverHappen(`${nodeName}: Expected remaining hops for packet`, packet);
        const edgeChannel = ((_a2 = edgeChannels.get(routeBack)) == null ? void 0 : _a2.channel) ?? shouldNeverHappen(`${nodeName}: Expected edge channel (${routeBack}) for packet`, packet, "Available edges:", Array.from(edgeChannels.keys()));
        yield* edgeChannel.send({ ...packet, remainingHops: packet.remainingHops.slice(0, -1) });
      }
      return;
    }
    if (edgeChannels.has(packet.target)) {
      const edgeChannel = edgeChannels.get(packet.target).channel;
      const hops = packet.source === nodeName ? [] : [...packet.hops, nodeName];
      yield* annotateCurrentSpan({ hasDirectEdge: true });
      yield* edgeChannel.send({ ...packet, hops });
    } else if (packet.remainingHops !== void 0) {
      const hopTarget = packet.remainingHops.at(-1) ?? shouldNeverHappen(`${nodeName}: Expected remaining hops for packet`, packet);
      const edgeChannel = (_b2 = edgeChannels.get(hopTarget)) == null ? void 0 : _b2.channel;
      if (edgeChannel === void 0) {
        yield* logWarning(`${nodeName}: Expected to find hop target ${hopTarget} in edges. Dropping packet.`, packet);
        return;
      }
      yield* edgeChannel.send({
        ...packet,
        remainingHops: packet.remainingHops.slice(0, -1),
        hops: [...packet.hops, nodeName]
      });
    } else {
      const hops = packet.source === nodeName ? [] : [...packet.hops, nodeName];
      const edgesToForwardTo = Array.from(edgeChannels).filter(([name]) => name !== packet.source).map(([name, con]) => ({ name, channel: con.channel }));
      if (hops.length === 0 && edgesToForwardTo.length === 0 && LS_DEV) {
        yield* logWarning(nodeName, "no route found to", packet.target, packet._tag, "TODO handle better");
      }
      const packetToSend = { ...packet, hops };
      yield* annotateCurrentSpan({ edgesToForwardTo: edgesToForwardTo.map(({ name }) => name) });
      yield* forEach(edgesToForwardTo, ({ channel }) => channel.send(packetToSend), {
        concurrency: "unbounded"
      });
    }
  }).pipe(withSpan$3(`sendPacket:${packet._tag}:${packet.source}→${packet.target}`, {
    attributes: packetAsOtelAttributes(packet)
  }), orDie);
  const addEdge = ({ target: targetNodeName, edgeChannel, replaceIfExists = false }) => gen(function* () {
    if (edgeChannels.has(targetNodeName)) {
      if (replaceIfExists) {
        yield* removeEdge(targetNodeName).pipe(orDie);
      } else {
        return yield* new EdgeAlreadyExistsError({ target: targetNodeName });
      }
    }
    const listenFiber = yield* edgeChannel.listen.pipe(flatten(), tap((message) => gen(function* () {
      const packet = yield* decodeUnknown(Packet)(message);
      if (handledPacketIds.has(packet.id))
        return;
      handledPacketIds.add(packet.id);
      switch (packet._tag) {
        case "NetworkEdgeAdded":
        case "NetworkTopologyRequest":
        case "NetworkTopologyResponse": {
          yield* sendPacket(packet);
          break;
        }
        default: {
          if (packet.target === nodeName) {
            const channelKey = `target:${packet.source}, channelName:${packet.channelName}`;
            if (!channelMap.has(channelKey)) {
              const channelQueue2 = yield* unbounded$2().pipe(acquireRelease(shutdown));
              channelMap.set(channelKey, { queue: channelQueue2, debugInfo: void 0 });
            }
            const channelQueue = channelMap.get(channelKey).queue;
            const respondToSender = (outgoingPacket) => edgeChannel.send(outgoingPacket).pipe(withSpan$3(`respondToSender:${outgoingPacket._tag}:${outgoingPacket.source}→${outgoingPacket.target}`, { attributes: packetAsOtelAttributes(outgoingPacket) }), orDie);
            if (is(ProxyChannelPacket)(packet)) {
              yield* offer$2(channelQueue, { packet, respondToSender });
            } else if (is(DirectChannelPacket)(packet)) {
              yield* offer$2(channelQueue, { packet, respondToSender });
            }
            if (packet._tag === "ProxyChannelRequest" || packet._tag === "DirectChannelRequest") {
              yield* offer$2(channelRequestsQueue, {
                channelName: packet.channelName,
                source: packet.source,
                mode: packet._tag === "ProxyChannelRequest" ? "proxy" : "direct"
              });
            }
          } else {
            if (is(DirectChannelPacket)(packet)) {
              const noTransferableResponse = checkTransferableEdges(packet);
              if (noTransferableResponse !== void 0) {
                yield* spanEvent(`No transferable edges found for ${packet.source}→${packet.target}`);
                return yield* edgeChannel.send(noTransferableResponse).pipe(withSpan$3(`sendNoTransferableResponse:${packet.source}→${packet.target}`, {
                  attributes: packetAsOtelAttributes(noTransferableResponse)
                }));
              }
            }
            yield* sendPacket(packet);
          }
        }
      }
    })), runDrain, interruptible, orDie, tapCauseLogPretty, forkScoped);
    edgeChannels.set(targetNodeName, { channel: edgeChannel, listenFiber });
    const edgeAddedPacket = NetworkEdgeAdded.make({
      source: nodeName,
      target: targetNodeName
    });
    yield* sendPacket(edgeAddedPacket).pipe(orDie);
  }).pipe(annotateLogs({ "addEdge:target": targetNodeName, nodeName }), withSpan$3(`addEdge:${nodeName}→${targetNodeName}`, {
    attributes: { supportsTransferables: edgeChannel.supportsTransferables }
  }));
  const removeEdge = (targetNodeName) => gen(function* () {
    if (!edgeChannels.has(targetNodeName)) {
      yield* new NoSuchElementException(`No edge found for ${targetNodeName}`);
    }
    yield* interrupt$2(edgeChannels.get(targetNodeName).listenFiber);
    edgeChannels.delete(targetNodeName);
  });
  const hasChannel = ({ target, channelName }) => sync$3(() => channelMap.has(`target:${target}, channelName:${channelName}`));
  const makeChannel = ({
    target,
    channelName,
    schema: inputSchema,
    // TODO in the future we could have a mode that prefers directs and then falls back to proxies if needed
    mode,
    timeout: timeout2 = seconds(1),
    closeExisting = false
  }) => gen(function* () {
    var _a2;
    const schema2 = mapSchema(inputSchema);
    const channelKey = `target:${target}, channelName:${channelName}`;
    if (channelMap.has(channelKey)) {
      const existingChannel = (_a2 = channelMap.get(channelKey).debugInfo) == null ? void 0 : _a2.channel;
      if (existingChannel) {
        if (closeExisting) {
          yield* existingChannel.shutdown;
          channelMap.delete(channelKey);
        } else {
          shouldNeverHappen(`Channel ${channelKey} already exists`, existingChannel);
        }
      }
    }
    if (channelMap.has(channelKey) === false) {
      const channelQueue2 = yield* unbounded$2().pipe(acquireRelease(shutdown));
      channelMap.set(channelKey, { queue: channelQueue2, debugInfo: void 0 });
    }
    const channelQueue = channelMap.get(channelKey).queue;
    yield* addFinalizer(() => sync$3(() => channelMap.delete(channelKey)));
    if (mode === "direct") {
      const incomingPacketsQueue = yield* unbounded$2().pipe(acquireRelease(shutdown));
      yield* takeBetween(channelQueue, 1, 10).pipe(tap$2((_) => offerAll(incomingPacketsQueue, _)), forever, interruptible, tapCauseLogPretty, forkScoped);
      const { webChannel, initialEdgeDeferred } = yield* makeDirectChannel({
        nodeName,
        incomingPacketsQueue,
        newEdgeAvailablePubSub,
        target,
        channelName,
        schema: schema2,
        sendPacket,
        checkTransferableEdges
      });
      channelMap.set(channelKey, { queue: channelQueue, debugInfo: { channel: webChannel, target } });
      yield* initialEdgeDeferred;
      return webChannel;
    } else {
      const channel = yield* makeProxyChannel({
        nodeName,
        newEdgeAvailablePubSub,
        target,
        channelName,
        schema: schema2,
        queue: channelQueue,
        sendPacket
      });
      channelMap.set(channelKey, { queue: channelQueue, debugInfo: { channel, target } });
      return channel;
    }
  }).pipe(
    // Effect.timeout(timeout),
    withSpanScoped(`makeChannel:${nodeName}→${target}(${channelName})`, {
      attributes: { target, channelName, mode, timeout: timeout2 }
    }),
    annotateLogs({ nodeName, target, channelName })
  );
  let listenAlreadyStarted = false;
  const listenForChannel = suspend(() => {
    if (listenAlreadyStarted) {
      return shouldNeverHappen("listenForChannel already started");
    }
    listenAlreadyStarted = true;
    const hash2 = (res) => `${res.channelName}:${res.source}:${res.mode}`;
    const seen = /* @__PURE__ */ new Set();
    return fromQueue(channelRequestsQueue).pipe(filter((res) => {
      const hashed = hash2(res);
      if (seen.has(hashed)) {
        return false;
      }
      seen.add(hashed);
      return true;
    }));
  });
  const makeBroadcastChannel = ({ channelName, schema: schema2 }) => scopeWithCloseable((scope2) => gen(function* () {
    if (broadcastChannelListenQueueMap.has(channelName)) {
      return shouldNeverHappen(`Broadcast channel ${channelName} already exists`, broadcastChannelListenQueueMap.get(channelName));
    }
    const debugInfo = {};
    const queue = yield* unbounded$2().pipe(acquireRelease(shutdown));
    broadcastChannelListenQueueMap.set(channelName, queue);
    const send = (message) => gen(function* () {
      const payload = yield* encode(schema2)(message);
      const packet = BroadcastChannelPacket.make({
        channelName,
        payload,
        source: nodeName,
        target: "-",
        hops: []
      });
      yield* sendPacket(packet);
    });
    const listen = fromQueue(queue).pipe(filter(is(BroadcastChannelPacket)), map((_) => decodeEither(schema2)(_.payload)));
    const closedDeferred = yield* make$H().pipe(acquireRelease(done$7(void_$3)));
    return {
      [WebChannelSymbol]: WebChannelSymbol,
      send,
      listen,
      closedDeferred,
      supportsTransferables: false,
      schema: { listen: schema2, send: schema2 },
      shutdown: close(scope2, void_$3),
      debugInfo
    };
  }));
  const edgeKeys = sync$3(() => new Set(edgeChannels.keys()));
  const runtime$12 = yield* runtime();
  const debug = {
    print: () => {
      var _a2, _b2, _c2, _d2;
      console.log("Webmesh debug info for node:", nodeName);
      console.log("Edges:", edgeChannels.size);
      for (const [key, value2] of edgeChannels) {
        console.log(`  ${key}: supportsTransferables=${value2.channel.supportsTransferables}`);
      }
      console.log("Channels:", channelMap.size);
      for (const [key, value2] of channelMap) {
        console.log(indent(key, 2), "\n", Object.entries({
          target: (_a2 = value2.debugInfo) == null ? void 0 : _a2.target,
          supportsTransferables: (_b2 = value2.debugInfo) == null ? void 0 : _b2.channel.supportsTransferables,
          ...(_c2 = value2.debugInfo) == null ? void 0 : _c2.channel.debugInfo
        }).map(([key2, value3]) => indent(`${key2}=${value3}`, 4)).join("\n"), "    ", (_d2 = value2.debugInfo) == null ? void 0 : _d2.channel, "\n", indent(`Queue: ${value2.queue.unsafeSize().pipe(getOrUndefined)}`, 4), value2.queue);
      }
      console.log("Broadcast channels:", broadcastChannelListenQueueMap.size);
      for (const [key, _value2] of broadcastChannelListenQueueMap) {
        console.log(indent(key, 2));
      }
    },
    ping: (payload) => {
      gen(function* () {
        const msg = (via) => DebugPingMessage.make({ message: `ping from ${nodeName} via ${via}`, payload });
        for (const [channelName, con] of edgeChannels) {
          yield* logDebug(`sending ping via edge ${channelName}`);
          yield* con.channel.send(msg(`edge ${channelName}`));
        }
        for (const [channelKey, channel] of channelMap) {
          if (channel.debugInfo === void 0) {
            yield* logDebug(`channel ${channelKey} has no debug info`);
            continue;
          }
          yield* logDebug(`sending ping via channel ${channelKey}`);
          yield* channel.debugInfo.channel.send(msg(`channel ${channelKey}`));
        }
      }).pipe(provide$1(runtime$12), tapCauseLogPretty, runFork$1);
    },
    requestTopology: (timeoutMs = 1e3) => gen(function* () {
      const packet = NetworkTopologyRequest.make({
        source: nodeName,
        target: "-",
        hops: []
      });
      const item = /* @__PURE__ */ new Map();
      item.set(nodeName, new Set(edgeChannels.keys()));
      topologyRequestsMap.set(packet.id, item);
      yield* sendPacket(packet);
      yield* logDebug(`Waiting ${timeoutMs}ms for topology response`);
      yield* sleep(timeoutMs);
      yield* logDebug(`Topology response (from ${nodeName}):`);
      for (const [key, value2] of item) {
        yield* logDebug(`  node '${key}' has edge to: ${Array.from(value2.values()).join(", ")}`);
      }
    }).pipe(provide$1(runtime$12), tapCauseLogPretty, runPromise)
  };
  return {
    nodeName,
    addEdge,
    removeEdge,
    hasChannel,
    makeChannel,
    listenForChannel,
    makeBroadcastChannel,
    edgeKeys,
    debug
  };
}).pipe(withSpan$3(`makeMeshNode:${nodeName}`), annotateLogs({ "makeMeshNode.nodeName": nodeName }));
let CreateConnection$1 = class CreateConnection extends TaggedRequest()("DevtoolsWebCommon.CreateConnection", {
  payload: {
    from: String$,
    port: MessagePort
  },
  success: Struct({}),
  failure: Never
}) {
};
class Request extends Union(CreateConnection$1) {
}
broadcastChannel({
  channelName: "session-info",
  schema: Message
});
const makeNodeName = {
  sharedWorker: ({ storeId }) => `shared-worker-${storeId}`,
  // TODO refactor shared-worker setup so there's only a single shared-worker per origin
  // sharedWorker: () => `shared-worker`,
  browserExtension: {
    contentscriptMain: (tabId) => `contentscript-main-${tabId}`,
    contentscriptIframe: (tabId) => `contentscript-iframe-${tabId}`
  }
};
const ClientSessionContentscriptMainReq = TaggedStruct("ClientSessionContentscriptMainReq", {
  storeId: String$,
  clientId: String$,
  sessionId: String$
});
const ClientSessionContentscriptMainRes = TaggedStruct("ClientSessionContentscriptMainRes", {
  tabId: Number$
});
({
  contentscriptMain: suspend$5(() => windowChannel({
    // eslint-disable-next-line unicorn/prefer-global-this
    listenWindow: window,
    // eslint-disable-next-line unicorn/prefer-global-this
    sendWindow: window,
    schema: { listen: ClientSessionContentscriptMainReq, send: ClientSessionContentscriptMainRes },
    ids: { own: "contentscript-main-static", other: "client-session-static" }
  })),
  clientSession: suspend$5(() => windowChannel({
    // eslint-disable-next-line unicorn/prefer-global-this
    listenWindow: window,
    // eslint-disable-next-line unicorn/prefer-global-this
    sendWindow: window,
    schema: { listen: ClientSessionContentscriptMainRes, send: ClientSessionContentscriptMainReq },
    ids: { own: "client-session-static", other: "contentscript-main-static" }
  }))
});
const connectViaWorker = ({ node, target, worker }) => gen(function* () {
  const mc = new MessageChannel();
  const isConnected = yield* make$H();
  if (LS_DEV) {
    yield* addFinalizerLog(`@livestore/devtools-web-common: closing message channel ${node.nodeName} → ${target}`);
  }
  yield* worker.execute(CreateConnection$1.make({ from: node.nodeName, port: mc.port1 })).pipe(tap(() => succeed$9(isConnected, true)), runDrain, tapCauseLogPretty, forkScoped);
  yield* isConnected;
  const sharedWorkerConnection = yield* messagePortChannel({
    port: mc.port2,
    schema: Packet
  });
  yield* node.addEdge({ target, edgeChannel: sharedWorkerConnection, replaceIfExists: true });
  if (LS_DEV) {
    yield* logDebug(`@livestore/devtools-web-common: initiated connection: ${node.nodeName} → ${target}`);
  }
}).pipe(UnexpectedError.mapToUnexpectedError);
const _CacheService = class _CacheService extends Tag("@livestore/devtools-web-common:CacheService")() {
};
__publicField(_CacheService, "layer", ({ nodeName }) => gen(function* () {
  const node = yield* makeMeshNode(nodeName);
  globalThis.__debugWebmeshNode = node;
  return { node };
}).pipe(scoped$2(_CacheService)));
let CacheService = _CacheService;
const CreateConnection2 = ({ from, port }) => asyncScoped((emit) => gen(function* () {
  const { node } = yield* CacheService;
  const messagePortChannel$1 = yield* messagePortChannel({ port, schema: Packet });
  yield* node.addEdge({ target: from, edgeChannel: messagePortChannel$1, replaceIfExists: true });
  if (LS_DEV) {
    yield* logDebug(`@livestore/devtools-web-common: accepted edge: ${node.nodeName} ← ${from}`);
  }
  emit.single({});
  yield* spanEvent({ connectedTo: [...node.edgeKeys] });
}).pipe(orDie)).pipe(withSpan(`@livestore/devtools-web-common:worker:create-connection:${from}`));
class All extends Union(IntentionalShutdownCause, UnexpectedError) {
}
const makeShutdownChannel = (storeId) => broadcastChannel({
  channelName: `livestore.shutdown.${storeId}`,
  schema: All
});
const StorageTypeOpfs = Struct({
  type: Literal2("opfs"),
  /**
   * Default is `livestore-${storeId}`
   *
   * When providing this option, make sure to include the `storeId` in the path to avoid
   * conflicts with other LiveStore apps.
   */
  directory: optional(String$)
});
const StorageType = Union(StorageTypeOpfs);
Record({ key: String$, value: JsonValue });
var LeaderWorkerOuter;
(function(LeaderWorkerOuter2) {
  class InitialMessage extends TaggedRequest()("InitialMessage", {
    payload: { port: MessagePort, storeId: String$, clientId: String$ },
    success: Void,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerOuter2.InitialMessage = InitialMessage;
  class Request2 extends Union(InitialMessage) {
  }
  LeaderWorkerOuter2.Request = Request2;
})(LeaderWorkerOuter || (LeaderWorkerOuter = {}));
var LeaderWorkerInner;
(function(LeaderWorkerInner2) {
  class InitialMessage extends TaggedRequest()("InitialMessage", {
    payload: {
      storageOptions: StorageType,
      devtoolsEnabled: Boolean$,
      storeId: String$,
      clientId: String$,
      debugInstanceId: String$,
      syncPayload: UndefinedOr(JsonValue)
    },
    success: Void,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.InitialMessage = InitialMessage;
  class BootStatusStream extends TaggedRequest()("BootStatusStream", {
    payload: {},
    success: BootStatus,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.BootStatusStream = BootStatusStream;
  class PushToLeader extends TaggedRequest()("PushToLeader", {
    payload: {
      batch: Array$(AnyEncoded)
    },
    success: Void,
    failure: Union(UnexpectedError, LeaderAheadError)
  }) {
  }
  LeaderWorkerInner2.PushToLeader = PushToLeader;
  class PullStream extends TaggedRequest()("PullStream", {
    payload: {
      cursor: LeaderPullCursor
    },
    success: Struct({
      payload: PayloadUpstream,
      mergeCounter: Number$
    }),
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.PullStream = PullStream;
  class Export extends TaggedRequest()("Export", {
    payload: {},
    success: Uint8Array$1,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.Export = Export;
  class ExportEventlog extends TaggedRequest()("ExportEventlog", {
    payload: {},
    success: Uint8Array$1,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.ExportEventlog = ExportEventlog;
  class GetRecreateSnapshot extends TaggedRequest()("GetRecreateSnapshot", {
    payload: {},
    success: Struct({
      snapshot: Uint8Array$1,
      migrationsReport: MigrationsReport
    }),
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.GetRecreateSnapshot = GetRecreateSnapshot;
  class GetLeaderHead extends TaggedRequest()("GetLeaderHead", {
    payload: {},
    success: EventSequenceNumber,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.GetLeaderHead = GetLeaderHead;
  class GetLeaderSyncState extends TaggedRequest()("GetLeaderSyncState", {
    payload: {},
    success: SyncState,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.GetLeaderSyncState = GetLeaderSyncState;
  class Shutdown extends TaggedRequest()("Shutdown", {
    payload: {},
    success: Void,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.Shutdown = Shutdown;
  class ExtraDevtoolsMessage extends TaggedRequest()("ExtraDevtoolsMessage", {
    payload: {
      message: MessageToApp
    },
    success: Void,
    failure: UnexpectedError
  }) {
  }
  LeaderWorkerInner2.ExtraDevtoolsMessage = ExtraDevtoolsMessage;
  LeaderWorkerInner2.Request = Union(InitialMessage, BootStatusStream, PushToLeader, PullStream, Export, ExportEventlog, GetRecreateSnapshot, GetLeaderHead, GetLeaderSyncState, Shutdown, ExtraDevtoolsMessage, CreateConnection$1);
})(LeaderWorkerInner || (LeaderWorkerInner = {}));
var SharedWorker;
(function(SharedWorker2) {
  class InitialMessagePayloadFromClientSession extends TaggedStruct("FromClientSession", {
    initialMessage: LeaderWorkerInner.InitialMessage
  }) {
  }
  SharedWorker2.InitialMessagePayloadFromClientSession = InitialMessagePayloadFromClientSession;
  class InitialMessage extends TaggedRequest()("InitialMessage", {
    payload: {
      payload: Union(InitialMessagePayloadFromClientSession, TaggedStruct("FromWebBridge", {})),
      // To guard against scenarios where a client session is already running a newer version of LiveStore
      // We should probably find a better way to handle those cases once they become more common.
      liveStoreVersion: Literal2(liveStoreVersion$1)
    },
    success: Void,
    failure: UnexpectedError
  }) {
  }
  SharedWorker2.InitialMessage = InitialMessage;
  class UpdateMessagePort extends TaggedRequest()("UpdateMessagePort", {
    payload: {
      port: MessagePort
    },
    success: Void,
    failure: UnexpectedError
  }) {
  }
  SharedWorker2.UpdateMessagePort = UpdateMessagePort;
  class Request2 extends Union(
    InitialMessage,
    UpdateMessagePort,
    // Proxied requests
    LeaderWorkerInner.BootStatusStream,
    LeaderWorkerInner.PushToLeader,
    LeaderWorkerInner.PullStream,
    LeaderWorkerInner.Export,
    LeaderWorkerInner.GetRecreateSnapshot,
    LeaderWorkerInner.ExportEventlog,
    LeaderWorkerInner.GetLeaderHead,
    LeaderWorkerInner.GetLeaderSyncState,
    LeaderWorkerInner.Shutdown,
    LeaderWorkerInner.ExtraDevtoolsMessage,
    CreateConnection$1
  ) {
  }
  SharedWorker2.Request = Request2;
})(SharedWorker || (SharedWorker = {}));
if (isDevEnv()) {
  globalThis.__debugLiveStoreUtils = {
    blobUrl: (buffer) => URL.createObjectURL(new Blob([buffer], { type: "application/octet-stream" })),
    runSync: (effect2) => runSync(effect2),
    runFork: (effect2) => runFork$1(effect2)
  };
}
const makeWorkerRunner = gen(function* () {
  const leaderWorkerContextSubRef = yield* make$5(void 0);
  const initialMessagePayloadDeferredRef = yield* make$H().pipe(andThen(make$A));
  const waitForWorker = waitUntil(leaderWorkerContextSubRef, isNotUndefined).pipe(map$5((_) => _.worker));
  const forwardRequest = (req) => waitForWorker.pipe(
    // Effect.logBefore(`forwardRequest: ${req._tag}`),
    andThen((worker) => worker.executeEffect(req)),
    // Effect.tap((_) => Effect.log(`forwardRequest: ${req._tag}`, _)),
    // Effect.tapError((cause) => Effect.logError(`forwardRequest err: ${req._tag}`, cause)),
    interruptible,
    logWarnIfTakesLongerThan({
      label: `@livestore/adapter-web:shared-worker:forwardRequest:${req._tag}`,
      duration: 500
    }),
    mapError$4((cause) => is(UnexpectedError)(cause) ? cause : isParseError(cause) || is(WorkerError)(cause) ? new UnexpectedError({ cause }) : cause),
    catchAllDefect((cause) => new UnexpectedError({ cause })),
    tapCauseLogPretty
  );
  const forwardRequestStream = (req) => gen(function* () {
    yield* logDebug(`forwardRequestStream: ${req._tag}`);
    const { worker, scope: scope2 } = yield* waitUntil(leaderWorkerContextSubRef, isNotUndefined);
    const stream = worker.execute(req);
    const shutdownDeferred = yield* make$H();
    yield* addFinalizer$1(scope2, succeed$9(shutdownDeferred, void 0));
    const scopeShutdownStream = gen(function* () {
      yield* shutdownDeferred;
      return empty$4;
    }).pipe(unwrap);
    return merge$1(stream, scopeShutdownStream, { haltStrategy: "either" });
  }).pipe(interruptible, UnexpectedError.mapToUnexpectedError, tapCauseLogPretty, unwrap, ensuring(logDebug(`shutting down stream for ${req._tag}`)), UnexpectedError.mapToUnexpectedErrorStream);
  const resetCurrentWorkerCtx = gen(function* () {
    const prevWorker = yield* get$2(leaderWorkerContextSubRef);
    if (prevWorker !== void 0) {
      yield* set$1(leaderWorkerContextSubRef, void 0);
      yield* yieldNow();
      yield* close(prevWorker.scope, void_$3).pipe(logWarnIfTakesLongerThan({
        label: "@livestore/adapter-web:shared-worker:close-previous-worker",
        duration: 500
      }));
    }
  }).pipe(withSpan$3("@livestore/adapter-web:shared-worker:resetCurrentWorkerCtx"));
  const reset = gen(function* () {
    yield* logDebug("reset");
    const initialMessagePayloadDeferred = yield* make$H();
    yield* set$3(initialMessagePayloadDeferredRef, initialMessagePayloadDeferred);
    yield* resetCurrentWorkerCtx;
  });
  return layerSerialized(SharedWorker.Request, {
    InitialMessage: (message) => gen(function* () {
      if (message.payload._tag === "FromWebBridge")
        return;
      const initialMessagePayloadDeferred = yield* get$5(initialMessagePayloadDeferredRef);
      const deferredAlreadyDone = yield* isDone$5(initialMessagePayloadDeferred);
      const initialMessage = message.payload.initialMessage;
      if (deferredAlreadyDone) {
        const previousInitialMessage = yield* _await$2(initialMessagePayloadDeferred);
        const messageSchema = LeaderWorkerInner.InitialMessage.pipe(omit("devtoolsEnabled", "debugInstanceId"));
        const isEqual2 = equivalence(messageSchema);
        if (isEqual2(initialMessage, previousInitialMessage.initialMessage) === false) {
          const diff2 = debugDiff(messageSchema)(previousInitialMessage.initialMessage, initialMessage);
          yield* new UnexpectedError({
            cause: "Initial message already sent and was different now",
            payload: {
              diff: diff2,
              previousInitialMessage: previousInitialMessage.initialMessage,
              newInitialMessage: initialMessage
            }
          });
        }
      } else {
        yield* succeed$9(initialMessagePayloadDeferred, message.payload);
      }
    }),
    // Whenever the client session leader changes (and thus creates a new leader thread), the new client session leader
    // sends a new MessagePort to the shared worker which proxies messages to the new leader thread.
    UpdateMessagePort: ({ port }) => gen(function* () {
      const initialMessagePayload = yield* initialMessagePayloadDeferredRef.get.pipe(andThen(_await$2));
      yield* resetCurrentWorkerCtx;
      const scope2 = yield* make$p();
      yield* gen(function* () {
        const shutdownChannel = yield* makeShutdownChannel(initialMessagePayload.initialMessage.storeId);
        yield* shutdownChannel.listen.pipe(flatten(), tap(() => reset), runDrain, tapCauseLogPretty, forkScoped);
        const workerLayer = yield* build(layer$2(() => port));
        const worker = yield* makePoolSerialized({
          size: 1,
          concurrency: 100,
          initialMessage: () => initialMessagePayload.initialMessage
        }).pipe(provide$1(workerLayer), withSpan$3("@livestore/adapter-web:shared-worker:makeWorkerProxyFromPort"));
        const { node } = yield* CacheService;
        const { storeId, clientId: clientId2 } = initialMessagePayload.initialMessage;
        yield* connectViaWorker({
          node,
          worker,
          target: makeNodeName$1.client.leader({ storeId, clientId: clientId2 })
        }).pipe(tapCauseLogPretty, forkScoped);
        yield* set$1(leaderWorkerContextSubRef, { worker, scope: scope2 });
      }).pipe(tapCauseLogPretty, extend$1(scope2), forkIn(scope2));
    }).pipe(withSpan$3("@livestore/adapter-web:shared-worker:updateMessagePort"), UnexpectedError.mapToUnexpectedError, tapCauseLogPretty),
    // Proxied requests
    BootStatusStream: forwardRequestStream,
    PushToLeader: forwardRequest,
    PullStream: forwardRequestStream,
    Export: forwardRequest,
    GetRecreateSnapshot: forwardRequest,
    ExportEventlog: forwardRequest,
    Setup: forwardRequest,
    GetLeaderSyncState: forwardRequest,
    GetLeaderHead: forwardRequest,
    Shutdown: forwardRequest,
    ExtraDevtoolsMessage: forwardRequest,
    // Accept devtools connections (from leader and client sessions)
    "DevtoolsWebCommon.CreateConnection": CreateConnection2
  });
}).pipe(unwrapScoped$3);
const makeWorker = () => {
  const storeId = self.name.replace("livestore-shared-worker-", "");
  makeWorkerRunner.pipe(
    provide(layer),
    // WorkerRunner.launch,
    launch,
    scoped$3,
    tapCauseLogPretty,
    annotateLogs({ thread: self.name }),
    provide$1(prettyWithThread(self.name)),
    provide$1(layer$4),
    provide$1(CacheService.layer({ nodeName: makeNodeName.sharedWorker({ storeId }) })),
    LS_DEV ? withAsyncTaggingTracing((name) => console.createTask(name)) : identity,
    // TODO remove type-cast (currently needed to silence a tsc bug)
    (_) => _,
    withMinimumLogLevel(Debug),
    runFork$1
  );
};
makeWorker();
