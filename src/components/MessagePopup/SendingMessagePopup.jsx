import './SendingMessagePopup.scss'

const SendingMessagePopup = ({ userInfo, content }) => {
  return (
    <div style={{ opacity: 0.5 }} id='sending-message-popup' key={userInfo.id}>
      <img src={userInfo.profileImage} />
      <div className='sending-message-popup-contents'>
        <div className='sending-message-popup-deets'>
          <p>{userInfo.fullName}</p>
          <span>11:30 AM</span>
        </div>

        <p>{content}</p>
      </div>
    </div>
  )
}

export default SendingMessagePopup
