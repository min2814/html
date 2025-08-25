function Footer(props) {
    return (
        <footer>
            {
                props.data.map((v, i) => {
                    return <h5 key={i}>{v}</h5>
                })
            }
        </footer>
    )
}

export default Footer;