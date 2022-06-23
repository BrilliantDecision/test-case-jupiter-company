import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function Cards({ topic, setTopic, lastCard, setLastCard}) {
    const dispatch = useDispatch();
    const tempCards = useSelector(state => state.cards);
    const [delCard, setDelCard] = useState();
    const [delFlag, setDelFlag] = useState(false);
    let cards = [...tempCards];

    if(topic !== "all") cards = tempCards.filter((v) => v.topic === topic);

    const onClickCard = (e, id) => {
        if(!e.target.style.outline) {
            e.target.style.outline = "4px solid lightgreen";
            if(lastCard) {
                lastCard.target.style.outline = "";
            }
            setLastCard(() => e);
            setDelFlag(() => true);
        }
        else {
            e.target.style.outline = "";
            setLastCard(() => "");
            setDelFlag(() => false);
        }
        setDelCard(() => id);
    }

    // убрать выделение
    const onClickButtonTopic = (e, topic) => {
        setTopic(() => topic);
        e.target.style.outline = "0";
        lastCard.target.style.outline = "";
        setLastCard(() => "");
    }

    const onClickPTopic = (e) => {
        e.target.style.outline = "0";
    }

    const synchronize = (e) => {
        if(e.code === "Delete" && delFlag) {
            dispatch({type: "DELETE_CARD", payload: delCard});
            cards = [...tempCards];
        }
    }

    return (
        <article>
            {
                cards.map((v) =>
                    <div
                        key={v.id}
                        id={v.id}
                        className="card">
                        <div
                            className="background-img-block"
                            onClick={(e) => onClickCard(e, v.id)}
                            onKeyDown={(e) => synchronize(e)}
                            tabIndex="0"
                            style={{
                            backgroundImage: `url(${v.picUrl})`
                        }}
                        ></div>
                        <button className="topic-link" onClick={(e) => onClickButtonTopic(e, v.topic)}>{v.topic}</button>
                        <p className="topic-name" onClick={(e) => onClickPTopic(e)}>{v.name}</p>
                    </div>
                )
            }
        </article>
    )
}

export default Cards;
