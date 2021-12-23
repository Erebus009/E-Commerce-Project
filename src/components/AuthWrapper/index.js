import React from "react"
import "./style.scss"

const Authwrapper = ({headline, children}) => {
    return (
        <div className= "AuthWrapper">
        <div className="wrap">
            { headline && <h2>{headline}</h2>}
            <div className="chidlren">{children && children}</div>
        </div>
        </div>
    )
}

export default Authwrapper