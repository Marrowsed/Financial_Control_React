import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import {useParams} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'

const MovementList = () =>{

    const params = useParams()
    const months = ['01/2022', '02/2022', '03/2022', '04/2022', '05/2022', '06/2022', '07/2022', '08/2022', '09/2022', '10/2022', '11/2022', '12/2022']
    const list = months.map(m => 
      <tr>
        <td key={m}>{m}</td>
        <td>
          <LinkContainer to={`${m}`}>
            <button className='btn btn-outline-info'>View</button>
          </LinkContainer>
        </td>
      </tr>)

    return(
        <section>
          <Row className='align-items-center'>
                <Col className='text-left'>
                  <LinkContainer to={`/${params.id}/accounts`}>
                    <button className='btn btn-outline-success'>Back to Account</button>
                  </LinkContainer>
                </Col>
                <Col className='text-end'>
                  <LinkContainer to={`/${params.id}/movements/add`}>
                    <button className='btn btn-outline-info'>Add Movement</button>
                  </LinkContainer>
                </Col>
            </Row>
          
        <div className='row ml-4 text-center'>
        <table className='table table-hover'>
          <thead>
              <tr>
                <th>Month/Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {list}
            </tbody>  
        </table>
        </div>
      </section>
    )

}

export default MovementList

