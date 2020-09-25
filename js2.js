// 1 1 2 3 5 8 13 21 34 55 89

// number = int(input("Enter a number: "))
// fibonacci = []
// a = 0
// b = 1
// while (a < number):
//     c, b = b, a
//     a = b + c
//     fibonacci.append(a)
// print(fibonacci)

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

function fibinocci(sayi){
        var c = 0;
        var a  = 0;
        var b  = 1;
        var x = 0;
        if (sayi <= 0){
            alert ('sayi pozitif degil, 1 den büyük deger giriniz!');
            console.log('girdiginiz deger:  '+ sayi);
        }
        else{
            while (x < sayi) { 
                c = a + b; 
                a = b ;
                b = c ;
                x++;
        }
        console.log(c)
    }
}
fibinocci(-4)
function fibonacci(sayı) {
    if (sayı <= 1) return 1;
    return fibonacci(sayı - 1) + fibonacci(sayı - 2);
  }
  console.log(fibonacci(12));
