import React, {FC} from 'react'
import {Button, Typography} from 'antd'

const {Title, Paragraph} = Typography;
const Home : FC = () => {
    return (
        <div>
            <div
                style={{
                width: '100%',
                position: 'relative',
                height: 500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url(https://images.unsplash.com/photo-1500932334442-8761ee4810a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z29sZiUyMGNvdXJzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60)'
            }}>
                <div
                    style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '24rem',
                    height: '12rem'
                }}>
                    <Title>Välkommen till Dunderduffarna!</Title>
                    <Paragraph>Ditt sätt att hitta passande folk att spela med!</Paragraph>
                    <Button type="primary">HITTA SPELPARTNER</Button>
                </div>
            </div>
        </div>
    )
}
export default Home