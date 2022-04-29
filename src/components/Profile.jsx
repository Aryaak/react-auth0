import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

export default function Profile({ user }) {

    const { logout } = useAuth0()

    return <div className="login-container" >
        <div className="login-box" >
            <div className="login-header" >
                <img className="img-logo" src="https://res.cloudinary.com/dacjpaubk/image/upload/v1651204411/logo.png" />
                <h5 className="mb-75px" > login user email address</h5 >
            </div >
            <div id="error-message" className="alert alert-danger" ></div >

            <form onsubmit="return false;" method="post" id="form-auth" className='mb-5'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input value={user.given_name} type="text" className="text-form" id="firstname" placeholder="Firstname" />
                        </div>
                    </div >
                    <div className="col-md-6" >
                        <div className="form-group  mb-35px" >
                            <input value={user.family_name} type="text" className="text-form" id="lastname" placeholder="Lastname" />
                        </div >
                    </div >
                </div >
                <div className="form-group mb-35px " >
                    <input type="password" id="password" className="text-left text-form" placeholder="new passoword" />
                </div >
                <div className="form-group mb-35px " >
                    <input type="password" id="password" className="text-left text-form" placeholder="re enter new password" />
                </div >
                <div className="captcha-container form-group mb-35px " ></div >
                <button type="submit" id="btn-primary" className="btn" >
                    Submit
                </button >

            </form >

            <LogoutButton />

        </div >
    </div >
}
