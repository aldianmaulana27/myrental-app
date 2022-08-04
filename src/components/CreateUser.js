import React, { Component } from 'react';
import {withRouter} from './withRouter';
import UserService from '../services/UserService';
import validator from 'validator';




class CreateUser extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            name:'',
            email:'',
            phone:'',
            password:'',
            confirmPassword:'',
            address:''
        }
        this.cancel = this.cancel.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser=(e)=>{
        e.preventDefault();

        let user = {name: this.state.name, email: this.state.email, phone: this.state.phone, password: this.state.password, address: this.state.address};
        console.log('employee =>' +JSON.stringify(user) +'validate '+this.validate());

        if (this.validate()) {
                  
            this.setState(this.state);
            UserService.createUser(user).then(res => {
                this.props.navigate('/login');
            })
        }

    }
    changeNameHandler=(event) =>{
        this.setState({name: event.target.value});
    }
    changeEmailHandler=(event) =>{
        this.setState({email: event.target.value});
    }
    changePhoneHandler=(event) =>{
        this.setState({phone: event.target.value});
    }
    changePasswordHandler=(event) =>{
        this.setState({password: event.target.value});
    }
    changeConfirmPasswordHandler=(event) =>{
        this.setState({confirmPassword: event.target.value});
    }
    changeAddressHandler=(event) =>{
        this.setState({address: event.target.value});
    }

    cancel(){
        this.props.navigate('/login');
    }

    validate() {
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let passwordError = "";
        let confirmPasswordError = "";
        let changeRoleHandlerError = "";
        if (!this.state.name) {
          nameError = "Name field is required";
        }
        if (!this.state.phone) {
            phoneError = "Phone field is required";
        }else if(validator.isMobilePhone(this.state.phone,'id-ID') === false){
            phoneError = "Phone format is invalid";
        }
        
        if (!this.state.email){
          emailError = "Email field is required";
        } else if (validator.isEmail(this.state.email) === false) {
          emailError = "Email Field is Invalid ";
        }

        if (!this.state.password) {
          passwordError = "Password field is required";
        }else if(this.state.password && this.state.confirmPassword){
          if(this.state.confirmPassword !== this.state.password){
            passwordError = "Password don't match";
          }
        }

        if(!this.state.confirmPassword){
            confirmPasswordError = "Password field is required";
        }
        if(!this.state.changeRoleHandler){
            changeRoleHandlerError = "Role field is required";
        }

        if (emailError || nameError || passwordError || phoneError || confirmPasswordError||changeRoleHandlerError) {
          this.setState({ nameError, emailError, passwordError, phoneError, confirmPasswordError,changeRoleHandlerError});
          return false;
        }
        return true;
    }

    render() {
        return (
            <>
            <section>
            <div className="container">
                <div className='row'><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                <div className="row">
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h4 className='text-center'>Register</h4>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input placeholder='Name' name='name' className='form-control'
                                    value={this.state.name} onChange={this.changeNameHandler} />
                                    <span className="text-danger">{this.state.nameError}</span>
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input placeholder='E-Mail' type="email" name='email' className='form-control'
                                    value={this.state.email} onChange={this.changeEmailHandler} />
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                                <div className='form-group'>
                                    <label>Phone Number</label>
                                    <input placeholder='08' name='phone' className='form-control'
                                    value={this.state.phone} onChange={this.changePhoneHandler} />
                                    <span className="text-danger">{this.state.phoneError}</span>
                                </div>
                                <div className='form-group'>
                                    <label>Password</label>
                                    <input type='password' placeholder='Password' name='password' className='form-control'
                                    value={this.state.password} onChange={this.changePasswordHandler} />
                                    <span className="text-danger">{this.state.passwordError}</span>
                                </div>
                                <div className='form-group'>
                                    <label>Confirm Password</label>
                                    <input type='password' placeholder='Confirm Password' name='confirmPassword' className='form-control'
                                    value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} />
                                    <span className="text-danger">{this.state.confirmPasswordError}</span>
                                </div>
                                <div className='form-group'>
                                    <label>Address</label>
                                    <input placeholder='Address' name='address' className='form-control'
                                    value={this.state.address} onChange={this.changeAddressHandler} />

                                </div>
                                <div className='form-group'>
                                    <label>Role</label>
                                    <input placeholder='Role' name='role' className='form-control'
                                    value={this.state.role} onChange={this.changeRoleHandler} />
                                    <span className="text-danger">{this.state.changeRoleHandlerError}</span>

                                </div>
                                <button className='btn btn-success' onClick={this.saveUser} style={{marginTop:"5px"}}>Save</button>
                                <button className='btn btn-danger' onClick={this.cancel} style={{marginLeft: "10px", marginTop: "5px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

                </div>
            </div>
            </section>
        </>
 
        );
    }
}

export default withRouter(CreateUser);
