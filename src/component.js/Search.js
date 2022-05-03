import React from 'react'
import '.././App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Search = ({setuser,darktheme}) => {
    const [user, setUser] = useState("")

   const onSubmit= (e) => {
       e.preventDefault();
        const url = "https://api.github.com/users/"+user
        axios.get(url).then(res => {
            //console.log(res)
            setuser(res.data)
            setUser("")
        })
    }
    return (
        <div>
            <div className="row  msy-pdding mt-3 d-flex align-middle">
                <div className="col-lg-8 msy-seacrh mx-auto">
                    <div className="  msy-bg1">

                        {/* <!-- Custom rounded search bars with input group --> */}
                        <form action="" onSubmit={onSubmit} className={`${darktheme?"bg-dark msy-darkbg1":"bg-light msy-lightformbg1"}`}>
                            <div className={`p-1  rounded rounded-pill shadow-sm mb-4 w-100  ${darktheme?"bg-dark msy-darkbg2":"bg-light msy-lightbg2"}`}>
                                <div className="input-group msy-rounded msy-wtid ">
                                <i class="fas fa-search p-3"></i>
                                    <input type="search " placeholder="Search Github Username..." value={user} onChange={(e)=>setUser(e.target.value)} aria-describedby="button-addon1" className={`form-control border-0 ${darktheme?"bg-dark msy-darkbg2":"bg-light msy-lightbg2"} `} />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-primary mt-2 ">Search</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!-- End --> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search