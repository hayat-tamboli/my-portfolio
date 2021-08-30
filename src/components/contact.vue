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
    <form
      v-if="!this.submitted"
      class="forms"
      action="https://formspree.io/xqkyjjvv"
      method="POST"
    >
      <!-- @submit.prevent="handleSubmit" -->
      <div class="text-forms">
        <div
          class="form-group"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-easing="ease-in-sine"
        >
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
        <div
          class="form-group"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
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
        <div
          class="form-group"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-easing="ease-in-sine"
        >
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
        message: "",
      },
      submitted: false,
    };
  },
  // methods: {
  //   handleSubmit() {
  //     // Send data to the server
  //     this.$http
  //       .post(
  //         "https://my-portfolio-hayat.firebaseio.com/feedback.json",
  //         this.feedback
  //       )
  //       .then(function(data) {
  //         console.log("Hi there!😁", data);
  //       });
  //     this.submitted = true;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
$blue: #2c60e6;
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
  .social-links {
    padding: 1rem 0rem;
    a {
      padding: 1rem 0rem;
      img {
        padding: 1rem 1rem;
      }
    }
  }
}
</style>
