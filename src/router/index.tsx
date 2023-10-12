import { createBrowserRouter } from "react-router-dom";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Home } from "../views/Home";
<<<<<<< HEAD
import { Profile } from "../views/Profile";
import { MeetAddView } from "../views/MeetAdd";
import { MeetEditView } from "../views/MeetEdit";
import { LinkView } from "../views/Link";
import { RoomView } from "../views/Room";
=======
>>>>>>> parent of 6194cba (Aula 04 Parte 01)


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
<<<<<<< HEAD
            },
            {
                path: '/user',
                id: 'user',
                element: <Profile />
            },
            {
                path: '/room/:link',
                id: 'room',
                element: <RoomView />
=======
>>>>>>> parent of 6194cba (Aula 04 Parte 01)
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
        }else{
            router.push({
                path: '/link',
                id: 'link',
                element: <LinkView />
            });
        }

        return createBrowserRouter(router);
    }
}