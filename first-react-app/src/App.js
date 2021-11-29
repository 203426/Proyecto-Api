import logo from './logo.svg';
import './App.css';
import CruddApp from './componentes/crudApp';
import CrudForm from './componentes/crudForm';
import CrudApi from './componentes/crudApi';

function App() {
  return (
    <div>
      <CrudApi/>
      <CruddApp/>
      <table></table>
    </div>
  );
}

export default App;
