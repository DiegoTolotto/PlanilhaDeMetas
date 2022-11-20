import React from "react";
import { Looks } from "../Looks";
import { ResumeItem } from "../ResumeItem";
import "./resume.css"

export const Resume = ({ entrada, saida, total, quantidade }) => {
    return (
        <div>
            <div>
                <div className="looks">
                    {/* 
                    Este é um campo que apresenta o numero total
                    de "looks" (Conjuntos, vestidos ou peças de 
                        roupa)                 
                    */}
                    <p>Looks</p>
                    <Looks className="looks" value={quantidade} />
                    
                </div>

                <div className="containerResume">
                    <div className="entradas">
                        <p>entradas</p>
                        <ResumeItem value={entrada} />
                    </div>
                    <div className="saidas">
                        <p>saidas</p>
                        <ResumeItem value={saida} />
                    </div>
                    <div className="total">
                        <p>total</p>
                        <ResumeItem value={total} />
                    </div>
                </div>

            </div>
        </div>
    )
};