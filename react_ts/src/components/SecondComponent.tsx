import React from 'react';

interface Props {
    name: string;
}

const SecondComponent = (props: Props) => {
    return (
        <div>
            <h2>Segundo Componente</h2>
            <p>O nome dele é {props.name}</p>
        </div>
    );
}

export default SecondComponent;
