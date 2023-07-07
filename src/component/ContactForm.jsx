import { useState } from 'react';
import styles from '../styles/contactform.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { addcontact } from '../api/contactApi';
import { useContact } from '../hook/contactHook';
import { toast } from 'react-toastify';
 
const  ContactForm=()=>{
  const [name,setName]=useState('');  
  const [email,setEmail]=useState('');  
  const [phone,setPhone]=useState('');
  const [adding,setAdding]=useState(true);
const navigate=useNavigate()
  const contacts=useContact();
  const handleAdd=async()=>{
    if(name==""&&email==""&&phone==""){
      toast.info("Please fill the form")
      return;
    }
    const id=Date.now;
    setAdding(false);
    const respone= await addcontact(id,name,email,phone);
    if(respone.success){
      const {obejc}=respone.data            
      contacts.addContactHook({id,name,email,phone});
      toast.success("ADDED Succesfull")
      navigate('/')
    }else{
      setName('');
      setEmail('');
      setPhone('');
      toast.error(respone.message);
    }; 
    setAdding(true);
    
  }
  const handleClear=()=>{
    setEmail('');
    setName('');
    setPhone('');
  }
  // const contact=useContact();
  // console.log(contacts.contact)

  return (
      <div className={styles.contactform}>
          <div className={styles.contactformbox}>
            <div className={styles.contacformBack}>
             <Link to={`/`}>
              <img src="https://cdn-icons-png.flaticon.com/128/17/17699.png" alt="" />
             </Link>
              <span>Add Contact</span>
            </div>
              <input type="text" 
              value={name} onChange={(e)=>setName(e.target.value)}
              placeholder="Name" required/>
              <input type="email"
              value={email} onChange={(e)=>setEmail(e.target.value)}
              placeholder="email" required/>
              <input type="number"
              value={phone} onChange={(e)=>setPhone(e.target.value)}
               placeholder="phone" required/>
              <div className={styles.contactformboxbutton}>
                <button onClick={()=>handleClear()} className={styles.red}>Clear</button>
                <button onClick={()=>handleAdd()} className={styles.green}>
                 {adding?"Add":"Adding..."}</button>
              </div>

          </div>


      </div>
    );
  }
  
  export default ContactForm;
  