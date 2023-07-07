import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContact } from "../hook/contactHook";
import { getContact } from "../api/contactApi";
import { Link } from "react-router-dom";
import styles from '../styles/contactdetail.module.css'
const  ContactDetails=()=>{
    const {id}=useParams();
    const [contactD,setContactDetails]=useState([]);
 
const user=useContact();
    useEffect(()=>{
    const contactDet=async()=>{
    const respone=await getContact(id);
    //   console.log(respone);
    if(respone.success){
        setContactDetails(respone.data);
    }    
}   
    contactDet(); 
    },[id])
    // console.log(contactD);
    return (
      <div className={styles.details}>
                <div className={styles.detailsBack}>
                  <Link to={`/`}>
                   <img src="https://cdn-icons-png.flaticon.com/128/17/17699.png" alt="" />
                  </Link>
             
                    <h1>Details</h1>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/9581/9581121.png" alt="" />
                <p>{contactD.name}</p>
                <p>{contactD.email}</p>
                <p>{contactD.username}</p>
                <p>{contactD.phone}</p>
                <p>{contactD.website}</p>
      </div>
    );              
  }
  
  export default ContactDetails;
  