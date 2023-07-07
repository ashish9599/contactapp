import ContactList from "./Contactlist";
import styles from '../styles/home.module.css'
// import ContactForm from "../component/ContactForm";
import { Link } from "react-router-dom";
import { useContact } from "../hook/contactHook";

const  Home=()=>{
 const data=useContact();
// console.log(data.contact);
  return (
      <div className="Home">
      <div className={styles.addContact}>
       <Link to='/form'>

          <img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="" />
          <span>Add New Contact</span>
       </Link>
        
      </div>
{data.contact.map((contact)=>(

          <ContactList contact={contact} key={contact.id}/>
))}

      </div>
    );
  }
  
  export default Home;
  