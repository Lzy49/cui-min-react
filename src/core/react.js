

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children:children.map(createTextNode)
    }
  }
}

function createTextNode(nodeValue) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue,
      children: [],
    }
  }
}
function render(el, container) {
  const { type, props } = el;
  const node = type === 'TEXT_ELEMENT' ? document.createTextNode(props.nodeValue) : document.createElement(type)
  Object.keys(props).forEach(key => {
    if (key !== 'children') {
      node[key] = props[key]
    }
  })
  const { children } = props;
  children.forEach(child => render(child, node))
  container.append(node)
}

export default {
  createElement,
  createTextNode,
  render
}