import { useState, useEffect ,useCallback } from "react";

const useNavigation = navRef => {
    const MOBILE_BREAKING_POINT = 992;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getScreenSize = () => {
        setIsMobileView(window.innerWidth < MOBILE_BREAKING_POINT ? true : false);
    };

const handleScroll = useCallback(() => {
        setIsMenuOpen(false);
    }, []);
    
const handleClickOutside = useCallback(
        e => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        },
        [navRef]
    );    

    useEffect(() => {
        getScreenSize();
        window.addEventListener('resize', getScreenSize);
        return () => window.removeEventListener('resize', getScreenSize);
    }, []);

     useEffect(() => {
        if (isMenuOpen) window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen, handleScroll]);

    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    };

    export default useNavigation;