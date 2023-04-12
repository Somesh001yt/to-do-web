import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Link to="/">Home</Link>
      <Link to="/taskform">Dashboard</Link>
    </Box>
  );
};
export default Navbar;