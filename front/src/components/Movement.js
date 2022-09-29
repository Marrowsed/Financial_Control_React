import React from 'react';

const Movement = ({account, p_choice, p_months, description, value, created_at})  => {
    return (
            <tbody>
                <tr>
                    <th>{account}</th>
                    <td>{p_choice}</td>
                    <td>{p_months}</td>
                    <td>{description}</td>
                    <td>${value}</td>
                    <td>{created_at}</td>
                </tr>
            </tbody>
    )
    

}

export default Movement