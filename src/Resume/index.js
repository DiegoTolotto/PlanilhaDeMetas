import React from "react";
import { Looks } from "../Looks";
import { ResumeItem } from "../ResumeItem";
import "./resume.css"

export const Resume = ({ entrada, saida, total, quantidade}) => {
    return(
        <div className="containerResume">
            <div>
                {/* 
                    Este é um campo que apresenta o numero total
                    de "looks" (Conjuntos, vestidos ou peças de 
                    roupa)                 
                */}
                <Looks value={quantidade}/>
                {/* <Looks value={quantidade * 20}/> */}
            </div>

            <div>
                <ResumeItem value={entrada}/>
                <ResumeItem value={saida}/>
                <ResumeItem value={total}/>
            </div>

        </div> 
    )
};