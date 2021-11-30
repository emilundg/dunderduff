import React, {FC} from 'react'
import {Card} from 'antd'

const {Meta} = Card;
const MyDistances : FC = () => {
    return (
        <Card hoverable>
            <Meta title="Mina avstånd" description="avstånd"/>
            <div></div>
        </Card>
    )
}
export default MyDistances