 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuBox from '../../../../components/AppComponents/MenuBox';
/*
export default function Content() {
    const [menuData, setMenuData] = useState([]); // 메뉴 데이터를 저장할 상태

    useEffect(() => {
        // API에서 메뉴 데이터를 가져오는 함수
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('https://catchkorea-a5799a624288.herokuapp.com/post/{category_id}'); // API 엔드포인트
                setMenuData(response.data); // API에서 받아온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData(); // 메뉴 데이터를 가져오는 함수 호출
    }, []);

    return (
        <>
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Goverment24"
            iconSrc='\AppIcon\Goverment24.png'
            text1='Goverment 24'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/MobileID"
            iconSrc='\AppIcon\MobileID.png'
            text1='Mobile ID'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />    
        <MenuBox 
            link = "/InfoComponents/Public/Comprehensive/Pass" 
            iconSrc = '\AppIcon\Pass.png' 
            text1 = 'Pass' 
            text2 = 'The most popular Korean subway application' 
            hashtag1={menuData.hashtag}
        /> 
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Hometax"
            iconSrc='\AppIcon\Hometax.png'
            text1='Hometax'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Jiro"
            iconSrc='\AppIcon\Jiro.png'
            text1='Mobile Jiro'
            text2='The most popular Korean Bus application'
            hashtag1={menuData.hashtag}
        />
    </>
    );
};
 
 */

export default function Content() {
    const [menuData, setMenuData] = useState([]); // 메뉴 데이터를 저장할 상태

    useEffect(() => {
        // API에서 메뉴 데이터를 가져오는 함수
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('https://catchkorea-a5799a624288.herokuapp.com/'); 
                setMenuData(response.data); // API에서 받아온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData(); // 메뉴 데이터를 가져오는 함수 호출
    }, []);

    return (
        <>
            {menuData.map(menu => (
                <MenuBox
                    link={menu.serviceLink}
                    iconSrc={menu.imageLink}
                    text1={menu.title}
                    text2={menu.contents}
                    hashtag1={menu.hashtag} // menu 객체의 hashtag 필드 사용
                />
            ))}
        </>
    );
};
