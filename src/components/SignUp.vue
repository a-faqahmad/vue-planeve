<template>
  <form @submit.prevent="handleSubmit" class="form-style">
    <h1>Sign Up Form</h1>
    <h3>First name</h3>
    <input class="form-input" name="fname" required="true" placeholder="Enter first name" v-model.lazy="fname"/>
    <h3>Last name</h3>
    <input class="form-input" name="lname" required="true" placeholder="Enter last name" v-model.lazy="lname"/>
    <h3>Phone number</h3>
    <input class="form-input" name="phone" required="true" placeholder="00000000000" v-model.lazy="phone"/>
    <h3>Email</h3>
    <input class="form-input" name="email" required="true" placeholder="abc@xyz.com" v-model.lazy.number="email"/>
    <h3>Address</h3>
    <input class="form-input" name="address" required="true" placeholder="Enter address" v-model.lazy="address"/>
    <div>
      <input class="submit-button" type="submit"/>
    </div>

  </form>
</template>

<style>

.form-style {
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 1%;
  /* background-image: url("./assets/signup.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
}

.form-input {
  width: 250px;
  height: 25px;
}

.submit-button {
  margin-top: 25px;
  color: white;
  border: solid black thin;
  background-color: red;
  width: 85px;
  height: 30px;
  cursor: pointer;
}

</style>

<script>
export default {
    methods: {
        handleSubmit() {
        console.log("First name: " + this.fname + "\nLast name: " + this.lname + "\nPhone number: "
        + this.phone + "\nEmail: " + this.email + "\nAddress: " + this.address);
        }
    },

    data() {
        return {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        address: "",
        }
    }
}
</script>

<style>

</style>