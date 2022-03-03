/* 
 * WSPIERAMY WALCZACA UKRAINE - PIEROGI UKRAINSKIE nie ruskie!
 * 
 * https://restauracja.online
 * System zamawiania jedzenia na stronie restauracji
 * 
 * W celu automatycznej zmiany tekstu Pierogi ruskie na Pierogi UKRAIŃSKIE z przekreślonym ruskie
 * Dodaj skrypt w sekcji head lub przed elementem </body> (na samym końcu kodu strony)
 * <script type="text/javascript" id="pierogiRuskie" src="https://restauracja.online/assets/js/pierogi-ukrainskie.include.js" data-add-flag-to-logo=false new-name="UKRAIŃSKIE" ukraine-flag=true description-ukrainskie="'Wspieramy walczącą UKRAINĘ!" description-ruskie="Symboliczny sprzeciw wobec wojny, mimo że to pierogi ruskie nie rosyjskie" ></script>
 * 
 * Licencja MIT (Kopiuj i uzywaj bez ograniczen rowniez komercyjnie)
 * Autor: Stronex.pl producent platformy zamawiania restauracja.online oraz zamawiaj.online
 * 
 */

jQuery( document ).ready(function($) {
	
	jQuery.extend($.expr[":"], {
		"containsIN": function(elem, i, match, array) {
			return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
		}
	});
	
	pierogiUkrainskie();
	
	var ukrainskaFlaga = jQuery( '#pierogiRuskie' ).data('add-flag-to-logo') ? jQuery( '#pierogiRuskie' ).data('add-flag-to-logo') : false;
	if( ukrainskaFlaga ){
		logoFlagaUkrainy( ukrainskaFlaga );
	}
	
});
	
function logoFlagaUkrainy( logContainerSelector ){
	var logContainerSelector = logContainerSelector || jQuery( '#pierogiRuskie' ).data('add-flag-to-logo') ? jQuery( '#pierogiRuskie' ).data('add-flag-to-logo') : false;	

	if( jQuery( logContainerSelector ).length > 0 ){
			
		var maxWidth = jQuery( logContainerSelector ).width() *.3;
		var maxHeight = jQuery( logContainerSelector ).height() *.3;
	
		if( jQuery( logContainerSelector ).is("img") ){
			var logoFlagaUkrainy = '<img class="ukraina-walczy-logo" title="Wspieramy walczącą UKRAINĘ!" style="position: absolute; opacity: .7; max-width:'+ maxWidth +'px; max-height:'+ maxHeight +'px; margin-top: -'+ maxHeight/3 +'px;" src="https://restauracja.online/img/ukraina-walczy-flaga.png" />';
			jQuery( logContainerSelector ).before( logoFlagaUkrainy );
			
			if($( logContainerSelector ).length > 0 && typeof $( logContainerSelector ).tooltip === 'function' ){
				$( '.ukraina-walczy-logo' ).tooltip('enable');
			}
		}else{
			var logoFlagaUkrainy = '<img class="ukraina-walczy-logo" title="Wspieramy walczącą UKRAINĘ!" style="position: absolute; opacity: .7; max-width:'+ maxWidth +'px; max-height:'+ maxHeight +'px; margin-top: -'+ maxHeight/3 +'px;" src="https://restauracja.online/img/ukraina-walczy-flaga.png" />';
			jQuery( logContainerSelector ).prepend( logoFlagaUkrainy );
			
			if($( logContainerSelector ).length > 0 && typeof $( logContainerSelector ).tooltip === 'function' ){
				$( '.ukraina-walczy-logo' ).tooltip('enable');
			}
		}
	}
}

var ukraineFlag = function( newName, title, fontSize ){
	var newName = newName || 'UKRAIŃSKIE';	
	var title = title || 'Wspieramy walczącą UKRAINĘ!';
	
	return '<span title="'+ title +'" class="uktraina-walczy">'+ newName +''+ '<img title="'+ title +'" height="'+ fontSize +'" src="https://restauracja.online/img/ukraina-walczy.png" />' +'</span>';
	
}
		
