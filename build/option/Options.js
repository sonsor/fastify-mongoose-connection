"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Options {
  /**
   *
   */
  constructor() {
    this._options = new Map();
  }
  /**
   *
   * @param key
   * @return {*}
   */


  get [expr]() {
    if (!this._options.has(expr)) {
      throw new Error('the options ' + key + ' not supported');
    }

    return this._options.get(expr);
  }

  set [expr](value) {
    if (!this._options.has(expr)) {
      throw new Error('the options ' + key + ' not supported');
    }

    this._options.set(expr, value);
  }

}

var _default = Options;
exports.default = _default;