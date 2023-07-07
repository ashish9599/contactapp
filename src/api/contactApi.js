import { API_Url } from "../utils/contactUtils";
const customFetch = async (url, { body, ...customConfig }) => {
   
    const headers = {
        // 'Content-type': 'application/json; charset=UTF-8',
        'content-type': 'application/x-www-form-urlencoded',
    };
    
    
    const config = {
      ...customConfig,
      headers: {
          ...headers,
          ...customConfig.headers,
        },
    };
    
    if (body) {
        config.body=JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, config);
      const data = await response.json();
    // return data;
    //   if (data.success) {
        return {
          data,
          success: true,
        };
    //   }
  
    } catch (error) {
    //   console.error('error coming',error);
      return {
        message: error.message,
        success: false,
      };
    }
  };

export const getUser=()=>{
    return customFetch(API_Url.getContact(),{
        method:'GET'
    });
}
export const getContact=(id)=>{
    return customFetch(API_Url.getSingleContact(id),{
        method:'GET'
    });
}
export const addcontact=(i,nam,emai,phon)=>{
    return customFetch(API_Url.addContact(),{
        method:'POST',
        body:{id:i,name:nam,email:emai,phone:phon}
    });
}
export const update=(i,nameU,emailU,phoneU)=>{
    return customFetch(API_Url.UpdateContact(i),{
        method:'PUT',
        body:{name:nameU,email:emailU,phone:phoneU}
    });
}

export const remove= (userId) => {
  return customFetch(API_Url.deleteContact(userId), {
    method: 'DELETE',
  });
};
