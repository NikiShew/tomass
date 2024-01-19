let changeThemeElements = [
	'header-nav',
	'header-content',
	'main',
	'light-dark-theme',
]

//--плавная прокрутка

document.querySelectorAll('a').forEach(elem => {
	elem.addEventListener('click', function (e) {
		e.preventDefault()
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		})
	})
})
//---------------------

//-мигание иконки скролла

let scrollIcon = document.querySelector('.scrollDown')
setInterval(function () {
	scrollIcon.classList.toggle('opac')
}, 1000)

//---------------------

// ---- parallax -----

let bigElements = document.querySelectorAll('.bigIconHeader')
let aveElements = document.querySelectorAll('.avagageIconHeader')
let smallElement = document.querySelectorAll('.smallElements')
let headerTitle = document.querySelector('.header-title')
let headerSubText = document.querySelector('.header-subtitle')

//вывод title в спанах на страницу
let title = 'Print speed test'
let splited = title.split('')
// let mapes = splited.map(elem => `<span>${elem}</span>`)
// let mapes = splited.map(elem => {
// 	let span = document.createElement('span')
// 	span.innerText = elem
// 	return span
// })
splited.forEach(elem => {
	let span = document.createElement('span')
	span.innerText = elem
	headerTitle.appendChild(span)
})

// console.log(mapes)
// headerTitle.innerHTML = mapes.join('').toString()
//-------------------------------------------
function opacityForElements() {
	let childrens = headerTitle.children
	bigElements.forEach(elem => {
		elem.style.opacity = 0
	})

	aveElements.forEach(elem => {
		elem.style.opacity = 0
	})
	smallElement.forEach(elem => {
		elem.style.opacity = 0
	})
	headerSubText.style.opacity = 0
	for (let i = 0; i < childrens.length; i++) {
		childrens[i].style.opacity = 0
	}
}
opacityForElements()
let sec = 100
function writeHeaderTitle() {
	let childrens = headerTitle.children
	for (let i = 0; i < childrens.length; i++) {
		sec += 50
		setTimeout(() => {
			childrens[i].style.opacity = 1
		}, sec)
	}
}

let arges = [bigElements, aveElements, smallElement]
window.onload = () => {
	arges.forEach(elem => {
		elem.forEach(el => {
			setTimeout(() => {
				el.style.opacity = 1
			}, getRandomInt(100, 500))
		})
	})

	setTimeout(() => {
		headerSubText.style.opacity = 1
	}, getRandomInt(100, 500))
	writeHeaderTitle()

	if (localStorage.getItem('theme') == 'dark') {
		for (let i = 0; i < changeThemeElements.length; i++) {
			let elem = document.querySelector(`.${changeThemeElements[i]}`)
			elem.classList.add('dark_theme')
		}
	}
}

// функция для генерации рандомных чисел
function getRandomInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min) // Максимум не включается, минимум включается
}

//функция паралакс для повторного использования)
function parallax(element, x, y) {
	element.forEach((elem, i) => {
		let rotate = getRandomInt(-30, 30)
		elem.style.transform = `rotate(${rotate}deg)`
		window.addEventListener('mousemove', e => {
			const mouseX = e.clientX
			const mouseY = e.clientY

			let offsetBigX = (i + y) * x
			let offsetBigY = (i + y) * x

			let translateX = (mouseX / window.innerWidth) * offsetBigX
			let translateY = (mouseY / window.innerHeight) * offsetBigY

			elem.style.transform = `translate(-${translateX}px, -${translateY}px) rotate(${rotate}deg)`
		})
	})
}

parallax(bigElements, 30, 3)
parallax(aveElements, 10, 1.5)
parallax(smallElement, 6, 1)

//---------------------------------------

//---- burger menu -----
let burgerBtn = document.querySelector('.burger-menu-icon')
let addActiveBtn = document.querySelectorAll('.addActive')

burgerBtn.addEventListener('click', () => {
	addActiveBtn.forEach(elem => {
		elem.classList.toggle('active')
	})
	document.body.classList.toggle('no-scroll')
})

//header-nav header-content main dark_theme light-dark-theme
//Смена темы

let changeThemeBtn = document.querySelector('.light-dark-theme')
if (localStorage.getItem('theme') == 'dark') {
	for (let i = 0; i < changeThemeElements.length; i++) {
		let elem = document.querySelector(`.${changeThemeElements[i]}`)
		elem.classList.add('dark_theme')
	}
}
changeThemeBtn.addEventListener('click', () => {
	for (let i = 0; i < changeThemeElements.length; i++) {
		let docElem = document.querySelector(`.${changeThemeElements[i]}`)
		// docElem.classList.toggle('dark_theme')
		docElem.classList.contains('dark_theme') ? light() : dark()

		function dark() {
			localStorage.setItem('theme', 'dark')
			docElem.classList.add('dark_theme')
		}
		function light() {
			localStorage.setItem('theme', 'light')
			docElem.classList.remove('dark_theme')
		}
	}
})

// Появления элементов при скролле
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show')
		}
	})
}

let options = {
	threshold: [0.5],
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')

for (let elm of elements) {
	observer.observe(elm)
}

//click function
// let obj = {
// 	',': 'koma',
// 	'.': 'point',
// 	' ': 'space',
// 	'-': 'minus',
// 	'+': 'plus',
// 	'=': 'plus',
// 	'`': 'volna',
// 	'/': 'slash',
// 	"'": 'skr',
// 	';': 'twoPoint',
// }
let text = 'Ulo bebg'
let txt = document.querySelector('.txt')
let rightBlock = document.querySelector('.test-block-right')

function vivod() {
	let splited = text.split('').map(elem => {
		return `<span>${elem}</span>`
	})
	txt.innerHTML = splited.join('')
}
vivod()

let startBtn = document.querySelector('.start-test')
startBtn.addEventListener('click', oru)

function finish() {
	txt.style.background = 'rgba(236, 233, 233, 0.347)'
	rightBlock.classList.remove('none')
	vivod()
}

// function oru() {
// 	// txt.style.background = 'gray'
// 	rightBlock.classList.add('none')
// 	let lol = 0

// 	function perebor() {
// 		window.onkeydown = e => {
// 			console.log(e.key + ' : ' + txt.children[lol].innerHTML)
// 			if (txt.children[lol] && e.key === txt.children[lol].innerHTML) {
// 				let currentElement = txt.children[lol]
// 				++lol

// 				perebor()
// 				currentElement.classList.add('color')
// 				// console.log(e.key + ' : ' + currentElement.textContent)
// 				if (lol === txt.children.length) {
// 					finish()
// 				}
// 			}
// 		}
// 	}
// 	perebor()
// }

let iterator = 0

function oru() {
	window.addEventListener('keypress', e => {
		const expectedSymbol = text[iterator]
		if (e.key === expectedSymbol) {
			iterator++
			rerender()
		}
	})
}
oru()
const rerender = () => {
	for (let i = 0; i < text.length; i++) {
		txt.children[iterator - 1].classList.add('color')
		if (iterator === txt.children.length) {
			console.log('конец')
		}
	}
}
// rerender()
