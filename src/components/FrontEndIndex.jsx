import React from 'react'

const FrontEndIndex = props => {

    const { style, title } = props.data

    return (
        <div>
            {`Estilo: ${style} Tìtulo: ${title}`}
        </div>
    )
}

export default FrontEndIndex