import { MobileNavbarComponent } from "@/components/navbar/mobilenavbar";
import type { Metadata } from "next";
import Info from "./info";
interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    return {
		title: `${decodeURIComponent(params.slug)}`,
	};
}

export default async function Page(props: Props) {
    const params = await props.params;
    return (
		<MobileNavbarComponent>
			<div className="dark:bg-black bg-white">
				<div className="max-w-3xl mx-auto ">
					<Info
						params={{
							slug: params.slug,
						}}
					/>
				</div>
			</div>
		</MobileNavbarComponent>
	);
}
