import React from 'react'

const Thembtn = ({ themechange, darktheme }) => {
    return (
        <div class="row d-flex justify-content-center">
            <div class={`col-lg-8 d-flex flex-row justify-content-between px-0 msy-themebtn form-check form-switch ms-auto mt-3 ${darktheme ? "msy-darkbg3" : "bg-light"} `}>
                <div>
                    <h2>
                        Finder
                    </h2>
                </div>
                <div>
                <label class={`form-check-label ms-3 ${darktheme ? "bg-dark " : "bg-lightfa"}`} for="lightSwitch">
                    {darktheme ?
                        <i class="fas fa-moon pt-2" style={{ color: "white" }}></i> :
                        <i class={`fas fa-sun pt-2  `} style={{ color: "black" }} ></i>
                    }
                </label>
                <input class="form-check-input" style={{ fontSize: "30px" }} type="checkbox" id="lightSwitch" onClick={themechange} />
                </div>
                
            </div>
        </div>
    )
}

export default Thembtn