import react,{useState} from 'react';

 //line 3 to 13 is custom hooks
function useFormInputs(InitialValue){
  const [value,setValue]=useState('');
}
function handleChange(e){
  setValue(e.target.value);
}
return{
  value,
  onChange:handleChange,
};//line 13


function LoginFrom(){
  const email=useFormInputs('');
  const password=useFromInputs('');


// function LoginFrom(){
//   const [email,setEmail]=useState('');
//   const [password,setPassword]=useState('');

// function handleEmailChange(e){
//   setEmail(e.target.value);
// }

// function handlePasswordChange(e){
//   setPassword(e.target.value);
// }
return(
  <form>
    <div>Email</div>
    <div>
      <input type="text" {...email} />
      {/* value={email} inChange={handleEmailChange} /> */}
    </div>
    <br/>
    <div>Password</div>
    <div>
      <input
      type="password"
      {...password}
      // value={paswword}
      // onChange={handlePasswordChange}
      />
    </div>
    <p>
      <strong>
        <em>Email:</em>
      </strong>
      {email.value}
    </p>
    <p>
      <strong>
        <em>Password:</em>
      </strong>
      {password.value}
    </p>
  </form>
)

// 
function SignupForm(){
  const email=useFormInputs('');
  const password=useFormInputs('');
  const confirmPassword=useFromInputs('');
}



return(
  <form>
    <div>Email</div>
    <div>
      {/* <input type="text" value={email} inChange={handleEmailChange} /> */}
      <input type="text" {...email} />
    
    </div>
    <br/>
    <div>Password</div>
    <div>
      {/* <input
      type="password"
      value={paswword}
      onChange={handlePasswordChange}
      /> */}
      <input type="password" {...password}/>
    </div>
    <div>
      {/* <input
      type="password"
      value={confirm paswword}
      onChange={handlePasswordChange}
      /> */}
      <input type="password" {...confirmPassword}/>
    </div>
    <p>
      <strong>
        <em>Email:</em>
      </strong>
      {email.value}
    </p>
    <p>
      <strong>
        <em>Password:</em>
      </strong>{''}
      {password.value}
    </p>
    <p>
      <strong>
        <em>confirm Password:</em>
      </strong>{''}
      {confirmPassword.value}
    </p>
  </form>
)



}

 function App() {
  return (
    <div className="App" style={{padding:20}}>
        <h2>Login </h2>
        <LoginFrom/>
        <hr/>
    <h3>SignUp</h3>
    <SignupForm/>
    </div>
  );
}

export default App;
