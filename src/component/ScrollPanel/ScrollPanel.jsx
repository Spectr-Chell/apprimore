import './ScrollPanel.css'

export default function ScrollPanel( {children, style, className} ) {
    return (
        <div className={className} style={style}>{children}</div>
    )
}