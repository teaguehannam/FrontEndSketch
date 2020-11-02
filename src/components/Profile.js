import React from 'react';

import UserBanner from '../resources/UserBanner.jpg';
import ProfilePic from '../resources/ProfilePic.jpg';

const Profile = () => {
	return (
		<div className="Profile">

			<div className="DisplayUser">
				<img className="Banner" src={UserBanner} alt="User Banner" />
				<img className="Profile" src={ProfilePic} alt="User Profile" />
			</div>

			<div className="UserInfo">
				<h2>Filip Martin Jose</h2>
				<p>Los Angeles</p>
				<h6 className="Level">Pro Level</h6>
			</div>

			<div className="Stats">
				<div className="Box">
					<p>Followers</p>
					<h5>980</h5>
				</div>
				<div className="Box">
					<p>Projects</p>
					<h5>142</h5>
				</div>
				<div className="Box">
					<p>Rank</p>
					<h5>129</h5>
				</div>
			</div>


		</div>
	);
}

export default Profile;
