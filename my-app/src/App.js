import './App.css';
import {UserComponent} from "./components/UserComponent/UserComponent";
import {PostComponent} from "./components/PostComponent/PostComponent";
import {CreateCar} from "./components/CarComponent/CreateCar";
import {DeleteCar} from "./components/CarComponent/DeleteCar";
import {UpdateCar} from "./components/CarComponent/UpdateCar";
import {Cars} from "./components/CarComponent/Cars";
import {AutoContainer} from "./components/AutoCanteiner/AutoContainer";

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
            <div className={"container"}>
                <Cars/>
                <AutoContainer/>
            </div>

        </div>

    );
}

export default App;
