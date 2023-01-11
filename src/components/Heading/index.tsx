import { useEffect, useState } from "react";
import "../../animations/animation.scss";
import "./styles.scss";

interface Props {
    title: String[];
}

export function Heading(props: Props) {
    const [initialScreenIndex, setInitialScreenIndex] = useState(0);
    const secondsPerScreen = 3;
    const [anim, setAnim] = useState("");
    const animeBefore = () => {
        anim === "animate-before" ? setAnim("animate-after") : setAnim("animate-before");
    }
    useEffect(() => {
        setTimeout(() => {
            animeBefore();
            setInitialScreenIndex((prev) => {
                return prev >= 3 ? 0 : prev + 1;
            })
        }, (1000 * secondsPerScreen))
    }, [anim])

    return (
        <div className="heading">
            <span className="text">
                Get your next
            </span>
            <div className="wrapper">
                <div className="offset">
                    <h2 className={`text ${anim}`}>
                        {props.title[initialScreenIndex]}

                    </h2>
                </div>
            </div>
        </div>
    )
};