import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "./card";
import { closest } from "../utils/logic";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import SortIcon from "@mui/icons-material/Sort";
import Button from '@mui/material/Button';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ rides, userCode }: any) {
  // const allStates = rideData.map((singleRide)=>singleRide.state);
  // const allCities = rideData.map((singleRide)=>singleRide.state);

  const nearestRides = rides.sort((a: any, b: any) => {
    if (closest(a.station_path, userCode) > closest(b.station_path, userCode))
      return 1;
    else return -1;
  });

  const upcomingRides = rides.filter((ride: any) => {
    console.log("date1: " + new Date(Date.parse(ride.date)));
    console.log("date2: " + new Date());
    console.log();

    console.log(new Date(Date.parse(ride.date)) > new Date());

    return new Date(Date.parse(ride.date)) > new Date();
  });
  const pastRides = rides.filter((ride: any) => {
    console.log("date1: " + new Date(Date.parse(ride.date)));
    console.log("date2: " + new Date());
    console.log();

    console.log(new Date(Date.parse(ride.date)) < new Date());
    return new Date(Date.parse(ride.date)) < new Date();
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ padding: "0 2rem" }}>
      <Box>
        <Tabs
          value={value}
          sx={{ padding: "0 2rem" }}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ffffff",
            },
          }}
        >
          <Tab
            label="Nearest rides"
            {...a11yProps(0)}
            sx={{ textTransform: "none", color: "#ffffff" }}
          />
          <Tab
            label="Upcoming rides"
            {...a11yProps(1)}
            sx={{ textTransform: "none", color: "#ffffff" }}
          />
          <Tab
            label="Past rides"
            {...a11yProps(2)}
            sx={{ textTransform: "none", color: "#ffffff" }}
          />

          <Button sx={{ml:"auto",display:"flex",alignItems:"center",color:"white",textTransform: "none"}}>
            <SortIcon />
            <span style={{marginLeft:"10px"}}>Filters</span>
          </Button>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {nearestRides.length > 0 ? (
          nearestRides.map((data: any, index: any) => {
            return (
              <Card
                key={`nr_${data.id}_${index}_${data.date}`}
                data={data}
                userCode={userCode}
              ></Card>
            );
          })
        ) : (
          <Alert
            severity="info"
            sx={{ background: "#000000", color: "#ffffff" }}
          >
            <AlertTitle>Info</AlertTitle>
            No Nearest Rides
          </Alert>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {upcomingRides.length > 0 ? (
          upcomingRides.map((data: any, index: any) => {
            return (
              <Card
                key={`ur_${data.id}_${index}_${data.date}`}
                data={data}
                userCode={userCode}
              ></Card>
            );
          })
        ) : (
          <Alert
            severity="info"
            sx={{ background: "#000000", color: "#ffffff" }}
          >
            <AlertTitle>Info</AlertTitle>
            No Upcoming Rides
          </Alert>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {pastRides.length > 0 ? (
          pastRides.map((data: any, index: any) => {
            return (
              <Card
                key={`pr_${data.id}_${index}_${data.date}`}
                data={data}
                userCode={userCode}
              ></Card>
            );
          })
        ) : (
          <Alert
            severity="info"
            sx={{ background: "#000000", color: "#ffffff" }}
          >
            <AlertTitle>Info</AlertTitle>
            No Past Rides
          </Alert>
        )}
      </TabPanel>
    </Box>
  );
}
