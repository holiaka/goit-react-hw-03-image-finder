import { Component } from 'react';
import { api } from 'services/restApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Div } from './CssForApp/App.styled';

export class App extends Component {
  state = {
    query: '', 
    photoArr: [],
    page: 1,
    totalPages: null,
    isloading: false,
    error: null
  };

  obtainQuery = (evt) => {
    evt.preventDefault();
    const { value } = evt.target.elements.query;
    if (this.state.query !== value.trim()) {
      this.setState({
        query: value.trim(),
        photoArr: [],
        page: 1,
        totalPages: null
      });
    } 
    evt.target.elements.query.value = "";    
  }

  newFetch = async (query, page) => {
    const response = await api(query, page);
    const { hits, totalHits } = response;    
    const imgData = hits.map(item => { return { id: item.id, disc: item.tags, smallImg: item.webformatURL, bigImg: item.largeImageURL } })
    this.setState({
      photoArr: [...this.state.photoArr, ...imgData],
      page: page,
      totalPages: Math.ceil(totalHits/12)
    });   
  }

  clickButton = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }

  componentDidUpdate(_, prevState) {
    const preQuery = prevState.query;
    const prePage = prevState.page;

    const { query, page } = this.state;

    if (preQuery !== query || prePage !== page) {
      try {        
        this.newFetch(query, page);
      }
      catch (error) {
        console.log(error.message);
      }
      
    }
  }
  
  render() {    
    return (
      <Div>
        <Searchbar onSubmit={this.obtainQuery}></Searchbar>
        <ImageGallery imageColection={this.state.photoArr}></ImageGallery>
        <Button onClick={this.clickButton}></Button>       
      </Div>
    );
  }
}
