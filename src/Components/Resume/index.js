import React from "react";
import { Looks } from "../Looks";
import { ResumeItem } from "../ResumeItem";
import "./resume.css"

export const Resume = ({ entradas, saida, total, quantidade }) => {
    return (
        <>
            <div id="containerResume">
                {/* <div className="looks">
                    {/* 
                    Este é um campo que apresenta o numero total
                    de "looks" (Conjuntos, vestidos ou peças de 
                        roupa)                 
                    */}
                {/* <p>Looks</p>
                    <Looks className="looks" value={quantidade} />
                    
                </div>  */}
                <spa id="entradas">
                    <p>entradas</p>
                    <ResumeItem value={entradas} />
                </spa>
                <span id="saidas">
                    <p>saidas</p>
                    <ResumeItem value={saida} />
                </span>
                <span id="total">
                    <p>total</p>
                    <ResumeItem value={total} />
                </span>


            </div>
        </>
    )
};