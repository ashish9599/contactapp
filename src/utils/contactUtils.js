const Url="https://jsonplaceholder.typicode.com/users";

export const API_Url={
    getContact:()=>Url,
    addContact:()=>Url,
    deleteContact:(id)=>`${Url}/${id}`,
    UpdateContact:(id)=>`${Url}/${id}`,
    getSingleContact:(id)=>`${Url}/${id}`,
}