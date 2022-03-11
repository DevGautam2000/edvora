import Box from "@mui/material/Box";
import { closest } from "../utils/logic";

export default function Card({ data, userCode }: any) {
  const { id, origin_station_code, date, station_path, map_url, state, city } =
    data;

  const obj = {
    Ride_id: id,
    Origin_Station: origin_station_code,
    station_path: JSON.stringify(station_path),
    Date: `${new Date(Date.parse(date))}`.split("G")[0],
    Distance: Math.abs(closest(station_path, userCode) - userCode),
  };
  return (
    <Box
      sx={{
        background: "#171717",
        mb: "29px",
        display: "flex",
        alignItems: "center",
        padding: "0.6rem 1rem",
        minHeight: "20vh",
        maxHeight: "20vh",
        height: "20vh",
      }}
    >
      <Box className="image_container" sx={{ flex: 0.2 }}>
        <img src={map_url} width="300" height="150" />
      </Box>
      <Box
        className="data_container"
        sx={{
          flex: 1,
          height: "100%",
          padding: "0.2rem 1rem",
          display: "flex",
        }}
      >
        <Box>
          {Object.keys(obj).map((key,index) => (
            <Box key={`${id}_${key}_${index}`} sx={{ ml: "10px", mb: "5px" }}>
              {key}:
            </Box>
          ))}
        </Box>
        <Box>
          {Object.values(obj).map((key,index) => (
            <Box key={`${id}_${key}_${index}`} sx={{ ml: "10px", mb: "5px" }}>
              {key}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className="name_container"
        sx={{
          flex: 0.3,
          height: "100%",
          whiteSpace: "nowrap",
          fontSize: "0.8rem",
          padding: "0.2rem 1.8rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            background: "#000000",
            padding: "0.3rem 0.8rem",
            borderRadius: "10px",
          }}
        >
          {state}
        </Box>
        <Box
          sx={{
            background: "#000000",
            padding: "0.3rem 0.8rem",
            borderRadius: "10px",
          }}
        >
          {city}
        </Box>
      </Box>
    </Box>
  );
}
