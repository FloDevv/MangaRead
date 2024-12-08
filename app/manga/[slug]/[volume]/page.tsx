import CheckPage from "@/components/checkpage";
import VolumeSelect from "@/components/select/volumeselect";
import "@/app/mangapage.css";
import { getDetails } from "@/app/types/getDetails";
import type { Metadata } from "next";

type Props = {
	params: Promise<{ slug: string; volume: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    return {
		title: `${decodeURIComponent(params.slug)}`,
	};
}

export default async function Page(props: Props) {
    const params = await props.params;
    const details = await getDetails(params.slug, { mangaOnly: true });

    if (!details || !("volumes" in details) || !details.volumes) {
		return <div>Error 404</div>;
	}

    const volumes = details.volumes.map((volume) => ({
		name: volume.name,
		totalPages: volume.totalPages,
		type: volume.type,
	}));

    const volumeDetails = volumes.find((volume) => volume.name === params.volume);
    const totalPages = volumeDetails ? volumeDetails.totalPages : 0;

    return (
		<div className="overflow-x-hidden overflow-y-hidden">
			<div className="flex flex-wrap justify-center ">
				<h1 className="w-full text-center text-3xl my-4">
					{decodeURIComponent(params.slug)}
				</h1>

				<VolumeSelect
					volumes={volumes}
					slug={params.slug}
					currentVolume={params.volume}
					isPage={true}
				/>
			</div>
			<CheckPage params={params} totalPages={totalPages} volumes={volumes} />
		</div>
	);
}
