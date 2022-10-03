import Movement from '../components/Movement'
//import SearchBox from '../components/SearchBox';


import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

const MovementList = () =>{

    const params = useParams()
    let date, mid_date, final_date = "";

    const[movements, setMovement] = useState([])
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${params.id}/movements`)
        .then(response => response.json())
        .then(data => {
          setMovement(data)
      })
    }, [params.id])
    
    date = movements.created_at
    mid_date = date.split('-')
    final_date = mid_date[0] + "/" + mid_date[1]

    return(
        <section>
        <div className='row ml-4 text-center'>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Month/Year</th>
                    <th>Total Debit</th>
                    <th>Total Credit</th>
                    <th>Total Savings</th>
                    <th></th>
                </tr>
            </thead>
        {
        movements.map( m =>
            <tbody>
              <tr>
                <td>{final_date}</td>
                <td>Total Debit</td>
                <td>Total Credit</td>
                <td>Total Savings</td>
                <td>
                <LinkContainer to={`${final_date}`}>
                  <button className='btn btn-outline-info mx-auto'>Detail</button>
                </LinkContainer>
                </td>
              </tr>
            </tbody>
        )
        }    
        
        </table>
        </div>
      </section>
    )

}

export default MovementList

