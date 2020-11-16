import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'

export default class CreateAppointment extends Component{
    constructor(props){
        super(props)

        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeMeetingLink = this.onChangeMeetingLink.bind(this)
        this.onChangeSubject = this.onChangeSubject.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            meetingLink: '',
            subject: '',
            date: new Date(),
            users: [],
            tutorID: ''
        }
    }


    componentDidMount(){
       
        axios.get(`http://localhost:8080/tutor/`,{
            params: {
                id: this.props.match.params.id
            }
        })
        .then(
            res => {
                console.log(this.props.match.params.id)
                 this.setState({
                    users: [res.data.firstname + " " + res.data.lastname],
                    tutorID: this.props.match.params.id,
                    username: res.data.username

                })
            }
        )

        
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeMeetingLink(e){
        this.setState({
            meetingLink: e.target.value
        })
    }
    
    onChangeSubject(e){
        this.setState({
            subject: e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();
        const appointment = {
            username : this.state.username,
            meetingLink : this.state.meetingLink,
            subject : this.state.subject,
            date : this.state.date,
            tutorID: this.state.tutorID

        }

        console.log(appointment)
        axios.post('http://localhost:8080/app', appointment)
        .then(res => console.log(res.data))

        window.location = "/";
    }


render(){
    return(
        <div className="container">
            <h3> Create New Appointment</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user){
                                return <option key={user} value={user}>
                                {user}
                                </option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Meeting Link: </label>
                    <input type="text" required className="form-control"
                    value={this.state.meetingLink}
                    onChange={this.onChangeMeetingLink} />
                </div>

                <div className="form-group">
                    <label>Subject: </label>
                    <input type="text" required className="form-control"
                    value={this.state.subject}
                    onChange={this.onChangeSubject} />
                </div>

                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker 
                        selected={this.state.date}
                        onChange={this.onChangeDate} />
                    </div>
                </div>


                <div className="form-group">
                    <input type="submit" value="Schedule Appointment" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )}
}
