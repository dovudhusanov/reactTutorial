import React, {useEffect, useMemo, useState} from "react";
import './App.css'

// import axios from "axios";
// import Count from "./componetns/counter";
// import MyApp from "./componetns/MyApp";
// import MyApp12 from "./componetns/MyApp12";
// import Car from "./componetns/carousel";
// import card from "./componetns/card";
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
import {Form} from "reactstrap";
import ReduxApp from "./ReduxTutorial/ReduxApp";
import {Provider} from "react-redux";
import store from "./ReduxTutorial/configStore";
import UseReducer from "./ReduxTutorial/UseReducer/UseReducer";
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
// import PropsTutorial from "./componetns/newTeacher/PropsTutorial/PropsTutorial";
// import UseState from './componetns/newTeacher/ReactHooks/UseState';
// import Hook from "./componetns/newTeacher/ReactHooks/Hook";
// import MyButton from "./componetns/newTeacher/PropsTutorial/MyButton";
// import Counter from "./counter";
// import AsyncAwait from "./AsyncAwait/AsyncAwait";
// import MyButton from "./componetns/newTeacher/PropsTutorial/MyButton";
// import SignIn from "./componetns/newTeacher/PropsTutorial/SignIn/SignIn";
// import ReactRouter from "./ReactRouter/ReactRouter";
// import About from "./ReactRouter/About";
// import Nav from "./ReactRouter/Nav";
// import {privateRoutes, publicRoutes} from './componetns/newTeacher/PropsTutorial/Route/Router'
// import AppRouter from "./componetns/newTeacher/PropsTutorial/Router/AppRouter";
// import {AuthContext} from "./componetns/newTeacher/PropsTutorial/ContextNew";
// import MainPageSBBR from "./componetns/Samar Badriddinov basic react/MainPageSBBR";
// import data from "./PracticeReact/According/data";
// import Form from "./componetns/newTeacher/form";

function App() {
//
//     const [user,setUser] = useState({
//         name:'',
//         age:""
//     })

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

    // const [isAuth, setIsAuth] = useState(false)
    // const [btnSign, setBtnSign] = useState('Sign In')
    //
    // useEffect(() => {
    //     if (localStorage.getItem('auth')) {
    //         setIsAuth(true)
    //     }
    //     if (localStorage.getItem('log')) {
    //         setBtnSign('Log out')
    //     }
    // }, [])
    //
    // const [users, setUsers]  = useState({
    //     name: '',
    //     age: ''
    // })


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
                {/*<AuthContext.Provider value={{isAuth, setIsAuth, btnSign, setBtnSign}}>*/}
                {/*    <Nav/>*/}
                {/*    <AppRouter />*/}
                {/*</AuthContext.Provider>*/}
                {/*<UseState/>*/}
                {/*<UseEffect/>*/}
                {/*<Hosting />*/}
                {/*<UseEffectTask />*/}
                {/*<ChartTutorial />*/}
                {/*<ChartComp />*/}
                {/* <AddValueTask /> */}
                {/*<Lesson />*/}
                {/*<PropsTutorial />*/}
                {/*<Hook />*/}
                {/*<Counter />*/}
                {/*<AsyncAwait />*/}
                {/*<MainPageSBBR />*/}
                <Provider store={store}>
                    <ReduxApp />
                </Provider>
                {/*<UseReducer />*/}
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
