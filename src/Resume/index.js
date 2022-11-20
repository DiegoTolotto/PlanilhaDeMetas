import React from "react";
import { Looks } from "../Looks";
import { ResumeItem } from "../ResumeItem";
import "./resume.css"

export const Resume = ({ entrada, saida, total, quantidade }) => {
    return (
        <div>
            <div className="containerResume">
                <div className="looks">
                    {/* 
                    Este é um campo que apresenta o numero total
                    de "looks" (Conjuntos, vestidos ou peças de 
                        roupa)                 
                    */}
                    <Looks className="looks" value={quantidade} />
                    
                </div>

                <div>
                    <div className="entradas">
                        <ResumeItem value={entrada} />
                    </div>
                    <div className="saidas">
                        <ResumeItem value={saida} />
                    </div>
                    <div className="total">
                        <ResumeItem value={total} />
                    </div>
                </div>

            </div>
        </div>
    )
};