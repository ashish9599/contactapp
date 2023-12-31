import { toast } from 'react-toastify';
import { useContact } from '../hook/contactHook';
import styles from '../styles/contactlist.module.css'
import { Link } from 'react-router-dom';
const  ContactList=({contact})=>{
   // console.log(contact.id)
   const contactU=useContact();
   const handleDelet=async(id)=>{
     contactU.removeContact(id);
   toast.success("Deleted,Succefully")
}
    return (
      <div className={styles.contactlist}>
      <div>
      <Link to={`user/${contact.id}`} className={styles.contactName}>
      <img src="https://cdn-icons-png.flaticon.com/128/9581/9581121.png" alt="" />
      <div className={styles.contactDetails}>
 
       <div>Name:{contact.name}</div>
       <div>email:{contact.email}</div>
       <div>phone:{contact.phone}</div>
      </div>
      </Link>
      </div>
      <div className={styles.upAndDel}>
      <Link to={`update/${contact.id}`}>
         <img src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png" alt="" />
      </Link>

         <img className={styles.cursor} src="https://cdn-icons-png.flaticon.com/128/484/484611.png" alt="" 
         onClick={()=>handleDelet(contact.id)}
         />
      </div>

      </div>
    );
  }
  
  export default ContactList;
  