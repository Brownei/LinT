/* eslint-disable react/prop-types */
import ModalContainer from '../Modal/ModalContainer';
import './RequestModal.scss';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalContent from '../Modal/ModalContent/ModalContent'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';
import { toast } from 'sonner';
import { Textarea } from '@mantine/core';
import { useMediaQuery } from "react-responsive";


const RequestModal = ({ post }) => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const ownerOfPost = post.profile.fullName.split(' ')
  const queryClient = useQueryClient()
  const [content, setContent] = useState()
  const sendInterestMutation = useMutation({
    mutationFn: () => {
      return api.post(`/collaborators/requests`, {
        receiverId: post.profile.id,
        postId: post.id,
        content: content ? content : `Hello ${ownerOfPost[0]}, I’m interested in working with you.`
      })
    },
    onSuccess({ data }) {
      if (data.collaboratorsRequest) {
        toast.success('Request Sent!')
        queryClient.invalidateQueries('all-posts')
      } else if (data.error) {
        toast.error('Request not sent!')
      }
    },
    onError(error) {
      console.log(error)
      toast.error('Request failed!')
    }
  });


  return (
    <div>
      {sendInterestMutation.isPending ? (
        <ModalContainer>
          <div className='loading'>
            <ClipLoader size={isMobile ? 20 : 30} color='#3338C1' />
          </div>
        </ModalContainer>
      ) : sendInterestMutation.isSuccess ? (
        <ModalContainer>
          <div className='success'>
            <Icon icon={'mdi:emoji'} fontSize={48} color={'#0006B1'} />
            <p>Interest Sent!</p>
            <Link className='link' to={'/collaborate'}>Go back to  projects</Link>
          </div>
        </ModalContainer>
      ) : (
        <ModalContainer>
          <button className='skip-button' onClick={() => sendInterestMutation.mutateAsync()}>Skip</button>
          <ModalHeader>
            <p>So What do you think about the project ?</p>
          </ModalHeader>
          <ModalContent>
            <Textarea autosize minRows={8} w={'100%'} className='textarea' variant='unstyled' size={isMobile ? 'md' : 'lg'} radius={8} placeholder={`Hello ${ownerOfPost[0]}, I’m interested in working with you.`} type='text' onChange={(e) => setContent(e.target.value)} />
            <button onClick={() => sendInterestMutation.mutateAsync()} disabled={content === ''}>Submit</button>
          </ModalContent>
        </ModalContainer>
      )}
    </div>

  )
}

export default RequestModal;
