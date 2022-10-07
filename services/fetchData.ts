import axios from "axios";

export const fetchHandler = async (url: string, url7: string) => {
	try {
		const response = await axios.get(url);
		const responseWeek = await axios.get(url7);
		const res = response.data;
		const res7 = responseWeek.data;

		return { res, res7 };
	} catch (err) {
		if (err) {
			return;
		}
	}
};
