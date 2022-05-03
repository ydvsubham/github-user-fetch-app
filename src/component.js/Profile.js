import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileExit from './ProfileExit'

const Profile = ({ userdata,darktheme }) => {
    console.log(userdata)
    return (
        <div className='row'>
            <div className={`col-lg-8 mx-auto container d-flex p-5 rounded shadow-sm ${darktheme?"bg-dark msy-darkbg2":"bg-light msy-lightbg2"}`}>
                <div className='row d-flex justify-content-around w-100'>
                    {userdata==null?<h5 className='text-center' style={{margin:"0 auto"}}>No User</h5>:<ProfileExit userdata={userdata} darktheme={darktheme} />}
                    
                </div>
            </div>
        </div>
    )
}

export default Profile