function changeStringPierogiRuskie( element, pierogi, ruskie, addFlag, newName, title, title2 ){
	var newName = newName || jQuery( '#pierogiRuskie' ).data('new-name') ? jQuery( '#pierogiRuskie' ).data('new-name') : 'UKRAIŃSKIE';	
	var title = title || jQuery( '#pierogiRuskie' ).data('description-ukrainskie') ? jQuery( '#pierogiRuskie' ).data('description-ukrainskie') : 'Wspieramy walczącą UKRAINĘ!';
	var title2 = title2 || jQuery( '#pierogiRuskie' ).data('description-ruskie') ? jQuery( '#pierogiRuskie' ).data('description-ruskie') : 'Symboliczny sprzeciw wobec wojny, mimo że to pierogi ruskie nie rosyjskie';
	var addFlag = addFlag || jQuery( '#pierogiRuskie' ).data('ukraine-flag') ? jQuery( '#pierogiRuskie' ).data('ukraine-flag') : true;
	
	var pierogi = pierogi || 'Pierogi';
	var ruskie = ruskie || 'ruskie';	
	var strikeRuskie = ruskie;
	
	switch( ruskie ){
		case 'Ukraińskie':
			strikeRuskie = "Ruskie";
			break;	
		case 'ukraińskie':
			strikeRuskie = "ruskie";
			break;
		case 'UKRAIŃSKIE':
			strikeRuskie = "RUSKIE";
			break;
		default:
			
			break;
	}
	
	var strikeCss = 'style="color: red" class="ruskie-strike" title="'+ title2 +'"';
	
	var replacedState = false;
	
	if( element.text().indexOf( pierogi +' '+ ruskie ) >= 0 ){
		element.html( 
			element.text().replace(
				new RegExp( pierogi +' '+ ruskie , 'g'),
				pierogi +' <strike '+ strikeCss +'>'+ strikeRuskie +'</strike> ' + ( addFlag ? ukraineFlag( newName, title, element.css('font-size') ) : '' ) 
			)
		); 
		replacedState = true;
	}
	
	if( element.text().indexOf( ruskie +' '+ pierogi ) >= 0 ){
		element.html( 
			element.text().replace(
				new RegExp( ruskie +' '+ pierogi , 'g'),
				pierogi +' <strike '+ strikeCss +'>'+ strikeRuskie +'</strike> ' + ( addFlag ? ukraineFlag( newName, title, element.css('font-size') ) : '' ) 
			)
		); 
		replacedState = true;
	}
	
	return replacedState;
	
}
				
