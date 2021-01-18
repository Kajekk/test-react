import React from 'react';
import {
    AppBar,
    Badge,
    Box,
    fade,
    Grid,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import withStyles from "@material-ui/core/styles/withStyles";
import GitHubIcon from "../assets/svg/Octicons-mark-github.svg";
import {AccountCircle} from "@material-ui/icons";

const useStyles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        // flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            marginRight: 16,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 16,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    picture: {
        color: "white",
        width: 150,
        height: 150,
        [theme.breakpoints.only("md")]: {
            width: 32,
            height: 32,
            "& img": {
                width: 32,
                height: 32
            }
        },
        [theme.breakpoints.only("lg")]: {
            width: 110,
            height: 110,
            "& img": {
                width: 60,
                height: 60,
                color: "white"
            }
        },
    },
    navbar: {
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        backgroundColor: "#24292e",
    }
})

function MyAppBar({classes}) {
    const menuId = 'primary-search-account-menu';
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        // handleMobileMenuClose();
    };

    return (
        <React.Fragment>
            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                    <Box m={2} className={classes.picture}>
                        <img src={GitHubIcon}/>
                    </Box>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Box className={classes.search}>
                                <Box className={classes.searchIcon}>
                                    <SearchIcon/>
                                </Box>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Box>
                        </Grid>
                        {/*<div className={classes.search}>*/}
                        {/*    */}
                        {/*</div>*/}
                        <Grid item sm container direction="row" justify="flex-start">
                            <Typography className={classes.title} variant="subtitle2" noWrap>
                                Pull requests
                            </Typography>
                            <Typography className={classes.title} variant="subtitle2" noWrap>
                                Issues
                            </Typography>
                            <Typography className={classes.title} variant="subtitle2" noWrap>
                                Marketplace
                            </Typography>
                            <Typography className={classes.title} variant="subtitle2" noWrap>
                                Explore
                            </Typography>
                        </Grid>
                        <Grid item xs={3} container direction="row" justify="flex-end">
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <MenuAccount
                anchorEl={anchorEl}
                menuId={menuId}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
            />
        </React.Fragment>
    )
}

function MenuAccount({anchorEl, menuId, isMenuOpen, handleMenuClose}) {
    return (
        <React.Fragment>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default withStyles(useStyles)(MyAppBar)