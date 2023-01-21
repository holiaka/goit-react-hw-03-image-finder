import { Component } from 'react';
import { api } from 'services/restApi';
import { Searchbar } from './Searchbar/Searchbar';
import {Div} from './CssForApp/App.styled'

export class App extends Component {
  state = {
    query: '',
    page: 0,
    totalPage: 0,
  };

  apiQuery(evt) {
    evt.preventDefault();
    api('cat', 43);
  }

  render() {
    return (
      <Div>
        <Searchbar onSubmit={this.apiQuery}></Searchbar>
      </Div>
    );
  }
}
