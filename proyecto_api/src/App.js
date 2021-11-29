import logo from './logo.svg';
import './App.css';
import CruddApp from './componentes/crudApp';
import CrudForm from './componentes/crudForm';
import CrudApi from './componentes/crudApi';

function App() {
  return (
    <div>
      <img class="img" src={"./logoConFondo.png"} />
      <CrudApi/>
      <table></table>
    </div>
  );
}

export default App;