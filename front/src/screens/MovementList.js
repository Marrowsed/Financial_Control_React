import Movement from '../components/Movement'
//import SearchBox from '../components/SearchBox';


import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams, useNavigate} from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'

const MovementList = () =>{

    const params = useParams()

    const[movements, setMovement] = useState([])
    const[searchParams, setSearchParams] = useSearchParams()

    const searchHandler = (event) => {
      let search;
      if (event.target.value) {
        search = {
          created_at: event.target.value
        }
      } else {
        search = undefined;
      }
  
      setSearchParams(search, { replace: true });
    }

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        if (searchParams) {
            navigate(`?${searchParams}`)
        }
         else {
            alert("ERROR")
        }
      }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${params.id}/movements?${searchParams}`)
        .then(response => response.json())
        .then(data => {
          setMovement(data)
      })
    }, [params.id, searchParams])

    return(
        <section>
        <div className='row ml-4 text-center'>
        <Form onSubmit={submitHandler} inline>
            <input
              type='date'
              value={searchParams.created_at}
              onChange={searchHandler}
              placeholder='Search...'
              style={{ width: '300px', padding: '8px 15px', fontSize: '16px' }}
        />
            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >Search</Button>
        </Form>
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

