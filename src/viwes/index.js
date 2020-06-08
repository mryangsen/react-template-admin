/* eslint-disable no-unused-vars */
// import Loadable from 'react-loadable'
import Loadable from './loadable.js'
import {Loading} from '../components/index.js'
// import Login from "./Login/index"
// import Artical from "./Artical/index"
// import ArticalDetail from "./Artical/ArticalDetail.js"
// import Dashboard from "./Dashboard/index.js"
// import Notification from "./Notification/index"
// import Settings from "./Settings/index"
// import NotFound from "./NotFound/index.js"
// react-loadable懒加载
const Dashboard =Loadable({
    loader:()=>import('./Dashboard/index.js'),
    loading:Loading
})
const Artical =Loadable({
    loader:()=>import('./Artical/index'),
    loading:Loading
})
const ArticalDetail =Loadable({
    loader:()=>import('./Artical/ArticalDetail.js'),
    loading:Loading
})
const Settings =Loadable({
    loader:()=>import('./Settings/index'),
    loading:Loading
})
const Login =Loadable({
    loader:()=>import('./Login/index'),
    loading:Loading
})
const NotFound =Loadable({
    loader:()=>import('./NotFound/index.js'),
    loading:Loading
})
const Notification =Loadable({
    loader:()=>import('./Notification'),
    loading:Loading
})
export {
    Login,
    Artical,
    ArticalDetail,
    Settings,
    Dashboard,
    Notification,
    NotFound
}
