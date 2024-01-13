import React from './react'
export default {
  createRoot(container) {
    return {
      render(node) {
        React.render(node, container)
      }
    }
  }
}