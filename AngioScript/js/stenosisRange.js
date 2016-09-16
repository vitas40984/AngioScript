	percentChoiceMin.onmousedown = function () {
			percentChoiceMin.onmousemove = function () {
				var min = document.getElementById('percentChoiceMin').value*5+45;
				var str = min+"%";
				document.getElementById('leasionPercent').value=str;
				percentChoiceMin.onmouseup = function () {
					percentChoiceMin.onmousemove = function () {}
				}
			}
		}
		percentChoiceMax.onmousedown = function () {
			percentChoiceMax.onmousemove = function () {
				var min = document.getElementById('percentChoiceMin').value*5+45;
				var max = 0;
				max = document.getElementById('percentChoiceMax').value*5+45;
				if (max<=min) {max=min+5};
				var str = min+"% - "+max+"%";
				if (min<95) {
					document.getElementById('leasionPercent').value=str;
				}
				percentChoiceMax.onmouseup = function () {
					percentChoiceMax.onmousemove = function () {}
				}
			}
		}