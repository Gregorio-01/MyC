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
import SliderCard from "./slider-card";

const Main = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAssociates())
    }, [])
    const associates = useSelector((state) => state.associates.associates)
    console.log(associates)
    return (
        <div className="associates-container">
            <div className="asociadas-banner">
                <h1 style={{ color: "white", fontSize: '4.5rem' }}>Empresas Asociadas</h1>
            </div>
            <div className="destacadas-container">
                <h1 style={{ color: "white" }}>Empresas Destacadas</h1>
                <div>
                    <Swiper
                        navigation={true} modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={associates?.length < 3 ? associates.length : 3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {associates?.map(i => {
                            return (
                                <>
                                    {i.destacada &&
                                        <SwiperSlide>
                                            <SliderCard name={i.name} banner={i.banner} />
                                        </SwiperSlide>
                                    }
                                </>
                            )
                        }
                        )}
                    </Swiper>
                </div>
            </div>
            <hr></hr>
            <div className="associates-cards-container">
                {associates?.map(i => {
                    return (
                        <Card
                            name={i.name}
                            banner={i.banner}
                            photo={i.photo}
                            product1={i.product1}
                            product2={i.product2}
                            product3={i.product3}
                            link={i.link}
                        >
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Main