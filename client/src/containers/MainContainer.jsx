import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { getAllFlavors } from '../services/flavors'
import { getAllFoods, putFood, postFood, deleteFood } from '../services/foods';
import Flavors from '../screens/Flavors';
import Foods from '../screens/Foods';
import FoodEdit from '../screens/FoodEdit';
import FoodDetail from '../screens/FoodDetail';
import FoodCreate from '../screens/FoodCreate';

export default function MainContainer(props) {
  const [flavors, setFlavors] = useState([]);
  const [foods, setFoods] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorArray = await getAllFlavors();
      setFlavors(flavorArray);
    }
    const fetchFoods = async () => {
      const foodArray = await getAllFoods();
      setFoods(foodArray);
    }
    fetchFlavors();
    fetchFoods();
  }, [])

  const updateSubmit = async (id, formData) => {
    const updatedFood = await putFood(id, formData);
    setFoods(prevState => prevState.map(food => food.id === Number(id) ? updatedFood : food));
    history.push('/foods');
  }

  const createSubmit = async (formData) => {
    const newFood = await postFood(formData);
    setFoods(prevState => [...prevState, newFood]);
    history.push('/foods')
  }

  const handleDelete = async (id) => {
    await deleteFood(id);
    setFoods(prevState => prevState.filter(food => food.id !== id))
  }

  return (
    <Switch>
      <Route path='/foods/new'>
        <FoodCreate
          createSubmit={createSubmit}
        />
      </Route>
      <Route path='/foods/:id/edit'>
        <FoodEdit
          foods={foods}
          updateSubmit={updateSubmit}
        />
      </Route>
      <Route path='/foods/:id'>
        <FoodDetail
          flavors={flavors}
        />
      </Route>
      <Route path='/flavors'>
        <Flavors
          flavors={flavors}
        />
      </Route>
      <Route path='/foods'>
        <Foods
          foods={foods}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  )
}
