import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { Input, Textarea } from '@mantine/core'
import './MessageInput.scss'
import { useMediaQuery } from 'react-responsive'

const MessageInput = ({ register, handleSubmit, onSubmit }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 })

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div id='mess'>
      <div className='message-input'>
        <Textarea onKeyDown={handleKeyDown} size={isMobile ? 'lg' : 'xl'} leftSection={
          <span>
            <Icon onClick={() => console.log('Image')} className='image' icon={'ion:image'} fontSize={23} color='#5458CB' />
            <Icon onClick={() => console.log('Emojis')} className='emojis' icon={'mingcute:emoji-line'} fontSize={23} color='#5458CB' />
          </span>
        } leftSectionWidth={100} rightSection={
          <Icon onClick={handleSubmit(onSubmit)} className='send' icon={'charm:paper-plane'} fontSize={23} color='#5458CB' />
        } rightSectionPointerEvents='all' autosize leftSectionPointerEvents='all' variant='filled' color='#F0F0F0' radius='lg' placeholder='Type your message' className='input' {...register('message')} />
      </div>

      <div className='mobile-message-input'>
        <Textarea onKeyDown={handleKeyDown} size={isMobile ? 'lg' : 'xl'} leftSection={
          <span>
            <Icon onClick={() => console.log('Image')} className='image' icon={'ion:image'} fontSize={23} color='#5458CB' />
            <Icon onClick={() => console.log('Emojis')} className='emojis' icon={'mingcute:emoji-line'} fontSize={23} color='#5458CB' />
          </span>
        } leftSectionWidth={100} rightSection={
          <Icon onClick={handleSubmit(onSubmit)} className='send' icon={'charm:paper-plane'} fontSize={23} color='#5458CB' />
        } rightSectionPointerEvents='all' autosize leftSectionPointerEvents='all' variant='filled' color='#F0F0F0' radius='lg' placeholder='Type your message' className='input' {...register('message')} />
      </div>


    </div >
  )
}

export default MessageInput
