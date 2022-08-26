import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import AddNewBlog from './components/addNewBlog';
import BlogDetails from './components/blogDetails';
import NotFound from './components/notFound';
import Footer from './components/footer';
import './style.css';

const Fn1 = () => {
    return (
        <Router>
            <Nav />
                <div className='mainContainer'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/Create your blog'>
                            <AddNewBlog />
                        </Route>
                        <Route exact path='/blog/:id'>
                            <BlogDetails />
                        </Route>
                        <Route path='*'>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            <Footer/>
        </Router>
    );
}

ReactDOM.render(<Fn1 />, document.getElementById('root'));