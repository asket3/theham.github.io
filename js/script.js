ourservicemenu.onclick = function (event){
	let elemTarget = event.target;
	let position = 0;
	for (; position < elemTarget.parentElement.children.length; position++) {if ( elemTarget.parentElement.children[position] == elemTarget) { break;}}
 	let navMenu = ourservice.children[0].children[0];
 	for (let i = 0; i < navMenu.children.length; i++) {
      navMenu.children[i].classList.remove('active');
      ourservice.children[i+1].classList.add('hidden');
    }
    navMenu.children[position].classList.add('active');
    ourservice.children[position+1].classList.remove('hidden');
};

ourworkmenu.onclick = function(event){
	showedItem = event.target;
	let navMenu = showedItem.parentElement;
	let category = showedItem.getAttribute('data-category');
	let tmpCat = '';
	for (let i = 0; i < navMenu.children.length; i++) {	navMenu.children[i].classList.remove('active');	}
	showedItem.classList.add('active');
	for (let i = 0 ; i < workcards.children.length; i++) {
		tmpCat = workcards.children[i].getAttribute('data-category');
		if (category == "all"){workcards.children[i].style.display = 'block' };
		if ((category != "all")&&(category != tmpCat))
			{workcards.children[i].style.display = 'none' }
		   else{workcards.children[i].style.display = 'block'};
	}
};

function loadOurWorkItem(countEl){
	let tmpDiv, cntE = lastLoadElem;
	for (; lastLoadElem < Math.min(pseudoBDOurWorkItem.length, cntE+countEl); lastLoadElem++) {
		tmpDiv = document.createElement('div');
		tmpDiv.classList.add('our-work-card');
		tmpDiv.setAttribute('data-category', pseudoBDOurWorkItem[lastLoadElem][0]);
		tmpDiv.style.backgroundImage = `url('${pseudoBDOurWorkItem[lastLoadElem][1]}')`;
		tmpDiv.onmouseenter = showOurWorkItemHover;
		tmpDiv.onmouseleave = hideOurWorkItemHover;
		workcards.appendChild(tmpDiv);
	}
	if (+lastLoadElem == +pseudoBDOurWorkItem.length) {btnourworkcards.style.display = 'none'};
}

function showOurWorkItemHover(item){
	item.currentTarget.innerHTML = '<div class="our-work-hover" id="tmphov"><div class="our-work-hover-lnks"><a href="#" class="img-lnk"><i class="fas fa-link"></i></a><a href="#" class="img-lnk img-lnk-invers"><i class="fas fa-search"></i></a></div><p class="item-description">creative design</p><p class="item-value">Web Design</p></div>';
	item.currentTarget.children[0].children[2].innerHTML = item.currentTarget.getAttribute('data-category');
};

function hideOurWorkItemHover(item){
	item.currentTarget.children[0].remove();
};

function loadNews(parentEl, countEl){
	let tmpDiv;
	for (let i = 0; i < Math.min(pseudoBDNews.length, countEl); i++) {
		tmpDiv = document.createElement('div');
		tmpDiv.innerHTML = `<a href="${pseudoBDNews[i][4]}" class="news-item-lnk"><div class="news-item"><div class="news-item-img"></div><div class="news-item-date">${pseudoBDNews[i][0]}<br>${pseudoBDNews[i][1]}</div><div class="news-item-description"><p class="news-item-title">${pseudoBDNews[i][2]}</p><p class="news-item-techline"><a href="${pseudoBDNews[i][6]}" class="news-item-lnk">By ${pseudoBDNews[i][5]}</a>    |    <a href="${pseudoBDNews[i][8]}" class="	news-item-lnk">${pseudoBDNews[i][7]} comment</a></p></div></div></a>`;
		tmpDiv.children[1].children[0].children[0].style.backgroundImage = `url('${pseudoBDNews[i][3]}')`;
		parentEl.appendChild(tmpDiv);
	};
};

