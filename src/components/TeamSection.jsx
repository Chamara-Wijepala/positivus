import { useState, Fragment } from 'react';
import clsx from 'clsx';
import Container from './Container';
import JohnSmith from '../assets/images/john-smith.png';
import JaneDoe from '../assets/images/jane-doe.png';
import MichaelBrown from '../assets/images/michael-brown.png';
import EmilyJohnson from '../assets/images/emily-johnson.png';
import BrianWilliams from '../assets/images/brian-williams.png';
import SarahKim from '../assets/images/sarah-kim.png';
import LinkedInAltIcon from '../assets/icons/linkedin-alt.svg?react';

const memberSet1 = [
	{
		key: 1,
		image: JohnSmith,
		name: 'John Smith',
		title: 'CEO and Founder',
		description:
			'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
	},
	{
		key: 2,
		image: JaneDoe,
		name: 'Jane Doe',
		title: 'Director of Operations',
		description:
			'7+ years of experience in project management and team leadership. Strong organizational and communication skills',
	},
	{
		key: 3,
		image: MichaelBrown,
		name: 'Michael Brown',
		title: 'Senior SEO Specialist',
		description:
			'5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
	},
];
const memberSet2 = [
	{
		key: 4,
		image: EmilyJohnson,
		name: 'Emily Johnson',
		title: 'PPC Manager',
		description:
			'3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
	},
	{
		key: 5,
		image: BrianWilliams,
		name: 'Brian Williams',
		title: 'Social Media Specialist',
		description:
			'4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
	},
	{
		key: 6,
		image: SarahKim,
		name: 'Sarah Kim',
		title: 'Content Creator',
		description:
			'2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
	},
];

export default function TeamSection() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<section className="my-16 md:my-32">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 my-10 md:my-20">
					<h2 className="bg-brand-green-300 text-4xl md:text-[2.5rem] px-1 rounded-lg">
						Team
					</h2>
					<p className="max-w-[45ch] text-center md:text-left">
						Meet the skilled and experienced team behind our successful digital
						marketing strategies
					</p>
				</div>

				<div>
					<div className="grid gap-8 md:gap-10 lg:grid-cols-3 mb-8 md:mb-10">
						{memberSet1.map((member) => (
							<Fragment key={member.key}>
								<TeamMemberCard
									image={member.image}
									name={member.name}
									title={member.title}
									description={member.description}
								/>
							</Fragment>
						))}
					</div>

					<div
						className={clsx(
							isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
							'grid transition-[grid-template-rows] duration-500'
						)}
					>
						<div className="overflow-hidden grid gap-8 md:gap-10 lg:grid-cols-3 mb-8 md:mb-10">
							{memberSet2.map((member) => (
								<Fragment key={member.key}>
									<TeamMemberCard
										image={member.image}
										name={member.name}
										title={member.title}
										description={member.description}
									/>
								</Fragment>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="flex justify-center items-center py-5 md:px-9 bg-brand-dark-900 text-white rounded-xl md:self-start md:ml-auto hover:bg-brand-dark-700 transition-colors duration-300"
					>
						{isExpanded ? 'Collapse' : 'See whole team'}
					</button>
				</div>
			</Container>
		</section>
	);
}

function TeamMemberCard({ image, name, title, description }) {
	return (
		<div className="border-[1px] border-b-4 border-brand-dark-900 rounded-[2.5rem] px-9 py-10">
			<div className="flex gap-5 border-b-[1px] border-brand-dark-900 pb-6 mb-6 md:pb-7 md:mb-7">
				<div className="min-w-max flex">
					<img src={image} alt={name} className="w-[6rem] mt-auto" />
				</div>
				<div className="flex flex-col">
					<LinkedInAltIcon className="ml-auto mb-auto" />
					<h3 className="text-lg md:text-xl font-medium">{name}</h3>
					<h4>{title}</h4>
				</div>
			</div>

			<p>{description}</p>
		</div>
	);
}
