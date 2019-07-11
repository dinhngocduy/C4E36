// //serious exs
// //6//
// let remove_dollar_sign =(s) =>{
//     let newstring = s.replace(/[$]/g,'')
//     return newstring
// }
// //7//
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//    console.log("Your function is correct")}
// else{
//    console.log("Oops, there's a bug")}
//8//
// const get_even_list=(l) => {
//     let newarr=[]
//     for(let i=0; i<l.length;i++){
//         if(i%2===0)
//         {
//             newarr.push(l[i])
//         }
//     }
//     return newarr
// }
// //9//
// even_list = get_even_list([1, 2, 5, 9, -10, 6])

// if (even_list == [2, -10, 6]) {
//    print("Your function is correct")}
// else{
//    console.log("Ooops, bugs detected")
// }
//10//

// function is_inside(point, rectangle) {
//     var flag = true;
//     if (point[0] >= rectangle[0] && point[0] <= rectangle[0] + rectangle[2] && point[1] >= rectangle[1] && point[1] <= rectangle[1] + rectangle[3]) {
//         flag = true;
//     } else {
//         flag = false;
//     }
//     return flag;
// }
// Review
//- function giúp ta không phải viết cùng một code lại nhiều lần.
//  Nó giúp các nhà lập trình viết các modular code. 
//  Các hàm cho phép một nhà lập trình phân chia một chương trình lớn thành các hàm nhỏ và dễ quản lý

//- to define/declare a function : 
// function funName() {
// 	//code
// }

//- to call/use a function :
//funName();

//- return là một từ khoá đặt ở cuối hàm với mục đích trả kết quả về để sử dụng tiếp ở những đoạn code bên ngoài
//ex: 
// // Khai báo hàm
// function tinh_tong(a, b)
// {
//     // trả về kết quả là a + b
//     return a + b;
// }

//- tùy vào mục đích mà ta dùng có return hay không có return
//thông thường ta sử dụng return ở những trường hợp cần lấy kết quả đó để xử lý tiếp

//- Hàm có tham số truyền vào:
// funName(param_1, ..., param_n){ 
//code
// };

// // to to use function from a different file other than our currently working file
// Sử dụng window.onload() => {}
//turtle
//1//
// let abc=()=>{
//     for(let i=0;i<3;i++){

//     console.log("hello world")}
// }
// abc()
// //2
// let bcd=(a,b)=>{
//     console.log("a+b=:",a+b)
// }
// bcd(5,9)
//3,4//
// let drawSquare=(length,colorline)=>{
//     color(colorline)
//     for (let i=0;i<5;i++)
//     {
//         fd(length)
//         rt(90) 
//     }
// }
// for (let i = 0; i  < 30; i ++){

//     drawSquare(i * 5, 'red')

// lt(17)

// penup()
// fd(i * 2)
// pendown()

// }
//5//
// function draw_star(length) {
//     rt(90)
//     for (i = 0; i < 5; i++) {
//         fd(length)
//         rt(144)
//     }
// }