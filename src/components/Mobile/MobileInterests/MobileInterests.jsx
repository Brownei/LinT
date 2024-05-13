"./MobileInterests.scss"
import { useAllInterests } from "../../../hooks/use-all-interests"
import { ClipLoader } from "react-spinners"
import InterestsSection from "../../Chats/InterestsSection/InterestsSection"

const MobileInterests = () => {
    const { data: interests, isLoading, error } = useAllInterests()

    return (
        <main id="mobile-interests">
            {isLoading ? (
                <div className='loading'>
                    <ClipLoader fontSize={30}/>
                </div>
            ) : error ? (
            <div className="error">You gotta make a little refresh</div>
            ) : (
            <div className="mobile-interests">
                {interests.length > 0 ? (
                    <div className='all-interests'>
                        {interests.map((interest) => (
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