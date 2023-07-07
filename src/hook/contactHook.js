import { useContext, useEffect, useState } from "react"
import { getUser } from "../api/contactApi";
import { ContactContext } from "../Provider/contactProvider";
import { toast } from "react-toastify";
export const useContact=()=>{
    return useContext(ContactContext);
}
export const useProviderContact=()=>{
  const [contact,setContact]=useState([]);
  const [contactDetails,setContactDetails]=useState([]);
  useEffect(()=>{
   const fetchContact=async()=>{
    const response=await getUser(); 
   if(response.success){
           setContact(response.data);
   }else{
     toast.error(response.message)    
   }
   }
   fetchContact();
// console.log(contact)  
},[])
const addContactHook=(contacts)=>{
//  console.log(contacts);
  const newContact=[contacts,...contact]
    setContact(newContact);
   }
const removeContact=(id)=>{
const newContact=contact.filter((user)=>user.id!=id)
setContact(newContact)
}
 const UpdateContact=(id,name,email,phone)=>{
    const updatedUsers = contact.map((user) => {
        // console.log(name)
        if (user.id ==id) {
            user.name = name;
            user.email=email
            user.phone = phone;
        }
        return user;
      });
    //   console.log(updatedUsers);
setContact(updatedUsers);

 } 


  return {
        contact,
        removeContact,
        addContactHook,
        UpdateContact,
    }
}