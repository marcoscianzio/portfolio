import { Container, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Layout: React.FC = ({ children }) => {
  const mobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      position="relative"
      pt={40}
      maxW="container.md"
      alignSelf="center"
    >
      {mobile ? <ResponsiveNavbar /> : <Navbar />}
      {children}
    </Container>
  );
};

export default Layout;
