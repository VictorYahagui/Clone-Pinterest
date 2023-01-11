
import { useEffect, useState } from "react";
import { Column } from "../Column";
import "./styles.scss";

export interface Props {
    color: String[];
}

export function Grid(props: Props) {
    return (
        <div className={`grid active`}>
            <Column color={props.color} />
            <Column color={props.color} />
            <Column color={props.color} />
            <Column color={props.color} />
            <Column color={props.color} />
            <Column color={props.color} />
            <Column color={props.color} />
        </div>
    )
};