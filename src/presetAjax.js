/**
 * 创建一个预置参数和事件预处理的ajax方法
 *   用于 jQuery.ajax 封装
 * @param  {Object} $ jQuery核心函数
 * @param  {Object} preOptions 预置的参数选项
 * @param  {Object} preHandleEvents 预设的事件处理函数hash集
 * @param  {Function} presetOptions 预设的参数处理函数，参数会被传入
 * @return {Object} 返回jquery的类Promise对象
 */
export default function presetAjax ($, preOptions, preHandleEvents, presetOptions) {

  preOptions = $.extend(true, {}, preOptions)
  preHandleEvents = $.extend({}, preHandleEvents)

  return function ajax (options) {

    var newOptions = $.extend({}, preOptions, options),
        $ajax,
        $ajaxThen,
        results = {}
        cloneOptions = $.extend(true, {}, options)

    presetOptions && presetOptions(newOptions);

    ['success', 'beforeSend', 'error', 'complete'].forEach(function (name) {
      newOptions[name] = this(name, preHandleEvents[name], options[name])
    }, function (name, preHandleEvent, handleEvent) {
      return function () {
        var result
        if (preHandleEvent) {
          result = results[name] = preHandleEvent.apply(this, Array.prototype.slice.call(arguments).concat(cloneOptions))
        }
        if (handleEvent && result !== false && !(result && typeof result.then === 'function')) {
          return handleEvent.apply(this, arguments)
        }
      }
    })

    $ajax = $.ajax(newOptions)

    // 同步请求直接返回原jquery ajax对象
    if ('async' in newOptions && !newOptions.async) {
      return $ajax
    }

    // 异步请求
    // 这里是为解决某些虽然请求success，但可能业务失败的预处理场景
    $ajaxThen = $ajax.then(function (res) {
      var result = results.success
      // 后只覆盖属性（此时$ajax属性已变更）
      extendBind($ajaxThen, $ajax, true)
      // jquery2 对原生 Promise 返回对象不可直接使用
      // return result !== false ? res : Promise.reject(res)
      // return result !== false ? res : $.Deferred().reject(res)
      // 若 success 执行结果为类 Promise 对象，优先返回
      return result === false ? $.Deferred().reject(res) : result && typeof result.then === 'function' ? result : res
    })

    // 先只覆盖方法（绑定scope为$ajax）
    return extendBind($ajaxThen, $ajax, false)

    // 让return出的对象保持某些原方法可用（如：abort）
    // 将原 jQuery ajax 对象的绑定方法和属性，附加到then出的目标对象上
    // 被附加的绑定方法执行时，scope依然为原对象
    function extendBind (target, source, nofn) {
      $.each(source, function (k, v) {
        if (nofn || !(k in target)) {
          if (typeof v !== 'function') {
            target[k] = v
          } else if (!nofn) {
            target[k] = function (v) {
              return function () {
                v.apply(source, arguments)
              }
            }(v)
          }
        }
      })
      return target
    }
  }
}