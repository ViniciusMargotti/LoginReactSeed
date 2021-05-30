import {useState,useEffect} from "react";
import api from "../../api/api";
import API from "../../api/api";
import {history} from "../../history";
import {store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(token);
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    function handleLogin(values) {
        API.post('http://localhost:8090/authenticate', values)
            .then((resp) => {

                if (!resp) {
                    return;
                }

                const {data} = resp

                if (data) {
                    api.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
                    setAuthenticated(true);
                    localStorage.setItem('token', JSON.stringify(data.token))
                    history.push('/home');
                }

            }).catch((error) => {

            store.addNotification({
                title: 'Atenção',
                message: error.message,
                type: 'danger',                         // 'default', 'success', 'info', 'warning'
                container: 'top-right',                // where to position the notifications
                animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                dismiss: {
                    duration: 3000
                }
            });
        });
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = undefined;
        history.push('/login');
    }

    return {authenticated,loading,handleLogin,handleLogout};
}
