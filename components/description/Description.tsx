import { FC } from "react";
import { exp } from "../../src/data/experience";


export const Description: FC = () => {

    return (
        <>
            {
                exp.map(({ id, name_work, description, tech_stack, from, to }) => (
                    <div key={id} className="description" >
                        <h3> {name_work} </h3>
                        <p> {description} </p>
                        {
                            tech_stack && (
                                <b>TechStack: {tech_stack} </b>
                            )
                        }
                        <p> {from} - {to} </p>
                        <div>
                            <hr />
                        </div>
                    </div>
                ))
            }
        </>
    )
}
