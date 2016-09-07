import './util/assign';
import typeOf from './util/typeOf';
import create from './util/create';

import $ from '../lib/jquery/jquery';

import presetAjax from './presetAjax';
import ancestor from './ancestor';
import ancestorAll from './ancestorAll';
import coord from './coord';
import replaceClass from './replaceClass';
import switchClass from './switchClass';

Object.assign($, {

    presetAjax,
    ancestor,
    ancestorAll,
    coord,
    replaceClass,
    swapClass

});

export default $;