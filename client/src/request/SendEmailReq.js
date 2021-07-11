import { request } from "./request";

export const emailSend  = async (form) => request(`/api/mail-send`, 'POST', { form });
