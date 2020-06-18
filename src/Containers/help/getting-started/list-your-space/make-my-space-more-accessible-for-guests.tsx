import React from 'react';
import BreadCrumbs from "../../bread-crumbs";
import HelpSection from "../../help-section";

const panelData = [
	{
		id: 0,
		heading: 'Getting Started',
		children: [
			{
				id: '01',
				name: 'Deciding to host',
				description: 'Understand Airbnb’s quality standards and the legal requirements for hosts. Learn how to prepare for hosting by creating a listing, talking to neighbours, and communicating with potential guests.',
				links: [
					{
						linkId: 'l011',
						linkName: 'New hosts',
						links: [
							{
								linkId: 'whats-the-airbnb-friendly-buildings-programme',
								linkName: 'What\'s the Airbnb Friendly Buildings Programme?'
							},
							{
								linkId: 'who-can-host-on-airbnb',
								linkName: 'Who can host on Airbnb?'
							},
							{
								linkId: 'l0113',
								linkName: 'I’d like to create a listing in China, what do I need to know?'
							},
							{
								linkId: 'l0114',
								linkName: 'How can I prepare to host?'
							},
							{
								linkId: 'l0115',
								linkName: 'What is the Earnings Guarantee programme for new hosts?'
							},
							{
								linkId: 'l0116',
								linkName: 'How should I talk to my landlord about hosting on Airbnb?'
							},
							{
								linkId: 'l0117',
								linkName: 'How do I become a host of a place to stay?'
							},
							{
								linkId: 'l0118',
								linkName: 'Why am I being asked to add account details?'
							},
							{
								linkId: 'l0119',
								linkName: 'Why can’t I check a guest’s profile photo?'
							},
							{
								linkId: 'l01110',
								linkName: 'Why am I being asked to confirm my business information?'
							},
							{
								linkId: 'l0111',
								linkName: 'As a host, how can I check the status of a reservation?'
							},
							{
								linkId: 'l0112',
								linkName: 'Who can host on Airbnb?'
							}
						]
					},
					{
						linkId: 'l012',
						linkName: 'Hosts quality standards',
						links: [
							{
								linkId: 'l0121',
								linkName: 'If I specify that my listing is safe or suitable for children, what should I know?'
							},
							{
								linkId: 'l0122',
								linkName: 'Can I choose to only host people of my own gender?'
							},
							{
								linkId: 'l0123',
								linkName: 'How can the Airbnb community help with water conservation in Cape Town?'
							},
							{
								linkId: 'l0124',
								linkName: 'What are Airbnb\'s standards for hotels and other hospitality businesses?'
							}
						]
					},{
						linkId: 'l013',
						linkName: 'Hosting Policies',
						links: [
							{
								linkId: 'l0131',
								linkName: 'What are Airbnb’s rules for parties and events at listings?'
							},
							{
								linkId: 'l0132',
								linkName: 'How do changes to the Japanese Hotels and Inns Act affect hosting on Airbnb?'
							},
							{
								linkId: 'l0133',
								linkName: 'What is the Airbnb service fee?'
							},
							{
								linkId: 'l0134',
								linkName: 'What is an assistance animal?'
							},
							{
								linkId: 'l0135',
								linkName: 'How do I join Airbnb as a company or manage company info on an account?'
							},
							{
								linkId: 'l0136',
								linkName: 'What are Airbnb\'s standards and expectations?'
							}
						]
					}
				]
			},
			{
				id: '02',
				name: 'List your space',
				description: 'Resources to guide you through creating a listing for your home on Airbnb',
				links: [
					{
						linkId: 'l021',
						linkName: 'How do I edit my reservation preferences?',
					},
					{
						linkId: 'l022',
						linkName: 'How can I make my space more accessible for guests with disabilities?',
					},
					{
						linkId: 'l023',
						linkName: 'How will my listing’s location be shown on the map?',
					},
					{
						linkId: 'l024',
						linkName: 'How do I add the type of bed to my listing?',
					}
				]
			},
			{
				id: '03',
				name: 'Host an experience or adventure',
				description: 'Find out if you’re eligible to host an experience or adventure, how to create an experience, and how to choose a price for your experience. See the criteria for hosting a social impact experience.',
				links: []
			},
			{
				id: '04',
				name: 'Top host questions',
				description: 'Answers to questions most often asked by Airbnb hosts, including how to become a Superhost, what happens if you cancel a reservation, and how to earn travel credit by referring a friend',
				links: []
			},
		]
	},
	{
		id: 1,
		heading: 'Your calendar',
		children: [
			{
				id: '11',
				name: 'Pricing & availability',
				description: 'Learn how to set up your listing’s calendar and prices for different days of the week and times of the year. Create custom booking settings to choose how guests can book, require verifications and ID, and create house rules for them to follow.',
				links: [
					{
						linkId: 'l111',
						linkName: 'How do I set a custom price for specific nights, weeks, or months?',
					},
					{
						linkId: 'l112',
						linkName: 'As a host, what should I know about security deposits?',
					},
					{
						linkId: 'l113',
						linkName: 'How can I hold dates for a guest?',
					},
					{
						linkId: 'l114',
						linkName: 'Why was my listing deactivated?',
					},
				]
			},
			{
				id: '12',
				name: 'Booking settings',
				description: '',
				links: [
					{
						linkId: 'l121',
						linkName: 'How do I turn Instant Book on or off?',
					},
					{
						linkId: 'l122',
						linkName: 'How do I choose who can Instant Book my place?',
					},
					{
						linkId: 'l123',
						linkName: 'How can I control which reservations I get with Instant Book?',
					},
					{
						linkId: 'l124',
						linkName: 'How can I check if a reservation is confirmed?',
					},
				]
			},
			{
				id: '13',
				name: 'Responding to enquires & requests'
			},
			{
				id: '14',
				name: 'Snoozing or deactivating your listing'
			}
		]
	},
	{
		id: 2,
		heading: 'Your listings',
		children: [
			{
				id: '21',
				name: 'Updating your listing'
			},
			{
				id: '22',
				name: 'Neighbourhoods'
			},
			{
				id: '23',
				name: 'Listing photos & photography'
			},
			{
				id: '24',
				name: 'Co-hosts & other hosting help'
			},
			{
				id: '25',
				name: 'Airbnb Plus'
			},
			{
				id: '26',
				name: 'API-connected software'
			}
		]
	},
	{
		id: 3,
		heading: 'How payouts work',
		children: [
			{
				id: '31',
				name: 'Getting paid'
			},
			{
				id: '32',
				name: 'Adding payout info'
			},
			{
				id: '33',
				name: 'Your payout status'
			},
			{
				id: '34',
				name: 'Donations'
			},
			{
				id: '35',
				name: 'Taxes'
			},
		]
	},
	{
		id: 4,
		heading: 'Your reservations',
		children: [
			{
				id: '41',
				name: 'Hosting safety'
			},
			{
				id: '42',
				name: 'Airbnb Experiences and Adventures'
			},
			{
				id: '43',
				name: 'Changing a reservation'
			},
			{
				id: '44',
				name: 'Cancelling a reservation'
			},
			{
				id: '45',
				name: 'Long-term reservations'
			},
		]
	},
	{
		id: 5,
		heading: 'Reservation help',
		children: [
			{
				id: '51',
				name: 'Help with a reservation or guest'
			},
			{
				id: '52',
				name: 'Guest cancellations'
			},
		]
	},
	{
		id: 6,
		heading: 'Your account',
		children: [
			{
				id: '61',
				name: 'Your profile'
			},
			{
				id: '62',
				name: 'Account security'
			},
			{
				id: '63',
				name: 'Identification & verifications'
			},
			{
				id: '64',
				name: 'Reviews'
			},
			{
				id: '65',
				name: 'Superhost status'
			},
		]
	},
	{
		id: 7,
		heading: 'Airbnb community',
		children: [
			{
				id: '71',
				name: 'Community connections'
			},
			{
				id: '72',
				name: 'Open homes'
			},
			{
				id: '73',
				name: 'Terms and policies'
			},
		]
	},
	{
		id: 8,
		heading: 'Responsible hosting',
		children: [
			{
				id: '81',
				name: 'Asia-Pacific'
			},
			{
				id: '82',
				name: 'Responsible hosting for places to stay in Europe'
			},
			{
				id: '83',
				name: 'North America'
			},
			{
				id: '84',
				name: 'South America'
			},
			{
				id: '85',
				name: 'Responsible hosting for Airbnb Experiences'
			},
		]
	},
];

const MakeMySpaceMoreAccessibleForGuests = ({ ...props }) => {
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	return (
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
				<div className="detail-pages">
					<h1>How can I make my space more accessible for guests with disabilities?</h1>
				</div>
			</div>
		</div>
	)
};

export default MakeMySpaceMoreAccessibleForGuests;
