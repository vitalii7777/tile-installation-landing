import { request } from "./request";

export const emailSend  = async (form) => request(`http://80.249.147.193:5000/api/mail-send`, 'POST', { form });
