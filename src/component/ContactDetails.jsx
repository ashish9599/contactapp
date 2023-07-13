import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContact } from "../hook/contactHook";
import { Link } from "react-router-dom";
import styles from '../styles/contactdetail.module.css'
const  ContactDetails=()=>{
    const {id}=useParams();
    // console.log(id);
    const [contactD,setContactDetails]=useState([]);
const user=useContact();
// console.log("u",user.contact);     
useEffect(()=>{
    const contactDet=()=>{
   const newContact=user.contact.filter((contact)=>contact.id==Number(id));
  //  console.log("n",newContact);     
    setContactDetails(newContact);
      }   
      contactDet(); 
    },[id])
    const ncontact=contactD[0];
    
    return (
      <div className={styles.details}>
                <div className={styles.detailsBack}>
                  <Link to={`/`}>
                   <img src="https://cdn-icons-png.flaticon.com/128/17/17699.png" alt="" />
                  </Link>
             
                    <h1>Details</h1>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/9581/9581121.png" alt="" />
             {contactD.length>0 &&<>
               <p>{ncontact.name}</p>
                <p>{ncontact.email}</p>
                <p>{ncontact.username}</p>
                <p>{ncontact.phone}</p>
                <p>{ncontact.website}</p>
             </>             
                }
      </div>
    );              
  }
  
  export default ContactDetails;
  