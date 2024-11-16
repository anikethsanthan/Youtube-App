import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import "./index.css";
function App() {
  return (
    <Provider store={store}>
    <div >
     
     <Head/>
     <Body/>
     
    </div>
    </Provider>
  );
}

export default App;
