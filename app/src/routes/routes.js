import { useRoutes } from "react-router-dom";
import Test from "../pages/test_page/Test";

const Routes = () => {
    const routes = useRoutes([
        {
            path: "test_api",
            element: <Test />,
        }
    ])

    return routes;
}

export default Routes