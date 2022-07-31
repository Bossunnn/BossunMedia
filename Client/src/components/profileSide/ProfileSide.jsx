import React from 'react';
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import './ProfileSide.css'
import FollowersCard from "../FollowersCard/FollowersCard";

function ProfileSide(props) {
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    );
}

export default ProfileSide;