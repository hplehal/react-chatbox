import React from 'react';

const ChannelInfo = () => {
    return(
        <div className="ChannelInfo">
            <div className="Topic">
              Topic: <input className="TopicInput" defaultValue="Awesome stuff" />
            </div>
            <div className="ChannelName">#general</div>
        </div>
    )
}

export default ChannelInfo;
