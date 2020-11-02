import React from 'react';

import SmallPlanIcon from '../resources/SmallPlanIcon.jpg';
import MasterCardIcon from '../resources/MasterCardIcon.jpg';
import VenmoIcon from '../resources/VenmoIcon.jpg';

const Plan = () => {
	return (
		<div className="Plan">

			<div className="Title">
				<h2>Upgrade your plan</h2>
				<p>
					Please make the payment to start enjoying 
					all the features of our premium plan as soon as possible.
				</p>
			</div>

			<div className="SelectedPlan">
				<div className="ImgContainer">
					<img src={SmallPlanIcon} alt="Small Business" />
				</div>
				<div className="Stack">
					<h4>Small Business</h4>
					<a href="/">CHANGE PLAN</a>
				</div>
				<div className="Price">
					<p>$</p>
					<h5>8,350</h5>
					<p>/ year</p>
				</div>
			</div>

			<div className="PaymentDetails">
				<div className="Title">
					<h3>Payment details</h3>
				</div>
				<div className="Card">
					<div className="ImgContainer">
						<img src={MasterCardIcon} alt="Mastercard" />
					</div>
					<div className="Stack">
						<h6>Credit Card</h6>
						<p>2344 xxxx xxxx 8880</p>
					</div>
					<input type="text" maxLength="3" placeholder="CVC"/>
				</div>
				<div className="Card">
					<div className="ImgContainer">
						<img src={VenmoIcon} alt="Venmo Card" />
					</div>
					<div className="Stack">
						<h6>Credit Card</h6>
						<p>8890 xxxx xxxx 1234</p>
					</div>
					<input type="text" maxLength="3" placeholder="CVC"/>
				</div>
				<a href="/">ADD PAYMENT METHOD</a>
			</div>

			<input type="text" className="EmailInput" placeholder="Email address" />

			<div className="SubmitButton">
				<button>Proceed to payment →</button>
			</div>

		</div>
	);
}

export default Plan;
