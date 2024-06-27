import "./MobileInterests.scss"
import { useEffect, useState } from "react"
import { useAllInterests } from "../../../hooks/use-all-interests"
import { ClipLoader } from "react-spinners"
import InterestsSection from "../../Chats/InterestsSection/InterestsSection"
import { useCurrentUser } from "../../../hooks/use-current-user"
import { pusherClient } from "../../../utils/pusherClient"
import MessagesPage from "../../../pages/MessagesPage/MessagesPage"

const MobileInterests = () => {
    const {data: user} = useCurrentUser()
    const { data: interests, isLoading, error } = useAllInterests()
    const [friendRequests, setFriendRequests] = useState([])

    useEffect(() => {
        if(interests) {
            setFriendRequests(interests)
        }
    }, [interests]);

    useEffect(() => {
        pusherClient.subscribe(String(user.profile.id))
        console.log("listening to ", `user:${user.profile.id}:incoming_collaborator_requests`)
    
        function friendRequestHandler(requests) {
            console.log(requests)
            setFriendRequests((prev) => [requests, ...prev])
        }
    
        pusherClient.bind('incoming_collaborator_requests', friendRequestHandler)
    
        return () => {
            pusherClient.unsubscribe(String(user.profile.id))
            pusherClient.unbind('incoming_collaborator_requests', friendRequestHandler)
        }
    }, [user.profile.id])

    return (
        <main id="mobile-interests">
            <MessagesPage />
            {isLoading ? (
                <div className='loading'>
                    <ClipLoader fontSize={30}/>
                </div>
            ) : error ? (
                <div className="error">You gotta make a little refresh</div>
            ) : (
                <div className="mobile-interests">
                    {friendRequests?.length > 0 ? (
                        <div className='all-interests'>
                            {friendRequests?.map((interest) => (
                                <div key={interest.id}>
                                    <InterestsSection interest={interest}/>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-interests">No interests yet!</p>
                    )}
                </div>
            )}
        </main>
    )
}

export default MobileInterests