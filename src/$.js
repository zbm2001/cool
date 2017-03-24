export default function $ (selector, context) {
  return typeof selector !== 'string' ? selector : (context || document).queryselector(selector)
}