import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
// import { useAuthStore } from "../../../../hooks/use-auth-store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { parsedToken } from "../../../../utils/api";

const SetupConfirmPage = () => {
    const navigate = useNavigate()
    const state = localStorage.getItem('profileSetup')
    const confirmedData = JSON.parse(state)
    const { handleSubmit } = useForm({ defaultValues: confirmedData });

    const createProfileMutation = useMutation({
        mutationFn: (data) => {
            return axios.post(`http://localhost:3131/profile`, {
                username: data.username,
                fullName: data.fullName,
                occupation: data.profileTag,
                location: data.location,
                bio: data.description,
                links: data.socialLinks.map((link) => link.url),
                profileImage: data.profileImage
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + parsedToken
                }
            })
        },
        onSuccess() {
            navigate('/collaborate')
        },
    });

    const submitData = async (data) => {
        await createProfileMutation.mutateAsync(data, parsedToken)
        localStorage.removeItem('profileSetup')
    };

    return (
        <form onSubmit={handleSubmit(submitData)}>
        <h1 className="mb-4">Confirm</h1>
        <div title="Personal info" >
            <div>
                <div>PROFILE IMAGE</div>
                <img src={confirmedData?.profileImage} alt="Profile Image" />
            </div>
            <div>
                <div>FULL NAME</div>
                <div>{confirmedData.fullName}</div>
            </div>
            <div>
                <div>EMAIL</div>
                <div>{confirmedData.email}</div>
            </div>
        </div>
        <div title="Education">
            <div>
                <div>BIO</div>
                <div>{confirmedData.description}</div>
            </div>
            <div>
                <div>LINKS</div>
                <div>{confirmedData.socialLinks?.map((link, index) => (
                    <span key={index}>{link.url}</span>
                ))}</div>
            </div>
        </div>
        <div title="About">
            <div>
                <div>USERNAME</div>
                <div>{confirmedData.username}</div>
            </div>
            <div>
                <div>PROFILE TAG</div>
                <div>{confirmedData.profileTag}</div>
            </div>
            <div>
                <div>LOCATION</div>
                <div>{confirmedData.location}</div>
            </div>
        </div>
        <div className="d-flex justify-content-start">
            <button type="submit">Submit</button>
        </div>
        </form>
    );
};

export default SetupConfirmPage;