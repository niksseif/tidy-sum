import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Image,Segment } from 'semantic-ui-react'
import balance from '../Assets/balance.jpg'
import expense from '../Assets/moneyFly.jpg'
import income from '../Assets/dollarsign.jpg'
class Header extends Component {
   
    
    render(){
        return(
            <div  >
                <Segment style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center', backgroundColor:'#DBE2DD'  }}>
                <Link to='/dashboard/income'
                style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold', marginTop: '2vw', color: 'black' }}
                >
                    <Image 
                    src={income} 
                    size='tiny' 
                    style={{ border: '3px solid black', width: '80px', height: '80px'}}
                    />
                    <br></br>
                    <span 
                   
                    >INCOME
                    </span>
                </Link>
                <Link to = '/dashboard/expense'
                style={{ textAlign: 'center', fontSize:'15px', fontWeight:'bold', marginTop:'2vw' , color:'black'}}
                >
                    <Image
                    src={expense} 
                    size='tiny' 
                    style={{ border: '3px solid black', width:'80px', height:'80px' }} 
                    />
                    <br></br>
                    <span>EXPENSE</span>
                </Link>
                <Link to='/dashboard/balance'
                        style={{ textAlign: 'center', fontSize: '15px', fontWeight: 'bold', marginTop: '2vw', color: 'black' }}
                >
                    <Image
                    src={balance} 
                    size='tiny' 
                    style={{ border: '3px solid black', width: '80px', height: '80px' }}
                    />
                    <br></br>
                    <span >BALANCE</span>
                </Link>
            </Segment>
            </div>
        )
    }
     
}
export default Header;
