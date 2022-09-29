import Account from '../components/Account'
import React, {useEffect, useState} from 'react';

const AccountScreen = () =>{
    const[accounts, setAccount] = useState([])

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/accounts/')
      .then(response => response.json())
      .then(data => {
        setAccount(data)
      })
    }, [])

    return(
        <section>
        <div className='row ml-4 text-center'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Bank</th>
                    <th>Limit</th>
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
        />
        )
        )
        }
        </table>
        </div>
      </section>
    )

}

export default AccountScreen

