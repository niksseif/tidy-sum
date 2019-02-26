

 const deleteIncome =  (id,userId) =>  {
        const res =  fetch(`http://localhost:5000/users/${userId}/income/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }, 
         
        }).then((data) => {
            data.json().then(json =>{
               return json;
           })
        })
      
        
    
}
export default deleteIncome;