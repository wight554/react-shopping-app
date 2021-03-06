import styled from 'styled-components';

const CatalogStyle = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  & > div {
    margin: 10px;
  }
`;

export default CatalogStyle;
