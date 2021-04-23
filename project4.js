function clickbtn(){
    let input = document.getElementById('studentid').value;
    input = parseInt(input);

    switch(input){
        case 1:
        document.write('<img width="100px" src="Image/1.jpg" alt="">  <br> <br>  Roll No: 1 <br>     Name : Juli <br> Position: Web Designer ')
        break;

        case 2:
        document.write('<img width="100px" src="Image/2.jpg" alt="">  <br> <br>  Roll No: 2 <br>     Name : Angela <br> Position: UI Designer ')
        break;

        case 3:
        document.write('<img width="100px" src="Image/3.jpg" alt="">  <br> <br>  Roll No: 3 <br>     Name : Alex <br> Position: Web Developer ')
        break;

        case 4:
        document.write('<img width="100px" src="Image/4.jpg" alt="">  <br> <br>  Roll No: 4 <br>     Name : Jone Smith <br> Position: Digital Marketar ')
        break;

        case 5:
        document.write('<img width="100px" src="Image/5.jpg" alt="">  <br> <br>  Roll No: 5 <br>     Name : Asiana <br> Position: SEO Specilist ')
        break;

        default:
        document.write('Please Input 1 to 5 Number');
    }
}