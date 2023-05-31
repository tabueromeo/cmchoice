import { axios } from "axios";
import { accountService } from "./accountService";
import router from "@/router";

const Axios = axios.create({
	baseURL: "http://127.0.0.1:5000/api/v1",
});

// Injection du token
Axios.interceptors.request.use((request) => {
	//Si connectee on ajoute le token dans l'entete
	if (accountService.isLogged()) {
		request.headers.Authorization = " " + accountService.getToken();
	}
	console.log(request);

	return request;
});
