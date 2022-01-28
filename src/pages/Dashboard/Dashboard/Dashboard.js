import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-bootstrap";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeRepairServiceOutlined />
          </ListItemIcon>
          <NavLink
            as={Link}
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/"
          >
            <ListItemText primary="Home"></ListItemText>
          </NavLink>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <DashboardCustomizeIcon />
          </ListItemIcon>
          <Link
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/dashboard/add_blogs"
          >
            <ListItemText primary="Post Blog"></ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DashboardCustomizeIcon />
          </ListItemIcon>
          <Link
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/dashboard/user_blog_post"
          >
            <ListItemText primary="User Blog Post"></ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeRepairServiceOutlined />
          </ListItemIcon>
          <Link
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/dashboard/Manage_blogs"
          >
            <ListItemText primary="Manage All Blogs"></ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeRepairServiceOutlined />
          </ListItemIcon>
          <Link
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/dashboard/aprove_users_blog"
          >
            <ListItemText primary="Aprove User's Blogs"></ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HomeRepairServiceOutlined />
          </ListItemIcon>
          <Link
            className="dash-link"
            style={{
              fontWeight: "bold",
            }}
            to="/dashboard/make_admin"
          >
            <ListItemText primary="Make Admin"></ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="dashboard dashboard-home">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
