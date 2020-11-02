import React from 'react';

import SmallPlanIcon from '../resources/SmallPlanIcon.jpg';
import MasterCardIcon from '../resources/MasterCardIcon.jpg';
import VenmoIcon from '../resources/VenmoIcon.jpg';

const Plan = () => {
	return (
		<div className="Plan">

			<h2>Upgrade your plan</h2>
			<p>
				Please make the payment to start enjoying 
				all the features of our premium plan as soon as possible.
			</p>

			<div className="SelectedPlan">
				<img src={SmallPlanIcon} alt="Small Business" />
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
				<div className="Card">
					<img src={MasterCardIcon} alt="Mastercard" />
					<h6>Credit Card</h6>
					<p>2344 xxxx xxxx 8880</p>
					<input type="text" />
				</div>
				<div className="Card">
					<img src={VenmoIcon} alt="Venmo Card" />
					<h6>Credit Card</h6>
					<p>8890 xxxx xxxx 1234</p>
					<input type="text" />
				</div>

				<a href="/">ADD PAYMENT METHOD</a>

			</div>

		</div>
	);
}

export default Plan;
