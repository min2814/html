const style = {
    fontSize: "2rem",
    backgroundColor: "lightgray"
}

function Header(props) {
    return (
        <>
            <header>
                <h1 style={{
                    color: "red",
                    backgroundColor: "yellow"
                }}>
                    {props.name}
                </h1>
                <p style={style}>{props.world}</p>
            </header>
        </>
    )
}
export default Header;