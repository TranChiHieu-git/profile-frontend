import * as typeAct from "../../../constant/type/type";

export const danhsach_thanhpho = (state = [], action) => {
    const {type, values} = action;
    switch (type) {
        case typeAct.THANHPHO_DANHSACH:
            return values ? [...values] : [...state];
        default:
            return [...state];
    }
}