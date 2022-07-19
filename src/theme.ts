import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  components: {
    Input: {
      variants: {
        'app-search': {
          field: {
            bg: 'gray.700',
            borderRadius: '8',
            _focus: {
              shadow: 'outline',
            },
          },
        },
      },
    },
  },
});

export default theme;