function showBestImgHover(item){
	let tmpDiv = document.createElement('div');
		tmpDiv.classList.add('hov-gal-bst');
		tmpDiv.innerHTML = '<div class="hov-gal-bst"><a href="#"><div class="hov-gal-bst-btn-search"><i class="fas fa-search"></i></div></a><a href="#"><div class="hov-gal-bst-btn-expand"><i class="fas fa-expand-arrows-alt"></i></div></a></div>';
		item.currentTarget.appendChild(tmpDiv);
};

function hideBestImgHover(item){
	item.currentTarget.children[1].remove();
};

function initCarousel(parentEl){
	for (let i = 0; i < Math.min(pseudoBDQuotes.length, 4); i++) {parentEl.appendChild(createPerson(parentEl, i))};
	showSelectedPerson(selectedQuote);
};

function createPerson(parentEl, bdNumber){
	let tmpDiv = document.createElement('div');
		tmpDiv.classList.add('carousel-person');
		tmpDiv.classList.add('animate');
		tmpDiv.style.backgroundImage = `url('${pseudoBDQuotes[bdNumber][2]}')`;
		tmpDiv.setAttribute('data-bdnumber', bdNumber);
		tmpDiv.onclick = clickPerson;
	return tmpDiv;
};

function showSelectedPerson(posSel){
	let val = +carpers.children[posSel].getAttribute('data-bdnumber');
	carpers.children[selectedQuote].classList.remove('select');
	carpers.children[posSel].classList.add('select');
	carpers.parentElement.parentElement.children[2].innerHTML = `${pseudoBDQuotes[val][3]}`;
	carpers.parentElement.parentElement.children[3].innerHTML = `${pseudoBDQuotes[val][0]}`;
	carpers.parentElement.parentElement.children[4].innerHTML = `${pseudoBDQuotes[val][1]}`;
	carpers.parentElement.parentElement.children[5].style.backgroundImage = `url('${pseudoBDQuotes[val][2]}')`;
	selectedQuote = posSel;
};

function clickPerson(event){
	let person = event.currentTarget;
	let i = 0;
	for (; i < person.parentElement.children.length; i++) {
		if ( person.parentElement.children[i] == person) { break;}
	}
	showSelectedPerson(i);
};

function turnCarousel(turn){
	if (turn == 'right'){
		let x = +carpers.children[3].getAttribute('data-bdnumber');
		if ((x+1) < pseudoBDQuotes.length ){x++} else {x=0};
		carpers.children[0].remove();
		carpers.appendChild(createPerson(carpers, x));
		if (selectedQuote==0) {showSelectedPerson(selectedQuote)} else {selectedQuote--};
	};
	if (turn == 'left'){
		let x = +carpers.children[0].getAttribute('data-bdnumber');
		if (x == 0) {x = pseudoBDQuotes.length-1} else {x--};
		carpers.children[3].remove();
		let xxx = createPerson(carpers, x);
		carpers.insertBefore(xxx, carpers.firstChild);
		if (selectedQuote==3) {showSelectedPerson(selectedQuote)} else {selectedQuote++};
	};
};

function loadBestImg(countImg){
	let tmpDiv;
	let i = loadedImg;
	for (; i < Math.min(pseudoBDGalleryOfBestImages.length, loadedImg+countImg); i++) {
		tmpDiv = document.createElement('div');
		tmpDiv.innerHTML = `<img src="${pseudoBDGalleryOfBestImages[i][0]}">`;
		tmpDiv.classList.add('masonry-item');
		tmpDiv.onmouseenter = showBestImgHover;
		tmpDiv.onmouseleave = hideBestImgHover;
		masonryblk.appendChild(tmpDiv);
	};
	loadedImg += i;
	$('#masonryblk').masonry({ 	gutter: 19,
								columnWidth: 46,
								horizontalOrder: false,
								isFitWidth: true,
	  							itemSelector: '.masonry-item',
          						singleMode: false,
	  							isResizable: true,
	  							isAnimated: true,
          						animationOptions: {	queue: false, duration: 500 }
	}).imagesLoaded( function() { $('#masonryblk').masonry();});
	$('#masonryblk').masonry( 'reloadItems' );
};


