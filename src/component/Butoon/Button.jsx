import "./Button.css"

export default function Button( {children, onClick, style, className} ) {
    return (
        <button className={className} style={style} onClick={onClick}>{children}</button>
    )
}