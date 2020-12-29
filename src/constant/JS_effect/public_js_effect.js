export const scrollEffect = (id, khoangCachMotBuoc = 1, time = 25) => {
    let viTriCanDen = document.getElementById(id).offsetTop
    let viTriHienTai = window.pageYOffset;
    if (viTriCanDen < viTriHienTai) {
        let run = setInterval(function () {
            viTriHienTai -= khoangCachMotBuoc;
            window.scrollTo(0, viTriHienTai);
            if (viTriHienTai - viTriCanDen <= 10) {
                khoangCachMotBuoc = 1;
            }
            if (viTriHienTai - viTriCanDen > 10) {
                khoangCachMotBuoc = 1;
            }
            if (viTriHienTai - viTriCanDen > 20) {
                khoangCachMotBuoc = 2;
            }
            if (viTriHienTai - viTriCanDen > 40) {
                khoangCachMotBuoc = 4;
            }
            if (viTriHienTai - viTriCanDen > 60) {
                khoangCachMotBuoc = 6;
            }
            if (viTriHienTai - viTriCanDen > 100) {
                khoangCachMotBuoc = 11;
            }
            if (viTriHienTai - viTriCanDen > 200) {
                khoangCachMotBuoc = 50;
            }
            if (viTriHienTai - viTriCanDen > 400) {
                khoangCachMotBuoc = 100;
            }
            if (viTriHienTai - viTriCanDen > 800) {
                khoangCachMotBuoc = 200;
            }
            if (viTriHienTai - viTriCanDen > 1000) {
                khoangCachMotBuoc = 350;
            }
            if (viTriHienTai - viTriCanDen > 2000) {
                khoangCachMotBuoc = 400;
            }
            if (viTriHienTai - viTriCanDen > 3000) {
                khoangCachMotBuoc = 500;
            }
            if (viTriHienTai - viTriCanDen > 6000) {
                khoangCachMotBuoc = 700;
            }
            if (viTriHienTai - viTriCanDen > 8000) {
                khoangCachMotBuoc = 900;
            }
            if (viTriHienTai - viTriCanDen > 10000) {
                khoangCachMotBuoc = 1000;
            }
            if (viTriHienTai - viTriCanDen > 20000) {
                khoangCachMotBuoc = 2000;
            }
            if (viTriCanDen >= viTriHienTai) {
                clearInterval(run);
            }
        }, time);
    } else {
        let run = setInterval(function () {
            viTriHienTai += khoangCachMotBuoc;
            window.scrollTo(0, viTriHienTai);
            if (viTriCanDen - viTriHienTai <= 10) {
                khoangCachMotBuoc = 1;
            }
            if (viTriCanDen - viTriHienTai > 10) {
                khoangCachMotBuoc = 1;
            }
            if (viTriCanDen - viTriHienTai > 20) {
                khoangCachMotBuoc = 2;
            }
            if (viTriCanDen - viTriHienTai > 40) {
                khoangCachMotBuoc = 4;
            }
            if (viTriCanDen - viTriHienTai > 60) {
                khoangCachMotBuoc = 6;
            }
            if (viTriCanDen - viTriHienTai > 100) {
                khoangCachMotBuoc = 11;
            }
            if (viTriCanDen - viTriHienTai > 200) {
                khoangCachMotBuoc = 50;
            }
            if (viTriCanDen - viTriHienTai > 400) {
                khoangCachMotBuoc = 100;
            }
            if (viTriCanDen - viTriHienTai > 800) {
                khoangCachMotBuoc = 200;
            }
            if (viTriCanDen - viTriHienTai > 1000) {
                khoangCachMotBuoc = 350;
            }
            if (viTriCanDen - viTriHienTai > 2000) {
                khoangCachMotBuoc = 400;
            }
            if (viTriCanDen - viTriHienTai > 3000) {
                khoangCachMotBuoc = 500;
            }
            if (viTriCanDen - viTriHienTai > 6000) {
                khoangCachMotBuoc = 700;
            }
            if (viTriCanDen - viTriHienTai > 8000) {
                khoangCachMotBuoc = 900;
            }
            if (viTriCanDen - viTriHienTai > 10000) {
                khoangCachMotBuoc = 1000;
            }
            if (viTriCanDen - viTriHienTai > 20000) {
                khoangCachMotBuoc = 2000;
            }
            if (viTriCanDen <= viTriHienTai) {
                clearInterval(run);
            }
        }, time);
    }
}
export const scroll_on_top = (khoangCachMotBuoc = 1, time = 25) => {
    let viTriHienTai = window.pageYOffset;
    if (viTriHienTai > 0) {
        let run = setInterval(function () {
            viTriHienTai -= khoangCachMotBuoc;
            window.scrollTo(0, viTriHienTai);
            if (viTriHienTai >= 10) {
                khoangCachMotBuoc = 1;
            }
            if (viTriHienTai > 10) {
                khoangCachMotBuoc = 1;
            }
            if (viTriHienTai > 20) {
                khoangCachMotBuoc = 2;
            }
            if (viTriHienTai > 40) {
                khoangCachMotBuoc = 4;
            }
            if (viTriHienTai > 60) {
                khoangCachMotBuoc = 6;
            }
            if (viTriHienTai > 100) {
                khoangCachMotBuoc = 11;
            }
            if (viTriHienTai > 200) {
                khoangCachMotBuoc = 50;
            }
            if (viTriHienTai > 400) {
                khoangCachMotBuoc = 100;
            }
            if (viTriHienTai > 800) {
                khoangCachMotBuoc = 200;
            }
            if (viTriHienTai > 1000) {
                khoangCachMotBuoc = 350;
            }
            if (viTriHienTai > 2000) {
                khoangCachMotBuoc = 400;
            }
            if (viTriHienTai > 3000) {
                khoangCachMotBuoc = 500;
            }
            if (viTriHienTai > 6000) {
                khoangCachMotBuoc = 700;
            }
            if (viTriHienTai > 8000) {
                khoangCachMotBuoc = 900;
            }
            if (viTriHienTai > 10000) {
                khoangCachMotBuoc = 1000;
            }
            if (viTriHienTai > 20000) {
                khoangCachMotBuoc = 2000;
            }
            if (viTriHienTai <= 0) {
                clearInterval(run);
            }
        }, time);
    }
}
export const type_write = (id, txtArray, speed = 100, delay_Show_value = 4000, delay_Change_Value = 500) => {
    let i = 0;
    let vector = "right";
    let index = 0;
    setInterval(() => {
        if (i < txtArray[index].length && document.getElementById(id) !== null && vector === "right") {
            if (txtArray[index].charAt(i) === " ") {
                document.getElementById(id).innerHTML += " " + txtArray[index].charAt(i + 1);
                i++
            } else {
                document.getElementById(id).innerHTML += txtArray[index].charAt(i);
            }
            i++;
            let delayWhenWrite;
            if (i >= txtArray[index].length) {
                delayWhenWrite = setTimeout(() => {
                    vector = "left";
                    speed = 10;
                }, delay_Show_value);
            }
            if (vector === "left") {
                clearTimeout(delayWhenWrite);
            }
        } else if (i > -1 && document.getElementById(id) !== null && vector === "left") {
            if (txtArray[index].substr(0, i).charAt(txtArray[index].substr(0, i).length - 1) === " ") {
                document.getElementById(id).innerHTML = txtArray[index].substr(0, i - 1);
            } else {
                document.getElementById(id).innerHTML = txtArray[index].substr(0, i);
            }
            i--;
            let delayWhenWrite;
            if (i < 0) {
                delayWhenWrite = setTimeout(() => {
                    vector = "right";
                    speed = 150;
                    if (index >= txtArray.length - 1) {
                        index = 0;
                    } else {
                        index++;
                    }
                }, delay_Change_Value);
            }
            if (vector === "right") {
                clearTimeout(delayWhenWrite);
            }
        }
    }, speed);
}
export const catch_scroll_mouse = () => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 200) {
            document.getElementById("menu-bar").classList.add("navbar-after-scroll");
        } else {
            document.getElementById("menu-bar").classList.remove("navbar-after-scroll");
        }
    });
}
export const changSelectMenu = (component) => {
    const arrayMenu = ["aboutme"];
    if (window.location.pathname.split("/")[1].toString() === component) {
        arrayMenu.map(item => {
            if (item === component) {
                document.getElementById(component).classList.add("active");
            } else {
                document.getElementById(item).classList.remove("active");
            }
        })
    }
}