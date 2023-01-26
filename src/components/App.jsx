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
    btnActive: false,
    showModal: false,
    srcSelectPhoto: '',
  };

  addSearchQueryParam = obj => {
    this.setState(obj);
  };

  clickButton = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  switchModal = evt => {
    const { currentSrc } = evt.target;
    if (!currentSrc) {
      this.setState({
        showModal: false,
        isLoading: false,
        srcSelectPhoto: '',
      });
    } else if (currentSrc) {    
      this.setState({
        showModal: true,
        isLoading: true,
        srcSelectPhoto: currentSrc,
      });
      window.setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
  };

  async componentDidUpdate(_, prevState) {
    const preQuery = prevState.query;
    const prePage = prevState.page;
    const { query, page } = this.state;

    if (preQuery !== query || prePage !== page) {
      this.setState({ isLoading: true });
      const response = await api(query, page);
      if (!response) {
        this.setState({ isLoading: false });
        return;
      }
      const { hits, totalHits } = response;
      const allPages = Math.ceil(totalHits / 12);

      if (!totalHits) {
        Notify.failure('Unfortunately, nothing was found for your request!');
        this.setState({ isLoading: false });
        return;
      } else if (page === 1) {
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
        page: page,
        totalPages: allPages,
      });

      if (page < allPages || !totalHits) {
        this.setState({ btnActive: true });
      } else {
        this.setState({ btnActive: false });
      }
    }
  }

  render() {
    return (
      <Div>
        <Searchbar
          onSubmit={this.addSearchQueryParam}
          state={this.state}
        ></Searchbar>
        <ImageGallery
          state={this.state}
          switchModal={this.switchModal}
        ></ImageGallery>
        {this.state.isLoading && <Loader />}
        {this.state.btnActive && <Button onClick={this.clickButton}></Button>}
      </Div>
    );
  }
}
