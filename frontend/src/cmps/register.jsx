import { useState, useRef } from "react"

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
                    <button className="login-button">Sign in</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows</h1>
                <h2>Watch anywhere, cancel anytime</h2>
                <p>Ready to watch? Enter your email to join.</p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <button className="register-button" onClick={handleStart}>Get started</button>
                    </div>
                ) : (<form className="input">
                    <input type="password" placeholder="Your password" ref={passwordRef} />
                    <button className="register-button" onClick={handleFinish}>Start</button>
                </form>)}
            </div>
        </div>
    )
}

export default Register
