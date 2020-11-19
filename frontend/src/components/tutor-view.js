import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Appointment = props =>(
   

    <tr>
        <td>
            <p className="lead mt-2">
                {props.app.meeting}
            </p>
        </td>
              <td>
            <p className="lead mt-2">
                {props.app.subject}
            </p>
        </td>
              <td>
            <p className="lead mt-2">
                {props.app.date.substring(0,10)}
            </p>
        </td>

        <td>
            <div className="container">
                <button type="button" class="btn btn-success m-1">Accept</button>
                <button type="button" class="btn btn-danger m-1">Decline</button>
            </div>
        </td>
    </tr>
)




export default class TutorView extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {appointments: []}

    }

    componentDidMount(){
        console.log(this.props.match.params.tutorid)
        axios.get('http://localhost:8080/app',{
            params: {
                tutorid: this.props.match.params.tutorid
            }
        })
        .then(
            res => {
                // console.log(res.data)
                this.setState({ appointments : res.data })
            }
        )
        .catch((error) => {
            window.location = "/login"
        })
    }

    appList(){
        console.log(this.state.appointments)
        return this.state.appointments.map(currApp => {
            return <Appointment app={currApp} key={currApp._id}/>
        })
    }


    render(){
        return(
            <div className="container mt-5">
                <h3>Appointments</h3>
                <table className="table mt-3">
                    <thead className="thead-light">
                        <tr>
                            <th>Meeting</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Accept/Decline</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.appList() }
                    </tbody>
                </table>
            </div>
           
        )
    }
}