import { useState, Fragment } from 'react';
import clsx from 'clsx';
import Container from './Container';
import PlusIcon from '../assets/icons/plus.svg?react';
import MinusIcon from '../assets/icons/minus.svg?react';

const panels = [
	{
		number: '01',
		heading: 'Consultation',
		body: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
	},
	{
		number: '02',
		heading: 'Research and Strategy Development',
		body: 'Once we understand your business goals and target audience, we conduct thorough market research to analyze industry trends, competitor strategies, and audience behavior. Based on these insights, we craft a customized marketing strategy that outlines clear objectives, key messaging, and the most effective channels to reach your target audience. This foundational stage ensures that your marketing efforts are data-driven and positioned for success.',
	},
	{
		number: '03',
		heading: 'Implementation',
		body: "With a well-defined strategy in place, we move into the implementation phase. Our team works efficiently to execute the planned campaigns, ensuring each tactic is aligned with your brand's goals. Whether it’s content creation, ad placements, or social media management, we handle all aspects to drive engagement and results.",
	},
	{
		number: '04',
		heading: 'Monitoring and Optimization',
		body: "We track your campaign's performance closely and make adjustments as needed to improve results. By analyzing key metrics, we ensure your strategy stays effective and drives continuous growth.",
	},
	{
		number: '05',
		heading: 'Reporting and Communication',
		body: 'We provide regular updates on your campaign’s progress through detailed reports. Clear and transparent communication ensures you’re always informed and involved in the process.',
	},
	{
		number: '06',
		heading: 'Continual Improvement',
		body: 'We believe in ongoing growth. After each campaign, we assess performance, gather insights, and refine strategies to ensure long-term success and adaptation to market changes.',
	},
];

export default function AccordionSection() {
	return (
		<section className="my-16 md:my-32">
			<Container>
				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 px-5 my-10 md:my-20">
					<h2 className="bg-brand-green-300 text-4xl md:text-[2.5rem] px-1 rounded-lg">
						Our working process
					</h2>
					<p className="max-w-[30ch] text-center md:text-left">
						Step-by-Step Guide to Achieving Your Business Goals
					</p>
				</div>

				<div className="flex flex-col gap-5 md:gap-8">
					{panels.map((panel) => (
						<Fragment key={panel.number}>
							<AccordionPanel
								number={panel.number}
								heading={panel.heading}
								body={panel.body}
							/>
						</Fragment>
					))}
				</div>
			</Container>
		</section>
	);
}

function AccordionPanel({ number, heading, body }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={clsx(
				isOpen ? 'bg-brand-green-300' : 'bg-brand-gray-200',
				'border-[1px] border-b-4 border-brand-dark-900 px-8 py-2 md:p-12 rounded-[2.5rem] transition-colors duration-300'
			)}
		>
			<div className="border-brand-dark-900 flex items-center gap-3 md:gap-6">
				<h3 className="text-3xl md:text-6xl font-medium">{number}</h3>

				<h4 className="text-lg md:text-xl font-medium">{heading}</h4>

				<button onClick={() => setIsOpen(!isOpen)} className="ml-auto">
					{isOpen ? (
						<MinusIcon className="max-w-8 md:max-w-14" />
					) : (
						<PlusIcon className="max-w-8 md:max-w-14" />
					)}
				</button>
			</div>

			<div
				className={clsx(
					isOpen ? 'grid-rows-[1fr]' : ' grid-rows-[0fr]',
					'grid transition-[grid-template-rows] duration-300'
				)}
			>
				<p
					className={clsx(
						isOpen
							? 'border-t-[1px] py-4 md:pt-8 md:pb-0 mt-4 md:mt-8 opacity-100'
							: 'border-t-0 py-0 mt-0 opacity-0',
						'overflow-hidden border-brand-dark-900'
					)}
				>
					{body}
				</p>
			</div>
		</div>
	);
}
