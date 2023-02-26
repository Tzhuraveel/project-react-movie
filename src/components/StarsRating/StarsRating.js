import StarRatings from "react-star-ratings/build/star-ratings";


export const StarsRating = ({stars}) => {



    return (
        <div>
            <StarRatings
                rating={stars}
                starRatedColor="#454141"
                numberOfStars={10}
                name='rating'
                starDimension='15px'
                starWidthAndHeight={15}
                starSpacing='0'
            />
        </div>
    )
};