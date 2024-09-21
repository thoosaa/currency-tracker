import {ChangeEvent, Component} from "react";

import search from "assets/images/search.svg";
import {currency} from "constants/currency";

import {Input, Option, OptionsBlock, SearchContainer} from "./Search.styled";
import {SearchProps, SearchState} from "./types";

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const suggestions =
      value.length > 0
        ? currency.filter((currency) => currency.toLowerCase().includes(value.toLowerCase()))
        : [];

    this.setState({value, suggestions});
    this.props.setSearch(value);
  };

  onSelect = (currency: string) => {
    this.setState({value: currency, suggestions: []});
    this.props.setSearch(currency);
  };

  render() {
    return (
      <SearchContainer>
        <Input
          placeholder="Enter currency"
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
        <img alt="search icon" src={search} />

        {this.state.suggestions.length > 0 && (
          <OptionsBlock>
            {this.state.suggestions.map((suggestion, index) => (
              <Option key={index} onClick={() => this.onSelect(suggestion)}>
                {suggestion}
              </Option>
            ))}
          </OptionsBlock>
        )}
      </SearchContainer>
    );
  }
}

export default Search;
