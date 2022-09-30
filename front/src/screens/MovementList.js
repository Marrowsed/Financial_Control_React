import Movement from '../components/Movement'
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const MovementList = () =>{

    const params = useParams()

    const[movements, setMovement] = useState([])

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/${params.id}/movements/`)
      .then(response => response.json())
      .then(data => {
        setMovement(data)
      })
    }, [])

    return(
        <section>
        <div className='row ml-4 text-center'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Months</th>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Created At</th>
                </tr>
            </thead>
        {
        movements.map(m => 
        (
        <Movement 
          key={m.id} 
          account={m.account}
          p_choice={m.p_choice}
          p_months={m.p_months}
          description={m.description}
          value={m.value}
          created_at={m.created_at}
        />
        )
        )
        }
        </table>
        </div>
      </section>
    )

}

export default MovementList

