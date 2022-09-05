import { FC } from "react";
import { dataSkills } from "../../src/data/skill";

export const Skills: FC = () => {
    return (
        <>
            {dataSkills.map(({name, level}, i) => (
                <div className="skill" key={i}>
                    <h4> {name} </h4>
                    <div className="progress__content">
                        <div className="progress" style={{width: `${level}%`}} ></div>
                    </div>
                </div>
            ))}
        </>
    )
}
