import React from 'react';

const Movement = ({account, p_choice, p_months, description, get_value, created_at})  => {
    return (
            <tbody>
                <tr>
                    <td>{p_choice}</td>
                    <td>{p_months}</td>
                    <td>{description}</td>
                    <td>${get_value}</td>
                    <td>{created_at}</td>
                </tr>
            </tbody>
    )
    

}

export default Movement