import React from 'react'

const ProfileExit = ({userdata,darktheme}) => {
    let day=userdata.created_at.split("T")[0].split("-")[1]
    let month=userdata.created_at.split("T")[0].split("-")[2]
    let year=userdata.created_at.split("T")[0].split("-")[0]
    console.log(userdata)
    return (
        <>
            <div className='msy-img-cont d-flex justify-content-around col-lg-4 p-3'>
                <img src={userdata.avatar_url} className='w-100 rounded-circle' />
                
            </div>
            <div className='col-lg-8 p-5 msy-userbio'>
                <div className='d-flex justify-content-between msy-nameDate'>
                    <h2 className='mb-0'>{userdata.name}</h2>
                    <p className='pt-3 mb-0'>{day+"/"+month+"/"+year}</p>
                </div>
                <div className='px-2 mb-3 text-left' ><a href={userdata.html_url}>@{userdata.login}</a></div>
                <div className='mb-5 msy-userProfile'>

                    <p className='pt-3' style={{ color: "8px" }}>{userdata.bio == null ? "This profile has no bio" : userdata.bio}</p>
                </div>
                <div className={`d-flex msy-rff justify-content-between flex-row  p-3 rounded-lg  ${darktheme?"msy-folowerDark":"msy-folowerlight"}`}>
                    <div>
                        <h5>Repos</h5>
                        <p className='pt-3 text-center' style={{ color: "8px" }}>{userdata.public_repos}</p>
                    </div>
                    <div>
                        <h5>Follower</h5>
                        <p className='pt-3 text-center' style={{ color: "8px" }}>{userdata.followers}</p>
                    </div>
                    <div>
                        <h5>Following</h5>
                        <p className='pt-3 text-center' style={{ color: "8px" }}>{userdata.following}</p>
                    </div>
                </div>
                <div className=' mt-5'>
                    <div className='d-flex flex-row justify-content-between msy-userLinks'>
                        <div>
                            <p className={`${userdata.location == null ?`faded `:""}`}><i className="fas fa-location" ></i>{userdata.location == null ? "Not avialable" : userdata.location}</p>
                        </div>
                        <div>
                            <p className={`${userdata.twitter_username == null ?`faded `:""}`}><i class=" fa-brands fa-twitter"></i>{userdata.twitter_username == null ? "Not avialable" : userdata.twitter_username}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between  msy-userLinks'>
                        <div>
                            <p className={`${userdata.blog == "" ?`faded `:""}`}><i className={`fa-solid fa-link ` } ></i>{userdata.blog == "" ? "Not avialable" : userdata.blog}</p>
                        </div>
                        <div>
                            <p className={`${userdata.email == null ?`faded `:""}`}><i class="fa fa-envelope"></i>{userdata.email == null ? "Not avialable" : userdata.email}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProfileExit