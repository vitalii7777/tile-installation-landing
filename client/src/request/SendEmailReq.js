import { request } from "./request";

export const emailSend  = async ({ message }) => request(`/api/mail-send`, 'POST', { message });
