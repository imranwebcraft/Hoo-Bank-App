import style from './style';

const App = () => {
	return (
		<div className="bg-primary w-full overflow-hidden">
			{/* Navbar Div */}
			<div className={`${style.paddingX} ${style.flexCenter} text-white`}>
				{/* Img */}
				<div className={`${style.boxWidth}`}>Navbar</div>
			</div>

			{/* Hero section */}
			<div className={`bg-primary ${style.flexStart}`}>
				<div className={`${style.boxWidth} text-white`}>Hero Content</div>
			</div>

			{/* Others Section section */}
			<div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
				<div className={`${style.boxWidth} text-white`}>
					Stats Business Billing Car Deal Testimonial Client CTA Footer
				</div>
			</div>
		</div>
	);
};

export default App;
