import React, {useEffect, useState} from 'react';
import Bank from '../components/Bank'

const BankScreen = () => {
    const[banks, setBanks] = useState([])

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/banks/')
      .then(response => response.json())
      .then(data => {
        setBanks(data)
      })
    }, [])

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
        />
        )
        )
        }
        </div>
      </section>
    )
}

export default BankScreen