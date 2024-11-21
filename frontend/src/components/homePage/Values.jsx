import React from "react";
import Card from "./Card";

const Values = () => {
    return (
        <section className="pt-20 pb-24 bg-gray-100">
            <div className="container mx-auto px-16">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 uppercase">
                    Our Values
                </h2>

                {/* Cards */}
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Card 1 */}
                    <Card
                        colScheme={"bg-blue-100 text-blue-500"}
                        icon={"fas fa-bolt text-2xl"}
                        title={"Accessibility"}
                        para={"Access your diary digitally with us, ensuring seamless availability"}>
                    </Card>

                    {/* Card 2 */}
                    <Card
                        colScheme={"bg-green-100 text-green-500"}
                        icon={"fas fa-shield-alt text-2xl"}
                        title={"Security"}
                        para={"Keep your data confidential by protecting it with out password lock feature"}>
                    </Card>

                    {/* Card 3 */}
                    <Card
                        colScheme={"bg-yellow-100 text-yellow-500"}
                        icon={"fas fa-star text-2xl"}
                        title={"Simplicity"}
                        para={"User friendly application, easy to get started, featured for a good interaction"}>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Values;
