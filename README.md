
# EXPRESS WITH REDIS
  
A simple system to get how many public repo on github using express and redis

  
## Getting Started  
Pertama-tama yang harus dilakukan terlebih dahulu adalah menginstall `package.json` dengan menggunakan command jika terdapat `package-lock.json`

First thing first that should be done is to install the `package.json` file or if there's `package-lock.json` you can use this command

    npm ci
jika hanya terdapat `package.json` maka lakukan 

If there's only `package.json` file then do this command

    npm install
Aplikasi ini membutuhkan redis untuk sistem penyimpanannya, jadi install redis terlebih dahulu, pada macOS untuk instalasi bisa menggunakan 

This app is using redis to store the quantity of the repo from someone else github profile, so on macOS to install redis you need to run this command first

    brew install redis

Kemudian jika sudah maka untuk menjalankan app menggunakan command

Run this command to start the app

    npm run dev

Untuk menjalankan redis bisa menggunakan command ini pada terminal

To run redis you run this command on your terminal

    redis-cli

Tapi jika terdapat error seperti ini

If there's an error when running redis like this one

> Could not connect to Redis at 6379: Connection refused

Maka jalankan command ini pada terminal

You should run this command first at your terminal

    redis-server


  






  


