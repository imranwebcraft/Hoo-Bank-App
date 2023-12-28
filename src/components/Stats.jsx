import { stats } from '../constant';
import styles from '../style';

const Stats = () => {
	return (
		<section
			className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
		>
			{stats.map((stat) => (
				<div
					key={stat.id}
					className={` flex-1 flex justify-start items-center flex-row m-3`}
				>
					<h4 className=" font-poppins font-semibold text-[30px] xs:text-[40px] leading-[40px] xs:leading-[55px]">
						{stat.value}
					</h4>
					<p className="font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-3">
						{stat.title}
					</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
