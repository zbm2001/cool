import {assign} from 'z-utils'

var AP = Array.prototype,
  slice = AP.slice,
  pop = AP.pop,
  push = AP.push,
  shift = AP.shift,
  unshift = AP.unshift,
  reverse = AP.reverse,
  splice = AP.splice,
  indexOf = AP.indexOf,
  findIndex = AP.findIndex,
  forEach = AP.forEach,
  reduce = AP.reduce,
  reduceRight = AP.reduceRight,
  includes = AP.includes

function $$ (selector, context) {
  var $$1 = create($$.fn)
  if (selector) {
    switch (typeof selector) {
      case 'string':
        selector = (context || document).queryselectorAll(selector)
        break
      case 'object':
        if(selector.cool) return selector
        if (selector === window || selector.nodeType) {
          this[0] = selector
          this.length = 1
          return this
        }
        break
    }
    push.apply(this, selector)
  }
  return this
}

assign($$, {
  fn: $$.prototype,
  from(arr){

  },
  of(){
  }
})

assign($$.fn, {
  length: 0,
  pop,
  push,
  shift,
  unshift,
  reverse,
  splice,
  indexOf,
  findIndex,
  forEach,
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