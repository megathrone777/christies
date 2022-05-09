import React, { useState } from "react";
import {
  Wrapper,
  InputWrapper,
  Input,
  Button,
  PlaceholderSwitcher
} from "./styled";

const SearchBox: React.FC = (): JSX.Element => {
  const [sold, setSold] = useState<boolean>(true);

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          placeholder={sold ? "search sold lots" : "search upcoming lots"}
        />
        <Button type="button" />
      </InputWrapper>

      <PlaceholderSwitcher onClick={(): void => setSold(!sold)}>
        {sold ? "search upcoming lots" : "search sold lots"}
      </PlaceholderSwitcher>
    </Wrapper>
  );
};

export default SearchBox;
