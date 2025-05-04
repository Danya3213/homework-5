import Recipe from './recipe/Recipe';
import recipies from './recipies.json';
import './App.css';

export default function App () {

  return (

      <Recipe recipies = {recipies}></Recipe>
  )
}