
import { useForm } from "react-hook-form";

const SetupConfirmPage = () => {
    const state = localStorage.getItem('profileSetup')
    const data = JSON.parse(state)
    const { handleSubmit } = useForm({ defaultValues: data });

    const submitData = (data) => {
        console.log(data);
        localStorage.removeItem('profileSetup')
        // Submit data to the server
    };

    return (
        <form onSubmit={handleSubmit(submitData)}>
        <h1 className="mb-4">Confirm</h1>
        <div title="Personal info" >
            <div>
                <div>PROFILE IMAGE</div>
                <img src={data.profileImage} alt="Profile Image" />
            </div>
            <div>
                <div>FULL NAME</div>
                <div>{data.fullName}</div>
            </div>
            <div>
                <div>EMAIL</div>
                <div>{data.email}</div>
            </div>
        </div>
        <div title="Education">
            <div>
                <div>BIO</div>
                <div>{data.description}</div>
            </div>
            <div>
                <div>LINKS</div>
                <div>{data.socialLinks?.map((link, index) => (
                    <span key={index}>{link.url}</span>
                ))}</div>
            </div>
        </div>
        <div title="About">
            <div>
                <div>USERNAME</div>
                <div>{data.username}</div>
            </div>
            <div>
                <div>PROFILE TAG</div>
                <div>{data.profileTag}</div>
            </div>
        </div>
        <div className="d-flex justify-content-start">
            <button type="submit">Submit</button>
        </div>
        </form>
    );
};

export default SetupConfirmPage;