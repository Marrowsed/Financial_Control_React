//import Account from '../components/Account'
import { LinkContainer } from 'react-router-bootstrap'
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const AccountDetail = () =>{
    const params = useParams()

    const[accounts, setAccount] = useState([])

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/${params.id}/accounts/${params.pk}/`)
      .then(response => response.json())
      .then(data => {
        setAccount(data)
      })
    }, [params.id, params.pk]) 

    const getLimit = () => {
      return "$" + parseInt(accounts.limit - accounts.get_credit)
    }

    const getSaving = () => {
      return "$" + accounts.get_savings
    }

    const getDebit = () => {
      return "$" + accounts.get_debit
    }

    
    return(
        <section>
        <div className='row ml-4 text-center'>
          <div className='container'>
            <LinkContainer to={`/${params.id}/accounts`}>
                <button className='btn btn-info'>Back to Accounts</button>
            </LinkContainer>
            <h1>Limit</h1>
            <input value={`${getLimit()}`} readOnly/>
            <h1>Savings</h1>
            <input value={`${getSaving()}`} readOnly/>
            <h1>Debit </h1>
            <input value={`${getDebit()}`} readOnly/>
          </div>
        </div>
      </section>
    )

}

export default AccountDetail

