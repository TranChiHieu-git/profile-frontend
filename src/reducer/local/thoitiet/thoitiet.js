import * as typeAct from "../../../constant/type/type";

export const thoitiet_info = (state = [], action) => {
    const {type, values} = action;
    switch (type) {
        case typeAct.THOITIET_DANHSACH:
            return values ? [...values] : [...state];
        default:
            return [...state];
    }
}