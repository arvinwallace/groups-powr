import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { borderRadius } from '@mui/system';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor:'#eee',
          marginBottom:'20px'
        },
      },
    },
  },
});

export default function FreeSolo() {
  return (
    <Autocomplete
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <ThemeProvider theme={theme}>
          <TextField
            placeholder="Search Groups"
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            />
            </ThemeProvider>
        )}
        />
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 }
]