
    if (order === 'house'){
      item = '<img src="images/house.png">';
    } else if (order === 'hotel'){
      item = '<img src="images/hotel.png">';
    } 
    else {
      item = '<strong>No items ordered</strong>';
    }
    return item;

    
    
    function forTest() {
      var result = 'start';

      for (var i = 0; i < 5; i++) {
        result = result + ' ' + i;
        console.log('inside the for loop', result)
      }
      console.log('after the for loop', result);
   
    }
   
