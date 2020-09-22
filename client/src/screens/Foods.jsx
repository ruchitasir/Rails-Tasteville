import React from 'react';
import { Link } from 'react-router-dom';

export default function Foods(props) {
  const { currentUser, foods, handleDelete } = props;
  return (
    <div>
      <h3>Foods</h3>
      {foods.map(food => (
        <React.Fragment key={food.id}>
          <Link to={`/foods/${food.id}`}><p>{food.name}</p></Link>
          {currentUser && currentUser.id === food.user_id &&
            <>
              <Link to={`/foods/${food.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(food.id)}>Delete</button>
            </>
          }
        </React.Fragment>
      ))}
      <br />
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}
