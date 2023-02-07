export const EKLE="EKLE";
export const SIL="SIL";
export const ISARETLE="ISARETLE";


export const list_add =(text)=>{
    return {type:EKLE,payload:text}
}

export const line_through=id=>{
    return{type:ISARETLE,payload:id}
}

export const line_delete=()=>{
    return{type:SIL};
}