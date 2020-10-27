import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Tutor = props =>(
    <tr>
        <td>{props.tutor.firstname}</td>
        <td>{props.tutor.lastname}</td>
        <td>{props.tutor.subjects.map(tutor => {
            return tutor + " "
        })}</td>
    </tr>
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
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Subjects</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tutorList()}
                    </tbody>
                </table>
            </div>
        )
    }
}