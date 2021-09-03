import React, { Component } from 'react'
import AllProjects from './AllProjects';
import Education from './Education';
import styles from './nav.module.css';
import NavBar from './NavBar';
import Profile from './Profile';
import TimeLine from './TimeLine';
const path = require('path');

class Navigation extends Component {
    render () {
        return (
            <div>
                <div style={{background : `url(${path.join(process.env.PUBLIC_URL, 'images', 'ankit.jfif')})`, backgroundPosition : "center", backgroundSize : "cover"}} className={styles.cover}>
                    <div className={styles.content}>
                        <NavBar />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8" style={{margin:"auto", marginTop :"-200px"}}>
                            <div className="card">
                                <div className="card-body">
                                    <Profile />
                                    <TimeLine />
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop:"25px"}}>                       
                        <Education />
                    </div>           

                    <div className="row">
                        <div className="col-sm-8" style={{margin:"auto"}}>
                            <AllProjects />
                        </div>
                    </div>         
                </div>
            </div>
        )
    }
}

export default Navigation;