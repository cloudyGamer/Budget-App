import React from 'react'; 
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

/*export class LoginPage extends React.Component {
          constructor(props) {   
               super(props);
               
               this.state = {
               email: '',
               password: '',
               error: ''
               }
          }
        
        
          onEmailChange = (e) => {
              const email = e.target.value;
              this.setState(() => ({ email }));
          };
          
          onPasswordChange = (e) => {
               const password = e.target.value;
               this.setState(() => ({ password }));
          };
          
          onSubmit = (e) => {
               e.preventDefault();
               if (!this.state.email||!this.state.password) {
                    this.setState(() => ({ error: "please provide Email and Password" }));
                    //set error state equal to "please provide email and amount"
               }else {
                    this.setState(() => ({ error: '' }));
                    //you no longer have a props.submit here. import it
                    const details = {
                         email:this.state.email,
                         password: this.state.password
                    };
                    this.props.startLogin(); //login fnc
                    this.props.history.push(`/`);
               }
          }
          
        
        render() {
        
        return(<div  xmlns="http://www.w3.org/1999/xhtml">
                    {this.state.error&&<p>{this.state.error}</p>}
                  <form onSubmit={this.onSubmit}>
                    <input 
                         type="text"
                         placeholder="email"
                         autoFocus
                         value={this.state.email}
                         onChange={this.onEmailChange}
                    />
                   
                    <textarea
                         placeholder='Add a note for your expense (optional)'
                         value={this.state.password}
                         onChange={this.onPasswordChange}
                    />
                       <button>Login</button>
                  </form>  
               </div>);
    }  
    
}*/
export const LoginPage = ( { startLogin } ) => (
  <div  xmlns="http://www.w3.org/1999/xhtml">
  <button onClick={startLogin} >Log In</button>
  </div>
  );
const mapDispatchToProps = (dispatch) => ({
     startLogin: () => dispatch(startLogin())
});

//const mapStateToProps = (state,props) => {
//     return {
//          expense : state.expenses.find((expense) => expense.id===props.match.params.id)
//     };
//};

 export default connect(undefined,mapDispatchToProps)(LoginPage);