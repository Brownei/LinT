/* eslint-disable react/prop-types */
import ModalContainer from '../Modal/ModalContainer';
import './RequestModal.scss';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalContent from '../Modal/ModalContent/ModalContent'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {useState} from 'react';
import { Icon } from '@iconify/react';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getToken} from '../../utils/api';
import { toast } from 'sonner';


const RequestModal = ({post}) => {
	const ownerOfPost = post.profile.fullName.split(' ')
	const queryClient = useQueryClient()
	const [content, setContent] = useState('')
	const sendInterestMutation = useMutation({
		mutationFn: () => {
			return axios.post(`http://localhost:3131/collaborators/requests`, {
				receiverId: post.profile.id,
				postId: post.id,
				content: `Hello ${ownerOfPost[0]}, I’m interested in working with you.`
			}, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${getToken()}`
				}
			})
		},
		onSuccess() {
			toast.success('Request Sent!')
			queryClient.invalidateQueries('all-posts')
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
						<ClipLoader color="#0006B1" fontSize={30}/>
					</div>
				</ModalContainer>
			) : sendInterestMutation.isSuccess ? (
				<ModalContainer>
					<div className='success'>
						<Icon icon={'mdi:emoji'} fontSize={48} color={'#0006B1'}/>
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
						<textarea placeholder={`Hello ${ownerOfPost[0]}, I’m interested in working with you.`} type='text' onChange={(e) => setContent(e.target.value)}/>
						<button disabled={content === ''}>Submit</button>
					</ModalContent>
				</ModalContainer>
			)}
		</div>
	
	)
}

export default RequestModal;
