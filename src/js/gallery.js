window.onload = function () {
	var imgArr = document.getElementsByClassName('gallery__img');

	var modalWindow = document.getElementById('my__modal');
	var modalImg = document.getElementById('img01');
	var caption =document.getElementById('caption');
	var span = document.getElementById('close');
	var modalBlock = document.getElementById('modal__block');

	for(i=0;i<imgArr.length;i++){
		var picture = imgArr[i];
		picture.onclick = function(){
			openImg(this);
		}
	}
	function openImg(pic){
		modalWindow.style.display='flex';
		modalBlock.style.transform = 'translateY(0%)';
		modalImg.src = pic.src;
		modalImg.alt = pic.alt;
		modalImg.style.borderRadius = '25px';
		modalImg.style.border = '2px solid white';
	  caption.innerHTML = modalImg.alt;
	}

	function close(){
		modalWindow.style.display ='none';
	}
	span.onclick = function(){
		modalBlock.style.transform = 'translateY(-200%)';
		setTimeout(	close, 500);
	}
}