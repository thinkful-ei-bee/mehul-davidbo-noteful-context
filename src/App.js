import React from 'react';
import {Route,Link} from 'react-router-dom'
import HomePage from './HomePage'
import FolderList from './FolderList'
import NoteList from './NoteList'
import NotePage from './NotePage'
import STORE from './STORE'
import './App.css';
import NotefulContext from './NotefulContext'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      STORE:STORE,
      fromOrigin: true
    }
  }

   changeOrigin = (boolean) => {
    if(this.state.fromOrigin!==boolean){
      this.setState({
      fromOrigin:boolean
    });
  }
  }

  render(){
  return (
    <NotefulContext.Provider value={{ store: this.state.STORE, fromOrigin:this.state.fromOrigin, changeOrigin:this.changeOrigin }}>
    <main className='App'>

    <section>
     <Route path='/' render={() => <HomePage />} />
     <Route exact path='/' render={() => <FolderList />}/>
     <Route exact path='/' render={() => <NoteList />}  />
    </section>

    <section>
     <Route path='/Folder/:id' render={() => <FolderList />} />
     <Route path='/Folder/:id' render={(props) => <NoteList match={props.match}  />}  />
    </section>

    <section>
      <Route path='/Note/:id' render={(props) => <NotePage match={props.match}  />} />
    </section>

    </main>
   </NotefulContext.Provider>

  );
  }
}

export default App;