import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssociates } from "../../../store/slices/associates/thunks";
import Card from "./card";
import "./associates.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar"

const Main = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAssociates())
    }, [])
    const associates = useSelector((state) => state.associates.associates)
    console.log(associates)
    return (
        <div className="associates-container">
            <h1>Empresas Destacadas</h1>
            <div className="associates-swiper-container">
                <Swiper
                    navigation={true} modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
            {associates?.map(i => {
                return (
                    <Card
                        name={i.name}
                        banner={i.banner}
                        photo={i.photo}
                        product1={i.product1}
                        product2={i.product2}
                        product3={i.product3}
                    >
                    </Card>
                )
            })}
        </div>
    )
}

export default Main