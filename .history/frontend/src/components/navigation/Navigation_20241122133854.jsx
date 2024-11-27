import Navbar from "./navbar";

const Navigation = () => {
    const [mounted, setMounted] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const router = useRouter();
    return (
        <>
            <Navbar onMount={handleNavbarMount}/>
        </>
    );
};

export default Navigation;