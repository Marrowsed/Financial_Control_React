import React from 'react';

const Bank = ({name, image}) => {
    return (<div className="col-sm-4 mb-4">
        <div class="card mr-3">
            <img src={image} alt={name} className="img-thumbnail mx-auto d-block" />
        </div>
        <div className="card-body">
                <h5 className="card-title">{name}</h5>
        </div>
        <div className='card-body'>
            <a className='btn btn-info' type='button'>Verify your Account</a>
        </div>
    </div>
            
    )

}
export default Bank