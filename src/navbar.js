import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">home</Link> {" "}
                <Link to="/contact">contact</Link>{" "}
                <Link to="/about">about</Link>
            </nav>
        </>
    )
}
export default Navbar;