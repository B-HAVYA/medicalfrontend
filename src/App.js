import PredictionPage from "./screen/main";
import Chatbot from "./trash/chat";
import ResponsiveAppBar from "./components/appbar";
import Home from "./screen/home";
import Chatboxnew from "./trash/newchat";
import Chatbota from "./screen/bootchat";
import Chatbotxt from "./trash/chatabota";
import ImagePredict from "./screen/imgpredictor";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    
<div>

<Router>
  <Routes>
  <Route element={<Home/>} path={'/'}/>
  <Route element={<ImagePredict/>} path={'/img'}/>
  
    <Route element={<Chatbota/>} path={'/chat'}/>
  </Routes>
</Router>

    
    
    </div>

  );
}

export default App;
