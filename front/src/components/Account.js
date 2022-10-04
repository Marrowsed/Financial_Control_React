import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Account = ({name, bank, limit, id})  => {
    console.log({name})
    return (
            <tbody>
                <tr>
                    <th>{name}</th>
                    <td>${limit}</td>
                    <td colSpan={2}>
                    <LinkContainer to={`${id}/`}>
                        <button className='btn btn-info mx-auto'>Detail</button>
                    </LinkContainer>
                    <LinkContainer to={`/${id}/movements`}>
                        <button className='btn btn-success ms-2'>Movements</button>
                    </LinkContainer>
                    </td>
                </tr>
            </tbody>
    )
    

}

export default Account