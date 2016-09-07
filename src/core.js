import './util/assign';
import typeOf from './util/typeOf';
import create from './util/create';
import $ '../lib/jquery/jquery';

Object.assign($, {

    /**
     * [presetAjax description]
     * @param  {object} preOptions    预置的参数选项
     * @param  {object} preHandleEvents  预设的事件处理函数hash集
     * @param  {function} presetOptions 预设的参数处理函数
     * @return {object}               返回jquery的类Promise对象
     */
    presetAjax(preOptions, preHandleEvents, presetOptions) {

      preOptions = $.extend({}, preOptions);
      preHandleEvents = $.extend({}, preHandleEvents);

      function ajax(options) {

        var newOptions = $.extend({}, preOptions, options),
          results = {};

        presetOptions && presetOptions(newOptions);

        ['success', 'beforeSend', 'error', 'complete']
        .forEach(name => options[name] && (newOptions[name] = bindHandleEventName(preHandleEvents[name], options[name]));

        return $.ajax(newOptions).then(function(res) {
          // jquery对原生Promise返回对象不可直接使用
          //return results.success !== false ? res : Promise.reject(res);
          return results.success !== false ? res : $.Deferred().reject(res);
        });

        function bindHandleEventName(preHandleEvent, handleEvent) {
          return function() {
            if (preHandleEvent) {
              results[name] = preHandleEvent.apply(this, arguments);
            }
            if (results[name] !== false && handleEvent) {
              return handleEvent.apply(this, arguments);
            }
          }
        }
      }

      return ajax;
    }

});

export default $;