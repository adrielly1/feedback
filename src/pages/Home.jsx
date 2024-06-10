import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankYouIMG from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export  function Home() {
    const [mostrarResultado, setMostrarResultado] = useState(false)
    const [feedbackNote, setFeedbackNote] = useState(0)

    function handfleFeedbackButtonClick() {
        const feedback = Number(event.target.innerText)

        setFeedbackNote(feedback)
    }
    
    function handleSubmit(){
        if (feedbackNote === 0) return

        setMostrarResultado(true)
    }
  return (
    mostrarResultado === false ? (
    <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimetno?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtonContainer>
            <button konClick={handfleFeedbackButtonClick}>1</button>
            <button onClick={handfleFeedbackButtonClick}>2</button>
            <button onClick={handfleFeedbackButtonClick}>3</button>
            <button onClick={handfleFeedbackButtonClick}>4</button>
            <button onClick={handfleFeedbackButtonClick}>5</button>

            <button onClick={handleSubmit}>Enviar</button>
        </ButtonContainer>
    </CardContainer >
     ) : (
        <CardContainer>
            <img src={thankYouIMG} alt="imagem de agradecimento" />

            <ResultContainer> 
                <p>Você selecionbou {feedbackNote} de 5</p>
            </ResultContainer>
            <h1>Obrigado</h1>
            <p>agradecemos por dedicar um mmomento para nos avaliar. Se precisar de mais suporte, não exite em entrar em contato

            </p>
        </CardContainer>
    )
  )
}
