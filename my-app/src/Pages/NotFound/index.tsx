import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import './index.css';
export default function NotFound() {
    return (

     <div className="not-found">
      <FontAwesomeIcon icon={faBan} style={{color:'red' , height:'6rem'}}/>
      <h1 className='no-found-country'>Country not Found</h1>
      <span className='message'>Sorry, we couldn’t find the Country you’re looking for in this region.</span>

     </div>
    )
  }