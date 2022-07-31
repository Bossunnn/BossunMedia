import React, {useState} from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import ShareModal from "../ShareModal/ShareModal";

function InfoCard(props) {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen
                        width='2rem'
                        height='1.2rem'
                        onClick={() => {
                            setModalOpened(true);
                        }}
                    />
                    <ShareModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>
                    in Relationship
                </span>
            </div>

            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>
                    Ho Chi Minh
                </span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>
                    DXC Company
                </span>
            </div>

            <button className="button logout-button">
                Logout
            </button>
        </div>
    );
}

export default InfoCard;