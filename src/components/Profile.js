import React from 'react';

import UserBanner from '../resources/UserBanner.jpg';
import ProfilePic from '../resources/ProfilePic.jpg';

const Profile = () => {
	return (
		<div className="Profile">

			<div className="DisplayUser">
				<img src={UserBanner} alt="User Banner" />
				<img src={ProfilePic} alt="User Profile" />
			</div>

			<div className="UserInfo">
				<h2>Filip Martin Jose</h2>
				<p>Los Angeles</p>
				<p>Pro Level</p>
			</div>

			<div className="Stats">
				<div className="Labels">
					<p>Followers</p>
					<p>Projects</p>
					<p>Rank</p>
				</div>
				<div className="Amounts">
					<h5>980</h5>
					<h5>142</h5>
					<h5>129</h5>
				</div>
			</div>


		</div>
	);
}

export default Profile;
