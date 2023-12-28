import { apple, google, bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
	return (
		<section id="product" className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img
					src={bill}
					alt="billing-image"
					className=" w-[100%] h-[100%] relative z-[5]"
				/>
				<div className=" absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
				<div className=" absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
			</div>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Easily control your billing <br className=" hidden sm:block" /> &
					invoicing.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px]`}>
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>
				<div className={` flex mt-10 gap-5`}>
					<img
						src={apple}
						alt="apple"
						className=" cursor-pointer w-[100%] h-[100%] object-contain"
					/>
					<img
						src={google}
						alt="google"
						className=" cursor-pointer w-[100%] h-[100%] object-contain"
					/>
				</div>
			</div>
		</section>
	);
};

export default Billing;
