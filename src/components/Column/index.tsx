import { useEffect, useState } from "react";
import { Item } from "../Item";
import "../../animations/animation.scss";
import "./styles.scss";
import { Props } from "../Grid";


export function Column(props: Props) {
    const secondsPerScreen = 3;
    const [anim, setAnim] = useState("");
    const [randomColor, setRandomColor] = useState(0);
    const animeBefore = () => {
        anim === "animate-before" ? setAnim("animate-after") : setAnim("animate-before");
    }
    useEffect(() => {
        setTimeout(() => {
            animeBefore();
        }, (1000 * secondsPerScreen))
    }, [anim]);
    useEffect(() => {
        const interval = setTimeout(() => {
            setRandomColor(0)
            setRandomColor(Math.round(Math.random() * (0 + 6)))
        }, (1000 * secondsPerScreen))
    }, [randomColor]);
    return (
        <div className={`column ${anim}`}>
            <div>
                <Item color={`${props.color[randomColor]}`} />
            </div>
            <div>
                <Item color={`${props.color[randomColor]}`} />
            </div>
            <div>
                <Item color={`${props.color[randomColor]}`} />
            </div>
            <div>
                <Item color={`${props.color[randomColor]}`} />
            </div>
            <div>
                <Item color={`${props.color[randomColor]}`} />
            </div>
            {console.log(`${randomColor}`)}
        </div>
    )
};