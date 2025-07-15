import { userService } from "../api/userService.js";

export async function showLogoutView(ctx) {
    await userService.logout();
    ctx.updateNav();
    ctx.goTo("/")
}