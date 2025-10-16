import React from 'react'

const Temp = async() => {
    await new Promise((res ) => setTimeout(res, 3000))
    return (
        <div>
            hello
        </div>
    )
}

export default Temp