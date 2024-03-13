const getExpiryDate = (days) => {
    const date = new Date();
    date?.setDate(date?.getDate() + days);
    return date;
}
const getOneDayBeforeDate = () => {
    const date = new Date();
    date?.setDate(date.getDate() - 1);
    return date;
}

const convertCookiesToJSON = () => {
    const cookiesArr = window.document.cookie.split(";");
    const cookiesObj = cookiesArr?.reduce((init, val) => {
        const [key, value] = val?.split('=');
        init[key?.trim()] = value?.trim()
        return init;
    }, {})
    return cookiesObj;
}
export class Cookies {
    static hasActiveSession = () => {
        if (typeof window === 'undefined') return;
        const cookiesObj = convertCookiesToJSON();
        if (cookiesObj["token"]) {
            return true;
        }
        return false
    }
    static setItem(key, value, days) {
        if (typeof window === 'undefined') return;
        if (days) {
            document.cookie = `${key}=${value};expires=${getExpiryDate(days)}`
        } else {
            document.cookie = `${key}=${value}`
        }

    }
    static getItem(key) {
        const cookiesObj = convertCookiesToJSON();
        return cookiesObj[key];
    }
    static removeItem(key) {
        if (typeof window === 'undefined') return;
        document.cookie = `${key}=;expires=${getOneDayBeforeDate()}`
    }
    static clear() {
        if (typeof window === 'undefined') return;
        const cookieArr = document?.cookie?.split(";");
        cookieArr?.forEach((val) => {
            const [key] = val.split('=');
            document.cookie = `${key}=;path=/;expires=${getOneDayBeforeDate()}`
        })
    }
}