import Movement from '../components/Movement'
import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams, useNavigate} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const MovementMonthYearList = () =>{

    const params = useParams()
    const navigate = useNavigate();

    const[movements, setMovement] = useState([])
    const[searchParams, setSearchParams] = useSearchParams()

    const searchHandler = (event) => {
      let search, confirm, query;
      if (event.target.value) {
        search = {
          p_choice: event.target.value
        }
        confirm = search['p_choice'].toUpperCase()
      } else {
        search = undefined;
      }
      
      if (confirm === "D" || confirm === "C" || confirm === "S") {
        query = {'p_choice': search['p_choice'].toUpperCase()}
        setSearchParams(query, { replace: true });
      } else {
        alert("Type D for Debit, C for Credit or S for Savings !")
      }
    }

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
      fetch(`http://127.0.0.1:8000/api/${params.id}/movements/${params.month}/${params.year}?${searchParams}`)
      .then(response => response.json())
      .then(data => {
        setMovement(data)
      })
    }, [params.id, params.month, params.year, searchParams])

    return(
        <section>
        <LinkContainer to={`/${params.id}/accounts`}>
          <button className='btn btn-outline-success'>Back to Account</button>
        </LinkContainer>
        <div className='row ml-4 text-center'>
        <h3>Search Movement Type</h3>
        <Form onSubmit={submitHandler} inline>
            <input
              type='text'
              value={searchParams.p_choice}
              onChange={searchHandler}
              maxLength='1'
              placeholder='D for Debit / C for Credit / S for Savings'
              style={{ width: '350px', padding: '8px 15px', fontSize: '16px', margin: '5px' }}
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
          get_value={m.get_value}
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

export default MovementMonthYearList

