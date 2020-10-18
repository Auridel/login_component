const checkEmail = (value) => {
    const reg = new RegExp(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/gi);
    const res = reg.test(value)
    return res;
};

const checkPass = (passRef, confirmRef) => {
    if((passRef === confirmRef)
        && (passRef !== "" && confirmRef !== "")) return "ok";
    else if(passRef !== "" && confirmRef !== "") return "fail";
}

const phoneMask = (e, ref) => {

        const setPosition = (pos, elem) => {
            if(e.type !== "blur") elem.focus();

            if(elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if(elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse();
                range.moveStart("character", pos);
                range.moveEnd("character", pos);
                range.select();
            }
        };

        let mask = "+7 (___) ___ __ __",
            i = 0,
            def = mask.replace(/\D/g, ""),
            exact = ref.current.value.replace(/\D/g, "");

        if(def.length >= exact.length)
            exact = def;

        ref.current.value = mask.replace(/./g, (char) => {
            return (/[_\d]/).test(char) && i < exact.length ? exact.charAt(i++) : i > exact.length ? "" : char;
        });

        let lastNum = 0;
        ref.current.value.split("").forEach((item, idx) => {
            if((/[0-9]/).test(item)) lastNum = idx;
            if(idx === 1){
                if(item !== "7") ref.current.value = "+7" + ref.current.value.slice(2);
            }
        });
        setPosition(lastNum + 1, ref.current);

        if(e.type === "blur" || e.type === "focus"){
            if(ref.current.value.length === 2) ref.current.value = "";
            else setPosition(ref.current.value.length, ref.current);
        }
}

export {
    checkEmail,
    checkPass,
    phoneMask
}