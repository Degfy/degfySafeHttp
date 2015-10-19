## 我们致力于基于http协议提供安全的数据传输方法

### http request header

Parameter                | Example               | Description
-------------------------|-----------------------|---------------------------------
Asymmetric-Encryption    | RSA                   | method of asymmetric encryption
Symmetric-Encryption     | AES                   | method of Symmetric encryption
Degfy-Encryption-Key     | oUYsfweru239dsou239743| Key for Transmition

### 假设 
1. 存在一种不可预测的随机算法，且本算法采用 RX
2. 本算法采用的非对称加密算法为 Acry
3. 本算法采用的对称加密算法为 Scry
4. 遇到加密传输的内容为 Content

### Client端 发送数据
1. 使用RX生成随机字符串 Password
2. 使用非对称加密算法 Acry 利用公钥 PK 对 Password 加密得到密文 XPassword
3. 使用对称加密算法 Scry 利用 Password 对 Content 加密得到密文 XContent
4. 填充Http协议的数据

### Server端 解析数据

### Server端 发送数据

### Client端 解析数据



