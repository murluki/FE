const GetStatus = async () =>
	await fetch("https://launchpad.tonana.org:9967/API/getStatus", {
		method: "GET"
	}).then((e: any) => e.json());

export default GetStatus;
