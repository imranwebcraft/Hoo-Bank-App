import { clients } from '../constant';
import styles from '../style';

const Client = () => {
	return (
		<section className={`${styles.flexCenter} my-4`}>
			<div className={`${styles.flexCenter} gap-[5px] flex-wrap w-full`}>
				{clients.map((client) => (
					<div
						key={client.id}
						className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}
					>
						<img
							src={client.logo}
							alt="client_log"
							className="w-[100px] sm:w-[180px] object-contain"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Client;
