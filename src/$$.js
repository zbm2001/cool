import {assign} from 'z-utils'
import $ from './$'

var AP = Array.prototype,
  slice = AP.slice,
  pop = AP.pop,
  push = AP.push,
  shift = AP.shift,
  unshift = AP.unshift,
  reverse = AP.reverse,
  splice = AP.splice,
  indexOf = AP.indexOf,
  forEach = AP.forEach,
  reduce = AP.reduce,
  reduceRight = AP.reduceRight,
  includes = AP.includes,
  find = AP.find,
  findIndex = AP.findIndex,
  copyWithin = AP.copyWithin,
  fill = AP.fill,
  entries = AP.entries,
  keys = AP.keys,
  values = AP.values

function $$ (selector, context) {
  var $2 = create($$.prototype)
  if (selector) {
    switch (typeof selector) {
      case 'string':
        selector = (context || document).queryselectorAll(selector)
        break
      case 'object':
        if(selector.cool) return selector
        if (selector === window || selector.nodeType) {
          $2[0] = selector
          $2.length = 1
          return $2
        }
        break
    }
    push.apply($2, selector)
  }
  return $2
}

export default assign($$, {
  from(arrLike, fn){
    return slice.call(arrLike).forEach(fn)
  },
  of(){
    return slice.call(arguments)
  }
})

assign($$.prototype, {
  $,
  length: 0,
  pop,
  push,
  shift,
  unshift,
  reverse,
  splice,
  indexOf,
  forEach,
  reduce,
  reduceRight,
  find,
  findIndex,
  includes,
  toArray(){
    return slice.call(this)
  },
  add(){
    push.apply(this, arguments)
    return this
  },
  concat(){
    forEach.call(arguments, (arr) => {
      push.apply(this, arr)
    })
    return this
  }
})