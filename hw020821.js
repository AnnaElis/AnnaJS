//1 Дан многомерный массив arr. Выведите с его помощью слово 'голубой'.

const arr = {
 'ru':['голубой', 'красный', 'зеленый'],
 'en':['blue', 'red', 'green'],
};

const arr = {
 'ru':['голубой', 'красный', 'зеленый'],
 'en':['blue', 'red', 'green'],
};

alert(arr['ru'][0]);

//2 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.(решить с помощью If, Switch и тернарный оператор).
var str = 'abcde';
const checkAfirst = str[0].includes('a') ? 'да' : 'нет';
alert (checkAfirst);


var str = 'abcde';
if (str[0] == 'b') {
	alert('Да');
} else {
	alert('Нет');
}

var str = 'abcde';
switch (str[0]) {
	case 'a': 
		alert('да');
 	break;
	default:
		alert('нет'); 
	break;
}

//3 Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	result = result * arr[i];
}
alert(result);

//4 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
var arr = [-12, -4, -1, 2, 6, 11, 21, 25];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum += arr[i];
    }
}
alert(sum);

//5 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
var arr = [1,2,3,4,5];
arr.splice (1,0, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
arr.splice (9,4);
alert(arr);

//6 Напишите функцию, которая убирает повторяющиеся значения из массива: [1, 2, 3, 1, 2] => [1, 2, 3].
var arr = [1, 2, 3, 1, 2] 
var arr2 = arr.filter((item, index) => {
    return arr.indexOf(item) === index
});
alert(arr2);

//7 Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

//для ссылочного типа данных не работает 
var arr1 = [1, 2, 3,];
var arr2 = [1, 2, 3,];

if (arr1 == arr2) {
	alert ('Массивы идентичны');
} else { alert ('Массивы не идентичны'); //выведет это значение
	}
	
//если сравнивать по значениям и оба массива в одинаковом порядке
var arr1 = [1, 2, 3,];
var arr2 = [1, 2, 3,];

if (arr1.join() == arr2.join()) {
	alert ('Массивы идентичны');
} 
else { 
	alert ('Массивы не идентичны');
	}

//8 Вывести значения всех элементов массива и соответствующие им индексы в виде объекта (использовать метод reduce).
//сonst anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70] => {0: 42, 1: 65, …};
//Так же найти и вывести на экран максимальное число массива

var arr = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
var i = 0; 
while(i < arr.length)
{
alert("Индексу " + i + " - соответствует число " + arr[i]);
i++; 
}

var arr = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
var i = 0; 
var maxi = 0; 
while(i < arr.length)
{
if (arr[i] > maxi)
	{
	maxi = arr[i]
	}
i++; 
}
alert("Максимальное число массива: " + maxi);
}
