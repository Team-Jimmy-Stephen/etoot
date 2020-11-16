import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Tutor = props =>(
    <div className="col-md-4">
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">{props.tutor.firstname}  {props.tutor.lastname}</h4>
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
        
        this.state = {tutors: []}




    }

    componentDidMount(){
        axios.get('http://localhost:8080/tutor')
        .then(response => {
            this.setState({tutors: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    tutorList(){
        console.log(this.state.tutors)
        return this.state.tutors.map(currentTutor => {
            return <Tutor tutor={currentTutor} key={currentTutor._id}/>
        })
    }


    render(){
        return(
            <div className="container">
                <h3>Tutors</h3> 
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div class = "row">
                            
                            {this.tutorList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}