// Componente Funcional - Functional Component
import React from 'react'


class HelloWorldClass extends React.Component {
    render () {
        const { name } = this.props
        return <h1>Hello {name} - Class</h1>
    }
}

HelloWorldClass.defaultProps = {
    name: 'World'
}

export default HelloWorldClass