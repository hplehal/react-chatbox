import React from 'react';
import useCollection from './useCollection';

const Messages = () => {    
  const messages = useCollection('channels/Drop ins/messages', 'createdAt');
    
    return(
        <div className="Messages">
            <div className="EndOfMessages">That's every message!</div>
            {
              messages.map((message, index)=>{
                  return index === 0  ?  (
                    <div key = {message.id}>
                      <div className="Day">
                        <div className="DayLine" />
                        <div className="DayText">12/6/2018</div>
                        <div className="DayLine" />
                      </div>
                      <div className="Message with-avatar">
                        <div className="Avatar" />
                        <div className="Author">
                          <div>
                            <span className="UserName">Hartej Lehal </span>
                            <span className="TimeStamp">3:37 PM</span>
                          </div>
                          <div key = {message.id} className="MessageContent">{message.text}</div>
                        </div>
                      </div>
                    </div>): 
                    (<div key = {message.id}>
                      <div className="Message no-avatar">
                        <div key ={message.id} className="MessageContent">{message.text}</div>
                      </div>
                    </div>)
              })
            }
        </div>
    )
}

export default Messages;