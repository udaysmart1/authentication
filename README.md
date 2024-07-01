

implementation of  Authentication API in Node using JWT, express, and MongoDB. 


### 1. Packages Required


You will be needing these following 'npm' packages. 

1.   **mongoose**


2.  **jsonwebtoken**

3. **body-parser**


4. **bcryptjs**


5. **express-validator**


6.**express**


 ### 2. Pre requirments

You should have prior knowledge of `javascript basics`, `nodejs`. Knowledge of ES6 syntax is a plus. And  **nodejs** should be installed on your system. 

----
----

### 3. Setup MongoDB Database

We will be using MongoDB Database to store our users. You can use either a cloud MongoDB server or a local MongoDB server. 

In this CodeLab, we will be using a Cloud MongoDB server known as [mongodb](https://account.mongodb.com/account/login?signedOut=true).

So, First, go ahead and signup on mLab. And follow the below steps. 

1. After successful signup, Click on **Create** Button on home page. 

2. give name
3.  click on **Users** and add a user by clicking on **Add Database User**.and  Now, choose any cloud provider for example AWS. In the **Plan Type** choose the free

4. Select the region(any) and click continue. its  free of cost. 

5. Enter a DB name(any). I am using **user-auth**. Click continue and then submit the order on the next page.  

6. Now, You will be re-directed to the homepage. Select your DB i.e user-auth.

7. Copy the standard MongoDB URI.  


8. Now, you need to add a user to your database. From the 5 tabs below, 

Now, you have got your database user. Replace the <dbuser> && <dbpassword> with your DB username and password. 


```
mongodb+srv://smart:Smn812345@cluster0.qnudkim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

```

-
#### How to Test the application? 

PostMan is required for Testing the API. If you don't have PostMan installed first, install it. 

1. First, register the user or login if you are already registered. 

2. From step 1, you will get a token. Copy that token and put in the **header**. 

3. Hit Submit


