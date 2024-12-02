import { Link } from "react-router-dom";

const ShowCards = ({ card }) => {
    const { title, img, features ,id} = card;

    return (
        <div>
            <div className="card  image-full  shadow-xl">
                <figure>
                    <img
                    src={img}
                    className="brightness-120"
                    />
                </figure>
                <div className="card-body justify-end">
                    <h2 className="card-title text-white text-xl md:text-2xl">{title}</h2>
                    <div className="mb-4">
                        <ul>
                            {features && features.length > 0 ? (
                                features.map((feature, index) => (
                                    <li  key={index} className="text-[#bdbcbc]">{feature}</li>
                                ))
                            ) : (
                                <p>No eco-friendly features listed.</p>
                            )}
                        </ul>
                    </div>
                    <div className="card-actions ">
                    <Link to={`/details/${id}`} className="btn bg-blue-400 rounded-lg border-none text-white">Explore Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCards;
