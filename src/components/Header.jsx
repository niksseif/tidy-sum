import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Segment } from 'semantic-ui-react';
import expense from '../Assets/moneyFly.jpg';
import income from '../Assets/dollarsign.jpg';

const Header = () => (
  <div>
    <Segment
      style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            backgroundColor: '#DBE2DD',
          }}
    >


      <Link // eslint-disable-next-line jsx-a11y/anchor-is-valid
        to="/dashboard/income"
        style={{
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: 'bold',
              marginTop: '2vw',
              color: 'black',
            }}
      >
        <Image
          src={income}
          size="tiny"
          style={{
                border: '3px solid black',
                width: '80px',
                height: '80px',
              }}
        />
        <br />
        <span>INCOME</span>
      </Link>
      <Link
        to="/dashboard/expense"
        style={{
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: 'bold',
              marginTop: '2vw',
              color: 'black',
            }}
      >
        <Image
          src={expense}
          size="tiny"
          style={{
                border: '3px solid black',
                width: '80px',
                height: '80px',
              }}
        />
        <br />
        <span>EXPENSE</span>
      </Link>

    </Segment>
  </div>
);
export default Header;
