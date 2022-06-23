
const defaultState = {
    cards: [

        {
            id: 0,
            picUrl: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            topic: 'design',
            name: "Name"
        },
        {
            id: 1,
            picUrl: "https://bukovskevrchy.pl/img/64c9c78b19101eadf6e459ddbb0fd69a.jpg",
            topic: 'design',
            name: "Name"
        },
        {
            id: 2,
            picUrl: "https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e",
            topic: 'design',
            name: "Name"
        },
        {
            id: 3,
            picUrl: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
            topic: 'branding',
            name: "Name"
        },
        {
            id: 4,
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O4ETRK0ZlpLhliSimPqY58Es8slxos29yB-THYPZRRFhFbq05p0c6ORt8u4DWoGTFxY&usqp=CAU",
            topic: 'illustration',
            name: "Name"
        },
        {
            id: 5,
            picUrl: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
            topic: 'illustration',
            name: "Name"
        },
        {
            id: 6,
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KkiKOa5Sfydg72I6zx6ZpDU8CClFy6G7lg&usqp=CAU",
            topic: 'motion',
            name: "Name"
        },
        {
            id: 7,
            picUrl: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
            topic: 'motion',
            name: "Name"
        },
        {
            id: 8,
            picUrl: "https://www.cbc.ca/kids/images/picture_header1140.jpg",
            topic: 'motion',
            name: "Name"
        },
    ]
}

let nameDuplicate = 0

const cardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "DELETE_CARD":
            return {cards: state.cards.filter((v) => v.id !== action.payload)}
        case "ADD_CARDS":
            nameDuplicate += 1;
            let id;
            try {
                id = state.cards[state.cards.length - 1].id + 1;
            } catch (e) {
                if(e instanceof TypeError) {
                    id = 0;
                }
            }
            return {...state, cards: [...(state.cards), ...(defaultState.cards.map((v) => ({
                    id: v.id + id,
                    picUrl: v.picUrl,
                    topic: v.topic,
                    name: v.name + nameDuplicate})))
                ]}
        default:
            return state;
    }
}

export default cardReducer;
