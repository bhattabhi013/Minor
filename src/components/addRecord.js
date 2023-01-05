import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
//import { Nav} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/style.css';
import axios from 'axios';

class AddRecord extends Component{
    constructor(props){
        super(props);

        this.onSubmit= this.onSubmit.bind(this);

        this.onChangeFname= this.onChangeFname.bind(this);
        this.onChangeLname= this.onChangeLname.bind(this);
        this.onChangeGender= this.onChangeGender.bind(this);
        this.onChangeAge= this.onChangeAge.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangeAbout= this.onChangeAbout.bind(this);
        this.onChangeWeight= this.onChangeWeight.bind(this);
        this.onChangeHeight= this.onChangeHeight.bind(this);

        this.state = {
            fname: "",
            lname: "",
            gender: "",
            age: null,
            email: "",
            about: "",
            message: "",
            weight: null,
            height: null
        }

    }

    onChangeFname(e){
        this.setState({
            fname: e.target.value
        })
    }

    onChangeLname(e){
        this.setState({
            lname: e.target.value
        })
    }

    onChangeGender(e){
        this.setState({
            gender: e.target.value
        })
    }

    onChangeAge(e){
        this.setState({
            age: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangeAbout(e){
        this.setState({
            about: e.target.value
        })
    }
    onChangeWeight(e){
        this.setState({
            weight: e.target.value
        })
    }
    onChangeHeight(e){
        this.setState({
            height: e.target.value
        })
    }

    //When the user clicks on submit button
    onSubmit(e){
        e.preventDefault();

        const user={
            fname: this.state.fname,
            lname: this.state.lname,
            gender: this.state.gender,
            age: this.state.age,
            email: this.state.email,
            weight: this.state.weight,
            height: this.state.height,
            about: this.state.about
        }

        console.log(user);

        axios.post('http://hospital-record-backend.herokuapp.com/person', user)
            .then(res => console.log(res.data));

        
        this.setState({
            username: '',
            message: "User Successfully Added!"
        })

        //window.location= '/allUsers';
    }

    render(){
        return(
            
            <div id="wrap" className="">
                <br/>
                <br/>
                <div className="container align-items-center">
                
                    <h1>Upload the document</h1><br/>

                    <form onSubmit={this.onSubmit}>

                        <div>First Name: <input className="form-control mr-sm-2" required value={this.state.fname} onChange={this.onChangeFname} type="text" placeholder="First name" /></div><br/>
                        <div>Last Name: <input className="form-control mr-sm-2" required value={this.state.lname} onChange={this.onChangeLname} type="text" placeholder="Last name" /></div><br/>
                        <div>Email: <input className="form-control mr-sm-2" required value={this.state.email} onChange={this.onChangeEmail} type="email" placeholder="Email" /></div><br/>
                        <div>File:
                        <input type="file" />
                        <button type="submit">Upload</button>
                        </div><br/>
                    <div><button className="btn btn-success" type="submit">Add Record</button></div>
                    
                    </form>

                    <h3 style={{color: "green"}} className="label label-success">{this.state.message}</h3>
                    
                </div> 
            </div>
        )
    }
}

export default AddRecord;
