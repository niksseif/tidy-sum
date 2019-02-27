import React, { Component } from 'react'
// import { Image } from 'semantic-ui-react'
import Header from './Header'


class Dashboard extends Component {
    state = {
        loading:true,
        user: null,
        
       
    }
    async componentDidMount  () {
        //TODO:Need to fetch the user link  http://localhost:5000/users
        try {
            let users = await fetch(`http://localhost:5000/users`)
            let result = await users.json()
            this.setState({ user: result })
            return result;
        } catch {
            throw console.error('Error Dashboard page');
        }
    }

render(){
    const { user} = this.state
   
    return(
        <div >
            <div style={{ backgroundColor: '#ECCECE', paddingTop: '2vw', paddingBottom: '2vw', }}>
            {/* TODO: ADD the LOADER component instead of loading */}
           { (!user) ? 'LOADING...' : user.map((currentUser,id) => {
                return (
                    <nav 
                    key = {id}
                    style={{ textAlign: 'center', fontSize:'30px', color:'white', fontWeight:'bold' }}
                    > 
                    Hello {currentUser.name}
                    </nav>
                )
            })
           }
        </div>
       
        
           <Header />
        </div>
    )
}



}
export default Dashboard;