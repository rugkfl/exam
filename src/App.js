import logo from './logo.svg';
import './App.css';
import MainComponent from "./MainComponent";
import LoginComponent from "./LoginComponent";
import ClsComponent from "./ClsComponent";
import DivComponent from "./DivComponent";
import DataComponent from "./DataComponent";
import CmpComponent from "./CmpComponent";
import MapTest from "./MapTest";
import MyEventComponent from "./MyEventComponent";
import StateTest from "./StateTest";
import MissionOne from "./MissionOne_stu";
import MissionTwo from "./MissionTwo_stu";
import MissionThree from "./MissionThree_stu";
import MissionFour from "./MissionFour_stu";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  let data = "Simple React Test";
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent/>}/>
        <Route path="addMember" element={<LoginComponent name="testName"/>}/>
        <Route path="classType" element={<ClsComponent/>}/>
        <Route path="DivComponent" element={<DivComponent/>}/>
        <Route path="dataTest" element={<DataComponent/>}/>
        <Route path="cmpTest" element={<CmpComponent/>}/>
        <Route path="mapTest" element={<MapTest/>}/>
        <Route path="eventTest" element={<MyEventComponent/>}/>
        <Route path="stateTest" element={<StateTest/>}/>
        <Route path="mission1Test" element={<MissionOne/>}/>
        <Route path="mission2Test" element={<MissionTwo/>}/>
        <Route path="mission3Test" element={<MissionThree/>}/>
        <Route path="mission4Test" element={<MissionFour/>}/>
      </Routes>
    </BrowserRouter>

    // <>
    // <h1>첫번째로 만든 React Component</h1>
    // <h2>이 부분을 추가했습니다</h2>
    // <p>{data}</p>
    // {
    //   //for(let i=0;i<10;i++){} 주석처리 {}로 감싸기
    // }

    // </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
