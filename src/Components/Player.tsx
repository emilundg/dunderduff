import React, {FC} from 'react'
import {Card, Row, Statistic} from 'antd'

const {Meta} = Card;
const Player : FC = () => {
    return (
        <Card
            hoverable
            style={{
            width: 300
        }}
            cover={< img alt = "example" src = {
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%" +
                    "2Fpresto%2F2019%2F04%2F11%2FPGRE%2F61f560ba-bdf3-4878-a1c3-b4ef7dafa8c7-USATSI_1" +
                    "2513262.jpg%3Fcrop%3D4133%2C2351%2Cx0%2Cy147%26width%3D3200%26height%3D1680%26fi" +
                    "t%3Dbounds&f=1&nofb=1"
        } />}>
            <Meta title="Ken Ring" description="profilbild"/>
            <div>
                <Row>
                    Age - 29
                </Row>
                <Row>
                    Handicap - 17
                </Row>
                <Row>
                    Pace - Supahfast
                </Row>
                <Row>
                    Tee - 56
                </Row>
                <Row>
                    Club - Albatross GK
                </Row>
            </div>
            <Row align="middle" justify="space-between">
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                    color: '#3f8600'
                }}
                    suffix="%"/>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{
                    color: '#3f8600'
                }}
                    suffix="%"/>
            </Row>
        </Card>
    )
}
export default Player