import { ReactComponent as Lupa } from "../../assets/lupa.svg";
import { SearchBox } from "./style";

const SearchBar = (props) => {
  return (
    <SearchBox>
      <Lupa />
      <input type="text" placeholder={props.placeholder} />
    </SearchBox>
  );
};

export default SearchBar;
