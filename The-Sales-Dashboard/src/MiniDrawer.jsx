import * as React from "react";
import { styled, useTheme } from "@mui/material/styles"; // Importing styled and useTheme from MUI library
import Box from "@mui/material/Box"; // Importing Box component from MUI library
import MuiDrawer from "@mui/material/Drawer"; // Importing Drawer component from MUI library
import MuiAppBar from "@mui/material/AppBar"; // Importing AppBar component from MUI library
import Toolbar from "@mui/material/Toolbar"; // Importing Toolbar component from MUI library
import List from "@mui/material/List"; // Importing List component from MUI library
import CssBaseline from "@mui/material/CssBaseline"; // Importing CssBaseline component from MUI library
import Typography from "@mui/material/Typography"; // Importing Typography component from MUI library
import Divider from "@mui/material/Divider"; // Importing Divider component from MUI library
import IconButton from "@mui/material/IconButton"; // Importing IconButton component from MUI library
import MenuIcon from "@mui/icons-material/Menu"; // Importing MenuIcon component from MUI library
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"; // Importing ChevronLeftIcon component from MUI library
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importing ChevronRightIcon component from MUI library
import ListItem from "@mui/material/ListItem"; // Importing ListItem component from MUI library
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Importing ShoppingCartIcon component from MUI library
import ListItemIcon from "@mui/material/ListItemIcon"; // Importing ListItemIcon component from MUI library
import ListItemText from "@mui/material/ListItemText"; // Importing ListItemText component from MUI library
import NotificationsIcon from "@mui/icons-material/Notifications"; // Importing NotificationsIcon component from MUI library
import GroupIcon from "@mui/icons-material/Group"; // Importing GroupIcon component from MUI library
import AssignmentIcon from "@mui/icons-material/Assignment"; // Importing AssignmentIcon component from MUI library
import LayersIcon from "@mui/icons-material/Layers"; // Importing LayersIcon component from MUI library
import BarChartIcon from "@mui/icons-material/BarChart"; // Importing BarChartIcon component from MUI library
import DashboardIcon from "@mui/icons-material/Dashboard"; // Importing DashboardIcon component from MUI library

// Define the width of the drawer
const drawerWidth = 240;

// Styling for the opened drawer
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// Styling for the closed drawer
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Styling for the drawer header
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Styling for the app bar
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Styling for the drawer
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// Main function component
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // Function to open the drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Function to close the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar component with position fixed and open prop */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {/* IconButton component with color, aria-label, onClick, edge, and sx props */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* Typography component with variant, noWrap, and component props  */}
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          {/* Notification IconButton component with color and sx props */}
          <IconButton
            color="inherit"
            sx={{
              marginLeft: "auto",
            }}
          >
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer component with variant, open, and sx props */}
      <Drawer variant="permanent" open={open}>
        {/* Drawer header */}
        <DrawerHeader>
          <Typography // Typography component with sx, variant, noWrap, and component props
            sx={{
              flexGrow: 1,
              textAlign: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
            variant="h6"
            noWrap
            component="div"
          >
            Jollibee
          </Typography>
          {/* IconButton component with onClick prop */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        {/*  Divider component */}
        <Divider />

        {/* List component */}
        <List>
          {/* ListItem component with button prop */}
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          {/* ListItem component with button prop */}
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Order" />
          </ListItem>
          {/* ListItem component with button prop */}
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItem>
          {/* ListItem component with button prop */}
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          {/* ListItem component with button prop */}
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
        </List>

        <Divider />

        <List>
          {/* Saved Report */}
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Saved Report" />
          </ListItem>
          {/* Current Month */}
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current Month" />
          </ListItem>
          {/* Last Quarter */}
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last Quarter" />
          </ListItem>
          {/* Year-end Sale */}
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end Sale" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
