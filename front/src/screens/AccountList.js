import Account from '../components/Account'
import { LinkContainer } from 'react-router-bootstrap'
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const AccountList = () =>{
    const params = useParams()

    const[accounts, setAccount] = useState([])

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/${params.id}/accounts/`)
      .then(response => response.json())
      .then(data => {
        setAccount(data)
        console.log(data)
      })
    }, [params.id])

    return(
        <section>
            <LinkContainer to={`/banks`}>
                <button className='btn btn-info'>Back to Banks</button>
            </LinkContainer>
        <div className='row ml-4 text-center'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Limit</th>
                    <th></th>
                </tr>
            </thead>
        {
        accounts.map(a => 
        (
        <Account 
          key={a.id} 
          name={a.name}
          bank={a.bank}
          limit={a.limit}
          id={a.id}
        />
        )
        )
        }
        </table>
        </div>
      </section>
    )

}

export default AccountList

