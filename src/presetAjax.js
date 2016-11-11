/**
 * 创建一个预置参数和事件预处理的ajax方法
 *   用于 jQuery.ajax 封装
 * @param  {Object} $ jQuery核心函数
 * @param  {Object} preOptions 预置的参数选项
 * @param  {Object} preHandleEvents 预设的事件处理函数hash集
 * @param  {Function} presetOptions 预设的参数处理函数，参数会被传入
 * @return {Object} 返回jquery的类Promise对象
 */
export default function presetAjax($, preOptions, preHandleEvents, presetOptions) {

  preOptions = $.extend(true, {}, preOptions);
  preHandleEvents = $.extend({}, preHandleEvents);

  return function ajax(options) {

    var newOptions = $.extend({}, preOptions, options),
      $ajax,
      $ajaxThen,
      results = {};

    presetOptions && presetOptions(newOptions);

    ['success', 'beforeSend', 'error', 'complete'].forEach(function(name) {
      newOptions[name] = this(name, preHandleEvents[name], options[name]);
    }, function(name, preHandleEvent, handleEvent) {
      return function() {
        if (preHandleEvent) {
          results[name] = preHandleEvent.apply(this, arguments);
        }
        if (handleEvent && results[name] !== false) {
          return handleEvent.apply(this, arguments);
        }
      }
    });

    $ajax = $.ajax(newOptions);

    // 这里是为解决某些虽然请求success，但可能业务失败的预处理场景
    $ajaxThen = $ajax.then(function(res) {
      // 只覆盖属性
      extendBind($ajaxThen, $ajax, true);
      // jquery对原生Promise对象不可直接使用返回
      // return results.success !== false ? res : Promise.reject(res);
      // 调整为jquery模拟接口的Deferred对象
      return results.success !== false ? res : $.Deferred().reject(res);
    });

    return extendBind($ajaxThen, $ajax, false);

    // 让return出的对象保持abort可用
    // 将原 jQuery ajax 对象的绑定方法和属性，附加到then出的目标对象上
    // 被附加的绑定方法执行时，scope依然为原对象
    function extendBind(target, source, nofn) {
      $.each(source, function(k, v) {
        if (nofn || !(k in target)) {
          if (typeof v !== 'function') {
            target[k] = v;
          } else if (!nofn) {
            target[k] = function(v) {
              return function() {
                v.apply(source, arguments);
              }
            }(v);
          }
        }
      });
      return target;
    }
  }
}