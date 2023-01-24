import { Component } from 'react';
import { api } from 'services/restApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Div } from './CssForApp/App.styled';

export class App extends Component {
  state = {
    query: '',
    photoArr: [],
    page: 1,
    totalPages: null,
    isLoading: false,
    btnActive: false    
  };

  obtainQuery = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.query;
    const transfValue = value.trim();
    if (transfValue === '') {
      Notify.warning('Please enter a request!!');
      this.setState({
        photoArr: [],
        btnActive: false
      });
      return;
    } else if (this.state.query !== transfValue) {
      this.setState({
        query: transfValue,
        photoArr: [],
        page: 1,
        totalPages: null,
      });
    }
    evt.target.elements.query.value = '';
  };

  newFetch = async (query, exPage) => {
    this.setState({ isLoading: true });
    const response = await api(query, exPage);
    const { hits, totalHits } = response;
    const allPages = Math.ceil(totalHits / 12);

    if (!totalHits) {
      Notify.failure('Unfortunately, nothing was found for your request!');
      this.setState({ isLoading: false });
      return;
    } else if (exPage === 1) {
      Notify.success(
        `The search was successful! ${totalHits} photos are available for viewing!`
      );      
    }
    this.setState({ isLoading: false });

    const imgData = hits.map(item => {
      return {
        disc: item.tags,
        smallImg: item.webformatURL,
        bigImg: item.largeImageURL,
      };
    });

    this.setState({
      photoArr: [...this.state.photoArr, ...imgData],
      page: exPage,
      totalPages: allPages,
    });

    if (exPage < allPages || !totalHits) {
      this.setState({ btnActive: true });
    } else {
      this.setState({ btnActive: false });
    }
  };

  clickButton = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    const preQuery = prevState.query;
    const prePage = prevState.page;
    const { query, page } = this.state;

    if (preQuery !== query || prePage !== page) {
      this.newFetch(query, page);
    }
  }

  render() {
    return (
      <Div>
        <Searchbar onSubmit={this.obtainQuery}></Searchbar>
        <ImageGallery imageColection={this.state.photoArr}></ImageGallery>
        {this.state.isLoading && <Loader />}
        {this.state.btnActive && <Button onClick={this.clickButton}></Button>}
      </Div>
    );
  }
}
