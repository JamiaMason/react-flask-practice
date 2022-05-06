import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './views/About';
import Home from './views/Home';
import news from './views/news';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'shoha',
      age : 9000,
      people: {'andrew', 'david', 'tyler'}
    }
  
  }
  
  happy Birthday = () => {
    this.setState(
      {age: this.state.age +1}
  }
};

componentDidMount() {
  //console.log("MAIN APP: I have mounted")
}

render () {
  //console.log('MAIN APP': I have rendered')
  return (
    <div>
    <Navbar myName(this.state.name) />
    (/* <h1>Hi, I am (this.state)['name']} and may age is (this.state.age)</h1>)
  <button onClick=(()=>this.happyBirthday()}Happy Birthday</button> */}
  <Routes>
  <Route path = "/" element =[Home name = {this.state.name}/>}/>
  <Route path = "/about" element={<About myClass={this.state.people}/>}/>}
  <Route path = "/about" element={<News myClass={this.state.people}/>}/>}
</Routes>
    </div>
  )
}