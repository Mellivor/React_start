import React from 'react';

const Login = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm/>
        </div>

    )
}

export default Login;

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input type="text" placeholder ={'Login'} />
            </div>
            <div>
                <input type="text" placeholder={'Pasword'} />
            </div>
            <div>
                <input type="checkbox" name="remember"  />Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
