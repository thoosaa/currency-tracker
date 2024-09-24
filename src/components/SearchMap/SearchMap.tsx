import {Component} from "react";

import Map from "components/Map/Map";
import Search from "components/Search/Search";

import {SearchMapContainer} from "./SearchMap.styled";
import {SearchMapState} from "./types";

class SearchMap extends Component<{}, SearchMapState> {
  state: SearchMapState = {
    searchQuery: "",
  };

  handleSearch = (text: string) => {
    this.setState({searchQuery: text});
  };

  render() {
    return (
      <SearchMapContainer>
        <Search setSearch={this.handleSearch} />
        <Map searchQuery={this.state.searchQuery} />
      </SearchMapContainer>
    );
  }
}

export default SearchMap;
