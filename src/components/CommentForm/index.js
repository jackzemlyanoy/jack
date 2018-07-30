import React, {Component} from  'react'

class CommentForm extends Component {
    state ={
        user: '',
        name: ''
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                user: <input value={this.state.user}
                             onChange={this.handleChange('user')}
                             className={this.getClassName('user')} />
                comment: <input value={this.state.text}
                                onChange={this.handleChange('text')}
                                className={this.getClassName('text').bind(this)} />

                <input type = "submit" value="submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? "form-input__error" : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if(value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}
const limits = {
    user: {
        min:5,
        max:15
    },
    text: {
        min: 20,
        max: 30
    }
}
export default CommentForm