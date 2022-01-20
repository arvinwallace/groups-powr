import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useGroupContext } from '../components/ContextComponent'
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
  const {state, dispatch} = useGroupContext();
  console.log(state.groups)
  return (
    <Autocomplete
        disableClearable
        options={state.groups.map((option) => option.name)}
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
