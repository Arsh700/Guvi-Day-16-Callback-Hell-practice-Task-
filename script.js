let time = document.getElementById('time').innerText
time = Number(time)

let clear = setTimeout(() => {
	let call_time = 1
	document.getElementById('time').innerText = call_time
	return setTimeout(() => {
		let call_time = 2
		document.getElementById('time').innerText = call_time
		return setTimeout(() => {
			let call_time = 3
			document.getElementById('time').innerText = call_time
			return setTimeout(() => {
				let call_time = 4
				document.getElementById('time').innerText = call_time
				return setTimeout(() => {
					let call_time = 5
					document.getElementById('time').innerText = call_time
					return setTimeout(() => {
						let call_time = 6
						document.getElementById('time').innerText = call_time
						return setTimeout(() => {
							let call_time = 7
							document.getElementById('time').innerText = call_time
							return setTimeout(() => {
								let call_time = 8
								document.getElementById('time').innerText = call_time
								return setTimeout(() => {
									let call_time = 9
									document.getElementById('time').innerText = call_time
									return setTimeout(() => {
										let call_time = 10
										document.getElementById('time').innerText = call_time
										return setTimeout(() => {
											document.getElementById('time-container').style.left =
												'2.5em'
											let call_time = 'Happy Independence Day'
											document.getElementById('time').innerText = call_time
										}, 1000)
									}, 1000)
								}, 1000)
							}, 1000)
						}, 1000)
					}, 1000)
				}, 1000)
			}, 1000)
		}, 1000)
	}, 1000)
}, 1000)
