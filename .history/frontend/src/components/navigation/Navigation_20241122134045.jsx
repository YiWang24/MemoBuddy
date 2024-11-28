import Navbar from "./navbar";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Navbar onMount={handleNavbarMount} isAuthenticated />; // 骨架屏
  }

  return (
    <>
      <Navbar onMount={handleNavbarMount} isAuthenticated />
    </>
  );
};

export default Navigation;