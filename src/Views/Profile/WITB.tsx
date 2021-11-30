import React, {FC} from 'react'
import {Card} from 'antd'

const {Meta} = Card;
const WITB : FC = () => {
    return (
        <Card hoverable>
            <Meta title="Min bag" description="Innehåll i min bag"/>
            <div></div>
        </Card>
    )
}
export default WITB