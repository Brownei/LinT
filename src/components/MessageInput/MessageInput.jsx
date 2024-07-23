import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { Input, Textarea } from '@mantine/core'
import './MessageInput.scss'

const MessageInput = ({ register, handleSubmit, onSubmit }) => {

  return (
    <div id='message-input'>
      <Textarea size={'xl'} leftSection={
        <span>
          <Icon onClick={() => console.log('Image')} className='image' icon={'ion:image'} fontSize={23} color='#5458CB' />
          <Icon onClick={() => console.log('Emojis')} className='emojis' icon={'mingcute:emoji-line'} fontSize={23} color='#5458CB' />
        </span>
      } leftSectionWidth={100} rightSection={
        <Icon onClick={handleSubmit(onSubmit)} className='send' icon={'charm:paper-plane'} fontSize={23} color='#5458CB' />
      } rightSectionPointerEvents='all' autosize leftSectionPointerEvents='all' variant='filled' color='#F0F0F0' radius='lg' placeholder='Type your message' className='input' {...register('message')} />
    </div>
  )
}

export default MessageInput
