import * as React from "react";
import {TitleMedium} from "../components/Titles";

interface BoxContainerProps {
    title: string;
}

const BoxContainer: React.FC<BoxContainerProps> = (props) => {
    return (
        <>
            <TitleMedium title={props.title}/>
        </>
    )
};

export default BoxContainer;