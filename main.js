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

//тест на скорость печати
let texts = [
	`In June of 1971, 26 year old Michael Reagan married his 18 year old fiancee in a beautiful ceremony that took place in Hawaii, but which sadly couldnt be attended by his dad, the future President of the United States, Ronald Reagan. A few days before the ceremony, however, Michael did receive something invaluable that would be treasured for years to come: a heartfelt, loving, and sage letter of fatherly advice, on the subject of love and marriage.  “It was straight from Dads heart,” Michael said of the letter in his 2004 book, In the Words of Ronald Reagan, "Honest, old-fashioned, and wise. I cried when I read it, and Ive read it many times in the years since then.`,
	`Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds, Or bends with the remover to remove: O no! it is an ever-fixed mark That looks on tempests and is never shaken; It is the star to every wandering bark, Whose worth's unknown, although his height be taken.`,
	`They did occasionally trim split ends or even singe them, but long hair was viewed as being ultra-feminine and desirable. When it comes to long hair, nobody could top the Seven Sutherland Sisters. They became a national sensation in the 1880s because of their hair (37 feet in total) and made a living doing musical performances with their hair down. They capitalized on it even further by producing a line of hair care products and became quite rich. When the 1920s and the bob rolled around, they began to be ridiculed as unfashionable relics of the past and lost the public's eye. `,
	`"Anytime" and "any time" share the same definition and are located in the same place in the dictionary. Both mean whenever. "Anytime" is the Americanized version of the British "any time". "Any time" is specifically used more when the adverb "at" precedes the word. "Any time" was the original word which was developed in the 18th century and then evolved into anytime over the years. Children in the United States are typically taught the use of "anytime", however, they are also taught the words "any" and "time" as their own entities and that they mean the same things.`,
]

let text = texts[getRandomInt(0, texts.length)]

// let text = `Let me not to the`

let txt = document.querySelector('.txt')
let rightBlock = document.querySelector('.test-block-right')
let leftBlock = document.querySelector('.test-block-left')
let repeatBtn = document.querySelector('.repeat')

function vivod() {
	let splited = text.split('').map(elem => {
		return `<span>${elem}</span>`
	})
	txt.innerHTML = splited.join('')
}
vivod()

let startBtn = document.querySelector('.start-test')
startBtn.addEventListener('click', oru)
repeatBtn.addEventListener('click', startFunction)
function finish() {
	text = texts[getRandomInt(0, texts.length)]
	timeBlock.innerHTML = `60 sec`
	timerStart = false
	rightBlock.classList.remove('none')
	leftBlock.classList.add('none')
	speedTypes(1)
	iterator = 0
	errorSymbols = 0
	vivod()
}

function startFunction() {
	leftBlock.classList.remove('none')
	rightBlock.classList.add('none')
}

let iterator = 0
let errorSymbols = 0
let isTimeOver = false
let timerStart = false
function keyPressHandler(e) {
	if (!isTimeOver) {
		timeSec(60)
		timeOut(60000)
	}
	const expectedSymbol = text[iterator]
	if (e.key === expectedSymbol) {
		iterator++
		rerender()
	} else if (e.key !== text[iterator - 1]) {
		rerenderRed()
	}
	console.log(e.key + ' : ' + expectedSymbol)
}
let timeBlock = document.querySelector('.time')

function oru() {
	timerStart = true

	startFunction()
	window.addEventListener('keypress', keyPressHandler)
}

function timeOut(sek) {
	setTimeout(() => {
		window.removeEventListener('keypress', keyPressHandler)
		finish()
	}, sek)
}

const rerender = () => {
	for (let i = 0; i < text.length; i++) {
		txt.children[iterator - 1].classList.remove('colorRed')
		txt.children[iterator - 1].classList.add('color')
	}

	if (iterator === txt.children.length) {
		// window.removeEventListener('keypress', keyPressHandler)
		txt.children[iterator - 1].classList.remove('colorRed')
		finish()
	}
}

function rerenderRed() {
	txt.children[iterator].classList.add('colorRed')
	errorSymbols++
}

//вывод остатка времени
// let timeBlock = document.querySelector('.time')
function timeSec(sec) {
	isTimeOver = true
	let interval = setInterval(() => {
		timeBlock.innerHTML = `${sec} sec`
		--sec
		// console.log(sec)
		// console.log('timer')

		if (sec == 0) {
			clearInterval(interval)
			isTimeOver = false
		}
	}, 1000)
}

function speedTypes(min) {
	//вывод результа скорости печати
	let resBlock = document.querySelector('.res')
	let accuracyBlock = document.querySelector('.accuracy')
	//количество символов делим на 5 символов на слово
	let words = iterator / 5

	let goodWSymbol = iterator - errorSymbols

	//результат делим на количество минут
	let res = words / min

	let accuracy = (goodWSymbol / iterator) * 100

	resBlock.innerHTML = `<span>${Math.round(res)}</span> zn/m`
	accuracyBlock.innerHTML = `<span>${Math.round(accuracy)}</span> %`
}

window.addEventListener('resize', e => {
	const windowOuterWidth = window.innerWidth
	const windowOuterHeight = window.innerHeight
	let headerInfo = document.querySelector('.header-info')
	console.log(windowOuterHeight)
	if (windowOuterWidth <= 1500) {
		txt.innerText = 'Sorry, but this function is only for computer devices.'
		startBtn.style.display = 'none'
		timeBlock.style.display = 'none'
	} else {
		vivod()
		startBtn.style.display = ''
		timeBlock.style.display = ''
	}

	if (windowOuterHeight <= 500) {
		headerTitle.style.fontSize = `4rem`
		headerInfo.style.paddingTop = '5%'
	} else {
		headerTitle.style.fontSize = `6rem`
		headerInfo.style.paddingTop = '15%'
	}
})

//scroll Top

let scrollTopBtn = document.querySelector('.scrollTop')
scrollTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

window.addEventListener('scroll', () => {
	let scrolledAmountDown = window.scrollY
	if (scrolledAmountDown >= 300) {
		scrollTopBtn.classList.remove('none')
	} else {
		scrollTopBtn.classList.add('none')
	}
})
