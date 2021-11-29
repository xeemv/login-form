# login-form
Project inspiration came from Easy Tutorials on YouTube (url: https://www.youtube.com/watch?v=L5WWrGMsnpw)
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login and Registration Form</title>
  <main> <link rel="stylesheet" href="style.css">
    </main>
    <body>
        <div class="Hero"> 
            <div class="form-box">
                <div class="button-box">
                    <div id="btn"></div>
                    <button type="button" class="toggle-btn" onclick="Login()">Login<button>
                    <button type="button" class="toggle-btn" onclick="Register()">Register</button>
                </div>
        <div class="social-icons">
                    <a href="https://www.facebook.com/"><img src="/images/fb.png"></a>
                    <a href="https://twitter.com/"><img src="/images/tw.png"></a>
                    <a href="https://www.google.com/"><img src="/images/gp.png"></a>
                </div>
                <div>
                <form id="Login" class="input-group">
                    <input type="text" class="input-field" placeholder="User ID" required>
                    <input type="text" class="input-field" placeholder="Enter Password" required>
                    <input type="checkbox" class="check-box"><span>Remember Password</span>
                    <button type="submit" class="submit-btn">Login</button>
                    </form>
                <form id="Register" class="input-group">
                    <input type="text" class="input-field" placeholder="First Name" required>
                    <input type="text" class="input-field" placeholder="Last Name" required>
                    <input type="text" class="input-field" placeholder="Date of Birth" required>
                    <input type="text" class="input-field" placeholder="User ID" required>
                    <input type="email" class="input-field" placeholder="Email ID" required>
                    <input type="text" class="input-field" placeholder="Enter Password" required>
                    <input type="text" class="input-field" placeholder="Retype Password" required>
                    <input type="checkbox" class="check-box"><span>I agree to the terms and conditions</span>
                    <button type="submit" class="submit-btn">Register</button>
                    </form>
                </div>
            </div>
            <script language="javascript" type="text/javascript" src="login.js"></script>
        </div>
    
    </body>
    </html>
