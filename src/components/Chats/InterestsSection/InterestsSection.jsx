/* eslint-disable react/prop-types */
import './InterestsSection.scss'
import { Link } from 'react-router-dom';
import { useParticularInterest } from '../../../hooks/use-particular-interest';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { api } from '../../../utils/api';

const InterestsSection = ({ interest, onOpen, setOnOpen }) => {
  const { data: particularInterest, isLoading, error } = useParticularInterest(interest.id)
  const queryClient = useQueryClient()
  const acceptRequest = useMutation({
    mutationFn: () => {
      return api.put(`collaborators/requests/${interest.id}/accept`, {
        senderId: particularInterest.sender.id
      })
    },
    onSuccess({ data }) {
      console.log(data)
      queryClient.invalidateQueries('all-interests')
      toast.success('Accepted!')
    },
    onError(err) {
      console.log(err)
      toast.error('Big Error')
    }
  })

  return (
    <div className='interests' >
      <div className="card">
        <div className='user'>
          <Link to={`/${interest.sender.username}`}>
            <img src={interest.sender.profileImage}></img>
          </Link>
          <div className='not-image'>
            <h5>{interest.sender.fullName}</h5>
            <p>{interest.sender.occupation}</p>
          </div>
        </div>
        <h4>{interest.post.title}</h4>
        <p>{interest.content}</p>

        <div className='action-buttons'>
          <button onClick={async () => await acceptRequest.mutateAsync()} disabled={acceptRequest.isPending} className='accept-button'>
            {acceptRequest.isPending ? 'Accepting..' : 'Accept'}
          </button>
          <button onClick={() => console.log('Declined')} className='decline-button'>Decline</button>
        </div>
      </div>



    </div>
  );
}

export default InterestsSection
