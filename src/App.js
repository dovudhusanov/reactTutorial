import React, {useEffect, useMemo, useState} from "react";
import './App.css'
import axios from "axios";
// import Count from "./componetns/counter";
// import MyApp from "./componetns/MyApp";
// import MyApp12 from "./componetns/MyApp12";
// import Car from "./componetns/carousel";
import card from "./componetns/card";
// import style from "./style/style.css";
// import Component1 from "./props/Component1";
// import Component2 from "./props/Component2";
// import StateTutorial1 from "./state/StateTutorial1";
// import StateCounter from "./state/StateCounter";
// import LifecycleTutorials from './Lifecycle/LifecycleTutorial'
// import BackendAPI from "./APITutorial/BackendAPI";
// import Nav from "./ReactRouter/Nav"
// import ReactRouter from "./ReactRouter/ReactRouter";
// import About from "./ReactRouter/About";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
// import reactRouter from "./ReactRouter/ReactRouter";
// import about from "./ReactRouter/About";
// import UseState from "./HooksTutorial/UseState";
// import UseEffect from "./HooksTutorial/UseEffect";
// import Hosting from "./Hosting/Hosting";
// import UseEffectTask from "./HooksTutorial/UseEffectTask";
// import ChartTutorial from "./ChartTutorial/ChartsTutorial";
// import ChartComp from "./ChartTutorial/ChartComp";
// import AddValueTask from "./Task/AddValueTask";
// import Lesson from "./componetns/newTeacher/Lesson";
// import PropsTutorial from "./componetns/newTeacher/PropsTutorial/PropsTutorial";
import PropsTutorial from "./componetns/newTeacher/PropsTutorial/PropsTutorial";
import UseState from './componetns/newTeacher/ReactHooks/UseState';
import Hook from "./componetns/newTeacher/ReactHooks/Hook";
// import MyButton from "./componetns/newTeacher/PropsTutorial/MyButton";
import Counter from "./counter";
import AsyncAwait from "./AsyncAwait/AsyncAwait";

function App() {
//
//     const [posts,setPost] = useState([])
//     const [fetchPost,setFetchPost] = useState([])
//     const fetchPostAsync = async () => {
//         const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         setPost(data)
//         console.log("Async get ",posts)
//     }
//
//     const fetchedPost = () => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res=> res.json())
//             .then(data => setFetchPost(data))
//         console.log(" Fetch with api ",fetchPost)
//     }
//
//     useEffect(() => {
//         fetchPostAsync()
//         fetchedPost()
//     },[])


    return (
        <Router>
            <div className="MyApp">
                {/*<Count />*/}
                {/*<MyApp />*/}
                {/*<MyApp12 />*/}
                {/*<Car />*/}
                {/*<Component1 name="Dovudhon" age="16"/>*/}
                {/*<Component2 profession = 'Wev-Developer'/>*/}
                {/*<StateTutorial1 />*/}
                {/*<StateCounter />*/}
                {/*<LifecycleTutorials />*/}
                {/*<BackendAPI />*/}
                {/*<Nav/>*/}
                {/*<Routes>*/}
                {/*    <Route path="/" element={<Home />} />*/}
                {/*    <Route path="/reactRouter" element={<ReactRouter/>}/>*/}
                {/*    <Route path="/about" element={<About/>}/>*/}
                {/*</Routes>*/}
                {/*<UseState/>*/}
                {/*<UseEffect/>*/}
                {/*<Hosting />*/}
                {/*<UseEffectTask />*/}
                {/*<ChartTutorial />*/}
                {/*<ChartComp />*/}
                {/* <AddValueTask /> */}
                {/*<Lesson />*/}
                {/* <PropsTutorial /> */}
                {/* <MyButton>Click</MyButton> */}
                {/*<MyButton />*/}
                {/*<PropsTutorial />*/}
                <Hook />
                {/*<Counter />*/}
                {/*<AsyncAwait />*/}
            </div>
        </Router>
    );
}

// const Home = () => {
//   return(
//       <div>
//           <h1>Welcome To Home page</h1>
//       </div>
//   )
// }

export default App;
