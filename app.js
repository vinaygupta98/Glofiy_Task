
    function change1(){
    document.getElementsByClassName('__value')[0].style.display = "block";
    const x = document.getElementsByClassName('buy_x_get_y')
    x[0].style.display = "none";
    document.getElementsByClassName('fixed_applied')[0].style.display ="none";
    
      var str =  document.getElementById('minimum').innerHTML;
      res =  str.replace("Minimum Requirement","Applied For");
      document.getElementById("minimum").innerHTML = res; 
      document.getElementById('minimum').style.display = "block";

    }
    function change_fiexd(){
     document.getElementsByClassName('__value')[0].style.display = "block";
    const x = document.getElementsByClassName('buy_x_get_y')
    x[0].style.display = "none";
      document.getElementsByClassName('fixed_applied')[0].style.display= "block";
      
     var str =  document.getElementById('minimum').innerHTML;
      res =  str.replace("Applied For","Minimum Requirement");
      document.getElementById("minimum").innerHTML = res;      

    }
    function change2(){
    const x= document.getElementsByClassName('buy_x_get_y')
    x[0].style.display = "block";    
    document.getElementsByClassName('__value')[0].style.display = "none";

    document.getElementsByClassName('minimum_requirement')[0].style.display ="none"; 
    document.getElementById('discount_per_amo').style.display ="block";
    document.getElementsByClassName('fixed_applied')[0].style.display = "none";
    }
    function change3(){
      const specific_product = document.getElementsByClassName('specific_product')[0];
      specific_product.style.display = "block";
    }
    function change4(){
      const specific_product = document.getElementsByClassName('specific_product')[0];
      specific_product.style.display = "none";
    }
    
