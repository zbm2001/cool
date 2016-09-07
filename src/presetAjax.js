import $ from '../lib/jquery/jquery';

/**
     * 封装 jQuery.ajax 创建一个方法，统一预置参数和事件预处理
     * @param  {object} preOptions 预置的参数选项
     * @param  {object} preHandleEvents 预设的事件处理函数hash集
     * @param  {function} presetOptions 预设的参数处理函数
     * @return {object} 返回jquery的类Promise对象
     */
export default presetAjax(preOptions, preHandleEvents, presetOptions) {

      preOptions = $.extend({}, preOptions);
      preHandleEvents = $.extend({}, preHandleEvents);

      function ajax(options) {

        var newOptions = $.extend({}, preOptions, options),
          results = {};

        presetOptions && presetOptions(newOptions);

        ['success', 'beforeSend', 'error', 'complete']
        .forEach(name => options[name] && (newOptions[name] = bindHandleEvent(preHandleEvents[name], options[name]));

        return $.ajax(newOptions).then(function(res) {
          // jquery对原生Promise返回对象不可直接使用
          //return results.success !== false ? res : Promise.reject(res);
          return results.success !== false ? res : $.Deferred().reject(res);
        });

        function bindHandleEvent(preHandleEvent, handleEvent) {
          return function() {
            if (preHandleEvent) {
              results[name] = preHandleEvent.apply(this, arguments);
            }
            if (results[name] !== false) {
              return handleEvent.apply(this, arguments);
            }
          }
        }
      }

      return ajax;
    }