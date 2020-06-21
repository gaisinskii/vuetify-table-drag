<template>
  <main class="page page--table">
    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      :loading="loading"
      item-key="id"
      :show-select="false"
      :disable-pagination="true"
      :hide-default-footer="true"
      class="page__table"
    >
      <template v-slot:body="props">
        <draggable
          :list="props.items"
          tag="tbody"
        >
          <tr
            v-for="(user, index) in props.items"
            :key="index"
          >
            <td>
              <v-icon
                small
                class="page__grab-icon"
              >
                mdi-arrow-all
              </v-icon>
            </td>
            <td> {{ index + 1 }} </td>
            <td> {{ user.id }} </td>
            <td> {{ user.name }} </td>
            <td> {{ user.username }} </td>
            <td> {{ user.email }} </td>
            <td> {{ user.website }} </td>
            <td>
              <v-icon
                small
                @click="editUser(user.id)"
              >
                mdi-pencil
              </v-icon>
            </td>
          </tr>
        </draggable>
      </template>
    </v-data-table>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Draggable from 'vuedraggable';

import api from '@/api';

import { AxiosResponse, AxiosError } from 'axios';

import { User } from '@/types/user.interface';

@Component({
  components: {
    Draggable,
  },
})
export default class PageTable extends Vue {
  private tableItems: User[] = []

  private loading = false;

  private tableHeaders = [
    { text: '', sortable: false },
    { text: '#', sortable: false },
    { text: 'ID', value: 'id', sortable: false },
    { text: 'NAME', value: 'name', sortable: false },
    {
      text: 'USERNAME', value: 'username', sortable: false,
    },
    { text: 'EMAIL', value: 'email', sortable: false },
    { text: 'WEBSITE', value: 'website', sortable: false },
    { text: 'ACTIONS', sortable: false },
  ];

  private editUser(userId: number) {
    this.$router.push({ name: 'PageEdit', params: { id: `${userId}` } });
  }

  public async fetchAllUsers() {
    this.loading = true;
    await api
      .get('/users')
      .then((data: AxiosResponse) => {
        const computedArrayOfUsers = data.data.map((user: User) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          website: user.website,
        }));
        this.tableItems = computedArrayOfUsers;
      })
      .catch((error: AxiosError) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  created() {
    this.fetchAllUsers();
  }
}
</script>

<style lang="scss">
.page--table {
  .page {
    &__table {
      margin-top: 20px;
    }
    &__grab-icon {
      cursor: move;
    }
  }
}
</style>
