import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Bank = ({name, image, id}) => {
    return (<div className="col-sm-4 mb-4">
        <div class="card mr-3">
            <img src={image} alt={name} className="img-thumbnail mx-auto d-block" />
        </div>
        <div className="card-body">
                <h5 className="card-title">{name}</h5>
        </div>
        <div className='card-body'>
            <LinkContainer to={`/${id}/accounts`}>
                <button className='btn btn-success'>Verify your Account</button>
            </LinkContainer>
            <LinkContainer to={`${id}`}>
                <button className='btn btn-info ms-2'>Bank Detail</button>
            </LinkContainer>
        </div>
    </div>
            
    )

}
export default Bank