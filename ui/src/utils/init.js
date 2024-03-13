import { Cookies } from "@/common/cookies";

export const init = {
    isLoggedIn: Cookies.hasActiveSession(),
    isShowLoader: false
}