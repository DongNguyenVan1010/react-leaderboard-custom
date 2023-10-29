import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Todos from './components/Todos';
import Album from './components/Album';
import Posts from './components/Posts';
import { Outlet, useNavigate } from 'react-router';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Apps() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleNavigate(e) {
    const value = e.target.textContent.toLowerCase();
    setValue(value);
    navigate(value)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onClick={handleNavigate} aria-label="basic tabs example">
          <Tab label="Todo" {...a11yProps(0)} />
          <Tab label="Album" {...a11yProps(1)} />
          <Tab label="Post" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <Outlet />
      {/* <CustomTabPanel value={value} index={0}>
        <Todos />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Album />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Posts />
      </CustomTabPanel> */}
    </Box>
  );
}
