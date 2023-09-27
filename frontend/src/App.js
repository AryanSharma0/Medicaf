import { BrowserRouter as Router } from "react-router-dom";
import RouteControl from "./RouteControl";
import { Provider } from "react-redux";
import "./Style/output.css"
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouteControl />
      </Router>
    </Provider>
  );
}

export default App;
