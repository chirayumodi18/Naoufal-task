import React from 'react';
import BreadCrumbs from "../../bread-crumbs";
import HelpSection from "../../help-section";
import { getPanelData } from '../../../../actions/data';

const panelData = getPanelData();

const WhoCanHostOnAirbnb = ({ ...props }) => {
	let url = props.match.url.split('/');
	url = url.filter((u: string) => u)
	return (
		<div className="help-container">
			<BreadCrumbs data={url} history={props.history} />
			<div className="help-section-wrapper">
				<HelpSection data={url} history={props.history} panelData={panelData} />
			</div>
			<div className="detail-pages">
				<h1>Who can host on Airbnb?</h1>
				<div>
					Behind every stay is a host, a real person who can give you the details you need to check in and feel at home.
					They can interact with guests in different ways, depending on the type of place or experience they've booked.
				</div>
				<div>
					Almost anyone can be a host. It's free to sign up and list both stays and experiences. Whether they’re
					hosting a place to stay or a local activity, all hosts are expected to meet our quality standards every time.
				</div>
				<h2>Hosts of places to stay</h2>
				<div>
					We ask that all hosts who offer places to stay meet 4 basic requirements for overall rating, response rate,
					cancellations, and acceptance of reservations, and we also ask hosts to comply with our Terms of Service and
					other policies. When booking a place to stay on Airbnb, guests can read the host’s profile page or reviews
					from past reservations to learn what to expect from their host, such as what languages they speak, their
					response rate, and whether they’ll be on-site during the stay.
				</div>
				<div>
					Hosts can list a wide variety of places to stay, such as entire houses, rooms in bed and breakfasts or hotels,
					entire homes for families, or other unique places. Hosts who are on-site sometimes like to greet guests in
					person when they arrive. Other hosts will give guests all the details they need to check themselves in.
					Guests can always contact their host if they have any questions before or during their stay.
				</div>
				<div>
					Sometimes hosts partner up to co-host a place to stay, and other times professional hosts work together to
					manage a group of listings. Some hosts even offer their spaces for free to people who need temporary housing,
					such as a COVID-19 first responder or a family fleeing conflict in their home country.
				</div>
				<h2>Hosts of experiences</h2>
				<div>
					Experience hosts are local experts who list things to do on Airbnb, such as classes, tours, concerts, and
					other activities, whether you're on holiday, exploring your own city, or looking for something to do online
					while at home. Every experience submitted is reviewed by Airbnb for expertise, insider access, and connection,
					and must meet and follow these quality standards.
				</div>
				<div>
					Hosts who list things to do can offer everything from cooking classes, animal encounters, city tours, and more.
					Airbnb Experiences can be hosted in person or online through Zoom. When hosting an Online Experience, hosts
					are expected to follow additional requirements, and all experiences must comply with local laws, including
					restrictions related to quarantine and/or social distancing. Find out more about Airbnb Experiences and
					Adventures.
				</div>
				<h2>Regulations for places to stay and experiences</h2>
				<div>
					Stays and experiences are offered all around the world, although we’re required to comply with international
					regulations that restrict the use of our site by residents of certain countries. Because of this, our services
					are not available in some countries, such as Crimea, Iran, Syria, and North Korea. Find out more about legal
					and regulatory issues for hosting places to stay, and responsible hosting for experiences on Airbnb.
				</div>
			</div>
		</div>
	)
};

export default WhoCanHostOnAirbnb;
