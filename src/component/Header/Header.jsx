import "./Header.css"
import logo from "./logo.png"

export default function Header() {
    return (
        <div className="Header">
            <img style={ { position: "absolute", left: "20px", top: "26.5px" } } src={logo} alt="Logo"/>
            <h1 className="h1Header" style={ { left: "80px", top: "6px" } }>Apprimore</h1>
        </div>
    )
}