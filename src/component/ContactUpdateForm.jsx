// ContactUpdateForm
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/contactform.module.css'
import { Link, useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useContact } from '../hook/contactHook';
import { toast } from 'react-toastify';
const  ContactUpdateForm=()=>{
  const [nameU,setName]=useState('');  
  const [emailU,setEmail]=useState('');  
  const [phoneU,setPhone]=useState('');
  const [updating,setUpdate]=useState(false);
  const inputRef=useRef(null);
  const {id}=useParams();
  const contact=useContact();
 const navigate=useNavigate();
  // console.log(id);  
useEffect(()=>{
  inputRef.current.focus();
},[])

 const handleUpdate=async(e)=>{
  e.preventDefault()
  if(nameU===""&&emailU===""&&phoneU===""){
    toast.info("Please fill the form")
    return;
  }
  if(phoneU.length<9){
    toast.info("Please Enter a valid no");
    return ;
  }
  setUpdate(true);
     contact.UpdateContact(id,nameU,emailU,phoneU);
     toast.success("updated Successfully");
     navigate('/');
    
    setUpdate(false);
  }

  return (
      <div className={styles.contactform}>
           <form action="" onSubmit={(e)=>handleUpdate(e)} className={styles.contactformbox} >
            <div className={styles.contacformBack}>
             <Link to={`/`}>
              <img src="https://cdn-icons-png.flaticon.com/128/17/17699.png" alt="" />
             </Link>
              <span>UpDate Contact</span>
            </div>

              <input type="text"
              ref={inputRef} 
              value={nameU} onChange={(e)=>setName(e.target.value)}
              placeholder="Name" required/>
              <input type="email"
              value={emailU} onChange={(e)=>setEmail(e.target.value)}
              placeholder="email" required/>
              <input type="number"
              value={phoneU} onChange={(e)=>setPhone(e.target.value)}
              placeholder="phone" required/>
              <div className={styles.contactformboxbutton}>
                <button className={styles.red}>Clear</button>
                <button 
                type='submit'
                className={styles.green}>
                  {updating?"Updating....":"Update"}</button>
              </div>
                  </form>

          </div>
       );
  }
  
  export default ContactUpdateForm;
  