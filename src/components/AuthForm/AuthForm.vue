<template>
  <div class="auth__container">
    <div class="auth__fields">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        hide-details
        class="auth__input"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        hide-details
        class="auth__input"
      ></v-text-field>
    </div>

    <div class="auth__buttons">
      <v-btn v-if="props.type === 'login'" @click="handleSubmit" class="auth__button">
        Log In
      </v-btn>
      <v-btn v-if="props.type === 'signup'" @click="handleSubmit" class="auth__button">
        Sign Up
      </v-btn>
    </div>

    <p v-if="props.type === 'login'" class="auth__text">
      Don't have an account? Sign up
      <router-link class="auth__link" :to="signUpPath"> here</router-link>
    </p>
    <p v-if="props.type === 'signup'" class="auth__text">
      Already have an account? Sign in
      <router-link class="auth__link" :to="signInPath"> here</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { RoutePaths } from '@/constants/route.constants'
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const signUpPath = RoutePaths.SIGNUP
const signInPath = RoutePaths.LOGIN

const email = ref('')
const password = ref('')

function handleSubmit() {
  console.log('email: ', email.value)
  console.log('password: ', password.value)
}
</script>

<style src="./AuthForm.style.scss" scoped></style>
