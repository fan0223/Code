import Button from "./Button"
import {useLocation} from "react-router-dom"
function Header({ title, onAdd, showAdd }) {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button 
            color={showAdd ? 'pink'  : 'green'}
            text={showAdd ? 'close' : 'Add'} 
            onClick={onAdd}/>}
        </header>
    )

}

Header.defaultProps = {
    title: "Task Tracker",
}
export default Header;