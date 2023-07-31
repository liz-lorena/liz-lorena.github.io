var html=document.querySelector("html");
var toggleShow=document.getElementById('more');
var toggleShowMore=document.getElementById('read-more');
var toggleHide=document.getElementById('less');
var aboutMe=document.getElementById('text');

toggleShow.addEventListener('click',function(e){
	e.stopPropagation();
	aboutMe.classList.remove('hidden');
	toggleHide.classList.remove('hidden');
	toggleShow.classList.add('hidden');
});

toggleShowMore.addEventListener('click',function(e){
	e.stopPropagation();
	aboutMe.classList.remove('hidden');
	toggleHide.classList.remove('hidden');
	toggleShow.classList.add('hidden');
});

toggleHide.addEventListener('click',function(e){
	e.stopPropagation();
	aboutMe.classList.add('hidden');
        toggleShow.classList.remove('hidden');
	toggleHide.classList.add('hidden');
});
