import { FormattedEvent } from "../../../../../../constants/types";

import { Wrapper } from "./styled";

interface CardModalProps extends FormattedEvent {}

const CardModal: React.FC<CardModalProps> = () => (
  <Wrapper>
    В общем, тут должна была быть модалка с данными, которые не поместились в
    карточку транзакции. Но сейчас уже пятница вечер. У моей девушки день
    рождения и все выходные я буду проводить с ней. А на следующей неделе у меня
    точно не будет энтузиазма её доделывать, да и зачем) Я считаю, что в этом
    репозитории более чем исчепывающе показаны мои навыки и вы оцените их по
    достоинству и сделаете верный вывод нужен ли вам такой разработчик и будем
    ли мы вместе строить web3.0
    <br />
    <br />
    Я попробовал здесь парочку новых для себя вещей, побаловался с кодом и
    устал. Но вы не подумайте обо мне плохо. У меня нет привычки недоделывать
    свою работу)
    <br />
    <br />
    <p>
      Всем спасибо за внимание и хороших выходных, красавчики и красавицы, а я
      пошёл собираться на каток)
    </p>
  </Wrapper>
);

export { CardModal };