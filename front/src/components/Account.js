import React from 'react';

const Account = ({name, bank, limit})  => {
    return (
            <tbody>
                <tr>
                    <th>{name}</th>
                    <td>{bank}</td>
                    <td>${limit}</td>
                </tr>
            </tbody>
    )
    

}

export default Account