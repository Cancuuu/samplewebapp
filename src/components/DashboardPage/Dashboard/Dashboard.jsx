import React, { useState, Fragment } from 'react';
import LoginPage from '/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/components/LoginPage/LoginPage.jsx'
import { auth, storage } from "/home/cancu/Documentos/Projects/sampleWebApp/samplewebapp/src/firebase.js";
import './Dashboard.css';
import { Link } from 'react-router-dom';



const DashboardPage = () => {

    const [profilepic, setProfilePic] = useState(null);
    const [useractive, setUserActive] = useState(false);
   
    
    const user = auth.currentUser;







    auth.onAuthStateChanged(user => {
        if (user) {
            storage.ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
                setProfilePic(imgUrl)
            })
        }
    })

    const LogOut = () => {
        auth.signOut();
        auth.onAuthStateChanged(function (user) {
            if (user) {
                return null;
            } else {
                setUserActive(true);
                window.location.reload(false);

            }
        });
    }


    return (
        <Fragment>
            { useractive

                ?


                (<LoginPage />)

                :

                (<div className="container_dashboard" >
                    <div className="div_pic">
                        <img className="profile_pic" src={profilepic} alt="" />
                    </div>
                    <div className="div_username">
                        <p>{user.email}</p>
                    </div>
                    <div className="div_logout">

                        <Link onClick={LogOut} className="logout_button" placeholder="Log Out" exact to="/" >Log Out</Link>

                    </div>

                </div >)


            }

        </Fragment>

    )
}

export default DashboardPage