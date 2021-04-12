<template>
  <v-app 
    style="color:#FFEE07;"
  >
    
    <v-app-bar
     
      fixed
      app
      class="amber lighten-2"
    >
      <div class="ml-16">
        <Title/>
      </div>
      
      <v-spacer />
      <div>
        <Avatar
          v-show="loggedIn"
        />
        
      </div>
        <LoginButton
          v-show="!loggedIn"
        />
        
        <RegisterButton
          v-show="!loggedIn"
        />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Title from '@/components/Title'
import Avatar from '@/components/Avatar'
import LoginButton from '@/components/LoginButton'
import RegisterButton from '@/components/RegisterButton'

export default {
  components: {
    Title,
    Avatar,
    LoginButton,
    RegisterButton
  },
  data(){
    return {
      loggedIn:false
    }
  }

}
</script>
