import { useEffect, useRef, useState } from 'react';
import styles from '../styles/contactform.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContact } from '../hook/contactHook';
import { toast } from 'react-toastify';
const  ContactForm=()=>{
  const [name,setName]=useState('');  
  const [email,setEmail]=useState('');  
  const [phone,setPhone]=useState('');
  const [adding,setAdding]=useState(true);
const inputref=useRef(null);
useEffect(()=>{
inputref.current.focus();
},[])


  const navigate=useNavigate()
  const contacts=useContact();
  const handleAdd=async(e)=>{
e.preventDefault();

    if(name===""&&email===""&&phone===""){
      toast.info("Please fill the form")
      return;
    }
if(phone.length<9){
  toast.info("Please Enter a valid no");
  return ;
}

    const id=Date.now();
    setAdding(false);
      contacts.addContactHook({id,name,email,phone});
      toast.success("ADDED Succesfull")
      navigate('/')
      setName('');
      setEmail('');
      setPhone('');
    
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
            <form action="" onSubmit={(e)=>handleAdd(e)}className={styles.contactformbox} >
            <div className={styles.contacformBack}>
             <Link to={`/`}>
              <img src="https://cdn-icons-png.flaticon.com/128/17/17699.png" alt="" />
             </Link>
              <span>Add Contact</span>
            </div>
              
              <input type="text"
              ref={inputref} 
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
                <button type='submit'  className={styles.green}>
                 {adding?"Add":"Adding..."}</button>
              </div>
              </form>

          </div>


    );
  }
  
  export default ContactForm;
  