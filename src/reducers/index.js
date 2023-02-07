import { EKLE, ISARETLE } from "../actions";

const INITIAL_STATE={
    liste:[
    {id:1,baslik:"Alisveris Yap",yapildi:false},
    {id:2,baslik:"Çocuğu okuldan al",yapildi:false},
    {id:3,baslik:"Ödev yaptır",yapildi:false}
  ]}


export const reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case EKLE:return{...state,liste:[...state.liste,
            {id:state.liste.length+1,
             baslik:action.payload,
             yapildi:false}
            ]
        }
        case ISARETLE:return{...state,liste:state.liste.map(item=>item.id===action.payload ? {...item,yapildi: ! item.yapildi}:item)}
        default :
         return state;
    };
}