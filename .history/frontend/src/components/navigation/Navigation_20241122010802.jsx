import Navbar from "./navbar";

const Navigation = () => {
  const [isNavbarMounted, setIsNavbarMounted] = useState(false);

  const handleNavbarMount = () => {
    setIsNavbarMounted(true); // Trigger page rendering when Navbar is ready
  };

  if (!isNavbarMounted) {
    return <LoadingScreen />; // Show loading until Navbar mounts
  }
  return (
    <>
      <Navbar onMount={handleNavbarMount} />
    </>
  );
};

export default Navigation;
