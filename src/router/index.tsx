import { createBrowserRouter } from "react-router-dom";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Home } from "../views/Home";
import { Profile } from "../views/Profile";
import { MeetAddView } from "../views/MeetAdd";
import { MeetEditView } from "../views/MeetEdit";
import { LinkView } from "../views/Link";
import { RoomView } from "../views/Room";


export const getRouter = (token: string) => {
    if(!token){
        
        return ([
            {
                path:'*',
                id:'login',
                element: <Login/>
            },
            {
                path:'/register',
                id:'register',
                element: <Register/> 
            }
        ]);
    }else{
        const router = [
            {
                path:'*',
                id:'login',
                element: <Home/>
            }
            
        ];

        const mobile = window.innerWidth <= 992;

        if(!mobile){
            router.push({
                path: '/add',
                id: 'add',
                element: <MeetAddView />
            });

            router.push({
                path: '/edit/:meetId',
                id: 'edit',
                element: <MeetEditView />
            });
        }

        return createBrowserRouter(router);
    }
}