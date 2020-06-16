import React, { useEffect, useState, Fragment } from 'react';
import ReviewImage from '../../../images/trust/review.png';
import MessagingImage from '../../../images/trust/messaging.png';
import ProfileImage from '../../../images/trust/personal-profile.png';

const data = [
	{
		id: 0,
		image: ProfileImage,
		heading: 'Profiles',
		description: 'Everyone on Airbnb has a profile to help other guests or hosts get to know each other. To book or ' +
			'host, you’ll be asked to provide Airbnb with your full name, date of birth, phone number, ' +
			'payment information and email address.',
	},
	{
		id: 1,
		image: MessagingImage,
		heading: 'Secure messaging',
		description: 'Our secure messaging tool lets you get to know a host or guest and ask questions about a listing ' +
			'or experience ahead of time. After the reservation is booked, you can use it to easily message back and ' +
			'forth to coordinate things like check-in and directions.'
	},
	{
		id: 2,
		image: ReviewImage,
		heading: 'Reviews',
		description: 'If you’re curious about what others thought of a potential guest, host, home or experience, ' +
			'all you have to do is look at their reviews. Guests and hosts can only review each other after a ' +
			'reservation, so you know the feedback you’re seeing is based on actual experiences.'
	}
]

let timer: any;

const WhatToExpect = () => {
	const [image, changeImage] = useState(0);
	const [autoChange, toggleAutoChange] = useState(true);
	useEffect(() => {
		if (autoChange) {
			timer = setInterval(() => {
				const el: HTMLElement | null = document.getElementById('phone-navigate');
				const el2: HTMLElement | null = document.getElementById('section2-navigator');
				if (el && el2) {
					let newImageId = image + 1;
					if (newImageId > data.length - 1) newImageId = 0
					el.style.transform = `translate(0px, -${newImageId * 542}px)`;
					el2.style.transform = `translate(0px, -${newImageId * 300}px)`;
					changeImage(newImageId)
				}
			}, 10000)
		} else {
			clearInterval(timer)
		}
	}, [image, autoChange])

	const onNavigate = (id :number) => () => {
		const el: HTMLElement | null = document.getElementById('phone-navigate');
		const el2: HTMLElement | null = document.getElementById('section2-navigator');
		if (el && el2) {
			let newImageId = image + 1;
			if (newImageId > data.length - 1) newImageId = 0
			el.style.transform = `translate(0px, -${newImageId * 542}px)`;
			el2.style.transform = `translate(0px, -${newImageId * 300}px)`;
			changeImage(newImageId)
		}
		changeImage(id);
		toggleAutoChange(false);
	};
	return (
		<div className="margin-between-section">
			<div className="expect-wrapper">
				<h1>Know what to expect</h1>
				<div className="expect-wrapper__description">
					<div>
						We make it simple for you to get to know more about any home, experience, guest or host before booking
					</div>
				</div>
				<div className="expect-wrapper__body">
					<div className="expect-wrapper__body__section1">
						<div className="expect-wrapper__body__section1__phone">
							<div className="expect-wrapper__body__section1__phone__battery-section">
								<img src="https://a0.muscache.com/airbnb/static/packages/screen_top.d6eb428a.png" alt="" />
							</div>
							<div className="expect-wrapper__body__section1__phone__pages-wrapper">
								<div
									id="phone-navigate"
									className="expect-wrapper__body__section1__phone__pages-wrapper__pages"
								>
									{
										data.map((d) => {
											return (
												<img key={d.id} src={d.image} alt="" />
											)
										})
									}
								</div>
							</div>
						</div>
					</div>
					<div className="expect-wrapper__body__section2">
						<div className="expect-wrapper__body__section2__wrapper">
							<div className="navigator-wrapper">
								<div id="section2-navigator" className="navigator-wrapper__navigator">
									{
										data.map((d) => {
											return (
												<div className="item">
													<div className="item__header">
														<h2>{d.heading}</h2>
													</div>
													<div className="item__description">
														{d.description}
													</div>
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					</div>
					<div className="expect-wrapper__body__section3">
						<div className="expect-wrapper__body__section3__navigation-wrapper">
							<div className="expect-wrapper__body__section3__navigation-wrapper__navigation">
								<span className={image === 0 ? 'selected' : ''} onClick={onNavigate(0)} />
								<span className={image === 1 ? 'selected' : ''} onClick={onNavigate(1)} />
								<span className={image === 2 ? 'selected' : ''} onClick={onNavigate(2)} />
							</div>
						</div>
					</div>
				</div>
				<div className="expect-wrapper__body-mobile">
					{
						data.map((d) => {
							return (
								<Fragment>
									<div className="expect-wrapper__body-mobile__section1">
										<div className="expect-wrapper__body-mobile__section1__phone">
											<div className="expect-wrapper__body-mobile__section1__phone__battery-section">
												<img src="https://a0.muscache.com/airbnb/static/packages/screen_top.d6eb428a.png" alt="" />
											</div>
											<div className="expect-wrapper__body-mobile__section1__phone__pages-wrapper">
												<img key={d.id} src={d.image} alt="" />
											</div>
										</div>
									</div>
									<div className="expect-wrapper__body-mobile__section2">
										<h2>{d.heading}</h2>
									</div>
									<div className="expect-wrapper__body-mobile__section3">
										{d.description}
									</div>
								</Fragment>
							)
						})
					}
				</div>
			</div>
		</div>
	)
};

export default WhatToExpect;
