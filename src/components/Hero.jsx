import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
	return (
		<section
			id="home"
			className={`flex flex-col md:flex-row ${styles.paddingY}`}
		>
			{/* Left Side */}
			<div className={`${styles.flexStart} flex-1 flex-col xl:px-0`}>
				<div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img
						src={discount}
						alt="discountImg"
						className=" w-[32px] h-[32px]"
					/>
					<p className={`${styles.paragraph} ml-2`}>
						<span className=" text-white">20%</span> Discount For {''}
						<span className=" text-white">1 Month</span> Account
					</p>
				</div>

				<div className=" flex flex-row justify-between items-center w-full">
					<h1 className=" flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] leading-[72px] ss:leading-[100px]">
						The Next <br className="hidden sm:block" />
						<span className=" text-gradient">
							{' '}
							Generation <br className="hidden sm:block" />
						</span>
					</h1>
					<div className="hidden ss:flex md:mr-4 mx-0">
						<GetStarted />
					</div>
				</div>
				<h1 className="font-poppins font-semibold text-[52px] ss:text-[68px] leading-[72px] ss:leading-[100px]">
					Payment Method.
				</h1>

				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
			</div>
			{/* Right Side */}
			<div
				className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
			>
				<img
					src={robot}
					alt="robotImg"
					className=" w-[100%] h-[100%] relative z-[5]"
				/>
				<div className=" absolute z-[0] top-0 pink__gradient w-[40%] h-[40%]" />
				<div className=" absolute z-[1] bottom-40 white__gradient w-[80%] h-[80%] rounded-full" />
				<div className=" absolute z-[0] right-20 bottom-20 blue__gradient w-[50%] h-[50%]" />
			</div>

			{/* Get started for mobile device */}
			<div className={` ss:hidden ${styles.flexCenter}`}>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
