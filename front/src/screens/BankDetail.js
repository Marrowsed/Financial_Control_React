import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Bank from '../components/Bank'

const BankDetail = () => {
    const params = useParams()

    const[banks, setBanks] = useState([])

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/banks/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setBanks(data)
      })
    }, [params.id])

    return(
        <section>
        <div className='row ml-4 text-center'>
        {
        banks.map(b => 
        (
        <Bank 
          key={b.id} 
          name={b.name} 
          image={b.image}
          id={b.id}
        />
        )
        )
        }
        </div>
      </section>
    )
}

export default BankDetail