import { createContext, useContext } from "react"
import { useProviderContact } from "../hook/contactHook";
const initialState={
    contact:[],
    removeContact:()=>{},
    addContactHook:()=>{},
    UpdateContact:()=>{},
}

 export const ContactContext=createContext(initialState);

 export const ContactProvider=({children})=>{
    const contact=useProviderContact();
    return <ContactContext.Provider  value={contact}>
        {children}
    </ContactContext.Provider>

 }