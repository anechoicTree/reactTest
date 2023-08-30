import { BrowserRouter as Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <table className="menu">
            <td><Link to="/list">List</Link></td>
            <td><Link to="/add">Add New Movie</Link></td>
            </table>
        </div>
    )
}

export default Navigation;