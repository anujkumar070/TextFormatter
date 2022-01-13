import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}  `}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    
                    
                    </ul>
                    
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode &#160;&#160;</label>
                        </div>

                        <form className={`form-inline my-2 my-lg-0 text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'} `}>
                            <input className={`form-control mr-sm-2 text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`} type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
             </div>
            </nav>
        </div>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string

}
Navbar.defaultProps={
    title:"Set Title Here",
    about:"About"
}