function pierogiUkrainskie( addFlag, newName, title, title2 ){
	var newName = newName || jQuery( '#pierogiRuskie' ).data('new-name') ? jQuery( '#pierogiRuskie' ).data('new-name') : 'UKRAIŃSKIE';	
	var title = title || jQuery( '#pierogiRuskie' ).data('description-ukrainskie') ? jQuery( '#pierogiRuskie' ).data('description-ukrainskie') : 'Wspieramy walczącą UKRAINĘ!';
	var title2 = title2 || jQuery( '#pierogiRuskie' ).data('description-ruskie') ? jQuery( '#pierogiRuskie' ).data('description-ruskie') : 'Symboliczny sprzeciw wobec wojny, mimo że to pierogi ruskie nie rosyjskie';
	var addFlag = addFlag || jQuery( '#pierogiRuskie' ).data('ukraine-flag') ? jQuery( '#pierogiRuskie' ).data('ukraine-flag') : true;
	
	//zmienia ruskie na ukraińskie
	jQuery('*:containsIN("ruskie")').each(function(){
		
		if( jQuery(this).children().length < 1 ){
			
			var replacedState = false		

			state = changeStringPierogiRuskie( jQuery( this ), 'Pierogi', 'ruskie' );
			if( state ) replacedState = true;

			if( ! state ) state = changeStringPierogiRuskie( jQuery( this ), 'pierogi', 'ruskie' );
			if( state ) replacedState = true;

			if( ! state ) state = changeStringPierogiRuskie( jQuery( this ), 'PIEROGI', 'RUSKIE' );
			if( state ) replacedState = true;
			
			//awaryjnie - zawsze małe 
			var strikeCss = 'style="color: red" class="ruskie-strike" title="'+ title2 +'"';
			if( replacedState === false && jQuery( this ).text().toLowerCase().indexOf( 'pierogi ruskie' ) >= 0 ){
				jQuery(this).html( 
					jQuery(this).text().replace(
						/pierogi ruskie/gi,
						'Pierogi <strike '+ strikeCss +'>ruskie</strike>' +  ( addFlag ? ukraineFlag( newName, title, jQuery(this).css('font-size') ) : '' )
					)
				); 
				replacedState = true;
			}
			if( replacedState === false && jQuery( this ).text().toLowerCase().indexOf( 'ruskie pierogi' ) >= 0 ){
				jQuery(this).html( 
					jQuery(this).text().replace(
						/ruskie pierogi/gi,
						'Pierogi <strike '+ strikeCss +'>ruskie</strike>' +  ( addFlag ? ukraineFlag( newName, title, jQuery(this).css('font-size') ) : '' )
					)
				); 
				replacedState = true;
			}


			//for Bootstrap
			if( replacedState && $(".ruskie-strike").length > 0 && typeof $(".ruskie-strike").tooltip === 'function' ){
					$( '.ruskie-strike' ).tooltip('enable');
					$( '.uktraina-walczy' ).tooltip('enable');
					//$( '.ukraina-walczy-logo' ).tooltip('enable');
			}

		}

	});
	
	//ukrainskie też dodaje ruskie
	jQuery('*:containsIN("ukraińskie")').each(function(){
		
		if( jQuery(this).children().length < 1 ){
			
			var replacedState = false		

			state = changeStringPierogiRuskie( jQuery( this ), 'Pierogi', 'ukraińskie' );
			if( state ) replacedState = true;

			if( ! state ) state = changeStringPierogiRuskie( jQuery( this ), 'pierogi', 'ukraińskie' );
			if( state ) replacedState = true;

			if( ! state ) state = changeStringPierogiRuskie( jQuery( this ), 'PIEROGI', 'UKRAIŃSKIE' );
			if( state ) replacedState = true;

			//awaryjnie - zawsze małe 
			var strikeCss = 'style="color: red" class="ruskie-strike" title="'+ title2 +'"';
			if( replacedState === false && jQuery( this ).text().toLowerCase().indexOf( 'pierogi ruskie' ) >= 0 ){
				jQuery(this).html( 
					jQuery(this).text().replace(
						/pierogi ruskie/gi,
						'Pierogi <strike '+ strikeCss +'>ruskie</strike>' +  ( addFlag ? ukraineFlag( newName, title, jQuery(this).css('font-size') ) : '' )
					)
				); 
				replacedState = true;
			}
			if( replacedState === false && jQuery( this ).text().toLowerCase().indexOf( 'ruskie pierogi' ) >= 0 ){
				jQuery(this).html( 
					jQuery(this).text().replace(
						/ruskie pierogi/gi,
						'Pierogi <strike '+ strikeCss +'>ruskie</strike>' +  ( addFlag ? ukraineFlag( newName, title, jQuery(this).css('font-size') ) : '' )
					)
				); 
				replacedState = true;
			}


			//for Bootstrap
			if( replacedState && $(".ruskie-strike").length > 0 && typeof $(".ruskie-strike").tooltip === 'function' ){
					$( '.ruskie-strike' ).tooltip('enable');
					$( '.uktraina-walczy' ).tooltip('enable');
					//$( '.ukraina-walczy-logo' ).tooltip('enable');
			}

		}

	});

}
