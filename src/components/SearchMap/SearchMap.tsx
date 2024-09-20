import {Component} from "react";
import styled from "styled-components";

import {LayoutContainer} from "components/Layout/Layout.styled";
import Map from "components/Map/Map";
import Search from "components/Search/Search";

const SearchMapContainer = styled(LayoutContainer)`
  background: ${({theme}) => theme.background};
`;

class SearchMap extends Component {
  render() {
    return (
      <SearchMapContainer>
        <Search />
        <Map />
      </SearchMapContainer>
    );
  }
}

export default SearchMap;
