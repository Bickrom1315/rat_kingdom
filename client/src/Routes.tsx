import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Loading from "./pages/splash/Loading";
import SplashLayout from "./Layouts/SplashLayout";
import Premium from "./pages/splash/Premium";
import Age from "./pages/splash/Age";
import Username from "./pages/splash/Username";
import ChannelJoined from "./pages/splash/ChannelJoined";
import Home from "./pages/apps/Home";
import Collaboration from "./pages/apps/Collaboration";
import Leaderboard from "./pages/apps/Leaderboard";
import Friends from "./pages/apps/Friends";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'collaboration',
                element: <Collaboration/>
            },
            {
                path: 'leaderboard',
                element: <Leaderboard/>
            },
            {
                path: 'friends',
                element: <Friends/>
            },  
        ]
    },
    {
        path: '/splash',
        element: <Loading />,
    },

    {
        path: '/new-comer',
        element: <SplashLayout/>,
        children: [
            {
                index: true,
                element: <Premium />
            },
            {
                path: 'age',
                element: <Age />
            },
            {
                path: 'username',
                element: <Username />
            },
            {
                path: 'channel-joined',
                element: <ChannelJoined />
            }
        ]
    }
]);

export default Routes;