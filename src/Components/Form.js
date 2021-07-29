import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    subjecthandler = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`               Your Name : ${this.state.firstName} ${this.state.lastName} 
               Your Email:${this.state.email} 
               You Have Selected:${this.state.subject} 
               Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: '',
            subject: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Subject :</label><select onChange={this.subjecthandler} defaultValue="Select Subject">
                        <option defaultValue>Select Subject</option>
                        <option value="React">React</option>
                        <option value="Data Mining">Data Mining</option>
                        <option value="IOT">IOT</option>
                        <option value="AI">AI</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
