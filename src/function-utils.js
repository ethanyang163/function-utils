/**
 *
 *
 * function-utils.js
 * javascript function helpers
 * https://github.com/psyduck4you/function-utils
 *
 * Copyright 2019 Yuxiang Yang <gordon2yang@icloud.com>
 * Released under MIT License
 *
 *
 */

(function () {
    'use strict';

    var FnUtils = {
        /**
         *
         * 函数防抖: 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
         * @param {Function} func function
         * @param {Number} dalay delay in ms
         *
         */
        debounce: function (func, delay) {
            var inDebounce;
            return function () {
                var context = this;
                var args = arguments;
                clearTimeout(inDebounce);
                inDebounce = setTimeout(function () {
                    func.apply(context, args);
                }, delay);
            };
        },

        /**
         *
         * 函数节流: 指定时间间隔内只会执行一次任务。
         * @param {Function} func function
         * @param {Number} limit limit in ms
         *
         */
        throttle: function (func, limit) {
            var inThrottle = false;
            return function () {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(function () {
                        inThrottle = false;
                    }, limit);
                }
            };
        },

        /**
         *
         * 检查对象里是否有指定的嵌套属性 例如：object.x.y.z是否存在
         * @param {Object} obj object
         * @param {String} path "x.y.z"
         *
         */
        hasProperty: function (obj, path) {
            var props = path.split('.');
            for (var i = 0; i < props.length; i++) {
                if (!obj || !obj.hasOwnProperty(props[i])) {
                    return false;
                }
                obj = obj[props[i]];
            }
            return true;
        },
    };

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return FnUtils;
        });
        // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = FnUtils;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.FnUtils = FnUtils;
    } else {
        window.FnUtils = FnUtils;
    }

    window.FnUtils = FnUtils;
})(window, document);
