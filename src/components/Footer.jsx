import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constant';

const Footer = () => {
	return (
		<footer
			id="footer"
			className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
		>
			<div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
				<div className=" flex-1 flex flex-col justify-start mr-10">
					<img
						src={logo}
						alt="hoo_bank_logo"
						className=" w-[200px] h-[72px] object-contain"
					/>
					<p className={`${styles.paragraph} max-w-[300px]`}>
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>
				<div
					className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0`}
				>
					{footerLinks.map((footerLink, index) => (
						<div
							key={index}
							className=" flex flex-col ss:my-0 my-4 min-w-[150px]"
						>
							<h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white">
								{footerLink.title}
							</h4>
							<ul className={` list-none mt-4`}>
								{footerLink.links.map((link, index) => (
									<li
										key={link.name}
										className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
											index === footerLink.links.length - 1 ? 'mb-0' : 'mb-2'
										}`}
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div
				className={`w-full flex flex-col sm:flex-row justify-between border-t-[1px] border-t-[#3F3E45] pt-6`}
			>
				{/* 1 */}
				<p className="flex-1 font-poppins text-center sm:text-left font-normal text-[18px] leading-[27px] text-white">
					Copyright @ {getYear()} HooBank. All Rights Reserved.
				</p>
				{/* 2 */}
				<div className=" flex-1 flex justify-center sm:justify-end flex-row items-center md:mt-0 mt-6">
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt="social_Media"
							className={`w-[170px h-[22px] object-contain cursor-pointer ${
								index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'
							}`}
						/>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

// Get footer year dynamically based on curent year
const getYear = () => {
	return new Date().getFullYear();
};
