import { forwardRef } from 'react';
import { Input, InputProps } from '@chakra-ui/react';

const SearchBar = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Input
      ref={ref}
      {...props}
      type="search"
      variant="app-search"
      placeholder="Search a character..."
    />
  );
});

export default SearchBar;
