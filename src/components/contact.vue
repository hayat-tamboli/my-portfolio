<template>
  <div id="contact">
    <h1>Get in touch</h1>
    <h2 class="desc">
      If you wanna get in touch, talk to me about a project collaboration or
      just say hi, fill up the awesome form below or send an email to<br />
      <a href="mailto:hayattamboli@gmail.com">hayat.tamboli@gmail.com</a
      ><br />and ~let's talk.
    </h2>
    <form class="forms">
      <div class="text-forms">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Jhon Doe" />
        </div>
        <div class="form-group">
          <label for="E-mail">E-mail</label>
          <input
            type="email"
            name="E-mail"
            id="E-mail"
            placeholder="somebody@example.com"
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
    <h1>Let's get social</h1>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
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
  .desc {
    padding: 0 15rem;
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
}
</style>
