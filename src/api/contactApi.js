const API_Url="https://jsonplaceholder.typicode.com/users";

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
    return customFetch(API_Url,{
        method:'GET'
    });
}
