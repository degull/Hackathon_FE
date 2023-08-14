import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

export const Title = styled.div`
  color: #686868;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
`;

export const MenuBar = styled.div`
    display: flex;
    listStyle: none;
    margin: 5px;

    & > li {
      margin: 0;
      padding: 10px;
      font-family: Inter;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #686868;
      cursor: pointer;
    }
`;

export const Line = styled.div`
   border-bottom : 1px solid #000;
`;

export const MenuBottom = styled.div`
  width: 299px;
  height: 63px;
  left: 27px;
  top: 304px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
`;

export const MenuBottom1Icon = styled.img`
   width: 41px;
   height: 38px;
   position: absolute;
   margin: 10px 0 0 15px;

`;

export const MenuBottom1Text1 = styled.div`
  position: absolute;
  width: 137px;
  height: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #535353;
  text-align: left;
  margin: 10px 60px;
`;

export const MenuBottom1Text2 = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #737373;
  text-align: left;
  margin: 28px 0 25px 60px;
`;
 

export const CopyrightContainer = styled.div`
   width: 100%;
   height: 100%;

`

export const Copyright = styled.div`
  width: 358px;
  height: 70px;
  background: #4979D1;
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin: 220px -10px 0;
  cursor: default;

`;
