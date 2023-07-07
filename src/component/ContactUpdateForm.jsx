// ContactUpdateForm
import { useState } from 'react';
import styles from '../styles/contactform.module.css'
import { Link, useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { update } from '../api/contactApi';
import { useContact } from '../hook/contactHook';
import { toast } from 'react-toastify';
const  ContactUpdateForm=()=>{
  const [nameU,setName]=useState('');  
  const [emailU,setEmail]=useState('');  
  const [phoneU,setPhone]=useState('');
  const [updating,setUpdate]=useState(false);
  const {id}=useParams();
  const contact=useContact();
 const navigate=useNavigate();
  // console.log(id);  
 const handleUpdate=async()=>{
  if(nameU==""&&emailU==""&&phoneU==""){
    toast.info("Please fill the form")
    return;
  }
  setUpdate(true);
    const respone= await update(id,nameU,emailU,phoneU);
       console.log(respone.data); 
    if(respone.success){
     contact.UpdateContact(id,nameU,emailU,phoneU);
       navigate('/');
      toast.success("updated Successfully");
    }else{
      toast.error(respone.message);
    }
    setUpdate(false);
  }

  return (
      <div className={styles.contactform}>
          <div className={styles.contactformbox}>
            <div className={styles.contacformBack}>
             <Link to={`/`}>
              <img src="https://cdn-icons-png.flaticon.com/128/17/17699.png" alt="" />
             </Link>
              <span>UpDate Contact</span>
            </div>
              <input type="text" 
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
                <button onClick={()=>handleUpdate()}
                className={styles.green}>
                  {updating?"Updating....":"Update"}</button>
              </div>

          </div>


      </div>
    );
  }
  
  export default ContactUpdateForm;
  