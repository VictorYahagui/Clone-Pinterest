import { Grid } from "../Grid";
import "./styles.scss";

export function ContainerGrids() {
    let isActive = false;
    const exitDelay = 200 * 7;
    return (
        <div className="container">
            {<Grid color={["blue", "red", "purple", "yellow", "indigo", "orange", "green"]} />}
        </div>
    )
};