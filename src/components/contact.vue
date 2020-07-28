<template>
  <div id="contact">
    <h1>Get in touch</h1>
    <h2 class="desc">
      If you wanna get in touch, talk to me about a project collaboration or
      just say hi, fill up the awesome form below or send an email to
      <br />
      <a href="mailto:hayattamboli@gmail.com">hayat.tamboli@gmail.com</a>
      <br />and ~let's talk.
    </h2>
    <form v-if="!this.submitted" class="forms" @submit.prevent="handleSubmit">
      <div class="text-forms">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jhon Doe"
            v-model="feedback.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="E-mail">E-mail</label>
          <input
            type="email"
            name="E-mail"
            id="E-mail"
            placeholder="somebody@example.com"
            v-model="feedback.email"
            required
          />
        </div>
      </div>
      <div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            v-model="feedback.message"
            required
          ></textarea>
        </div>
      </div>
      <button
        style="background: #2257ea;color:#f7f7f7;font-size: 1.2rem"
        type="submit"
      >
        Submit
      </button>
    </form>
    <h2 v-if="this.submitted">😀 Your form has been submitted</h2>
    <h1 style="text-align: center;">Let's get social</h1>
    <div class="social-links">
      <a rel="noreferrer" href="https://www.linkedin.com/in/hayat-tamboli/">
        <img src="../assets/linkedin-icon.svg" height="75rem" alt="LinkedIn" />
      </a>
      <a rel="noreferrer" href="https://www.github.com/hayat-tamboli/">
        <img src="../assets/github-1.svg" height="75rem" alt="github" />
      </a>
      <a rel="noreferrer" href="https://www.facebook.com/hayat.tamboli/">
        <img src="../assets/facebook-3.svg" height="75rem" alt="facebook" />
      </a>
      <!-- <a rel="noreferrer" href="https://www.behance.net/hayattamboli">
        <img src="../assets/behance-1.svg" height="75rem" alt="Behance" />
      </a> -->
      <a rel="noreferrer" href="https://www.dribbble.com/hayattamboli">
        <img src="../assets/dribbble-icon-1.svg" height="75rem" alt="dribble" />
      </a>
      <a rel="noreferrer" href="https://twitter.com/HayatTamboli">
        <img src="../assets/twitter-3.svg" height="75rem" alt="twitter" />
      </a>
      <a rel="noreferrer" href="https://www.instagram.com/hayattamboli.work/">
        <img
          src="../assets/instagram-2016.svg"
          height="75rem"
          alt="instagram"
        />
      </a>
      <a
        rel="noreferrer"
        href="https://stackoverflow.com/users/13782112/hayat-tamboli"
      >
        <img
          src="../assets/stack-overflow.svg"
          height="75rem"
          alt="stackoverflow"
        />
      </a>
      <a rel="noreferrer" href="https://www.hackerrank.com/hayat_tamboli">
        <img src="../assets/hackerrank.svg" height="90rem" alt="hackerrank" />
      </a>
      <a rel="noreferrer" href="https://codepen.io/hayattamboli">
        <img src="../assets/codepen.svg" height="64rem" alt="codepen" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      feedback: {
        name: "",
        email: "",
        message: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      // Send data to the server
      this.$http
        .post(
          "https://my-portfolio-hayat.firebaseio.com/feedback.json",
          this.feedback
        )
        .then(function(data) {
          console.log("Hi there!😁", data);
        });
      this.submitted = true;
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: #2257ea;
#contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem 10rem;
  .desc {
    text-align: center;
    a {
      text-decoration: none;
      color: $blue;
    }
  }
  .forms {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .text-forms {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    input {
      width: 15rem;
      border: none;
      padding: 1rem 4rem 1rem 0.5rem;
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2) inset;
      border-radius: 6px;
      &::placeholder {
        font-family: "Poppins", sans-serif;
      }
    }
    textarea {
      border: none;
      box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2) inset;
      border-radius: 6px;
      padding: 1rem 4rem 1rem 0.5rem;
      &::placeholder {
        font-family: "Poppins", sans-serif;
      }
    }
  }
  .social-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0;
    a {
      padding: 1rem 2rem;
      opacity: 0.8;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: translateY(-10px);
        opacity: 1;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  #contact {
    padding: 1rem 1rem;
  }
  .forms {
    .text-forms {
      flex-direction: column;
    }
  }
}
</style>
