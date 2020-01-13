
$( "div" ).each(function( i ) {
	
  var _this = $(this);
 	i = ++i;
	
	// Add the id
  _this.attr('id', 'code-snippet-'+i );
	
	// Create the button
  var button = '<button class="btn" data-clipboard-target="#code-snippet-'+ i +'">Button-'+ i +'</button>';
	$( button ).insertAfter( _this );
	
});

// Trigger Clipboard.js
new Clipboard('.btn');
