import styles from '../style';
import { feedback } from '../constant';
import FeadbackCard from './FeadbackCard';

const Testimonial = () => {
	return (
		<section
			id="clients"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
		>
			{/* TODO: Gradient */}
			<div className=" absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient -right-[50%]" />

			<div
				className={` w-full flex justify-between items-center flex-col md:flex-row mb-6 md:mb-16 relative z-[1]`}
			>
				<h4 className={styles.heading2}>
					What people are <br className=" hidden md:block" /> saying about us
				</h4>
				<p className={`${styles.paragraph} max-w-[450px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>

			<div className=" flex flex-wrap justify-start sm:justify-center w-full feedback-container relative z-[1]">
				{feedback.map((card) => (
					<FeadbackCard key={card.id} card={card} />
				))}
			</div>
		</section>
	);
};

export default Testimonial;
