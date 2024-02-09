import { AppBar, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Box sx={{ display: "flex", padding: 2, gap: 2 }}>
          <Link
            style={{
              color: "black",
            }}
            to="/"
          >
            Go to home page
          </Link>

          <Link
            style={{
              color: "black",
            }}
            to="/characters"
          >
            Go to characters
          </Link>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};
