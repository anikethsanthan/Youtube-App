import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import "./index.css";
import MainContainer from "./Components/MainContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div >
     
     <Head/>
     <RouterProvider router ={appRouter}/>
     
    </div>
    </Provider>
  );
}

export default App;
