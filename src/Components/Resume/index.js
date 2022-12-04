import React from "react";
import { Looks } from "../Looks";
import { ResumeItem } from "../ResumeItem";
import "./resume.css"

export const Resume = ({ entradas, saida, total, quantidade }) => {
    return (
        <div>
            <div  className="containerResume">
                {/* <div className="looks">
                    {/* 
                    Este é um campo que apresenta o numero total
                    de "looks" (Conjuntos, vestidos ou peças de 
                        roupa)                 
                    */}
                    {/* <p>Looks</p>
                    <Looks className="looks" value={quantidade} />
                    
                </div>  */}

                <div>
                    <div className="entradas">
                        <p>entradas</p>
                        <ResumeItem value={entradas} />
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