import PlayerLive from "./playerLive";

export default async function Page() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black">
			<PlayerLive />
		</div>
	);
}
