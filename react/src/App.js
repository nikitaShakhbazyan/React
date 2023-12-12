import "./App.css";
import AppRoutes from "./Routes";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getCategories } from "./features/categories/categoriesSlice";
import Header from "./components/Header/Header";



function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategories())
  },[])

  return (
    <div className="App">
      <Header/>
        <AppRoutes/>
    </div>
  );
}

export default App;
