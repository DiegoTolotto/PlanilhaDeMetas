import React from "react";
import { ResumeItem } from "../ResumeItem";


export const Resume = ({ entrada, saida, total, quantidade}) => {
    return(
        <div>
            <ResumeItem value={entrada}/>
            <ResumeItem value={saida}/>
            <ResumeItem value={total}/>
            <ResumeItem value={quantidade}/>
        </div>
    )
};