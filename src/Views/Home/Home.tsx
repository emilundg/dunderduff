import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom';
import {Button, Typography} from 'antd'

const {Title, Paragraph} = Typography;
const Home : FC = () => {
    const navigate = useNavigate();

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
                    backgroundColor: 'rgba(0,0,0,0.13)',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <div
                        style={{
                        width: '24rem',
                        height: '12rem'
                    }}>
                        <Title style={{color: 'rgba(255,255,255,0.89)'}}>Välkommen till Dunderduffarna</Title>
                        <Paragraph style={{color: 'rgba(255,255,255,0.89)'}}>Ditt sätt att hitta passande folk att spela med!</Paragraph>
                        <Button type="primary" onClick={() => navigate('find')}>HITTA SPELPARTNER</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home