import ContentLoader from "react-content-loader";
import {BeatLoader} from "react-spinners";

const LoadingInfoMovie = () => {
    return (
        <>
            <ContentLoader speed={2}
                           width={900}
                           height={700}
                           viewBox="0 0 900 700"
                           backgroundColor="#958e8e"
                           foregroundColor="#ecebeb">
                <rect x="300" y="0" rx="5" ry="5" width="333" height="500" />
                <rect x="300" y="540" rx="5" ry="5" width="100" height="20" />
                <rect x="300" y="570" rx="5" ry="5" width="280" height="10" />
                <rect x="300" y="600" rx="5" ry="5" width="100" height="20" />
                <rect x="300" y="630" rx="5" ry="5" width="260" height="10" />
                <rect x="650" y="20" rx="4" ry="4" width="450" height="30" />
                <rect x="650" y="70" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="95" rx="4" ry="4" width="80" height="15" />
                <rect x="650" y="140" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="165" rx="4" ry="4" width="150" height="12" />
                <rect x="650" y="205" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="230" rx="4" ry="4" width="80" height="15" />
                <rect x="650" y="270" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="295" rx="4" ry="4" width="80" height="15" />
                <rect x="650" y="335" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="360" rx="4" ry="4" width="80" height="15" />
                <rect x="650" y="390" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="420" rx="4" ry="4" width="470" height="130px" />
                <rect x="650" y="570" rx="4" ry="4" width="100" height="20" />
                <rect x="650" y="600" rx="4" ry="4" width="80" height="15" />

            </ContentLoader>
        </>
    );
};
const Loading = () => {


    return (
        <div className="sweet-loading" style={{textAlign: 'center'}}>
            <BeatLoader
                color={'silver'}
                size={30}
                aria-label="BeatLoader"
                data-testid="loader"
            />
        </div>
    );
};

export {LoadingInfoMovie, Loading};