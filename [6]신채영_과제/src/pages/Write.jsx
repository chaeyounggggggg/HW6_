import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/styledWrite";

const Write = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const goBack = () => {
        navigate(`/`);
      };
    const write = () => {
        console.log("제목:",title);
        console.log("날짜: ",formattedDate)
        console.log("내용:",content);
        
    };
    const contentChange = (event) =>{
        setContent(event.target.value);
    };
    const titleChange =(event) =>{
        setTitle(event.target.value);
    };
    const today = new Date();
    const formattedDate =`${today.getFullYear()}.${today.getMonth()+1}.${today.getDate()}`
    return (
        <W.Container>
            <W.Box>
                <W.BackBtn onClick={goBack}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
                        alt="back"
                        width="30px"
                    />
                </W.BackBtn>
               <W.Content>
                    <W.Title>
                        <W.Input
                            value={title} 
                            placeholder="제목을 입력해 주세요"
                            onChange={titleChange}
                        />
                    </W.Title>
                    <W.ContentBox>
                        <W.Date>{formattedDate}</W.Date>
                        <W.Textarea
                            value={content}
                            placeholder="내용 입력"
                            onChange={contentChange}
                        />
                    </W.ContentBox>
                    <W.WriteBtn onClick={write}>작성하기</W.WriteBtn>
               </W.Content>
            </W.Box>
        </W.Container>
    )
}
export default Write;