import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBarView from "./components/NavBarView";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import './App.css';
const App = () => {
  // Check user's system preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // State to manage theme mode, initialized with system preference
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const handleThemeChange = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <NavBarView darkMode={darkMode} onThemeChange={handleThemeChange} />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2, // Optional padding for content
          }}
        >
          <Outlet />
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
