import React from 'react';
import styled from 'styled-components';
import next from '../../icons/next.svg';
import search from '../../icons/search.svg';

const SearchBoxContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 30%;
`;

const SearchTextBar = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  position: absolute;
  height: 24px;
  left: 0px;
`;

const SearchActionContainer = styled.div`
  position: absolute;
  right: 0px;
  button {
    margin: 0px 2px;
    background: transparent;
    img {
      vertical-align: middle;
      height: 20px;
    }
  }
  .previous {
    transform: rotate(180deg);
  }
`;

const SearchBar = props => (
  <SearchBoxContainer>
    <SearchTextBar />
    <SearchActionContainer>
      <button className="previous">
        <img src={next} />
      </button>
      <button className="next">
        <img src={next} />
      </button>
      <button>
        <img src={search} />
      </button>
    </SearchActionContainer>
  </SearchBoxContainer>
);

export default SearchBar;
