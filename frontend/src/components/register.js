import React, {Component} from 'react'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default class CreateAppointment extends Component{
    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword= this.onChangePassword.bind(this)
        this.onChangeFirstName= this.onChangeFirstName.bind(this)
        this.onChangeLastName= this.onChangeLastName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: ''
        }
    }


    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    
    onChangeFirstName(e){
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            lastname: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username : this.state.username,
            password: this.state.password,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
        }

        console.log(user)
        axios.post('http://localhost:8080/register', user)
        .then(res => console.log(res.data))

        window.location = "/";
    }


render(){
    return(
        <div className="container">
            <h3> Create New Account</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                     <input type="text" required className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername} />

                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" required className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword} />
                </div>

                <div className="form-group">
                    <label>First Name: </label>
                    <input type="text" required className="form-control"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstName} />
                </div>

                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" required className="form-control"
                    value={this.state.lastname}
                    onChange={this.onChangeLastName} />
                </div>


                <div className="form-group">
                    <input type="submit" value="Create Account" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )}
}