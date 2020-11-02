import React, { useState } from 'react';

import Clock from '../resources/clock.svg';
import Fixed from '../resources/fixed.svg';

const Pricing = () => {

	const [pricing, setPricing] = useState({price:180})

	const handlePricing = (event) => setPricing({price:event.target.value});

	return (
		<div className="Pricing">

			<div className="Title">
				<h2>Set up your pricing</h2>
				<p>	
					Please set up your hourly or fixed rate 
					so that the client is aware of your pricing.
				</p>
			</div>

			<div className="Type">
				<button><img src={Clock} alt="Clock" /><p>Hourly</p></button>
				<button><img src={Fixed} alt="Fixed" /><p>Fixed</p></button>
			</div>
			
			<div className="Amount">
				<div className="Display">
					<p>$</p>
					<h4>{pricing.price}</h4>
					<p>/ hour</p>
				</div>
				<input	type="range"
						id="pricing" 
						name="pricing"
						min="20" max="300" step="5"
						onChange={handlePricing}
						value={pricing.price}
				/>
				<div className="PricingLabels">
					<p>$20</p>
					<p>$300</p>
				</div>
			</div>

		</div>
	);
}

export default Pricing;
