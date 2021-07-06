import React from 'react';
import { v4 } from 'uuid';

const arrNames = ["Геракл", "Гектор", "Персей", "Парис", "Елена", "Дамокл", "Кассандра", "Цербер", "Кронос", "Клио", "Медея", "Минотавр", "Нарцисс", "Прометей", "Пигмалион", "Галатея", "Даная", "Дедал", "Икар", "Европа"];

class ListOfNames extends React.Component{
    render(){
        return(
        <ul>
        {arrNames.map(element => {
            return <li key={v4}>{element}</li>
        })}
        </ul>
        )
    }
}

export default ListOfNames