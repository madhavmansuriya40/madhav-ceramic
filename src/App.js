import logo from "../src/assets/logo/madhav_ceramic.svg";
import home_bg from "../src/assets/backgrounds/home_bg.svg";
import "./App.css";

function App() {
	return (
		<div className="home">
			<div className="grid-container">
				<div className="grid">
                    <img src={home_bg} className="grid-image"></img>
                    <div className="main-name-container">
                        <div className="main-logo">
                            <img src={logo}></img>
                        </div>
                        <div className="main-logo-name">
                            Madhav Ceramic
                        </div>
                        <div className="main-logo-tagline">
                            Perfection Redesigned
                        </div>
                    </div>
                    <div className="coming-soon">
                        Coming Soon
                    </div>
				</div>
			</div>
		</div>
	);
}

export default App;
