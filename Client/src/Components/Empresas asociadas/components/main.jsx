import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssociates } from "../../../store/slices/associates/thunks";
import Card from "./card";

const Main = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAssociates())
    }, [])
    const associates = useSelector((state) => state.associates.associates)   
console.log(associates)
    return (
        <>
            {associates?.map(i=>{
                return(
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
        </>
    )
}

export default Main