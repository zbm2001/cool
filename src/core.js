import './util/assign';
// import typeOf from './util/typeOf';
// import create from './util/create';

import $ from '../lib/jquery/jquery';

import presetAjax from './presetAjax';
import ancestor from './ancestor';
import ancestorAll from './ancestorAll';
import iiancestor from './iiancestor';
import iiancestorAll from './iiancestorAll';
import rectCoord from './rectCoord';
import regClass from './regClass';
import hasClass from './hasClass';
import addClass from './addClass';
import removeClass from './removeClass';
import toggleClass from './toggleClass';
import replaceClass from './replaceClass';
import swapClass from './swapClass';

Object.assign($, {

    presetAjax,
    ancestor,
    ancestorAll,
    iiancestor,
    iiancestorAll,
    rectCoord,
    regClass,
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    replaceClass,
    swapClass

});

export default $;