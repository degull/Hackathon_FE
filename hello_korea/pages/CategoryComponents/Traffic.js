import React, { useState } from 'react';
import * as S from '../../styles/CategoryComponents/Traffic.styled';
import Header from '../../components/MainComponents/Header';
import Body from '../../components/CategoryComponents/Traffic/Body';


export default function Traffic(){

   const [selectedItem, setSelectedItem] = useState(null);

   const handleItemClick = (index) => {
      setSelectedItem(index);
   };

   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body selectedItem={selectedItem} onItemClick={handleItemClick}/>
         </S.Container>
      </S.Wrapper>
   );
};
