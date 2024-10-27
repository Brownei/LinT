import moment from 'moment';
import './SendingMessagePopup.scss'

const SendingMessagePopup = ({ userInfo, message }) => {
  const date = moment(new Date()).format('hh:mm A');

  return (
    <div key={userInfo.id} style={{ opacity: 0.5 }} id='sending-message-popup'>
      <img src={userInfo.profileImage} />
      <div className='sending-message-popup-contents'>
        <div className='sending-message-popup-deets'>
          <p>{userInfo.fullName}</p>
          <span>{date}</span>
        </div>

        <p>{message}</p>
      </div>
    </div>
  )
}

export default SendingMessagePopup
