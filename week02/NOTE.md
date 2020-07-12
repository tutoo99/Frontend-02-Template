学习笔记
//反引号是功能扩展引号，允许把变量和表达式包装在${}中，来将他们嵌入到字符串里
let name = 'john';
a = `hello,${name}`;
console.log(a);
let age = 12;
ageAdd18 = `age add 18=${age + 18}`;
console.log(ageAdd18)

boolean类型仅包含两个值：true    false

null 不是一个“对不存在的object的引用”或"null指针"。仅仅代表“无，空，值未知”的特殊值。

undefined 含义是未赋值，如果一个变量已经声明，但没有赋值，那么它的值就是undefined。
原则上来说，可以为任何变量赋undefined，但不建议如此，通常使用null将一个空或未知的值写入变量，undefined仅仅用于检验，例如查看变量是否被赋值等。


typeof运算符查看存储在变量中值的数据类型
有两种形式：typeof   x    或 typeof(x)
他们都以字符串的形式返回类型的名称，特别的，对于null这种特殊值，typeof null会返回object，这个是js设计错误的地方，
