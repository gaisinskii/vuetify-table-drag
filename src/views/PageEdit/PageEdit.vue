<template>
  <main class="page page--edit">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
      class="page__loader"
    />
    <v-form
      v-else
      v-model="formIsValid"
      class="page__form"
      @submit.prevent="updateUser()"
    >
      <v-text-field
        v-for="(value, key, index) in user"
        :key="index"
        v-model="user[key]"
        :label="key.toUpperCase()"
        class="page__input"
        outlined
      >
      </v-text-field>
        <v-btn
          type="sumbit"
          color="green"
          class="page__btn"
          dark
        >
          Update
        </v-btn>
    </v-form>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import api from '@/api';

import { AxiosResponse, AxiosError } from 'axios';

import { User } from '@/types/user.interface';

@Component({})
export default class PageEdit extends Vue {
  private loading = false;

  private formIsValid = true;

  private user = {} as User;

  private async fetchSingleUser(id: string) {
    this.loading = true;
    await api
      .get(`/users/${id}`)
      .then((data: AxiosResponse) => {
        const computedUser = (({
          id: userId, name, username, email, website,
        }: User) => ({
          id: userId,
          name,
          username,
          email,
          website,
        }))(data.data);
        this.user = computedUser;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  created() {
    if (this.$route.params.id) {
      this.fetchSingleUser(this.$route.params.id);
    }
  }
}
</script>

<style lang="scss">
.page--edit {
  .page {
    &__form {
      max-width: 400px;
      margin: 0 auto;
      margin-top: 20px;
    }
    &__btn {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
