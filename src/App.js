import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import NavBar from './component/navBar';
import getTabs from './api/api';
import { Route, Switch } from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    };
  }

  async componentDidMount() {
    let tabs = await getTabs();
    this.setState({ tabs: tabs });
  }

  render() {
    return (
      <div className="App">

        <NavBar tabs={this.state.tabs} />

        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            {
              this.state.tabs.map(tab =>
                <Route
                  key={tab.order}
                  path={`/${tab.id}/`}
                  component={lazy(() => import('./tabs/' + tab.id))}
                />)
            }
          </Suspense>
        </Switch>

      </div>
    );
  }
}
//{this.state.tabs.map(tab => <Route path={tab.id} component={lazy(() => import('./tabs/'+tab.id))} />)}


/*
            <Route exact path={'/dummyList/'} component={DummyList} />
            <Route exact path={'/dummyChart/'} component={DummyChart} />
            <Route exact path={'/dummyTable/'} component={DummyTable} />

*/

export default App;
