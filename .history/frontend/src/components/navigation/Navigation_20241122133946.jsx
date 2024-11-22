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
        return <div className="h-16 bg-white border-b-2 border-black"></div>; // 骨架屏
      }
      
    return (
        <>
            <Navbar onMount={handleNavbarMount}/>
        </>
    );
};

export default Navigation;