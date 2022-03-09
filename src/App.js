import React, {Component} from "react";
import Header from "./common/header";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Writer from "./pages/write";
import store from "./store";

class App extends Component {
    render() {
        return (
            // provider 里边的组件就可以使用store的数据
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        {/*    这个区块的使用路由*/}
                        {/*exact 的意思是，只有当路径完全相同的时候才会访问，前缀匹配不行*/}
                        {/*component表示访问Home这个组件*/}
                        <Header></Header>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/write' exact component={Writer}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
