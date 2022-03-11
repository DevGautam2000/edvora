import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

const ResponsiveAppBar = ({ name, url }: any) => {
  return (
    <AppBar position="static" sx={{ background: "#101010" }}>
      <Box sx={{ padding: "0 4rem" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
            }}
          >
            Edvora
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: "bold",
            }}
          >
            Edvora
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
            }}
          ></Box>
          <Box sx={{ mr: "25px", fontWeight: "bold" }}> {name} </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Avatar" src={url} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
