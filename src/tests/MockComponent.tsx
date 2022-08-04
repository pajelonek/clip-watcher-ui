import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../Middleware/store";

export const MockComponent = (props: any) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                {props.children}
            </Provider>
        </BrowserRouter>
    )
}