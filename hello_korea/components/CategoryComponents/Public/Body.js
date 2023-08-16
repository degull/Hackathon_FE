// 각 카테고리 클릭시 나오는 컨텐츠 파일 분리
import React from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
import Comprehensive from './Category/Comprehensive';
import Safety from './Category/Safety';
import Link from 'next/link'

export default function Body({selectedItem, onItemClick}) {

    const ContentComponents = [Comprehensive, Safety];
    const menuItems = ['Comprehensive Certification', 'Safety'];
    let contentComponent;
    if (selectedItem !== null) {
        contentComponent = ContentComponents[selectedItem]();
    } else {
        contentComponent = Comprehensive();
    }

    return (

        <S.Container>
            <S.Title>Public Service</S.Title>
            <S.MenuBar onItemClick={onItemClick}>
                {
                    menuItems.map((item, index) => (
                        <li
                            key={index}
                            isSelected={index === selectedItem}
                            onClick={() => onItemClick(index)}
                            style={{color: index === selectedItem ? '#007bff' : '#686868'}}>
                            {item}
                        </li>
                    ))
                }
            </S.MenuBar>
            <S.Line/>
            <TipBox/> 
            {contentComponent}
            <S.CopyrightContainer>
                <S.Copyright>@ Copyright</S.Copyright>
            </S.CopyrightContainer>
        </S.Container>
    );
};