<template>
    <div class="signInScreen">
        <div class="signIn">
            <div class="signIn-box">
                <h3>ModernTech Solutions</h3> <br> <hr> <br>
            </div>
            
            <!-- SIGN IN FORM -->
            <form @submit="singInForm">
                <span>Sign In</span> <br><br>
                <div class="singIn-form">
                    <div class="inputs">
                        <!-- USERNAME -->
                        <input type="text" class="username" v-model="enteredUser" :class="{'errorInput': signInError}" placeholder="Username" required>
                        <br> <br>

                        <!-- PASSWORD -->
                        <input type="password" class="password" v-model="enteredPwd" :class="{'errorInput': signInError}" placeholder="Password" required>
                        <br> <br>
                    </div>

                    <!-- SUBMIT BUTTON -->
                    <div class="cont-button">
                        <button type="submit" class="signIn-button">Sign In</button>
                    </div>
                </div>
                <br>
                <p class="error-msg" :class="{visible: signInError}">Invalid username or password</p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                correctCredentials: {
                    username: "Admin",
                    password: "Password123"
                },
                enteredUser: "",
                enteredPwd: "",
                signInError: false
            }
        },
        methods: {
            singInForm(event) {
                event.preventDefault();

                const username = this.correctCredentials.username
                const password = this.correctCredentials.password

                if (this.enteredUser.trim() === username && this.enteredPwd.trim() === password) {
                    this.signInError = false
                    this.$router.push('/overview')
                } else {
                    this.signInError = true
                }
            }
        }
    }
</script>

<style scoped>
    .signInScreen {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('@/assets/background.jpg');
        background-position: top right;
        background-repeat: no-repeat;
        animation: moving 50s infinite;
    }

    .signIn {
        margin: 0 auto;
        /* height: 70%; */
        padding: 40px;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    h3 {
        color: #1b7ad8;
        font-size: 50px;
    }

    .signIn span {
        font-size: 30px;
        font-weight: 300;
    }

    /* CSS INPUT */
    .signIn-form {
        text-align: left;
    }

    .signIn input{
        border-radius: 10px;
        width: 100%;
        cursor: text;
    }

    .inputs {
        width: 100%;
    }

    /* CSS BUTTON */
    .cont-button {
        display: flex;
        justify-content: center;
    }
    .signIn-button {
        border-radius: 15px;
        padding: 10px 15px;
        background-color: #2d4257;
        color: white;
        font-size: 20px;
        border: 1px solid #2d4257;
    }

    .signIn-button:hover {
        border-radius: 15px;    
        background-color: white;
        color: #2d4257;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
        transition: transform ease-in 2s;
    }

    /* CSS ERROR */
    .signIn p {
        font-size: 20px;
        background-color: rgb(247, 191, 186);
        padding: 15px 25px;
        border-radius: 15px;
    }
    .error-msg {
        visibility: hidden;
        opacity: 0;
        color: red;
        transition: opacity ease 0.3s;
        font-weight: 400;
    }

    .error-msg.visible {
        visibility: visible;
        opacity: 1;
    }

    .errorInput {
        border: 2px solid red;
    }

    /* KEYFRAME */
    @keyframes moving {
        50% {background-position: center}
    }

    @media (max-width: 800px) {
        .signIn {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            justify-content: center;
        }
    }
</style>