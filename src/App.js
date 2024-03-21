import './App.css';
import { categories } from '../api';
import Row from './components/Row'

function App() {
  return (
    <div>

        {categories.map( (category) => {

            return  <Row 
                        key = {category.name}
                        title = {category.name}
                        isLarge = {category.name}
                       
             />

        })}

    </div>
  );
}

export default App;