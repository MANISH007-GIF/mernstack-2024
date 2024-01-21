import { NavLink } from "react-router-dom"

export const Errorpage = () =>{
    return (
        <>
            <h1>404</h1>
            <p>page not found</p>

            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
        </>
    )
}