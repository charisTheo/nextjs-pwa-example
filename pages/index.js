import React from 'react'

export default class extends React.PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }
  render() {
    return (
      <div>
          <p>Home page</p>
          <a href="/about">About</a>
      </div>
    )
  }
}
