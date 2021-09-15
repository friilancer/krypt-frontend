import { useSelector } from "react-redux";
import {Route, Redirect} from "react-router-dom";


export const ProtectedRoute =  ({component: Component, ...rest}) => {
    const {token} = useSelector(state => state.auth)

    return (
        <Route
            {...rest}
            render = {(props) => {
                if(token && typeof token === 'string'){
                    return <Component {...props} />
                } else {
                    return <Redirect 
                        to={{
                            pathname:"/signin",
                            state: {
                                from: props.location
                            }
                        }}
                    />
                }

            }}
        >
        </Route>
    );

}