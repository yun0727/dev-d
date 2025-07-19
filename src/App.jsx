import "./App.css";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className=" w-[390px] mx-auto bg-white min-h-screen">
      <MainPage />
      <DetailPage />
    </div>
  );
}

export default App;