function showLoader(eventEl, funcDelayed, param){
	if (document.getElementById('pauseTime')) {return};
	let tmpDiv = document.createElement('div');
	tmpDiv.id="pauseTime";
	tmpDiv.innerHTML = `<div class="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
	eventEl.appendChild(tmpDiv);
	setTimeout(function () {pauseTime.remove(); window[funcDelayed](param)},2000);
};

let pseudoBDOurWorkItem = [
['Wordpress', 'img/work/wordpress1.jpg', 'nechto-1'],
['Wordpress', 'img/work/wordpress2.jpg', 'nechto-2'],
['Wordpress', 'img/work/wordpress3.jpg', 'nechto-3'],
['Wordpress', 'img/work/wordpress4.jpg', 'nechto-4'],
['Landing Pages', 'img/work/landing-page2.jpg', 'nechto-22'],
['Landing Pages', 'img/work/landing-page3.jpg', 'nechto-23'],
['Landing Pages', 'img/work/landing-page4.jpg', 'nechto-24'],
['Graphic Design', 'img/work/graphic-design2.jpg', 'nechto-32'],
['Graphic Design', 'img/work/graphic-design3.jpg', 'nechto-33'],
['Web Design', 'img/work/web-design3.jpg', 'nechto-13'],
['Web Design', 'img/work/web-design4.jpg', 'nechto-14'],
['Web Design', 'img/work/web-design5.jpg', 'nechto-15'],
['Web Design', 'img/work/web-design6.jpg', 'nechto-16'],
['Wordpress', 'img/work/wordpress5.jpg', 'nechto-5'],
['Wordpress', 'img/work/wordpress6.jpg', 'nechto-6'],
['Wordpress', 'img/work/wordpress7.jpg', 'nechto-7'],
['Wordpress', 'img/work/wordpress8.jpg', 'nechto-8'],
['Wordpress', 'img/work/wordpress9.jpg', 'nechto-9'],
['Wordpress', 'img/work/wordpress10.jpg', 'nechto-10'],
['Web Design', 'img/work/web-design1.jpg', 'nechto-11'],
['Web Design', 'img/work/web-design2.jpg', 'nechto-12'],
['Web Design', 'img/work/web-design7.jpg', 'nechto-17'],
['Landing Pages', 'img/work/landing-page1.jpg', 'nechto-21'],
['Landing Pages', 'img/work/landing-page5.jpg', 'nechto-25'],
['Landing Pages', 'img/work/landing-page6.jpg', 'nechto-26'],
['Landing Pages', 'img/work/landing-page7.jpg', 'nechto-27'],
['Graphic Design', 'img/work/graphic-design1.jpg', 'nechto-31'],
['Graphic Design', 'img/work/graphic-design4.jpg', 'nechto-34'],
['Graphic Design', 'img/work/graphic-design5.jpg', 'nechto-35'],
['Graphic Design', 'img/work/graphic-design6.jpg', 'nechto-36'],
['Graphic Design', 'img/work/graphic-design7.jpg', 'nechto-37'],
['Graphic Design', 'img/work/graphic-design8.jpg', 'nechto-38'],
['Graphic Design', 'img/work/graphic-design9.jpg', 'nechto-39'],
['Graphic Design', 'img/work/graphic-design10.jpg', 'nechto-40'],
['Graphic Design', 'img/work/graphic-design11.jpg', 'nechto-39'],
['Graphic Design', 'img/work/graphic-design12.jpg', 'nechto-40']
];
let lastLoadElem = 0;

let pseudoBDNews = [
[27, 'Feb', 'Amazing Image Post 0', 'img/news/news1.jpg' ,'#1', 'admin', '#2', 2,  '#3'],
[17, 'Feb', 'Amazing Image Post 1', 'img/news/news2.jpg' ,'#1', 'Piter', '#2', 3,  '#3'],
[13, 'Feb', 'Amazing Image Post 2', 'img/news/news3.jpg' ,'#1', 'admin', '#2', 7,  '#3'],
[21, 'Jan', 'Amazing Image Post 3', 'img/news/news4.jpg' ,'#1', 'admin', '#2', 54, '#3'],
[19, 'Jan', 'Amazing Image Post 4', 'img/news/news5.jpg' ,'#1', 'Sam',   '#2', 23, '#3'],
[15, 'Jan', 'Amazing Image Post 5', 'img/news/news6.jpg' ,'#1', 'Kat',   '#2', 17, '#3'],
[27, 'Dec', 'Amazing Image Post 6', 'img/news/news7.jpg' ,'#1', 'admin', '#2', 11, '#3'],
[21, 'Dec', 'Amazing Image Post 7', 'img/news/news8.jpg' ,'#1', 'admin', '#2', 12, '#3'],
[17, 'Nov', 'Amazing Image Post 8', 'img/news/news1.jpg' ,'#1', 'Piter', '#2', 1,  '#3'],
];


let pseudoBDGalleryOfBestImages = [
['img/masonry/p01.jpg', 'nechto-m01'],
['img/masonry/p02.jpg', 'nechto-m02'],
['img/masonry/p03.jpg', 'nechto-m03'],
['img/masonry/p04.jpg', 'nechto-m04'],
['img/masonry/p05.jpg', 'nechto-m05'],
['img/masonry/p06.jpg', 'nechto-m06'],
['img/masonry/p07.jpg', 'nechto-m07'],
['img/masonry/p11.jpg', 'nechto-m11'],
['img/masonry/p08.jpg', 'nechto-m08'],
['img/masonry/p09.jpg', 'nechto-m09'],
['img/masonry/p10.jpg', 'nechto-m10'],
['img/masonry/p12.jpg', 'nechto-m12'],
['img/masonry/p13.jpg', 'nechto-m13'],
['img/masonry/p14.jpg', 'nechto-m14'],
['img/masonry/p15.jpg', 'nechto-m15'],
['img/masonry/p16.jpg', 'nechto-m16'],
['img/masonry/p17.jpg', 'nechto-m17'],
['img/masonry/p18.jpg', 'nechto-m18'],
['img/masonry/p01.jpg', 'nechto-m01'],
['img/masonry/p02.jpg', 'nechto-m02'],
['img/masonry/p03.jpg', 'nechto-m03'],
['img/masonry/p04.jpg', 'nechto-m04'],
['img/masonry/p05.jpg', 'nechto-m05'],
['img/masonry/p06.jpg', 'nechto-m06'],
['img/masonry/p07.jpg', 'nechto-m07'],
['img/masonry/p11.jpg', 'nechto-m11'],
['img/masonry/p08.jpg', 'nechto-m08'],
['img/masonry/p09.jpg', 'nechto-m09'],
['img/masonry/p10.jpg', 'nechto-m10'],
['img/masonry/p12.jpg', 'nechto-m12'],
['img/masonry/p13.jpg', 'nechto-m13'],
['img/masonry/p14.jpg', 'nechto-m14'],
['img/masonry/p15.jpg', 'nechto-m15'],
['img/masonry/p16.jpg', 'nechto-m16'],
['img/masonry/p17.jpg', 'nechto-m17'],
['img/masonry/p18.jpg', 'nechto-m18']
];
let loadedImg = 0;

let pseudoBDQuotes = [
['Hasan Ali', 'UX Designer', 'img/people/p01.jpg','Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'],
['Antony Ray', 'STO', 'img/people/p02.jpg','Integer1 dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'],
['Han Solo', 'CEO', 'img/people/han_solo.jpg','Integer2 dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'],
['Bad Girl', 'Junior PM', 'img/people/p03.jpg','Integer3 dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'],
['Samuel', 'Somebody', 'img/people/p04.jpg','Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.']
];
let selectedQuote = 0;

// main function
(function () {
	loadOurWorkItem(12);
	loadNews(newsblk,8);
	initCarousel(carpers);
	loadBestImg(18);

}());

