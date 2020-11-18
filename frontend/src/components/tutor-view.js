import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Appointment = props =>(
    <div className="col-md-4">
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">{props.appointments.meeting}  {props.app.date}</h4>
                <div className="card mb-4 box-shadow">
                    <div>
                        <img className="card-img-top" src={props.tutor.picture} />
                    </div>
                </div>
                <p className="card-text">{props.tutor.description}</p>


                <h5 className="card-text">Subjects Taught</h5>
                <p className="card-text">{props.tutor.subjects.map(tutor => {
                    return tutor + "\n"})}</p>
                <Link className="btn btn-dark start start-two"  to={`/appointment/${props.tutor._id}`}>Schedule Appointment</Link>
                
                
            </div>
        </div>
    </div>
)


export default class TutorList extends Component{
    constructor(props){
        super(props)
        this.state = {appointments: []}

    }

    componentDidMount(){
        console.log(this.props.match.params.tutorid)
        axios.get('https://etoot-293020.wl.r.appspot.com/app/admin',{
            params: {
                tutorid: this.props.match.params.tutorid
            }
        })
        .then(
            res => {
                // console.log(res.data)
                this.setState({
                    appointments : [res.data]
                })
            }
        )
        .catch((error) => {
            console.log(error)
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
            <div className="container">
                <h3>Tutors</h3> 
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div class = "row">
                            
                            {this.appList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}