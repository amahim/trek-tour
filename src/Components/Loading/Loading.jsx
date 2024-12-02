import  { Helmet } from "react-helmet-async"
const Loading = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <Helmet>
                 <title>EcoAdventure | Loading</title>
            </Helmet>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default Loading;