import React from "react";
import { Button } from "./styled";

interface TSwitcher {
  onToggle: () => void;
}

const SearchResultsSwitcher: React.FC<TSwitcher> = ({
  onToggle
}): JSX.Element => <Button type="button" onClick={onToggle} />;

export default SearchResultsSwitcher;
