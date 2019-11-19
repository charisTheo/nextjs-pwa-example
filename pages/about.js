import React from 'react'

export default class extends React.PureComponent {
    render () {
        return (
            <div>
                <p>About page</p>
                <a href="/">Home</a>
                <a href="/does-not-exist">Nowhere</a>
            </div>
        )
    }
}