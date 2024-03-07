import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './index.css';

const Header: React.FC = () => {
   
         return (
        <>
            <header>
                <h1>Where in the world?</h1>
                <span><FontAwesomeIcon icon={faMoon} />Dark Mode</span>
            </header>
        </>
    );
}

export default Header;
