$(document).ready(function(){

	acceptHover = true
	allspans = document.getElementsByTagName('span')

	function phase2(i){
		if (i == allspans.length - 1){
			$("#phase-1").css("display","none")
			$("#phase-2").css("display","block")
			newspans = document.getElementsByClassName("f2span")
			$('.f2span').each(function(index){
				setTimeout(function(){
					$(newspans[index]).css('color','rgb(248, 249, 250)')
				}, 50 * (index + 1))
			})
		}else{
			return
		}
	}

	$('#toggler').click(function(){
		acceptHover = false
		$('span').each(function(index){
			setTimeout(function(){
				$(allspans[index]).css("color",'#343a40')
				phase2(index)
			}, 50 * (index + 1))
		})
	})

	colorArray = ["lightcoral","moccasin","cyan","yellow","forestgreen","rosybrown","ivory",]

	//allspans = document.getElementsByTagName('span')
	console.log(allspans)

	$('span').mouseover(function(em){
		if (acceptHover){
			ind = parseInt($(this).index("span"))
			ind = ind % colorArray.length
			$(this).css("color",colorArray[ind])
		}
	})

	$('span').mouseout(function(em){
		if (acceptHover){
			$(this).css("color","#f8f9fa")
		}
	})


})