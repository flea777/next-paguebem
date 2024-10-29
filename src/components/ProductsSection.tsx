import React from "react";
import PagueBemCard from "./PagueBemCard";
import Solutions from "./Solutions";

const ProductsSection = () => {
    return(
        <main className="flex max-w-5xl mx-auto flex flex-wrap justify-center gap-6 p-8">
            <div>
                <Solutions/>
            </div>

            <div>
                <PagueBemCard
                title="Pague Bem Recupera"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>

            <div>
                <PagueBemCard
                title="Pague Bem Conta"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>

            <div>
                <PagueBemCard
                title="Pague Bem Protege"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>

            <div>
                <PagueBemCard
                title="Pague Bem Localize"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>

            <div>
                <PagueBemCard
                title="Pague Bem Conversas"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>  
        </main>
    )
}

export default ProductsSection;