import AmazonLogo from '../assets/images/amazon-logo.svg?react';
import DribbbleLogo from '../assets/images/dribbble-logo.svg?react';
import HubspotLogo from '../assets/images/hubspot-logo.svg?react';
import NotionLogo from '../assets/images/notion-logo.svg?react';
import NetflixLogo from '../assets/images/netflix-logo.svg?react';
import ZoomLogo from '../assets/images/zoom-logo.svg?react';

/*
https://www.youtube.com/watch?v=iLmBy-HKIAw&ab_channel=KevinPowell

Built while following along with this video. I couldn't get it to have more than
two sets of the same logos, so I opted to add a custom breakpoint which will
switch to the desktop version, which works fine with only two sets of logos at
it's max width.
*/

export default function LogoSection() {
	const logoSet1 = [AmazonLogo, DribbbleLogo, HubspotLogo];
	const logoSet2 = [NotionLogo, NetflixLogo, ZoomLogo];
	const fullLogoSet = [...logoSet1, ...logoSet2];

	return (
		<section aria-hidden="true" className="my-16 md:mt-[4.5rem] md:mb-36">
			<div className="max-w-[77.5rem] mx-auto">
				{/* Mobile logos */}
				<div
					// Not supported by tailwind
					style={{
						mask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)',
					}}
					className="overflow-hidden xs:hidden"
				>
					{/*
          If changing the gap, change the subtraction value in tailwind.config.js
          to be half the value applied here.
          */}
					<ul className="flex gap-[2.5rem] my-4 w-max animate-[scroll_25s_forwards_linear_infinite]">
						{[...logoSet1, ...logoSet1].map((Logo, index) => (
							<li key={index} className="max-w-32">
								<Logo />
							</li>
						))}
					</ul>

					<ul className="flex gap-[2.5rem] my-4 w-fit animate-[scroll_25s_reverse_linear_infinite]">
						{[...logoSet2, ...logoSet2].map((Logo, index) => (
							<li key={index} className="max-w-32">
								<Logo />
							</li>
						))}
					</ul>
				</div>

				<div className="px-5">
					<div
						// Not supported by tailwind
						style={{
							mask: 'linear-gradient(90deg, transparent, white 20% 80%, transparent)',
						}}
						className="overflow-hidden hidden xs:block"
					>
						{/*
            If changing the gap, change the subtraction value in tailwind.config.js
            to be half the value applied here.
            */}
						<ul className="flex gap-[5rem] my-4 w-max animate-[scroll-desktop_40s_forwards_linear_infinite]">
							{[...fullLogoSet, ...fullLogoSet].map((Logo, index) => (
								<li key={index} className="max-w-32">
									<Logo />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
