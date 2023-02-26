import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css/navigation';

import 'swiper/swiper.min.css';
import './slider.css'
import {movieActions} from "../../../redux";
import {MovieTopRated} from "../MovieTopRated/MovieTopRated";

const Slider = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getTopRatedMovies())
    }, [dispatch])


    const {topRatedMovie} = useSelector(state => state.movie);

    return (
        <div className={'containerSwiper'}>
            {topRatedMovie && <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerGroup={4}
                speed={500}
                loop
                slidesPerView={4}
                navigation
                breakpoints={{
                    1381: {
                        slidesPerView: 4,
                        slidesPerGroup:4
                    },
                    1060: {
                        slidesPerView: 3,
                        slidesPerGroup:3
                    },
                    720: {
                        slidesPerView: 2,
                        slidesPerGroup:2
                    },
                    400: {
                        slidesPerView: 1,
                        slidesPerGroup:1
                    }
                }}
            >
                {topRatedMovie.map(movie =>
                    <SwiperSlide key={movie.id}>
                        <MovieTopRated movie={movie}/>
                    </SwiperSlide>)}
            </Swiper>}
        </div>
    );
};

export {Slider};
