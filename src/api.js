import promise from "es6-promise"
import "whatwg-fetch"

export default {
	async getList(page, tag) {
		var response = await fetch(`https://cnodejs.org/api/v1/topics?page=${page}&limit=20&tab=${tag}`, {
			//credentials: "include",
			mode: "cors",
			headers: {
				"X-Requested-With": "XMLHttpRequest"
			}
		}).catch((error) => {
			console.log(error)
		})

		return await response.json().catch((error) => {
			console.log(error)
		})
	},
	async getTopic(topicId) {
		var response = await fetch(`https://cnodejs.org/api/v1/topic/${topicId}`, {
			//credentials: "include",
			mode: "cors",
			headers: {
				"X-Requested-With": "XMLHttpRequest"
			}
		}).catch((error) => {
			console.log(error)
		})

		return await response.json().catch((error) => {
			console.log(error)
		})
	},
	async like(id, token) {
		var response = await fetch(`https://cnodejs.org/api/v1/reply/${id}/ups`, {
			//credentials: "include",
			method: "POST",
			mode: "cors",
			headers: {
				"X-Requested-With": "XMLHttpRequest",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: `accesstoken=${token}`
		}).catch((error) => {
			console.log(error)
		})

		return await response.json().catch((error) => {
			console.log(error)
		})
	}
}