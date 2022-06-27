/* COMPONENTS */
import Router from "./components/Router";

/* STYLES */
import "./constants/globalStyles.css";

function App() {
    console.log(
        "%cHi!, I can see you are curious enough to reach this message...\n\nIf you’re looking for someone like you to fit into your front-end team, feel free to contact me :)",
        "font-size: 20px; color: white; background: black",
    );
    return <Router />;
}

export default App;
