import styled from "styled-components/native";


export const ScreenOne = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    background: #276EF1;
    width: 100%;

`
export const Container = styled.View`
    gap: 60px;
    position: absolute;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonNext = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    width: 80%;
    height: 45px;
    position: absolute;
    flex-direction: row;
    bottom: 40px;
`