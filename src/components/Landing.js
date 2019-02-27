import React,{Component} from 'react'
import { Image } from 'semantic-ui-react'
import imageHeader from '../Assets/imageHeader.jpg'
import Login from './Login'
class landing extends Component {
    state = {
        loading: true,
        user:null,
    }
    //TODO: post request to user data AND  athorize login
    // 

    render(){
        return(
            <div 
                style={{ backgroundColor: '#DBE2DD', opacity: '0.8', position: 'relative', textAlign: 'center' }}>
                <p 
                style={{fontSize: '5vw', color: 'white', position: "absolute", top: '20%',left: '30%', zIndex: '10'}}>
                TIDY-SUM
                </p>
                <Image 
                src={imageHeader}
                style={{ width:'100%', height: '20%'}}
                >
                </Image>
                <div >
                <Login />
                </div>
            </div>
        )
    }
}
export default landing;

