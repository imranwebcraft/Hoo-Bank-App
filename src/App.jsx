import style from './style';
import {
	Navbar,
	Hero,
	Stats,
	Billing,
	Business,
	CardDeal,
	Client,
	CTA,
	Footer,
	Testimonial,
} from './components/index';

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			{/* Navbar Div */}
			<div className={`${style.paddingX} ${style.flexCenter}`}>
				{/* Img */}
				<div className={`${style.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			{/* Hero section */}
			<div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
				<div className={`${style.boxWidth} text-white`}>
					<Hero />
				</div>
			</div>

			{/* Others Section section */}
			<div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
				<div className={`${style.boxWidth} text-white`}>
					<Stats /> <Business /> <Billing /> <CardDeal /> <Testimonial />
					<Client /> <CTA /> <Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
