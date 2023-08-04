import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Layout: React.FC = ({ children }) => {
  const mobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {mobile ? <ResponsiveNavbar /> : <Navbar />}
      <Container
        position="relative"
        pt={40}
        maxW="container.md"
        alignSelf="center"
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
