import './App.css';
import {UserComponent} from "./components/UserComponent/UserComponent";
import {PostComponent} from "./components/PostComponent/PostComponent";
import {CreateCar} from "./components/CarComponent/CreateCar";
import {DeleteCar} from "./components/CarComponent/DeleteCar";
import {UpdateCar} from "./components/CarComponent/UpdateCar";
import {Cars} from "./components/CarComponent/Cars";
function App() {

    return (
        <div>
        <div className="App">
            <UserComponent/>
            <PostComponent/>
            <CreateCar/>
            <DeleteCar/>
            <UpdateCar/>

        </div>
            <Cars/>
        </div>
    );
}

export default App;
