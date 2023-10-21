import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const admin = {
    email: "admin@admin.com",
    password: 'admin'
}
const user = {
    email: "user@user.com",
    password: "user"
}

function Login() {
    const users = useSelector(p => p.lr)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState({
        text: "",
        color: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMsg({
                text: "Please, fill input",
                color: "light"
            })
        } else {
            if (email === admin.email && password === admin.password) {
                setMsg({
                    text: "Login successfully",
                    color: "success"
                })
                navigate('/home');
                localStorage.setItem('active', admin.email);
                window.location.reload();
            } else {
                setMsg({
                    text: "email or password is wrong!",
                    color: "warning"
                })
            }
            if ((email === users[0].email) && (password === users[0].password)) {
                setMsg({
                    text: "Login successfully",
                    color: "success"
                })
                navigate('/shop');
                localStorage.setItem('active', user.email);
                window.location.reload();
            } else {
                setMsg({
                    text: "email or password is wrong!",
                    color: "warning"
                })
            }
        }
    }
    return (
        <>
            <AdminNav />
            <Container className="col-6">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center">Sign in</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" />
                    </div>
                    <p className={alert}>{msg.text}</p>
                    <button type="submit" className="btn btn-danger">Login</button>
                </form>
            </Container>
        </>
    )
}

export default Login;