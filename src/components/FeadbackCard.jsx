import { quotes } from '../assets';

const FeadbackCard = ({ card: { content, name, title, img } }) => {
	return (
		<div
			className={`flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] mr-0 sm:mr-5 md:mr-10 my-5 feedback-card`}
		>
			<img
				src={quotes}
				alt="quote"
				className="w-[42px] h-[27px] bg-contain mb-10"
			/>
			<p className=" font-poppins font-normal text-[18px] leading-[32px] mb-6 tracking-[0.35px]">
				{content}
			</p>
			<div className=" flex flex-row">
				<img
					src={img}
					alt="authorImage"
					className="w-[48px] h-[48px] rounded-full"
				/>
				<div className="flex flex-col ml-4">
					<h3 className="font-poppins font-normal text-[20px]">{name}</h3>
					<p className=" font-poppins font-normal text-[16px] text-dimWhite">
						{title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeadbackCard;
