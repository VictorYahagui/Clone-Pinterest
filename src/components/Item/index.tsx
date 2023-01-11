import "./styles.scss";


interface Props {
    color: string;
}

export function Item(props: Props) {
    return (
        <div className="item" style={{ backgroundColor: `${props.color}` }}>

        </div>
    )
};