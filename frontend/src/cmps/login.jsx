
function Login() {


    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Enter your email"></input>
                    <input type="password" placeholder="Your password"></input>
                    <button className="login-btn">Sign in</button>
                    <span>New in Netflix? <b>Sign up</b></span>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </small>
                </form>

            </div>
        </div>
    )
}

export default Login
