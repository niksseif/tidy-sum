

 const deleteIncome =  (id,userId) =>  {
        const res =  fetch(`http://localhost:5000/users/${userId}/income/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }, 
         
        }).then((data) => {
            console.log(data,"<<< returned data from api")
            data.json().then(json =>{
               console.log(json,"<<<<<<<json")
               return json;
           })
        })
      
        
    
}
export default deleteIncome;