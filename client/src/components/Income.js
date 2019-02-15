import React, { Component } from "react";
import IncomeModalEdit from "./IncomeModalEdit";
import IncomeAdd from './IncomeAdd'
import {List,Icon,Label,Segment,Modal,ListItem,Reveal} from "semantic-ui-react";
import { connect } from'react-redux'
import { fetchUserData, fetchUserIncome } from '../actions'


//TODO: 1.Display existing income
//      2.Add to existing income
//      3. Delete from existing Income
class IncomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersData: this.props.user
        };
    }
    componentDidMount() {
     this.props.fetchUserData(); 
     this.props.fetchUserIncome(1);
  }

//Calculate the sum of the amount from each income
  calcTotal = arr => {
    let res = arr.reduce((acc, item) => {
      let amount = item.amount;
      acc += amount;
      return acc;
    }, 0); 
    return res;
  };
//handle total change
  changeTotalState(calcTotal) {   
    this.setState({ total: this.state.total + calcTotal() });
  }

  // handle delete request
  handleDeleteReq = async (data) => {
      let id = data.id
    //   console.log('heloo hitting me')
      const res = await fetch(`http://localhost:5000/income/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      })
     return res;
     
  }
  //handle delete after the response is ok than set the state to the new state
 handleDelete = (e,data) => {
    e.preventDefault();
    let newIncome;
    let res =  this.handleDeleteReq(this.state.income[data.id])
     
    if(res) {
       newIncome =  this.state.income.filter(item => {
        let removedId  = this.state.income[data.id].id
        return !(item.id === removedId)
        
        })
    }
    this.setState({ income: [...newIncome]})
 }
    
  render() {
      console.log(this.props.usersData.usersData, "<<<<props from component")
console.log(this.state,"state from render ")
    const income = this.props.userIncome
    console.log(this.props,"<<<<Props from income page ")
    return (
      <Segment
        style={{ backgroundColor: "#DBE2DD", marginTop: "1vw", opacity: "0.9" }}
      >
        <List divided relaxed>
        <ListItem style={{display: 'flex', justifyContent:'center'}}>
            <Icon 
            name='add square' 
            onClick={()=>{ this.setState({ reveal:true})}}
            />      
            <Icon 
            name='remove square'  
            onClick={()=>{ this.setState({ reveal: false})}}
            />
             <div >
                { (this.state.reveal) &&
                    <Reveal.Content visible>
                        <IncomeAdd 
                        // id={user[0].id}
                        // incomesArr={income}
                        // total={total}
                                />
                            </Reveal.Content>
                     }
                    </div>
            
        </ListItem>
          {/* {
              !income
            ? "Loading ...."
            : income.map((item, id) => {
                return (
                  <List.Item key={id}>
                    <List.Icon
                      name="dollar sign"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header >SOURCE: {item.source}</List.Header>
                      <List.Description >
                        DESCRIPTION: {item.description}
                      </List.Description>
                      <Label>
                        <Label.Detail>LABEL: {item.label}</Label.Detail>
                      </Label>
                      <Label>
                        <Label.Detail>AMOUNT: ${item.amount}</Label.Detail>
                      </Label>
                    </List.Content>
                    <Modal 
                    trigger={<Icon 
                    name="edit" 
                    onClick={() => { this.setState({ edit: true }) }}
                    />
                    } */}
                    {/* > */}
                      <IncomeModalEdit
                    //   users_id = {user[0].id}
                    //   id={item.id}
                    //   edit = {edit}
                    //   incomeLabel={item.label}
                    //   incomeSource = {item.source}
                    //   incomeDescription={item.description}
                    //   incomeAmount = {item.amount}
                    
                      
                       />
                   
                    {/* </Modal>
                        <Icon 
                        id={id}
                        name="delete"
                        onClick={this.handleDelete}
                        >
                        </Icon>
                  </List.Item> */}
                );
              })
            }
          {/* {!income ? (
            "LOADING...."
          ) : (
            <List.Item>
              <List.Icon
                name="dollar sign"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header >TOTAL INCOME</List.Header>
                <List.Description>${this.calcTotal(income)}</List.Description>
              </List.Content>
            </List.Item>
          )} */}
        </List>
      </Segment>
    );
  }
}
const mapStateToProps = state => ({
    usersData: state.usersData,
    userIncome:state.userIncome,

})
export default connect(mapStateToProps, { fetchUserData, fetchUserIncome })(IncomePage)
