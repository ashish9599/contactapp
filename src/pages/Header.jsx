import {  useState } from 'react';
import { useContact } from '../hook/contactHook';
import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom';
const  Header=()=>{
const user=useContact();
const [search,setSearch]=useState("");
const [searchDone,setSearchDone]=useState(true);
const handleSubmit=(e)=>{
  e.preventDefault();
    setSearch('') 
  setSearchDone(false)
}
 
const handleSearching=()=>{
  setSearchDone(false);
  setSearch('');
  setSearchDone(true);
}
  return (
      <div className={styles.header}>
      <div className={styles.leftHeader}>
<Link to={`/`}>
          <img src="https://cdn-icons-png.flaticon.com/128/483/483977.png" alt="logo" />
           {/* <span>Contact Book</span> */}
           <h1>Contact App</h1>
</Link>
      </div>
      <div className={styles.middleHeader}>
               <form action="" onSubmit={(e)=>handleSubmit(e)}>

               <input
               value={search}
               onChange={(e)=>setSearch(e.target.value)} 
               type="text" placeholder="Search" required/>
               <button>

               <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
               </button>

             </form>
             {search.length>2&&user.contact.length>0 && searchDone&& 
             <ul className={styles.zIndex}>

               {user.contact.map((user,i)=>(
                
               <Link to={`user/${user.id}`} 
               onClick={()=>handleSearching()}
               key={user.id}
               className={styles.search}
               >
                <li key={user.id}>
                  
                    {user.name}
                   
                    </li>
               </Link>
               ))}
             </ul>
             }     
      </div>
      <div className={styles.rightHeader}>
          <div className={styles.rightHeaderHome}>
          <Link to={`/`}>
              Home
</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  